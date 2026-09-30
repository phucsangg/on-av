import React from 'react';
import { Keyboard, X } from 'lucide-react';

interface QuizShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizShortcutsModal: React.FC<QuizShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { keys: ['1', '2', '3', '4', 'A', 'B', 'C', 'D'], desc: 'Chọn nhanh đáp án tương ứng' },
    { keys: ['Alt + 1..4', 'Click phải', 'Nút mắt gạch'], desc: 'Gạch loại trừ phương án sai (loại suy)' },
    { keys: ['←', '→', 'J', 'K'], desc: 'Chuyển câu hỏi trước / kế tiếp' },
    { keys: ['F'], desc: 'Bật/tắt cờ đánh dấu câu hỏi cần xem lại' },
    { keys: ['T'], desc: 'Bật/tắt bản dịch song ngữ Anh - Việt' },
    { keys: ['P'], desc: 'Phát âm tiếng Anh chuẩn (Text-to-Speech)' },
    { keys: ['Double-click'], desc: 'Tra nhanh từ điển từ vựng trong bài đọc / câu hỏi' },
    { keys: ['?'], desc: 'Mở / đóng bảng tra cứu phím tắt' },
    { keys: ['Esc'], desc: 'Đóng popup hoặc modal đang mở' },
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.55)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 110,
      padding: '24px'
    }}>
      <div className="glass-card animate-fade-in" style={{
        padding: '28px 32px',
        maxWidth: '520px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(79, 70, 229, 0.12)',
              color: 'var(--brand-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Keyboard size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Phím Tắt Thao Tác Nhanh</h3>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>Tăng tốc độ làm bài & tập trung tối đa</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="btn btn-ghost"
            style={{ padding: '6px', borderRadius: '50%' }}
            aria-label="Đóng"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {shortcuts.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 14px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
                gap: '12px'
              }}
            >
              <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-main)' }}>{item.desc}</span>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {item.keys.map((k, kidx) => (
                  <kbd
                    key={kidx}
                    style={{
                      padding: '3px 8px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-light)',
                      boxShadow: '0 2px 0 var(--border-light)',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--brand-primary)',
                      fontFamily: 'inherit',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {k}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '22px' }}>
          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{ width: '100%', padding: '10px' }}
          >
            Đã Hiểu (Tiếp Tục Làm Bài)
          </button>
        </div>
      </div>
    </div>
  );
};
