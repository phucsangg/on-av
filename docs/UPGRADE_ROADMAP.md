# ON-AV / EnglishQuiz Master — Production Upgrade Roadmap & Target Architecture

> **Document Type:** Production Engineering Roadmap, Scalability Assessment & Priority Matrix  
> **Repository:** [phucsangg/on-av](https://github.com/phucsangg/on-av)  
> **Status:** Planning Baseline (Prompt 1 Target)  
> **Date:** September 2026  
> **Standards Compliance:** Ponytail Lazy Senior Dev Principles (YAGNI, smallest working diff, deferral over premature abstraction), Addy Osmani Production Engineering, Karpathy Surgical Precision.

---

## 1. Scalability Assessment (10 → 1,000 → 10,000 Users)

### 1.1 Baseline Scale (10 – 100 Users): Pure Static Client Architecture
- **State Today:** The application is hosted as a 100% static single-page application (SPA) on Vercel/Netlify/Cloudflare Pages.
- **Runtime Load:** There is **zero server computing cost**. Every question, exam definition, timer tick, score calculation, and mistake notebook entry executes inside the client's V8 / JavaScript engine.
- **Resource Footprint:** Initial JS payload is **35.3 kB gzip**. Dynamic exam chunks are lazy-loaded on-demand (**11–20 kB gzip**).
- **Bottlenecks at this tier:** None. Edge CDNs cache immutable assets with `Cache-Control: max-age=31536000, immutable`. Bandwidth consumption is under 50 MB/month.

### 1.2 Medium Scale (1,000 Concurrent / Daily Active Users)
- **Static Asset Serving:** Edge CDN handles 1,000 concurrent learners with sub-20ms TTFB globally. CDN egress remains well within free tier limits (~1.2 GB/day).
- **Client Storage Bottlenecks:**
  - `localStorage` has a strict browser ceiling of **5MB–10MB**.
  - A user completing 50 exams with question review logs consumes ~450 KB of JSON. For an individual device, 1,000 distinct users do not share storage (each has their own client), so individual storage is safe.
  - **Friction Point:** Users clearing browser cache, switching from phone to laptop, or using private/incognito browsing lose 100% of their exam history and mistake notebook items.
- **External Dependency Risk (Translation API):**
  - `dictionaryService.ts` queries Google Translate via client-side `fetch('https://translate.googleapis.com/translate_a/single?client=gtx...')`.
  - At 1,000 active users, thousands of highlight lookup queries originate from consumer ISP IPs. Google's unauthenticated endpoint triggers HTTP 429 (Too Many Requests) or IP throttling for shared university campus NAT IPs (e.g. HUIT dormitories/campuses sharing one egress IP).
  - **Remedy at 1,000 Users:** Implement in-memory + `localStorage` LRU dictionary caching (already implemented) and provide an optional self-hosted Cloudflare Worker edge translation proxy or offline dictionary fallback.

### 1.3 High Scale (10,000+ Active Learners)
- **Question Delivery & Distribution:**
  - 23 exam chunks bundled into Vite build directory work smoothly up to ~50–100 exams (~2 MB total bundle).
  - When expanding to **500+ exams (20,000+ questions)**, bundling static TypeScript files into git/dist degrades build times, cache invalidation cycles, and repository size.
  - **Evolution Requirement:** Migrate static question definitions to an Object Storage bucket (Cloudflare R2 / AWS S3) served over CDN as versioned JSON assets (`/exams/v1/huit_01.json.gz`), fetched by the client with standard HTTP caching.
- **Analytics & Diagnostic Aggregation:**
  - Without a backend, instructors and administrators cannot view exam completion rates, item difficulty indexes (Facility Value $F$ and Discrimination Index $D$), or question failure distribution.
  - **Requirement:** Lightweight write-only telemetry pipeline (Beacon API / HTTP POST to serverless ingestion) to capture question drop-off and error frequencies without requiring heavy relational databases.

---

## 2. Target Architecture Specification

### 2.1 Architectural Philosophy: "Offline-First Core with Optional Cloud Enhancement"
In strict adherence to the Ponytail principle (*"Does it already exist? Does standard platform cover it? Do not add a backend until client capabilities are genuinely exhausted"*), ON-AV maintains its high-performance, instant-loading static core. Cloud synchronization is modeled as a non-blocking enhancement layer rather than a mandatory runtime dependency.

```
+---------------------------------------------------------------------------------------+
|                                     CLIENT LAYER                                      |
|                                                                                       |
|   +-------------------------------------------------------------------------------+   |
|   |                            React 19 + TypeScript SPA                          |   |
|   |   +-------------------+  +--------------------+  +------------------------+   |   |
|   |   |    Quiz Engine    |  |  Learning Engine   |  |   Analytics & Telemetry|   |   |
|   |   | - State Machine   |  | - Mistake SRS Box  |  | - Web Vitals           |   |   |
|   |   | - Driftless Timer |  | - Diagnostic Flow  |  | - Session Metrics      |   |   |
|   |   | - Score Evaluator |  | - CEFR Profiler    |  | - Error Tracking       |   |   |
|   |   +---------+---------+  +---------+----------+  +-----------+------------+   |   |
|   +-------------|----------------------|-------------------------|----------------+   |
|                 v                      v                         v                    |
|   +-------------------------------------------------------------------------------+   |
|   |                          Offline-First Storage Layer                          |   |
|   |                                                                               |   |
|   |       [ IndexedDB (Dexie.js / Native) ] <---> [ localStorage (Fallback) ]     |   |
|   |               ^                                                               |   |
|   +---------------|---------------------------------------------------------------+   |
+-------------------|-------------------------------------------------------------------+
                    |
          (Optional Sync Pipeline)
                    |
+-------------------|-------------------------------------------------------------------+
|                   v                   CLOUD LAYER                                     |
|                                                                                       |
|   +-------------------------------+         +-------------------------------------+   |
|   |     Edge API / Sync Layer     |         |             Edge Assets             |   |
|   |  - Cloudflare Workers / Hono  |         |  - Cloudflare R2 / Static CDN       |   |
|   |  - Supabase Auth + PostgREST  |         |  - Versioned Question Datasets      |   |
|   +---------------+---------------+         +-------------------------------------+   |
|                   |                                                                   |
|                   v                                                                   |
|   +-------------------------------+                                                   |
|   |     PostgreSQL / Storage      |                                                   |
|   |  - Row Level Security (RLS)   |                                                   |
|   |  - User Exam Sessions         |                                                   |
|   |  - Leitner Card Progress      |                                                   |
|   +-------------------------------+                                                   |
+---------------------------------------------------------------------------------------+
```

### 2.2 Subsystem Decomposition

| Subsystem | Responsibilities | Current State | Target Evolution |
|---|---|---|---|
| **Quiz Engine** | State machine, option selection, drift-free timestamping, hand-math scoring, anti-spoiler regex matching. | Single monolithic component (`QuizRunner.tsx` 2800+ lines). | Extract into pure headless state hook (`useQuizEngine`) separating UI presentation from state transitions. |
| **Learning Engine** | Mistake tracking, weakness tagging, spaced repetition schedule, diagnostic path. | Flat mistake array in `localStorage`. | Multi-tier Leitner box scheduler (Boxes 1–5) indexed by topic/CEFR tags. |
| **Storage Engine** | Persisting in-flight exams, completed history, settings, highlights, notes. | Synchronous `localStorage` with JSON serialization. | Abstract storage driver interface (`StorageAdapter`) supporting IndexedDB for large history & binary audio. |
| **Content Delivery** | Loading exam questions, passages, audio assets. | Static ES Modules bundled via Vite dynamic `import()`. | Stays static CDN ES modules / versioned JSON files. No database query needed to fetch questions. |
| **Sync Engine** | Background bidirectional merge between client local cache and remote user account. | Non-existent (pure client). | Debounced delta-sync with Conflict-Free Replicated Data (last-write-wins by timestamp). |

---

## 3. Priority Matrix

Prioritization is categorized using industry standard triage:
- **P0 — Production Blocker:** Critical for stability, legal compliance, error tracking, or data integrity before general public announcement.
- **P1 — Critical:** High learning/assessment value, fixes notable architectural debt, or directly addresses core student user friction.
- **P2 — Important:** High quality-of-life, pedagogical enhancement, or workflow automation for content maintenance.
- **P3 — Nice-to-Have:** Long-term polish, advanced gamification, or community engagement features.

| ID | Problem / Feature | Category | Impact | Complexity | Priority |
|---|---|---|:---:|:---:|:---:|
| **ENG-01** | Production Sentry & Real User Monitoring (RUM) integration | Production | High | Low | **P0** |
| **ENG-02** | Progressive Web App (PWA) manifest & ServiceWorker offline caching | Production | High | Low | **P0** |
| **ENG-03** | Comprehensive Legal Pages (Privacy Policy, Terms of Service, DMCA) | Production | Medium | Low | **P0** |
| **ENG-04** | Extract `QuizRunner.tsx` into modular hooks & subcomponents | Architecture | High | Medium | **P1** |
| **DAT-01** | Question Quality Schema Migration (`quality` + `source` metadata) | Content | High | Medium | **P1** |
| **LRN-01** | Spaced Repetition (Leitner 5-Box SRS) for Mistake Notebook | Learning | Very High | Low | **P1** |
| **LRN-02** | 15-Minute Diagnostic Placement Test & CEFR Profile Assessment | Learning | High | Medium | **P1** |
| **ENG-05** | Storage Migration: IndexedDB adapter for large history & exams | Architecture | Medium | Medium | **P1** |
| **DAT-02** | Automated CLI Question Linter & Ambiguity / Duplicate Checker | Content / Tooling | High | Medium | **P1** |
| **PLT-01** | Optional Google Auth & Supabase Cloud Sync Layer | Platform | High | Medium | **P2** |
| **ENG-06** | Self-Hosted / Edge Proxy for Google Translate queries | Reliability | Medium | Low | **P2** |
| **CON-01** | TOEIC Listening Section Engine (Audio Player + Sync Transcripts) | Content / Engine | High | High | **P2** |
| **LRN-03** | Weak Topic Targeted Practice Generator (Custom quiz by topic/tag) | Learning | High | Low | **P2** |
| **CMS-01** | Headless Content Authoring Pipeline (DOCX/Markdown to JSON CLI) | Content / Tooling | High | Medium | **P2** |
| **PLT-02** | End-to-End Test Suite (Playwright automated cross-browser matrix) | QA / CI | High | Medium | **P2** |
| **FEA-01** | Vocabulary Flashcard Mode (Extracted from question glossaries) | Learning | Medium | Low | **P3** |
| **FEA-02** | Daily Goals & Light Streak Visualizer | Gamification | Low | Low | **P3** |
| **FEA-03** | Data Export/Import (JSON / Anki Deck .apkg format) | Utility | Medium | Low | **P3** |

---

## 4. Phased Production Roadmap

```
2026 Q4                  2026 Q4 - 2027 Q1       2027 Q1                 2027 Q2
[ Phase 1: Foundation ] -> [ Phase 2: Quality ] -> [ Phase 3: Cloud ]   -> [ Phase 4: Intelligence ]
- Sentry Monitoring       - Quality Metadata      - Google Auth (Opt)     - Diagnostic Test
- PWA & Offline SW        - Source & Licensing    - Cloudflare / Supabase - Leitner SRS Box
- Legal & Privacy Docs    - Question CI Linter    - Encrypted Sync        - CEFR Radar Graph
- Decompose QuizRunner    - Passage Formatting    - Edge Translation Proxy- Weak-Topic Builder
```

---

### Phase 1: Production Foundation & Core Architecture Hardening
**Objective:** Prepare the existing codebase for public deployment to hundreds of concurrent learners with zero unhandled runtime crashes, complete offline resilience, and clean maintainability.

#### Tasks:
1. **Sentry & Telemetry Integration (`ENG-01`):**
   - Install `@sentry/react` with zero-bundle-bloat tree shaking.
   - Configure release tagging, source maps upload via Vite plugin, and custom breadcrumbs for quiz lifecycle events (`exam_started`, `answer_selected`, `exam_submitted`).
   - Add global Web Vitals telemetry (`onCLS`, `onINP`, `onLCP`) to monitor low-end mobile devices.
2. **PWA & Offline Service Worker (`ENG-02`):**
   - Implement `vite-plugin-pwa` with `CacheFirst` strategy for static exam bundles and fonts.
   - Configure Web App Manifest (`manifest.webmanifest`) with standalone display mode and high-resolution icons.
   - Ensure the application is 100% functional when students lose WiFi connection in university lecture halls.
3. **Legal & Compliance Infrastructure (`ENG-03`):**
   - Add `/privacy`, `/terms`, and `/academic-integrity` static pages.
   - Add transparent disclaimers regarding simulated HUIT practice tests and non-official affiliation.
4. **Architectural Modularization of `QuizRunner.tsx` (`ENG-04`):**
   - Isolate quiz state machine into `src/hooks/useQuizEngine.ts`.
   - Break 2,800-line monolithic file into clean, testable subcomponents:
     - `src/components/quiz/QuizHeader.tsx` (Timer, title, action buttons)
     - `src/components/quiz/PassagePanel.tsx` (Dual-pane reading view, highlight listeners)
     - `src/components/quiz/QuestionCard.tsx` (Question stem, option list, elimination buttons)
     - `src/components/quiz/QuestionGridModal.tsx` (Question palette, filter tabs)
     - `src/components/quiz/DictionaryPopup.tsx` (Word translation popover)

- **Dependencies:** None. Operates directly on the current codebase.
- **Risk:** Regression in quiz navigation or timer persistence during component refactor.
- **Mitigation:** Rely on the comprehensive 19-test suite (`chaos_and_scoring.test.mjs`, `timer.test.mjs`) and add Playwright smoke tests before and after splitting components.
- **Expected Outcome:** Bundle size stays <40 kB initial; 100% crash visibility in production; offline PWA installable on iOS and Android.

---

### Phase 2: Question Quality, Schema Governance & Content Tooling
**Objective:** Upgrade all 950 questions with rigorous quality metadata, clear licensing attribution, and automated sanity testing to guarantee zero content defects.

#### Tasks:
1. **Schema Expansion (`DAT-01`):**
   - Update `Question` interface in `src/types/quiz.ts` with optional `quality` and `source` objects:
     ```ts
     export interface QuestionQuality {
       status: 'unverified' | 'community_reviewed' | 'faculty_verified';
       reviewedBy?: string;
       reviewedAt?: string;
       confidenceScore?: number;
     }
     export interface QuestionSource {
       type: 'simulated_huit' | 'past_paper' | 'original' | 'open_license';
       name: string;
       year?: number;
       license?: string;
     }
     ```
   - Add `cefrLevel?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'` and `primarySkill?: 'grammar' | 'vocabulary' | 'reading_detail' | 'reading_inference'`.
2. **Automated Content Sanity Linter (`DAT-02`):**
   - Expand `scripts/validateData.mjs` into a comprehensive CI check:
     - Detect exact duplicate stems across all 23 exam files.
     - Detect near-duplicate stems using Levenshtein distance similarity (>85%).
     - Flag missing Vietnamese explanations in standard exams.
     - Validate that reading comprehension questions are strictly grouped with valid passages.
     - Verify distractor uniqueness (no two identical options inside one question).
3. **Passage Parsing & Formatting Cleanup:**
   - Standardize all dual-reading and triple-reading passage markdown headers for consistent rendering.

- **Dependencies:** Completion of Phase 1.
- **Risk:** Existing exams fail validation due to historical data omissions.
- **Mitigation:** Schema fields are made strictly optional with fallback defaults so unmigrated exams load without breaking.
- **Expected Outcome:** 100% of question files pass automated CI linting; question origin and accuracy levels are transparently visible to learners.

---

### Phase 3: Identity, Storage Scalability & Cloud Synchronization
**Objective:** Enable learners to maintain persistent learning history across devices (mobile phone and laptop) without sacrificing the instant zero-login guest experience.

#### Tasks:
1. **IndexedDB Storage Engine Adapter (`ENG-05`):**
   - Implement `StorageAdapter` pattern. Use native IndexedDB or micro-library (e.g. `idb` ~1 kB) to store exam session histories and mistake items, removing the 5MB `localStorage` limit.
   - Transparently migrate existing `localStorage` keys (`eq_results`, `eq_mistakes`) to IndexedDB on first load.
2. **Optional Identity & Auth Layer (`PLT-01`):**
   - Integrate Supabase Auth or Firebase Auth supporting Google One-Tap / OAuth.
   - Maintain a strict **"Guest-First" policy**: Users can complete exams, view results, and use the mistake notebook without creating an account. Account creation is offered only when they want cross-device sync.
3. **Differential Sync Pipeline:**
   - On login, upload local history and download remote history using conflict-free timestamp comparison (`updatedAt`).
   - Store exam results in a lightweight PostgreSQL schema (`user_id`, `exam_id`, `score`, `answers`, `completed_at`).
4. **Translation Edge Proxy (`ENG-06`):**
   - Deploy a lightweight Cloudflare Worker reverse-proxy for dictionary lookups to avoid IP blocking and provide response caching.

- **Dependencies:** Phase 1 (Sentry in place to observe storage migration anomalies).
- **Risk:** Sync race conditions overwriting local high scores or uncompleted exam states.
- **Mitigation:** Last-Write-Wins (LWW) by monotonic UTC timestamp; immutable exam session records (each completed exam is an append-only event).
- **Expected Outcome:** Zero data loss when users switch devices; infinite history storage; instant guest mode preserved.

---

### Phase 4: Learning Intelligence, Adaptive SRS & Diagnostic Testing
**Objective:** Transform ON-AV from a passive quiz player into an active, intelligent learning accelerator.

#### Tasks:
1. **15-Minute Diagnostic Placement Test (`LRN-02`):**
   - Create a curated 25-question diagnostic exam spanning grammar, vocabulary, and short reading passages with calibrated difficulty (A2 to B2).
   - Compute real-time CEFR readiness radar chart and recommended starting exams.
2. **Leitner 5-Box Spaced Repetition System (`LRN-01`):**
   - Upgrade Mistake Notebook (`src/pages/Mistakes.tsx`) from a static list to an active review queue.
   - Box 1 (1 day) → Box 2 (3 days) → Box 3 (7 days) → Box 4 (14 days) → Box 5 (Mastered).
   - "Daily Review Due" badge indicating questions scheduled for review today.
3. **Targeted Weak-Topic Practice Builder (`LRN-03`):**
   - Allow students to generate on-demand practice sessions (e.g. "20 questions on Prepositions & Conjunctions" or "B1-level Vocabulary").
   - Filter questions dynamically from the existing 950-question pool.

- **Dependencies:** Phase 2 (CEFR and topic metadata on questions).
- **Risk:** High cognitive load if spaced repetition rules are too complex.
- **Mitigation:** Keep interface simple: one "Review Due Questions" button on the dashboard; automated scheduling hidden under the hood.
- **Expected Outcome:** Significant increase in 7-day retention; users actively fix mistakes rather than just accumulating them.

---

### Phase 5: Content Operations & Headless Authoring Pipeline
**Objective:** Empower teachers, contributors, and content creators to add exams in minutes without writing manual TypeScript files.

#### Tasks:
1. **DOCX / Markdown to JSON CLI Pipeline (`CMS-01`):**
   - Build a robust Node.js CLI script: `npm run import:exam -- ./input.docx`.
   - Parse headings, stems, options (`A.`, `B.`, `C.`, `D.`), correct answer markers, and Vietnamese explanations using resilient regex patterns.
   - Output validated, formatted TypeScript/JSON exam files ready for git pull request.
2. **Automated PR Validation Action:**
   - GitHub Action that runs `validateData.mjs` on every pull request touching `src/data/exams/`.
   - Posts a summary comment detailing question count, skill distribution, and duplicate stem checks.

- **Dependencies:** Phase 2 (Question Schema & Linter).
- **Risk:** Varied Word document formatting causing parsing hallucinations.
- **Mitigation:** Strict error reporting with exact line numbers and interactive CLI prompts for unrecognized formats.
- **Expected Outcome:** Exam publishing time reduced from 2 hours to 2 minutes per test.

---

### Phase 6: Multi-Modal Modalities & Advanced Capabilities
**Objective:** Complete the full TOEIC assessment blueprint by introducing listening comprehension and audio evaluation.

#### Tasks:
1. **TOEIC Listening Engine (`CON-01`):**
   - Build accessible HTML5 Audio player with waveform visualization, playback speed controls (0.75x, 1.0x, 1.25x), and jump buttons (-5s, +5s).
   - Support synchronized transcript reveals during post-exam review.
2. **Vocabulary Flashcard Deck (`FEA-01`):**
   - Flip-card component for high-frequency TOEIC vocabulary extracted from exam passages.
3. **Data Portability (`FEA-03`):**
   - Export mistake notebook and flashcards to Anki package format (`.apkg`) and CSV/JSON.

- **Dependencies:** Phase 3 (Storage adapter for audio cache/history) and Phase 4.
- **Risk:** High audio bandwidth costs on edge hosting.
- **Mitigation:** Compress all audio files to 64kbps mono Opus/AAC and host on zero-egress Cloudflare R2 bucket.
- **Expected Outcome:** Full 200-question TOEIC Listening + Reading simulation capability.

---

## 5. Production Risks & Concrete Mitigations

| Risk Domain | Specific Failure Scenario | Impact | Concrete Engineering Mitigation |
|---|---|:---:|---|
| **Data Loss** | User clears browser cookies/cache or Safari deletes `localStorage` after 7 days of inactivity (ITP). | High | Provide single-click "Download Backup (JSON)" button in Settings; migrate to IndexedDB; prompt optional cloud sync after 3 completed tests. |
| **API Throttling** | Google Translate unauthenticated endpoint returns HTTP 429 during simultaneous university lab testing. | Medium | Fallback to pre-compiled static bilingual dictionary for common 3,000 words; route lookup through Cloudflare Worker proxy with response caching. |
| **State Corruption** | User opens two browser tabs with different questions of the same exam; answers cross-contaminate. | Medium | Scope in-flight quiz storage keys by tab session ID (`sessionStorage` for active UI state, synced to `localStorage` on final submission). |
| **Memory Pressure** | Long reading passages with multi-color highlights cause DOM listener leaks on low-end Android phones. | Low | Use passive event listeners; detach selection toolbar listeners on unmount; clean up synthetic highlights via single canvas or CSS Highlights API. |
| **Academic Dispute** | Question data contains typographical errors or ambiguous distractors inherited from source materials. | Medium | Embed "Report Question Issue" modal in the review screen to crowdsource verification directly into a GitHub issue / webhook. |

---

## 6. Estimated Implementation Sequence

```
Step 1: Production Baseline
  ├── Add Sentry Error Monitoring & Web Vitals
  ├── Configure PWA manifest & ServiceWorker offline caching
  └── Add Legal / Disclaimer pages

Step 2: Component Refactoring (Zero Behavioral Change)
  ├── Extract useQuizEngine hook from QuizRunner.tsx
  ├── Split QuizHeader, PassagePanel, QuestionCard, QuestionGridModal
  └── Verify 100% test pass rate with chaos and timing suites

Step 3: Content Quality Assurance
  ├── Expand Question interface with quality & source metadata
  ├── Implement Levenshtein duplicate-stem and distractor checker
  └── Run validation across all 23 exam files

Step 4: Enhanced Learning Value
  ├── Implement Leitner 5-Box SRS for Mistake Notebook
  ├── Build 15-Minute Diagnostic Placement Test
  └── Add CEFR competency radar to Dashboard

Step 5: Cloud & Multi-Device Sync (Optional Tier)
  ├── Build IndexedDB storage driver with seamless localStorage migration
  ├── Implement Supabase / Google OAuth login
  └── Enable differential background sync for registered users
```
