import React, { useState } from 'react';
import type { 
  ExamSet, 
  UserAttempt, 
  UserStats,
  PageTab
} from '../types/quiz';
import { 
  GraduationCap, 
  Zap, 
  Briefcase, 
  BookOpen, 
  Clock, 
  FileText, 
  Play, 
  Search, 
  Target,
  Sparkles,
  Award,
  ChevronRight,
  Flame,
  BookMarked,
  Languages,
  History
} from 'lucide-react';

interface DashboardProps {
  examSets: ExamSet[];
  onSelectExam: (exam: ExamSet) => void;
  attempts: UserAttempt[];
  stats: UserStats;
  activeSession?: any;
  onResumeActiveSession?: () => void;
  onNavigateTab?: (tab: PageTab) => void;
  mistakesCount?: number;
  savedWordsCount?: number;
}

export const Dashboard: React.FC<DashboardProps> = ({
  examSets,
  onSelectExam,
  attempts,
  stats,
  activeSession,
  onResumeActiveSession,
  onNavigateTab,
  mistakesCount = 0,
  savedWordsCount = 0
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tất cả bộ đề' },
    { id: 'university', label: 'Đầu Vào Đại Học (HUIT)' },
    { id: 'toeic', label: 'Luyện thi TOEIC' },
    { id: 'thpt_qg', label: 'THPT Quốc Gia' },
    { id: 'quick_quiz', label: 'Trắc nghiệm nhanh' },
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
      case 'university': return <Award size={22} color="#4f46e5" />;
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

  // Personalized Greeting based on time of day
  const greeting = React.useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return { title: 'Chào buổi sáng 👋', subtitle: 'Khởi động ngày mới với 1 bài trắc nghiệm nhanh để giữ vững phong độ!' };
    if (hour < 18) return { title: 'Chào buổi chiều 👋', subtitle: 'Tiếp tục rèn luyện kỹ năng đọc hiểu và củng cố ngữ pháp tiếng Anh nhé.' };
    return { title: 'Chào buổi tối 👋', subtitle: 'Ôn lại các câu sai hôm nay và ghi nhớ từ vựng trước khi nghỉ ngơi!' };
  }, []);

  // Today's Goal Tracker Calculation
  const todayStr = new Date().toDateString();
  const todayQuestions = React.useMemo(() => {
    return attempts
      .filter(a => new Date(a.date).toDateString() === todayStr)
      .reduce((sum, a) => sum + (a.totalQuestions || 0), 0);
  }, [attempts, todayStr]);

  const dailyGoalTarget = 20;
  const goalPercent = Math.min(100, Math.round((todayQuestions / dailyGoalTarget) * 100));

  // Real data-driven personalized learning analytics
  const topicStats = React.useMemo(() => {
    const map: Record<string, { total: number; correct: number }> = {};
    attempts.forEach(att => {
      att.answers.forEach(ans => {
        const exam = examSets.find(e => e.id === att.examSetId);
        const q = exam?.questions.find(item => item.id === ans.questionId);
        const topic = q?.topicTag || 'Tổng hợp';
        if (!map[topic]) map[topic] = { total: 0, correct: 0 };
        map[topic].total++;
        if (ans.isCorrect) map[topic].correct++;
      });
    });
    return Object.entries(map).map(([topic, data]) => ({
      topic,
      total: data.total,
      correct: data.correct,
      rate: Math.round((data.correct / data.total) * 100)
    })).sort((a, b) => b.total - a.total);
  }, [attempts, examSets]);

  const weakTopics = topicStats.filter(t => t.total >= 3 && t.rate < 65).slice(0, 3);
  const strongTopics = topicStats.filter(t => t.total >= 3 && t.rate >= 80).slice(0, 3);

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '32px 24px' }}>
      
      {/* Personalized Learning Hero & Goal Banner */}
      <div className="card animate-fade-in" style={{
        padding: '32px 36px',
        marginBottom: '28px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'center' }}>
          
          {/* Left Column: Greeting & Status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span className="badge badge-primary">
                <Sparkles size={13} /> Luyện Thi Chuẩn Hóa 2026
              </span>
              <span className="badge badge-warning" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Flame size={14} fill="var(--color-warning)" /> Chuỗi {stats.streakDays} ngày
              </span>
            </div>

            <h2 style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '8px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
              {greeting.title}
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {greeting.subtitle}
            </p>

            {/* In-progress Active Exam Resume Quick Card */}
            {activeSession && onResumeActiveSession && (
              <div style={{
                background: 'var(--color-surface-subtle)',
                border: '1px solid var(--color-primary)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.04em' }}>
                    Đang làm dở bài thi:
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '2px', color: 'var(--color-text-primary)' }}>
                    {activeSession.examTitle || 'Bài làm trước đó'}
                  </div>
                </div>
                <button
                  onClick={onResumeActiveSession}
                  className="btn btn-primary"
                  style={{ padding: '6px 16px', fontSize: '0.84rem' }}
                >
                  <Play size={13} fill="currentColor" /> Tiếp tục ngay
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Today's Goal Progress Tracker */}
          <div style={{
            background: 'var(--color-surface-subtle)',
            padding: '22px 24px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={18} color="var(--color-primary)" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Mục Tiêu Hôm Nay</h3>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: goalPercent >= 100 ? 'var(--color-success)' : 'var(--color-primary)' }}>
                {todayQuestions} / {dailyGoalTarget} câu ({goalPercent}%)
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{
              width: '100%',
              height: '8px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--color-border)',
              overflow: 'hidden',
              marginBottom: '10px'
            }}>
              <div style={{
                width: `${goalPercent}%`,
                height: '100%',
                borderRadius: 'var(--radius-pill)',
                background: goalPercent >= 100 
                  ? 'var(--color-success)' 
                  : 'var(--color-primary)',
                transition: 'width 0.3s ease'
              }} />
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
              {goalPercent >= 100 
                ? 'Đã hoàn thành mục tiêu luyện tập ngày hôm nay.' 
                : `Còn ${dailyGoalTarget - todayQuestions} câu nữa để hoàn thành mục tiêu 20 câu/ngày.`}
            </p>

            {/* 3 Metric Pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '8px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>{accuracyRate}%</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Chính xác</div>
              </div>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '8px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-success)' }}>{stats.correctAnswersCount}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Câu đúng</div>
              </div>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '8px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-warning)' }}>{stats.totalTestsTaken}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Bài thi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Cards Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
        marginBottom: '28px'
      }}>
        {/* Action 1: Catalog */}
        <div 
          onClick={() => onNavigateTab && onNavigateTab('catalog')}
          className="card"
          style={{
            padding: '18px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <BookOpen size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>Kho Đề Thi Chuẩn Hóa</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Hơn 20 bộ đề Đại học, TOEIC & Sở GD</div>
          </div>
        </div>

        {/* Action 2: Mistakes */}
        <div 
          onClick={() => onNavigateTab && onNavigateTab('mistakes')}
          className="card"
          style={{
            padding: '18px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-error-subtle)', color: 'var(--color-error)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <BookMarked size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>Sổ Tay Câu Sai</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{mistakesCount} câu cần ôn tập lại</div>
          </div>
        </div>

        {/* Action 3: Vocabulary */}
        <div 
          onClick={() => onNavigateTab && onNavigateTab('dictionary')}
          className="card"
          style={{
            padding: '18px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-info-subtle)', color: 'var(--color-info)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Languages size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>Từ Điển & Flashcards</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{savedWordsCount} từ vựng đã lưu</div>
          </div>
        </div>

        {/* Action 4: Analytics */}
        <div 
          onClick={() => onNavigateTab && onNavigateTab('history')}
          className="card"
          style={{
            padding: '18px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-success-subtle)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <History size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>Lịch Sử & Thống Kê</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Xem tiến độ & biểu đồ kỹ năng</div>
          </div>
        </div>
      </div>

      {/* Personalized Learning Guidance */}
      {(weakTopics.length > 0 || strongTopics.length > 0) && (
        <div className="card animate-fade-in" style={{
          padding: '24px 28px',
          marginBottom: '28px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Sparkles size={18} color="var(--color-primary)" />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>
              Gợi Ý Lộ Trình Ôn Tập Cá Nhân Hóa
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {/* Weak topics */}
            {weakTopics.length > 0 && (
              <div style={{
                background: 'var(--color-surface-subtle)',
                padding: '16px 18px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-error-border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', color: 'var(--color-error)', fontWeight: 600, fontSize: '0.85rem' }}>
                  <span>Chủ đề cần củng cố thêm:</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {weakTopics.map(w => (
                    <div key={w.topic} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 500 }}>{w.topic}</span>
                      <span className="badge badge-danger" style={{ fontSize: '0.74rem' }}>
                        {w.rate}% ({w.correct}/{w.total})
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '10px' }}>
                  Mẹo: Dùng bộ lọc đề thi để luyện riêng các câu thuộc chủ đề này hoặc mở Sổ tay câu sai.
                </div>
              </div>
            )}

            {/* Strong topics */}
            {strongTopics.length > 0 && (
              <div style={{
                background: 'var(--color-surface-subtle)',
                padding: '16px 18px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-success-border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', color: 'var(--color-success)', fontWeight: 600, fontSize: '0.85rem' }}>
                  <span>Thế mạnh vững vàng của bạn:</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {strongTopics.map(s => (
                    <div key={s.topic} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 500 }}>{s.topic}</span>
                      <span className="badge badge-success" style={{ fontSize: '0.74rem' }}>
                        {s.rate}% ({s.correct}/{s.total})
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '10px' }}>
                  Phong độ xuất sắc! Hãy tiếp tục duy trì và mở rộng sang các dạng đề nâng cao.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', maxWidth: '100%' }}>
          {categories.map(cat => {
            const count = cat.id === 'all' 
              ? examSets.length 
              : examSets.filter(e => e.category === cat.id).length;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`tab-chip-pill ${isActive ? 'active' : ''}`}
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <span>{cat.label}</span>
                <span style={{
                  background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-subtle)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.72rem',
                  padding: '1px 6px',
                  borderRadius: '999px',
                  fontWeight: 800
                }}>
                  {count}
                </span>
              </button>
            );
          })}
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
              padding: '26px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span className="badge badge-primary" style={{ fontSize: '0.74rem' }}>
                  {exam.badge}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: 600 }}>
                  <Clock size={15} />
                  <span>{exam.durationMinutes} phút</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 1.4 }}>
                {getCategoryIcon(exam.category)}
                <span>{exam.title}</span>
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.89rem', lineHeight: 1.6, marginBottom: '16px' }}>
                {exam.description}
              </p>
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.84rem',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                paddingTop: '14px',
                borderTop: '1px solid var(--border-light)',
                fontWeight: 600
              }}>
                <span>Tổng số: <strong>{exam.questions.length} câu</strong></span>
                <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                  <Award size={14} /> Có lời giải chi tiết
                </span>
              </div>

              <button
                onClick={() => onSelectExam(exam)}
                className="btn btn-primary"
                style={{ width: '100%', height: '42px', padding: '0 16px', fontSize: '0.92rem', fontWeight: 700, gap: '8px' }}
              >
                <Play size={15} fill="currentColor" /> Bắt Đầu Làm Bài <ChevronRight size={16} />
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
