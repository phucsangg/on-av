import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_ELON_MUSK = `THE VISION OF ELON MUSK
Often compared to a real-life "Iron Man," Elon Musk is a business magnate and engineer known for his ambitious goals to revolutionize transportation and space exploration. As the CEO of Tesla, Inc., he has significantly accelerated the world's transition to sustainable energy <mark>(1) ____________</mark>. His vision, however, extends far beyond Earth.

In 2002, Musk founded SpaceX with the ultimate goal of making life multi-planetary. Despite numerous early failures and skeptics, SpaceX successfully developed the Falcon 1, <mark>(2) ____________</mark>. This achievement paved the way for reusable rocket technology, which has drastically reduced the cost of reaching orbit.

Beyond electric cars and rockets, Musk has introduced other futuristic concepts such as the Hyperloop and Neuralink. The latter, for instance, <mark>(3) ____________</mark>. While these innovations demonstrate Musk’s willingness to take significant risks, they have also generated controversy and public debate. <mark>(4) ____________</mark>. Many experts argue that such bold experimentation is essential for long-term technological progress. <mark>(5) ____________</mark>.`;

const PASSAGE_ELON_MUSK_TRANS = `TẦM NHÌN CỦA ELON MUSK
Thường được so sánh với “Iron Man” ngoài đời thực, Elon Musk là một ông trùm kinh doanh và kỹ sư nổi tiếng...`;

const PASSAGE_LIFE_16 = `It is completely normal not to have your life figured out at the age of sixteen. You are not expected to know exactly what your future will look like when you start high school, even if others think you should. In fact, feeling uncertain can be a privilege, as it allows you to keep many possibilities open. You have plenty of time ahead to explore life and discover who you truly are.

Life does not end because you fail a chemistry test or oversleep and have a bad day. Everyone experiences moments when giving up feels easier than continuing. It is during these difficult times that your strength and determination are truly tested.

The ability to let go of things that hold you back is essential for overcoming life’s challenges. [I] High school differs greatly from elementary or middle school. [II] You may find yourself staying up late to study, spending weekends doing homework. [III] There will be months filled with tests and exams, which can lead to significant stress and anxiety. [IV]

However, these years can also be some of the most enjoyable in your life. Remember to have fun and appreciate the moments between studying and schoolwork. You will never be sixteen or seventeen again, laughing with friends at a party or swimming early in the morning on a cold day. Time moves forward, so do not be afraid to step outside your comfort zone. <mark>It is better to regret something you did than to wish you had tried.</mark> Fear should not hold you back from living fully.

This period of life is also a perfect time to meet new people and build meaningful friendships. You will meet individuals from different backgrounds and take part in <mark>thought-provoking</mark> conversations that challenge your way of thinking. Through these experiences, you will learn the true value of friendship and connection.

You have the freedom to become whoever you want to be. With effort and perseverance, you can achieve your goals. Remember, you are not just studying for exams; you are preparing for your future. While grades may seem important, <mark>they</mark> do not define who you are. Many successful people have failed before succeeding. As long as you believe in yourself, you can turn your dreams into reality.`;

const PASSAGE_LIFE_16_TRANS = `Việc chưa định hình rõ ràng cuộc đời mình ở tuổi mười sáu là điều hoàn toàn bình thường...`;

export const ELON_MUSK_2026_QUESTIONS: Question[] = [
  {
    id: 'em-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELON_MUSK,
    passageTranslation: PASSAGE_ELON_MUSK_TRANS,
    questionText: 'Question 1. As the CEO of Tesla, Inc., he has significantly accelerated the world\'s transition to sustainable energy (1) ...',
    options: [
      { id: 'A', text: 'produced mass-market electric vehicles', translation: 'động từ chia quá khứ (lỗi gãy câu)' },
      { id: 'B', text: 'by producing mass-market electric vehicles', translation: 'bằng cách sản xuất xe điện đại chúng (cách thức)' },
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
      { id: 'A', text: 'the first privately funded liquid-fueled rocket to reach orbit', translation: 'danh từ đồng cách (appositive)' },
      { id: 'B', text: 'that was the first privately funded rocket', translation: 'dùng that sau dấu phẩy (sai)' },
      { id: 'C', text: 'which it was the first rocket', translation: 'thừa chủ ngữ it (sai)' },
      { id: 'D', text: 'was the first rocket', translation: 'thiếu đại từ quan hệ (sai)' }
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
      { id: 'D', text: 'is aimed to develop', translation: 'sai ngữ pháp' }
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
      { id: 'B', text: 'Despite these concerns, but his impact is undeniable', translation: 'lỗi lặp liên từ (despite & but)' },
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
    translation: 'Diễn đạt lại chuẩn nhất: Hành động và chấp nhận hậu quả tốt hơn là hối tiếc vì bỏ lỡ cơ hội.',
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
      { id: 'C', text: 'uninspiring', translation: 'không gợi cảm hứng / nhạt nhẽo (trái nghĩa)' },
      { id: 'D', text: 'stimulating', translation: 'kích thích tư duy' }
    ],
    correctAnswer: 'C',
    explanation: '• "thought-provoking" = gợi suy nghĩ / kích thích tư duy. Trái nghĩa với nó là "uninspiring" (không gợi cảm hứng / nhạt nhẽo). Chọn C.',
    translation: 'Từ "thought-provoking" trái nghĩa với: uninspiring.',
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
  }
];

export const ELON_MUSK_2026_EXAM: ExamSet = {
  id: 'exam-elon-musk-2026',
  title: 'Đề Thi Thử Tốt Nghiệp THPT 2026 - Tầm Nhìn Elon Musk & Tuổi 16 (Sở GD&ĐT Hà Nội)',
  description: 'Đề thi chọn lọc đặc sắc với các bài đọc về Tầm nhìn Elon Musk và Hành trình phát triển bản thân tuổi 16 kèm lời giải chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 20,
  badge: 'ĐỀ ĐẶC SẮC 2026',
  iconName: 'Rocket',
  questions: ELON_MUSK_2026_QUESTIONS
};
