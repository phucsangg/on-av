# 🎓 EnglishQuiz Master – Web Ôn Thi Trắc Nghiệm Tiếng Anh THPT 2026

[![CI Pipeline](https://github.com/phucsangg/on-av/actions/workflows/ci.yml/badge.svg)](https://github.com/phucsangg/on-av/actions/workflows/ci.yml)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 8](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Bundle Size](https://img.shields.io/badge/Initial_JS-31_kB_gzip-success)](#hiệu-năng)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**EnglishQuiz Master** là nền tảng luyện thi trắc nghiệm Tiếng Anh THPT Quốc Gia 2026 hiện đại, hiệu năng cao, bảo mật và chuẩn cấu trúc đổi mới của Bộ Giáo dục & Đào tạo. Ứng dụng được thiết kế nhằm mang lại trải nghiệm thi thử thực chiến mượt mà, phân tích điểm mạnh - điểm yếu cá nhân hóa và hỗ trợ học sinh tối ưu điểm số.

---

## 🌟 TÍNH NĂNG NỔI BẬT

### 📚 1. Kho Đề Thi 800 Câu Chuẩn Cấu Trúc THPT 2026
- **20 Bộ đề thi thực chiến** (40 câu/đề) được số hóa và thẩm định từ các Sở GD&ĐT & Trường Chuyên uy tín toàn quốc:
  - Sở GD&ĐT Hà Nội (Đề minh họa & Khảo sát Lần 1)
  - Cụm Chuyên Bắc Ninh (Lần 1 & Khảo sát 2026)
  - Sở GD&ĐT TP. Đà Nẵng
  - THPT Chuyên Phan Bội Châu (Nghệ An)
  - THPT Chuyên Vĩnh Phúc
  - THPT Chuyên Bắc Giang
  - THPT Trần Phú (Hà Tĩnh) & Sở GD&ĐT Hà Tĩnh
  - Sở GD&ĐT Điện Biên, Ninh Bình
  - Cụm Trường THPT TP. Hải Phòng & THPT Thái Phiên
  - THPT Lê Lợi (Thanh Hóa), THPT Mê Linh, THPT Hàn Thuyên
  - Đề thi chuyên đề Elon Musk & Đổi mới sáng tạo
- **100% câu hỏi có đáp án chuẩn xác**, dịch nghĩa chi tiết và giải thích cặn kẽ từng phương án.

### ⏱️ 2. Quiz Engine Ổn Định & Bấm Giờ Không Độ Trễ (`useQuizTimer`)
- **Đồng hồ bấm giờ chuẩn xác theo Timestamp (`Date.now()`)**: Không bị đơ, trôi lệch hay chậm lại khi chuyển tab, ẩn trình duyệt hoặc thiết bị vào chế độ ngủ.
- **Tự động lưu tiến độ (Auto-Save)**: Đang làm dở có thể thoát ra xem từ điển hoặc tắt máy mà không sợ mất bài. Banner trực quan cho phép tiếp tục bài thi 1-click.
- **Tự động điền bài đọc (Cloze Test Realtime Masking)**: Điền phương án trực tiếp vào chỗ trống trong đoạn văn khi chọn đáp án.
- **Tự động Highlight từ vựng**: Phát hiện và làm nổi bật từ/cụm từ đang được hỏi trong đoạn văn (`The word "..." in paragraph X`).

### ⌨️ 3. Khả Năng Tiếp Cận Toàn Diện (A11Y & Keyboard Navigation)
- Phím tắt tiện lợi: `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D` để chọn nhanh đáp án.
- Phím `F` để đánh dấu cờ (Flag) câu hỏi phân vân cần xem lại.
- Phím `Mũi tên Trái / Phải` chuyển câu hỏi.
- Hỗ trợ đầy đủ ngữ nghĩa ARIA (`role="radiogroup"`, `role="radio"`).

### 📖 4. Hệ Thống Tra Từ Điển Hợp Nhất (`dictionaryService`)
- Tích hợp từ điển nội bộ chuyên đề THPT (0ms tra cứu).
- Bộ đệm bộ nhớ (in-memory cache) thông minh chống lặp request.
- Tự động tra cứu online đa tầng khi gặp từ vựng mới ngoài đề thi.
- Phát âm giọng chuẩn bản xứ `en-US` tích hợp.

### 📔 5. Sổ Tay Câu Sai & Phân Biệt Cấp Độ Thành Thạo (`Mistake Notebook`)
- Tự động gom toàn bộ câu làm sai vào Sổ tay.
- Hỗ trợ phân loại trạng thái: **Tất cả**, **Đang ôn luyện** và **Đã nắm vững (Mastered)**.
- Chế độ Luyện tập lại chỉ riêng các câu làm sai.

### 🎯 6. Gợi Ý Lộ Trình Học Cá Nhân Hóa (Personalized Learning)
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

### 4. Kiểm tra mã nguồn & Kiểm định dữ liệu đề thi
```bash
# Kiểm tra định dạng và chất lượng 800 câu hỏi đề thi
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
│   ├── workflows/ci.yml       # GitHub Actions CI pipeline
│   └── dependabot.yml         # Dependabot automated dependency security
├── public/
│   ├── favicon.svg            # Favicon chính thức
│   ├── manifest.json          # PWA Web App Manifest
│   └── robots.txt             # SEO Crawling rules
├── scripts/
│   └── validateData.mjs       # Script thẩm định dữ liệu đề thi tự động
├── src/
│   ├── components/            # React UI components (QuizRunner, Dashboard, ErrorBoundary...)
│   ├── data/                  # 20 bộ đề thi THPT 2026 & Cơ sở dữ liệu từ điển
│   ├── hooks/                 # Custom React Hooks (useQuizTimer...)
│   ├── pages/                 # Page-level components (ExamCatalogPage, HistoryStatsPage...)
│   ├── services/              # Singleton services (storageService, dictionaryService)
│   ├── types/                 # TypeScript type definitions
│   ├── utils/                 # Security sanitization & schema validation
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
