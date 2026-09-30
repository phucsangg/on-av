# ON-AV — PHÂN TÍCH KHOẢNG TRỐNG TÍNH NĂNG & NĂNG LỰC SẢN PHẨM (PRODUCT_GAP_ANALYSIS.md)

**Sản phẩm:** ON-AV (EnglishQuiz Master)  
**Vai trò:** EdTech Product Manager, Learning Experience Designer, Senior Software Architect  
**Mục tiêu:** Định vị chính xác tính năng hiện tại, xác định khoảng trống giá trị sư phạm, đánh giá 10 tính năng cốt lõi, chọn lọc tính năng nên thêm và bài trừ các tính năng gây rác sản phẩm.

---

## 1. BẢNG PHÂN TÍCH KHOẢNG TRỐNG TÍNH NĂNG (FEATURE GAP MATRIX)

| Nhóm chức năng | Tính năng cụ thể | Hiện trạng trên ON-AV | Mức độ cần thiết | Độ phức tạp kỹ thuật | Đánh giá & Khuyến nghị |
|---|---|---|---|---|---|
| **CORE** | Làm bài thi (Exam Mode) | Đã có, rất ổn định | Bắt buộc (Core) | Thấp | Đang hoạt động xuất sắc với timer drift-free. |
| **CORE** | Chế độ Luyện tập (Practice Mode) | Đã có | Bắt buộc (Core) | Thấp | Cho phép xem ngay giải thích và dịch thuật sau mỗi câu. |
| **CORE** | Gạch bỏ đáp án (Elimination) | Đã có | Quan trọng | Thấp | Tương tác tốt, giảm tải nhận thức cho học sinh. |
| **CORE** | Bảng câu hỏi lưới (Grid Modal) | Đã có | Quan trọng | Thấp | Nhảy câu nhanh và xem tổng quan trạng thái làm bài. |
| **CORE** | Sổ tay câu sai (Personal Error Bank)| Đã có | Bắt buộc (Core) | Trung bình | Đã có lọc theo chủ đề và chế độ Flash Review. |
| **CORE** | Tra từ điển & Lưu từ vựng | Đã có | Bắt buộc (Core) | Trung bình | Tích hợp TTS phát âm, lưu từ vựng để ôn tập. |
| **LEARNING** | Bài thi Đánh giá Đầu vào (Diagnostic)| **Chưa có** | Rất cao | Trung bình | Người mới chưa biết trình độ hiện tại của mình ở đâu để chọn đề phù hợp. |
| **LEARNING** | Lặp lại Ngắt quãng (SRS - Spaced Repetition)| Sơ khai (Flash Review) | Rất cao | Trung bình | Cần thuật toán SM-2 hoặc Leitner để nhắc ôn câu sai đúng chu kỳ. |
| **LEARNING** | Lộ trình cá nhân hóa (Learning Path) | Báo cáo cơ bản | Rất cao | Cao | Hiện chỉ hiển thị chủ đề yếu/mạnh; chưa có playlist bài tập theo lộ trình. |
| **LEARNING** | Luyện tập thích ứng (Adaptive Practice)| **Chưa có** | Trung bình | Rất cao | Điều chỉnh độ khó theo thời gian thực (Item Response Theory); chưa cần thiết ở giai đoạn này. |
| **PLATFORM** | Tài khoản người dùng (User Account)| **Chưa có** | Cao (Tùy chọn) | Trung bình | Hiện tại không bắt buộc đăng nhập giúp loại bỏ rào cản truy cập. |
| **PLATFORM** | Đồng bộ Đám mây (Cloud Sync) | **Chưa có** (Chỉ Local) | Cao (Tùy chọn) | Trung bình | Cần thiết để học sinh chuyển từ máy tính trường về điện thoại cá nhân. |
| **ADMIN** | Quản lý Đề & Câu hỏi (CMS) | CustomExamBuilder tĩnh | Trung bình | Cao | Thầy cô hiện có thể tự tạo đề qua giao diện hoặc file JSON. |
| **PRODUCTION** | Giám sát Lỗi (Sentry / Monitoring) | **Chưa có** | Bắt buộc (P0) | Thấp | Cần tích hợp Sentry để theo dõi crash thời gian thực khi public người dùng. |
| **PRODUCTION** | Phân tích Hành vi (Analytics) | **Chưa có** | Quan trọng (P1) | Thấp | Cần đo tỷ lệ hoàn thành bài thi và tỷ lệ drop-off. |

---

## 2. ĐÁNH GIÁ CHI TIẾT 10 TÍNH NĂNG TRỌNG TÂM

### 1. Question Quality Engine (Bộ thẩm định tự động chất lượng câu hỏi)
- **Hiện trạng:** Đã có script xác thực cú pháp cơ bản (`scripts/validateData.mjs`) kiểm tra số lượng câu, ID trùng, và đáp án A-D.
- **Có nên thêm không?** **NÊN THÊM (P1).**
- **Tại sao?** Cần một engine tự động kiểm tra sâu hơn: phát hiện lỗi chính tả, câu hỏi bị rỗng đoạn văn đọc hiểu, câu hỏi có độ dài phương án quá chênh lệch (dấu hiệu lộ đáp án), và tính toán độ cân bằng các phương án A-B-C-D (tránh việc 1 đề thi có 60% đáp án là A).
- **Độ phức tạp:** Thấp - Trung bình.
- **Phụ thuộc:** Chạy trong luồng CI/CD trước khi merge tệp dữ liệu đề thi mới.

### 2. Question Source / License Metadata (Chuẩn hóa nguồn gốc & bản quyền đề thi)
- **Hiện trạng:** Đề thi chỉ có tên và badge (`Sở Hà Nội`, `HUIT-TOEIC`). Chưa có trường dữ liệu bản quyền chính thức.
- **Có nên thêm không?** **NÊN THÊM (P1).**
- **Tại sao?** Đảm bảo tính minh bạch học thuật. Cần ghi chú rõ tính chất giáo dục phi lợi nhuận (Educational Fair Use), nguồn sưu tầm đề tham khảo công khai, tránh hiểu nhầm là bản quyền độc quyền sở hữu.
- **Độ phức tạp:** Thấp (chỉ cập nhật metadata schema).
- **Phụ thuộc:** Schema `EnrichedQuestion` đề xuất.

### 3. User Account (Hệ thống tài khoản người dùng)
- **Hiện trạng:** Không có tài khoản. Người dùng truy cập là làm bài ngay lập tức.
- **Có nên thêm không?** **NÊN THÊM DƯỚI DẠNG TÙY CHỌN (OPTIONAL AUTH - P2).**
- **Tại sao?** Nếu ép buộc học sinh đăng nhập/đăng ký bằng mật khẩu ngay từ đầu, tỷ lệ thoát trang (bounce rate) sẽ tăng vọt 40-60%. Mô hình lý tưởng là **"Guest-First"**: cho phép học sinh làm bài không cần tài khoản; chỉ khi học sinh muốn lưu kết quả sang điện thoại thì mới gợi ý đăng nhập nhanh bằng Google 1-click.
- **Độ phức tạp:** Trung bình (Supabase Auth hoặc Firebase Auth).
- **Phụ thuộc:** Cần Cloud Sync Layer.

### 4. Cloud Sync (Đồng bộ tiến độ lên đám mây)
- **Hiện trạng:** 100% lưu tại `localStorage` trình duyệt. Có tính năng xuất/nhập file JSON dự phòng trong Cài đặt.
- **Có nên thêm không?** **NÊN THÊM (P2).**
- **Tại sao?** Học sinh thường làm bài trên máy tính tại trường/nhà, nhưng muốn mở điện thoại để ôn lại sổ câu sai và từ vựng khi đi xe buýt.
- **Độ phức tạp:** Trung bình (REST API hoặc Supabase Database).
- **Phụ thuộc:** Cần User Account (Google Auth).

### 5. Diagnostic Test (Bài thi Đánh giá Trình độ Đầu vào)
- **Hiện trạng:** Chưa có. Học sinh vào trang danh mục đề thi thấy 23 đề và phải tự chọn bừa một đề để làm.
- **Có nên thêm không?** **NÊN THÊM (P1 - Giá trị sư phạm cao).**
- **Tại sao?** Đây là tính năng "WOW" đối với người học. Một bài test ngắn gồm 15-20 câu chọn lọc bao quát các cấp độ A2, B1, B2. Sau khi làm xong trong 15 phút, hệ thống kết luận: *"Trình độ ước tính hiện tại: B1 (~450 TOEIC, ~6.5 điểm THPT). Đề xuất lộ trình: Bắt đầu với Đề Khảo sát Hà Nội và ôn lại chuyên đề Mệnh đề quan hệ."*
- **Độ phức tạp:** Trung bình.
- **Phụ thuộc:** Cần gán nhãn CEFR cho ngân hàng câu hỏi.

### 6. Personalized Learning Path (Lộ trình học tập cá nhân hóa)
- **Hiện trạng:** Đã có bước đầu: Dashboard phân tích các chủ đề yếu (< 65%) và chủ đề mạnh (≥ 80%) từ lịch sử thi.
- **Có nên thêm không?** **NÊN HOÀN THIỆN (P1).**
- **Tại sao?** Hiện tại Dashboard chỉ đưa ra lời khuyên bằng chữ ("Chủ đề cần chú ý: Mệnh đề quan hệ"). Cần nâng cấp thành nút hành động thực tế: *"Luyện ngay 10 câu thuộc chủ đề này"* (bấm vào là tạo ngay một session luyện tập tập trung vào điểm yếu).
- **Độ phức tạp:** Thấp - Trung bình (tận dụng tính năng lọc câu hỏi sẵn có).
- **Phụ thuộc:** Dữ liệu lịch sử làm bài.

### 7. Adaptive Practice (Luyện tập thích ứng thời gian thực - CAT/IRT)
- **Hiện trạng:** Chưa có. Các đề thi là tĩnh (fixed-form).
- **Có nên thêm không?** **CHƯA NÊN LÀM Ở GIAI ĐOẠN NÀY (P3 - Not Recommended Now).**
- **Tại sao?** Adaptive testing theo mô hình Item Response Theory (IRT) đòi hỏi phải có dữ liệu thống kê tham số độ khó ($b$), độ phân biệt ($a$) của từng câu hỏi được chuẩn hóa trên mẫu hàng chục nghìn lượt thi thật. Nếu tự viết thuật toán tăng giảm độ khó ngẫu nhiên sẽ làm méo mó tính chuẩn hóa của đề thi THPT và TOEIC.
- **Độ phức tạp:** Rất cao.
- **Phụ thuộc:** Dữ liệu thi của hàng chục nghìn người dùng.

### 8. Spaced Repetition System (Thuật toán Lặp lại Ngắt quãng cho Câu sai & Từ vựng)
- **Hiện trạng:** Sổ tay câu sai có chế độ "Flash Review" duyệt từng câu, có đánh dấu "Đã nắm vững" thủ công.
- **Có nên thêm không?** **NÊN THÊM (P1).**
- **Tại sao?** Học sinh làm sai một câu ngữ pháp hôm nay, nếu không được nhắc ôn lại sau 1 ngày, 3 ngày, 7 ngày thì sẽ quên ngay. Áp dụng thuật toán Leitner đơn giản (Hộp 1: Ôn mỗi ngày, Hộp 2: Ôn sau 3 ngày, Hộp 3: Đã thành thạo) sẽ tăng vọt hiệu quả ghi nhớ.
- **Độ phức tạp:** Trung bình (chỉ cần thêm trường `nextReviewDate` và thuật toán xếp lịch).
- **Phụ thuộc:** `MistakeNotebook` và `DictionaryPage`.

### 9. Admin CMS (Giao diện Quản trị Nội dung Câu hỏi & Đề thi)
- **Hiện trạng:** Có màn hình `CustomExamBuilder.tsx` cho phép người dùng tự nhập câu hỏi hoặc dán JSON đề thi.
- **Có nên thêm không?** **CHƯA NÊN XÂY DỰNG CMS NẶNG (P3).**
- **Tại sao?** Đội ngũ biên soạn đề thi hiện tại đang quản lý dữ liệu rất hiệu quả thông qua mã nguồn Git (`src/data/*.ts`), được kiểm duyệt qua Pull Request và CI validation tự động. Xây dựng một CMS hoàn chỉnh với phân quyền, WYSIWYG editor sẽ tốn nhiều tuần phát triển mà không mang lại giá trị trực tiếp cho học sinh học bài.
- **Độ phức tạp:** Rất cao.
- **Khuyến nghị:** Giữ nguyên quy trình Code-as-Data hoặc nâng cấp script chuyển đổi từ Word (`.docx`) sang TypeScript.

### 10. Production Monitoring (Hệ thống Giám sát & Báo cáo Lỗi Thời Gian Thực)
- **Hiện trạng:** Chưa có. Nếu một học sinh gặp lỗi crash màn hình trắng (White Screen of Death) ở một trình duyệt lạ, nhà phát triển hoàn toàn không biết.
- **Có nên thêm không?** **BẮT BUỘC TRƯỚC KHI PUBLIC (P0 - Production Blocker).**
- **Tại sao?** Cần tích hợp một công cụ nhẹ như **Sentry** (chỉ mất 10 dòng cấu hình) để tự động bắt runtime error, và một công cụ đo lường ẩn danh như **PostHog** hoặc **Plausible Analytics** để theo dõi lượt truy cập mà không vi phạm quyền riêng tư.
- **Độ phức tạp:** Rất thấp (~1-2 giờ tích hợp).
- **Phụ thuộc:** Không phụ thuộc backend.

---

## 3. CÁC TÍNH NĂNG NÊN BÀI TRỪ (ANTI-FEATURES TO AVOID)

Để giữ vững tinh thần **"Premium Minimal EdTech"** và tôn chỉ làm việc của Senior Architect, các tính năng sau đây **TUYỆT ĐỐI KHÔNG NÊN ĐƯỢC XÂY DỰNG**:

1. **Bảng xếp hạng đại trà (Public Leaderboard):**
   - *Lý do loại bỏ:* Trong ôn thi học thuật, bảng xếp hạng công khai tạo áp lực tiêu cực, dẫn đến gian lận (mở 2 tab để chép đáp án lấy điểm 100% ảo) và làm nản lòng những học sinh có xuất phát điểm thấp. Học tập là việc tiến bộ so với chính mình của ngày hôm qua.
2. **Bảng tin mạng xã hội / Diễn đàn thảo luận (Social Feed & Forum):**
   - *Lý do loại bỏ:* 90% diễn đàn trong các app EdTech nhỏ biến thành nơi spam quảng cáo, nội dung rác hoặc bỏ hoang không ai quản trị. Người dùng vào ON-AV để tập trung giải đề, không phải để lướt mạng xã hội.
3. **Phòng Chat / Nhắn tin trực tiếp (Chat System):**
   - *Lý do loại bỏ:* Chi phí máy chủ WebSocket cao, gánh nặng kiểm duyệt nội dung độc hại (content moderation), gây xao nhãng kỳ thi.
4. **Huy hiệu quá đà & Gamification lòe loẹt (Excessive Badges & Neon Gamification):**
   - *Lý do loại bỏ:* Biến sản phẩm thành trò chơi trẻ con. Chỉ giữ lại 2 chỉ số tạo động lực tự nhiên: **Chuỗi ngày học liên tục (Streak Days)** và **Mục tiêu 20 câu/ngày (Daily Goal)**.
5. **Đồ họa 3D nặng / Hiệu ứng cuộn Parallax (Heavy 3D Blobs & Parallax):**
   - *Lý do loại bỏ:* Tăng dung lượng bundle từ vài chục kB lên vài MB, làm nóng máy điện thoại, gây giật khung hình khi thí sinh đang cần đọc đoạn văn tập trung.

---

## 4. ĐÁNH GIÁ KHẢ NĂNG CO DÃN KIẾN TRÚC THEO QUY MÔ (SCALABILITY ANALYSIS)

### 4.1. Quy mô 10 đến 1,000 Người Dùng Hoạt Động Đồng Thời (Concurrent Users)
- **Kiến trúc hiện tại (Static Host + LocalStorage):** **HOẠT ĐỘNG HOÀN TOÀN MƯỢT MÀ VÀ BỀN VỮNG.**
- Chi phí hạ tầng: **0 VNĐ / tháng** (Dùng Vercel Free Tier hoặc Cloudflare Pages với băng thông không giới hạn).
- Máy chủ không phải xử lý bất kỳ request ghi cơ sở dữ liệu nào.

### 4.2. Quy mô 10,000 đến 100,000 Người Dùng Hoạt Động
Khi ứng dụng đạt quy mô lớn, các vấn đề sau sẽ xuất hiện nếu giữ nguyên kiến trúc:
1. **Dữ liệu đề thi trong bundle client:**
   - 23 đề thi chiếm ~1.2 MB mã nguồn không nén. Hiện tại đã giải quyết bằng dynamic chunking từng đề (~40-60 kB mỗi đề khi click).
   - Tuy nhiên, nếu kho đề tăng lên 200 đề thi (10,000 câu hỏi), việc biên dịch toàn bộ vào bundle Git sẽ làm chậm thời gian build. Lúc này cần chuyển dữ liệu câu hỏi thành các tệp JSON tĩnh phân phối qua CDN hoặc một Headless Content API.
2. **Giới hạn tra từ điển bên thứ ba:**
   - Endpoint `translate.googleapis.com` miễn phí sẽ bị Google chặn IP (HTTP 429) nếu có hàng nghìn người tra cùng lúc. Cần chuyển sang dịch vụ dịch thuật chuyên biệt hoặc mở rộng từ điển SQLite/JSON nội bộ tải về máy một lần.
3. **Mất mát dữ liệu học tập:**
   - Người dùng bắt đầu yêu cầu lưu trữ đám mây. Cần kích hoạt **Sync Layer** (tích hợp Supabase hoặc Firebase) với cơ chế "Offline-First Sync" (lưu local trước, đồng bộ ngầm khi có mạng).
