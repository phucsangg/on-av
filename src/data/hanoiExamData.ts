import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_HANOI_ENVIRONMENT = `Protecting environmental quality is essential for sustainable urban living. In Hanoi, rapid industrial growth and vehicle emissions <mark>(6) have led to severe air pollution</mark>, affecting public health. <mark>(7) To address this critical issue</mark>, the municipal government has implemented various green policies and promoted public transport. <mark>(8) Notwithstanding the initial challenges in infrastructure development</mark>, many citizens are gradually adopting electric vehicles and bicycles. <mark>(9) Encouraging community participation</mark> in tree-planting campaigns and waste recycling further strengthens these sustainability goals. <mark>(10) Unless strict environmental regulations are enforced continuously</mark>, urban pollution will continue to pose long-term health risks.`;

const PASSAGE_HANOI_ENVIRONMENT_TRANS = `BẢO VỆ MÔI TRƯỜNG ĐÔ THỊ TẠI HÀ NỘI\nBảo vệ chất lượng môi trường là yếu tố thiết yếu cho cuộc sống đô thị bền vững. Tại Hà Nội, sự tăng trưởng công nghiệp nhanh chóng và khí thải từ phương tiện giao thông đã dẫn đến tình trạng ô nhiễm không khí nghiêm trọng, ảnh hưởng trực tiếp đến sức khỏe cộng đồng. Để giải quyết vấn đề cấp bách này, chính quyền thành phố đã triển khai nhiều chính sách xanh và thúc đẩy giao thông công cộng. Mặc dù có những thách thức ban đầu trong việc phát triển hạ tầng, nhiều người dân đang dần chuyển sang sử dụng xe điện và xe đạp. Việc khuyến khích sự tham gia của cộng đồng vào các chiến dịch trồng cây và tái chế rác thải tiếp tục củng cố các mục tiêu bền vững này. Trừ khi các quy định môi trường nghiêm ngặt được thực thi liên tục, ô nhiễm đô thị sẽ tiếp tục đe dọa sức khỏe lâu dài.`;

const PASSAGE_HANOI_DIGITAL_TRANSFORMATION = `Digital transformation in education has revolutionized teaching and learning practices across Vietnam. The adoption of online learning platforms and AI-assisted educational tools allows students to access personalized study materials anytime and anywhere. Furthermore, teachers can monitor student progress in real time and adapt their pedagogical techniques accordingly.

However, the rapid transition to digital learning also highlights the digital divide between urban and rural areas. Students in remote regions often face limited internet connectivity and a lack of digital devices. Addressing this inequality requires strategic investments in telecommunications infrastructure and financial support for disadvantaged communities.

In conclusion, while technology offers unprecedented opportunities for educational advancement, achieving equitable access remains a crucial priority for educational policymakers.`;

const PASSAGE_HANOI_DIGITAL_TRANSFORMATION_TRANS = `CHUYỂN ĐỔI SỐ TRONG GIÁO DỤC TẠI VIỆT NAM\nChuyển đổi số trong giáo dục đã cách mạng hóa các phương pháp dạy và học trên khắp Việt Nam. Việc áp dụng các nền tảng học trực tuyến và công cụ giáo dục hỗ trợ bởi AI cho phép học sinh tiếp cận tài liệu học tập được cá nhân hóa mọi lúc, mọi nơi. Hơn nữa, giáo viên có thể theo dõi tiến độ của học sinh theo thời gian thực và điều chỉnh phương pháp giảng dạy tương ứng.

Tuy nhiên, sự chuyển đổi nhanh chóng sang học tập kỹ thuật số cũng làm nổi bật khoảng cách số giữa khu vực thành thị và nông thôn. Học sinh ở các vùng sâu vùng xa thường gặp khó khăn về kết nối internet hạn chế và thiếu thiết bị kỹ thuật số. Việc giải quyết sự bất bình đẳng này đòi hỏi các khoản đầu tư chiến lược vào hạ tầng viễn thông và hỗ trợ tài chính cho các cộng đồng khó khăn.

Tóm lại, mặc dù công nghệ mang lại những cơ hội chưa từng có cho sự tiến bộ giáo dục, việc đạt được sự tiếp cận bình đẳng vẫn là ưu tiên quan trọng đối với các nhà hoạch định chính sách giáo dục.`;

export const HANOI_2026_QUESTIONS: Question[] = [
  // SECTION 1: REORDERING (Q1 - Q5)
  {
    id: 'hn-q1',
    type: 'reordering',
    questionText: 'Question 1. Choose the correct order of letter sentences to make a meaningful letter:\na. Dear Ms. Linh, I am writing to inquire about the upcoming English debating contest organized by your school.\nb. Could you please provide details regarding the registration deadline and candidate requirements?\nc. Thank you very much for your time and assistance, and I look forward to your reply.\nd. Participating in this competition would be a wonderful opportunity for our students to enhance their public speaking skills.\ne. Our school debate team is extremely eager to join and prepare thoroughly for the event.',
    options: [
      { id: 'A', text: 'a - d - e - b - c', translation: 'Trật tự: a -> d -> e -> b -> c' },
      { id: 'B', text: 'b - a - d - e - c', translation: 'Trật tự: b -> a -> d -> e -> c' },
      { id: 'C', text: 'a - b - d - e - c', translation: 'Trật tự: a -> b -> d -> e -> c' },
      { id: 'D', text: 'd - a - b - e - c', translation: 'Trật tự: d -> a -> b -> e -> c' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - d - e - b - c): Nêu lý do viết thư (a) -> Đánh giá ý nghĩa cuộc thi (d) -> Thể hiện sự hào hứng của đội nhà (e) -> Hỏi chi tiết thông tin (b) -> Cảm ơn và kết thư (c).',
    translation: 'Sắp xếp các câu thành bức thư hoàn chỉnh gửi ban tổ chức cuộc thi tranh biện.',
    topicTag: 'Sắp xếp thư (Letter Structure)'
  },
  {
    id: 'hn-q2',
    type: 'reordering',
    questionText: 'Question 2. Choose the correct order of dialogue sentences:\na. Mai: Have you checked out the new digital library platform?\nb. Phong: Yes, it’s amazing! We can borrow e-books and listen to audiobooks anytime.\nc. Mai: That’s so convenient, especially when preparing for our final exams.',
    options: [
      { id: 'A', text: 'a - b - c', translation: 'Trật tự: a -> b -> c' },
      { id: 'B', text: 'b - a - c', translation: 'Trật tự: b -> a -> c' },
      { id: 'C', text: 'c - a - b', translation: 'Trật tự: c -> a -> b' },
      { id: 'D', text: 'a - c - b', translation: 'Trật tự: a -> c -> b' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - c): Mai hỏi về thư viện số (a) -> Phong xác nhận trải nghiệm tuyệt vời (b) -> Mai nhận xét sự tiện lợi (c).',
    translation: 'Sắp xếp đoạn hội thoại về ứng dụng thư viện số.',
    topicTag: 'Sắp xếp hội thoại (Dialogue Structure)'
  },
  {
    id: 'hn-q3',
    type: 'reordering',
    questionText: 'Question 3. Choose the correct order of sentences to make a story:\na. Recognizing the problem, our youth club decided to launch a local green campaign.\nb. At first, many residents were reluctant because they thought sorting waste would be time-consuming.\nc. Plastic waste pollution in our neighborhood had reached an alarming level last year.\nd. Eventually, the neighborhood became noticeably cleaner, and everyone felt proud of our shared accomplishment.\ne. However, we organized weekly workshops demonstrating simple ways to recycle and compost organic materials.',
    options: [
      { id: 'A', text: 'c - a - b - e - d', translation: 'Trật tự: c -> a -> b -> e -> d' },
      { id: 'B', text: 'a - c - b - e - d', translation: 'Trật tự: a -> c -> b -> e -> d' },
      { id: 'C', text: 'c - b - a - e - d', translation: 'Trật tự: c -> b -> a -> e -> d' },
      { id: 'D', text: 'b - c - a - e - d', translation: 'Trật tự: b -> c -> a -> e -> d' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (c - a - b - e - d): Nêu thực trạng ô nhiễm rác nhựa (c) -> Thành lập câu lạc bộ xanh (a) -> Khó khăn ban đầu (b) -> Giải pháp hội thảo (e) -> Kết quả tích cực (d).',
    translation: 'Sắp xếp các câu thành câu chuyện hoàn chỉnh về chiến dịch môi trường.',
    topicTag: 'Sắp xếp câu chuyện (Story Structure)'
  },
  {
    id: 'hn-q4',
    type: 'reordering',
    questionText: 'Question 4. Choose the correct order of dialogue sentences:\na. Minh: Should we choose artificial intelligence or renewable energy for our group presentation?\nb. Hoa: I think renewable energy is more relevant to our environmental unit.\nc. Minh: Good point! Let’s gather data on solar and wind power projects in Vietnam.',
    options: [
      { id: 'A', text: 'a - b - c', translation: 'Trật tự: a -> b -> c' },
      { id: 'B', text: 'b - a - c', translation: 'Trật tự: b -> a -> c' },
      { id: 'C', text: 'c - b - a', translation: 'Trật tự: c -> b -> a' },
      { id: 'D', text: 'a - c - b', translation: 'Trật tự: a -> c -> b' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - c): Minh đưa ra hai sự lựa chọn (a) -> Hoa đề xuất chọn năng lượng tái tạo (b) -> Minh tán thành và phân công tìm dữ liệu (c).',
    translation: 'Sắp xếp hội thoại thảo luận chủ đề bài thuyết trình nhóm.',
    topicTag: 'Sắp xếp hội thoại ngắn'
  },
  {
    id: 'hn-q5',
    type: 'reordering',
    questionText: 'Question 5. Choose the correct order of sentences to make a paragraph:\na. Artificial intelligence is transforming traditional healthcare systems by improving diagnostic accuracy.\nb. Furthermore, AI-powered algorithms can analyze medical images faster than human experts.\nc. Nevertheless, ethical concerns regarding patient data privacy must be addressed rigorously.\nd. Consequently, hospitals are investing heavily in smart medical software.\ne. In conclusion, AI holds immense potential to enhance patient care if deployed responsibly.',
    options: [
      { id: 'A', text: 'a - b - d - c - e', translation: 'Trật tự: a -> b -> d -> c -> e' },
      { id: 'B', text: 'a - d - b - c - e', translation: 'Trật tự: a -> d -> b -> c -> e' },
      { id: 'C', text: 'b - a - d - c - e', translation: 'Trật tự: b -> a -> d -> c -> e' },
      { id: 'D', text: 'a - c - b - d - e', translation: 'Trật tự: a -> c -> b -> d -> e' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - d - c - e): Giới thiệu AI trong y tế (a) -> Bổ sung lợi ích (b) -> Hệ quả bệnh viện đầu tư (d) -> Thách thức bảo mật (c) -> Kết luận (e).',
    translation: 'Sắp xếp các câu thành đoạn văn luận về trí tuệ nhân tạo trong y tế.',
    topicTag: 'Sắp xếp đoạn văn nghị luận'
  },

  // SECTION 2: CLOZE PASSAGE - URBAN ENVIRONMENT (Q6 - Q10)
  {
    id: 'hn-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_HANOI_ENVIRONMENT,
    passageTranslation: PASSAGE_HANOI_ENVIRONMENT_TRANS,
    questionText: 'Question 6. Choose the option that best completes blank (6):',
    options: [
      { id: 'A', text: 'have led to severe air pollution', translation: 'đã dẫn đến ô nhiễm không khí nghiêm trọng' },
      { id: 'B', text: 'leading to severe air pollution', translation: 'dẫn đến ô nhiễm không khí (V-ing)' },
      { id: 'C', text: 'led severe air pollution to', translation: 'sai trật tự cú pháp' },
      { id: 'D', text: 'which have led severe air pollution', translation: 'sai cấu trúc đại từ quan hệ' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Thì hiện tại hoàn thành "have led to" làm động từ chính của mệnh đề.',
    translation: '(6) ____________, ảnh hưởng trực tiếp đến sức khỏe cộng đồng.',
    topicTag: 'Thì Hiện Tại Hoàn Thành (Present Perfect)'
  },
  {
    id: 'hn-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_HANOI_ENVIRONMENT,
    passageTranslation: PASSAGE_HANOI_ENVIRONMENT_TRANS,
    questionText: 'Question 7. Choose the option that best completes blank (7):',
    options: [
      { id: 'A', text: 'To address this critical issue', translation: 'Để giải quyết vấn đề cấp bách này (To-V chỉ mục đích)' },
      { id: 'B', text: 'Addressed this critical issue', translation: 'Đã giải quyết vấn đề này' },
      { id: 'C', text: 'Having addressed this critical issue', translation: 'Sau khi giải quyết vấn đề này' },
      { id: 'D', text: 'For addressing this critical issue', translation: 'Cho việc giải quyết vấn đề này' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "To + V" đứng đầu câu chỉ mục đích của hành động.',
    translation: '(7) ____________, chính quyền thành phố đã triển khai nhiều chính sách xanh.',
    topicTag: 'Mệnh đề chỉ mục đích (To-V)'
  },
  {
    id: 'hn-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_HANOI_ENVIRONMENT,
    passageTranslation: PASSAGE_HANOI_ENVIRONMENT_TRANS,
    questionText: 'Question 8. Choose the option that best completes blank (8):',
    options: [
      { id: 'A', text: 'Notwithstanding the initial challenges in infrastructure development', translation: 'Mặc dù có những thách thức ban đầu trong phát triển hạ tầng' },
      { id: 'B', text: 'Because of the initial challenges in infrastructure development', translation: 'Bởi vì những thách thức ban đầu...' },
      { id: 'C', text: 'Provided that initial challenges in infrastructure development', translation: 'Với điều kiện là những thách thức...' },
      { id: 'D', text: 'Owing to initial challenges in infrastructure development', translation: 'Do những thách thức ban đầu...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Notwithstanding + N-phrase" mang nghĩa nhượng bộ (Mặc dù có khó khăn nhưng người dân vẫn đón nhận).',
    translation: '(8) ____________, nhiều người dân đang dần chuyển sang xe điện.',
    topicTag: 'Giới từ chỉ sự nhượng bộ (Notwithstanding)'
  },
  {
    id: 'hn-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_HANOI_ENVIRONMENT,
    passageTranslation: PASSAGE_HANOI_ENVIRONMENT_TRANS,
    questionText: 'Question 9. Choose the option that best completes blank (9):',
    options: [
      { id: 'A', text: 'Encouraging community participation', translation: 'Việc khuyến khích sự tham gia của cộng đồng (V-ing làm chủ ngữ)' },
      { id: 'B', text: 'To encourage community participation', translation: 'Để khuyến khích sự tham gia...' },
      { id: 'C', text: 'Encouraged community participation', translation: 'Được khuyến khích sự tham gia...' },
      { id: 'D', text: 'Having encouraged community participation', translation: 'Sau khi khuyến khích sự tham gia...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Danh động từ (Gerund V-ing) đóng vai trò chủ ngữ của câu.',
    translation: '(9) ____________ vào các chiến dịch xanh tiếp tục củng cố các mục tiêu bền vững.',
    topicTag: 'Danh động từ làm Chủ ngữ (Gerund Subject)'
  },
  {
    id: 'hn-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_HANOI_ENVIRONMENT,
    passageTranslation: PASSAGE_HANOI_ENVIRONMENT_TRANS,
    questionText: 'Question 10. Choose the option that best completes blank (10):',
    options: [
      { id: 'A', text: 'Unless strict environmental regulations are enforced continuously', translation: 'Trừ khi các quy định môi trường nghiêm ngặt được thực thi liên tục' },
      { id: 'B', text: 'If strict environmental regulations are enforced continuously', translation: 'Nếu các quy định môi trường được thực thi...' },
      { id: 'C', text: 'In spite of strict environmental regulations are enforced', translation: 'Mặc dù các quy định môi trường được thực thi...' },
      { id: 'D', text: 'Because strict environmental regulations are enforced continuously', translation: 'Bởi vì các quy định môi trường được thực thi...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Mệnh đề điều kiện mang nghĩa phủ định "Unless = If not".',
    translation: '(10) ____________, ô nhiễm đô thị sẽ tiếp tục đe dọa sức khỏe.',
    topicTag: 'Mệnh đề điều kiện (Unless)'
  },

  // SECTION 3: GRAMMAR & VOCABULARY (Q11 - Q20)
  {
    id: 'hn-q11',
    type: 'grammar',
    questionText: 'Question 11. She has been working as a Software Engineer ______ she graduated from university in 2022.',
    options: [
      { id: 'A', text: 'since', translation: 'từ khi' },
      { id: 'B', text: 'for', translation: 'trong khoảng' },
      { id: 'C', text: 'until', translation: 'cho đến khi' },
      { id: 'D', text: 'while', translation: 'trong khi' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Mệnh đề "since + mốc thời gian trong quá khứ" đi với thì Hiện tại hoàn thành.',
    translation: 'Cô ấy đã làm việc với tư cách là Kỹ sư phần mềm từ khi tốt nghiệp đại học năm 2022.',
    topicTag: 'Thì Hiện Tại Hoàn Thành (Since)'
  },
  {
    id: 'hn-q12',
    type: 'vocabulary',
    questionText: 'Question 12. The government launched a nationwide campaign to encourage people to ______ their daily plastic consumption.',
    options: [
      { id: 'A', text: 'cut down on', translation: 'cắt giảm (cut down on something)' },
      { id: 'B', text: 'look up to', translation: 'kính trọng' },
      { id: 'C', text: 'make up for', translation: 'đền bù' },
      { id: 'D', text: 'run out of', translation: 'cạn kiệt' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Phrasal verb "cut down on" nghĩa là cắt giảm số lượng/mức tiêu thụ.',
    translation: 'Chính phủ đã phát động chiến dịch toàn quốc khuyến khích người dân cắt giảm tiêu thụ nhựa hàng ngày.',
    topicTag: 'Phrasal Verbs (Cụm động từ)'
  },
  {
    id: 'hn-q13',
    type: 'grammar',
    questionText: 'Question 13. High school students are advised to develop ______ learning habits to prepare effectively for university education.',
    options: [
      { id: 'A', text: 'independent', translation: 'độc lập / tự chủ (Tính từ)' },
      { id: 'B', text: 'independence', translation: 'sự độc lập (Danh từ)' },
      { id: 'C', text: 'independently', translation: 'một cách độc lập (Trạng từ)' },
      { id: 'D', text: 'depend', translation: 'phụ thuộc (Động từ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đứng trước cụm danh từ "learning habits" ta dùng tính từ "independent".',
    translation: 'Học sinh trung học được khuyên nên phát triển thói quen học tập tự chủ để chuẩn bị hiệu quả cho đại học.',
    topicTag: 'Từ loại (Word Formation)'
  },
  {
    id: 'hn-q14',
    type: 'grammar',
    questionText: 'Question 14. If our local community ______ more solar panels last year, we would have saved significant energy costs.',
    options: [
      { id: 'A', text: 'had installed', translation: 'đã lắp đặt (Điều kiện loại 3)' },
      { id: 'B', text: 'installed', translation: 'lắp đặt (Quá khứ đơn)' },
      { id: 'C', text: 'installs', translation: 'lắp đặt (Hiện tại)' },
      { id: 'D', text: 'would install', translation: 'sẽ lắp đặt' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Câu điều kiện loại 3 giả định hành động trái với quá khứ (If + had V3/ed).',
    translation: 'Nếu cộng đồng địa phương của chúng ta đã lắp đặt nhiều tấm pin mặt trời hơn vào năm ngoái...',
    topicTag: 'Câu điều kiện loại 3 (Third Conditional)'
  },
  {
    id: 'hn-q15',
    type: 'grammar',
    questionText: 'Question 15. The historical monument ______ by international conservation experts was built in the 15th century.',
    options: [
      { id: 'A', text: 'restored', translation: 'được tu bổ (Rút gọn mệnh đề quan hệ bị động)' },
      { id: 'B', text: 'restoring', translation: 'đang tu bổ (Chủ động)' },
      { id: 'C', text: 'which restored', translation: 'sai ngữ nghĩa bị động' },
      { id: 'D', text: 'was restored', translation: 'dư thừa động từ chính' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Rút gọn mệnh đề quan hệ dạng bị động V3/ed (restored = which was restored).',
    translation: 'Di tích lịch sử được tu bổ bởi các chuyên gia bảo tồn quốc tế được xây dựng từ thế kỷ 15.',
    topicTag: 'Rút gọn mệnh đề quan hệ (Reduced Relative Clause)'
  },
  {
    id: 'hn-q16',
    type: 'grammar',
    questionText: 'Question 16. The new artificial intelligence software can analyze medical data much ______ than traditional methods.',
    options: [
      { id: 'A', text: 'more efficiently', translation: 'hiệu quả hơn (So sánh hơn trạng từ dài)' },
      { id: 'B', text: 'efficient', translation: 'hiệu quả (Tính từ)' },
      { id: 'C', text: 'most efficient', translation: 'hiệu quả nhất' },
      { id: 'D', text: 'as efficient as', translation: 'bằng' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: So sánh hơn của trạng từ (analyze + more efficiently).',
    translation: 'Phần mềm trí tuệ nhân tạo mới có thể phân tích dữ liệu y tế hiệu quả hơn nhiều so với các phương pháp truyền thống.',
    topicTag: 'So sánh hơn của Trạng từ (Comparatives)'
  },
  {
    id: 'hn-q17',
    type: 'synonym',
    questionText: 'Question 17. Close in meaning to SYNONYM:\nThe introduction of electric buses has helped reduce traffic noise and air pollution in the urban center.',
    options: [
      { id: 'A', text: 'decrease', translation: 'giảm bớt (= reduce)' },
      { id: 'B', text: 'increase', translation: 'tăng lên' },
      { id: 'C', text: 'maintain', translation: 'duy trì' },
      { id: 'D', text: 'expand', translation: 'mở rộng' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "reduce" đồng nghĩa với "decrease" (làm giảm bớt).',
    translation: 'Việc đưa vào sử dụng xe buýt điện đã giúp giảm thiểu tiếng ồn giao thông và ô nhiễm không khí.',
    topicTag: 'Từ đồng nghĩa (Synonyms)'
  },
  {
    id: 'hn-q18',
    type: 'antonym',
    questionText: 'Question 18. Opposite in meaning to ANTONYM:\nMany young entrepreneurs face financial instability during the first few years of launching their startups.',
    options: [
      { id: 'A', text: 'security', translation: 'sự ổn định / an toàn (Trái nghĩa với instability)' },
      { id: 'B', text: 'uncertainty', translation: 'sự không chắc chắn' },
      { id: 'C', text: 'risk', translation: 'rủi ro' },
      { id: 'D', text: 'weakness', translation: 'điểm yếu' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "instability" (sự bấp bênh) trái nghĩa với "security" (sự ổn định/an toàn).',
    translation: 'Nhiều nhà khởi nghiệp trẻ đối mặt với sự bấp bênh tài chính trong những năm đầu tiên.',
    topicTag: 'Từ trái nghĩa (Antonyms)'
  },
  {
    id: 'hn-q19',
    type: 'communication',
    questionText: 'Question 19. Communication:\n- Nam: "Would you like to join our tree-planting campaign this Saturday?"\n- Hoa: "______! What time does it start?"',
    options: [
      { id: 'A', text: 'I’d love to', translation: 'Tớ rất muốn tham gia' },
      { id: 'B', text: 'No, thanks', translation: 'Không, cảm ơn' },
      { id: 'C', text: 'Never mind', translation: 'Đừng bận tâm' },
      { id: 'D', text: 'You’re welcome', translation: 'Không có gì' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "I’d love to" đáp lại lời mời tham gia hoạt động xã hội một cách lịch sự và hào hứng.',
    translation: '- Nam: "Cậu có muốn tham gia chiến dịch trồng cây thứ Bảy này không?" - Hoa: "Tớ rất muốn! Mấy giờ bắt đầu vậy?"',
    topicTag: 'Giao tiếp - Lời mời'
  },
  {
    id: 'hn-q20',
    type: 'communication',
    questionText: 'Question 20. Communication:\n- Teacher: "Congratulations on winning first prize in the national science competition!"\n- Student: "______!"',
    options: [
      { id: 'A', text: 'Thank you very much for your encouragement and support, teacher', translation: 'Em cảm ơn thầy/cô rất nhiều vì sự động viên và hỗ trợ' },
      { id: 'B', text: 'It was nothing special', translation: 'Không có gì đặc biệt cả' },
      { id: 'C', text: 'I don’t agree with you', translation: 'Em không đồng ý' },
      { id: 'D', text: 'You must be kidding', translation: 'Chắc thầy đang đùa' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đáp lại lời chúc mừng của thầy cô giáo một cách trân trọng và tôn kính.',
    translation: '- Thầy cô: "Chúc mừng em đã đạt giải nhất cuộc thi khoa học toàn quốc!" - Học sinh: "Em cảm ơn thầy cô rất nhiều!"',
    topicTag: 'Giao tiếp - Lời chúc mừng'
  },

  // SECTION 4: READING COMPREHENSION - DIGITAL TRANSFORMATION (Q21 - Q25)
  {
    id: 'hn-q21',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HANOI_DIGITAL_TRANSFORMATION,
    passageTranslation: PASSAGE_HANOI_DIGITAL_TRANSFORMATION_TRANS,
    questionText: 'Question 21. What is the main topic of the passage?',
    options: [
      { id: 'A', text: 'Digital transformation in education and its associated challenges', translation: 'Chuyển đổi số trong giáo dục và những thách thức đi kèm' },
      { id: 'B', text: 'The history of traditional teaching methods in Vietnam', translation: 'Lịch sử phương pháp dạy học truyền thống' },
      { id: 'C', text: 'Financial investment in urban telecommunication networks', translation: 'Đầu tư tài chính vào mạng viễn thông đô thị' },
      { id: 'D', text: 'How artificial intelligence replaces classroom teachers', translation: 'Cách AI thay thế giáo viên' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Toàn bài thảo luận về những cơ hội của chuyển đổi số giáo dục cùng thách thức khoảng cách số.',
    translation: 'Chủ đề chính của bài đọc là gì?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)'
  },
  {
    id: 'hn-q22',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HANOI_DIGITAL_TRANSFORMATION,
    passageTranslation: PASSAGE_HANOI_DIGITAL_TRANSFORMATION_TRANS,
    questionText: 'Question 22. According to paragraph 1, online learning platforms allow students to ______.',
    options: [
      { id: 'A', text: 'access personalized learning resources anytime and anywhere', translation: 'tiếp cận tài liệu cá nhân hóa mọi lúc mọi nơi' },
      { id: 'B', text: 'avoid taking final exams', translation: 'tránh làm bài thi cuối kỳ' },
      { id: 'C', text: 'replace teachers completely', translation: 'thay thế hoàn toàn giáo viên' },
      { id: 'D', text: 'study without internet access', translation: 'học không cần internet' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Thông tin đoạn 1: "allows students to access personalized study materials anytime and anywhere".',
    translation: 'Theo đoạn 1, các nền tảng học trực tuyến cho phép học sinh làm gì?',
    topicTag: 'Đọc hiểu - Tìm chi tiết (Detail Question)'
  },
  {
    id: 'hn-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HANOI_DIGITAL_TRANSFORMATION,
    passageTranslation: PASSAGE_HANOI_DIGITAL_TRANSFORMATION_TRANS,
    questionText: 'Question 23. The word "inequality" in paragraph 2 is CLOSEST in meaning to ______.',
    options: [
      { id: 'A', text: 'disparity', translation: 'sự chênh lệch / bất bình đẳng (= inequality)' },
      { id: 'B', text: 'similarity', translation: 'sự tương đồng' },
      { id: 'C', text: 'harmony', translation: 'sự hòa hợp' },
      { id: 'D', text: 'development', translation: 'sự phát triển' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "inequality" (sự bất bình đẳng) gần nghĩa nhất với "disparity" (sự chênh lệch/bất đồng).',
    translation: 'Từ "inequality" trong đoạn 2 GẦN NGHĨA nhất với từ nào?',
    topicTag: 'Đọc hiểu - Từ vựng (Vocabulary in Context)'
  },
  {
    id: 'hn-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HANOI_DIGITAL_TRANSFORMATION,
    passageTranslation: PASSAGE_HANOI_DIGITAL_TRANSFORMATION_TRANS,
    questionText: 'Question 24. Which of the following is NOT true according to the passage?',
    options: [
      { id: 'A', text: 'Students in rural areas have equal digital access to urban students', translation: 'Học sinh nông thôn có sự tiếp cận kỹ thuật số bình đẳng như đô thị (SAI)' },
      { id: 'B', text: 'Teachers can track student progress in real time using AI tools', translation: 'Giáo viên có thể theo dõi tiến độ học sinh theo thời gian thực' },
      { id: 'C', text: 'Strategic investments in telecommunications are necessary', translation: 'Đầu tư chiến lược vào viễn thông là cần thiết' },
      { id: 'D', text: 'Achieving equitable digital access is a key priority', translation: 'Đạt được tiếp cận bình đẳng là ưu tiên hàng đầu' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (Thông tin SAI trong bài): Bài viết chỉ ra học sinh vùng xa thiếu thiết bị và kết nối kém.',
    translation: 'Phát biểu nào sau đây KHÔNG ĐÚNG theo bài đọc?',
    topicTag: 'Đọc hiểu - Câuhỏi NOT True'
  },
  {
    id: 'hn-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HANOI_DIGITAL_TRANSFORMATION,
    passageTranslation: PASSAGE_HANOI_DIGITAL_TRANSFORMATION_TRANS,
    questionText: 'Question 25. What can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Overcoming the digital divide requires cooperation between government and tech sectors', translation: 'Vượt qua khoảng cách số đòi hỏi sự hợp tác giữa chính phủ và ngành công nghệ' },
      { id: 'B', text: 'Digital tools will completely eliminate the need for physical schools soon', translation: 'Công cụ số sẽ sớm xóa bỏ hoàn toàn trường học truyền thống' },
      { id: 'C', text: 'Urban students study harder than rural students', translation: 'Học sinh đô thị học chăm hơn nông thôn' },
      { id: 'D', text: 'Technology causes more harm than good in education', translation: 'Công nghệ hại nhiều hơn lợi' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Suy luận từ yêu cầu đầu tư hạ tầng viễn thông và hỗ trợ cộng đồng yếu thế.',
    translation: 'Có thể suy ra điều gì từ bài đọc?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  { id: 'hn-q26', type: 'stress', questionText: 'Question 26. Select the word with a different stress pattern: A. participate B. environment C. academic D. community', options: [{ id: 'A', text: 'participate', translation: 'trọng âm 2' }, { id: 'B', text: 'environment', translation: 'trọng âm 2' }, { id: 'C', text: 'academic', translation: 'trọng âm 3 (khác)' }, { id: 'D', text: 'community', translation: 'trọng âm 2' }], correctAnswer: 'C', explanation: '• C. ĐÚNG: academic có trọng âm ở âm tiết 3, các từ còn lại trọng âm ở âm tiết 2.', translation: 'Chọn từ có trọng âm khác.', topicTag: 'Trọng âm (Stress)' },
  { id: 'hn-q27', type: 'stress', questionText: 'Question 27. Select the word with a different stress pattern: A. preserve B. reduce C. follow D. protect', options: [{ id: 'A', text: 'preserve', translation: 'trọng âm 2' }, { id: 'B', text: 'reduce', translation: 'trọng âm 2' }, { id: 'C', text: 'follow', translation: 'trọng âm 1 (khác)' }, { id: 'D', text: 'protect', translation: 'trọng âm 2' }], correctAnswer: 'C', explanation: '• C. ĐÚNG: follow trọng âm ở âm tiết 1, các từ còn lại ở âm tiết 2.', translation: 'Chọn từ có trọng âm khác.', topicTag: 'Trọng âm (Stress)' },
  { id: 'hn-q28', type: 'pronunciation', questionText: 'Question 28. Choose the underlined part pronounced differently: A. climate B. digital C. primary D. device', options: [{ id: 'A', text: 'climate', translation: 'phát âm /aɪ/' }, { id: 'B', text: 'digital', translation: 'phát âm /ɪ/ (khác)' }, { id: 'C', text: 'primary', translation: 'phát âm /aɪ/' }, { id: 'D', text: 'device', translation: 'phát âm /aɪ/' }], correctAnswer: 'B', explanation: '• B. ĐÚNG: "digital" phát âm nguyên âm /ɪ/, các từ còn lại phát âm /aɪ/.', translation: 'Chọn từ có nguyên âm gạch chân phát âm khác.', topicTag: 'Phát âm (Pronunciation)' },
  { id: 'hn-q29', type: 'pronunciation', questionText: 'Question 29. Choose the underlined part pronounced differently: A. species B. sustainable C. stress D. vision', options: [{ id: 'A', text: 'species', translation: 'phát âm /s/' }, { id: 'B', text: 'sustainable', translation: 'phát âm /s/' }, { id: 'C', text: 'stress', translation: 'phát âm /s/' }, { id: 'D', text: 'vision', translation: 'phát âm /ʒ/ (khác)' }], correctAnswer: 'D', explanation: '• D. ĐÚNG: "vision" phát âm âm /ʒ/, các từ còn lại phát âm /s/.', translation: 'Chọn từ có phụ âm phát âm khác.', topicTag: 'Phát âm (Pronunciation)' },
  { id: 'hn-q30', type: 'grammar', questionText: 'Question 30. The manager insisted that all urgent reports ______ before the end of the working day.', options: [{ id: 'A', text: 'be submitted', translation: 'được nộp (Giả định thức)' }, { id: 'B', text: 'are submitted', translation: 'được nộp' }, { id: 'C', text: 'were submitted', translation: 'đã được nộp' }, { id: 'D', text: 'submitting', translation: 'đang nộp' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Thức giả định sau động từ insist (insist that + S + be V3/ed).', translation: 'Quản lý khăng khăng yêu cầu tất cả các báo cáo khẩn phải được nộp trước khi hết ngày làm việc.', topicTag: 'Thức Giả Định (Subjunctive)' },
  { id: 'hn-q31', type: 'grammar', questionText: 'Question 31. Not until the emergency alarm went off ______ that a fire had broken out in the basement.', options: [{ id: 'A', text: 'did the employees realize', translation: 'nhân viên mới nhận ra (Đảo ngữ)' }, { id: 'B', text: 'the employees realized', translation: 'sai trật tự đảo ngữ' }, { id: 'C', text: 'had the employees realized', translation: 'sai thì' }, { id: 'D', text: 'did realized the employees', translation: 'sai cấu trúc' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Đảo ngữ với "Not until + Clause + did + S + V-bare".', translation: 'Mãi cho đến khi chuông báo động vang lên thì nhân viên mới nhận ra có đám cháy ở tầng hầm.', topicTag: 'Đảo ngữ (Inversion)' },
  { id: 'hn-q32', type: 'grammar', questionText: 'Question 32. Having completed all the required assignments, ______.', options: [{ id: 'A', text: 'the students were allowed to leave the classroom', translation: 'các học sinh được phép rời phòng học' }, { id: 'B', text: 'the teacher dismissed the class early', translation: 'sai chủ thể đồng dạng' }, { id: 'C', text: 'the classroom was cleaned up', translation: 'sai chủ thể' }, { id: 'D', text: 'leaving the classroom was permitted', translation: 'sai cấu trúc' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Rút gọn phân từ hoàn thành "Having V3/ed" yêu cầu vế sau chung chủ ngữ (students).', translation: 'Sau khi hoàn thành tất cả bài tập bắt buộc, các học sinh được phép rời khỏi lớp.', topicTag: 'Rút gọn Phân từ (Perfect Participle)' },
  { id: 'hn-q33', type: 'grammar', questionText: 'Question 33. The new green initiative has received widespread support ______ its clear environmental benefits.', options: [{ id: 'A', text: 'because of', translation: 'bởi vì (+ N-phrase)' }, { id: 'B', text: 'because', translation: 'bởi vì (+ Clause)' }, { id: 'C', text: 'although', translation: 'mặc dù' }, { id: 'D', text: 'in spite of', translation: 'mặc dù' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: "because of + cụm danh từ" chỉ nguyên nhân.', translation: 'Sáng kiến xanh mới đã nhận được sự ủng hộ rộng rãi bởi vì những lợi ích môi trường rõ rệt của nó.', topicTag: 'Cụm từ chỉ nguyên nhân (Because of)' },
  { id: 'hn-q34', type: 'grammar', questionText: 'Question 34. The university offers a wide array of courses, ______ cover artificial intelligence and robotics.', options: [{ id: 'A', text: 'several of which', translation: 'một vài trong số đó (đại từ quan hệ chì vật)' }, { id: 'B', text: 'several of whom', translation: 'dùng cho người (SAI)' }, { id: 'C', text: 'several of them', translation: 'thiếu từ nối' }, { id: 'D', text: 'which of several', translation: 'sai cấu trúc' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Cấu trúc "quantifier + of + which" thay thế cho danh từ chỉ vật "courses".', translation: 'Trường đại học cung cấp nhiều khóa học, một vài trong số đó bao gồm trí tuệ nhân tạo và robot.', topicTag: 'Mệnh đề quan hệ với Lượng từ' },
  { id: 'hn-q35', type: 'grammar', questionText: 'Question 35. It is imperative that every candidate ______ valid identification before entering the examination room.', options: [{ id: 'A', text: 'present', translation: 'xuất trình (Giả định thức dạng nguyên thể)' }, { id: 'B', text: 'presents', translation: 'xuất trình (thì hiện tại)' }, { id: 'C', text: 'presented', translation: 'đã xuất trình' }, { id: 'D', text: 'is presenting', translation: 'đang xuất trình' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Cấu trúc "It is imperative that + S + V-bare" (thức giả định).', translation: 'Bắt buộc mỗi thí sinh phải xuất trình giấy tờ tùy thân hợp lệ trước khi vào phòng thi.', topicTag: 'Thức Giả Định (It is imperative that)' },
  { id: 'hn-q36', type: 'grammar', questionText: 'Question 36. Had I known about the severe traffic jam on the main highway, I ______ a different route to the airport.', options: [{ id: 'A', text: 'would have taken', translation: 'sẽ chọn (Đảo ngữ điều kiện loại 3)' }, { id: 'B', text: 'will take', translation: 'sẽ chọn' }, { id: 'C', text: 'would take', translation: 'sẽ chọn (loại 2)' }, { id: 'D', text: 'took', translation: 'đã chọn' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Đảo ngữ câu điều kiện loại 3 (Had + S + V3/ed ..., S + would have V3/ed).', translation: 'Giá như tớ biết trước về vụ tắc đường nghiêm trọng trên đại lộ thì tớ đã đi tuyến đường khác đến sân bay.', topicTag: 'Đảo ngữ Điều kiện loại 3' },
  { id: 'hn-q37', type: 'vocabulary', questionText: 'Question 37. The research team conducted a series of experiments to test the ______ of the new solar battery.', options: [{ id: 'A', text: 'efficiency', translation: 'hiệu suất / tính hiệu quả (Danh từ)' }, { id: 'B', text: 'efficient', translation: 'hiệu quả (Tính từ)' }, { id: 'C', text: 'efficiently', translation: 'một cách hiệu quả (Trạng từ)' }, { id: 'D', text: 'efficientness', translation: 'từ không tồn tại' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Sau mạn từ "the" và chỉ mục đích ta dùng danh từ "efficiency" (hiệu suất).', translation: 'Nhóm nghiên cứu đã tiến hành một loạt thí nghiệm để kiểm tra hiệu suất của pin mặt trời mới.', topicTag: 'Từ loại (Word Formation)' },
  { id: 'hn-q38', type: 'grammar', questionText: 'Question 38. Rarely ______ such a dramatic transformation in urban infrastructure within such a short timeframe.', options: [{ id: 'A', text: 'have we witnessed', translation: 'chúng tôi mới được chứng kiến (Đảo ngữ)' }, { id: 'B', text: 'we have witnessed', translation: 'sai trật tự đảo ngữ' }, { id: 'C', text: 'did we witnessed', translation: 'sai ngữ pháp' }, { id: 'D', text: 'we witnessed', translation: 'không đảo ngữ' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Trạng từ phủ định "Rarely" đứng đầu câu yêu cầu đảo ngữ (Rarely + auxiliary + S + V).', translation: 'Hiếm khi chúng tôi chứng kiến sự thay đổi hạ tầng đô thị ngoạn mục đến vậy trong khoảng thời gian ngắn.', topicTag: 'Đảo ngữ (Inversion)' },
  { id: 'hn-q39', type: 'grammar', questionText: 'Question 39. She managed to pass the final examination with flying colors despite ______ severe personal difficulties.', options: [{ id: 'A', text: 'facing', translation: 'đối mặt với (despite + V-ing)' }, { id: 'B', text: 'she faced', translation: 'dùng mệnh đề sai sau despite' }, { id: 'C', text: 'face', translation: 'động từ nguyên thể' }, { id: 'D', text: 'faced', translation: 'động từ quá khứ' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Sau giới từ "despite" ta dùng V-ing (facing) khi hai mệnh đề chung chủ ngữ.', translation: 'Cô ấy đã xuất sắc vượt qua kỳ thi tốt nghiệp với điểm số cao mặc dù phải đối mặt với nhiều khó khăn cá nhân.', topicTag: 'Danh động từ sau Despite' },
  { id: 'hn-q40', type: 'vocabulary', questionText: 'Question 40. The new environmental law aims to prevent corporations from ______ hazardous industrial waste into local rivers.', options: [{ id: 'A', text: 'discharging', translation: 'xả rác thải (prevent sby/sth from V-ing)' }, { id: 'B', text: 'to discharge', translation: 'để xả' }, { id: 'C', text: 'discharged', translation: 'đã xả' }, { id: 'D', text: 'discharge', translation: 'xả' }], correctAnswer: 'A', explanation: '• A. ĐÚNG: Cấu trúc "prevent someone/something from + V-ing" (ngăn chặn ai/cái gì làm gì).', translation: 'Đạo luật môi trường mới nhằm ngăn chặn các tập đoàn xả chất thải công nghiệp độc hại ra các dòng sông địa phương.', topicTag: 'Cấu trúc Prevent from V-ing' }
];

export const HANOI_2026_EXAM: ExamSet = {
  id: 'exam-hanoi-2026',
  title: 'Đề Thi Thử THPT 2026 - Sở GD&ĐT Hà Nội (Lần 1)',
  description: 'Đề thi khảo sát chất lượng TN THPT 2026 từ Sở GD&ĐT Hà Nội gồm trọn bộ 40 câu trắc nghiệm chuẩn cấu trúc mới 2026 kèm đáp án & lời giải chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'Sở GD Hà Nội 2026',
  iconName: 'Building2',
  questions: HANOI_2026_QUESTIONS
};
