# UI/UX AUDIT – EnglishQuiz Master (Web Ôn Thi Trắc Nghiệm Tiếng Anh THPT 2026)

**Đánh giá bởi:** Senior Product Designer & UI/UX Engineer  
**Đối tượng khảo sát:** Web app `EnglishQuiz Master` (`phucsangg/on-av`)  
**Ngày thực hiện:** Tháng 9, 2026  
**Phiên bản:** v1.1.0  

---

## 1. TỔNG QUAN HIỆN TRẠNG (CURRENT STATE OVERVIEW)

Website là nền tảng ôn thi trắc nghiệm tiếng Anh bám sát cấu trúc đề thi THPT Quốc Gia 2026 (40 câu hỏi, các dạng đề đọc hiểu, điền từ cloze test, ngữ âm, giao tiếp, sắp xếp câu). Kho đề gồm 20 bộ đề chuẩn chất lượng cao (800 câu hỏi), có tích hợp tra cứu từ điển, lưu câu sai và thống kê lịch sử.

Tuy nhiên, trải nghiệm người dùng (UX) hiện tại mang thiên hướng của một công cụ làm bài kiểm tra truyền thống hơn là một **nền tảng EdTech học tập thông minh, cá nhân hóa và tạo động lực cho học sinh**.

---

## 2. ĐIỂM MẠNH CỦA UI/UX HIỆN TẠI (CURRENT UI STRENGTHS)

1. **Bộ nhận diện hiện đại cơ bản:** Màu chủ đạo Indigo/Cyan với glassmorphism và gradient khá bắt mắt; hỗ trợ Dark Mode và Light Mode.
2. **Kho đề phong phú và chuẩn mực:** 20 bộ đề bám sát đề thi THPT 2026 của các Sở GD&ĐT (Hà Nội, Bắc Ninh, Hà Tĩnh, Hải Phòng, Ninh Bình, Đà Nẵng...) với đầy đủ giải thích và dịch thuật.
3. **Tiện ích tích hợp phong phú:** Có sẵn tra cứu từ điển trực tiếp khi bôi đen từ (Selection Toolbar Popup), công cụ highlight đánh dấu đoạn văn nhiều màu.
4. **Code-splitting tốt:** Bundle size đã được tối ưu hóa sau đợt refactor kiến trúc trước đó (~101 kB initial JS).

---

## 3. CÁC VẤN ĐỀ UX/UI CỐT LÕI (CURRENT UX/UI PROBLEMS)

### 3.1. Dashboard & First-Time Experience (Thiếu định hướng học tập)
* **Vấn đề:** Màn hình chính Dashboard hiện tại hiển thị như một danh sách đề thi kèm hero banner chung chung. Khi học sinh mở web, học sinh **chưa biết ngay hôm nay mình nên làm gì**.
* **Thiếu sót:**
  * Chưa có mục tiêu học tập hàng ngày (Today's Goal: ví dụ làm 20 câu/ngày).
  * Chưa có lời chào theo ngữ cảnh thời gian (buổi sáng/buổi tối) tạo cảm giác thân thiện, đồng hành.
  * Chưa có nút tắt "Luyện nhanh 15 câu" hoặc "Ôn 10 câu sai gần nhất" ngay tại Hero banner.
  * Khi có bài thi đang làm dở, banner nằm ở sticky header nhưng thiếu nút tóm tắt nhanh ngay trong luồng thị giác trung tâm của Dashboard.

### 3.2. Quiz Experience (Trải nghiệm làm bài thi)
* **Vấn đề chỉ có 1 chế độ thi thử (Exam Mode):** Người học khi luyện tập câu hỏi phải làm hết cả 40 câu và nộp bài mới biết mình đúng hay sai. Đối với việc học ôn, học sinh cần **Chế độ Luyện tập (Practice Mode - Instant Feedback)** để xem ngay giải thích, dịch nghĩa và mẹo ngữ pháp sau khi chọn đáp án của từng câu.
* **Question Navigator trên Mobile:** Danh sách 40 câu hỏi cố định chiếm diện tích màn hình hoặc che khuất nội dung đoạn văn khi ở màn hình nhỏ (< 430px). Cần chuyển sang dạng **Bottom Sheet Drawer** mượt mà trên mobile.
* **Hiển thị đoạn văn đọc hiểu dài:** Trên mobile và tablet, đoạn văn đọc hiểu dài thường bị cuộn khó khăn nếu không có nút nhảy nhanh lên đầu đoạn văn (Jump to top) và xuống câu hỏi (Jump to questions).
* **Keyboard Navigation:** Chưa có hướng dẫn trực quan (visual badge) cho học sinh biết các phím tắt `1/2/3/4` (hoặc `A/B/C/D`), phím `F` (đánh dấu cờ), mũi tên điều hướng.

### 3.3. Sổ tay câu sai (Mistake Notebook)
* **Vấn đề:** Hiện tại chỉ hiển thị danh sách dạng thẻ tĩnh, người dùng chỉ có thể đọc lướt hoặc bấm nút luyện tất cả.
* **Thiếu sót:**
  * Thiếu chế độ **Flash Review (Luyện nhanh từng câu sai)** với thao tác "Tôi đã hiểu / Mastered" vs "Ôn lại / Review Again".
  * Thống kê mức độ tiến bộ (ví dụ: đã làm chủ 15/40 câu sai).

### 3.4. Từ điển & Học từ vựng (Vocabulary Learning)
* **Vấn đề:** Tính năng từ điển hiện đã có tra cứu và lưu từ, nhưng thiếu luồng học tập gắn kết:
  * Từ đã lưu trong sổ từ vựng chưa có chế độ học Flashcard với tương tác lật thẻ 3D trực quan, chấm điểm ghi nhớ ("Đã nhớ" vs "Chưa nhớ").
  * Cần hỗ trợ âm thanh phát âm trực tiếp chuẩn bản ngữ qua Web Speech API một cách mượt mà.

### 3.5. Learning Analytics & History
* **Vấn đề:** Bảng thống kê hiện tại hiển thị các con số tổng và bảng lịch sử, nhưng thiếu biểu đồ trực quan về tỷ lệ chính xác theo từng kỹ năng/chủ đề (Grammar, Vocabulary, Reading, Cloze Test...) và lời khuyên học tập cụ thể theo từng kỹ năng còn yếu (< 65%).

### 3.6. Cài đặt & Quản lý dữ liệu người dùng (Settings & Data Management)
* **Vấn đề:** Chưa có trang/modal Cài đặt tập trung để người dùng:
  * Xuất dữ liệu học tập ra file JSON (Backup progress).
  * Khôi phục dữ liệu từ file JSON (Restore progress).
  * Tùy chỉnh chế độ làm bài mặc định (Luyện tập xem giải thích ngay vs Thi thử tính giờ).
  * Xóa dữ liệu học tập có xác nhận an toàn.

### 3.7. Mobile-First & Responsive UX
* **Vấn đề:**
  * Thanh điều hướng dưới đáy (Mobile bottom nav) có 6 nút chữ dài, trên màn hình nhỏ 320px-375px dễ bị tràn viền hoặc co rúm chữ.
  * Các nút bấm trong quiz modal cần tối ưu vùng bấm (touch target >= 44px) để tránh bấm nhầm trên màn hình cảm ứng.

---

## 4. BẢNG ĐÁNH GIÁ ĐIỂM UI/UX HIỆN TẠI (BASELINE SCORE)

| Tiêu chí | Điểm hiện tại (/10) | Ghi chú chính |
|---|---|---|
| **Visual Design** | 7.5 | Giao diện hiện đại, sạch sẽ, nhưng còn nhiều inline style rời rạc. |
| **UX & Usability** | 6.5 | Luồng làm bài còn cứng nhắc, thiếu chế độ luyện tập có giải thích tức thì. |
| **Navigation** | 7.0 | Thanh tab navbar tốt trên desktop, nhưng thanh đáy mobile cần tinh gọn. |
| **Quiz Experience** | 7.0 | Đầy đủ tính năng thi nhưng thiếu Practice Mode, mobile navigator còn chiếm diện tích. |
| **Mobile Experience** | 6.5 | Cần cải tiến touch targets, bottom sheet drawer và reading passage jump. |
| **Learning Retention** | 6.0 | Sổ câu sai & sổ từ vựng cần có chế độ ôn tập lặp lại (Flashcard & Flash Review). |
| **Accessibility (A11Y)**| 7.0 | Đã có ARIA cơ bản, cần bổ sung focus visible, keyboard shortcut hints. |
| **Personalization** | 6.5 | Đã có phân tích chủ đề yếu/mạnh, cần bổ sung Daily Goal và lộ trình ngày. |
| **TỔNG THỂ** | **6.7 / 10** | Cần nâng cấp toàn diện lên **>= 9.0/10**. |
