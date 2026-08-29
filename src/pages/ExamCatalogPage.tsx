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
      exam.badge.toLowerCase().includes(searchQuery.toLowerCase());

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
      <div style={{
        background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.12) 0%, rgba(147, 51, 234, 0.12) 100%)',
        border: '1px solid rgba(79, 70, 229, 0.25)',
        borderRadius: 'var(--radius-xl)',
        padding: '32px 36px',
        marginBottom: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{
            background: 'var(--brand-gradient)',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '4px 12px',
            borderRadius: '999px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Kho Đề Thi Mới Nhất 2026
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            • Trọn bộ {examSets.length} Đề Thi Chất Lượng High School & Sở GD
          </span>
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '8px 0', letterSpacing: '-0.02em' }}>
          Danh Sách Đề Thi Trắc Nghiệm Tiếng Anh 📚
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, maxWidth: '700px', lineHeight: 1.6 }}>
          Lựa chọn đề thi chuẩn cấu trúc mới nhất năm 2026 từ các Sở GD&ĐT (Hải Phòng, Đà Nẵng, Thanh Hóa, Hưng Yên, Phú Thọ...) với bản dịch Tiếng Việt & giải thích từng câu chi tiết.
        </p>
      </div>

      {/* Filter & Search Bar Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '32px'
      }}>
        {/* Top Controls: Search + Type Filter */}
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Search Box */}
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <Search 
              size={18} 
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--brand-primary)',
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
                paddingLeft: '46px',
                paddingRight: searchQuery ? '40px' : '16px',
                height: '46px',
                fontSize: '0.925rem',
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

          {/* Quick Filter Segmented Buttons */}
          <div style={{
            display: 'flex',
            background: 'var(--bg-subtle)',
            padding: '4px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)'
          }}>
            <button
              onClick={() => setSelectedFilter('all')}
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: selectedFilter === 'all' ? 'var(--bg-card)' : 'transparent',
                color: selectedFilter === 'all' ? 'var(--brand-primary)' : 'var(--text-muted)',
                boxShadow: selectedFilter === 'all' ? 'var(--shadow-sm)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Tất cả ({examSets.length})
            </button>

            <button
              onClick={() => setSelectedFilter('official')}
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: selectedFilter === 'official' ? 'var(--bg-card)' : 'transparent',
                color: selectedFilter === 'official' ? 'var(--brand-primary)' : 'var(--text-muted)',
                boxShadow: selectedFilter === 'official' ? 'var(--shadow-sm)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Đề Chuẩn Sở/Trường
            </button>

            <button
              onClick={() => setSelectedFilter('custom')}
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: selectedFilter === 'custom' ? 'var(--bg-card)' : 'transparent',
                color: selectedFilter === 'custom' ? 'var(--brand-primary)' : 'var(--text-muted)',
                boxShadow: selectedFilter === 'custom' ? 'var(--shadow-sm)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Đề Tự Tạo
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: selectedCategory === cat.id ? '1px solid var(--brand-primary)' : '1px solid var(--border-light)',
                background: selectedCategory === cat.id ? 'var(--brand-gradient)' : 'var(--bg-card)',
                color: selectedCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                boxShadow: selectedCategory === cat.id ? '0 4px 12px rgba(79, 70, 229, 0.25)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Exam Grid */}
      {filteredExams.length === 0 ? (
        <div className="card" style={{ padding: '60px 24px', textAlign: 'center' }}>
          <ListFilter size={48} color="var(--text-muted)" style={{ marginBottom: '16px', opacity: 0.6 }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 8px 0' }}>Không tìm thấy đề thi phù hợp</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác.
          </p>
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
                className="card card-hover"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px',
                  position: 'relative',
                  border: isCustom ? '1px dashed var(--brand-primary)' : '1px solid var(--border-light)'
                }}
              >
                <div>
                  {/* Badge & Category */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      background: isCustom ? 'rgba(236, 72, 153, 0.12)' : 'var(--badge-bg)',
                      color: isCustom ? '#ec4899' : 'var(--badge-color)',
                      border: isCustom ? '1px solid rgba(236, 72, 153, 0.3)' : '1px solid var(--border-light)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Award size={13} />
                      {exam.badge}
                    </span>

                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {exam.totalQuestions} Câu hỏi
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    margin: '0 0 10px 0',
                    lineHeight: 1.4,
                    color: 'var(--text-main)'
                  }}>
                    {exam.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    margin: '0 0 18px 0',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {exam.description}
                  </p>
                </div>

                {/* Exam Meta Info & Start Button */}
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px', marginTop: '12px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.825rem', fontWeight: 600 }}>
                      <Clock size={15} />
                      <span>{exam.durationMinutes} Phút</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--success)', fontSize: '0.825rem', fontWeight: 700 }}>
                      <CheckCircle2 size={15} />
                      <span>Có bản dịch Tiếng Việt</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectExam(exam)}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '10px 16px',
                      fontSize: '0.9rem',
                      fontWeight: 700
                    }}
                  >
                    <Play size={16} fill="currentColor" />
                    <span>Bắt Đầu Làm Bài</span>
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
