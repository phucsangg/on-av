import React, { useState } from 'react';
import type { Question, SavedMistake } from '../types/quiz';
import { 
  BookMarked, 
  Trash2, 
  Play, 
  CheckCircle2, 
  HelpCircle, 
  Search,
  Languages,
  Sparkles
} from 'lucide-react';

interface MistakeNotebookProps {
  mistakes: SavedMistake[];
  onRemoveMistake: (questionId: string) => void;
  onPracticeMistakes: (questions: Question[]) => void;
}

export const MistakeNotebook: React.FC<MistakeNotebookProps> = ({
  mistakes,
  onRemoveMistake,
  onPracticeMistakes
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [showTransMap, setShowTransMap] = useState<Record<string, boolean>>({});

  const filteredMistakes = mistakes.filter(item => {
    const matchesSearch = item.question.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.question.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || item.question.topicTag === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  const topics = Array.from(new Set(mistakes.map(m => m.question.topicTag)));

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
      
      {/* Header Banner */}
      <div className="glass-card animate-fade-in" style={{
        padding: '32px',
        marginBottom: '28px',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <BookMarked size={28} color="#ef4444" />
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Sổ Tay Câu Làm Sai</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Nơi tổng hợp các câu hỏi bạn đã làm sai để chủ động ôn tập và bù đắp lỗ hổng kiến thức.
          </p>
        </div>

        {mistakes.length > 0 && (
          <button
            onClick={() => onPracticeMistakes(filteredMistakes.map(m => m.question))}
            className="btn btn-primary"
            style={{ padding: '12px 24px' }}
          >
            <Play size={18} fill="currentColor" /> Luyện Tập {filteredMistakes.length} Câu Này
          </button>
        )}
      </div>

      {mistakes.length === 0 ? (
        <div className="glass-card" style={{ padding: '48px', textAlign: 'center' }}>
          <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>Sổ Tay Đang Trống!</h3>
          <p style={{ color: 'var(--text-muted)' }}>Bạn chưa lưu câu sai nào. Hãy làm các đề thi và bấm nút "Lưu vào sổ tay câu sai" khi xem kết quả nhé.</p>
        </div>
      ) : (
        <>
          {/* Filters Bar */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--brand-primary)', pointerEvents: 'none' }} />
              <input
                type="text"
                placeholder="Tìm nội dung câu sai hoặc giải thích..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input"
                style={{
                  paddingLeft: '44px',
                  paddingRight: searchTerm ? '36px' : '16px',
                  height: '44px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--bg-card)'
                }}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    padding: '2px'
                  }}
                  title="Xóa tìm kiếm"
                >
                  ×
                </button>
              )}
            </div>

            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="form-input"
              style={{
                width: 'auto',
                minWidth: '200px',
                height: '44px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--bg-card)',
                fontWeight: 700
              }}
            >
              <option value="all">Tất cả chủ đề ({topics.length})</option>
              {topics.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* List of Mistakes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredMistakes.map(({ question: q, addedAt }) => (
              <div key={q.id} className="glass-card animate-fade-in" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-warning">{q.topicTag}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Lưu lúc: {new Date(addedAt).toLocaleDateString('vi-VN')}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      onClick={() => setShowTransMap(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="btn btn-secondary"
                      style={{
                        padding: '4px 10px',
                        fontSize: '0.8rem',
                        background: showTransMap[q.id] ? 'var(--success-bg)' : undefined,
                        color: showTransMap[q.id] ? 'var(--success)' : undefined
                      }}
                    >
                      <Languages size={14} /> {showTransMap[q.id] ? 'Ẩn bản dịch' : 'Dịch câu hỏi & câu chọn'}
                    </button>

                    <button
                      onClick={() => onRemoveMistake(q.id)}
                      className="btn btn-secondary"
                      style={{ padding: '4px 10px', fontSize: '0.8rem', color: 'var(--danger)' }}
                      title="Xóa khỏi sổ tay"
                    >
                      <Trash2 size={14} /> Xóa
                    </button>
                  </div>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 500, marginBottom: '12px', whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: q.questionText }} />

                {/* Question Translation Box */}
                {showTransMap[q.id] && (
                  <div style={{
                    marginBottom: '16px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--success-bg)',
                    border: '1px solid var(--success-border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    lineHeight: 1.6
                  }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--success)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Sparkles size={13} /> Bản dịch Tiếng Việt:
                    </div>
                    <div style={{ whiteSpace: 'pre-line' }}>
                      {q.translation || q.explanation}
                    </div>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '16px' }}>
                  {q.options.map(opt => (
                    <div
                      key={opt.id}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: `1.5px solid ${opt.id === q.correctAnswer ? 'var(--success-border)' : 'var(--card-border)'}`,
                        background: opt.id === q.correctAnswer ? 'var(--success-bg)' : 'var(--bg-secondary)',
                        color: opt.id === q.correctAnswer ? 'var(--success)' : 'var(--text-main)',
                        fontWeight: opt.id === q.correctAnswer ? 700 : 400,
                        fontSize: '0.9rem'
                      }}
                    >
                      <strong>{opt.id}.</strong> <span dangerouslySetInnerHTML={{ __html: opt.text }} />
                      {opt.id === q.correctAnswer && <span style={{ marginLeft: '6px', fontSize: '0.8rem' }}>(Đáp án đúng)</span>}
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'var(--bg-tertiary)',
                  padding: '14px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.88rem',
                  lineHeight: 1.6
                }}>
                  <strong style={{ color: 'var(--accent-primary)', display: 'block', marginBottom: '4px' }}>
                    <HelpCircle size={14} style={{ display: 'inline', marginRight: '4px' }} /> Lời giải:
                  </strong>
                  <div style={{ whiteSpace: 'pre-line' }}>{q.explanation}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
