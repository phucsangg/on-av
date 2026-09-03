import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_JAPAN_MOBILITY = `Japan Mobility Show 2025 highlights smart, sustainable transport
The Japan Mobility Show 2025, <mark>(1) ____________</mark> is organised by the Japan Automobile Manufacturers Association (JAMA), has returned to Tokyo Big Sight with a larger scale than previous editions. The event started with press days on October 29-30 and will be open to the public from October 31 to November 9. With the theme “A unique opportunity to explore mobility’s future,” the show has attracted a record of 517 companies and organisations, including 42 international <mark>(2) ____________</mark>.
A wide range of innovations in the mobility ecosystem is being showcased, <mark>(3) ____________</mark> the shift from traditional car manufacturing to broader mobility solutions. Several world and Japan premieres were presented by major automakers such as Toyota, Honda, and Lexus. For instance, Toyota’s luxury brand Century revealed a new brand concept along with a coupe-style concept model.
Honda introduced its new 0 Series electric vehicle lineup, which includes the Honda 0 Saloon, Honda 0 SUV, and the 0 α SUV prototype, as well as the small EV Super-ONE Prototype. These vehicles are powered by Asimo OS, <mark>(4) ____________</mark> that uses machine learning. The software is designed to learn drivers’ preferences so that the driving experience can be personalised.
It was also announced that the Honda 0 SUV may be introduced to the Vietnamese market in the future. However, the expansion of electric vehicles will depend <mark>(5) ____________</mark> charging infrastructure, which needs to be strengthened by government support. In addition, hybrid vehicles will soon be introduced, and Honda plans to have new technologies <mark>(6) ____________</mark> continuously throughout the vehicle lifecycle. The event also highlights startups, which are being connected with established companies through networking programmes.`;

const PASSAGE_JAPAN_MOBILITY_TRANS = `TRIỂN LÃM JAPAN MOBILITY SHOW 2025
Triển lãm Japan Mobility Show 2025, được tổ chức bởi Hiệp hội Các nhà sản xuất Ô tô Nhật Bản (JAMA), đã trở lại Tokyo Big Sight với quy mô lớn hơn so với các lần trước. Sự kiện bắt đầu với các ngày dành cho báo chí vào 29-30 tháng 10 và sẽ mở cửa cho công chúng từ 31 tháng 10 đến 9 tháng 11. Với chủ đề “Cơ hội độc đáo để khám phá tương lai di chuyển,” triển lãm đã thu hút kỷ lục 517 công ty và tổ chức, bao gồm 42 người tham gia quốc tế.

Một loạt các đổi mới trong hệ sinh thái di chuyển đang được giới thiệu, phản ánh sự chuyển dịch từ sản xuất ô tô truyền thống sang các giải pháp di chuyển rộng hơn. Nhiều sản phẩm ra mắt thế giới và Nhật Bản được trình bày bởi các hãng xe lớn như Toyota, Honda và Lexus.

Honda giới thiệu dòng xe điện 0 Series mới. Những chiếc xe này được trang bị Asimo OS, hệ điều hành thông minh sử dụng học máy. Phần mềm này được thiết kế để học các sở thích của người lái nhằm cá nhân hóa trải nghiệm lái xe.

Cũng đã được thông báo rằng Honda 0 SUV có thể được giới thiệu tại thị trường Việt Nam trong tương lai. Tuy nhiên, việc mở rộng xe điện sẽ phụ thuộc vào cơ sở hạ tầng sạc, cần được chính phủ hỗ trợ tăng cường. Đồng thời các công nghệ mới sẽ được phát triển liên tục.`;

const PASSAGE_PANDA_BASE = `China launches new giant panda base, expanding conservation network
A new giant panda base has recently been launched in Mianyang, <mark>(7) ____________</mark> in Sichuan Province, southwest China, as part of efforts to strengthen panda conservation, scientific research, and international cooperation. The facility, which <mark>(8) ____________</mark> the China Conservation and Research Centre for the Giant Panda, <mark>(9) ____________</mark> the fifth site in the national panda conservation network. 
The base covers around 120 hectares and has recently begun trial operations and is expected to open to visitors next year. 13 pandas, which were moved from other breeding centers, are currently adapting to their new environment. To ease the transition, the base has deployed an experienced team to keep close watch over the animals. <mark>(10) ____________</mark> the pandas appear slightly nervous, they are gradually settling in.
According to China’s fourth national panda survey, about 418 wild giant pandas live in Mianyang, making the city the region that houses the largest number of pandas. These animals play an important role in biodiversity protection, which has been strongly promoted by the Chinese government.
Since the 1980s, major progress has been <mark>(11) ____________</mark> in captive breeding. The panda population at the research center has been increased from only six individuals in 1983 to more than 380 today, showing that long-term conservation efforts have <mark>(12) ____________</mark> and continue to support the survival of this iconic species.`;

const PASSAGE_PANDA_BASE_TRANS = `TRUNG TÂM GẤU TRÚC MỚI TẠI TRUNG QUỐC
Một trung tâm gấu trúc mới gần đây đã được thành lập tại Mianyang, nằm ở tỉnh Tứ Xuyên, Tây Nam Trung Quốc, như một phần của nỗ lực tăng cường bảo tồn gấu trúc, nghiên cứu khoa học và hợp tác quốc tế. Cơ sở này, thuộc về Trung tâm Bảo tồn và Nghiên cứu Gấu Trúc Trung Quốc, đã trở thành địa điểm thứ năm trong mạng lưới bảo tồn gấu trúc quốc gia.

Trung tâm có diện tích khoảng 120 ha và gần đây đã bắt đầu vận hành thử nghiệm, dự kiến sẽ mở cửa cho khách tham quan vào năm tới. 13 cá thể gấu trúc hiện đang thích nghi với môi trường mới. Mặc dù những con gấu trúc có vẻ hơi lo lắng, chúng đang dần thích nghi.

Theo khảo sát gấu trúc quốc gia lần thứ tư của Trung Quốc, khoảng 418 con gấu trúc hoang dã sống tại Mianyang. Kể từ những năm 1980, đã có tiến bộ lớn đạt được trong việc nuôi nhốt và nhân giống, cho thấy nỗ lực bảo tồn dài hạn đã mang lại kết quả.`;

const PASSAGE_INTERNET_SLANG = `The formal acceptance of internet slang shows a fundamental change in how the English language grows today. Some people may think that terms like "skibidi," "delulu," or "tradwife" are just short-term digital trends. However, <mark>their</mark> recent inclusion in the Cambridge Dictionary serves as a strong answer to those critics. This decision confirms the lasting influence of the TikTok generation, showing that these expressions are no longer just on the edges of our daily talk but have become central to modern communication.
<mark>[I]</mark> This phenomenon is not just about a collection of harmless slang words. Instead, it reflects a deeper "post-truth" world where personal beliefs often become more important than facts. <mark>[II]</mark> For example, the term "delulu," once a small insult, now shows a social shift where people choose their own reality. <mark>[III]</mark> At the same time, the "tradwife" movement uses beautiful, <mark>glossy</mark> social media photos to make traditional housework look like a perfect dream. <mark>[IV]</mark>
Supporting this change is the "broligarchy"- a powerful group of tech leaders whose platforms control how these terms spread. From using "mouse jigglers" to pretend to be working to the use of "skibidi" as a word that often has no real meaning, these terms reflect the complex social lives of our tech-focused era.
Why does this "internet talk" matter so much? It works like a "soothing lullaby" where chaotic media makes the public feel comfortable but also disconnected from real life. Experts argue that the younger generation is very good at using ironic humor but struggles to find real meaning in things. <mark>If these simple phrases continue to replace serious thought, we might lose our ability to use language as a tool for clarity.</mark> It is essential to see the hollow nature of these attractive digital trends to protect our intellectual depth in an age where computer algorithms have so much influence over what we think and say.`;

const PASSAGE_INTERNET_SLANG_TRANS = `TÁC ĐỘNG CỦA TIẾNG LÓNG INTERNET
Việc chính thức chấp nhận tiếng lóng Internet cho thấy một sự thay đổi căn bản trong cách tiếng Anh phát triển ngày nay. Một số người có thể nghĩ rằng những thuật ngữ như "skibidi", "delulu" hay "tradwife" chỉ là những trào lưu kỹ thuật số ngắn hạn. Tuy nhiên, việc chúng vừa được đưa vào Từ điển Cambridge đã đóng vai trò là một câu trả lời mạnh mẽ cho những người chỉ trích. Quyết định này xác nhận ảnh hưởng lâu dài của thế hệ TikTok.

Hiện tượng này không chỉ là một bộ sưu tập tiếng lóng vô hại. Thay vào đó, nó phản ánh một thế giới "hậu sự thật" sâu sắc hơn, nơi niềm tin cá nhân thường trở nên quan trọng hơn sự thật. Ví dụ, từ "delulu" giờ đây cho thấy một sự dịch chuyển xã hội nơi con người chọn lựa thực tại của riêng mình.

Hậu thuẫn cho sự thay đổi này là "broligarchy" - một nhóm các lãnh đạo công nghệ quyền lực mà các nền tảng của họ kiểm soát cách những thuật ngữ này lan truyền. Tại sao "ngôn ngữ Internet" này lại quan trọng đến vậy? Nó hoạt động như một "bài hát ru êm dịu", nơi truyền thông hỗn loạn khiến công chúng cảm thấy thoải mái nhưng cũng tách rời khỏi đời thực. Nếu những cụm từ đơn giản này tiếp tục thay thế tư duy nghiêm túc, chúng ta có thể mất khả năng sử dụng ngôn ngữ như một công cụ để diễn đạt rõ ràng.`;

const PASSAGE_BODY_CLOCK = `For decades, the "body clock" was seen as a minor part of medical science, often dismissed as just the cause of jet lag. However, recent studies in chronobiology have <mark>revealed</mark> a more important reality: nearly every cell in our bodies follows a strict 24-hour cycle. This circadian system, managed by a "master clock" in the brain, not only regulates sleep; it also controls metabolism, hormone levels, and immune responses. In our modern world, this natural rhythm faces threats from artificial lighting and irregular lifestyle habits.
The consequences of circadian misalignment—the gap between our internal biological time and external social schedules—are serious. The chronic <mark>disruption</mark> of circadian cycles, common among shift workers and those using screens late at night, has been linked to a multitude of health issues, including Type 2 diabetes and obesity. <mark>Eating or exercising out of sync with metabolic peaks reduces nutrient efficiency.</mark> This shows that timing—not just diet—shapes long-term health.
Furthermore, there is a bidirectional relationship between circadian health and mental well-being. Disruptions in sleep cycles are often signs of coming depressive episodes, while stabilizing <mark>these rhythms</mark> can make psychiatric treatments more effective. Even the brain's cleaning system, which flushes out waste, works mainly during deep sleep to remove toxic proteins linked to brain diseases. Ignoring our internal timing not only causes fatigue but also gradually harms neurological health.
Solving this crisis requires a change in how we design our cities and daily lives. Experts suggest using "circadian-friendly" lighting in offices and schools to mimic natural sunlight, supporting alertness during the day while reducing sleep interference at night. Individually, learning how to align habits with biological peaks is becoming a vital life skill. A healthy society should learn to honor the ancient rhythms hardwired into our DNA.`;

const PASSAGE_BODY_CLOCK_TRANS = `ĐỒNG HỒ SINH HỌC
Trong nhiều thập kỷ, "đồng hồ sinh học" được coi là một phần nhỏ của khoa học y tế. Tuy nhiên, các nghiên cứu gần đây trong sinh học thời gian đã phát lộ một thực tế quan trọng hơn: gần như mọi tế bào trong cơ thể đều tuân theo một chu kỳ 24 giờ nghiêm ngặt. Hệ thống nhịp sinh học này kiểm soát trao đổi chất, mức hormone và phản ứng miễn dịch.

Hậu quả của lệch nhịp sinh học là rất nghiêm trọng. Sự gián đoạn mãn tính các chu kỳ nhịp sinh học đã được liên kết với nhiều vấn đề sức khỏe như tiểu đường tuýp 2 và béo phì. Ăn uống hoặc tập luyện không đồng bộ với các đỉnh trao đổi chất làm giảm hiệu quả dinh dưỡng.

Hơn nữa, có mối quan hệ hai chiều giữa sức khỏe nhịp sinh học và sức khỏe tâm thần. Việc ổn định những nhịp này có thể làm cho điều trị tâm thần hiệu quả hơn. Hệ thống làm sạch của não hoạt động chủ yếu trong giấc ngủ sâu để loại bỏ các protein độc.

Giải quyết khủng hoảng này đòi hỏi một sự thay đổi trong cách thiết kế đô thị và đời sống hàng ngày. Về phía cá nhân, học cách đồng bộ thói quen với các đỉnh sinh học đang trở thành một kỹ năng sống thiết yếu.`;

const PASSAGE_FUEL_PRICE = `From 3:00 p.m. on March 7, retail prices of petrol and oil products simultaneously increased sharply following a decision by the joint Ministry of Industry and Trade and the Ministry of Finance.
In this price adjustment period, amid global <mark>(35) ____________</mark>, the two ministries decided <mark>(36) ____________</mark> a price management plan to ensure that domestic fuel prices remain in line with international market developments with <mark>(37) ____________</mark> delay.
The authorities also continued to maintain a reasonable price gap between E5 RON92 biofuel and RON95 mineral petrol to <mark>(38) ____________</mark> the use of biofuels in line with the Government's policy, while ensuring balanced interests among market participants.
Since the beginning of this year, domestic fuel prices have undergone a <mark>(39) ____________</mark> of 11 adjustments. During this period, both RON95 and E5 RON92 experienced four decreases and seven increases, <mark>(40) ____________</mark> diesel oil recorded two falls and nine hikes.`;

const PASSAGE_FUEL_PRICE_TRANS = `ĐIỀU CHỈNH GIÁ XĂNG DẦU
Từ 15:00 ngày 7/3, giá bán lẻ các sản phẩm xăng và dầu đồng loạt tăng mạnh sau quyết định của liên bộ Công Thương và Tài chính.
Trong kỳ điều chỉnh giá này, trong bối cảnh biến động giá nhiên liệu toàn cầu, hai bộ đã quyết định về một kế hoạch quản lý giá để đảm bảo giá nhiên liệu trong nước bám sát diễn biến thị trường quốc tế với độ trễ rất ít.
Các cơ quan cũng tiếp tục duy trì khoảng cách giá hợp lý giữa xăng sinh học E5 RON92 và xăng khoáng RON95 nhằm khuyến khích việc sử dụng nhiên liệu sinh học theo chính sách của Chính phủ, đồng thời đảm bảo lợi ích cân bằng giữa các bên tham gia thị trường.
Kể từ đầu năm nay, giá nhiên liệu trong nước đã trải qua tổng cộng 11 lần điều chỉnh. Trong giai đoạn này, cả RON95 và E5 RON92 đều có 4 lần giảm và 7 lần tăng, trong khi đó dầu diesel ghi nhận 2 lần giảm và 9 lần tăng.`;

export const CUM_HAI_PHONG_2026_QUESTIONS: Question[] = [
  // SECTION 1: JAPAN MOBILITY SHOW (Q1 - Q6)
  {
    id: 'hp-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_JAPAN_MOBILITY,
    passageTranslation: PASSAGE_JAPAN_MOBILITY_TRANS,
    questionText: 'Question 1. Fill in blank (1):',
    options: [
      { id: 'A', text: 'when', translation: 'khi mà' },
      { id: 'B', text: 'that', translation: 'rằng / cái mà' },
      { id: 'C', text: 'what', translation: 'cái mà' },
      { id: 'D', text: 'which', translation: 'cái mà' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: "which" thay thế cho danh từ chỉ vật "The Japan Mobility Show 2025" đứng sau dấu phẩy trong mệnh đề quan hệ không xác định.',
    translation: 'Triển lãm Japan Mobility Show 2025, (1) ____________ được tổ chức bởi JAMA...',
    topicTag: 'Mệnh đề quan hệ không xác định (Which)'
  },
  {
    id: 'hp-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_JAPAN_MOBILITY,
    passageTranslation: PASSAGE_JAPAN_MOBILITY_TRANS,
    questionText: 'Question 2. Fill in blank (2):',
    options: [
      { id: 'A', text: 'participation', translation: 'sự tham gia' },
      { id: 'B', text: 'participants', translation: 'người / đơn vị tham gia' },
      { id: 'C', text: 'participates', translation: 'tham gia' },
      { id: 'D', text: 'participatory', translation: 'mang tính tham gia' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Sau con số "42 international...", ta cần danh từ số nhiều chỉ người/đơn vị tham gia (participants).',
    translation: 'Thu hút kỷ lục 517 công ty, bao gồm 42 đại diện (2) ____________ quốc tế.',
    topicTag: 'Từ loại (Word Formation)'
  },
  {
    id: 'hp-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_JAPAN_MOBILITY,
    passageTranslation: PASSAGE_JAPAN_MOBILITY_TRANS,
    questionText: 'Question 3. Fill in blank (3):',
    options: [
      { id: 'A', text: 'rejecting', translation: 'bác bỏ / từ chối' },
      { id: 'B', text: 'detecting', translation: 'phát hiện' },
      { id: 'C', text: 'reflecting', translation: 'phản ánh' },
      { id: 'D', text: 'dictating', translation: 'ra lệnh / bắt buộc' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: "reflecting the shift" nghĩa là phản ánh sự chuyển dịch trong ngành di chuyển.',
    translation: 'Nhiều đổi mới được giới thiệu, (3) ____________ sự chuyển dịch từ sản xuất ô tô sang giải pháp di chuyển.',
    topicTag: 'Từ vựng ngữ cảnh'
  },
  {
    id: 'hp-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_JAPAN_MOBILITY,
    passageTranslation: PASSAGE_JAPAN_MOBILITY_TRANS,
    questionText: 'Question 4. Fill in blank (4):',
    options: [
      { id: 'A', text: 'a system operating intelligent', translation: 'sai trật tự từ' },
      { id: 'B', text: 'an intelligent system operating', translation: 'một hệ thống thông minh vận hành' },
      { id: 'C', text: 'an operating system intelligent', translation: 'tính từ đứng sai vị trí' },
      { id: 'D', text: 'an intelligent operating system', translation: 'một hệ điều hành thông minh' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Trật tự tính từ và cụm danh từ chuẩn: [Tính từ] + [Danh từ ghép] -> "an intelligent operating system".',
    translation: 'Các xe được trang bị Asimo OS, (4) ____________ sử dụng học máy.',
    topicTag: 'Trật tự từ trong Cụm danh từ'
  },
  {
    id: 'hp-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_JAPAN_MOBILITY,
    passageTranslation: PASSAGE_JAPAN_MOBILITY_TRANS,
    questionText: 'Question 5. Fill in blank (5):',
    options: [
      { id: 'A', text: 'at', translation: 'tại' },
      { id: 'B', text: 'in', translation: 'trong' },
      { id: 'C', text: 'on', translation: 'trên / vào' },
      { id: 'D', text: 'to', translation: 'đến' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Động từ "depend" đi với giới từ "on" (depend on something: phụ thuộc vào cái gì).',
    translation: 'Việc mở rộng xe điện sẽ phụ thuộc (5) ____________ cơ sở hạ tầng sạc.',
    topicTag: 'Giới từ đi với Động từ (Depend on)'
  },
  {
    id: 'hp-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_JAPAN_MOBILITY,
    passageTranslation: PASSAGE_JAPAN_MOBILITY_TRANS,
    questionText: 'Question 6. Fill in blank (6):',
    options: [
      { id: 'A', text: 'developed', translation: 'được phát triển' },
      { id: 'B', text: 'develop', translation: 'phát triển' },
      { id: 'C', text: 'developing', translation: 'đang phát triển' },
      { id: 'D', text: 'to developed', translation: 'để phát triển' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc bị động "have + something + V3/ed" (có cái gì đó được thực hiện).',
    translation: 'Honda có kế hoạch để các công nghệ mới được (6) ____________ liên tục.',
    topicTag: 'Thể truyền khiến bị động (Have sth done)'
  },

  // SECTION 2: GIANT PANDA BASE (Q7 - Q12)
  {
    id: 'hp-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_PANDA_BASE,
    passageTranslation: PASSAGE_PANDA_BASE_TRANS,
    questionText: 'Question 7. Fill in blank (7):',
    options: [
      { id: 'A', text: 'involved', translation: 'liên quan' },
      { id: 'B', text: 'located', translation: 'nằm ở / vị trí' },
      { id: 'C', text: 'displaced', translation: 'bị di dời' },
      { id: 'D', text: 'resided', translation: 'cư trú' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "located in" chỉ vị trí địa lý của địa điểm (nằm ở tỉnh Tứ Xuyên).',
    translation: 'Trung tâm gấu trúc mới được thành lập tại Mianyang, (7) ____________ tỉnh Tứ Xuyên.',
    topicTag: 'Từ vựng chỉ vị trí địa lý'
  },
  {
    id: 'hp-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_PANDA_BASE,
    passageTranslation: PASSAGE_PANDA_BASE_TRANS,
    questionText: 'Question 8. Fill in blank (8):',
    options: [
      { id: 'A', text: 'owns', translation: 'sở hữu' },
      { id: 'B', text: 'possesses', translation: 'chiếm hữu' },
      { id: 'C', text: 'belongs to', translation: 'thuộc về' },
      { id: 'D', text: 'includes', translation: 'bao gồm' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cụm động từ "belong to something" nghĩa là trực thuộc/thuộc về tổ chức nào.',
    translation: 'Cơ sở này, cái mà (8) ____________ Trung tâm Bảo tồn Gấu trúc...',
    topicTag: 'Phrasal Verbs (Belong to)'
  },
  {
    id: 'hp-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_PANDA_BASE,
    passageTranslation: PASSAGE_PANDA_BASE_TRANS,
    questionText: 'Question 9. Fill in blank (9):',
    options: [
      { id: 'A', text: 'became', translation: 'đã trở thành' },
      { id: 'B', text: 'is becoming', translation: 'đang trở thành' },
      { id: 'C', text: 'becomes', translation: 'trở thành' },
      { id: 'D', text: 'has become', translation: 'đã trở thành' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Thì Hiện tại hoàn thành (has become) diễn tả sự việc đã diễn ra và kết quả còn duy trì ở hiện tại.',
    translation: 'Cơ sở này (9) ____________ địa điểm thứ 5 trong mạng lưới bảo tồn quốc gia.',
    topicTag: 'Thì Hiện tại hoàn thành'
  },
  {
    id: 'hp-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_PANDA_BASE,
    passageTranslation: PASSAGE_PANDA_BASE_TRANS,
    questionText: 'Question 10. Fill in blank (10):',
    options: [
      { id: 'A', text: 'Although', translation: 'Mặc dù' },
      { id: 'B', text: 'Because', translation: 'Bởi vì' },
      { id: 'C', text: 'Despite', translation: 'Mặc dù' },
      { id: 'D', text: 'Unless', translation: 'Trừ khi' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Although + S + V" chỉ sự đối lập (mặc dù gấu trúc hơi lo lắng nhưng chúng đang dần thích nghi).',
    translation: '(10) ____________ gấu trúc có vẻ hơi lo lắng, chúng đang dần thích nghi.',
    topicTag: 'Liên từ nhượng bộ (Although)'
  },
  {
    id: 'hp-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_PANDA_BASE,
    passageTranslation: PASSAGE_PANDA_BASE_TRANS,
    questionText: 'Question 11. Fill in blank (11):',
    options: [
      { id: 'A', text: 'take', translation: 'lấy' },
      { id: 'B', text: 'set', translation: 'đặt' },
      { id: 'C', text: 'do', translation: 'làm' },
      { id: 'D', text: 'made', translation: 'đạt được (make progress' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Collocation "make progress" ở dạng bị động "progress has been made" (tiến bộ đã đạt được).',
    translation: 'Kể từ những năm 1980, nhiều tiến bộ lớn đã (11) ____________.',
    topicTag: 'Collocation bị động (Make progress)'
  },
  {
    id: 'hp-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_PANDA_BASE,
    passageTranslation: PASSAGE_PANDA_BASE_TRANS,
    questionText: 'Question 12. Fill in blank (12):',
    options: [
      { id: 'A', text: 'gone off', translation: 'nổ / hỏng' },
      { id: 'B', text: 'paid off', translation: 'mang lại kết quả tốt / gặt hái thành công' },
      { id: 'C', text: 'taken off', translation: 'cất cánh / cởi ra' },
      { id: 'D', text: 'called off', translation: 'hủy bỏ' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Phrasal verb "pay off" nghĩa là gặt hái thành công / đền đáp xứng đáng sau nỗ lực.',
    translation: 'Cho thấy các nỗ lực bảo tồn dài hạn đã (12) ____________ và tiếp tục hỗ trợ loài này.',
    topicTag: 'Phrasal Verbs (Pay off)'
  },

  // SECTION 3: REORDERING (Q13 - Q16) - NO PASSAGE
  {
    id: 'hp-q13',
    type: 'reordering',
    questionText: 'Question 13. Choose the correct order of dialogue sentences:\na. Rachel: It’ll kick off at 7 PM at my place. Hope to see you there!\nb. Rachel: Hey Mark, I’m hosting a farewell party this Saturday, and I’d love for you to join!\nc. Mark: That sounds fun! What time does it start?',
    options: [
      { id: 'A', text: 'c - a - b', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'c - b - a', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'b - c - a', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'a - c - b', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG (b - c - a): Rachel mời tham gia tiệc chia tay (b) -> Mark tỏ ra hứng thú và hỏi giờ (c) -> Rachel thông báo 7h tối tại nhà (a).',
    translation: 'Sắp xếp đoạn hội thoại mời dự tiệc chia tay:\na. Rachel: Tiệc sẽ bắt đầu lúc 7 giờ tối tại nhà tớ. Hy vọng sẽ gặp cậu ở đó!\nb. Rachel: Này Mark, tớ đang tổ chức một buổi tiệc chia tay vào Thứ Bảy tuần này, và tớ rất mong cậu tham gia!\nc. Mark: Nghe vui đấy! Mấy giờ thì bắt đầu vậy?',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'hp-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the correct order of dialogue sentences:\na. Lan: OK, Mum. I\'ll be home before 10 p.m. then.\nb. Lan\'s mother: Certainly. Whose birthday is it?\nc. Lan: Mum, can I go to my friend\'s birthday party this Saturday evening?\nd. Lan\'s mother: Oh, I’m afraid not. You must come back home before 10 p.m. We\'re going to visit your grandparents early on Sunday morning.\ne. Lan: It\'s Mai\'s birthday, Mum. Is it OK if I stay the night at her house after the party?',
    options: [
      { id: 'A', text: 'c - b - e - d - a', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'c - e - a - d - b', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'c - b - a - e - d', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c - e - d - b - a', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (c - b - e - d - a): Lan xin phép đi dự sinh nhật (c) -> Mẹ hỏi sinh nhật ai (b) -> Lan trả lời và xin ngủ lại (e) -> Mẹ từ chối ngủ lại và yêu cầu về trước 10h (d) -> Lan vâng lời (a).',
    translation: 'Sắp xếp hội thoại xin phép mẹ đi dự tiệc sinh nhật.',
    topicTag: 'Sắp xếp hội thoại gia đình'
  },
  {
    id: 'hp-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the correct order of letter sentences:\na. It overheats when I play games and it keeps crashing when I do my homework. It also sometimes slows down when I watch movies.\nb. Finally, I spoke to your colleague, Andy. He said he would speak to his manager and call back in ten minutes. That was three hours ago.\nc. On Friday, November 27th, I bought a Link76 laptop from your website and it is not working. The laptop has two main problems.\nd. I called RocketTech\'s customer hotline and waited 30 minutes to speak to someone.\ne. I would like RocketTech to repair my laptop or provide a new one as soon as possible. I look forward to your reply.',
    options: [
      { id: 'A', text: 'c - a - d - b - e', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'c - d - b - a - e', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'c - d - a - e - b', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c - a - d - e - b', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (c - a - d - b - e): Mua laptop bị lỗi (c) -> Liệt kê 2 lỗi máy nóng và giật (a) -> Gọi tổng đài chờ 30p (d) -> Nói chuyện nhân viên Andy nhưng chờ 3h (b) -> Đưa ra yêu cầu sửa hoặc đổi máy (e).',
    translation: 'Sắp xếp các câu trong thư phàn nàn về sản phẩm laptop bị lỗi:\na. Nó bị quá nhiệt khi tôi chơi game và liên tục bị sập nguồn khi tôi làm bài tập. Đôi khi nó cũng chậm đi khi tôi xem phim.\nb. Cuối cùng, tôi đã nói chuyện với đồng nghiệp của ông là Andy. Anh ấy nói sẽ trao đổi với quản lý và gọi lại sau 10 phút. Đó đã là 3 tiếng trước rồi.\nc. Vào Thứ Sáu, ngày 27 tháng 11, tôi đã mua một chiếc laptop Link76 từ trang web của ông và nó không hoạt động. Chiếc laptop có hai lỗi chính.\nd. Tôi đã gọi tới đường dây nóng chăm sóc khách hàng của RocketTech và chờ 30 phút để nói chuyện với nhân viên.\ne. Tôi muốn RocketTech sửa chiếc laptop của tôi hoặc cung cấp một chiếc máy mới càng sớm càng tốt. Tôi rất mong nhận được phản hồi.',
    topicTag: 'Sắp xếp thư phàn nàn (Complaint Letter)'
  },
  {
    id: 'hp-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the correct order of sentences to make an essay paragraph:\na. Moreover, the physicality of the paper, the ink, and even the handwriting itself adds a personal touch that cannot be replicated electronically.\nb. Handwritten letters possess a timeless charm that digital messages often lack.\nc. Although modern technology offers unparalleled speed and convenience, many people still treasure the rare occasions when they receive a handwritten note.\nd. Unlike emails or texts, a carefully crafted letter conveys a deeper sense of thoughtfulness and sincerity.\ne. In an increasingly fast-paced world, such gestures serve as poignant reminders of the value of patience and human connection.',
    options: [
      { id: 'A', text: 'b - c - a - e - d', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'b - e - c - d - a', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'b - a - e - d - c', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'b - d - a - c - e', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG (b - d - a - c - e): Giới thiệu vẻ đẹp thư tay (b) -> So sánh sự chân thành với email (d) -> Bổ sung yếu tố giấy mực nét chữ (a) -> Đối chiếu tốc độ công nghệ (c) -> Kết luận ý nghĩa kết nối con người (e).',
    translation: 'Sắp xếp các câu thành đoạn văn về giá trị của thư viết tay:\na. Hơn nữa, tính hữu hình của giấy, mực và ngay cả nét chữ tự nó mang lại dấu ấn cá nhân không thể sao chép bằng điện tử.\nb. Những lá thư viết tay sở hữu một sức hút vượt thời gian mà các tin nhắn kỹ thuật số thường thiếu.\nc. Mặc dù công nghệ hiện đại mang lại tốc độ và sự tiện lợi chưa từng có, nhiều người vẫn trân trọng những dịp hiếm hoi khi họ nhận được một nốt nhạc viết tay.\nd. Không giống như email hay tin nhắn, một lá thư được chuẩn bị cẩn thận thể hiện sự chu đáo và chân thành sâu sắc hơn.\ne. Trong một thế giới ngày càng nhanh chóng, những cử chỉ như vậy đóng vai trò là những lời nhắc nhở xúc động về giá trị của sự kiên nhẫn và kết nối con người.',
    topicTag: 'Sắp xếp đoạn văn'
  },

  // SECTION 4: INTERNET SLANG (Q17 - Q26)
  {
    id: 'hp-q17',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 17. According to paragraph 1, what does the inclusion of internet slang in the Cambridge Dictionary prove?',
    options: [
      { id: 'A', text: 'It suggests that the TikTok generation does not care about language.', translation: 'Cho thấy thế hệ TikTok không quan tâm ngôn ngữ.' },
      { id: 'B', text: 'It shows how companies are forcing dictionaries to change their rules.', translation: 'Cho thấy các công ty ép từ điển...' },
      { id: 'C', text: 'It shows that these words will only be popular for a short time.', translation: 'Cho thấy các từ này chỉ phổ biến ngắn hạn.' },
      { id: 'D', text: 'It acts as a firm confirmation of the lasting impact of digital words.', translation: 'Đó là một sự xác nhận chắc chắn về tác động lâu dài của các từ kỹ thuật số.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Dẫn chứng đoạn 1: "confirms the lasting influence of the TikTok generation".',
    translation: 'Theo đoạn 1, việc đưa tiếng lóng Internet vào Từ điển Cambridge chứng minh điều gì?',
    topicTag: 'Đọc hiểu - Chi tiết trong bài'
  },
  {
    id: 'hp-q18',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 18. Which of the following is the best main idea for paragraph 1?',
    options: [
      { id: 'A', text: 'YouTube and TikTok are the only places where new English words are created.', translation: 'YouTube và TikTok là nơi duy nhất...' },
      { id: 'B', text: 'The way English grows is changing because of how young people talk online.', translation: 'Cách tiếng Anh phát triển đang thay đổi do cách giới trẻ trò chuyện trên mạng.' },
      { id: 'C', text: 'Internet humor is becoming too difficult for most people to understand.', translation: 'Hài hước Internet quá khó hiểu...' },
      { id: 'D', text: 'Dictionary editors are struggling to understand new internet trends.', translation: 'Các biên tập viên từ điển vật lộn...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Tóm tắt chính xác câu chủ đề đoạn 1 về sự thay đổi căn bản trong cách tiếng Anh phát triển.',
    translation: 'Ý chính tốt nhất cho đoạn 1 là gì?',
    topicTag: 'Đọc hiểu - Ý chính đoạn văn'
  },
  {
    id: 'hp-q19',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 19. Which of the following is NOT mentioned as an expression reflecting social or work changes?',
    options: [
      { id: 'A', text: 'delulu', translation: 'từ lóng delulu' },
      { id: 'B', text: 'soothing lullaby', translation: 'bài hát ru êm dịu' },
      { id: 'C', text: 'broligarchy', translation: 'thuật ngữ chỉ nhóm lãnh đạo công nghệ' },
      { id: 'D', text: 'mouse jiggler', translation: 'thiết bị giả vờ làm việc' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG (là cụm KHÔNG PHẢI thuật ngữ phản ánh thay đổi): "soothing lullaby" chỉ là hình ảnh ẩn dụ mô tả trạng thái truyền thống, không phải tiếng lóng phản ánh công việc hay xã hội.',
    translation: 'Từ / cụm từ nào dưới đây KHÔNG được nhắc đến như một cách diễn đạt phản ánh sự thay đổi công việc hoặc xã hội?',
    topicTag: 'Đọc hiểu - Chi tiết KHÔNG có'
  },
  {
    id: 'hp-q20',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 20. The word "their" in the first paragraph refers to:',
    options: [
      { id: 'A', text: 'the TikTok generation', translation: 'thế hệ TikTok' },
      { id: 'B', text: 'digital fad', translation: 'trào lưu kỹ thuật số' },
      { id: 'C', text: 'terms like "skibidi" or "delulu"', translation: 'những thuật ngữ như "skibidi" hay "delulu"' },
      { id: 'D', text: 'dictionary writers', translation: 'những người viết từ điển' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: "terms like skibidi, delulu... their recent inclusion in the Cambridge Dictionary".',
    translation: 'Từ "their" trong đoạn 1 quy chiếu đến từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'hp-q21',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 21. The word "glossy" in paragraph 2 is closest in meaning to:',
    options: [
      { id: 'A', text: 'very expensive and modern', translation: 'rất đắt và hiện đại' },
      { id: 'B', text: 'difficult to see or understand', translation: 'khó nhìn hoặc khó hiểu' },
      { id: 'C', text: 'shiny and high-quality', translation: 'bóng bẩy và chất lượng cao' },
      { id: 'D', text: 'attractive but not showing the whole truth', translation: 'hào nhoáng hấp dẫn nhưng không cho thấy toàn bộ sự thật' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Trong ngữ cảnh mạng xã hội tạo nên "perfect dream", "glossy" ám chỉ vẻ ngoài hào nhoáng che đậy thực tế.',
    translation: 'Từ "glossy" trong đoạn 2 có nghĩa gần nhất với câu nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ vựng ngữ cảnh'
  },
  {
    id: 'hp-q22',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 22. According to the passage, who controls the way new internet terms spread?',
    options: [
      { id: 'A', text: 'powerful tech leaders', translation: 'các lãnh đạo công nghệ quyền lực' },
      { id: 'B', text: 'language critics', translation: 'các nhà phê bình ngôn ngữ' },
      { id: 'C', text: 'the TikTok generation', translation: 'thế hệ TikTok' },
      { id: 'D', text: 'dictionary writers', translation: 'người viết từ điển' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Dẫn chứng đoạn 3: "broligarchy - a powerful group of tech leaders whose platforms control how these terms spread".',
    translation: 'Theo bài đọc, ai là người kiểm soát cách các thuật ngữ Internet mới lan truyền?',
    topicTag: 'Đọc hiểu - Chi tiết trong bài'
  },
  {
    id: 'hp-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 23. Which of the following best paraphrases the underlined sentence in the final paragraph ("If these simple phrases continue to replace serious thought, we might lose our ability to use language as a tool for clarity")?',
    options: [
      { id: 'A', text: 'Language is becoming a better tool for communication because these phrases help us think more seriously.', translation: 'Ngôn ngữ đang trở thành công cụ tốt hơn...' },
      { id: 'B', text: 'If we keep using simple slang instead of thinking deeply, we may no longer be able to communicate clearly.', translation: 'Nếu chúng ta tiếp tục dùng tiếng lóng đơn giản thay vì suy nghĩ sâu, chúng ta có thể không còn giao tiếp rõ ràng được nữa.' },
      { id: 'C', text: 'Clear speaking is the main reason these simple internet phrases are popular today.', translation: 'Nói rõ ràng là lý do chính...' },
      { id: 'D', text: 'We should use more simple phrases so that everyone can understand our serious thoughts more clearly.', translation: 'Chúng ta nên dùng nhiều cụm từ đơn giản hơn...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Paraphrase diễn đạt chính xác giả định và cảnh báo tiêu cực của câu gốc.',
    translation: 'Câu nào dưới đây diễn đạt lại tốt nhất câu được gạch chân trong đoạn cuối?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'hp-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 24. Where in the passage does the following sentence best fit: "This shift can be clearly seen in the way certain online terms have moved from casual jokes to markers of social attitudes."',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'C', text: '[IV]', translation: 'Vị trí [IV]' },
      { id: 'D', text: '[II]', translation: 'Vị trí [II]' }
    ],
    correctAnswer: 'D',
    explanation: '• D. [II] - ĐÚNG: Vị trí [II] làm cầu nối từ nhận định chung về thế giới "post-truth" sang ví dụ cụ thể về từ "delulu".',
    translation: 'Trong bài đọc, câu "This shift can be clearly seen in the way..." nằm ở vị trí nào là phù hợp nhất?',
    topicTag: 'Đọc hiểu - Chèn câu vào vị trí thích hợp'
  },
  {
    id: 'hp-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 25. What can be inferred from the passage?',
    options: [
      { id: 'A', text: 'The "tradwife" movement is the only reason people no longer believe in facts.', translation: 'Phong trào tradwife là lý do duy nhất...' },
      { id: 'B', text: 'Young people use "skibidi" to make sure older people cannot understand them.', translation: 'Người trẻ dùng skibidi để người lớn không hiểu...' },
      { id: 'C', text: 'Dictionaries only accept new words after they are used by famous leaders.', translation: 'Từ điển chỉ chấp nhận từ mới khi lãnh đạo dùng...' },
      { id: 'D', text: 'Constant exposure to chaotic media might make people less connected to reality.', translation: 'Việc tiếp xúc liên tục với truyền thông hỗn loạn có thể khiến người ta tách rời khỏi thực tế.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Suy luận trực tiếp từ ý "chaotic media makes the public feel comfortable but disconnected from real life".',
    translation: 'Điều nào dưới đây có thể được suy luận ra từ nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'hp-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTERNET_SLANG,
    passageTranslation: PASSAGE_INTERNET_SLANG_TRANS,
    questionText: 'Question 26. Which of the following is the best summary of the passage?',
    options: [
      { id: 'A', text: 'Internet slang is a great way to make communication clearer and deeper.', translation: 'Tiếng lóng Internet là cách tuyệt vời giao tiếp rõ ràng...' },
      { id: 'B', text: 'Tech leaders are using slang words to control how people vote in elections.', translation: 'Lãnh đạo công nghệ dùng tiếng lóng kiểm soát bầu cử...' },
      { id: 'C', text: 'While internet words are popular, they might hide a lack of real meaning and make us think less.', translation: 'Mặc dù từ ngữ Internet phổ biến, chúng có thể che giấu sự thiếu vắng ý nghĩa thực sự và khiến ta suy nghĩ ít hơn.' },
      { id: 'D', text: 'The Cambridge Dictionary proves that algorithms now control the entire English language.', translation: 'Từ điển Cambridge chứng minh thuật toán kiểm soát toàn bộ tiếng Anh...' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Tóm tắt bao quát cả hai mặt: sự phổ biến ở đoạn 1 và tính chất rỗng tuếch/giảm tư duy ở đoạn 4.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất toàn bộ bài đọc?',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài (Main Purpose)'
  },

  // SECTION 5: BODY CLOCK (Q27 - Q34)
  {
    id: 'hp-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK,
    passageTranslation: PASSAGE_BODY_CLOCK_TRANS,
    questionText: 'Question 27. The word "revealed" in paragraph 1 mostly means:',
    options: [
      { id: 'A', text: 'ignored', translation: 'phớt lờ' },
      { id: 'B', text: 'discovered', translation: 'phát hiện ra / bộc lộ' },
      { id: 'C', text: 'confirmed', translation: 'xác nhận' },
      { id: 'D', text: 'questioned', translation: 'đặt câu hỏi' }
    ],
    correctAnswer: 'B',
    explanation: '• B. discovered - ĐÚNG: "Revealed" (hé lộ/phát lộ) trong nghiên cứu khoa học đồng nghĩa với "discovered" (phát hiện ra).',
    translation: 'Từ "revealed" trong đoạn 1 có nghĩa gần nhất với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ vựng ngữ cảnh'
  },
  {
    id: 'hp-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK,
    passageTranslation: PASSAGE_BODY_CLOCK_TRANS,
    questionText: 'Question 28. The word "disruption" in paragraph 2 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'disorder', translation: 'sự rối loạn' },
      { id: 'B', text: 'interruption', translation: 'sự gián đoạn' },
      { id: 'C', text: 'continuity', translation: 'sự liên tục / không bị ngắt quãng' },
      { id: 'D', text: 'instability', translation: 'sự không ổn định' }
    ],
    correctAnswer: 'C',
    explanation: '• C. continuity - ĐÚNG: "Disruption" (sự gián đoạn/phá vỡ) TRÁI NGHĨA với "continuity" (sự liên tục).',
    translation: 'Từ "disruption" trong đoạn 2 TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'hp-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK,
    passageTranslation: PASSAGE_BODY_CLOCK_TRANS,
    questionText: 'Question 29. Which of the following best paraphrases the underlined sentence in paragraph 2 ("Eating or exercising out of sync with metabolic peaks reduces nutrient efficiency")?',
    options: [
      { id: 'A', text: 'Nutrient use is less efficient when meals or exercise reach metabolic peaks.', translation: 'Sử dụng dinh dưỡng kém hơn khi đạt đỉnh...' },
      { id: 'B', text: 'Low nutrient efficiency results from eating or exercising aligned with your natural clock.', translation: 'Hiệu quả dinh dưỡng thấp do ăn uống đồng bộ...' },
      { id: 'C', text: 'Eating or exercising at off-peak metabolic times promotes nutrient effectiveness.', translation: 'Ăn uống ngoài đỉnh thúc đẩy hiệu quả...' },
      { id: 'D', text: 'Eating or exercising at the wrong metabolic times lowers nutrient absorption.', translation: 'Việc ăn uống hoặc tập luyện vào thời điểm trao đổi chất sai lệch làm giảm hấp thụ dinh dưỡng.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Paraphrase chính xác: "out of sync" = "at the wrong metabolic times", "reduces nutrient efficiency" = "lowers nutrient absorption".',
    translation: 'Câu nào dưới đây diễn đạt lại tốt nhất câu được gạch chân trong đoạn 2?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'hp-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK,
    passageTranslation: PASSAGE_BODY_CLOCK_TRANS,
    questionText: 'Question 30. What does the phrase "these rhythms" in paragraph 3 refer to?',
    options: [
      { id: 'A', text: 'sleep cycles', translation: 'các chu kỳ giấc ngủ' },
      { id: 'B', text: 'depressive episodes', translation: 'các đợt trầm cảm' },
      { id: 'C', text: 'psychiatric treatments', translation: 'các đợt điều trị tâm thần' },
      { id: 'D', text: 'disruptions', translation: 'các sự gián đoạn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. sleep cycles - ĐÚNG: "Disruptions in sleep cycles... stabilizing these rhythms" -> "these rhythms" quy chiếu về "sleep cycles".',
    translation: 'Cụm từ "these rhythms" trong đoạn 3 quy chiếu đến khái niệm nào?',
    topicTag: 'Đọc hiểu - Quy chiếu từ'
  },
  {
    id: 'hp-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK,
    passageTranslation: PASSAGE_BODY_CLOCK_TRANS,
    questionText: 'Question 31. What can be inferred about the "brain\'s cleaning system" mentioned in paragraph 3?',
    options: [
      { id: 'A', text: 'It operates at maximum efficiency during periods of intense physical activity.', translation: 'Nó hoạt động hiệu quả tối đa khi vận động mạnh.' },
      { id: 'B', text: 'Its malfunction may contribute to the development of neurological disorders.', translation: 'Sự trục trặc của hệ thống này có thể góp phần gây ra các rối loạn thần kinh.' },
      { id: 'C', text: 'It is primarily responsible for triggering depressive episodes in shift workers.', translation: 'Nó chịu trách nhiệm gây trầm cảm ở người làm ca.' },
      { id: 'D', text: 'It requires a consistent social schedule to maintain long-term neurological health.', translation: 'Nó yêu cầu lịch trình xã hội nhất quán.' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Dẫn chứng đoạn 3: "works mainly during deep sleep to remove toxic proteins linked to brain diseases" -> nếu trục trặc sẽ dẫn đến các bệnh về não.',
    translation: 'Điều nào có thể được suy luận về "hệ thống làm sạch của não" ở đoạn 3?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'hp-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK,
    passageTranslation: PASSAGE_BODY_CLOCK_TRANS,
    questionText: 'Question 32. Which of the following is NOT mentioned in paragraph 4 as a solution to the circadian crisis?',
    options: [
      { id: 'A', text: 'Solar-simulating lighting systems.', translation: 'Hệ thống ánh sáng mô phỏng mặt trời.' },
      { id: 'B', text: 'Individual biological alignment.', translation: 'Đồng bộ thói quen sinh học cá nhân.' },
      { id: 'C', text: 'Genetic modification of DNA rhythms.', translation: 'Chỉnh sửa gen của các nhịp DNA.' },
      { id: 'D', text: 'Urban and architectural redesign.', translation: 'Thiết kế lại đô thị và kiến trúc.' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG (là giải pháp KHÔNG được đề cập): Bài đọc chỉ nói về việc "tôn trọng" (honor) nhịp DNA, không nói đến chỉnh sửa gen (genetic modification).',
    translation: 'Yếu tố nào dưới đây KHÔNG được nhắc đến ở đoạn 4 như một giải pháp cho cuộc khủng hoảng nhịp sinh học?',
    topicTag: 'Đọc hiểu - Thông tin KHÔNG có'
  },
  {
    id: 'hp-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK,
    passageTranslation: PASSAGE_BODY_CLOCK_TRANS,
    questionText: 'Question 33. Which paragraph highlights the need for biological awareness in public and personal spheres?',
    options: [
      { id: 'A', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 1', translation: 'Đoạn 1' }
    ],
    correctAnswer: 'A',
    explanation: '• A. Paragraph 4 - ĐÚNG: Đoạn 4 nêu rõ cả giải pháp công cộng ("design our cities, offices and schools") lẫn cá nhân ("aligning habits").',
    translation: 'Đoạn nào nhấn mạnh nhu cầu nhận thức sinh học ở cả lĩnh vực công cộng lẫn cá nhân?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },
  {
    id: 'hp-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BODY_CLOCK,
    passageTranslation: PASSAGE_BODY_CLOCK_TRANS,
    questionText: 'Question 34. Which of the following is NOT supported by the passage?',
    options: [
      { id: 'A', text: 'Artificial lighting outweighs other factors in causing circadian misalignment.', translation: 'Ánh sáng nhân tạo lấn át các yếu tố khác trong việc gây lệch nhịp sinh học.' },
      { id: 'B', text: 'Aligning daily habits with biological timing can contribute to improved long-term health.', translation: 'Đồng bộ thói quen giúp cải thiện sức khỏe dài hạn.' },
      { id: 'C', text: 'Disruptions in circadian rhythms may reduce the effectiveness of mental health treatments.', translation: 'Gián đoạn nhịp sinh học làm giảm hiệu quả điều trị tâm thần.' },
      { id: 'D', text: 'Deep sleep plays a role in eliminating substances associated with neurological disorders.', translation: 'Giấc ngủ sâu giúp loại bỏ các chất liên quan rối loạn thần kinh.' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (là ý KHÔNG ĐƯỢC HỖ TRỢ): Bài đọc chỉ nêu ánh sáng nhân tạo là một trong các đe dọa, không hề khẳng định nó "lấn át" (outweighs) các yếu tố khác.',
    translation: 'Phát biểu nào dưới đây KHÔNG được hỗ trợ bởi bài đọc?',
    topicTag: 'Đọc hiểu - Khẳng định Không Đúng'
  },

  // SECTION 6: CLOZE NEWS - FUEL PRICES (Q35 - Q40)
  {
    id: 'hp-q35',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE,
    passageTranslation: PASSAGE_FUEL_PRICE_TRANS,
    questionText: 'Question 35. Fill in blank (35):',
    options: [
      { id: 'A', text: 'price fuel fluctuations', translation: 'sai trật tự danh từ' },
      { id: 'B', text: 'fluctuations fuel price', translation: 'sai trật tự danh từ' },
      { id: 'C', text: 'fuel price fluctuations', translation: 'biến động giá nhiên liệu' },
      { id: 'D', text: 'price fluctuations fuel', translation: 'sai trật tự danh từ' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Trật tự danh từ ghép chuẩn: loại nhiên liệu (fuel) + đối tượng giá (price) + hiện tượng (fluctuations).',
    translation: 'Trong kỳ điều chỉnh này, giữa những biến động (35) ____________ toàn cầu...',
    topicTag: 'Trật tự danh từ ghép'
  },
  {
    id: 'hp-q36',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE,
    passageTranslation: PASSAGE_FUEL_PRICE_TRANS,
    questionText: 'Question 36. Fill in blank (36):',
    options: [
      { id: 'A', text: 'at', translation: 'tại' },
      { id: 'B', text: 'to', translation: 'đến' },
      { id: 'C', text: 'on', translation: 'trên / về' },
      { id: 'D', text: 'in', translation: 'trong' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cấu trúc "decide on something" (quyết định lựa chọn một kế hoạch).',
    translation: 'Hai bộ quyết định (36) ____________ một kế hoạch quản lý giá.',
    topicTag: 'Giới từ (Decide on)'
  },
  {
    id: 'hp-q37',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE,
    passageTranslation: PASSAGE_FUEL_PRICE_TRANS,
    questionText: 'Question 37. Fill in blank (37):',
    options: [
      { id: 'A', text: 'little', translation: 'rất ít' },
      { id: 'B', text: 'few', translation: 'ít' },
      { id: 'C', text: 'a little', translation: 'một chút' },
      { id: 'D', text: 'a few', translation: 'một vài' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "little + N không đếm được" (delay) mang nghĩa hầu như không chậm trễ.',
    translation: 'Đảm bảo giá trong nước bám sát giá thế giới với (37) ____________ độ trễ.',
    topicTag: 'Lượng từ (Little + N)'
  },
  {
    id: 'hp-q38',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE,
    passageTranslation: PASSAGE_FUEL_PRICE_TRANS,
    questionText: 'Question 38. Fill in blank (38):',
    options: [
      { id: 'A', text: 'regulate', translation: 'điều tiết / hạn chế' },
      { id: 'B', text: 'encourage', translation: 'khuyến khích' },
      { id: 'C', text: 'manage', translation: 'quản lý' },
      { id: 'D', text: 'produce', translation: 'sản xuất' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Phù hợp chính sách nhằm "khuyến khích" sử dụng nhiên liệu sinh học.',
    translation: 'Duy trì khoảng cách giá nhằm (38) ____________ việc sử dụng nhiên liệu sinh học.',
    topicTag: 'Từ vựng ngữ cảnh'
  },
  {
    id: 'hp-q39',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE,
    passageTranslation: PASSAGE_FUEL_PRICE_TRANS,
    questionText: 'Question 39. Fill in blank (39):',
    options: [
      { id: 'A', text: 'complete', translation: 'hoàn chỉnh' },
      { id: 'B', text: 'total', translation: 'tổng cộng' },
      { id: 'C', text: 'full', translation: 'đầy đủ' },
      { id: 'D', text: 'whole', translation: 'toàn bộ' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cụm từ cố định "a total of + number" (tổng cộng 11 lần).',
    translation: 'Giá xăng trong nước đã trải qua (39) ____________ 11 lần điều chỉnh.',
    topicTag: 'Collocation (A total of)'
  },
  {
    id: 'hp-q40',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUEL_PRICE,
    passageTranslation: PASSAGE_FUEL_PRICE_TRANS,
    questionText: 'Question 40. Fill in blank (40):',
    options: [
      { id: 'A', text: 'however', translation: 'tuy nhiên' },
      { id: 'B', text: 'although', translation: 'mặc dù' },
      { id: 'C', text: 'so', translation: 'vì vậy' },
      { id: 'D', text: 'while', translation: 'trong khi' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Liên từ dùng để đối chiếu hai sự việc diễn ra song song.',
    translation: 'Xăng giảm 4 tăng 7, (40) ____________ dầu diesel giảm 2 tăng 9.',
    topicTag: 'Liên từ đối chiếu (While)'
  }
];

export const CUM_HAI_PHONG_2026_EXAM: ExamSet = {
  id: 'exam-cum-hai-phong-2026',
  title: 'Đề Thi Thử THPT 2026 - Cụm Trường THPT TP. Hải Phòng',
  description: 'Đề thi khảo sát chất lượng TN THPT 2026 Cụm THPT TP. Hải Phòng gồm trọn bộ 40 câu trắc nghiệm chuẩn cấu trúc mới 2026 kèm lời giải chi tiết & bản dịch.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'CỤM HẢI PHÒNG 2026',
  iconName: 'Sparkles',
  questions: CUM_HAI_PHONG_2026_QUESTIONS
};
