import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_MENTAL_HEALTH_DN = `How to Stay Mentally Healthy as a Teen
Taking care of your mental health is essential for a balanced life. <mark>(6) ____________</mark>, many teenagers ignore early signs of stress and keep unhealthy habits. Try these tips to stay mentally healthy:
• Build a daily routine with enough sleep, regular exercise, and a balanced diet to maintain emotional <mark>(7) ____________</mark> and energy levels.
• Manage your expectations to reduce pressure and develop a positive <mark>(8) ____________</mark> on life.
• Set clear <mark>(9) ____________</mark> with social media to avoid anxiety and negative self-comparison.
• Learn to <mark>(10) ____________</mark> negative thoughts instead of letting them overwhelm you.
• Remember never to take your mental health <mark>(11) ____________</mark> granted.`;

const PASSAGE_MENTAL_HEALTH_DN_TRANS = `CÁCH GIỮ SỨC KHỎE TINH THẦN KHI CÒN LÀ THANH THIẾU NIÊN
Chăm sóc sức khỏe tinh thần là điều thiết yếu cho một cuộc sống cân bằng. Tuy nhiên, nhiều thanh thiếu niên bỏ qua những dấu hiệu căng thẳng ban đầu và duy trì những thói quen không lành mạnh. Hãy thử những lời khuyên sau để giữ sức khỏe tinh thần:
• Xây dựng thói quen hàng ngày với giấc ngủ đủ, tập thể dục đều đặn và chế độ ăn cân bằng để duy trì sự ổn định cảm xúc và mức năng lượng.
• Quản lý kỳ vọng của bản thân để giảm áp lực và phát triển một cái nhìn tích cực về cuộc sống.
• Đặt ranh giới rõ ràng với mạng xã hội để tránh lo âu và sự so sánh bản thân tiêu cực.
• Học cách phớt lờ những suy nghĩ tiêu cực thay vì để chúng lấn át bạn.
• Hãy nhớ đừng bao giờ coi sức khỏe tinh thần của bạn là điều hiển nhiên.`;

const PASSAGE_HEART_ATTACKS_DN = `Mounting evidence shows that more young adults are experiencing heart problems than in previous decades. Heart attacks occur when blood flow to the heart <mark>(12) ____________</mark>. One reason is the growing number of lifestyle-related health problems, <mark>(13) ____________</mark>. Other factors like tobacco, cocaine, marijuana, and alcohol use have been associated with increased risks of heart attack in younger adults, too.
The major risk factors—high blood pressure, high cholesterol, diabetes, and obesity—can damage arteries over time. While these conditions may be inherited, <mark>(14) ____________</mark> often play a larger role.
<mark>(15) ____________</mark>. A recent survey found that 47% of people under 45 don't believe they're at risk for heart disease, and one-third of adults wouldn't confidently recognize heart attack symptoms. Half of 3,500 younger adults with significant risk factors didn't believe they were at risk before their heart attack occurred. Even fewer said their doctors warned them—especially women.
Experts say that getting young adults to care about heart health is a unique challenge. <mark>(16) ____________</mark>. Experts emphasize early prevention, since untreated risk factors lead to worse outcomes over time.`;

const PASSAGE_HEART_ATTACKS_DN_TRANS = `BỆNH ĐAU TIM Ở NGƯỜI TRẺ TUỔI
Ngày càng nhiều bằng chứng cho thấy người trẻ tuổi đang gặp các vấn đề về tim nhiều hơn so với những thập kỷ trước. Các cơn đau tim xảy ra khi dòng máu đến tim bị tắc nghẽn một phần hoặc hoàn toàn. Một nguyên nhân là số lượng các vấn đề sức khỏe liên quan đến lối sống đang gia tăng, phần lớn bắt nguồn từ chế độ ăn kém và lười vận động. Các yếu tố khác như sử dụng thuốc lá, cocaine, cần sa và rượu cũng đã được liên kết với việc tăng nguy cơ đau tim ở người trẻ tuổi.

Các yếu tố nguy cơ chính – huyết áp cao, cholesterol cao, tiểu đường và béo phì – có thể làm tổn hại động mạch theo thời gian. Mặc dù những bệnh này có thể di truyền, những lựa chọn lối sống không lành mạnh bắt đầu từ thuở nhỏ thường đóng vai trò lớn hơn.

Mặc dù tồn tại những nguy cơ này, nhiều người trẻ vẫn không nhận thức được. Một khảo sát gần đây cho thấy 47% người dưới 45 tuổi không tin rằng họ có nguy cơ mắc bệnh tim, và một phần ba người trưởng thành không thể tự tin nhận biết các triệu chứng đau tim.

Các chuyên gia cho rằng việc khiến người trẻ quan tâm đến sức khỏe tim mạch là một thách thức đặc biệt. Vì họ bận rộn với sự nghiệp và gia đình, nhóm này thường bỏ qua sức khỏe tim của mình. Các chuyên gia nhấn mạnh việc phòng ngừa sớm, vì các yếu tố nguy cơ không được điều trị sẽ dẫn đến hậu quả nghiêm trọng hơn theo thời gian.`;

const PASSAGE_SLANG_DN = `The formal acceptance of internet slang shows a fundamental change in how the English language grows today. Some people may think that terms like "skibidi," "delulu," or "tradwife" are just short-term digital trends. However, <mark>their</mark> recent inclusion in the Cambridge Dictionary serves as a strong answer to those critics. This decision confirms the lasting influence of the TikTok generation, showing that these expressions are no longer just on the edges of our daily talk but have become central to modern communication.
<mark>[I]</mark> This phenomenon is not just about a collection of harmless slang words. Instead, it reflects a deeper "post-truth" world where personal beliefs often become more important than facts. <mark>[II]</mark> For example, the term "delulu," once a small insult, now shows a social shift where people choose their own reality. <mark>[III]</mark> At the same time, the "tradwife" movement uses beautiful, <mark>glossy</mark> social media photos to make traditional housework look like a perfect dream. <mark>[IV]</mark>
Supporting this change is the "broligarchy"- a powerful group of tech leaders whose platforms control how these terms spread. From using "mouse jigglers" to pretend to be working to the use of "skibidi" as a word that often has no real meaning, these terms reflect the complex social lives of our tech-focused era.
Why does this "internet talk" matter so much? It works like a "soothing lullaby" where chaotic media makes the public feel comfortable but also disconnected from real life. Experts argue that the younger generation is very good at using ironic humor but struggles to find real meaning in things. <mark>If these simple phrases continue to replace serious thought, we might lose our ability to use language as a tool for clarity.</mark> It is essential to see the hollow nature of these attractive digital trends to protect our intellectual depth in an age where computer algorithms have so much influence over what we think and say.`;

const PASSAGE_SLANG_DN_TRANS = `TÁC ĐỘNG CỦA TIẾNG LÓNG INTERNET
Việc chính thức chấp nhận tiếng lóng Internet cho thấy một sự thay đổi căn bản trong cách tiếng Anh phát triển ngày nay. Quyết định này xác nhận ảnh hưởng lâu dài của thế hệ TikTok.

Hiện tượng này phản ánh một thế giới "hậu sự thật" sâu sắc hơn, nơi niềm tin cá nhân trở nên quan trọng hơn sự thật. Ví dụ, từ "delulu" cho thấy sự dịch chuyển xã hội nơi con người chọn lựa thực tại riêng.

Hậu thuẫn cho sự thay đổi này là nhóm các lãnh đạo công nghệ quyền lực. Ngôn ngữ Internet này hoạt động như một bài hát ru êm dịu làm công chúng tách rời khỏi thực tế. Nếu các cụm từ đơn giản này tiếp tục thay thế tư duy nghiêm túc, chúng ta có thể mất khả năng sử dụng ngôn ngữ như một công cụ diễn đạt rõ ràng.`;

const PASSAGE_BODY_CLOCK_DN = `For decades, the "body clock" was seen as a minor part of medical science, often dismissed as just the cause of jet lag. However, recent studies in chronobiology have <mark>revealed</mark> a more important reality: nearly every cell in our bodies follows a strict 24-hour cycle. This circadian system, managed by a "master clock" in the brain, not only regulates sleep; it also controls metabolism, hormone levels, and immune responses. In our modern world, this natural rhythm faces threats from artificial lighting and irregular lifestyle habits.
The consequences of circadian misalignment—the gap between our internal biological time and external social schedules—are serious. The chronic <mark>disruption</mark> of circadian cycles, common among shift workers and those using screens late at night, has been linked to a multitude of health issues, including Type 2 diabetes and obesity. <mark>Eating or exercising out of sync with metabolic peaks reduces nutrient efficiency.</mark> This shows that timing—not just diet—shapes long-term health.
Furthermore, there is a bidirectional relationship between circadian health and mental well-being. Disruptions in sleep cycles are often signs of coming depressive episodes, while stabilizing <mark>these rhythms</mark> can make psychiatric treatments more effective. Even the brain's cleaning system, which flushes out waste, works mainly during deep sleep to remove toxic proteins linked to brain diseases. Ignoring our internal timing not only causes fatigue but also gradually harms neurological health.
Solving this crisis requires a change in how we design our cities and daily lives. Experts suggest using "circadian-friendly" lighting in offices and schools to mimic natural sunlight, supporting alertness during the day while reducing sleep interference at night. Individually, learning how to align habits with biological peaks is becoming a vital life skill. A healthy society should learn to honor the ancient rhythms hardwired into our DNA.`;

const PASSAGE_BODY_CLOCK_DN_TRANS = `ĐỒNG HỒ SINH HỌC VÀ SỨC KHỎE
Các nghiên cứu sinh học thời gian cho thấy gần như mọi tế bào trong cơ thể đều tuân theo chu kỳ 24 giờ. Sự gián đoạn nhịp sinh học dẫn đến nhiều vấn đề như tiểu đường tuýp 2 và béo phì. Ăn uống hoặc tập luyện không đúng thời điểm đỉnh trao đổi chất sẽ làm giảm hiệu quả dinh dưỡng.

Giấc ngủ sâu giúp hệ thống làm sạch của não đào thải chất độc. Giải quyết cuộc khủng hoảng nhịp sinh học đòi hỏi thay đổi thiết kế đô thị và đồng bộ thói quen cá nhân.`;

const PASSAGE_FUEL_PRICE_DN = `From 3:00 p.m. on March 7, retail prices of petrol and oil products simultaneously increased sharply following a decision by the joint Ministry of Industry and Trade and the Ministry of Finance.
In this price adjustment period, amid global <mark>(35) ____________</mark>, the two ministries decided <mark>(36) ____________</mark> a price management plan to ensure that domestic fuel prices remain in line with international market developments with <mark>(37) ____________</mark> delay.
The authorities also continued to maintain a reasonable price gap between E5 RON92 biofuel and RON95 mineral petrol to <mark>(38) ____________</mark> the use of biofuels in line with the Government's policy, while ensuring balanced interests among market participants.
Since the beginning of this year, domestic fuel prices have undergone a <mark>(39) ____________</mark> of 11 adjustments. During this period, both RON95 and E5 RON92 experienced four decreases and seven increases, <mark>(40) ____________</mark> diesel oil recorded two falls and nine hikes.`;

const PASSAGE_FUEL_PRICE_DN_TRANS = `ĐIỀU CHỈNH GIÁ XĂNG DẦU
Từ 15:00 ngày 7/3, giá bán lẻ các sản phẩm xăng và dầu đồng loạt tăng mạnh sau quyết định của Liên bộ Công Thương - Tài chính. Kế hoạch quản lý bám sát giá quốc tế với độ trễ rất ít. Duy trì khoảng cách giá nhằm khuyến khích sử dụng xăng sinh học E5 RON92. Tổng cộng trải qua 11 lần điều chỉnh từ đầu năm.`;

export const DA_NANG_2026_QUESTIONS: Question[] = [
  // SECTION 1: REORDERING (Q1 - Q5) - NO PASSAGE
  {
    id: 'dn-q1',
    type: 'reordering',
    questionText: 'Question 1. Choose the correct order of dialogue sentences:\na. Minh: I get your point. I think we should use it as a tool, not just copy everything from it.\nb. Minh: Yeah, I\'ve tried Bard a few times. It really helps me brainstorm ideas for essays.\nc. Lan: That\'s true, but I feel like if I rely on it too much, I might stop thinking for myself.\nd. Lan: Have you ever used any AI tools to help with your homework?\ne. Lan: Exactly. It\'s all about finding the right balance so we can still learn effectively.',
    options: [
      { id: 'A', text: 'd – b – a – e – c', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'd – b – c – a – e', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'b – a – c – d – e', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'b – c – a – d – e', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG (d – b – c – a – e): Lan hỏi có dùng AI làm bài tập không (d) -> Minh nói dùng Bard động não (b) -> Lan lo ngại phụ thuộc ngưng tự suy nghĩ (c) -> Minh đồng tình xem AI như công cụ (a) -> Lan kết luận cần cân bằng (e).',
    translation: 'Sắp xếp đoạn hội thoại về việc sử dụng công cụ AI trong học tập:\na. Minh: Tớ hiểu ý cậu. Tớ nghĩ chúng ta nên dùng nó như một công cụ chứ không chỉ chép lại mọi thứ từ nó.\nb. Minh: Ùm, tớ đã thử Bard vài lần rồi. Nó thực sự giúp tớ động não tìm ý tưởng cho các bài luận.\nc. Lan: Đúng vậy, nhưng tớ cảm thấy nếu quá phụ thuộc vào nó, tớ có thể ngừng tự suy nghĩ.\nd. Lan: Cậu đã bao giờ dùng công cụ AI nào để giúp làm bài tập về nhà chưa?\ne. Lan: Chính xác. Tất cả là tìm ra sự cân bằng phù hợp để chúng ta vẫn có thể học hiệu quả.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'dn-q2',
    type: 'reordering',
    questionText: 'Question 2. Choose the correct order of dialogue sentences:\na. David: It\'s a serious problem. The job opportunities are here, but they barely cover the cost of rent and transport.\nb. Maria: Exactly. And the financial pressure just makes it impossible to save money or even enjoy the city life we moved here for.\nc. Maria: Do you ever wonder if living in this city is still worth it, given how high the cost of living has become?\nd. Maria: I suppose it\'s a major trade-off. We gain career growth but sacrifice our short-term financial well-being.\ne. David: That\'s the core issue. Even a small pay rise seems to disappear instantly on necessities.',
    options: [
      { id: 'A', text: 'c – a – b – e – d', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'd – e – b – a – c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'c – e – d – a – b', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'd – a – c – e – b', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (c – a – b – e – d): Maria hỏi chi phí sống thành phố có đáng không (c) -> David nêu thu nhập không đủ trả tiền nhà (a) -> Maria bổ sung áp lực không tiết kiệm được (b) -> David nhấn mạnh cốt lõi lương tăng biến mất (e) -> Maria kết luận đây là sự đánh đổi (d).',
    translation: 'Sắp xếp đoạn hội thoại thảo luận chi phí sinh hoạt thành phố:\na. David: Đó là một vấn đề nghiêm trọng. Cơ hội việc làm ở đây, nhưng chúng dường như không đủ trang trải chi phí tiền thuê nhà và di chuyển.\nb. Maria: Chính xác. Và áp lực tài chính khiến việc tiết kiệm tiền hay thậm chí tận hưởng cuộc sống thành phố trở nên không thể.\nc. Maria: Cậu có bao giờ tự hỏi liệu sống ở thành phố này có còn đáng không, khi mà chi phí sinh hoạt đã trở nên quá cao?\nd. Maria: Tớ cho rằng đó là một sự đánh đổi lớn. Chúng ta có sự phát triển sự nghiệp nhưng hy sinh sự thoải mái tài chính ngắn hạn.\ne. David: Đó là vấn đề cốt lõi. Ngay cả một đợt tăng lương nhỏ dường như cũng biến mất ngay lập tức cho các nhu cầu thiết yếu.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'dn-q3',
    type: 'reordering',
    questionText: 'Question 3. Choose the correct order of dialogue sentences:\na. Huy: That sounds like a plan! I\'ll bring some snacks and drinks then.\nb. Huy: The weather is so nice today. Why don\'t we go for a picnic in the park?\nc. An: I\'d love to, but I need to finish my English assignment first. How about 3 p.m.?\nd. An: That should work. See you later!',
    options: [
      { id: 'A', text: 'a – b – c – d', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'b – d – a – c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'b – c – a – d', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c – b – d – a', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG (b – c – a – d): Huy rủ đi dã ngoại công viên (b) -> An nhận lời nhưng hẹn 3h chiều sau khi làm bài (c) -> Huy đồng ý mang đồ ăn thức uống (a) -> An chốt hẹn gặp lại (d).',
    translation: 'Sắp xếp hội thoại rủ rê đi dã ngoại.',
    topicTag: 'Sắp xếp hội thoại ngắn'
  },
  {
    id: 'dn-q4',
    type: 'reordering',
    questionText: 'Question 4. Choose the correct order of letter sentences:\na. After the verification, your new account will be activated, and a physical debit card will be mailed to your registered address within three working days.\nb. It is our pleasure to inform you that your initial request for a premium savings account has been successfully reviewed by our system.\nc. Please visit the nearest branch with your ID to complete the face-to-face verification.\nd. For any activation inquiries, please contact our 24/7 customer service at 1800-XXXX.\ne. To proceed, please upload your residency documents to our online portal.',
    options: [
      { id: 'A', text: 'b – c – a – e – d', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'b – e – a – d – c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'b – a – e – c – d', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'b – e – c – a – d', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG (b – e – c – a – d): Thông báo hồ sơ đã được duyệt (b) -> Yêu cầu tải giấy tờ online (e) -> Yêu cầu đến chi nhánh xác minh trực tiếp (c) -> Kích hoạt tài khoản và gửi thẻ (a) -> Cung cấp số hotline hỗ trợ (d).',
    translation: 'Sắp xếp thư hướng dẫn kích hoạt tài khoản ngân hàng.',
    topicTag: 'Sắp xếp thư giao dịch'
  },
  {
    id: 'dn-q5',
    type: 'reordering',
    questionText: 'Question 5. Choose the correct order of sentences to make a paragraph:\na. These changes have turned the quiet district into a bustling commercial hub, boosting local economic growth.\nb. Also, a shopping complex replaced the former warehouses to serve the growing population.\nc. Meanwhile, surrounding green spaces were reduced to make room for new arterial roads.\nd. Over the last decade, the riverside area has undergone a major urban renewal project.\ne. It involved replacing old factories with new apartment blocks overlooking the waterfront.',
    options: [
      { id: 'A', text: 'd – e – b – c – a', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'd – b – e – a – c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'd – b – e – c – a', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'd – e – a – b – c', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (d – e – b – c – a): Nêu dự án cải tạo ven sông (d) -> Thay nhà máy bằng chung cư (e) -> Xây trung tâm mua sắm (b - Also) -> Giảm cây xanh mở đường (c - Meanwhile) -> Đánh giá tổng thể tăng trưởng kinh tế (a - These changes).',
    translation: 'Sắp xếp các câu thành đoạn văn về dự án cải tạo đô thị ven sông:\na. Những thay đổi này đã biến khu vực yên tĩnh thành một trung tâm thương mại sầm uất, thúc đẩy kinh tế địa phương.\nb. Ngoài ra, một khu phức hợp mua sắm đã thay thế các nhà kho cũ để phục vụ dân số ngày càng tăng.\nc. Trong khi đó, các không gian xanh xung quanh bị thu hẹp để nhường chỗ cho các tuyến đường trục mới.\nd. Trong thập kỷ qua, khu vực ven sông đã trải qua một dự án cải tạo đô thị lớn.\ne. Dự án bao gồm việc thay thế các nhà máy cũ bằng các khối chung cư mới nhìn ra mặt nước.',
    topicTag: 'Sắp xếp đoạn văn mô tả'
  },

  // SECTION 2: CLOZE LEAFLET - MENTAL HEALTH (Q6 - Q11)
  {
    id: 'dn-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_MENTAL_HEALTH_DN,
    passageTranslation: PASSAGE_MENTAL_HEALTH_DN_TRANS,
    questionText: 'Question 6. Fill in blank (6):',
    options: [
      { id: 'A', text: 'Therefore', translation: 'Do đó' },
      { id: 'B', text: 'Otherwise', translation: 'Nếu không thì' },
      { id: 'C', text: 'Moreover', translation: 'Hơn nữa' },
      { id: 'D', text: 'However', translation: 'Tuy nhiên' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: "However" tạo sự đối lập giữa ý "chăm sóc sức khỏe tinh thần là thiết yếu" nhưng "nhiều người lại bỏ qua".',
    translation: 'Chăm sóc sức khỏe tinh thần là thiết yếu. (6) ____________, nhiều thanh thiếu niên bỏ qua.',
    topicTag: 'Trạng từ liên kết đối lập (However)'
  },
  {
    id: 'dn-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_MENTAL_HEALTH_DN,
    passageTranslation: PASSAGE_MENTAL_HEALTH_DN_TRANS,
    questionText: 'Question 7. Fill in blank (7):',
    options: [
      { id: 'A', text: 'intensity', translation: 'cường độ' },
      { id: 'B', text: 'stability', translation: 'sự ổn định' },
      { id: 'C', text: 'consistency', translation: 'sự nhất quán' },
      { id: 'D', text: 'regulation', translation: 'sự điều tiết' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Collocation "emotional stability" nghĩa là sự ổn định về mặt cảm xúc.',
    translation: 'Duy trì sự (7) ____________ cảm xúc và mức năng lượng.',
    topicTag: 'Collocation (Emotional stability)'
  },
  {
    id: 'dn-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_MENTAL_HEALTH_DN,
    passageTranslation: PASSAGE_MENTAL_HEALTH_DN_TRANS,
    questionText: 'Question 8. Fill in blank (8):',
    options: [
      { id: 'A', text: 'sentiment', translation: 'tình cảm / quan điểm cảm tính' },
      { id: 'B', text: 'reaction', translation: 'phản ứng' },
      { id: 'C', text: 'outlook', translation: 'cái nhìn / quan điểm' },
      { id: 'D', text: 'insight', translation: 'sự thấu hiểu sâu sắc' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Collocation "a positive outlook on life" nghĩa là cái nhìn/quan điểm tích cực về cuộc sống.',
    translation: 'Phát triển một (8) ____________ tích cực về cuộc sống.',
    topicTag: 'Collocation (A positive outlook on life)'
  },
  {
    id: 'dn-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_MENTAL_HEALTH_DN,
    passageTranslation: PASSAGE_MENTAL_HEALTH_DN_TRANS,
    questionText: 'Question 9. Fill in blank (9):',
    options: [
      { id: 'A', text: 'restrictions', translation: 'sự hạn chế ép buộc' },
      { id: 'B', text: 'boundaries', translation: 'ranh giới' },
      { id: 'C', text: 'borders', translation: 'biên giới địa lý' },
      { id: 'D', text: 'edges', translation: 'mép / cạnh vật lý' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cụm từ "set boundaries with something" nghĩa là thiết lập ranh giới tự kiểm soát lành mạnh.',
    translation: 'Thiết lập (9) ____________ rõ ràng với mạng xã hội để tránh lo âu.',
    topicTag: 'Collocation (Set boundaries)'
  },
  {
    id: 'dn-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_MENTAL_HEALTH_DN,
    passageTranslation: PASSAGE_MENTAL_HEALTH_DN_TRANS,
    questionText: 'Question 10. Fill in blank (10):',
    options: [
      { id: 'A', text: 'pass over', translation: 'bỏ qua cơ hội/người' },
      { id: 'B', text: 'phase out', translation: 'loại bỏ dần dần' },
      { id: 'C', text: 'pull through', translation: 'vượt qua giai đoạn khó khăn' },
      { id: 'D', text: 'brush off', translation: 'gạt bỏ / phớt lờ ngay lập tức' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Phrasal verb "brush off negative thoughts" nghĩa là gạt bỏ / phớt lờ các suy nghĩ tiêu cực.',
    translation: 'Học cách (10) ____________ những suy nghĩ tiêu cực thay vì để chúng lấn át.',
    topicTag: 'Phrasal Verbs (Brush off)'
  },
  {
    id: 'dn-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_MENTAL_HEALTH_DN,
    passageTranslation: PASSAGE_MENTAL_HEALTH_DN_TRANS,
    questionText: 'Question 11. Fill in blank (11):',
    options: [
      { id: 'A', text: 'for', translation: 'for' },
      { id: 'B', text: 'on', translation: 'on' },
      { id: 'C', text: 'to', translation: 'to' },
      { id: 'D', text: 'into', translation: 'into' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc thành ngữ "take something for granted" (coi điều gì là hiển nhiên, không coi trọng).',
    translation: 'Đừng bao giờ xem sức khỏe tinh thần là điều (11) ____________ hiển nhiên.',
    topicTag: 'Thành ngữ cố định (Take for granted)'
  },

  // SECTION 3: HEART ATTACKS (Q12 - Q16)
  {
    id: 'dn-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_HEART_ATTACKS_DN,
    passageTranslation: PASSAGE_HEART_ATTACKS_DN_TRANS,
    questionText: 'Question 12. Fill in blank (12):',
    options: [
      { id: 'A', text: 'is getting a blockage completely', translation: 'bị tắc nghẽn hoàn toàn' },
      { id: 'B', text: 'that is partially or completely blocking', translation: 'dùng chủ động sai bị động' },
      { id: 'C', text: 'is partially or completely blocked', translation: 'bị tắc nghẽn một phần hoặc hoàn toàn' },
      { id: 'D', text: 'has been incompletely blocked', translation: 'dùng thì hoàn thành không tự nhiên' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Dạng bị động "is partially or completely blocked" diễn tả dòng máu bị tắc nghẽn.',
    translation: 'Đau tim xảy ra khi dòng máu đến tim (12) ____________.',
    topicTag: 'Dạng bị động trong định nghĩa y học'
  },
  {
    id: 'dn-q13',
    type: 'cloze_test',
    readingPassage: PASSAGE_HEART_ATTACKS_DN,
    passageTranslation: PASSAGE_HEART_ATTACKS_DN_TRANS,
    questionText: 'Question 13. Fill in blank (13):',
    options: [
      { id: 'A', text: 'mainly associated with poor diet and physical inactivity', translation: 'associated with quá nhẹ' },
      { id: 'B', text: 'which are influenced by diet and regular exercise', translation: 'ngược ý tập thể dục' },
      { id: 'C', text: 'that are closely linked to poor diet and physical inactivity', translation: 'dùng that sau dấu phẩy' },
      { id: 'D', text: 'largely resulting from poor diet and physical inactivity', translation: 'phần lớn bắt nguồn từ chế độ ăn kém và lười vận động' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cụm phân từ "resulting from" thể hiện rõ mối quan hệ nguyên nhân - kết quả mạnh mẽ.',
    translation: 'Các vấn đề sức khỏe gia tăng, (13) ____________.',
    topicTag: 'Cụm phân từ chỉ nguyên nhân (Resulting from)'
  },
  {
    id: 'dn-q14',
    type: 'cloze_test',
    readingPassage: PASSAGE_HEART_ATTACKS_DN,
    passageTranslation: PASSAGE_HEART_ATTACKS_DN_TRANS,
    questionText: 'Question 14. Fill in blank (14):',
    options: [
      { id: 'A', text: 'the unhealthy lifestyle choices kept in childhood', translation: 'choices kept gượng ép' },
      { id: 'B', text: 'unhealthy lifestyle choices starting in childhood', translation: 'những lựa chọn lối sống không lành mạnh bắt đầu từ thuở nhỏ' },
      { id: 'C', text: 'people keep unhealthy lifestyle choices in childhood', translation: 'mệnh đề S+V làm chủ ngữ' },
      { id: 'D', text: 'choosing unhealthy lifestyle in childhood', translation: 'choosing số ít không đi với play' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cụm danh từ số nhiều "choices starting in childhood" làm chủ ngữ chính xác cho động từ "play a larger role".',
    translation: 'Mặc dù bệnh có thể di truyền, (14) ____________ thường đóng vai trò lớn hơn.',
    topicTag: 'Hòa hợp Chủ ngữ - Động từ'
  },
  {
    id: 'dn-q15',
    type: 'cloze_test',
    readingPassage: PASSAGE_HEART_ATTACKS_DN,
    passageTranslation: PASSAGE_HEART_ATTACKS_DN_TRANS,
    questionText: 'Question 15. Fill in blank (15):',
    options: [
      { id: 'A', text: 'There is unawareness among young adults due to these risks', translation: 'sai logic nguyên nhân' },
      { id: 'B', text: 'Being aware of the risk, many young adults are taking risks', translation: 'mâu thuẫn thông tin' },
      { id: 'C', text: 'Despite these risks, many young adults remain unaware', translation: 'Mặc dù tồn tại những nguy cơ này, nhiều người trẻ vẫn không nhận thức được' },
      { id: 'D', text: 'Because of these risks, many young adults remain unaware', translation: 'sai logic nguyên nhân' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Giới từ "Despite + N" diễn tả sự đối lập: Dù rủi ro tồn tại nhưng người trẻ vẫn không nhận thức được.',
    translation: '(15) ____________. Khảo sát cho thấy 47% người dưới 45 không tin mình có nguy cơ.',
    topicTag: 'Cụm từ chỉ sự nhượng bộ (Despite)'
  },
  {
    id: 'dn-q16',
    type: 'cloze_test',
    readingPassage: PASSAGE_HEART_ATTACKS_DN,
    passageTranslation: PASSAGE_HEART_ATTACKS_DN_TRANS,
    questionText: 'Question 16. Fill in blank (16):',
    options: [
      { id: 'A', text: 'While they are busy with careers and families, they consider long-term health risks carefully', translation: 'mâu thuẫn ý bỏ qua' },
      { id: 'B', text: 'As they are busy with careers and families, this group often overlooks their heart health', translation: 'Vì họ bận rộn với sự nghiệp và gia đình, nhóm này thường bỏ qua sức khỏe tim của mình' },
      { id: 'C', text: 'When they neglect their heart health, it is often due to pressure from work and family duties', translation: 'giải thích gián tiếp' },
      { id: 'D', text: 'Although they are busy with careers and families, they manage to take good care of their heart health', translation: 'mâu thuẫn thông tin' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "As they are busy... overlooks..." giải thích trực tiếp tại sao việc vận động người trẻ quan tâm tim mạch là một thách thức.',
    translation: 'Khiến người trẻ quan tâm sức khỏe tim mạch là thách thức. (16) ____________.',
    topicTag: 'Mệnh đề chỉ nguyên nhân (As)'
  },

  // SECTION 4: INTERNET SLANG (Q17 - Q26)
  {
    id: 'dn-q17',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 17. According to paragraph 1, what does the inclusion of internet slang in the Cambridge Dictionary prove?',
    options: [
      { id: 'A', text: 'It suggests that the TikTok generation does not care about language.', translation: 'Cho thấy thế hệ TikTok không quan tâm ngôn ngữ.' },
      { id: 'B', text: 'It shows how companies are forcing dictionaries to change their rules.', translation: 'Cho thấy các công ty ép từ điển...' },
      { id: 'C', text: 'It shows that these words will only be popular for a short time.', translation: 'Cho thấy các từ này chỉ phổ biến ngắn hạn.' },
      { id: 'D', text: 'It acts as a firm confirmation of the lasting impact of digital words.', translation: 'Đó là sự xác nhận chắc chắn về tác động lâu dài của các từ kỹ thuật số.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Dẫn chứng đoạn 1: "confirms the lasting influence of the TikTok generation".',
    translation: 'Theo đoạn 1, việc đưa tiếng lóng Internet vào từ điển chứng minh điều gì?',
    topicTag: 'Đọc hiểu - Chi tiết trong bài'
  },
  {
    id: 'dn-q18',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 18. Which of the following is the best main idea for paragraph 1?',
    options: [
      { id: 'A', text: 'YouTube and TikTok are the only places where new English words are created.', translation: 'YouTube và TikTok là nơi duy nhất...' },
      { id: 'B', text: 'The way English grows is changing because of how young people talk online.', translation: 'Cách tiếng Anh phát triển đang thay đổi do cách giới trẻ trò chuyện trên mạng.' },
      { id: 'C', text: 'Internet humor is becoming too difficult for most people to understand.', translation: 'Hài hước Internet quá khó hiểu...' },
      { id: 'D', text: 'Dictionary editors are struggling to understand new internet trends.', translation: 'Biên tập viên từ điển vật lộn...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Tóm tắt chính xác câu mở đầu về sự thay đổi trong cách phát triển tiếng Anh.',
    translation: 'Ý chính tốt nhất cho đoạn 1 là gì?',
    topicTag: 'Đọc hiểu - Ý chính đoạn văn'
  },
  {
    id: 'dn-q19',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 19. Which of the following is NOT mentioned as an expression reflecting social or work changes?',
    options: [
      { id: 'A', text: 'delulu', translation: 'delulu' },
      { id: 'B', text: 'soothing lullaby', translation: 'bài hát ru êm dịu' },
      { id: 'C', text: 'broligarchy', translation: 'broligarchy' },
      { id: 'D', text: 'mouse jiggler', translation: 'mouse jiggler' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG (là cụm KHÔNG PHẢI thuật ngữ phản ánh thay đổi): "soothing lullaby" chỉ là phép ẩn dụ, không phải từ lóng phản ánh công việc hay xã hội.',
    translation: 'Cụm từ nào dưới đây KHÔNG được nhắc đến như một cách diễn đạt phản ánh thay đổi xã hội/công việc?',
    topicTag: 'Đọc hiểu - Chi tiết KHÔNG có'
  },
  {
    id: 'dn-q20',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 20. The word "their" in the first paragraph refers to:',
    options: [
      { id: 'A', text: 'the TikTok generation', translation: 'thế hệ TikTok' },
      { id: 'B', text: 'digital fad', translation: 'trào lưu kỹ thuật số' },
      { id: 'C', text: 'terms like "skibidi" or "delulu"', translation: 'những thuật ngữ như "skibidi" hay "delulu"' },
      { id: 'D', text: 'dictionary writers', translation: 'người viết từ điển' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: "their" thay thế cho danh từ số nhiều "terms like skibidi, delulu" ở câu trước.',
    translation: 'Từ "their" trong đoạn 1 quy chiếu đến từ nào?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'dn-q21',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 21. The word "glossy" in paragraph 2 is closest in meaning to:',
    options: [
      { id: 'A', text: 'very expensive and modern', translation: 'rất đắt và hiện đại' },
      { id: 'B', text: 'difficult to see or understand', translation: 'khó nhìn hoặc khó hiểu' },
      { id: 'C', text: 'shiny and high-quality', translation: 'bóng và chất lượng cao' },
      { id: 'D', text: 'attractive but not showing the whole truth', translation: 'hấp dẫn nhưng không cho thấy toàn bộ sự thật' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Ngữ cảnh "glossy photos to make traditional housework look like a perfect dream" thể hiện vẻ ngoài hào nhoáng giả tạo.',
    translation: 'Từ "glossy" trong đoạn 2 gần nghĩa nhất với câu nào?',
    topicTag: 'Đọc hiểu - Từ vựng ngữ cảnh'
  },
  {
    id: 'dn-q22',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 22. According to the passage, who controls the way new internet terms spread?',
    options: [
      { id: 'A', text: 'powerful tech leaders', translation: 'các lãnh đạo công nghệ quyền lực' },
      { id: 'B', text: 'language critics', translation: 'các nhà phê bình ngôn ngữ' },
      { id: 'C', text: 'the TikTok generation', translation: 'thế hệ TikTok' },
      { id: 'D', text: 'dictionary writers', translation: 'người viết từ điển' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Bài viết nêu rõ "broligarchy - a powerful group of tech leaders whose platforms control how these terms spread".',
    translation: 'Theo bài đọc, ai kiểm soát cách các thuật ngữ Internet mới lan truyền?',
    topicTag: 'Đọc hiểu - Chi tiết trong bài'
  },
  {
    id: 'dn-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 23. Which of the following best paraphrases the underlined sentence in the final paragraph?',
    options: [
      { id: 'A', text: 'Language is becoming a better tool for communication because these phrases help us think more seriously.', translation: 'Ngôn ngữ đang trở thành công cụ tốt hơn...' },
      { id: 'B', text: 'If we keep using simple slang instead of thinking deeply, we may no longer be able to communicate clearly.', translation: 'Nếu chúng ta tiếp tục dùng tiếng lóng đơn giản thay vì suy nghĩ sâu, chúng ta có thể không còn giao tiếp rõ ràng được nữa.' },
      { id: 'C', text: 'Clear speaking is the main reason these simple internet phrases are popular today.', translation: 'Nói rõ ràng là lý do chính...' },
      { id: 'D', text: 'We should use more simple phrases so that everyone can understand our serious thoughts more clearly.', translation: 'Chúng ta nên dùng nhiều cụm từ đơn giản...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Giữ nguyên cấu trúc giả định và cảnh báo tiêu cực của câu gốc.',
    translation: 'Câu nào dưới đây diễn đạt lại tốt nhất câu được gạch chân trong đoạn cuối?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'dn-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 24. Where in the passage does the following sentence best fit: "This shift can be clearly seen in the way certain online terms have moved from casual jokes to markers of social attitudes."',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'C', text: '[IV]', translation: 'Vị trí [IV]' },
      { id: 'D', text: '[II]', translation: 'Vị trí [II]' }
    ],
    correctAnswer: 'D',
    explanation: '• D. [II] - ĐÚNG: Vị trí [II] làm cầu nối hoàn hảo giữa nhận định chung về thế giới "post-truth" và ví dụ cụ thể về từ "delulu".',
    translation: 'Vị trí nào trong đoạn văn phù hợp nhất để đặt câu trên?',
    topicTag: 'Đọc hiểu - Chèn câu thích hợp'
  },
  {
    id: 'dn-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 25. What can be inferred from the passage?',
    options: [
      { id: 'A', text: 'The "tradwife" movement is the only reason people no longer believe in facts.', translation: 'Phong trào tradwife là lý do duy nhất...' },
      { id: 'B', text: 'Young people use "skibidi" to make sure older people cannot understand them.', translation: 'Người trẻ dùng skibidi để người lớn không hiểu...' },
      { id: 'C', text: 'Dictionaries only accept new words after they are used by famous leaders.', translation: 'Từ điển chỉ chấp nhận từ mới khi lãnh đạo dùng...' },
      { id: 'D', text: 'Constant exposure to chaotic media might make people less connected to reality.', translation: 'Việc tiếp xúc liên tục với truyền thông hỗn loạn có thể khiến người ta tách rời khỏi thực tế.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Suy luận trực tiếp từ ý "chaotic media makes the public feel comfortable but disconnected from real life".',
    translation: 'Điều nào có thể được suy luận từ bài đọc?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'dn-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SLANG_DN,
    passageTranslation: PASSAGE_SLANG_DN_TRANS,
    questionText: 'Question 26. Which of the following is the best summary of the passage?',
    options: [
      { id: 'A', text: 'Internet slang is a great way to make communication clearer and deeper.', translation: 'Tiếng lóng Internet là cách tuyệt vời giao tiếp rõ ràng...' },
      { id: 'B', text: 'Tech leaders are using slang words to control how people vote in elections.', translation: 'Lãnh đạo công nghệ dùng tiếng lóng kiểm soát bầu cử...' },
      { id: 'C', text: 'While internet words are popular, they might hide a lack of real meaning and make us think less.', translation: 'Mặc dù từ ngữ Internet phổ biến, chúng có thể che giấu sự thiếu vắng ý nghĩa thực sự và khiến ta suy nghĩ ít hơn.' },
      { id: 'D', text: 'The Cambridge Dictionary proves that algorithms now control the entire English language.', translation: 'Từ điển Cambridge chứng minh thuật toán kiểm soát toàn bộ tiếng Anh...' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Tóm tắt bao quát cả hai mặt: sự phổ biến ở đoạn 1 và tính chất rỗng tuếch/giảm tư duy ở đoạn 4.',
    translation: 'Đâu là tóm tắt tốt nhất cho bài đọc?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Summary)'
  },

  // SECTION 5: BODY CLOCK (Q27 - Q34)
  {
    id: 'dn-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK_DN,
    passageTranslation: PASSAGE_BODY_CLOCK_DN_TRANS,
    questionText: 'Question 27. The word "revealed" in paragraph 1 mostly means:',
    options: [
      { id: 'A', text: 'ignored', translation: 'phớt lờ' },
      { id: 'B', text: 'discovered', translation: 'phát hiện ra' },
      { id: 'C', text: 'confirmed', translation: 'xác nhận' },
      { id: 'D', text: 'questioned', translation: 'đặt câu hỏi' }
    ],
    correctAnswer: 'B',
    explanation: '• B. discovered - ĐÚNG: "Revealed" (bộc lộ / hé lộ) đồng nghĩa với "discovered" (phát hiện ra).',
    translation: 'Từ "revealed" trong đoạn 1 chủ yếu có nghĩa là gì?',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'dn-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK_DN,
    passageTranslation: PASSAGE_BODY_CLOCK_DN_TRANS,
    questionText: 'Question 28. The word "disruption" in paragraph 2 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'disorder', translation: 'rối loạn' },
      { id: 'B', text: 'interruption', translation: 'sự gián đoạn' },
      { id: 'C', text: 'continuity', translation: 'sự liên tục' },
      { id: 'D', text: 'instability', translation: 'sự bất ổn' }
    ],
    correctAnswer: 'C',
    explanation: '• C. continuity - ĐÚNG: "Disruption" (sự gián đoạn) TRÁI NGHĨA với "continuity" (sự liên tục).',
    translation: 'Từ "disruption" trong đoạn 2 TRÁI NGHĨA với từ nào?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'dn-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK_DN,
    passageTranslation: PASSAGE_BODY_CLOCK_DN_TRANS,
    questionText: 'Question 29. Which of the following best paraphrases the sentence in paragraph 2 ("Eating or exercising out of sync with metabolic peaks reduces nutrient efficiency")?',
    options: [
      { id: 'A', text: 'Nutrient use is less efficient when meals or exercise reach metabolic peaks.', translation: 'Dinh dưỡng kém hiệu quả khi đạt đỉnh...' },
      { id: 'B', text: 'Low nutrient efficiency results from eating or exercising aligned with your natural clock.', translation: 'Hiệu quả thấp do đồng bộ...' },
      { id: 'C', text: 'Eating or exercising at off-peak metabolic times promotes nutrient effectiveness.', translation: 'Ăn ngoài đỉnh thúc đẩy hiệu quả...' },
      { id: 'D', text: 'Eating or exercising at the wrong metabolic times lowers nutrient absorption.', translation: 'Việc ăn uống hoặc tập luyện vào thời điểm trao đổi chất sai lệch làm giảm hấp thụ dinh dưỡng.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: "out of sync" = "at the wrong metabolic times", "reduces nutrient efficiency" = "lowers nutrient absorption".',
    translation: 'Đâu là cách diễn đạt lại tốt nhất cho câu trong đoạn 2?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'dn-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK_DN,
    passageTranslation: PASSAGE_BODY_CLOCK_DN_TRANS,
    questionText: 'Question 30. What does the phrase "these rhythms" in paragraph 3 refer to?',
    options: [
      { id: 'A', text: 'sleep cycles', translation: 'chu kỳ giấc ngủ' },
      { id: 'B', text: 'depressive episodes', translation: 'các đợt trầm cảm' },
      { id: 'C', text: 'psychiatric treatments', translation: 'điều trị tâm thần' },
      { id: 'D', text: 'disruptions', translation: 'sự gián đoạn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. sleep cycles - ĐÚNG: "Disruptions in sleep cycles... stabilizing these rhythms" -> "these rhythms" chỉ "sleep cycles".',
    translation: 'Cụm "these rhythms" trong đoạn 3 chỉ điều gì?',
    topicTag: 'Đọc hiểu - Từ quy chiếu'
  },
  {
    id: 'dn-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK_DN,
    passageTranslation: PASSAGE_BODY_CLOCK_DN_TRANS,
    questionText: 'Question 31. What can be inferred about the "brain\'s cleaning system" mentioned in paragraph 3?',
    options: [
      { id: 'A', text: 'It operates at maximum efficiency during periods of intense physical activity.', translation: 'Nó hoạt động tối đa khi vận động mạnh.' },
      { id: 'B', text: 'Its malfunction may contribute to the development of neurological disorders.', translation: 'Sự trục trặc của nó có thể góp phần vào sự phát triển các rối loạn thần kinh.' },
      { id: 'C', text: 'It is primarily responsible for triggering depressive episodes in shift workers.', translation: 'Nó gây trầm cảm ở người làm ca.' },
      { id: 'D', text: 'It requires a consistent social schedule to maintain long-term neurological health.', translation: 'Nó yêu cầu lịch trình xã hội nhất quán.' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Nếu hệ thống làm sạch không đào thải được chất độc trong giấc ngủ sâu, nó dẫn đến các bệnh về não (neurological disorders).',
    translation: 'Có thể suy luận điều gì về "hệ thống làm sạch của não" được nhắc trong đoạn 3?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'dn-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK_DN,
    passageTranslation: PASSAGE_BODY_CLOCK_DN_TRANS,
    questionText: 'Question 32. Which of the following is NOT mentioned in paragraph 4 as a solution to the circadian crisis?',
    options: [
      { id: 'A', text: 'Solar-simulating lighting systems.', translation: 'Hệ thống ánh sáng mô phỏng mặt trời.' },
      { id: 'B', text: 'Individual biological alignment.', translation: 'Đồng bộ sinh học cá nhân.' },
      { id: 'C', text: 'Genetic modification of DNA rhythms.', translation: 'Chỉnh sửa gen của các nhịp DNA.' },
      { id: 'D', text: 'Urban and architectural redesign.', translation: 'Thiết kế lại đô thị và kiến trúc.' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG (là giải pháp KHÔNG ĐƯỢC NÊU): Bài chỉ nói "honor" (tôn trọng) nhịp DNA, không nói đến "genetic modification" (chỉnh sửa gen).',
    translation: 'Đâu KHÔNG được nhắc đến ở đoạn 4 như một giải pháp cho cuộc khủng hoảng nhịp sinh học?',
    topicTag: 'Đọc hiểu - Chi tiết KHÔNG có'
  },
  {
    id: 'dn-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK_DN,
    passageTranslation: PASSAGE_BODY_CLOCK_DN_TRANS,
    questionText: 'Question 33. Which paragraph highlights the need for biological awareness in public and personal spheres?',
    options: [
      { id: 'A', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 1', translation: 'Đoạn 1' }
    ],
    correctAnswer: 'A',
    explanation: '• A. Paragraph 4 - ĐÚNG: Đoạn 4 kết hợp cả lĩnh vực công cộng (thiết kế đô thị, trường học) và cá nhân (đồng bộ thói quen).',
    translation: 'Đoạn nào nhấn mạnh nhu cầu nhận thức sinh học ở cả lĩnh vực công cộng và cá nhân?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },
  {
    id: 'dn-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK_DN,
    passageTranslation: PASSAGE_BODY_CLOCK_DN_TRANS,
    questionText: 'Question 34. Which of the following is NOT supported by the passage?',
    options: [
      { id: 'A', text: 'Artificial lighting outweighs other factors in causing circadian misalignment.', translation: 'Ánh sáng nhân tạo lấn át các yếu tố khác trong việc gây lệch nhịp sinh học.' },
      { id: 'B', text: 'Aligning daily habits with biological timing can contribute to improved long-term health.', translation: 'Đồng bộ thói quen giúp cải thiện sức khỏe dài hạn.' },
      { id: 'C', text: 'Disruptions in circadian rhythms may reduce the effectiveness of mental health treatments.', translation: 'Sự gián đoạn nhịp sinh học làm giảm hiệu quả điều trị tâm thần.' },
      { id: 'D', text: 'Deep sleep plays a role in eliminating substances associated with neurological disorders.', translation: 'Giấc ngủ sâu giúp loại bỏ các chất liên quan rối loạn thần kinh.' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (là ý KHÔNG ĐƯỢC HỖ TRỢ): Ánh sáng nhân tạo chỉ được kể là một trong các yếu tố gây hại, không có thông tin khẳng định nó "lấn át" (outweighs) các yếu tố khác.',
    translation: 'Đâu KHÔNG được hỗ trợ bởi bài đọc?',
    topicTag: 'Đọc hiểu - Khẳng định Không Đúng'
  },

  // SECTION 6: CLOZE NEWS - FUEL PRICES (Q35 - Q40)
  {
    id: 'dn-q35',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE_DN,
    passageTranslation: PASSAGE_FUEL_PRICE_DN_TRANS,
    questionText: 'Question 35. Fill in blank (35):',
    options: [
      { id: 'A', text: 'price fuel fluctuations', translation: 'sai trật tự danh từ' },
      { id: 'B', text: 'fluctuations fuel price', translation: 'sai trật tự danh từ' },
      { id: 'C', text: 'fuel price fluctuations', translation: 'biến động giá nhiên liệu' },
      { id: 'D', text: 'price fluctuations fuel', translation: 'sai trật tự danh từ' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Trật tự danh từ ghép chuẩn: fuel (nhiên liệu) + price (giá) + fluctuations (biến động).',
    translation: 'Trong kỳ điều chỉnh này, giữa những (35) ____________ toàn cầu...',
    topicTag: 'Trật tự danh từ ghép'
  },
  {
    id: 'dn-q36',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE_DN,
    passageTranslation: PASSAGE_FUEL_PRICE_DN_TRANS,
    questionText: 'Question 36. Fill in blank (36):',
    options: [
      { id: 'A', text: 'at', translation: 'at' },
      { id: 'B', text: 'to', translation: 'to' },
      { id: 'C', text: 'on', translation: 'on' },
      { id: 'D', text: 'in', translation: 'in' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cấu trúc "decide on something" nghĩa là đưa ra quyết định chọn lựa một kế hoạch.',
    translation: 'Hai bộ đã quyết định (36) ____________ một kế hoạch quản lý giá.',
    topicTag: 'Giới từ (Decide on)'
  },
  {
    id: 'dn-q37',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE_DN,
    passageTranslation: PASSAGE_FUEL_PRICE_DN_TRANS,
    questionText: 'Question 37. Fill in blank (37):',
    options: [
      { id: 'A', text: 'little', translation: 'rất ít' },
      { id: 'B', text: 'few', translation: 'ít' },
      { id: 'C', text: 'a little', translation: 'một chút' },
      { id: 'D', text: 'a few', translation: 'một vài' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "with little delay" nghĩa là với độ trễ rất ít (hầu như không có).',
    translation: 'Đảm bảo giá nhiên liệu trong nước bám sát giá quốc tế với (37) ____________ độ trễ.',
    topicTag: 'Lượng từ (Little + N)'
  },
  {
    id: 'dn-q38',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE_DN,
    passageTranslation: PASSAGE_FUEL_PRICE_DN_TRANS,
    questionText: 'Question 38. Fill in blank (38):',
    options: [
      { id: 'A', text: 'regulate', translation: 'điều tiết' },
      { id: 'B', text: 'encourage', translation: 'khuyến khích' },
      { id: 'C', text: 'manage', translation: 'quản lý' },
      { id: 'D', text: 'produce', translation: 'sản xuất' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "encourage the use of biofuels" (khuyến khích sử dụng nhiên liệu sinh học).',
    translation: 'Duy trì khoảng cách giá nhằm (38) ____________ việc sử dụng nhiên liệu sinh học.',
    topicTag: 'Từ vựng ngữ cảnh'
  },
  {
    id: 'dn-q39',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE_DN,
    passageTranslation: PASSAGE_FUEL_PRICE_DN_TRANS,
    questionText: 'Question 39. Fill in blank (39):',
    options: [
      { id: 'A', text: 'complete', translation: 'hoàn chỉnh' },
      { id: 'B', text: 'total', translation: 'tổng cộng' },
      { id: 'C', text: 'full', translation: 'đầy đủ' },
      { id: 'D', text: 'whole', translation: 'toàn bộ' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cụm từ "a total of + number" (tổng cộng 11 lần điều chỉnh).',
    translation: 'Giá nhiên liệu trong nước đã trải qua (39) ____________ 11 lần điều chỉnh.',
    topicTag: 'Collocation (A total of)'
  },
  {
    id: 'dn-q40',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE_DN,
    passageTranslation: PASSAGE_FUEL_PRICE_DN_TRANS,
    questionText: 'Question 40. Fill in blank (40):',
    options: [
      { id: 'A', text: 'however', translation: 'tuy nhiên' },
      { id: 'B', text: 'although', translation: 'mặc dù' },
      { id: 'C', text: 'so', translation: 'vì vậy' },
      { id: 'D', text: 'while', translation: 'trong khi đó' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Liên từ "while" dùng để đối chiếu hai nhóm số liệu diễn ra song song.',
    translation: 'Xăng 4 lần giảm 7 lần tăng, (40) ____________ dầu diesel ghi nhận 2 lần giảm 9 lần tăng.',
    topicTag: 'Liên từ đối chiếu (While)'
  }
];

export const DA_NANG_2026_EXAM: ExamSet = {
  id: 'exam-da-nang-2026',
  title: 'Đề Thi Thử THPT 2026 - Sở GD&ĐT TP. Đà Nẵng',
  description: 'Đề thi khảo sát chất lượng chính thức THPT 2026 Sở GD&ĐT TP. Đà Nẵng gồm trọn bộ 40 câu trắc nghiệm chuẩn cấu trúc 2026 kèm lời giải chi tiết & bản dịch.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'SỞ ĐÀ NẴNG 2026',
  iconName: 'Award',
  questions: DA_NANG_2026_QUESTIONS
};
