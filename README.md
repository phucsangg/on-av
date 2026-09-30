# 🎓 EnglishQuiz Master – Nền Tảng Luyện Thi Tiếng Anh Chuẩn Hóa (Đại Học, TOEIC & THPT)

[![CI Pipeline](https://github.com/phucsangg/on-av/actions/workflows/ci.yml/badge.svg)](https://github.com/phucsangg/on-av/actions/workflows/ci.yml)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 8](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Bundle Size](https://img.shields.io/badge/Initial_JS-35_kB_gzip-success)](#hiệu-năng)
[![Tests](https://img.shields.io/badge/Tests-Passing_19%2F19-brightgreen)](#kiểm-thử)
[![Linter](https://img.shields.io/badge/Oxlint-0_warnings_0_errors-brightgreen)](https://oxc.rs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**EnglishQuiz Master** là nền tảng luyện thi trắc nghiệm Tiếng Anh hiện đại, hiệu năng cao, bảo mật và chuẩn hóa dành cho học sinh, sinh viên Việt Nam: từ ôn thi chuẩn đầu vào Đại học (HUIT-oriented practice), định hướng TOEIC Reading đến kỳ thi Tốt nghiệp THPT Quốc Gia. Ứng dụng mang lại trải nghiệm thi thử thực chiến mượt mà, phân tích điểm mạnh - điểm yếu cá nhân hóa và hỗ trợ tối ưu điểm số.

---

## 🌟 TÍNH NĂNG NỔI BẬT

### 📚 1. Kho Đề Thi 950 Câu Chuẩn Cấu Trúc Đa Dạng (23 Bộ Đề)
- **23 Bộ đề thi thực chiến** (950 câu hỏi) được số hóa, gắn thẻ metadata và thẩm định tự động:
  - **3 Bộ đề luyện thi chuẩn đầu vào Đại học (HUIT & TOEIC)**: 150 câu nâng cao chuẩn cấu trúc TOEIC Reading & Đại học (`HUIT-02 TOEIC`, `HUIT TOEIC Tổng Hợp 2026`, `HUIT TOEIC Đề 02 Nâng Cao`) kèm giải thích song ngữ và bản dịch đầy đủ.
  - **20 Bộ đề thi thử THPT Quốc Gia 2026** từ các Sở GD&ĐT & Trường Chuyên uy tín toàn quốc (Hà Nội, Hải Phòng, Đà Nẵng, Nghệ An, Vĩnh Phúc, Bắc Ninh, Bắc Giang, Hà Tĩnh, Ninh Bình, Điện Biên...).
  - **Đề luyện nhanh & chuyên đề**: Trắc nghiệm 10 phút, Chuyên đề Đọc hiểu TOEIC/THPT (Fast Fashion, Ocean Tides), Chuyên đề Elon Musk.
- **100% câu hỏi có đáp án chuẩn xác**, dịch nghĩa chi tiết và giải thích cặn kẽ từng phương án.

### 🛡️ 2. Hệ Thống Chống Lộ Đáp Án (Anti-Spoiler Engine)
- **Ẩn toàn bộ nhãn chủ đề gợi ý trong chế độ Thi Thử (Exam Mode)**: Ngăn chặn triệt để việc thí sinh đoán đáp án dựa trên nhãn như `(Gerund)`, `(Modal Perfect)`.
- **Trong chế độ Luyện tập (Practice Mode)**: Chỉ hiển thị nhãn phân loại ngữ pháp sau khi thí sinh đã gửi lựa chọn câu trả lời.
- **Bộ lọc làm sạch tự động (`cleanTopicTag`)**: Tự động loại bỏ các đoạn văn bản spoil đáp án đóng ngoặc trong thẻ chủ đề trước khi render.

### 🎮 3. Công Cụ Làm Bài Tương Tác Chuyên Sâu
- **Gạch bỏ phương án loại trừ (Option Elimination)**: Nút `X` nhanh bên cạnh mỗi lựa chọn giúp học sinh loại trừ các phương án sai dễ dàng và trực quan.
- **Bảng điều hướng câu hỏi dạng lưới (Question Grid Modal)**: Cho phép xem toàn bộ trạng thái làm bài, cờ câu hỏi và nhảy nhanh đến bất kỳ câu nào.
- **Bảng tra cứu phím tắt (Keyboard Shortcuts Modal)**: Nhấn `?` hoặc bấm nút để mở bảng tra cứu phím tắt tức thì.
- **Tra cứu từ vựng tức thì (Instant Dictionary)**: Tra từ điển ngay trong bài thi với giọng phát âm bản xứ `en-US` và sao chép bản dịch 1-click.

### ⏱️ 4. Quiz Engine Ổn Định & Bấm Giờ Drift-Free (`useQuizTimer`)
- **Đồng hồ bấm giờ drift-free theo Timestamp thực tế (`Date.now()`)**: Không bị đơ, trôi lệch hay chậm lại khi chuyển tab, ẩn trình duyệt hoặc thiết bị vào chế độ ngủ.
- **Tự động lưu tiến độ thông minh (Throttled Auto-Save)**: Lưu tức thì khi làm bài và định kỳ chống nghẽn I/O LocalStorage. Phục hồi bài thi 1-click khi vô tình đóng tab hoặc reload.
- **Tự động điền bài đọc (Cloze Test Realtime Masking)**: Điền phương án trực tiếp vào chỗ trống trong đoạn văn khi chọn đáp án.
- **Tự động Highlight từ vựng**: Phát hiện và làm nổi bật từ/cụm từ đang được hỏi trong đoạn văn (`The word "..." in paragraph X`).

### ⌨️ 5. Khả Năng Tiếp Cận Toàn Diện (A11Y & Keyboard Navigation)
- Phím tắt tiện lợi: `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D` để chọn nhanh đáp án.
- Phím `F` để đánh dấu cờ (Flag) câu hỏi phân vân cần xem lại.
- Phím `Mũi tên Trái / Phải` chuyển câu hỏi.
- Phím `?` mở bảng tra cứu phím tắt.
- Hỗ trợ đầy đủ ngữ nghĩa ARIA (`role="radiogroup"`, `role="radio"`).

### 📖 6. Hệ Thống Tra Từ Điển Hợp Nhất (`dictionaryService`)
- Tích hợp từ điển nội bộ chuyên đề (0ms tra cứu).
- Bộ đệm bộ nhớ (in-memory cache) thông minh chống lặp request.
- Tự động tra cứu online đa tầng khi gặp từ vựng mới ngoài đề thi.
- Phát âm giọng chuẩn bản xứ `en-US` tích hợp.

### 📔 7. Sổ Tay Câu Sai & Phân Biệt Cấp Độ Thành Thạo (`Mistake Notebook`)
- Tự động gom toàn bộ câu làm sai vào Sổ tay.
- Hỗ trợ phân loại trạng thái: **Tất cả**, **Đang ôn luyện** và **Đã nắm vững (Mastered)**.
- Chế độ Luyện tập lại chỉ riêng các câu làm sai.

### 🎯 8. Gợi Ý Lộ Trình Học Cá Nhân Hóa (Personalized Learning)
- Tự động tính toán tỷ lệ chính xác theo từng kỹ năng và chủ đề ngữ pháp từ lịch sử làm bài.
- Nhận diện các **Chủ đề cần củng cố (< 65%)** và **Thế mạnh vững vàng (>= 80%)** để học sinh tập trung ôn đúng trọng tâm.

---

## 🛠️ CÔNG NGHỆ VÀ KIẾN TRÚC (TECH STACK)

| Lĩnh vực | Công nghệ |
|---|---|
| **Core Framework** | React 19 (React Compiler Ready), TypeScript 6 Strict |
| **Build & Bundler** | Vite 8 + Rolldown |
| **Styling** | Vanilla CSS Design Tokens, Glassmorphism, Dark / Light Mode |
| **Icons** | Lucide React |
| **Storage** | Robust `StorageService` với cơ chế chống tràn bộ nhớ QuotaExceededError |
| **Security** | `sanitizeHtml` chống DOM XSS, `validateExam` kiểm soát schema JSON |
| **CI/CD** | GitHub Actions Workflow, Dependabot security scanning |
| **PWA & SEO** | Web App Manifest, robots.txt, OpenGraph metadata |

---

## ⚡ HIỆU NĂNG TỐI ƯU (PERFORMANCE HIGHLIGHTS)

- **Kích thước tải trang ban đầu**: Giảm từ `1.4 MB` xuống **`101 kB`** (`31.7 kB gzip`), giảm **~92%**.
- **Code-Splitting**: Áp dụng `React.lazy` và `Suspense` cho tất cả các trang, kết hợp chunking từng bộ đề thi (`38-67 kB/chunk`).
- **Thời gian Build Production**: ~350ms.
- Xem chi tiết tại [PERFORMANCE.md](file:///d:/on_av/PERFORMANCE.md).

---

## 🚀 CÀI ĐẶT VÀ PHÁT TRIỂN

### Yêu cầu môi trường
- Node.js >= 18.0.0
- npm >= 9.0.0

### 1. Clone mã nguồn
```bash
git clone https://github.com/phucsangg/on-av.git
cd on-av
```

### 2. Cài đặt thư viện phụ thuộc
```bash
npm install
```

### 3. Chạy môi trường phát triển (Dev)
```bash
npm run dev
```
Truy cập ứng dụng tại `http://localhost:5173`.

### 4. Kiểm tra mã nguồn, Chạy Test & Kiểm định dữ liệu
```bash
# Chạy bộ kiểm thử tự động (Unit Tests)
npm test

# Kiểm tra định dạng và chất lượng 950 câu hỏi đề thi (23 bộ đề)
npm run validate:data

# Kiểm tra an toàn kiểu dữ liệu TypeScript
npm run typecheck

# Kiểm tra quy tắc code linting
npm run lint
```

### 5. Đóng gói bản Production
```bash
npm run build
```

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
on-av/
├── .github/
│   ├── workflows/ci.yml       # GitHub Actions CI pipeline (Typecheck, Lint, Test, Validate, Build)
│   └── dependabot.yml         # Dependabot automated dependency security
├── public/
│   ├── favicon.svg            # Favicon chính thức
│   ├── manifest.json          # PWA Web App Manifest
│   └── robots.txt             # SEO Crawling rules
├── scripts/
│   └── validateData.mjs       # Script thẩm định dữ liệu đề thi tự động (950 câu / 23 đề)
├── tests/
│   ├── scoring.test.mjs       # Test thuật toán tính điểm & độ chính xác
│   ├── chaos_and_scoring.test.mjs # Test làm sạch dữ liệu LocalStorage & an toàn parsing
│   ├── sanitize.test.mjs      # Test chống XSS & bộ lọc chống lộ đáp án (anti-spoiler)
│   ├── timer.test.mjs         # Test đồng hồ bấm giờ drift-free & đếm ngược
│   └── user_journey_simulation.test.mjs # Test mô phỏng hành vi người dùng (6 scenarios)
├── src/
│   ├── components/            # React UI components (QuizRunner, Dashboard, ErrorBoundary...)
│   ├── data/                  # 23 bộ đề thi (HUIT TOEIC, THPT 2026...) & Dữ liệu từ điển
│   ├── hooks/                 # Custom React Hooks (useQuizTimer...)
│   ├── pages/                 # Page-level components (ExamCatalogPage, HistoryStatsPage...)
│   ├── services/              # Singleton services (storageService, dictionaryService)
│   ├── types/                 # TypeScript type definitions
│   ├── utils/                 # Security sanitization, anti-spoiler & schema validation
│   ├── App.tsx                # App Root & Code-split View Router
│   ├── main.tsx               # Client Entry Point với ErrorBoundary
│   └── index.css              # Design tokens & Global Glassmorphism CSS
├── AUDIT.md                   # Báo cáo kiểm toán kỹ thuật chuyên sâu
├── UPGRADE_PLAN.md            # Kế hoạch nâng cấp và phân loại P0 - P3
├── FINAL_AUDIT.md             # Bảng điểm nghiệm thu & Lộ trình phát triển
├── PERFORMANCE.md             # Báo cáo đo lường hiệu năng Before / After
├── CHANGELOG.md               # Nhật ký chi tiết phiên bản v1.1.0
├── package.json
├── tsconfig.json
└── vite.config.ts             # Cấu hình Rollup Manual Chunks & Split Code
```

---

## 🔒 BẢO MẬT & ĐỘ TIN CẬY

- **Không chứa Secret / Token**: Không lưu trữ bất kỳ API key, token hay mật khẩu nào trong kho mã nguồn.
- **XSS Immunity**: Toàn bộ nội dung câu hỏi và lựa chọn được khử trùng bằng `sanitizeHtml` trước khi hiển thị.
- **Khả năng tự phục hồi**: Lỗi phát sinh trong quá trình render được cô lập bởi `ErrorBoundary` mà không gây mất dữ liệu đã lưu.

---

## 📄 GIẤY PHÉP (LICENSE)

Dự án được phân phối dưới giấy phép **MIT License**. Mọi đóng góp và mã nguồn mở phục vụ mục đích giáo dục và ôn thi THPT Quốc Gia hoàn toàn miễn phí.
