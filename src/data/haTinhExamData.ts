import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_WORKSHOP = `Social Media Skills Workshop for Teens
Are you worried about spending too much time online? Join our Social Media Skills Workshop designed especially for high school students:
• Offer a <mark>(1) ____________</mark> solution to help you use social media wisely and safely.
• Help you <mark>(2) ____________</mark> healthy online habits and manage your screen time better.
• Lessons <mark>(3) ____________</mark> by digital experts provide practical tips and real-life situations.
• With <mark>(4) ____________</mark> useful advice and interactive activities, students can understand both the benefits and risks of social networks.
• Have the chance to make <mark>(5) ____________</mark> in your communication and critical thinking skills.
• After the course, you will feel <mark>(6) ____________</mark> and more confident when using social media platforms.`;

const PASSAGE_WORKSHOP_TRANS = `Hội thảo Kỹ năng Mạng xã hội dành cho Thanh thiếu niên
Bạn có lo lắng về việc dành quá nhiều thời gian trực tuyến không? Hãy tham gia Hội thảo Kỹ năng Mạng xã hội được thiết kế đặc biệt cho học sinh trung học:
• Cung cấp một giải pháp thiết thực (1) để giúp bạn sử dụng mạng xã hội một cách khôn ngoan và an toàn.
• Giúp bạn hình thành (2) những thói quen trực tuyến lành mạnh và quản lý thời gian sử dụng màn hình tốt hơn.
• Các bài học được chuẩn bị (3) bởi các chuyên gia kỹ thuật số cung cấp những mẹo thực tế và các tình huống trong đời sống.
• Với một lượng lớn (4) lời khuyên hữu ích và các hoạt động tương tác, học sinh có thể hiểu rõ cả lợi ích lẫn rủi ro của mạng xã hội.
• Có cơ hội đạt được sự tiến bộ (5) trong kỹ năng giao tiếp và tư duy phản biện của bạn.
• Sau khóa học, bạn sẽ cảm thấy an toàn hơn (6) và tự tin hơn khi sử dụng các nền tảng mạng xã hội.`;

const PASSAGE_SMART_LEARNING = `Smart Learning in the Digital Age
Feeling stressed about exams and constant online distractions? Many students spend hours scrolling through social media; <mark>(7) ____________</mark>, this habit can reduce concentration and academic performance. Our new leaflet introduces practical strategies to help teenagers study more effectively. The school has recently launched an advanced <mark>(8) ____________</mark> to support independent learning and skill development. Although there is <mark>(9) ____________</mark> time left before the final tests, small improvements can still lead to meaningful results. Students are encouraged to talk <mark>(10) ____________</mark> teachers if they face academic pressure. The leaflet also offers professional <mark>(11) ____________</mark> to enhance critical thinking skills. Remember, when challenges appear, every cloud has a silver <mark>(12) ____________</mark>.`;

const PASSAGE_SMART_LEARNING_TRANS = `Học tập Thông minh trong Kỷ nguyên Số
Bạn có đang cảm thấy căng thẳng vì các kỳ thi và những sự xao nhãng liên tục từ Internet không? Nhiều học sinh dành hàng giờ để lướt mạng xã hội; tuy nhiên (7), thói quen này có thể làm giảm sự tập trung và kết quả học tập. Tờ rơi mới của chúng tôi giới thiệu những chiến lược thực tế giúp thanh thiếu niên học tập hiệu quả hơn. Nhà trường gần đây đã triển khai một hệ thống hỗ trợ học tập trực tuyến (8) tiên tiến nhằm hỗ trợ việc học độc lập và phát triển kỹ năng. Mặc dù chỉ còn rất ít (9) thời gian trước các kỳ thi cuối kỳ, những cải thiện nhỏ vẫn có thể dẫn đến những kết quả đáng kể. Học sinh được khuyến khích trao đổi với (10) giáo viên nếu các em gặp áp lực học tập. Tờ rơi cũng đưa ra sự hướng dẫn (11) chuyên nghiệp để nâng cao kỹ năng tư duy phản biện. Hãy nhớ rằng, khi khó khăn xuất hiện, trong cái rủi có cái may (12).`;

const PASSAGE_EV_TRANSITION = `An increasing number of people are transitioning from gas-powered cars to electric vehicles in pursuit of a greener planet. <mark>(18) ____________</mark>, but they still have a few disadvantages. In comparison with EVs, gas-powered vehicles generally cause harm to our planet. First, burning fossil fuels <mark>(19) ____________</mark>, causing toxic smog. Besides, gas-powered vehicles release gases that trap heat, making the whole planet warmer. The bigger the amount of trapped heat, <mark>(20) ____________</mark>, which could cause extreme weather conditions. Electric vehicles have their own limitations. <mark>(21) ____________</mark> that come from mines. Mining can devastate the local environment and sometimes lead to harsh working conditions for mine workers. Moreover, EVs only are completely eco-friendly <mark>(22) ____________</mark> like wind and solar power. EVs also have a serious disadvantage in their battery. On one charge, many EVs can’t travel as far as a typical gas powered car on a full tank. In conclusion, while the transition from gas-powered vehicles to EVs is strongly encouraged, addressing the current limitations of EVs is essential for a sustainable green future.`;

const PASSAGE_EV_TRANSITION_TRANS = `Ngày càng có nhiều người chuyển từ xe chạy bằng xăng sang xe điện nhằm hướng tới một hành tinh xanh hơn. Xe điện ngày càng trở nên hiệu quả hơn (18), nhưng chúng vẫn còn một vài nhược điểm. So với xe điện, các phương tiện chạy bằng xăng nói chung gây hại cho hành tinh của chúng ta. Trước hết, việc đốt nhiên liệu hóa thạch thải ra các chất ô nhiễm có hại vào không khí (19), gây ra khói mù độc hại. Bên cạnh đó, các phương tiện chạy bằng xăng giải phóng những loại khí giữ nhiệt, khiến toàn bộ hành tinh trở nên nóng hơn. Lượng nhiệt bị giữ lại càng lớn thì Trái Đất càng trở nên nóng hơn (20), điều này có thể gây ra những điều kiện thời tiết cực đoan. Xe điện cũng có những hạn chế riêng. Việc sản xuất pin cho xe điện đòi hỏi các vật liệu đặc biệt (21) được khai thác từ các mỏ. Hoạt động khai thác mỏ có thể tàn phá môi trường địa phương và đôi khi dẫn đến điều kiện làm việc khắc nghiệt cho công nhân mỏ. Hơn nữa, xe điện chỉ hoàn toàn thân thiện với môi trường với điều kiện nguồn điện mà chúng sử dụng đến từ các nguồn năng lượng tái tạo (22) như gió và năng lượng mặt trời. Xe điện cũng có một nhược điểm nghiêm trọng ở pin của chúng. Với một lần sạc, nhiều xe điện không thể đi được xa bằng một chiếc xe chạy xăng thông thường với một bình nhiên liệu đầy. Tóm lại, mặc dù việc chuyển đổi từ các phương tiện chạy bằng xăng sang xe điện được khuyến khích mạnh mẽ, nhưng việc giải quyết những hạn chế hiện tại của xe điện là điều cần thiết để hướng tới một tương lai xanh bền vững.`;

const PASSAGE_URBANIZATION = `Throughout history, human populations have grown steadily. As societies <mark>expanded</mark>, people began forming larger communities, eventually leading to the development of cities. The shift from rural to urban living has been significantly influenced by industrialization. The Industrial Revolution, which began in the 18th century, marked a turning point in urban growth, as people moved to cities in search of better job opportunities and improved living conditions.

Today, urbanization continues at an <mark>unprecedented</mark> rate. More than half of the global population now resides in urban areas, and this number is expected to rise. Developing nations, in particular, are experiencing rapid urban growth due to advancements in technology, infrastructure, and economic opportunities. However, with the benefits of <mark>this</mark> process come significant challenges, such as overcrowding, pollution, and inadequate public services.

One major consequence of urbanization is the rise of megacities—cities with over 10 million residents. These massive urban centers, such as Mumbai, São Paulo, and New York City, often struggle with housing shortages, traffic congestion, and environmental degradation. Additionally, urban sprawl, the uncontrolled expansion of cities into surrounding rural areas, has led to deforestation and increased reliance on automobiles, contributing to air pollution and climate change.

Despite these challenges, urbanization also offers numerous advantages. Cities provide better access to education, healthcare, and cultural experiences. <mark>Economic growth is often concentrated in urban areas, leading to higher wages and improved standards of living for many people.</mark> Governments and urban planners are continuously working on sustainable solutions, such as green spaces, efficient public transport systems, and smart city technologies, to ensure that urbanization remains beneficial for future generations.

As the world’s population continues to grow, the future of urbanization depends on effective planning and innovative solutions. Finding a balance between development and sustainability will be crucial in shaping livable and resilient cities for the future.`;

const PASSAGE_URBANIZATION_TRANS = `Trong suốt chiều dài lịch sử, dân số loài người đã tăng trưởng một cách ổn định. Khi các xã hội mở rộng, con người bắt đầu hình thành những cộng đồng lớn hơn, cuối cùng dẫn đến sự ra đời và phát triển của các thành phố. Sự chuyển dịch từ đời sống nông thôn sang đô thị chịu ảnh hưởng mạnh mẽ của quá trình công nghiệp hóa. Cuộc Cách mạng Công nghiệp, bắt đầu vào thế kỷ XVIII, đã đánh dấu một bước ngoặt quan trọng trong sự phát triển của đô thị, khi người dân di chuyển đến các thành phố để tìm kiếm cơ hội việc làm tốt hơn và điều kiện sống được cải thiện.

Ngày nay, quá trình đô thị hóa vẫn đang tiếp diễn với tốc độ chưa từng có. Hiện nay, hơn một nửa dân số thế giới sinh sống tại các khu vực đô thị, và con số này được dự báo sẽ tiếp tục gia tăng. Đặc biệt, các quốc gia đang phát triển đang trải qua tốc độ tăng trưởng đô thị nhanh chóng nhờ những tiến bộ về công nghệ, cơ sở hạ tầng và các cơ hội kinh tế. Tuy nhiên, cùng với những lợi ích mà quá trình này mang lại là những thách thức đáng kể, chẳng hạn như tình trạng quá tải dân số, ô nhiễm môi trường và sự thiếu hụt các dịch vụ công cộng.

Một hệ quả lớn của quá trình đô thị hóa là sự xuất hiện của các siêu đô thị — những thành phố có trên 10 triệu cư dân. Những trung tâm đô thị khổng lồ này, chẳng hạn như Mumbai, São Paulo và Thành phố New York, thường phải đối mặt với tình trạng thiếu nhà ở, ùn tắc giao thông và suy thoái môi trường. Bên cạnh đó, hiện tượng đô thị hóa lan tỏa — tức sự mở rộng mất kiểm soát của các thành phố sang những khu vực nông thôn xung quanh — đã dẫn đến nạn phá rừng và làm gia tăng sự phụ thuộc vào ô tô, từ đó góp phần gây ô nhiễm không khí và biến đổi khí hậu.

Mặc dù tồn tại nhiều thách thức, đô thị hóa cũng mang lại rất nhiều lợi ích. Các thành phố tạo điều kiện tiếp cận tốt hơn với giáo dục, dịch vụ y tế và các trải nghiệm văn hóa. Tăng trưởng kinh tế thường tập trung ở khu vực đô thị, dẫn đến mức lương cao hơn và tiêu chuẩn sống được cải thiện cho nhiều người. Chính phủ và các nhà quy hoạch đô thị đang không ngừng tìm kiếm những giải pháp bền vững, chẳng hạn như mở rộng không gian xanh, phát triển hệ thống giao thông công cộng hiệu quả và áp dụng công nghệ thành phố thông minh, nhằm bảo đảm rằng quá trình đô thị hóa vẫn mang lại lợi ích cho các thế hệ tương lai.

Khi dân số thế giới tiếp tục gia tăng, tương lai của quá trình đô thị hóa sẽ phụ thuộc vào việc quy hoạch hiệu quả và những giải pháp đổi mới. Việc tìm ra sự cân bằng giữa phát triển và tính bền vững sẽ đóng vai trò then chốt trong việc kiến tạo nên những thành phố đáng sống và có khả năng chống chịu tốt trong tương lai.`;

const PASSAGE_STARTUP_FRIENDS = `In a study published in 2012, the author Noah Wasserman - then a professor at Harvard Business School - studied 10,000 startups, of which 40% were founded by those who are friends. <mark style="background: #ea580c; color: #fff; box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);">[I]</mark> And his research showed that companies with friend - founders were less likely to work.

<mark style="background: #ea580c; color: #fff; box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);">[II]</mark> Wasserman says that when people are establishing a company, having a familiar face along for the ride can be very comforting. <mark style="background: #ea580c; color: #fff; box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);">[III]</mark> But he says starting up with friends is just like playing with fire: “<mark>It</mark> can either forge a stronger team and relationship or blow up the team and relationship.” His research showed that the most stable structure for starting a company is, in fact, a group of strangers, rather than co - workers, family or friends. <mark style="background: #ea580c; color: #fff; box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);">[IV]</mark> This is because strangers have fewer expectations of each other, and there’s no concern about affecting a friendship or close personal relationship when bringing up mistakes or issues.

Companies created by friends, Wasserman says, are more likely to fail for reasons linked to people being overconfident and underprepared. “When we found with friends, we are confident that our team will be of the stronger variety,” says Wasserman. <mark>Yet friends often have no experience of each other professionally, and don’t test the waters before founding.</mark> “We assume that we know each other, but have you ever seen your best friend in a work context and know how he or she acts there?”, he comments.

Even when friend - founders know each other both professionally and personally discussing tough topics can be hard. Wasserman explains that a common experience among friends is a tendency to avoid necessary but tension – filled conversations for fear of <mark>souring</mark> their relationship. But this can have severe consequences: “Because we avoid discussing that bad scenario and how we could avoid it, we increase the chances that it will occur.” Hamish Grierson, CEO of a London - based health - tech firm, agrees that awkward conversations need to take place. A lifestyle brand he set up with a friend didn’t work, and the relationship was partly to blame. “We spent way too much time focused on improving our launch product than we did on identifying whether anyone wanted the thing we were creating.”

Despite these challenges, Gabrielle Adams, a social psychologist at the University of Virginia, believes that going into business with someone you already know well has advantages. “Good friends know how to <mark>work out</mark> conflict,” she explains. In fact, friendship may be what keeps you going in difficult times. Researchers from London’s Cass Business School and the University of Pennsylvania examined how friendship between founding members impacts on behavior when a startup’s finances start to suffer and found that startups established by people with a strong friendship were more likely to persist if a venture looked like it was failing.
(Adapted from bbc.com)`;

const PASSAGE_STARTUP_FRIENDS_TRANS = `Một nghiên cứu được công bố vào năm 2012 của Noah Wasserman — khi đó là giáo sư tại Trường Kinh doanh Harvard — đã khảo sát 10.000 công ty khởi nghiệp, trong đó 40% được thành lập bởi những người là bạn bè. Và nghiên cứu của ông cho thấy rằng các công ty có những người đồng sáng lập là bạn bè có khả năng hoạt động hiệu quả thấp hơn.

Wasserman cho biết rằng khi mọi người bắt đầu thành lập một công ty, việc có một gương mặt quen thuộc cùng đồng hành có thể mang lại cảm giác rất yên tâm. Tuy nhiên, ông nói rằng khởi nghiệp cùng bạn bè giống như chơi với lửa: “Điều đó có thể hoặc là rèn giua nên một đội ngũ và mối quan hệ vững mạnh hơn, hoặc cũng có thể phá hủy cả đội ngũ lẫn mối quan hệ.” Nghiên cứu của ông cho thấy rằng cấu trúc ổn định nhất để thành lập một công ty thực ra là một nhóm những người xa lạ, thay vì đồng nghiệp, người thân hay bạn bè. Điều này là bởi những người xa lạ có ít kỳ vọng về nhau hơn, và cũng không phải lo ngại rằng việc nêu ra sai sót hay vấn đề sẽ làm ảnh hưởng đến tình bạn hoặc mối quan hệ cá nhân thân thiết.

Theo Wasserman, các công ty do bạn bè cùng thành lập có nhiều khả năng thất bại hơn vì những lý do liên quan đến việc mọi người trở nên quá tự tin nhưng lại thiếu sự chuẩn bị. “Khi chúng ta cùng bạn bè thành lập công ty, chúng ta tin chắc rằng đội ngũ của mình sẽ thuộc loại mạnh mẽ hơn,” Wasserman nói. Tuy nhiên, bạn bè thường không có kinh nghiệm làm việc với nhau trong môi trường chuyên nghiệp và cũng không thử nghiệm trước khi cùng nhau thành lập công ty. Ông nhận xét: “Chúng ta cho rằng mình hiểu nhau, nhưng bạn đã bao giờ thấy người bạn thân nhất của mình trong bối cảnh công việc và biết họ hành xử như thế nào ở đó chưa?”

Ngay cả khi những người bạn đồng sáng lập hiểu nhau cả về mặt cá nhân lẫn nghề nghiệp, việc thảo luận những vấn đề khó khăn vẫn có thể rất khó. Wasserman giải thích rằng một trải nghiệm phổ biến giữa bạn bè là xu hướng né tránh những cuộc trò chuyện cần thiết nhưng dễ gây căng thẳng vì sợ làm tổn hại mối quan hệ. Tuy nhiên, điều này có thể dẫn đến những hậu quả nghiêm trọng: “Bởi vì chúng ta tránh thảo luận về kịch bản xấu đó và cách có thể tránh nó, chúng ta lại làm tăng khả năng nó xảy ra.” Hamish Grierson, giám đốc điều hành của một công ty công nghệ y tế có trụ sở tại London, cũng đồng ý rằng những cuộc trò chuyện khó xử vẫn cần phải diễn ra. Một thương hiệu phong cách sống mà ông từng thành lập cùng một người bạn đã thất bại, và mối quan hệ giữa họ phần nào là nguyên nhân. “Chúng tôi đã dành quá nhiều thời gian để tập trung cải thiện sản phẩm ra mắt của mình, thay vì xác định xem liệu có ai thực sự muốn thứ mà chúng tôi đang tạo ra hay không.”

Mặc dù tồn tại những thách thức này, Gabrielle Adams, một nhà tâm lý học xã hội tại Đại học Virginia, cho rằng việc kinh doanh cùng một người mà bạn đã quen biết rõ từ trước cũng có những lợi thế. “Những người bạn tốt biết cách giải quyết xung đột,” bà giải thích. Thực tế, tình bạn có thể chính là yếu tố giúp bạn tiếp tục kiên trì trong những thời điểm khó khăn. Các nhà nghiên cứu từ Trường Kinh doanh Cass ở London và Đại học Pennsylvania đã xem xét cách tình bạn giữa các thành viên sáng lập ảnh hưởng đến hành vi khi tình hình tài chính của một công ty khởi nghiệp bắt đầu xấu đi, và phát hiện rằng các công ty khởi nghiệp được thành lập bởi những người có tình bạn bền chặt có nhiều khả năng kiên trì hơn khi dự án kinh doanh có dấu hiệu thất bại.`;

export const HA_TINH_2026_QUESTIONS: Question[] = [
  // SECTION 1: WORKSHOP FOR TEENS (Q1 - Q6)
  {
    id: 'ht-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_WORKSHOP,
    passageTranslation: PASSAGE_WORKSHOP_TRANS,
    questionText: 'Question 1. Fill in blank (1):',
    options: [
      { id: 'A', text: 'practice', translation: 'sự thực hành (danh từ)' },
      { id: 'B', text: 'practical', translation: 'thiết thực / thực tế (tính từ)' },
      { id: 'C', text: 'practically', translation: 'hầu như / thực tế là (trạng từ)' },
      { id: 'D', text: 'practicality', translation: 'tính thực tiễn (danh từ)' }
    ],
    correctAnswer: 'B',
    explanation: '• A. practice - SAI: Danh từ, không đứng trước danh từ "solution" để bổ nghĩa.\n• B. practical - ĐÚNG: Tính từ (thiết thực), vị trí trước danh từ cần một tính từ bổ nghĩa.\n• C. practically - SAI: Trạng từ.\n• D. practicality - SAI: Danh từ.',
    translation: 'Cung cấp một giải pháp (1) ____________ để giúp bạn sử dụng mạng xã hội khôn ngoan...',
    topicTag: 'Từ loại (Word Formation)'
  },
  {
    id: 'ht-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_WORKSHOP,
    passageTranslation: PASSAGE_WORKSHOP_TRANS,
    questionText: 'Question 2. Fill in blank (2):',
    options: [
      { id: 'A', text: 'make up', translation: 'bịa đặt / trang điểm / tạo nên' },
      { id: 'B', text: 'hold up', translation: 'trì hoãn' },
      { id: 'C', text: 'build up', translation: 'xây dựng / hình thành dần' },
      { id: 'D', text: 'pick up', translation: 'nhặt lên / học lỏm' }
    ],
    correctAnswer: 'C',
    explanation: '• A. make up - Bịa đặt / trang điểm.\n• B. hold up - Trì hoãn.\n• C. build up - ĐÚNG: Cụm động từ có nghĩa là xây dựng, phát triển dần (thói quen lành mạnh).\n• D. pick up - Nhặt lên / học lỏm.',
    translation: 'Giúp bạn (2) ____________ những thói quen trực tuyến lành mạnh.',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'ht-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_WORKSHOP,
    passageTranslation: PASSAGE_WORKSHOP_TRANS,
    questionText: 'Question 3. Fill in blank (3):',
    options: [
      { id: 'A', text: 'preparing', translation: 'đang chuẩn bị (chủ động)' },
      { id: 'B', text: 'prepared', translation: 'được chuẩn bị (bị động)' },
      { id: 'C', text: 'prepare', translation: 'chuẩn bị (nguyên thể)' },
      { id: 'D', text: 'to prepare', translation: 'để chuẩn bị' }
    ],
    correctAnswer: 'B',
    explanation: '• A. preparing - SAI dạng chủ động.\n• B. prepared - ĐÚNG: Rút gọn mệnh đề quan hệ dạng bị động (Lessons which were prepared -> Lessons prepared).\n• C, D - SAI cấu trúc.',
    translation: 'Các bài học được (3) ____________ bởi các chuyên gia kỹ thuật số.',
    topicTag: 'Rút gọn mệnh đề bị động'
  },
  {
    id: 'ht-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_WORKSHOP,
    passageTranslation: PASSAGE_WORKSHOP_TRANS,
    questionText: 'Question 4. Fill in blank (4):',
    options: [
      { id: 'A', text: 'a wide variety of', translation: 'nhiều loại / sự đa dạng của' },
      { id: 'B', text: 'a vast deal of', translation: 'lượng lớn (sai cấu trúc ngữ pháp)' },
      { id: 'C', text: 'a huge amount of', translation: 'một lượng khổng lồ (cho không đếm được)' },
      { id: 'D', text: 'a large number of', translation: 'số lượng lớn (cho danh từ số nhiều)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. a wide variety of - ĐÚNG: Đi với danh từ chỉ các loại lời khuyên khác nhau.\n• B. a vast deal of - Sai ngữ pháp (chỉ dùng a great deal of).\n• C. a huge amount of - Dùng cho vật chất không đếm được lượng lớn.\n• D. a large number of - Đi với danh từ đếm được số nhiều.',
    translation: 'Với một (4) ____________ lời khuyên hữu ích và các hoạt động tương tác.',
    topicTag: 'Lượng từ & Cụm từ'
  },
  {
    id: 'ht-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_WORKSHOP,
    passageTranslation: PASSAGE_WORKSHOP_TRANS,
    questionText: 'Question 5. Fill in blank (5):',
    options: [
      { id: 'A', text: 'research', translation: 'nghiên cứu' },
      { id: 'B', text: 'homework', translation: 'bài tập về nhà' },
      { id: 'C', text: 'advantage', translation: 'lợi thế' },
      { id: 'D', text: 'progress', translation: 'sự tiến bộ' }
    ],
    correctAnswer: 'D',
    explanation: '• A. research - Không đi với make in.\n• B. homework - Dùng với do.\n• C. advantage - Không hợp nghĩa.\n• D. progress - ĐÚNG: Collocation "make progress in something" (đạt sự tiến bộ).',
    translation: 'Có cơ hội đạt được (5) ____________ trong kỹ năng giao tiếp.',
    topicTag: 'Collocation (Make progress)'
  },
  {
    id: 'ht-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_WORKSHOP,
    passageTranslation: PASSAGE_WORKSHOP_TRANS,
    questionText: 'Question 6. Fill in blank (6):',
    options: [
      { id: 'A', text: 'more safe', translation: 'an toàn hơn (sai cấu trúc ngắn)' },
      { id: 'B', text: 'safe', translation: 'an toàn' },
      { id: 'C', text: 'safest', translation: 'an toàn nhất' },
      { id: 'D', text: 'safer', translation: 'an toàn hơn' }
    ],
    correctAnswer: 'D',
    explanation: '• D. safer - ĐÚNG: Cấu trúc so sánh hơn song hành "safer and more confident".',
    translation: 'Bạn sẽ cảm thấy (6) ____________ và tự tin hơn khi sử dụng mạng xã hội.',
    topicTag: 'So sánh tính từ'
  },

  // SECTION 2: SMART LEARNING (Q7 - Q12)
  {
    id: 'ht-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_SMART_LEARNING,
    passageTranslation: PASSAGE_SMART_LEARNING_TRANS,
    questionText: 'Question 7. Fill in blank (7):',
    options: [
      { id: 'A', text: 'therefore', translation: 'do đó / vì vậy' },
      { id: 'B', text: 'because', translation: 'bởi vì' },
      { id: 'C', text: 'moreover', translation: 'hơn nữa' },
      { id: 'D', text: 'however', translation: 'tuy nhiên' }
    ],
    correctAnswer: 'D',
    explanation: '• D. however - ĐÚNG: Trạng từ chỉ sự tương phản giữa việc lướt mạng và hậu quả làm giảm tập trung.',
    translation: 'Nhiều học sinh lướt mạng xã hội; (7) ____________, thói quen này có thể làm giảm sự tập trung.',
    topicTag: 'Trạng từ liên kết'
  },
  {
    id: 'ht-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_SMART_LEARNING,
    passageTranslation: PASSAGE_SMART_LEARNING_TRANS,
    questionText: 'Question 8. Fill in blank (8):',
    options: [
      { id: 'A', text: 'e-learning support system', translation: 'hệ thống hỗ trợ học trực tuyến' },
      { id: 'B', text: 'support e-learning system', translation: 'hệ thống hỗ trợ học trực tuyến (sai trật tự)' },
      { id: 'C', text: 'e-learning system support', translation: 'hệ thống hỗ trợ học trực tuyến (sai trật tự)' },
      { id: 'D', text: 'system e-learning support', translation: 'hệ thống hỗ trợ học trực tuyến (sai trật tự)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. e-learning support system - ĐÚNG: Cụm danh từ ghép đúng thứ tự: hệ thống (system) + hỗ trợ (support) + học trực tuyến (e-learning).',
    translation: 'Nhà trường gần đây đã triển khai một (8) ____________ tiên tiến.',
    topicTag: 'Cụm danh từ ghép'
  },
  {
    id: 'ht-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_SMART_LEARNING,
    passageTranslation: PASSAGE_SMART_LEARNING_TRANS,
    questionText: 'Question 9. Fill in blank (9):',
    options: [
      { id: 'A', text: 'few', translation: 'rất ít (dùng cho danh từ đếm được)' },
      { id: 'B', text: 'little', translation: 'rất ít (dùng cho danh từ không đếm được)' },
      { id: 'C', text: 'another', translation: 'một cái khác' },
      { id: 'D', text: 'other', translation: 'những cái khác' }
    ],
    correctAnswer: 'B',
    explanation: '• B. little - ĐÚNG: Đi với danh từ không đếm được "time", mang nghĩa còn rất ít/hầu như không còn.',
    translation: 'Mặc dù chỉ còn (9) ____________ thời gian trước các kỳ thi cuối kỳ.',
    topicTag: 'Lượng từ (Quantifiers)'
  },
  {
    id: 'ht-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_SMART_LEARNING,
    passageTranslation: PASSAGE_SMART_LEARNING_TRANS,
    questionText: 'Question 10. Fill in blank (10):',
    options: [
      { id: 'A', text: 'with', translation: 'với' },
      { id: 'B', text: 'of', translation: 'của' },
      { id: 'C', text: 'about', translation: 'về' },
      { id: 'D', text: 'for', translation: 'cho' }
    ],
    correctAnswer: 'A',
    explanation: '• A. with - ĐÚNG: Collocation "talk with someone" (trao đổi/nói chuyện với ai).',
    translation: 'Học sinh được khuyến khích trao đổi (10) ____________ giáo viên.',
    topicTag: 'Giới từ (Prepositions)'
  },
  {
    id: 'ht-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_SMART_LEARNING,
    passageTranslation: PASSAGE_SMART_LEARNING_TRANS,
    questionText: 'Question 11. Fill in blank (11):',
    options: [
      { id: 'A', text: 'guiding', translation: 'sự hướng dẫn (dạng V-ing)' },
      { id: 'B', text: 'guideline', translation: 'hướng dẫn / quy tắc (danh từ)' },
      { id: 'C', text: 'guidance', translation: 'sự hướng dẫn (danh từ)' },
      { id: 'D', text: 'guide', translation: 'người hướng dẫn / hướng dẫn (động từ)' }
    ],
    correctAnswer: 'C',
    explanation: '• C. guidance - ĐÚNG: Danh từ "guidance" (sự hướng dẫn), phù hợp đứng sau tính từ "professional".',
    translation: 'Tờ rơi cũng đưa ra (11) ____________ chuyên nghiệp.',
    topicTag: 'Từ loại (Word Formation)'
  },
  {
    id: 'ht-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_SMART_LEARNING,
    passageTranslation: PASSAGE_SMART_LEARNING_TRANS,
    questionText: 'Question 12. Fill in blank (12):',
    options: [
      { id: 'A', text: 'future', translation: 'tương lai' },
      { id: 'B', text: 'opportunity', translation: 'cơ hội' },
      { id: 'C', text: 'chance', translation: 'cơ hội' },
      { id: 'D', text: 'lining', translation: 'vệt sáng / lớp lót' }
    ],
    correctAnswer: 'D',
    explanation: '• D. lining - ĐÚNG: Thành ngữ "Every cloud has a silver lining" (Trong cái rủi có cái may).',
    translation: 'Hãy nhớ rằng, trong cái rủi có cái (12) ____________.',
    topicTag: 'Thành ngữ (Idioms)'
  },

  // SECTION 3: REORDERING (Q13 - Q17)
  {
    id: 'ht-q13',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of utterances to make a cohesive exchange:

a. Ethan: Hi, Mia! Yes, I went there last weekend. The coffee was fantastic!
b. Mia: That’s great to hear! I’ll have to check it out soon.
c. Mia: Hey, Ethan! Have you tried that new café on Maple Street?`,
    options: [
      { id: 'A', text: 'a – b – c' },
      { id: 'B', text: 'c – a – b' },
      { id: 'C', text: 'a – c – b' },
      { id: 'D', text: 'c – b – a' }
    ],
    correctAnswer: 'B',
    explanation: 'Thứ tự hội thoại:\n1. (c) Mia mở đầu hỏi Ethan về quán cà phê mới.\n2. (a) Ethan trả lời đã đến và khen cà phê ngon.\n3. (b) Mia đáp lại sẽ ghé thử.',
    translation: 'Dịch nghĩa các câu hội thoại:\na. Ethan: Chào Mia! Rồi, mình đã đến đó tuần trước. Cà phê rất tuyệt!\nb. Mia: Thật tuyệt khi nghe vậy! Mình sẽ phải ghé thử sớm.\nc. Mia: Này Ethan! Bạn đã thử quán cà phê mới trên phố Maple chưa?',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'ht-q14',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of sentences:

a. Robert: No, I haven’t, but I really want to try.
b. Sarah: You should definitely take lessons; it’s easier with guidance.
c. Robert: Good idea! I’ll look for a teacher in my area.
d. Robert: I’m thinking about learning to play the piano.
e. Sarah: That sounds like a fun challenge! Have you ever played before?`,
    options: [
      { id: 'A', text: 'a – b – c – d – e' },
      { id: 'B', text: 'd – e – c – a – b' },
      { id: 'C', text: 'd – e – a – b – c' },
      { id: 'D', text: 'a – b – e – d – c' }
    ],
    correctAnswer: 'C',
    explanation: 'Thứ tự hội thoại:\n- (d) Robert nêu ý định học piano.\n- (e) Sarah nhận xét và hỏi câu hỏi tiếp theo.\n- (a) Robert trả lời chưa từng chơi.\n- (b) Sarah khuyên nên học với giáo viên.\n- (c) Robert đồng ý tìm giáo viên.',
    translation: 'Dịch nghĩa các câu hội thoại:\na. Robert: Chưa, nhưng mình rất muốn thử.\nb. Sarah: Bạn chắc chắn nên học; có người hướng dẫn sẽ dễ hơn.\nc. Robert: Ý hay đấy! Mình sẽ tìm một giáo viên ở khu vực của mình.\nd. Robert: Mình đang nghĩ đến việc học chơi đàn piano.\ne. Sarah: Nghe có vẻ là một thử thách thú vị đấy! Bạn đã từng chơi trước đây chưa?',
    topicTag: 'Sắp xếp đoạn hội thoại'
  },
  {
    id: 'ht-q15',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of email sentences:

Dear students,
a. As you may have heard, we will be switching to online classes for the next few weeks because of the severe storm.
b. I hope everyone is doing well despite the weather conditions.
c. I appreciate your understanding and flexibility during this time, and I’m confident we can make this work together.
d. I know this might be an adjustment for some of you, but it’s important to prioritize safety.
e. Please ensure you have access to your online resources, and let me know if you have any questions or concerns.
Best wishes, Mrs. Linda`,
    options: [
      { id: 'A', text: 'd – b – a – c – e' },
      { id: 'B', text: 'b – a – d – c – e' },
      { id: 'C', text: 'a – e – c – b – d' },
      { id: 'D', text: 'c – b – e – a – d' }
    ],
    correctAnswer: 'B',
    explanation: 'Cấu trúc Email:\n- (b) Lời hỏi thăm sức khỏe mở đầu.\n- (a) Thông báo chuyển sang học online do bão.\n- (d) Giải thích việc ưu tiên an toàn.\n- (c) Cảm ơn sự thông cảm.\n- (e) Hướng dẫn chuẩn bị tài nguyên học tập.',
    translation: 'Dịch nội dung các câu email của cô Linda:\nCác em học sinh thân mến,\na. Như các em có thể đã nghe, chúng ta sẽ chuyển sang học trực tuyến trong vài tuần tới vì cơn bão nghiêm trọng.\nb. Cô hy vọng tất cả các em đều vẫn ổn dù thời tiết đang xấu.\nc. Cô rất cảm kích sự thông cảm và linh hoạt của các em, và cô tin chúng ta có thể cùng nhau làm tốt việc này.\nd. Cô biết điều này có thể là một sự thay đổi, nhưng việc ưu tiên sự an toàn là rất quan trọng.\ne. Hãy đảm bảo các em có thể truy cập các tài nguyên học trực tuyến...',
    topicTag: 'Sắp xếp Email'
  },
  {
    id: 'ht-q16',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of paragraph sentences:

a. Additionally, choosing eco-friendly products and supporting renewable energy sources, such as solar or wind power, contributes to a greener planet.
b. Planting trees helps reduce carbon dioxide levels and improves air quality.
c. Simple actions like reducing plastic use, recycling, and conserving water can make a significant difference.
d. It’s important for individuals, businesses, and governments to work together to preserve natural resources, reduce pollution, and combat climate change for future generations.
e. Protecting the environment is crucial for ensuring a healthy and sustainable future.`,
    options: [
      { id: 'A', text: 'e – c – b – a – d' },
      { id: 'B', text: 'e – a – c – d – b' },
      { id: 'C', text: 'c – e – a – b – d' },
      { id: 'D', text: 'd – e – a – c – b' }
    ],
    correctAnswer: 'A',
    explanation: 'Thứ tự đoạn văn về Môi trường:\n- (e) Câu chủ đề nêu tầm quan trọng của việc bảo vệ môi trường.\n- (c) Các hành động đơn giản mở đầu.\n- (b) Nêu ví dụ trồng cây xanh.\n- (a) Thêm các biện pháp bổ sung (Additionally).\n- (d) Câu kết luận về sự hợp tác toàn xã hội.',
    translation: 'Dịch nội dung các câu về Bảo vệ môi trường:\na. Ngoài ra, việc lựa chọn các sản phẩm thân thiện với môi trường và ủng hộ các nguồn năng lượng tái tạo...\nb. Trồng cây giúp giảm lượng khí carbon dioxide và cải thiện chất lượng không khí.\nc. Những hành động đơn giản như giảm sử dụng nhựa, tái chế và tiết kiệm nước có thể tạo ra sự khác biệt lớn.\nd. Điều quan trọng là cá nhân, doanh nghiệp và chính phủ phải cùng nhau hợp tác...\ne. Việc bảo vệ môi trường là rất quan trọng để đảm bảo một tương lai khỏe mạnh và bền vững.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'ht-q17',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of paragraph sentences:

a. On the positive side, celebrating these festivals encourages extracurricular activities and fosters creativity and teamwork among the youth.
b. Many young Vietnamese are increasingly embracing global festivals like Christmas and Halloween, which has both positive and negative effects.
c. However, there is a risk of losing cultural identity if local traditions are neglected in favor of foreign celebrations.
d. Exposure to different cultures through global festivals also helps young people gain a broader understanding of the world.
e. Ultimately, maintaining a balance between embracing foreign cultures and preserving local traditions is crucial for positive growth.`,
    options: [
      { id: 'A', text: 'a – c – b – e – d' },
      { id: 'B', text: 'd – c – b – a – e' },
      { id: 'C', text: 'b – a – d – c – e' },
      { id: 'D', text: 'c – b – d – a – e' }
    ],
    correctAnswer: 'C',
    explanation: 'Thứ tự đoạn văn Lễ hội Quốc tế:\n- (b) Câu chủ đề nêu hiện tượng giới trẻ đón nhận lễ hội quốc tế.\n- (a) Đưa ra mặt tích cực đầu tiên ("On the positive side").\n- (d) Bổ sung mặt tích cực thứ hai.\n- (c) Chuyển hướng sang mặt tiêu cực ("However").\n- (e) Đưa ra kết luận cân bằng ("Ultimately").',
    translation: 'Dịch nội dung các câu về Lễ hội Quốc tế:\na. Về mặt tích cực, việc tổ chức các lễ hội này khuyến khích các hoạt động ngoại khóa...\nb. Nhiều bạn trẻ Việt Nam ngày càng đón nhận các lễ hội toàn cầu như Giáng sinh và Halloween...\nc. Tuy nhiên, có nguy cơ mất bản sắc văn hóa nếu các truyền thống địa phương bị bỏ quên...\nd. Việc tiếp xúc với các nền văn hóa khác nhau thông qua các lễ hội toàn cầu cũng giúp giới trẻ...\ne. Cuối cùng, việc duy trì sự cân bằng giữa tiếp nhận các nền văn hóa nước ngoài và bảo tồn...',
    topicTag: 'Sắp xếp đoạn văn nghị luận'
  },

  // SECTION 4: CLOZE TEST - ELECTRIC VEHICLES (Q18 - Q22)
  {
    id: 'ht-q18',
    type: 'cloze_test',
    readingPassage: PASSAGE_EV_TRANSITION,
    passageTranslation: PASSAGE_EV_TRANSITION_TRANS,
    questionText: 'Question 18. Fill in blank (18):',
    options: [
      { id: 'A', text: 'Although electric vehicles (EVs) have become cheaper', translation: 'Mặc dù xe điện (EVs) đã trở nên rẻ hơn' },
      { id: 'B', text: 'Electric vehicles (EVs) are becoming more and more efficient', translation: 'Xe điện (EVs) ngày càng trở nên hiệu quả hơn' },
      { id: 'C', text: 'As electric vehicles (EVs) became more and more efficient', translation: 'Khi xe điện (EVs) trở nên hiệu quả hơn' },
      { id: 'D', text: 'The more efficient electric vehicles (EVs) become', translation: 'Xe điện càng trở nên hiệu quả' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cung cấp vế mệnh đề chính hoàn chỉnh ngữ cảnh "Xe điện ngày càng trở nên hiệu quả hơn, nhưng vẫn có nhược điểm".\n• A, C: Sai vì lặp liên từ với "but".',
    translation: '(18) ____________, nhưng chúng vẫn còn một vài nhược điểm.',
    topicTag: 'Cấu trúc mệnh đề & Liên từ'
  },
  {
    id: 'ht-q19',
    type: 'cloze_test',
    readingPassage: PASSAGE_EV_TRANSITION,
    passageTranslation: PASSAGE_EV_TRANSITION_TRANS,
    questionText: 'Question 19. Fill in blank (19):',
    options: [
      { id: 'A', text: 'emits harmful pollutants into the air', translation: 'thải các chất ô nhiễm có hại vào không khí (động từ số ít)' },
      { id: 'B', text: 'emitting harmful pollutants', translation: 'đang thải các chất ô nhiễm có hại (V-ing)' },
      { id: 'C', text: 'with harmful pollutants in the air', translation: 'với các chất ô nhiễm có hại trong không khí' },
      { id: 'D', text: 'that emits air pollutants', translation: 'cái mà thải ra các chất ô nhiễm không khí' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cung cấp động từ chính "emits" phù hợp với chủ ngữ V-ing số ít "burning fossil fuels".',
    translation: 'Trước hết, việc đốt nhiên liệu hóa thạch (19) ____________, gây ra khói mù độc hại.',
    topicTag: 'Hòa hợp Chủ ngữ - Động từ'
  },
  {
    id: 'ht-q20',
    type: 'cloze_test',
    readingPassage: PASSAGE_EV_TRANSITION,
    passageTranslation: PASSAGE_EV_TRANSITION_TRANS,
    questionText: 'Question 20. Fill in blank (20):',
    options: [
      { id: 'A', text: 'because the Earth gets hotter', translation: 'bởi vì Trái Đất trở nên nóng hơn' },
      { id: 'B', text: 'so the Earth is getting warmer and warmer', translation: 'vì vậy Trái Đất ngày càng nóng hơn' },
      { id: 'C', text: 'the warmer the earth gets', translation: 'Trái Đất càng trở nên nóng hơn (cấu trúc The... the...)' },
      { id: 'D', text: 'although the daily temperature rises', translation: 'mặc dù nhiệt độ hàng ngày tăng lên' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cấu trúc so sánh kép "The + comparative + S + V, the + comparative + S + V" (Càng... càng...).',
    translation: 'Lượng nhiệt bị giữ lại càng lớn, (20) ____________, điều này có thể gây thời tiết cực đoan.',
    topicTag: 'So sánh kép (Double Comparative)'
  },
  {
    id: 'ht-q21',
    type: 'cloze_test',
    readingPassage: PASSAGE_EV_TRANSITION,
    passageTranslation: PASSAGE_EV_TRANSITION_TRANS,
    questionText: 'Question 21. Fill in blank (21):',
    options: [
      { id: 'A', text: 'Special materials are used to make the batteries for Evs', translation: 'Các vật liệu đặc biệt được sử dụng để làm pin cho xe điện' },
      { id: 'B', text: 'Special materials and batteries for Evs are required', translation: 'Các vật liệu và pin đặc biệt cho xe điện được yêu cầu' },
      { id: 'C', text: 'Special materials are required to make the batteries for Evs', translation: 'Các vật liệu đặc biệt được yêu cầu để làm pin xe điện' },
      { id: 'D', text: 'Making the batteries for Evs requires special materials', translation: 'Việc sản xuất pin cho xe điện đòi hỏi các vật liệu đặc biệt' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Dùng V-ing làm chủ ngữ "Making the batteries..." giúp mệnh đề quan hệ phía sau "that come from mines" quy chiếu chính xác vào "special materials".',
    translation: '(21) ____________ được khai thác từ các mỏ.',
    topicTag: 'Cấu trúc Chủ ngữ V-ing'
  },
  {
    id: 'ht-q22',
    type: 'cloze_test',
    readingPassage: PASSAGE_EV_TRANSITION,
    passageTranslation: PASSAGE_EV_TRANSITION_TRANS,
    questionText: 'Question 22. Fill in blank (22):',
    options: [
      { id: 'A', text: 'as if the electricity they use came from renewable sources', translation: 'như thể nguồn điện họ sử dụng đến từ nguồn tái tạo' },
      { id: 'B', text: 'in case of the electricity they use comes from renewable sources', translation: 'phòng khi nguồn điện họ sử dụng đến từ nguồn tái tạo' },
      { id: 'C', text: 'on condition that the electricity they use comes from renewable sources', translation: 'với điều kiện nguồn điện họ sử dụng đến từ nguồn tái tạo' },
      { id: 'D', text: 'unless the electricity they use comes from renewable sources', translation: 'trừ khi nguồn điện họ sử dụng đến từ nguồn tái tạo' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cụm từ "on condition that" (với điều kiện là) chỉ điều kiện thực tế để xe điện thực sự thân thiện môi trường.',
    translation: 'Hơn nữa, xe điện chỉ hoàn toàn thân thiện với môi trường (22) ____________ như gió và Mặt Trời.',
    topicTag: 'Mệnh đề điều kiện (On condition that)'
  },

  // SECTION 5: READING COMPREHENSION 1 - URBANIZATION (Q23 - Q30)
  {
    id: 'ht-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_URBANIZATION,
    passageTranslation: PASSAGE_URBANIZATION_TRANS,
    questionText: 'Question 23. The word "expanded" in paragraph 1 is closest in meaning to:',
    options: [
      { id: 'A', text: 'increased', translation: 'tăng lên / mở rộng' },
      { id: 'B', text: 'shrank', translation: 'co lại / thu nhỏ' },
      { id: 'C', text: 'decreased', translation: 'giảm sút' },
      { id: 'D', text: 'narrowed', translation: 'thu hẹp' }
    ],
    correctAnswer: 'A',
    explanation: '• A. increased - ĐÚNG: "Expanded" (mở rộng/phát triển) đồng nghĩa với "increased" (tăng lên/mở rộng quy mô).',
    translation: 'Từ "expanded" ở đoạn 1 có nghĩa gần nhất với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ đồng nghĩa'
  },
  {
    id: 'ht-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_URBANIZATION,
    passageTranslation: PASSAGE_URBANIZATION_TRANS,
    questionText: 'Question 24. Which of the following is NOT mentioned as a consequence of urbanization?',
    options: [
      { id: 'A', text: 'environmental degradation', translation: 'sự suy thoái môi trường' },
      { id: 'B', text: 'job shortages', translation: 'sự thiếu hụt việc làm' },
      { id: 'C', text: 'traffic congestion', translation: 'ùn tắc giao thông' },
      { id: 'D', text: 'air pollution', translation: 'ô nhiễm không khí' }
    ],
    correctAnswer: 'B',
    explanation: '• B. job shortages - ĐÚNG: Bài đọc không đề cập đến thiếu việc làm; ngược lại, bài nói người dân đến thành phố để tìm cơ hội việc làm tốt hơn ("better job opportunities").',
    translation: 'Yếu tố nào dưới đây KHÔNG được đề cập là một hậu quả của quá trình đô thị hóa?',
    topicTag: 'Đọc hiểu - Thông tin KHÔNG có'
  },
  {
    id: 'ht-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_URBANIZATION,
    passageTranslation: PASSAGE_URBANIZATION_TRANS,
    questionText: 'Question 25. The phrase "unprecedented" in paragraph 2 could be best replaced by:',
    options: [
      { id: 'A', text: 'unusual', translation: 'bất thường / khác lạ' },
      { id: 'B', text: 'unmatched', translation: 'vô tiền khoáng hậu / chưa từng có' },
      { id: 'C', text: 'unbelievable', translation: 'không thể tin được' },
      { id: 'D', text: 'predictable', translation: 'có thể dự đoán trước' }
    ],
    correctAnswer: 'B',
    explanation: '• B. unmatched - ĐÚNG: "Unprecedented" (chưa từng có tiền lệ) đồng nghĩa với "unmatched" (vô song/chưa từng có).',
    translation: 'Từ / cụm từ "unprecedented" trong đoạn 2 có thể được thay thế tốt nhất bởi từ nào?',
    topicTag: 'Đọc hiểu - Từ vựng ngữ cảnh'
  },
  {
    id: 'ht-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_URBANIZATION,
    passageTranslation: PASSAGE_URBANIZATION_TRANS,
    questionText: 'Question 26. The word "this" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'technology', translation: 'công nghệ' },
      { id: 'B', text: 'global population', translation: 'dân số toàn cầu' },
      { id: 'C', text: 'urbanization', translation: 'quá trình đô thị hóa' },
      { id: 'D', text: 'advancement', translation: 'sự tiến bộ' }
    ],
    correctAnswer: 'C',
    explanation: '• C. urbanization - ĐÚNG: Từ "this process" thay thế cho quá trình đô thị hóa (urbanization) vừa đề cập.',
    translation: 'Từ "this" trong đoạn 2 quy chiếu đến từ / khái niệm nào?',
    topicTag: 'Đọc hiểu - Từ quy chiếu'
  },
  {
    id: 'ht-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_URBANIZATION,
    passageTranslation: PASSAGE_URBANIZATION_TRANS,
    questionText: 'Question 27. Which of the following best paraphrases the underlined sentence in paragraph 4 ("Economic growth is often concentrated in urban areas, leading to higher wages and improved standards of living for many people")?',
    options: [
      { id: 'A', text: 'Economic growth tends to be concentrated in cities, leading to lower wages and a poorer quality of life for many individuals.', translation: 'Tăng trưởng kinh tế tập trung ở các thành phố dẫn đến thu nhập thấp hơn...' },
      { id: 'B', text: 'Economic growth, although common in parts of the world, does not always bring better living conditions for people.', translation: 'Tăng trưởng kinh tế không phải lúc nào cũng mang lại điều kiện sống tốt hơn...' },
      { id: 'C', text: 'Frequently concentrated in urban areas is economic growth, causing wages to rise and improving living standards for everyone.', translation: 'Tăng trưởng kinh tế thường tập trung ở đô thị làm tăng lương cho mọi người...' },
      { id: 'D', text: 'Frequently found in urban areas is economic growth, resulting in increased wages and better living conditions for a large number of people.', translation: 'Tăng trưởng kinh tế thường diễn ra ở đô thị, dẫn đến thu nhập cao hơn và mức sống tốt hơn cho nhiều người.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Paraphrase chính xác câu gốc: Tăng trưởng kinh tế thường tìm thấy ở khu vực đô thị, dẫn đến lương tăng và cải thiện mức sống cho nhiều người.',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn 4?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'ht-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_URBANIZATION,
    passageTranslation: PASSAGE_URBANIZATION_TRANS,
    questionText: 'Question 28. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Many large cities struggle with problems related to housing and traffic.', translation: 'Nhiều thành phố lớn gặp khó khăn với các vấn đề nhà ở và giao thông.' },
      { id: 'B', text: 'The global population living in urban areas is decreasing.', translation: 'Dân số toàn cầu sống ở khu vực đô thị đang giảm đi.' },
      { id: 'C', text: 'Urban sprawl has no environmental impact.', translation: 'Đô thị hóa lan tỏa không gây tác động môi trường.' },
      { id: 'D', text: 'Industrialization has had no effect on urbanization.', translation: 'Công nghiệp hóa không tác động tới đô thị hóa.' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Dẫn chứng đoạn 3: "...massive urban centers... struggle with housing shortages, traffic congestion...".',
    translation: 'Phát biểu nào dưới đây là ĐÚNG theo thông tin trong bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin Đúng/Sai'
  },
  {
    id: 'ht-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_URBANIZATION,
    passageTranslation: PASSAGE_URBANIZATION_TRANS,
    questionText: 'Question 29. In which paragraph does the author mention a contrasting relationship?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'D', text: 'Paragraph 5', translation: 'Đoạn 5' }
    ],
    correctAnswer: 'C',
    explanation: '• C. Paragraph 4 - ĐÚNG: Mở đầu bằng "Despite these challenges, urbanization also offers numerous advantages" (Mặc dù có thách thức, đô thị hóa cũng mang lại lợi ích) -> mối quan hệ tương phản.',
    translation: 'Trong đoạn nào tác giả có đề cập đến một mối quan hệ tương phản?',
    topicTag: 'Đọc hiểu - Tìm đoạn theo ý đồ tác giả'
  },
  {
    id: 'ht-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_URBANIZATION,
    passageTranslation: PASSAGE_URBANIZATION_TRANS,
    questionText: 'Question 30. In which paragraph does the author discuss future solutions for urbanization?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'D', text: 'Paragraph 5', translation: 'Đoạn 5' }
    ],
    correctAnswer: 'D',
    explanation: '• D. Paragraph 5 - ĐÚNG: Đoạn 5 thảo luận về "sustainable solutions" và "future of urbanization".',
    translation: 'Trong đoạn nào tác giả thảo luận về các giải pháp tương lai cho đô thị hóa?',
    topicTag: 'Đọc hiểu - Ý chính đoạn văn'
  },

  // SECTION 6: READING COMPREHENSION 2 - STARTUP WITH FRIENDS (Q31 - Q40)
  {
    id: 'ht-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 31. Where in the passage does the sentence "This sense of familiarity can help ease the stress and uncertainties of starting a new venture." best fit?',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'C',
    explanation: '• C. [III] - ĐÚNG: Đứng sau câu "having a familiar face along for the ride can be very comforting" để làm rõ cảm giác quen thuộc giúp giảm căng thẳng.',
    translation: 'Trong bài đọc, câu "This sense of familiarity can help ease the stress..." nằm ở vị trí nào là phù hợp nhất?',
    topicTag: 'Đọc hiểu - Chèn câu vào vị trí thích hợp'
  },
  {
    id: 'ht-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 32. The word "it" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'starting up with friends', translation: 'việc khởi nghiệp cùng bạn bè' },
      { id: 'B', text: 'having a familiar face', translation: 'việc có một gương mặt quen thuộc' },
      { id: 'C', text: 'establishing a company', translation: 'việc thành lập một công ty' },
      { id: 'D', text: 'playing with fire', translation: 'việc chơi với lửa' }
    ],
    correctAnswer: 'A',
    explanation: '• A. starting up with friends - ĐÚNG: "It" thay thế cho việc khởi nghiệp cùng bạn bè (starting up with friends) được ví như chơi với lửa.',
    translation: 'Từ "it" trong đoạn 2 quy chiếu đến từ / cụm từ nào?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'ht-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 33. According to the passage, which of the following is NOT mentioned as a reason why companies created by friends may fail?',
    options: [
      { id: 'A', text: 'Friends tend to be overconfident about their team\'s strength.', translation: 'Bạn bè thường quá tự tin về sức mạnh nhóm của mình.' },
      { id: 'B', text: 'Friends typically struggle to agree on financial decisions.', translation: 'Bạn bè thường khó thống nhất về quyết định tài chính.' },
      { id: 'C', text: 'Friends often lack professional experience working together.', translation: 'Bạn bè thường thiếu kinh nghiệm chuyên môn làm việc cùng nhau.' },
      { id: 'D', text: 'Friends don’t test each other’s compatibility in a work environment before founding.', translation: 'Bạn bè không thử nghiệm độ tương thích trong công việc trước khi thành lập.' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Bài đọc không hề nhắc đến việc bất đồng về quyết định tài chính là lý do khiến công ty của bạn bè thất bại.',
    translation: 'Theo bài đọc, yếu tố nào dưới đây KHÔNG được đề cập là lý do khiến các công ty do bạn bè thành lập thất bại?',
    topicTag: 'Đọc hiểu - Chi tiết KHÔNG có trong bài'
  },
  {
    id: 'ht-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 34. Which of the following best paraphrases the underlined sentence in paragraph 3 ("Yet friends often have no experience of each other professionally, and don’t test the waters before founding.")?',
    options: [
      { id: 'A', text: 'Friends usually know each other well but don’t lack professional background, do evaluate their working relationships before launching a company.', translation: 'Bạn bè hiểu nhau nhưng đánh giá mối quan hệ trước khi khởi nghiệp.' },
      { id: 'B', text: 'Friends often have professional backgrounds but do not consider their compatibility before beginning a partnership.', translation: 'Bạn bè có nền tảng chuyên môn nhưng không cân nhắc độ tương thích...' },
      { id: 'C', text: 'Friends commonly experience challenges in professional environments, so they should thoroughly examine their relationships before starting a business together.', translation: 'Bạn bè thường gặp thách thức nên cần kiểm tra mối quan hệ...' },
      { id: 'D', text: 'Friends frequently lack professional familiarity with one another and fail to assess compatibility before starting a business.', translation: 'Bạn bè thường thiếu sự hiểu biết chuyên môn về nhau và không đánh giá độ tương thích trước khi khởi nghiệp.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Diễn đạt lại chính xác 2 ý gốc: thiếu kinh nghiệm làm việc cùng nhau và không đánh giá mức độ phù hợp trước khi thành lập công ty.',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn 3?',
    topicTag: 'Đọc hiểu - Viết lại câu nâng cao'
  },
  {
    id: 'ht-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 35. The word "souring" in paragraph 4 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'provoking', translation: 'kích động / gây sự' },
      { id: 'B', text: 'damaging', translation: 'gây tổn hại' },
      { id: 'C', text: 'elevating', translation: 'nâng cao / cất nhắc' },
      { id: 'D', text: 'strengthening', translation: 'củng cố / tăng cường' }
    ],
    correctAnswer: 'D',
    explanation: '• D. strengthening - ĐÚNG: "Souring" là làm rạn nứt / làm xấu đi mối quan hệ, TRÁI NGHĨA với "strengthening" (củng cố / làm mạnh thêm).',
    translation: 'Từ "souring" trong đoạn 4 TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'ht-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 36. Which of the following best summarizes paragraph 4?',
    options: [
      { id: 'A', text: 'Friend -founders often prioritize product development over market research, ruining their business.', translation: 'Bạn bè đồng sáng lập ưu tiên sản phẩm hơn nghiên cứu thị trường...' },
      { id: 'B', text: 'Addressing difficult conversations is essential for maintaining relationships in business.', translation: 'Giải quyết các cuộc trò chuyện khó khăn là thiết yếu...' },
      { id: 'C', text: 'Friends may hesitate to discuss challenging issues, which can lead to business failure.', translation: 'Bạn bè có thể do dự khi thảo luận các vấn đề khó khăn, dẫn đến thất bại doanh nghiệp.' },
      { id: 'D', text: 'Friend – founders may experience tension – filled discussions, affecting their company’s success.', translation: 'Bạn bè có thể trải qua thảo luận căng thẳng...' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Tóm tắt đúng ý chính đoạn 4: Bạn bè ngại thảo luận những vấn đề nhạy cảm/khó khăn, dẫn đến thất bại trong kinh doanh.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất nội dung của đoạn 4?',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn văn'
  },
  {
    id: 'ht-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 37. The phrase "work out" in paragraph 5 could be best replaced by:',
    options: [
      { id: 'A', text: 'decode', translation: 'giải mã' },
      { id: 'B', text: 'resolve', translation: 'giải quyết / xử lý' },
      { id: 'C', text: 'clarify', translation: 'làm rõ' },
      { id: 'D', text: 'unfold', translation: 'bộc lộ / bóc tách' }
    ],
    correctAnswer: 'B',
    explanation: '• B. resolve - ĐÚNG: "Work out conflict" đồng nghĩa với "resolve conflict" (giải quyết xung đột).',
    translation: 'Cụm từ "work out" trong đoạn 5 có thể được thay thế tốt nhất bởi từ nào?',
    topicTag: 'Phrasal Verbs ngữ cảnh'
  },
  {
    id: 'ht-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 38. Which of the following is NOT TRUE according to the passage?',
    options: [
      { id: 'A', text: 'When people are ready to talk openly about bad business scenarios, they will never occur in real life.', translation: 'Khi mọi người sẵn sàng thảo luận về rủi ro, chúng sẽ không bao giờ xảy ra trong thực tế.' },
      { id: 'B', text: 'According to Wasserman’s research, company founders who are strangers are the most likely to succeed.', translation: 'Những người đồng sáng lập là người xa lạ có khả năng thành công nhất.' },
      { id: 'C', text: 'Discussing difficult topics can still be challenging for company founders who know each other well.', translation: 'Thảo luận chủ đề khó khăn vẫn là thử thách với người quen nhau.' },
      { id: 'D', text: 'Start - ups have a higher chance of overcoming financial difficulties if their founders are very close.', translation: 'Công ty khởi nghiệp có khả năng vượt khó cao hơn nếu sáng lập viên thân thiết.' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (là câu KHÔNG ĐÚNG theo bài): Bài chỉ nói thảo luận giúp giảm khả năng xảy ra, không hề khẳng định "không bao giờ xảy ra" (never occur).',
    translation: 'Phát biểu nào dưới đây KHÔNG ĐÚNG theo thông tin trong bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin Không Đúng'
  },
  {
    id: 'ht-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 39. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'A group of co - workers is a more stable structure for starting a company than family or friends.', translation: 'Nhóm đồng nghiệp là cấu trúc ổn định hơn người thân hay bạn bè.' },
      { id: 'B', text: 'Most business conversations between founders who are friends are filled with a lot of tension.', translation: 'Hầu hết các cuộc trò chuyện giữa bạn bè đều căng thẳng.' },
      { id: 'C', text: 'Grierson’s lifestyle brand failed because he and his friends never discussed what they want to do.', translation: 'Thương hiệu của Grierson thất bại vì chưa từng thảo luận điều cần làm.' },
      { id: 'D', text: 'More problems will arise when friend - founders do not know much about each other professionally.', translation: 'Nhiều vấn đề hơn sẽ phát sinh khi bạn bè không hiểu rõ nhau về mặt chuyên môn.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Suy luận hợp lý từ bài: Nhiều vấn đề hơn sẽ phát sinh khi các bạn bè đồng sáng lập không hiểu rõ nhau trong môi trường nghề nghiệp.',
    translation: 'Điều nào dưới đây có thể được suy luận từ nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'ht-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_STARTUP_FRIENDS,
    passageTranslation: PASSAGE_STARTUP_FRIENDS_TRANS,
    questionText: 'Question 40. Which of the following best summarizes the passage?',
    options: [
      { id: 'A', text: 'Friend - founded companies often fail due to overconfidence and lack of preparation, but friendship can also help navigate challenges.', translation: 'Công ty do bạn bè thành lập thường thất bại do tự tin thái quá...' },
      { id: 'B', text: 'While starting a company with friends may offer a sense of comfort, it can also lead to challenges that may threaten the business’s success.', translation: 'Mặc dù khởi nghiệp cùng bạn bè mang lại sự thoải mái, nó cũng dẫn tới những thách thức đe dọa thành công.' },
      { id: 'C', text: 'Starting a business with friends can lead to success because friends are more likely to understand each other’s strengths and weaknesses.', translation: 'Khởi nghiệp với bạn bè dẫn tới thành công vì họ hiểu điểm mạnh điểm yếu của nhau.' },
      { id: 'D', text: 'Research shows that companies with friend - founders are generally more successful, as they can resolve conflicts better than strangers.', translation: 'Nghiên cứu cho thấy công ty do bạn bè thành lập thành công hơn...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Tóm tắt toàn diện hai mặt của bài: Sự thoải mái ban đầu và những nguy cơ/thách thức đe dọa sự thành công của doanh nghiệp khi khởi nghiệp cùng bạn bè.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất toàn bộ bài đọc?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)'
  }
];

export const HA_TINH_2026_EXAM: ExamSet = {
  id: 'exam-ha-tinh-2026',
  title: 'Đề Thi Thử THPT 2026 - Sở GD&ĐT Hà Tĩnh (Cụm Cẩm Xuyên - Lần 2)',
  description: 'Đề khảo sát chất lượng chính thức Cụm THPT Cẩm Xuyên - Hà Tĩnh gồm trọn bộ 40 câu trắc nghiệm chuẩn cấu trúc mới 2026 kèm đáp án & lời giải chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'MỚI NẤT 2026',
  iconName: 'Award',
  questions: HA_TINH_2026_QUESTIONS
};
