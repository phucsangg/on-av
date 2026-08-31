# 🎓 EnglishQuiz Master - Web Ôn Thi Trắc Nghiệm Tiếng Anh THPT 2026

**EnglishQuiz Master** là ứng dụng web luyện thi trắc nghiệm Tiếng Anh hiện đại, chuyên sâu dành cho học sinh chuẩn bị cho kỳ thi **Tốt nghiệp THPT 2026** theo định dạng cấu trúc đề mới của Bộ Giáo dục & Đào tạo.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Tính Năng Nổi Bật

### 📚 1. Kho Đề Thi 385 Câu Chuẩn Cấu Trúc THPT 2026
- **9 Bộ đề thi chính thức** (40 câu/đề) được tổng hợp và thẩm định từ các Sở GD&ĐT & Trường Chuyên nổi tiếng:
  - Sở GD&ĐT Hà Nội (Lần 1)
  - Sở GD&ĐT TP. Đà Nẵng
  - Sở GD&ĐT Hà Tĩnh (Cụm Cẩm Xuyên)
  - Sở GD&ĐT Tuyên Quang
  - THPT Chuyên Vĩnh Phúc (Phú Thọ)
  - Cụm Trường THPT TP. Hải Phòng
  - THPT Thái Phiên (Hải Phòng - Lần 3)
  - THPT Lê Lợi (Thanh Hóa - Lần 1)
  - THPT Mê Linh (Hưng Yên - Lần 2)
- **Bộ đề trắc nghiệm luyện nhanh**: Đề 10 phút ngữ pháp & Đề 15 phút đọc hiểu nâng cao.

### ⏱️ 2. Trải Nghiệm Làm Bài Thi Chuyên Nghiệp (`Quiz Runner`)
- **Tự động che đáp án Cloze Test**: Trong lúc làm bài, các ô trống trong bài đọc được bảo mật dạng `(1) ____________` và **tự động điền đáp án theo thời gian thực** khi học sinh chọn lựa.
- **Tự động Highlight từ vựng câu hỏi**: Tự động phát hiện và tô nổi bật từ vựng/đoạn trích được hỏi trong các câu đọc hiểu (`The word "X" in paragraph Y...`).

### 🧩 3. Bảng Chọn Câu Hỏi Trực Quan 40 Câu (`Question Navigator Grid`)
- **Lưới 40 câu hỏi (5x8)** hiển thị trọn vẹn tiến độ làm bài thi ngay trên màn hình.
- **Nhãn phân loại trạng thái**:
  - 🟣 **Đã làm**: Hiển thị màu tím thương hiệu.
  - ⚪ **Chưa làm**: Nút xám sẵn sàng chọn.
  - 🟡 **Đã đánh dấu**: Huy hiệu cảnh báo câu cần xem lại.
  - 🎯 **Đang chọn**: Viền nét đậm kèm hiệu ứng phát sáng.
- **Tự động cuộn mượt thanh bên dưới**: Nút câu hỏi hiện tại luôn tự động cuộn vào trung tâm màn hình.

### 🖍️ 4. Hệ Thống Bôi Đen Đánh Dấu Văn Bản (`Text Drag & Highlighter`)
- Quét chọn từ/cụm từ/câu bất kỳ trong bài đọc hoặc câu hỏi để mở **Thanh công cụ nổi (Floating Toolbar)**.
- **3 Màu bôi đánh dấu**: 💛 Vàng chanh, 💚 Xanh lá, 💗 Hồng phấn.
- **Xóa Highlight 1-Click**: Nhấp chuột trực tiếp vào đoạn văn đã bôi màu để xóa nhanh chóng.

### 📖 5. Tra Từ Điển Anh-Việt Tích Hợp (`Dictionary System`)
- Tra cứu tức thì nghĩa Tiếng Việt, phiên âm IPA, từ loại, ví dụ minh họa và từ đồng nghĩa/trái nghĩa.
- **Sổ tay từ vựng yêu thích**: Lưu từ vựng để ôn tập lại bất kỳ lúc nào.

### 🌐 6. Bản Dịch & Lời Giải Chi Tiết
- Hỗ trợ xem bản dịch Tiếng Việt tham khảo cho các đoạn văn đọc hiểu và từng câu hỏi/lựa chọn.
- **Chính sách bảo mật đáp án**: Chỉ hiển thị đáp án đúng & giải thích chi tiết sau khi học sinh chính thức nộp bài.

### 📊 7. Thống Kê Điểm Số & Sổ Tay Câu Sai (`Mistake Notebook`)
- Tổng hợp điểm số, thời gian làm bài, tỷ lệ chính xác theo kỹ năng.
- **Sổ tay câu sai**: Tự động lưu trữ các câu làm sai để ôn luyện lại cho đến khi thành thạo.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend Core**: React 19, TypeScript
- **Build Tool**: Vite 8, Rolldown
- **Icons**: Lucide React
- **Design System**: Vanilla CSS Glassmorphism, Responsive Dark / Light Mode

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

### Yêu Cầu Tiên Quyết
- Node.js >= 18.0
- npm hoặc yarn

### 1. Clone Repository
```bash
git clone https://github.com/phucsangg/on-av.git
cd on-av
```

### 2. Cài Đặt Dependencies
```bash
npm install
```

### 3. Chạy Server Phát Triển (Dev Server)
```bash
npm run dev
```
Trình duyệt sẽ tự động chạy tại: `http://localhost:5173`

### 4. Build Production
```bash
npm run build
```

---

## 📁 Cấu Trúc Thư Mục Project

```
on-av/
├── public/                 # Assets tĩnh
├── src/
│   ├── components/         # Các React Components (QuizRunner, Dashboard, DictionaryModal...)
│   ├── data/               # Bộ dữ liệu đề thi THPT 2026 & Từ điển Anh-Việt
│   ├── pages/              # Các trang giao diện chính (Catalog, History, Dictionary...)
│   ├── types/              # TypeScript Interfaces & Types
│   ├── App.tsx             # Main App Component & Routing
│   ├── main.tsx            # Application Entry Point
│   └── index.css           # Global CSS Design System & Theme Tokens
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

Dự án phát triển mở phục vụ mục đích học tập và ôn thi THPT QG 2026. 
Phát hành theo giấy phép **MIT License**.
