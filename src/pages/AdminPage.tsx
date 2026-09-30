import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  Lock, 
  Database, 
  Search,
  Layers
} from 'lucide-react';
import type { ExamSet } from '../types/quiz';

interface AdminPageProps {
  examSets: ExamSet[];
  onBack: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ examSets, onBack }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('on_av_admin_auth') === 'true';
  });
  const [adminPin, setAdminPin] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');

  const [selectedExamId, setSelectedExamId] = useState<string>(examSets[0]?.id || '');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'flagged' | 'verified'>('all');

  // Question verification override stored in localStorage
  const [verifiedMap, setVerifiedMap] = useState<Record<string, 'faculty_verified' | 'flagged'>>(() => {
    try {
      return JSON.parse(localStorage.getItem('eq_question_overrides') || '{}');
    } catch {
      return {};
    }
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default editorial pin: 2026
    if (adminPin === '2026' || adminPin === 'admin2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('on_av_admin_auth', 'true');
      setPinError('');
    } else {
      setPinError('Mã PIN quản trị viên không chính xác (Thử: 2026)');
    }
  };

  const handleSetStatus = (qId: string, status: 'faculty_verified' | 'flagged') => {
    const updated = { ...verifiedMap, [qId]: status };
    setVerifiedMap(updated);
    localStorage.setItem('eq_question_overrides', JSON.stringify(updated));
  };

  const currentExam = examSets.find(e => e.id === selectedExamId) || examSets[0];

  const filteredQuestions = (currentExam?.questions || []).filter(q => {
    const matchesSearch = q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.id.toLowerCase().includes(searchTerm.toLowerCase());
    const status = verifiedMap[q.id] || (q.quality?.status || 'unverified');
    if (reviewFilter === 'verified') return status === 'faculty_verified';
    if (reviewFilter === 'flagged') return status === 'flagged';
    return matchesSearch;
  });

  const totalQuestionsInRepo = examSets.reduce((sum, e) => sum + e.questions.length, 0);
  const totalVerified = Object.values(verifiedMap).filter(v => v === 'faculty_verified').length;
  const totalFlagged = Object.values(verifiedMap).filter(v => v === 'flagged').length;

  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: '440px', margin: '80px auto', padding: '0 20px' }}>
        <div className="glass-card animate-fade-in" style={{ padding: '36px', textAlign: 'center' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'rgba(99, 102, 241, 0.1)',
            color: 'var(--brand-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Lock size={28} />
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 8px' }}>Khu Vực Quản Trị Viên</h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Dành riêng cho giảng viên và biên tập viên kiểm định chất lượng ngân hàng câu hỏi.
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Nhập mã PIN quản trị..."
              value={adminPin}
              onChange={(e) => setAdminPin(e.target.value)}
              className="form-input"
              style={{ textAlign: 'center', fontSize: '1.1rem', letterSpacing: '4px', height: '46px', marginBottom: '12px' }}
              autoFocus
            />

            {pinError && (
              <div style={{ color: 'var(--danger)', fontSize: '0.82rem', marginBottom: '14px', fontWeight: 600 }}>
                {pinError}
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', fontWeight: 700 }}>
              Xác Thực Quyền Quản Trị
            </button>
          </form>

          <div style={{ marginTop: '20px' }}>
            <button
              onClick={onBack}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              ← Quay lại trang chủ học viên
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '32px 24px 80px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: 'var(--brand-primary)',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '0.92rem'
          }}
        >
          <ArrowLeft size={18} /> Về ứng dụng học tập
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge badge-primary" style={{ padding: '6px 12px', fontSize: '0.82rem' }}>
            <ShieldCheck size={14} /> Chế độ Quản Trị (Admin CMS)
          </span>
          <button
            onClick={() => {
              sessionStorage.removeItem('on_av_admin_auth');
              setIsAuthenticated(false);
            }}
            className="btn btn-secondary"
            style={{ fontSize: '0.8rem', padding: '4px 10px' }}
          >
            Đăng xuất
          </button>
        </div>
      </div>

      {/* Overview Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-primary)', marginBottom: '8px' }}>
            <Database size={20} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Tổng Số Đề Thi</span>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{examSets.length} bộ đề</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Bao gồm đề HUIT, TOEIC & THPT</div>
        </div>

        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)', marginBottom: '8px' }}>
            <FileText size={20} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Tổng Số Câu Hỏi</span>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{totalQuestionsInRepo} câu</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>100% có đáp án & lời giải</div>
        </div>

        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--success)', marginBottom: '8px' }}>
            <CheckCircle2 size={20} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Đã Kiểm Định (Verified)</span>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--success)' }}>{totalVerified} câu</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Đạt chuẩn khảo thí học thuật</div>
        </div>

        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--warning)', marginBottom: '8px' }}>
            <AlertCircle size={20} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Cần Xem Lại (Flagged)</span>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: totalFlagged > 0 ? 'var(--warning)' : 'var(--text-muted)' }}>
            {totalFlagged} câu
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Có ghi chú cần hiệu đính</div>
        </div>
      </div>

      {/* Editor & Content Review Queue */}
      <div className="card" style={{ padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={20} color="var(--brand-primary)" /> Hàng Đợi Kiểm Định Câu Hỏi (Review Queue)
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Duyệt từng câu hỏi trong bộ đề, xác nhận độ chính xác hoặc gắn cờ cảnh báo lỗi
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <select
              value={selectedExamId}
              onChange={(e) => setSelectedExamId(e.target.value)}
              className="form-input"
              style={{ padding: '8px 14px', fontSize: '0.88rem', minWidth: '220px' }}
            >
              {examSets.map(e => (
                <option key={e.id} value={e.id}>
                  {e.title} ({e.questions.length} câu)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Tìm theo mã câu, nội dung stem hoặc lời giải..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '38px', height: '40px' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => setReviewFilter('all')}
              className={`tab-chip-pill ${reviewFilter === 'all' ? 'active' : ''}`}
            >
              Tất cả ({currentExam?.questions.length})
            </button>
            <button
              onClick={() => setReviewFilter('verified')}
              className={`tab-chip-pill ${reviewFilter === 'verified' ? 'active' : ''}`}
            >
              Đã duyệt
            </button>
            <button
              onClick={() => setReviewFilter('flagged')}
              className={`tab-chip-pill ${reviewFilter === 'flagged' ? 'active' : ''}`}
            >
              Cần sửa
            </button>
          </div>
        </div>

        {/* Question List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredQuestions.map((q, idx) => {
            const status = verifiedMap[q.id] || (q.quality?.status || 'unverified');

            return (
              <div 
                key={q.id}
                style={{
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  border: `1.5px solid ${status === 'faculty_verified' ? 'var(--success-border)' : status === 'flagged' ? 'var(--warning)' : 'var(--border-light)'}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-primary">Câu {idx + 1}</span>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                      ID: {q.id}
                    </span>
                    <span className="badge badge-warning">{q.topicTag}</span>
                    {status === 'faculty_verified' && (
                      <span className="badge badge-success">✓ Giảng viên đã duyệt</span>
                    )}
                    {status === 'flagged' && (
                      <span className="badge badge-error">⚠️ Cần hiệu đính</span>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleSetStatus(q.id, 'faculty_verified')}
                      className="btn btn-secondary"
                      style={{ padding: '4px 10px', fontSize: '0.78rem', color: 'var(--success)' }}
                    >
                      ✓ Xác thực
                    </button>
                    <button
                      onClick={() => handleSetStatus(q.id, 'flagged')}
                      className="btn btn-secondary"
                      style={{ padding: '4px 10px', fontSize: '0.78rem', color: 'var(--warning)' }}
                    >
                      Gắn cờ kiểm tra
                    </button>
                  </div>
                </div>

                <div style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: '12px', color: 'var(--text-main)' }}>
                  {q.questionText}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', marginBottom: '12px' }}>
                  {q.options.map(opt => (
                    <div
                      key={opt.id}
                      style={{
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: opt.id === q.correctAnswer ? 'var(--success-bg)' : 'var(--bg-surface)',
                        border: `1px solid ${opt.id === q.correctAnswer ? 'var(--success)' : 'var(--border-light)'}`,
                        fontSize: '0.88rem',
                        fontWeight: opt.id === q.correctAnswer ? 700 : 400
                      }}
                    >
                      <strong style={{ color: opt.id === q.correctAnswer ? 'var(--success)' : 'inherit' }}>
                        {opt.id}.
                      </strong> {opt.text}
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'var(--bg-card)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                  <strong>Lời giải:</strong> {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
