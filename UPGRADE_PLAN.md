# KẾ HOẠCH NÂNG CẤP & TỐI ƯU TOÀN DIỆN (UPGRADE_PLAN.md)
## EnglishQuiz Master – Web Ôn Thi Trắc Nghiệm Tiếng Anh THPT 2026

---

## 1. MA TRẬN PHÂN LOẠI & ƯU TIÊN (PRIORITY MATRIX)

| Mã | Hạng mục | Mức độ | Tác động | Độ khó | Giải pháp đề xuất | Các file ảnh hưởng |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SEC-01** | XSS qua `dangerouslySetInnerHTML` | **P0** | Nghiêm trọng | Dễ | Loại bỏ `dangerouslySetInnerHTML` trong `QuizResult.tsx` và `MistakeNotebook.tsx`, thay bằng native React JSX text nodes | `src/components/QuizResult.tsx`, `src/components/MistakeNotebook.tsx` |
| **SEC-02** | Validation JSON input | **P0** | Nghiêm trọng | Dễ | Viết hàm `validateExamSetJson(data)` kiểm tra schema, chống injection & prototype pollution | `src/components/CustomExamBuilder.tsx`, `src/utils/validation.ts` |
| **STG-01** | Safe LocalStorage & Versioning | **P0** | Cao | Vừa | Xây dựng `src/services/storageService.ts` với `try/catch`, fallback bộ nhớ tạm, schema version `v2`, migrate từ `v1` | `src/services/storageService.ts`, `src/App.tsx`, `src/components/QuizRunner.tsx` |
| **QUIZ-01**| Timestamp-based Timer | **P1** | Rất cao | Vừa | Thiết kế custom hook `useQuizTimer` tính thời gian dựa trên `Date.now()`, chống lệch khi chuyển tab/sleep | `src/hooks/useQuizTimer.ts`, `src/components/QuizRunner.tsx` |
| **QUIZ-02**| Fix React Hooks & Warnings | **P1** | Cao | Dễ | Sửa thứ tự khai báo `handleSelectOption`, xử lý triệt để 23 cảnh báo oxlint | `src/components/QuizRunner.tsx`, `src/App.tsx`, `src/pages/DictionaryPage.tsx` |
| **PERF-01**| Code-splitting & Lazy Routes | **P1** | Rất cao | Vừa | Áp dụng `React.lazy` + `Suspense` cho các trang phụ (`DictionaryPage`, `HistoryStatsPage`, `CustomExamBuilder`) | `src/App.tsx`, `src/components/LoadingFallback.tsx` |
| **PERF-02**| Chunking dữ liệu đề thi | **P1** | Rất cao | Khá | Tách bundle Vite `manualChunks` cho các nhóm đề thi lớn, giảm initial chunk xuống < 500 kB | `vite.config.ts` |
| **DICT-01**| Hợp nhất dịch vụ Từ điển | **P1** | Cao | Vừa | Tạo `src/services/dictionaryService.ts` dùng chung cho `DictionaryPage` và `DictionaryModal`, tích hợp local cache & offline fallback | `src/services/dictionaryService.ts`, `src/pages/DictionaryPage.tsx`, `src/components/DictionaryModal.tsx` |
| **A11Y-01**| Phím tắt & Trợ năng ARIA | **P2** | Trung bình| Vừa | Bổ sung `role="radio"`, `aria-checked`, `tabIndex`, hỗ trợ phím tắt `1/2/3/4`, `A/B/C/D`, `F` (Flag), `Enter/Space` | `src/components/QuizRunner.tsx` |
| **ANLT-01**| Phân tích học tập & Khuyến nghị | **P2** | Cao | Vừa | Thêm biểu đồ tiến độ, phân loại câu sai (Đang học / Đã thuần thục), gợi ý chuyên đề yếu | `src/components/Dashboard.tsx`, `src/components/MistakeNotebook.tsx` |
| **ERR-01** | Error Boundary toàn cục | **P2** | Cao | Dễ | Bổ sung `ErrorBoundary.tsx` bao bọc các module chính để ngăn chặn crash trắng trang | `src/components/ErrorBoundary.tsx`, `src/main.tsx` |
| **TEST-01**| Thiết lập Test Suite Vitest | **P2** | Rất cao | Vừa | Cấu hình Vitest, viết unit tests cho quiz engine, storage service, dictionary service | `vitest.config.ts`, `tests/quizEngine.test.ts`, `tests/storage.test.ts` |
| **DEV-01** | Dọn dẹp dependencies & CI/CD | **P2** | Trung bình| Dễ | Gỡ `pdf-parse`, chuyển types sang devDependencies, tạo GitHub Actions workflow | `package.json`, `.github/workflows/ci.yml` |
| **SEO-01** | PWA & SEO Optimization | **P3** | Trung bình| Dễ | Bổ sung `manifest.json`, `robots.txt`, OpenGraph tags, dynamic `document.title` theo route | `index.html`, `public/manifest.json`, `public/robots.txt`, `src/utils/seo.ts` |
| **DOC-01** | Tài liệu hóa chuyên nghiệp | **P3** | Cao | Dễ | Viết lại `README.md`, xuất `CHANGELOG.md` và `FINAL_AUDIT.md` | `README.md`, `CHANGELOG.md`, `FINAL_AUDIT.md` |

---

## 2. KẾ HOẠCH TRIỂN KHAI THEO TỪNG GIAI ĐOẠN (EXECUTION PHASES)

### Giai đoạn 1: Khắc phục lỗi P0 & An ninh (Critical & Security Fixes)
- [x] Tạo `AUDIT.md` & `UPGRADE_PLAN.md`.
- [ ] Thay thế triệt để `dangerouslySetInnerHTML` bằng React text elements an toàn trong `QuizResult.tsx` và `MistakeNotebook.tsx`.
- [ ] Viết `storageService.ts` an toàn có fallback, chống lỗi QuotaExceeded và tự động migrate schema.
- [ ] Viết bộ validator `validateExamSetJson` cho `CustomExamBuilder.tsx`.

### Giai đoạn 2: Ổn định Quiz Engine & Sửa lỗi Hooks (Quiz Engine & Correctness)
- [ ] Xây dựng hook `useQuizTimer` tính thời gian trôi chính xác theo timestamp `Date.now()`.
- [ ] Sửa dứt điểm 23 warning oxlint (`react/immutability`, `react/set-state-in-effect`, `no-unused-vars`).
- [ ] Tạo `ErrorBoundary.tsx` bảo vệ ứng dụng.

### Giai đoạn 3: Tối ưu kiến trúc Từ điển & Hiệu năng Bundle (Architecture & Performance)
- [ ] Xây dựng `dictionaryService.ts` hợp nhất logic tra cứu offline/online, loại bỏ code trùng lặp.
- [ ] Áp dụng `React.lazy` và `Suspense` cho các Route trang trong `src/App.tsx`.
- [ ] Cấu hình `vite.config.ts` chia nhỏ chunks (`manualChunks`), đưa initial bundle về mức tối ưu < 500 kB.
- [ ] Gỡ bỏ dependency không sử dụng `pdf-parse` khỏi `package.json`.

### Giai đoạn 4: Nâng cấp Trải nghiệm Người dùng, Trợ năng & Analytics (UX/UI & A11Y)
- [ ] Bổ sung ARIA tags, `role="radio"`, `tabIndex`, và phím tắt `F` (đánh dấu câu), `1-4/A-D` mượt mà.
- [ ] Nâng cấp `MistakeNotebook.tsx`: gắn nhãn trạng thái câu sai (Cần ôn lại / Đang học / Đã thuần thục).
- [ ] Nâng cấp `Dashboard.tsx`: thêm phần gợi ý lộ trình ôn tập dựa trên kết quả thực tế.

### Giai đoạn 5: Kiểm thử, CI/CD, PWA & Hoàn thiện Tài liệu (Testing, DevOps & Docs)
- [ ] Cài đặt Vitest và viết unit tests cho các luồng quan trọng: Quiz engine, Storage, Dictionary.
- [ ] Thêm `.github/workflows/ci.yml` kiểm tra typecheck, lint, test và build tự động.
- [ ] Thêm `robots.txt`, `manifest.json`, dynamic SEO title.
- [ ] Cập nhật toàn diện `README.md`, `CHANGELOG.md`, `FINAL_AUDIT.md`, `PERFORMANCE.md`.
- [ ] Chạy kiểm thử toàn diện và đẩy code lên remote repository.
