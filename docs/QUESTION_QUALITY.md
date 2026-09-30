# QUESTION_QUALITY.md — Educational Question Quality & Pedagogical Standards

## 1. Quality Objectives & Philosophy

Questions in ON-AV must adhere to high psychometric and educational rigor. Distractors must test real linguistic competencies rather than trickery or typographical ambiguity. Explanations must deliver clear pedagogical insights that enable self-directed learning.

---

## 2. Question Lifecycle & Content Governance

Every question tracks a 4-stage quality lifecycle:

```text
[ draft ]
   │  (Review & Validation)
   ▼
[ verified ] ◄────────┐ (Resolution)
   │                  │
   ▼ (User/Editor)    │
[ flagged ] ──────────┘
   │
   ▼ (Superseded/Outdated)
[ archived ]
```

- **Draft**: Newly imported or generated questions. Not published to official exam sets without editorial sign-off.
- **Verified**: Peer-reviewed or derived from verified official past papers (e.g., THPT National Exams, HUIT standardized tests).
- **Flagged**: Flagged by students or reviewers for typos, disputed keys, or unclear explanations. Enters the Admin Review Queue (`/admin`).
- **Archived**: Deprecated questions removed from active rotation while preserving historical attempt linkages.

---

## 3. Metadata Standards & CEFR Mapping

Each question includes educational metadata:
- **CEFR Level**:
  - `A2`: Basic everyday grammar and vocabulary (Elementary).
  - `B1`: Intermediate grammar (tenses, basic relative clauses, everyday workplace vocabulary). Typical target: 450–600 TOEIC.
  - `B2`: Upper intermediate (inversion, subjunctive, complex prepositions, advanced reading inference). Typical target: 600–800 TOEIC.
  - `C1`: Advanced professional/academic English, nuanced idioms, dense argumentative texts.
- **Primary Skill**:
  - `grammar`: Sentence structure, verb forms, conjunctions.
  - `vocabulary`: Collocations, word choice, synonyms/antonyms.
  - `reading`: Main idea, inference, detail retrieval, vocabulary in context.
  - `pronunciation`: Stress patterns, phonetic distinctions (`/s/`, `/ed/`, vowel shifts).
  - `listening`: Spoken dialogue and monologue comprehension.

---

## 4. Question Writing & Distractor Rules

1. **Stem Clarity**: The question stem must clearly indicate the problem. If it is a sentence completion item, only one single blank per item is permitted unless explicitly testing paired conjunctions (`either... or...`).
2. **Grammatical Parallelism**: All four options (A, B, C, D) must be grammatically and structurally parallel (e.g., all gerunds, all nouns, or all full clauses).
3. **Plausible Distractors**: Distractors must reflect frequent Vietnamese learner errors (false friends, L1 interference, wrong prepositions, incorrect word forms). Avoid nonsense words or obviously absurd choices.
4. **Pedagogical Explanation**:
   - Must explain the exact grammatical rule or contextual clue.
   - Must translate the full sentence or key clause into Vietnamese.
   - Must briefly explain why common distractors are incorrect.
5. **No Spoiler Topic Tags**: The `topicTag` must classify the linguistic topic without giving away the answer. Avoid tags such as `Rút gọn mệnh đề quan hệ (V-ing)` which telegraph the answer.

---

## 5. Automated Validation & Review Queue Tooling

- **Automated Validation Script**: Run before every release:
  ```bash
  node scripts/validateData.mjs
  ```
  The script checks:
  - 100% presence of non-empty stems, explanations, and all 4 options.
  - Valid `correctAnswer` in `['A', 'B', 'C', 'D']`.
  - Global uniqueness of all question IDs across all 23 exam files.
  - Duplicate stem detection across disparate files.
- **Administrative Portal (`/admin`)**:
  - Review queue for flagged questions.
  - 1-click status transitions (Verify / Flag / Archive).
  - Instant inspection of question stems, options, and explanations.
