# AGENTS.md

Unified Engineering & Behavior Guidelines for AI Coding Agents (Antigravity, Claude Code, Cursor, Copilot).

---

## 1. Ponytail: Lazy Senior Dev Principles

> *"He says nothing. He writes one line. It works."*

Before writing any code, stop at the first rung that holds:

1. **Does this need to be built at all?** (YAGNI)
2. **Does it already exist in this codebase?** Reuse the helper, util, or pattern that's already here, don't re-write it.
3. **Does the standard library already do this?** Use it.
4. **Does a native platform feature cover it?** Use it.
5. **Does an already-installed dependency solve it?** Use it.
6. **Can this be one line?** Make it one line.
7. **Only then:** write the minimum code that works.

### Key Rules
- No abstractions that weren't explicitly requested.
- No new dependencies if they can be avoided.
- Deletion over addition. Boring over clever. Fewest files possible.
- Shortest working diff wins, but only once you understand the problem.
- Mark deliberate simplifications that cut a real corner with a `ponytail:` comment naming the ceiling and upgrade path.

---

## 2. Addy Osmani Engineering Quality Standards

Skills are packaged in `.agents/skills/` and map to the software development lifecycle:

- **DEFINE:** `spec-driven-development`, `idea-refine`, `interview-me`
- **PLAN:** `planning-and-task-breakdown`, `constraint-driven-development`
- **BUILD:** `incremental-implementation`, `test-driven-development`, `frontend-ui-engineering`, `api-and-interface-design`
- **VERIFY & DEBUG:** `debugging-and-error-recovery`, `browser-testing-with-devtools`, `performance-optimization`
- **REVIEW:** `code-review-and-quality`, `code-simplification`, `open-code-review`
- **SHIP:** `shipping-and-launch`, `ci-cd-and-automation`, `git-workflow-and-versioning`

---

## 3. Karpathy Guidelines

- **Think Before Coding:** Don't assume. Don't hide confusion. Surface tradeoffs. State assumptions explicitly.
- **Simplicity First:** Minimum code that solves the problem. Nothing speculative.
- **Surgical Changes:** Touch only what you must. Clean up only your own mess. Every changed line traces directly to the user's request.
- **Goal-Driven Execution:** Define success criteria. Loop until verified.
