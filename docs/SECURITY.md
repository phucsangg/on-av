# SECURITY.md — ON-AV Security Architecture & Hardening Guidelines

## 1. Security Overview

ON-AV follows a **Zero-Trust, Local-First, Privacy-by-Design** security posture. Because the application runs entirely client-side without mandatory backend database accounts, the attack surface differs from traditional client-server systems. Primary concerns focus on client-side code execution, DOM-based XSS, LocalStorage tampering/poisoning, supply-chain vulnerabilities, and secure asset delivery.

---

## 2. Threat Model & Mitigations

### 2.1 Cross-Site Scripting (XSS) & Content Sanitization
- **Risk**: User-imported exams (via JSON Custom Exam Builder), dynamic question stems, explanations, or dictionary definitions could inject malicious scripts.
- **Mitigation**:
  - All rich HTML rendered via `dangerouslySetInnerHTML` passes through [`src/utils/sanitize.ts`](file:///d:/on_av/src/utils/sanitize.ts).
  - DOMPurify is configured with strict tag allowlists (`<b>`, `<i>`, `<em>`, `<strong>`, `<u>`, `<br>`, `<span>`, `<code>`, `<mark>`) and strictly strips `<script>`, `<iframe>`, `object`, `embed`, and `on*` event handlers.
  - Automated unit tests (`chaos_and_scoring.test.mjs`) continuously assert stripping of exploit payloads (`<script>alert(1)</script>`, `<img src=x onerror=...>`).

### 2.2 LocalStorage Integrity & Tampering
- **Risk**: Malformed, corrupted, or hostile payloads injected into `localStorage` keys (`eq_attempts`, `eq_mistakes`, `eq_active_session`) could crash the application or inject rogue objects (prototype pollution).
- **Mitigation**:
  - Handled via `storageService.safeGet()` with strict type guards and fallback fall-throughs.
  - Schema versioning (`storageVersion: 2`) rejects or migrates outdated/invalid schemas gracefully.
  - Automated chaos test suite (`tests/chaos_and_scoring.test.mjs`) verifies resilience against invalid JSON and type mismatches.

### 2.3 Secrets Management & Zero-PII Policy
- **No Private Keys in Client Bundle**: No private API keys or database service-role secrets are bundled in frontend assets.
- **Zero-PII Storage**: The platform collects zero Personally Identifiable Information (no email, phone, full name, or passwords). All study progress resides solely on the student's browser device.
- **Privacy Policy & Terms**: Explicit user agreements published at `/chinh-sach-bao-mat` and `/dieu-khoan-dich-vu`.

### 2.4 Admin Route Protection
- **Role Isolation**: The administrative CMS (`/admin`) is gated with a dedicated authentication challenge (`sessionStorage` session token + verification gate).
- **Client Boundary**: Content overrides (approvals, flags, verification) are partitioned in isolated local state without polluting public candidate views.

---

## 3. Recommended Production Security Headers

When deploying ON-AV (Vercel, Cloudflare Pages, Netlify, or Nginx), the following HTTP response headers must be configured:

```http
# Content Security Policy (Strict CSP)
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.dictionaryapi.dev; media-src 'self' https: blob:; frame-ancestors 'none';

# Anti-Clickjacking
X-Frame-Options: DENY

# MIME-Type Sniffing Protection
X-Content-Type-Options: nosniff

# Referrer Policy
Referrer-Policy: strict-origin-when-cross-origin

# Permissions Policy (Restrict unneeded hardware APIs)
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()

# Strict Transport Security (HSTS)
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## 4. Vulnerability Disclosure & Reporting

If you identify a security vulnerability in ON-AV, please do not disclose it publicly via GitHub issues.
Instead, submit a confidential report to the core maintainers:
- **Security Contact**: `security@on-av.edu.vn` (or repository owner via private security advisory).
- **Response SLA**: Vulnerability assessments are triaged within 24–48 hours, with patches released promptly.
