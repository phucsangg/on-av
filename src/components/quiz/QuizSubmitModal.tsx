import React from 'react';
import { AlertCircle } from 'lucide-react';

interface QuizSubmitModalProps {
  isOpen: boolean;
  answeredCount: number;
  totalQuestions: number;
  onClose: () => void;
  onSubmit: () => void;
}

export const QuizSubmitModal: React.FC<QuizSubmitModalProps> = ({
  isOpen,
  answeredCount,
  totalQuestions,
  onClose,
  onSubmit
}) => {
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
      zIndex: 100,
      padding: '24px'
    }}>
      <div className="glass-card animate-fade-in" style={{ padding: '36px', maxWidth: '460px', width: '100%', textAlign: 'center' }}>
        <AlertCircle size={52} color="#f59e0b" style={{ margin: '0 auto 16px' }} />
        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '12px' }}>Xác Nhận Nộp Bài Thi</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
          Bạn đã làm <strong>{answeredCount}/{totalQuestions}</strong> câu hỏi.
          {answeredCount < totalQuestions && (
            <span style={{ color: 'var(--danger)', display: 'block', marginTop: '8px', fontWeight: 700 }}>
              Còn {totalQuestions - answeredCount} câu chưa chọn đáp án!
            </span>
          )}
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ flex: 1, padding: '12px' }}
          >
            Làm Tiếp
          </button>
          <button
            onClick={onSubmit}
            className="btn btn-primary"
            style={{ flex: 1, padding: '12px' }}
          >
            Nộp Bài Ngay
          </button>
        </div>
      </div>
    </div>
  );
};
