import type { ExamSet, Question } from '../types/quiz';

// ==========================================
// READING PASSAGES & VIETNAMESE TRANSLATIONS
// ==========================================

const PASSAGE_NOTICE_COMPUTER_LAB = `NOTICE: COMPUTER LAB ACCESS

Beginning 1 October, access to Computer Lab 2 will require students to scan their university ID cards at the entrance. The lab will remain open from 7:30 a.m. to 8:00 p.m. Monday through Friday, but access after 6:00 p.m. will be limited to students who have made an online reservation.

Each reservation is limited to two hours. Students who finish earlier are encouraged to cancel their remaining time so that the slot can be used by someone else. Repeated failure to attend a reserved session may result in temporary suspension of booking privileges.

The new procedure is being introduced because demand for the laboratory has increased significantly during the current semester. Students who experience problems scanning their cards should contact the laboratory assistant rather than attempting to enter through another door.`;

const PASSAGE_NOTICE_COMPUTER_LAB_TRANS = `THÔNG BÁO: QUY ĐỊNH RA VÀO PHÒNG MÁY TÍNH

Bắt đầu từ ngày 1 tháng 10, việc ra vào Phòng máy tính số 2 sẽ yêu cầu sinh viên phải quét thẻ sinh viên tại lối vào. Phòng máy sẽ tiếp tục mở cửa từ 7:30 sáng đến 8:00 tối từ thứ Hai đến thứ Sáu, nhưng sau 6:00 tối chỉ sinh viên đã đặt chỗ trực tuyến mới được vào sử dụng.

Mỗi lượt đặt chỗ có thời lượng tối đa là 2 giờ. Những sinh viên hoàn thành sớm được khuyến khích hủy thời gian còn lại để chỗ trống đó có thể được người khác sử dụng. Việc nhiều lần đặt chỗ nhưng không đến có thể dẫn đến việc bị tạm đình chỉ quyền đặt lịch.

Quy trình mới này được áp dụng do nhu cầu sử dụng phòng máy tính đã tăng đáng kể trong học kỳ hiện tại. Sinh viên gặp sự cố khi quét thẻ nên liên hệ với trợ lý phòng máy thay vì cố gắng vào qua lối cửa khác.`;

const PASSAGE_EMAIL_ACADEMIC_WORKSHOP = `To: First-Year Students
Subject: Academic Skills Workshop

Dear Students,

The Academic Support Centre will hold a series of workshops on effective study strategies during the first three weeks of October. The sessions are open to all first-year students, but registration is required because each workshop has a limited number of places.

The first session, “Reading Academic Texts,” will take place on Wednesday at 2:00 p.m. in Room C105. Participants should bring a notebook and one short English article that they have recently read. The article will be used during a practical activity.

The second session will focus on vocabulary development, while the third will introduce techniques for preparing for timed tests. Students who attend all three sessions will receive a digital participation certificate. If you register but later discover that you cannot attend, please cancel your registration so that another student can take the place.`;

const PASSAGE_EMAIL_ACADEMIC_WORKSHOP_TRANS = `Gửi: Các bạn sinh viên năm nhất
Chủ đề: Chuỗi hội thảo kỹ năng học tập học thuật

Thân gửi các bạn sinh viên,

Trung tâm Hỗ trợ Học tập sẽ tổ chức một chuỗi hội thảo về các chiến lược học tập hiệu quả trong suốt 3 tuần đầu tiên của tháng 10. Các buổi hội thảo mở cửa cho tất cả sinh viên năm nhất, tuy nhiên cần phải đăng ký trước vì mỗi buổi chỉ có số lượng chỗ ngồi có hạn.

Buổi đầu tiên với chủ đề "Đọc tài liệu học thuật" sẽ diễn ra vào lúc 2:00 chiều thứ Tư tại phòng C105. Người tham gia nên mang theo sổ tay và một bài báo tiếng Anh ngắn mà các bạn đã đọc gần đây. Bài báo sẽ được sử dụng trong hoạt động thực hành.

Buổi thứ hai sẽ tập trung vào việc phát triển vốn từ vựng, trong khi buổi thứ ba sẽ giới thiệu các kỹ thuật chuẩn bị cho các bài thi có giới hạn thời gian. Sinh viên tham dự đủ cả ba buổi sẽ nhận được chứng chỉ tham gia điện tử. Nếu bạn đã đăng ký nhưng sau đó nhận thấy mình không thể tham gia, vui lòng hủy đăng ký để sinh viên khác có cơ hội nhận chỗ.`;

const PASSAGE_STUDY_STRATEGY = `When preparing for a language test, students often spend most of their time reviewing material they already know. This can create a feeling of progress without necessarily improving performance on unfamiliar questions. A more effective approach is to analyse mistakes after each practice test.

For example, a student who repeatedly chooses the wrong answer in vocabulary questions should identify whether the problem comes from limited vocabulary, confusion between similar words, or failure to understand the sentence context. Grammar mistakes should be grouped by type, such as tense, subject–verb agreement, articles, or prepositions.

Keeping a simple error log can make this process easier. The purpose is not to record every wrong answer permanently, but to identify recurring weaknesses and review them systematically. As accuracy improves, students can gradually spend more time on speed and test-taking strategies.`;

const PASSAGE_STUDY_STRATEGY_TRANS = `CHIẾN LƯỢC ÔN LUYỆN BÀI THI HIỆU QUẢ
Khi chuẩn bị cho một bài thi ngôn ngữ, sinh viên thường dành phần lớn thời gian ôn lại những kiến thức mà họ đã biết rõ. Điều này có thể tạo ra cảm giác tiến bộ ảo mà không nhất thiết cải thiện kết quả ở những dạng câu hỏi mới lạ. Một phương pháp hiệu quả hơn nhiều là phân tích kỹ các lỗi sai sau mỗi bài thi thử.

Ví dụ, một sinh viên liên tục chọn sai đáp án trong các câu hỏi từ vựng nên xác định xem vấn đề bắt nguồn từ việc vốn từ bị hạn chế, sự nhầm lẫn giữa các từ có nét nghĩa tương đồng hay do không hiểu được ngữ cảnh của câu. Các lỗi ngữ pháp cũng nên được phân loại theo từng mảng, chẳng hạn như các thì, sự hòa hợp chủ - vị, mạo từ hay giới từ.

Việc duy trì một cuốn sổ tay ghi chép lỗi sai (error log) đơn giản có thể giúp quá trình này trở nên dễ dàng hơn. Mục đích không phải là lưu lại mãi mãi mọi câu trả lời sai, mà là để nhận diện các điểm yếu lặp đi lặp lại và ôn tập chúng một cách có hệ thống. Khi độ chính xác đã được cải thiện, sinh viên có thể dần dần dành nhiều thời gian hơn cho việc rèn luyện tốc độ làm bài và các chiến thuật thi cử.`;

const PASSAGE_MEMO_APPOINTMENT = `MEMO

The Student Services Office will change its appointment procedure next month. _____(46)_____, students will need to select a service category before choosing an appointment time. This change is intended to ensure that requests are sent to the appropriate staff member.

Students are asked to check the list of services carefully before booking. _____(47)_____ a student's request is not listed, the student should contact the general information desk for assistance. Appointments can be changed online up to three hours before the scheduled time.

The office also recommends that students arrive a few minutes early. _____(48)_____, arriving early will not guarantee that a student can be seen before the scheduled appointment time. Students who arrive more than fifteen minutes late may need to make a new appointment.

The new procedure is expected to reduce unnecessary waiting. _____(49)_____, the office will review the system after the first month and make changes if problems are identified. Students will be notified _____(50)_____ any major changes are introduced.`;

const PASSAGE_MEMO_APPOINTMENT_TRANS = `THÔNG BÁO NỘI BỘ
Văn phòng Công tác Sinh viên sẽ thay đổi quy trình đặt lịch hẹn vào tháng tới. Theo quy trình mới (46), sinh viên sẽ cần chọn danh mục dịch vụ trước khi chọn thời gian hẹn. Thay đổi này nhằm đảm bảo rằng các yêu cầu được chuyển đến đúng nhân viên phụ trách phù hợp.

Sinh viên được yêu cầu kiểm tra kỹ danh sách dịch vụ trước khi đặt lịch. Nếu (47) yêu cầu của sinh viên không có trong danh sách, sinh viên nên liên hệ với bàn thông tin chung để được hỗ trợ. Các cuộc hẹn có thể được thay đổi trực tuyến trước giờ đã hẹn tối đa 3 tiếng.

Văn phòng cũng khuyến nghị sinh viên nên đến sớm vài phút. Tuy nhiên, việc đến sớm không đảm bảo rằng sinh viên sẽ được phục vụ trước giờ hẹn đã lên lịch (48). Những sinh viên đến muộn quá 15 phút có thể sẽ phải đặt lại một cuộc hẹn mới.

Quy trình mới được kỳ vọng sẽ giảm bớt sự chờ đợi không cần thiết. Dù vậy (49), văn phòng sẽ đánh giá lại hệ thống sau tháng đầu tiên và thực hiện các điều chỉnh nếu phát hiện vấn đề. Sinh viên sẽ được thông báo trước khi (50) bất kỳ thay đổi lớn nào được áp dụng.`;

export const HUIT_TOEIC_DE_02_QUESTIONS: Question[] = [
  {
    id: 'huit-d2nc-q1',
    type: 'grammar',
    questionText: 'Question 1. The academic office _____ the placement results by email once the final list _____ approved.',
    options: [
      { id: 'A', text: 'will send / is' },
      { id: 'B', text: 'sends / will be' },
      { id: 'C', text: 'sent / has been' },
      { id: 'D', text: 'has sent / was' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Future main clause + present passive in the time clause.',
    translation: 'Phòng đào tạo sẽ gửi kết quả phân loại qua email một khi danh sách cuối cùng được phê duyệt.',
    topicTag: 'Mệnh đề thời gian trong tương lai',
  },  {
    id: 'huit-d2nc-q2',
    type: 'grammar',
    questionText: 'Question 2. Students _____ their applications before the deadline are more likely to receive an early confirmation.',
    options: [
      { id: 'A', text: 'submit' },
      { id: 'B', text: 'submitting' },
      { id: 'C', text: 'submitted' },
      { id: 'D', text: 'to submit' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: A present participle phrase reduces who submit.',
    translation: 'Những sinh viên nộp đơn đăng ký trước thời hạn có nhiều khả năng nhận được xác nhận sớm hơn.',
    topicTag: 'Rút gọn mệnh đề quan hệ chủ động',
  },  {
    id: 'huit-d2nc-q3',
    type: 'grammar',
    questionText: 'Question 3. The lecturer suggested that every candidate _____ the instructions carefully before starting.',
    options: [
      { id: 'A', text: 'reads' },
      { id: 'B', text: 'read' },
      { id: 'C', text: 'reading' },
      { id: 'D', text: 'has read' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Suggest + that-clause can take the base form in formal English.',
    translation: 'Giảng viên đề nghị rằng mỗi thí sinh nên đọc kỹ hướng dẫn trước khi bắt đầu.',
    topicTag: 'Thể giả định (Subjunctive Mood)',
  },  {
    id: 'huit-d2nc-q4',
    type: 'grammar',
    questionText: 'Question 4. If I _____ the registration notice earlier, I would not have missed the deadline.',
    options: [
      { id: 'A', text: 'read' },
      { id: 'B', text: 'had read' },
      { id: 'C', text: 'would read' },
      { id: 'D', text: 'have read' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Mixed/third conditional: past unreal condition → would not have missed.',
    translation: 'Nếu hệ thống đăng ký mở sớm hơn, nhiều ứng viên đã không bị lỡ hạn nộp hồ sơ.',
    topicTag: 'Câu điều kiện loại 3',
  },  {
    id: 'huit-d2nc-q5',
    type: 'grammar',
    questionText: 'Question 5. The test centre was so crowded that several students had to wait _____ than expected.',
    options: [
      { id: 'A', text: 'long' },
      { id: 'B', text: 'longer' },
      { id: 'C', text: 'longest' },
      { id: 'D', text: 'the longer' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Comparative form after than.',
    translation: 'Phiên bản làm bài thi trực tuyến được báo cáo là có phần thử thách hơn một chút so với bản giấy.',
    topicTag: 'So sánh hơn của tính từ',
  },  {
    id: 'huit-d2nc-q6',
    type: 'grammar',
    questionText: 'Question 6. Neither the placement results nor the final timetable _____ available on the website yet.',
    options: [
      { id: 'A', text: 'is' },
      { id: 'B', text: 'are' },
      { id: 'C', text: 'have' },
      { id: 'D', text: 'were' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The nearer subject, timetable, is singular.',
    translation: 'Cả lịch thi lẫn thời khóa biểu phòng thi đều vẫn chưa được hoàn tất.',
    topicTag: 'Sự hòa hợp Chủ ngữ - Động từ',
  },  {
    id: 'huit-d2nc-q7',
    type: 'grammar',
    questionText: 'Question 7. The students _____ for more than an hour when the announcement finally appeared.',
    options: [
      { id: 'A', text: 'waited' },
      { id: 'B', text: 'have waited' },
      { id: 'C', text: 'had been waiting' },
      { id: 'D', text: 'are waiting' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Past perfect continuous for an ongoing action before a past event.',
    translation: 'Tính đến thời điểm văn phòng đóng cửa vào ngày hôm qua, các nhân viên đã liên tục giải đáp thắc mắc suốt 5 tiếng đồng hồ.',
    topicTag: 'Thì Quá khứ hoàn thành tiếp diễn',
  },  {
    id: 'huit-d2nc-q8',
    type: 'grammar',
    questionText: 'Question 8. Applicants are advised _____ a screenshot of their confirmation page.',
    options: [
      { id: 'A', text: 'keeping' },
      { id: 'B', text: 'keep' },
      { id: 'C', text: 'to keep' },
      { id: 'D', text: 'kept' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Advise + object + to-infinitive.',
    translation: 'Giám thị khuyên các thí sinh không nên dành quá nhiều thời gian cho bất kỳ câu hỏi đơn lẻ nào.',
    topicTag: 'Cấu trúc Động từ',
  },  {
    id: 'huit-d2nc-q9',
    type: 'grammar',
    questionText: 'Question 9. The classroom _____ we took the placement test was on the third floor.',
    options: [
      { id: 'A', text: 'which' },
      { id: 'B', text: 'where' },
      { id: 'C', text: 'who' },
      { id: 'D', text: 'whose' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Where refers to a place.',
    translation: 'Thư viện trường đại học là một trong số ít những nơi mà sinh viên có thể mượn các cuốn sách tham khảo chuyên khảo.',
    topicTag: 'Trạng từ quan hệ chỉ nơi chốn',
  },  {
    id: 'huit-d2nc-q10',
    type: 'grammar',
    questionText: 'Question 10. Having _____ the online form, Minh checked the information one more time.',
    options: [
      { id: 'A', text: 'complete' },
      { id: 'B', text: 'completed' },
      { id: 'C', text: 'completing' },
      { id: 'D', text: 'to complete' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Having + past participle forms a perfect participle clause.',
    translation: 'Sau khi đã hoàn thành bài thi phân loại, các thí sinh được phép rời khỏi phòng thi.',
    topicTag: 'Rút gọn phân từ hoàn thành',
  },  {
    id: 'huit-d2nc-q11',
    type: 'grammar',
    questionText: 'Question 11. The instructions were not clear enough for some students to understand them _____.',
    options: [
      { id: 'A', text: 'correct' },
      { id: 'B', text: 'correctly' },
      { id: 'C', text: 'correction' },
      { id: 'D', text: 'correctness' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Adverb modifies understand.',
    translation: 'Diễn giả giải thích quy trình một cách rõ ràng để người nghe có thể thấu hiểu hoàn toàn các chỉ dẫn.',
    topicTag: 'Vị trí Trạng từ bổ nghĩa',
  },  {
    id: 'huit-d2nc-q12',
    type: 'grammar',
    questionText: 'Question 12. Only when the technician restarted the server _____ able to access their accounts.',
    options: [
      { id: 'A', text: 'the students were' },
      { id: 'B', text: 'were the students' },
      { id: 'C', text: 'the students had' },
      { id: 'D', text: 'had the students' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Only when at the beginning triggers inversion.',
    translation: 'Chỉ khi điểm số của tất cả các thí sinh đã được xác minh xong thì phòng đào tạo mới công bố thông báo chính thức.',
    topicTag: 'Đảo ngữ với Only when',
  },  {
    id: 'huit-d2nc-q13',
    type: 'grammar',
    questionText: 'Question 13. The new placement policy is expected _____ the number of students taking remedial courses.',
    options: [
      { id: 'A', text: 'reduce' },
      { id: 'B', text: 'reducing' },
      { id: 'C', text: 'to reduce' },
      { id: 'D', text: 'reduced' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Be expected + to-infinitive.',
    translation: 'Mỗi sinh viên đã đăng ký được kỳ vọng sẽ tuân thủ các quy định của trường trong suốt kỳ thi.',
    topicTag: 'Cấu trúc Bị động với to-V',
  },  {
    id: 'huit-d2nc-q14',
    type: 'grammar',
    questionText: 'Question 14. By next Monday, the admissions team _____ all submitted applications.',
    options: [
      { id: 'A', text: 'reviews' },
      { id: 'B', text: 'reviewed' },
      { id: 'C', text: 'will have reviewed' },
      { id: 'D', text: 'has reviewed' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Future perfect by + future deadline.',
    translation: 'Tính đến tháng tới, trường đại học sẽ đã vận hành cổng tuyển sinh mới này được tròn 6 tháng.',
    topicTag: 'Thì Tương lai hoàn thành',
  },  {
    id: 'huit-d2nc-q15',
    type: 'grammar',
    questionText: 'Question 15. The candidate _____ application was incomplete was asked to contact the admissions office.',
    options: [
      { id: 'A', text: 'who' },
      { id: 'B', text: 'whom' },
      { id: 'C', text: 'whose' },
      { id: 'D', text: 'which' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Whose expresses possession: whose application.',
    translation: 'Thí sinh có hồ sơ chưa hoàn thiện đã được yêu cầu liên hệ với phòng tuyển sinh.',
    topicTag: 'Đại từ quan hệ sở hữu',
  },  {
    id: 'huit-d2nc-q16',
    type: 'vocabulary',
    questionText: 'Question 16. Students should _____ attention to the instructions before beginning the test.',
    options: [
      { id: 'A', text: 'pay' },
      { id: 'B', text: 'make' },
      { id: 'C', text: 'give' },
      { id: 'D', text: 'take' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Pay attention is the standard collocation.',
    translation: 'Thí sinh phải chú ý đến đồng hồ trong suốt thời gian làm bài thi.',
    topicTag: 'Từ vựng - Collocation',
  },  {
    id: 'huit-d2nc-q17',
    type: 'vocabulary',
    questionText: 'Question 17. The university has _____ a new procedure for requesting academic certificates online.',
    options: [
      { id: 'A', text: 'implemented' },
      { id: 'B', text: 'invented' },
      { id: 'C', text: 'impressed' },
      { id: 'D', text: 'increased' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Implement a procedure means put it into operation.',
    translation: 'Hội đồng đã quyết định triển khai quy trình đánh giá sửa đổi cho năm học tới.',
    topicTag: 'Từ vựng học thuật',
  },  {
    id: 'huit-d2nc-q18',
    type: 'vocabulary',
    questionText: 'Question 18. The deadline was extended to _____ students more time to complete the form.',
    options: [
      { id: 'A', text: 'allow' },
      { id: 'B', text: 'avoid' },
      { id: 'C', text: 'admit' },
      { id: 'D', text: 'arrange' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Allow someone time to do something.',
    translation: 'Lịch trình mới sẽ tạo điều kiện cho sinh viên có đủ thời gian chuẩn bị cho bài kiểm tra.',
    topicTag: 'Cấu trúc Động từ',
  },  {
    id: 'huit-d2nc-q19',
    type: 'vocabulary',
    questionText: 'Question 19. Please make sure that all the information on your application is _____ before you submit it.',
    options: [
      { id: 'A', text: 'accurate' },
      { id: 'B', text: 'available' },
      { id: 'C', text: 'ordinary' },
      { id: 'D', text: 'formal' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Accurate means correct and free from errors.',
    translation: 'Kết quả thi phải hoàn toàn chính xác trước khi được công bố rộng rãi.',
    topicTag: 'Từ loại - Tính từ',
  },  {
    id: 'huit-d2nc-q20',
    type: 'vocabulary',
    questionText: 'Question 20. The orientation session will _____ an overview of the placement-test process.',
    options: [
      { id: 'A', text: 'provide' },
      { id: 'B', text: 'produce' },
      { id: 'C', text: 'prevent' },
      { id: 'D', text: 'protect' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Provide an overview is the natural collocation.',
    translation: 'Chương mở đầu cung cấp một cái nhìn tổng quan toàn diện về các phương pháp giảng dạy ngôn ngữ hiện đại.',
    topicTag: 'Từ vựng - Collocation',
  },  {
    id: 'huit-d2nc-q21',
    type: 'vocabulary',
    questionText: 'Question 21. The office cannot process applications that are _____ or contain missing documents.',
    options: [
      { id: 'A', text: 'incomplete' },
      { id: 'B', text: 'independent' },
      { id: 'C', text: 'impressive' },
      { id: 'D', text: 'informal' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Incomplete forms are missing required information.',
    translation: 'Những hồ sơ đăng ký chưa hoàn chỉnh sẽ không được hội đồng tuyển sinh xử lý.',
    topicTag: 'Từ loại - Tính từ',
  },  {
    id: 'huit-d2nc-q22',
    type: 'vocabulary',
    questionText: 'Question 22. Students who fail to _____ the minimum requirement may be advised to take an additional course.',
    options: [
      { id: 'A', text: 'meet' },
      { id: 'B', text: 'reach' },
      { id: 'C', text: 'arrive' },
      { id: 'D', text: 'touch' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Meet a requirement is the standard expression.',
    translation: 'Ứng viên phải đảm bảo rằng trình độ chuyên môn của mình đáp ứng các tiêu chuẩn tuyển sinh tối thiểu.',
    topicTag: 'Từ vựng - Collocation',
  },  {
    id: 'huit-d2nc-q23',
    type: 'vocabulary',
    questionText: 'Question 23. The announcement was posted on the website to _____ students of the change.',
    options: [
      { id: 'A', text: 'inform' },
      { id: 'B', text: 'introduce' },
      { id: 'C', text: 'instruct' },
      { id: 'D', text: 'include' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Inform someone of/about something.',
    translation: 'Ban giám hiệu sẽ thông báo cho các thí sinh về bất kỳ sự thay đổi phòng thi nào trước thứ Sáu.',
    topicTag: 'Từ vựng ngữ cảnh',
  },  {
    id: 'huit-d2nc-q24',
    type: 'vocabulary',
    questionText: 'Question 24. The library has _____ several new study rooms to accommodate more students.',
    options: [
      { id: 'A', text: 'provided' },
      { id: 'B', text: 'opened' },
      { id: 'C', text: 'made' },
      { id: 'D', text: 'given' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Opened new study rooms fits the context.',
    translation: 'Khoa gần đây đã mở thêm các phòng tự học để đáp ứng nhu cầu của nhiều sinh viên hơn.',
    topicTag: 'Từ vựng ngữ cảnh',
  },  {
    id: 'huit-d2nc-q25',
    type: 'vocabulary',
    questionText: 'Question 25. The technician was asked to _____ the problem before the test began.',
    options: [
      { id: 'A', text: 'identify' },
      { id: 'B', text: 'imagine' },
      { id: 'C', text: 'invite' },
      { id: 'D', text: 'involve' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Identify a problem means determine its nature.',
    translation: 'Đội ngũ kỹ thuật đã làm việc khẩn trương để xác định nguyên nhân của sự cố mạng.',
    topicTag: 'Từ vựng ngữ cảnh',
  },  {
    id: 'huit-d2nc-q26',
    type: 'vocabulary',
    questionText: 'Question 26. Because the original room was unavailable, the test was _____ to another building.',
    options: [
      { id: 'A', text: 'relocated' },
      { id: 'B', text: 'recovered' },
      { id: 'C', text: 'removed' },
      { id: 'D', text: 'repeated' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Relocated means moved to another place.',
    translation: 'Phòng thí nghiệm ngôn ngữ tạm thời được dời sang vị trí khác trong khi tòa nhà được bảo trì.',
    topicTag: 'Từ vựng ngữ cảnh',
  },  {
    id: 'huit-d2nc-q27',
    type: 'vocabulary',
    questionText: 'Question 27. The university hopes to _____ awareness of academic integrity among first-year students.',
    options: [
      { id: 'A', text: 'raise' },
      { id: 'B', text: 'rise' },
      { id: 'C', text: 'arise' },
      { id: 'D', text: 'arouse' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Raise awareness is a fixed collocation.',
    translation: 'Hội sinh viên đã phát động một chiến dịch nhằm nâng cao nhận thức về các dịch vụ y tế trong khuôn viên trường.',
    topicTag: 'Từ vựng - Collocation',
  },  {
    id: 'huit-d2nc-q28',
    type: 'vocabulary',
    questionText: 'Question 28. Applicants should retain a copy of all documents for future _____.',
    options: [
      { id: 'A', text: 'reference' },
      { id: 'B', text: 'refer' },
      { id: 'C', text: 'referring' },
      { id: 'D', text: 'referential' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: For future reference is a fixed phrase.',
    translation: 'Vui lòng lưu lại một bản xác nhận đăng ký thi của bạn để tiện tra cứu tham khảo về sau.',
    topicTag: 'Từ vựng - Thành ngữ',
  },  {
    id: 'huit-d2nc-q29',
    type: 'vocabulary',
    questionText: 'Question 29. The online system automatically _____ applicants when their forms have been received.',
    options: [
      { id: 'A', text: 'notifies' },
      { id: 'B', text: 'notices' },
      { id: 'C', text: 'observes' },
      { id: 'D', text: 'reminds' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Notify applicants means officially inform them.',
    translation: 'Khoa sẽ chính thức thông báo cho tất cả người tham gia một khi điểm số đã được xác nhận.',
    topicTag: 'Từ vựng ngữ cảnh',
  },  {
    id: 'huit-d2nc-q30',
    type: 'vocabulary',
    questionText: 'Question 30. The training session was useful because it gave students an opportunity to _____ their presentation skills.',
    options: [
      { id: 'A', text: 'develop' },
      { id: 'B', text: 'design' },
      { id: 'C', text: 'deliver' },
      { id: 'D', text: 'decide' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Develop skills is the natural collocation.',
    translation: 'Hội thảo nhằm giúp sinh viên phát triển kỹ năng tư duy phản biện vững vàng hơn.',
    topicTag: 'Từ vựng - Collocation',
  },  {
    id: 'huit-d2nc-q31',
    type: 'reading_comprehension',
    questionText: 'Question 31. What is the main purpose of the notice?',
    options: [
      { id: 'A', text: 'To explain new access and reservation rules' },
      { id: 'B', text: 'To announce that the lab will close permanently' },
      { id: 'C', text: 'To advertise computer courses' },
      { id: 'D', text: 'To recruit laboratory assistants' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The notice explains the new access and reservation procedure.',
    translation: 'Chủ đề chính của bản thông báo là gì?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)',
    readingPassage: PASSAGE_NOTICE_COMPUTER_LAB,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_LAB_TRANS,
  },  {
    id: 'huit-d2nc-q32',
    type: 'reading_comprehension',
    questionText: 'Question 32. When is online reservation required?',
    options: [
      { id: 'A', text: 'At all times' },
      { id: 'B', text: 'Only before 7:30 a.m.' },
      { id: 'C', text: 'After 6:00 p.m.' },
      { id: 'D', text: 'Only on weekends' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Reservation is required after 6 p.m.',
    translation: 'Vào thời điểm nào thì việc sử dụng Phòng máy tính số 2 yêu cầu phải đặt chỗ trước?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_NOTICE_COMPUTER_LAB,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_LAB_TRANS,
  },  {
    id: 'huit-d2nc-q33',
    type: 'reading_comprehension',
    questionText: 'Question 33. What are students encouraged to do if they finish early?',
    options: [
      { id: 'A', text: 'Keep the reservation' },
      { id: 'B', text: 'Cancel the unused time' },
      { id: 'C', text: 'Leave through another door' },
      { id: 'D', text: 'Make another reservation' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Unused time should be cancelled so others can use the slot.',
    translation: 'Sinh viên hoàn thành sớm được khuyến khích làm điều gì?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_NOTICE_COMPUTER_LAB,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_LAB_TRANS,
  },  {
    id: 'huit-d2nc-q34',
    type: 'reading_comprehension',
    questionText: 'Question 34. What may happen after repeated failure to attend reservations?',
    options: [
      { id: 'A', text: 'The student may lose booking privileges temporarily' },
      { id: 'B', text: 'The student must pay a laboratory fee' },
      { id: 'C', text: 'The student will receive extra study time' },
      { id: 'D', text: 'The student will be required to work in the lab' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Repeated no-shows may temporarily suspend booking privileges.',
    translation: 'Điều gì có thể xảy ra đối với sinh viên nhiều lần không đến sau khi đã đặt chỗ?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_NOTICE_COMPUTER_LAB,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_LAB_TRANS,
  },  {
    id: 'huit-d2nc-q35',
    type: 'reading_comprehension',
    questionText: 'Question 35. Why was the procedure introduced?',
    options: [
      { id: 'A', text: 'Demand for the laboratory has increased' },
      { id: 'B', text: 'The university bought fewer computers' },
      { id: 'C', text: 'The lab will move to another building' },
      { id: 'D', text: 'Students requested shorter opening hours' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The notice explicitly gives increased demand as the reason.',
    translation: 'Tại sao quy trình mới này lại được áp dụng?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_NOTICE_COMPUTER_LAB,
    passageTranslation: PASSAGE_NOTICE_COMPUTER_LAB_TRANS,
  },  {
    id: 'huit-d2nc-q36',
    type: 'reading_comprehension',
    questionText: 'Question 36. Who is the workshop series primarily intended for?',
    options: [
      { id: 'A', text: 'First-year students' },
      { id: 'B', text: 'Academic Support Centre staff' },
      { id: 'C', text: 'English lecturers' },
      { id: 'D', text: 'Graduating students' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The workshops are aimed at first-year students.',
    translation: 'Chuỗi hội thảo chủ yếu hướng đến đối tượng nào?',
    topicTag: 'Đọc hiểu - Đối tượng tiếp nhận',
    readingPassage: PASSAGE_EMAIL_ACADEMIC_WORKSHOP,
    passageTranslation: PASSAGE_EMAIL_ACADEMIC_WORKSHOP_TRANS,
  },  {
    id: 'huit-d2nc-q37',
    type: 'reading_comprehension',
    questionText: 'Question 37. Why is registration required?',
    options: [
      { id: 'A', text: 'The sessions have limited places' },
      { id: 'B', text: 'Students must pay a registration fee' },
      { id: 'C', text: 'Only English majors can attend' },
      { id: 'D', text: 'The workshops are online' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Places are limited, so registration is required.',
    translation: 'Tại sao cần phải đăng ký trước khi tham gia hội thảo?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_EMAIL_ACADEMIC_WORKSHOP,
    passageTranslation: PASSAGE_EMAIL_ACADEMIC_WORKSHOP_TRANS,
  },  {
    id: 'huit-d2nc-q38',
    type: 'reading_comprehension',
    questionText: 'Question 38. What should participants bring to the first session?',
    options: [
      { id: 'A', text: 'A university ID and calculator' },
      { id: 'B', text: 'A notebook and a short English article' },
      { id: 'C', text: 'A completed application' },
      { id: 'D', text: 'Three textbooks' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: The first session requires a notebook and short English article.',
    translation: 'Người tham gia nên mang theo những gì đến buổi hội thảo đầu tiên?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_EMAIL_ACADEMIC_WORKSHOP,
    passageTranslation: PASSAGE_EMAIL_ACADEMIC_WORKSHOP_TRANS,
  },  {
    id: 'huit-d2nc-q39',
    type: 'reading_comprehension',
    questionText: 'Question 39. What is the third workshop about?',
    options: [
      { id: 'A', text: 'Reading academic texts' },
      { id: 'B', text: 'Vocabulary development' },
      { id: 'C', text: 'Preparing for timed tests' },
      { id: 'D', text: 'Using the online registration system' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: The third session concerns preparation for timed tests.',
    translation: 'Buổi hội thảo thứ ba có nội dung về chủ đề gì?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_EMAIL_ACADEMIC_WORKSHOP,
    passageTranslation: PASSAGE_EMAIL_ACADEMIC_WORKSHOP_TRANS,
  },  {
    id: 'huit-d2nc-q40',
    type: 'reading_comprehension',
    questionText: 'Question 40. Why should students cancel if they cannot attend?',
    options: [
      { id: 'A', text: 'To receive a refund' },
      { id: 'B', text: 'To allow another student to take the place' },
      { id: 'C', text: 'To obtain a paper certificate' },
      { id: 'D', text: 'To change the workshop topic' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cancelling releases a place for another student.',
    translation: 'Tại sao sinh viên nên hủy đăng ký nếu không thể tham dự?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_EMAIL_ACADEMIC_WORKSHOP,
    passageTranslation: PASSAGE_EMAIL_ACADEMIC_WORKSHOP_TRANS,
  },  {
    id: 'huit-d2nc-q41',
    type: 'reading_comprehension',
    questionText: 'Question 41. What does the passage suggest students should do after a practice test?',
    options: [
      { id: 'A', text: 'Ignore unfamiliar questions' },
      { id: 'B', text: 'Analyse their mistakes' },
      { id: 'C', text: 'Only review correct answers' },
      { id: 'D', text: 'Immediately take another test' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: The passage recommends analysing mistakes after practice tests.',
    translation: 'Đoạn văn gợi ý sinh viên nên làm gì sau khi làm một bài thi thử?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)',
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS,
  },  {
    id: 'huit-d2nc-q42',
    type: 'reading_comprehension',
    questionText: 'Question 42. Why can reviewing familiar material be misleading?',
    options: [
      { id: 'A', text: 'It may create a feeling of progress without improving performance on unfamiliar questions' },
      { id: 'B', text: 'It always takes too little time' },
      { id: 'C', text: 'It prevents students from learning vocabulary' },
      { id: 'D', text: 'It makes grammar impossible to study' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Reviewing only familiar material may create a false sense of progress.',
    translation: 'Tại sao việc chỉ ôn lại tài liệu đã quen thuộc có thể gây hiểu lầm?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS,
  },  {
    id: 'huit-d2nc-q43',
    type: 'reading_comprehension',
    questionText: 'Question 43. What should a student do after repeatedly making vocabulary mistakes?',
    options: [
      { id: 'A', text: 'Identify the source of the difficulty' },
      { id: 'B', text: 'Stop studying vocabulary' },
      { id: 'C', text: 'Memorise every dictionary entry' },
      { id: 'D', text: 'Avoid practice tests' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The student should identify whether vocabulary, similar words, or context is the problem.',
    translation: 'Một sinh viên nên làm gì sau khi liên tục mắc lỗi ở các câu hỏi từ vựng?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS,
  },  {
    id: 'huit-d2nc-q44',
    type: 'reading_comprehension',
    questionText: 'Question 44. What is the purpose of an error log?',
    options: [
      { id: 'A', text: 'To identify recurring weaknesses' },
      { id: 'B', text: 'To record every answer permanently' },
      { id: 'C', text: 'To replace all textbook study' },
      { id: 'D', text: 'To measure attendance' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: An error log helps identify recurring weaknesses.',
    translation: 'Mục đích của việc lập sổ tay ghi chép lỗi sai (error log) là gì?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS,
  },  {
    id: 'huit-d2nc-q45',
    type: 'reading_comprehension',
    questionText: 'Question 45. What can be inferred about speed practice?',
    options: [
      { id: 'A', text: 'It becomes more useful after accuracy has improved' },
      { id: 'B', text: 'It should replace grammar study immediately' },
      { id: 'C', text: 'It is unnecessary for language tests' },
      { id: 'D', text: 'It should be the only focus from the beginning' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The passage says speed can become a greater focus after accuracy improves.',
    translation: 'Có thể suy luận được điều gì về việc luyện tốc độ làm bài thi?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)',
    readingPassage: PASSAGE_STUDY_STRATEGY,
    passageTranslation: PASSAGE_STUDY_STRATEGY_TRANS,
  },  {
    id: 'huit-d2nc-q46',
    type: 'cloze_test',
    questionText: 'Question 46. Which sentence best completes blank (46)?',
    options: [
      { id: 'A', text: 'Under the new procedure' },
      { id: 'B', text: 'For example' },
      { id: 'C', text: 'In contrast' },
      { id: 'D', text: 'Even though' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Under the new procedure introduces the new process.',
    translation: 'Cụm từ nào phù hợp nhất để hoàn thành chỗ trống (46)?',
    topicTag: 'Cụm giới từ liên kết',
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS,
  },  {
    id: 'huit-d2nc-q47',
    type: 'cloze_test',
    questionText: 'Question 47. Which word best completes blank (47)?',
    options: [
      { id: 'A', text: 'If' },
      { id: 'B', text: 'Unless' },
      { id: 'C', text: 'Although' },
      { id: 'D', text: 'Because' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: If introduces a condition.',
    translation: 'Từ nào phù hợp nhất để hoàn thành chỗ trống (47)?',
    topicTag: 'Liên từ điều kiện',
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS,
  },  {
    id: 'huit-d2nc-q48',
    type: 'cloze_test',
    questionText: 'Question 48. Which sentence best completes blank (48)?',
    options: [
      { id: 'A', text: 'However, arriving early does not guarantee earlier service' },
      { id: 'B', text: 'Therefore, all students will be served immediately' },
      { id: 'C', text: 'For example, appointments will no longer be necessary' },
      { id: 'D', text: 'In addition, the office will close early' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: The sentence contrasts arriving early with guaranteed earlier service.',
    translation: 'Câu nào phù hợp nhất để hoàn thành chỗ trống (48)?',
    topicTag: 'Từ nối (Conjunctions)',
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS,
  },  {
    id: 'huit-d2nc-q49',
    type: 'cloze_test',
    questionText: 'Question 49. Which connector best completes blank (49)?',
    options: [
      { id: 'A', text: 'Nevertheless' },
      { id: 'B', text: 'Similarly' },
      { id: 'C', text: 'Instead' },
      { id: 'D', text: 'For instance' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Nevertheless signals contrast with the previous expected benefit.',
    translation: 'Từ liên kết nào phù hợp nhất để hoàn thành chỗ trống (49)?',
    topicTag: 'Từ nối (Conjunctions)',
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS,
  },  {
    id: 'huit-d2nc-q50',
    type: 'cloze_test',
    questionText: 'Question 50. Which word best completes blank (50)?',
    options: [
      { id: 'A', text: 'before' },
      { id: 'B', text: 'during' },
      { id: 'C', text: 'since' },
      { id: 'D', text: 'unless' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Before any major changes are introduced is grammatically and logically appropriate.',
    translation: 'Từ nào phù hợp nhất để hoàn thành chỗ trống (50)?',
    topicTag: 'Liên từ chỉ thời gian',
    readingPassage: PASSAGE_MEMO_APPOINTMENT,
    passageTranslation: PASSAGE_MEMO_APPOINTMENT_TRANS,
  },
];

export const HUIT_TOEIC_DE_02_NANG_CAO_EXAM: ExamSet = {
  id: 'exam-huit-toeic-de-02-nang-cao',
  title: 'Đề Luyện Phân Loại Anh Văn Đầu Vào HUIT - Đề Số 02 (HUIT × TOEIC Nâng Cao)',
  description: 'Đề luyện thi phân loại Anh văn đầu vào Đại học Công Thương TP.HCM (HUIT) mã Đề số 02 gồm 50 câu: 15 Grammar & Structures, 15 Vocabulary và 20 Reading Comprehension phong cách TOEIC Reading Part 5/6/7 bám sát cấu trúc công bố năm học 2024–2025.',
  category: 'university',
  durationMinutes: 60,
  totalQuestions: 50,
  badge: 'HUIT ĐỀ SỐ 02',
  iconName: 'Award',
  questions: HUIT_TOEIC_DE_02_QUESTIONS
};
