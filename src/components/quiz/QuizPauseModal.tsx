import React from 'react';
import { Pause, Play } from 'lucide-react';

interface QuizPauseModalProps {
  isPaused: boolean;
  onResume: () => void;
}

export const QuizPauseModal: React.FC<QuizPauseModalProps> = ({ isPaused, onResume }) => {
  if (!isPaused) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '24px'
    }}>
      <div className="card animate-fade-in" style={{
        maxWidth: '460px',
        width: '100%',
        padding: '36px',
        textAlign: 'center',
        border: '1px solid var(--border-light)'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--brand-gradient)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 18px auto',
          boxShadow: '0 8px 24px rgba(79, 70, 229, 0.35)'
        }}>
          <Pause size={28} />
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px' }}>
          Bài Thi Đang Tạm Dừng ⏸️
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '28px', lineHeight: 1.6 }}>
          Đồng hồ đếm ngược và trạng thái làm bài của bạn đã tạm ngưng. Nhấn nút bên dưới khi sẵn sàng tiếp tục!
        </p>

        <button
          onClick={onResume}
          className="btn btn-primary"
          style={{
            width: '100%',
            padding: '12px 20px',
            fontSize: '0.975rem',
            fontWeight: 700,
            borderRadius: 'var(--radius-lg)',
            justifyContent: 'center'
          }}
        >
          <Play size={18} fill="currentColor" />
          <span>Tiếp Tục Làm Bài</span>
        </button>
      </div>
    </div>
  );
};
