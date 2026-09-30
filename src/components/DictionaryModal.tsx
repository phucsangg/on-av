import React, { useState, useEffect, useCallback } from 'react';
import { 
  Search, 
  Volume2, 
  X, 
  Languages, 
  Loader2, 
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';
import { dictionaryService, type UnifiedDictResult } from '../services/dictionaryService';

interface DictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWord?: string;
}

export const DictionaryModal: React.FC<DictionaryModalProps> = ({
  isOpen,
  onClose,
  initialWord = ''
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<UnifiedDictResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSearchWord = useCallback(async (textToSearch: string) => {
    const query = textToSearch.trim();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const match = await dictionaryService.lookup(query);
      if (match) {
        setResult(match);
      } else {
        // Fallback to direct translation if lookup didn't yield structured result
        const trans = await dictionaryService.translate(query, 'auto', 'vi');
        if (trans.translatedText) {
          setResult({
            word: query,
            phonetic: trans.phonetic,
            partOfSpeech: query.includes(' ') ? 'Cụm từ / Câu' : 'Từ vựng',
            translationVi: trans.translatedText,
            dictEntries: trans.dictEntries,
            source: 'api'
          });
        } else {
          setError(`Chưa thể dịch nội dung "${query.length > 40 ? query.substring(0, 40) + '...' : query}".`);
        }
      }
    } catch {
      setError(`Lỗi tra cứu nội dung. Vui lòng kiểm tra lại kết nối mạng.`);
    } finally {
      setLoading(false);
    }
  }, []);

  // Sync searchTerm when initialWord prop changes
  const [prevInitial, setPrevInitial] = useState<string>(initialWord);
  if (initialWord !== prevInitial) {
    setPrevInitial(initialWord);
    setSearchTerm(initialWord);
  }

  useEffect(() => {
    if (!isOpen) return;
    const target = initialWord.trim();
    let isCancelled = false;
    Promise.resolve().then(async () => {
      if (isCancelled) return;
      if (!target) {
        setResult(null);
        setError(null);
      } else {
        await handleSearchWord(target);
      }
    });
    return () => {
      isCancelled = true;
    };
  }, [initialWord, isOpen, handleSearchWord]);

  const handleSpeechPronunciation = () => {
    const textToSay = result?.word || searchTerm;
    if (textToSay) {
      dictionaryService.speak(textToSay);
    }
  };

  const handleCopyTranslation = () => {
    if (result?.translationVi) {
      navigator.clipboard.writeText(result.translationVi);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  const isLongText = searchTerm.length > 50 || searchTerm.includes('\n');

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 120,
      padding: '16px'
    }}>
      <div className="card animate-fade-in" style={{
        padding: '24px 28px',
        maxWidth: '620px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: 'var(--shadow-modal)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--color-surface)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--color-surface-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xs)',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-text-secondary)',
            transition: 'all 0.15s ease'
          }}
          title="Đóng cửa sổ"
        >
          <X size={15} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '18px', paddingRight: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-primary-subtle)',
              color: 'var(--color-primary)'
            }}>
              <Languages size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                Tra Từ Điển & Dịch Thuật
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                <span style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  background: 'rgba(79, 70, 229, 0.1)',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={11} /> Nguồn: Google Translate API
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Anh - Việt tức thì
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search / Translation Input Form */}
        <form onSubmit={(e) => { e.preventDefault(); handleSearchWord(searchTerm); }} style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', marginBottom: '10px' }}>
            {isLongText ? (
              <textarea
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Nhập từ, cụm từ hoặc đoạn văn bản tiếng Anh cần dịch..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--border-light)',
                  background: 'var(--bg-subtle)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  lineHeight: 1.5
                }}
              />
            ) : (
              <div style={{ position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Nhập từ, cụm từ hoặc câu tiếng Anh cần tra..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 42px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-light)',
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {searchTerm.length > 0 ? `${searchTerm.length} ký tự` : 'Hỗ trợ tra từ đơn, cụm từ & nguyên câu'}
            </span>

            <div style={{ display: 'flex', gap: '8px' }}>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="btn btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                >
                  Xóa
                </button>
              )}
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ padding: '6px 20px', fontSize: '0.88rem' }}
                disabled={loading || !searchTerm.trim()}
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : 'Tra / Dịch'}
              </button>
            </div>
          </div>
        </form>

        {/* Loading Spinner */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--text-muted)' }}>
            <Loader2 size={32} style={{ animation: 'spin 1s linear infinite', margin: '0 auto 10px', color: 'var(--brand-primary)' }} />
            <p style={{ margin: 0, fontSize: '0.92rem', fontWeight: 600 }}>Đang dịch & tra cứu từ điển...</p>
          </div>
        )}

        {/* Error Notice */}
        {error && !loading && (
          <div style={{
            padding: '14px 18px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--danger-bg)',
            color: 'var(--danger)',
            fontSize: '0.9rem',
            textAlign: 'center',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            {error}
          </div>
        )}

        {/* Result Container */}
        {result && !loading && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Word / Phrase Header */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '14px',
              gap: '12px'
            }}>
              <div>
                <h4 style={{ 
                  fontSize: result.word.length > 30 ? '1.25rem' : '1.55rem', 
                  fontWeight: 800, 
                  color: 'var(--brand-primary)', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  {result.word}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', flexWrap: 'wrap' }}>
                  {result.phonetic && (
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontFamily: 'monospace', fontWeight: 600 }}>
                      {result.phonetic}
                    </span>
                  )}
                  {result.partOfSpeech && (
                    <span style={{
                      textTransform: 'uppercase',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      background: 'var(--bg-subtle)',
                      color: 'var(--text-secondary)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-light)'
                    }}>
                      {result.partOfSpeech}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleSpeechPronunciation}
                className="btn btn-secondary"
                style={{ borderRadius: '50%', width: '42px', height: '42px', padding: 0, flexShrink: 0 }}
                title="Nghe phát âm chuẩn giọng bản xứ"
              >
                <Volume2 size={20} color="var(--brand-primary)" />
              </button>
            </div>

            {/* Translation Box */}
            <div style={{
              background: 'var(--success-bg)',
              padding: '18px 20px',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--success-border)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  color: 'var(--success)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <CheckCircle2 size={16} /> BẢN DỊCH TIẾNG VIỆT:
                </div>

                <button
                  type="button"
                  onClick={handleCopyTranslation}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: copied ? 'var(--success)' : 'var(--text-muted)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    cursor: 'pointer'
                  }}
                  title="Sao chép bản dịch"
                >
                  {copied ? <Check size={13} color="var(--success)" /> : <Copy size={13} />}
                  <span>{copied ? 'Đã chép' : 'Sao chép'}</span>
                </button>
              </div>

              <div style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.45 }}>
                {result.translationVi}
              </div>
            </div>

            {/* Alternative Terms & POS Breakdown */}
            {result.dictEntries && result.dictEntries.length > 0 && (
              <div style={{
                background: 'var(--bg-subtle)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                border: '1px solid var(--border-light)'
              }}>
                <strong style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  Các nghĩa theo từ loại:
                </strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {result.dictEntries.map((group, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        background: 'rgba(79, 70, 229, 0.12)',
                        color: 'var(--brand-primary)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        minWidth: '65px',
                        textAlign: 'center'
                      }}>
                        {group.pos}
                      </span>
                      <span style={{ color: 'var(--text-main)', fontWeight: 600, flex: 1 }}>
                        {group.terms.slice(0, 6).join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Definition (if available) */}
            {result.definitionEn && !result.dictEntries && (
              <div style={{ background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                <strong style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '4px', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  Định nghĩa tiếng Anh:
                </strong>
                <p style={{ margin: 0, lineHeight: 1.5, color: 'var(--text-main)' }}>{result.definitionEn}</p>
              </div>
            )}

            {/* Examples (if available) */}
            {result.examples && result.examples.length > 0 && (
              <div style={{ padding: '0 4px' }}>
                <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Ví dụ ngữ cảnh:
                </strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {result.examples.map((ex, i) => (
                    <div key={i} style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ArrowRight size={13} color="var(--brand-primary)" style={{ flexShrink: 0 }} /> "{ex}"
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

