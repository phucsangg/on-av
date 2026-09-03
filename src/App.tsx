import React, { useState, useEffect } from 'react';
import { Clock, Play } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { QuizRunner } from './components/QuizRunner';
import { QuizResult } from './components/QuizResult';
import { MistakeNotebook } from './components/MistakeNotebook';
import { CustomExamBuilder } from './components/CustomExamBuilder';
import { ExamCatalogPage } from './pages/ExamCatalogPage';
import { HistoryStatsPage } from './pages/HistoryStatsPage';
import { DictionaryPage } from './pages/DictionaryPage';
import { SAMPLE_EXAM_SETS } from './data/questionBank';
import type { 
  ExamSet, 
  UserAttempt, 
  UserAnswerRecord, 
  SavedMistake, 
  UserStats, 
  Question,
  SavedWord,
  PageTab
} from './types/quiz';

// URL Path to View & Tab Mappings
const TAB_TO_PATH: Record<string, string> = {
  dashboard: '/',
  catalog: '/kho-de-thi',
  mistakes: '/so-tay-cau-sai',
  history: '/lich-su-thong-ke',
  dictionary: '/tu-dien',
  builder: '/tao-de-thi',
  runner: '/lam-bai',
  result: '/ket-qua'
};

const PATH_TO_VIEW: Record<string, PageTab | 'runner' | 'result'> = {
  '/': 'dashboard',
  '/kho-de-thi': 'catalog',
  '/so-tay-cau-sai': 'mistakes',
  '/lich-su-thong-ke': 'history',
  '/tu-dien': 'dictionary',
  '/tao-de-thi': 'builder',
  '/lam-bai': 'runner',
  '/ket-qua': 'result'
};

export const App: React.FC = () => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('eq_theme') === 'dark';
  });

  // Initial path resolution from browser address bar
  const getInitialView = (): { tab: PageTab; view: PageTab | 'runner' | 'result' } => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const matched = PATH_TO_VIEW[path] || PATH_TO_VIEW[hash] || 'dashboard';

    if (matched === 'runner' || matched === 'result') {
      return { tab: 'dashboard', view: matched };
    }
    return { tab: matched as PageTab, view: matched };
  };

  const initialRoute = getInitialView();

  // Active View State for Individual Pages & URL Routing
  const [activeTab, setActiveTab] = useState<PageTab>(initialRoute.tab);
  const [currentView, setCurrentView] = useState<PageTab | 'runner' | 'result'>(initialRoute.view);

  // Active Quiz State
  const [activeExam, setActiveExam] = useState<ExamSet | null>(null);
  const [lastAttemptAnswers, setLastAttemptAnswers] = useState<UserAnswerRecord[]>([]);
  const [lastAttemptTime, setLastAttemptTime] = useState<number>(0);

  // Active In-Progress Session State
  const [activeSession, setActiveSession] = useState<{
    examSetId: string;
    examTitle: string;
    currentIndex: number;
    answers: Record<string, string>;
    timeElapsedSeconds: number;
    lastUpdated: string;
  } | null>(() => {
    try {
      const saved = localStorage.getItem('on_av_active_session');
      return saved ? JSON.parse(saved) : null;
    } catch (_e) {
      return null;
    }
  });

  // Sync activeSession whenever currentView changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem('on_av_active_session');
      setActiveSession(saved ? JSON.parse(saved) : null);
    } catch (_e) {}
  }, [currentView]);

  // Storage States
  const [examSets, setExamSets] = useState<ExamSet[]>(() => {
    const savedCustom = localStorage.getItem('eq_custom_exams');
    if (savedCustom) {
      try {
        const parsed = JSON.parse(savedCustom);
        return [...SAMPLE_EXAM_SETS, ...parsed];
      } catch (e) {
        return SAMPLE_EXAM_SETS;
      }
    }
    return SAMPLE_EXAM_SETS;
  });

  const [attempts, setAttempts] = useState<UserAttempt[]>(() => {
    const saved = localStorage.getItem('eq_attempts');
    return saved ? JSON.parse(saved) : [];
  });

  const [mistakes, setMistakes] = useState<SavedMistake[]>(() => {
    const saved = localStorage.getItem('eq_mistakes');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedWords, setSavedWords] = useState<SavedWord[]>(() => {
    const saved = localStorage.getItem('eq_saved_words');
    return saved ? JSON.parse(saved) : [];
  });

  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('eq_stats');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      totalTestsTaken: 0,
      totalQuestionsAnswered: 0,
      correctAnswersCount: 0,
      streakDays: 1,
      lastActiveDate: new Date().toISOString(),
      skillAccuracy: {}
    };
  });

  // Sync Theme with DOM
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('eq_theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('eq_theme', 'light');
    }
  }, [isDarkMode]);

  // Sync state with Browser History & Address Bar
  const navigateToView = (view: PageTab | 'runner' | 'result', tab?: PageTab) => {
    const targetTab = tab || (view === 'runner' || view === 'result' ? activeTab : (view as PageTab));
    const targetPath = TAB_TO_PATH[view] || '/';

    setCurrentView(view);
    setActiveTab(targetTab);

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view, tab: targetTab }, '', targetPath);
    }
  };

  // Listen for Browser Back / Forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const matched = PATH_TO_VIEW[path] || 'dashboard';

      if (matched === 'runner' || matched === 'result') {
        setCurrentView(matched);
      } else {
        const pageTab = matched as PageTab;
        setCurrentView(pageTab);
        setActiveTab(pageTab);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Auto-resolve activeExam from URL query parameter ?examId=... on direct page load
  useEffect(() => {
    if (currentView === 'runner' && !activeExam) {
      const params = new URLSearchParams(window.location.search);
      const examId = params.get('examId');
      if (examId) {
        const found = examSets.find(e => e.id === examId);
        if (found) {
          setActiveExam(found);
          return;
        }
      }
      if (examSets.length > 0) {
        setActiveExam(examSets[0]);
      }
    }
  }, [currentView, activeExam, examSets]);

  // Persist State to LocalStorage
  useEffect(() => {
    localStorage.setItem('eq_attempts', JSON.stringify(attempts));
  }, [attempts]);

  useEffect(() => {
    localStorage.setItem('eq_mistakes', JSON.stringify(mistakes));
  }, [mistakes]);

  useEffect(() => {
    localStorage.setItem('eq_saved_words', JSON.stringify(savedWords));
  }, [savedWords]);

  useEffect(() => {
    localStorage.setItem('eq_stats', JSON.stringify(stats));
  }, [stats]);

  // Handle Page Navigation Change from Navbar or Buttons
  const handleTabChange = (tab: PageTab) => {
    navigateToView(tab, tab);
  };

  // Start Exam Handler
  const handleSelectExam = (exam: ExamSet) => {
    try {
      const saved = localStorage.getItem('on_av_active_session');
      const session = saved ? JSON.parse(saved) : null;
      if (session && session.examSetId !== exam.id) {
        const confirmNew = window.confirm(`Bạn đang làm dở bài thi "${session.examTitle}". Bạn có muốn hủy bài cũ đó để bắt đầu bài thi mới này không?`);
        if (!confirmNew) {
          return;
        }
        localStorage.removeItem('on_av_active_session');
        setActiveSession(null);
      }
    } catch (_e) {}

    setActiveExam(exam);
    navigateToView('runner');
  };

  // Finish Exam Handler
  const handleFinishExam = (answers: UserAnswerRecord[], timeSpentSeconds: number) => {
    if (!activeExam) return;

    const correctCount = answers.filter(a => a.isCorrect).length;
    const totalQ = activeExam.questions.length;
    const percentage = Math.round((correctCount / totalQ) * 100);

    const newAttempt: UserAttempt = {
      id: `att-${Date.now()}`,
      examSetId: activeExam.id,
      examTitle: activeExam.title,
      date: new Date().toISOString(),
      score: correctCount,
      totalQuestions: totalQ,
      percentage,
      timeSpentSeconds,
      answers
    };

    setAttempts(prev => [newAttempt, ...prev]);
    setLastAttemptAnswers(answers);
    setLastAttemptTime(timeSpentSeconds);

    // Auto-save wrong answers to mistake notebook
    const wrongRecords = answers.filter(a => !a.isCorrect);
    const newMistakes: SavedMistake[] = wrongRecords.map(rec => {
      const qObj = activeExam.questions.find(q => q.id === rec.questionId)!;
      return {
        question: qObj,
        addedAt: new Date().toISOString(),
        userWrongAnswersCount: 1
      };
    }).filter(m => m.question);

    setMistakes(prev => {
      const existingIds = new Set(prev.map(p => p.question.id));
      const filtered = newMistakes.filter(m => !existingIds.has(m.question.id));
      return [...filtered, ...prev];
    });

    // Update Overall Stats
    setStats(prev => ({
      ...prev,
      totalTestsTaken: prev.totalTestsTaken + 1,
      totalQuestionsAnswered: prev.totalQuestionsAnswered + totalQ,
      correctAnswersCount: prev.correctAnswersCount + correctCount,
      lastActiveDate: new Date().toISOString()
    }));

    navigateToView('result');
  };

  // Save Single Mistake Question Handler
  const handleSaveMistakeQuestion = (question: Question) => {
    setMistakes(prev => {
      if (prev.some(m => m.question.id === question.id)) return prev;
      return [
        {
          question,
          addedAt: new Date().toISOString(),
          userWrongAnswersCount: 1
        },
        ...prev
      ];
    });
  };

  // Remove Mistake Handler
  const handleRemoveMistake = (questionId: string) => {
    setMistakes(prev => prev.filter(m => m.question.id !== questionId));
  };

  // Practice Mistakes Handler
  const handlePracticeMistakes = (questions: Question[]) => {
    const mistakeExam: ExamSet = {
      id: `exam-mistakes-${Date.now()}`,
      title: 'Ôn Tập Câu Sai Trong Sổ Tay',
      description: 'Luyện tập lại các câu hỏi bạn từng làm chưa đúng.',
      category: 'quick_quiz',
      durationMinutes: Math.max(5, Math.ceil(questions.length * 1.5)),
      totalQuestions: questions.length,
      badge: 'Sổ Tay Câu Sai',
      iconName: 'BookMarked',
      questions
    };

    setActiveExam(mistakeExam);
    navigateToView('runner');
  };

  // Save Custom Exam Handler
  const handleSaveNewExam = (newExam: ExamSet) => {
    setExamSets(prev => [newExam, ...prev]);
    const customOnly = examSets.filter(e => e.id.startsWith('custom-exam-'));
    localStorage.setItem('eq_custom_exams', JSON.stringify([...customOnly, newExam]));
    handleTabChange('catalog');
  };

  // View Past Attempt Handler
  const handleViewPastAttempt = (attempt: UserAttempt) => {
    const foundExam = examSets.find(e => e.id === attempt.examSetId);
    if (foundExam) {
      setActiveExam(foundExam);
      setLastAttemptAnswers(attempt.answers);
      setLastAttemptTime(attempt.timeSpentSeconds);
      navigateToView('result');
    }
  };

  // Word notebook handlers
  const handleSaveWord = (word: SavedWord) => {
    setSavedWords(prev => {
      if (prev.some(w => w.word.toLowerCase() === word.word.toLowerCase())) return prev;
      return [word, ...prev];
    });
  };

  const handleRemoveWord = (id: string) => {
    setSavedWords(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hide Navbar during quiz attempt for full focus */}
      {currentView !== 'runner' && (
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          stats={stats}
          mistakesCount={mistakes.length}
          savedWordsCount={savedWords.length}
        />
      )}

      {/* Active In-Progress Quiz Resume Banner */}
      {currentView !== 'runner' && activeSession && (
        <div style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
          color: '#ffffff',
          padding: '12px 24px',
          boxShadow: '0 8px 24px rgba(79, 70, 229, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          position: 'sticky',
          top: '72px',
          zIndex: 90
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Clock size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: 'normal', fontFamily: 'var(--font-sans)' }}>
                ⚡ Bài thi đang làm dở: {activeSession.examTitle}
              </div>
              <div style={{ fontSize: '0.82rem', opacity: 0.9, marginTop: '2px', letterSpacing: 'normal', fontFamily: 'var(--font-sans)' }}>
                Đã trả lời {Object.values(activeSession.answers || {}).filter(v => v !== null).length} câu • Thời gian làm bài: {Math.floor((activeSession.timeElapsedSeconds || 0) / 60).toString().padStart(2, '0')}:{((activeSession.timeElapsedSeconds || 0) % 60).toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => {
                const found = examSets.find(e => e.id === activeSession.examSetId);
                if (found) {
                  setActiveExam(found);
                  navigateToView('runner');
                }
              }}
              style={{
                background: '#ffffff',
                color: '#4f46e5',
                fontWeight: 700,
                border: 'none',
                padding: '8px 18px',
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.88rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                letterSpacing: 'normal',
                fontFamily: 'var(--font-sans)'
              }}
            >
              <Play size={15} fill="#4f46e5" /> Tiếp tục làm bài
            </button>

            <button
              onClick={() => {
                if (window.confirm('Bạn có chắc chắn muốn hủy bài thi đang làm dở này không?')) {
                  localStorage.removeItem('on_av_active_session');
                  setActiveSession(null);
                }
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '8px 14px',
                borderRadius: '999px',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 700,
                transition: 'all 0.2s ease'
              }}
            >
              Hủy bài
            </button>
          </div>
        </div>
      )}

      {/* Main View Router For Individual Pages */}
      <main style={{ flex: 1 }}>
        {currentView === 'dashboard' && (
          <Dashboard
            examSets={examSets}
            onSelectExam={handleSelectExam}
            attempts={attempts}
            stats={stats}
          />
        )}

        {currentView === 'catalog' && (
          <ExamCatalogPage
            examSets={examSets}
            onSelectExam={handleSelectExam}
          />
        )}

        {currentView === 'mistakes' && (
          <MistakeNotebook
            mistakes={mistakes}
            onRemoveMistake={handleRemoveMistake}
            onPracticeMistakes={handlePracticeMistakes}
          />
        )}

        {currentView === 'history' && (
          <HistoryStatsPage
            attempts={attempts}
            stats={stats}
            examSets={examSets}
            onSelectExam={handleSelectExam}
            onViewResult={handleViewPastAttempt}
            onClearHistory={() => setAttempts([])}
          />
        )}

        {currentView === 'dictionary' && (
          <DictionaryPage
            savedWords={savedWords}
            onSaveWord={handleSaveWord}
            onRemoveWord={handleRemoveWord}
          />
        )}

        {currentView === 'builder' && (
          <CustomExamBuilder
            onSaveNewExam={handleSaveNewExam}
          />
        )}

        {currentView === 'runner' && activeExam && (
          <QuizRunner
            exam={activeExam}
            onFinishExam={handleFinishExam}
            onExit={() => handleTabChange('dashboard')}
          />
        )}

        {currentView === 'result' && activeExam && (
          <QuizResult
            exam={activeExam}
            answers={lastAttemptAnswers}
            timeSpentSeconds={lastAttemptTime}
            onRetake={() => navigateToView('runner')}
            onGoHome={() => handleTabChange('dashboard')}
            onOpenMistakes={() => handleTabChange('mistakes')}
            onSaveMistakeQuestion={handleSaveMistakeQuestion}
            savedMistakesIds={mistakes.map(m => m.question.id)}
          />
        )}
      </main>

      {/* Footer */}
      {currentView !== 'runner' && (
        <footer style={{
          borderTop: '1px solid var(--border-light)',
          padding: '24px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.875rem',
          background: 'var(--bg-card)'
        }}>
          <p>© 2026 <strong>EnglishQuiz Master</strong>. Nền tảng ôn thi trắc nghiệm Tiếng Anh thông minh.</p>
        </footer>
      )}
    </div>
  );
};

export default App;
