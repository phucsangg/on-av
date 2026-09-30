# DATA_GUIDELINES.md — ON-AV Data Architecture & Migration Guidelines

## 1. Core Data Entities

ON-AV utilizes standardized TypeScript interfaces defined in [`src/types/quiz.ts`](file:///d:/on_av/src/types/quiz.ts). All persistent storage and question bank files conform to these structures.

### 1.1 Question Schema
```typescript
export interface Question {
  id: string;               // Unique alphanumeric identifier, e.g. "huit_toeic_02_q01"
  questionNumber: number;   // 1-indexed relative to current exam
  stem: string;             // Question prompt or sentence with blanks
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;      // Bilingual / pedagogical rationale
  passage?: string;         // Reading passage if part of a reading block
  translation?: string;     // Vietnamese translation of passage/sentence
  topicTag: string;         // e.g. "Thì Quá khứ đơn", "Collocation"
  difficulty?: 'easy' | 'medium' | 'hard';
  audioUrl?: string;        // Optional listening asset or synthesis override
  cefrLevel?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  primarySkill?: 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'pronunciation';
  quality?: 'draft' | 'verified' | 'flagged' | 'archived';
  source?: 'official_exam' | 'simulated' | 'teacher_authored' | 'ai_assisted';
}
```

### 1.2 SavedMistake Schema with SRS
```typescript
export interface SavedMistake {
  question: Question;
  addedAt: string;          // ISO timestamp
  userWrongAnswersCount: number;
  mastered?: boolean;
  notes?: string;
  srsSchedule?: {
    box: number;            // 1 (daily) to 5 (mastered)
    intervalDays: number;
    dueDate: string;        // ISO timestamp
    lastReviewedAt: string; // ISO timestamp
  };
}
```

---

## 2. Storage Migration & Versioning Strategy

Browser persistence uses `localStorage` with a dedicated key `eq_storage_version`.

### 2.1 Version History
- **v1**: Initial unversioned storage storing `eq_attempts`, `eq_mistakes`, `eq_saved_words`, `eq_active_session`.
- **v2 (Current)**: Explicit schema versioning with automatic SRS schedule hydration for existing mistakes and telemetry error event log initialization.

### 2.2 Non-Destructive Migration Protocol
- **Zero Data Loss Guarantee**: Under no circumstance does a schema migration delete or overwrite student test attempts, mistake notebooks, or saved vocabulary.
- **Hydration Routine**: When `initStorage()` detects an older or missing `eq_storage_version`, it reads existing records, decorates them with required default properties (e.g., initializing `srsSchedule` on legacy mistakes), and stamps `eq_storage_version = 2`.

### 2.3 Quota Protection Protocol
If browser `localStorage` hits the ~5MB limit (`QuotaExceededError`):
1. User bookmarks (`eq_saved_words`) and mistakes (`eq_mistakes`) are **strictly protected**.
2. The storage engine safely prunes only the oldest 30% of raw user attempts (`eq_attempts`).
3. If quota remains constrained, active session temporary answers are compressed.

---

## 3. Question Bank Authoring Rules

When adding or editing questions in `src/data/exams/`:

1. **Unique IDs**: Every question ID must be globally unique across all 23 exam files (enforced by `scripts/validateData.mjs`).
2. **Anti-Spoiler Tagging**: Do NOT put direct answers inside parentheses in `topicTag` (e.g., avoid `"Câu điều kiện (Type 2)"` if the question stem tests Type 2). Always use general category tags like `"Câu điều kiện"`.
3. **Reading Passages**: For reading comprehension blocks, attach the full passage to each question or use identical paragraph demarcation so the Cloze Masking and Highlight engines render seamlessly.
4. **Validation Command**: Run `node scripts/validateData.mjs` before committing any new exam file.
