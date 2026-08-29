import React, { useState } from 'react';
import { 
  History, 
  Award, 
  Clock, 
  CheckCircle2, 
  Flame, 
  BarChart2, 
  RotateCcw, 
  Trash2, 
  Eye, 
  Calendar,
  BookOpen,
  Target,
  Search
} from 'lucide-react';
import type { UserAttempt, UserStats, ExamSet } from '../types/quiz';

interface HistoryStatsPageProps {
  attempts: UserAttempt[];
  stats: UserStats;
  examSets: ExamSet[];
  onSelectExam: (exam: ExamSet) => void;
  onViewResult: (attempt: UserAttempt) => void;
  onClearHistory: () => void;
}

export const HistoryStatsPage: React.FC<HistoryStatsPageProps> = ({
  attempts,
  stats,
  examSets,
  onSelectExam,
  onViewResult,
  onClearHistory
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);

  const totalAttempted = attempts.length;
  const overallAccuracy = stats.totalQuestionsAnswered > 0
    ? Math.round((stats.correctAnswersCount / stats.totalQuestionsAnswered) * 100)
    : 0;

  const filteredAttempts = attempts.filter(a => 
    a.examTitle.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return isoStr;
    }
  };

  // Skill & Question Type Breakdown Calculation
  const skillBreakdown = (() => {
    const map: Record<string, { total: number; correct: number; label: string; icon: string }> = {
      grammar: { total: 0, correct: 0, label: 'Ngữ pháp & Các thì (Grammar)', icon: '✍️' },
      vocabulary: { total: 0, correct: 0, label: 'Từ vựng & Cụm từ (Vocabulary)', icon: '🔤' },
      reading_comprehension: { total: 0, correct: 0, label: 'Đọc hiểu đoạn văn (Reading)', icon: '📖' },
      cloze_test: { total: 0, correct: 0, label: 'Điền từ bài đọc (Cloze Test)', icon: '🧩' },
      reordering: { total: 0, correct: 0, label: 'Sắp xếp câu & Thư (Reordering)', icon: '🔀' },
      communication: { total: 0, correct: 0, label: 'Giao tiếp & Tình huống (Communication)', icon: '🗣️' }
    };

    attempts.forEach(att => {
      const exam = examSets.find(e => e.id === att.examSetId);
      if (!exam) return;
      att.answers.forEach(ans => {
        const q = exam.questions.find(item => item.id === ans.questionId);
        if (!q) return;
        const typeKey = map[q.type] ? q.type : 'grammar';
        map[typeKey].total += 1;
        if (ans.isCorrect) map[typeKey].correct += 1;
      });
    });

    return map;
  })();

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Page Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '28px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              padding: '8px 12px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--brand-gradient)',
              color: '#fff'
            }}>
              <History size={22} />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              Lịch Sử Làm Bài & Thống Kê Chi Tiết 📊
            </h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginTop: '6px' }}>
            Theo dõi tiến trình học tập, phân tích năng lực từng dạng bài và đánh giá độ chính xác qua thời gian.
          </p>
        </div>

        {attempts.length > 0 && (
          <div>
            {!confirmClear ? (
              <button
                onClick={() => setConfirmClear(true)}
                className="btn btn-secondary"
                style={{ fontSize: '0.85rem', color: 'var(--danger)' }}
              >
                <Trash2 size={16} />
                <span>Xóa lịch sử</span>
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--danger)', fontWeight: 700 }}>Xác nhận xóa hết lịch sử?</span>
                <button
                  onClick={() => {
                    onClearHistory();
                    setConfirmClear(false);
                  }}
                  className="btn btn-primary"
                  style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'var(--danger)' }}
                >
                  Có, xóa
                </button>
                <button
                  onClick={() => setConfirmClear(false)}
                  className="btn btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                >
                  Hủy
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* KPI Stats Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '20px',
        marginBottom: '36px'
      }}>
        {/* Total Tests */}
        <div className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'rgba(79, 70, 229, 0.15)',
            color: 'var(--brand-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BarChart2 size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>{totalAttempted}</div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 600 }}>Lần Làm Bài Thi</div>
          </div>
        </div>

        {/* Accuracy Rate */}
        <div className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'rgba(16, 185, 129, 0.15)',
            color: 'var(--success)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <CheckCircle2 size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--success)' }}>{overallAccuracy}%</div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 600 }}>Độ Chính Xác Trung Bình</div>
          </div>
        </div>

        {/* Correct Answers */}
        <div className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'rgba(245, 158, 11, 0.15)',
            color: 'var(--warning)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Award size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {stats.correctAnswersCount}/{stats.totalQuestionsAnswered}
            </div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 600 }}>Câu Trả Lời Đúng</div>
          </div>
        </div>

        {/* Streak */}
        <div className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'rgba(239, 68, 68, 0.15)',
            color: '#ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Flame size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>{stats.streakDays} Ngày</div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 600 }}>Chuỗi Học Liên Tục</div>
          </div>
        </div>
      </div>

      {/* Skill & Question Type Breakdown Analysis Card */}
      {totalAttempted > 0 && (
        <div className="card" style={{ padding: '28px', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Target size={22} color="var(--brand-primary)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
              Phân Tích Năng Lực Theo Dạng Bài Thi 🎯
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {Object.entries(skillBreakdown).map(([key, item]) => {
              const acc = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
              const isHigh = acc >= 75;
              const isMed = acc >= 50 && acc < 75;

              return (
                <div key={key} style={{
                  background: 'var(--bg-subtle)',
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {item.icon} {item.label}
                    </span>
                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: isHigh ? 'var(--success)' : isMed ? 'var(--warning)' : 'var(--danger)'
                    }}>
                      {acc}% ({item.correct}/{item.total} câu)
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div style={{
                    height: '8px',
                    width: '100%',
                    background: 'var(--border-light)',
                    borderRadius: '999px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${item.total > 0 ? acc : 0}%`,
                      background: isHigh ? 'var(--success)' : isMed ? 'var(--warning)' : 'var(--danger)',
                      borderRadius: '999px',
                      transition: 'width 0.5s ease'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Attempt History Section */}
      <div className="card" style={{ padding: '28px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '20px'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
            Lịch Sử Các Lần Luyện Đề ({attempts.length})
          </h3>

          {attempts.length > 0 && (
            <div style={{ position: 'relative', width: '260px' }}>
              <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--brand-primary)', pointerEvents: 'none' }} />
              <input
                type="text"
                placeholder="Lọc theo tên đề thi..."
                value={filterQuery}
                onChange={e => setFilterQuery(e.target.value)}
                className="form-input"
                style={{
                  paddingLeft: '38px',
                  paddingRight: filterQuery ? '32px' : '14px',
                  height: '40px',
                  fontSize: '0.85rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--bg-card)'
                }}
              />
              {filterQuery && (
                <button
                  type="button"
                  onClick={() => setFilterQuery('')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                  }}
                  title="Xóa tìm kiếm"
                >
                  ×
                </button>
              )}
            </div>
          )}
        </div>

        {filteredAttempts.length === 0 ? (
          <div style={{ padding: '48px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <BookOpen size={44} style={{ marginBottom: '12px', opacity: 0.5 }} />
            <p style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 6px 0' }}>Chưa có lịch sử làm bài</p>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>Hãy chọn một đề thi bất kỳ trên Trang chủ hoặc Mục Đề Thi để bắt đầu luyện tập!</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9rem',
              textAlign: 'left'
            }}>
              <thead>
                <tr style={{
                  borderBottom: '2px solid var(--border-light)',
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  <th style={{ padding: '12px 16px' }}>Thời Gian</th>
                  <th style={{ padding: '12px 16px' }}>Tên Đề Thi</th>
                  <th style={{ padding: '12px 16px' }}>Điểm Số</th>
                  <th style={{ padding: '12px 16px' }}>Độ Chính Xác</th>
                  <th style={{ padding: '12px 16px' }}>Thời Gian Làm</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredAttempts.map((att, idx) => {
                  const isHigh = att.percentage >= 80;
                  const isMed = att.percentage >= 50 && att.percentage < 80;
                  const targetExam = examSets.find(e => e.id === att.examSetId);

                  return (
                    <tr
                      key={att.id || idx}
                      style={{
                        borderBottom: '1px solid var(--border-light)',
                        transition: 'background 0.15s ease'
                      }}
                    >
                      {/* Date */}
                      <td style={{ padding: '16px', whiteSpace: 'nowrap', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Calendar size={14} />
                          <span>{formatDate(att.date)}</span>
                        </div>
                      </td>

                      {/* Title */}
                      <td style={{ padding: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                        {att.examTitle}
                      </td>

                      {/* Score */}
                      <td style={{ padding: '16px', fontWeight: 800, fontSize: '0.95rem' }}>
                        {att.score} / {att.totalQuestions}
                      </td>

                      {/* Percentage Badge */}
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          background: isHigh ? 'var(--success-bg)' : isMed ? 'var(--warning-bg)' : 'rgba(239, 68, 68, 0.15)',
                          color: isHigh ? 'var(--success)' : isMed ? 'var(--warning)' : '#ef4444',
                          border: isHigh ? '1px solid var(--success-border)' : isMed ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)'
                        }}>
                          {att.percentage}%
                        </span>
                      </td>

                      {/* Duration */}
                      <td style={{ padding: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={14} />
                          <span>{formatSeconds(att.timeSpentSeconds || 0)}</span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '8px' }}>
                          <button
                            onClick={() => onViewResult(att)}
                            className="btn btn-secondary"
                            style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                            title="Xem lại bài chi tiết"
                          >
                            <Eye size={14} />
                            <span>Xem Lại</span>
                          </button>

                          {targetExam && (
                            <button
                              onClick={() => onSelectExam(targetExam)}
                              className="btn btn-primary"
                              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                              title="Làm lại đề thi này"
                            >
                              <RotateCcw size={14} />
                              <span>Làm Lại</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
