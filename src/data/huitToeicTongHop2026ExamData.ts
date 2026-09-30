import type { ExamSet, Question } from '../types/quiz';

// ==========================================
// READING PASSAGES & VIETNAMESE TRANSLATIONS
// ==========================================

const PASSAGE_NOTICE_SPACE = `NOTICE TO STUDENTS
Starting next Monday, students who wish to use the Language Learning Centre after 6:00 p.m. must reserve a study space through the online booking system. Reservations can be made up to seven days in advance and may be cancelled without penalty up to one hour before the reserved time.

Students who do not arrive within the first 20 minutes may lose their reservation, and the space can then be assigned to another student. The centre introduced the system because evening study spaces have become increasingly difficult to find during examination periods.

A reservation is for one person only. Students who need to work in groups should use the designated discussion rooms. For technical problems with the booking system, contact the help desk during opening hours.`;

const PASSAGE_NOTICE_SPACE_TRANS = `THÔNG BÁO DÀNH CHO SINH VIÊN
Bắt đầu từ thứ Hai tuần tới, sinh viên muốn sử dụng Trung tâm Học liệu Ngoại ngữ sau 6:00 tối phải đặt trước chỗ học qua hệ thống đăng ký trực tuyến. Chỗ ngồi có thể được đặt trước tối đa 7 ngày và có thể hủy mà không bị phạt tối đa 1 giờ trước giờ đã đặt.

Sinh viên không đến trong vòng 20 phút đầu tiên có thể bị mất chỗ đã đặt, và chỗ học đó có thể được phân bổ cho sinh viên khác. Trung tâm áp dụng hệ thống này do không gian tự học vào buổi tối ngày càng trở nên khan hiếm trong các đợt thi.

Mỗi lượt đặt chỗ chỉ dành cho một người. Sinh viên cần làm việc theo nhóm nên sử dụng các phòng thảo luận được chỉ định riêng. Đối với các sự cố kỹ thuật về hệ thống đặt chỗ, vui lòng liên hệ bàn trợ giúp trong giờ mở cửa.`;

const PASSAGE_EMAIL_ORIENTATION = `To: Student Assistants
Subject: International Student Orientation

Thank you for agreeing to work as student assistants during next week's international student orientation. The first session will take place on Monday at 9:00 a.m. in Room B203. Please arrive at least 20 minutes early so that you can collect your name badge and review the schedule.

During the session, assistants will help visitors find classrooms, answer basic questions about campus facilities, and direct students to the registration desk. You are not expected to answer questions about immigration regulations; such questions should be referred to the International Office.

A short briefing will be provided before the event begins. Please reply to this email by Friday if you are unable to attend.`;

const PASSAGE_EMAIL_ORIENTATION_TRANS = `Gửi: Các bạn trợ lý sinh viên
Chủ đề: Buổi định hướng sinh viên quốc tế

Cảm ơn các bạn đã đồng ý làm trợ lý sinh viên trong tuần định hướng sinh viên quốc tế vào tuần tới. Buổi đầu tiên sẽ diễn ra vào lúc 9:00 sáng thứ Hai tại phòng B203. Vui lòng đến sớm ít nhất 20 phút để nhận bảng tên và xem lại lịch trình.

Trong suốt buổi định hướng, các trợ lý sẽ hỗ trợ khách tìm phòng học, giải đáp các thắc mắc cơ bản về cơ sở vật chất của trường và hướng dẫn sinh viên đến bàn đăng ký. Các bạn không cần phải trả lời các câu hỏi về thủ tục xuất nhập cảnh/thị thực; những câu hỏi như vậy cần được chuyển tiếp đến Phòng Hợp tác Quốc tế.

Một buổi hướng dẫn ngắn sẽ được tổ chức trước khi sự kiện bắt đầu. Vui lòng phản hồi email này trước thứ Sáu nếu bạn không thể tham dự.`;

const PASSAGE_STUDY_SKILLS = `Many students assume that studying for longer periods automatically produces better results. In practice, the quality of study can be just as important as the number of hours. Short sessions separated by breaks may help learners maintain attention, while one extremely long session can lead to fatigue.

Another useful technique is retrieval practice. Instead of repeatedly reading the same notes, students close their books and try to recall the main ideas. Although this can feel harder than rereading, the effort involved in retrieving information helps strengthen memory. Students can also test themselves with questions, explain a concept in their own words, or write a short summary without looking at the source.

These methods do not mean that study time is unimportant. Complex subjects still require sustained effort. The key is to use available time actively rather than simply increasing the number of hours.`;

const PASSAGE_STUDY_SKILLS_TRANS = `KỸ NĂNG HỌC TẬP HIỆU QUẢ
Nhiều sinh viên cho rằng học trong thời gian dài hơn sẽ tự động mang lại kết quả tốt hơn. Trên thực tế, chất lượng học tập cũng quan trọng không kém gì số giờ học. Các phiên học ngắn xen kẽ với thời gian nghỉ giải lao có thể giúp người học duy trì sự tập trung, trong khi một phiên học kéo dài liên tục có thể dẫn đến kiệt sức.

Một kỹ thuật hữu ích khác là phương pháp chủ động truy hồi kiến thức (retrieval practice). Thay vì liên tục đọc đi đọc lại cùng một tập ghi chú, sinh viên gấp sách lại và cố gắng nhớ lại các ý chính. Mặc dù cách này có thể mang lại cảm giác khó khăn hơn so với việc đọc lại, nhưng nỗ lực truy hồi thông tin sẽ giúp củng cố trí nhớ. Sinh viên cũng có thể tự kiểm tra bằng các câu hỏi, giải thích một khái niệm bằng lời văn của chính mình, hoặc viết một bản tóm tắt ngắn mà không nhìn tài liệu gốc.

Những phương pháp này không có nghĩa là thời gian học tập không quan trọng. Các môn học phức tạp vẫn đòi hỏi nỗ lực bền bỉ. Điều cốt lõi là sử dụng quỹ thời gian có sẵn một cách chủ động thay vì chỉ đơn thuần tăng thêm số giờ ngồi học.`;

const PASSAGE_TEXT_COMPLETION = `MEMO TO STUDENTS
The Student Services Office will introduce a new online appointment system next month. The system is designed to make appointments easier to manage and to reduce waiting times. Students will be able to select an available time slot and receive an automatic confirmation email.

Before making an appointment, students should check the service description carefully to make sure they are contacting the correct office. Some requests can be handled online and do not require an in-person visit. Students who need to cancel an appointment should do so at least two hours in advance. _____(46)_____, repeated late cancellations may affect future booking privileges.

The office will publish a short user guide on its website before the system goes live. Students are encouraged to read the guide _____(47)_____ making their first appointment. If students experience technical problems, they should contact the support desk rather than creating multiple bookings. _____(48)_____, duplicate bookings may slow down the system and make fewer time slots available to others.

The new system is expected to be especially useful during busy periods. _____(49)_____, students are still advised to make appointments early when they know that they will need a particular service. The office will monitor the system during the first month and make adjustments _____(50)_____ necessary.`;

const PASSAGE_TEXT_COMPLETION_TRANS = `THÔNG BÁO NỘI BỘ DÀNH CHO SINH VIÊN
Văn phòng Công tác Sinh viên sẽ giới thiệu một hệ thống đặt lịch hẹn trực tuyến mới vào tháng tới. Hệ thống được thiết kế để giúp việc quản lý lịch hẹn trở nên dễ dàng hơn và giảm thiểu thời gian chờ đợi. Sinh viên sẽ có thể chọn khung giờ còn trống và nhận email xác nhận tự động.

Trước khi đặt lịch hẹn, sinh viên nên kiểm tra kỹ mô tả dịch vụ để đảm bảo liên hệ đúng văn phòng. Một số yêu cầu có thể được xử lý trực tuyến và không cần đến gặp trực tiếp. Những sinh viên cần hủy lịch hẹn nên thực hiện trước ít nhất hai giờ. Tuy nhiên (46), việc hủy trễ nhiều lần có thể ảnh hưởng đến quyền đặt lịch trong tương lai.

Văn phòng sẽ công bố một bản hướng dẫn sử dụng ngắn gọn trên website trước khi hệ thống chính thức hoạt động. Sinh viên được khuyến khích đọc bản hướng dẫn trước khi (47) đặt cuộc hẹn đầu tiên. Nếu sinh viên gặp sự cố kỹ thuật, nên liên hệ với bộ phận hỗ trợ thay vì tạo nhiều lịch hẹn cùng lúc. Nếu không (48), việc đặt trùng lặp có thể làm chậm hệ thống và làm giảm số lượng khung giờ trống dành cho người khác.

Hệ thống mới được kỳ vọng sẽ đặc biệt hữu ích trong các đợt cao điểm. Dù vậy (49), sinh viên vẫn được khuyên nên đặt lịch hẹn sớm khi biết mình cần một dịch vụ cụ thể. Văn phòng sẽ theo dõi hệ thống trong tháng đầu tiên và thực hiện các điều chỉnh nếu (50) thấy cần thiết.`;

export const HUIT_TONG_HOP_2026_QUESTIONS: Question[] = [
  {
    id: 'huit-th26-q1',
    type: 'grammar',
    questionText: 'Question 1. The university usually _____ its placement test in September, but this year it _____ the test earlier.',
    options: [
      { id: 'A', text: 'holds / is offering', translation: 'tổ chức (hiện tại đơn) / đang tổ chức (hiện tại tiếp diễn)' },
      { id: 'B', text: 'is holding / offers', translation: 'đang tổ chức / tổ chức' },
      { id: 'C', text: 'held / has offered', translation: 'đã tổ chức / đã tổ chức' },
      { id: 'D', text: 'has held / offered', translation: 'đã tổ chức / đã tổ chức' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Usually" diễn tả thói quen lặp đi lặp lại hàng năm nên dùng Hiện tại đơn (holds). Vế sau "but this year" diễn tả một sự việc mang tính chất tạm thời, khác thường trong năm nay nên dùng Hiện tại tiếp diễn (is offering).',
    translation: 'Trường đại học thường tổ chức kỳ thi phân loại vào tháng Chín, nhưng năm nay trường lại tổ chức kỳ thi sớm hơn.',
    topicTag: 'Thì Hiện tại đơn & Hiện tại tiếp diễn'
  },
  {
    id: 'huit-th26-q2',
    type: 'grammar',
    questionText: 'Question 2. Students who _____ the registration form before Friday will receive a confirmation email.',
    options: [
      { id: 'A', text: 'complete', translation: 'hoàn thành (hiện tại đơn)' },
      { id: 'B', text: 'completed', translation: 'đã hoàn thành (quá khứ đơn)' },
      { id: 'C', text: 'will complete', translation: 'sẽ hoàn thành' },
      { id: 'D', text: 'had completed', translation: 'đã hoàn thành (quá khứ hoàn thành)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Trong mệnh đề phụ chỉ thời gian hoặc điều kiện hướng tới tương lai ("before Friday"), ta không dùng "will" mà dùng thì Hiện tại đơn (complete) để hòa hợp với mệnh đề chính "will receive".',
    translation: 'Những sinh viên hoàn thành đơn đăng ký trước thứ Sáu sẽ nhận được email xác nhận.',
    topicTag: 'Mệnh đề thời gian trong tương lai'
  },
  {
    id: 'huit-th26-q3',
    type: 'grammar',
    questionText: 'Question 3. By the time I reached the examination room, the invigilator _____.',
    options: [
      { id: 'A', text: 'had already started the instructions', translation: 'đã bắt đầu phổ biến quy chế' },
      { id: 'B', text: 'already starts the instructions', translation: 'đang bắt đầu' },
      { id: 'C', text: 'has already started the instructions', translation: 'đã bắt đầu (hiện tại hoàn thành)' },
      { id: 'D', text: 'was already start the instructions', translation: 'sai ngữ pháp' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc "By the time + S + V-quá khứ đơn", mệnh đề chính diễn tả hành động xảy ra và hoàn tất trước thời điểm đó nên chia thì Quá khứ hoàn thành: "had already started".',
    translation: 'Vào thời điểm tôi đến phòng thi, giám thị đã bắt đầu phổ biến hướng dẫn làm bài.',
    topicTag: 'Thì Quá khứ hoàn thành'
  },
  {
    id: 'huit-th26-q4',
    type: 'grammar',
    questionText: 'Question 4. If the online system _____ unavailable tomorrow, students can submit the form at the office.',
    options: [
      { id: 'A', text: 'is', translation: 'thì (hiện tại đơn)' },
      { id: 'B', text: 'will be', translation: 'sẽ là' },
      { id: 'C', text: 'was', translation: 'đã là' },
      { id: 'D', text: 'had been', translation: 'đã từng là' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai: Mệnh đề "If + S + V(hiện tại đơn)", mệnh đề chính "S + can/will + V-nguyên mẫu".',
    translation: 'Nếu hệ thống trực tuyến không khả dụng vào ngày mai, sinh viên có thể nộp đơn trực tiếp tại văn phòng.',
    topicTag: 'Câu điều kiện loại 1'
  },
  {
    id: 'huit-th26-q5',
    type: 'grammar',
    questionText: 'Question 5. By the end of this academic year, we _____ at this university for three semesters.',
    options: [
      { id: 'A', text: 'study', translation: 'học (hiện tại đơn)' },
      { id: 'B', text: 'studied', translation: 'đã học (quá khứ đơn)' },
      { id: 'C', text: 'will have studied', translation: 'sẽ đã học (tương lai hoàn thành)' },
      { id: 'D', text: 'have studied', translation: 'đã học (hiện tại hoàn thành)' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cụm từ "By the end of this academic year" (Trước thời điểm cuối năm học này) là dấu hiệu điển hình của thì Tương lai hoàn thành (will have studied), diễn tả hành động hoàn tất hoặc kéo dài được một khoảng thời gian tính đến một mốc trong tương lai.',
    translation: 'Tính đến cuối năm học này, chúng tôi sẽ đã theo học tại trường đại học này được 3 học kỳ.',
    topicTag: 'Thì Tương lai hoàn thành'
  },
  {
    id: 'huit-th26-q6',
    type: 'grammar',
    questionText: 'Question 6. Neither the lecturer nor the students _____ aware of the timetable change.',
    options: [
      { id: 'A', text: 'was', translation: 'đã (số ít)' },
      { id: 'B', text: 'were', translation: 'đã (số nhiều)' },
      { id: 'C', text: 'has been', translation: 'đã từng (số ít)' },
      { id: 'D', text: 'is', translation: 'là (số ít)' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Quy tắc hòa hợp chủ ngữ với cấu trúc "Neither A nor B": động từ chia theo chủ ngữ gần nó nhất (chủ ngữ B). Ở đây B là "the students" (danh từ số nhiều), kết hợp với thì quá khứ nên chọn "were".',
    translation: 'Cả giảng viên lẫn các sinh viên đều không biết về sự thay đổi thời khóa biểu.',
    topicTag: 'Sự hòa hợp Chủ ngữ - Động từ'
  },
  {
    id: 'huit-th26-q7',
    type: 'grammar',
    questionText: 'Question 7. The new language centre, _____ opened last month, has already attracted hundreds of students.',
    options: [
      { id: 'A', text: 'who', translation: 'người mà' },
      { id: 'B', text: 'whom', translation: 'người mà (tân ngữ)' },
      { id: 'C', text: 'which', translation: 'cái mà' },
      { id: 'D', text: 'where', translation: 'nơi mà' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Đại từ quan hệ "which" thay thế cho danh từ chỉ vật/nơi chốn đóng vai trò chủ ngữ của mệnh đề không xác định ("opened last month"). "Where" không làm chủ ngữ cho động từ "opened".',
    translation: 'Trung tâm ngôn ngữ mới, cơ sở vừa khánh thành vào tháng trước, đã thu hút hàng trăm sinh viên.',
    topicTag: 'Đại từ quan hệ'
  },
  {
    id: 'huit-th26-q8',
    type: 'grammar',
    questionText: 'Question 8. Students are required _____ their identity cards before entering the test room.',
    options: [
      { id: 'A', text: 'show', translation: 'xuất trình (nguyên thể)' },
      { id: 'B', text: 'showing', translation: 'việc xuất trình (V-ing)' },
      { id: 'C', text: 'to show', translation: 'phải xuất trình (to-V)' },
      { id: 'D', text: 'shown', translation: 'được xuất trình (V3/ed)' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cấu trúc thể bị động "be required + to-infinitive": ai đó được yêu cầu/bắt buộc phải làm gì. Do đó cần "to show".',
    translation: 'Sinh viên được yêu cầu phải xuất trình thẻ căn cước trước khi bước vào phòng thi.',
    topicTag: 'Cấu trúc Động từ'
  },
  {
    id: 'huit-th26-q9',
    type: 'grammar',
    questionText: 'Question 9. I look forward to _____ from the admissions office soon.',
    options: [
      { id: 'A', text: 'hear', translation: 'nghe tin' },
      { id: 'B', text: 'hearing', translation: 'nhận tin tức (V-ing)' },
      { id: 'C', text: 'heard', translation: 'đã nghe tin' },
      { id: 'D', text: 'be hearing', translation: 'đang nghe' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cụm từ cố định "look forward to + V-ing/Noun" nghĩa là rất mong chờ/trông đợi điều gì.',
    translation: 'Tôi rất mong sớm nhận được tin tức phản hồi từ phòng tuyển sinh.',
    topicTag: 'Danh động từ sau Giới từ'
  },
  {
    id: 'huit-th26-q10',
    type: 'grammar',
    questionText: 'Question 10. The report _____ by the academic office last week contains several recommendations.',
    options: [
      { id: 'A', text: 'preparing', translation: 'đang chuẩn bị' },
      { id: 'B', text: 'prepared', translation: 'được chuẩn bị (rút gọn bị động)' },
      { id: 'C', text: 'was prepared', translation: 'đã được chuẩn bị' },
      { id: 'D', text: 'has prepared', translation: 'đã chuẩn bị' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Câu đã có động từ chính là "contains". Vị trí chỗ trống là mệnh đề quan hệ rút gọn ở thể bị động: "The report [which was] prepared by the academic office...". Khi rút gọn mệnh đề bị động, ta giữ lại quá khứ phân từ V3/ed (prepared).',
    translation: 'Bản báo cáo được phòng đào tạo chuẩn bị vào tuần trước bao gồm một số đề xuất quan trọng.',
    topicTag: 'Rút gọn mệnh đề quan hệ bị động'
  },
  {
    id: 'huit-th26-q11',
    type: 'grammar',
    questionText: 'Question 11. The course is designed to help students become _____ in academic English.',
    options: [
      { id: 'A', text: 'confident', translation: 'tự tin (tính từ)' },
      { id: 'B', text: 'confidently', translation: 'một cách tự tin (trạng từ)' },
      { id: 'C', text: 'confidence', translation: 'sự tự tin (danh từ)' },
      { id: 'D', text: 'confide', translation: 'giãi bày (động từ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Động từ liên kết "become" đòi hỏi một tính từ bổ nghĩa cho chủ ngữ: become + Adj (trở nên tự tin). Do đó chọn "confident".',
    translation: 'Khóa học được thiết kế nhằm giúp sinh viên trở nên tự tin hơn trong việc sử dụng tiếng Anh học thuật.',
    topicTag: 'Từ loại - Tính từ'
  },
  {
    id: 'huit-th26-q12',
    type: 'grammar',
    questionText: 'Question 12. The more regularly you practise, _____ your performance is likely to become.',
    options: [
      { id: 'A', text: 'the more consistent', translation: 'càng trở nên ổn định hơn' },
      { id: 'B', text: 'more consistent', translation: 'ổn định hơn' },
      { id: 'C', text: 'the most consistent', translation: 'ổn định nhất' },
      { id: 'D', text: 'consistency', translation: 'sự ổn định' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc so sánh kép (Double Comparative): "The + so sánh hơn..., the + so sánh hơn...". Cần dạng "The more consistent" để tương ứng với "The more regularly".',
    translation: 'Bạn càng luyện tập thường xuyên, phong độ làm bài của bạn càng có khả năng trở nên ổn định.',
    topicTag: 'So sánh kép (Double Comparative)'
  },
  {
    id: 'huit-th26-q13',
    type: 'grammar',
    questionText: 'Question 13. Had I known about the change earlier, I _____ the appointment.',
    options: [
      { id: 'A', text: 'would reschedule', translation: 'sẽ sắp xếp lại' },
      { id: 'B', text: 'would have rescheduled', translation: 'đã sắp xếp lại (loại 3)' },
      { id: 'C', text: 'rescheduled', translation: 'đã sắp xếp' },
      { id: 'D', text: 'had rescheduled', translation: 'đã sắp xếp (quá khứ hoàn thành)' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đảo ngữ câu điều kiện loại 3: "Had + S + V3/ed..., S + would/could + have + V3/ed". Diễn tả một giả định trái ngược với thực tế trong quá khứ.',
    translation: 'Nếu tôi biết về sự thay đổi này sớm hơn, tôi đã sắp xếp lại lịch hẹn rồi.',
    topicTag: 'Đảo ngữ Câu điều kiện'
  },
  {
    id: 'huit-th26-q14',
    type: 'grammar',
    questionText: 'Question 14. You _____ bring a printed application because the office accepts digital copies.',
    options: [
      { id: 'A', text: 'mustn’t', translation: 'cấm không được' },
      { id: 'B', text: 'don’t have to', translation: 'không cần phải' },
      { id: 'C', text: 'couldn’t', translation: 'đã không thể' },
      { id: 'D', text: 'shouldn’t have', translation: 'lẽ ra không nên' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "Don’t have to" diễn tả sự không cần thiết (không bắt buộc phải làm vì văn phòng chấp nhận bản điện tử). Trong khi "mustn’t" mang nghĩa cấm đoán.',
    translation: 'Bạn không cần phải mang theo bản đơn in giấy vì văn phòng chấp nhận bản mềm kỹ thuật số.',
    topicTag: 'Động từ khuyết thiếu'
  },
  {
    id: 'huit-th26-q15',
    type: 'grammar',
    questionText: 'Question 15. Only after the results were published _____ the students realise how important the placement test had been.',
    options: [
      { id: 'A', text: 'did', translation: 'did (trợ động từ quá khứ)' },
      { id: 'B', text: 'had', translation: 'had' },
      { id: 'C', text: 'were', translation: 'were' },
      { id: 'D', text: 'have', translation: 'have' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc đảo ngữ với cụm từ phủ định/giới hạn: "Only after + S + V, trợ động từ + S + V-nguyên mẫu". Động từ chính là "realise" (nguyên mẫu) ở ngữ cảnh quá khứ nên trợ động từ đảo ngữ là "did".',
    translation: 'Chỉ sau khi kết quả được công bố thì các sinh viên mới nhận ra kỳ thi phân loại quan trọng đến nhường nào.',
    topicTag: 'Đảo ngữ (Inversion)'
  },
  {
    id: 'huit-th26-q16',
    type: 'vocabulary',
    questionText: 'Question 16. Please _____ your student ID at the reception desk before entering the examination area.',
    options: [
      { id: 'A', text: 'present', translation: 'xuất trình / trình ra' },
      { id: 'B', text: 'prevent', translation: 'ngăn chặn' },
      { id: 'C', text: 'preserve', translation: 'bảo tồn' },
      { id: 'D', text: 'represent', translation: 'đại diện' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Collocation thông dụng "present an ID/card" nghĩa là xuất trình giấy tờ tùy thân hoặc thẻ sinh viên.',
    translation: 'Vui lòng xuất trình thẻ sinh viên của bạn tại bàn tiếp tân trước khi bước vào khu vực thi.',
    topicTag: 'Từ vựng - Collocation'
  },
  {
    id: 'huit-th26-q17',
    type: 'vocabulary',
    questionText: 'Question 17. The university will _____ a short orientation session for newly admitted students.',
    options: [
      { id: 'A', text: 'conduct', translation: 'tiến hành / tổ chức' },
      { id: 'B', text: 'contain', translation: 'chứa đựng' },
      { id: 'C', text: 'convince', translation: 'thuyết phục' },
      { id: 'D', text: 'concern', translation: 'lo lắng / liên quan' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Collocation chuẩn "conduct a session / meeting / survey" nghĩa là tiến hành hoặc tổ chức một buổi/phiên làm việc.',
    translation: 'Nhà trường sẽ tổ chức một buổi định hướng ngắn dành cho các tân sinh viên vừa trúng tuyển.',
    topicTag: 'Từ vựng - Collocation'
  },
  {
    id: 'huit-th26-q18',
    type: 'vocabulary',
    questionText: 'Question 18. Applicants who miss the deadline may have to _____ an administrative fee.',
    options: [
      { id: 'A', text: 'pay', translation: 'trả / đóng (chi phí)' },
      { id: 'B', text: 'spend', translation: 'tiêu xài' },
      { id: 'C', text: 'cost', translation: 'có giá trị' },
      { id: 'D', text: 'charge', translation: 'tính phí (dành cho bên thu)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Collocation "pay a fee" nghĩa là đóng phí/nộp lệ phí. Người nộp đơn đóng phí thì dùng "pay", bên cơ quan thu phí mới dùng "charge a fee".',
    translation: 'Những ứng viên nộp trễ hạn có thể sẽ phải nộp một khoản lệ phí hành chính.',
    topicTag: 'Từ vựng - Collocation'
  },
  {
    id: 'huit-th26-q19',
    type: 'vocabulary',
    questionText: 'Question 19. The revised timetable is now _____ on the university website.',
    options: [
      { id: 'A', text: 'available', translation: 'có sẵn / khả dụng' },
      { id: 'B', text: 'capable', translation: 'có khả năng' },
      { id: 'C', text: 'responsible', translation: 'chịu trách nhiệm' },
      { id: 'D', text: 'reliable', translation: 'đáng tin cậy' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Available" nghĩa là có sẵn để tra cứu, tải về hoặc sử dụng. Phù hợp nhất khi nói về thông tin/tài liệu được đăng tải trên website.',
    translation: 'Thời khóa biểu đã điều chỉnh hiện đã có sẵn trên trang web của trường đại học.',
    topicTag: 'Từ vựng ngữ cảnh'
  },
  {
    id: 'huit-th26-q20',
    type: 'vocabulary',
    questionText: 'Question 20. Students are advised to read the instructions _____ before beginning the test.',
    options: [
      { id: 'A', text: 'carefully', translation: 'một cách cẩn thận (trạng từ)' },
      { id: 'B', text: 'careful', translation: 'cẩn thận (tính từ)' },
      { id: 'C', text: 'care', translation: 'sự chăm sóc (danh từ)' },
      { id: 'D', text: 'caring', translation: 'quan tâm' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Bổ nghĩa cho động từ thường "read" cần một trạng từ chỉ thể cách: "read the instructions carefully" (đọc kỹ/cẩn thận bản hướng dẫn).',
    translation: 'Sinh viên được khuyên nên đọc kỹ các chỉ dẫn trước khi bắt đầu làm bài thi.',
    topicTag: 'Từ loại - Trạng từ'
  },
  {
    id: 'huit-th26-q21',
    type: 'vocabulary',
    questionText: 'Question 21. The university plans to _____ the opening hours of the library during examination week.',
    options: [
      { id: 'A', text: 'extend', translation: 'kéo dài / gia hạn' },
      { id: 'B', text: 'attend', translation: 'tham dự' },
      { id: 'C', text: 'exchange', translation: 'trao đổi' },
      { id: 'D', text: 'avoid', translation: 'tránh' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Collocation "extend the opening hours" nghĩa là kéo dài thời gian mở cửa (ví dụ mở cửa muộn hơn bình thường).',
    translation: 'Trường dự định kéo dài thời gian mở cửa thư viện trong suốt tuần thi cử.',
    topicTag: 'Từ vựng - Collocation'
  },
  {
    id: 'huit-th26-q22',
    type: 'vocabulary',
    questionText: 'Question 22. I could not _____ what the lecturer was saying because the microphone was too quiet.',
    options: [
      { id: 'A', text: 'make out', translation: 'nghe/hiểu được (trong khó khăn)' },
      { id: 'B', text: 'take over', translation: 'tiếp quản' },
      { id: 'C', text: 'put off', translation: 'hoãn lại' },
      { id: 'D', text: 'look after', translation: 'chăm sóc' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Phrasal verb "make out" nghĩa là nghe thấy hoặc nhận ra điều gì đó trong điều kiện khó khăn (như tiếng quá nhỏ hoặc mờ).',
    translation: 'Tôi không thể nghe rõ giảng viên đang nói gì vì micro phát ra âm thanh quá nhỏ.',
    topicTag: 'Cụm động từ (Phrasal Verbs)'
  },
  {
    id: 'huit-th26-q23',
    type: 'vocabulary',
    questionText: 'Question 23. The receptionist asked us to wait while she _____ our booking in the system.',
    options: [
      { id: 'A', text: 'checked', translation: 'kiểm tra / tra cứu' },
      { id: 'B', text: 'attended', translation: 'tham dự' },
      { id: 'C', text: 'reached', translation: 'đạt tới' },
      { id: 'D', text: 'operated', translation: 'vận hành' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Check a booking/reservation in the system" là cụm từ tự nhiên và chính xác nhất để diễn đạt việc nhân viên tra cứu thông tin đặt chỗ trên hệ thống.',
    translation: 'Nhân viên lễ tân đề nghị chúng tôi chờ trong khi cô ấy kiểm tra thông tin đặt chỗ của chúng tôi trên hệ thống.',
    topicTag: 'Từ vựng ngữ cảnh'
  },
  {
    id: 'huit-th26-q24',
    type: 'vocabulary',
    questionText: 'Question 24. The workshop is intended to help students _____ confidence in speaking English.',
    options: [
      { id: 'A', text: 'build', translation: 'xây dựng / củng cố' },
      { id: 'B', text: 'construct', translation: 'xây dựng (công trình)' },
      { id: 'C', text: 'manufacture', translation: 'sản xuất (hàng hóa)' },
      { id: 'D', text: 'repair', translation: 'sửa chữa' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Collocation quen thuộc "build confidence" nghĩa là bồi đắp, xây dựng sự tự tin. Các từ "construct", "manufacture" dùng cho vật chất/nhà cửa/hàng hóa.',
    translation: 'Hội thảo nhằm mục đích giúp sinh viên bồi đắp và gia tăng sự tự tin khi nói tiếng Anh.',
    topicTag: 'Từ vựng - Collocation'
  },
  {
    id: 'huit-th26-q25',
    type: 'vocabulary',
    questionText: "Question 25. The manager was impressed by the student's _____ response to the unexpected question.",
    options: [
      { id: 'A', text: 'professional', translation: 'chuyên nghiệp (tính từ)' },
      { id: 'B', text: 'profession', translation: 'nghề nghiệp (danh từ)' },
      { id: 'C', text: 'professionally', translation: 'một cách chuyên nghiệp (trạng từ)' },
      { id: 'D', text: 'professionalism', translation: 'tính chuyên nghiệp (danh từ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Chỗ trống đứng trước danh từ "response" nên cần một tính từ bổ nghĩa: "professional response" (câu trả lời chuyên nghiệp).',
    translation: 'Người quản lý rất ấn tượng trước câu trả lời đầy tính chuyên nghiệp của bạn sinh viên đối với câu hỏi bất ngờ.',
    topicTag: 'Từ loại - Tính từ'
  },
  {
    id: 'huit-th26-q26',
    type: 'vocabulary',
    questionText: 'Question 26. Because of heavy traffic, the delivery was _____ for nearly two hours.',
    options: [
      { id: 'A', text: 'delayed', translation: 'bị trì hoãn / giao chậm' },
      { id: 'B', text: 'damaged', translation: 'bị hư hỏng' },
      { id: 'C', text: 'denied', translation: 'bị từ chối' },
      { id: 'D', text: 'reduced', translation: 'bị giảm' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Do giao thông tắc nghẽn nặng nề ("heavy traffic"), chuyến giao hàng đã bị trì hoãn/chậm trễ ("delayed").',
    translation: 'Do tình trạng kẹt xe nghiêm trọng, chuyến giao hàng đã bị chậm trễ gần hai tiếng đồng hồ.',
    topicTag: 'Từ vựng ngữ cảnh'
  },
  {
    id: 'huit-th26-q27',
    type: 'vocabulary',
    questionText: 'Question 27. Please keep your receipt in case you need to _____ the item.',
    options: [
      { id: 'A', text: 'return', translation: 'đổi trả (hàng hóa)' },
      { id: 'B', text: 'recover', translation: 'hồi phục' },
      { id: 'C', text: 'reveal', translation: 'tiết lộ' },
      { id: 'D', text: 'remove', translation: 'gỡ bỏ' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Trong ngữ cảnh mua bán hàng hóa, "return an item" nghĩa là đổi trả lại món hàng đã mua kèm theo hóa đơn (receipt).',
    translation: 'Vui lòng giữ lại hóa đơn của bạn trong trường hợp bạn cần đổi trả món hàng.',
    topicTag: 'Từ vựng ngữ cảnh'
  },
  {
    id: 'huit-th26-q28',
    type: 'vocabulary',
    questionText: 'Question 28. The scholarship is awarded to students who demonstrate strong academic _____.',
    options: [
      { id: 'A', text: 'performance', translation: 'thành tích / kết quả học tập' },
      { id: 'B', text: 'perform', translation: 'thực hiện (động từ)' },
      { id: 'C', text: 'performer', translation: 'người biểu diễn (danh từ)' },
      { id: 'D', text: 'performing', translation: 'việc biểu diễn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Collocation cố định "academic performance" nghĩa là thành tích học tập, kết quả học thuật của học sinh/sinh viên.',
    translation: 'Học bổng được trao cho những sinh viên thể hiện được kết quả học tập xuất sắc.',
    topicTag: 'Từ loại - Danh từ'
  },
  {
    id: 'huit-th26-q29',
    type: 'vocabulary',
    questionText: 'Question 29. The instructions were too _____, so several candidates misunderstood the procedure.',
    options: [
      { id: 'A', text: 'unclear', translation: 'không rõ ràng (tính từ)' },
      { id: 'B', text: 'clearly', translation: 'rõ ràng (trạng từ)' },
      { id: 'C', text: 'clarity', translation: 'sự rõ ràng (danh từ)' },
      { id: 'D', text: 'unclearly', translation: 'không rõ ràng (trạng từ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc "too + Adj": sau động từ "were" cần một tính từ, và vế sau nói rằng nhiều thí sinh hiểu nhầm quy trình nên tính từ phải mang nghĩa tiêu cực là "unclear".',
    translation: 'Các chỉ dẫn quá thiếu rõ ràng, vì vậy một số thí sinh đã hiểu sai quy trình.',
    topicTag: 'Từ loại - Tính từ'
  },
  {
    id: 'huit-th26-q30',
    type: 'vocabulary',
    questionText: 'Question 30. The centre introduced a new booking system to _____ waiting time for students.',
    options: [
      { id: 'A', text: 'reduce', translation: 'giảm bớt' },
      { id: 'B', text: 'revise', translation: 'sửa đổi / ôn tập' },
      { id: 'C', text: 'recover', translation: 'thu hồi / hồi phục' },
      { id: 'D', text: 'replace', translation: 'thay thế' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Collocation tự nhiên "reduce waiting time" nghĩa là rút ngắn, giảm bớt thời gian chờ đợi.',
    translation: 'Trung tâm đã đưa vào sử dụng một hệ thống đăng ký mới nhằm giảm thiểu thời gian chờ đợi cho sinh viên.',
    topicTag: 'Từ vựng - Collocation'
  },
  {
    id: 'huit-th26-q31',
    type: 'reading_comprehension',
    questionText: 'Question 31. What is the main purpose of the notice?',
    options: [
      { id: 'A', text: 'To introduce a new procedure for reserving study spaces', translation: 'Giới thiệu quy trình mới để đặt chỗ tự học' },
      { id: 'B', text: 'To advertise new language courses', translation: 'Quảng cáo các khóa học ngôn ngữ mới' },
      { id: 'C', text: 'To announce longer opening hours', translation: 'Thông báo kéo dài thời gian mở cửa' },
      { id: 'D', text: 'To recruit help-desk staff', translation: 'Tuyển dụng nhân viên bàn trợ giúp' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Câu mở đầu đoạn 1 nêu rõ mục đích: "...students who wish to use the Language Learning Centre after 6:00 p.m. must reserve a study space through the online booking system" (thông báo quy trình mới đặt chỗ tự học sau 6 giờ tối).',
    translation: 'Mục đích chính của bản thông báo là gì?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)',
    readingPassage: PASSAGE_NOTICE_SPACE,
    passageTranslation: PASSAGE_NOTICE_SPACE_TRANS
  },
  {
    id: 'huit-th26-q32',
    type: 'reading_comprehension',
    questionText: 'Question 32. How far in advance can a study space be reserved?',
    options: [
      { id: 'A', text: 'One hour', translation: '1 giờ' },
      { id: 'B', text: 'One day', translation: '1 ngày' },
      { id: 'C', text: 'Seven days', translation: '7 ngày' },
      { id: 'D', text: 'One month', translation: '1 tháng' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Đoạn 1 nêu rõ: "Reservations can be made up to seven days in advance" (Có thể đặt trước tối đa 7 ngày).',
    translation: 'Chỗ học có thể được đặt trước bao lâu?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_NOTICE_SPACE,
    passageTranslation: PASSAGE_NOTICE_SPACE_TRANS
  },
  {
    id: 'huit-th26-q33',
    type: 'reading_comprehension',
    questionText: 'Question 33. What may happen if a student does not arrive within 20 minutes?',
    options: [
      { id: 'A', text: 'A fee will be charged', translation: 'Sẽ bị tính phí' },
      { id: 'B', text: 'The space may be assigned to another student', translation: 'Chỗ ngồi có thể được giao cho sinh viên khác' },
      { id: 'C', text: 'The reservation will be extended', translation: 'Lịch đặt chỗ sẽ được gia hạn' },
      { id: 'D', text: 'The student will be moved to a discussion room', translation: 'Sinh viên sẽ được chuyển sang phòng thảo luận' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 2 nêu rõ: "Students who do not arrive within the first 20 minutes may lose their reservation, and the space can then be assigned to another student".',
    translation: 'Điều gì có thể xảy ra nếu sinh viên không đến trong vòng 20 phút đầu?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_NOTICE_SPACE,
    passageTranslation: PASSAGE_NOTICE_SPACE_TRANS
  },
  {
    id: 'huit-th26-q34',
    type: 'reading_comprehension',
    questionText: 'Question 34. Why was the booking system introduced?',
    options: [
      { id: 'A', text: 'Evening study spaces have become difficult to find during exams', translation: 'Chỗ học buổi tối trở nên khan hiếm trong các kỳ thi' },
      { id: 'B', text: 'The centre plans to close earlier', translation: 'Trung tâm dự định đóng cửa sớm hơn' },
      { id: 'C', text: 'More classes are being added', translation: 'Nhiều lớp học hơn đang được bổ sung' },
      { id: 'D', text: 'The help desk needs fewer visitors', translation: 'Bàn trợ giúp cần ít khách đến hơn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cuối đoạn 2 khẳng định: "The centre introduced the system because evening study spaces have become increasingly difficult to find during examination periods".',
    translation: 'Tại sao hệ thống đặt chỗ lại được đưa vào áp dụng?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_NOTICE_SPACE,
    passageTranslation: PASSAGE_NOTICE_SPACE_TRANS
  },
  {
    id: 'huit-th26-q35',
    type: 'reading_comprehension',
    questionText: 'Question 35. What should students do if they want to study in a group?',
    options: [
      { id: 'A', text: 'Make several individual reservations', translation: 'Đặt nhiều chỗ cá nhân riêng lẻ' },
      { id: 'B', text: 'Use the designated discussion rooms', translation: 'Sử dụng các phòng thảo luận được chỉ định' },
      { id: 'C', text: 'Visit before 6 p.m.', translation: 'Đến trước 6 giờ tối' },
      { id: 'D', text: 'Contact admissions', translation: 'Liên hệ phòng tuyển sinh' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 3 nêu: "Students who need to work in groups should use the designated discussion rooms".',
    translation: 'Sinh viên nên làm gì nếu muốn học theo nhóm?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_NOTICE_SPACE,
    passageTranslation: PASSAGE_NOTICE_SPACE_TRANS
  },
  {
    id: 'huit-th26-q36',
    type: 'reading_comprehension',
    questionText: 'Question 36. What is the purpose of the email?',
    options: [
      { id: 'A', text: 'To give instructions to student assistants', translation: 'Cung cấp hướng dẫn cho các trợ lý sinh viên' },
      { id: 'B', text: 'To explain immigration regulations', translation: 'Giải thích các quy định xuất nhập cảnh' },
      { id: 'C', text: 'To cancel an orientation', translation: 'Hủy buổi định hướng' },
      { id: 'D', text: 'To recruit lecturers', translation: 'Tuyển dụng giảng viên' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Email gửi tới "Student Assistants" để thông báo lịch trình, giờ giấc cần đến sớm và nhiệm vụ cụ thể trong buổi định hướng sinh viên quốc tế.',
    translation: 'Mục đích của bức email là gì?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)',
    readingPassage: PASSAGE_EMAIL_ORIENTATION,
    passageTranslation: PASSAGE_EMAIL_ORIENTATION_TRANS
  },
  {
    id: 'huit-th26-q37',
    type: 'reading_comprehension',
    questionText: 'Question 37. Why should assistants arrive early?',
    options: [
      { id: 'A', text: 'To register', translation: 'Để đăng ký' },
      { id: 'B', text: 'To collect name badges and review the schedule', translation: 'Nhận bảng tên và xem lại lịch trình' },
      { id: 'C', text: 'To meet the president', translation: 'Gặp hiệu trưởng' },
      { id: 'D', text: 'To submit immigration documents', translation: 'Nộp giấy tờ xuất nhập cảnh' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đoạn 1 nêu rõ: "Please arrive at least 20 minutes early so that you can collect your name badge and review the schedule".',
    translation: 'Tại sao các trợ lý sinh viên cần phải đến sớm?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_EMAIL_ORIENTATION,
    passageTranslation: PASSAGE_EMAIL_ORIENTATION_TRANS
  },
  {
    id: 'huit-th26-q38',
    type: 'reading_comprehension',
    questionText: 'Question 38. Which task is NOT assigned to the assistants?',
    options: [
      { id: 'A', text: 'Helping visitors find classrooms', translation: 'Giúp khách tìm phòng học' },
      { id: 'B', text: 'Answering basic campus questions', translation: 'Trả lời các câu hỏi cơ bản về khuôn viên' },
      { id: 'C', text: 'Explaining immigration regulations', translation: 'Giải thích các quy định về thị thực/xuất nhập cảnh' },
      { id: 'D', text: 'Directing students to registration', translation: 'Hướng dẫn sinh viên tới bàn đăng ký' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Đoạn 2 nói rõ: "You are not expected to answer questions about immigration regulations; such questions should be referred to the International Office". Do đó nhiệm vụ C không được giao cho trợ lý.',
    translation: 'Nhiệm vụ nào KHÔNG được phân công cho các trợ lý sinh viên?',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned',
    readingPassage: PASSAGE_EMAIL_ORIENTATION,
    passageTranslation: PASSAGE_EMAIL_ORIENTATION_TRANS
  },
  {
    id: 'huit-th26-q39',
    type: 'reading_comprehension',
    questionText: 'Question 39. The word “referred” is closest in meaning to _____.',
    options: [
      { id: 'A', text: 'directed to another person or office', translation: 'được chuyển tiếp / hướng dẫn sang người hoặc văn phòng khác' },
      { id: 'B', text: 'refused completely', translation: 'bị từ chối hoàn toàn' },
      { id: 'C', text: 'recorded', translation: 'được ghi nhận' },
      { id: 'D', text: 'translated', translation: 'được dịch' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "refer to" trong ngữ cảnh này nghĩa là chuyển câu hỏi, hướng dẫn sinh viên sang một bộ phận có thẩm quyền chuyên trách xử lý (directed to another office).',
    translation: 'Từ “referred” trong bài gần nghĩa nhất với từ/cụm từ nào?',
    topicTag: 'Đọc hiểu - Từ vựng ngữ cảnh',
    readingPassage: PASSAGE_EMAIL_ORIENTATION,
    passageTranslation: PASSAGE_EMAIL_ORIENTATION_TRANS
  },
  {
    id: 'huit-th26-q40',
    type: 'reading_comprehension',
    questionText: 'Question 40. What should an assistant do if unable to attend?',
    options: [
      { id: 'A', text: 'Arrive late', translation: 'Đến muộn' },
      { id: 'B', text: 'Reply to the email by Friday', translation: 'Phản hồi lại email trước thứ Sáu' },
      { id: 'C', text: 'Contact the help desk after the event', translation: 'Liên hệ bàn hỗ trợ sau sự kiện' },
      { id: 'D', text: 'Attend the next orientation', translation: 'Tham dự buổi định hướng tiếp theo' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Câu cuối cùng của email yêu cầu: "Please reply to this email by Friday if you are unable to attend".',
    translation: 'Một trợ lý nên làm gì nếu không thể tham dự?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_EMAIL_ORIENTATION,
    passageTranslation: PASSAGE_EMAIL_ORIENTATION_TRANS
  },
  {
    id: 'huit-th26-q41',
    type: 'reading_comprehension',
    questionText: 'Question 41. What is the main idea of the study-skills passage?',
    options: [
      { id: 'A', text: 'Students should study as many hours as possible', translation: 'Sinh viên nên học càng nhiều giờ càng tốt' },
      { id: 'B', text: 'Active and well-structured study can improve learning', translation: 'Việc học chủ động và có cấu trúc hợp lý có thể nâng cao hiệu quả học tập' },
      { id: 'C', text: 'Rereading is always better', translation: 'Đọc lại luôn tốt hơn' },
      { id: 'D', text: 'Breaks are more important than study', translation: 'Nghỉ giải lao quan trọng hơn học tập' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Toàn bài phân tích cách học hiệu quả (chất lượng học quan trọng hơn số giờ, phương pháp retrieval practice, chia phiên học ngắn) và kết luận: "The key is to use available time actively rather than simply increasing the number of hours".',
    translation: 'Ý chính của đoạn văn về kỹ năng học tập là gì?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)',
    readingPassage: PASSAGE_STUDY_SKILLS,
    passageTranslation: PASSAGE_STUDY_SKILLS_TRANS
  },
  {
    id: 'huit-th26-q42',
    type: 'reading_comprehension',
    questionText: 'Question 42. Short study sessions with breaks may help students _____.',
    options: [
      { id: 'A', text: 'maintain attention', translation: 'duy trì sự chú ý / tập trung' },
      { id: 'B', text: 'avoid difficult subjects', translation: 'tránh các môn học khó' },
      { id: 'C', text: 'eliminate practice', translation: 'loại bỏ việc luyện tập' },
      { id: 'D', text: 'memorize every detail', translation: 'ghi nhớ từng chi tiết nhỏ' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đoạn 1 nêu rõ: "Short sessions separated by breaks may help learners maintain attention, while one extremely long session can lead to fatigue".',
    translation: 'Các phiên học ngắn có giải lao có thể giúp sinh viên điều gì?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_STUDY_SKILLS,
    passageTranslation: PASSAGE_STUDY_SKILLS_TRANS
  },
  {
    id: 'huit-th26-q43',
    type: 'reading_comprehension',
    questionText: 'Question 43. Why can retrieval practice feel harder than rereading?',
    options: [
      { id: 'A', text: 'It requires active recall', translation: 'Nó đòi hỏi việc chủ động nhớ lại thông tin' },
      { id: 'B', text: 'It requires studying all night', translation: 'Nó đòi hỏi phải thức trắng đêm học' },
      { id: 'C', text: 'It prevents notes', translation: 'Nó ngăn cản việc ghi chú' },
      { id: 'D', text: 'It focuses on every word', translation: 'Nó tập trung vào từng từ một' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đoạn 2 giải thích: "...students close their books and try to recall the main ideas. Although this can feel harder than rereading, the effort involved in retrieving information helps strengthen memory" (đòi hỏi nỗ lực chủ động truy hồi/nhớ lại thông tin).',
    translation: 'Tại sao phương pháp chủ động truy hồi kiến thức có thể mang lại cảm giác khó khăn hơn việc đọc lại?',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)',
    readingPassage: PASSAGE_STUDY_SKILLS,
    passageTranslation: PASSAGE_STUDY_SKILLS_TRANS
  },
  {
    id: 'huit-th26-q44',
    type: 'reading_comprehension',
    questionText: 'Question 44. The word “strengthen” is closest in meaning to _____.',
    options: [
      { id: 'A', text: 'improve', translation: 'cải thiện / nâng cao' },
      { id: 'B', text: 'weaken', translation: 'làm suy yếu' },
      { id: 'C', text: 'remove', translation: 'loại bỏ' },
      { id: 'D', text: 'shorten', translation: 'rút ngắn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "strengthen memory" nghĩa là làm cho trí nhớ mạnh hơn, củng cố và cải thiện khả năng ghi nhớ (improve memory).',
    translation: 'Từ “strengthen” trong bài gần nghĩa nhất với từ nào?',
    topicTag: 'Đọc hiểu - Từ đồng nghĩa (Synonyms)',
    readingPassage: PASSAGE_STUDY_SKILLS,
    passageTranslation: PASSAGE_STUDY_SKILLS_TRANS
  },
  {
    id: 'huit-th26-q45',
    type: 'reading_comprehension',
    questionText: 'Question 45. What can be inferred about study time?',
    options: [
      { id: 'A', text: 'It is irrelevant', translation: 'Nó không liên quan' },
      { id: 'B', text: 'More hours always produce better results', translation: 'Học nhiều giờ hơn luôn mang lại kết quả tốt hơn' },
      { id: 'C', text: 'Study time matters, but how it is used also matters', translation: 'Thời gian học có vai trò quan trọng, nhưng cách sử dụng nó cũng quan trọng không kém' },
      { id: 'D', text: 'Everyone should study identical periods', translation: 'Mọi người nên học các khoảng thời gian giống hệt nhau' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Đoạn cuối khẳng định: "These methods do not mean that study time is unimportant... The key is to use available time actively rather than simply increasing the number of hours" (thời gian vẫn quan trọng, nhưng cách tận dụng quỹ thời gian đó mới là yếu tố quyết định).',
    translation: 'Điều gì có thể được suy luận ra về thời gian học tập?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)',
    readingPassage: PASSAGE_STUDY_SKILLS,
    passageTranslation: PASSAGE_STUDY_SKILLS_TRANS
  },
  {
    id: 'huit-th26-q46',
    type: 'cloze_test',
    questionText: 'Question 46. Which sentence best completes blank (46)?',
    options: [
      { id: 'A', text: 'However', translation: 'Tuy nhiên' },
      { id: 'B', text: 'For example', translation: 'Ví dụ' },
      { id: 'C', text: 'In addition to', translation: 'Ngoài ra' },
      { id: 'D', text: 'Because', translation: 'Bởi vì' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Vế trước cho phép sinh viên hủy lịch trước ít nhất 2 giờ. Vế sau đưa ra cảnh báo đối lập mang tính răn đe: việc liên tục hủy muộn sẽ ảnh hưởng đến quyền đặt chỗ. Do đó cần liên từ chỉ sự tương phản: "However" (Tuy nhiên).',
    translation: 'Từ nào phù hợp nhất để điền vào chỗ trống (46)?',
    topicTag: 'Từ nối (Conjunctions)',
    readingPassage: PASSAGE_TEXT_COMPLETION,
    passageTranslation: PASSAGE_TEXT_COMPLETION_TRANS
  },
  {
    id: 'huit-th26-q47',
    type: 'cloze_test',
    questionText: 'Question 47. Which word best completes blank (47)?',
    options: [
      { id: 'A', text: 'before', translation: 'trước khi' },
      { id: 'B', text: 'during', translation: 'trong khi' },
      { id: 'C', text: 'since', translation: 'kể từ khi' },
      { id: 'D', text: 'unless', translation: 'trừ phi' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Sinh viên được khuyến khích đọc bản hướng dẫn trước khi đặt lịch hẹn lần đầu ("before making their first appointment") để tránh bỡ ngỡ và sai sót.',
    translation: 'Từ nào phù hợp nhất để điền vào chỗ trống (47)?',
    topicTag: 'Giới từ chỉ thời gian',
    readingPassage: PASSAGE_TEXT_COMPLETION,
    passageTranslation: PASSAGE_TEXT_COMPLETION_TRANS
  },
  {
    id: 'huit-th26-q48',
    type: 'cloze_test',
    questionText: 'Question 48. Which sentence best completes blank (48)?',
    options: [
      { id: 'A', text: 'In fact', translation: 'Trên thực tế' },
      { id: 'B', text: 'Otherwise', translation: 'Nếu không thì' },
      { id: 'C', text: 'Although', translation: 'Mặc dù' },
      { id: 'D', text: 'Therefore', translation: 'Do đó' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Câu trước khuyên sinh viên nên liên hệ bàn hỗ trợ thay vì tự ý tạo nhiều lịch hẹn. "Otherwise" (Nếu không làm theo lời khuyên đó) các lượt đặt trùng lặp sẽ làm chậm hệ thống.',
    translation: 'Từ nào phù hợp nhất để điền vào chỗ trống (48)?',
    topicTag: 'Từ nối (Conjunctions)',
    readingPassage: PASSAGE_TEXT_COMPLETION,
    passageTranslation: PASSAGE_TEXT_COMPLETION_TRANS
  },
  {
    id: 'huit-th26-q49',
    type: 'cloze_test',
    questionText: 'Question 49. Which word best completes blank (49)?',
    options: [
      { id: 'A', text: 'Nevertheless', translation: 'Tuy nhiên / Dù vậy' },
      { id: 'B', text: 'Similarly', translation: 'Tương tự' },
      { id: 'C', text: 'Instead', translation: 'Thay vào đó' },
      { id: 'D', text: 'Unless', translation: 'Trừ khi' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Vế trước nói hệ thống mới rất hữu ích trong thời gian cao điểm. Vế sau đưa ra lưu ý đối lập: dù vậy sinh viên vẫn nên chủ động đặt sớm để chắc chắn. "Nevertheless" (Tuy nhiên/Dù vậy) là từ chuyển ý tương phản chính xác nhất.',
    translation: 'Từ nào phù hợp nhất để điền vào chỗ trống (49)?',
    topicTag: 'Từ nối (Conjunctions)',
    readingPassage: PASSAGE_TEXT_COMPLETION,
    passageTranslation: PASSAGE_TEXT_COMPLETION_TRANS
  },
  {
    id: 'huit-th26-q50',
    type: 'cloze_test',
    questionText: 'Question 50. Which word best completes blank (50)?',
    options: [
      { id: 'A', text: 'if', translation: 'nếu' },
      { id: 'B', text: 'as', translation: 'như là' },
      { id: 'C', text: 'than', translation: 'hơn' },
      { id: 'D', text: 'while', translation: 'trong khi' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cụm từ cố định chuẩn trong văn bản hành chính tiếng Anh: "as necessary" (khi/như thấy cần thiết) hoặc "make adjustments as necessary".',
    translation: 'Từ nào phù hợp nhất để điền vào chỗ trống (50)?',
    topicTag: 'Cụm từ cố định (Collocation)',
    readingPassage: PASSAGE_TEXT_COMPLETION,
    passageTranslation: PASSAGE_TEXT_COMPLETION_TRANS
  }
];

export const HUIT_TONG_HOP_2026_EXAM: ExamSet = {
  id: 'exam-huit-toeic-tong-hop-2026',
  title: 'Đề Luyện Phân Loại Anh Văn Đầu Vào HUIT - Đề Tổng Hợp HUIT × TOEIC Nâng Cao (2026)',
  description: 'Đề luyện thi phân loại Anh văn đầu vào Đại học Công Thương TP.HCM (HUIT) cấu trúc 50 câu: 15 Grammar & Structures, 15 Vocabulary và 20 Reading Comprehension phong cách TOEIC Part 5/6/7, bám sát khung công bố chi tiết năm học 2024–2025 kèm đáp án và giải thích chi tiết.',
  category: 'university',
  durationMinutes: 60,
  totalQuestions: 50,
  badge: 'HUIT × TOEIC NÂNG CAO',
  iconName: 'GraduationCap',
  questions: HUIT_TONG_HOP_2026_QUESTIONS
};
