import React, { useState } from 'react';
import { 
  Settings, 
  X, 
  Moon, 
  Sun, 
  Download, 
  Upload, 
  RotateCcw, 
  Check, 
  AlertTriangle
} from 'lucide-react';
import { storageService } from '../services/storageService';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onResetAllData: () => void;
  onDataRestored: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  setIsDarkMode,
  onResetAllData,
  onDataRestored
}) => {
  const [confirmReset, setConfirmReset] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  // Handle export all study data as a JSON file
  const handleExportData = () => {
    try {
      const data = {
        version: '1.1.0',
        exportedAt: new Date().toISOString(),
        attempts: storageService.getAttempts(),
        mistakes: storageService.getMistakes(),
        savedWords: storageService.getSavedWords(),
        customExams: storageService.getCustomExams(),
        stats: storageService.getStats()
      };
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `englishquiz_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch {
      alert('Không thể xuất dữ liệu. Vui lòng thử lại.');
    }
  };

  // Handle import study data from a JSON file
  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);

        if (!parsed || typeof parsed !== 'object') {
          throw new Error('Định dạng JSON không hợp lệ');
        }

        if (Array.isArray(parsed.attempts)) {
          storageService.saveAttempts(parsed.attempts);
        }
        if (Array.isArray(parsed.mistakes)) {
          storageService.saveMistakes(parsed.mistakes);
        }
        if (Array.isArray(parsed.savedWords)) {
          storageService.saveSavedWords(parsed.savedWords);
        }
        if (Array.isArray(parsed.customExams)) {
          storageService.saveCustomExams(parsed.customExams);
        }
        if (parsed.stats && typeof parsed.stats === 'object') {
          storageService.saveStats(parsed.stats);
        }

        setImportStatus('Khôi phục dữ liệu thành công! Đang tải lại...');
        setTimeout(() => {
          setImportStatus(null);
          onDataRestored();
          onClose();
        }, 1200);
      } catch {
        setImportStatus('Lỗi: File sao lưu không hợp lệ hoặc bị hỏng.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
    >
      <div 
        className="glass-card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '540px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '28px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
          background: 'var(--bg-surface)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--brand-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <Settings size={20} />
            </div>
            <div>
              <h3 id="settings-title" style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
                Cài Đặt & Quản Lý Dữ Liệu
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Tùy chỉnh giao diện, sao lưu tiến độ và phím tắt
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-subtle)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
            aria-label="Đóng cài đặt"
          >
            <X size={18} />
          </button>
        </div>

        {/* Setting 1: Theme */}
        <div style={{
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-subtle)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Giao diện hiển thị</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Chuyển đổi giữa chế độ Sáng (Light) và Tối (Dark)
            </div>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="btn btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            {isDarkMode ? <Sun size={16} color="#f59e0b" /> : <Moon size={16} color="#4f46e5" />}
            <span>{isDarkMode ? 'Chế độ Sáng' : 'Chế độ Tối'}</span>
          </button>
        </div>

        {/* Setting 2: Keyboard shortcuts guide */}
        <div style={{
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-subtle)',
          marginBottom: '16px'
        }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
            ⌨️ Phím tắt khi làm bài (Desktop)
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '0.82rem' }}>
            <div><kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>1</kbd> hoặc <kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>A</kbd>: Chọn đáp án A</div>
            <div><kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>2</kbd> hoặc <kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>B</kbd>: Chọn đáp án B</div>
            <div><kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>3</kbd> hoặc <kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>C</kbd>: Chọn đáp án C</div>
            <div><kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>4</kbd> hoặc <kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>D</kbd>: Chọn đáp án D</div>
            <div><kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>←</kbd> / <kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>→</kbd>: Chuyển câu hỏi</div>
            <div><kbd style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 700 }}>F</kbd>: Đặt cờ đánh dấu câu hỏi</div>
          </div>
        </div>

        {/* Setting 3: Backup & Restore */}
        <div style={{
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-subtle)',
          marginBottom: '16px'
        }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
            📦 Sao lưu & Khôi phục dữ liệu
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
            Xuất lịch sử làm bài, sổ câu sai và từ vựng sang file JSON để lưu trữ hoặc chuyển sang máy khác.
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleExportData}
              className="btn btn-secondary"
              style={{ flex: 1, minWidth: '160px', padding: '10px', fontSize: '0.85rem' }}
            >
              {exportSuccess ? <Check size={16} color="var(--success)" /> : <Download size={16} />}
              <span>{exportSuccess ? 'Đã tải file sao lưu!' : 'Tải file sao lưu (JSON)'}</span>
            </button>

            <label 
              className="btn btn-secondary" 
              style={{ flex: 1, minWidth: '160px', padding: '10px', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              <Upload size={16} />
              <span>Khôi phục từ JSON</span>
              <input 
                type="file" 
                accept=".json" 
                onChange={handleImportData} 
                style={{ display: 'none' }} 
              />
            </label>
          </div>

          {importStatus && (
            <div style={{
              marginTop: '10px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: importStatus.startsWith('Lỗi') ? 'var(--danger)' : 'var(--success)'
            }}>
              {importStatus}
            </div>
          )}
        </div>

        {/* Setting 4: Reset all data */}
        <div style={{
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(239, 68, 68, 0.06)',
          border: '1px solid rgba(239, 68, 68, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--danger)', fontWeight: 700, marginBottom: '4px' }}>
            <AlertTriangle size={18} />
            <span>Xóa toàn bộ tiến độ học</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Hành động này sẽ xóa toàn bộ lịch sử thi, sổ tay câu sai, từ vựng đã lưu trên thiết bị này.
          </div>

          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="btn"
              style={{
                background: 'transparent',
                color: 'var(--danger)',
                border: '1px solid var(--danger)',
                padding: '6px 14px',
                fontSize: '0.82rem'
              }}
            >
              <RotateCcw size={14} /> Xóa dữ liệu học tập
            </button>
          ) : (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => {
                  onResetAllData();
                  setConfirmReset(false);
                  onClose();
                }}
                className="btn btn-primary"
                style={{ background: 'var(--danger)', borderColor: 'var(--danger)', padding: '6px 14px', fontSize: '0.82rem' }}
              >
                Xác nhận xóa vĩnh viễn
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="btn btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.82rem' }}
              >
                Hủy
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          EnglishQuiz Master v1.1.0 • Chuẩn Đề THPT Quốc Gia 2026
        </div>
      </div>
    </div>
  );
};
