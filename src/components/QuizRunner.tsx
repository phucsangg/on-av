import React, { useState, useEffect, useCallback } from 'react';
import type { 
  ExamSet, 
  UserAnswerRecord 
} from '../types/quiz';
import { cleanTopicTag, sanitizeTranslationNoAnswer } from '../utils/sanitize';
import { DictionaryModal } from './DictionaryModal';
import { QuizShortcutsModal } from './quiz/QuizShortcutsModal';
import { QuizSubmitModal } from './quiz/QuizSubmitModal';
import { QuizPauseModal } from './quiz/QuizPauseModal';
import { QuizGridModal } from './quiz/QuizGridModal';
import { QuizHeader } from './quiz/QuizHeader';
import { useQuizTimer } from '../hooks/useQuizTimer';
import { storageService } from '../services/storageService';
import { 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Volume2, 
  X,
  BookOpen,
  Grid,
  Languages,
  Sparkles,
  Highlighter,
  EyeOff
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
  // Load saved session if available for this exam
  const savedSession = React.useMemo(() => {
    try {
      const raw = localStorage.getItem('on_av_active_session');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && (parsed.examSetId === exam.id || parsed.examId === exam.id)) {
          return parsed;
        }
      }
    } catch {}
    return null;
  }, [exam.id]);

  const [currentIndex, setCurrentIndex] = useState<number>(savedSession?.currentIndex ?? 0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | null>>(savedSession?.answers ?? {});
  const [flagged, setFlagged] = useState<Record<string, boolean>>(savedSession?.flagged ?? {});
  const [quizMode, setQuizMode] = useState<'exam' | 'practice'>('exam');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [drawerFilter, setDrawerFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');
  
  const isSubmittingRef = React.useRef(false);

  const {
    timeElapsed: timeElapsedSeconds,
    isPaused,
    pause: pauseTimer,
    resume: resumeTimer
  } = useQuizTimer({
    initialSeconds: savedSession?.timeElapsedSeconds ?? 0,
    durationMinutes: exam.durationMinutes,
    autoStart: true,
    onTimeUp: () => {
      if (isSubmittingRef.current) return;
      alert('⏰ Đã hết thời gian làm bài thi! Hệ thống đang tự động nộp bài của bạn.');
      handleSubmit();
    }
  });
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isSpeechSpeaking, setIsSpeechSpeaking] = useState<boolean>(false);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState<boolean>(true);
  const [isGridModalOpen, setIsGridModalOpen] = useState<boolean>(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, string[]>>({});
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState<boolean>(false);
  const [passageFontSize, setPassageFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Refs and scroll handlers for long reading passages
  const passagePaneRef = React.useRef<HTMLDivElement>(null);
  const passageScrollBoxRef = React.useRef<HTMLDivElement>(null);
  const passageBottomRef = React.useRef<HTMLDivElement>(null);
  const questionPaneRef = React.useRef<HTMLDivElement>(null);

  const scrollToPassageTop = () => {
    if (passageScrollBoxRef.current) {
      passageScrollBoxRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (passagePaneRef.current) {
      passagePaneRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPassageBottom = () => {
    if (passageScrollBoxRef.current) {
      passageScrollBoxRef.current.scrollTo({ top: passageScrollBoxRef.current.scrollHeight, behavior: 'smooth' });
    }
    if (questionPaneRef.current) {
      questionPaneRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToParagraph = (pIdx: number) => {
    if (passageScrollBoxRef.current) {
      const el = passageScrollBoxRef.current.querySelector(`[data-paragraph-index="${pIdx}"]`) as HTMLElement;
      if (el) {
        passageScrollBoxRef.current.scrollTo({ top: el.offsetTop - 12, behavior: 'smooth' });
        return;
      }
    }
    const el = document.querySelector(`[data-paragraph-index="${pIdx}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Auto-save active progress to storageService
  const lastSavedTimeRef = React.useRef<number>(0);
  const timeElapsedRef = React.useRef<number>(timeElapsedSeconds);

  useEffect(() => {
    timeElapsedRef.current = timeElapsedSeconds;
  }, [timeElapsedSeconds]);

  const saveCurrentSession = React.useCallback(() => {
    storageService.saveActiveSession({
      examId: exam.id,
      selectedAnswers: answers as Record<string, 'A' | 'B' | 'C' | 'D'>,
      flagged,
      currentIndex,
      timeRemainingSeconds: 0,
      startTime: Date.now(),
      timestamp: Date.now(),
      ...({
        examSetId: exam.id,
        examTitle: exam.title,
        answers,
        timeElapsedSeconds: timeElapsedRef.current,
        lastUpdated: new Date().toISOString()
      } as any)
    });
  }, [exam.id, exam.title, answers, flagged, currentIndex]);

  // Immediate save on user actions (answer, flag, navigate)
  useEffect(() => {
    saveCurrentSession();
  }, [saveCurrentSession]);

  // Throttled periodic save on timer tick (every 10s)
  useEffect(() => {
    if (timeElapsedSeconds > 0 && timeElapsedSeconds - lastSavedTimeRef.current >= 10) {
      lastSavedTimeRef.current = timeElapsedSeconds;
      saveCurrentSession();
    }
  }, [timeElapsedSeconds, saveCurrentSession]);

  // Flush on unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveCurrentSession();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [saveCurrentSession]);

  const navPillsContainerRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll current question pill into view in bottom navigation bar
  useEffect(() => {
    if (navPillsContainerRef.current) {
      const activePill = navPillsContainerRef.current.children[currentIndex] as HTMLElement;
      if (activePill) {
        activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex, isNavigatorOpen]);

  // Translation & Dictionary States
  const [isPassageTranslated, setIsPassageTranslated] = useState<boolean>(false);
  const [showQuestionTranslation, setShowQuestionTranslation] = useState<boolean>(false);
  const [isDictOpen, setIsDictOpen] = useState<boolean>(false);
  const [dictSearchWord, setDictSearchWord] = useState<string>('');
  
  // Floating selection lookup popup state
  const [selectionPopup, setSelectionPopup] = useState<{ text: string; x: number; y: number; paragraphIndex?: number } | null>(null);

  // User Drag & Highlight State
  const [userHighlights, setUserHighlights] = useState<{ id: string; text: string; color: 'yellow' | 'green' | 'pink'; paragraphIndex?: number }[]>([]);

  const addHighlight = (textToHighlight: string, color: 'yellow' | 'green' | 'pink', paragraphIndex?: number) => {
    const cleaned = textToHighlight.trim();
    if (!cleaned || cleaned.length < 2) return;

    setUserHighlights(prev => {
      const filtered = prev.filter(h => !(h.text.toLowerCase() === cleaned.toLowerCase() && h.paragraphIndex === paragraphIndex));
      return [...filtered, { id: Date.now().toString(), text: cleaned, color, paragraphIndex }];
    });
  };

  const removeHighlight = (textToRemove: string, paragraphIndex?: number) => {
    setUserHighlights(prev => prev.filter(h => !(h.text.toLowerCase() === textToRemove.toLowerCase() && (paragraphIndex === undefined || h.paragraphIndex === paragraphIndex))));
  };

  const currentQuestion = exam.questions[currentIndex];

  // Clean Native Web Selection Listener (0 side effects, 0 mousedown overrides)
  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;

      // If click was inside toolbar, keep toolbar open
      if (targetElement && targetElement.closest('.selection-toolbar-popup')) {
        return;
      }

      // Check if user clicked on paragraph card to scope highlight to paragraph
      const paragraphCard = targetElement ? targetElement.closest('[data-paragraph-index]') : null;
      const pIdxAttr = paragraphCard ? paragraphCard.getAttribute('data-paragraph-index') : null;
      const paragraphIndex = pIdxAttr !== null && pIdxAttr !== undefined ? parseInt(pIdxAttr, 10) : undefined;

      // If click was on existing highlight mark tag, remove it
      if (targetElement && targetElement.tagName === 'MARK' && targetElement.className.includes('user-hl-')) {
        const textToRemove = targetElement.textContent?.trim();
        if (textToRemove) {
          removeHighlight(textToRemove, paragraphIndex);
          setSelectionPopup(null);
          return;
        }
      }

      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        setSelectionPopup(null);
        return;
      }

      const raw = selection.toString();
      const selectedText = raw.replace(/[\r\n]+/g, ' ').trim();

      if (selectedText && selectedText.length >= 2 && selectedText.length <= 500) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        if (rect && rect.top > 0 && rect.left > 0) {
          setSelectionPopup({
            text: selectedText,
            x: rect.left + rect.width / 2,
            y: rect.top - 48,
            paragraphIndex
          });
          return;
        }
      }

      setSelectionPopup(null);
    };

    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [userHighlights]);

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

    return rawPassage.replace(/<mark>\(?(\d+)\)?[\s.:]*\s*([\s\S]*?)<\/mark>/gi, (_fullMatch, blankNumStr) => {
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

  // Pure React JSX Highlight Renderer (Zero dangerouslySetInnerHTML, native DOM TextNodes)
  // Pure React JSX Highlight Renderer (Zero dangerouslySetInnerHTML, native DOM TextNodes)
  const renderHighlightedText = (rawText?: string, pIdx?: number) => {
    if (!rawText) return null;

    // First format cloze test blanks
    const formattedText = formatPassageForTaking(rawText);

    // Check if passage text already has explicit <mark> tags for target words (excluding cloze blanks)
    const hasExplicitWordMark = /<mark>(?!\s*\(\d+\)\s*_)[^<]+<\/mark>/i.test(formattedText);

    // Extract auto-highlight target word and target paragraph number from question text
    let autoWord: string | null = null;
    let targetParagraphIndex: number | null = null;

    const qText = currentQuestion.questionText || '';

    // Extract target paragraph number (e.g. "in paragraph 1", "ở đoạn 2", "paragraph 3")
    const pMatch = qText.match(/(?:in paragraph|in Đoạn|Đoạn|đoạn|paragraph)\s*(\d+)/i);
    if (pMatch && pMatch[1]) {
      targetParagraphIndex = parseInt(pMatch[1], 10) - 1; // Convert 1-indexed to 0-indexed
    }

    // Only extract autoWord if passage does NOT already have explicit author <mark> tags
    if (!hasExplicitWordMark) {
      const autoMatch = qText.match(/(?:word|pronoun|phrase|Từ|cụm từ|từ)\s+["'“‘]([^"'”’]+)["'”’]/i) ||
                        qText.match(/["'“‘]([^"'”’]+)["'”’]\s+(?:in paragraph|in line|is closest in meaning|refers to|gần nghĩa)/i) ||
                        qText.match(/["'“‘]([^"'”’]+)["'”’]/i);

      if (autoMatch && autoMatch[1] && autoMatch[1].trim().length >= 2) {
        const candidate = autoMatch[1].trim();
        if (candidate.split(/\s+/).length <= 6) {
          autoWord = candidate;
        }
      }
    }

    // Collect all terms to highlight for paragraph pIdx
    const terms: { phrase: string; color?: string; isAuto?: boolean }[] = [];

    // Auto-highlight target word ONLY in the matching target paragraph (if paragraph specified)
    if (autoWord && autoWord.length >= 2) {
      if (targetParagraphIndex === null || pIdx === undefined || pIdx === targetParagraphIndex) {
        terms.push({ phrase: autoWord, isAuto: true });
      }
    }
    userHighlights.forEach(hl => {
      const phrase = hl.text.trim();
      if (phrase.length >= 2) {
        // If highlight has paragraphIndex, match ONLY for that paragraph!
        if (hl.paragraphIndex === undefined || pIdx === undefined || hl.paragraphIndex === pIdx) {
          terms.push({ phrase, color: hl.color });
        }
      }
    });

    if (terms.length === 0) {
      // If text contains cloze blanks, <mark> tags, or <u> tags, render cleanly as React elements
      const parts = formattedText.split(/(<mark>.*?<\/mark>|<u>.*?<\/u>)/gi);
      return (
        <>
          {parts.map((part, idx) => {
            if (part.startsWith('<mark>') && part.endsWith('</mark>')) {
              const content = part.slice(6, -7);
              return <mark key={idx}>{content}</mark>;
            }
            if (part.startsWith('<u>') && part.endsWith('</u>')) {
              const content = part.slice(3, -4);
              return <u key={idx}>{content}</u>;
            }
            return part;
          })}
        </>
      );
    }

    // Sort terms by length descending
    terms.sort((a, b) => b.phrase.length - a.phrase.length);

    // Build regex pattern
    const patterns = terms.map(t => {
      const escaped = t.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return t.phrase.includes(' ') ? escaped : `\\b${escaped}\\b`;
    });

    const regex = new RegExp(`(<mark>.*?</mark>|<u>.*?</u>|${patterns.join('|')})`, 'gi');
    const parts = formattedText.split(regex);
    let hasAutoHighlighted = false;

    return (
      <>
        {parts.map((part, idx) => {
          if (!part) return null;

          if (part.startsWith('<mark>') && part.endsWith('</mark>')) {
            const content = part.slice(6, -7);
            return <mark key={idx}>{content}</mark>;
          }

          if (part.startsWith('<u>') && part.endsWith('</u>')) {
            const content = part.slice(3, -4);
            return <u key={idx}>{content}</u>;
          }

          const matchedTerm = terms.find(t => t.phrase.toLowerCase() === part.toLowerCase());
          if (matchedTerm) {
            if (matchedTerm.isAuto) {
              if (!hasAutoHighlighted) {
                hasAutoHighlighted = true;
                return <mark key={idx}>{part}</mark>;
              }
              // Skip highlighting duplicate occurrences of the same target word
              return part;
            }

            return (
              <mark 
                key={idx} 
                className={`user-hl-${matchedTerm.color}`} 
                title="Nhấp để xóa bôi đen"
                onClick={(e) => {
                  e.stopPropagation();
                  removeHighlight(part, pIdx);
                }}
              >
                {part}
              </mark>
            );
          }

          return part;
        })}
      </>
    );
  };

  const activeTranslation = activePassageData?.translation;

  // Parse passage into title + clean paragraphs separated by double newlines OR single newlines
  const parsedPassage = React.useMemo(() => {
    if (!activePassageData?.passage) return { title: null, paragraphs: [] };
    const raw = activePassageData.passage.trim();

    const isEmailOrHeader = (text: string) => {
      const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      return lines.some(l => /^(?:To|From|Subject|Date|Cc|Gửi|Từ|Chủ đề|Ngày)\s*:/i.test(l));
    };

    const isSalutation = (text: string) => {
      return /^(?:Dear|Thân gửi|Kính gửi|Hello|Hi)\b.*[,:]$/i.test(text.trim());
    };

    const hasDoubleNewlines = /(?:\r?\n){2,}/.test(raw);
    let candidateBlocks: string[] = [];

    if (hasDoubleNewlines) {
      candidateBlocks = raw
        .split(/(?:\r?\n){2,}/)
        .map(b => b.trim())
        .filter(b => b.length > 0);

      // Check if the first block contains a title on its first line (unless it's an email/memo header block)
      if (candidateBlocks.length > 0 && candidateBlocks[0].includes('\n')) {
        if (!isEmailOrHeader(candidateBlocks[0])) {
          const lines = candidateBlocks[0].split(/\r?\n/).map(l => l.trim()).filter(Boolean);
          if (lines.length > 1) {
            const firstLine = lines[0];
            if (
              firstLine.length <= 120 &&
              !firstLine.endsWith('.') &&
              !firstLine.startsWith('[I]') &&
              !firstLine.startsWith('[ĐOẠN') &&
              !firstLine.startsWith('Paragraph') &&
              !firstLine.includes('<mark>') &&
              !firstLine.includes('______')
            ) {
              candidateBlocks = [
                firstLine,
                lines.slice(1).join('\n'),
                ...candidateBlocks.slice(1)
              ];
            }
          }
        }
      }
    } else {
      // Passages separated by single newlines (1 paragraph per line)
      candidateBlocks = raw
        .split(/\r?\n/)
        .map(b => b.trim())
        .filter(b => b.length > 0);
    }

    if (candidateBlocks.length === 0) return { title: null, paragraphs: [] };

    let title: string | null = null;
    let remainingBlocks = [...candidateBlocks];

    const firstBlock = candidateBlocks[0];
    const isFirstBlockHeaderOrTitle = isEmailOrHeader(firstBlock) || (
      !firstBlock.includes('\n') &&
      firstBlock.length <= 120 &&
      !firstBlock.endsWith('.') &&
      !firstBlock.startsWith('[I]') &&
      !firstBlock.startsWith('[ĐOẠN') &&
      !firstBlock.startsWith('Paragraph') &&
      !firstBlock.includes('<mark>') &&
      !firstBlock.includes('______') &&
      candidateBlocks.length > 1
    );

    if (isFirstBlockHeaderOrTitle) {
      title = firstBlock;
      remainingBlocks = candidateBlocks.slice(1);
    }

    // Handle standalone salutations (e.g. 'Dear Participants,')
    const paragraphs: string[] = [];
    for (let i = 0; i < remainingBlocks.length; i++) {
      const block = remainingBlocks[i];
      if (isSalutation(block) && i + 1 < remainingBlocks.length) {
        remainingBlocks[i + 1] = block + '\n\n' + remainingBlocks[i + 1];
      } else {
        paragraphs.push(block);
      }
    }

    return { title, paragraphs };
  }, [activePassageData]);

  const parsedTranslation = React.useMemo(() => {
    if (!activeTranslation) return { title: null, paragraphs: [] };
    const raw = activeTranslation.trim();

    const isEmailOrHeader = (text: string) => {
      const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      return lines.some(l => /^(?:To|From|Subject|Date|Cc|Gửi|Từ|Chủ đề|Ngày)\s*:/i.test(l));
    };

    const isSalutation = (text: string) => {
      return /^(?:Dear|Thân gửi|Kính gửi|Hello|Hi)\b.*[,:]$/i.test(text.trim());
    };

    const hasDoubleNewlines = /(?:\r?\n){2,}/.test(raw);
    let candidateBlocks: string[] = [];

    if (hasDoubleNewlines) {
      candidateBlocks = raw
        .split(/(?:\r?\n){2,}/)
        .map(b => b.trim())
        .filter(b => b.length > 0);

      if (candidateBlocks.length > 0 && candidateBlocks[0].includes('\n')) {
        if (!isEmailOrHeader(candidateBlocks[0])) {
          const lines = candidateBlocks[0].split(/\r?\n/).map(l => l.trim()).filter(Boolean);
          if (lines.length > 1) {
            const firstLine = lines[0];
            if (
              firstLine.length <= 120 &&
              !firstLine.endsWith('.') &&
              !firstLine.startsWith('[I]') &&
              !firstLine.startsWith('[ĐOẠN') &&
              !firstLine.startsWith('Đoạn')
            ) {
              candidateBlocks = [
                firstLine,
                lines.slice(1).join('\n'),
                ...candidateBlocks.slice(1)
              ];
            }
          }
        }
      }
    } else {
      candidateBlocks = raw
        .split(/\r?\n/)
        .map(b => b.trim())
        .filter(b => b.length > 0);
    }

    if (candidateBlocks.length === 0) return { title: null, paragraphs: [] };

    let title: string | null = null;
    let remainingBlocks = [...candidateBlocks];

    const firstBlock = candidateBlocks[0];
    const isFirstBlockHeaderOrTitle = isEmailOrHeader(firstBlock) || (
      !firstBlock.includes('\n') &&
      firstBlock.length <= 120 &&
      !firstBlock.endsWith('.') &&
      !firstBlock.startsWith('[I]') &&
      !firstBlock.startsWith('[ĐOẠN') &&
      !firstBlock.startsWith('Đoạn') &&
      !firstBlock.startsWith('Paragraph') &&
      candidateBlocks.length > 1
    );

    if (isFirstBlockHeaderOrTitle) {
      title = firstBlock;
      remainingBlocks = candidateBlocks.slice(1);
    }

    const paragraphs: string[] = [];
    for (let i = 0; i < remainingBlocks.length; i++) {
      const block = remainingBlocks[i];
      if (isSalutation(block) && i + 1 < remainingBlocks.length) {
        remainingBlocks[i + 1] = block + '\n\n' + remainingBlocks[i + 1];
      } else {
        paragraphs.push(block);
      }
    }

    return { title, paragraphs };
  }, [activeTranslation]);

  const handleSelectOption = useCallback((optionId: 'A' | 'B' | 'C' | 'D') => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: prev[currentQuestion.id] === optionId ? null : optionId
    }));
    // Auto-remove option from eliminated list if selected
    setEliminatedOptions(prev => {
      const currentList = prev[currentQuestion.id] || [];
      if (currentList.includes(optionId)) {
        return {
          ...prev,
          [currentQuestion.id]: currentList.filter(id => id !== optionId)
        };
      }
      return prev;
    });
  }, [currentQuestion.id]);

  const toggleEliminateOption = useCallback((optionId: 'A' | 'B' | 'C' | 'D', e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setEliminatedOptions(prev => {
      const currentList = prev[currentQuestion.id] || [];
      const isEliminated = currentList.includes(optionId);
      return {
        ...prev,
        [currentQuestion.id]: isEliminated 
          ? currentList.filter(id => id !== optionId) 
          : [...currentList, optionId]
      };
    });
  }, [currentQuestion.id]);

  const toggleFlag = useCallback(() => {
    setFlagged(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  }, [currentQuestion.id]);

  const handleSpeech = useCallback(() => {
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
  }, [currentQuestion.questionText, isSpeechSpeaking]);

  // Keyboard navigation shortcuts (1-4 / A-D for options, F for flag, Arrows for navigation, T for translate, P for speech, ? for help)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSubmitModalOpen || isDictOpen) return;
      // Don't trigger if user is typing in an input
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      // Escape closes active modal
      if (e.key === 'Escape') {
        setIsShortcutsModalOpen(false);
        setIsGridModalOpen(false);
        return;
      }

      // Help toggle (?)
      if (e.key === '?') {
        setIsShortcutsModalOpen(prev => !prev);
        return;
      }

      // Translation toggle (T)
      if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.altKey) {
        setShowQuestionTranslation(prev => !prev);
        return;
      }

      // Speech pronunciation (P)
      if ((e.key === 'p' || e.key === 'P') && !e.ctrlKey && !e.altKey) {
        handleSpeech();
        return;
      }

      // Option elimination (Alt + 1..4 or Alt + A..D)
      if (e.altKey) {
        if (['1', 'a', 'A'].includes(e.key)) toggleEliminateOption('A');
        if (['2', 'b', 'B'].includes(e.key)) toggleEliminateOption('B');
        if (['3', 'c', 'C'].includes(e.key)) toggleEliminateOption('C');
        if (['4', 'd', 'D'].includes(e.key)) toggleEliminateOption('D');
        return;
      }

      if (['a', 'A', '1'].includes(e.key)) handleSelectOption('A');
      if (['b', 'B', '2'].includes(e.key)) handleSelectOption('B');
      if (['c', 'C', '3'].includes(e.key)) handleSelectOption('C');
      if (['d', 'D', '4'].includes(e.key)) handleSelectOption('D');
      if (['f', 'F'].includes(e.key)) toggleFlag();

      if (e.key === 'ArrowRight' && currentIndex < exam.questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isSubmitModalOpen, isDictOpen, exam.questions.length, handleSelectOption, toggleFlag, toggleEliminateOption, handleSpeech]);

  const openDictionary = (word: string = '') => {
    setDictSearchWord(word);
    setIsDictOpen(true);
    setSelectionPopup(null);
  };

  const handleSubmit = () => {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    storageService.clearActiveSession();
    const timeSpent = timeElapsedSeconds;
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

  const answeredCount = Object.values(answers).filter(v => v !== null).length;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-main)',
      paddingBottom: isNavigatorOpen ? '110px' : '60px'
    }}>
      
      {/* Sticky Header Bar */}
      <QuizHeader
        title={exam.title}
        answeredCount={answeredCount}
        totalQuestions={exam.questions.length}
        durationMinutes={exam.durationMinutes}
        timeElapsedSeconds={timeElapsedSeconds}
        isPaused={isPaused}
        quizMode={quizMode}
        onExit={onExit}
        onPauseTimer={pauseTimer}
        onResumeTimer={resumeTimer}
        onSetQuizMode={(m) => setQuizMode(m)}
        onOpenShortcuts={() => setIsShortcutsModalOpen(true)}
        onOpenDictionary={() => openDictionary('')}
        onOpenGridModal={() => setIsGridModalOpen(true)}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

      {/* Main Spacious Test Workspace */}
      <div style={{
        flex: 1,
        width: '100%',
        maxWidth: '1560px',
        margin: '0 auto',
        padding: '16px 24px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: activePassageData ? '50% 50%' : '1fr',
          gap: '28px',
          alignItems: 'start'
        }}>
          
          {/* Shared Passage Pane (Left 50%) */}
          {activePassageData && (
            <div 
              ref={passagePaneRef}
              className="glass-card animate-fade-in" 
              style={{
                padding: '32px',
                boxSizing: 'border-box',
                position: 'relative'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '18px',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '12px',
                flexWrap: 'wrap',
                gap: '12px'
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
                  <div>
                    <span>ĐOẠN VĂN / DỮ KIỆN DÙNG CHUNG</span>
                    <div style={{ fontSize: '0.73rem', fontWeight: 600, color: 'var(--text-muted)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      🖱️ Dùng con cuộn chuột để xem toàn bộ bài đọc
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {/* Quick jump to paragraphs if 2+ paragraphs */}
                  {parsedPassage.paragraphs.length > 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                      {parsedPassage.paragraphs.map((_, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => scrollToParagraph(pIdx)}
                          title={`Cuộn đến Đoạn ${pIdx + 1}`}
                          className="btn btn-secondary"
                          style={{ padding: '4px 9px', fontSize: '0.76rem', borderRadius: '6px', fontWeight: 700 }}
                        >
                          Đoạn {pIdx + 1}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Scroll Down Button */}
                  <button
                    onClick={scrollToPassageBottom}
                    className="btn btn-secondary"
                    style={{
                      padding: '6px 12px',
                      fontSize: '0.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontWeight: 700,
                      color: 'var(--brand-primary)',
                      background: 'rgba(79, 70, 229, 0.08)'
                    }}
                    title="Cuộn xuống cuối đoạn văn / xem câu hỏi"
                  >
                    <ChevronDown size={16} /> Kéo xuống
                  </button>

                  {/* Passage Font Size Switcher */}
                  <div 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      background: 'var(--bg-subtle)', 
                      borderRadius: 'var(--radius-pill)', 
                      padding: '2px', 
                      border: '1px solid var(--border-light)' 
                    }}
                    title="Điều chỉnh cỡ chữ bài đọc"
                  >
                    <button
                      onClick={() => setPassageFontSize('normal')}
                      style={{
                        padding: '3px 8px',
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        background: passageFontSize === 'normal' ? 'var(--brand-gradient)' : 'transparent',
                        color: passageFontSize === 'normal' ? '#fff' : 'var(--text-muted)',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                      title="Cỡ chữ vừa (100%)"
                    >
                      A
                    </button>
                    <button
                      onClick={() => setPassageFontSize('large')}
                      style={{
                        padding: '3px 8px',
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        background: passageFontSize === 'large' ? 'var(--brand-gradient)' : 'transparent',
                        color: passageFontSize === 'large' ? '#fff' : 'var(--text-muted)',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                      title="Cỡ chữ to (115%)"
                    >
                      A+
                    </button>
                    <button
                      onClick={() => setPassageFontSize('xlarge')}
                      style={{
                        padding: '3px 8px',
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        background: passageFontSize === 'xlarge' ? 'var(--brand-gradient)' : 'transparent',
                        color: passageFontSize === 'xlarge' ? '#fff' : 'var(--text-muted)',
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                      title="Cỡ chữ rất to (130%)"
                    >
                      A++
                    </button>
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
              </div>
              
              {/* Mouse-Scrollable Passage Container */}
              <div 
                ref={passageScrollBoxRef}
                className="custom-scrollbar"
                onDoubleClick={() => {
                  const sel = window.getSelection()?.toString().trim();
                  if (sel && sel.length > 1 && !sel.includes(' ') && !sel.includes('\n')) {
                    openDictionary(sel);
                  }
                }}
                style={{
                  maxHeight: 'calc(78vh - 120px)',
                  minHeight: '340px',
                  overflowY: 'auto',
                  paddingRight: '10px',
                  fontSize: passageFontSize === 'large' ? '1.18rem' : passageFontSize === 'xlarge' ? '1.32rem' : '1.05rem',
                  lineHeight: 1.85,
                  color: 'var(--text-main)',
                  transition: 'all 0.25s ease'
                }}
              >
                {isPassageTranslated && activeTranslation ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--success)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Sparkles size={14} /> Bản dịch tham khảo Tiếng Việt:
                    </div>
                    {parsedTranslation.title && (
                      <div style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--success)',
                        padding: '12px 18px',
                        background: 'var(--success-bg)',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '4px solid var(--success)',
                        marginBottom: '8px',
                        lineHeight: 1.5,
                        whiteSpace: 'pre-line'
                      }}>
                        {parsedTranslation.title}
                      </div>
                    )}
                    {parsedTranslation.paragraphs.map((para, pIdx) => (
                      <div key={pIdx} style={{
                        padding: '16px 20px',
                        background: 'var(--success-bg)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--success-border)',
                        lineHeight: 1.8,
                        fontSize: '1.02rem',
                        color: 'var(--text-main)',
                        whiteSpace: 'pre-line'
                      }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--success)', marginRight: '8px', textTransform: 'uppercase' }}>
                          [Đoạn {pIdx + 1}]
                        </span>
                        {para}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div key={userHighlights.length + '-' + userHighlights.map(h => h.id).join('-')} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {parsedPassage.title && (
                      <div style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--brand-primary)',
                        padding: '12px 18px',
                        background: 'rgba(79, 70, 229, 0.06)',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '4px solid var(--brand-primary)',
                        marginBottom: '8px',
                        lineHeight: 1.5,
                        whiteSpace: 'pre-line'
                      }}>
                        {renderHighlightedText(parsedPassage.title)}
                      </div>
                    )}
                    {parsedPassage.paragraphs.map((paraText, pIdx) => (
                      <div 
                        key={pIdx} 
                        data-paragraph-index={pIdx}
                        className="passage-paragraph-card"
                        style={{
                          position: 'relative',
                          padding: '18px 22px',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-light)',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                          fontSize: '1.08rem',
                          lineHeight: 1.85,
                          color: 'var(--text-main)',
                          userSelect: 'text',
                          WebkitUserSelect: 'text'
                        }}
                      >
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: 'var(--brand-primary)',
                          background: 'rgba(79, 70, 229, 0.08)',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          marginBottom: '10px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          userSelect: 'none'
                        }}>
                          <BookOpen size={11} /> Đoạn {pIdx + 1}
                        </div>
                        <div style={{ whiteSpace: 'pre-line', fontSize: '1.08rem', lineHeight: 1.85, color: 'var(--text-main)' }}>
                          {renderHighlightedText(paraText, pIdx)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Passage Bottom Navigation Bar */}
              <div 
                ref={passageBottomRef}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-light)',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  onClick={scrollToPassageTop}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}
                >
                  <ChevronUp size={16} /> Kéo lên đầu đoạn văn
                </button>

                <button
                  onClick={scrollToPassageBottom}
                  className="btn btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}
                >
                  <ChevronDown size={16} /> Đến phần câu hỏi
                </button>
              </div>
            </div>
          )}

          {/* Question & Options Pane (Right 50% or Full Width) */}
          <div 
            ref={questionPaneRef}
            className="glass-card animate-fade-in" 
            style={{
              padding: '36px',
              maxWidth: activePassageData ? '100%' : '980px',
              margin: activePassageData ? '0' : '0 auto',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {/* Question Badge & Tools */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="badge badge-primary" style={{ fontSize: '0.95rem', padding: '6px 16px' }}>
                  Câu {currentIndex + 1} / {exam.questions.length}
                </span>
                {quizMode === 'practice' && answers[currentQuestion.id] && currentQuestion.topicTag && (
                  <span className="badge badge-warning" style={{ fontSize: '0.85rem' }}>
                    {cleanTopicTag(currentQuestion.topicTag)}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                {/* Back to Passage Jump Button */}
                {activePassageData && (
                  <button
                    onClick={scrollToPassageTop}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--brand-primary)',
                      background: 'rgba(79, 70, 229, 0.08)',
                      color: 'var(--brand-primary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      transition: 'all 0.2s ease'
                    }}
                    title="Kéo lên xem lại đoạn văn"
                  >
                    <BookOpen size={15} /> Xem đoạn văn
                  </button>
                )}
                <button
                  onClick={() => setShowQuestionTranslation(!showQuestionTranslation)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: `1.5px solid ${showQuestionTranslation ? 'var(--brand-primary)' : 'var(--border-light)'}`,
                    background: showQuestionTranslation ? 'rgba(79, 70, 229, 0.08)' : 'var(--bg-subtle)',
                    color: showQuestionTranslation ? 'var(--brand-primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    fontFamily: 'inherit'
                  }}
                  title="Dịch câu hỏi sang Tiếng Việt"
                >
                  <Languages size={16} />
                  {showQuestionTranslation ? 'Ẩn bản dịch' : 'Dịch câu hỏi'}
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
              let rawText = currentQuestion.questionText.trim();

              if (currentQuestion.type === 'reordering' || (rawText.includes('\na.') || rawText.includes('\na)'))) {
                const lines = rawText.split('\n');
                const headerPrompt = lines[0];
                const sentenceItems = lines.slice(1).filter(line => line.trim().length > 0);

                if (sentenceItems.length > 0) {
                  return (
                    <div key={userHighlights.length + '-' + userHighlights.map(h => h.id).join('-')} style={{ marginBottom: (showQuestionTranslation && currentQuestion.translation) ? '16px' : '24px' }}>
                      <div style={{
                        fontSize: '1.18rem',
                        fontWeight: 700,
                        lineHeight: 1.65,
                        color: 'var(--text-main)',
                        marginBottom: '16px'
                      }}>
                        {renderHighlightedText(headerPrompt)}
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
                          const itemMatch = item.match(/^([a-e1-5])[.)]\s*(.*)$/i);
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
                              <span style={{ fontWeight: 500 }}>
                                {renderHighlightedText(textContent)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              }

              return (
                <div key={userHighlights.length + '-' + userHighlights.map(h => h.id).join('-')} style={{
                  fontSize: '1.18rem',
                  fontWeight: 500,
                  lineHeight: 1.7,
                  marginBottom: (showQuestionTranslation && currentQuestion.translation) ? '16px' : '28px',
                  color: 'var(--text-main)',
                  whiteSpace: 'pre-line'
                }}>
                  {renderHighlightedText(rawText)}
                </div>
              );
            })()}

            {/* Question Translation Box (Pure Translation ONLY - NO ANSWERS) */}
            {showQuestionTranslation && currentQuestion.translation && (
              <div style={{
                marginBottom: '26px',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(79, 70, 229, 0.04)',
                border: '1px solid rgba(79, 70, 229, 0.16)',
                fontSize: '0.98rem',
                color: 'var(--text-main)',
                lineHeight: 1.65
              }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Languages size={14} /> Bản dịch câu hỏi:
                </div>
                <div style={{ whiteSpace: 'pre-line' }}>
                  {sanitizeTranslationNoAnswer(currentQuestion.translation)}
                </div>
              </div>
            )}

            {/* Options List */}
            <div 
              role="radiogroup" 
              aria-label="Danh sách phương án lựa chọn" 
              style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}
            >
              {currentQuestion.options.map((opt) => {
                const isSelected = answers[currentQuestion.id] === opt.id;
                const hasAnswered = answers[currentQuestion.id] !== undefined && answers[currentQuestion.id] !== null;
                const isCorrect = opt.id === currentQuestion.correctAnswer;
                const isPractice = quizMode === 'practice';
                const isEliminated = (eliminatedOptions[currentQuestion.id] || []).includes(opt.id);

                // Practice mode dynamic coloring
                let borderStyle = `2px solid ${isSelected ? 'var(--brand-primary)' : isEliminated ? 'rgba(239, 68, 68, 0.3)' : 'var(--border-light)'}`;
                let bgStyle = isSelected ? 'rgba(79, 70, 229, 0.08)' : isEliminated ? 'rgba(239, 68, 68, 0.03)' : 'var(--bg-surface)';
                let colorBadgeBg = isSelected ? 'var(--brand-primary)' : isEliminated ? 'rgba(239, 68, 68, 0.12)' : 'var(--bg-subtle)';
                let colorBadgeText = isSelected ? '#ffffff' : isEliminated ? 'var(--danger)' : 'var(--text-main)';

                if (isPractice && hasAnswered) {
                  if (isCorrect) {
                    borderStyle = '2px solid var(--success)';
                    bgStyle = 'var(--success-bg)';
                    colorBadgeBg = 'var(--success)';
                    colorBadgeText = '#ffffff';
                  } else if (isSelected && !isCorrect) {
                    borderStyle = '2px solid var(--danger)';
                    bgStyle = 'var(--danger-bg)';
                    colorBadgeBg = 'var(--danger)';
                    colorBadgeText = '#ffffff';
                  }
                }

                const shortcutKey = opt.id === 'A' ? '1' : opt.id === 'B' ? '2' : opt.id === 'C' ? '3' : '4';

                return (
                  <div
                    key={opt.id}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onClick={() => handleSelectOption(opt.id)}
                    onContextMenu={(e) => toggleEliminateOption(opt.id, e)}
                    onKeyDown={(e) => {
                      if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        handleSelectOption(opt.id);
                      }
                    }}
                    className="hover-lift"
                    style={{
                      padding: '16px 22px',
                      borderRadius: 'var(--radius-lg)',
                      border: borderStyle,
                      background: bgStyle,
                      boxShadow: isSelected ? '0 0 0 3px rgba(var(--brand-primary-rgb), 0.2), 0 8px 24px rgba(var(--brand-primary-rgb), 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontWeight: isSelected ? 700 : 500,
                      outline: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      opacity: isEliminated ? 0.45 : 1,
                      filter: isEliminated ? 'grayscale(0.5)' : 'none'
                    }}
                  >
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      background: colorBadgeBg,
                      color: colorBadgeText,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      flexShrink: 0,
                      boxShadow: isSelected ? '0 4px 12px rgba(var(--brand-primary-rgb), 0.35)' : '0 2px 4px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.2s ease',
                      textDecoration: isEliminated ? 'line-through' : 'none'
                    }}>
                      {opt.id}
                    </div>

                    <div 
                      style={{ flex: 1, minWidth: 0, textDecoration: isEliminated ? 'line-through' : 'none' }}
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        const sel = window.getSelection()?.toString().trim();
                        if (sel && sel.length > 1 && !sel.includes(' ') && !sel.includes('\n')) {
                          openDictionary(sel);
                        }
                      }}
                    >
                      <div key={userHighlights.length + '-' + userHighlights.map(h => h.id).join('-')} style={{ fontSize: '1.05rem', lineHeight: 1.55 }}>
                        {renderHighlightedText(opt.text)}
                      </div>
                      {showQuestionTranslation && opt.translation && (
                        <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '6px', fontWeight: 500, lineHeight: 1.5 }}>
                          {sanitizeTranslationNoAnswer(opt.translation)}
                        </div>
                      )}
                    </div>

                    {/* Right indicators: eliminate button, shortcut badge, or practice badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                      {/* Eliminate Cross-out Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleEliminateOption(opt.id, e)}
                        style={{
                          background: isEliminated ? 'var(--danger-bg)' : 'transparent',
                          border: isEliminated ? '1px solid var(--danger)' : '1px solid transparent',
                          color: isEliminated ? 'var(--danger)' : 'var(--text-muted)',
                          borderRadius: '6px',
                          width: '28px',
                          height: '28px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          padding: 0,
                          transition: 'all 0.15s ease',
                          opacity: isEliminated ? 1 : 0.6
                        }}
                        title={isEliminated ? `Bỏ gạch đáp án ${opt.id} (Alt + ${shortcutKey})` : `Gạch bỏ phương án ${opt.id} (Alt + ${shortcutKey} hoặc click chuột phải)`}
                        aria-label={isEliminated ? `Bỏ gạch ${opt.id}` : `Gạch bỏ ${opt.id}`}
                      >
                        <EyeOff size={14} />
                      </button>

                      {isPractice && hasAnswered && isCorrect && (
                        <span className="badge badge-success" style={{ fontSize: '0.74rem' }}>
                          ✓ Đúng
                        </span>
                      )}
                      {isPractice && hasAnswered && isSelected && !isCorrect && (
                        <span className="badge badge-danger" style={{ fontSize: '0.74rem' }}>
                          ✕ Sai
                        </span>
                      )}
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: 'var(--text-muted)',
                          background: 'var(--bg-subtle)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          border: '1px solid var(--border-light)',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                          letterSpacing: '0.5px'
                        }}
                        title={`Bấm phím ${shortcutKey} hoặc ${opt.id} trên bàn phím`}
                      >
                        {shortcutKey}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Practice Mode Instant Learning & Explanation Card */}
            {quizMode === 'practice' && answers[currentQuestion.id] && (
              <div 
                className="animate-fade-in" 
                style={{
                  marginBottom: '28px',
                  padding: '22px 26px',
                  borderRadius: 'var(--radius-md)',
                  background: answers[currentQuestion.id] === currentQuestion.correctAnswer 
                    ? 'rgba(16, 185, 129, 0.08)' 
                    : 'rgba(239, 68, 68, 0.08)',
                  border: `1.5px solid ${answers[currentQuestion.id] === currentQuestion.correctAnswer ? 'var(--success-border)' : 'var(--danger-border)'}`
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '10px',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: answers[currentQuestion.id] === currentQuestion.correctAnswer ? 'var(--success)' : 'var(--danger)'
                }}>
                  {answers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                    <>
                      <span>🎉 Chính xác! Bạn đã chọn đúng phương án {currentQuestion.correctAnswer}.</span>
                    </>
                  ) : (
                    <>
                      <span>⚠️ Chưa đúng. Bạn chọn {answers[currentQuestion.id]}, nhưng đáp án chuẩn là {currentQuestion.correctAnswer}.</span>
                    </>
                  )}
                </div>

                <div style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--text-main)', marginTop: '8px' }}>
                  <strong style={{ color: 'var(--brand-primary)', display: 'block', marginBottom: '4px' }}>
                    💡 Lời giải & Phân tích ngữ pháp chi tiết:
                  </strong>
                  <div style={{ whiteSpace: 'pre-line' }}>{currentQuestion.explanation}</div>
                </div>

                {currentQuestion.translation && (
                  <div style={{
                    marginTop: '14px',
                    paddingTop: '12px',
                    borderTop: '1px dashed var(--border-light)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--text-body)'
                  }}>
                    <strong style={{ color: 'var(--success)', display: 'block', marginBottom: '2px' }}>
                      📖 Bản dịch câu hỏi & dịch nghĩa:
                    </strong>
                    <div style={{ whiteSpace: 'pre-line' }}>{currentQuestion.translation}</div>
                  </div>
                )}
              </div>
            )}

            {/* Footer Navigation Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '24px',
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

      {/* Floating Selection Toolbar for Highlighting & Dictionary Lookup */}
      {selectionPopup && (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          className="selection-toolbar-popup glass-card animate-scale-up"
          style={{
            position: 'fixed',
            left: `${Math.max(140, Math.min(window.innerWidth - 140, selectionPopup.x))}px`,
            top: `${Math.max(10, selectionPopup.y)}px`,
            transform: 'translateX(-50%)',
            zIndex: 120,
            background: 'var(--bg-card)',
            backdropFilter: 'blur(16px)',
            border: '1.5px solid var(--border-light)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-pill)',
            boxShadow: '0 10px 35px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {/* Selection Text Preview Badge */}
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--brand-primary)',
            background: 'rgba(79, 70, 229, 0.1)',
            padding: '3px 8px',
            borderRadius: '12px',
            maxWidth: '140px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }} title={selectionPopup.text}>
            "{selectionPopup.text}"
          </div>
          {/* Yellow Highlight Button */}
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addHighlight(selectionPopup.text, 'yellow', selectionPopup.paragraphIndex);
              setSelectionPopup(null);
              window.getSelection()?.removeAllRanges();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addHighlight(selectionPopup.text, 'yellow', selectionPopup.paragraphIndex);
              setSelectionPopup(null);
              window.getSelection()?.removeAllRanges();
            }}
            className="hover-lift"
            style={{
              background: '#fef08a',
              color: '#713f12',
              border: '1px solid #fde047',
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
            title="Bôi màu Vàng"
          >
            <Highlighter size={13} /> Vàng
          </button>

          {/* Green Highlight Button */}
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addHighlight(selectionPopup.text, 'green', selectionPopup.paragraphIndex);
              setSelectionPopup(null);
              window.getSelection()?.removeAllRanges();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addHighlight(selectionPopup.text, 'green', selectionPopup.paragraphIndex);
              setSelectionPopup(null);
              window.getSelection()?.removeAllRanges();
            }}
            className="hover-lift"
            style={{
              background: '#bbf7d0',
              color: '#14532d',
              border: '1px solid #86efac',
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
            title="Bôi màu Xanh"
          >
            <Highlighter size={13} /> Xanh
          </button>

          {/* Pink Highlight Button */}
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addHighlight(selectionPopup.text, 'pink', selectionPopup.paragraphIndex);
              setSelectionPopup(null);
              window.getSelection()?.removeAllRanges();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addHighlight(selectionPopup.text, 'pink', selectionPopup.paragraphIndex);
              setSelectionPopup(null);
              window.getSelection()?.removeAllRanges();
            }}
            className="hover-lift"
            style={{
              background: '#fbcfe8',
              color: '#831843',
              border: '1px solid #f472b6',
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
            title="Bôi màu Hồng"
          >
            <Highlighter size={13} /> Hồng
          </button>

          {/* Dictionary / Translate Button (Supports single words, phrases & sentences up to 500 chars) */}
          {selectionPopup.text && selectionPopup.text.length <= 500 && (
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openDictionary(selectionPopup.text.trim());
                setSelectionPopup(null);
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openDictionary(selectionPopup.text.trim());
                setSelectionPopup(null);
              }}
              className="btn btn-primary"
              style={{
                padding: '5px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.8rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
              title={selectionPopup.text.includes(' ') || selectionPopup.text.length > 20 ? 'Dịch câu / cụm từ qua Google Translate' : 'Tra từ điển Anh - Việt'}
            >
              <Languages size={13} /> {selectionPopup.text.includes(' ') || selectionPopup.text.length > 20 ? 'Dịch' : 'Tra từ'}
            </button>
          )}

          {/* Remove Highlight Button if already highlighted */}
          {userHighlights.some(h => h.text.toLowerCase() === selectionPopup.text.toLowerCase()) && (
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeHighlight(selectionPopup.text);
                setSelectionPopup(null);
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeHighlight(selectionPopup.text);
                setSelectionPopup(null);
              }}
              style={{
                background: 'var(--danger-bg)',
                color: 'var(--danger)',
                border: '1px solid var(--danger-border)',
                padding: '5px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.8rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
              title="Xóa bôi đen đoạn này"
            >
              <X size={13} /> Xóa bôi
            </button>
          )}
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
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border-light)',
          padding: '8px 24px',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.06)'
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            {/* Horizontal Pill Bar */}
            <div
              ref={navPillsContainerRef}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                overflowX: 'auto',
                padding: '4px 2px',
                flex: 1,
                scrollBehavior: 'smooth'
              }}
            >
              {exam.questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
                const isQuestionFlagged = !!flagged[q.id];

                let bg = 'var(--bg-subtle)';
                let color = 'var(--text-main)';
                let border = '1px solid var(--border-light)';
                let boxShadow = 'none';
                let transform = 'none';

                if (isCurrent) {
                  border = '2px solid var(--brand-primary)';
                  boxShadow = '0 0 0 2px rgba(var(--brand-primary-rgb), 0.25), 0 4px 12px rgba(var(--brand-primary-rgb), 0.35)';
                  transform = 'scale(1.08)';
                  bg = isAnswered ? 'var(--brand-primary)' : 'rgba(var(--brand-primary-rgb), 0.15)';
                  color = isAnswered ? '#ffffff' : 'var(--brand-primary)';
                } else if (isQuestionFlagged) {
                  bg = 'rgba(245, 158, 11, 0.2)';
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
                      minWidth: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      border: border,
                      background: bg,
                      color: color,
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      flexShrink: 0,
                      boxShadow: boxShadow,
                      transform: transform,
                      zIndex: isCurrent ? 2 : 1,
                      transition: 'all 0.18s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    title={`Câu ${idx + 1}${isQuestionFlagged ? ' (Đã đánh dấu)' : ''}${isAnswered ? ' (Đã trả lời)' : ''}`}
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
                        background: 'var(--warning)',
                        boxShadow: '0 0 4px var(--warning)'
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

      {/* Mobile Floating Drawer Trigger Button (Only visible on mobile <= 768px) */}
      <div 
        className="mobile-only-pill"
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 48,
          display: 'none'
        }}
      >
        <button
          onClick={() => setIsMobileDrawerOpen(true)}
          className="btn btn-primary hover-lift"
          style={{
            padding: '10px 20px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.88rem',
            fontWeight: 800,
            boxShadow: '0 8px 24px rgba(79, 70, 229, 0.45)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap'
          }}
          aria-label="Mở bảng 40 câu hỏi trắc nghiệm"
        >
          <Grid size={16} /> Câu {currentIndex + 1} / {exam.questions.length} • Bảng câu hỏi
        </button>
      </div>

      {/* Mobile Bottom Sheet Drawer for Questions */}
      {isMobileDrawerOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 150,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
          onClick={() => setIsMobileDrawerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Danh sách câu hỏi trắc nghiệm"
        >
          <div
            className="animate-slide-up"
            style={{
              background: 'var(--bg-surface)',
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px',
              borderTop: '2px solid var(--border-light)',
              padding: '20px 20px 32px',
              maxHeight: '82vh',
              overflowY: 'auto',
              boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle Drag Bar */}
            <div style={{
              width: '40px',
              height: '5px',
              borderRadius: '999px',
              background: 'var(--border-light)',
              margin: '0 auto 16px'
            }} />

            {/* Sheet Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>
                  Danh Sách Câu Hỏi
                </h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Đã làm {answeredCount} / {exam.questions.length} câu
                </div>
              </div>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                style={{
                  background: 'var(--bg-subtle)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
                aria-label="Đóng danh sách câu hỏi"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Filter Buttons */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
              <button
                onClick={() => setDrawerFilter('all')}
                className={`btn ${drawerFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}
              >
                Tất cả ({exam.questions.length})
              </button>
              <button
                onClick={() => setDrawerFilter('unanswered')}
                className={`btn ${drawerFilter === 'unanswered' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}
              >
                Chưa làm ({exam.questions.length - answeredCount})
              </button>
              <button
                onClick={() => setDrawerFilter('flagged')}
                className={`btn ${drawerFilter === 'flagged' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}
              >
                Đã gắn cờ ({Object.values(flagged).filter(Boolean).length})
              </button>
            </div>

            {/* Question Buttons Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '10px'
            }}>
              {exam.questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
                const isQuestionFlagged = !!flagged[q.id];

                if (drawerFilter === 'unanswered' && isAnswered) return null;
                if (drawerFilter === 'flagged' && !isQuestionFlagged) return null;

                let bg = 'var(--bg-subtle)';
                let color = 'var(--text-main)';
                let border = '1px solid var(--border-light)';

                if (isCurrent) {
                  border = '2px solid var(--brand-primary)';
                  bg = isAnswered ? 'var(--brand-primary)' : 'rgba(79, 70, 229, 0.15)';
                  color = isAnswered ? '#fff' : 'var(--brand-primary)';
                } else if (isQuestionFlagged) {
                  bg = 'rgba(245, 158, 11, 0.2)';
                  color = 'var(--warning)';
                  border = '1px solid var(--warning)';
                } else if (isAnswered) {
                  bg = 'var(--brand-primary)';
                  color = '#fff';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsMobileDrawerOpen(false);
                    }}
                    style={{
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      border,
                      background: bg,
                      color,
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{idx + 1}</span>
                    {isAnswered && <span style={{ fontSize: '0.65rem', opacity: 0.9 }}>({answers[q.id]})</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Question Grid Navigator Modal */}
      <QuizGridModal
        isOpen={isGridModalOpen}
        questions={exam.questions}
        currentIndex={currentIndex}
        answers={answers}
        flagged={flagged}
        answeredCount={answeredCount}
        isNavigatorOpen={isNavigatorOpen}
        onSelectQuestion={(idx) => setCurrentIndex(idx)}
        onToggleNavigator={() => setIsNavigatorOpen(!isNavigatorOpen)}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        onClose={() => setIsGridModalOpen(false)}
      />

      {/* Dictionary Modal */}
      <DictionaryModal
        isOpen={isDictOpen}
        onClose={() => setIsDictOpen(false)}
        initialWord={dictSearchWord}
      />

      {/* Keyboard Shortcuts Cheat Sheet Modal */}
      <QuizShortcutsModal
        isOpen={isShortcutsModalOpen}
        onClose={() => setIsShortcutsModalOpen(false)}
      />

      {/* Submission Modal */}
      <QuizSubmitModal
        isOpen={isSubmitModalOpen}
        answeredCount={answeredCount}
        totalQuestions={exam.questions.length}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmit={handleSubmit}
      />

      {/* Pause Modal Overlay */}
      <QuizPauseModal
        isPaused={isPaused}
        onResume={resumeTimer}
      />
    </div>
  );
};
