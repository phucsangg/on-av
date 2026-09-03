import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_ELON_MUSK = `THE VISION OF ELON MUSK
Often compared to a real-life "Iron Man," Elon Musk is a business magnate and engineer known for his ambitious goals to revolutionize transportation and space exploration. As the CEO of Tesla, Inc., he has significantly accelerated the world's transition to sustainable energy <mark>(1) ____________</mark>. His vision, however, extends far beyond Earth.

In 2002, Musk founded SpaceX with the ultimate goal of making life multi-planetary. Despite numerous early failures and skeptics, SpaceX successfully developed the Falcon 1, <mark>(2) ____________</mark>. This achievement paved the way for reusable rocket technology, which has drastically reduced the cost of reaching orbit.

Beyond electric cars and rockets, Musk has introduced other futuristic concepts such as the Hyperloop and Neuralink. The latter, for instance, <mark>(3) ____________</mark>. While these innovations demonstrate Musk’s willingness to take significant risks, they have also generated controversy and public debate. <mark>(4) ____________</mark>. Many experts argue that such bold experimentation is essential for long-term technological progress. <mark>(5) ____________</mark>.`;

const PASSAGE_ELON_MUSK_TRANS = `[ĐOẠN 1] TẦM NHÌN CỦA ELON MUSK
Thường được so sánh với “Iron Man” ngoài đời thực, Elon Musk là một ông trùm kinh doanh và kỹ sư nổi tiếng với những mục tiêu đầy tham vọng nhằm cách mạng hóa ngành giao thông vận tải và khám phá vũ trụ. Với tư cách là CEO của Tesla, Inc., ông đã thúc đẩy đáng kể sự chuyển dịch của thế giới sang năng lượng bền vững bằng cách sản xuất các dòng xe điện đại chúng. Tuy nhiên, tầm nhìn của ông vượt xa phạm vi Trái Đất.

[ĐOẠN 2] Năm 2002, Musk thành lập SpaceX với mục tiêu tối thượng là biến cuộc sống con người thành đa hành tinh. Mặc dù gặp nhiều thất bại ban đầu và sự hoài nghi từ công chúng, SpaceX đã phát triển thành công tên lửa Falcon 1, trở thành tên lửa nhiên liệu lỏng thương mại đầu tiên đạt tới quỹ đạo Trái Đất. Thành tựu này mở đường cho công nghệ tên lửa tái sử dụng, giúp giảm đáng kể chi phí tiếp cận quỹ đạo.

[ĐOẠN 3] Bên cạnh xe điện và tên lửa, Musk còn giới thiệu các khái niệm mang tính tương lai khác như Hyperloop và Neuralink. Neuralink hướng tới việc phát triển các giao diện não - máy tính để điều trị các bệnh thần kinh. Mặc dù những đổi mới này thể hiện sự sẵn sàng chấp nhận rủi ro lớn của Musk, chúng cũng tạo ra nhiều tranh cãi và thảo luận trong công chúng. Tuy nhiên, nhiều chuyên gia cho rằng sự thử nghiệm táo bạo như vậy là thiết yếu cho sự tiến bộ công nghệ lâu dài.`;

const PASSAGE_LIFE_16 = `It is completely normal not to have your life figured out at the age of sixteen. You are not expected to know exactly what your future will look like when you start high school, even if others think you should. In fact, feeling uncertain can be a privilege, as it allows you to keep many possibilities open. You have plenty of time ahead to explore life and discover who you truly are.

Life does not end because you fail a chemistry test or oversleep and have a bad day. Everyone experiences moments when giving up feels easier than continuing. It is during these difficult times that your strength and determination are truly tested.

The ability to let go of things that hold you back is essential for overcoming life’s challenges. [I] High school differs greatly from elementary or middle school. [II] You may find yourself staying up late to study, spending weekends doing homework. [III] There will be months filled with tests and exams, which can lead to significant stress and anxiety. [IV]

However, these years can also be some of the most enjoyable in your life. Remember to have fun and appreciate the moments between studying and schoolwork. You will never be sixteen or seventeen again, laughing with friends at a party or swimming early in the morning on a cold day. Time moves forward, so do not be afraid to step outside your comfort zone. <mark>It is better to regret something you did than to wish you had tried.</mark> Fear should not hold you back from living fully.

This period of life is also a perfect time to meet new people and build meaningful friendships. You will meet individuals from different backgrounds and take part in <mark>thought-provoking</mark> conversations that challenge your way of thinking. Through these experiences, you will learn the true value of friendship and connection.

You have the freedom to become whoever you want to be. With effort and perseverance, you can achieve your goals. Remember, you are not just studying for exams; you are preparing for your future. While grades may seem important, <mark>they</mark> do not define who you are. Many successful people have failed before succeeding. As long as you believe in yourself, you can turn your dreams into reality.`;

const PASSAGE_LIFE_16_TRANS = `[ĐOẠN 1] Việc chưa định hình rõ ràng cuộc đời mình ở tuổi mười sáu là điều hoàn toàn bình thường. Không ai kỳ vọng bạn phải biết chính xác tương lai của mình sẽ như thế nào khi mới bước vào cấp ba, ngay cả khi người khác nghĩ bạn nên như vậy. Thực tế, cảm giác chưa chắc chắn có thể là một đặc quyền, vì nó cho phép bạn giữ mở nhiều khả năng. Bạn còn rất nhiều thời gian phía trước để khám phá cuộc sống và tìm ra bản thân thực sự là ai.

[ĐOẠN 2] Cuộc sống không kết thúc chỉ vì bạn trượt một bài kiểm tra hóa học hay ngủ quên và có một ngày tồi tệ. Ai cũng trải qua những lúc cảm thấy từ bỏ dễ dàng hơn là tiếp tục. Chính trong những thời điểm khó khăn này, sức mạnh và sự quyết tâm của bạn mới thực sự được thử thách.

[ĐOẠN 3] Khả năng buông bỏ những điều cản bước bạn là điều thiết yếu để vượt qua các thử thách trong cuộc sống. Trường cấp ba khác xa so với trường tiểu học hay trung học cơ sở. Bạn có thể thấy mình phải thức khuya để học bài, dành cả cuối tuần để làm bài tập. Sẽ có những tháng ngập tràn bài kiểm tra và thi cử, điều này có thể dẫn đến căng thẳng và lo âu đáng kể.

[ĐOẠN 4] Tuy nhiên, những năm tháng này cũng có thể là một trong những khoảng thời gian tuyệt vời nhất trong đời bạn. Hãy nhớ vui vẻ và trân trọng những khoảnh khắc giữa các giờ học và bài tập. Bạn sẽ không bao giờ ở tuổi mười sáu hay mười bảy một lần nữa, cười đùa với bạn bè trong một buổi tiệc hay đi bơi vào buổi sáng sớm một ngày se lạnh. Thời gian luôn trôi về phía trước, vì vậy đừng ngần ngại bước ra khỏi vùng an toàn của mình. Thà hối tiếc vì điều mình đã làm còn hơn ước gì mình đã thử. Nỗi sợ không nên cản trở bạn sống một cuộc đời trọn vẹn.

[ĐOẠN 5] Giai đoạn này cũng là thời điểm hoàn hảo để gặp gỡ những người bạn mới và xây dựng các tình bạn ý nghĩa. Bạn sẽ gặp gỡ những cá nhân từ các nền tảng khác nhau và tham gia vào những cuộc trò chuyện gợi mở tư duy, thách thức cách suy nghĩ của bạn. Thông qua những trải nghiệm này, bạn sẽ học được giá trị thực sự của tình bạn và sự kết nối.

[ĐOẠN 6] Bạn có sự tự do để trở thành bất kỳ ai bạn muốn. Với nỗ lực và sự kiên trì, bạn có thể đạt được các mục tiêu của mình. Hãy nhớ rằng, bạn không chỉ đang học cho các kỳ thi; bạn đang chuẩn bị cho tương lai của chính mình. Dù điểm số có vẻ quan trọng, chúng không định nghĩa bạn là ai. Nhiều người thành công từng thất bại trước khi đạt được thành tựu. Chỉ cần bạn tin vào chính mình, bạn có thể biến giấc mơ thành hiện thực.`;

export const ELON_MUSK_2026_QUESTIONS: Question[] = [
  {
    id: 'em-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELON_MUSK,
    passageTranslation: PASSAGE_ELON_MUSK_TRANS,
    questionText: 'Question 1. As the CEO of Tesla, Inc., he has significantly accelerated the world\'s transition to sustainable energy (1) ...',
    options: [
      { id: 'A', text: 'produced mass-market electric vehicles', translation: 'động từ chia quá khứ' },
      { id: 'B', text: 'by producing mass-market electric vehicles', translation: 'bằng cách sản xuất xe điện đại chúng' },
      { id: 'C', text: 'who produces mass-market electric vehicles', translation: 'người sản xuất xe điện' },
      { id: 'D', text: 'to produce mass-market electric vehicles', translation: 'để sản xuất xe điện' }
    ],
    correctAnswer: 'B',
    explanation: '• Cấu trúc "by + V-ing" chỉ cách thức thực hiện hành động: "thúc đẩy chuyển đổi năng lượng bằng cách sản xuất các dòng xe điện đại chúng". Chọn B.',
    translation: 'Bằng cách sản xuất các dòng xe điện dành cho thị trường đại chúng.',
    topicTag: 'Cấu trúc chỉ phương thức'
  },
  {
    id: 'em-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELON_MUSK,
    passageTranslation: PASSAGE_ELON_MUSK_TRANS,
    questionText: 'Question 2. SpaceX successfully developed the Falcon 1, (2) ...',
    options: [
      { id: 'A', text: 'the first privately funded liquid-fueled rocket to reach orbit', translation: 'danh từ đồng cách' },
      { id: 'B', text: 'that was the first privately funded rocket', translation: 'dùng that sau dấu phẩy' },
      { id: 'C', text: 'which it was the first rocket', translation: 'vốn là tên lửa đầu tiên' },
      { id: 'D', text: 'was the first rocket', translation: 'thiếu đại từ quan hệ' }
    ],
    correctAnswer: 'A',
    explanation: '• Đây là cấu trúc danh từ đồng cách (appositive) giải thích rõ cho "Falcon 1" đứng trước nó. Chọn A.',
    translation: 'Tên lửa nhiên liệu lỏng tư nhân đầu tiên đạt tới quỹ đạo.',
    topicTag: 'Danh từ đồng cách (Appositive)'
  },
  {
    id: 'em-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELON_MUSK,
    passageTranslation: PASSAGE_ELON_MUSK_TRANS,
    questionText: 'Question 3. The latter, for instance, (3) ...',
    options: [
      { id: 'A', text: 'which aims to develop brain-computer interfaces', translation: 'thiếu động từ chính' },
      { id: 'B', text: 'aims to develop brain-computer interfaces to assist people with paralysis', translation: 'nhắm tới phát triển giao diện não-máy tính hỗ trợ người liệt' },
      { id: 'C', text: 'aiming to develop brain-computer interfaces', translation: 'dạng V-ing' },
      { id: 'D', text: 'is aimed to develop', translation: 'nhằm mục đích phát triển' }
    ],
    correctAnswer: 'B',
    explanation: '• Động từ chính chia thì hiện tại đơn "aims to develop..." đóng vai trò V-main cho chủ ngữ "The latter" (Neuralink). Chọn B.',
    translation: 'Nhắm tới phát triển các giao diện não-máy tính hỗ trợ những người bị liệt.',
    topicTag: 'Thì & Động từ chính'
  },
  {
    id: 'em-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELON_MUSK,
    passageTranslation: PASSAGE_ELON_MUSK_TRANS,
    questionText: 'Question 4. Fill in blank (4):',
    options: [
      { id: 'A', text: 'Despite these concerns, there remains an undeniable impact', translation: 'câu vô nhân xưng' },
      { id: 'B', text: 'Despite these concerns, but his impact is undeniable', translation: 'lỗi lặp liên từ' },
      { id: 'C', text: 'Despite these concerns, his impact on modern industry remains undeniable', translation: 'Mặc cho những lo ngại đó, tác động của ông đối với ngành công nghiệp vẫn là điều không thể phủ nhận' },
      { id: 'D', text: 'Despite these concerns, it is the undeniable impact', translation: 'thiếu câu chẻ' }
    ],
    correctAnswer: 'C',
    explanation: '• Cấu trúc nhượng bộ chuẩn: "Despite + N, Clause" nhấn mạnh tác động không thể phủ nhận của Elon Musk. Chọn C.',
    translation: 'Mặc cho những lo ngại đó, tác động của ông đối với ngành công nghiệp hiện đại vẫn không thể phủ nhận.',
    topicTag: 'Mệnh đề nhượng bộ'
  },
  {
    id: 'em-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELON_MUSK,
    passageTranslation: PASSAGE_ELON_MUSK_TRANS,
    questionText: 'Question 5. Fill in blank (5):',
    options: [
      { id: 'A', text: 'These projects have already played a part in changing the world', translation: 'quá khứ/hiện tại' },
      { id: 'B', text: 'For years to come, his work is having a significant role', translation: 'xung đột thì' },
      { id: 'C', text: 'The future of technology will be shaped entirely by how his work evolves', translation: 'tuyệt đối hóa' },
      { id: 'D', text: 'It is clear that his ongoing efforts will continue to influence global technology for years to come', translation: 'Rõ ràng những nỗ lực của ông sẽ tiếp tục ảnh hưởng công nghệ toàn cầu nhiều năm tới' }
    ],
    correctAnswer: 'D',
    explanation: '• D tổng kết toàn bài hướng về tương lai dài hạn bằng thì tương lai đơn và "continue to influence". Chọn D.',
    translation: 'Rõ ràng những nỗ lực không ngừng của ông sẽ tiếp tục ảnh hưởng đến công nghệ toàn cầu trong nhiều năm tới.',
    topicTag: 'Điền câu kết đoạn'
  },
  {
    id: 'em-q6',
    type: 'grammar',
    questionText: 'Question 6. Had the engineers discovered the battery flaw earlier, the vehicle recall _____ unnecessary.',
    options: [
      { id: 'A', text: 'would have been', translation: 'đảo ngữ điều kiện loại 3' },
      { id: 'B', text: 'will be', translation: 'tương lai đơn' },
      { id: 'C', text: 'was', translation: 'quá khứ đơn' },
      { id: 'D', text: 'would be', translation: 'điều kiện loại 2' }
    ],
    correctAnswer: 'A',
    explanation: '• Đảo ngữ điều kiện loại 3: Had + S + P2, S + would have + P2. Chọn A.',
    translation: 'Nếu các kỹ sư phát hiện ra lỗi pin sớm hơn, việc thu hồi xe đã trở nên không cần thiết.',
    topicTag: 'Đảo ngữ Điều kiện loại 3'
  },
  {
    id: 'em-q7',
    type: 'vocabulary',
    questionText: 'Question 7. The startup secured major funding after presenting a _____ business model to potential investors.',
    options: [
      { id: 'A', text: 'viable', translation: 'khả thi / có thể phát triển được' },
      { id: 'B', text: 'futile', translation: 'vô ích' },
      { id: 'C', text: 'obsolete', translation: 'lỗi thời' },
      { id: 'D', text: 'dormant', translation: 'tiềm ẩn / nằm yên' }
    ],
    correctAnswer: 'A',
    explanation: '• "viable business model" = mô hình kinh doanh khả thi. Chọn A.',
    translation: 'Công ty khởi nghiệp đã nhận được khoản đầu tư lớn sau khi trình bày mô hình kinh doanh khả thi.',
    topicTag: 'Từ vựng Nâng cao'
  },
  {
    id: 'em-q8',
    type: 'synonym',
    questionText: 'Question 8. The innovator’s groundbreaking work revolutionized the renewable energy industry.',
    options: [
      { id: 'A', text: 'pioneering', translation: 'tiên phong / đột phá' },
      { id: 'B', text: 'conventional', translation: 'theo thông lệ' },
      { id: 'C', text: 'insignificant', translation: 'không đáng kể' },
      { id: 'D', text: 'traditional', translation: 'truyền thống' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "groundbreaking" = mang tính đột phá, tiên phong = pioneering. Chọn A.',
    translation: 'Công trình mang tính đột phá của nhà tân tiến đã cách mạng hóa ngành năng lượng tái tạo.',
    topicTag: 'Từ đồng nghĩa'
  },
  {
    id: 'em-q9',
    type: 'antonym',
    questionText: 'Question 9. She showed remarkable resilience in overcoming numerous business setbacks.',
    options: [
      { id: 'A', text: 'fragility', translation: 'sự yếu ớt / dễ vỡ' },
      { id: 'B', text: 'tenacity', translation: 'sự kiên trì' },
      { id: 'C', text: 'endurance', translation: 'sự chịu đựng' },
      { id: 'D', text: 'perseverance', translation: 'sự bền bỉ' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "resilience" = khả năng kiên cường, vượt qua khó khăn. Trái nghĩa với nó là "fragility" (sự yếu ớt, mỏng mong). Chọn A.',
    translation: 'Cô ấy đã thể hiện sự kiên cường đáng kinh ngạc trong việc vượt qua nhiều thất bại kinh doanh.',
    topicTag: 'Từ trái nghĩa'
  },
  {
    id: 'em-q10',
    type: 'communication',
    questionText: 'Question 10. Alex: "Do you think space tourism will become accessible to ordinary people soon?" - Ben: "_____" ',
    options: [
      { id: 'A', text: 'It’s possible, but it will take decades to reduce costs significantly.', translation: 'Có thể, nhưng sẽ mất nhiều thập kỷ để giảm chi phí.' },
      { id: 'B', text: 'Yes, I hate traveling by plane.', translation: 'Vâng, tôi ghét đi máy bay' },
      { id: 'C', text: 'No, thank you. I am busy.', translation: 'Không, cảm ơn' },
      { id: 'D', text: 'You’re welcome.', translation: 'Không có gì' }
    ],
    correctAnswer: 'A',
    explanation: '• Đáp lại quan điểm về du lịch vũ trụ: "It’s possible, but it will take decades...". Chọn A.',
    translation: 'Alex: Bạn có nghĩ du lịch vũ trụ sẽ sớm tiếp cận được với người bình thường không? - Ben: Có thể chứ, nhưng cần thời gian.',
    topicTag: 'Giao tiếp hàng ngày'
  },
  {
    id: 'em-q11',
    type: 'grammar',
    questionText: 'Question 11. Not until the rocket reached orbit _____ the mission control team burst into applause.',
    options: [
      { id: 'A', text: 'did', translation: 'đảo ngữ Not until + Clause + Did + S + V' },
      { id: 'B', text: 'was', translation: 'bị động sai' },
      { id: 'C', text: 'had', translation: 'thừa had' },
      { id: 'D', text: 'would', translation: 'thiếu ngữ cảnh' }
    ],
    correctAnswer: 'A',
    explanation: '• Đảo ngữ "Not until + Mệnh đề quá khứ + Did + S + V-bare". Chọn A.',
    translation: 'Mãi cho đến khi tên lửa bay vào quỹ đạo thì đội điều khiển sứ mệnh mới vỡ òa tiếng pháo tay.',
    topicTag: 'Đảo ngữ Not Until'
  },
  {
    id: 'em-q12',
    type: 'grammar',
    questionText: 'Question 12. Having invested millions in research and development, _____ a revolutionary solar panel.',
    options: [
      { id: 'A', text: 'the company unveiled', translation: 'công ty đã công bố' },
      { id: 'B', text: 'a solar panel was unveiled', translation: 'tấm pin mặt trời đã được công bố' },
      { id: 'C', text: 'unveiling took place', translation: 'buổi ra mắt đã diễn ra' },
      { id: 'D', text: 'research was completed', translation: 'nghiên cứu đã hoàn thành' }
    ],
    correctAnswer: 'A',
    explanation: '• Phân từ hoàn thành "Having invested..." đòi hỏi chủ ngữ vế chính là công ty (the company). Chọn A.',
    translation: 'Sau khi đầu tư hàng triệu đô vào R&D, công ty đã trình làng tấm pin năng lượng mặt trời cách mạng.',
    topicTag: 'Rút gọn Mệnh đề Hoàn thành'
  },
  {
    id: 'em-q13',
    type: 'grammar',
    questionText: 'Question 13. Neuralink is developing brain-computer interfaces, _____ could transform medical treatments for paralysis.',
    options: [
      { id: 'A', text: 'which', translation: 'mệnh đề quan hệ bổ nghĩa cho mệnh đề trước' },
      { id: 'B', text: 'that', translation: 'không đứng sau dấu phẩy' },
      { id: 'C', text: 'whom', translation: 'chỉ người' },
      { id: 'D', text: 'where', translation: 'nơi chốn' }
    ],
    correctAnswer: 'A',
    explanation: '• Mệnh đề quan hệ không xác định ", which" bổ nghĩa cho cả mệnh đề đằng trước. Chọn A.',
    translation: 'Neuralink đang phát triển giao diện não-máy tính, điều này có thể thay đổi các liệu pháp điều trị y khoa.',
    topicTag: 'Mệnh đề quan hệ'
  },
  {
    id: 'em-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the best arrangement of sentences:\nc. Mark: Have you seen the latest launch test of the Starship rocket?\na. Linda: Yes! The booster separation was incredible to watch live.\nb. Mark: Absolutely. It feels like we are living in the future of space exploration.',
    options: [
      { id: 'A', text: 'c – a – b', translation: 'c-a-b' },
      { id: 'B', text: 'b – a – c', translation: 'b-a-c' },
      { id: 'C', text: 'a – c – b', translation: 'a-c-b' },
      { id: 'D', text: 'a – b – c', translation: 'a-b-c' }
    ],
    correctAnswer: 'A',
    explanation: '• c (Mark hỏi xem Starship) -> a (Linda khen màn tách tầng đẩy) -> b (Mark đồng ý như sống trong tương lai). Trật tự: c - a - b. Chọn A.',
    translation: 'Sắp xếp hội thoại Starship.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'em-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the best arrangement of sentences:\ne. Modern teenagers often face significant academic stress as they navigate high school.\nd. Pressure from upcoming entrance exams can feel overwhelming at times.\nc. However, maintaining a balanced study routine and getting enough sleep can mitigate anxiety.\nb. Furthermore, engaging in regular physical exercise boosts mental wellbeing.\na. Ultimately, self-care is just as important as high grades for long-term success.',
    options: [
      { id: 'A', text: 'e – d – c – b – a', translation: 'e-d-c-b-a' },
      { id: 'B', text: 'd – c – b – a – e', translation: 'd-c-b-a-e' },
      { id: 'C', text: 'b – a – c – d – e', translation: 'b-a-c-d-e' },
      { id: 'D', text: 'e – b – d – c – a', translation: 'e-b-d-c-a' }
    ],
    correctAnswer: 'A',
    explanation: '• e mở đoạn áp lực thanh thiếu niên -> d chi tiết kỳ thi -> c giải pháp cân bằng ngủ nghỉ -> b bổ sung tập thể thao -> a kết luận tự chăm sóc bản thân. Trật tự: e - d - c - b - a. Chọn A.',
    translation: 'Sắp xếp đoạn văn áp lực tuổi học trò.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'em-q16',
    type: 'grammar',
    questionText: 'Question 16. Without the dedication of early space pioneers, human exploration _____ reaching Mars today.',
    options: [
      { id: 'A', text: 'would not be', translation: 'cấu trúc Without + N, S + would not V' },
      { id: 'B', text: 'will not be', translation: 'tương lai' },
      { id: 'C', text: 'is not', translation: 'hiện tại' },
      { id: 'D', text: 'was not', translation: 'quá khứ' }
    ],
    correctAnswer: 'A',
    explanation: '• Câu điều kiện ẩn với Without: "Without + N, S + would not + V". Chọn A. would not be.',
    translation: 'Nếu không có sự cống hiến của những người đi đầu ngành vũ trụ, thám hiểm con người đã không cận kề Sao Hỏa như hôm nay.',
    topicTag: 'Câu điều kiện ẩn (Without)'
  },
  {
    id: 'em-q17',
    type: 'vocabulary',
    questionText: 'Question 17. Electric vehicles are rapidly gaining popularity due to their zero direct emissions and lower operational _____.',
    options: [
      { id: 'A', text: 'expenditure', translation: 'chi phí vận hành' },
      { id: 'B', text: 'revenue', translation: 'doanh thu' },
      { id: 'C', text: 'profit', translation: 'lợi nhuận' },
      { id: 'D', text: 'dividend', translation: 'cổ tức' }
    ],
    correctAnswer: 'A',
    explanation: '• "operational expenditure/costs" = chi phí vận hành. Chọn A. expenditure.',
    translation: 'Xe điện đang nhanh chóng phổ biến nhờ không phát thải trực tiếp và chi phí vận hành thấp hơn.',
    topicTag: 'Từ vựng Nâng cao'
  },
  {
    id: 'em-q18',
    type: 'synonym',
    questionText: 'Question 18. The tech giant aims to eradicate carbon emissions from its manufacturing plants by 2030.',
    options: [
      { id: 'A', text: 'eliminate', translation: 'loại bỏ / triệt phá' },
      { id: 'B', text: 'generate', translation: 'tạo ra' },
      { id: 'C', text: 'retain', translation: 'giữ lại' },
      { id: 'D', text: 'magnify', translation: 'phóng đại' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "eradicate" = triệt phá, loại bỏ hoàn toàn = eliminate. Chọn A.',
    translation: 'Gã khổng lồ công nghệ nhắm tới loại bỏ hoàn toàn khí thải carbon khỏi các nhà máy trước năm 2030.',
    topicTag: 'Từ đồng nghĩa'
  },
  {
    id: 'em-q19',
    type: 'antonym',
    questionText: 'Question 19. Her optimistic outlook helped her maintain high morale despite repeated project delays.',
    options: [
      { id: 'A', text: 'pessimistic', translation: 'bi quan' },
      { id: 'B', text: 'hopeful', translation: 'hy vọng' },
      { id: 'C', text: 'positive', translation: 'tích cực' },
      { id: 'D', text: 'confident', translation: 'tự tin' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "optimistic" = lạc quan. Trái nghĩa với nó là "pessimistic" (bi quan). Chọn A.',
    translation: 'Góc nhìn lạc quan đã giúp cô ấy duy trì tinh thần cao dù dự án liên tục hoãn.',
    topicTag: 'Từ trái nghĩa'
  },
  {
    id: 'em-q20',
    type: 'communication',
    questionText: 'Question 20. Student: "Thank you so much for your guidance on my university application essay, Professor!" - Professor: "_____" ',
    options: [
      { id: 'A', text: 'You’re very welcome. Best of luck with your application!', translation: 'Không có gì. Chúc em may mắn với hồ sơ!' },
      { id: 'B', text: 'Don’t worry about it. It’s useless.', translation: 'Đừng bận tâm. Nó vô ích' },
      { id: 'C', text: 'Yes, I am busy.', translation: 'Vâng tôi bận' },
      { id: 'D', text: 'No problem, it was expensive.', translation: 'Không đắt' }
    ],
    correctAnswer: 'A',
    explanation: '• Đáp lại lời cảm ơn chân thành từ sinh viên: "You’re very welcome. Best of luck...!". Chọn A.',
    translation: 'Sinh viên: Cảm ơn giáo sư đã hướng dẫn bài luận! - Giáo sư: Không có gì, chúc em may mắn!',
    topicTag: 'Giao tiếp hàng ngày'
  },
  {
    id: 'em-q21',
    type: 'grammar',
    questionText: 'Question 21. No sooner had the satellite entered orbit _____ it transmitted its first telemetry signals back to Earth.',
    options: [
      { id: 'A', text: 'than', translation: 'cấu trúc No sooner... Than' },
      { id: 'B', text: 'when', translation: 'dùng khi Hardly... When' },
      { id: 'C', text: 'then', translation: 'dùng then' },
      { id: 'D', text: 'that', translation: 'dùng that' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc "No sooner + had + S + P2 + THAN + S + V(quá khứ)". Chọn A. than.',
    translation: 'Vừa mới vào quỹ đạo xong thì vệ tinh đã truyền tín hiệu viễn thông đầu tiên về Trái Đất.',
    topicTag: 'Đảo ngữ No Sooner... Than'
  },
  {
    id: 'em-q22',
    type: 'grammar',
    questionText: 'Question 22. The automated assembly line, _____ last month, has doubled the factory’s production capacity.',
    options: [
      { id: 'A', text: 'installed', translation: 'rút gọn mệnh đề bị động' },
      { id: 'B', text: 'installing', translation: 'dạng chủ động' },
      { id: 'C', text: 'to install', translation: 'chỉ mục đích' },
      { id: 'D', text: 'was installed', translation: 'thừa was' }
    ],
    correctAnswer: 'A',
    explanation: '• Rút gọn mệnh đề quan hệ dạng bị động: "which was installed" -> "installed". Chọn A.',
    translation: 'Dây chuyền lắp ráp tự động, được lắp đặt tháng trước, đã tăng gấp đôi năng suất nhà máy.',
    topicTag: 'Rút gọn Mệnh đề Quan hệ'
  },
  {
    id: 'em-q23',
    type: 'grammar',
    questionText: 'Question 23. It is essential that every engineer _____ safety protocols before operating high-voltage machinery.',
    options: [
      { id: 'A', text: 'verify', translation: 'thức giả định (subjunctive) dùng V-bare' },
      { id: 'B', text: 'verifies', translation: 'chia số ít' },
      { id: 'C', text: 'verifying', translation: 'dạng V-ing' },
      { id: 'D', text: 'must verify', translation: 'thừa modal' }
    ],
    correctAnswer: 'A',
    explanation: '• Thức giả định: "It is essential that + S + V-bare". Giữ nguyên mẫu "verify". Chọn A.',
    translation: 'Bắt buộc mỗi kỹ sư phải xác minh quy trình an toàn trước khi vận hành máy cao áp.',
    topicTag: 'Thức Giả định (Subjunctive)'
  },
  {
    id: 'em-q24',
    type: 'grammar',
    questionText: 'Question 24. Had we not embraced digital transformation early, our company _____ behind during the economic shift.',
    options: [
      { id: 'A', text: 'would have fallen', translation: 'đảo ngữ điều kiện loại 3' },
      { id: 'B', text: 'will fall', translation: 'tương lai đơn' },
      { id: 'C', text: 'falls', translation: 'hiện tại đơn' },
      { id: 'D', text: 'would fall', translation: 'điều kiện loại 2' }
    ],
    correctAnswer: 'A',
    explanation: '• Đảo ngữ điều kiện loại 3: "Had + S + not + P2, S + would have + P2". Chọn A.',
    translation: 'Nếu chúng tôi không sớm chuyển đổi số, công ty đã bị tụt lại phía sau trong đợt chuyển dịch kinh tế.',
    topicTag: 'Đảo ngữ Điều kiện loại 3'
  },
  {
    id: 'em-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 25. Which of the following best summarises paragraph 1?',
    options: [
      { id: 'A', text: 'Many teenagers feel pressured to succeed academically.', translation: 'Cảm thấy áp lực' },
      { id: 'B', text: 'Uncertainty about the future is common at sixteen and allows for personal exploration.', translation: 'Sự mơ hồ tuổi 16 là phổ biến và tạo điều kiện khám phá bản thân' },
      { id: 'C', text: 'High school students should have their future figured out.', translation: 'Nên xác định rõ tương lai' },
      { id: 'D', text: 'Starting high school requires students to know career paths.', translation: 'Yêu cầu biết rõ sự nghiệp' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 1 nhấn mạnh việc mơ hồ ở tuổi 16 là bình thường và là cơ hội để khám phá bản thân. Chọn B.',
    translation: 'Tóm tắt đúng nhất đoạn 1: Sự mơ hồ tuổi 16 là phổ biến và giúp khám phá bản thân.',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn'
  },
  {
    id: 'em-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 26. The phrase "figured out" in paragraph 1 could be best replaced by:',
    options: [
      { id: 'A', text: 'solved', translation: 'giải quyết' },
      { id: 'B', text: 'planned', translation: 'lên kế hoạch / định hình rõ ràng' },
      { id: 'C', text: 'ignored', translation: 'phớt lờ' },
      { id: 'D', text: 'forgotten', translation: 'quên đi' }
    ],
    correctAnswer: 'B',
    explanation: '• "have your life figured out" = có cuộc đời được lên kế hoạch/định hình rõ ràng = planned. Chọn B.',
    translation: 'Từ "figured out" có thể thay thế bằng: planned.',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'em-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 27. According to paragraph 3, which of the following is NOT mentioned as a part of high school life?',
    options: [
      { id: 'A', text: 'Taking exams.', translation: 'Làm bài kiểm tra' },
      { id: 'B', text: 'Doing homework.', translation: 'Làm bài tập về nhà' },
      { id: 'C', text: 'Playing sports.', translation: 'Chơi thể thao' },
      { id: 'D', text: 'Staying up late.', translation: 'Thức khuya' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 3 nhắc đến thức khuya học bài, bài tập cuối tuần, các tháng kiểm tra thi cử. Việc "chơi thể thao" KHÔNG được nhắc đến trong đoạn 3. Chọn C.',
    translation: 'Chi tiết KHÔNG được nhắc đến trong đoạn 3: Chơi thể thao.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'em-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 28. Where in paragraph 3 does the sentence "This transition often brings with it a new level of academic rigor and responsibility." best fit?',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'B',
    explanation: '• "This transition" thay thế cho câu nói về sự khác biệt giữa các cấp học ngay trước vị trí [II]. Chọn B ([II]).',
    translation: 'Câu trên phù hợp nhất ở vị trí: [II].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'em-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 29. Which of the following best paraphrases the underlined sentence in paragraph 4?',
    options: [
      { id: 'A', text: 'Taking action and facing the consequences is preferable to regretting missed opportunities.', translation: 'Hành động và chấp nhận hậu quả tốt hơn hối tiếc vì bỏ lỡ cơ hội' },
      { id: 'B', text: 'It is always better to avoid taking any serious risks.', translation: 'Tránh mọi rủi ro' },
      { id: 'C', text: 'Reflecting on past actions is more valuable than planning.', translation: 'Suy ngẫm quá khứ tốt hơn' },
      { id: 'D', text: 'One should only try new things guaranteed to succeed.', translation: 'Chỉ thử điều chắc chắn thành công' }
    ],
    correctAnswer: 'A',
    explanation: '• A diễn đạt lại sát nghĩa nhất câu "It is better to regret something you did than to wish you had tried" (Hành động thà hối tiếc còn hơn hối tiếc vì chưa từng thử). Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'em-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 30. The word "thought-provoking" in paragraph 5 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'engaging', translation: 'cuốn hút' },
      { id: 'B', text: 'challenging', translation: 'thách thức' },
      { id: 'C', text: 'uninspiring', translation: 'không gợi cảm hứng / nhạt nhẽo' },
      { id: 'D', text: 'stimulating', translation: 'kích thích tư duy' }
    ],
    correctAnswer: 'C',
    explanation: '• "thought-provoking" = gợi suy nghĩ / kích thích tư duy. Trái nghĩa với nó là "uninspiring" (không gợi cảm hứng / nhạt nhẽo). Chọn C.',
    translation: 'Từ "thought-provoking" có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'em-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 31. The word "they" in the last paragraph refers to:',
    options: [
      { id: 'A', text: 'goals', translation: 'mục tiêu' },
      { id: 'B', text: 'individuals', translation: 'cá nhân' },
      { id: 'C', text: 'dreams', translation: 'ước mơ' },
      { id: 'D', text: 'grades', translation: 'điểm số' }
    ],
    correctAnswer: 'D',
    explanation: '• Trong câu "While grades may seem important, they do not define who you are", "they" thay thế cho "grades". Chọn D.',
    translation: 'Từ "they" thay thế cho: grades (điểm số).',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'em-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 32. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Fear of failure should always prevent you from taking risks.', translation: 'Nỗi sợ luôn phải ngăn bạn' },
      { id: 'B', text: 'Many successful people have experienced setbacks before achieving their ultimate goals.', translation: 'Nhiều người thành công từng trải qua thất bại trước khi đạt thành tựu' },
      { id: 'C', text: 'Academic grades are considered the sole determinant of future success.', translation: 'Điểm số là yếu tố duy nhất' },
      { id: 'D', text: 'Failing a chemistry test is a clear sign you are not suitable for high school.', translation: 'Trượt bài kiểm tra là dấu hiệu không phù hợp' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn cuối nêu rõ: "Many successful people have failed before succeeding". Do đó B là phát biểu ĐÚNG. Chọn B.',
    translation: 'Phát biểu ĐÚNG: Nhiều người thành công đã trải qua thất bại trước khi đạt mục tiêu.',
    topicTag: 'Đọc hiểu - Thông tin TRUE'
  },
  {
    id: 'em-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 33. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Academic grades are often unreliable indicators.', translation: 'Điểm số là thước đo không đáng tin' },
      { id: 'B', text: 'Friendships in high school are more influential than academic achievements.', translation: 'Tình bạn ảnh hưởng hơn học tập' },
      { id: 'C', text: 'Success depends on establishing a clear career path by sixteen.', translation: 'Thành công phụ thuộc việc chọn nghề tuổi 16' },
      { id: 'D', text: 'The challenges encountered in high school serve as a vital testing ground for character and perseverance.', translation: 'Những thử thách ở trung học là phép thử quan trọng cho bản lĩnh và sự kiên trì' }
    ],
    correctAnswer: 'D',
    explanation: '• D suy luận hợp lý từ toàn bài: Khó khăn thử thách ở bậc trung học giúp tôi luyện bản lĩnh và sự kiên trì. Chọn D.',
    translation: 'Suy luận đúng: Thử thách ở trung học là phép thử quan trọng cho bản lĩnh và sự kiên trì.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'em-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LIFE_16,
    passageTranslation: PASSAGE_LIFE_16_TRANS,
    questionText: 'Question 34. Which of the following best summarises the passage?',
    options: [
      { id: 'A', text: 'Although high school brings various challenges, it remains a vital period for self-discovery, building relationships, and personal growth.', translation: 'Dù trung học mang lại thử thách, đây vẫn là giai đoạn quan trọng để khám phá bản thân và phát triển' },
      { id: 'B', text: 'Constant fear of failure prevents teenagers from enjoying youth.', translation: 'Nỗi sợ thất bại ngăn cản thanh thiếu niên' },
      { id: 'C', text: 'Teenagers should prioritize academic success and early planning.', translation: 'Nên ưu tiên học tập' },
      { id: 'D', text: 'Success in later life depends almost entirely on high grades.', translation: 'Thành công phụ thuộc điểm cao' }
    ],
    correctAnswer: 'A',
    explanation: '• A tóm tắt trọn vẹn và đầy đủ nhất tinh thần bài đọc: Trung học có thử thách nhưng là giai đoạn vàng khám phá bản thân và trưởng thành. Chọn A.',
    translation: 'Tóm tắt toàn bài: Dù có thử thách, trung học là giai đoạn quan trọng khám phá bản thân và phát triển.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  },
  {
    id: 'em-q35',
    type: 'reordering',
    questionText: 'Question 35. Choose the best arrangement of the sentences to form a meaningful paragraph:\ne. Elon Musk’s ambitious visions have constantly pushed the boundaries of human technology.\nd. His achievements with SpaceX proved that reusable rockets could dramatically lower space exploration costs.\nc. Meanwhile, Tesla accelerated the global transition toward electric vehicles and sustainable energy.\nb. Despite facing heavy skepticism from critics early on, he remained steadfast in his pursuit.\na. Today, his pioneering ventures continue to inspire future generations of engineers worldwide.',
    options: [
      { id: 'A', text: 'e – d – c – b – a', translation: 'e-d-c-b-a' },
      { id: 'B', text: 'd – c – b – a – e', translation: 'd-c-b-a-e' },
      { id: 'C', text: 'b – a – c – d – e', translation: 'b-a-c-d-e' },
      { id: 'D', text: 'e – b – d – c – a', translation: 'e-b-d-c-a' }
    ],
    correctAnswer: 'A',
    explanation: '• e mở đoạn tầm nhìn -> d thành tựu SpaceX -> c bổ sung Tesla -> b đối mặt sự hoài nghi -> a kết luận truyền cảm hứng hôm nay. Trật tự: e - d - c - b - a. Chọn A.',
    translation: 'Sắp xếp đoạn văn Elon Musk.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'em-q36',
    type: 'grammar',
    questionText: 'Question 36. Not until SpaceX successfully landed the Falcon 9 booster _____ that reusable rockets were commercially viable.',
    options: [
      { id: 'A', text: 'did skeptics admit', translation: 'đảo ngữ Not until + Clause + Did + S + V' },
      { id: 'B', text: 'skeptics admitted', translation: 'không đảo ngữ' },
      { id: 'C', text: 'have skeptics admitted', translation: 'thiếu sự hòa hợp thì' },
      { id: 'D', text: 'was skeptics admitted', translation: 'bị động sai' }
    ],
    correctAnswer: 'A',
    explanation: '• Đảo ngữ "Not until + Mệnh đề quá khứ + Aux(did) + S + V-bare". Chọn A.',
    translation: 'Mãi cho đến khi SpaceX hạ cánh thành công tầng đẩy Falcon 9 thì giới hoài nghi mới thừa nhận.',
    topicTag: 'Đảo ngữ Not Until'
  },
  {
    id: 'em-q37',
    type: 'vocabulary',
    questionText: 'Question 37. Artificial intelligence is rapidly advancing, which requires policymakers to establish _____ regulations.',
    options: [
      { id: 'A', text: 'stringent', translation: 'nghiêm ngặt / chặt chẽ' },
      { id: 'B', text: 'lax', translation: 'lỏng lẻo' },
      { id: 'C', text: 'negligible', translation: 'không đáng kể' },
      { id: 'D', text: 'superficial', translation: 'hời hợt / nông choẹt' }
    ],
    correctAnswer: 'A',
    explanation: '• "stringent regulations" = các quy định nghiêm ngặt. Chọn A. stringent.',
    translation: 'Trí tuệ nhân tạo đang phát triển nhanh chóng, đòi hỏi các nhà hoạch định chính sách phải ban hành quy định nghiêm ngặt.',
    topicTag: 'Từ vựng Nâng cao'
  },
  {
    id: 'em-q38',
    type: 'synonym',
    questionText: 'Question 38. High school students should learn to embrace constructive feedback to improve their academic writing.',
    options: [
      { id: 'A', text: 'welcome', translation: 'chào đón / đón nhận' },
      { id: 'B', text: 'reject', translation: 'từ chối' },
      { id: 'C', text: 'dismiss', translation: 'bác bỏ' },
      { id: 'D', text: 'overlook', translation: 'bỏ qua' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "embrace" = đón nhận = welcome. Chọn A.',
    translation: 'Học sinh trung học nên học cách đón nhận phản hồi mang tính xây dựng để cải thiện bài viết.',
    topicTag: 'Từ đồng nghĩa'
  },
  {
    id: 'em-q39',
    type: 'antonym',
    questionText: 'Question 39. His meticulous attention to detail prevented potential errors during the product assembly process.',
    options: [
      { id: 'A', text: 'careless', translation: 'cẩu thả' },
      { id: 'B', text: 'thorough', translation: 'tỉ mỉ' },
      { id: 'C', text: 'precise', translation: 'chính xác' },
      { id: 'D', text: 'diligent', translation: 'cần cù' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "meticulous" = tỉ mỉ, cẩn thận. Trái nghĩa với nó là "careless" (cẩu thả). Chọn A.',
    translation: 'Sự chú ý tỉ mỉ của anh ấy đã ngăn chặn các lỗi tiềm ẩn.',
    topicTag: 'Từ trái nghĩa'
  },
  {
    id: 'em-q40',
    type: 'grammar',
    questionText: 'Question 40. Had she taken her guidance counselor’s advice, she _____ a subject more suited to her passion.',
    options: [
      { id: 'A', text: 'would have chosen', translation: 'cấu trúc đảo ngữ điều kiện loại 3' },
      { id: 'B', text: 'will choose', translation: 'tương lai' },
      { id: 'C', text: 'chooses', translation: 'hiện tại' },
      { id: 'D', text: 'would choose', translation: 'điều kiện loại 2' }
    ],
    correctAnswer: 'A',
    explanation: '• Đảo ngữ điều kiện loại 3: "Had + S + P2, S + would have + P2". Chọn A. would have chosen.',
    translation: 'Giá như cô ấy nghe theo lời khuyên của tư vấn viên, cô ấy đã chọn môn học phù hợp với đam mê hơn.',
    topicTag: 'Đảo ngữ Điều kiện loại 3'
  }
];

export const ELON_MUSK_2026_EXAM: ExamSet = {
  id: 'exam-elon-musk-2026',
  title: 'Đề Thi Thử Tốt Nghiệp THPT 2026 - Tầm Nhìn Elon Musk & Tuổi 16 (Sở GD&ĐT Hà Nội)',
  description: 'Đề thi chọn lọc đặc sắc với các bài đọc về Tầm nhìn Elon Musk và Hành trình phát triển bản thân tuổi 16 kèm lời giải chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'ĐỀ ĐẶC SẮC 2026',
  iconName: 'Rocket',
  questions: ELON_MUSK_2026_QUESTIONS
};
