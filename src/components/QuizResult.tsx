import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import type { 
  ExamSet, 
  UserAnswerRecord, 
  Question 
} from '../types/quiz';
import { 
  Trophy, 
  RotateCcw, 
  Home, 
  BookMarked, 
  Check, 
  X, 
  HelpCircle, 
  BookmarkPlus,
  Languages,
  Sparkles
} from 'lucide-react';
import { sanitizeHtml, cleanTopicTag } from '../utils/sanitize';

interface QuizResultProps {
  exam: ExamSet;
  answers: UserAnswerRecord[];
  timeSpentSeconds: number;
  onRetake: () => void;
  onGoHome: () => void;
  onOpenMistakes: () => void;
  onSaveMistakeQuestion: (q: Question) => void;
  savedMistakesIds: string[];
}

export const QuizResult: React.FC<QuizResultProps> = ({
  exam,
  answers,
  timeSpentSeconds,
  onRetake,
  onGoHome,
  onOpenMistakes,
  onSaveMistakeQuestion,
  savedMistakesIds
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'correct'>('all');
  const [showTransMap, setShowTransMap] = useState<Record<string, boolean>>({});

  const correctCount = answers.filter(a => a.isCorrect).length;
  const unansweredCount = answers.filter(a => a.selectedAnswer === null || a.selectedAnswer === undefined).length;
  const incorrectCount = answers.filter(a => a.selectedAnswer !== null && a.selectedAnswer !== undefined && !a.isCorrect).length;
  const totalQuestions = exam.questions.length;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Confetti effect on high score
  useEffect(() => {
    if (percentage >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [percentage]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins} phút ${secs} giây`;
  };

  const filteredQuestions = exam.questions.filter((q) => {
    const record = answers.find(a => a.questionId === q.id);
    if (filter === 'incorrect') return !record?.isCorrect;
    if (filter === 'correct') return record?.isCorrect;
    return true;
  });

  const getEvaluationTag = () => {
    if (percentage >= 90) return { label: 'Xuất Sắc! 🌟', color: '#10b981' };
    if (percentage >= 70) return { label: 'Tốt Rất Nhiều! 👏', color: '#4f46e5' };
    if (percentage >= 50) return { label: 'Khá Cố Gắng! 👍', color: '#f59e0b' };
    return { label: 'Cần Luyện Thêm! 💪', color: '#ef4444' };
  };

  const evalTag = getEvaluationTag();

  const avgSecondsPerQ = Math.round(timeSpentSeconds / Math.max(1, totalQuestions));

  // Calculate topic performance in this test
  const topicInsights = React.useMemo(() => {
    const map: Record<string, { total: number; correct: number }> = {};
    exam.questions.forEach(q => {
      const rec = answers.find(a => a.questionId === q.id);
      const t = cleanTopicTag(q.topicTag);
      if (!map[t]) map[t] = { total: 0, correct: 0 };
      map[t].total++;
      if (rec?.isCorrect) map[t].correct++;
    });
    return Object.entries(map).map(([topic, d]) => ({
      topic,
      total: d.total,
      correct: d.correct,
      rate: Math.round((d.correct / d.total) * 100)
    }));
  }, [exam, answers]);

  const weakExamTopics = topicInsights.filter(t => t.rate < 70);
  const strongExamTopics = topicInsights.filter(t => t.rate >= 80);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
      
      {/* Score Header Card */}
      <div className="card animate-fade-in" style={{
        padding: '32px 36px',
        textAlign: 'center',
        marginBottom: '24px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-primary-subtle)',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 14px'
        }}>
          <Trophy size={28} />
        </div>

        <span className="badge" style={{ background: `${evalTag.color}15`, color: evalTag.color, border: `1px solid ${evalTag.color}30`, fontSize: '0.82rem', marginBottom: '8px' }}>
          {evalTag.label}
        </span>

        <h2 style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '6px', letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
          {correctCount} / {totalQuestions} <span style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>câu đúng</span>
        </h2>

        {/* Metrics Breakdown Chips */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          margin: '18px 0 24px'
        }}>
          <div style={{ background: 'var(--color-surface-subtle)', padding: '8px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.85rem', fontWeight: 600 }}>
            Độ chính xác: <strong style={{ color: evalTag.color }}>{percentage}%</strong>
          </div>
          <div style={{ background: 'var(--color-success-subtle)', padding: '8px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-success-border)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-success)' }}>
            Đúng: <strong>{correctCount}</strong>
          </div>
          <div style={{ background: 'var(--color-error-subtle)', padding: '8px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-error-border)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-error)' }}>
            Sai: <strong>{incorrectCount}</strong>
          </div>
          {unansweredCount > 0 && (
            <div style={{ background: 'var(--color-surface-subtle)', padding: '8px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
              Chưa làm: <strong>{unansweredCount}</strong>
            </div>
          )}
          <div style={{ background: 'var(--color-surface-subtle)', padding: '8px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.85rem', fontWeight: 600 }}>
            Thời gian: <strong>{formatTime(timeSpentSeconds)}</strong>
          </div>
          <div style={{ background: 'var(--color-surface-subtle)', padding: '8px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.85rem', fontWeight: 600 }}>
            Tốc độ: <strong>~{avgSecondsPerQ}s / câu</strong>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={onRetake} className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
            <RotateCcw size={15} /> Làm Lại Đề Này
          </button>
          <button onClick={onOpenMistakes} className="btn btn-secondary" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
            <BookMarked size={15} /> Xem Sổ Tay Câu Sai
          </button>
          <button onClick={onGoHome} className="btn btn-secondary" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
            <Home size={15} /> Về Trang Chủ
          </button>
        </div>
      </div>

      {/* Topic Feedback Insights */}
      {(weakExamTopics.length > 0 || strongExamTopics.length > 0) && (
        <div className="card animate-fade-in" style={{
          padding: '20px 24px',
          marginBottom: '24px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {weakExamTopics.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-error)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '8px' }}>
                <span>Chủ đề cần chú ý ôn lại:</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {weakExamTopics.map(t => (
                  <span key={t.topic} className="badge badge-danger" style={{ fontSize: '0.74rem' }}>
                    {t.topic}: {t.correct}/{t.total} ({t.rate}%)
                  </span>
                ))}
              </div>
            </div>
          )}

          {strongExamTopics.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-success)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '8px' }}>
                <span>Chủ đề làm rất tốt:</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {strongExamTopics.map(t => (
                  <span key={t.topic} className="badge badge-success" style={{ fontSize: '0.74rem' }}>
                    {t.topic}: {t.correct}/{t.total} ({t.rate}%)
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Answer Review Section Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '20px'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Xem Chi Tiết Lời Giải & Đáp Án</h3>
        
        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilter('all')}
            className={`tab-chip-pill ${filter === 'all' ? 'active' : ''}`}
          >
            <span>Tất cả</span>
            <span style={{
              background: filter === 'all' ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-subtle)',
              color: filter === 'all' ? '#ffffff' : 'var(--text-muted)',
              fontSize: '0.72rem',
              padding: '1px 6px',
              borderRadius: '999px',
              fontWeight: 800
            }}>
              {totalQuestions}
            </span>
          </button>
          <button
            onClick={() => setFilter('incorrect')}
            className={`tab-chip-pill ${filter === 'incorrect' ? 'active' : ''}`}
          >
            <span>Câu sai</span>
            <span style={{
              background: filter === 'incorrect' ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-subtle)',
              color: filter === 'incorrect' ? '#ffffff' : 'var(--danger)',
              fontSize: '0.72rem',
              padding: '1px 6px',
              borderRadius: '999px',
              fontWeight: 800
            }}>
              {totalQuestions - correctCount}
            </span>
          </button>
          <button
            onClick={() => setFilter('correct')}
            className={`tab-chip-pill ${filter === 'correct' ? 'active' : ''}`}
          >
            <span>Câu đúng</span>
            <span style={{
              background: filter === 'correct' ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-subtle)',
              color: filter === 'correct' ? '#ffffff' : 'var(--success)',
              fontSize: '0.72rem',
              padding: '1px 6px',
              borderRadius: '999px',
              fontWeight: 800
            }}>
              {correctCount}
            </span>
          </button>
        </div>
      </div>

      {/* Questions Review List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredQuestions.map((q) => {
          const userRec = answers.find(a => a.questionId === q.id);
          const userSel = userRec?.selectedAnswer;
          const isCorrect = userRec?.isCorrect;
          const isSaved = savedMistakesIds.includes(q.id);

          return (
            <div
              key={q.id}
              className="glass-card animate-fade-in"
              style={{
                padding: '24px',
                borderLeft: `5px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className={`badge ${isCorrect ? 'badge-success' : 'badge-danger'}`}>
                    {isCorrect ? <Check size={14} /> : <X size={14} />}
                    {isCorrect ? 'Chính xác' : 'Chưa chính xác'}
                  </span>
                  <span className="badge badge-primary">{cleanTopicTag(q.topicTag)}</span>
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

                  {!isCorrect && (
                    <button
                      onClick={() => onSaveMistakeQuestion(q)}
                      disabled={isSaved}
                      className="btn btn-secondary"
                      style={{ padding: '4px 10px', fontSize: '0.8rem', opacity: isSaved ? 0.6 : 1 }}
                    >
                      <BookmarkPlus size={14} /> {isSaved ? 'Đã lưu sổ tay' : 'Lưu vào sổ tay câu sai'}
                    </button>
                  )}
                </div>
              </div>

              {/* Passage text if reading comprehension */}
              {q.readingPassage && (
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  background: 'var(--bg-tertiary)',
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '12px',
                  maxHeight: '120px',
                  overflowY: 'auto'
                }}>
                  <strong>Đoạn văn liên quan:</strong> {q.readingPassage.substring(0, 180)}...
                </div>
              )}

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

              {/* Options Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '16px' }}>
                {q.options.map(opt => {
                  const isUserChosen = userSel === opt.id;
                  const isCorrectAnswer = q.correctAnswer === opt.id;

                  let optBg = 'var(--bg-secondary)';
                  let optBorder = 'var(--card-border)';
                  let optColor = 'var(--text-main)';

                  if (isCorrectAnswer) {
                    optBg = 'var(--success-bg)';
                    optBorder = 'var(--success-border)';
                    optColor = 'var(--success)';
                  } else if (isUserChosen && !isCorrect) {
                    optBg = 'var(--danger-bg)';
                    optBorder = 'var(--danger-border)';
                    optColor = 'var(--danger)';
                  }

                  return (
                    <div
                      key={opt.id}
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: `1.5px solid ${optBorder}`,
                        background: optBg,
                        color: optColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '0.9rem',
                        fontWeight: (isUserChosen || isCorrectAnswer) ? 700 : 400
                      }}
                    >
                      <span style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: isCorrectAnswer ? 'var(--success)' : isUserChosen ? 'var(--danger)' : 'var(--bg-tertiary)',
                        color: (isCorrectAnswer || isUserChosen) ? '#fff' : 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 800
                      }}>
                        {opt.id}
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(opt.text) }} />
                    </div>
                  );
                })}
              </div>

              {/* Detailed Explanation Box */}
              <div style={{
                background: 'var(--bg-tertiary)',
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--card-border)',
                fontSize: '0.9rem',
                lineHeight: 1.6
              }}>
                <div style={{ fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <HelpCircle size={16} /> Lời giải chi tiết:
                </div>
                <div style={{ whiteSpace: 'pre-line', marginBottom: '8px', color: 'var(--text-main)' }}>
                  {q.explanation}
                </div>
                {q.translation && (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', borderTop: '1px dashed var(--card-border)', paddingTop: '6px' }}>
                    <strong>Dịch nghĩa:</strong> {q.translation}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
