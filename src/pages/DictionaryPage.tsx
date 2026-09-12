import React, { useState } from 'react';
import { 
  Search, 
  Volume2, 
  Bookmark, 
  BookmarkCheck, 
  Globe, 
  Trash2,
  Languages,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import type { SavedWord } from '../types/quiz';
import { dictionaryService } from '../services/dictionaryService';

interface DictionaryPageProps {
  savedWords: SavedWord[];
  onSaveWord: (word: SavedWord) => void;
  onRemoveWord: (id: string) => void;
}

export const DictionaryPage: React.FC<DictionaryPageProps> = ({
  savedWords,
  onSaveWord,
  onRemoveWord
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'lookup' | 'saved' | 'flashcards'>('lookup');
  const [savedSearchQuery, setSavedSearchQuery] = useState('');

  // Flashcard state
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [rememberedCount, setRememberedCount] = useState<number>(0);

  // Search & Result states
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [notFoundWord, setNotFoundWord] = useState<string>('');
  const [wordResult, setWordResult] = useState<{
    word: string;
    phonetic?: string;
    partOfSpeech?: string;
    definition: string;
    translation: string;
    example?: string;
  } | null>(null);

  const handleSearch = async (e?: React.FormEvent, targetWord?: string) => {
    if (e) e.preventDefault();
    const query = targetWord || searchTerm;
    const cleanWord = query.trim().toLowerCase();
    if (!cleanWord) return;

    setIsSearching(true);
    setIsNotFound(false);

    // 1. Query unified dictionary service (in-memory cache + offline database + online fallback)
    try {
      const match = await dictionaryService.lookup(cleanWord);
      if (match) {
        setWordResult({
          word: match.word,
          phonetic: match.phonetic || `/${cleanWord}/`,
          partOfSpeech: match.partOfSpeech || 'từ vựng',
          definition: match.definitionEn || `Từ vựng tiếng Anh: "${cleanWord}"`,
          translation: match.translationVi || `Bản dịch Tiếng Việt cho từ "${cleanWord}".`,
          example: (match.examples && match.examples[0]) || `Ví dụ áp dụng từ "${cleanWord}".`
        });
        setIsSearching(false);
        return;
      }
    } catch {
      // Fallback
    }

    // 2. Word not found
    setWordResult(null);
    setNotFoundWord(cleanWord);
    setIsNotFound(true);
    setIsSearching(false);
  };

  const handlePlayAudio = (text: string) => {
    dictionaryService.speak(text);
  };

  const isSaved = wordResult ? savedWords.some(w => w.word.toLowerCase() === wordResult.word.toLowerCase()) : false;

  const handleToggleSaveCurrent = () => {
    if (!wordResult) return;
    if (isSaved) {
      const found = savedWords.find(w => w.word.toLowerCase() === wordResult.word.toLowerCase());
      if (found) onRemoveWord(found.id);
    } else {
      onSaveWord({
        id: `word-${Date.now()}`,
        word: wordResult.word,
        phonetic: wordResult.phonetic,
        partOfSpeech: wordResult.partOfSpeech,
        definition: wordResult.definition,
        translation: wordResult.translation,
        example: wordResult.example,
        savedAt: new Date().toISOString()
      });
    }
  };

  const filteredSavedWords = savedWords.filter(w => 
    w.word.toLowerCase().includes(savedSearchQuery.toLowerCase()) ||
    w.translation.toLowerCase().includes(savedSearchQuery.toLowerCase())
  );

  const currentFlashcard = savedWords[flashcardIndex];

  const handleNextFlashcard = (isRemembered: boolean) => {
    if (isRemembered) setRememberedCount(prev => prev + 1);
    setIsFlipped(false);
    if (flashcardIndex < savedWords.length - 1) {
      setFlashcardIndex(prev => prev + 1);
    } else {
      setFlashcardIndex(0);
    }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Page Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '28px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              padding: '8px 12px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--brand-gradient)',
              color: '#fff'
            }}>
              <Languages size={22} />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              Tra Cứu Từ Điển & Ngữ Pháp 📖
            </h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginTop: '6px' }}>
            Tra cứu phát âm chuẩn, từ loại, định nghĩa Tiếng Anh & bản dịch Tiếng Việt chi tiết. Ôn tập bằng thẻ Flashcard 3D sinh động.
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{
          display: 'flex',
          background: 'var(--bg-subtle)',
          padding: '4px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light)'
        }}>
          <button
            onClick={() => setActiveTab('lookup')}
            style={{
              padding: '8px 16px',
              fontSize: '0.875rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: activeTab === 'lookup' ? 'var(--bg-card)' : 'transparent',
              color: activeTab === 'lookup' ? 'var(--brand-primary)' : 'var(--text-muted)',
              boxShadow: activeTab === 'lookup' ? 'var(--shadow-sm)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            🔍 Tra Từ Mới
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            style={{
              padding: '8px 16px',
              fontSize: '0.875rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: activeTab === 'saved' ? 'var(--bg-card)' : 'transparent',
              color: activeTab === 'saved' ? 'var(--brand-primary)' : 'var(--text-muted)',
              boxShadow: activeTab === 'saved' ? 'var(--shadow-sm)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            🔖 Sổ Từ Vựng ({savedWords.length})
          </button>

          <button
            onClick={() => {
              setActiveTab('flashcards');
              setFlashcardIndex(0);
              setIsFlipped(false);
            }}
            style={{
              padding: '8px 16px',
              fontSize: '0.875rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: activeTab === 'flashcards' ? 'var(--bg-card)' : 'transparent',
              color: activeTab === 'flashcards' ? 'var(--brand-primary)' : 'var(--text-muted)',
              boxShadow: activeTab === 'flashcards' ? 'var(--shadow-sm)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            🎴 Flashcard Ghi Nhớ
          </button>
        </div>
      </div>

      {activeTab === 'lookup' && (
        <div>
          {/* Search Box */}
          <form onSubmit={(e) => handleSearch(e)} style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
                <Search 
                  size={20} 
                  style={{
                    position: 'absolute',
                    left: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--brand-primary)',
                    pointerEvents: 'none'
                  }} 
                />
                <input
                  type="text"
                  placeholder="Nhập từ Tiếng Anh cần tra (vd: biodiversity, sustainable)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input"
                  style={{
                    paddingLeft: '50px',
                    paddingRight: searchTerm ? '44px' : '18px',
                    height: '52px',
                    fontSize: '0.975rem',
                    borderRadius: 'var(--radius-pill)',
                    background: 'var(--bg-card)'
                  }}
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm('');
                      setIsNotFound(false);
                      setWordResult(null);
                    }}
                    style={{
                      position: 'absolute',
                      right: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      padding: '4px'
                    }}
                    title="Xóa tìm kiếm"
                  >
                    ×
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  padding: '0 32px',
                  height: '52px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.95rem',
                  fontWeight: 800
                }}
              >
                Tra Cứu
              </button>
            </div>
          </form>

          {/* Quick Suggestion Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Gợi ý tra nhanh:</span>
            {['biodiversity', 'conservation', 'sustainable', 'ecotourism', 'mitigate', 'intermittent'].map(w => (
              <button
                key={w}
                onClick={() => {
                  setSearchTerm(w);
                  handleSearch(undefined, w);
                }}
                style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-card)',
                  color: 'var(--brand-primary)',
                  cursor: 'pointer'
                }}
              >
                {w}
              </button>
            ))}
          </div>

          {/* Search Result States */}
          {isSearching ? (
            <div className="card" style={{ padding: '60px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                🔍 Đang tra cứu từ vựng trong hệ thống...
              </div>
            </div>
          ) : isNotFound ? (
            /* Word Not Found Card */
            <div className="card animate-fade-in" style={{
              padding: '48px 32px',
              textAlign: 'center',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              background: 'rgba(239, 68, 68, 0.04)'
            }}>
              <AlertCircle size={52} color="#ef4444" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 10px 0', color: 'var(--text-main)' }}>
                Không Tìm Thấy Từ "{notFoundWord}" Trong Từ Điển ⚠️
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0 0 24px 0', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
                Từ bạn nhập có thể bị sai chính tả hoặc không tồn tại trong từ điển Tiếng Anh. Vui lòng kiểm tra lại chính tả hoặc thử tra cứu trên các công cụ mở rộng bên dưới.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={`https://translate.google.com/?sl=en&tl=vi&text=${encodeURIComponent(notFoundWord)}&op=translate`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '10px 18px', fontSize: '0.875rem' }}
                >
                  <ExternalLink size={16} /> Tra Trên Google Translate
                </a>
                <a
                  href={`https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(notFoundWord)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '10px 18px', fontSize: '0.875rem' }}
                >
                  <ExternalLink size={16} /> Tra Từ Điển Cambridge
                </a>
              </div>
            </div>
          ) : wordResult ? (
            /* Word Result Card */
            <div className="card animate-fade-in" style={{ padding: '32px', position: 'relative' }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <h3 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, textTransform: 'capitalize', color: 'var(--text-main)' }}>
                      {wordResult.word}
                    </h3>

                    {wordResult.partOfSpeech && (
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        fontStyle: 'italic',
                        background: 'rgba(79, 70, 229, 0.12)',
                        color: 'var(--brand-primary)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)'
                      }}>
                        {wordResult.partOfSpeech}
                      </span>
                    )}
                  </div>

                  {wordResult.phonetic && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                      <span style={{ fontSize: '1.05rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                        {wordResult.phonetic}
                      </span>

                      <button
                        onClick={() => handlePlayAudio(wordResult.word)}
                        style={{
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-light)',
                          borderRadius: '50%',
                          width: '34px',
                          height: '34px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--brand-primary)',
                          cursor: 'pointer'
                        }}
                        title="Nghe phát âm chuẩn US"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Save Word Button */}
                <button
                  onClick={handleToggleSaveCurrent}
                  className={`btn ${isSaved ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                  <span>{isSaved ? 'Đã Lưu Vào Sổ Từ' : 'Lưu Từ Vựng'}</span>
                </button>
              </div>

              {/* Translation Box */}
              <div style={{
                background: 'var(--success-bg)',
                border: '1px solid var(--success-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '16px 20px',
                marginBottom: '20px'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--success)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Bản Dịch Tiếng Việt Chi Tiết
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.5 }}>
                  {wordResult.translation}
                </div>
              </div>

              {/* English Definition */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                  Định Nghĩa Tiếng Anh (English Definition)
                </h4>
                <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                  {wordResult.definition}
                </p>
              </div>

              {/* Example Sentence */}
              {wordResult.example && (
                <div style={{
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '14px 18px',
                  borderLeft: '4px solid var(--brand-primary)'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Ví dụ câu trong bài thi (Example Context)
                  </div>
                  <div style={{ fontSize: '0.925rem', fontStyle: 'italic', color: 'var(--text-main)' }}>
                    "{wordResult.example}"
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="card" style={{ padding: '60px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Globe size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--text-main)' }}>
                Tra Cứu Từ Vựng Tiếng Anh Thông Minh
              </h3>
              <p style={{ fontSize: '0.9rem', margin: 0, maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                Nhập từ Tiếng Anh ở ô tìm kiếm phía trên để tra phiên âm, nghĩa Tiếng Việt và các câu ví dụ thực tế trong đề thi tốt nghiệp THPT 2026.
              </p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'saved' && (
        /* Saved Vocabulary Notebook Tab */
        <div className="card" style={{ padding: '28px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 4px 0' }}>
                Sổ Tay Từ Vựng Đã Lưu ({savedWords.length})
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
                Các từ vựng bạn đã đánh dấu trong quá trình tra cứu và làm bài tập.
              </p>
            </div>

            {savedWords.length > 0 && (
              <input
                type="text"
                placeholder="Tìm từ trong sổ tay..."
                value={savedSearchQuery}
                onChange={e => setSavedSearchQuery(e.target.value)}
                className="form-input"
                style={{ width: '220px', height: '38px', fontSize: '0.85rem' }}
              />
            )}
          </div>

          {filteredSavedWords.length === 0 ? (
            <div style={{ padding: '48px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Bookmark size={44} style={{ marginBottom: '12px', opacity: 0.5 }} />
              <p style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 6px 0' }}>Chưa có từ vựng nào được lưu</p>
              <p style={{ fontSize: '0.875rem', margin: 0 }}>Khi tra từ mới, hãy bấm nút "Lưu Từ Vựng" để bổ sung vào sổ tay học tập nhé!</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '20px'
            }}>
              {filteredSavedWords.map(sw => (
                <div
                  key={sw.id}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '20px',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'capitalize' }}>
                        {sw.word}
                      </span>
                      {sw.phonetic && (
                        <span style={{ marginLeft: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                          {sw.phonetic}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={() => handlePlayAudio(sw.word)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-muted)',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                        title="Nghe phát âm"
                      >
                        <Volume2 size={16} />
                      </button>

                      <button
                        onClick={() => onRemoveWord(sw.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--danger)',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                        title="Xóa từ này"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 8px 0', lineHeight: 1.4 }}>
                    {sw.translation}
                  </p>

                  {sw.example && (
                    <p style={{ fontSize: '0.825rem', fontStyle: 'italic', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                      "{sw.example}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 🎴 Flashcard Practice Mode Tab */}
      {activeTab === 'flashcards' && (
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          {savedWords.length === 0 ? (
            <div className="card" style={{ padding: '60px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Sparkles size={48} style={{ marginBottom: '16px', opacity: 0.5, color: 'var(--brand-primary)' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--text-main)' }}>
                Chưa Có Từ Vựng Để Ôn Thẻ Flashcard
              </h3>
              <p style={{ fontSize: '0.9rem', margin: '0 0 20px 0' }}>
                Hãy sang mục "Tra Từ Mới" hoặc làm bài tập và bấm lưu các từ bạn muốn ghi nhớ để kích hoạt chế độ lật thẻ 3D nhé!
              </p>
              <button
                onClick={() => setActiveTab('lookup')}
                className="btn btn-primary"
                style={{ padding: '10px 24px', fontSize: '0.9rem', fontWeight: 700 }}
              >
                Tra & Lưu Từ Mới Ngay
              </button>
            </div>
          ) : (
            <div>
              {/* Flashcard Header & Progress */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                  Thẻ {flashcardIndex + 1} / {savedWords.length}
                </span>

                <span style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 700 }}>
                  Đã nhớ: {rememberedCount} từ
                </span>
              </div>

              {/* 3D Flip Card Container */}
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="card card-hover"
                style={{
                  minHeight: '320px',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  border: '2px solid var(--brand-primary)',
                  boxShadow: '0 12px 36px rgba(79, 70, 229, 0.18)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: isFlipped ? 'var(--bg-card)' : 'linear-gradient(135deg, rgba(79, 70, 229, 0.06) 0%, rgba(6, 182, 212, 0.06) 100%)'
                }}
              >
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase'
                }}>
                  {isFlipped ? 'Mặt Sau (Nghĩa)' : 'Mặt Trước (Từ Tiếng Anh)'}
                </span>

                {!isFlipped ? (
                  /* Front Side */
                  <div>
                    <h3 style={{ fontSize: '2.6rem', fontWeight: 900, textTransform: 'capitalize', color: 'var(--text-main)', marginBottom: '12px' }}>
                      {currentFlashcard.word}
                    </h3>

                    {currentFlashcard.phonetic && (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
                        <span style={{ fontSize: '1.1rem', color: 'var(--brand-primary)', fontFamily: 'monospace', fontWeight: 600 }}>
                          {currentFlashcard.phonetic}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayAudio(currentFlashcard.word);
                          }}
                          style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '50%',
                            width: '36px',
                            height: '36px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--brand-primary)',
                            cursor: 'pointer'
                          }}
                          title="Nghe phát âm"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                    )}

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                      👉 Nhấn vào thẻ để xem nghĩa Tiếng Việt & ví dụ
                    </p>
                  </div>
                ) : (
                  /* Back Side */
                  <div>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      background: 'var(--success-bg)',
                      color: 'var(--success)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      marginBottom: '16px',
                      display: 'inline-block'
                    }}>
                      {currentFlashcard.partOfSpeech || 'Từ Vựng'}
                    </span>

                    <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px', lineHeight: 1.4 }}>
                      {currentFlashcard.translation}
                    </h4>

                    {currentFlashcard.definition && (
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
                        {currentFlashcard.definition}
                      </p>
                    )}

                    {currentFlashcard.example && (
                      <div style={{
                        background: 'var(--bg-subtle)',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        fontStyle: 'italic',
                        color: 'var(--text-main)'
                      }}>
                        "{currentFlashcard.example}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginTop: '24px'
              }}>
                <button
                  onClick={() => handleNextFlashcard(false)}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '12px', justifyContent: 'center', color: 'var(--danger)', fontWeight: 700 }}
                >
                  <XCircle size={18} /> Chưa Nhớ
                </button>

                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="btn btn-secondary"
                  style={{ padding: '12px 20px', justifyContent: 'center', fontWeight: 700 }}
                >
                  <RotateCcw size={18} /> Lật Thẻ
                </button>

                <button
                  onClick={() => handleNextFlashcard(true)}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '12px', justifyContent: 'center', fontWeight: 700 }}
                >
                  <CheckCircle2 size={18} /> Đã Nhớ
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
