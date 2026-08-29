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
  Languages
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
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
  stats,
  mistakesCount,
  savedWordsCount = 0
}) => {
  const tabs: { id: PageTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'dashboard', label: 'Trang chủ', icon: <Home size={16} /> },
    { id: 'catalog', label: 'Kho Đề Thi', icon: <BookOpen size={16} /> },
    { id: 'mistakes', label: 'Sổ câu sai', icon: <BookMarked size={16} />, badge: mistakesCount },
    { id: 'history', label: 'Lịch sử & Thống kê', icon: <History size={16} /> },
    { id: 'dictionary', label: 'Từ điển', icon: <Languages size={16} />, badge: savedWordsCount },
    { id: 'builder', label: 'Tạo đề thi', icon: <PlusCircle size={16} /> }
  ];

  return (
    <>
      {/* Desktop Sticky Header Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--bg-card)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-light)',
        padding: '10px 24px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
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
            style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '13px',
              background: 'var(--brand-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)'
            }}>
              <GraduationCap size={25} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                English<span className="gradient-text">Quiz</span>
              </h1>
              <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 600, margin: 0 }}>Luyện Thi Trắc Nghiệm 2026</p>
            </div>
          </div>

          {/* Desktop Glassmorphic Tab Navigator Bar */}
          <nav 
            className="desktop-tab-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'var(--bg-subtle)',
              padding: '4px 6px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-light)'
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
                    padding: '8px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    borderRadius: 'var(--radius-pill)',
                    border: 'none',
                    background: isActive ? 'var(--brand-gradient)' : 'transparent',
                    color: isActive ? '#fff' : 'var(--text-secondary)',
                    boxShadow: isActive ? '0 4px 12px rgba(79, 70, 229, 0.3)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative'
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>

                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span style={{
                      background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--danger)',
                      color: '#fff',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      borderRadius: '999px',
                      padding: '1px 6px',
                      marginLeft: '2px'
                    }}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Stats & Dark/Light Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Streak Counter */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--warning-bg)',
              color: 'var(--warning)',
              fontWeight: 800,
              fontSize: '0.825rem',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }} title="Chuỗi ngày luyện tập liên tục">
              <Flame size={16} fill="#f59e0b" />
              <span>{stats.streakDays} ngày</span>
            </div>

            {/* Accuracy Score Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--success-bg)',
              color: 'var(--success)',
              fontWeight: 800,
              fontSize: '0.825rem',
              border: '1px solid var(--success-border)'
            }} title="Số câu làm đúng">
              <Award size={16} />
              <span>{stats.correctAnswersCount}/{stats.totalQuestionsAnswered} câu</span>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-subtle)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title={isDarkMode ? "Chuyển sang Chế độ Sáng" : "Chuyển sang Chế độ Tối"}
            >
              {isDarkMode ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#4f46e5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom Mobile/Tablet Tab Bar */}
      <nav 
        className="mobile-bottom-nav"
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          background: 'var(--bg-card)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-pill)',
          padding: '6px 12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          display: 'none', // Controlled via CSS media query
          alignItems: 'center',
          gap: '8px',
          maxWidth: '92vw'
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
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                padding: '6px 10px',
                fontSize: '0.68rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: isActive ? 'rgba(79, 70, 229, 0.12)' : 'transparent',
                color: isActive ? 'var(--brand-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {tab.icon}
              <span style={{ whiteSpace: 'nowrap' }}>{tab.label.split(' ')[0]}</span>

              {tab.badge !== undefined && tab.badge > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '2px',
                  right: '4px',
                  background: 'var(--danger)',
                  color: '#fff',
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  borderRadius: '999px',
                  padding: '1px 4px'
                }}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};
