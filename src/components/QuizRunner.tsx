import React, { useState, useEffect } from 'react';
import type { 
  ExamSet, 
  UserAnswerRecord 
} from '../types/quiz';
import { DictionaryModal } from './DictionaryModal';
import { 
  Clock, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  AlertCircle, 
  CheckCircle,
  X,
  BookOpen,
  Grid,
  ChevronDown,
  ChevronUp,
  Languages,
  Sparkles,
  Search,
  Pause,
  Play
} from 'lucide-react';

interface QuizRunnerProps {
  exam: ExamSet;
  onFinishExam: (answers: UserAnswerRecord[], timeSpentSeconds: number) => void;
  onExit: () => void;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({
  exam,
  onFinishExam,
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | null>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(exam.durationMinutes * 60);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isSpeechSpeaking, setIsSpeechSpeaking] = useState<boolean>(false);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState<boolean>(true);

  // Translation & Dictionary States
  const [isPassageTranslated, setIsPassageTranslated] = useState<boolean>(false);
  const [showQuestionTranslation, setShowQuestionTranslation] = useState<boolean>(false);
  const [isDictOpen, setIsDictOpen] = useState<boolean>(false);
  const [dictSearchWord, setDictSearchWord] = useState<string>('');
  
  // Floating selection lookup popup state
  const [selectionPopup, setSelectionPopup] = useState<{ text: string; x: number; y: number } | null>(null);

  const currentQuestion = exam.questions[currentIndex];

  // Listen for text selection across the exam workspace
  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      const selectedText = selection ? selection.toString().trim() : '';

      if (selectedText && selectedText.length > 1 && selectedText.length < 40 && /^[a-zA-Z\s-]+$/.test(selectedText)) {
        const range = selection?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        if (rect && rect.top > 0 && rect.left > 0) {
          setSelectionPopup({
            text: selectedText,
            x: rect.left + rect.width / 2,
            y: rect.top - 38
          });
          return;
        }
      }
      setSelectionPopup(null);
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  // Resolve shared reading passage for current section
  const activePassageData = (() => {
    // Standalone non-reading questions (like grammar / reordering Q13-Q17) MUST NEVER show a passage
    if (currentQuestion.type !== 'reading_comprehension' && currentQuestion.type !== 'cloze_test' && !currentQuestion.readingPassage) {
      return null;
    }

    // 1. Direct passage attached to current question
    if (currentQuestion.readingPassage) {
      return {
        passage: currentQuestion.readingPassage,
        translation: currentQuestion.passageTranslation
      };
    }

    // 2. Search backward within the same passage section
    for (let i = currentIndex - 1; i >= 0; i--) {
      const prevQ = exam.questions[i];
      if (prevQ.type !== 'reading_comprehension' && prevQ.type !== 'cloze_test') break;
      if (prevQ.readingPassage) {
        return {
          passage: prevQ.readingPassage,
          translation: prevQ.passageTranslation
        };
      }
    }

    // 3. Search forward within the same passage section
    for (let i = currentIndex + 1; i < exam.questions.length; i++) {
      const nextQ = exam.questions[i];
      if (nextQ.type !== 'reading_comprehension' && nextQ.type !== 'cloze_test') break;
      if (nextQ.readingPassage) {
        return {
          passage: nextQ.readingPassage,
          translation: nextQ.passageTranslation
        };
      }
    }

    return null;
  })();

  // Mask answer keys in passage during quiz taking (only show chosen answer or blank ____________)
  const formatPassageForTaking = (rawPassage?: string): string => {
    if (!rawPassage) return '';

    return rawPassage.replace(/<mark>\(?(\d+)\)?[\s\.\:]*\s*([\s\S]*?)<\/mark>/gi, (_fullMatch, blankNumStr) => {
      const blankNum = parseInt(blankNumStr, 10);
      
      // Find matching question in exam.questions for this blank number
      const targetQuestion = exam.questions.find(q => {
        const numRegex = new RegExp(`(blank\\s*\\(?${blankNum}\\)?|Question\\s*${blankNum}\\b|Câu\\s*${blankNum}\\b)`, 'i');
        return numRegex.test(q.questionText);
      });

      if (targetQuestion) {
        const selectedOptId = answers[targetQuestion.id];
        if (selectedOptId) {
          const selectedOpt = targetQuestion.options.find(o => o.id === selectedOptId);
          if (selectedOpt) {
            return `<mark>(${blankNum}) ${selectedOpt.text}</mark>`;
          }
        }
      }

      return `<mark>(${blankNum}) ____________</mark>`;
    });
  };

  // Auto-highlight target vocabulary/pronoun/phrase mentioned in reading comprehension questions
  const autoHighlightTargetWord = (passageText?: string, questionText?: string): string => {
    if (!passageText) return '';
    if (!questionText) return passageText;

    const match = questionText.match(/(?:word|pronoun|phrase)\s+["'“]([^"'”]+)["'”]/i);
    if (!match) return passageText;

    const targetWord = match[1].trim();
    if (!targetWord || targetWord.length < 2) return passageText;

    const alreadyMarkedRegex = new RegExp(`<mark>\\s*${targetWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*<\\/mark>`, 'i');
    if (alreadyMarkedRegex.test(passageText)) {
      return passageText;
    }

    const replaceRegex = new RegExp(`(?<!<[^>]*)\\b(${targetWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b(?![^<]*>)`, 'gi');
    return passageText.replace(replaceRegex, '<mark>$1</mark>');
  };

  const activePassage = autoHighlightTargetWord(formatPassageForTaking(activePassageData?.passage), currentQuestion.questionText);
  const activeTranslation = activePassageData?.translation;

  // Timer countdown hook
  useEffect(() => {
    if (timeLeftSeconds <= 0 || isPaused) {
      if (timeLeftSeconds <= 0) handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeftSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeftSeconds, isPaused]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSubmitModalOpen || isDictOpen) return;
      if (['a', 'A', '1'].includes(e.key)) handleSelectOption('A');
      if (['b', 'B', '2'].includes(e.key)) handleSelectOption('B');
      if (['c', 'C', '3'].includes(e.key)) handleSelectOption('C');
      if (['d', 'D', '4'].includes(e.key)) handleSelectOption('D');
      if (e.key === 'ArrowRight' && currentIndex < exam.questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isSubmitModalOpen, isDictOpen, exam.questions.length]);

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: prev[currentQuestion.id] === optionId ? null : optionId
    }));
  };

  const toggleFlag = () => {
    setFlagged(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeechSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeechSpeaking(false);
        return;
      }
      const textToRead = currentQuestion.questionText.replace(/<[^>]*>?/gm, '');
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setIsSpeechSpeaking(false);
      setIsSpeechSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const openDictionary = (word: string = '') => {
    setDictSearchWord(word);
    setIsDictOpen(true);
    setSelectionPopup(null);
  };

  const handleSubmit = () => {
    const timeSpent = (exam.durationMinutes * 60) - timeLeftSeconds;
    const finalRecords: UserAnswerRecord[] = exam.questions.map(q => {
      const selected = answers[q.id] || null;
      return {
        questionId: q.id,
        selectedAnswer: selected,
        isCorrect: selected === q.correctAnswer,
        timeSpentSeconds: 0,
        isFlagged: !!flagged[q.id]
      };
    });
    onFinishExam(finalRecords, Math.max(1, timeSpent));
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.values(answers).filter(v => v !== null).length;
  const isTimeWarning = timeLeftSeconds < 120;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-main)',
      paddingBottom: isNavigatorOpen ? '110px' : '60px'
    }}>
      
      {/* Sticky Header Bar */}
      <div className="glass-card" style={{
        borderRadius: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '12px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: 'var(--shadow-subtle)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={onExit} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
            <X size={16} /> Thoát
          </button>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>{exam.title}</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Tiến độ: <strong>{answeredCount}/{exam.questions.length}</strong> câu
            </span>
          </div>
        </div>

        {/* Center Countdown Timer & Pause Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: 'var(--radius-pill)',
            background: isTimeWarning ? 'var(--danger-bg)' : 'var(--bg-subtle)',
            color: isTimeWarning ? 'var(--danger)' : 'var(--brand-primary)',
            border: `1.5px solid ${isTimeWarning ? 'var(--danger-border)' : 'var(--border-light)'}`,
            fontWeight: 800,
            fontSize: '1.25rem'
          }}>
            <Clock size={22} className={isTimeWarning ? 'animate-pulse' : ''} />
            <span>{formatTime(timeLeftSeconds)}</span>
          </div>

          <button
            onClick={() => setIsPaused(true)}
            className="btn btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.85rem', fontWeight: 700 }}
            title="Tạm dừng đếm ngược bài thi"
          >
            <Pause size={16} /> Tạm Dừng
          </button>
        </div>

        {/* Right Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Dictionary Trigger Button */}
          <button
            onClick={() => openDictionary('')}
            className="btn btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.85rem', color: 'var(--brand-primary)', fontWeight: 700 }}
            title="Mở từ điển tra từ Anh-Việt"
          >
            <Languages size={17} /> Tra từ điển
          </button>

          <button
            onClick={() => setIsNavigatorOpen(!isNavigatorOpen)}
            className="btn btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            <Grid size={16} /> Bảng chọn ({answeredCount}/{exam.questions.length})
            {isNavigatorOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="btn btn-primary"
            style={{ padding: '10px 22px' }}
          >
            <CheckCircle size={18} /> Nộp Bài
          </button>
        </div>
      </div>

      {/* Main Spacious Test Workspace */}
      <div style={{
        flex: 1,
        width: '100%',
        maxWidth: '1560px',
        margin: '0 auto',
        padding: '28px 36px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: activePassage ? '50% 50%' : '1fr',
          gap: '28px',
          alignItems: 'start'
        }}>
          
          {/* Shared Passage Pane (Left 50%) */}
          {activePassage && (
            <div className="glass-card animate-fade-in" style={{
              padding: '32px',
              maxHeight: 'calc(100vh - 210px)',
              overflowY: 'auto',
              position: 'sticky',
              top: '80px',
              boxSizing: 'border-box'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '18px',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--brand-primary)',
                  fontWeight: 800,
                  fontSize: '1.15rem'
                }}>
                  <BookOpen size={24} />
                  <span>ĐOẠN VĂN / DỮ KIỆN DÙNG CHUNG</span>
                </div>

                {/* Translation Toggle Button */}
                <button
                  onClick={() => setIsPassageTranslated(!isPassageTranslated)}
                  className={`btn ${isPassageTranslated ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                >
                  <Languages size={15} /> {isPassageTranslated ? 'Xem Tiếng Anh' : 'Dịch Tiếng Việt'}
                </button>
              </div>
              
              <div style={{
                whiteSpace: 'pre-line',
                fontSize: '1.08rem',
                lineHeight: 1.85,
                color: 'var(--text-main)',
                background: isPassageTranslated ? 'var(--success-bg)' : 'var(--bg-subtle)',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                border: `1px solid ${isPassageTranslated ? 'var(--success-border)' : 'var(--border-light)'}`,
                transition: 'all 0.25s ease'
              }}>
                {isPassageTranslated && activeTranslation ? (
                  <div>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--success)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Sparkles size={14} /> Bản dịch tham khảo Tiếng Việt:
                    </div>
                    {activeTranslation}
                  </div>
                ) : (
                  <div style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: activePassage || '' }} />
                )}
              </div>
            </div>
          )}

          {/* Question & Options Pane (Right 50% or Full Width) */}
          <div className="glass-card animate-fade-in" style={{
            padding: '36px',
            maxWidth: activePassage ? '100%' : '980px',
            margin: activePassage ? '0' : '0 auto',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Question Badge & Tools */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="badge badge-primary" style={{ fontSize: '0.95rem', padding: '6px 16px' }}>
                  Câu {currentIndex + 1} / {exam.questions.length}
                </span>
                <span className="badge badge-warning" style={{ fontSize: '0.85rem' }}>
                  {currentQuestion.topicTag}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setShowQuestionTranslation(!showQuestionTranslation)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: `1.5px solid ${showQuestionTranslation ? 'var(--success)' : 'var(--border-light)'}`,
                    background: showQuestionTranslation ? 'var(--success-bg)' : 'var(--bg-subtle)',
                    color: showQuestionTranslation ? 'var(--success)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Languages size={16} />
                  {showQuestionTranslation ? 'Ẩn bản dịch' : 'Dịch câu hỏi & câu chọn'}
                </button>

                <button
                  onClick={handleSpeech}
                  className={`btn ${isSpeechSpeaking ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '8px 14px', fontSize: '0.85rem' }}
                >
                  <Volume2 size={16} /> Đọc phát âm
                </button>

                <button
                  onClick={toggleFlag}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    background: flagged[currentQuestion.id] ? 'rgba(245, 158, 11, 0.15)' : 'var(--bg-subtle)',
                    color: flagged[currentQuestion.id] ? 'var(--warning)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}
                >
                  <Flag size={16} fill={flagged[currentQuestion.id] ? 'currentColor' : 'none'} />
                  {flagged[currentQuestion.id] ? 'Đã đánh dấu' : 'Đánh dấu câu'}
                </button>
              </div>
            </div>

            {/* Question Text & Reordering Layout */}
            {(() => {
              let rawText = currentQuestion.questionText.replace(/\s*(?:A[\.\)]\s*.+?\s*B[\.\)]\s*.+?\s*C[\.\)]\s*.+?\s*D[\.\)]\s*.*)$/i, '').trim();

              if (currentQuestion.type === 'reordering' || (rawText.includes('\na.') || rawText.includes('\na)'))) {
                const lines = rawText.split('\n');
                const headerPrompt = lines[0];
                const sentenceItems = lines.slice(1).filter(line => line.trim().length > 0);

                if (sentenceItems.length > 0) {
                  return (
                    <div style={{ marginBottom: (showQuestionTranslation && currentQuestion.translation) ? '16px' : '24px' }}>
                      <div style={{
                        fontSize: '1.18rem',
                        fontWeight: 700,
                        lineHeight: 1.65,
                        color: 'var(--text-main)',
                        marginBottom: '16px'
                      }}>
                        {headerPrompt}
                      </div>

                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        marginBottom: '16px',
                        background: 'var(--bg-subtle)',
                        padding: '20px 24px',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-light)'
                      }}>
                        {sentenceItems.map((item, idx) => {
                          const itemMatch = item.match(/^([a-e])[\.\)]\s*(.*)$/i);
                          const label = itemMatch ? itemMatch[1].toLowerCase() : String.fromCharCode(97 + idx);
                          const textContent = itemMatch ? itemMatch[2] : item;

                          return (
                            <div key={idx} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              lineHeight: 1.6,
                              fontSize: '1.02rem',
                              color: 'var(--text-main)'
                            }}>
                              <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: '28px',
                                height: '28px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                                color: '#ffffff',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                flexShrink: 0,
                                marginTop: '1px',
                                boxShadow: '0 2px 6px rgba(79, 70, 229, 0.25)'
                              }}>
                                {label}
                              </span>
                              <span style={{ fontWeight: 500 }}>{textContent}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              }

              return (
                <div style={{
                  fontSize: '1.18rem',
                  fontWeight: 500,
                  lineHeight: 1.7,
                  marginBottom: (showQuestionTranslation && currentQuestion.translation) ? '16px' : '28px',
                  color: 'var(--text-main)',
                  whiteSpace: 'pre-line'
                }} dangerouslySetInnerHTML={{ __html: rawText }} />
              );
            })()}

            {/* Question Translation Box (Pure Translation ONLY - NO ANSWERS) */}
            {showQuestionTranslation && currentQuestion.translation && (
              <div style={{
                marginBottom: '26px',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--success-bg)',
                border: '1px solid var(--success-border)',
                fontSize: '0.98rem',
                color: 'var(--text-main)',
                lineHeight: 1.65
              }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--success)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={14} /> Bản dịch Tiếng Việt:
                </div>
                <div style={{ whiteSpace: 'pre-line' }}>
                  {currentQuestion.translation}
                </div>
              </div>
            )}

            {/* Options List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {currentQuestion.options.map((opt) => {
                const isSelected = answers[currentQuestion.id] === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className="hover-lift"
                    style={{
                      padding: '18px 24px',
                      borderRadius: 'var(--radius-lg)',
                      border: `2px solid ${isSelected ? 'var(--brand-primary)' : 'var(--border-light)'}`,
                      background: isSelected ? 'rgba(79, 70, 229, 0.08)' : 'var(--bg-surface)',
                      boxShadow: isSelected ? '0 0 18px rgba(79, 70, 229, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.02)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontWeight: isSelected ? 700 : 500
                    }}
                  >
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: isSelected ? 'var(--brand-primary)' : 'var(--bg-subtle)',
                      color: isSelected ? '#ffffff' : 'var(--text-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      flexShrink: 0
                    }}>
                      {opt.id}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.08rem', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: opt.text }} />
                      {showQuestionTranslation && opt.translation && (
                        <div style={{ fontSize: '0.9rem', color: 'var(--success)', marginTop: '4px', fontWeight: 500 }}>
                          {opt.translation}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Navigation Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)'
            }}>
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="btn btn-secondary"
                style={{ padding: '10px 22px', opacity: currentIndex === 0 ? 0.4 : 1 }}
              >
                <ChevronLeft size={18} /> Câu trước
              </button>

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Mẹo: Bôi đen từ bất kỳ để tra từ điển nhanh
              </span>

              <button
                onClick={() => setCurrentIndex(prev => Math.min(exam.questions.length - 1, prev + 1))}
                disabled={currentIndex === exam.questions.length - 1}
                className="btn btn-primary"
                style={{ padding: '10px 24px', opacity: currentIndex === exam.questions.length - 1 ? 0.4 : 1 }}
              >
                Câu tiếp <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Selection Lookup Button */}
      {selectionPopup && (
        <div
          onClick={() => openDictionary(selectionPopup.text)}
          className="animate-fade-in"
          style={{
            position: 'fixed',
            left: `${selectionPopup.x}px`,
            top: `${selectionPopup.y}px`,
            transform: 'translateX(-50%)',
            zIndex: 100,
            background: 'var(--brand-primary)',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.82rem',
            fontWeight: 800,
            boxShadow: '0 6px 20px rgba(79, 70, 229, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Search size={14} /> Tra từ "{selectionPopup.text}"
        </div>
      )}

      {/* Sticky Bottom Question Pills Bar */}
      {isNavigatorOpen && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 45,
          background: 'var(--bg-card)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border-light)',
          padding: '10px 28px',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            {/* Horizontal Pill Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              overflowX: 'auto',
              paddingBottom: '2px',
              flex: 1
            }}>
              {exam.questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
                const isQuestionFlagged = !!flagged[q.id];

                let bg = 'var(--bg-subtle)';
                let color = 'var(--text-main)';
                let border = '1px solid var(--border-light)';

                if (isCurrent) {
                  border = '2px solid var(--brand-primary)';
                  bg = isAnswered ? 'var(--brand-primary)' : 'rgba(79, 70, 229, 0.2)';
                  color = isAnswered ? '#ffffff' : 'var(--brand-primary)';
                } else if (isQuestionFlagged) {
                  bg = 'rgba(245, 158, 11, 0.25)';
                  color = 'var(--warning)';
                  border = '1px solid var(--warning)';
                } else if (isAnswered) {
                  bg = 'var(--brand-primary)';
                  color = '#ffffff';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      minWidth: '34px',
                      height: '34px',
                      borderRadius: 'var(--radius-sm)',
                      border: border,
                      background: bg,
                      color: color,
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      flexShrink: 0,
                      transition: 'all 0.15s ease'
                    }}
                    title={`Câu ${idx + 1}`}
                  >
                    {idx + 1}
                    {isQuestionFlagged && (
                      <span style={{
                        position: 'absolute',
                        top: '2px',
                        right: '2px',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--warning)'
                      }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Inline Legend Status */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap',
              borderLeft: '1px solid var(--border-light)',
              paddingLeft: '16px',
              fontWeight: 600
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--brand-primary)' }} />
                Đã làm ({answeredCount})
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--warning)' }} />
                Đánh dấu ({Object.values(flagged).filter(Boolean).length})
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Dictionary Modal */}
      <DictionaryModal
        isOpen={isDictOpen}
        onClose={() => setIsDictOpen(false)}
        initialWord={dictSearchWord}
      />

      {/* Submission Modal */}
      {isSubmitModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '24px'
        }}>
          <div className="glass-card animate-fade-in" style={{ padding: '36px', maxWidth: '460px', width: '100%', textAlign: 'center' }}>
            <AlertCircle size={52} color="#f59e0b" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '12px' }}>Xác Nhận Nộp Bài Thi</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
              Bạn đã làm <strong>{answeredCount}/{exam.questions.length}</strong> câu hỏi.
              {answeredCount < exam.questions.length && (
                <span style={{ color: 'var(--danger)', display: 'block', marginTop: '8px', fontWeight: 700 }}>
                  Còn {exam.questions.length - answeredCount} câu chưa chọn đáp án!
                </span>
              )}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="btn btn-secondary"
                style={{ flex: 1, padding: '12px' }}
              >
                Làm Tiếp
              </button>
              <button
                onClick={handleSubmit}
                className="btn btn-primary"
                style={{ flex: 1, padding: '12px' }}
              >
                Nộp Bài Ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pause Modal Overlay */}
      {isPaused && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '24px'
        }}>
          <div className="card animate-fade-in" style={{
            maxWidth: '460px',
            width: '100%',
            padding: '36px',
            textAlign: 'center',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--brand-gradient)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              boxShadow: '0 8px 24px rgba(79, 70, 229, 0.35)'
            }}>
              <Pause size={28} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px' }}>
              Bài Thi Đang Tạm Dừng ⏸️
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '28px', lineHeight: 1.6 }}>
              Đồng hồ đếm ngược và trạng thái làm bài của bạn đã tạm ngưng. Nhấn nút bên dưới khi sẵn sàng tiếp tục!
            </p>

            <button
              onClick={() => setIsPaused(false)}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '12px 20px',
                fontSize: '0.975rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-lg)',
                justifyContent: 'center'
              }}
            >
              <Play size={18} fill="currentColor" />
              <span>Tiếp Tục Làm Bài</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
