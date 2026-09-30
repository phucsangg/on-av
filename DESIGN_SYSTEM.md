# ON-AV — DESIGN SYSTEM SPECIFICATION (vNext)

**Architecture:** Semantic Token Architecture & Quiet Chrome EdTech Design  
**Target:** Modern Premium Minimal EdTech (Benchmark: Linear, Vercel, Notion, Stripe, Duolingo, Khan Academy)  
**Standard:** WCAG 2.2 AA Compliance, Responsive (320px – 1920px), Dark/Light Adaptive  

---

## 1. DESIGN PHILOSOPHY & CORE PRINCIPLES

1. **Content > Decoration:**  
   Educational testing interfaces prioritize questions, reading passages, answer choices, and progress indicators. Gradients, glowing drop-shadows, and floating decorations are eliminated in favor of high contrast and visual calm.

2. **Hierarchy > Density:**  
   Every screen answers *"What should I do next?"* within 3 seconds. The interface uses a 3-level information hierarchy:
   - **Level 1:** What should I know right now? (Primary metric, score, or active question)
   - **Level 2:** Why? (Breakdown by skill, topic mastery, or time elapsed)
   - **Level 3:** What next? (Clear primary call-to-action button)

3. **Color = Meaning (Semantic Utility):**  
   Colors are strictly reserved for state and communication:
   - **Primary (`#4338ca` / `#6366f1`):** Navigation, focused interactions, primary CTA.
   - **Success (`#059669` / `#10b981`):** Correct answers, mastered topics, goals achieved.
   - **Warning (`#d97706` / `#f59e0b`):** Flagged questions, timer low warnings (< 5m), revision needed.
   - **Error (`#dc2626` / `#ef4444`):** Incorrect choices, timer critical (< 1m), unmastered errors.
   - **Neutral:** Chrome, surfaces, borders, background.

4. **Quiet Chrome:**  
   Navigation bars, sidebars, and control panels fade into the background. Content cards utilize 1px subtle borders and subdued surface tints rather than heavy 3D skeuomorphism.

---

## 2. DESIGN BENCHMARK MATRIX

| Product Area | Reference Benchmark | Core Principle Applied | ON-AV Implementation |
|---|---|---|---|
| **Top Navigation** | Linear / Vercel | Quiet Chrome, Segmented Tabs | Compact 56px bar, subtle segmented pill active states |
| **Dashboard** | Stripe / Attio | Information Hierarchy (Level 1-2-3) | Daily goal tracking, 3 primary metric cards, next action CTA |
| **Dark Mode** | Vercel | True Surface Depth & Contrast | Layered surfaces (`#0b0f19` → `#111827` → `#1f2937`), crisp 1px borders |
| **Reading & Quiz** | Academic Exam Platforms | Extreme Focus & Passage Readability | Dual-pane split, line-height 1.7, font scaling, calm timer |
| **Progress / Streak** | Khan Academy / Duolingo | Motivational without Gaming Clutter | Clean streak counter, daily questions goal bar |
| **Dictionary** | Grammarly / Raycast | Instant lookup & high scannability | Fast popup modal, phonetic IPA, speech button, flashcard export |

---

## 3. COLOR SYSTEM & SEMANTIC TOKENS

All visual tokens are centralized in `src/index.css` via native CSS Custom Properties.

### 3.1. Light Mode Tokens

```css
:root {
  /* Surfaces & Backgrounds */
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-elevated: #ffffff;
  --color-surface-subtle: #f1f5f9;
  --color-surface-hover: #e2e8f0;

  /* Typography */
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #64748b;

  /* Borders & Dividers */
  --color-border: #e2e8f0;
  --color-border-subtle: #f1f5f9;

  /* Brand / Primary */
  --color-primary: #4338ca;
  --color-primary-hover: #3730a3;
  --color-primary-subtle: rgba(67, 56, 202, 0.08);

  /* Semantic Feedback */
  --color-success: #059669;
  --color-success-subtle: #ecfdf5;
  --color-success-border: #a7f3d0;

  --color-warning: #d97706;
  --color-warning-subtle: #fffbeb;
  --color-warning-border: #fde68a;

  --color-error: #dc2626;
  --color-error-subtle: #fef2f2;
  --color-error-border: #fecaca;

  --color-info: #0284c7;
  --color-info-subtle: #f0f9ff;
  --color-info-border: #bae6fd;

  --color-focus: rgba(67, 56, 202, 0.35);
}
```

### 3.2. Dark Mode Tokens

```css
body.dark {
  /* Surfaces & Backgrounds */
  --color-bg: #0b0f19;
  --color-surface: #111827;
  --color-surface-elevated: #1f2937;
  --color-surface-subtle: #1e293b;
  --color-surface-hover: #334155;

  /* Typography */
  --color-text-primary: #f8fafc;
  --color-text-secondary: #cbd5e1;
  --color-text-muted: #94a3b8;

  /* Borders & Dividers */
  --color-border: #334155;
  --color-border-subtle: #1e293b;

  /* Brand / Primary */
  --color-primary: #6366f1;
  --color-primary-hover: #818cf8;
  --color-primary-subtle: rgba(99, 102, 241, 0.15);

  /* Semantic Feedback */
  --color-success: #10b981;
  --color-success-subtle: rgba(16, 185, 129, 0.12);
  --color-success-border: rgba(16, 185, 129, 0.3);

  --color-warning: #f59e0b;
  --color-warning-subtle: rgba(245, 158, 11, 0.12);
  --color-warning-border: rgba(245, 158, 11, 0.3);

  --color-error: #ef4444;
  --color-error-subtle: rgba(239, 68, 68, 0.12);
  --color-error-border: rgba(239, 68, 68, 0.3);

  --color-info: #38bdf8;
  --color-info-subtle: rgba(56, 189, 248, 0.12);
  --color-info-border: rgba(56, 189, 248, 0.3);

  --color-focus: rgba(99, 102, 241, 0.45);
}
```

---

## 4. TYPOGRAPHY SYSTEM

Typography is optimized for academic examination and long reading comprehension.

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| **Display** | 2.25rem (36px) | 1.2 | 700 | Hero headers |
| **H1** | 1.875rem (30px) | 1.25 | 700 | Main page titles |
| **H2** | 1.5rem (24px) | 1.3 | 700 | Section headers, card groups |
| **H3** | 1.1875rem (19px) | 1.4 | 600 | Card titles, modal titles |
| **Body Large** | 1.0625rem (17px) | 1.65 | 500 / 600 | Exam reading passages, question stems |
| **Body Regular** | 0.9375rem (15px) | 1.55 | 400 / 500 | Explanations, descriptions, options |
| **Body Small** | 0.8125rem (13px) | 1.45 | 400 / 500 | Metadata, timestamps, helper labels |
| **Caption / Label** | 0.75rem (12px) | 1.35 | 600 / 700 | Badges, tags, shortcut key hints |
| **Code / Tabular** | 0.875rem (14px) | 1.4 | 600 | Timers (`tabular-nums`), question IDs |

---

## 5. SPACING SCALE

Uniform geometric spacing eliminates ad-hoc pixel values across all components:

| Token | Value | Applied To |
|---|---|---|
| `--space-1` | 4px | Micro gaps, badge paddings |
| `--space-2` | 8px | Button gaps, icon-to-text spacing |
| `--space-3` | 12px | List item paddings, compact margins |
| `--space-4` | 16px | Card content padding, default gaps |
| `--space-5` | 20px | Section margins, header internal spacing |
| `--space-6` | 24px | Card container padding |
| `--space-8` | 32px | Page horizontal gutter, section separation |
| `--space-10` | 40px | Hero card padding |
| `--space-12` | 48px | Major screen divisions |
| `--space-16` | 64px | Empty state vertical spacing |

---

## 6. RADIUS HIERARCHY

Eliminates the "everything is a pill" anti-pattern by establishing intentional radius hierarchy:

| Token | Value | Intended Elements |
|---|---|---|
| `--radius-xs` | 4px | Small tags, segmented button tabs, shortcut hints |
| `--radius-sm` | 6px | Buttons, form inputs, metric pills, option badges |
| `--radius-md` | 10px | Content cards, exam choice rows, passage containers |
| `--radius-lg` | 14px | Modals, major panels, dashboard banners |
| `--radius-pill` | 9999px | Category filter chips, circular status avatars, progress bars |

---

## 7. ELEVATION & SHADOW SYSTEM

Subtle, non-distracting elevation that works seamlessly in both light and dark modes:

| Token | CSS Definition | Purpose |
|---|---|---|
| `--shadow-subtle` | `0 1px 2px rgba(0, 0, 0, 0.04)` | Segmented active toggles, input focus |
| `--shadow-card` | `0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.02)` | Default card surfaces |
| `--shadow-hover` | `0 4px 12px rgba(0, 0, 0, 0.08)` | Card hover preview, dropdown popups |
| `--shadow-modal` | `0 16px 40px rgba(0, 0, 0, 0.2)` | Dialogs, modals, bottom sheets |

---

## 8. CORE COMPONENT SYSTEM

### 8.1. Buttons (`.btn`)
- `.btn`: Base styles with `height: 38px`, `padding: 0 16px`, `border-radius: var(--radius-sm)`, `font-weight: 600`, `transition: all 0.15s ease`.
- `.btn-primary`: Background `var(--color-primary)`, text `#ffffff`. Active scale `transform: scale(0.98)`.
- `.btn-secondary`: Background `var(--color-surface)`, border `1px solid var(--color-border)`, color `var(--color-text-secondary)`. Hover background `var(--color-surface-hover)`.

### 8.2. Question Option Choice (`.question-option-modern`)
- Entire row is a clickable target (`padding: 14px 18px`).
- Includes keyboard shortcut indicator (`1, 2, 3, 4`).
- States:
  - **Default:** Border `1px solid var(--color-border)`, background `var(--color-surface)`.
  - **Hover:** Border `1px solid var(--color-text-muted)`, background `var(--color-surface-hover)`.
  - **Selected:** Border `1.5px solid var(--color-primary)`, background `var(--color-primary-subtle)`.
  - **Correct (Practice/Review):** Border `1.5px solid var(--color-success)`, background `var(--color-success-subtle)`.
  - **Incorrect (Practice/Review):** Border `1.5px solid var(--color-error)`, background `var(--color-error-subtle)`.
  - **Eliminated (Cross-out):** Opacity `0.45`, line-through text, grayscale.

### 8.3. Exam Timer
- Visible, calm, and informative:
  - **Normal:** Text `var(--color-text-primary)`, background `var(--color-surface-subtle)`.
  - **Warning (< 5m):** Text `var(--color-warning)`, background `var(--color-warning-subtle)`, border `var(--color-warning-border)`.
  - **Critical (< 1m):** Text `var(--color-error)`, background `var(--color-error-subtle)`, border `var(--color-error-border)`.
- Font: `font-variant-numeric: tabular-nums` to prevent layout jitter as seconds tick.

---

## 9. ACCESSIBILITY & MOTION GUIDELINES

1. **WCAG 2.2 AA Contrast:** All text tokens meet minimum 4.5:1 contrast against their respective backgrounds in both light and dark modes.
2. **Keyboard Navigation:** All interactive elements (`role="radio"`, buttons, tabs) are keyboard accessible with visible focus rings (`--color-focus`).
3. **Reduced Motion:** Fully complies with `prefers-reduced-motion: reduce`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
4. **Touch Targets:** Mobile touch targets maintain a minimum of 44x44px to eliminate misclicks on mobile devices.
