import { findLocalDictEntry, type LocalDictEntry } from '../data/dictionaryData';

export interface DictEntryGroup {
  pos: string;
  terms: string[];
}

export interface UnifiedTranslationResult {
  original: string;
  translatedText: string;
  phonetic?: string;
  dictEntries?: DictEntryGroup[];
  detectedLang?: string;
  source: 'google_translate' | 'cache' | 'local';
}

export interface UnifiedDictResult {
  word: string;
  phonetic?: string;
  partOfSpeech?: string;
  definitionEn?: string;
  translationVi?: string;
  examples?: string[];
  alternativeTranslations?: string[];
  dictEntries?: DictEntryGroup[];
  audioUrl?: string;
  isFromCache?: boolean;
  source: 'local' | 'api';
}

// Map English POS names from Google Translate to Vietnamese
const POS_VI_MAP: Record<string, string> = {
  noun: 'Danh từ',
  verb: 'Động từ',
  adjective: 'Tính từ',
  adverb: 'Trạng từ',
  preposition: 'Giới từ',
  conjunction: 'Liên từ',
  pronoun: 'Đại từ',
  interjection: 'Thán từ',
  phrase: 'Cụm từ'
};

class DictionaryService {
  private dictCache = new Map<string, UnifiedDictResult>();
  private transCache = new Map<string, UnifiedTranslationResult>();

  /**
   * Unified external translation engine powered by Google Translate API
   */
  async translate(
    textToTranslate: string,
    fromLang: string = 'auto',
    toLang: string = 'vi',
    timeoutMs: number = 5000
  ): Promise<UnifiedTranslationResult> {
    const trimmed = textToTranslate.trim();
    if (!trimmed) {
      return {
        original: '',
        translatedText: '',
        source: 'google_translate'
      };
    }

    const cacheKey = `${fromLang}:${toLang}:${trimmed.toLowerCase()}`;
    if (this.transCache.has(cacheKey)) {
      return { ...this.transCache.get(cacheKey)!, source: 'cache' };
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&dt=bd&dt=rm&q=${encodeURIComponent(trimmed)}`;
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();

      // 1. Translated text chunks combined
      let translatedText = '';
      if (Array.isArray(data[0])) {
        translatedText = data[0]
          .filter((item: any) => item && typeof item[0] === 'string')
          .map((item: any) => item[0])
          .join('');
      }

      // 2. Phonetic / Transliteration
      let phonetic: string | undefined = undefined;
      if (Array.isArray(data[0])) {
        const phoneticChunk = data[0].find((item: any) => item && item[3]);
        if (phoneticChunk && typeof phoneticChunk[3] === 'string') {
          phonetic = phoneticChunk[3];
        }
      }

      // 3. Alternative dictionary entries
      const dictEntries: DictEntryGroup[] = [];
      if (Array.isArray(data[1])) {
        data[1].forEach((posGroup: any) => {
          if (Array.isArray(posGroup) && posGroup[0] && Array.isArray(posGroup[1])) {
            const rawPos = String(posGroup[0]).toLowerCase();
            const posVi = POS_VI_MAP[rawPos] || rawPos;
            const terms = posGroup[1].filter((t: any) => typeof t === 'string');
            dictEntries.push({ pos: posVi, terms });
          }
        });
      }

      const detectedLang = data[2] || fromLang;

      const result: UnifiedTranslationResult = {
        original: trimmed,
        translatedText: translatedText || trimmed,
        phonetic,
        dictEntries: dictEntries.length > 0 ? dictEntries : undefined,
        detectedLang,
        source: 'google_translate'
      };

      this.transCache.set(cacheKey, result);
      return result;
    } catch {
      clearTimeout(timeoutId);
      // Fallback to local dictionary if it's a single word
      const cleanWord = trimmed.toLowerCase().replace(/[^a-zA-Z\s-]/g, '');
      const local = findLocalDictEntry(cleanWord);
      if (local) {
        return {
          original: trimmed,
          translatedText: local.vi,
          phonetic: local.phonetic,
          source: 'local'
        };
      }

      return {
        original: trimmed,
        translatedText: trimmed,
        source: 'google_translate'
      };
    }
  }

  /**
   * Unified word & phrase dictionary lookup
   */
  async lookup(wordToSearch: string, timeoutMs: number = 4000): Promise<UnifiedDictResult | null> {
    const rawClean = wordToSearch.trim();
    if (!rawClean) return null;

    const cacheKey = rawClean.toLowerCase();
    if (this.dictCache.has(cacheKey)) {
      const cached = this.dictCache.get(cacheKey)!;
      return { ...cached, isFromCache: true };
    }

    // Check local database first for rich CEFR / example metadata
    const cleanSingleWord = rawClean.toLowerCase().replace(/[^a-zA-Z\s-]/g, '');
    const localMatch: LocalDictEntry | null = cleanSingleWord ? findLocalDictEntry(cleanSingleWord) : null;

    try {
      // Query unified Google Translate API
      const translation = await this.translate(rawClean, 'auto', 'vi', timeoutMs);

      // Collect alternative translations if available
      const alternatives: string[] = [];
      if (translation.dictEntries) {
        translation.dictEntries.forEach(g => {
          alternatives.push(...g.terms);
        });
      }

      const primaryPos = translation.dictEntries?.[0]?.pos || localMatch?.pos || (rawClean.includes(' ') ? 'Cụm từ' : 'Từ vựng');

      const result: UnifiedDictResult = {
        word: rawClean,
        phonetic: localMatch?.phonetic || translation.phonetic || (cleanSingleWord ? `/${cleanSingleWord}/` : undefined),
        partOfSpeech: primaryPos,
        definitionEn: localMatch?.enDef || `Thuật ngữ tiếng Anh: "${rawClean}"`,
        translationVi: localMatch?.vi || translation.translatedText,
        examples: localMatch?.examples || [
          `Ví dụ: She used the expression "${rawClean}" in her presentation.`
        ],
        alternativeTranslations: alternatives.slice(0, 8),
        dictEntries: translation.dictEntries,
        source: localMatch ? 'local' : 'api'
      };

      this.dictCache.set(cacheKey, result);
      return result;
    } catch {
      // If network fails, use local match if available
      if (localMatch) {
        const result: UnifiedDictResult = {
          word: localMatch.word,
          phonetic: localMatch.phonetic,
          partOfSpeech: localMatch.pos,
          definitionEn: localMatch.enDef,
          translationVi: localMatch.vi,
          examples: localMatch.examples,
          source: 'local'
        };
        this.dictCache.set(cacheKey, result);
        return result;
      }
      return null;
    }
  }

  /**
   * Native browser SpeechSynthesis voice pronunciation
   */
  speak(text: string, lang: string = 'en-US'): void {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }
}

export const dictionaryService = new DictionaryService();
