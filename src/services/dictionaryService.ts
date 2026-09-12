import { findLocalDictEntry, type LocalDictEntry } from '../data/dictionaryData';

export interface UnifiedDictResult {
  word: string;
  phonetic?: string;
  partOfSpeech?: string;
  definitionEn?: string;
  translationVi?: string;
  examples?: string[];
  audioUrl?: string;
  isFromCache?: boolean;
  source: 'local' | 'api';
}

class DictionaryService {
  private cache = new Map<string, UnifiedDictResult>();

  async lookup(wordToSearch: string, timeoutMs: number = 3000): Promise<UnifiedDictResult | null> {
    const cleanWord = wordToSearch.trim().toLowerCase().replace(/[^a-zA-Z\s-]/g, '');
    if (!cleanWord) return null;

    // 1. Check in-memory cache
    if (this.cache.has(cleanWord)) {
      const cached = this.cache.get(cleanWord)!;
      return { ...cached, isFromCache: true };
    }

    // 2. Check local offline dictionary (instant 0ms)
    const localMatch: LocalDictEntry | null = findLocalDictEntry(cleanWord);
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
      this.cache.set(cleanWord, result);
      return result;
    }

    // 3. Online fallback with timeout controller
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const transRes = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanWord)}&langpair=en|vi`,
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);

      if (transRes.ok) {
        const transJson = await transRes.json();
        const translationText = transJson?.responseData?.translatedText;
        if (translationText && translationText.toLowerCase() !== cleanWord) {
          const result: UnifiedDictResult = {
            word: cleanWord,
            partOfSpeech: 'từ vựng',
            translationVi: translationText,
            definitionEn: `Từ vựng tiếng Anh: "${cleanWord}"`,
            source: 'api'
          };
          this.cache.set(cleanWord, result);
          return result;
        }
      }
      return null;
    } catch {
      clearTimeout(timeoutId);
      return null;
    }
  }

  speak(text: string): void {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }
}

export const dictionaryService = new DictionaryService();
