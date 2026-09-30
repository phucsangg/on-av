# ARCHITECTURE.md – EnglishQuiz Master System Architecture

## 1. System Overview
**EnglishQuiz Master** (`on-av`) is a high-performance, accessible, offline-first English Exam Preparation Single Page Application (SPA). It serves Vietnamese high school and university students preparing for University English Entrance/Placement exams (such as HUIT-oriented practice), TOEIC Reading, and the National High School Graduation Exam (THPT Quốc Gia).

- **Framework**: React 19.2.8 + TypeScript 6.0.2 + Vite 8.2.2 (Rolldown engine)
- **Styling Architecture**: Vanilla CSS Design Tokens, responsive fluid typography, glassmorphism accents, light/dark themes.
- **Persistence**: LocalStorage with schema versioning, quota-exceeded guards, safe parsing fallbacks, and throttled auto-save.
- **Routing**: Lightweight URL pushState / popState client-side router without bloated third-party dependencies.

---

## 2. Dependency & Component Hierarchy Map

```text
App (Root & Route Manager)
├── ErrorBoundary (Crash Isolation & Telemetry Reporting)
├── Navbar (Global Brand, Route Navigation, Quick Word Search, Theme Toggle)
├── Active Session Banner (Resume In-Progress Exam)
├── Main Content Views (React.lazy + Suspense Code-Splitting):
│   ├── Dashboard (Adaptive Recommendation Banner, CEFR Bracket, Weak Topic Actions)
│   ├── ExamCatalogPage (Catalog with Filters: University, TOEIC, THPT, Quick Quiz, Grammar, Vocab)
│   ├── QuizRunner (Modularized Exam Engine):
│   │   ├── QuizHeader (Progress, drift-free timer, actions)
│   │   ├── QuizShortcutsModal (A11y keyboard cheatsheet)
│   │   ├── QuizSubmitModal (Incomplete answers audit & confirm)
│   │   ├── QuizPauseModal (Focus isolation pause dialog)
│   │   └── QuizGridModal (Full 50-item interactive grid)
│   ├── QuizResult (Score Breakdown, Explanations, Mistake Sync, Share/Retry)
│   ├── MistakeNotebook (5-Box Leitner SRS, Due Date Filters, 4-tier Flash Review)
│   ├── HistoryStatsPage (Historical Attempts, Time Tracking, Skill Accuracy Trends)
│   ├── DictionaryPage (Dictionary Search, Audio Pronunciation, Word Bookmarking)
│   ├── CustomExamBuilder (Custom Exam Creator, JSON Import/Export with Schema Validation)
│   ├── AdminPage (Role-Gated CMS, Content Inventory, Question Review Queue)
│   ├── PrivacyPolicyPage (Zero-PII Compliance & Data Rights)
│   └── TermsPage (Educational Test Disclaimer & Terms)
├── Modals & Overlays:
│   ├── DictionaryModal (In-quiz instant word lookup via selection or search)
│   └── SettingsModal (Audio toggle, theme switch, data reset)
└── Footer (Navigation, Legal Links, Telemetry & Status)
```

---

## 3. Data Flow & Subsystem Architecture

### 3.1 Learning & SRS Subsystem (`learningEngine`)
Located at `src/services/learningEngine.ts`:
- **5-Box Leitner Spaced Repetition**: Calculates next review intervals based on qualitative student ratings:
  - `again` (Rating 1): Box 1 reset (1 day interval)
  - `hard` (Rating 2): Box $\max(1, B - 1)$ (3 days interval)
  - `good` (Rating 3): Box $\min(5, B + 1)$ (7 or 14 days interval)
  - `easy` (Rating 4): Box 5 jump (30 days interval / Mastered)
- **CEFR & TOEIC Estimator**: Maps cumulative accuracy across verified attempts to Common European Framework of Reference levels (`A2` to `C1`) and projected TOEIC scores.
- **Weak Topic Priority Analyzer**: Aggregates per-topic accuracy, flagging categories with $< 65\%$ precision as High Severity.
- **Next Best Action Generator**: Dynamically yields prioritized study recommendations on the Dashboard (`srs_review` → `weak_topic_practice` → `diagnostic` → `full_exam`).

### 3.2 Quiz Engine Flow
```text
ExamCatalogPage / Dashboard (Select Exam)
       │
       ▼
App.tsx (Sets activeExam, pushes /lam-bai?examId=...)
       │
       ▼
QuizRunner.tsx
   ├── useQuizTimer (Drift-free Date.now() timestamp tracking)
   ├── Modular subcomponents: QuizHeader, QuizGridModal, QuizSubmitModal
   ├── Local state: answers, flagged, currentIndex, eliminated options
   ├── storageService.saveActiveSession (Throttled auto-save on navigation / 10s tick)
   │
   ▼ [User clicks Submit or Timer times out]
QuizResult.tsx
   ├── Computes Score & Accuracy Percentage
   ├── storageService.saveAttempt (Appends to attempts history)
   ├── storageService.syncMistakes (Upserts incorrect questions to Mistake Notebook with Box 1 SRS)
   └── Confetti Animation & Action triggers (Review, Retry, Mistake Practice)
```

### 3.2 Storage & Persistence Architecture (`storageService`)
All browser persistence is encapsulated in `src/services/storageService.ts`:
- **Prefix Isolation**: `eq_` key prefix.
- **Safe Parsing (`safeGet`)**: Catches invalid JSON or corrupted data, returns fallback defaults without crashing the app.
- **Safe Writing (`safeSet`)**: Wraps `localStorage.setItem` in try/catch to handle `QuotaExceededError`. If quota is reached, it automatically prunes older test attempts.
- **Throttling**: `QuizRunner` throttles active session saves to only trigger on state change (answers/flags/question index) and every 10 seconds of elapsed time, plus `beforeunload`, avoiding disk I/O thrashing.

### 3.3 Dictionary Subsystem (`dictionaryService`)
- Unified lookup combining offline pre-indexed datasets (`dictionaryData.ts`) and Google Dictionary API fallback.
- In-memory Map cache prevents duplicate network requests.
- Native Web Speech API (`window.speechSynthesis`) provides native `en-US` pronunciation with fallback state handling.

### 3.4 Data Validation & Security
- `src/utils/sanitize.ts`: Pure regex-based HTML sanitizer allowing safe pedagogical tags (`<b>`, `<i>`, `<u>`, `<mark>`, `<br>`) while stripping `<script>`, `<iframe>`, `<style>`, `javascript:` protocols, and inline DOM event attributes (`onload`, `onerror`, `onclick`).
- `src/utils/validation.ts`: Runtime schema validation ensuring all questions contain valid `id`, `options` (A/B/C/D), `correctAnswer`, `explanation`, and `topicTag`.

### 3.5 Anti-Spoiler Engine Architecture
To ensure test integrity and prevent answer giveaways:
1. **Mode Gating (`quizMode === 'exam'`)**: The grammar/topic badge (`topicTag`) is completely omitted from the DOM during exam mode.
2. **Practice Gating (`quizMode === 'practice'`)**: In practice mode, the badge is only rendered after the student has submitted their choice for that question.
3. **Data Sanitization (`cleanTopicTag`)**: Strips parenthesized answer spoilers (e.g. `(Modal Perfect)`, `(Gerund)`) from metadata strings, preserving grammatical classifications (e.g. `Ngữ pháp - Thì`, `Mệnh đề quan hệ`).

### 3.6 Interactive Examination Subsystem (`QuizRunner`)
- **Option Elimination**: Allows students to eliminate unlikely distractors with visual strikethrough and opacity diminution without selecting them as an answer.
- **Question Grid Modal**: Fast question overview modal with status indicators (current, answered, flagged, unvisited).
- **Keyboard Shortcuts Engine**: Non-conflicting event listener binding keys (`1-4`, `A-D`, `F`, `Arrows`, `?`, `Escape`) with focus-stealing guards.
- **Audio & Haptic Feedback**: Optional subtle sound feedback on question navigation, answer submission, and completion.

---

## 4. Exam Datasets Registry (23 Datasets / 950 Questions)
All questions are modularized into separate files in `src/data/` and loaded dynamically or grouped in `questionBank.ts`:
1. `HUIT_02_EXAM` (`huit02ToeicExamData.ts` - 50 questions, University / TOEIC)
2. `HUIT_TOEIC_TONG_HOP_2026_EXAM` (`huitToeicTongHop2026ExamData.ts` - 50 questions, University / TOEIC)
3. `HUIT_TOEIC_DE_02_NANG_CAO_EXAM` (`huitToeicDe02NangCaoExamData.ts` - 50 questions, University / TOEIC)
4. 20 High School & Specialized Practice Exams (`bacNinh2026ExamData`, `hanoiExamData`, `daNangExamData`, `chuyenBacGiang2026ExamData`, etc. - 40 questions each).
All datasets conform strictly to the `ExamSet` and `Question` schemas defined in `src/types/quiz.ts`.
