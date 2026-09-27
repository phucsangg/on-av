import type { ExamSet, Question } from '../types/quiz';

// ==========================================
// READING PASSAGES & VIETNAMESE TRANSLATIONS
// ==========================================

const PASSAGE_TRAVEL_EXPENSE = `To: All Staff
Subject: Updated Travel-Expense Procedure

Beginning 1 November, employees travelling on company business must submit expense claims through the new online portal. The change is intended to reduce processing time and make reimbursement records easier to track. Paper forms will be accepted only when an employee has obtained written approval from the Finance Department.

Claims should be submitted within ten working days of the employee’s return. Each submission must include itemised receipts, the business purpose of the trip, and the relevant project code. Claims that are incomplete will be returned for correction, which may delay reimbursement.

Employees are encouraged to attend one of the short demonstrations scheduled for 24 and 27 October. Those unable to attend can find a step-by-step guide on the staff intranet.`;

const PASSAGE_TRAVEL_EXPENSE_TRANS = `THÔNG BÁO: CẬP NHẬT QUY TRÌNH THANH TOÁN CHI PHÍ CÔNG TÁC
Gửi: Toàn thể nhân viên
Chủ đề: Cập nhật thủ tục chi phí công tác

[ĐOẠN 1] Bắt đầu từ ngày 1 tháng 11, các nhân viên đi công tác theo yêu cầu của công ty phải nộp yêu cầu hoàn trả chi phí qua cổng thông tin trực tuyến mới. Thay đổi này nhằm mục đích rút ngắn thời gian xử lý và giúp hồ sơ hoàn tiền dễ theo dõi hơn. Các biểu mẫu bằng giấy sẽ chỉ được chấp nhận khi nhân viên có sự phê duyệt trước bằng văn bản từ Phòng Tài chính.

[ĐOẠN 2] Hồ sơ yêu cầu hoàn ứng cần được nộp trong vòng 10 ngày làm việc kể từ khi nhân viên trở về. Mỗi bộ hồ sơ nộp phải bao gồm hóa đơn chi tiết từng khoản, mục đích công việc của chuyến đi và mã dự án liên quan. Các hồ sơ chưa hoàn thiện sẽ bị gửi trả lại để chỉnh sửa, điều này có thể làm chậm trễ việc hoàn tiền.

[ĐOẠN 3] Nhân viên được khuyến khích tham gia một trong các buổi hướng dẫn ngắn được lên lịch vào ngày 24 và 27 tháng 10. Những ai không thể tham dự có thể tìm tài liệu hướng dẫn từng bước trên mạng nội bộ của công ty.`;

const PASSAGE_HYBRID_WORK = `Many organisations have adopted hybrid work arrangements, allowing employees to divide their time between home and the office. Supporters argue that this flexibility can reduce commuting time and give staff more control over their schedules. However, the benefits are not automatic. Teams may struggle to share information when important decisions are made in informal conversations that remote colleagues cannot hear.

To address this problem, some companies have introduced a “document-first” approach. Instead of relying on meetings to communicate every decision, employees record key information in shared workspaces. This practice can make decisions easier to trace and gives people in different time zones a chance to contribute. It also requires discipline: documents must be concise, up to date, and easy to locate. If every minor discussion produces a lengthy report, employees may spend more time maintaining records than doing the work itself.

Hybrid work therefore depends less on choosing a particular location than on designing reliable ways to collaborate. Clear expectations about availability, response times, and decision-making can help prevent misunderstandings. Organisations should also review their arrangements periodically, since a system that works for one team may not suit another.`;

const PASSAGE_HYBRID_WORK_TRANS = `MÔ HÌNH LÀM VIỆC KẾT HỢP (HYBRID WORK)
[ĐOẠN 1] Nhiều tổ chức đã áp dụng các thỏa thuận làm việc kết hợp, cho phép nhân viên phân chia thời gian làm việc giữa ở nhà và tại văn phòng. Những người ủng hộ cho rằng sự linh hoạt này có thể giảm thời gian đi lại và giúp nhân viên kiểm soát tốt hơn lịch trình của họ. Tuy nhiên, các lợi ích không tự nhiên mà có. Các đội ngũ có thể gặp khó khăn trong việc chia sẻ thông tin khi các quyết định quan trọng được đưa ra trong các cuộc trò chuyện thân mật mà các đồng nghiệp làm việc từ xa không thể nghe thấy.

[ĐOẠN 2] Để giải quyết vấn đề này, một số công ty đã áp dụng phương pháp tiếp cận "ưu tiên tài liệu" (document-first). Thay vì dựa vào các cuộc họp để thông báo mọi quyết định, nhân viên ghi lại các thông tin then chốt trong không gian làm việc dùng chung. Cách làm này có thể giúp các quyết định dễ theo dõi hơn và mang lại cho những người ở các múi giờ khác nhau cơ hội đóng góp ý kiến. Phương pháp này cũng đòi hỏi tính kỷ luật: tài liệu phải ngắn gọn, cập nhật và dễ tìm kiếm. Nếu mỗi cuộc thảo luận nhỏ đều tạo ra một báo cáo dài dòng, nhân viên có thể mất nhiều thời gian duy trì sổ sách hơn là thực sự làm việc.

[ĐOẠN 3] Do đó, làm việc kết hợp ít phụ thuộc vào việc chọn một địa điểm cụ thể hơn là vào việc thiết kế các phương thức cộng tác đáng tin cậy. Những kỳ vọng rõ ràng về sự sẵn sàng phản hồi, thời gian trả lời và quy trình ra quyết định có thể giúp ngăn ngừa hiểu lầm. Các tổ chức cũng nên xem xét định kỳ cách sắp xếp của mình, vì một hệ thống hiệu quả với đội ngũ này có thể không phù hợp với đội ngũ khác.`;

const PASSAGE_REPAIR_CAFES = `Repair Cafés: More Than a Fix

In many towns, repair cafés invite residents to bring damaged household items to community events, where volunteers help them repair everything from lamps to small appliances. The events are usually free, although visitors may be asked to contribute toward replacement parts. Their immediate appeal is practical: an item that might otherwise be discarded can often be returned to use at little cost.

Yet the value of these gatherings extends beyond the objects they save. Visitors can observe how a repair is carried out and learn skills they may use again. A volunteer might explain why a loose connection causes a lamp to fail, or show how to identify a worn component. Such exchanges can make people more confident about maintaining their possessions rather than treating every fault as a reason to buy something new.

Repair cafés also create opportunities for people with different backgrounds to meet around a shared task. Retired technicians may work alongside students, while neighbours who have never spoken before exchange advice. Organisers say this social element is just as important as the repairs themselves. Nevertheless, these events have limits. Some products are unsafe to open without specialist equipment, and certain faults require professional service. A responsible repair café will explain when an item cannot be repaired on site.

Although a local event cannot solve the wider problem of electronic waste on its own, it can influence habits. When people understand how products work and see that repair is sometimes possible, they may think more carefully before replacing an item. In that sense, the success of a repair café is measured not only by the number of objects fixed, but also by the knowledge and connections it leaves behind.`;

const PASSAGE_REPAIR_CAFES_TRANS = `QUÁN CÀ PHÊ SỬA CHỮA: KHÔNG CHỈ LÀ SỬA CHỮA ĐỒ DÙNG
[ĐOẠN 1] Tại nhiều thị trấn, các quán cà phê sửa chữa (repair cafés) mời cư dân mang các vật dụng gia đình bị hư hỏng đến các sự kiện cộng đồng, nơi các tình nguyện viên giúp họ sửa chữa mọi thứ từ đèn chiếu sáng đến các thiết bị điện nhỏ. Các sự kiện này thường miễn phí, mặc dù khách tham gia có thể được yêu cầu đóng góp một khoản chi phí cho các bộ phận thay thế. Sức hấp dẫn trực tiếp của chúng mang tính thực tế: một món đồ nếu không mang đến đây có thể đã bị vứt bỏ nay có thể được đưa vào sử dụng trở lại với chi phí rất nhỏ.

[ĐOẠN 2] Tuy nhiên, giá trị của những buổi gặp gỡ này vượt xa những đồ vật được cứu vãn. Khách tham gia có thể quan sát cách thức sửa chữa được thực hiện và học hỏi các kỹ năng mà họ có thể tái sử dụng trong tương lai. Một tình nguyện viên có thể giải thích tại sao một mối nối lỏng khiến đèn không sáng, hoặc chỉ cách nhận biết một linh kiện bị mòn. Những trao đổi như vậy giúp mọi người tự tin hơn trong việc bảo trì tài sản của mình thay vì coi mỗi sự cố là lý do để mua một món đồ mới.

[ĐOẠN 3] Các quán cà phê sửa chữa cũng tạo cơ hội cho những người có hoàn cảnh và độ tuổi khác nhau gặp gỡ xung quanh một nhiệm vụ chung. Các kỹ thuật viên đã nghỉ hưu có thể làm việc bên cạnh các sinh viên, trong khi những người hàng xóm chưa từng trò chuyện trước đây cùng trao đổi lời khuyên. Các nhà tổ chức cho biết yếu tố xã hội này cũng quan trọng không kém bản thân việc sửa chữa. Dẫu vậy, các sự kiện này vẫn có những giới hạn. Một số sản phẩm không an toàn khi tháo mở mà không có thiết bị chuyên dụng, và một số lỗi nhất định đòi hỏi dịch vụ chuyên nghiệp. Một quán cà phê sửa chữa có trách nhiệm sẽ giải thích rõ khi một món đồ không thể sửa tại chỗ.

[ĐOẠN 4] Mặc dù một sự kiện địa phương không thể tự mình giải quyết vấn đề rác thải điện tử trên diện rộng, nó có thể tác động đến thói quen của người dân. Khi mọi người hiểu cách thức hoạt động của sản phẩm và thấy rằng việc sửa chữa đôi khi là khả thi, họ có thể suy nghĩ cẩn trọng hơn trước khi thay thế một món đồ. Theo nghĩa đó, sự thành công của một quán cà phê sửa chữa không chỉ được đo bằng số lượng đồ vật được sửa xong, mà còn bởi kiến thức và những sự kết nối cộng đồng mà nó để lại.`;

export const HUIT_02_QUESTIONS: Question[] = [
  {
    id: 'huit02-q1',
    type: 'grammar',
    questionText: 'Question 1. By the time the technician arrived, the production line _____ for nearly twenty minutes.',
    options: [
      { id: 'A', text: 'stopped', translation: 'đã dừng (quá khứ đơn)' },
      { id: 'B', text: 'has stopped', translation: 'đã dừng (hiện tại hoàn thành)' },
      { id: 'C', text: 'had been stopped', translation: 'đã bị dừng (quá khứ hoàn thành bị động)' },
      { id: 'D', text: 'was stopping', translation: 'đang dừng' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: By the time + mốc quá khứ, hành động/trạng thái xảy ra trước đó dùng quá khứ hoàn thành. Dạng bị động phù hợp vì dây chuyền bị dừng: had been stopped.',
    translation: 'Trước khi kỹ thuật viên đến, dây chuyền sản xuất đã bị dừng gần 20 phút.',
    topicTag: 'Quá khứ hoàn thành bị động'
  },
  {
    id: 'huit02-q2',
    type: 'grammar',
    questionText: 'Question 2. If the supplier _____ the revised quotation by Friday, we will place the order immediately.',
    options: [
      { id: 'A', text: 'sends', translation: 'gửi (hiện tại đơn)' },
      { id: 'B', text: 'sent', translation: 'đã gửi (quá khứ đơn)' },
      { id: 'C', text: 'would send', translation: 'would send' },
      { id: 'D', text: 'had sent', translation: 'had sent' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Câu điều kiện loại 1: If + hiện tại đơn, mệnh đề chính dùng will + V.',
    translation: 'Nếu nhà cung cấp gửi báo giá đã sửa đổi trước thứ Sáu, chúng tôi sẽ đặt hàng ngay lập tức.',
    topicTag: 'Câu điều kiện loại 1'
  },
  {
    id: 'huit02-q3',
    type: 'grammar',
    questionText: 'Question 3. The new policy requires that every employee _____ the safety briefing before entering the laboratory.',
    options: [
      { id: 'A', text: 'attends', translation: 'attends (thì hiện tại)' },
      { id: 'B', text: 'attend', translation: 'attend (nguyên mẫu không to)' },
      { id: 'C', text: 'attended', translation: 'attended (quá khứ)' },
      { id: 'D', text: 'has attended', translation: 'has attended' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Sau require that, văn phong trang trọng dùng giả định thức: chủ ngữ + động từ nguyên mẫu không to.',
    translation: 'Quy định mới yêu cầu mọi nhân viên đều phải tham dự buổi phổ biến an toàn trước khi vào phòng thí nghiệm.',
    topicTag: 'Thể giả định thức (Subjunctive Mood)'
  },
  {
    id: 'huit02-q4',
    type: 'grammar',
    questionText: 'Question 4. Neither the sales manager nor the regional representatives _____ available for the meeting yesterday.',
    options: [
      { id: 'A', text: 'was', translation: 'was (số ít)' },
      { id: 'B', text: 'were', translation: 'were (số nhiều quá khứ)' },
      { id: 'C', text: 'has been', translation: 'has been' },
      { id: 'D', text: 'is', translation: 'is' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Với neither…nor, động từ thường hòa hợp với chủ ngữ gần nhất; representatives số nhiều. Yesterday → were.',
    translation: 'Cả giám đốc bán hàng lẫn các đại diện khu vực đều không có mặt trong cuộc họp ngày hôm qua.',
    topicTag: 'Sự hòa hợp Chủ ngữ - Động từ (Neither... nor)'
  },
  {
    id: 'huit02-q5',
    type: 'grammar',
    questionText: 'Question 5. The report, _____ was submitted two days ahead of schedule, contains a detailed cost analysis.',
    options: [
      { id: 'A', text: 'who', translation: 'who (chỉ người)' },
      { id: 'B', text: 'whom', translation: 'whom (tân ngữ chỉ người)' },
      { id: 'C', text: 'which', translation: 'which (chỉ vật/sự việc)' },
      { id: 'D', text: 'whose', translation: 'whose (sở hữu)' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Đại từ quan hệ thay cho vật/report và làm chủ ngữ mệnh đề quan hệ: which.',
    translation: 'Bản báo cáo, vốn được nộp sớm hai ngày so với kế hoạch, có chứa phân tích chi phí chi tiết.',
    topicTag: 'Mệnh đề quan hệ (Relative Pronouns)'
  },
  {
    id: 'huit02-q6',
    type: 'grammar',
    questionText: 'Question 6. We regret _____ you that your application cannot be considered without the required documents.',
    options: [
      { id: 'A', text: 'informing', translation: 'informing (hối tiếc đã làm gì)' },
      { id: 'B', text: 'to inform', translation: 'to inform (lấy làm tiếc phải làm gì)' },
      { id: 'C', text: 'inform', translation: 'inform' },
      { id: 'D', text: 'to informing', translation: 'to informing' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Regret to do something: lấy làm tiếc phải thông báo/làm điều gì (thường dùng trong thông báo trang trọng).',
    translation: 'Chúng tôi rất tiếc phải thông báo với bạn rằng hồ sơ ứng tuyển không thể được xem xét nếu thiếu các giấy tờ theo yêu cầu.',
    topicTag: 'Dạng của động từ (Regret to V)'
  },
  {
    id: 'huit02-q7',
    type: 'grammar',
    questionText: 'Question 7. The more carefully the data are reviewed, _____ the likelihood of costly errors.',
    options: [
      { id: 'A', text: 'lower', translation: 'lower (thiếu mạo từ the)' },
      { id: 'B', text: 'the lower', translation: 'the lower (chuẩn cấu trúc so sánh kép)' },
      { id: 'C', text: 'the lowest', translation: 'the lowest (so sánh nhất)' },
      { id: 'D', text: 'it is lower', translation: 'it is lower' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cấu trúc so sánh kép: The + comparative…, the + comparative…',
    translation: 'Dữ liệu càng được xem xét cẩn thận thì khả năng xảy ra những sai sót tốn kém càng thấp.',
    topicTag: 'So sánh kép (The more... the more...)'
  },
  {
    id: 'huit02-q8',
    type: 'grammar',
    questionText: 'Question 8. Ms. Patel is responsible _____ coordinating the training sessions across all branches.',
    options: [
      { id: 'A', text: 'to', translation: 'to' },
      { id: 'B', text: 'for', translation: 'for (chịu trách nhiệm về)' },
      { id: 'C', text: 'with', translation: 'with' },
      { id: 'D', text: 'of', translation: 'of' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Collocation: be responsible for + noun/V-ing.',
    translation: 'Cô Patel chịu trách nhiệm điều phối các buổi đào tạo tại tất cả các chi nhánh.',
    topicTag: 'Giới từ đi với Tính từ (Responsible for)'
  },
  {
    id: 'huit02-q9',
    type: 'grammar',
    questionText: 'Question 9. Had the team checked the figures more thoroughly, it _____ the discrepancy before publication.',
    options: [
      { id: 'A', text: 'would detect', translation: 'would detect' },
      { id: 'B', text: 'detected', translation: 'detected' },
      { id: 'C', text: 'would have detected', translation: 'would have detected (chuẩn điều kiện 3)' },
      { id: 'D', text: 'had detected', translation: 'had detected' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Đảo ngữ điều kiện loại 3: Had + S + V3, S + would have + V3.',
    translation: 'Nếu đội ngũ kiểm tra các con số kỹ lưỡng hơn thì họ đã phát hiện ra điểm sai lệch trước khi công bố.',
    topicTag: 'Đảo ngữ câu điều kiện loại 3'
  },
  {
    id: 'huit02-q10',
    type: 'grammar',
    questionText: 'Question 10. The equipment must _____ before it is returned to the storage room.',
    options: [
      { id: 'A', text: 'inspect', translation: 'inspect (chủ động)' },
      { id: 'B', text: 'be inspected', translation: 'be inspected (bị động: must be V-ed)' },
      { id: 'C', text: 'have inspecting', translation: 'have inspecting' },
      { id: 'D', text: 'be inspecting', translation: 'be inspecting' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Modal passive: must + be + past participle.',
    translation: 'Thiết bị phải được kiểm tra trước khi đưa trở lại phòng kho.',
    topicTag: 'Bị động với Động từ khuyết thiếu (Must be)'
  },
  {
    id: 'huit02-q11',
    type: 'grammar',
    questionText: 'Question 11. The director suggested _____ the launch until the final quality checks had been completed.',
    options: [
      { id: 'A', text: 'postpone', translation: 'postpone' },
      { id: 'B', text: 'to postpone', translation: 'to postpone (sai ngữ pháp)' },
      { id: 'C', text: 'postponing', translation: 'postponing (suggest + V-ing)' },
      { id: 'D', text: 'postponed', translation: 'postponed' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Suggest + V-ing hoặc suggest that + S + (should) V. Không dùng suggest to V.',
    translation: 'Giám đốc đã đề nghị hoãn đợt ra mắt cho đến khi các khâu kiểm tra chất lượng cuối cùng được hoàn tất.',
    topicTag: 'Danh động từ sau Suggest'
  },
  {
    id: 'huit02-q12',
    type: 'grammar',
    questionText: 'Question 12. Only after the contract had been signed _____ the project officially begin.',
    options: [
      { id: 'A', text: 'did', translation: 'did (trợ động từ đảo ngữ thì quá khứ)' },
      { id: 'B', text: 'had', translation: 'had' },
      { id: 'C', text: 'was', translation: 'was' },
      { id: 'D', text: 'has', translation: 'has' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Only after đứng đầu câu gây đảo ngữ ở mệnh đề chính: did + subject + bare infinitive.',
    translation: 'Chỉ sau khi hợp đồng được ký kết thì dự án mới chính thức bắt đầu.',
    topicTag: 'Đảo ngữ với Only after'
  },
  {
    id: 'huit02-q13',
    type: 'grammar',
    questionText: 'Question 13. The candidate spoke so _____ that several members of the panel asked her to repeat the key points.',
    options: [
      { id: 'A', text: 'quietly', translation: 'quietly (trạng từ bổ nghĩa cho spoke)' },
      { id: 'B', text: 'quiet', translation: 'quiet (tính từ)' },
      { id: 'C', text: 'quietness', translation: 'quietness (danh từ)' },
      { id: 'D', text: 'quieter', translation: 'quieter' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Bổ nghĩa cho động từ spoke cần trạng từ: quietly.',
    translation: 'Ứng viên nói quá nhỏ đến mức một số thành viên trong hội đồng phỏng vấn đã yêu cầu cô ấy nhắc lại các điểm chính.',
    topicTag: 'Trạng từ chỉ thể cách (Adverb of Manner)'
  },
  {
    id: 'huit02-q14',
    type: 'grammar',
    questionText: 'Question 14. All expenses _____ in the claim must be supported by original receipts.',
    options: [
      { id: 'A', text: 'include', translation: 'include' },
      { id: 'B', text: 'included', translation: 'included (rút gọn từ which are included)' },
      { id: 'C', text: 'including', translation: 'including' },
      { id: 'D', text: 'are included', translation: 'are included (thừa vị ngữ)' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Rút gọn mệnh đề quan hệ bị động: expenses which are included → expenses included.',
    translation: 'Tất cả các chi phí có trong giấy yêu cầu thanh toán phải kèm theo hóa đơn gốc.',
    topicTag: 'Rút gọn mệnh đề quan hệ dạng bị động'
  },
  {
    id: 'huit02-q15',
    type: 'grammar',
    questionText: 'Question 15. The proposal was rejected, not because it was impractical, _____ because its financial assumptions were unrealistic.',
    options: [
      { id: 'A', text: 'and', translation: 'and' },
      { id: 'B', text: 'but', translation: 'but (cấu trúc not because... but because...)' },
      { id: 'C', text: 'or', translation: 'or' },
      { id: 'D', text: 'so', translation: 'so' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cấu trúc not because…, but because… diễn đạt lý do đối lập/đính chính.',
    translation: 'Đề xuất bị bác bỏ không phải vì nó phi thực tế, mà vì các giả định tài chính của nó không có cơ sở.',
    topicTag: 'Cặp liên từ (Not because... but because...)'
  },
  {
    id: 'huit02-q16',
    type: 'vocabulary',
    questionText: 'Question 16. The company plans to _____ its customer-support hours during the holiday season.',
    options: [
      { id: 'A', text: 'extend', translation: 'extend (kéo dài thời gian/giờ giấc)' },
      { id: 'B', text: 'expand on', translation: 'expand on (mở rộng chi tiết)' },
      { id: 'C', text: 'enlarge to', translation: 'enlarge to (phóng to kích thước)' },
      { id: 'D', text: 'prolong for', translation: 'prolong for' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Extend hours = kéo dài giờ hoạt động.',
    translation: 'Công ty dự định kéo dài giờ hỗ trợ khách hàng trong suốt kỳ nghỉ lễ.',
    topicTag: 'Từ vựng - Collocation (Extend hours)'
  },
  {
    id: 'huit02-q17',
    type: 'vocabulary',
    questionText: 'Question 17. Please keep your confirmation number for future _____.',
    options: [
      { id: 'A', text: 'reference', translation: 'reference (sự tra cứu / tham khảo)' },
      { id: 'B', text: 'referral', translation: 'referral (sự giới thiệu)' },
      { id: 'C', text: 'preference', translation: 'preference (sự ưa chuộng)' },
      { id: 'D', text: 'conference', translation: 'conference (hội nghị)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: For future reference = để tiện tra cứu sau này.',
    translation: 'Vui lòng lưu giữ mã xác nhận của bạn để tiện tra cứu sau này.',
    topicTag: 'Từ vựng - Thành ngữ (For future reference)'
  },
  {
    id: 'huit02-q18',
    type: 'vocabulary',
    questionText: 'Question 18. The training session has been _____ until next Monday because the instructor is ill.',
    options: [
      { id: 'A', text: 'put off', translation: 'put off (hoãn lại)' },
      { id: 'B', text: 'taken over', translation: 'taken over (tiếp quản)' },
      { id: 'C', text: 'brought up', translation: 'brought up (nuôi dưỡng/nêu ra)' },
      { id: 'D', text: 'carried out', translation: 'carried out (tiến hành)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Put off = hoãn lại.',
    translation: 'Buổi tập huấn đã bị hoãn lại sang thứ Hai tuần tới vì người hướng dẫn bị ốm.',
    topicTag: 'Cụm động từ (Phrasal Verbs - Put off)'
  },
  {
    id: 'huit02-q19',
    type: 'vocabulary',
    questionText: 'Question 19. The firm is seeking a _____ candidate who can manage several projects at once.',
    options: [
      { id: 'A', text: 'reliable', translation: 'reliable (đáng tin cậy)' },
      { id: 'B', text: 'reliant', translation: 'reliant (phụ thuộc)' },
      { id: 'C', text: 'reliance', translation: 'reliance (sự tin cậy)' },
      { id: 'D', text: 'reliably', translation: 'reliably (trạng từ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Sau mạo từ a và trước danh từ candidate cần tính từ; reliable = đáng tin cậy.',
    translation: 'Công ty đang tìm kiếm một ứng viên đáng tin cậy, người có thể quản lý nhiều dự án cùng một lúc.',
    topicTag: 'Từ loại - Tính từ (Reliable candidate)'
  },
  {
    id: 'huit02-q20',
    type: 'vocabulary',
    questionText: 'Question 20. The new software is designed to _____ the process of submitting expense claims.',
    options: [
      { id: 'A', text: 'streamline', translation: 'streamline (tinh giản / hợp lý hóa quy trình)' },
      { id: 'B', text: 'interrupt', translation: 'interrupt (làm gián đoạn)' },
      { id: 'C', text: 'withdraw', translation: 'withdraw (rút lui)' },
      { id: 'D', text: 'undergo', translation: 'undergo (trải qua)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Streamline = tinh giản, làm quy trình hiệu quả hơn.',
    translation: 'Phần mềm mới được thiết kế nhằm tinh giản quy trình nộp yêu cầu hoàn ứng chi phí.',
    topicTag: 'Từ vựng công sở (Streamline)'
  },
  {
    id: 'huit02-q21',
    type: 'vocabulary',
    questionText: 'Question 21. Customers who wish to return an item must present proof of purchase and the original _____.',
    options: [
      { id: 'A', text: 'packaging', translation: 'packaging (bao bì đóng gói)' },
      { id: 'B', text: 'package', translation: 'package (kiện hàng/gói hàng)' },
      { id: 'C', text: 'packaged', translation: 'packaged (được đóng gói)' },
      { id: 'D', text: 'packages', translation: 'packages' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Original packaging = bao bì gốc.',
    translation: 'Khách hàng muốn trả lại hàng phải xuất trình hóa đơn mua hàng và bao bì nguyên gốc.',
    topicTag: 'Từ loại - Danh từ (Original packaging)'
  },
  {
    id: 'huit02-q22',
    type: 'vocabulary',
    questionText: 'Question 22. The manager asked the team to provide a _____ explanation for the unexpected increase in costs.',
    options: [
      { id: 'A', text: 'comprehensive', translation: 'comprehensive (toàn diện / đầy đủ)' },
      { id: 'B', text: 'comprehensively', translation: 'comprehensively (trạng từ)' },
      { id: 'C', text: 'comprehend', translation: 'comprehend (động từ thấu hiểu)' },
      { id: 'D', text: 'comprehension', translation: 'comprehension (danh từ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cần tính từ bổ nghĩa explanation; comprehensive = toàn diện, đầy đủ.',
    translation: 'Người quản lý yêu cầu cả nhóm đưa ra một lời giải thích toàn diện về sự gia tăng chi phí bất ngờ.',
    topicTag: 'Từ loại - Tính từ (Comprehensive explanation)'
  },
  {
    id: 'huit02-q23',
    type: 'vocabulary',
    questionText: 'Question 23. The conference room is currently _____, so we will have to meet elsewhere.',
    options: [
      { id: 'A', text: 'unavailable', translation: 'unavailable (không có sẵn / bận)' },
      { id: 'B', text: 'incapable', translation: 'incapable (không đủ khả năng)' },
      { id: 'C', text: 'unoccupied', translation: 'unoccupied (trống người)' },
      { id: 'D', text: 'unqualified', translation: 'unqualified (không đủ tiêu chuẩn)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Unavailable = không có sẵn/không thể sử dụng; unoccupied thường là đang trống.',
    translation: 'Phòng hội nghị hiện tại không có sẵn để sử dụng, vì vậy chúng ta sẽ phải họp ở nơi khác.',
    topicTag: 'Từ vựng ngữ cảnh (Unavailable room)'
  },
  {
    id: 'huit02-q24',
    type: 'vocabulary',
    questionText: 'Question 24. The marketing department will _____ a survey to determine which features customers value most.',
    options: [
      { id: 'A', text: 'conduct', translation: 'conduct (tiến hành / thực hiện khảo sát)' },
      { id: 'B', text: 'commit', translation: 'commit (cam kết)' },
      { id: 'C', text: 'contain', translation: 'contain (chứa đựng)' },
      { id: 'D', text: 'convince', translation: 'convince (thuyết phục)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Conduct a survey = tiến hành khảo sát.',
    translation: 'Phòng marketing sẽ tiến hành một cuộc khảo sát để xác định những tính năng mà khách hàng đánh giá cao nhất.',
    topicTag: 'Kết hợp từ - Collocation (Conduct a survey)'
  },
  {
    id: 'huit02-q25',
    type: 'vocabulary',
    questionText: 'Question 25. Due to a temporary shortage, orders may be subject to _____ delays.',
    options: [
      { id: 'A', text: 'occasional', translation: 'occasional (thỉnh thoảng / đôi khi - tính từ)' },
      { id: 'B', text: 'occasion', translation: 'occasion (dịp / cơ hội)' },
      { id: 'C', text: 'occasionally', translation: 'occasionally (trạng từ)' },
      { id: 'D', text: 'occasioned', translation: 'occasioned' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Tính từ occasional bổ nghĩa delays.',
    translation: 'Do tình trạng thiếu hụt tạm thời, các đơn đặt hàng có thể gặp phải sự chậm trễ đôi khi.',
    topicTag: 'Từ loại - Tính từ (Occasional delays)'
  },
  {
    id: 'huit02-q26',
    type: 'vocabulary',
    questionText: 'Question 26. The vendor offered a partial refund as a gesture of _____.',
    options: [
      { id: 'A', text: 'goodwill', translation: 'goodwill (thiện chí hợp tác)' },
      { id: 'B', text: 'goodhearted', translation: 'goodhearted (tốt bụng)' },
      { id: 'C', text: 'well-being', translation: 'well-being (sức khỏe/hạnh phúc)' },
      { id: 'D', text: 'good-looking', translation: 'good-looking (đẹp mắt)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: A gesture of goodwill = thiện chí.',
    translation: 'Nhà cung cấp đã đề nghị hoàn lại một phần tiền như một cử chỉ thể hiện thiện chí.',
    topicTag: 'Thành ngữ công sở (A gesture of goodwill)'
  },
  {
    id: 'huit02-q27',
    type: 'vocabulary',
    questionText: 'Question 27. Applicants are advised to _____ their documents carefully before submitting the online form.',
    options: [
      { id: 'A', text: 'review', translation: 'review (rà soát / kiểm tra lại)' },
      { id: 'B', text: 'revise', translation: 'revise (sửa chữa nội dung)' },
      { id: 'C', text: 'recover', translation: 'recover (phục hồi)' },
      { id: 'D', text: 'reveal', translation: 'reveal (tiết lộ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Review documents = kiểm tra/xem lại hồ sơ; revise thường là chỉnh sửa nội dung.',
    translation: 'Các ứng viên được khuyên nên kiểm tra lại các giấy tờ cẩn thận trước khi gửi mẫu trực tuyến.',
    topicTag: 'Từ vựng ngữ cảnh (Review documents)'
  },
  {
    id: 'huit02-q28',
    type: 'vocabulary',
    questionText: 'Question 28. The factory has introduced stricter measures to ensure compliance _____ environmental regulations.',
    options: [
      { id: 'A', text: 'to', translation: 'to' },
      { id: 'B', text: 'with', translation: 'with (compliance with = tuân thủ theo)' },
      { id: 'C', text: 'for', translation: 'for' },
      { id: 'D', text: 'at', translation: 'at' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Compliance with regulations = sự tuân thủ quy định.',
    translation: 'Nhà máy đã đưa ra các biện pháp nghiêm ngặt hơn nhằm đảm bảo sự tuân thủ các quy định về môi trường.',
    topicTag: 'Giới từ đi với Danh từ (Compliance with)'
  },
  {
    id: 'huit02-q29',
    type: 'vocabulary',
    questionText: 'Question 29. The product launch was successful, largely _____ the cooperation between design and sales teams.',
    options: [
      { id: 'A', text: 'due to', translation: 'due to (bởi vì / nhờ vào)' },
      { id: 'B', text: 'despite', translation: 'despite (mặc dù)' },
      { id: 'C', text: 'whereas', translation: 'whereas (trong khi)' },
      { id: 'D', text: 'unless', translation: 'unless (trừ khi)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Largely due to = phần lớn là nhờ/vì.',
    translation: 'Đợt ra mắt sản phẩm đã thành công, phần lớn là nhờ vào sự hợp tác giữa đội ngũ thiết kế và bán hàng.',
    topicTag: 'Cụm liên từ chỉ nguyên nhân (Largely due to)'
  },
  {
    id: 'huit02-q30',
    type: 'vocabulary',
    questionText: 'Question 30. Please notify the reception desk of any changes to your booking _____ advance.',
    options: [
      { id: 'A', text: 'at', translation: 'at' },
      { id: 'B', text: 'in', translation: 'in (in advance = trước)' },
      { id: 'C', text: 'on', translation: 'on' },
      { id: 'D', text: 'by', translation: 'by' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: In advance = trước.',
    translation: 'Vui lòng thông báo cho quầy lễ tân về bất kỳ thay đổi nào đối với việc đặt chỗ của bạn trước thời hạn.',
    topicTag: 'Cụm giới từ thời gian (In advance)'
  },
  {
    id: 'huit02-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TRAVEL_EXPENSE,
    passageTranslation: PASSAGE_TRAVEL_EXPENSE_TRANS,
    questionText: 'Question 31. What is the main purpose of the notice?',
    options: [
      { id: 'A', text: 'To announce a change in the expense-claim process', translation: 'Thông báo về sự thay đổi trong quy trình thanh toán chi phí' },
      { id: 'B', text: 'To introduce a new travel allowance', translation: 'Giới thiệu khoản phụ cấp đi lại mới' },
      { id: 'C', text: 'To recruit staff for the Finance Department', translation: 'Tuyển dụng nhân sự cho Phòng Tài chính' },
      { id: 'D', text: 'To cancel upcoming business trips', translation: 'Hủy các chuyến công tác sắp tới' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The notice announces a new online portal and updated submission rules.',
    translation: 'Mục đích chính của thông báo là gì?',
    topicTag: 'Đọc hiểu Thông báo - Mục đích chính'
  },
  {
    id: 'huit02-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TRAVEL_EXPENSE,
    passageTranslation: PASSAGE_TRAVEL_EXPENSE_TRANS,
    questionText: 'Question 32. When may paper forms still be used?',
    options: [
      { id: 'A', text: 'Whenever the portal is busy', translation: 'Bất cứ khi nào cổng thông tin bị nghẽn mạng' },
      { id: 'B', text: 'If the claim is submitted late', translation: 'Nếu yêu cầu được nộp muộn' },
      { id: 'C', text: 'When written approval has been obtained', translation: 'Khi đã có được sự phê duyệt bằng văn bản' },
      { id: 'D', text: 'For trips lasting more than ten days', translation: 'Đối với các chuyến công tác kéo dài hơn mười ngày' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Paper forms are accepted only with written Finance Department approval.',
    translation: 'Khi nào biểu mẫu bằng giấy vẫn có thể được sử dụng?',
    topicTag: 'Đọc hiểu Thông báo - Chi tiết quy định'
  },
  {
    id: 'huit02-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TRAVEL_EXPENSE,
    passageTranslation: PASSAGE_TRAVEL_EXPENSE_TRANS,
    questionText: 'Question 33. What must employees include with a claim?',
    options: [
      { id: 'A', text: 'A copy of their employment contract', translation: 'Bản sao hợp đồng lao động' },
      { id: 'B', text: 'Itemised receipts and a project code', translation: 'Hóa đơn chi tiết và mã dự án' },
      { id: 'C', text: 'A manager’s personal phone number', translation: 'Số điện thoại cá nhân của người quản lý' },
      { id: 'D', text: 'The original travel booking advertisement', translation: 'Mẩu quảng cáo đặt chuyến đi ban đầu' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: The notice lists itemised receipts, business purpose, and project code.',
    translation: 'Nhân viên phải gửi kèm những gì trong hồ sơ yêu cầu thanh toán?',
    topicTag: 'Đọc hiểu Thông báo - Hồ sơ yêu cầu'
  },
  {
    id: 'huit02-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TRAVEL_EXPENSE,
    passageTranslation: PASSAGE_TRAVEL_EXPENSE_TRANS,
    questionText: 'Question 34. The word “incomplete” is closest in meaning to:',
    options: [
      { id: 'A', text: 'unfinished', translation: 'unfinished (chưa hoàn thành / thiếu sót)' },
      { id: 'B', text: 'expensive', translation: 'expensive (đắt đỏ)' },
      { id: 'C', text: 'confidential', translation: 'confidential (bảo mật)' },
      { id: 'D', text: 'inaccurate', translation: 'inaccurate (không chính xác)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Incomplete means not having all required parts; closest is unfinished.',
    translation: 'Từ "incomplete" (chưa hoàn thiện) gần nghĩa nhất với từ nào?',
    topicTag: 'Đọc hiểu Thông báo - Từ vựng ngữ cảnh (Incomplete)'
  },
  {
    id: 'huit02-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TRAVEL_EXPENSE,
    passageTranslation: PASSAGE_TRAVEL_EXPENSE_TRANS,
    questionText: 'Question 35. What can be inferred about claims that need correction?',
    options: [
      { id: 'A', text: 'They will automatically be rejected permanently', translation: 'Chúng sẽ tự động bị từ chối vĩnh viễn' },
      { id: 'B', text: 'They may take longer to be reimbursed', translation: 'Chúng có thể mất nhiều thời gian hơn để được hoàn tiền' },
      { id: 'C', text: 'They must be resubmitted on paper', translation: 'Chúng phải được nộp lại trên giấy' },
      { id: 'D', text: 'They will be reviewed before complete claims', translation: 'Chúng sẽ được xét duyệt trước các hồ sơ đầy đủ' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: The notice says incomplete claims may delay reimbursement.',
    translation: 'Có thể suy luận được điều gì về những hồ sơ cần chỉnh sửa?',
    topicTag: 'Đọc hiểu Thông báo - Suy luận (Inference)'
  },
  {
    id: 'huit02-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HYBRID_WORK,
    passageTranslation: PASSAGE_HYBRID_WORK_TRANS,
    questionText: 'Question 36. What is the passage mainly about?',
    options: [
      { id: 'A', text: 'Why offices should be closed permanently', translation: 'Tại sao nên đóng cửa văn phòng vĩnh viễn' },
      { id: 'B', text: 'How organisations can make hybrid work more effective', translation: 'Cách các tổ chức có thể làm cho mô hình làm việc kết hợp hiệu quả hơn' },
      { id: 'C', text: 'Why employees dislike written communication', translation: 'Tại sao nhân viên không thích giao tiếp bằng văn bản' },
      { id: 'D', text: 'How to reduce the cost of office furniture', translation: 'Làm thế nào để giảm chi phí nội thất văn phòng' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: The passage discusses benefits, challenges, and practices for effective hybrid work.',
    translation: 'Đoạn văn chủ yếu nói về điều gì?',
    topicTag: 'Đọc hiểu Bài luận - Ý chính toàn bài'
  },
  {
    id: 'huit02-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HYBRID_WORK,
    passageTranslation: PASSAGE_HYBRID_WORK_TRANS,
    questionText: 'Question 37. According to the passage, one difficulty with hybrid work is that:',
    options: [
      { id: 'A', text: 'remote workers may miss informal exchanges', translation: 'Nhân viên làm việc từ xa có thể bỏ lỡ các cuộc trao đổi thân mật' },
      { id: 'B', text: 'employees cannot use shared documents', translation: 'Nhân viên không thể sử dụng tài liệu dùng chung' },
      { id: 'C', text: 'commuting becomes more expensive for everyone', translation: 'Việc đi lại trở nên đắt đỏ hơn đối với mọi người' },
      { id: 'D', text: 'meetings are prohibited', translation: 'Các cuộc họp bị nghiêm cấm hoàn toàn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Remote colleagues may not hear decisions made in informal conversations.',
    translation: 'Theo đoạn văn, một khó khăn của mô hình làm việc kết hợp là gì?',
    topicTag: 'Đọc hiểu Bài luận - Khó khăn của làm việc kết hợp'
  },
  {
    id: 'huit02-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HYBRID_WORK,
    passageTranslation: PASSAGE_HYBRID_WORK_TRANS,
    questionText: 'Question 38. The phrase “document-first” suggests that employees should:',
    options: [
      { id: 'A', text: 'record important information in shared workspaces', translation: 'Ghi lại thông tin quan trọng vào các không gian làm việc dùng chung' },
      { id: 'B', text: 'replace all communication with formal reports', translation: 'Thay thế toàn bộ giao tiếp bằng các bản báo cáo chính thức' },
      { id: 'C', text: 'avoid making decisions during meetings', translation: 'Tránh đưa ra quyết định trong các cuộc họp' },
      { id: 'D', text: 'send every document to customers', translation: 'Gửi mọi tài liệu cho khách hàng' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The text defines it as recording key information in shared workspaces.',
    translation: 'Cụm từ "document-first" (ưu tiên tài liệu) ngụ ý rằng nhân viên nên:',
    topicTag: 'Đọc hiểu Bài luận - Hiểu khái niệm'
  },
  {
    id: 'huit02-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HYBRID_WORK,
    passageTranslation: PASSAGE_HYBRID_WORK_TRANS,
    questionText: 'Question 39. What is one possible disadvantage of the document-first approach?',
    options: [
      { id: 'A', text: 'Decisions become impossible to trace', translation: 'Các quyết định trở nên không thể truy vết' },
      { id: 'B', text: 'Staff in different time zones cannot contribute', translation: 'Nhân viên ở các múi giờ khác nhau không thể đóng góp' },
      { id: 'C', text: 'Maintaining excessive documentation can waste time', translation: 'Duy trì quá nhiều tài liệu giấy tờ có thể gây lãng phí thời gian' },
      { id: 'D', text: 'Employees must work from the office', translation: 'Nhân viên bắt buộc phải làm việc tại văn phòng' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: The passage warns that lengthy reports for minor discussions can consume time.',
    translation: 'Một nhược điểm tiềm ẩn của phương pháp tiếp cận ưu tiên tài liệu là gì?',
    topicTag: 'Đọc hiểu Bài luận - Nhược điểm tiềm ẩn'
  },
  {
    id: 'huit02-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HYBRID_WORK,
    passageTranslation: PASSAGE_HYBRID_WORK_TRANS,
    questionText: 'Question 40. The word “trace” in paragraph 2 is closest in meaning to:',
    options: [
      { id: 'A', text: 'follow or track', translation: 'follow or track (theo dõi, lần theo dấu vết)' },
      { id: 'B', text: 'erase', translation: 'erase (xóa bỏ)' },
      { id: 'C', text: 'delay', translation: 'delay (trì hoãn)' },
      { id: 'D', text: 'simplify', translation: 'simplify (đơn giản hóa)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: To trace a decision is to follow its record/history.',
    translation: 'Từ "trace" trong đoạn 2 gần nghĩa nhất với:',
    topicTag: 'Đọc hiểu Bài luận - Từ vựng ngữ cảnh (Trace)'
  },
  {
    id: 'huit02-q41',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HYBRID_WORK,
    passageTranslation: PASSAGE_HYBRID_WORK_TRANS,
    questionText: 'Question 41. Which statement is supported by the passage?',
    options: [
      { id: 'A', text: 'A single hybrid-work policy suits every team', translation: 'Một chính sách làm việc kết hợp duy nhất phù hợp với mọi đội ngũ' },
      { id: 'B', text: 'Clear expectations can reduce misunderstandings', translation: 'Kỳ vọng rõ ràng có thể giúp giảm thiểu những hiểu lầm' },
      { id: 'C', text: 'All decisions should be made in meetings', translation: 'Mọi quyết định đều nên được đưa ra trong các cuộc họp' },
      { id: 'D', text: 'Written records are useful only for managers', translation: 'Hồ sơ bằng văn bản chỉ hữu ích cho các nhà quản lý' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: The final paragraph explicitly links clear expectations with fewer misunderstandings.',
    translation: 'Phát biểu nào sau đây được ủng hộ bởi thông tin trong bài?',
    topicTag: 'Đọc hiểu Bài luận - Thông tin đúng'
  },
  {
    id: 'huit02-q42',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HYBRID_WORK,
    passageTranslation: PASSAGE_HYBRID_WORK_TRANS,
    questionText: 'Question 42. The author’s attitude toward hybrid work is best described as:',
    options: [
      { id: 'A', text: 'entirely negative', translation: 'hoàn toàn tiêu cực' },
      { id: 'B', text: 'uncritically enthusiastic', translation: 'hào hứng một cách mù quáng thiếu phê phán' },
      { id: 'C', text: 'balanced and practical', translation: 'cân bằng và thực tế' },
      { id: 'D', text: 'indifferent to its outcomes', translation: 'thờ ơ với kết quả của nó' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: The passage recognises both benefits and limitations, then offers practical measures.',
    translation: 'Thái độ của tác giả đối với mô hình làm việc kết hợp được mô tả đúng nhất là:',
    topicTag: 'Đọc hiểu Bài luận - Thái độ tác giả'
  },
  {
    id: 'huit02-q43',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_REPAIR_CAFES,
    passageTranslation: PASSAGE_REPAIR_CAFES_TRANS,
    questionText: 'Question 43. What is the main idea of the passage?',
    options: [
      { id: 'A', text: 'Repair cafés offer practical, educational, and social benefits', translation: 'Các quán cà phê sửa chữa mang lại lợi ích thiết thực, giáo dục và xã hội' },
      { id: 'B', text: 'Household appliances should never be replaced', translation: 'Không bao giờ nên thay thế các thiết bị gia dụng' },
      { id: 'C', text: 'Repair cafés are designed mainly for retired technicians', translation: 'Các quán cà phê sửa chữa được thiết kế chủ yếu cho kỹ thuật viên nghỉ hưu' },
      { id: 'D', text: 'Most electronic products can be repaired without training', translation: 'Hầu hết đồ điện tử có thể được sửa chữa mà không cần qua đào tạo' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The passage describes repair, learning, community, and limits.',
    translation: 'Ý chính của đoạn văn là gì?',
    topicTag: 'Đọc hiểu Cộng đồng - Ý chính toàn bài'
  },
  {
    id: 'huit02-q44',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_REPAIR_CAFES,
    passageTranslation: PASSAGE_REPAIR_CAFES_TRANS,
    questionText: 'Question 44. Why might visitors be asked to contribute money?',
    options: [
      { id: 'A', text: 'To pay the volunteers’ salaries', translation: 'Để trả lương cho các tình nguyện viên' },
      { id: 'B', text: 'To help cover the cost of replacement parts', translation: 'Để hỗ trợ trang trải chi phí cho các bộ phận thay thế' },
      { id: 'C', text: 'To purchase a membership card', translation: 'Để mua thẻ thành viên câu lạc bộ' },
      { id: 'D', text: 'To fund a new appliance store', translation: 'Để gây quỹ cho một cửa hàng thiết bị mới' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: The first paragraph says contributions may cover replacement parts.',
    translation: 'Tại sao khách tham gia có thể được yêu cầu đóng góp tiền?',
    topicTag: 'Đọc hiểu Cộng đồng - Chi tiết bài đọc'
  },
  {
    id: 'huit02-q45',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_REPAIR_CAFES,
    passageTranslation: PASSAGE_REPAIR_CAFES_TRANS,
    questionText: 'Question 45. The word “they” in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'possessions', translation: 'các vật dụng (possessions)' },
      { id: 'B', text: 'faults', translation: 'các lỗi hỏng (faults)' },
      { id: 'C', text: 'skills', translation: 'các kỹ năng (skills)' },
      { id: 'D', text: 'visitors', translation: 'những người khách tham gia (visitors)' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: In “skills they may use again,” they refers to visitors.',
    translation: 'Từ "they" trong đoạn 2 quy chiếu đến đối tượng nào?',
    topicTag: 'Đọc hiểu Cộng đồng - Từ quy chiếu (They)'
  },
  {
    id: 'huit02-q46',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_REPAIR_CAFES,
    passageTranslation: PASSAGE_REPAIR_CAFES_TRANS,
    questionText: 'Question 46. According to paragraph 2, visitors may become more confident because they:',
    options: [
      { id: 'A', text: 'learn how to maintain and understand their possessions', translation: 'học được cách bảo trì và hiểu rõ đồ dùng của mình' },
      { id: 'B', text: 'receive free replacement products', translation: 'nhận được các sản phẩm thay thế miễn phí' },
      { id: 'C', text: 'are guaranteed that every item can be fixed', translation: 'được đảm bảo rằng mọi món đồ đều có thể sửa chữa được' },
      { id: 'D', text: 'no longer need professional technicians', translation: 'không còn cần đến các kỹ thuật viên chuyên nghiệp nữa' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Observing repairs and learning skills can build confidence.',
    translation: 'Theo đoạn 2, khách tham gia có thể trở nên tự tin hơn vì họ:',
    topicTag: 'Đọc hiểu Cộng đồng - Lợi ích kỹ năng'
  },
  {
    id: 'huit02-q47',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_REPAIR_CAFES,
    passageTranslation: PASSAGE_REPAIR_CAFES_TRANS,
    questionText: 'Question 47. Which of the following is mentioned as a limitation of repair cafés?',
    options: [
      { id: 'A', text: 'They do not allow students to participate', translation: 'Họ không cho phép sinh viên tham gia' },
      { id: 'B', text: 'They only accept lamps', translation: 'Họ chỉ nhận sửa chữa đèn chiếu sáng' },
      { id: 'C', text: 'Some items require specialist equipment or professional service', translation: 'Một số món đồ đòi hỏi thiết bị chuyên dụng hoặc dịch vụ chuyên nghiệp' },
      { id: 'D', text: 'Visitors are not allowed to ask questions', translation: 'Khách tham gia không được phép đặt câu hỏi' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: The passage explicitly notes safety/equipment and professional-service limits.',
    translation: 'Điều nào sau đây được đề cập như một hạn chế của các quán cà phê sửa chữa?',
    topicTag: 'Đọc hiểu Cộng đồng - Giới hạn hoạt động'
  },
  {
    id: 'huit02-q48',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_REPAIR_CAFES,
    passageTranslation: PASSAGE_REPAIR_CAFES_TRANS,
    questionText: 'Question 48. The word “influence” in the final paragraph is closest in meaning to:',
    options: [
      { id: 'A', text: 'affect', translation: 'affect (tác động / ảnh hưởng đến)' },
      { id: 'B', text: 'measure', translation: 'measure (đo lường)' },
      { id: 'C', text: 'prevent', translation: 'prevent (ngăn chặn)' },
      { id: 'D', text: 'ignore', translation: 'ignore (phớt lờ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Influence means to affect or shape.',
    translation: 'Từ "influence" trong đoạn cuối gần nghĩa nhất với:',
    topicTag: 'Đọc hiểu Cộng đồng - Từ vựng ngữ cảnh (Influence)'
  },
  {
    id: 'huit02-q49',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_REPAIR_CAFES,
    passageTranslation: PASSAGE_REPAIR_CAFES_TRANS,
    questionText: 'Question 49. What can be inferred about the organisers’ view of success?',
    options: [
      { id: 'A', text: 'It depends only on how many items are repaired', translation: 'Nó chỉ phụ thuộc vào số lượng đồ vật được sửa chữa thành công' },
      { id: 'B', text: 'It includes learning and community connections', translation: 'Nó bao gồm cả sự học hỏi và các mối gắn kết cộng đồng' },
      { id: 'C', text: 'It requires every visitor to become a technician', translation: 'Nó đòi hỏi mọi vị khách đều phải trở thành kỹ thuật viên' },
      { id: 'D', text: 'It is unrelated to waste reduction', translation: 'Nó không liên quan đến việc giảm thiểu rác thải' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: The conclusion says success includes knowledge and connections, not just repairs.',
    translation: 'Có thể suy luận được điều gì về quan điểm thành công của ban tổ chức?',
    topicTag: 'Đọc hiểu Cộng đồng - Suy luận quan điểm'
  },
  {
    id: 'huit02-q50',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_REPAIR_CAFES,
    passageTranslation: PASSAGE_REPAIR_CAFES_TRANS,
    questionText: 'Question 50. Which title best captures the passage?',
    options: [
      { id: 'A', text: 'The Hidden Costs of Buying Appliances', translation: 'Chi phí ẩn của việc mua sắm thiết bị gia dụng' },
      { id: 'B', text: 'Why Professional Repairs Are Always Better', translation: 'Tại sao việc sửa chữa chuyên nghiệp luôn tốt hơn' },
      { id: 'C', text: 'Repair Cafés: More Than a Fix', translation: 'Repair Cafés: More Than a Fix (Không chỉ là sửa chữa)' },
      { id: 'D', text: 'The End of Electronic Waste', translation: 'Sự chấm dứt của rác thải điện tử' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: The title reflects benefits beyond simply fixing objects.',
    translation: 'Tiêu đề nào sau đây nắm bắt tốt nhất nội dung của bài đọc?',
    topicTag: 'Đọc hiểu Cộng đồng - Tiêu đề bài đọc'
  }
];

export const HUIT_02_EXAM: ExamSet = {
  id: 'exam-huit-02-toeic',
  title: 'Đề Luyện Thi Anh Văn Đầu Vào HUIT - Mã HUIT-02 (Nâng Cao / TOEIC Format)',
  description: 'Đề luyện thi Anh văn đầu vào Đại học Công Thương TP.HCM (HUIT) mã 02 nâng cao theo định dạng chuẩn TOEIC Reading: 15 câu Ngữ pháp, 15 câu Từ vựng và 20 câu Đọc hiểu kèm lời giải chi tiết và bản dịch.',
  category: 'university',
  durationMinutes: 60,
  totalQuestions: 50,
  badge: 'HUIT - ĐẦU VÀO TOEIC',
  iconName: 'Award',
  questions: HUIT_02_QUESTIONS
};
