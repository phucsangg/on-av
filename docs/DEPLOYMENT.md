# DEPLOYMENT.md — ON-AV Production Deployment & Operations Guide

## 1. Build Prerequisites

- **Node.js**: `v20.x` or higher (LTS recommended)
- **Package Manager**: `npm v10+` (or `pnpm / yarn`)
- **Vite**: `v8.2.2+` with Rolldown bundling engine

---

## 2. Validation & Build Pipeline

Before deploying any production release, execute the full automated verification pipeline:

```bash
# 1. Code Quality & Linting (0 warnings, 0 errors required)
npm run lint

# 2. TypeScript Strict Static Typecheck
npm run typecheck

# 3. Unit, Chaos & Regression Tests (all 22+ tests must pass)
npm test

# 4. Production Asset Compilation & Tree-Shaking
npm run build
```

The resulting optimized static distribution is emitted to `dist/`.

---

## 3. Hosting Providers Configuration

ON-AV is a Single Page Application (SPA). All path requests (`/lam-bai`, `/kho-de-thi`, `/so-tay-cau-sai`, `/admin`, etc.) must fallback to `/index.html` with a 200 status code.

### 3.1 Vercel Deployment
Create or verify `vercel.json` in the project root:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, no-store, must-revalidate" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 3.2 Cloudflare Pages
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- Create `public/_redirects`:
```text
/*    /index.html   200
```

### 3.3 Netlify
- Create `public/_redirects`:
```text
/*    /index.html   200
```

### 3.4 Docker & Nginx Deployment
Sample production `nginx.conf`:
```nginx
server {
    listen 80;
    server_name on-av.edu.vn;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip / Brotli Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # ServiceWorker must never be cached indefinitely
    location /sw.js {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Immutable hashed static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA Client-side Route Fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 4. Continuous Integration (GitHub Actions)

A CI workflow is configured in `.github/workflows/ci.yml`. On every push and pull request to `main`:
1. Checks out repository and sets up Node 20.
2. Installs clean dependencies via `npm ci`.
3. Runs Oxlint linter.
4. Executes TypeScript `tsc --noEmit`.
5. Runs test runner (`npm test`).
6. Executes `npm run build` to guarantee zero compilation errors and verify chunk size boundaries.

---

## 5. Post-Deployment Verification Checklist

- [ ] HTTP 200 on landing page `/`.
- [ ] Route refreshes work without 404 (e.g., refresh on `/kho-de-thi` or `/so-tay-cau-sai`).
- [ ] Service worker registration active (`navigator.serviceWorker.ready`).
- [ ] Offline test: Go offline in Chrome DevTools Network tab, reload page, ensure core UI and cached exams load.
- [ ] LocalStorage persistence: Start a test, answer questions, reload, verify active session banner appears.
