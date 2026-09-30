import React from 'react';
import { 
  X, 
  Clock, 
  Play, 
  Pause, 
  Keyboard, 
  Languages, 
  Grid, 
  CheckCircle 
} from 'lucide-react';

interface QuizHeaderProps {
  title: string;
  answeredCount: number;
  totalQuestions: number;
  durationMinutes: number;
  timeElapsedSeconds: number;
  isPaused: boolean;
  quizMode: 'exam' | 'practice';
  onExit: () => void;
  onPauseTimer: () => void;
  onResumeTimer: () => void;
  onSetQuizMode: (mode: 'exam' | 'practice') => void;
  onOpenShortcuts: () => void;
  onOpenDictionary: () => void;
  onOpenGridModal: () => void;
  onOpenSubmitModal: () => void;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  title,
  answeredCount,
  totalQuestions,
  durationMinutes,
  timeElapsedSeconds,
  isPaused,
  quizMode,
  onExit,
  onPauseTimer,
  onResumeTimer,
  onSetQuizMode,
  onOpenShortcuts,
  onOpenDictionary,
  onOpenGridModal,
  onOpenSubmitModal
}) => {
  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const totalExamDurationSeconds = (durationMinutes || 0) * 60;
  const remainingSeconds = totalExamDurationSeconds > 0 
    ? Math.max(0, totalExamDurationSeconds - timeElapsedSeconds)
    : null;
  const timerState: 'normal' | 'warning' | 'critical' = 
    remainingSeconds !== null
      ? remainingSeconds <= 60
        ? 'critical'
        : remainingSeconds <= 300
          ? 'warning'
          : 'normal'
      : 'normal';

  let timerColor = 'var(--color-text-primary)';
  let timerBg = 'var(--color-surface-subtle)';
  let timerBorder = 'var(--color-border)';

  if (timerState === 'critical') {
    timerColor = 'var(--color-error)';
    timerBg = 'var(--color-error-subtle)';
    timerBorder = 'var(--color-error-border)';
  } else if (timerState === 'warning') {
    timerColor = 'var(--color-warning)';
    timerBg = 'var(--color-warning-subtle)';
    timerBorder = 'var(--color-warning-border)';
  }

  return (
    <div className="glass-card" style={{
      borderRadius: 0,
      borderLeft: 0,
      borderRight: 0,
      padding: '8px 20px',
      minHeight: '52px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      {/* Left: Exit button & Exam Title with inline badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flexShrink: 1 }}>
        <button
          onClick={onExit}
          className="btn btn-secondary"
          style={{ height: '34px', padding: '0 12px', fontSize: '0.82rem', fontWeight: 600, flexShrink: 0 }}
          title="Thoát khỏi bài thi"
        >
          <X size={15} /> Thoát
        </button>
        <div style={{ minWidth: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3
            style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              margin: 0,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '320px',
              color: 'var(--text-primary)'
            }}
            title={title}
          >
            {title}
          </h3>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: 'var(--brand-primary)',
              background: 'rgba(99, 102, 241, 0.08)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-pill)',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
            title={`Tiến độ làm bài: ${answeredCount}/${totalQuestions} câu`}
          >
            {answeredCount}/{totalQuestions}
          </span>
        </div>
      </div>

      {/* Center: Unified Calm Timer + Mode Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        {/* Integrated Calm Timer Pill with Pause/Resume */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: '34px',
          padding: '0 8px 0 12px',
          gap: '8px',
          borderRadius: 'var(--radius-sm)',
          background: timerBg,
          border: `1px solid ${timerBorder}`,
          color: isPaused ? 'var(--color-text-muted)' : timerColor,
          fontSize: '0.88rem',
          fontWeight: 700,
          letterSpacing: '0.2px'
        }} title={isPaused ? "Đang tạm dừng - bấm nút để tiếp tục" : `Thời gian làm bài (${timerState})`}>
          <Clock size={15} style={{ color: isPaused ? 'var(--color-text-muted)' : timerColor }} />
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{formatTime(timeElapsedSeconds)}</span>
          <button
            onClick={isPaused ? onResumeTimer : onPauseTimer}
            style={{
              border: '1px solid var(--color-border)',
              background: isPaused ? 'var(--color-primary)' : 'var(--color-surface)',
              color: isPaused ? '#ffffff' : 'var(--color-text-secondary)',
              borderRadius: 'var(--radius-xs)',
              width: '22px',
              height: '22px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              padding: 0
            }}
            title={isPaused ? "Tiếp tục làm bài" : "Tạm dừng bấm giờ"}
            aria-label={isPaused ? "Tiếp tục" : "Tạm dừng"}
          >
            {isPaused ? <Play size={11} style={{ marginLeft: '1px' }} /> : <Pause size={11} />}
          </button>
        </div>

        {/* Quiz Mode Switcher (Exam vs Practice) - Quiet Segmented Control */}
        <div style={{
          display: 'flex',
          background: 'var(--color-surface-subtle)',
          borderRadius: 'var(--radius-sm)',
          padding: '2px',
          border: '1px solid var(--color-border)',
          height: '34px',
          boxSizing: 'border-box'
        }}>
          <button
            onClick={() => onSetQuizMode('exam')}
            style={{
              padding: '0 10px',
              height: '100%',
              borderRadius: 'var(--radius-xs)',
              border: 'none',
              background: quizMode === 'exam' ? 'var(--color-surface)' : 'transparent',
              color: quizMode === 'exam' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              fontSize: '0.78rem',
              fontWeight: quizMode === 'exam' ? 600 : 500,
              boxShadow: quizMode === 'exam' ? 'var(--shadow-subtle)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Chế độ Thi thử: Làm bài tính giờ và nộp bài để xem kết quả"
          >
            Thi thử
          </button>
          <button
            onClick={() => onSetQuizMode('practice')}
            style={{
              padding: '0 10px',
              height: '100%',
              borderRadius: 'var(--radius-xs)',
              border: 'none',
              background: quizMode === 'practice' ? 'var(--color-surface)' : 'transparent',
              color: quizMode === 'practice' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              fontSize: '0.78rem',
              fontWeight: quizMode === 'practice' ? 600 : 500,
              boxShadow: quizMode === 'practice' ? 'var(--shadow-subtle)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Chế độ Luyện tập: Xem ngay lời giải chi tiết và bản dịch khi chọn đáp án"
          >
            Luyện tập
          </button>
        </div>
      </div>

      {/* Right Header Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        {/* Keyboard Shortcuts Trigger Button */}
        <button
          onClick={onOpenShortcuts}
          className="btn btn-secondary"
          style={{ height: '34px', padding: '0 10px', fontSize: '0.82rem', color: 'var(--text-main)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}
          title="Bảng phím tắt tiện lợi (bấm phím ?)"
          aria-label="Phím tắt"
        >
          <Keyboard size={15} /> <span className="hide-on-mobile">Phím tắt</span>
        </button>

        {/* Dictionary Trigger Button */}
        <button
          onClick={onOpenDictionary}
          className="btn btn-secondary"
          style={{ height: '34px', padding: '0 12px', fontSize: '0.82rem', color: 'var(--brand-primary)', fontWeight: 600 }}
          title="Mở từ điển tra từ Anh-Việt"
        >
          <Languages size={15} /> <span className="hide-on-mobile">Tra từ điển</span>
        </button>

        <button
          onClick={onOpenGridModal}
          className="btn btn-secondary hover-lift"
          style={{ height: '34px', padding: '0 12px', fontSize: '0.82rem', color: 'var(--brand-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
          title="Mở Bảng Chọn Câu Hỏi Trực Quan"
        >
          <Grid size={15} /> Bảng chọn <span className="hide-on-mobile">({answeredCount}/{totalQuestions})</span>
        </button>

        <button
          onClick={onOpenSubmitModal}
          className="btn btn-primary"
          style={{ height: '34px', padding: '0 16px', fontSize: '0.84rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <CheckCircle size={15} /> Nộp Bài
        </button>
      </div>
    </div>
  );
};
