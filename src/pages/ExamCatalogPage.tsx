import React, { useState } from 'react';
import { 
  Search, 
  Award, 
  Clock, 
  Play, 
  CheckCircle2,
  ListFilter
} from 'lucide-react';
import type { ExamSet } from '../types/quiz';

interface ExamCatalogPageProps {
  examSets: ExamSet[];
  onSelectExam: (exam: ExamSet) => void;
}

export const ExamCatalogPage: React.FC<ExamCatalogPageProps> = ({
  examSets,
  onSelectExam
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'official' | 'custom'>('all');

  const categories = [
    { id: 'all', label: 'Tất Cả Đề Thi' },
    { id: 'university', label: 'Đầu Vào Đại Học (HUIT)' },
    { id: 'toeic', label: 'Định Hướng TOEIC' },
    { id: 'thpt_qg', label: 'Đề Thi THPT 2026' },
    { id: 'quick_quiz', label: 'Luyện Tập Nhanh' },
    { id: 'grammar_focus', label: 'Ngữ Pháp' },
    { id: 'vocab_focus', label: 'Từ Vựng' }
  ];

  // Filter logic
  const filteredExams = examSets.filter(exam => {
    const matchesSearch = 
      exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (exam.badge?.toLowerCase() || '').includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'all' || exam.category === selectedCategory;

    const isCustom = exam.id.startsWith('custom-exam-');
    const matchesType = 
      selectedFilter === 'all' ||
      (selectedFilter === 'official' && !isCustom) ||
      (selectedFilter === 'custom' && isCustom);

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Header Banner */}
      <div className="card" style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px 32px',
        marginBottom: '28px',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span className="badge badge-primary" style={{ fontSize: '0.72rem', letterSpacing: '0.04em' }}>
            Kho Đề Thi Chuẩn Hóa
          </span>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.825rem' }}>
            • Trọn bộ {examSets.length} Đề Thi Đầu Vào Đại Học, TOEIC & THPT Quốc Gia
          </span>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '6px 0', letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
          Hệ Thống Đề Thi Trắc Nghiệm Tiếng Anh
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', margin: 0, maxWidth: '780px', lineHeight: 1.6 }}>
          Lựa chọn đề thi chuẩn hóa: Khảo sát Anh văn đầu vào Đại học (HUIT-oriented), TOEIC Reading, chuyên đề Ngữ pháp/Từ vựng và trọn bộ đề thi thử THPT Quốc Gia mới nhất từ các Sở GD&ĐT với lời giải chi tiết và bản dịch song ngữ.
        </p>
      </div>

      {/* Filter & Search Bar Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '28px'
      }}>
        {/* Top Controls: Search + Type Filter */}
        <div style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Search Box */}
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <Search 
              size={16} 
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-muted)',
                pointerEvents: 'none'
              }} 
            />
            <input
              type="text"
              placeholder="Tìm tên đề, trường, tỉnh thành..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: '40px',
                paddingRight: searchQuery ? '36px' : '14px',
                height: '40px',
                fontSize: '0.88rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)'
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  padding: '2px'
                }}
                title="Xóa tìm kiếm"
              >
                ×
              </button>
            )}
          </div>

          {/* Quick Filter Segmented Buttons */}
          <div style={{
            display: 'flex',
            background: 'var(--color-surface-subtle)',
            padding: '2px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)',
            height: '40px',
            boxSizing: 'border-box'
          }}>
            <button
              onClick={() => setSelectedFilter('all')}
              style={{
                padding: '0 14px',
                height: '100%',
                fontSize: '0.82rem',
                fontWeight: selectedFilter === 'all' ? 600 : 500,
                borderRadius: 'var(--radius-xs)',
                border: 'none',
                background: selectedFilter === 'all' ? 'var(--color-surface)' : 'transparent',
                color: selectedFilter === 'all' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                boxShadow: selectedFilter === 'all' ? 'var(--shadow-subtle)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Tất cả ({examSets.length})
            </button>

            <button
              onClick={() => setSelectedFilter('official')}
              style={{
                padding: '0 14px',
                height: '100%',
                fontSize: '0.82rem',
                fontWeight: selectedFilter === 'official' ? 600 : 500,
                borderRadius: 'var(--radius-xs)',
                border: 'none',
                background: selectedFilter === 'official' ? 'var(--color-surface)' : 'transparent',
                color: selectedFilter === 'official' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                boxShadow: selectedFilter === 'official' ? 'var(--shadow-subtle)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Đề Chuẩn Sở/Trường
            </button>

            <button
              onClick={() => setSelectedFilter('custom')}
              style={{
                padding: '0 14px',
                height: '100%',
                fontSize: '0.82rem',
                fontWeight: selectedFilter === 'custom' ? 600 : 500,
                borderRadius: 'var(--radius-xs)',
                border: 'none',
                background: selectedFilter === 'custom' ? 'var(--color-surface)' : 'transparent',
                color: selectedFilter === 'custom' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                boxShadow: selectedFilter === 'custom' ? 'var(--shadow-subtle)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Đề Tự Tạo
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
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
      </div>

      {/* Exam Grid */}
      {filteredExams.length === 0 ? (
        <div className="card" style={{ padding: '60px 24px', textAlign: 'center' }}>
          <ListFilter size={48} color="var(--text-muted)" style={{ marginBottom: '16px', opacity: 0.6 }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 8px 0' }}>Không tìm thấy đề thi phù hợp</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 20px 0' }}>
            Không có kết quả nào khớp với từ khóa tìm kiếm hoặc bộ lọc hiện tại.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedFilter('all');
            }}
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.88rem' }}
          >
            Xóa Bộ Lọc & Tìm Kiếm
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {filteredExams.map(exam => {
            const isCustom = exam.id.startsWith('custom-exam-');
            return (
              <div
                key={exam.id}
                className="card animate-fade-in"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '22px 24px',
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-md)',
                  position: 'relative',
                  border: isCustom ? '1px dashed var(--color-primary)' : '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'all 0.15s ease'
                }}
              >
                <div>
                  {/* Badge & Category */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span className="badge badge-primary" style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Award size={12} />
                      {exam.badge}
                    </span>

                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                      {exam.totalQuestions} câu hỏi
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.06rem',
                    fontWeight: 600,
                    margin: '0 0 8px 0',
                    lineHeight: 1.4,
                    color: 'var(--color-text-primary)'
                  }}>
                    {exam.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.55,
                    margin: '0 0 16px 0',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {exam.description}
                  </p>
                </div>

                {/* Exam Meta Info & Start Button */}
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '14px', marginTop: '8px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: 500 }}>
                      <Clock size={14} />
                      <span>{exam.durationMinutes} phút</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--color-success)', fontSize: '0.8rem', fontWeight: 600 }}>
                      <CheckCircle2 size={14} />
                      <span>Có lời giải & dịch</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectExam(exam)}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      height: '38px',
                      justifyContent: 'center',
                      padding: '0 16px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      gap: '6px'
                    }}
                  >
                    <Play size={13} fill="currentColor" /> Bắt Đầu Làm Bài
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
