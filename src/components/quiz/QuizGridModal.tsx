import React, { useState } from 'react';
import { Grid, X, CheckCircle } from 'lucide-react';
import type { Question } from '../../types/quiz';

interface QuizGridModalProps {
  isOpen: boolean;
  questions: Question[];
  currentIndex: number;
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | null>;
  flagged: Record<string, boolean>;
  answeredCount: number;
  isNavigatorOpen: boolean;
  onSelectQuestion: (index: number) => void;
  onToggleNavigator: () => void;
  onOpenSubmitModal: () => void;
  onClose: () => void;
}

export const QuizGridModal: React.FC<QuizGridModalProps> = ({
  isOpen,
  questions,
  currentIndex,
  answers,
  flagged,
  answeredCount,
  isNavigatorOpen,
  onSelectQuestion,
  onToggleNavigator,
  onOpenSubmitModal,
  onClose
}) => {
  const [gridFilter, setGridFilter] = useState<'all' | 'unanswered' | 'flagged' | 'answered'>('all');

  if (!isOpen) return null;

  const totalQuestions = questions.length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;
  const unansweredCount = totalQuestions - answeredCount;
  const percentage = Math.round((answeredCount / totalQuestions) * 100);

  const filteredList = questions
    .map((q, idx) => ({ q, idx }))
    .filter(({ q }) => {
      const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
      const isQuestionFlagged = !!flagged[q.id];
      if (gridFilter === 'answered') return isAnswered;
      if (gridFilter === 'unanswered') return !isAnswered;
      if (gridFilter === 'flagged') return isQuestionFlagged;
      return true;
    });

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 105,
      background: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-card animate-fade-in" style={{
        width: '100%',
        maxWidth: '680px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '28px',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-light)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '16px'
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Grid size={22} style={{ color: 'var(--brand-primary)' }} />
              <span>BẢNG CHỌN CÂU HỎI TRỰC QUAN</span>
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Nhấp vào câu hỏi bất kỳ để chuyển nhanh đến câu đó
            </p>
          </div>

          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '6px', borderRadius: '50%', minWidth: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Summary Card */}
        <div style={{
          background: 'var(--bg-subtle)',
          padding: '16px 20px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '22px',
          border: '1px solid var(--border-light)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px' }}>
            <span>Tiến độ hoàn thành bài thi</span>
            <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>
              {answeredCount} / {totalQuestions} câu ({percentage}%)
            </span>
          </div>

          <div style={{
            height: '8px',
            width: '100%',
            background: 'var(--bg-tertiary)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${percentage}%`,
              background: 'linear-gradient(90deg, #4f46e5 0%, #3b82f6 100%)',
              borderRadius: '4px',
              transition: 'width 0.3s ease'
            }} />
          </div>

          {/* Filter Tabs */}
          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '16px',
            flexWrap: 'wrap'
          }}>
            <button
              type="button"
              onClick={() => setGridFilter('all')}
              className={`tab-chip-pill ${gridFilter === 'all' ? 'active' : ''}`}
              style={{ fontSize: '0.82rem', padding: '6px 14px' }}
            >
              Tất cả ({totalQuestions})
            </button>
            <button
              type="button"
              onClick={() => setGridFilter('unanswered')}
              className={`tab-chip-pill ${gridFilter === 'unanswered' ? 'active' : ''}`}
              style={{
                fontSize: '0.82rem',
                padding: '6px 14px',
                borderColor: gridFilter === 'unanswered' ? 'var(--brand-primary)' : undefined,
                color: gridFilter === 'unanswered' ? 'var(--brand-primary)' : undefined
              }}
            >
              Chưa làm ({unansweredCount})
            </button>
            <button
              type="button"
              onClick={() => setGridFilter('answered')}
              className={`tab-chip-pill ${gridFilter === 'answered' ? 'active' : ''}`}
              style={{ fontSize: '0.82rem', padding: '6px 14px' }}
            >
              Đã làm ({answeredCount})
            </button>
            <button
              type="button"
              onClick={() => setGridFilter('flagged')}
              className={`tab-chip-pill ${gridFilter === 'flagged' ? 'active' : ''}`}
              style={{
                fontSize: '0.82rem',
                padding: '6px 14px',
                borderColor: gridFilter === 'flagged' ? 'var(--warning)' : undefined,
                color: gridFilter === 'flagged' ? 'var(--warning)' : undefined
              }}
            >
              Đánh dấu ({flaggedCount})
            </button>
          </div>
        </div>

        {/* Filtered Question Flex/Grid Layout */}
        {filteredList.length === 0 ? (
          <div style={{
            padding: '36px 16px',
            textAlign: 'center',
            color: 'var(--text-muted)',
            background: 'var(--bg-subtle)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '24px',
            border: '1px dashed var(--border-light)'
          }}>
            {gridFilter === 'unanswered' ? 'Tuyệt vời! Bạn đã trả lời hết tất cả câu hỏi.' :
             gridFilter === 'flagged' ? 'Bạn chưa đánh dấu câu hỏi nào cần xem lại.' :
             'Không có câu hỏi nào phù hợp với bộ lọc.'}
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '10px',
            marginBottom: '24px'
          }}>
            {filteredList.map(({ q, idx }) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
              const isQuestionFlagged = !!flagged[q.id];

              let bg = 'var(--bg-surface)';
              let color = 'var(--text-main)';
              let border = '1.5px solid var(--border-light)';
              let boxShadow = 'none';

              if (isCurrent) {
                border = '2.5px solid var(--brand-primary)';
                boxShadow = '0 0 14px rgba(79, 70, 229, 0.4)';
                if (isAnswered) {
                  bg = 'var(--brand-primary)';
                  color = '#ffffff';
                } else {
                  bg = 'rgba(79, 70, 229, 0.15)';
                  color = 'var(--brand-primary)';
                }
              } else if (isQuestionFlagged) {
                bg = 'rgba(245, 158, 11, 0.2)';
                color = 'var(--warning)';
                border = '1.5px solid var(--warning)';
              } else if (isAnswered) {
                bg = 'var(--brand-primary)';
                color = '#ffffff';
                border = '1.5px solid var(--brand-primary)';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(idx);
                    onClose();
                  }}
                  className="hover-lift"
                  style={{
                    padding: '10px 6px',
                    borderRadius: 'var(--radius-md)',
                    border: border,
                    background: bg,
                    color: color,
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: boxShadow,
                    transition: 'all 0.18s ease'
                  }}
                >
                  Câu {idx + 1}
                  {isQuestionFlagged && (
                    <span style={{
                      position: 'absolute',
                      top: '4px',
                      right: '4px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--warning)'
                    }} />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <button
            onClick={onToggleNavigator}
            className="btn btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            {isNavigatorOpen ? 'Ẩn thanh câu hỏi bên dưới' : 'Hiện thanh câu hỏi bên dưới'}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenSubmitModal();
            }}
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
          >
            <CheckCircle size={16} /> Nộp Bài Ngay
          </button>
        </div>
      </div>
    </div>
  );
};
