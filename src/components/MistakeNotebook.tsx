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
import { sanitizeHtml } from '../utils/sanitize';

interface MistakeNotebookProps {
  mistakes: SavedMistake[];
  onRemoveMistake: (questionId: string) => void;
  onPracticeMistakes: (questions: Question[]) => void;
  onToggleMastered?: (questionId: string) => void;
}

export const MistakeNotebook: React.FC<MistakeNotebookProps> = ({
  mistakes,
  onRemoveMistake,
  onPracticeMistakes,
  onToggleMastered
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'learning' | 'mastered'>('all');
  const [showTransMap, setShowTransMap] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<'list' | 'flash_review'>('list');
  const [reviewIndex, setReviewIndex] = useState<number>(0);
  const [selectedReviewOption, setSelectedReviewOption] = useState<string | null>(null);

  const filteredMistakes = mistakes.filter(item => {
    const matchesSearch = item.question.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.question.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || item.question.topicTag === selectedTopic;
    const matchesStatus = statusFilter === 'all' 
      ? true 
      : statusFilter === 'mastered' 
        ? !!item.mastered 
        : !item.mastered;
    return matchesSearch && matchesTopic && matchesStatus;
  });

  const topics = Array.from(new Set(mistakes.map(m => m.question.topicTag)));
  const learningCount = mistakes.filter(m => !m.mastered).length;
  const masteredCount = mistakes.filter(m => m.mastered).length;

  const currentReviewItem = filteredMistakes[reviewIndex];

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
            {mistakes.length > 0 
              ? `Đang có ${mistakes.length} câu sai (${masteredCount} câu đã nắm vững, ${learningCount} câu cần ôn tập).`
              : 'Nơi tổng hợp các câu hỏi bạn đã làm sai để chủ động ôn tập và bù đắp lỗ hổng kiến thức.'}
          </p>
        </div>

        {mistakes.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                setViewMode(viewMode === 'list' ? 'flash_review' : 'list');
                setReviewIndex(0);
                setSelectedReviewOption(null);
              }}
              className={`btn ${viewMode === 'flash_review' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '10px 18px', fontSize: '0.88rem' }}
            >
              {viewMode === 'flash_review' ? '📋 Xem Dạng Danh Sách' : '🎴 Ôn Tập Từng Câu (Flash Review)'}
            </button>

            <button
              onClick={() => onPracticeMistakes(filteredMistakes.map(m => m.question))}
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              <Play size={16} fill="currentColor" /> Thi Lại {filteredMistakes.length} Câu
            </button>
          </div>
        )}
      </div>

      {mistakes.length === 0 ? (
        <div className="glass-card" style={{ padding: '48px', textAlign: 'center' }}>
          <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>Sổ Tay Đang Trống!</h3>
          <p style={{ color: 'var(--text-muted)' }}>Bạn chưa lưu câu sai nào. Hãy làm các đề thi và bấm nút "Lưu vào sổ tay câu sai" khi xem kết quả nhé.</p>
        </div>
      ) : viewMode === 'flash_review' && currentReviewItem ? (
        /* Flash Review Individual Question Mode */
        <div className="glass-card animate-fade-in" style={{ padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-primary">
                Câu {reviewIndex + 1} / {filteredMistakes.length}
              </span>
              <span className="badge badge-warning">
                {currentReviewItem.question.topicTag}
              </span>
              {currentReviewItem.mastered && (
                <span className="badge badge-success">✓ Đã nắm vững</span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              {onToggleMastered && (
                <button
                  onClick={() => onToggleMastered(currentReviewItem.question.id)}
                  className="btn btn-secondary"
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.82rem',
                    background: currentReviewItem.mastered ? 'var(--success-bg)' : undefined,
                    color: currentReviewItem.mastered ? 'var(--success)' : undefined
                  }}
                >
                  <CheckCircle2 size={15} /> {currentReviewItem.mastered ? 'Đã nắm vững' : 'Đánh dấu đã hiểu'}
                </button>
              )}
            </div>
          </div>

          <h3 
            style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '24px' }} 
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(currentReviewItem.question.questionText) }} 
          />

          {/* Interactive Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {currentReviewItem.question.options.map((opt) => {
              const isSelected = selectedReviewOption === opt.id;
              const isCorrect = opt.id === currentReviewItem.question.correctAnswer;
              let borderStyle = '1.5px solid var(--border-light)';
              let bgStyle = 'var(--bg-surface)';
              let textBadgeBg = 'var(--bg-subtle)';
              let textBadgeColor = 'var(--text-main)';

              if (selectedReviewOption) {
                if (isCorrect) {
                  borderStyle = '2px solid var(--success)';
                  bgStyle = 'var(--success-bg)';
                  textBadgeBg = 'var(--success)';
                  textBadgeColor = '#fff';
                } else if (isSelected && !isCorrect) {
                  borderStyle = '2px solid var(--danger)';
                  bgStyle = 'var(--danger-bg)';
                  textBadgeBg = 'var(--danger)';
                  textBadgeColor = '#fff';
                }
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedReviewOption(opt.id)}
                  className="hover-lift"
                  style={{
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-md)',
                    border: borderStyle,
                    background: bgStyle,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: textBadgeBg,
                    color: textBadgeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.95rem'
                  }}>
                    {opt.id}
                  </div>
                  <div style={{ flex: 1, fontSize: '1rem' }} dangerouslySetInnerHTML={{ __html: sanitizeHtml(opt.text) }} />
                  {selectedReviewOption && isCorrect && (
                    <span className="badge badge-success" style={{ fontSize: '0.75rem' }}>✓ Đáp án đúng</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {selectedReviewOption && (
            <div className="animate-fade-in" style={{
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-light)',
              marginBottom: '24px'
            }}>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: selectedReviewOption === currentReviewItem.question.correctAnswer ? 'var(--success)' : 'var(--danger)', marginBottom: '8px' }}>
                {selectedReviewOption === currentReviewItem.question.correctAnswer ? '🎉 Tuyệt vời! Bạn đã chọn chính xác.' : `Chưa đúng! Đáp án chuẩn là ${currentReviewItem.question.correctAnswer}.`}
              </div>
              <div style={{ fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '12px' }}>
                <strong>💡 Lời giải:</strong> {currentReviewItem.question.explanation}
              </div>
              {currentReviewItem.question.translation && (
                <div style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-body)', borderTop: '1px dashed var(--border-light)', paddingTop: '8px' }}>
                  <strong>📖 Dịch nghĩa:</strong> {currentReviewItem.question.translation}
                </div>
              )}
            </div>
          )}

          {/* Review Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
            <button
              onClick={() => {
                setReviewIndex(prev => Math.max(0, prev - 1));
                setSelectedReviewOption(null);
              }}
              disabled={reviewIndex === 0}
              className="btn btn-secondary"
              style={{ opacity: reviewIndex === 0 ? 0.4 : 1 }}
            >
              ← Câu trước
            </button>

            <button
              onClick={() => {
                if (reviewIndex < filteredMistakes.length - 1) {
                  setReviewIndex(prev => prev + 1);
                  setSelectedReviewOption(null);
                } else {
                  alert('🎉 Chúc mừng bạn đã hoàn thành lượt ôn tập tất cả câu sai!');
                  setViewMode('list');
                }
              }}
              className="btn btn-primary"
            >
              {reviewIndex < filteredMistakes.length - 1 ? 'Câu tiếp theo →' : 'Hoàn thành ôn tập ✓'}
            </button>
          </div>
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

          {/* Status Tabs (All / Learning / Mastered) */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            <button
              onClick={() => setStatusFilter('all')}
              className={`btn ${statusFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '6px 16px', fontSize: '0.85rem', borderRadius: 'var(--radius-pill)' }}
            >
              Tất cả ({mistakes.length})
            </button>
            <button
              onClick={() => setStatusFilter('learning')}
              className={`btn ${statusFilter === 'learning' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '6px 16px', fontSize: '0.85rem', borderRadius: 'var(--radius-pill)' }}
            >
              Đang ôn luyện ({learningCount})
            </button>
            <button
              onClick={() => setStatusFilter('mastered')}
              className={`btn ${statusFilter === 'mastered' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '6px 16px', fontSize: '0.85rem', borderRadius: 'var(--radius-pill)' }}
            >
              Đã nắm vững ({masteredCount})
            </button>
          </div>

          {/* List of Mistakes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredMistakes.map(({ question: q, addedAt, mastered }) => (
              <div key={q.id} className="glass-card animate-fade-in" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-warning">{q.topicTag}</span>
                    {mastered && (
                      <span className="badge badge-success" style={{ fontSize: '0.75rem' }}>
                        ✓ Đã thành thạo
                      </span>
                    )}
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Lưu lúc: {new Date(addedAt).toLocaleDateString('vi-VN')}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {onToggleMastered && (
                      <button
                        onClick={() => onToggleMastered(q.id)}
                        className="btn btn-secondary"
                        style={{
                          padding: '4px 10px',
                          fontSize: '0.8rem',
                          background: mastered ? 'var(--success-bg)' : undefined,
                          color: mastered ? 'var(--success)' : undefined,
                          borderColor: mastered ? 'var(--success-border)' : undefined
                        }}
                        title={mastered ? 'Chuyển lại trạng thái Đang ôn luyện' : 'Đánh dấu đã hiểu/nắm vững câu hỏi này'}
                      >
                        <CheckCircle2 size={14} /> {mastered ? 'Đã nắm vững' : 'Đánh dấu đã hiểu'}
                      </button>
                    )}

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

                <h4 style={{ fontSize: '1.05rem', fontWeight: 500, marginBottom: '12px', whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: sanitizeHtml(q.questionText) }} />

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
                      <strong>{opt.id}.</strong> <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(opt.text) }} />
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
