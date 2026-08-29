import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Volume2, 
  X, 
  Languages, 
  Loader2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { findLocalDictEntry } from '../data/dictionaryData';

interface DictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWord?: string;
}

interface DictionaryResult {
  word: string;
  phonetic?: string;
  partOfSpeech?: string;
  definitionEn?: string;
  translationVi?: string;
  examples?: string[];
  audioUrl?: string;
}

export const DictionaryModal: React.FC<DictionaryModalProps> = ({
  isOpen,
  onClose,
  initialWord = ''
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<DictionaryResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const target = initialWord.trim();
      setSearchTerm(target);
      if (target) {
        handleSearchWord(target);
      } else {
        setResult(null);
        setError(null);
      }
    }
  }, [initialWord, isOpen]);

  const handleSearchWord = async (wordToSearch: string) => {
    const cleanWord = wordToSearch.trim().toLowerCase().replace(/[^a-zA-Z\s-]/g, '');
    if (!cleanWord) return;

    setLoading(true);
    setError(null);

    // 1. Check Local Dictionary (Instant 0ms)
    const localMatch = findLocalDictEntry(cleanWord);
    if (localMatch) {
      setResult({
        word: localMatch.word,
        phonetic: localMatch.phonetic,
        partOfSpeech: localMatch.pos,
        definitionEn: localMatch.enDef,
        translationVi: localMatch.vi,
        examples: localMatch.examples
      });
      setLoading(false);
      return;
    }

    // 2. Fast Online API Fetch with 2-second timeout (Prevents any lagging)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    try {
      const transRes = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanWord)}&langpair=en|vi`,
        { signal: controller.signal }
      );
      
      clearTimeout(timeoutId);

      let translationText = '';
      if (transRes.ok) {
        const transJson = await transRes.json();
        if (transJson.responseData && transJson.responseData.translatedText) {
          translationText = transJson.responseData.translatedText;
        }
      }

      if (translationText) {
        setResult({
          word: cleanWord,
          partOfSpeech: 'từ vựng',
          translationVi: translationText,
          definitionEn: `Từ vựng tiếng Anh: "${cleanWord}"`
        });
      } else {
        setError(`Chưa tìm thấy bản dịch cho từ "${cleanWord}". Thử kiểm tra lại chính tả.`);
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      setError(`Chưa tìm thấy từ "${cleanWord}" trong từ điển.`);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeechPronunciation = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const wordToSay = result?.word || searchTerm;
      if (!wordToSay) return;
      const utterance = new SpeechSynthesisUtterance(wordToSay);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.55)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 120,
      padding: '20px'
    }}>
      <div className="glass-card animate-fade-in" style={{
        padding: '32px',
        maxWidth: '560px',
        width: '100%',
        position: 'relative',
        boxShadow: 'var(--shadow-hover)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-subtle)',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-muted)'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{
            padding: '10px',
            borderRadius: '12px',
            background: 'var(--brand-gradient)',
            color: '#fff'
          }}>
            <Languages size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>Tra Từ Điển & Dịch Nhanh</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tra từ điển Anh - Việt tức thì</span>
          </div>
        </div>

        {/* Search Input Form */}
        <form onSubmit={(e) => { e.preventDefault(); handleSearchWord(searchTerm); }} style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Nhập từ cần tra (VD: protect, sustainable, environment)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-subtle)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '0 22px' }}>
            {loading ? <Loader2 size={18} className="animate-spin" /> : 'Tra từ'}
          </button>
        </form>

        {/* Result Container */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
            <Loader2 size={28} style={{ animation: 'spin 1s linear infinite', margin: '0 auto 8px' }} />
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Đang tra cứu từ điển...</p>
          </div>
        )}

        {error && !loading && (
          <div style={{
            padding: '14px 18px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--danger-bg)',
            color: 'var(--danger)',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {result && !loading && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Word Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '14px' }}>
              <div>
                <h4 style={{ fontSize: '1.65rem', fontWeight: 800, textTransform: 'capitalize', color: 'var(--brand-primary)', margin: 0 }}>
                  {result.word}
                </h4>
                {result.phonetic && (
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontFamily: 'monospace', fontWeight: 600 }}>
                    {result.phonetic} {result.partOfSpeech && <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 800, background: 'var(--bg-subtle)', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px' }}>{result.partOfSpeech}</span>}
                  </span>
                )}
              </div>

              <button
                onClick={handleSpeechPronunciation}
                className="btn btn-secondary"
                style={{ borderRadius: '50%', width: '44px', height: '44px', padding: 0 }}
                title="Nghe phát âm chuẩn"
              >
                <Volume2 size={22} color="var(--brand-primary)" />
              </button>
            </div>

            {/* Translation Box */}
            <div style={{
              background: 'var(--success-bg)',
              padding: '18px 22px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--success-border)'
            }}>
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--success)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} /> DỊCH NGHĨA TIẾNG VIỆT:
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.4 }}>
                {result.translationVi}
              </div>
            </div>

            {/* Definition */}
            {result.definitionEn && (
              <div style={{ background: 'var(--bg-subtle)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', fontSize: '0.92rem' }}>
                <strong style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Giải thích / Định nghĩa:</strong>
                <p style={{ margin: 0, lineHeight: 1.5, color: 'var(--text-main)' }}>{result.definitionEn}</p>
              </div>
            )}

            {/* Examples */}
            {result.examples && result.examples.length > 0 && (
              <div>
                <strong style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>Ví dụ:</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {result.examples.map((ex, i) => (
                    <div key={i} style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ArrowRight size={14} color="var(--brand-primary)" /> "{ex}"
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
