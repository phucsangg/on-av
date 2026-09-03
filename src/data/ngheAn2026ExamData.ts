import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_CLOZE_1 = `the region has attracted a significant <mark>(1) ____________</mark> of investment
These plans are intended to make local tourism highly <mark>(2) ____________</mark>
Green Nghe An, a campaign <mark>(3) ____________</mark> by the provincial tourism board,
environmental protection has been established as <mark>(4) ____________</mark> priority
The campaign, <mark>(5) ____________</mark> was officially launched last month, has received
local businesses are being encouraged to <mark>(6) ____________</mark> with the government`;

const PASSAGE_CLOZE_1_TRANS = `Khu vực này đã thu hút một lượng đầu tư đáng kể (1).
Những kế hoạch này nhằm mục đích làm cho du lịch địa phương có lợi nhuận cao (2).
Xanh Nghệ An, một chiến dịch được phát động (3) bởi Sở Du lịch tỉnh,
bảo vệ môi trường đã được xác định là một ưu tiên trọng tâm (4).
Chiến dịch, thứ mà (5) đã được chính thức phát động tháng trước, đã nhận được...
các doanh nghiệp địa phương đang được khuyến khích hợp tác (6) với chính quyền.`;

const PASSAGE_CLOZE_2 = `In today’s digital world, <mark>(7) ____________</mark>, excessive screen time can gradually foster unhealthy routines...
excessive screen time results <mark>(8) ____________</mark> long-term health problems
sixty minutes of physical activity <mark>(9) ____________</mark> day
Develop <mark>(10) ____________</mark> through balanced daily meals.
prevent <mark>(11) ____________</mark> dehydration during demanding workouts
keep both body and mind in top <mark>(12) ____________</mark>`;

const PASSAGE_CLOZE_2_TRANS = `Trong thế giới số ngày nay, tuy nhiên (7), thời gian màn hình quá mức có thể gây ra thói quen không lành mạnh...
thời gian màn hình quá mức dẫn đến (8) các vấn đề sức khỏe lâu dài
60 phút hoạt động thể chất mỗi (9) ngày
Phát triển thói quen ăn uống lành mạnh (10) thông qua các bữa ăn cân bằng hằng ngày.
ngăn ngừa tình trạng mất nước nghiêm trọng (11) trong khi tập luyện nặng
giữ cho cả thể chất và tinh thần ở trạng thái tốt nhất (12).`;

const PASSAGE_SMART_CITIES = `Public transport is a vital part of modern cities, allowing millions of people to travel efficiently without relying on private cars. Buses, trains, and trams reduce traffic congestion, lower pollution levels, and save commuters time. In cities like Tokyo, London, and Singapore, well-organized public transport systems help residents move quickly across vast urban areas while minimizing environmental impact.

In addition to practical benefits, public transport can promote social connections. People from different backgrounds meet and interact daily while commuting, which can foster understanding and tolerance. Moreover, transit hubs often become centres for commerce and community activities. Cafes, shops, and small markets near stations provide spaces for social interaction and local business growth.

However, public transport systems face challenges. Overcrowding during peak hours, delays, and maintenance issues can frustrate commuters. Safety is another concern, especially late at night or in poorly lit areas. City authorities often respond with measures such as increased security, upgraded technology, and better scheduling to improve the commuter experience.

Researchers have found that investing in public transport brings long-term benefits. Cities with reliable transit attract more residents, reduce reliance on cars, and encourage sustainable urban growth. Innovative approaches, such as bike-sharing programs and integrated ticketing systems, further enhance convenience and accessibility. Public transport is not just a way to move people, it shapes how cities develop, how residents live, and how communities interact.`;

const PASSAGE_SMART_CITIES_TRANS = `Giao thông công cộng là một bộ phận thiết yếu của các đô thị hiện đại, cho phép hàng triệu người di chuyển hiệu quả mà không cần phụ thuộc vào xe cá nhân. Xe buýt, tàu hỏa và tàu điện không chỉ góp phần giảm ùn tắc giao thông, hạ thấp mức độ ô nhiễm mà còn giúp người đi làm tiết kiệm thời gian...`;

const PASSAGE_DEEPFAKE = `The advent of open-source software and highly intuitive, user-friendly applications has recently democratised access to synthetic media generation. Consequently, what was once the exclusive domain of Hollywood special effects studios can now be executed by an amateur with a standard laptop. [I] Two algorithms are pitted against each other in generative adversarial networks (GANs): one generates fake media, while the other attempts to detect the deception, forcing the generator to continuously improve.

Financial scams using cloned AI voices, fake videos affecting election campaigns, and troll farms eroding media trust have shown that deepfakes pose serious threats to society. [II] Convoluted jurisdictional boundaries often hamper global enforcement, making cross-border legal prosecution extremely difficult.

As deepfake technology evolves, so too do its evasive capabilities, creating a perpetual arms race between detectors and generators. Cultivating robust media literacy among the general public remains our most formidable defence against algorithmic deception.`;

const PASSAGE_DEEPFAKE_TRANS = `Sự ra đời của phần mềm nguồn mở và các ứng dụng thân thiện với người dùng gần đây đã phổ cập hóa việc tạo ra truyền thông tổng hợp. Kết quả là, những gì trước đây chỉ thuộc về các studio hiệu ứng đặc biệt của Hollywood thì nay có thể được thực hiện bởi một người nghiệp dư với một chiếc máy tính xách tay tiêu chuẩn...`;

export const NGHE_AN_2026_QUESTIONS: Question[] = [
  {
    id: 'na-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_1,
    passageTranslation: PASSAGE_CLOZE_1_TRANS,
    questionText: 'Question 1. the region has attracted a significant (1) ... of investment',
    options: [
      { id: 'A', text: 'deal', translation: 'thỏa thuận' },
      { id: 'B', text: 'sum', translation: 'tổng số / khoản tiền' },
      { id: 'C', text: 'number', translation: 'số lượng (đi với danh từ đếm được)' },
      { id: 'D', text: 'amount', translation: 'lượng (đi với danh từ không đếm được)' }
    ],
    correctAnswer: 'D',
    explanation: '• Danh từ "investment" là danh từ không đếm được. Với danh từ không đếm được, ta dùng cấu trúc "a significant amount of + N không đếm được". Do đó chọn D.',
    translation: 'Khu vực này đã thu hút một lượng đầu tư đáng kể.',
    topicTag: 'Từ vựng & Cấu trúc danh từ'
  },
  {
    id: 'na-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_1,
    passageTranslation: PASSAGE_CLOZE_1_TRANS,
    questionText: 'Question 2. These plans are intended to make local tourism highly (2) ...',
    options: [
      { id: 'A', text: 'profitably', translation: 'một cách có lợi nhuận (trạng từ)' },
      { id: 'B', text: 'profiteering', translation: 'trục lợi (danh từ/tính từ xấu)' },
      { id: 'C', text: 'profitable', translation: 'có sinh lời / có lợi nhuận (tính từ)' },
      { id: 'D', text: 'profiting', translation: 'đang tạo lợi nhuận (dạng V-ing)' }
    ],
    correctAnswer: 'C',
    explanation: '• Cấu trúc: make + Object + Adjective (làm cho cái gì như thế nào). Sau "make local tourism highly..." cần một tính từ bổ nghĩa. Chọn C. profitable.',
    translation: 'Những kế hoạch này nhằm làm cho du lịch địa phương có lợi nhuận cao.',
    topicTag: 'Từ loại (Word Class)'
  },
  {
    id: 'na-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_1,
    passageTranslation: PASSAGE_CLOZE_1_TRANS,
    questionText: 'Question 3. Green Nghe An, a campaign (3) ... by the provincial tourism board, ...',
    options: [
      { id: 'A', text: 'launching', translation: 'đang phát động (chủ động)' },
      { id: 'B', text: 'having launched', translation: 'đã phát động (hoàn thành chủ động)' },
      { id: 'C', text: 'launched', translation: 'được phát động (rút gọn mệnh đề bị động)' },
      { id: 'D', text: 'being launched', translation: 'đang được phát động' }
    ],
    correctAnswer: 'C',
    explanation: '• Đây là mệnh đề quan hệ rút gọn dạng bị động: "a campaign which was launched by..." -> rút gọn còn "a campaign launched by...". Chọn C.',
    translation: 'Chiến dịch Xanh Nghệ An, được phát động bởi Sở Du lịch tỉnh...',
    topicTag: 'Rút gọn mệnh đề quan hệ'
  },
  {
    id: 'na-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_1,
    passageTranslation: PASSAGE_CLOZE_1_TRANS,
    questionText: 'Question 4. environmental protection has been established as (4) ... priority',
    options: [
      { id: 'A', text: 'ordinary', translation: 'bình thường' },
      { id: 'B', text: 'minor', translation: 'thứ yếu / nhỏ' },
      { id: 'C', text: 'cardinal', translation: 'chính' },
      { id: 'D', text: 'central', translation: 'trọng tâm / chủ chốt' }
    ],
    correctAnswer: 'D',
    explanation: '• Collocation chuẩn tiếng Anh: "a central priority" (một ưu tiên trọng tâm/chủ chốt). Chọn D.',
    translation: 'Bảo vệ môi trường đã được xác định là một ưu tiên trọng tâm.',
    topicTag: 'Collocation'
  },
  {
    id: 'na-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_1,
    passageTranslation: PASSAGE_CLOZE_1_TRANS,
    questionText: 'Question 5. The campaign, (5) ... was officially launched last month, has received ...',
    options: [
      { id: 'A', text: 'that', translation: 'mà (không dùng sau dấu phẩy)' },
      { id: 'B', text: 'who', translation: 'người mà' },
      { id: 'C', text: 'what', translation: 'cái gì' },
      { id: 'D', text: 'which', translation: 'mà (thay cho sự vật/chiến dịch)' }
    ],
    correctAnswer: 'D',
    explanation: '• Đây là mệnh đề quan hệ không xác định có dấu phẩy. Thay thế cho danh từ chỉ vật "The campaign" ta dùng "which". Không dùng "that" sau dấu phẩy. Chọn D.',
    translation: 'Chiến dịch, thứ mà đã chính thức phát động vào tháng trước...',
    topicTag: 'Mệnh đề quan hệ'
  },
  {
    id: 'na-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_1,
    passageTranslation: PASSAGE_CLOZE_1_TRANS,
    questionText: 'Question 6. local businesses are being encouraged to (6) ... with the government',
    options: [
      { id: 'A', text: 'go along', translation: 'đồng tình với' },
      { id: 'B', text: 'get on', translation: 'hòa hợp với' },
      { id: 'C', text: 'pair up', translation: 'ghép cặp với' },
      { id: 'D', text: 'team up', translation: 'hợp tác / phối hợp với' }
    ],
    correctAnswer: 'D',
    explanation: '• Phrasal verb chuẩn: "team up with somebody" = hợp tác / phối hợp cùng ai. Chọn D.',
    translation: 'Các doanh nghiệp địa phương đang được khuyến khích hợp tác với chính quyền.',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'na-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_2,
    passageTranslation: PASSAGE_CLOZE_2_TRANS,
    questionText: 'Question 7. In today’s digital world, (7) ..., excessive screen time can gradually foster unhealthy routines...',
    options: [
      { id: 'A', text: 'for example', translation: 'ví dụ như' },
      { id: 'B', text: 'however', translation: 'tuy nhiên (tương phản)' },
      { id: 'C', text: 'in addition', translation: 'ngoài ra' },
      { id: 'D', text: 'therefore', translation: 'do đó' }
    ],
    correctAnswer: 'B',
    explanation: '• Mối quan hệ tương phản giữa tiện ích số và tác hại màn hình -> dùng trạng từ liên kết "however" (tuy nhiên). Chọn B.',
    translation: 'Trong thế giới số ngày nay, tuy nhiên, thời gian màn hình quá mức...',
    topicTag: 'Từ nối (Conjunctions)'
  },
  {
    id: 'na-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_2,
    passageTranslation: PASSAGE_CLOZE_2_TRANS,
    questionText: 'Question 8. excessive screen time results (8) ... long-term health problems',
    options: [
      { id: 'A', text: 'in', translation: 'dẫn đến / gây ra hậu quả' },
      { id: 'B', text: 'to', translation: 'đến' },
      { id: 'C', text: 'from', translation: 'bắt nguồn từ nguyên nhân' },
      { id: 'D', text: 'on', translation: 'trên' }
    ],
    correctAnswer: 'A',
    explanation: '• Cụm cố định: "result in + hậu quả" (dẫn đến hậu quả gì). Ngược lại "result from + nguyên nhân". Ở đây long-term health problems là hậu quả -> dùng "in". Chọn A.',
    translation: 'Thời gian màn hình quá mức dẫn đến các vấn đề sức khỏe lâu dài.',
    topicTag: 'Giới từ (Prepositions)'
  },
  {
    id: 'na-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_2,
    passageTranslation: PASSAGE_CLOZE_2_TRANS,
    questionText: 'Question 9. sixty minutes of physical activity (9) ... day',
    options: [
      { id: 'A', text: 'each', translation: 'mỗi (đi với danh từ số ít)' },
      { id: 'B', text: 'another', translation: 'một cái khác' },
      { id: 'C', text: 'all', translation: 'tất cả' },
      { id: 'D', text: 'whole', translation: 'toàn bộ (cần mạo từ the/a)' }
    ],
    correctAnswer: 'A',
    explanation: '• Cụm chuẩn chỉ tần suất: "each day" = mỗi ngày. Chọn A.',
    translation: '60 phút hoạt động thể chất mỗi ngày.',
    topicTag: 'Từ định lượng (Quantifiers)'
  },
  {
    id: 'na-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_2,
    passageTranslation: PASSAGE_CLOZE_2_TRANS,
    questionText: 'Question 10. Develop (10) ... through balanced daily meals.',
    options: [
      { id: 'A', text: 'sound dietary habits', translation: 'thói quen ăn uống lành mạnh' },
      { id: 'B', text: 'dietary sound habits', translation: 'sai trật tự từ' },
      { id: 'C', text: 'habits sound dietary', translation: 'sai trật tự từ' },
      { id: 'D', text: 'sound habits dietary', translation: 'sai trật tự từ' }
    ],
    correctAnswer: 'A',
    explanation: '• Trật tự cụm danh từ chuẩn trong tiếng Anh: Opinion/Quality (sound = lành mạnh) + Noun modifier (dietary = thuộc ăn uống) + Head noun (habits = thói quen) -> sound dietary habits. Chọn A.',
    translation: 'Phát triển thói quen ăn uống lành mạnh thông qua các bữa ăn cân bằng hằng ngày.',
    topicTag: 'Trật tự cụm danh từ'
  },
  {
    id: 'na-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_2,
    passageTranslation: PASSAGE_CLOZE_2_TRANS,
    questionText: 'Question 11. prevent (11) ... dehydration during demanding workouts',
    options: [
      { id: 'A', text: 'extreme', translation: 'cực đoan' },
      { id: 'B', text: 'severe', translation: 'nghiêm trọng (collocation chuẩn cho dehydration)' },
      { id: 'C', text: 'serious', translation: 'nghiêm trọng' },
      { id: 'D', text: 'acute', translation: 'cấp tính (dùng chuyên môn y khoa)' }
    ],
    correctAnswer: 'B',
    explanation: '• Collocation tự nhiên chuẩn nhất trong đời sống: "severe dehydration" (tình trạng mất nước nghiêm trọng). Chọn B.',
    translation: 'Ngăn ngừa tình trạng mất nước nghiêm trọng trong khi tập luyện nặng.',
    topicTag: 'Collocation'
  },
  {
    id: 'na-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_CLOZE_2,
    passageTranslation: PASSAGE_CLOZE_2_TRANS,
    questionText: 'Question 12. keep both body and mind in top (12) ...',
    options: [
      { id: 'A', text: 'shape', translation: 'phong độ / thể trạng' },
      { id: 'B', text: 'status', translation: 'trạng thái' },
      { id: 'C', text: 'situation', translation: 'tình huống' },
      { id: 'D', text: 'state', translation: 'trạng thái' }
    ],
    correctAnswer: 'A',
    explanation: '• Thành ngữ cố định (Idiom): "in top shape" = ở trạng thái/thể trạng tốt nhất. Chọn A.',
    translation: 'Giữ cho cả thể chất lẫn tinh thần ở trạng thái tốt nhất.',
    topicTag: 'Idioms & Thành ngữ'
  },
  {
    id: 'na-q13',
    type: 'reordering',
    questionText: 'Question 13. Choose the best arrangement of the following sentences to make a meaningful conversation:\nc. John asks about dietary supplements.\nb. Mary replies, suggesting Omega-3 and Vitamin D3.\na. John thanks Mary for the recommendation.',
    options: [
      { id: 'A', text: 'a – b – c', translation: 'Cảm ơn -> Trả lời -> Hỏi' },
      { id: 'B', text: 'b – c – a', translation: 'Trả lời -> Hỏi -> Cảm ơn' },
      { id: 'C', text: 'c – a – b', translation: 'Hỏi -> Cảm ơn -> Trả lời' },
      { id: 'D', text: 'c – b – a', translation: 'Hỏi -> Trả lời -> Cảm ơn' }
    ],
    correctAnswer: 'D',
    explanation: '• Trình tự giao tiếp logic: 1. John hỏi (c) -> 2. Mary trả lời gợi ý (b) -> 3. John cảm ơn (a). Trật tự chuẩn: c - b - a. Chọn D.',
    translation: 'Sắp xếp hội thoại theo thứ tự: Hỏi -> Trả lời -> Cảm ơn.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'na-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the best arrangement of the sentences to form a meaningful paragraph:\nd. For centuries, crafting fine spirits has been an art form.\nb. This traditional craftsmanship relies on centuries-old techniques.\ne. Recently, however, modern technology has begun to exert its influence.\na. For instance, automated distillation systems are now widely used.\nc. Despite these modern interventions, the true essence remains rooted in tradition.',
    options: [
      { id: 'A', text: 'd – b – a – c – e', translation: 'd-b-a-c-e' },
      { id: 'B', text: 'd – b – e – a – c', translation: 'd-b-e-a-c' },
      { id: 'C', text: 'b – d – e – a – c', translation: 'b-d-e-a-c' },
      { id: 'D', text: 'e – d – b – a – c', translation: 'e-d-b-a-c' }
    ],
    correctAnswer: 'B',
    explanation: '• d mở đoạn giới thiệu nghề truyền thống -> b làm rõ kỹ thuật truyền thống -> e chuyển ý sang công nghệ hiện đại -> a đưa ví dụ cụ thể công nghệ -> c kết luận dù hiện đại cốt lõi vẫn là truyền thống. Trật tự đúng: d - b - e - a - c. Chọn B.',
    translation: 'Sắp xếp đoạn văn theo mạch logic: Giới thiệu -> Chi tiết truyền thống -> Chuyển ý công nghệ -> Ví dụ -> Kết luận.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'na-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the best arrangement of sentences to make a formal proposal letter:\nc. I am writing to propose a new employee wellness initiative.\ne. The primary objective is to reduce workplace burnout.\na. Attached are supporting documentations outlining the budget.\nd. Based on these files, I believe this program will greatly benefit our team.\nb. Thank you for considering this proposal.',
    options: [
      { id: 'A', text: 'c – a – e – d – b', translation: 'c-a-e-d-b' },
      { id: 'B', text: 'e – c – a – d – b', translation: 'e-c-a-d-b' },
      { id: 'C', text: 'c – e – a – d – b', translation: 'c-e-a-d-b' },
      { id: 'D', text: 'c – e – d – a – b', translation: 'c-e-d-a-b' }
    ],
    correctAnswer: 'C',
    explanation: '• Mẫu thư đề xuất chuẩn: c (nêu mục đích thư) -> e (nêu mục tiêu cụ thể) -> a (gửi đính kèm tài liệu) -> d (kết luận lợi ích từ tài liệu) -> b (lời cảm ơn kết thư). Chọn C.',
    translation: 'Sắp xếp thư đề xuất: Mục đích -> Mục tiêu -> Đính kèm -> Nhận định -> Lời cảm ơn.',
    topicTag: 'Sắp xếp thư trang trọng'
  },
  {
    id: 'na-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the best arrangement of sentences:\nd. My initial experience with AI integration in the classroom was overwhelming.\nb. I had never anticipated how much preparation would be required.\nc. From organizing datasets to troubleshooting software, the workload was massive.\ne. Because of that workload, I often suffered from sleep deprivation.\na. As a result, I gained valuable insights into time management.',
    options: [
      { id: 'A', text: 'd – c – b – e – a', translation: 'd-c-b-e-a' },
      { id: 'B', text: 'b – d – c – e – a', translation: 'b-d-c-e-a' },
      { id: 'C', text: 'd – b – c – e – a', translation: 'd-b-c-e-a' },
      { id: 'D', text: 'd – b – e – c – a', translation: 'd-b-e-c-a' }
    ],
    correctAnswer: 'C',
    explanation: '• d giới thiệu trải nghiệm chung -> b nói suy nghĩ ban đầu -> c kể khối lượng công việc cụ thể -> e nêu hệ quả công việc (thức khuya) -> a kết luận bài học rút ra (As a result). Chọn C.',
    translation: 'Sắp xếp đoạn văn trải nghiệm cá nhân: Giới thiệu -> Suy nghĩ -> Chi tiết công việc -> Hệ quả -> Bài học.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'na-q17',
    type: 'reordering',
    questionText: 'Question 17. Choose the best arrangement of sentences:\ne. Mastering a foreign language requires immense patience and discipline.\nc. At first, confusing grammar rules and vocabulary lists made me feel discouraged.\na. To overcome this, I developed a structured daily practice routine.\nd. Consequently, my fluency and pronunciation improved dramatically.\nb. Today, I feel completely confident when speaking with native speakers.',
    options: [
      { id: 'A', text: 'e – a – c – d – b', translation: 'e-a-c-d-b' },
      { id: 'B', text: 'c – e – a – d – b', translation: 'c-e-a-d-b' },
      { id: 'C', text: 'e – c – a – d – b', translation: 'e-c-a-d-b' },
      { id: 'D', text: 'e – c – d – a – b', translation: 'e-c-d-a-b' }
    ],
    correctAnswer: 'C',
    explanation: '• e nêu chủ đề chung -> c nói khó khăn ban đầu -> a giải pháp khắc phục -> d kết quả cải thiện (Consequently) -> b hiện tại tự tin. Trật tự: e - c - a - d - b. Chọn C.',
    translation: 'Sắp xếp đoạn văn học ngôn ngữ: Chủ đề -> Khó khăn -> Giải pháp -> Kết quả -> Hiện tại.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'na-q18',
    type: 'cloze_test',
    questionText: 'Question 18. the province mobilised more than VND 66 trillion for new-style rural development, (18) ...',
    options: [
      { id: 'A', text: 'most key targets had already been fully achieved', translation: 'hầu hết các mục tiêu chính đã đạt được' },
      { id: 'B', text: 'brought visible gains across sectors while also underlining the scale of the remaining work', translation: 'mang lại những tiến bộ rõ rệt đồng thời chỉ ra quy mô công việc còn lại' },
      { id: 'C', text: 'encouraging expectations of equally rapid change everywhere', translation: 'khuyến khích kỳ vọng về sự thay đổi nhanh chóng' },
      { id: 'D', text: 'has largely removed the need for further rural support', translation: 'đã loại bỏ hoàn toàn nhu cầu hỗ trợ nông thôn' }
    ],
    correctAnswer: 'B',
    explanation: '• Về logic câu: Tỉnh đã huy động 66 nghìn tỷ đồng cho phát triển nông thôn mới, mang lại những thành tựu rõ rệt nhưng cũng chỉ ra quy mô công việc cần tiếp tục làm ở phía trước. Chọn B.',
    translation: 'Huy động hơn 66 nghìn tỷ đồng, mang lại những tiến bộ rõ rệt đồng thời chỉ ra quy mô công việc còn lại.',
    topicTag: 'Điền câu vào đoạn văn'
  },
  {
    id: 'na-q19',
    type: 'cloze_test',
    questionText: 'Question 19. make schools, clinics, and administrative centres easier-to-reach, (19) ...',
    options: [
      { id: 'A', text: 'which is why many communes regard transport projects as the most immediate sign of rural change', translation: 'đó là lý do tại sao nhiều xã coi các dự án giao thông là dấu hiệu thay đổi rõ nhất' },
      { id: 'B', text: 'although administrative efficiency remains questionable in the long run', translation: 'mặc dù hiệu quả hành chính vẫn còn là dấu hỏi' },
      { id: 'C', text: 'proving that roads are more valuable than any other form of support', translation: 'chứng minh đường xá giá trị hơn mọi hỗ trợ khác' },
      { id: 'D', text: 'meaning transport projects receive less attention from authorities', translation: 'nghĩa là dự án giao thông nhận ít sự chú ý hơn' }
    ],
    correctAnswer: 'A',
    explanation: '• Mệnh đề quan hệ "which is why..." giải thích hệ quả hợp lý của việc đường xá giúp tiếp cận trường học, trạm y tế dễ dàng hơn. Chọn A.',
    translation: 'Đó là lý do tại sao nhiều xã coi dự án giao thông là dấu hiệu thay đổi trực tiếp nhất.',
    topicTag: 'Điền câu vào đoạn văn'
  },
  {
    id: 'na-q20',
    type: 'cloze_test',
    questionText: 'Question 20. focused on OCOP goods, traceability systems, and digital promotion, (20) ...',
    options: [
      { id: 'A', text: 'suggesting expanding market access is no longer necessary', translation: 'gợi ý mở rộng thị trường không còn cần thiết' },
      { id: 'B', text: 'since better promotion and clearer product information can help local goods compete beyond their home areas', translation: 'vì quảng bá tốt hơn và thông tin sản phẩm rõ ràng giúp hàng địa phương cạnh tranh xa hơn' },
      { id: 'C', text: 'claiming that digital promotion alone guarantees success', translation: 'tuyên bố chỉ quảng bá số là đảm bảo thành công' },
      { id: 'D', text: 'denying the role of product information in modern trade', translation: 'phủ nhận vai trò của thông tin sản phẩm' }
    ],
    correctAnswer: 'B',
    explanation: '• Mệnh đề chỉ nguyên nhân "since better promotion..." giải thích lý do tại sao tập trung vào OCOP và truy xuất nguồn gốc lại quan trọng. Chọn B.',
    translation: 'Vì quảng bá tốt hơn và thông tin minh bạch giúp nông sản cạnh tranh vượt khỏi thị trường địa phương.',
    topicTag: 'Điền câu vào đoạn văn'
  },
  {
    id: 'na-q21',
    type: 'cloze_test',
    questionText: 'Question 21. There is evidence that this hesitation may be linked partly to limited technical skills. (21) ...',
    options: [
      { id: 'A', text: 'Digital tools have entirely replaced traditional sales channels everywhere', translation: 'Công cụ số đã thay thế hoàn toàn kênh bán hàng truyền thống' },
      { id: 'B', text: 'Online platforms are considered useless by most local producers', translation: 'Nền tảng online bị coi là vô ích' },
      { id: 'C', text: 'Risk therefore also affects the channels through which rural products are promoted and sold', translation: 'Rủi ro do đó cũng ảnh hưởng đến các kênh quảng bá và tiêu thụ sản phẩm nông thôn' },
      { id: 'D', text: 'E-commerce eliminates all potential financial hazards for small businesses', translation: 'Thương mại điện tử loại bỏ mọi rủi ro tài chính' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn văn nói về sự dè dặt khi bán hàng online -> Cầu nối logic nhất: Rủi ro do đó ảnh hưởng đến các kênh tiêu thụ nông sản. Chọn C.',
    translation: 'Rủi ro do đó cũng tác động đến các kênh quảng bá và bán sản phẩm nông thôn.',
    topicTag: 'Điền câu vào đoạn văn'
  },
  {
    id: 'na-q22',
    type: 'cloze_test',
    questionText: 'Question 22. Even so, digital tools are likely to remain important, (22) ...',
    options: [
      { id: 'A', text: 'provided digital sales matter more than quality and trust', translation: 'với điều kiện doanh số quan trọng hơn chất lượng' },
      { id: 'B', text: 'particularly when traceability and branding help small producers distinguish their goods in wider markets', translation: 'đặc biệt khi truy xuất nguồn gốc và thương hiệu giúp hộ sản xuất khẳng định vị thế' },
      { id: 'C', text: 'as face-to-face transactions have been completely abandoned', translation: 'vì giao dịch trực tiếp đã bị bỏ hoàn toàn' },
      { id: 'D', text: 'though many communes find online promotion less useful than word-of-mouth networks', translation: 'dù nhiều xã thấy quảng bá online kém hữu ích hơn truyền miệng' }
    ],
    correctAnswer: 'B',
    explanation: '• Bổ sung ý tích cực hợp lý: Công cụ số vẫn quan trọng, đặc biệt khi truy xuất nguồn gốc và thương hiệu giúp sản phẩm vươn xa. Chọn B.',
    translation: 'Đặc biệt khi việc truy xuất nguồn gốc và xây dựng thương hiệu giúp nhà sản xuất nhỏ khác biệt trên thị trường rộng lớn.',
    topicTag: 'Điền câu vào đoạn văn'
  },
  {
    id: 'na-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 23. The word "forge" in the passage is closest in meaning to:',
    options: [
      { id: 'A', text: 'create', translation: 'tạo ra / xây dựng' },
      { id: 'B', text: 'justify', translation: 'biện minh' },
      { id: 'C', text: 'implement', translation: 'thực thi' },
      { id: 'D', text: 'modify', translation: 'chỉnh sửa' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "forge" trong câu "forge better infrastructure plans" có nghĩa là tạo ra / xây dựng = create / develop. Chọn A.',
    translation: 'Từ "forge" gần nghĩa nhất với: create (tạo ra).',
    topicTag: 'Đọc hiểu - Từ vựng (Vocabulary)'
  },
  {
    id: 'na-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 24. Which benefit of public transport is NOT mentioned in paragraph 1?',
    options: [
      { id: 'A', text: 'power consumption', translation: 'mức tiêu thụ điện năng' },
      { id: 'B', text: 'atmospheric conditions of the area', translation: 'điều kiện không khí (air quality)' },
      { id: 'C', text: 'the water capacity of reservoirs', translation: 'dung tích nước của các hồ chứa' },
      { id: 'D', text: 'movement of vehicles', translation: 'chuyển động của xe cộ (traffic flows)' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 1 nhắc đến giao thông, khí thải ô nhiễm, tiết kiệm thời gian. Thông tin về "dung tích nước hồ chứa" KHÔNG được nhắc đến trong đoạn 1. Chọn C.',
    translation: 'Thông tin nào không được nhắc đến trong đoạn 1? -> Dung tích nước của các hồ chứa.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'na-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 25. The word "their" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'commuters', translation: 'người đi lại' },
      { id: 'B', text: 'automated solar panels', translation: 'các tấm pin mặt trời tự động' },
      { id: 'C', text: 'city authorities', translation: 'chính quyền thành phố' },
      { id: 'D', text: 'public transport systems', translation: 'hệ thống giao thông công cộng' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "their" thay thế cho danh từ đứng trước "Automated solar panels change their angles...". Chọn B.',
    translation: 'Từ "their" thay thế cho: các tấm pin mặt trời tự động.',
    topicTag: 'Đọc hiểu - Từ thay thế (Reference)'
  },
  {
    id: 'na-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 26. Which sentence best summarizes the main idea of paragraph 2?',
    options: [
      { id: 'A', text: 'Building efficiency rises only when costs increase.', translation: 'Hiệu quả tòa nhà chỉ tăng khi chi phí tăng.' },
      { id: 'B', text: 'Energy waste can never be prevented in modern urban planning.', translation: 'Lãng phí năng lượng không bao giờ ngăn được.' },
      { id: 'C', text: 'Public transport exclusively serves commercial goals.', translation: 'Giao thông chỉ phục vụ thương mại.' },
      { id: 'D', text: 'Because energy goes exactly where it helps, building efficiency rises while energy waste falls.', translation: 'Năng lượng được dùng đúng nơi giúp tăng hiệu quả và giảm lãng phí.' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 2 diễn đạt ý: Năng lượng được điều phối chính xác giúp tăng hiệu quả vận hành và giảm lãng phí năng lượng. Chọn D.',
    translation: 'Câu tóm tắt đúng nhất ý đoạn 2: Năng lượng được đưa đúng nơi giúp tăng hiệu quả và giảm lãng phí.',
    topicTag: 'Đọc hiểu - Tóm tắt ý (Main Idea)'
  },
  {
    id: 'na-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 27. The word "curbing" is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'restraining', translation: 'kìm hãm (đồng nghĩa)' },
      { id: 'B', text: 'intensifying', translation: 'gia tăng / làm mạnh thêm (trái nghĩa)' },
      { id: 'C', text: 'controlling', translation: 'kiểm soát (đồng nghĩa)' },
      { id: 'D', text: 'reducing', translation: 'cắt giảm (đồng nghĩa)' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "curbing" nghĩa là cắt giảm / kiểm soát. Trái nghĩa với nó là "intensifying" (gia tăng / đẩy mạnh). Chọn B.',
    translation: 'Từ "curbing" trái nghĩa với: intensifying (gia tăng).',
    topicTag: 'Đọc hiểu - Từ trái nghĩa (Antonym)'
  },
  {
    id: 'na-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 28. According to paragraph 4, cloud platforms and analytics tools help:',
    options: [
      { id: 'A', text: 'increase pollution monitoring costs', translation: 'tăng chi phí giám sát ô nhiễm' },
      { id: 'B', text: 'replace human decision making completely', translation: 'thay thế con người hoàn toàn' },
      { id: 'C', text: 'encourage residents to drive private cars', translation: 'khuyến khích người dân đi xe riêng' },
      { id: 'D', text: 'record pollution data and analyze weak points for policy recommendations', translation: 'ghi lại dữ liệu ô nhiễm và phân tích điểm yếu để đề xuất chính sách' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 4 nêu rõ: Các nền tảng đám mây ghi lại dữ liệu ô nhiễm và công cụ phân tích tìm điểm yếu để đề xuất chính sách. Chọn D.',
    translation: 'Nền tảng đám mây giúp: ghi lại dữ liệu ô nhiễm và đề xuất chính sách.',
    topicTag: 'Đọc hiểu - Chi tiết (Detailed Fact)'
  },
  {
    id: 'na-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 29. Paragraph 3 mainly discusses:',
    options: [
      { id: 'A', text: 'weather forecasts and rainfall patterns', translation: 'dự báo thời tiết' },
      { id: 'B', text: 'private car sales in urban centers', translation: 'doanh số xe cá nhân' },
      { id: 'C', text: 'automated toll collection booths', translation: 'trạm thu phí tự động' },
      { id: 'D', text: 'water distribution and reducing flooding risks', translation: 'phân phối nước và giảm rủi ro ngập lụt' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 3 tập trung thảo luận về quản lý nước và giảm thiểu nguy cơ lũ lụt trong thành phố. Chọn D.',
    translation: 'Đoạn 3 chủ yếu bàn về: phân phối nước và giảm rủi ro ngập lụt.',
    topicTag: 'Đọc hiểu - Ý chính đoạn văn'
  },
  {
    id: 'na-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 30. Which paragraph mentions energy devices self-adjusting according to environmental conditions?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 2 nhắc đến pin mặt trời tự chỉnh góc và cửa sổ thông minh tự điều chỉnh theo ánh sáng. Chọn B (Paragraph 2).',
    translation: 'Đoạn nào đề cập thiết bị năng lượng tự điều chỉnh? -> Đoạn 2.',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'na-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 31. What has contributed significantly to making deepfake technology widely accessible?',
    options: [
      { id: 'A', text: 'Strict international regulations', translation: 'Quy định quốc tế nghiêm ngặt' },
      { id: 'B', text: 'High costs of professional studio software', translation: 'Chi phí phần mềm đắt đỏ' },
      { id: 'C', text: 'The availability of open-source software and user-friendly apps', translation: 'Sự sẵn có của phần mềm nguồn mở và ứng dụng dễ dùng' },
      { id: 'D', text: 'Discontinued development of GAN algorithms', translation: 'Việc dừng phát triển thuật toán' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 1 nêu rõ: "the advent of open-source software and highly intuitive, user-friendly applications has recently democratised access...". Chọn C.',
    translation: 'Yếu tố giúp công cụ deepfake phổ biến rộng rãi: Phần mềm nguồn mở và app dễ dùng.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'na-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 32. The phrase "pitted against each other" in paragraph 1 is closest in meaning to:',
    options: [
      { id: 'A', text: 'joined in cooperation', translation: 'hợp tác với nhau' },
      { id: 'B', text: 'merged into one system', translation: 'sáp nhập làm một' },
      { id: 'C', text: 'set in competition', translation: 'đặt vào thế đối đầu / cạnh tranh' },
      { id: 'D', text: 'separated completely', translation: 'tách rời hoàn toàn' }
    ],
    correctAnswer: 'C',
    explanation: '• Cụm "pitted against each other" có nghĩa là được đưa vào thế đối đầu/cạnh tranh với nhau = set in competition. Chọn C.',
    translation: 'Cụm "pitted against each other" gần nghĩa nhất với: set in competition.',
    topicTag: 'Đọc hiểu - Idioms & Cụm từ'
  },
  {
    id: 'na-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 33. Paragraph 2 implies that deepfakes pose serious threats because:',
    options: [
      { id: 'A', text: 'they can facilitate financial fraud, political manipulation, and erode public trust', translation: 'gây gian lận tài chính, thao túng chính trị và xói mòn niềm tin' },
      { id: 'B', text: 'they exclusively target Hollywood celebrities', translation: 'chỉ nhắm vào sao Hollywood' },
      { id: 'C', text: 'they have completely eliminated the need for social media security', translation: 'loại bỏ nhu cầu bảo mật' },
      { id: 'D', text: 'they only affect audio recordings without impacting video', translation: 'chỉ ảnh hưởng âm thanh' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 2 liệt kê các tác hại từ lừa đảo tài chính bằng AI giọng nói, video giả mạo bầu cử đến tin giả. Tóm lại deepfakes đe dọa nghiêm trọng xã hội. Chọn A.',
    translation: 'Đoạn 2 hàm ý deepfakes gây đe dọa vì: lừa đảo tài chính, thao túng chính trị và làm mất niềm tin.',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'na-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 34. What makes global legal enforcement against deepfakes difficult?',
    options: [
      { id: 'A', text: 'Lack of interest from law enforcement agencies', translation: 'Cảnh sát không quan tâm' },
      { id: 'B', text: 'Convoluted jurisdictional boundaries across borders', translation: 'Ranh giới pháp lý phức tạp giữa các quốc gia' },
      { id: 'C', text: 'High costs of filing legal lawsuits', translation: 'Chi phí kiện tụng đắt' },
      { id: 'D', text: 'Complete absence of any cybersecurity technology', translation: 'Thiếu công nghệ an ninh mạng' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 2 ghi: "Convoluted jurisdictional boundaries often hamper global enforcement...". Ranh giới tài phán phức tạp gây khó khăn cho việc xử lý. Chọn B.',
    translation: 'Điều làm cho việc thực thi pháp luật quốc tế gặp khó khăn: Ranh giới pháp lý phức tạp giữa các quốc gia.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'na-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 35. The word "its" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'media literacy', translation: 'hiểu biết truyền thông' },
      { id: 'B', text: 'Hollywood studios', translation: 'studio Hollywood' },
      { id: 'C', text: 'open-source software', translation: 'phần mềm nguồn mở' },
      { id: 'D', text: 'deepfake technology', translation: 'công nghệ deepfake' }
    ],
    correctAnswer: 'D',
    explanation: '• Trong câu "As deepfake technology evolves, so too do its evasive capabilities...", "its" thay thế cho "deepfake technology". Chọn D.',
    translation: 'Từ "its" thay thế cho: deepfake technology.',
    topicTag: 'Đọc hiểu - Từ thay thế (Reference)'
  },
  {
    id: 'na-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 36. What is described as our most formidable defense against algorithmic deception?',
    options: [
      { id: 'A', text: 'Banning all artificial intelligence tools completely', translation: 'Cấm hoàn toàn AI' },
      { id: 'B', text: 'Relying solely on government censorship', translation: 'Chỉ dựa vào kiểm duyệt' },
      { id: 'C', text: 'Cultivating robust media literacy among the public', translation: 'Trang bị kỹ năng hiểu biết truyền thông cho công chúng' },
      { id: 'D', text: 'Shutting down open-source software platforms', translation: 'Đóng cửa phần mềm nguồn mở' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn cuối nêu: "Cultivating robust media literacy among the general public remains our most formidable defence...". Chọn C.',
    translation: 'Biện pháp phòng thủ mạnh mẽ nhất chống lừa dối thuật toán: Rèn luyện kỹ năng hiểu biết truyền thông.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'na-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 37. The phrase "a perpetual arms race" implies that:',
    options: [
      { id: 'A', text: 'Detection tools and evasion techniques continuously evolve in response to each other', translation: 'Công cụ phát hiện và kỹ thuật né tránh liên tục tiến hóa để rượt đuổi nhau' },
      { id: 'B', text: 'Governments are investing heavily in military defense software', translation: 'Chính phủ đầu tư phần mềm quân sự' },
      { id: 'C', text: 'Deepfake technology has stopped advancing', translation: 'Công nghệ deepfake đã dừng tiến bộ' },
      { id: 'D', text: 'Detection systems have completely defeated deepfake generators', translation: 'Hệ thống phát hiện đã thắng hoàn toàn' }
    ],
    correctAnswer: 'A',
    explanation: '• Cụm "perpetual arms race" (cuộc chạy đua vũ trang không hồi kết) ám chỉ sự rượt đuổi liên tục giữa công cụ phát hiện và kỹ thuật né tránh AI. Chọn A.',
    translation: 'Cụm "a perpetual arms race" hàm ý: Công cụ phát hiện và kỹ thuật né tránh liên tục rượt đuổi tiến hóa.',
    topicTag: 'Đọc hiểu - Hàm ý (Implication)'
  },
  {
    id: 'na-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 38. Where does the following sentence best fit? "Consequently, what was once the exclusive domain of Hollywood special effects studios can now be executed by an amateur with a standard laptop."',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'A',
    explanation: '• Câu chèn nói về việc deepfake từng chỉ dành cho studio chuyên nghiệp nay ai cũng làm được -> Nối rất khớp sau câu về sự phổ cập phần mềm nguồn mở ở đầu đoạn 1 (Vị trí [I]). Chọn A.',
    translation: 'Câu trên phù hợp nhất để chèn vào vị trí: [I].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'na-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 39. Which consequence of deepfakes is NOT mentioned in paragraph 2?',
    options: [
      { id: 'A', text: 'Causing physical damage to corporate headquarters', translation: 'Gây thiệt hại vật lý cho trụ sở công ty' },
      { id: 'B', text: 'Stealing millions through voice cloning financial fraud', translation: 'Gian lận tài chính triệu đô' },
      { id: 'C', text: 'Creating scandalous videos of public figures', translation: 'Tạo video tai tiếng' },
      { id: 'D', text: 'Eroding public trust in journalism', translation: 'Làm mất niềm tin báo chí' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 2 nhắc lừa đảo tài chính, video bầu cử, tin giả. Việc "gây thiệt hại vật lý cho trụ sở công ty" KHÔNG hề được nhắc đến. Chọn A.',
    translation: 'Hậu quả nào của deepfake KHÔNG được nhắc đến trong đoạn 2? -> Thiệt hại vật lý cho trụ sở.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'na-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DEEPFAKE,
    passageTranslation: PASSAGE_DEEPFAKE_TRANS,
    questionText: 'Question 40. Which of the following best summarizes the main message of the entire passage?',
    options: [
      { id: 'A', text: 'Deepfakes are harmless tools created purely for entertainment purposes.', translation: 'Deepfake là công cụ giải trí vô hại.' },
      { id: 'B', text: 'Hollywood studios will soon shut down due to open-source software.', translation: 'Studio Hollywood sắp đóng cửa.' },
      { id: 'C', text: 'Artificial intelligence should be banned internationally to prevent crimes.', translation: 'AI nên bị cấm hoàn toàn.' },
      { id: 'D', text: 'While deepfake technology grows accessible and poses societal risks, countering it requires media literacy, legal reform, and technology adaptation.', translation: 'Deepfake ngày càng phổ biến mang lại rủi ro, cần đối phó bằng giáo dục, pháp lý và công nghệ.' }
    ],
    correctAnswer: 'D',
    explanation: '• D tóm tắt bao quát toàn bộ bài: Deepfake phổ biến mang lại nhiều nguy cơ, cần đối phó bằng hiểu biết truyền thông, cải cách pháp lý và tiến bộ công nghệ. Chọn D.',
    translation: 'Tóm tắt đúng nhất thông điệp toàn bài: Deepfake phổ biến mang nguy cơ, cần đối phó bằng hiểu biết truyền thông, pháp lý và công nghệ.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  }
];

export const NGHE_AN_2026_EXAM: ExamSet = {
  id: 'exam-nghe-an-2026',
  title: 'Đề Thi Thử Tốt Nghiệp THPT 2026 - Sở GD&ĐT Nghệ An (Mã 0203)',
  description: 'Đề thi khảo sát chính thức tốt nghiệp THPT 2026 chuẩn 40 câu trắc nghiệm của Sở GD&ĐT Nghệ An kèm đáp án chi tiết và bản dịch.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'SỞ NGHỆ AN 2026',
  iconName: 'Award',
  questions: NGHE_AN_2026_QUESTIONS
};
