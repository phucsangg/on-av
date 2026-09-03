import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_CARBON_FOOTPRINT = `In their article "Just Plane Wrong: Celebs with the Worst Private Jet CO2 Emissions," YARD ranked Taylor Swift as the celebrity with the largest carbon footprint, attributing 138 tons of emissions to her private jet. Jay-Z and Floyd Mayweather followed closely behind. Swift's recent attendance at Kansas City Chiefs games to support her partner, Travis Kelce, has intensified media scrutiny. Celebrities receiving public criticism for air travel is hardly a new phenomenon. Singling out one individual risks oversimplifying a broader issue that predates any particular headline. [I]

Carbon emissions are, to some extent, unavoidable for high-profile public figures who travel frequently. In "Rich Enough to Offset," Laura Kiesel explores the ever-increasing carbon emissions of celebrities including Arnold Schwarzenegger and Leonardo DiCaprio, and how they have tried to account for them. One popular approach is carbon offsetting, a practice that allows individuals to compensate for emissions by funding environmental initiatives, including reforestation or renewable energy projects. [II] While such efforts may signal accountability, critics argue that they rarely neutralize emissions in any meaningful sense.

Professor Jon Erickson of the University of Vermont highlights concerns about the unintended consequences of certain offset projects, particularly in developing regions. Some initiatives, such as small-scale solar schemes established to counterbalance luxury emissions, may inadvertently limit resources available for essential services like healthcare and education. Furthermore, these efforts do little to address the root causes of excess carbon emissions. Erickson therefore calls for stronger legislative measures, including mandated caps on emissions that would directly address the source of the problem without displacing its impacts. [III]

Celebrity air travel remains under constant scrutiny, regardless of public sentiment. Although voluntary offset programmes may help restore celebrities' reputations, they can also legitimise continued overconsumption. In "Don't Bet on Offsets," A.C. Thompson and Duane Moles question whether such mechanisms can realistically counteract emissions. Companies such as TerraPass offer affluent consumers the opportunity to calculate and compensate for their carbon footprints, yet these transactions often occur in loosely regulated markets lacking consistent standards. [IV]

While carbon offsetting provides limited mitigation opportunities, meaningful progress depends on systemic reforms that reduce overall emissions and confront the underlying causes of climate impact.`;

const PASSAGE_CARBON_FOOTPRINT_TRANS = `Trong bài viết “Just Plane Wrong: Celebs with the Worst Private Jet CO2 Emissions”, YARD đã xếp Taylor Swift là người nổi tiếng có dấu chân carbon lớn nhất...`;

const PASSAGE_EAT_FROG = `EAT THAT FROG!
Imagine this scenario: You've taken up a new job or started a new course, <mark>(24) ____________</mark> you're already feeling overworked. You've got so many things to do. In his book Eat That Frog!, Brian Tracy explains how simple habits can help you reach your full potential and avoid burnout.

Below are four key strategies for improving productivity:
• Tackle your most difficult task first.
Your "frog" represents the task you are most likely to <mark>(25) ____________</mark> until later. Completing it early gives you a strong sense of achievement and builds motivation for the rest of the day.
• Write down clear goals.
Identify what you want to achieve in the next twelve months and focus on the objective that will have the greatest positive impact on your life. <mark>(26) ____________</mark> immediate action is essential for long-term success.
• Plan your day carefully.
Setting aside <mark>(27) ____________</mark> time for careful planning can also make a difference. Creating a to-do list allows you to organise tasks efficiently. Research suggests that systematic organisation can cause a noticeable increase in productivity, particularly when working towards a deadline.
• Develop consistent habits.
Observing successful people can improve your career prospects. When positive behaviours become second <mark>(28) ____________</mark>, they require less effort and produce better long-term results.
Ultimately, consistent effort enhances long-term sustainability and personal <mark>(29) ____________</mark>.`;

const PASSAGE_EAT_FROG_TRANS = `EAT THAT FROG! – ĂN CON ẾCH ĐÓ!
Hãy tưởng tượng tình huống này: Bạn vừa bắt đầu một công việc mới hoặc tham gia một khóa học mới, nhưng (24) bạn đã cảm thấy quá tải với công việc...`;

export const HANOI_CUM_2026_QUESTIONS: Question[] = [
  {
    id: 'hnc-q1',
    type: 'reordering',
    questionText: 'Question 1. Choose the best arrangement of the sentences to form a complaint letter:\nd. I am writing to complain about a washing machine I purchased on 22 February 2026.\na. After bringing it home and installing it correctly, I found that it did not work properly.\nc. Whenever the power is on, the drum does not spin, and the machine makes a strange noise.\ne. As this is a brand-new product and still under warranty, I would like to request a replacement or refund.\nb. Please advise me on how to return the faulty item. I look forward to your prompt response.',
    options: [
      { id: 'A', text: 'c – a – d – b – e', translation: 'c-a-d-b-e' },
      { id: 'B', text: 'd – a – c – e – b', translation: 'd-a-c-e-b' },
      { id: 'C', text: 'a – e – d – c – b', translation: 'a-e-d-c-b' },
      { id: 'D', text: 'e – d – b – c – a', translation: 'e-d-b-c-a' }
    ],
    correctAnswer: 'B',
    explanation: '• Mẫu thư khiếu nại mua hàng chuẩn: d (nêu lý do viết thư mua máy giặt) -> a (kể việc mang về nhà bị lỗi) -> c (mô tả lỗi lồng giặt kêu to không quay) -> e (yêu cầu đổi máy mới do bảo hành) -> b (hướng dẫn trả lại). Trật tự: d - a - c - e - b. Chọn B.',
    translation: 'Sắp xếp thư khiếu nại: Lý do -> Tình huống -> Chi tiết lỗi -> Yêu cầu đổi -> Lời kết.',
    topicTag: 'Sắp xếp thư khiếu nại'
  },
  {
    id: 'hnc-q2',
    type: 'reordering',
    questionText: 'Question 2. Choose the best arrangement of the sentences:\nb. The line graph shows population trends in Fantasia’s urban and rural areas.\nd. Overall, the urban population has increased while the rural population has decreased.\ne. In 1950, 94 per cent of Fantasia’s population lived in rural areas; this figure remained stable until 1960.\nc. By contrast, the urban population rose throughout the same period.\na. The upward trend continued and in 2020, more than half lived in urban areas.',
    options: [
      { id: 'A', text: 'b – c – d – a – e', translation: 'b-c-d-a-e' },
      { id: 'B', text: 'b – c – d – a – e', translation: 'b-c-d-a-e' },
      { id: 'C', text: 'b – d – e – c – a', translation: 'b-d-e-c-a' },
      { id: 'D', text: 'b – a – d – c – e', translation: 'b-a-d-c-e' }
    ],
    correctAnswer: 'C',
    explanation: '• Mô tả biểu đồ chuẩn IELTS Writing Task 1: b (giới thiệu biểu đồ) -> d (nhận xét tổng quan Overview) -> e (mô tả dân số nông thôn) -> c (By contrast, so sánh dân số thành thị) -> a (xu hướng tăng tiếp tục). Trật tự: b - d - e - c - a. Chọn C.',
    translation: 'Sắp xếp bài mô tả biểu đồ: Giới thiệu -> Tổng quan -> Chi tiết nông thôn -> So sánh thành thị -> Kết quả.',
    topicTag: 'Sắp xếp mô tả biểu đồ'
  },
  {
    id: 'hnc-q3',
    type: 'reordering',
    questionText: 'Question 3. Choose the best arrangement of the sentences:\nc. Lucy: Hey! How did your Pragmatics exam go?\na. Mike: Not bad, thanks. I’m just glad it’s over! How about your presentation?\ne. Lucy: Oh, it went really well. Thanks for helping me with it!\nd. Mike: No problem. So... do you feel like studying tomorrow for our English exam?\nb. Lucy: Sure thing! Come over around 10:00, after breakfast.',
    options: [
      { id: 'A', text: 'c – a – e – d – b', translation: 'c-a-e-d-b' },
      { id: 'B', text: 'c – d – e – a – b', translation: 'c-d-e-a-b' },
      { id: 'C', text: 'e – a – c – d – b', translation: 'e-a-c-d-b' },
      { id: 'D', text: 'e – d – b – c – a', translation: 'e-d-b-c-a' }
    ],
    correctAnswer: 'A',
    explanation: '• c (Lucy hỏi thi Pragmatics) -> a (Mike bảo ổn & hỏi thuyết trình) -> e (Lucy cảm ơn Mike) -> d (Mike rủ học Anh văn mai) -> b (Lucy đồng ý hẹn 10h). Trật tự: c - a - e - d - b. Chọn A.',
    translation: 'Sắp xếp hội thoại thi cử: Hỏi thi -> Trả lời & hỏi lại -> Cảm ơn -> Rủ học -> Đồng ý.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'hnc-q4',
    type: 'reordering',
    questionText: 'Question 4. Choose the best arrangement of the sentences:\ne. Media literacy is an essential skill in the modern world because it enables individuals to evaluate information.\na. Firstly, it helps people distinguish between reliable sources and misleading content.\nc. Media literacy also encourages audiences to recognize bias and persuasive techniques.\nb. As a result, individuals are better equipped to make informed decisions.\nd. On a larger scale, integrating media literacy education into school curricula is crucial.',
    options: [
      { id: 'A', text: 'c – b – a – e – d', translation: 'c-b-a-e-d' },
      { id: 'B', text: 'e – a – c – b – d', translation: 'e-a-c-b-d' },
      { id: 'C', text: 'c – a – b – d – e', translation: 'c-a-b-d-e' },
      { id: 'D', text: 'e – c – a – d – b', translation: 'e-c-a-d-b' }
    ],
    correctAnswer: 'B',
    explanation: '• e mở đoạn nêu chủ đề -> a lợi ích đầu tiên (Firstly) -> c lợi ích bổ sung (also) -> b kết quả (As a result) -> d mở rộng giáo dục nhà trường (On a larger scale). Trật tự: e - a - c - b - d. Chọn B.',
    translation: 'Sắp xếp đoạn văn hiểu biết truyền thông: Mở đoạn -> Lợi ích 1 -> Lợi ích 2 -> Kết quả -> Mở rộng.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'hnc-q5',
    type: 'reordering',
    questionText: 'Question 5. Choose the best arrangement of sentences:\nb. Jane: Hi, Katy. Are you going to Sam’s party at the weekend?\na. Katy: Honestly, I’m not sure if I’ll go. I don’t know Sam that well.\nc. Jane: Don’t worry. He’s very friendly, so I think you two will get along.',
    options: [
      { id: 'A', text: 'b – c – a', translation: 'b-c-a' },
      { id: 'B', text: 'b – a – c', translation: 'b-a-c' },
      { id: 'C', text: 'a – b – c', translation: 'a-b-c' },
      { id: 'D', text: 'c – a – b', translation: 'c-a-b' }
    ],
    correctAnswer: 'B',
    explanation: '• b (Jane rủ dự tiệc Sam) -> a (Katy phân vân bảo ít quen) -> c (Jane an ủi Sam thân thiện). Trật tự: b - a - c. Chọn B.',
    translation: 'Sắp xếp hội thoại dự tiệc: Rủ rê -> Ngập ngừng -> Trấn an.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'hnc-q14',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 14. The author mentions Taylor Swift in paragraph 1 primarily to:',
    options: [
      { id: 'A', text: 'suggest that media attention exaggerates environmental concerns', translation: 'gợi ý truyền thông phóng đại' },
      { id: 'B', text: 'illustrate how individual cases can obscure a broader structural issue', translation: 'minh họa việc trường hợp cá nhân có thể làm che khuất vấn đề cơ cấu rộng lớn hơn' },
      { id: 'C', text: 'argue that public figures are the main contributors', translation: 'lập luận người nổi tiếng đóng góp chính' },
      { id: 'D', text: 'demonstrate that celebrities are unfairly targeted', translation: 'chứng minh người nổi tiếng bị nhắm không công bằng' }
    ],
    correctAnswer: 'B',
    explanation: '• Tác giả đưa ví dụ Taylor Swift để dẫn đến nhận định: "Singling out one individual risks oversimplifying a broader issue" (chỉ nhắm vào 1 cá nhân làm đơn giản hóa vấn đề rộng lớn hơn). Chọn B.',
    translation: 'Mục đích nhắc đến Taylor Swift: Minh họa trường hợp cá nhân làm che khuất vấn đề cơ cấu rộng lớn.',
    topicTag: 'Đọc hiểu - Mục đích tác giả'
  },
  {
    id: 'hnc-q15',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 15. The phrase "such efforts" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'high-profile individuals', translation: 'cá nhân nổi tiếng' },
      { id: 'B', text: 'carbon emissions', translation: 'lượng khí thải carbon' },
      { id: 'C', text: 'environmental initiatives', translation: 'các sáng kiến môi trường (tài trợ trồng rừng/năng lượng)' },
      { id: 'D', text: 'renewable energy projects', translation: 'dự án năng lượng tái tạo' }
    ],
    correctAnswer: 'C',
    explanation: '• "such efforts" thay thế cho "funding environmental initiatives" (tài trợ các sáng kiến môi trường) ở câu trước. Chọn C.',
    translation: 'Cụm "such efforts" ám chỉ: các sáng kiến môi trường.',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'hnc-q16',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 16. According to paragraph 2, how do some celebrities attempt to manage their environmental impact?',
    options: [
      { id: 'A', text: 'By reducing international travel frequency', translation: 'Giảm tần suất đi lại' },
      { id: 'B', text: 'By complying with mandatory government regulations', translation: 'Tuân thủ quy định bắt buộc' },
      { id: 'C', text: 'By investing exclusively in large-scale infrastructure', translation: 'Đầu tư độc quyền cơ sở hạ tầng' },
      { id: 'D', text: 'By financially supporting environmental projects to offset emissions', translation: 'Hỗ trợ tài chính cho các dự án môi trường để bù đắp khí thải' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 2 nêu: "One popular approach is carbon offsetting... compensating for emissions by funding environmental initiatives". Chọn D.',
    translation: 'Cách người nổi tiếng quản lý tác động môi trường: Tài trợ tài chính bù đắp khí thải.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'hnc-q17',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 17. According to paragraph 3, some offset initiatives may be problematic because they:',
    options: [
      { id: 'A', text: 'eliminate local employment opportunities', translation: 'loại bỏ cơ hội việc làm' },
      { id: 'B', text: 'reduce investment in global renewable schemes', translation: 'giảm đầu tư năng lượng' },
      { id: 'C', text: 'unintentionally limit essential services in lower-income communities', translation: 'vô tình hạn chế các dịch vụ thiết yếu (y tế, giáo dục) ở cộng đồng thu nhập thấp' },
      { id: 'D', text: 'increase operational costs of solar installations', translation: 'tăng chi phí vận hành' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 3 ghi: "may inadvertently limit resources available for essential services like healthcare and education" (vô tình hạn chế tài nguyên cho y tế, giáo dục). Chọn C.',
    translation: 'Sáng kiến bù đắp có thể gây hại vì: vô tình hạn chế các dịch vụ thiết yếu tại cộng đồng thu nhập thấp.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'hnc-q18',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 18. Which of the following best paraphrases the underlined sentence in paragraph 3?',
    options: [
      { id: 'A', text: 'These initiatives are likely to eliminate primary factors.', translation: 'Loại bỏ yếu tố chính' },
      { id: 'B', text: 'These programmes shift responsibility to alternative sectors.', translation: 'Chuyển trách nhiệm' },
      { id: 'C', text: 'These initiatives make minimal progress in tackling the underlying issue of excessive carbon emissions.', translation: 'Những sáng kiến này đạt rất ít tiến triển trong việc giải quyết nguyên nhân gốc rễ phát thải quá mức' },
      { id: 'D', text: 'These efforts focus on visible emissions rather than overall volume.', translation: 'Tập trung khí thải dễ thấy' }
    ],
    correctAnswer: 'C',
    explanation: '• C diễn đạt lại chuẩn: "make minimal progress" tương ứng với "do little", "underlying issue" tương ứng với "root causes". Chọn C.',
    translation: 'Câu diễn đạt lại chuẩn nhất: Những sáng kiến này đạt rất ít tiến triển trong giải quyết nguyên nhân gốc rễ.',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'hnc-q19',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 19. Which of the following is TRUE according to paragraph 4?',
    options: [
      { id: 'A', text: 'Offset programmes guarantee measurable reductions.', translation: 'Bảo đảm giảm khí thải' },
      { id: 'B', text: 'TerraPass has eliminated doubts about carbon neutrality.', translation: 'TerraPass loại bỏ mọi nghi ngờ' },
      { id: 'C', text: 'Carbon offset markets operate under strict regulation.', translation: 'Thị trường quản lý chặt chẽ' },
      { id: 'D', text: 'Some offset transactions occur in poorly regulated environments.', translation: 'Một số giao dịch bù đắp diễn ra trong môi trường quản lý lỏng lẻo' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 4 nêu: "these transactions often occur in loosely regulated markets lacking consistent standards" (diễn ra trong thị trường quản lý lỏng lẻo). Chọn D.',
    translation: 'Phát biểu ĐÚNG: Giao dịch bù đắp diễn ra trong môi trường quản lý lỏng lẻo.',
    topicTag: 'Đọc hiểu - Chi tiết TRUE'
  },
  {
    id: 'hnc-q20',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 20. The word "legitimise" in paragraph 4 is closest in meaning to:',
    options: [
      { id: 'A', text: 'calculate', translation: 'tính toán' },
      { id: 'B', text: 'justify', translation: 'biện minh / hợp thức hóa' },
      { id: 'C', text: 'restrict', translation: 'hạn chế' },
      { id: 'D', text: 'conceal', translation: 'che giấu' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "legitimise" = hợp thức hóa / biện minh = justify. Chọn B. justify.',
    translation: 'Từ "legitimise" gần nghĩa nhất với: justify.',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'hnc-q21',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 21. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Carbon offsetting may alleviate certain environmental pressures but does not fundamentally transform emission-producing behaviour.', translation: 'Bù đắp carbon giảm bớt áp lực nhưng không thay đổi căn bản hành vi phát thải' },
      { id: 'B', text: 'Carbon offsetting provides a comprehensive remedy permanently eliminating emissions.', translation: 'Giải pháp toàn diện lâu dài' },
      { id: 'C', text: 'Carbon offsetting guarantees measurable climate benefits.', translation: 'Bảo đảm lợi ích đo lường' },
      { id: 'D', text: 'Carbon offsetting functions primarily as a PR strategy.', translation: 'Hoạt động nhưPR mà không có trách nhiệm' }
    ],
    correctAnswer: 'A',
    explanation: '• A suy luận chính xác từ bài đọc: Việc bù đắp giúp giảm bớt một số áp lực tạm thời nhưng không giải quyết nguyên nhân sâu xa hay làm thay đổi thói quen phát thải cá nhân. Chọn A.',
    translation: 'Suy luận đúng: Bù đắp carbon giảm áp lực nhưng không thay đổi căn bản hành vi phát thải.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'hnc-q22',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 22. Where does the sentence "This environment creates space for exaggerated claims of carbon neutrality without verifiable outcomes." best fit?',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[IV]', translation: 'Vị trí [IV]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[II]', translation: 'Vị trí [II]' }
    ],
    correctAnswer: 'B',
    explanation: '• "This environment" thay thế cho "loosely regulated markets lacking consistent standards" ở ngay trước vị trí [IV]. Chọn B ([IV]).',
    translation: 'Câu trên phù hợp nhất chèn vào vị trí: [IV].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'hnc-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CARBON_FOOTPRINT,
    passageTranslation: PASSAGE_CARBON_FOOTPRINT_TRANS,
    questionText: 'Question 23. Which of the following best summarises the passage?',
    options: [
      { id: 'A', text: 'Although celebrities adopt carbon offsetting to address emissions from private air travel, critics argue that these measures are inadequate and effective climate action requires systemic reform.', translation: 'Mặc dù người nổi tiếng bù đắp carbon nhưng các biện pháp này chưa đủ và cần cải cách hệ thống' },
      { id: 'B', text: 'Media scrutiny of celebrity jet use has intensified.', translation: 'Chỉ tập trung vào truyền thông' },
      { id: 'C', text: 'Growing public concern about luxury air travel has prompted calls for stricter government regulation.', translation: 'Kêu gọi siết chặt quản lý hàng không' },
      { id: 'D', text: 'Carbon offset markets provide a practical mechanism.', translation: 'Thị trường bù đắp là cơ chế thực tiễn' }
    ],
    correctAnswer: 'A',
    explanation: '• A tóm tắt đầy đủ 3 ý chính: Người nổi tiếng dùng bù đắp carbon -> Nhà phê bình cho rằng chưa đủ -> Cần cải cách hệ thống toàn diện. Chọn A.',
    translation: 'Tóm tắt toàn bài: Người nổi tiếng bù đắp carbon nhưng chưa đủ, cần cải cách hệ thống.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  },
  {
    id: 'hnc-q24',
    type: 'cloze_test',
    readingPassage: PASSAGE_EAT_FROG,
    passageTranslation: PASSAGE_EAT_FROG_TRANS,
    questionText: 'Question 24. You\'ve taken up a new job or started a new course, (24) ... you\'re already feeling overworked.',
    options: [
      { id: 'A', text: 'or', translation: 'hoặc' },
      { id: 'B', text: 'as', translation: 'bởi vì' },
      { id: 'C', text: 'so', translation: 'vì vậy' },
      { id: 'D', text: 'but', translation: 'nhưng (tương phản)' }
    ],
    correctAnswer: 'D',
    explanation: '• Tạo sự tương phản giữa việc mới bắt đầu công việc và cảm giác quá tải -> dùng "but". Chọn D. but.',
    translation: 'Bạn mới bắt đầu công việc mới nhưng đã cảm thấy quá tải.',
    topicTag: 'Từ nối'
  },
  {
    id: 'hnc-q25',
    type: 'cloze_test',
    readingPassage: PASSAGE_EAT_FROG,
    passageTranslation: PASSAGE_EAT_FROG_TRANS,
    questionText: 'Question 25. Your "frog" represents the task you are most likely to (25) ... until later.',
    options: [
      { id: 'A', text: 'reject', translation: 'từ chối' },
      { id: 'B', text: 'cancel', translation: 'hủy bỏ' },
      { id: 'C', text: 'abandon', translation: 'từ bỏ' },
      { id: 'D', text: 'postpone', translation: 'trì hoãn (postpone until later)' }
    ],
    correctAnswer: 'D',
    explanation: '• Cụm "postpone until later" (trì hoãn cho đến sau này) mô tả bản chất nhiệm vụ "con ếch". Chọn D. postpone.',
    translation: 'Con ếch đại diện cho nhiệm vụ bạn có khả năng trì hoãn cho đến sau này.',
    topicTag: 'Từ vựng'
  },
  {
    id: 'hnc-q26',
    type: 'cloze_test',
    readingPassage: PASSAGE_EAT_FROG,
    passageTranslation: PASSAGE_EAT_FROG_TRANS,
    questionText: 'Question 26. (26) ... immediate action is essential for long-term success.',
    options: [
      { id: 'A', text: 'Making', translation: 'making action (sai)' },
      { id: 'B', text: 'Taking', translation: 'taking action (hành động - collocation chuẩn)' },
      { id: 'C', text: 'Doing', translation: 'doing action (sai)' },
      { id: 'D', text: 'Getting', translation: 'getting action (sai)' }
    ],
    correctAnswer: 'B',
    explanation: '• Collocation chuẩn: "take action" (thực hiện hành động). Dạng V-ing làm chủ ngữ: "Taking immediate action...". Chọn B. Taking.',
    translation: 'Hành động ngay lập tức là điều thiết yếu cho thành công lâu dài.',
    topicTag: 'Collocation'
  },
  {
    id: 'hnc-q27',
    type: 'cloze_test',
    readingPassage: PASSAGE_EAT_FROG,
    passageTranslation: PASSAGE_EAT_FROG_TRANS,
    questionText: 'Question 27. Setting aside (27) ... time for careful planning can also make a difference.',
    options: [
      { id: 'A', text: 'a little', translation: 'một chút (danh từ không đếm được - nghĩa tích cực)' },
      { id: 'B', text: 'few', translation: 'rất ít (danh từ đếm được)' },
      { id: 'C', text: 'a few', translation: 'một vài (danh từ đếm được)' },
      { id: 'D', text: 'little', translation: 'rất ít (nghĩa tiêu cực)' }
    ],
    correctAnswer: 'A',
    explanation: '• "time" là danh từ không đếm được. Khuyên dành "một chút thời gian" (nghĩa tích cực) -> dùng "a little time". Chọn A. a little.',
    translation: 'Dành một chút thời gian cho việc lập kế hoạch cẩn thận.',
    topicTag: 'Từ định lượng'
  },
  {
    id: 'hnc-q28',
    type: 'cloze_test',
    readingPassage: PASSAGE_EAT_FROG,
    passageTranslation: PASSAGE_EAT_FROG_TRANS,
    questionText: 'Question 28. When positive behaviours become second (28) ..., they require less effort.',
    options: [
      { id: 'A', text: 'routine', translation: 'thói quen' },
      { id: 'B', text: 'habit', translation: 'thói quen' },
      { id: 'C', text: 'instinct', translation: 'bản năng' },
      { id: 'D', text: 'nature', translation: 'thành ngữ: become second nature' }
    ],
    correctAnswer: 'D',
    explanation: '• Thành ngữ (Idiom): "become second nature" = trở thành bản năng tự nhiên / thói quen tự nhiên. Chọn D. nature.',
    translation: 'Khi những hành vi tích cực trở thành bản năng tự nhiên...',
    topicTag: 'Idioms'
  },
  {
    id: 'hnc-q29',
    type: 'cloze_test',
    readingPassage: PASSAGE_EAT_FROG,
    passageTranslation: PASSAGE_EAT_FROG_TRANS,
    questionText: 'Question 29. Ultimately, consistent effort enhances long-term sustainability and personal (29) ...',
    options: [
      { id: 'A', text: 'effectiveness', translation: 'hiệu quả (danh từ)' },
      { id: 'B', text: 'effective', translation: 'tính từ' },
      { id: 'C', text: 'effectively', translation: 'trạng từ' },
      { id: 'D', text: 'effect', translation: 'tác động' }
    ],
    correctAnswer: 'A',
    explanation: '• Sau tính từ "personal" cần danh từ chỉ phẩm chất: "personal effectiveness" (hiệu quả cá nhân). Chọn A. effectiveness.',
    translation: 'Nỗ lực bền bỉ sẽ nâng cao tính bền vững lâu dài và hiệu quả cá nhân.',
    topicTag: 'Từ loại (Word Form)'
  }
];

export const HANOI_CUM_2026_EXAM: ExamSet = {
  id: 'exam-hanoi-cum-2026',
  title: 'Đề Thi Thử Tốt Nghiệp THPT 2026 - Sở GD&ĐT Hà Nội (Cụm Liên Trường Lần 1)',
  description: 'Đề thi thử tốt nghiệp THPT 2026 của Cụm Liên trường Hà Nội kèm đáp án chi tiết và giải thích bài đọc Carbon Footprint & Eat That Frog.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 30,
  badge: 'CỤM HÀ NỘI 2026',
  iconName: 'BookMarked',
  questions: HANOI_CUM_2026_QUESTIONS
};
