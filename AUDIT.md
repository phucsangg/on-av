# AUDIT TOÀN DIỆN HỆ THỐNG – ENGLISHQUIZ MASTER 2026

> **Ngày thực hiện**: Tháng 9/2026  
> **Dự án**: EnglishQuiz Master – Web Ôn Thi Trắc Nghiệm Tiếng Anh THPT 2026 (`on-av`)  
> **Repository**: `https://github.com/phucsangg/on-av`  
> **Vai trò**: Senior Full-Stack Engineer + Software Architect + Security & QA Engineer  

---

## 1. TỔNG QUAN HỆ THỐNG HIỆN TẠI (SYSTEM OVERVIEW)

- **Framework**: React 19.2.8 + TypeScript 6.0.2 + Vite 8.2.2 (Bundler mode)
- **Kiến trúc ứng dụng**: Single Page Application (SPA) điều hướng qua URL/Hash state (`history.pushState` & `popstate`).
- **Quản lý trạng thái (State Management)**: React local state (`useState`, `useEffect`) kết hợp `localStorage` đồng bộ tự động.
- **Quy mô dữ liệu đề thi**: 21 bộ đề thi với 3.963 câu hỏi trắc nghiệm tiếng Anh phân chia theo định dạng chuẩn THPT Quốc Gia & TOEIC.
- **Kích thước bundle hiện tại**:
  - `dist/assets/index-BHKmAugz.js`: **1.392,04 kB** (~1.4 MB minified, 402 kB gzipped) trong **1 chunk đơn lẻ** (Vite warning: `chunk size > 500 kB`).
  - Toàn bộ 21 file đề thi và tất cả 7 trang/component được nạp tĩnh (static import) 100% vào initial bundle.
- **Công cụ kiểm tra & Linting**: `oxlint` (phát hiện 23 warnings). Chưa có Vitest, React Testing Library hay CI/CD pipeline.

---

## 2. BÁO CÁO CÁC DANH MỤC TRỌNG YẾU

### 🔴 TOP 20 VẤN ĐỀ NGHIÊM TRỌNG NHẤT (TOP 20 CRITICAL ISSUES)

1. **XSS Injection qua `dangerouslySetInnerHTML` trong `QuizResult.tsx` và `MistakeNotebook.tsx`**: Render trực tiếp `q.questionText` và `opt.text` mà không qua sanitization, tạo lỗ hổng nếu đề thi tự tạo (JSON import) chứa mã độc.
2. **Kích thước JavaScript Bundle nguyên khối 1.4 MB**: Toàn bộ ~4.000 câu hỏi trong 21 bộ đề được import tĩnh vào `questionBank.ts`, làm nghẽn FCP và LCP trên mạng 3G/4G di động của học sinh.
3. **Timer tính thời gian trôi (`setInterval`) bị lệch nghiêm trọng khi ẩn tab (Browser Throttling)**: Dùng `setInterval(..., 1000)` thuần túy khiến đồng hồ làm bài bị đơ/chậm khi học sinh chuyển tab tra cứu hoặc khi điện thoại khóa màn hình.
4. **Không có cơ chế xử lý lỗi `QuotaExceededError` cho `localStorage`**: Khi lưu trữ nhiều bài làm hoặc đề tự tạo vượt quá quota 5MB của trình duyệt, ứng dụng sẽ quăng ngoại lệ unhandled làm đơ toàn bộ app.
5. **Thiếu Schema Versioning & Migration cho `localStorage`**: Dữ liệu lưu rải rác dưới nhiều tiền tố khác nhau (`eq_`, `on_av_`), không có trường version để migrate nếu cấu trúc dữ liệu thay đổi.
6. **"God Component" `QuizRunner.tsx` quá lớn (1.881 dòng / 74 KB)**: Chứa đồng thời timer, TTS speech, selection popup, canvas highlights, pagination, passages, dictionary modal, translations, reordering UI trong cùng 1 file.
7. **Phân mảnh logic Tra từ điển (`Dictionary`) giữa `DictionaryModal.tsx` và `DictionaryPage.tsx`**: `DictionaryPage` dùng 1 từ điển tĩnh hardcoded 8 từ riêng biệt (`BUILTIN_DICT`), trong khi `DictionaryModal` dùng `dictionaryData.ts` và API khác nhau.
8. **Vi phạm quy tắc Hooks trong `QuizRunner.tsx` (React Immutability & Exhaustive-Deps)**: Hàm `handleSelectOption` bị truy xuất trước khi khởi tạo trong `handleKeyDown` effect, gây 23 cảnh báo linting.
9. **Thiếu hoàn toàn Test Suite (0 Unit Test, 0 Component Test)**: Không có Vitest hay script kiểm thử tự động, mọi thay đổi dễ gây regression tiềm ẩn.
10. **Thiếu hệ thống Error Boundary**: Nếu có lỗi render trong bất kỳ câu hỏi nào (ví dụ dữ liệu options bị thiếu), toàn bộ giao diện app sẽ trắng xóa (`White Screen of Death`).
11. **Không có validation dữ liệu khi Import JSON trong `CustomExamBuilder.tsx`**: Bất kỳ JSON lỗi nào cũng có thể được đưa vào state và lưu vào máy người dùng mà không kiểm tra schema.
12. **Không có Route-level Lazy Loading**: Các trang `DictionaryPage`, `HistoryStatsPage`, `CustomExamBuilder` luôn được nạp ngay từ trang đầu dù người dùng không truy cập.
13. **Accessibility (WCAG 2.1) yếu ở các phương án lựa chọn**: Các phương án A, B, C, D trong `QuizRunner` là thẻ `<div>` không có `role="radio"` / `role="button"`, không có `aria-checked`, không thể dùng phím Tab để focus.
14. **Phụ thuộc thừa `pdf-parse` (15+ packages không sử dụng) nằm trong `dependencies`**: Thư viện Node server-side được đặt sai trong frontend production bundle.
15. **Type `@types/canvas-confetti` bị đặt sai vào `dependencies`** thay vì `devDependencies`.
16. **Thiếu Meta Tags Open Graph, Twitter Cards, Semantic Title & SEO linh hoạt**: Title trình duyệt bị cố định, không đổi theo từng đề thi hoặc từng tab học.
17. **Không có `robots.txt`, `sitemap.xml`, và PWA Web Manifest**: Học sinh không thể cài đặt như app độc lập trên Android/iOS và công cụ tìm kiếm không index được các đề thi.
18. **Thiếu bộ lọc và thống kê chuyên sâu (Analytics)**: Chưa có phân tích độ chính xác theo dạng bài (Grammar, Cloze, Reading, Pronunciation) xuyên suốt các lần làm.
19. **Hiệu ứng Re-render thừa trong `Navbar` & `Dashboard`**: Khi timer tick mỗi giây, nếu state bị pass xuống các component cha, nhiều component có thể bị re-render liên tục.
20. **Thiếu CI/CD Pipeline (GitHub Actions)**: Chưa có automated workflow kiểm tra typecheck, lint, test và build trước khi merge mã nguồn.

---

### 🛡️ TOP 5 RỦI RO BẢO MẬT (TOP 5 SECURITY RISKS)

1. **DOM XSS qua `dangerouslySetInnerHTML`**: Tại `MistakeNotebook.tsx` và `QuizResult.tsx`, nội dung câu hỏi và đáp án được bơm trực tiếp qua innerHTML mà không có DOMPurify hay escape HTML.
2. **Không kiểm soát cấu trúc JSON đầu vào (Insecure Deserialization / Injection)**: `CustomExamBuilder.tsx` parse JSON người dùng tải lên và gán thẳng vào `questions` mà không kiểm duyệt thuộc tính.
3. **Cạn kiệt bộ nhớ cục bộ (Storage Denial of Service)**: `localStorage.setItem` không giới hạn dung lượng hoặc xử lý khi đầy bộ nhớ, dẫn đến crash toàn bộ phiên làm việc.
4. **Thiếu Content Security Policy (CSP)**: `index.html` chưa có thẻ `<meta http-equiv="Content-Security-Policy">` để hạn chế thực thi script độc hại hoặc inline eval.
5. **Gói phụ thuộc thừa có nguy cơ bảo mật (`pdf-parse`)**: Chứa các dependency xử lý file server-side không cần thiết cho client.

---

### ⚡ TOP 5 ĐIỂM NGHẼN HIỆU NĂNG (TOP 5 PERFORMANCE BOTTLENECKS)

1. **Initial Bundle Size 1.4 MB**: Toàn bộ ngân hàng câu hỏi 21 bộ đề được nạp đồng thời khiến thời gian tải trang ban đầu kéo dài.
2. **Không có Data Chunking**: Người dùng chỉ thi 1 đề nhưng phải tải dữ liệu của cả 21 đề thi khác.
3. **Không có React.lazy cho các trang phụ**: `DictionaryPage`, `HistoryStatsPage`, `CustomExamBuilder`, `QuizResult` chiếm dung lượng bundle trang chủ.
4. **Drift Timer vì `setInterval`**: Hàm đếm thời gian trôi bị chậm khi app chuyển tab nền do trình duyệt hạ tần số timer CPU.
5. **Re-calculating Derived State trong Render Loop**: Tính toán điểm số và mảng câu hỏi nhiều lần trên mỗi lần render thay vì dùng `useMemo`.

---

### 🎨 TOP 5 VẤN ĐỀ TRẢI NGHIỆM NGƯỜI DÙNG (TOP 5 UX PROBLEMS)

1. **Học sinh mất bài thi nếu vô tình đóng tab hoặc xóa session**: Khi làm bài, banner khôi phục bài thi có thể bị bỏ lỡ hoặc nút bấm chưa đủ cảnh báo xác nhận.
2. **Thiếu phím tắt đầy đủ cho bài thi**: Hiện chỉ hỗ trợ A/B/C/D và Mũi tên trái/phải; chưa hỗ trợ phím `F` (đánh dấu cờ / flag), phím `Space` chọn, phím `Esc` đóng modal.
3. **Khó đọc khi tra từ điển trực tuyến lúc mất mạng**: Khi mạng yếu hoặc offline, tra từ điển báo lỗi không thân thiện và không tự động quay về kho từ offline có sẵn.
4. **Sổ tay câu sai chưa có phân loại mức độ thuần thục (Mastery)**: Câu sai làm lại đúng chưa được phân nhóm (Đang học / Đã thuần thục).
5. **Mobile Viewport trên màn hình nhỏ (<375px)**: Một số nút bấm ở thanh công cụ phía dưới bị chen chúc, cần tối ưu padding và touch targets chuẩn >= 44px.

---

### 🏛️ TOP 5 VẤN ĐỀ KIẾN TRÚC MÃ NGUỒN (TOP 5 ARCHITECTURAL PROBLEMS)

1. **Monolithic `QuizRunner.tsx`**: Thiếu phân tách ranh giới trách nhiệm (Separation of Concerns). Timer, Audio TTS, Highlighting, Question Rendering, Navigation đều dồn chung vào một component.
2. **Phân tán dịch vụ từ điển (`Dictionary`)**: Hai cơ sở dữ liệu từ điển và hai cách gọi API fetch khác nhau trong cùng một dự án.
3. **Storage Logic trộn lẫn trong UI Components**: Mỗi component tự gọi `localStorage.getItem` và `localStorage.setItem` trực tiếp với các key khác nhau thay vì qua một `storageService` duy nhất có schema versioning.
4. **Dữ liệu đề thi dạng Hardcoded TS Modules gắn chặt vào Bundle**: Cần có kiến trúc nạp động (`dynamic import`) cho các đề thi theo nhu cầu người học.
5. **Thiếu Testing & Quality Assurance Layer**: Không có test runner, không có CI pipeline bảo vệ codebase.
