import React from 'react';
import { 
  GraduationCap, 
  Flame, 
  Moon, 
  Sun, 
  BookMarked, 
  PlusCircle, 
  Home,
  Award,
  BookOpen,
  History,
  Languages,
  Settings
} from 'lucide-react';
import type { UserStats, PageTab } from '../types/quiz';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  stats: UserStats;
  mistakesCount: number;
  savedWordsCount?: number;
  onOpenSettings?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
  stats,
  mistakesCount,
  savedWordsCount = 0,
  onOpenSettings
}) => {
  const tabs: { id: PageTab; label: string; shortLabel: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'dashboard', label: 'Trang chủ', shortLabel: 'Trang chủ', icon: <Home size={16} /> },
    { id: 'catalog', label: 'Kho Đề Thi', shortLabel: 'Kho đề', icon: <BookOpen size={16} /> },
    { id: 'mistakes', label: 'Sổ câu sai', shortLabel: 'Câu sai', icon: <BookMarked size={16} />, badge: mistakesCount },
    { id: 'dictionary', label: 'Từ điển', shortLabel: 'Từ điển', icon: <Languages size={16} />, badge: savedWordsCount },
    { id: 'history', label: 'Thống kê', shortLabel: 'Thống kê', icon: <History size={16} /> },
    { id: 'builder', label: 'Tạo đề thi', shortLabel: 'Tạo đề', icon: <PlusCircle size={16} /> }
  ];

  return (
    <>
      {/* Desktop Sticky Header Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: '10px 24px',
        boxShadow: 'var(--shadow-subtle)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('dashboard')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: 'var(--shadow-subtle)'
            }}>
              <GraduationCap size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.02em', margin: 0, color: 'var(--color-text-primary)' }}>
                ON-AV <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Prep</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500, margin: 0 }}>Luyện Thi Tiếng Anh Chuẩn Hóa</p>
            </div>
          </div>

          {/* Desktop Segmented Tab Navigator Bar */}
          <nav 
            className="desktop-tab-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              background: 'var(--color-surface-subtle)',
              padding: '3px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)'
            }}
          >
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 600 : 500,
                    borderRadius: 'var(--radius-xs)',
                    border: isActive ? '1px solid var(--color-border)' : '1px solid transparent',
                    background: isActive ? 'var(--color-surface)' : 'transparent',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    boxShadow: isActive ? 'var(--shadow-subtle)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    position: 'relative'
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>

                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span style={{
                      background: isActive ? 'var(--color-primary-subtle)' : 'var(--color-error-subtle)',
                      color: isActive ? 'var(--color-primary)' : 'var(--color-error)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      borderRadius: 'var(--radius-pill)',
                      padding: '1px 6px',
                      marginLeft: '2px',
                      border: `1px solid ${isActive ? 'var(--color-primary-border)' : 'var(--color-error-border)'}`
                    }}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Stats & Dark/Light Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Streak Counter */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-warning-subtle)',
              color: 'var(--color-warning)',
              fontWeight: 700,
              fontSize: '0.8rem',
              border: '1px solid var(--color-warning-border)'
            }} title="Chuỗi ngày luyện tập liên tục">
              <Flame size={15} fill="var(--color-warning)" />
              <span>{stats.streakDays} ngày</span>
            </div>

            {/* Accuracy Score Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-success-subtle)',
              color: 'var(--color-success)',
              fontWeight: 700,
              fontSize: '0.8rem',
              border: '1px solid var(--color-success-border)'
            }} title="Số câu làm đúng">
              <Award size={15} />
              <span>{stats.correctAnswersCount}/{stats.totalQuestionsAnswered} câu</span>
            </div>

            {/* Settings Button */}
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                title="Cài đặt & Sao lưu dữ liệu"
                aria-label="Cài đặt & Sao lưu dữ liệu"
              >
                <Settings size={16} />
              </button>
            )}

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title={isDarkMode ? "Chuyển sang Chế độ Sáng" : "Chuyển sang Chế độ Tối"}
              aria-label={isDarkMode ? "Chuyển sang Chế độ Sáng" : "Chuyển sang Chế độ Tối"}
            >
              {isDarkMode ? <Sun size={16} color="var(--color-warning)" /> : <Moon size={16} color="var(--color-primary)" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom Mobile/Tablet Tab Bar */}
      <nav 
        className="mobile-bottom-nav"
        style={{
          position: 'fixed',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-pill)',
          padding: '4px 8px',
          boxShadow: 'var(--shadow-modal)',
          display: 'none', // Controlled via CSS media query
          alignItems: 'center',
          gap: '2px',
          maxWidth: '96vw',
          width: 'max-content'
        }}
        aria-label="Thanh điều hướng di động"
      >
        {tabs.slice(0, 5).map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
                padding: '6px 10px',
                minWidth: '50px',
                minHeight: '44px',
                fontSize: '0.68rem',
                fontWeight: isActive ? 600 : 500,
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                background: isActive ? 'var(--color-primary-subtle)' : 'transparent',
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.15s ease'
              }}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {tab.icon}
              <span style={{ whiteSpace: 'nowrap' }}>{tab.shortLabel}</span>

              {tab.badge !== undefined && tab.badge > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '2px',
                  right: '4px',
                  background: 'var(--color-error)',
                  color: '#ffffff',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-pill)',
                  padding: '0 4px',
                  lineHeight: '14px'
                }}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Mobile Settings Action */}
        {onOpenSettings && (
          <button
            onClick={onOpenSettings}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              padding: '6px 8px',
              minWidth: '44px',
              minHeight: '44px',
              fontSize: '0.68rem',
              fontWeight: 500,
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: 'transparent',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer'
            }}
            aria-label="Cài đặt"
          >
            <Settings size={16} />
            <span style={{ whiteSpace: 'nowrap' }}>Cài đặt</span>
          </button>
        )}
      </nav>
    </>
  );
};

