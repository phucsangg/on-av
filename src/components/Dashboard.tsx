import React, { useState } from 'react';
import type { 
  ExamSet, 
  UserAttempt, 
  UserStats 
} from '../types/quiz';
import { 
  GraduationCap, 
  Zap, 
  Briefcase, 
  BookOpen, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Play, 
  Search, 
  TrendingUp,
  Target,
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';

interface DashboardProps {
  examSets: ExamSet[];
  onSelectExam: (exam: ExamSet) => void;
  attempts: UserAttempt[];
  stats: UserStats;
}

export const Dashboard: React.FC<DashboardProps> = ({
  examSets,
  onSelectExam,
  attempts,
  stats
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tất cả bộ đề' },
    { id: 'thpt_qg', label: 'THPT Quốc Gia' },
    { id: 'quick_quiz', label: 'Trắc nghiệm nhanh' },
    { id: 'toeic', label: 'Luyện thi TOEIC' },
    { id: 'vocab_focus', label: 'Từ vựng & Idioms' },
  ];

  const filteredExams = examSets.filter(exam => {
    const matchesCategory = selectedCategory === 'all' || exam.category === selectedCategory;
    const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          exam.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'thpt_qg': return <GraduationCap size={22} color="#4f46e5" />;
      case 'quick_quiz': return <Zap size={22} color="#f59e0b" />;
      case 'toeic': return <Briefcase size={22} color="#06b6d4" />;
      case 'vocab_focus': return <BookOpen size={22} color="#10b981" />;
      default: return <FileText size={22} />;
    }
  };

  const accuracyRate = stats.totalQuestionsAnswered > 0 
    ? Math.round((stats.correctAnswersCount / stats.totalQuestionsAnswered) * 100) 
    : 0;

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '36px 24px' }}>
      
      {/* High-Impact Hero Banner */}
      <div className="glass-card animate-fade-in" style={{
        padding: '40px 44px',
        marginBottom: '36px',
        background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.09) 0%, rgba(6, 182, 212, 0.09) 100%)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(99, 102, 241, 0.2)'
      }}>
        <div style={{ maxWidth: '720px', position: 'relative', zIndex: 2 }}>
          <span className="badge badge-primary" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} /> Hệ Thống Ôn Thi Trắc Nghiệm Thông Minh 2026
          </span>
          
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '14px', lineHeight: 1.2 }}>
            Chinh Phục Điểm Cao Tiếng Anh Với <span className="gradient-text">Đề Thi Chuẩn Bộ GD&ĐT</span>
          </h2>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', marginBottom: '28px', lineHeight: 1.6 }}>
            Tổng hợp các đề thi thử mới nhất (Sở Tuyên Quang, TOEIC, THPT QG) kèm lời giải chi tiết, bản dịch Tiếng Việt và sổ tay tự động lưu lại các câu làm sai.
          </p>

          {/* Quick Metrics Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
            <div style={{
              background: 'var(--bg-card)',
              padding: '16px 20px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(79, 70, 229, 0.15)', color: '#4f46e5' }}>
                <TrendingUp size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800 }}>{accuracyRate}%</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tỷ lệ chính xác</div>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              padding: '16px 20px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--success-bg)', color: 'var(--success)' }}>
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800 }}>{stats.correctAnswersCount} / {stats.totalQuestionsAnswered}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Câu đúng</div>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              padding: '16px 20px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
                <Target size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800 }}>{stats.totalTestsTaken}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Bài thi hoàn thành</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Navigation Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '28px'
      }}>
        {/* Category Selector Tabs */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn ${selectedCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '10px 18px', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div style={{ position: 'relative', minWidth: '260px', flex: 1, maxWidth: '360px' }}>
          <Search size={18} style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--brand-primary)',
            pointerEvents: 'none'
          }} />
          <input
            type="text"
            placeholder="Tìm tên đề thi hoặc từ khóa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{
              paddingLeft: '44px',
              paddingRight: searchQuery ? '36px' : '16px',
              height: '44px',
              fontSize: '0.9rem',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--bg-card)'
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
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
      </div>

      {/* Responsive Exam Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '24px',
        marginBottom: '48px'
      }}>
        {filteredExams.map((exam) => (
          <div 
            key={exam.id} 
            className="glass-card glass-card-hover hover-lift animate-fade-in" 
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span className="badge badge-primary">
                  {exam.badge}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <Clock size={15} />
                  <span>{exam.durationMinutes} phút</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 1.4 }}>
                {getCategoryIcon(exam.category)}
                {exam.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                {exam.description}
              </p>
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '18px',
                paddingTop: '14px',
                borderTop: '1px solid var(--border-light)',
                fontWeight: 600
              }}>
                <span>Tổng số: <strong>{exam.questions.length} câu trắc nghiệm</strong></span>
                <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Award size={14} /> Có đáp án & Lời giải
                </span>
              </div>

              <button
                onClick={() => onSelectExam(exam)}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
              >
                <Play size={16} fill="currentColor" /> Bắt Đầu Làm Bài <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* History Log Table */}
      {attempts.length > 0 && (
        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '20px' }}>
            Lịch Sử Làm Bài Gần Đây
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.925rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '14px 16px' }}>Tên đề thi</th>
                  <th style={{ padding: '14px 16px' }}>Ngày thực hiện</th>
                  <th style={{ padding: '14px 16px' }}>Kết quả điểm</th>
                  <th style={{ padding: '14px 16px' }}>Thời gian làm</th>
                  <th style={{ padding: '14px 16px' }}>Tỷ lệ chính xác</th>
                </tr>
              </thead>
              <tbody>
                {attempts.slice(0, 5).map((att) => (
                  <tr key={att.id} style={{ borderBottom: '1px solid var(--border-light)', transition: 'background 0.2s ease' }}>
                    <td style={{ padding: '16px', fontWeight: 700 }}>{att.examTitle}</td>
                    <td style={{ padding: '16px', color: 'var(--text-muted)' }}>
                      {new Date(att.date).toLocaleDateString('vi-VN')} {new Date(att.date).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span className={`badge ${att.percentage >= 70 ? 'badge-success' : 'badge-warning'}`}>
                        {att.score}/{att.totalQuestions} câu
                      </span>
                    </td>
                    <td style={{ padding: '16px', color: 'var(--text-muted)' }}>
                      {Math.floor(att.timeSpentSeconds / 60)} phút {att.timeSpentSeconds % 60} giây
                    </td>
                    <td style={{ padding: '16px', fontWeight: 800, color: att.percentage >= 70 ? 'var(--success)' : 'var(--warning)' }}>
                      {att.percentage}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
