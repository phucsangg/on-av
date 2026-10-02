import type { ExamSet, Question } from '../types/quiz';

// ==========================================
// READING PASSAGES & VIETNAMESE TRANSLATIONS
// ==========================================

const PASSAGE_NOTICE_COMPUTER_ROOMS = `NOTICE: LANGUAGE CENTRE COMPUTER ROOMS

From 15 October, Computer Room A will be available for individual study only between 4:00 p.m. and 7:00 p.m. Group activities should be moved to Computer Room B, which has six larger tables and a shared display screen.

Students may use either room without an appointment before 4:00 p.m. After 4:00 p.m., however, an online reservation is required for Computer Room A. Reservations may be made no more than five days in advance and are limited to one 90-minute session per student per day.

Students who reserve a computer but do not arrive within 15 minutes may lose their reservation. The centre asks students not to reserve a computer simply to keep it available for later use.`;

const PASSAGE_NOTICE_COMPUTER_ROOMS_TRANS = `THÔNG BÁO: QUY ĐỊNH PHÒNG MÁY TÍNH TRUNG TÂM NGOẠI NGỮ

Từ ngày 15 tháng 10, Phòng máy tính A sẽ chỉ dành cho việc tự học cá nhân trong khoảng thời gian từ 4:00 chiều đến 7:00 tối. Các hoạt động làm việc nhóm cần chuyển sang Phòng máy tính B, nơi được trang bị 6 bàn lớn hơn và một màn hình trình chiếu dùng chung.

Sinh viên có thể sử dụng một trong hai phòng mà không cần đặt lịch hẹn trước 4:00 chiều. Tuy nhiên, sau 4:00 chiều, bắt buộc phải đặt chỗ trực tuyến nếu muốn sử dụng Phòng máy tính A. Đặt chỗ có thể được thực hiện trước tối đa 5 ngày và giới hạn mỗi sinh viên một lượt 90 phút mỗi ngày.

Sinh viên đã đặt máy nhưng không đến trong vòng 15 phút có thể sẽ bị hủy lượt đặt chỗ. Trung tâm yêu cầu sinh viên không đặt giữ máy chỉ nhằm mục đích giữ chỗ cho việc sử dụng sau đó.`;

const PASSAGE_EMAIL_CHANGE_OF_ROOM = `To: Workshop Participants
Subject: Change of Room for Saturday Workshop

Dear Participants,

Due to maintenance work in Building D, Saturday's workshop will no longer be held in Room D204. The session will instead take place in Room A312, beginning at the originally scheduled time of 8:30 a.m.

No change has been made to the workshop content or duration. However, because Room A312 is smaller, participants are asked to bring only essential materials and to avoid leaving personal belongings in the room during breaks. If you have already downloaded the workshop handout, there is no need to download it again.`;

const PASSAGE_EMAIL_CHANGE_OF_ROOM_TRANS = `Gửi: Người tham dự hội thảo
Chủ đề: Thay đổi phòng học cho buổi hội thảo thứ Bảy

Thân gửi các bạn tham dự,

Do công tác bảo trì tại Tòa nhà D, buổi hội thảo vào thứ Bảy sẽ không còn được tổ chức tại Phòng D204. Buổi học sẽ được chuyển sang Phòng A312, bắt đầu vào đúng thời gian đã lên lịch ban đầu là 8:30 sáng.

Nội dung và thời lượng của hội thảo hoàn toàn không thay đổi. Tuy nhiên, vì Phòng A312 có diện tích nhỏ hơn, người tham gia được yêu cầu chỉ mang theo các tài liệu thiết yếu và tránh để lại đồ dùng cá nhân trong phòng trong suốt giờ giải lao. Nếu bạn đã tải tài liệu phát tay của buổi hội thảo, bạn không cần phải tải lại lần nữa.`;

const PASSAGE_STUDY_STRATEGY = `STUDY STRATEGY: RETRIEVAL PRACTICE

A common problem in language learning is that students confuse recognition with actual recall. A learner may recognize a word immediately when seeing it in a textbook but still be unable to produce it when speaking or writing.

One way to address this gap is to practise retrieval without looking at the answer first. For vocabulary, students can cover the definitions and try to produce them from memory. For grammar, they can write a sentence using a target structure before checking an example. The initial attempt may contain mistakes, but analysing those mistakes provides useful information about what needs further practice.

It is also useful to space review sessions over several days rather than completing all revision in one sitting.`;

const PASSAGE_STUDY_STRATEGY_TRANS = `CHIẾN LƯỢC HỌC TẬP: LUYỆN TẬP GỢI NHỚ CHỦ ĐỘNG

Một vấn đề phổ biến trong việc học ngôn ngữ là sinh viên thường nhầm lẫn giữa sự nhận biết thụ động và khả năng nhớ lại thực tế. Một người học có thể nhận ra một từ ngay lập tức khi nhìn thấy nó trong sách giáo khoa, nhưng vẫn không thể tự tạo ra từ đó khi nói hoặc viết.

Một cách để khắc phục khoảng cách này là luyện tập gợi nhớ (retrieval practice) mà không nhìn vào câu trả lời trước. Đối với từ vựng, sinh viên có thể che phần định nghĩa và cố gắng nhớ lại nghĩa từ trong trí nhớ. Đối với ngữ pháp, họ có thể viết một câu sử dụng cấu trúc mục tiêu trước khi kiểm tra câu ví dụ mẫu. Lần thử đầu tiên có thể có lỗi sai, nhưng việc phân tích các lỗi sai đó sẽ cung cấp thông tin hữu ích về những điểm cần rèn luyện thêm.

Việc phân bổ các buổi ôn tập ngắt quãng qua nhiều ngày cũng hữu ích hơn nhiều so với việc dồn toàn bộ việc ôn tập vào một buổi duy nhất.`;

const PASSAGE_MEMO_APPOINTMENT = `MEMO TO STUDENTS

The Student Support Centre will introduce a revised appointment system on 1 November. The main purpose of the change is to help students select the appropriate service before they arrive. _____(46)_____, students will first choose a service category and then select an available time.

Students should read the descriptions of each service carefully. _____(47)_____ they are unsure which category applies to their request, they may contact the information desk for advice. Appointments can be cancelled online up to two hours before the scheduled time.

The centre also asks students to arrive on time. _____(48)_____, arriving early does not mean that a student will automatically be served before someone with an earlier appointment. Students who are more than 15 minutes late may be asked to make a new appointment.

The revised system is intended to make the process more efficient. _____(49)_____, staff will monitor appointment patterns during the first few weeks. This information will be used to identify problems and make adjustments _____(50)_____ necessary.`;

const PASSAGE_MEMO_APPOINTMENT_TRANS = `BẢN GHI NHỚ GỬI SINH VIÊN

Trung tâm Hỗ trợ Sinh viên sẽ triển khai hệ thống đặt lịch hẹn sửa đổi từ ngày 1 tháng 11. Mục đích chính của sự thay đổi là giúp sinh viên lựa chọn dịch vụ phù hợp trước khi đến nơi. Theo hệ thống sửa đổi (46), trước tiên sinh viên sẽ chọn danh mục dịch vụ và sau đó chọn khung thời gian còn trống.

Sinh viên nên đọc kỹ mô tả của từng dịch vụ. Nếu (47) các bạn không chắc chắn danh mục nào áp dụng cho yêu cầu của mình, các bạn có thể liên hệ với bàn thông tin để được tư vấn. Lịch hẹn có thể được hủy trực tuyến trước giờ đã hẹn tối đa 2 giờ.

Trung tâm cũng yêu cầu sinh viên đến đúng giờ. Tuy nhiên (48), việc đến sớm không có nghĩa là sinh viên sẽ tự động được phục vụ trước người có lịch hẹn sớm hơn. Sinh viên đến muộn quá 15 phút có thể sẽ được yêu cầu đặt lịch hẹn mới.

Hệ thống sửa đổi nhằm mục đích làm cho quy trình trở nên hiệu quả hơn. Thêm vào đó (49), nhân viên sẽ theo dõi các xu hướng đặt lịch trong những tuần đầu tiên. Thông tin này sẽ được sử dụng để nhận diện các vấn đề phát sinh và thực hiện các điều chỉnh nếu (50) thấy cần thiết.`;

// ==========================================
// 50 STANDARDIZED QUESTIONS
// ==========================================

export const HUIT_TOEIC_DE_03_QUESTIONS: Question[] = [
  // --- PART I: GRAMMAR & STRUCTURES (1-15) ---
  {
    id: 'huit-d3nc-q01',
    type: 'grammar',
    questionText: 'Question 1. The admissions office will contact applicants as soon as the final list _____.',
    options: [
      { id: 'A', text: 'is confirmed' },
      { id: 'B', text: 'will be confirmed' },
      { id: 'C', text: 'has confirming' },
      { id: 'D', text: 'was confirmed' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Trong mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng liên từ "as soon as", ta dùng thì Hiện tại đơn thể bị động (is confirmed) để diễn đạt một sự việc trong tương lai khi mệnh đề chính chia tương lai đơn (will contact).',
    translation: 'Phòng tuyển sinh sẽ liên hệ với các ứng viên ngay sau khi danh sách cuối cùng được xác nhận.',
    topicTag: 'Mệnh đề trạng ngữ chỉ thời gian',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q02',
    type: 'grammar',
    questionText: 'Question 2. _____ the application form carefully, Mai noticed that she had entered the wrong student number.',
    options: [
      { id: 'A', text: 'Read' },
      { id: 'B', text: 'Reading' },
      { id: 'C', text: 'Having read' },
      { id: 'D', text: 'To read' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Dùng phân từ hoàn thành "Having read" (Having + V3/ed) để rút gọn mệnh đề trạng ngữ khi hành động đọc biểu mẫu đã hoàn thành trước hành động nhận ra (noticed) trong quá khứ.',
    translation: 'Sau khi đã đọc kỹ biểu mẫu đăng ký, Mai nhận ra rằng cô ấy đã nhập sai mã số sinh viên.',
    topicTag: 'Phân từ hoàn thành (Having + V3)',
    difficulty: 'hard',
    cefrLevel: 'B2',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q03',
    type: 'grammar',
    questionText: 'Question 3. The students were asked whether they _____ the online orientation before arriving on campus.',
    options: [
      { id: 'A', text: 'complete' },
      { id: 'B', text: 'had completed' },
      { id: 'C', text: 'have completed' },
      { id: 'D', text: 'will complete' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Trong câu tường thuật gián tiếp ở quá khứ (were asked) và sự việc hoàn thành buổi định hướng diễn ra trước một mốc quá khứ khác (before arriving), ta lùi thì về Quá khứ hoàn thành (had completed).',
    translation: 'Các sinh viên được hỏi liệu họ đã hoàn thành buổi định hướng trực tuyến trước khi đến trường hay chưa.',
    topicTag: 'Thì quá khứ hoàn thành trong câu gián tiếp',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q04',
    type: 'grammar',
    questionText: 'Question 4. It is essential that every applicant _____ a valid identification document.',
    options: [
      { id: 'A', text: 'brings' },
      { id: 'B', text: 'bring' },
      { id: 'C', text: 'brought' },
      { id: 'D', text: 'will bring' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cấu trúc giả định thức (Subjunctive Mood): "It is essential that + S + (should) + V nguyên thể". Mặc dù chủ ngữ là "every applicant", động từ vẫn giữ nguyên mẫu không chia "bring".',
    translation: 'Điều thiết yếu là mọi ứng viên phải xuất trình một giấy tờ tùy thân hợp lệ.',
    topicTag: 'Thể giả định (Subjunctive Mood)',
    difficulty: 'hard',
    cefrLevel: 'B2',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q05',
    type: 'grammar',
    questionText: 'Question 5. The new registration system is considerably _____ than the previous one.',
    options: [
      { id: 'A', text: 'efficient' },
      { id: 'B', text: 'more efficient' },
      { id: 'C', text: 'most efficient' },
      { id: 'D', text: 'efficiently' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: So sánh hơn của tính từ dài "efficient" là "more efficient than". Trạng từ "considerably" (đáng kể) đứng trước để bổ nghĩa nhấn mạnh mức độ chênh lệch.',
    translation: 'Hệ thống đăng ký mới hiệu quả hơn đáng kể so với hệ thống trước đó.',
    topicTag: 'So sánh hơn của tính từ',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q06',
    type: 'grammar',
    questionText: 'Question 6. Not until the supervisor checked the records _____ that several entries were missing.',
    options: [
      { id: 'A', text: 'she realised' },
      { id: 'B', text: 'did she realise' },
      { id: 'C', text: 'she had realised' },
      { id: 'D', text: 'has she realised' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cấu trúc đảo ngữ: "Not until + Clause/Time + Trợ động từ + S + V". Do ngữ cảnh ở quá khứ (checked), mệnh đề chính đảo trợ động từ "did she realise".',
    translation: 'Mãi cho đến khi người giám sát kiểm tra lại hồ sơ thì cô ấy mới nhận ra rằng một số mục đã bị thiếu.',
    topicTag: 'Đảo ngữ với Not until',
    difficulty: 'hard',
    cefrLevel: 'B2',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q07',
    type: 'grammar',
    questionText: 'Question 7. The students _____ near the registration desk were waiting for their appointment numbers.',
    options: [
      { id: 'A', text: 'stand' },
      { id: 'B', text: 'stood' },
      { id: 'C', text: 'standing' },
      { id: 'D', text: 'to stand' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Rút gọn mệnh đề quan hệ dạng chủ động (The students who were standing near...) sử dụng hiện tại phân từ (V-ing): "standing".',
    translation: 'Những sinh viên đang đứng gần bàn đăng ký đang chờ số thứ tự lịch hẹn của mình.',
    topicTag: 'Rút gọn mệnh đề quan hệ chủ động',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q08',
    type: 'grammar',
    questionText: 'Question 8. If the university had announced the change earlier, many students _____ confused now.',
    options: [
      { id: 'A', text: 'would not be' },
      { id: 'B', text: 'will not be' },
      { id: 'C', text: 'would not have been' },
      { id: 'D', text: 'were not' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Câu điều kiện hỗn hợp (Mixed Conditional): Giả định trái ngược quá khứ ở mệnh đề If (had announced) nhưng để lại kết quả trái ngược hiện tại ở mệnh đề chính (có trạng từ "now") -> dùng "would not be".',
    translation: 'Nếu nhà trường thông báo sự thay đổi sớm hơn, nhiều sinh viên giờ này đã không bị bối rối.',
    topicTag: 'Câu điều kiện hỗn hợp (Mixed Conditionals)',
    difficulty: 'hard',
    cefrLevel: 'B2',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q09',
    type: 'grammar',
    questionText: 'Question 9. The language centre offers several workshops, most of _____ are free for first-year students.',
    options: [
      { id: 'A', text: 'that' },
      { id: 'B', text: 'which' },
      { id: 'C', text: 'them' },
      { id: 'D', text: 'what' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Trong mệnh đề quan hệ không xác định (có dấu phẩy) chỉ sự vật/sự việc (several workshops), đi kèm lượng từ "most of", ta bắt buộc dùng đại từ quan hệ "which".',
    translation: 'Trung tâm ngoại ngữ tổ chức nhiều buổi hội thảo, phần lớn trong số đó đều miễn phí cho sinh viên năm nhất.',
    topicTag: 'Mệnh đề quan hệ với lượng từ (most of which)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q10',
    type: 'grammar',
    questionText: 'Question 10. We regret _____ you that the afternoon session has been cancelled.',
    options: [
      { id: 'A', text: 'inform' },
      { id: 'B', text: 'informing' },
      { id: 'C', text: 'to inform' },
      { id: 'D', text: 'informed' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cấu trúc "regret to inform someone" dùng khi lấy làm tiếc phải thông báo một tin tức không vui ngay sau đó. Cấu trúc "regret + V-ing" dùng khi hối hận vì một việc đã làm trong quá khứ.',
    translation: 'Chúng tôi rất tiếc phải thông báo với bạn rằng buổi học chiều nay đã bị hủy.',
    topicTag: 'Động từ theo sau bởi to-V / V-ing (Regret)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q11',
    type: 'grammar',
    questionText: 'Question 11. The report needs _____ before it is submitted to the academic committee.',
    options: [
      { id: 'A', text: 'revise' },
      { id: 'B', text: 'revising' },
      { id: 'C', text: 'to revise' },
      { id: 'D', text: 'to be revised' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Khi chủ ngữ là danh từ chỉ vật (The report), cấu trúc bị động của "need" là "need to be + V3/ed" (to be revised) hoặc "need + V-ing". Ở đây đáp án chuẩn xác và trang trọng nhất là "to be revised".',
    translation: 'Bản báo cáo cần được chỉnh sửa trước khi nộp lên hội đồng học thuật.',
    topicTag: 'Cấu trúc bị động với động từ Need',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q12',
    type: 'grammar',
    questionText: 'Question 12. By the time the technician arrives, the system _____ offline for nearly three hours.',
    options: [
      { id: 'A', text: 'will be' },
      { id: 'B', text: 'will have been' },
      { id: 'C', text: 'has been' },
      { id: 'D', text: 'had been' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cấu trúc "By the time + Hiện tại đơn (arrives), Tương lai hoàn thành (will have been)". Diễn tả một trạng thái kéo dài liên tục đến một mốc thời điểm trong tương lai.',
    translation: 'Vào thời điểm kỹ thuật viên đến nơi, hệ thống sẽ đã bị ngoại tuyến trong gần ba giờ đồng hồ.',
    topicTag: 'Thì tương lai hoàn thành',
    difficulty: 'hard',
    cefrLevel: 'B2',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q13',
    type: 'grammar',
    questionText: 'Question 13. Students are prohibited _____ their phones during the examination.',
    options: [
      { id: 'A', text: 'using' },
      { id: 'B', text: 'to use' },
      { id: 'C', text: 'use' },
      { id: 'D', text: 'used' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cấu trúc bị động "be prohibited to do something" (hoặc prohibited from doing). Phương án "to use" là dạng thức ngữ pháp chuẩn xác trong câu.',
    translation: 'Sinh viên bị cấm sử dụng điện thoại trong suốt thời gian diễn ra kỳ thi.',
    topicTag: 'Cấu trúc động từ nguyên mẫu sau phân từ bị động',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q14',
    type: 'grammar',
    questionText: 'Question 14. The lecturer spoke slowly enough for all participants _____ the instructions.',
    options: [
      { id: 'A', text: 'understand' },
      { id: 'B', text: 'understanding' },
      { id: 'C', text: 'to understand' },
      { id: 'D', text: 'understood' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cấu trúc: "adj/adv + enough + (for O) + to-V": "slowly enough for all participants to understand".',
    translation: 'Giảng viên đã nói đủ chậm để tất cả người tham gia đều có thể hiểu được hướng dẫn.',
    topicTag: 'Cấu trúc với Enough',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q15',
    type: 'grammar',
    questionText: 'Question 15. _____ the limited number of seats, applicants are encouraged to register early.',
    options: [
      { id: 'A', text: 'Because' },
      { id: 'B', text: 'Despite' },
      { id: 'C', text: 'Because of' },
      { id: 'D', text: 'Although' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Theo sau là một cụm danh từ "the limited number of seats" và mang ý nghĩa nguyên nhân - kết quả nên dùng giới từ "Because of".',
    translation: 'Bởi vì số lượng chỗ ngồi có hạn, các ứng viên được khuyến khích đăng ký sớm.',
    topicTag: 'Liên từ và giới từ chỉ nguyên nhân',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'grammar',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },

  // --- PART II: VOCABULARY (16-30) ---
  {
    id: 'huit-d3nc-q16',
    type: 'vocabulary',
    questionText: 'Question 16. The university plans to take measures to _____ unnecessary delays during registration.',
    options: [
      { id: 'A', text: 'prevent', translation: 'ngăn chặn / phòng ngừa' },
      { id: 'B', text: 'preserve', translation: 'bảo tồn / gìn giữ' },
      { id: 'C', text: 'predict', translation: 'dự đoán / tiên đoán' },
      { id: 'D', text: 'persuade', translation: 'thuyết phục' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "prevent delays" có nghĩa là ngăn ngừa, hạn chế sự chậm trễ. preserve (bảo tồn), predict (dự đoán), persuade (thuyết phục).',
    translation: 'Trường đại học dự kiến thực hiện các biện pháp nhằm ngăn ngừa sự chậm trễ không đáng có trong quá trình đăng ký.',
    topicTag: 'Từ vựng ngữ cảnh',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q17',
    type: 'vocabulary',
    questionText: 'Question 17. Students should _____ themselves with the examination rules before test day.',
    options: [
      { id: 'A', text: 'familiarize', translation: 'làm quen / tìm hiểu cho quen' },
      { id: 'B', text: 'fascinate', translation: 'lôi cuốn / làm say mê' },
      { id: 'C', text: 'formalize', translation: 'chính thức hóa / chuẩn hóa' },
      { id: 'D', text: 'fulfil', translation: 'hoàn thành / đáp ứng' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cụm từ cố định "familiarize oneself with something" nghĩa là tìm hiểu kỹ để quen thuộc và nắm rõ điều gì.',
    translation: 'Sinh viên nên làm quen và nắm vững các quy chế thi trước ngày thi.',
    topicTag: 'Cụm từ cố định (Collocation)',
    difficulty: 'medium',
    cefrLevel: 'B2',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q18',
    type: 'vocabulary',
    questionText: 'Question 18. The workshop provides practical advice that students can _____ immediately.',
    options: [
      { id: 'A', text: 'apply', translation: 'áp dụng' },
      { id: 'B', text: 'approve', translation: 'phê chuẩn / tán thành' },
      { id: 'C', text: 'appoint', translation: 'bổ nhiệm' },
      { id: 'D', text: 'arise', translation: 'phát sinh / nảy sinh' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "apply advice/knowledge" nghĩa là áp dụng lời khuyên vào thực tế. approve (phê chuẩn), appoint (bổ nhiệm), arise (phát sinh).',
    translation: 'Buổi hội thảo mang lại những lời khuyên thực tế mà sinh viên có thể áp dụng được ngay lập tức.',
    topicTag: 'Từ vựng ngữ cảnh',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q19',
    type: 'vocabulary',
    questionText: 'Question 19. Please report any technical _____ to the support desk before the examination begins.',
    options: [
      { id: 'A', text: 'issue', translation: 'sự cố / vấn đề' },
      { id: 'B', text: 'occasion', translation: 'dịp / cơ hội' },
      { id: 'C', text: 'outcome', translation: 'kết quả' },
      { id: 'D', text: 'approach', translation: 'phương pháp tiếp cận' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "technical issue" (hoặc technical problem) là sự cố kỹ thuật. occasion (dịp), outcome (kết quả), approach (phương pháp tiếp cận).',
    translation: 'Vui lòng thông báo bất kỳ sự cố kỹ thuật nào cho bàn hỗ trợ trước khi kỳ thi bắt đầu.',
    topicTag: 'Từ vựng - Collocation',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q20',
    type: 'vocabulary',
    questionText: 'Question 20. Applicants must provide information that is _____ and complete.',
    options: [
      { id: 'A', text: 'valid', translation: 'hợp lệ / có hiệu lực' },
      { id: 'B', text: 'vacant', translation: 'trống / bỏ không' },
      { id: 'C', text: 'visible', translation: 'có thể nhìn thấy' },
      { id: 'D', text: 'vital', translation: 'thiết yếu / sống còn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "valid and complete" nghĩa là hợp lệ và đầy đủ. vacant (trống/bỏ không), visible (có thể nhìn thấy), vital (sống còn/rất quan trọng).',
    translation: 'Các ứng viên phải cung cấp thông tin hợp lệ và đầy đủ.',
    topicTag: 'Từ vựng ngữ cảnh',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q21',
    type: 'vocabulary',
    questionText: 'Question 21. Students are advised to _____ a realistic study schedule before the semester becomes busy.',
    options: [
      { id: 'A', text: 'draw up', translation: 'lập ra / soạn thảo' },
      { id: 'B', text: 'turn down', translation: 'từ chối / vặn nhỏ' },
      { id: 'C', text: 'put away', translation: 'cất đi / dọn dẹp' },
      { id: 'D', text: 'bring about', translation: 'gây ra / mang lại' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cụm động từ "draw up a schedule/plan" nghĩa là vạch ra, lập nên một thời gian biểu hoặc kế hoạch. turn down (từ chối), put away (cất đi), bring about (gây ra).',
    translation: 'Sinh viên được khuyên nên lập một thời gian biểu học tập thực tế trước khi học kỳ trở nên bận rộn.',
    topicTag: 'Cụm động từ (Phrasal Verbs)',
    difficulty: 'hard',
    cefrLevel: 'B2',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q22',
    type: 'vocabulary',
    questionText: 'Question 22. Strong passwords help _____ unauthorized access to student accounts.',
    options: [
      { id: 'A', text: 'prevent', translation: 'ngăn chặn / phòng ngừa' },
      { id: 'B', text: 'promote', translation: 'thúc đẩy / khuyến khích' },
      { id: 'C', text: 'permit', translation: 'cho phép' },
      { id: 'D', text: 'produce', translation: 'sản xuất / tạo ra' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "prevent unauthorized access" nghĩa là ngăn chặn việc truy cập trái phép. promote (quảng bá/thúc đẩy), permit (cho phép), produce (sản xuất).',
    translation: 'Mật khẩu mạnh giúp ngăn chặn việc truy cập trái phép vào tài khoản sinh viên.',
    topicTag: 'Từ vựng ngữ cảnh',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q23',
    type: 'vocabulary',
    questionText: 'Question 23. Please submit your request well in _____ if you need a special examination arrangement.',
    options: [
      { id: 'A', text: 'advance', translation: 'trước / sớm hơn' },
      { id: 'B', text: 'addition', translation: 'phần bổ sung / thêm vào' },
      { id: 'C', text: 'absence', translation: 'sự vắng mặt' },
      { id: 'D', text: 'accuracy', translation: 'sự chính xác' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cụm từ cố định "in advance" (hoặc well in advance) nghĩa là từ trước, sớm hơn một khoảng thời gian.',
    translation: 'Vui lòng nộp yêu cầu của bạn trước một khoảng thời gian nếu bạn cần sự sắp xếp phòng thi đặc biệt.',
    topicTag: 'Thành ngữ và Cụm từ cố định',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q24',
    type: 'vocabulary',
    questionText: 'Question 24. The course is designed to _____ students with the skills needed for academic communication.',
    options: [
      { id: 'A', text: 'equip', translation: 'trang bị' },
      { id: 'B', text: 'enclose', translation: 'đính kèm' },
      { id: 'C', text: 'enable', translation: 'cho phép / tạo điều kiện' },
      { id: 'D', text: 'encounter', translation: 'bắt gặp / đối đầu' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc "equip somebody with something" nghĩa là trang bị cho ai những kỹ năng hoặc hành trang cần thiết. enclose (đính kèm), encounter (bắt gặp).',
    translation: 'Khóa học được thiết kế nhằm trang bị cho sinh viên những kỹ năng cần thiết cho việc giao tiếp học thuật.',
    topicTag: 'Giới từ đi kèm động từ (equip with)',
    difficulty: 'medium',
    cefrLevel: 'B2',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q25',
    type: 'vocabulary',
    questionText: 'Question 25. The accuracy of the report depends _____ the quality of the data collected.',
    options: [
      { id: 'A', text: 'on', translation: 'vào (phụ thuộc vào)' },
      { id: 'B', text: 'at', translation: 'tại / ở' },
      { id: 'C', text: 'for', translation: 'cho / vì' },
      { id: 'D', text: 'with', translation: 'với' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cụm động từ "depend on" nghĩa là phụ thuộc vào, căn cứ vào.',
    translation: 'Độ chính xác của bản báo cáo phụ thuộc vào chất lượng của dữ liệu được thu thập.',
    topicTag: 'Giới từ theo sau động từ (depend on)',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q26',
    type: 'vocabulary',
    questionText: 'Question 26. The information desk receives a large number of student _____.',
    options: [
      { id: 'A', text: 'inquiries', translation: 'các câu hỏi / thắc mắc' },
      { id: 'B', text: 'inventions', translation: 'các phát minh' },
      { id: 'C', text: 'incomes', translation: 'các khoản thu nhập' },
      { id: 'D', text: 'invitations', translation: 'các lời mời' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "student inquiries" nghĩa là các thắc mắc, câu hỏi cần giải đáp của sinh viên. inventions (phát minh), incomes (thu nhập), invitations (lời mời).',
    translation: 'Bàn thông tin tiếp nhận một số lượng lớn các thắc mắc của sinh viên.',
    topicTag: 'Từ vựng ngữ cảnh',
    difficulty: 'medium',
    cefrLevel: 'B2',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q27',
    type: 'vocabulary',
    questionText: 'Question 27. Before submitting the form, students should _____ the instructions once more.',
    options: [
      { id: 'A', text: 'review', translation: 'rà soát / xem lại' },
      { id: 'B', text: 'revise', translation: 'ôn tập / sửa đổi' },
      { id: 'C', text: 'recover', translation: 'hồi phục / khôi phục' },
      { id: 'D', text: 'reveal', translation: 'tiết lộ / bộc lộ' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "review instructions" nghĩa là xem xét lại, rà soát lại hướng dẫn. revise (ôn thi/sửa lại văn bản), recover (phục hồi), reveal (tiết lộ).',
    translation: 'Trước khi nộp biểu mẫu, sinh viên nên rà soát lại các hướng dẫn thêm một lần nữa.',
    topicTag: 'Từ vựng ngữ cảnh',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q28',
    type: 'vocabulary',
    questionText: 'Question 28. The lecturer gave a brief _____ of the examination procedure.',
    options: [
      { id: 'A', text: 'explanation', translation: 'lời giải thích' },
      { id: 'B', text: 'exploration', translation: 'sự khám phá / thám hiểm' },
      { id: 'C', text: 'expectation', translation: 'sự mong đợi / kỳ vọng' },
      { id: 'D', text: 'extension', translation: 'sự gia hạn / mở rộng' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "give a brief explanation of" nghĩa là đưa ra một lời giải thích ngắn gọn về điều gì. exploration (sự khám phá), expectation (sự mong đợi), extension (sự mở rộng/gia hạn).',
    translation: 'Giảng viên đã đưa ra một lời giải thích ngắn gọn về quy trình của kỳ thi.',
    topicTag: 'Cụm danh từ (Collocation)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q29',
    type: 'vocabulary',
    questionText: 'Question 29. Early registration is strongly _____ because the number of places is limited.',
    options: [
      { id: 'A', text: 'recommended', translation: 'được khuyến nghị / khuyên dùng' },
      { id: 'B', text: 'recovered', translation: 'được hồi phục' },
      { id: 'C', text: 'repeated', translation: 'được lặp lại' },
      { id: 'D', text: 'replaced', translation: 'bị thay thế' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cụm từ "strongly recommended" nghĩa là được khuyến nghị hết sức mạnh mẽ. recovered (được hồi phục), repeated (được nhắc lại), replaced (bị thay thế).',
    translation: 'Việc đăng ký sớm được khuyến nghị mạnh mẽ vì số lượng chỗ ngồi có giới hạn.',
    topicTag: 'Từ vựng - Collocation',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },
  {
    id: 'huit-d3nc-q30',
    type: 'vocabulary',
    questionText: 'Question 30. Students are expected to _____ responsibility for checking their examination details.',
    options: [
      { id: 'A', text: 'take', translation: 'nhận / chịu (chịu trách nhiệm)' },
      { id: 'B', text: 'make', translation: 'làm / tạo ra' },
      { id: 'C', text: 'do', translation: 'làm / thực hiện' },
      { id: 'D', text: 'give', translation: 'cho / tặng' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cụm từ cố định "take responsibility for something" nghĩa là chịu trách nhiệm cho điều gì.',
    translation: 'Sinh viên được mong đợi tự chịu trách nhiệm về việc kiểm tra thông tin chi tiết kỳ thi của mình.',
    topicTag: 'Cụm từ cố định (take responsibility)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'vocabulary',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 }
  },

  // --- PART III: READING COMPREHENSION (31-45) ---
  {
    id: 'huit-d3nc-q31',
    type: 'reading_comprehension',
    questionText: 'Question 31. What is the main purpose of the notice?',
    options: [
      { id: 'A', text: 'To announce updated rules and procedures for using computer rooms' },
      { id: 'B', text: 'To advertise computer training courses for new students' },
      { id: 'C', text: 'To notify students of a change in room rental fees' },
      { id: 'D', text: 'To recruit student volunteers for the language centre' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Bản thông báo nêu rõ mục đích cập nhật thời gian biểu, phân loại phòng (phòng A tự học cá nhân, phòng B làm việc nhóm) và quy định đặt chỗ trực tuyến sau 4:00 chiều.',
    translation: 'Mục đích chính của bản thông báo là gì?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'reading_inference',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_NOTICE_COMPUTER_ROOMS,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_ROOMS_TRANS
  },
  {
    id: 'huit-d3nc-q32',
    type: 'reading_comprehension',
    questionText: 'Question 32. When is an online reservation required for Room A?',
    options: [
      { id: 'A', text: 'Before 4:00 p.m. every day' },
      { id: 'B', text: 'After 4:00 p.m. on weekdays' },
      { id: 'C', text: 'Only on Saturday and Sunday mornings' },
      { id: 'D', text: 'At all times during opening hours' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 2 nêu rõ: "After 4:00 p.m., however, an online reservation is required for Computer Room A".',
    translation: 'Khi nào thì việc đặt chỗ trực tuyến là bắt buộc đối với Phòng A?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_NOTICE_COMPUTER_ROOMS,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_ROOMS_TRANS
  },
  {
    id: 'huit-d3nc-q33',
    type: 'reading_comprehension',
    questionText: 'Question 33. What type of activity is Room B intended to support?',
    options: [
      { id: 'A', text: 'Silent individual examination testing' },
      { id: 'B', text: 'Collaborative group study and activities' },
      { id: 'C', text: 'Hardware repair and maintenance' },
      { id: 'D', text: 'Staff administrative meetings' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 1 nêu: "Group activities should be moved to Computer Room B, which has six larger tables and a shared display screen".',
    translation: 'Phòng B được dự định để hỗ trợ loại hình hoạt động nào?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_NOTICE_COMPUTER_ROOMS,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_ROOMS_TRANS
  },
  {
    id: 'huit-d3nc-q34',
    type: 'reading_comprehension',
    questionText: 'Question 34. What may happen if a student does not arrive within 15 minutes of their reservation?',
    options: [
      { id: 'A', text: 'They may lose their reserved computer' },
      { id: 'B', text: 'They must pay a late fee to the assistant' },
      { id: 'C', text: 'Their student ID card will be suspended immediately' },
      { id: 'D', text: 'They will be required to clean the room' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đoạn 3 nêu: "Students who reserve a computer but do not arrive within 15 minutes may lose their reservation".',
    translation: 'Điều gì có thể xảy ra nếu sinh viên không đến trong vòng 15 phút kể từ giờ đã đặt?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_NOTICE_COMPUTER_ROOMS,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_ROOMS_TRANS
  },
  {
    id: 'huit-d3nc-q35',
    type: 'reading_comprehension',
    questionText: 'Question 35. What is the maximum duration for a single computer reservation session in Room A?',
    options: [
      { id: 'A', text: '60 minutes' },
      { id: 'B', text: '90 minutes' },
      { id: 'C', text: '120 minutes' },
      { id: 'D', text: '180 minutes' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 2 nêu: "...and are limited to one 90-minute session per student per day".',
    translation: 'Thời lượng tối đa cho một lượt đặt máy tính tại Phòng A là bao lâu?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_NOTICE_COMPUTER_ROOMS,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_ROOMS_TRANS
  },
  {
    id: 'huit-d3nc-q36',
    type: 'reading_comprehension',
    questionText: 'Question 36. Why was the workshop room changed?',
    options: [
      { id: 'A', text: 'Because of maintenance work in Building D' },
      { id: 'B', text: 'Because Room D204 was too small for all participants' },
      { id: 'C', text: 'Because the speaker requested a different building' },
      { id: 'D', text: 'Because Saturday classes were cancelled' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Thư điện tử bắt đầu bằng lý do: "Due to maintenance work in Building D, Saturday\'s workshop will no longer be held in Room D204".',
    translation: 'Tại sao phòng tổ chức hội thảo lại bị thay đổi?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_EMAIL_CHANGE_OF_ROOM,
    passageTranslation: PASSAGE_EMAIL_CHANGE_OF_ROOM_TRANS
  },
  {
    id: 'huit-d3nc-q37',
    type: 'reading_comprehension',
    questionText: 'Question 37. What remains unchanged about the workshop?',
    options: [
      { id: 'A', text: 'The room location and seating arrangement' },
      { id: 'B', text: 'The workshop content, duration, and starting time' },
      { id: 'C', text: 'The maximum number of attendees permitted' },
      { id: 'D', text: 'The downloadable workshop handout version' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 1 & 2 nêu: "beginning at the originally scheduled time of 8:30 a.m. No change has been made to the workshop content or duration".',
    translation: 'Điều gì về buổi hội thảo vẫn được giữ nguyên không thay đổi?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_EMAIL_CHANGE_OF_ROOM,
    passageTranslation: PASSAGE_EMAIL_CHANGE_OF_ROOM_TRANS
  },
  {
    id: 'huit-d3nc-q38',
    type: 'reading_comprehension',
    questionText: 'Question 38. Why are participants asked to bring only essential materials?',
    options: [
      { id: 'A', text: 'Because the new room has less available space' },
      { id: 'B', text: 'Because staff will distribute laptops to everyone' },
      { id: 'C', text: 'Because personal items must be checked at the door' },
      { id: 'D', text: 'Because the workshop will finish early' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đoạn 2 nêu: "However, because Room A312 is smaller, participants are asked to bring only essential materials".',
    translation: 'Tại sao người tham dự được yêu cầu chỉ mang theo các tài liệu thiết yếu?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_EMAIL_CHANGE_OF_ROOM,
    passageTranslation: PASSAGE_EMAIL_CHANGE_OF_ROOM_TRANS
  },
  {
    id: 'huit-d3nc-q39',
    type: 'reading_comprehension',
    questionText: 'Question 39. What should participants who already downloaded the handout do?',
    options: [
      { id: 'A', text: 'Print an extra copy for their instructor' },
      { id: 'B', text: 'Email a signed confirmation to the office' },
      { id: 'C', text: 'Delete their file and download a replacement' },
      { id: 'D', text: 'Use the electronic copy they already possess' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Câu cuối nêu: "If you have already downloaded the workshop handout, there is no need to download it again" -> tiếp tục sử dụng bản đã tải.',
    translation: 'Những người tham gia đã tải tài liệu phát tay nên làm gì?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_EMAIL_CHANGE_OF_ROOM,
    passageTranslation: PASSAGE_EMAIL_CHANGE_OF_ROOM_TRANS
  },
  {
    id: 'huit-d3nc-q40',
    type: 'reading_comprehension',
    questionText: 'Question 40. What are participants advised to do regarding their belongings during breaks?',
    options: [
      { id: 'A', text: 'Take their belongings with them rather than leaving them in the room' },
      { id: 'B', text: 'Leave their bags with the workshop assistant in Room A312' },
      { id: 'C', text: 'Lock their possessions inside the Building D lockers' },
      { id: 'D', text: 'Stay inside the room until the presentation resumes' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đoạn 2 nêu: "and to avoid leaving personal belongings in the room during breaks" -> mang theo đồ dùng bên mình thay vì để lại trong phòng.',
    translation: 'Người tham dự được khuyên nên làm gì đối với đồ đạc cá nhân trong giờ giải lao?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)',
    difficulty: 'medium',
    cefrLevel: 'B2',
    primarySkill: 'reading_inference',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_EMAIL_CHANGE_OF_ROOM,
    passageTranslation: PASSAGE_EMAIL_CHANGE_OF_ROOM_TRANS
  },
  {
    id: 'huit-d3nc-q41',
    type: 'reading_comprehension',
    questionText: 'Question 41. What problem does the passage identify regarding language learners?',
    options: [
      { id: 'A', text: 'They often confuse recognizing words with being able to recall them actively' },
      { id: 'B', text: 'They rarely review grammar rules after completing workbook exercises' },
      { id: 'C', text: 'They spend too much time translating literature instead of speaking' },
      { id: 'D', text: 'They avoid taking timed practice examinations before final tests' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đoạn 1 nêu: "A common problem in language learning is that students confuse recognition with actual recall".',
    translation: 'Đoạn văn chỉ ra vấn đề gì đối với người học ngôn ngữ?',
    topicTag: 'Đọc hiểu - Ý chính (Main Idea)',
    difficulty: 'medium',
    cefrLevel: 'B2',
    primarySkill: 'reading_inference',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS
  },
  {
    id: 'huit-d3nc-q42',
    type: 'reading_comprehension',
    questionText: 'Question 42. What does retrieval practice involve according to the text?',
    options: [
      { id: 'A', text: 'Copying target sentences repeatedly from the textbook' },
      { id: 'B', text: 'Trying to produce answers from memory before looking at solutions' },
      { id: 'C', text: 'Reading through bilingual glossaries before doing exercises' },
      { id: 'D', text: 'Memorizing answer keys provided by the instructor' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 2 nêu: "One way to address this gap is to practise retrieval without looking at the answer first. For vocabulary, students can cover the definitions and try to produce them from memory".',
    translation: 'Phương pháp luyện tập gợi nhớ (retrieval practice) bao gồm những gì theo văn bản?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS
  },
  {
    id: 'huit-d3nc-q43',
    type: 'reading_comprehension',
    questionText: 'Question 43. Why can mistakes made during initial retrieval practice be useful?',
    options: [
      { id: 'A', text: 'They indicate that the grammatical topic is too advanced to learn' },
      { id: 'B', text: 'They guarantee that the next attempt will automatically be correct' },
      { id: 'C', text: 'They provide diagnostic information about areas requiring further revision' },
      { id: 'D', text: 'They allow students to skip related practice units completely' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Đoạn 2 nêu: "The initial attempt may contain mistakes, but analysing those mistakes provides useful information about what needs further practice".',
    translation: 'Tại sao các lỗi sai trong lần luyện tập gợi nhớ đầu tiên lại có thể hữu ích?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'medium',
    cefrLevel: 'B2',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS
  },
  {
    id: 'huit-d3nc-q44',
    type: 'reading_comprehension',
    questionText: 'Question 44. What is one recommended benefit of spacing review sessions over several days?',
    options: [
      { id: 'A', text: 'It allows learners to complete grammar units without making mistakes' },
      { id: 'B', text: 'It shortens the overall time needed to memorize vocabulary definitions' },
      { id: 'C', text: 'It eliminates the necessity of taking notes during class lectures' },
      { id: 'D', text: 'It promotes more effective learning than cramming everything into one session' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Đoạn 3 nêu: "It is also useful to space review sessions over several days rather than completing all revision in one sitting".',
    translation: 'Một lợi ích được khuyến nghị của việc phân bổ các buổi ôn tập ngắt quãng qua nhiều ngày là gì?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)',
    difficulty: 'medium',
    cefrLevel: 'B2',
    primarySkill: 'reading_inference',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS
  },
  {
    id: 'huit-d3nc-q45',
    type: 'reading_comprehension',
    questionText: 'Question 45. According to the author, how can students practise grammar using the retrieval approach?',
    options: [
      { id: 'A', text: 'By translating sample sentences into their native language' },
      { id: 'B', text: 'By writing an original sentence before checking a reference example' },
      { id: 'C', text: 'By underlining all auxiliary verbs in a published article' },
      { id: 'D', text: 'By memorizing complete grammatical rules without writing' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 2 nêu: "For grammar, they can write a sentence using a target structure before checking an example".',
    translation: 'Theo tác giả, sinh viên có thể luyện tập ngữ pháp bằng phương pháp gợi nhớ như thế nào?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    difficulty: 'medium',
    cefrLevel: 'B2',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS
  },

  // --- PART IV: CLOZE READING (46-50) ---
  {
    id: 'huit-d3nc-q46',
    type: 'cloze_test',
    questionText: 'Question 46. Which phrase best completes blank (46) in the memo?',
    options: [
      { id: 'A', text: 'Under the revised system' },
      { id: 'B', text: 'For example' },
      { id: 'C', text: 'In contrast' },
      { id: 'D', text: 'Even though' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Under the revised system, students will first choose a service category..." (Theo hệ thống được sửa đổi, sinh viên trước tiên sẽ chọn một danh mục dịch vụ...). Cụm từ giải thích cách thức tiến hành theo thủ tục mới.',
    translation: 'Cụm từ nào phù hợp nhất để hoàn thành chỗ trống (46)?',
    topicTag: 'Liên từ và Cụm từ chuyển ý',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS
  },
  {
    id: 'huit-d3nc-q47',
    type: 'cloze_test',
    questionText: 'Question 47. Which word best completes blank (47) in the memo?',
    options: [
      { id: 'A', text: 'Unless' },
      { id: 'B', text: 'If' },
      { id: 'C', text: 'Despite' },
      { id: 'D', text: 'While' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "If they are unsure which category applies to their request, they may contact..." (Nếu các bạn không chắc chắn danh mục nào áp dụng cho yêu cầu của mình, các bạn có thể liên hệ...). Đây là mệnh đề điều kiện loại 1.',
    translation: 'Từ nào phù hợp nhất để hoàn thành chỗ trống (47)?',
    topicTag: 'Mệnh đề điều kiện (If)',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS
  },
  {
    id: 'huit-d3nc-q48',
    type: 'cloze_test',
    questionText: 'Question 48. Which transitional word best completes blank (48) in the memo?',
    options: [
      { id: 'A', text: 'Therefore' },
      { id: 'B', text: 'However' },
      { id: 'C', text: 'Similarly' },
      { id: 'D', text: 'Otherwise' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "However" (Tuy nhiên) diễn tả sự tương phản: Trung tâm yêu cầu sinh viên đến đúng giờ, TUY NHIÊN việc đến sớm không có nghĩa là sẽ tự động được phục vụ trước người có lịch hẹn sớm hơn.',
    translation: 'Từ nối nào phù hợp nhất để hoàn thành chỗ trống (48)?',
    topicTag: 'Phó từ liên kết tương phản (However)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS
  },
  {
    id: 'huit-d3nc-q49',
    type: 'cloze_test',
    questionText: 'Question 49. Which transitional phrase best completes blank (49) in the memo?',
    options: [
      { id: 'A', text: 'In addition' },
      { id: 'B', text: 'Nevertheless' },
      { id: 'C', text: 'Instead' },
      { id: 'D', text: 'Otherwise' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "In addition" (Thêm vào đó) bổ sung thông tin: Bên cạnh việc cải thiện tính hiệu quả, thêm vào đó đội ngũ nhân viên cũng sẽ theo dõi xu hướng đặt hẹn trong những tuần đầu.',
    translation: 'Cụm từ nối nào phù hợp nhất để hoàn thành chỗ trống (49)?',
    topicTag: 'Cụm từ liên kết bổ sung (In addition)',
    difficulty: 'medium',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS
  },
  {
    id: 'huit-d3nc-q50',
    type: 'cloze_test',
    questionText: 'Question 50. Which word best completes blank (50) in the memo?',
    options: [
      { id: 'A', text: 'if' },
      { id: 'B', text: 'than' },
      { id: 'C', text: 'during' },
      { id: 'D', text: 'although' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Thành ngữ rút gọn "if necessary" (nếu thấy cần thiết): "...and make adjustments if necessary".',
    translation: 'Từ nào phù hợp nhất để hoàn thành chỗ trống (50)?',
    topicTag: 'Mệnh đề rút gọn với If (if necessary)',
    difficulty: 'easy',
    cefrLevel: 'B1',
    primarySkill: 'reading_detail',
    quality: { status: 'faculty_verified' },
    source: { type: 'simulated_huit', name: 'Đề Luyện Phân Loại HUIT Đề 03 Nâng Cao', year: 2026 },
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS
  }
];

export const HUIT_TOEIC_DE_03_NANG_CAO_EXAM: ExamSet = {
  id: 'exam-huit-toeic-de-03-nang-cao',
  title: 'Đề Luyện Phân Loại Anh Văn Đầu Vào HUIT - Đề Số 03 (HUIT × TOEIC Nâng Cao)',
  description: 'Đề luyện thi phân loại Anh văn đầu vào Đại học Công Thương TP.HCM (HUIT) mã Đề số 03 gồm trọn bộ 50 câu: 15 Grammar & Structures, 15 Vocabulary và 20 Reading Comprehension phong cách TOEIC Reading Part 5/6/7 bám sát cấu trúc chuẩn hóa.',
  category: 'university',
  durationMinutes: 60,
  totalQuestions: 50,
  badge: 'HUIT ĐỀ SỐ 03',
  iconName: 'Award',
  questions: HUIT_TOEIC_DE_03_QUESTIONS
};
