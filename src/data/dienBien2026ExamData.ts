import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_ADVENTURE = `Your Adventure Starts Here!

Are you ready for an (1) ____________ experience?

Adventure Travel Packages, (2) ____________ comfort and exploration, allow you (3) ____________ every detail of your trip, ensuring that your journey is as thrilling as your destination.

Discover (4) ____________ - all tailored to your dreams.

(5) ____________ a trip to explore hidden gems, and make memories that will stay with you forever.

Plan your trip in minutes: from choosing your dream destination (6) ____________ finding the perfect itinerary.`;

const PASSAGE_ADVENTURE_TRANS = `[ĐOẠN 1] Cuộc phiêu lưu của bạn bắt đầu tại đây!
Bạn đã sẵn sàng cho một trải nghiệm đầy hứng khởi chưa?

[ĐOẠN 2] Các gói du lịch mạo hiểm, kết hợp giữa sự thoải mái và khám phá, cho phép bạn tùy chỉnh mọi chi tiết của chuyến đi, đảm bảo hành trình của bạn thú vị như chính điểm đến.

[ĐOẠN 3] Khám phá những điều mới mẻ – tất cả đều được may đo theo ước mơ của bạn.

[ĐOẠN 4] Hãy lên kế hoạch cho một chuyến đi khám phá những viên ngọc ẩn giấu, và tạo nên những kỷ niệm sẽ theo bạn mãi mãi.

[ĐOẠN 5] Lên kế hoạch cho chuyến đi của bạn chỉ trong vài phút: từ việc chọn điểm đến trong mơ đến việc tìm ra lịch trình hoàn hảo.`;

const PASSAGE_PUBLIC_SPEAKING = `How to Improve Your Public Speaking Skills

Public speaking is an essential skill that helps people communicate effectively. Whether you are a student or a professional, improving your speaking skills can boost your confidence and career prospects. Here are (7) ____________ practical tips to help you become a better speaker:

1. Prepare Thoroughly
✔ Before (8) ____________, take time to plan your speech. Outline your main points and support them with relevant examples. (9) ____________ useful tip is to practice in front of a mirror or record yourself. This will help you identify areas for improvement.

2. Engage Your Audience
✔ One of the most important aspects of public speaking is keeping your audience engaged. To do this, make eye contact, use gestures, and vary your tone of voice. (10) ____________, reading directly from notes can make your speech less interesting.

3. Overcome Nervousness
✔ Feeling nervous before a speech is natural, but there are ways to manage it. Take deep breaths and (11) ____________ your message. Many others have faced the same fear, yet they have successfully overcome it. The more you practice, the easier it will become. If needed, you can (12) ____________ techniques from experienced speakers to improve your delivery.`;

const PASSAGE_PUBLIC_SPEAKING_TRANS = `[ĐOẠN 1] Cách cải thiện kỹ năng nói trước công chúng
Nói trước công chúng là một kỹ năng thiết yếu giúp mọi người giao tiếp hiệu quả. Dù bạn là sinh viên hay người đi làm, việc cải thiện kỹ năng nói có thể nâng cao sự tự tin và triển vọng nghề nghiệp của bạn. Dưới đây là các lời khuyên thực tế giúp bạn trở thành một diễn giả tốt hơn:

[ĐOẠN 2] 1. Chuẩn bị kỹ lưỡng
Trước khi phát biểu, hãy dành thời gian lập kế hoạch cho bài nói của bạn. Phác thảo các điểm chính và hỗ trợ chúng bằng các ví dụ phù hợp. Một mẹo hữu ích khác là thực hành trước gương hoặc tự ghi âm. Điều này sẽ giúp bạn xác định các điểm cần cải thiện.

[ĐOẠN 3] 2. Lôi cuốn khán giả
Một trong những khía cạnh quan trọng nhất của nói trước công chúng là giữ cho khán giả tương tác. Để làm điều này, hãy giao tiếp bằng mắt, sử dụng cử chỉ và thay đổi tông giọng. Ngược lại, việc đọc trực tiếp từ ghi chú có thể làm cho bài nói bớt thú vị.

[ĐOẠN 4] 3. Vượt qua sự hồi hộp
Cảm thấy hồi hộp trước khi nói là điều tự nhiên, nhưng có nhiều cách để quản lý nó. Hãy hít thở sâu và tập trung vào thông điệp của bạn. Nhiều người khác từng đối mặt với nỗi sợ tương tự nhưng họ đã vượt qua thành công. Bạn càng thực hành nhiều, việc đó sẽ càng trở nên dễ dàng hơn. Nếu cần, bạn có thể áp dụng các kỹ thuật từ những diễn giả có kinh nghiệm để cải thiện phong thái truyền đạt.`;

const PASSAGE_SOPHIA = `Humanoid robots, eminent characters in science fiction novels and sci-fi films, are becoming a reality. Sophia, as an example, (18) ____________. One month later, she had her premiere in Texas, USA, and has made multiple public appearances around the world since then. At one such event, Sophia was granted Saudi Arabian citizenship in October 2017 and even became the first Innovation Champion of the United Nations Development Programme later that year. During Sophia's trip to Vietnam in 2018, she addressed the Industry 4.0 Summit and Expo.

Sophia the Robot is the latest humanlike robot created by a Hong Kong-based company (19) ____________. Undoubtedly, Sophia together with other humanlike robots represents the rapid advancement in the field of robotics and artificial intelligence. (20) ____________.

Sophia's physical appearance is inspired by both the famous actress Audrey Hepburn and the creator's wife. (21) ____________. But what makes her more lifelike than other robots is the patented artificial skin called Frubber®, which has the feel and flexibility of human skin.

Sophia amazes the world with her ability to communicate naturally. The Sophia Intelligence Collective, which is a combination of AI and human input, and other sophisticated perception techniques enable Sophia to recognise human faces and identify human emotions and gestures. Equipped with machine learning algorithms, (22) ____________.`;

const PASSAGE_SOPHIA_TRANS = `[ĐOẠN 1] Robot hình người, những nhân vật nổi bật trong các tiểu thuyết khoa học viễn tưởng và phim viễn tưởng, đang dần trở thành hiện thực. Sophia, chẳng hạn, được kích hoạt lần đầu vào Ngày Lễ Tình Nhân năm 2016. Một tháng sau, cô có buổi ra mắt tại Texas, Hoa Kỳ và từ đó đến nay đã thực hiện nhiều sự kiện xuất hiện trước công chúng trên khắp thế giới. Tại một sự kiện như vậy, Sophia đã được cấp quyền công dân Ả Rập Xê Út vào tháng 10 năm 2017 và thậm chí trở thành Quán quân Sáng tạo đầu tiên của Chương trình Phát triển Liên Hợp Quốc vào cuối năm đó. Trong chuyến thăm Việt Nam năm 2018, Sophia đã phát biểu tại Diễn đàn & Triển lãm Quốc tế về Công nghiệp 4.0.

[ĐOẠN 2] Robot Sophia là mẫu robot giống người mới nhất được sáng tạo bởi một công ty có trụ sở tại Hồng Kông. Không còn nghi ngờ gì nữa, Sophia cùng với các robot giống người khác đại diện cho sự tiến bộ nhanh chóng trong lĩnh vực robot và trí tuệ nhân tạo.

[ĐOẠN 3] Diện mạo bên ngoài của Sophia được lấy cảm hứng từ cả nữ diễn viên nổi tiếng Audrey Hepburn và người vợ của nhà sáng tạo. Nhưng điều làm cho cô trở nên giống thật hơn các robot khác là lớp da nhân tạo đã được cấp bằng sáng chế gọi là Frubber®, có cảm giác và độ đàn hồi như da người.

[ĐOẠN 4] Sophia làm thế giới kinh ngạc với khả năng giao tiếp tự nhiên. Tập hợp Trí tuệ Sophia, sự kết hợp giữa AI và đầu vào của con người, cùng các kỹ thuật nhận thức tinh vi khác cho phép Sophia nhận diện khuôn mặt người và xác định cảm xúc, cử chỉ của con người. Được trang bị các thuật toán học máy, cô ngày càng trở nên thông minh hơn qua từng cuộc trò chuyện.`;

const PASSAGE_TEEN_INDEPENDENCE = `Independence for young people is about trying new things, taking on more responsibility, making decisions by themselves, and working out who they are and what they want to be. Achieving independence is an essential part of the journey to adulthood.

As part of setting up healthy boundaries with your teenager, it is important for you to respect their privacy. As your teenager grows older and maturer, they need more privacy to figure out the person they want to be. Teenagers are prone to make quick decisions without thinking about the consequences. It is still important to monitor your teenager to help guide them and support them. If you are concerned about their online or offline activities, try to have a conversation with them. You can discuss your concerns with them and the potential risks of these activities.

You should also support your teenager's decisions. Supporting your teenager's choices fosters their independence and bolsters their confidence in decision-making. Everyday choices, like selecting clothes, can enhance their self-assurance. This approach encourages your child to accept the responsibility for their choices and learn from their mistakes. You do not always have to support your teenager's decision if they may be putting themselves or others at risk.

Moreover, some issues may appear trivial to you, yet they are pivotal to your teenager. Social media disputes or friendship conflicts can significantly affect them. They can be overwhelming for them and challenge their ideas of who they are and who is in charge. Listen to your teenager. If they ask for advice, give them advice. You can encourage them to look at different solutions and discuss them with you. However, sometimes they may just want to talk about their experiences with you, but do not want any advice.`;

const PASSAGE_TEEN_INDEPENDENCE_TRANS = `[ĐOẠN 1] Sự tự lập ở người trẻ là quá trình dám thử những điều mới, đảm nhận nhiều trách nhiệm hơn, tự mình đưa ra quyết định, đồng thời khám phá bản thân là ai và muốn trở thành người như thế nào. Đạt được sự tự lập là một phần thiết yếu trong hành trình trưởng thành.

[ĐOẠN 2] Là một phần trong việc thiết lập ranh giới lành mạnh với con ở tuổi vị thành niên, việc bạn tôn trọng quyền riêng tư của con là rất quan trọng. Khi con bạn lớn hơn và trưởng thành hơn, chúng cần nhiều quyền riêng tư hơn để tìm hiểu về mẫu người mà chúng muốn trở thành. Thiếu niên thường dễ đưa ra các quyết định nhanh chóng mà không suy nghĩ về hậu quả. Việc giám sát con để giúp hướng dẫn và hỗ trợ vẫn rất quan trọng. Nếu bạn lo lắng về các hoạt động trực tuyến hoặc ngoài đời của con, hãy cố gắng trò chuyện với con. Bạn có thể thảo luận về những lo ngại của mình và các rủi ro tiềm ẩn của những hoạt động đó.

[ĐOẠN 3] Bạn cũng nên ủng hộ các quyết định của con. Việc ủng hộ sự lựa chọn của con sẽ nuôi dưỡng tính tự lập và củng cố sự tự tin của con trong việc đưa ra quyết định. Những lựa chọn hàng ngày, chẳng hạn như chọn quần áo, có thể nâng cao sự tự tin của con. Cách tiếp cận này khuyến khích con bạn chấp nhận trách nhiệm cho những lựa chọn của mình và học hỏi từ những sai lầm. Tuy nhiên, bạn không nhất thiết phải luôn ủng hộ quyết định của con nếu chúng có thể gây nguy hiểm cho bản thân hoặc người khác.

[ĐOẠN 4] Hơn nữa, một số vấn đề có thể có vẻ nhỏ nhặt đối với bạn nhưng lại cực kỳ quan trọng đối với con. Mâu thuẫn trên mạng xã hội hoặc mâu thuẫn tình bạn có thể ảnh hưởng đáng kể đến con. Chúng có thể khiến con cảm thấy quá tải và thách thức quan niệm của con về bản thân là ai. Hãy lắng nghe con. Nếu con xin lời khuyên, hãy đưa ra lời khuyên. Bạn có thể khuyến khích con tìm kiếm các giải pháp khác nhau và thảo luận với bạn. Dù vậy, đôi khi con chỉ muốn chia sẻ trải nghiệm mà không cần lời khuyên nào.`;

const PASSAGE_NIGHT_SHIFTS = `[I] Shift work involves individuals working at various time throughout a 24-hour period, ensuring that there is always someone available to do the job. [II] Historically, shift work dates back to ancient times when guards protected cities and nomadic groups and members stay awake to safeguard against dangers. [III] Generally, only a few of them took turns staying awake to protect their groups, but this changed significantly during the 19th century. [IV]

In the 19th century, the Industrial Revolution marked a turning point in history, with large factories and complex machinery requiring constant operation to maximise productivity and meet the growing demand for good. Workers were divided into dayshifts and night shifts. The 20th century saw a further rise in shift work due to rapid economic growth and increased demand for energy, healthcare and transportation, nurses, for instance, worked overnight to care for patients, while train and lorry drivers transported goods during the night. In addition, the introduction of electric lighting further facilitated night work, allowing factories to operate efficiently around the clock.

However, working night shifts presents challenges. While some people are night owls, most struggle with disrupted sleep patterns, leading to a variety of health issues. Several night shift workers have a higher risk of developing cardiovascular disease, Type 2 diabetes, stroke and even mental health disorders. Irregular hours can also affect family life and social relationships and young people find it challenging to balance their shift work with their studies.

To deal with those issues, many companies have introduced certain rules that require employees to take breaks regularly or work on flexible schedules. To illustrate, in some nations, night-shift drivers are not allowed to drive over four hours continuously. Besides, night-shift workers are encouraged to do physical exercises and deep breathing exercised to reduce the risk of health issues.

To ensure round-the-clock operation and uninterrupted service delivery in numerous sectors, night shift work is indispensable. However, this type of work is associated with substantial health risks and social isolation, both of which can have detrimental effects on workers’ mental and physical health. Consequently, companies and their night shift workers must follow necessary regulations to mitigate those risks.`;

const PASSAGE_NIGHT_SHIFTS_TRANS = `[ĐOẠN 1] Làm việc theo ca là hình thức lao động trong đó người lao động làm việc vào những khung giờ khác nhau trong suốt 24 giờ, nhằm bảo đảm luôn có người túc trực để công việc được duy trì liên tục. Về lịch sử, làm việc theo ca đã có từ thời cổ đại khi các lính gác bảo vệ thành phố và các nhóm du mục thức để canh phòng trước hiểm họa. Thông thường chỉ có một vài người luân phiên thức canh, nhưng điều này đã thay đổi đáng kể trong thế kỷ 19.

[ĐOẠN 2] Vào thế kỷ 19, Cách mạng Công nghiệp đánh dấu một bước ngoặt lịch sử, với các nhà máy lớn và máy móc phức tạp đòi hỏi phải vận hành liên tục để tối đa hóa năng suất và đáp ứng nhu cầu hàng hóa ngày càng tăng. Người lao động được chia thành ca ngày và ca đêm. Thế kỷ 20 chứng kiến sự gia tăng hơn nữa của làm việc theo ca do sự phát triển kinh tế nhanh chóng và nhu cầu tăng cao về năng lượng, y tế và vận tải. Chẳng hạn, y tá làm việc qua đêm để chăm sóc bệnh nhân, trong khi tài xế tàu hỏa và xe tải vận chuyển hàng hóa ban đêm.

[ĐOẠN 3] Tuy nhiên, làm ca đêm mang lại nhiều thách thức. Mặc dù một số người là "cú đêm", hầu hết mọi người đều chật vật với nhịp sinh học bị rối loạn, dẫn đến nhiều vấn đề sức khỏe. Nhiều công nhân làm ca đêm có nguy cơ mắc bệnh tim mạch, tiểu đường tuýp 2, đột quỵ và rối loạn sức khỏe tâm thần cao hơn. Giờ giấc thất thường cũng ảnh hưởng đến đời sống gia đình và các mối quan hệ xã hội.

[ĐOẠN 4] Để giải quyết các vấn đề đó, nhiều công ty đã áp dụng các quy định yêu cầu nhân viên phải nghỉ ngơi định kỳ hoặc làm việc theo lịch trình linh hoạt. Ví dụ, ở một số quốc gia, tài xế ca đêm không được phép lái xe liên tục quá 4 giờ. Ngoài ra, công nhân ca đêm được khuyến khích tập thể dục và hít thở sâu để giảm nguy cơ sức khỏe.

[ĐOẠN 5] Để đảm bảo hoạt động 24/7 và cung cấp dịch vụ không gián đoạn trong nhiều lĩnh vực, làm ca đêm là không thể thiếu. Tuy nhiên, loại hình công việc này đi kèm với những rủi ro sức khỏe đáng kể và sự cô lập xã hội. Do đó, các công ty và công nhân ca đêm phải tuân thủ các quy định cần thiết để giảm thiểu những rủi ro này.`;

export const DIEN_BIEN_2026_QUESTIONS: Question[] = [
  {
    id: 'db-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_ADVENTURE,
    passageTranslation: PASSAGE_ADVENTURE_TRANS,
    questionText: 'Question 1. Are you ready for an (1) _____ experience?',
    options: [
      { id: 'A', text: 'exciting', translation: 'đầy hứng khởi / gây hào hứng' },
      { id: 'B', text: 'excited', translation: 'cảm thấy hào hứng' },
      { id: 'C', text: 'excitingly', translation: 'trạng từ' },
      { id: 'D', text: 'excitement', translation: 'danh từ' }
    ],
    correctAnswer: 'A',
    explanation: '• Đứng trước danh từ "experience" cần một tính từ mang nghĩa chủ động miêu tả sự vật: "an exciting experience". Chọn A.',
    translation: 'Bạn đã sẵn sàng cho một trải nghiệm đầy hứng khởi chưa?',
    topicTag: 'Từ loại (Word Form)'
  },
  {
    id: 'db-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_ADVENTURE,
    passageTranslation: PASSAGE_ADVENTURE_TRANS,
    questionText: 'Question 2. Adventure Travel Packages, (2) _____ comfort and exploration',
    options: [
      { id: 'A', text: 'which are combined', translation: 'bị động sai nghĩa' },
      { id: 'B', text: 'combining', translation: 'kết hợp' },
      { id: 'C', text: 'combined', translation: 'rút gọn bị động' },
      { id: 'D', text: 'combine', translation: 'động từ nguyên mẫu' }
    ],
    correctAnswer: 'B',
    explanation: '• Rút gọn mệnh đề quan hệ chủ động: "Packages which combine..." -> "combining". Chọn B.',
    translation: 'Các gói du lịch mạo hiểm kết hợp giữa sự thoải mái và khám phá.',
    topicTag: 'Rút gọn mệnh đề quan hệ'
  },
  {
    id: 'db-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_ADVENTURE,
    passageTranslation: PASSAGE_ADVENTURE_TRANS,
    questionText: 'Question 3. allow you (3) _____ every detail of your trip',
    options: [
      { id: 'A', text: 'to customize', translation: 'tùy chỉnh' },
      { id: 'B', text: 'customize', translation: 'nguyên mẫu không to' },
      { id: 'C', text: 'customizing', translation: 'dạng V-ing' },
      { id: 'D', text: 'to customizing', translation: 'sai cấu trúc' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc động từ: "allow somebody to V" (cho phép ai làm gì). Chọn A. to customize.',
    translation: 'Cho phép bạn tùy chỉnh mọi chi tiết của chuyến đi.',
    topicTag: 'Cấu trúc Động từ allow'
  },
  {
    id: 'db-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_ADVENTURE,
    passageTranslation: PASSAGE_ADVENTURE_TRANS,
    questionText: 'Question 4. Discover (4) _____ - all tailored to your dreams.',
    options: [
      { id: 'A', text: 'mountain breathtaking trails', translation: 'sai trật tự' },
      { id: 'B', text: 'breathtaking trails mountain', translation: 'sai trật tự' },
      { id: 'C', text: 'trails breathtaking mountain', translation: 'sai trật tự' },
      { id: 'D', text: 'breathtaking mountain trails', translation: 'những cung đường núi ngoạn mục' }
    ],
    correctAnswer: 'D',
    explanation: '• Trật tự tính từ–danh từ: Opinion (breathtaking) + Noun adjunct (mountain) + Head Noun (trails). Chọn D.',
    translation: 'Khám phá những cung đường núi ngoạn mục.',
    topicTag: 'Trật tự Cụm Danh từ'
  },
  {
    id: 'db-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_ADVENTURE,
    passageTranslation: PASSAGE_ADVENTURE_TRANS,
    questionText: 'Question 5. (5) _____ a trip to explore hidden gems',
    options: [
      { id: 'A', text: 'Do', translation: 'do a trip' },
      { id: 'B', text: 'Put', translation: 'put a trip' },
      { id: 'C', text: 'Take', translation: 'thực hiện' },
      { id: 'D', text: 'Go', translation: 'dùng go on a trip' }
    ],
    correctAnswer: 'C',
    explanation: '• Collocation chuẩn: "take a trip" (thực hiện một chuyến đi). Chọn C. Take.',
    translation: 'Thực hiện một chuyến đi để khám phá những viên ngọc ẩn giấu.',
    topicTag: 'Collocation'
  },
  {
    id: 'db-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_ADVENTURE,
    passageTranslation: PASSAGE_ADVENTURE_TRANS,
    questionText: 'Question 6. from choosing your dream destination (6) _____ finding the perfect itinerary.',
    options: [
      { id: 'A', text: 'for', translation: 'cho' },
      { id: 'B', text: 'in', translation: 'trong' },
      { id: 'C', text: 'to', translation: 'đến' },
      { id: 'D', text: 'by', translation: 'bởi' }
    ],
    correctAnswer: 'C',
    explanation: '• Cấu trúc nối khoảng/phạm vi: "from ... to ..." (từ việc này đến việc kia). Chọn C. to.',
    translation: 'Từ việc lựa chọn điểm đến mơ ước đến việc tìm ra lịch trình hoàn hảo.',
    topicTag: 'Cấu trúc From... To...'
  },
  {
    id: 'db-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_PUBLIC_SPEAKING,
    passageTranslation: PASSAGE_PUBLIC_SPEAKING_TRANS,
    questionText: 'Question 7. Here are (7) _____ practical tips to help you become a better speaker:',
    options: [
      { id: 'A', text: 'many', translation: 'nhiều' },
      { id: 'B', text: 'few', translation: 'rất ít' },
      { id: 'C', text: 'some', translation: 'một số / một vài' },
      { id: 'D', text: 'all', translation: 'tất cả' }
    ],
    correctAnswer: 'C',
    explanation: '• Dùng "some" (một vài/một số) tự nhiên nhất khi giới thiệu danh sách các mẹo hữu ích. Chọn C. some.',
    translation: 'Dưới đây là một số mẹo thực tế giúp bạn trở thành người nói tốt hơn.',
    topicTag: 'Từ định lượng'
  },
  {
    id: 'db-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_PUBLIC_SPEAKING,
    passageTranslation: PASSAGE_PUBLIC_SPEAKING_TRANS,
    questionText: 'Question 8. Before (8) _____, take time to plan your speech.',
    options: [
      { id: 'A', text: 'giving a presentation', translation: 'thuyết trình' },
      { id: 'B', text: 'making a decision', translation: 'ra quyết định' },
      { id: 'C', text: 'telling the truth', translation: 'nói sự thật' },
      { id: 'D', text: 'having a look', translation: 'xem qua' }
    ],
    correctAnswer: 'A',
    explanation: '• Collocation "give a presentation" = thực hiện bài thuyết trình/phát biểu. Chọn A.',
    translation: 'Trước khi thuyết trình, hãy dành thời gian lên kế hoạch cho bài nói.',
    topicTag: 'Collocation'
  },
  {
    id: 'db-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_PUBLIC_SPEAKING,
    passageTranslation: PASSAGE_PUBLIC_SPEAKING_TRANS,
    questionText: 'Question 9. (9) _____ useful tip is to practice in front of a mirror',
    options: [
      { id: 'A', text: 'Other', translation: 'Other + N số nhiều' },
      { id: 'B', text: 'Another', translation: 'Một mẹo khác' },
      { id: 'C', text: 'Others', translation: 'đại từ' },
      { id: 'D', text: 'The other', translation: 'cái còn lại trong bộ 2' }
    ],
    correctAnswer: 'B',
    explanation: '• "Another + danh từ số ít" -> "Another useful tip" (một mẹo hữu ích khác). Chọn B. Another.',
    translation: 'Một mẹo hữu ích khác là luyện tập trước gương.',
    topicTag: 'Phân biệt Another/Other'
  },
  {
    id: 'db-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_PUBLIC_SPEAKING,
    passageTranslation: PASSAGE_PUBLIC_SPEAKING_TRANS,
    questionText: 'Question 10. vary your tone of voice. (10) _____, reading directly from notes can make your speech less interesting.',
    options: [
      { id: 'A', text: 'At the same time', translation: 'đồng thời' },
      { id: 'B', text: 'with regard to', translation: 'liên quan đến' },
      { id: 'C', text: 'As a result of', translation: 'là kết quả của' },
      { id: 'D', text: 'On the other hand', translation: 'Mặt khác' }
    ],
    correctAnswer: 'D',
    explanation: '• Liên từ "On the other hand" dùng để chuyển ý đối lập giữa việc dùng cử chỉ ngữ điệu tích cực với việc đọc trực tiếp từ ghi chú. Chọn D.',
    translation: 'Mặt khác, việc đọc trực tiếp từ ghi chú có thể khiến bài nói kém hấp dẫn.',
    topicTag: 'Từ nối (Transition Words)'
  },
  {
    id: 'db-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_PUBLIC_SPEAKING,
    passageTranslation: PASSAGE_PUBLIC_SPEAKING_TRANS,
    questionText: 'Question 11. Take deep breaths and (11) _____ your message.',
    options: [
      { id: 'A', text: 'Taking up', translation: 'bắt đầu sở thích' },
      { id: 'B', text: 'fall apart', translation: 'sụp đổ' },
      { id: 'C', text: 'focus on', translation: 'tập trung vào' },
      { id: 'D', text: 'get over', translation: 'vượt qua' }
    ],
    correctAnswer: 'C',
    explanation: '• Phrasal verb "focus on something" = tập trung vào cái gì. Chọn C. focus on.',
    translation: 'Hãy hít thở sâu và tập trung vào thông điệp của bạn.',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'db-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_PUBLIC_SPEAKING,
    passageTranslation: PASSAGE_PUBLIC_SPEAKING_TRANS,
    questionText: 'Question 12. If needed, you can (12) _____ techniques from experienced speakers',
    options: [
      { id: 'A', text: 'lend', translation: 'cho mượn' },
      { id: 'B', text: 'hire', translation: 'thuê người/dịch vụ' },
      { id: 'C', text: 'rent', translation: 'thuê đồ/nhà' },
      { id: 'D', text: 'borrow', translation: 'học hỏi / mượn ý tưởng kỹ thuật' }
    ],
    correctAnswer: 'D',
    explanation: '• Động từ "borrow techniques" = học hỏi/mượn kỹ thuật từ những diễn giả kinh nghiệm. Chọn D. borrow.',
    translation: 'Bạn có thể học hỏi các kỹ thuật từ những diễn giả giàu kinh nghiệm.',
    topicTag: 'Từ vựng'
  },
  {
    id: 'db-q13',
    type: 'reordering',
    questionText: 'Question 13. Choose the best arrangement of the sentences to make a meaningful conversation:\nc. Nam: Hi, Linh! Long time no see. Your phone looks new!\nb. Linh: Thanks, Nam! I’ve been learning how to use a new app on my phone.\na. Nam: That’s nice! Learning new apps is fun.',
    options: [
      { id: 'A', text: 'c – b – a', translation: 'c-b-a' },
      { id: 'B', text: 'a – b – c', translation: 'a-b-c' },
      { id: 'C', text: 'c – a – b', translation: 'c-a-b' },
      { id: 'D', text: 'a – c – b', translation: 'a-c-b' }
    ],
    correctAnswer: 'A',
    explanation: '• c (Nam chào Linh & khen điện thoại mới) -> b (Linh cảm ơn & bảo đang học app mới) -> a (Nam khen hay). Trật tự: c - b - a. Chọn A.',
    translation: 'Sắp xếp hội thoại điện thoại mới.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'db-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the best arrangement of the sentences to make a meaningful conversation:\na. Linh: I’m helping my dad wash the car this afternoon.\nb. Minh: That sounds fun! What kind of car do you have?\ne. Minh: My dad bought a VF3 last month. It is an electric car.\nc. Minh: Oh, nice! Do you often do things together with your family?\nd. Linh: Yes, we try to do something together every weekend. I really enjoy it.',
    options: [
      { id: 'A', text: 'a – c – e – b – d', translation: 'a-c-e-b-d' },
      { id: 'B', text: 'a – b – e – c – d', translation: 'a-b-e-c-d' },
      { id: 'C', text: 'b – a – c – d – e', translation: 'b-a-c-d-e' },
      { id: 'D', text: 'd – e – a – b – c', translation: 'd-e-a-b-c' }
    ],
    correctAnswer: 'B',
    explanation: '• a (Linh giúp bố rửa xe) -> b (Minh hỏi loại xe gì) -> e (Minh kể bố mua xe điện VF3) -> c (Minh hỏi thói quen sinh hoạt gia đình) -> d (Linh trả lời hay làm cùng nhau cuối tuần). Trật tự: a - b - e - c - d. Chọn B.',
    translation: 'Sắp xếp hội thoại rửa xe gia đình.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'db-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the best arrangement of the sentences to form a complete email:\na. Thanks for inviting me to your birthday party. It was so much fun!\nb. I really enjoyed meeting your friends and spending time with everyone.\nc. Also, the decorations and food were amazing! Did you make the cake yourself?\ne. Hope you had as much fun as I did!\nd. I\'m looking forward to our next gathering. Let me know when you’re free.',
    options: [
      { id: 'A', text: 'a – c – b – e – d', translation: 'a-c-b-e-d' },
      { id: 'B', text: 'a – b – c – e – d', translation: 'a-b-c-e-d' },
      { id: 'C', text: 'd – e – a – b – c', translation: 'd-e-a-b-c' },
      { id: 'D', text: 'e – c – b – d – a', translation: 'e-c-b-d-a' }
    ],
    correctAnswer: 'B',
    explanation: '• a cảm ơn lời mời dự tiệc sinh nhật -> b kể việc thích gặp bạn bè -> c khen đồ trang trí và đồ ăn -> e chúc bạn cũng vui -> d hẹn lần gặp tới. Trật tự: a - b - c - e - d. Chọn B.',
    translation: 'Sắp xếp thư cảm ơn sinh nhật.',
    topicTag: 'Sắp xếp thư cá nhân'
  },
  {
    id: 'db-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the best arrangement of the sentences to form a coherent story:\nd. Arnel Pineda was born in Sampaloc, Manila, the Philippines in 1967, and he is an inspiring person.\nc. He has been passionate about singing since he was five years old and has achieved great success as a professional singer.\nb. In 1982, at the age of fifteen, he joined a local band as a lead singer, singing pop songs by famous bands.\na. Arnel didn’t make much money this way, but he never gave up on his passion.\ne. Arnel’s success shows that anyone can achieve their dreams if they try hard enough.',
    options: [
      { id: 'A', text: 'd – c – b – a – e', translation: 'd-c-b-a-e' },
      { id: 'B', text: 'a – b – c – d – e', translation: 'a-b-c-d-e' },
      { id: 'C', text: 'b – c – d – a – e', translation: 'b-c-d-a-e' },
      { id: 'D', text: 'c – a – d – b – e', translation: 'c-a-d-b-e' }
    ],
    correctAnswer: 'A',
    explanation: '• d mở đoạn giới thiệu Arnel Pineda -> c niềm đam mê từ năm 5 tuổi -> b mốc năm 1982 gia nhập ban nhạc -> a khó khăn không kiếm nhiều tiền nhưng không bỏ cuộc -> e kết luận thông điệp truyền cảm hứng. Trật tự: d - c - b - a - e. Chọn A.',
    translation: 'Sắp xếp đoạn văn tiểu sử Arnel Pineda.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'db-q17',
    type: 'reordering',
    questionText: 'Question 17. Choose the best arrangement of sentences to describe a chart:\nd. The chart shows how the populations of three major cities in the USA changed from 1950 to 2010. These cities are Atlanta, Charlotte, and New Orleans.\ne. In general, the population in each city increased over the 60-year period.\nb. During this time, Atlanta had the most significant change in population. The population of Atlanta in 1950 was around 500 thousand, and it rose significantly to 2.2 million by 1990.\nc. Similarly, Charlotte\'s population went up over the 60-year period. It grew steadily from 100 thousand to 500 thousand between 1950 and 1990.\na. The population of New Orleans had some fluctuation between 1950 and 2010. It had a slight growth between 1950 and 1970.',
    options: [
      { id: 'A', text: 'd – b – c – e – a', translation: 'd-b-c-e-a' },
      { id: 'B', text: 'd – c – a – b – e', translation: 'd-c-a-b-e' },
      { id: 'C', text: 'd – a – e – b – c', translation: 'd-a-e-b-c' },
      { id: 'D', text: 'd – e – b – c – a', translation: 'd-e-b-c-a' }
    ],
    correctAnswer: 'D',
    explanation: '• d mở đầu giới thiệu biểu đồ 3 thành phố Mỹ -> e câu tổng quan xu hướng chung tăng -> b phân tích chi tiết Atlanta -> c tương tự phân tích Charlotte -> a mô tả thành phố cuối New Orleans. Trật tự: d - e - b - c - a. Chọn D.',
    translation: 'Sắp xếp mô tả biểu đồ dân số: Giới thiệu',
    topicTag: 'Sắp xếp mô tả biểu đồ'
  },
  {
    id: 'db-q18',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOPHIA,
    passageTranslation: PASSAGE_SOPHIA_TRANS,
    questionText: 'Question 18. Sophia, as an example, (18) _____.',
    options: [
      { id: 'A', text: 'of which the activation was launched on Valentine\'s Day, 2016', translation: 'mệnh đề quan hệ lửng' },
      { id: 'B', text: 'was first activated on Valentine\'s Day in 2016', translation: 'được kích hoạt lần đầu vào Ngày Lễ Tình Nhân năm 2016 (vị ngữ chính)' },
      { id: 'C', text: 'that had her first Valentine\'s activation launched in 2016', translation: 'thiếu vị ngữ' },
      { id: 'D', text: 'having been initially activated on Valentine\'s Day, 2016', translation: 'cụm phân từ' }
    ],
    correctAnswer: 'B',
    explanation: '• Sau chủ ngữ "Sophia, as an example," cần một vị ngữ động từ chính: "was first activated...". Chọn B.',
    translation: 'Sophia, chẳng hạn, được kích hoạt lần đầu vào Ngày Lễ Tình Nhân năm 2016.',
    topicTag: 'Cấu trúc Vị ngữ'
  },
  {
    id: 'db-q19',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOPHIA,
    passageTranslation: PASSAGE_SOPHIA_TRANS,
    questionText: 'Question 19. created by a Hong Kong-based company (19) _____.',
    options: [
      { id: 'A', text: 'whose combined efforts in AI research, engineering, and design have given birth to robots', translation: 'mà những nỗ lực kết hợp trong nghiên cứu AI, kỹ thuật và thiết kế đã tạo nên các robot' },
      { id: 'B', text: 'succeeded in bringing robots to life', translation: 'thiếu nối' },
      { id: 'C', text: 'brought robots to life thanks to its accomplishments', translation: 'thiếu nối' },
      { id: 'D', text: 'of which the joint efforts in AI research', translation: 'gượng gạo' }
    ],
    correctAnswer: 'A',
    explanation: '• Mệnh đề quan hệ sở hữu "whose combined efforts... Have given birth to robots" bổ nghĩa cho danh từ "company". Chọn A.',
    translation: 'Được tạo ra bởi công ty mà những nỗ lực kết hợp đã tạo nên các robot.',
    topicTag: 'Mệnh đề quan hệ sở hữu'
  },
  {
    id: 'db-q20',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOPHIA,
    passageTranslation: PASSAGE_SOPHIA_TRANS,
    questionText: 'Question 20. advancement in the field of robotics and artificial intelligence. (20) _____.',
    options: [
      { id: 'A', text: 'She has been designed to assist humans in healthcare, customer support, and education', translation: 'Cô được thiết kế nhằm hỗ trợ con người trong lĩnh vực chăm sóc sức khỏe, dịch vụ khách hàng và giáo dục' },
      { id: 'B', text: 'People in the fields of healthcare, customer service, and education helped create Sophia', translation: 'chuyển chủ ngữ sai' },
      { id: 'C', text: 'Intending to aid humans in healthcare, Sophia was developed', translation: 'lỗi dangling modifier' },
      { id: 'D', text: 'The assistance in customer support led to the creation of Sophia', translation: 'logic gượng gạo' }
    ],
    correctAnswer: 'A',
    explanation: '• A giới thiệu mục đích thiết kế của robot Sophia một cách tự nhiên và mạch lạc. Chọn A.',
    translation: 'Cô được thiết kế nhằm hỗ trợ con người trong chăm sóc sức khỏe, dịch vụ khách hàng và giáo dục.',
    topicTag: 'Điền câu hoàn thành đoạn'
  },
  {
    id: 'db-q21',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOPHIA,
    passageTranslation: PASSAGE_SOPHIA_TRANS,
    questionText: 'Question 21. inspired by both Audrey Hepburn and the creator\'s wife. (21) _____.',
    options: [
      { id: 'A', text: 'Without cameras and microphones working as her eyes and ears, she could hear and see like humans', translation: 'sai nghĩa' },
      { id: 'B', text: 'Her eyes and ears work as cameras and microphones', translation: 'ngược nghĩa' },
      { id: 'C', text: 'She has cameras for eyes and microphones for ears, allowing her to see and hear like a human', translation: 'Cô có camera thay cho đôi mắt và micro thay cho đôi tai, cho phép nhìn và nghe như con người' },
      { id: 'D', text: 'Using cameras and microphones for eyes and ears, they allow her to see and hear', translation: 'Sử dụng máy ảnh và micro làm mắt và tai, cho phép cô nhìn và nghe' }
    ],
    correctAnswer: 'C',
    explanation: '• C mô tả đúng cấu tạo mắt/tai của robot Sophia chuẩn ngữ pháp và nghĩa. Chọn C.',
    translation: 'Cô có camera thay cho đôi mắt và micro thay cho đôi tai, cho phép nhìn và nghe như con người.',
    topicTag: 'Điền câu hoàn thành đoạn'
  },
  {
    id: 'db-q22',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOPHIA,
    passageTranslation: PASSAGE_SOPHIA_TRANS,
    questionText: 'Question 22. Equipped with machine learning algorithms, (22) _____.',
    options: [
      { id: 'A', text: 'Sophia can understand human speech and interact with people', translation: 'Sophia có thể hiểu lời nói của con người và tương tác với mọi người' },
      { id: 'B', text: 'human speech and interaction are becoming so easy to Sophia', translation: 'sai chủ ngữ' },
      { id: 'C', text: 'the machine can help Sophia speak and interact with humans', translation: 'không tự nhiên' },
      { id: 'D', text: 'interaction in speech between Sophia and humans takes place', translation: 'sai chủ ngữ' }
    ],
    correctAnswer: 'A',
    explanation: '• Rút gọn phân từ "Equipped with..." đòi hỏi chủ ngữ vế sau phải là "Sophia". Chọn A.',
    translation: 'Được trang bị thuật toán học máy, Sophia có thể hiểu lời nói của con người và tương tác với mọi người.',
    topicTag: 'Rút gọn mệnh đề phân từ'
  },
  {
    id: 'db-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TEEN_INDEPENDENCE,
    passageTranslation: PASSAGE_TEEN_INDEPENDENCE_TRANS,
    questionText: 'Question 23. Which of the following best paraphrases the underlined sentence in paragraph 2?',
    options: [
      { id: 'A', text: 'Teenagers often make decisions carefully, considering all the possible outcomes.', translation: 'Cẩn trọng' },
      { id: 'B', text: 'Teenagers are likely to make fast decisions without considering the results.', translation: 'Thanh thiếu niên có xu hướng đưa ra quyết định nhanh chóng mà không cân nhắc hậu quả' },
      { id: 'C', text: 'Teenagers always think deeply before making their important decisions.', translation: 'Suy nghĩ thấu đáo' },
      { id: 'D', text: 'Teenagers sometimes prefer to make decisions slowly and deliberately.', translation: 'Chậm rãi' }
    ],
    correctAnswer: 'B',
    explanation: '• B paraphrase chính xác câu "Teenagers are prone to make quick decisions without thinking about the consequences" (prone to = likely to, quick = fast, without thinking = without considering results). Chọn B.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'db-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TEEN_INDEPENDENCE,
    passageTranslation: PASSAGE_TEEN_INDEPENDENCE_TRANS,
    questionText: 'Question 24. The word "bolsters" in paragraph 3 could be best replaced by:',
    options: [
      { id: 'A', text: 'weakens', translation: 'làm suy yếu' },
      { id: 'B', text: 'supports', translation: 'hỗ trợ / củng cố' },
      { id: 'C', text: 'confuses', translation: 'làm bối rối' },
      { id: 'D', text: 'ignores', translation: 'phớt lờ' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "bolsters" (củng cố, tăng cường) = supports. Chọn B. supports.',
    translation: 'Từ "bolsters" trong đoạn 3 có nghĩa gần nhất với:',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'db-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TEEN_INDEPENDENCE,
    passageTranslation: PASSAGE_TEEN_INDEPENDENCE_TRANS,
    questionText: 'Question 25. The word "overwhelming" in paragraph 4 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'insignificant', translation: 'không đáng kể' },
      { id: 'B', text: 'impossible', translation: 'không thể' },
      { id: 'C', text: 'manageable', translation: 'có thể xử lý / kiểm soát được' },
      { id: 'D', text: 'important', translation: 'quan trọng' }
    ],
    correctAnswer: 'C',
    explanation: '• Từ "overwhelming" = gây choáng ngợp, quá tải. Trái nghĩa với nó là "manageable" (có thể xử lý/kiểm soát được). Chọn C.',
    translation: 'Từ "overwhelming" trong đoạn 4 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'db-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TEEN_INDEPENDENCE,
    passageTranslation: PASSAGE_TEEN_INDEPENDENCE_TRANS,
    questionText: 'Question 26. The word "them" in paragraph 4 refers to:',
    options: [
      { id: 'A', text: 'solutions', translation: 'các giải pháp (discuss them with you' },
      { id: 'B', text: 'teenagers', translation: 'thanh thiếu niên' },
      { id: 'C', text: 'ideas', translation: 'ý tưởng' },
      { id: 'D', text: 'experiences', translation: 'trải nghiệm' }
    ],
    correctAnswer: 'A',
    explanation: '• Trong câu "...look at different solutions and discuss them with you", "them" thay thế cho "solutions". Chọn A.',
    translation: 'Từ "them" ở đoạn 4 chỉ: solutions (các giải pháp).',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'db-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TEEN_INDEPENDENCE,
    passageTranslation: PASSAGE_TEEN_INDEPENDENCE_TRANS,
    questionText: 'Question 27. Which of the following is NOT mentioned in the reading text?',
    options: [
      { id: 'A', text: 'Teenagers need more privacy as they become bigger and maturer.', translation: 'Thanh thiếu niên cần nhiều quyền riêng tư hơn' },
      { id: 'B', text: 'Parents should guide teenagers when they make quick decisions.', translation: 'Cha mẹ nên định hướng' },
      { id: 'C', text: 'Social media and friendship problems can impact teenagers.', translation: 'Vấn đề mạng xã hội và tình bạn ảnh hưởng thanh thiếu niên' },
      { id: 'D', text: 'Teenagers should be given unlimited freedom in making decisions.', translation: 'Thanh thiếu niên nên được trao tự do không giới hạn trong quyết định' }
    ],
    correctAnswer: 'D',
    explanation: '• Bài viết KHÔNG hề nói trao tự do "không giới hạn" (unlimited freedom); trái lại bài viết khuyên cha mẹ vẫn cần giám sát và hướng dẫn. Chọn D.',
    translation: 'Chi tiết nào sau đây KHÔNG được đề cập trong đoạn văn?',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'db-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TEEN_INDEPENDENCE,
    passageTranslation: PASSAGE_TEEN_INDEPENDENCE_TRANS,
    questionText: 'Question 28. Which of the following statements is TRUE based on the passage?',
    options: [
      { id: 'A', text: 'Teenagers should never make decisions without adult supervision.', translation: 'Không bao giờ nên tự quyết định' },
      { id: 'B', text: 'Parents should ignore their teenager\'s concerns about friendship conflicts.', translation: 'Phớt lờ lo lắng' },
      { id: 'C', text: 'Supporting teenagers\' choices can help them develop independence.', translation: 'Ủng hộ lựa chọn của thanh thiếu niên giúp các em phát triển tính tự lập' },
      { id: 'D', text: 'Teenagers should not be allowed to make any choices on their own.', translation: 'Không được phép tự chọn' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 3 khẳng định: "Supporting your teenager\'s choices fosters their independence". Chọn C.',
    translation: 'Phát biểu nào sau đây ĐÚNG theo bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin TRUE'
  },
  {
    id: 'db-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TEEN_INDEPENDENCE,
    passageTranslation: PASSAGE_TEEN_INDEPENDENCE_TRANS,
    questionText: 'Question 29. In which paragraph does the writer mention the need to be independent?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 1 định nghĩa sự tự lập và tầm quan trọng của nó đối với người trẻ. Chọn A (Paragraph 1).',
    translation: 'Đoạn nào đề cập đến nhu cầu trở nên tự lập?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'db-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_TEEN_INDEPENDENCE,
    passageTranslation: PASSAGE_TEEN_INDEPENDENCE_TRANS,
    questionText: 'Question 30. In which paragraph does the writer mention the importance assisting teenagers in understanding and learning from their mistakes?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 3 đề cập: "This approach encourages your child to accept the responsibility for their choices and learn from their mistakes". Chọn C (Paragraph 3).',
    translation: 'Đoạn nào nhấn mạnh việc giúp thanh thiếu niên rút ra bài học từ sai lầm?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'db-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 31. Where in paragraph 1 does the sentence "Night shift workers with their tireless efforts, have become indispensable to the global economy ever since." best fit?',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'D',
    explanation: '• Vị trí [IV] nằm ở cuối đoạn 1, chốt lại sự phát triển lịch sử từ thời cổ đại chuyển giao sang Cách mạng Công nghiệp thế kỷ XIX. Chọn D ([IV]).',
    translation: 'Câu trên phù hợp nhất ở vị trí: [IV].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'db-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 32. The word "them" in paragraph 1 refers to:',
    options: [
      { id: 'A', text: 'nomadic groups', translation: 'các bộ tộc du mục' },
      { id: 'B', text: 'dangers', translation: 'mối nguy hiểm' },
      { id: 'C', text: 'group members', translation: 'thành viên trong nhóm' },
      { id: 'D', text: 'cities', translation: 'thành phố' }
    ],
    correctAnswer: 'C',
    explanation: '• Trong câu "only a few of them took turns staying awake...", "them" thay thế cho "members" (thành viên trong nhóm). Chọn C.',
    translation: 'Từ "them" trong đoạn 1 quy chiếu đến từ / ý nào?',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'db-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 33. The word "facilitated" in paragraph 2 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'encouraged', translation: 'khuyến khích' },
      { id: 'B', text: 'assisted', translation: 'hỗ trợ' },
      { id: 'C', text: 'ended', translation: 'chấm dứt' },
      { id: 'D', text: 'prevented', translation: 'ngăn cản / cản trở' }
    ],
    correctAnswer: 'D',
    explanation: '• Từ "facilitated" = tạo điều kiện thuận lợi, thúc đẩy. Trái nghĩa với nó là "prevented" (ngăn cản/cản trở). Chọn D. prevented.',
    translation: 'Từ "facilitated" trong đoạn 2 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'db-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 34. According to paragraph 2, which of the following is NOT a job that requires night shifts?',
    options: [
      { id: 'A', text: 'factory workers', translation: 'công nhân nhà máy' },
      { id: 'B', text: 'train mechanics', translation: 'thợ máy/kỹ thuật viên tàu hỏa' },
      { id: 'C', text: 'nurses', translation: 'y tá' },
      { id: 'D', text: 'lorry drivers', translation: 'tài xế xe tải' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 2 nhắc đến "train drivers" (tài xế tàu hỏa) chứ KHÔNG nhắc đến "train mechanics" (thợ máy tàu hỏa). Chọn B.',
    translation: 'Công việc KHÔNG được đề cập yêu cầu làm ca đêm ở đoạn 2: Thợ máy tàu hỏa.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'db-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 35. The phrase "night owls" in paragraph 3 could be best replaced by:',
    options: [
      { id: 'A', text: 'those who have no difficulty sleeping at night', translation: 'không khó ngủ ban đêm' },
      { id: 'B', text: 'those who rarely work night shifts', translation: 'hiếm khi làm ca đêm' },
      { id: 'C', text: 'those who enjoy staying up through the night', translation: 'những người thích thức khuya / hoạt động hiệu quả về đêm' },
      { id: 'D', text: 'those who are obligated to work all night', translation: 'buộc phải làm suốt đêm' }
    ],
    correctAnswer: 'C',
    explanation: '• Cụm từ "night owls" (cú đêm) chỉ những người có thói quen thích thức khuya hoặc hoạt động tốt vào ban đêm = those who enjoy staying up through the night. Chọn C.',
    translation: 'Cụm từ "night owls" trong đoạn 3 có nghĩa gần nhất với:',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'db-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 36. Which of the following best summarises paragraph 3?',
    options: [
      { id: 'A', text: 'Night-shift workers played a key role in the Industrial revolution.', translation: 'Vai trò then chốt thế kỷ XIX' },
      { id: 'B', text: 'Electric lighting contributed to the increasing role of night-shift workers.', translation: 'Hệ thống chiếu sáng điện' },
      { id: 'C', text: 'The rise of new factories required new types of work schedules in the 19th and 20th centuries.', translation: 'Sự xuất hiện của các nhà máy mới đòi hỏi những hình thức tổ chức thời gian làm việc mới trong thế kỷ 19 và 20' },
      { id: 'D', text: 'Economic expansion and technological advancements led to a higher demand.', translation: 'Mở rộng kinh tế' }
    ],
    correctAnswer: 'C',
    explanation: '• C tóm tắt bao quát chuẩn nhất nội dung đoạn 3 về việc các nhà máy và máy móc mới đòi hỏi hình thức tổ chức ca làm việc trong thế kỷ XIX và XX. Chọn C.',
    translation: 'Tóm tắt đúng nhất đoạn 3: Sự xuất hiện các nhà máy mới đòi hỏi hình thức ca làm việc mới trong thế kỷ 19 và 20.',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn'
  },
  {
    id: 'db-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 37. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Night-shifts first started during the Industrial Revolution in the 19th century.', translation: 'Lần đầu xuất hiện thế kỷ 19' },
      { id: 'B', text: 'Shift work first became more common because more employees were needed to supervise machines.', translation: 'Làm việc theo ca trở nên phổ biến hơn vì cần nhiều lao động để vận hành giám sát máy móc' },
      { id: 'C', text: 'It is not compulsory for night-shift drivers to drive longer than four hours non-stop.', translation: 'Không bắt buộc' },
      { id: 'D', text: 'Type 2 diabetes is the most common health condition in night-shift workers.', translation: 'Tiểu đường là phổ biến nhất' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 2 nêu: "complex machinery requiring constant operation to maximise productivity..." -> Cần nhiều lao động làm ca để vận hành máy móc. Chọn B.',
    translation: 'Phát biểu nào sau đây ĐÚNG theo bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin TRUE'
  },
  {
    id: 'db-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 38. Which of the following best paraphrases the underlined sentence in paragraph 5?',
    options: [
      { id: 'A', text: 'To maintain 24/7 operations and ensure uninterrupted service delivery in many sectors, night shift work is crucial.', translation: 'Để duy trì hoạt động 24/7 và bảo đảm việc cung cấp dịch vụ không bị gián đoạn, làm ca đêm là vô cùng cần thiết' },
      { id: 'B', text: 'Night shift work is essential in jobs related to maintenance and service delivery in different industries.', translation: 'Thu hẹp phạm vi' },
      { id: 'C', text: '24/7 operations and services in many sectors are crucial for night shift workers.', translation: 'Sai ý' },
      { id: 'D', text: 'Night shift work has the most contributions to maintain 24/7 operations.', translation: 'Phóng đại' }
    ],
    correctAnswer: 'A',
    explanation: '• A paraphrase hoàn hảo: "round-the-clock operation" = 24/7 operations, "uninterrupted service delivery" = uninterrupted service delivery, "indispensable" = crucial. Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'db-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 39. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'There are certain rules that ensure the effectiveness of shift work.', translation: 'Có những quy định nhất định nhằm bảo đảm hiệu quả và giảm rủi ro của hình thức làm ca' },
      { id: 'B', text: 'Shift work doesn’t allow employees to work efficiently.', translation: 'Không cho phép làm hiệu quả' },
      { id: 'C', text: 'Shift work is very common in all age groups.', translation: 'Phổ biến ở mọi lứa tuổi' },
      { id: 'D', text: 'The night shift is among the most common causes of sleep problems.', translation: 'Nguyên nhân phổ biến nhất' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 4 suy luận từ việc bài đọc nêu các quy định (nghỉ giải lao, giới hạn 4h lái xe) để giải quyết vấn đề và đảm bảo an toàn hiệu quả. Chọn A.',
    translation: 'Suy luận đúng từ bài đọc: Có những quy định nhất định nhằm bảo đảm hiệu quả của việc làm ca.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'db-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NIGHT_SHIFTS,
    passageTranslation: PASSAGE_NIGHT_SHIFTS_TRANS,
    questionText: 'Question 40. Which of the following best summarizes the passage?',
    options: [
      { id: 'A', text: 'Shift work has become increasingly important since the Industrial Revolution, but it comes with significant health issues and social drawbacks.', translation: 'Làm việc theo ca ngày càng trở nên quan trọng kể từ Cách mạng Công nghiệp, nhưng đi kèm với đó là những vấn đề đáng kể về sức khỏe và xã hội' },
      { id: 'B', text: 'To deal with the drawbacks of shift work, employers and employees must implement strategies.', translation: 'Chỉ tóm tắt giải pháp' },
      { id: 'C', text: 'Although shift work is essential for maintaining 24/7 operations, it disrupts natural sleep patterns.', translation: 'Chỉ tóm tắt sức khỏe' },
      { id: 'D', text: 'Shift work, a modern phenomenon, has revolutionized the world’s economy.', translation: 'Phóng đại quá mức' }
    ],
    correctAnswer: 'A',
    explanation: '• A tóm tắt cân bằng và trọn vẹn nhất toàn bộ lịch sử, tầm quan trọng và các tác hại/thách thức của lao động ca đêm. Chọn A.',
    translation: 'Tóm tắt toàn bài: Làm việc theo ca ngày càng quan trọng từ Cách mạng Công nghiệp nhưng đi kèm vấn đề sức khỏe và xã hội.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  }
];

export const DIEN_BIEN_2026_EXAM: ExamSet = {
  id: 'exam-dien-bien-2026',
  title: 'Đề Thi Thử Tốt Nghiệp THPT 2026 - THPT Điện Biên Phủ (Lần 1)',
  description: 'Đề thi thử chính thức môn Tiếng Anh tốt nghiệp THPT 2026 của Trường THPT Điện Biên Phủ (Sở GD-ĐT Điện Biên) gồm 40 câu trắc nghiệm kèm đáp án và lời giải chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'THPT ĐIỆN BIÊN PHỦ 2026',
  iconName: 'Compass',
  questions: DIEN_BIEN_2026_QUESTIONS
};
