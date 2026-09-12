# NHẬT KÝ THAY ĐỔI (CHANGELOG.md)

Tất cả các thay đổi quan trọng đối với repository **EnglishQuiz Master** được ghi nhận chi tiết tại đây.

---

## [1.1.0] - 2026-09-09

### 🔒 Security (Bảo mật)
- **Fixed DOM XSS in Results & Mistake Notebook**: Thay thế `dangerouslySetInnerHTML` không kiểm soát tại `src/components/QuizResult.tsx` và `src/components/MistakeNotebook.tsx` bằng hàm lọc an toàn `sanitizeHtml`.
- **Created `src/utils/sanitize.ts`**: Xây dựng bộ lọc HTML chỉ cho phép các thẻ định dạng ngữ pháp và phát âm hợp lệ (`<u>`, `<b>`, `<strong>`, `<i>`, `<em>`, `<mark>`, `<br>`), loại bỏ triệt để thẻ script, iframe, onload/onerror handler và các protocol nguy hiểm (`javascript:`).
- **Added Input & JSON Validation (`src/utils/validation.ts`)**: Kiểm soát chặt chẽ cấu trúc câu hỏi và đề thi khi người dùng nhập dữ liệu hoặc tải tệp JSON trong `CustomExamBuilder.tsx`, ngăn ngừa dữ liệu độc hại hoặc định dạng sai làm sập quiz engine.

### ⏱️ Correctness & Quiz Engine (Độ chính xác)
- **Timestamp-based Countdown/Stopwatch Hook (`src/hooks/useQuizTimer.ts`)**: Giải quyết hoàn toàn lỗi trôi thời gian (drift) do trình duyệt làm chậm `setInterval` khi tab chạy nền hoặc thiết bị rơi vào chế độ ngủ (sleep/wake).
- **Fixed Hoisting Issue & Handlers Order**: Khắc phục lỗi khai báo hàm sau `useEffect` trong `QuizRunner.tsx`, bọc `handleSelectOption` và `toggleFlag` trong `useCallback`.
- **Active Session Synchronization**: Đồng bộ tiến độ làm bài thi mượt mà thông qua `storageService`, chống mất bài thi khi vô tình tải lại trang hoặc đổi tab.

### 🚀 Performance & Architecture (Hiệu năng & Kiến trúc)
- **Granular Route Code-Splitting**: Áp dụng `React.lazy` và `Suspense` cùng component `LoadingFallback.tsx` trong `src/App.tsx`. Kích thước bundle tải trang ban đầu (`index.js`) giảm từ **1,402 kB** xuống còn **101 kB** (~31 kB gzip) — giảm **~92%**.
- **Granular Exam Chunking in `vite.config.ts`**: Tách riêng từng bộ đề thi (Hà Nội, Bắc Ninh, Đà Nẵng,...) thành các chunk độc lập từ 38 kB đến 67 kB. Không tải trước toàn bộ kho đề 800 câu khi học sinh chưa bắt đầu làm.
- **Unified Storage Service (`src/services/storageService.ts`)**: Tập trung hóa việc đọc/ghi `localStorage`, có cơ chế fallback khi vượt hạn mức lưu trữ (QuotaExceededError) trên thiết bị di động, tự động dọn dẹp các bản ghi cũ khi cần.
- **Unified Dictionary Service (`src/services/dictionaryService.ts`)**: Hợp nhất việc tra cứu từ điển ngoại tuyến (offline database) và trực tuyến (API) với bộ đệm bộ nhớ (in-memory cache) giảm thời gian tra từ xuống 0ms khi tra lại.
- **Removed Dead Dependencies**: Gỡ bỏ package không sử dụng `pdf-parse`, chuyển `@types/canvas-confetti` vào `devDependencies`.

### 🎨 UI/UX, A11Y & EdTech Analytics
- **Review Mastery Status in Mistake Notebook**: Bổ sung trạng thái "Đang ôn luyện" / "Đã nắm vững" (Mastered) cho Sổ tay câu sai kèm các nút lọc nhanh và đánh dấu đã hiểu câu hỏi.
- **Data-Driven Personalized Study Recommendations**: Bổ sung widget gợi ý lộ trình học tập cá nhân hóa trên `Dashboard.tsx`, tự động phân tích chủ đề yếu (< 65%) và chủ đề mạnh (>= 80%) dựa trên lịch sử thi thực tế.
- **Full Keyboard Accessibility & ARIA Support**: Thêm phím tắt `1-4`, `A-D` để chọn đáp án, phím `F` để đánh dấu cờ câu hỏi, phím mũi tên chuyển câu; bổ sung `role="radiogroup"` và `role="radio"` cho danh sách phương án trắc nghiệm.
- **Global Error Boundary (`src/components/ErrorBoundary.tsx`)**: Bọc ứng dụng trong Error Boundary chuyên nghiệp tại `src/main.tsx`, ngăn ngừa hoàn toàn hiện tượng sập ứng dụng thành màn hình trắng (White Screen of Death).

### 🛠️ DevOps & Quality Assurance
- **Automated Data Validation Script (`scripts/validateData.mjs`)**: Script tự động quét và kiểm tra tính toàn vẹn của 800 câu hỏi trên toàn bộ 20 bộ đề thi (`npm run validate:data`).
- **GitHub Actions CI/CD Pipeline (`.github/workflows/ci.yml`)**: Tự động hóa kiểm tra typecheck, lint, kiểm tra dữ liệu đề thi và build production bundle trên mỗi commit và pull request.
- **Dependabot Security Config (`.github/dependabot.yml`)**: Cấu hình kiểm tra cập nhật bảo mật hàng tuần cho các dependencies.
- **SEO & PWA Assets**: Bổ sung `public/manifest.json`, `public/robots.txt`, thẻ OpenGraph và cập nhật favicon chuẩn trong `index.html`.
