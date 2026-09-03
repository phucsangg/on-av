import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_BRITISH_COUNCIL = `Thinking about studying abroad? Start your journey with the British Council
Studying abroad can be a very <mark>(1) ____________</mark> experience, offering new academic opportunities and personal growth. It can also be challenging at first, especially when adapting to a new environment.
Living in another country <mark>(2) ____________</mark> you improve your language skills and understand different ways of life. You will gain international experience and develop skills that are valuable for your future career.
Based <mark>(3) ____________</mark> our experience working with international students, it is important to prepare carefully. Before you leave, learn about the culture and social <mark>(4) ____________</mark> of your host country. This will help you feel more confident and comfortable when you arrive.
While studying overseas, you may feel homesick at times. Try <mark>(5) ____________</mark> in touch with family and friends and talk to others about how you feel.
Let the British Council be your <mark>(6) ____________</mark> in helping you make the most of your study-abroad experience.`;

const PASSAGE_BRITISH_COUNCIL_TRANS = `[ĐOẠN 1] Bạn đang nghĩ đến việc du học? Hãy bắt đầu hành trình của bạn cùng Hội đồng Anh (British Council)!

Du học có thể là một trải nghiệm rất bổ ích, mang lại những cơ hội học thuật mới và sự phát triển cá nhân. Nó cũng có thể đầy thách thức lúc ban đầu, đặc biệt là khi thích nghi với môi trường mới.

Sống ở một quốc gia khác giúp bạn cải thiện kỹ năng ngôn ngữ và hiểu được các lối sống khác nhau. Bạn sẽ tích lũy được kinh nghiệm quốc tế và phát triển các kỹ năng có giá trị cho sự nghiệp tương lai của mình.

Dựa trên kinh nghiệm làm việc của chúng tôi với các sinh viên quốc tế, việc chuẩn bị cẩn thận là rất quan trọng. Trước khi lên đường, hãy tìm hiểu về văn hóa và các quy chuẩn xã hội của quốc gia sở tại. Điều này sẽ giúp bạn cảm thấy tự tin và thoải mái hơn khi đặt chân đến.

Trong khi du học, đôi khi bạn có thể cảm thấy nhớ nhà. Hãy cố gắng giữ liên lạc với gia đình, bạn bè và chia sẻ với người khác về cảm xúc của bạn.

Hãy để Hội đồng Anh trở thành người đồng hành giúp bạn tận dụng tối đa trải nghiệm du học của mình.`;

const PASSAGE_ELITE_ARCH = `ELITE ARCHITECTURAL SOLUTIONS
Are you a creative professional who aims to reshape the modern skyline? Elite Architectural Solutions is <mark>(7) ____________</mark> prestigious studio for designers <mark>(8) ____________</mark> are dedicated to blending aesthetic beauty with functional sustainability. We provide an inspiring workspace where unconventional ideas are turned into reality.
We encourage our associates to <mark>(9) ____________</mark> more complex design challenges to broaden their technical expertise. Our firm places a high value on professional <mark>(10) ____________</mark>, as the ability to recover from design setbacks is crucial in this fast-paced industry.
However, the creative process is often demanding. An innovative architect must be able to work under tight deadlines without compromising quality. <mark>(11) ____________</mark>, those who demonstrate exceptional attention to detail will be considered for senior partnership. We seek individuals with the artistic <mark>(12) ____________</mark> to transform urban landscapes.`;

const PASSAGE_ELITE_ARCH_TRANS = `[ĐOẠN 1] GIẢI PHÁP KIẾN TRÚC TINH HOA (ELITE ARCHITECTURAL SOLUTIONS)

Bạn có phải là một chuyên gia sáng tạo với khát vọng tái định hình đường chân trời đô thị hiện đại không? Elite Architectural Solutions là một studio uy tín dành cho các nhà thiết kế tận tâm kết hợp vẻ đẹp thẩm mỹ với sự phát triển bền vững mang tính chức năng. Chúng tôi cung cấp một không gian làm việc truyền cảm hứng, nơi những ý tưởng độc đáo được biến thành hiện thực.

Chúng tôi khuyến khích các cộng sự đảm nhận những thách thức thiết kế phức tạp hơn để mở rộng chuyên môn kỹ thuật của họ. Công ty chúng tôi đánh giá cao sự kiên cường trong nghề nghiệp, vì khả năng đứng dậy từ những thất bại thiết kế là điều cốt yếu trong ngành công nghiệp tốc độ nhanh này.

Tuy nhiên, quá trình sáng tạo thường rất đòi hỏi khắt khe. Một kiến trúc sư đổi mới phải có khả năng làm việc dưới áp lực thời gian nghiêm ngặt mà không làm giảm chất lượng. Do đó, những ai thể hiện sự chú ý đặc biệt đến chi tiết sẽ được cân nhắc cho vị trí đối tác cấp cao. Chúng tôi tìm kiếm những cá nhân có tầm nhìn nghệ thuật để thay đổi cảnh quan đô thị.`;

const PASSAGE_HORROR_FILMS = `Since almost the beginning of cinema, we have had scary films. Of all the genres that exist, horror is perhaps one of the most conventional. Many horror films rely on specific plot devices, also called tropes, to make their audience frightened. When a trope is used too much, it can become a cliché. But when used well, it can really make us <mark>jump out of our skin</mark>. Here are some of the most used, and perhaps abused, clichés in horror films.

No matter what kind of house it is, the basement is a scary place in horror films. That's usually where something is hiding or where the evil psychopath has hidden their tools. Basements are always dark and often damp. You can only reach <mark>them</mark> by a narrow staircase. And basements are always creepy, even when there isn't anything down there.

In older horror films, when protagonists were in desperation, it was difficult or impossible for them to call for help or call the police. [I] Mobile phones have made that situation a bit less believable now. [II] What's the solution to maintain suspense? [III] No phone coverage! [IV] If you're a hero in a horror film, it's almost certain that at a key moment, just when you absolutely need to call for help, you will not have any coverage at all. Or your phone battery will die just as you are making the call. Or both.

Horror films love uninhabited places. This could be an abandoned hospital, a scary empty house or a ghost town. There's something about lonely, empty places. What was it like when people lived there? Why did they leave? Maybe it's also that they are so quiet, which can be very scary too. Of course, abandoned places are also handy for horror film directors in that it's more believable that you will have no phone coverage there either.

The hero has been driving for hours. It's night-time and it's beginning to rain. Suddenly he sees a person on the side of the road. Maybe the company will keep him awake? <mark>In horror films, giving anybody a ride is asking for trouble.</mark> The hero always does it, and it always ends badly.

This horror film cliché was especially popular with horror films of the late 20th century. It starts with a group of teenagers all enjoying themselves, and it ends with everyone dead except one girl. At the beginning the girl is usually innocent, shy and not particularly strong. By the end, she has become the toughest and most resourceful person in the world. The last girl almost always wins in the end.`;

const PASSAGE_HORROR_FILMS_TRANS = `[ĐOẠN 1] Ngay từ những ngày đầu của điện ảnh, phim kinh dị đã xuất hiện. Trong số tất cả các thể loại hiện có, kinh dị có lẽ là một trong những thể loại mang tính khuôn mẫu rõ rệt nhất. Nhiều bộ phim kinh dị dựa vào các thủ pháp cốt truyện cụ thể, còn gọi là các mô-típ (tropes), để làm khán giả hoảng sợ. Khi một mô-típ bị sử dụng quá nhiều, nó có thể trở thành một sự sáo rỗng. Nhưng khi được sử dụng hiệu quả, nó thực sự có thể khiến chúng ta "giật nẩy mình" (jump out of our skin). Dưới đây là một số khuôn mẫu được sử dụng phổ biến nhất, và có lẽ cũng bị lạm dụng nhất, trong phim kinh dị.

[ĐOẠN 2] Dù đó là loại nhà nào, tầng hầm luôn là một nơi đáng sợ trong phim kinh dị. Đó thường là nơi có thứ gì đó đang ẩn nấp hoặc nơi kẻ tâm thần tàn ác đã cất giấu các công cụ của hắn. Tầng hầm luôn tối tăm và thường ẩm thấp. Bạn chỉ có thể tiếp cận chúng qua một cầu thang hẹp. Và tầng hầm luôn rùng rợn, ngay cả khi không có gì ở dưới đó.

[ĐOẠN 3] Trong các bộ phim kinh dị cũ, khi các nhân vật chính rơi vào tình thế tuyệt vọng, họ rất khó hoặc không thể gọi trợ giúp hay gọi cảnh sát. Điện thoại di động đã khiến tình huống đó có phần bớt hợp lý hơn hiện nay. Vậy giải pháp để duy trì sự kịch tính là gì? Không có sóng điện thoại! Nếu bạn là nhân vật chính trong một bộ phim kinh dị, gần như chắc chắn rằng vào một thời điểm mấu chốt, ngay khi bạn tuyệt đối cần gọi trợ giúp, bạn sẽ không có chút sóng nào. Hoặc pin điện thoại của bạn sẽ sập nguồn ngay khi bạn thực hiện cuộc gọi. Hoặc cả hai.

[ĐOẠN 4] Phim kinh dị rất thích những nơi không có người ở. Đó có thể là một bệnh viện bỏ hoang, một ngôi nhà trống rùng rợn hoặc một thị trấn ma. Có một điều gì đó về những nơi cô độc, vắng vẻ. Nơi đó như thế nào khi con người còn sinh sống? Tại sao họ lại rời đi? Có lẽ cũng vì chúng quá yên tĩnh, điều này cũng có thể rất đáng sợ. Tất nhiên, những nơi bỏ hoang cũng rất tiện lợi cho các đạo diễn phim kinh dị ở chỗ nó khiến việc bạn không có sóng điện thoại ở đó trở nên hợp lý hơn.

[ĐOẠN 5] Nhân vật chính đã lái xe hàng giờ liền. Lúc đó là ban đêm và trời bắt đầu mưa. Đột nhiên anh ta nhìn thấy một người ở bên đường. Có lẽ có người đi cùng sẽ giúp anh ta tỉnh táo? Trong phim kinh dị, cho ai đó đi nhờ xe là tự rước lấy rắc rối. Nhân vật chính luôn làm vậy, và mọi chuyện luôn kết thúc tồi tệ.

[ĐOẠN 6] Khuôn mẫu phim kinh dị này đặc biệt phổ biến với các bộ phim kinh dị cuối thế kỷ 20. Nó bắt đầu với một nhóm thanh thiếu niên cùng nhau vui vẻ, và kết thúc với việc mọi người đều chết ngoại trừ một cô gái. Ban đầu cô gái thường ngây thơ, nhút nhát và không đặc biệt mạnh mẽ. Đến cuối cùng, cô đã trở thành người kiên cường và tháo vát nhất thế giới. Cô gái cuối cùng (the final girl) hầu như luôn chiến thắng ở phút cuối.`;

export const HA_TINH_2026_L1_QUESTIONS: Question[] = [
  {
    id: 'htl1-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_BRITISH_COUNCIL,
    passageTranslation: PASSAGE_BRITISH_COUNCIL_TRANS,
    questionText: 'Question 1. Studying abroad can be a very (1) ... experience',
    options: [
      { id: 'A', text: 'reward', translation: 'danh từ / động từ' },
      { id: 'B', text: 'rewarded', translation: 'tính từ bị động' },
      { id: 'C', text: 'rewarding', translation: 'bổ ích / đáng làm' },
      { id: 'D', text: 'rewarder', translation: 'người thưởng' }
    ],
    correctAnswer: 'C',
    explanation: '• Tính từ chỉ bản chất của trải nghiệm: "a very rewarding experience" (một trải nghiệm bổ ích, đáng làm). Chọn C. rewarding.',
    translation: 'Du học có thể là một trải nghiệm rất bổ ích.',
    topicTag: 'Từ loại (Word Form)'
  },
  {
    id: 'htl1-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_BRITISH_COUNCIL,
    passageTranslation: PASSAGE_BRITISH_COUNCIL_TRANS,
    questionText: 'Question 2. Living in another country (2) ... you improve your language skills',
    options: [
      { id: 'A', text: 'has helped', translation: 'hiện tại hoàn thành' },
      { id: 'B', text: 'helps', translation: 'giúp đỡ' },
      { id: 'C', text: 'is helping', translation: 'hiện tại tiếp diễn' },
      { id: 'D', text: 'is helped', translation: 'bị động' }
    ],
    correctAnswer: 'B',
    explanation: '• Chủ ngữ là danh động từ "Living in another country" mang ý nghĩa sự thật khách quan -> chia thì hiện tại đơn số ít "helps". Chọn B.',
    translation: 'Sống ở một quốc gia khác giúp bạn cải thiện kỹ năng ngôn ngữ.',
    topicTag: 'Thì & Sự hòa hợp chủ vị'
  },
  {
    id: 'htl1-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_BRITISH_COUNCIL,
    passageTranslation: PASSAGE_BRITISH_COUNCIL_TRANS,
    questionText: 'Question 3. Based (3) ... our experience working with international students',
    options: [
      { id: 'A', text: 'for', translation: 'cho' },
      { id: 'B', text: 'of', translation: 'của' },
      { id: 'C', text: 'on', translation: 'trên' },
      { id: 'D', text: 'to', translation: 'đến' }
    ],
    correctAnswer: 'C',
    explanation: '• Cụm cố định: "based on" = dựa trên. Chọn C. on.',
    translation: 'Dựa trên kinh nghiệm của chúng tôi...',
    topicTag: 'Giới từ'
  },
  {
    id: 'htl1-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_BRITISH_COUNCIL,
    passageTranslation: PASSAGE_BRITISH_COUNCIL_TRANS,
    questionText: 'Question 4. learn about the culture and social (4) ... of your host country',
    options: [
      { id: 'A', text: 'habits', translation: 'thói quen cá nhân' },
      { id: 'B', text: 'values', translation: 'giá trị' },
      { id: 'C', text: 'routines', translation: 'lịch trình sinh hoạt' },
      { id: 'D', text: 'customs', translation: 'phong tục tập quán' }
    ],
    correctAnswer: 'D',
    explanation: '• Cụm từ cố định: "social customs" (phong tục tập quán xã hội) phù hợp nhất với việc tìm hiểu văn hóa quốc gia. Chọn D. customs.',
    translation: 'Tìm hiểu về văn hóa và các phong tục xã hội của nước sở tại.',
    topicTag: 'Từ vựng & Collocation'
  },
  {
    id: 'htl1-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_BRITISH_COUNCIL,
    passageTranslation: PASSAGE_BRITISH_COUNCIL_TRANS,
    questionText: 'Question 5. Try (5) ... in touch with family and friends',
    options: [
      { id: 'A', text: 'to keep', translation: 'cố gắng giữ' },
      { id: 'B', text: 'keeping', translation: 'thử giữ' },
      { id: 'C', text: 'keep', translation: 'nguyên mẫu' },
      { id: 'D', text: 'kept', translation: 'quá quá' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc lời khuyên: "try to do something" (hãy cố gắng làm gì đó). Chọn A. to keep.',
    translation: 'Hãy cố gắng giữ liên lạc với gia đình và bạn bè.',
    topicTag: 'Danh động từ & Động từ nguyên mẫu'
  },
  {
    id: 'htl1-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_BRITISH_COUNCIL,
    passageTranslation: PASSAGE_BRITISH_COUNCIL_TRANS,
    questionText: 'Question 6. Let the British Council be your (6) ... in helping you make the most of your study-abroad experience.',
    options: [
      { id: 'A', text: 'travel reliable partner', translation: 'sai trật tự' },
      { id: 'B', text: 'reliable partner travel', translation: 'sai trật tự' },
      { id: 'C', text: 'partner reliable travel', translation: 'sai trật tự' },
      { id: 'D', text: 'reliable travel partner', translation: 'người bạn đồng hành du học đáng tin cậy' }
    ],
    correctAnswer: 'D',
    explanation: '• Quy tắc trật tự tính từ/danh từ: Opinion (reliable) + Purpose (travel) + Noun (partner) -> reliable travel partner. Chọn D.',
    translation: 'Hãy để Hội đồng Anh trở thành người bạn đồng hành du học đáng tin cậy của bạn.',
    topicTag: 'Trật tự cụm danh từ'
  },
  {
    id: 'htl1-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELITE_ARCH,
    passageTranslation: PASSAGE_ELITE_ARCH_TRANS,
    questionText: 'Question 7. Elite Architectural Solutions is (7) ... prestigious studio',
    options: [
      { id: 'A', text: 'an', translation: 'mạo từ an' },
      { id: 'B', text: 'a', translation: 'mạo từ a' },
      { id: 'C', text: 'the', translation: 'mạo từ the' },
      { id: 'D', text: 'Ø', translation: 'không mạo từ' }
    ],
    correctAnswer: 'B',
    explanation: '• "prestigious" bắt đầu bằng phụ âm /p/. Giới thiệu lần đầu một danh từ đếm được số ít dùng mạo từ "a". Chọn B. a.',
    translation: 'Elite Architectural Solutions là một studio danh giá.',
    topicTag: 'Mạo từ (Articles)'
  },
  {
    id: 'htl1-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELITE_ARCH,
    passageTranslation: PASSAGE_ELITE_ARCH_TRANS,
    questionText: 'Question 8. studio for designers (8) ... are dedicated to blending aesthetic beauty',
    options: [
      { id: 'A', text: 'whose', translation: 'của ai' },
      { id: 'B', text: 'which', translation: 'cái mà' },
      { id: 'C', text: 'whom', translation: 'người mà' },
      { id: 'D', text: 'who', translation: 'người mà' }
    ],
    correctAnswer: 'D',
    explanation: '• Thay thế cho danh từ chỉ người số nhiều "designers" làm chủ ngữ cho động từ "are dedicated", ta dùng đại từ quan hệ "who". Chọn D.',
    translation: 'Studio dành cho các nhà thiết kế những người tận tâm...',
    topicTag: 'Mệnh đề quan hệ'
  },
  {
    id: 'htl1-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELITE_ARCH,
    passageTranslation: PASSAGE_ELITE_ARCH_TRANS,
    questionText: 'Question 9. We encourage our associates to (9) ... more complex design challenges',
    options: [
      { id: 'A', text: 'take on', translation: 'đảm nhận / đương đầu' },
      { id: 'B', text: 'look after', translation: 'chăm sóc' },
      { id: 'C', text: 'give up', translation: 'từ bỏ' },
      { id: 'D', text: 'put off', translation: 'trì hoãn' }
    ],
    correctAnswer: 'A',
    explanation: '• Phrasal verb: "take on challenges" = đảm nhận / đương đầu với các thử thách. Chọn A. take on.',
    translation: 'Khuyến khích các cộng sự đảm nhận những thử thách thiết kế phức tạp hơn.',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'htl1-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELITE_ARCH,
    passageTranslation: PASSAGE_ELITE_ARCH_TRANS,
    questionText: 'Question 10. Our firm places a high value on professional (10) ...',
    options: [
      { id: 'A', text: 'routine', translation: 'thói quen' },
      { id: 'B', text: 'leisure', translation: 'thời gian rảnh' },
      { id: 'C', text: 'resilience', translation: 'khả năng phục hồi / kiên cường' },
      { id: 'D', text: 'comfort', translation: 'sự thoải mái' }
    ],
    correctAnswer: 'C',
    explanation: '• Danh từ "resilience" (khả năng kiên cường / vượt qua thất bại) khớp với vế sau "ability to recover from design setbacks". Chọn C. resilience.',
    translation: 'Coi trọng khả năng kiên cường phục hồi trong nghề nghiệp.',
    topicTag: 'Từ vựng chuyên ngành'
  },
  {
    id: 'htl1-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELITE_ARCH,
    passageTranslation: PASSAGE_ELITE_ARCH_TRANS,
    questionText: 'Question 11. An innovative architect must work under tight deadlines. (11) ..., those who demonstrate exceptional attention to detail will be considered...',
    options: [
      { id: 'A', text: 'Consequently', translation: 'Vì vậy / Do đó' },
      { id: 'B', text: 'Otherwise', translation: 'nếu không thì' },
      { id: 'C', text: 'Nevertheless', translation: 'tuy nhiên' },
      { id: 'D', text: 'Whereas', translation: 'trong khi' }
    ],
    correctAnswer: 'A',
    explanation: '• Trạng từ liên kết chỉ kết quả logic: Làm việc tốt dưới áp lực hạn chót -> Do đó (Consequently) những người tỉ mỉ sẽ được cất nhắc làm đối tác. Chọn A.',
    translation: 'Vì vậy, những cá nhân thể hiện sự chú ý đến từng chi tiết sẽ được xem xét.',
    topicTag: 'Từ nối (Conjunctions)'
  },
  {
    id: 'htl1-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_ELITE_ARCH,
    passageTranslation: PASSAGE_ELITE_ARCH_TRANS,
    questionText: 'Question 12. We seek individuals with the artistic (12) ... to transform urban landscapes.',
    options: [
      { id: 'A', text: 'attitude', translation: 'thái độ' },
      { id: 'B', text: 'intuition', translation: 'trực giác' },
      { id: 'C', text: 'aptitude', translation: 'năng khiếu / khả năng bẩm sinh' },
      { id: 'D', text: 'compromise', translation: 'sự thỏa hiệp' }
    ],
    correctAnswer: 'C',
    explanation: '• Cụm từ: "artistic aptitude" (năng khiếu nghệ thuật bẩm sinh). Chọn C. aptitude.',
    translation: 'Chúng tôi tìm kiếm những con người có năng khiếu nghệ thuật.',
    topicTag: 'Từ vựng nâng cao'
  },
  {
    id: 'htl1-q13',
    type: 'reordering',
    questionText: 'Question 13. Choose the best arrangement of the sentences:\nc. Won-gyu: Hi Kelly. How’s your French class going?\na. Kelly: Hi Won-gyu. Not bad, but I’m finding the pronunciation difficult.\nb. Won-gyu: I imagine it takes a while to get it right.',
    options: [
      { id: 'A', text: 'c – a – b', translation: 'c-a-b' },
      { id: 'B', text: 'b – a – c', translation: 'b-a-c' },
      { id: 'C', text: 'a – c – b', translation: 'a-c-b' },
      { id: 'D', text: 'a – b – c', translation: 'a-b-c' }
    ],
    correctAnswer: 'A',
    explanation: '• c (Won-gyu hỏi lớp Pháp) -> a (Kelly trả lời phát âm khó) -> b (Won-gyu thông cảm bảo cần thời gian). Trật tự: c - a - b. Chọn A.',
    translation: 'Sắp xếp hội thoại học Tiếng Pháp.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'htl1-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the best arrangement of sentences:\nb. Sophie: Would you ever go on a holiday without your parents?\nd. Jake: Definitely! It sounds like an adventure and a chance to be independent.\ne. Sophie: True, but planning everything alone could be stressful.\nc. Jake: That’s part of the fun! You get to decide where to go.\na. Sophie: I guess it would be exciting - as long as nothing goes wrong!',
    options: [
      { id: 'A', text: 'b – c – a – d – e', translation: 'b-c-a-d-e' },
      { id: 'B', text: 'a – d – e – c – b', translation: 'a-d-e-c-b' },
      { id: 'C', text: 'a – c – e – d – b', translation: 'a-c-e-d-b' },
      { id: 'D', text: 'b – d – e – c – a', translation: 'b-d-e-c-a' }
    ],
    correctAnswer: 'D',
    explanation: '• b (Sophie hỏi đi du lịch tự túc) -> d (Jake bảo chắc chắn tự lập) -> e (Sophie lo căng thẳng) -> c (Jake bảo tự quyết định mới vui) -> a (Sophie chốt lại hào hứng). Trật tự: b - d - e - c - a. Chọn D.',
    translation: 'Sắp xếp hội thoại du lịch.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'htl1-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the best arrangement of sentences:\nd. I wanted to tell you about the history project we need to complete this month.\nc. Our teacher suggested using multiple sources, so I think the library would be a great place to start.\na. There are several books on ancient civilisations that could help us.\nb. This weekend might be a good time to go.\ne. Let me know if you’re free, and we can plan a visit together!',
    options: [
      { id: 'A', text: 'b – c – e – a – d', translation: 'b-c-e-a-d' },
      { id: 'B', text: 'd – c – a – b – e', translation: 'd-c-a-b-e' },
      { id: 'C', text: 'a – c – e – d – b', translation: 'a-c-e-d-b' },
      { id: 'D', text: 'c – e – d – b – a', translation: 'c-e-d-b-a' }
    ],
    correctAnswer: 'B',
    explanation: '• d (nêu dự án Lịch sử) -> c (nêu gợi ý đến thư viện) -> a (sách văn minh cổ đại ở thư viện) -> b (gợi ý đi cuối tuần) -> e (hẹn lịch đi cùng nhau). Trật tự: d - c - a - b - e. Chọn B.',
    translation: 'Sắp xếp thư bạn bè.',
    topicTag: 'Sắp xếp thư cá nhân'
  },
  {
    id: 'htl1-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the best arrangement of sentences:\ne. According to a recent study, the majority of teenagers do housework without any intention of earning pocket money.\nd. Instead, many of them view these tasks as a way to prepare for adult life.\nb. In fact, more than two-thirds of teenagers surveyed clean the floors at least once a week.\na. Girls are more likely than boys to take responsibility for washing their own clothes.\nc. However, there are still a few teenagers who only do housework because their parents make them.',
    options: [
      { id: 'A', text: 'e – c – b – a – d', translation: 'e-c-b-a-d' },
      { id: 'B', text: 'e – b – c – d – a', translation: 'e-b-c-d-a' },
      { id: 'C', text: 'e – a – c – d – b', translation: 'e-a-c-d-b' },
      { id: 'D', text: 'e – d – b – a – c', translation: 'e-d-b-a-c' }
    ],
    correctAnswer: 'D',
    explanation: '• e mở đoạn kết quả nghiên cứu -> d thái độ tích cực thanh niên -> b số liệu cụ thể khảo sát -> a so sánh nam nữ -> c tuy nhiên (However) kết bằng quan điểm đối lập. Trật tự: e - d - b - a - c. Chọn D.',
    translation: 'Sắp xếp đoạn văn nghiên cứu.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'htl1-q17',
    type: 'reordering',
    questionText: 'Question 17. Choose the best arrangement of sentences:\na. During the Covid-19 pandemic, I found myself looking for ways to make a meaningful contribution.\nd. Volunteering at a local food bank turned out to be one of the most rewarding experiences.\nc. Every day, a steady stream of families came for support, and I witnessed firsthand kindness.\ne. Although the work was often exhausting, the sense of purpose kept everyone motivated.\nb. Looking back, I am grateful for the opportunity to help others.',
    options: [
      { id: 'A', text: 'd – e – a – c – b', translation: 'd-e-a-c-b' },
      { id: 'B', text: 'e – a – c – d – b', translation: 'e-a-c-d-b' },
      { id: 'C', text: 'c – e – d – a – b', translation: 'c-e-d-a-b' },
      { id: 'D', text: 'a – d – c – e – b', translation: 'a-d-c-e-b' }
    ],
    correctAnswer: 'D',
    explanation: '• a mở đoạn bối cảnh dịch Covid -> d kể công việc ngân hàng thực phẩm -> c trải nghiệm hằng ngày -> e khó khăn nhưng có mục đích -> b nhìn lại biết ơn. Trật tự: a - d - c - e - b. Chọn D.',
    translation: 'Sắp xếp đoạn văn tình nguyện.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'htl1-q18',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 18. What is the main topic of the passage?',
    options: [
      { id: 'A', text: 'Common Horror Movie Clichés and Tropes', translation: 'Các sáo mòn và thủ pháp phổ biến trong phim kinh dị' },
      { id: 'B', text: 'The History of Horror Cinema', translation: 'Lịch sử điện ảnh kinh dị' },
      { id: 'C', text: 'Why We Love Scary Movies', translation: 'Tại sao chúng ta thích phim kinh dị' },
      { id: 'D', text: 'Tips for Directing a Successful Horror Film', translation: 'Mẹo đạo diễn phim kinh dị' }
    ],
    correctAnswer: 'A',
    explanation: '• Toàn bài phân tích các mô-típ sáo mòn quen thuộc trong phim kinh dị (tầng hầm, mất sóng, địa điểm bỏ hoang, cho đi nhờ xe, cô gái cuối cùng). Chọn A.',
    translation: 'Chủ đề chính của bài đọc: Các mô-típ sáo mòn trong phim kinh dị.',
    topicTag: 'Đọc hiểu - Chủ đề chính'
  },
  {
    id: 'htl1-q19',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 19. Where does the sentence "However, modern technology presents a challenge for filmmakers trying to create a sense of isolation." best fit?',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'A',
    explanation: '• Câu chèn nói về thách thức của công nghệ hiện đại -> đặt ở vị trí [I] làm cầu nối từ phim cũ sang vấn đề điện thoại di động làm tình huống kém thuyết phục. Chọn A.',
    translation: 'Câu trên phù hợp nhất ở vị trí: [I].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'htl1-q20',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 20. Which of the following is NOT mentioned in paragraph 2 as a characteristic of basements?',
    options: [
      { id: 'A', text: 'The presence of a narrow set of stairs.', translation: 'Có cầu thang hẹp dẫn xuống' },
      { id: 'B', text: 'The dark and humid environment inside.', translation: 'Tối tăm ẩm thấp' },
      { id: 'C', text: 'The sound of footsteps from the floor above.', translation: 'Âm thanh bước chân vọng từ tầng trên' },
      { id: 'D', text: 'The possibility of hidden dangerous tools.', translation: 'Khả năng giấu công cụ nguy hiểm' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 2 nhắc đến cầu thang hẹp, tối tăm ẩm thấp, nơi giấu công cụ của kẻ sát nhân. Chi tiết "tiếng bước chân từ tầng trên" KHÔNG được nhắc đến. Chọn C.',
    translation: 'Chi tiết KHÔNG được nhắc đến về tầng hầm: Âm thanh bước chân vọng từ tầng trên.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'htl1-q21',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 21. Which of the following best summarises paragraph 4?',
    options: [
      { id: 'A', text: 'The historical reasons why people abandoned their old houses.', translation: 'Lý do lịch sử người dân rời nhà cũ' },
      { id: 'B', text: 'The advantages of using empty settings to build atmosphere.', translation: 'Lợi thế của việc dùng bối cảnh hoang vắng để tạo bầu không khí' },
      { id: 'C', text: 'The psychological impact of total silence on movie audiences.', translation: 'Tác động tâm lý của sự im lặng' },
      { id: 'D', text: 'The difficulty of finding filming locations in modern cities.', translation: 'Khó khăn tìm nơi quay phim' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 4 tập trung giải thích tại sao địa điểm bỏ hoang hoang vắng lại rất tiện lợi cho đạo diễn tạo bầu không khí rùng rợn và lý giải việc mất sóng. Chọn B.',
    translation: 'Tóm tắt đúng nhất đoạn 4: Lợi thế của việc sử dụng bối cảnh hoang vắng để tạo bầu không khí rùng rợn.',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn'
  },
  {
    id: 'htl1-q22',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 22. The phrase "jump out of our skin" in paragraph 1 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'remain completely calm', translation: 'giữ hoàn toàn bình tĩnh' },
      { id: 'B', text: 'be scared to death', translation: 'sợ đến chết khiếp' },
      { id: 'C', text: 'jump for joy', translation: 'nhảy cẫng lên vì vui' },
      { id: 'D', text: 'become thick-skinned', translation: 'trở nên chai lì' }
    ],
    correctAnswer: 'A',
    explanation: '• Thành ngữ "jump out of our skin" = vô cùng hoảng sợ / giật bắn người. Trái nghĩa là "remain completely calm" (giữ hoàn toàn bình tĩnh). Chọn A.',
    translation: 'Cụm từ "jump out of our skin" trong đoạn 1 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'htl1-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 23. The word "them" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'scary films', translation: 'phim kinh dị' },
      { id: 'B', text: 'plot devices', translation: 'thủ pháp cốt truyện' },
      { id: 'C', text: 'the basements', translation: 'các tầng hầm' },
      { id: 'D', text: 'narrow stairs', translation: 'cầu thang hẹp' }
    ],
    correctAnswer: 'C',
    explanation: '• "Basements are always dark... You can only reach them by a narrow staircase" -> "them" thay thế cho "the basements". Chọn C.',
    translation: 'Từ "them" thay thế cho: các tầng hầm.',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'htl1-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 24. Which of the following best paraphrases the underlined sentence in paragraph 5?',
    options: [
      { id: 'A', text: 'Within the horror framework, extending kindness to hitchhikers is portrayed as a guarantee of a disastrous predicament.', translation: 'Cho người đi nhờ xe được khắc họa như đảm bảo cho thảm họa sắp xảy ra' },
      { id: 'B', text: 'The protagonist’s refusal to assist strangers is depicted as primary cause.', translation: 'Từ chối giúp người là nguyên nhân chết' },
      { id: 'C', text: 'Characters intentionally court danger by driving alone.', translation: 'Cố tình lái xe một mình' },
      { id: 'D', text: 'Directors emphasize that companionship is crucial for survival.', translation: 'Bạn đồng hành giúp sống sót' }
    ],
    correctAnswer: 'A',
    explanation: '• A diễn đạt lại hoàn hảo: "giving anybody a ride is asking for trouble" (cho đi nhờ xe là tự chuốc lấy rắc rối/thảm họa). Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'htl1-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 25. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'A trope becomes a cliché only when used effectively.', translation: 'Mô-típ thành sáo mòn khi dùng hiệu quả' },
      { id: 'B', text: 'Mobile phones have made horror movies much more terrifying.', translation: 'Điện thoại làm phim đáng sợ hơn' },
      { id: 'C', text: 'Abandoned locations help explain why characters cannot call for assistance.', translation: 'Địa điểm bỏ hoang giúp lý giải tại sao nhân vật không gọi điện được' },
      { id: 'D', text: 'The final girl is usually the strongest character at the start.', translation: 'Cô gái cuối cùng mạnh nhất từ đầu' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 4 nêu: "abandoned places are also handy... in that it\'s more believable that you will have no phone coverage there". Chọn C.',
    translation: 'Phát biểu ĐÚNG: Địa điểm bỏ hoang giúp giải thích hợp lý việc không có sóng điện thoại.',
    topicTag: 'Đọc hiểu - Thông tin đúng'
  },
  {
    id: 'htl1-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 26. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Modern filmmakers must adapt traditional tropes to maintain a sense of realism despite technological advancements.', translation: 'Đạo diễn hiện đại phải điều chỉnh sáo mòn để giữ tính thực tế trước sự phát triển công nghệ' },
      { id: 'B', text: 'Audiences today are much harder to frighten than before.', translation: 'Khán giả ngày nay khó dọa hơn' },
      { id: 'C', text: 'Successful directors usually avoid using clichés entirely.', translation: 'Đạo diễn tránh hẳn sáo mòn' },
      { id: 'D', text: 'Characters would survive if they possessed better tech skills.', translation: 'Nhân vật sống sót nếu giỏi công nghệ' }
    ],
    correctAnswer: 'A',
    explanation: '• Bài đọc suy luận rằng vì có smartphone nên đạo diễn phải tạo ra các lý do mới (mất sóng, hết pin, nhà bỏ hoang) để duy trì cảm giác cô lập chân thực. Chọn A.',
    translation: 'Suy luận đúng: Nhà làm phim phải linh hoạt điều chỉnh mô-típ để duy trì tính thực tế.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'htl1-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_HORROR_FILMS,
    passageTranslation: PASSAGE_HORROR_FILMS_TRANS,
    questionText: 'Question 27. Which of the following best summarises the passage?',
    options: [
      { id: 'A', text: 'The passage explores various recurring horror clichés and plot devices, explaining how directors use these conventional elements to maintain suspense.', translation: 'Bài viết phân tích các sáo mòn phim kinh dị và cách đạo diễn dùng chúng để duy trì sự hồi hộp' },
      { id: 'B', text: 'The text describes how horror filmmakers utilize spooky basements to trap characters.', translation: 'Mô tả dùng tầng hầm giam nhân vật' },
      { id: 'C', text: 'This reading highlights how modern horror cinema has adapted traditional tropes.', translation: 'Nêu bật phim kinh dị hiện đại' },
      { id: 'D', text: 'The author argues that horror movies have become overly predictable.', translation: 'Phim kinh dị quá dễ đoán' }
    ],
    correctAnswer: 'A',
    explanation: '• A tóm tắt chính xác và đầy đủ nhất toàn bộ nội dung phân tích các thủ pháp sáo mòn trong phim kinh dị. Chọn A.',
    translation: 'Tóm tắt toàn bài: Phân tích các sáo mòn kinh dị và cách đạo diễn duy trì sự hồi hộp.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  },
  {
    id: 'htl1-q28',
    type: 'cloze_test',
    questionText: 'Question 28. Phrasal verb "call for" in paragraph 3 is CLOSEST in meaning to:',
    options: [
      { id: 'A', text: 'ask for', translation: 'yêu cầu / gọi hỏi xin giúp đỡ' },
      { id: 'B', text: 'shout at', translation: 'hét vào mặt' },
      { id: 'C', text: 'look for', translation: 'tìm kiếm' },
      { id: 'D', text: 'send for', translation: 'cho người đến gọi' }
    ],
    correctAnswer: 'A',
    explanation: '• "call for help" = ask for help (gọi / yêu cầu sự trợ giúp). Chọn A.',
    translation: 'Cụm từ "call for" có nghĩa gần nhất với:',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'htl1-q29',
    type: 'cloze_test',
    questionText: 'Question 29. The phrase "giving anybody a ride is asking for trouble" implies:',
    options: [
      { id: 'A', text: 'Extending kindness to hitchhikers is portrayed as a guarantee of a disastrous predicament', translation: 'Tỏ lòng tốt cho quá giang là đảm bảo cho thảm họa sắp xảy ra' },
      { id: 'B', text: 'Refusing to give a ride causes immediate accidents', translation: 'Từ chối cho đi nhờ gây tai nạn' },
      { id: 'C', text: 'Driving alone is extremely dangerous', translation: 'Lái xe một mình nguy hiểm' },
      { id: 'D', text: 'Hitchhikers always help drivers stay awake', translation: 'Người quá giang giúp tài xế tỉnh táo' }
    ],
    correctAnswer: 'A',
    explanation: '• Cụm "asking for trouble" nghĩa là tự chuốc lấy rắc rối/thảm họa. Chọn A.',
    translation: 'Hàm ý: Việc cho người khác đi nhờ xe là tự rước thảm họa vào thân.',
    topicTag: 'Hàm ý thành ngữ'
  },
  {
    id: 'htl1-q30',
    type: 'cloze_test',
    questionText: 'Question 30. The "final girl" trope usually portrays the female survivor as:',
    options: [
      { id: 'A', text: 'starting as innocent and shy, but becoming tough and resourceful by the end', translation: 'ban đầu ngây thơ rụt rè, về sau trở nên cứng cỏi và mưu trí nhất' },
      { id: 'B', text: 'the strongest fighter from the very beginning of the movie', translation: 'mạnh nhất từ đầu' },
      { id: 'C', text: 'a minor character with no influence on the outcome', translation: 'nhân vật phụ không có ảnh hưởng' },
      { id: 'D', text: 'the villain in disguise', translation: 'kẻ phản diện cải trang' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn cuối nêu rõ: "At the beginning the girl is usually innocent, shy... By the end, she has become the toughest and most resourceful person". Chọn A.',
    translation: 'Hình ảnh cô gái cuối cùng: Ban đầu ngây thơ rụt rè, về sau trở nên cứng cỏi mưu trí nhất.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'htl1-q31',
    type: 'grammar',
    questionText: 'Question 31. If the weather _____ clear tomorrow, the outdoor graduation ceremony will proceed as scheduled.',
    options: [
      { id: 'A', text: 'is', translation: 'thì hiện tại đơn' },
      { id: 'B', text: 'will be', translation: 'thiếu điều kiện loại 1' },
      { id: 'C', text: 'were', translation: 'quá khứ giả định' },
      { id: 'D', text: 'had been', translation: 'quá khứ hoàn thành' }
    ],
    correctAnswer: 'A',
    explanation: '• Mệnh đề If điều kiện loại 1 dùng thì hiện tại đơn: If + S + V(s/es), S + will + V. Chọn A. is.',
    translation: 'Nếu thời tiết đẹp vào ngày mai, lễ tốt nghiệp ngoài trời sẽ diễn ra đúng kế hoạch.',
    topicTag: 'Câu điều kiện loại 1'
  },
  {
    id: 'htl1-q32',
    type: 'grammar',
    questionText: 'Question 32. By the time the professor finishes her lecture, the students _____ notes for over two hours.',
    options: [
      { id: 'A', text: 'have taken', translation: 'hiện tại hoàn thành' },
      { id: 'B', text: 'will have been taking', translation: 'tương lai hoàn thành tiếp diễn' },
      { id: 'C', text: 'were taking', translation: 'quá khứ tiếp diễn' },
      { id: 'D', text: 'took', translation: 'quá khứ đơn' }
    ],
    correctAnswer: 'B',
    explanation: '• Cấu trúc "By the time + S + V(hiện tại), S + will have been V-ing" diễn tả một hành động kéo dài liên tục đến một thời điểm trong tương lai. Chọn B.',
    translation: 'Vào lúc giáo sư kết thúc bài giảng, các sinh viên sẽ đã chép ghi chú liên tục hơn 2 giờ.',
    topicTag: 'Thì Tương lai hoàn thành tiếp diễn'
  },
  {
    id: 'htl1-q33',
    type: 'vocabulary',
    questionText: 'Question 33. The new environmental policy aims to _____ carbon emissions across all industrial sectors.',
    options: [
      { id: 'A', text: 'mitigate', translation: 'giảm nhẹ / giảm bớt tác hại' },
      { id: 'B', text: 'aggravate', translation: 'làm trầm trọng thêm' },
      { id: 'C', text: 'deteriorate', translation: 'làm suy giảm chất lượng' },
      { id: 'D', text: 'complicate', translation: 'làm phức tạp' }
    ],
    correctAnswer: 'A',
    explanation: '• Động từ "mitigate carbon emissions" = giảm nhẹ lượng phát thải carbon. Chọn A. mitigate.',
    translation: 'Chính sách môi trường mới nhằm mục đích giảm nhẹ khí thải carbon.',
    topicTag: 'Từ vựng Nâng cao'
  },
  {
    id: 'htl1-q34',
    type: 'synonym',
    questionText: 'Question 34. The scientist provided a concise summary of the research findings.',
    options: [
      { id: 'A', text: 'brief', translation: 'ngắn gọn' },
      { id: 'B', text: 'lengthy', translation: 'dài dòng' },
      { id: 'C', text: 'vague', translation: 'mơ hồ' },
      { id: 'D', text: 'elaborate', translation: 'phức tạp / chi tiết' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "concise" = ngắn gọn, súc tích = brief. Do đó chọn A. brief.',
    translation: 'Nhà khoa học đã cung cấp bản tóm tắt ngắn gọn các phát hiện nghiên cứu.',
    topicTag: 'Từ đồng nghĩa'
  },
  {
    id: 'htl1-q35',
    type: 'antonym',
    questionText: 'Question 35. Her benevolent actions towards the local community earned her widespread admiration.',
    options: [
      { id: 'A', text: 'kind-hearted', translation: 'tốt bụng' },
      { id: 'B', text: 'malevolent', translation: 'ộc hại / hiểm ác' },
      { id: 'C', text: 'generous', translation: 'hào phóng' },
      { id: 'D', text: 'sympathetic', translation: 'thông cảm' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "benevolent" = nhân từ, tốt bụng. Trái nghĩa với nó là "malevolent" (độc hại, hiểm ác). Chọn B.',
    translation: 'Hành động nhân từ của cô ấy đối với cộng đồng địa phương đã nhận được sự ngưỡng mộ.',
    topicTag: 'Từ trái nghĩa'
  },
  {
    id: 'htl1-q36',
    type: 'communication',
    questionText: 'Question 36. Mark: "Would you mind closing the window? It’s getting quite chilly." - Anna: "_____" ',
    options: [
      { id: 'A', text: 'Not at all. I’ll do it right now.', translation: 'Không sao cả. Tôi sẽ làm ngay.' },
      { id: 'B', text: 'Yes, I would love to.', translation: 'Vâng, tôi thích lắm' },
      { id: 'C', text: 'No, thanks. I am full.', translation: 'Không, cảm ơn' },
      { id: 'D', text: 'You’re welcome.', translation: 'Không có gì' }
    ],
    correctAnswer: 'A',
    explanation: '• Với câu hỏi lịch sự "Would you mind...?", câu trả lời đồng ý giúp đỡ là "Not at all" (Tôi không phiền đâu). Chọn A.',
    translation: 'Mark: Bạn có phiền đóng cửa sổ giúp không? - Anna: Không sao cả, tôi đóng ngay.',
    topicTag: 'Giao tiếp hàng ngày'
  },
  {
    id: 'htl1-q37',
    type: 'grammar',
    questionText: 'Question 37. Seldom _____ such an inspiring speech that moved the entire audience to tears.',
    options: [
      { id: 'A', text: 'have we heard', translation: 'đảo ngữ với thì hiện tại hoàn thành / quá khứ' },
      { id: 'B', text: 'we have heard', translation: 'không đảo ngữ' },
      { id: 'C', text: 'did we hear', translation: 'đảo ngữ thì quá khứ đơn' },
      { id: 'D', text: 'we heard', translation: 'không đảo ngữ' }
    ],
    correctAnswer: 'C',
    explanation: '• Đảo ngữ với trạng từ phủ định ở đầu câu: "Seldom + aux + S + V". Động từ quá khứ "moved" chỉ thời gian quá khứ -> "Seldom did we hear...". Chọn C.',
    translation: 'Hiếm khi chúng tôi được nghe một bài phát biểu truyền cảm hứng đến vậy.',
    topicTag: 'Đảo ngữ (Inversion)'
  },
  {
    id: 'htl1-q38',
    type: 'grammar',
    questionText: 'Question 38. The proposal, _____ by the board of directors last week, will take effect next month.',
    options: [
      { id: 'A', text: 'approved', translation: 'rút gọn mệnh đề bị động' },
      { id: 'B', text: 'approving', translation: 'dạng chủ động' },
      { id: 'C', text: 'to approve', translation: 'chỉ mục đích' },
      { id: 'D', text: 'was approved', translation: 'thừa động từ was' }
    ],
    correctAnswer: 'A',
    explanation: '• Mệnh đề quan hệ rút gọn dạng bị động: "which was approved" -> "approved". Chọn A.',
    translation: 'Đề xuất, được ban giám đốc phê duyệt tuần trước, sẽ có hiệu lực vào tháng tới.',
    topicTag: 'Rút gọn mệnh đề quan hệ'
  },
  {
    id: 'htl1-q39',
    type: 'grammar',
    questionText: 'Question 39. She was so engrossed in her novel that she didn’t hear the doorbell _____.',
    options: [
      { id: 'A', text: 'ring', translation: 'nguyên mẫu chỉ nghe trọn vẹn hành động' },
      { id: 'B', text: 'to ring', translation: 'dùng to V' },
      { id: 'C', text: 'rung', translation: 'tiếng Việt' },
      { id: 'D', text: 'rang', translation: 'quá khứ' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc động từ giác quan: "hear + obj + V-bare" (nghe thấy toàn bộ hành động xảy ra). Chọn A. ring.',
    translation: 'Cô ấy mải mê đọc tiểu thuyết đến mức không nghe thấy chuông cửa reo.',
    topicTag: 'Động từ Giác quan (Perception Verbs)'
  },
  {
    id: 'htl1-q40',
    type: 'grammar',
    questionText: 'Question 40. Had I known about the flight delay in advance, I _____ at the airport so early.',
    options: [
      { id: 'A', text: 'would not have arrived', translation: 'câu điều kiện loại 3 đảo ngữ' },
      { id: 'B', text: 'will not arrive', translation: 'tương lai đơn' },
      { id: 'C', text: 'did not arrive', translation: 'quá khứ đơn' },
      { id: 'D', text: 'would not arrive', translation: 'điều kiện loại 2' }
    ],
    correctAnswer: 'A',
    explanation: '• Đảo ngữ điều kiện loại 3: "Had + S + P2, S + would have + P2". Chọn A. would not have arrived.',
    translation: 'Nếu tôi biết trước về việc chuyến bay bị hoãn, tôi đã không đến sân bay sớm như vậy.',
    topicTag: 'Đảo ngữ Điều kiện loại 3'
  }
];

export const HA_TINH_2026_L1_EXAM: ExamSet = {
  id: 'exam-ha-tinh-2026-l1',
  title: 'Đề Thi Thử Tốt Nghiệp THPT 2026 - Sở GD&ĐT Hà Tĩnh (Lần 1)',
  description: 'Đề thi thử chính thức môn Tiếng Anh tốt nghiệp THPT 2026 của Sở GD&ĐT Hà Tĩnh kèm đáp án chi tiết và giải thích bài đọc.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'SỞ HÀ TĨNH LẦN 1',
  iconName: 'BookOpen',
  questions: HA_TINH_2026_L1_QUESTIONS
};
