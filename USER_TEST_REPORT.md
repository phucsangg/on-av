# USER_TEST_REPORT.md

**Repository:** [phucsangg/on-av](https://github.com/phucsangg/on-av)  
**Test Date:** 2026-09-27  
**Tester Role:** Senior QA Engineer + UX Researcher + Real User Simulator  
**Commit After Fixes:** `10e44f0`

---

## Summary

| Metric | Count |
|---|---|
| Total Scenarios Tested | 53 |
| Passed (no issue) | 44 |
| Bugs Found & Fixed | 9 |
| Warnings Remaining | 3 (lint only, low risk) |
| Critical (P0/P1) Bugs | 0 remaining |
| Automated Tests Added | 3 new (total: 12) |

---

## 🔴 P1 Bugs Found & Fixed

### BUG-001 – P1: Duplicate Submission via Double-Click
- **Screen:** QuizRunner → Submit Modal
- **Steps:** 1. Answer questions → 2. Click Nộp Bài Ngay → 3. Double-click confirm rapidly
- **Expected:** Exam submits once
- **Actual:** `onFinishExam` could be invoked twice, creating duplicate `UserAttempt` + corrupted stats
- **Fix:** Added `isSubmittingRef` guard in `QuizRunner.tsx` and `isFinishingRef` in `App.tsx`
- **Status:** ✅ Fixed

### BUG-002 – P1: Timer Timeout Does Not Auto-Submit
- **Screen:** QuizRunner (when `durationMinutes` is set)
- **Steps:** 1. Start exam → 2. Wait for timer to reach 0
- **Expected:** Auto-submit fires, user sees Result page
- **Actual:** `onTimeUp` was never wired; exam showed 00:00 frozen
- **Fix:** Wired `onTimeUp` into `useQuizTimer` call in QuizRunner; also removed erroneous `isCountDown` guard in `useQuizTimer.ts`
- **Status:** ✅ Fixed

### BUG-003 – P1: Session Recovery Fails on Direct URL Load
- **Screen:** `/lam-bai` direct URL after tab close + reopen
- **Expected:** Session restored from saved data
- **Actual:** Only checked `?examId=` param; `activeSession.examSetId/examId` not considered
- **Fix:** `App.tsx` now falls back to `storageService.getActiveSession()` for `activeExam` resolution; session key matching checks both `examSetId` and `examId`
- **Status:** ✅ Fixed

---

## 🟠 P2 Bugs Found & Fixed

### BUG-004 – P2: Corrupted Stats Renders NaN%
- **Steps:** Set `eq_stats` to `["array"]` in DevTools → Reload
- **Fix:** `storageService.getStats()` now validates type and sanitizes all numeric fields with `Math.max(0, Number(...))`
- **Status:** ✅ Fixed

### BUG-005 – P2: Collection Getters Not Array-Checked
- **Steps:** Corrupt `eq_attempts` to a string → Open History page
- **Fix:** `getAttempts()`, `getMistakes()`, `getSavedWords()`, `getCustomExams()` all validate `Array.isArray()` before returning
- **Status:** ✅ Fixed

### BUG-006 – P2: `exam.badge` Undefined Throws in Search
- **Steps:** Create custom exam without `badge` → Type in search box
- **Fix:** Changed to `(exam.badge?.toLowerCase() || '')` optional chaining
- **Status:** ✅ Fixed

### BUG-007 – P2: No Reset Action in Empty Search State
- **Steps:** Type obscure search → 0 results → User has no action
- **Fix:** Added "Xóa Bộ Lọc & Tìm Kiếm" button in empty state that resets `searchQuery`, `selectedCategory`, `selectedFilter`
- **Status:** ✅ Fixed

### BUG-008 – P2: Mistake Notebook Missing Bulk Clear Actions
- **Steps:** Accumulate mistakes → No way to clear mastered or all entries
- **Fix:** Added `onClearAllMistakes` / `onClearMasteredMistakes` props with `window.confirm()` dialogs; `clearMistakes()` added to `storageService.ts`
- **Status:** ✅ Fixed

### BUG-009 – P2: Result Page Missing Wrong/Unanswered Breakdown
- **Steps:** Submit exam with unanswered questions → View results
- **Fix:** Added `incorrectCount` and `unansweredCount` to `QuizResult.tsx`; all pills now show ✅/❌/⚪ with NaN guard
- **Status:** ✅ Fixed

---

## 🟡 P3/P4 – Acceptable / By Design

| ID | Issue | Verdict |
|---|---|---|
| UX-001 | Elimination state not persisted across refresh | By design (ephemeral scratchpad) |
| UX-002 | Streak "0 ngày" for new user | Acceptable |
| UX-003 | No ARIA live regions for quiz feedback | P4 — future polish |

---

## 🟢 Passed Flows

| Flow | Status |
|---|---|
| Dashboard fresh load (empty state) | ✅ Pass |
| Dark / Light mode toggle + persistence | ✅ Pass |
| Exam catalog filter + search + empty state reset | ✅ Pass |
| Start exam from catalog (URL routing) | ✅ Pass |
| Answer selection A/B/C/D + change answer | ✅ Pass |
| Keyboard shortcuts 1-4, A-D | ✅ Pass |
| Flag / Unflag (F key + button) | ✅ Pass |
| Q1 Previous disabled, Qlast Next disabled | ✅ Pass |
| Refresh mid-exam → Resume (answers + flags + index + timer) | ✅ Pass |
| Submit → Cancel → Stay in quiz | ✅ Pass |
| Submit → Confirm → Results | ✅ Pass |
| Scores 0/100, 50/100, 100/100 (no NaN) | ✅ Pass |
| Result metrics (correct/wrong/unanswered/%) | ✅ Pass |
| Review answers post-result (all/correct/incorrect filter) | ✅ Pass |
| Mistake Notebook list + search + topic + status filters | ✅ Pass |
| Flash Review mode | ✅ Pass |
| Practice Mistakes → Custom Exam | ✅ Pass |
| Clear All / Clear Mastered mistakes | ✅ Pass |
| Dictionary search + double-click lookup | ✅ Pass |
| Option elimination (right-click + Alt+1-4) | ✅ Pass |
| Keyboard Shortcuts modal (? key) | ✅ Pass |
| Question Grid modal + filter tabs | ✅ Pass |
| Passage font size toggle (A / A+ / A++) | ✅ Pass |
| Session conflict detection (confirm dialog) | ✅ Pass |
| Error boundary recovery | ✅ Pass |
| Settings reset all data | ✅ Pass |
| History & Statistics (no NaN) | ✅ Pass |

---

## 📱 Responsive Matrix

| Feature | 320px | 390px | 768px | 1280px |
|---|---|---|---|---|
| Dashboard | ✅ | ✅ | ✅ | ✅ |
| Exam Catalog | ✅ | ✅ | ✅ | ✅ |
| QuizRunner | ✅* | ✅ | ✅ | ✅ |
| Result page | ✅ | ✅ | ✅ | ✅ |
| Mistake Notebook | ✅ | ✅ | ✅ | ✅ |

*320px: Header wraps to 2 rows, no overflow

---

## 🧪 Automated Tests (12/12 Pass)

| Test | Result |
|---|---|
| sanitizeHtml – XSS strip | ✅ |
| sanitizeHtml – safe tags | ✅ |
| sanitizeHtml – plain text | ✅ |
| calculateQuizScore – perfect | ✅ |
| calculateQuizScore – partial | ✅ |
| calculateQuizScore – zero | ✅ |
| timer – drift-free elapsed | ✅ |
| timer – countdown remaining | ✅ |
| timer – clamps at 0 | ✅ |
| Hand Scoring 7/10 correct (70%) | ✅ |
| Hand Scoring edge cases (0%, 100%, div-by-zero) | ✅ |
| LocalStorage Chaos – corrupt inputs sanitized | ✅ |

---

## Final UX Score

| Dimension | Score | Evidence |
|---|---|---|
| First-time experience | 8/10 | Clean hero, clear CTAs, no onboarding tooltips yet |
| Navigation | 9/10 | URL routing, back/forward, resume card |
| Quiz experience | 9/10 | Keyboard nav, elimination, font scaler, highlights |
| Question interaction | 9/10 | Select, change, eliminate, flag all solid |
| Timer | 8/10 | Drift-free, pause/resume, auto-submit on timeout |
| Result page | 9/10 | Full ✅/❌/⚪ breakdown, topic insights, confetti |
| Review answers | 8/10 | Bilingual, filter, save to mistakes |
| Mistake learning | 8/10 | Flash Review, mastered, Clear All now available |
| Statistics | 8/10 | Accurate, streak, guarded against NaN |
| Dictionary | 8/10 | Search, phonetic, examples, double-click |
| Mobile UX | 7/10 | Responsive, no overflow; 320px header tight |
| Accessibility | 7/10 | Keyboard + ARIA; no ARIA live regions yet |
| Error recovery | 9/10 | ErrorBoundary, storage fallbacks, session recovery |
| Performance | 9/10 | Code-split, gzip 15KB QuizRunner, 372ms build |
| **Overall usability** | **8.5/10** | Solid EdTech SaaS; minor mobile + a11y polish remaining |
