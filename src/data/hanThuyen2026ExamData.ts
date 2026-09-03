import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_INSTASNAP = `InstaSnap: Print Your Memories, Instantly!

Tired of waiting (1) ____________ your photos to develop? Wish you could share physical pictures (2) ____________ just moments ago? Introducing InstaSnap, the revolutionary new camera that lets you (3) ____________ your memories in an instant! With its sleek design and user-friendly interface, InstaSnap is perfect for (4) ____________. Whether you're a seasoned pro or just starting out, you'll love (5) ____________ hold your photos in your hand seconds after snapping them. Say goodbye to blurry digital images and hello to (6) ____________ prints that will last a lifetime!`;

const PASSAGE_INSTASNAP_TRANS = `[ĐOẠN 1] InstaSnap: In Kỷ Niệm Của Bạn – Ngay Lập Tức!

Bạn đã quá mệt mỏi vì phải chờ đợi để ảnh của mình được tráng rửa chưa? Bạn có mong muốn được chia sẻ những bức ảnh bản cứng vừa mới được chụp chỉ cách đây vài giây không? Hãy đến với InstaSnap, chiếc máy ảnh mang tính đột phá cho phép bạn chụp và in kỷ niệm của mình ngay lập tức! Với thiết kế thanh lịch và giao diện thân thiện với người dùng, InstaSnap hoàn hảo cho tất cả mọi người. Dù bạn là một nhiếp ảnh gia kỳ cựu hay mới bắt đầu, bạn sẽ thích việc cầm trên tay những bức ảnh thực tế chỉ vài giây sau khi bấm máy. Hãy nói lời tạm biệt với những hình ảnh kỹ thuật số mờ nhòe và chào đón những bức ảnh in chất lượng cao kéo dài suốt đời!`;

const PASSAGE_MUSIC_FESTIVALS = `Unleash Your Inner Festival Fanatic with "The Ultimate Guide to Music Festivals"!

Ready to dive headfirst into the exhilarating world of music festivals? This guide is your passport to unforgettable experiences! Learn how to choose the perfect festival for your (7) ____________, whether you crave booming bass or soulful melodies. We'll cover (8) ____________ aspect of festival-going, from securing tickets and packing essentials to navigating crowds and staying safe. Discover insider tips on camping like a pro and making the most of (9) ____________ festival budget. Don’t (10) ____________ on crucial info like setting up camp or staying hydrated – we've got you covered! Learn the unspoken rules of festival etiquette and connect with fellow music lovers. This guide will transform you from a newbie to a seasoned festival-goer, ready to embrace the electric atmosphere and create memories that will last a lifetime. Get your copy today and (11) ____________ for an epic adventure! Available (12) ____________.`;

const PASSAGE_MUSIC_FESTIVALS_TRANS = `[ĐOẠN 1] Khơi dậy chất “fan cuồng lễ hội” trong bạn với “Cẩm Nang Tối Thượng Về Lễ Hội Âm Nhạc”!

Sẵn sàng lao mình vào thế giới lễ hội âm nhạc đầy hứng khởi chưa? Cuốn cẩm nang này sẽ là tấm hộ chiếu đưa bạn đến những trải nghiệm không thể quên! Hãy học cách lựa chọn lễ hội hoàn hảo phù hợp với gu của bạn, dù bạn khao khát dòng nhạc bass dồn dập hay những giai điệu da diết. Chúng tôi sẽ bao quát mọi khía cạnh của việc tham gia lễ hội, từ việc mua vé và chuẩn bị đồ đạc thiết yếu đến việc di chuyển trong đám đông và giữ an toàn. Khám phá những mẹo nội bộ về việc cắm trại như một chuyên gia và tận dụng tối đa ngân sách lễ hội của bạn. Đừng bỏ lỡ các thông tin quan trọng như dựng lều hay giữ đủ nước – chúng tôi đã chuẩn bị sẵn cho bạn! Hãy học các quy tắc ứng xử ngầm tại lễ hội và kết nối với những người yêu âm nhạc khác. Cuốn cẩm nang này sẽ biến bạn từ một người mới thành một tay chơi lễ hội dày dạn kinh nghiệm, sẵn sàng đón nhận bầu không khí sôi động và tạo nên những kỷ niệm kéo dài suốt đời. Hãy sở hữu bản sao của bạn ngay hôm nay và chuẩn bị cho một cuộc phiêu lưu hoành tráng!`;

const PASSAGE_FAMILY_BUSINESS = `Family businesses are the backbone of many economies around the world. In fact, they represent an estimated 70% of global GDP and employ a significant portion of the workforce. This pervasive presence highlights their importance not just in economic terms but also in shaping communities and impacting social structures. Understanding their dynamics is therefore crucial for appreciating their influence and ensuring their continued success.

One of the most defining features of family businesses is the overlap between family and business spheres. This intertwining can be both a source of strength and a potential challenge. For instance, shared values and a strong work ethic often stem from familial bonds, fostering a dedicated and committed workforce. This, however, also means that disagreements within the family can easily spill over into the business, potentially impacting decision-making and overall harmony.

Succession planning presents another critical aspect of family business dynamics. The question of who will inherit the leadership role and how the transition will be managed is often fraught with emotional and practical complexities. Successfully navigating this process is crucial for the business's longevity, requiring careful planning, open communication, and sometimes, external guidance to ensure a smooth transition.

Finally, maintaining a balance between tradition and innovation is a perpetual challenge for family businesses. While a strong legacy and established practices can be advantageous, they also risk becoming stagnant in the face of evolving markets and technological advancements. Successfully adapting to change while honoring their heritage is a delicate balance that often determines the long-term sustainability and success of family businesses.`;

const PASSAGE_FAMILY_BUSINESS_TRANS = `[ĐOẠN 1] Doanh nghiệp gia đình là trụ cột của nhiều nền kinh tế trên thế giới. Thực tế, chúng đóng góp khoảng 70% GDP toàn cầu và tạo việc làm cho một bộ phận lớn lực lượng lao động. Sự hiện diện rộng khắp này cho thấy tầm quan trọng của doanh nghiệp gia đình không chỉ ở khía cạnh kinh tế mà còn trong việc định hình cộng đồng và tác động đến cấu trúc xã hội. Vì vậy, hiểu rõ cách thức vận hành của chúng là điều cần thiết để đánh giá đúng tầm ảnh hưởng và bảo đảm sự phát triển bền vững lâu dài.

[ĐOẠN 2] Một trong những đặc điểm nổi bật nhất của doanh nghiệp gia đình là sự giao thoa giữa phạm vi gia đình và phạm vi kinh doanh. Sự đan xen này vừa có thể tạo nên sức mạnh, vừa tiềm ẩn nhiều thách thức. Chẳng hạn, các giá trị chung và tinh thần làm việc mạnh mẽ thường bắt nguồn từ mối gắn kết gia đình, góp phần xây dựng một đội ngũ tận tâm và trung thành. Tuy nhiên, điều này cũng đồng nghĩa với việc những bất đồng trong gia đình dễ dàng lan sang công việc, có thể ảnh hưởng đến quá trình ra quyết định và sự hài hòa chung.

[ĐOẠN 3] Kế hoạch kế nhiệm là một khía cạnh quan trọng khác trong quản trị doanh nghiệp gia đình. Câu hỏi ai sẽ đảm nhận vai trò lãnh đạo và quá trình chuyển giao sẽ được thực hiện như thế nào thường đi kèm với nhiều phức tạp cả về cảm xúc lẫn thực tế. Việc xử lý suôn sẻ giai đoạn này có ý nghĩa then chốt đối với sự trường tồn của doanh nghiệp, đòi hỏi lập kế hoạch cẩn trọng, giao tiếp cởi mở và đôi khi cần đến sự tư vấn bên ngoài để bảo đảm một quá trình chuyển giao trôi chảy.

[ĐOẠN 4] Cuối cùng, duy trì sự cân bằng giữa truyền thống và đổi mới luôn là một thách thức thường trực đối với doanh nghiệp gia đình. Dù giá trị di sản và những thực hành lâu đời có thể mang lại lợi thế, chúng cũng có nguy cơ trở nên lỗi thời trước sự biến đổi của thị trường và tiến bộ công nghệ. Khả năng thích ứng với thay đổi trong khi vẫn tôn trọng bản sắc truyền thống là yếu tố then chốt quyết định tính bền vững và thành công lâu dài của doanh nghiệp gia đình.`;

const PASSAGE_BA_BE = `Nestled in the mountainous region of northern Vietnam, Ba Be National Park offers a serene escape dominated by the captivating presence of Ba Be Lake. (26) ____________ the area boasts exceptional biodiversity, harboring over 1,200 species of plants and 281 species of animals. (27) ____________, the shimmering expanse of the lake itself.

The heart of the park, Ba Be Lake, is (28) ____________: Pe Leng, Pe Lu, and Pe Lam. These tranquil waters, reflecting the sky and surrounding greenery, offer a sense of profound peace. Visitors can explore the lake by traditional wooden boat, gliding past small islands and hidden caves, some of which hold historical and cultural significance. One such cave, Puong Cave, stretches for 300 meters and houses a colony of thousands of bats, creating a truly remarkable spectacle.

While the lake steals the show, the surrounding forests are teeming with life and offer ample opportunity for exploration. Trekking paths wind through the dense vegetation, leading to hidden waterfalls and viewpoints that provide breathtaking panoramas of the park. (29) ____________ provides yet another opportunity to connect with nature and observe the diverse birdlife that calls Ba Be home.

(30) ____________. The combination of breathtaking scenery, rich biodiversity, and cultural significance makes it a destination that appeals to a wide range of interests, leaving a lasting impression on all who visit.`;

const PASSAGE_BA_BE_TRANS = `[ĐOẠN 1] Ẩn mình trong vùng núi phía Bắc Việt Nam, Vườn quốc gia Ba Bể mang đến một nơi nghỉ ngơi yên bình, được tô điểm bởi sự hiện diện đầy cuốn hút của hồ Ba Bể. Được thành lập như một vườn quốc gia vào năm 1992, khu vực này sở hữu mức độ đa dạng sinh học đặc biệt, với hơn 1.200 loài thực vật và 281 loài động vật. Du khách đến Ba Bể được chiêm ngưỡng những cảnh quan tuyệt đẹp với các dãy núi đá vôi, những thung lũng xanh mướt và tất nhiên là mặt hồ lấp lánh.

[ĐOẠN 2] Trái tim của công viên — hồ Ba Bể — thực chất được tạo thành từ ba hồ thông nhau: Pe Leng, Pe Lu và Pe Lam. Những mặt nước yên bình này, phản chiếu bầu trời và màu xanh của núi rừng xung quanh, mang đến cảm giác tĩnh lặng sâu sắc. Du khách có thể khám phá hồ bằng thuyền gỗ truyền thống, lướt qua những hòn đảo nhỏ và các hang động ẩn mình, một số trong số đó mang giá trị lịch sử và văn hóa. Một ví dụ tiêu biểu là hang Puông, dài 300 mét, là nơi cư trú của hàng nghìn con dơi, tạo nên một cảnh tượng vô cùng ngoạn mục.

[ĐOẠN 3] Dù hồ Ba Bể là điểm thu hút chính, những cánh rừng bao quanh cũng tràn ngập sự sống và mở ra nhiều cơ hội khám phá. Các lối mòn trekking uốn lượn qua thảm thực vật dày đặc, dẫn đến những thác nước ẩn mình và các điểm quan sát mang đến những góc nhìn toàn cảnh tuyệt đẹp về công viên. Hồ Kiếm, một hồ nhỏ nằm trong công viên và có thể tiếp cận bằng đường mòn, mang đến thêm một cơ hội để hòa mình vào thiên nhiên và quan sát các loài chim đa dạng sinh sống tại Ba Bể.

[ĐOẠN 4] Dù muốn tìm kiếm những trải nghiệm phiêu lưu hay chỉ đơn giản là một khoảnh khắc tĩnh lặng trong vòng tay thiên nhiên, Vườn quốc gia Ba Bể đều mang đến một trải nghiệm độc đáo và khó quên. Sự kết hợp giữa cảnh quan ngoạn mục, đa dạng sinh học phong phú và giá trị văn hóa khiến nơi đây trở thành điểm đến hấp dẫn với nhiều đối tượng du khách, để lại ấn tượng sâu đậm trong lòng tất cả những ai ghé thăm.`;

const PASSAGE_LANGUAGE_EVOLUTION = `The evolution of language, a defining characteristic of humanity, is shrouded in mystery, with its origins stretching back tens of thousands of years. [I] The increasing complexity of social interactions within early human groups likely gave rise to the need for more sophisticated communication, pushing the development of language forward. [II] While pinpointing the exact moment language emerged is impossible, researchers agree that its development is intricately tied to the evolution of our brains, particularly areas like Broca's and Wernicke's areas, which are crucial for speech production and comprehension. [III] This co-evolution of brain and social structure played a vital role in shaping the communicative abilities that set us apart from other species. [IV]

These early forms of language were likely rudimentary, consisting of gestures, vocalizations, and simple words representing concrete objects or actions. This proto-language gradually evolved, incorporating more abstract concepts and grammatical structures. Evidence for this progression can be seen in the development of tools and symbolic art, which suggest an increasing capacity for abstract thought and representation, crucial for complex language. The development of agriculture and settled communities further accelerated the evolution of language, as the need for cooperation and information sharing became even more critical.

One key aspect of language evolution is the emergence of language-specific brain regions. As language became more complex, specific areas of the brain, like Broca's area, specialized in processing grammatical structures and producing speech. This specialization allowed for more efficient and nuanced communication. Simultaneously, the vocal tract also underwent evolutionary changes, enabling the production of a wider range of sounds and contributing to the diversity of languages we see today. The interplay between brain development, vocal adaptation, and social pressures shaped the trajectory of language evolution.

Despite the challenges in reconstructing the precise path of language evolution, studying existing languages, their relationships, and the fossil record provides valuable insights. By comparing different languages and their structures, linguists can trace back common ancestries and reconstruct proto-languages, offering glimpses into the past. Further research into the genetic and neurological underpinnings of language promises to further illuminate this fascinating aspect of human evolution.`;

const PASSAGE_LANGUAGE_EVOLUTION_TRANS = `[ĐOẠN 1] Sự tiến hóa của ngôn ngữ – một đặc trưng làm nên tính người – vẫn bao phủ trong nhiều điều bí ẩn, với nguồn gốc kéo dài hàng chục nghìn năm. Sự gia tăng mức độ phức tạp trong các tương tác xã hội của những nhóm người nguyên thủy có lẽ đã tạo ra nhu cầu về một hệ thống giao tiếp tinh vi hơn, từ đó thúc đẩy sự hình thành và phát triển của ngôn ngữ. Sự đồng tiến hóa giữa bộ não và cấu trúc xã hội này giữ vai trò then chốt trong việc định hình những năng lực giao tiếp đã tách biệt loài người khỏi các loài khác.

[ĐOẠN 2] Những dạng ngôn ngữ sơ khai có lẽ còn rất thô sơ, bao gồm các cử chỉ, âm thanh và những từ đơn giản dùng để biểu thị các sự vật hay hành động cụ thể. Hình thức “tiền ngôn ngữ” này dần dần phát triển, tiếp thu thêm các khái niệm trừu tượng và cấu trúc ngữ pháp. Bằng chứng cho quá trình này được thể hiện qua sự phát triển của công cụ và nghệ thuật biểu tượng, cho thấy năng lực tư duy trừu tượng và khả năng biểu đạt ngày càng được mở rộng – những yếu tố thiết yếu cho sự hình thành của ngôn ngữ phức tạp. Sự xuất hiện của nông nghiệp và cộng đồng định cư tiếp tục thúc đẩy quá trình tiến hóa ngôn ngữ, khi nhu cầu hợp tác và trao đổi thông tin trở nên quan trọng hơn bao giờ hết.

[ĐOẠN 3] Một khía cạnh then chốt trong tiến trình tiến hóa của ngôn ngữ là sự xuất hiện của các vùng não chuyên biệt. Khi ngôn ngữ trở nên phức tạp hơn, những khu vực nhất định trong não – như vùng Broca – bắt đầu đảm nhiệm chức năng xử lý cấu trúc ngữ pháp và tạo lập lời nói. Sự chuyên môn hóa này cho phép con người giao tiếp hiệu quả và tinh tế hơn. Đồng thời, cơ quan phát âm cũng trải qua các biến đổi tiến hóa, giúp con người tạo ra nhiều âm sắc hơn và góp phần tạo nên sự đa dạng của các ngôn ngữ ngày nay. Sự tương tác giữa tiến hóa của bộ não, sự thích ứng của cơ quan phát âm và áp lực xã hội đã định hình toàn bộ hành trình phát triển của ngôn ngữ.

[ĐOẠN 4] Dù việc tái dựng chính xác con đường tiến hóa của ngôn ngữ còn nhiều thách thức, việc nghiên cứu các ngôn ngữ đang tồn tại, mối quan hệ giữa chúng, cùng với tư liệu hóa thạch, mang lại những hiểu biết quan trọng. Bằng cách so sánh các ngôn ngữ và cấu trúc của chúng, các nhà ngôn ngữ học có thể lần ngược về những nguồn gốc chung và tái tạo các “tiền ngôn ngữ”, mở ra những lát cắt quý giá về quá khứ. Nghiên cứu sâu hơn về nền tảng di truyền và thần kinh của ngôn ngữ hứa hẹn sẽ tiếp tục soi sáng khía cạnh hấp dẫn này trong tiến trình tiến hóa của loài người.`;

export const HAN_THUYEN_2026_QUESTIONS: Question[] = [
  {
    id: 'ht-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_INSTASNAP,
    passageTranslation: PASSAGE_INSTASNAP_TRANS,
    questionText: 'Question 1. Tired of waiting (1) _____ your photos to develop?',
    options: [
      { id: 'A', text: 'by', translation: 'bên cạnh' },
      { id: 'B', text: 'for', translation: 'cho / chờ đợi ai/cái gì' },
      { id: 'C', text: 'on', translation: 'trên / phục vụ' },
      { id: 'D', text: 'at', translation: 'tại địa điểm' }
    ],
    correctAnswer: 'B',
    explanation: '• Cấu trúc cố định: "wait for someone/something to do something" (chờ đợi ai/cái gì làm gì). Chọn B. for.',
    translation: 'Bạn đã mệt mỏi vì phải chờ đợi ảnh của mình được tráng rửa chưa?',
    topicTag: 'Giới từ & Cấu trúc Wait'
  },
  {
    id: 'ht-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_INSTASNAP,
    passageTranslation: PASSAGE_INSTASNAP_TRANS,
    questionText: 'Question 2. Wish you could share physical pictures (2) _____ just moments ago?',
    options: [
      { id: 'A', text: 'to take', translation: 'to V chỉ mục đích' },
      { id: 'B', text: 'took', translation: 'quá khứ đơn' },
      { id: 'C', text: 'taken', translation: 'được chụp' },
      { id: 'D', text: 'taking', translation: 'dạng chủ động' }
    ],
    correctAnswer: 'C',
    explanation: '• Rút gọn mệnh đề quan hệ dạng bị động: "pictures which were taken" -> "pictures taken". Chọn C. taken.',
    translation: 'Bạn có muốn chia sẻ những bức ảnh bản cứng vừa mới được chụp cách đây vài giây không?',
    topicTag: 'Rút gọn Mệnh đề Bị động'
  },
  {
    id: 'ht-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_INSTASNAP,
    passageTranslation: PASSAGE_INSTASNAP_TRANS,
    questionText: 'Question 3. revolutionary new camera that lets you (3) _____ your memories in an instant!',
    options: [
      { id: 'A', text: 'capture and print', translation: 'ghi lại khoảnh khắc và in' },
      { id: 'B', text: 'grab and draw', translation: 'chộp lấy và vẽ' },
      { id: 'C', text: 'take and write', translation: 'chụp và viết' },
      { id: 'D', text: 'seize and print', translation: 'chiếm đoạt và in' }
    ],
    correctAnswer: 'A',
    explanation: '• Trong nhiếp ảnh, "capture" (ghi lại khoảnh khắc) và "print" (in ra) là các thuật ngữ chuyên ngành chính xác nhất. Chọn A.',
    translation: 'Cho phép bạn chụp và in lại những kỷ niệm ngay lập tức!',
    topicTag: 'Từ vựng Chuyên ngành Nhiếp ảnh'
  },
  {
    id: 'ht-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_INSTASNAP,
    passageTranslation: PASSAGE_INSTASNAP_TRANS,
    questionText: 'Question 4. InstaSnap is perfect for (4) _____.',
    options: [
      { id: 'A', text: 'enthusiasts of photography all levels', translation: 'sai trật tự' },
      { id: 'B', text: 'all levels of enthusiasts photography', translation: 'sai trật tự' },
      { id: 'C', text: 'photography enthusiasts of all levels', translation: 'những người đam mê nhiếp ảnh ở mọi trình độ' },
      { id: 'D', text: 'photography levels of all enthusiasts', translation: 'sai trật tự' }
    ],
    correctAnswer: 'C',
    explanation: '• Trật tự danh từ ghép + cụm giới từ: "photography enthusiasts" (người đam mê nhiếp ảnh) + "of all levels" (ở mọi trình độ). Chọn C.',
    translation: 'InstaSnap hoàn hảo dành cho những người đam mê nhiếp ảnh ở mọi trình độ.',
    topicTag: 'Trật tự Cụm Danh từ'
  },
  {
    id: 'ht-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_INSTASNAP,
    passageTranslation: PASSAGE_INSTASNAP_TRANS,
    questionText: 'Question 5. you\'ll love (5) _____ hold your photos in your hand',
    options: [
      { id: 'A', text: 'being able to', translation: 'cảm giác có thể' },
      { id: 'B', text: 'to be able', translation: 'thiếu to' },
      { id: 'C', text: 'to able', translation: 'thiếu be' },
      { id: 'D', text: 'be able to', translation: 'nguyên mẫu' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc "love + V-ing" (thích trải nghiệm làm gì) -> "love being able to hold...". Chọn A. being able to.',
    translation: 'Bạn sẽ thích cảm giác có thể cầm những bức ảnh trên tay.',
    topicTag: 'Danh động từ V-ing'
  },
  {
    id: 'ht-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_INSTASNAP,
    passageTranslation: PASSAGE_INSTASNAP_TRANS,
    questionText: 'Question 6. hello to (6) _____ prints that will last a lifetime!',
    options: [
      { id: 'A', text: 'vibrant', translation: 'rực rỡ / sống động' },
      { id: 'B', text: 'vibration', translation: 'danh từ' },
      { id: 'C', text: 'vibrate', translation: 'động từ' },
      { id: 'D', text: 'vibrantly', translation: 'trạng từ' }
    ],
    correctAnswer: 'A',
    explanation: '• Đứng trước danh từ "prints" cần tính từ bổ nghĩa: "vibrant prints" (bản in rực rỡ/sống động). Chọn A. vibrant.',
    translation: 'Chào đón những bản in sống động có thể lưu giữ suốt cả đời!',
    topicTag: 'Từ loại (Word Form)'
  },
  {
    id: 'ht-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_MUSIC_FESTIVALS,
    passageTranslation: PASSAGE_MUSIC_FESTIVALS_TRANS,
    questionText: 'Question 7. choose the perfect festival for your (7) _____',
    options: [
      { id: 'A', text: 'taste', translation: 'gu / sở thích cá nhân' },
      { id: 'B', text: 'hearing', translation: 'thính giác' },
      { id: 'C', text: 'sound', translation: 'âm thanh' },
      { id: 'D', text: 'rhythm', translation: 'nhịp điệu' }
    ],
    correctAnswer: 'A',
    explanation: '• "choose the perfect festival for your taste" (chọn lễ hội phù hợp với gu/sở thích âm nhạc của bạn). Chọn A. taste.',
    translation: 'Học cách chọn lễ hội hoàn hảo phù hợp với gu của bạn.',
    topicTag: 'Từ vựng & Cụm từ'
  },
  {
    id: 'ht-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_MUSIC_FESTIVALS,
    passageTranslation: PASSAGE_MUSIC_FESTIVALS_TRANS,
    questionText: 'Question 8. We\'ll cover (8) _____ aspect of festival-going',
    options: [
      { id: 'A', text: 'each', translation: 'mỗi cá thể rời rạc' },
      { id: 'B', text: 'all', translation: 'đi với danh từ số nhiều' },
      { id: 'C', text: 'every', translation: 'mọi' },
      { id: 'D', text: 'many', translation: 'đi với danh từ số nhiều' }
    ],
    correctAnswer: 'C',
    explanation: '• "Every + danh từ số ít" -> "every aspect" (mọi khía cạnh toàn diện). Chọn C. every.',
    translation: 'Chúng tôi sẽ đề cập đến mọi khía cạnh của việc tham gia lễ hội.',
    topicTag: 'Từ định lượng'
  },
  {
    id: 'ht-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_MUSIC_FESTIVALS,
    passageTranslation: PASSAGE_MUSIC_FESTIVALS_TRANS,
    questionText: 'Question 9. making the most of (9) _____ festival budget.',
    options: [
      { id: 'A', text: 'their', translation: 'của họ' },
      { id: 'B', text: 'our', translation: 'của chúng tôi' },
      { id: 'C', text: 'your', translation: 'của bạn' },
      { id: 'D', text: 'her', translation: 'của cô ấy' }
    ],
    correctAnswer: 'C',
    explanation: '• Bài viết đang trò chuyện trực tiếp với người đọc ở ngôi thứ 2 ("Unleash Your Inner...", "You will love") -> "your festival budget". Chọn C. your.',
    translation: 'Tận dụng tối đa ngân sách đi lễ hội của bạn.',
    topicTag: 'Tính từ sở hữu'
  },
  {
    id: 'ht-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_MUSIC_FESTIVALS,
    passageTranslation: PASSAGE_MUSIC_FESTIVALS_TRANS,
    questionText: 'Question 10. Don’t (10) _____ on crucial info like setting up camp',
    options: [
      { id: 'A', text: 'carry on', translation: 'tiếp tục' },
      { id: 'B', text: 'stand by', translation: 'ủng hộ / chờ đợi' },
      { id: 'C', text: 'miss out', translation: 'bỏ lỡ' },
      { id: 'D', text: 'put up', translation: 'dựng lên / chịu đựng' }
    ],
    correctAnswer: 'C',
    explanation: '• Phrasal verb: "miss out on something" = bỏ lỡ điều gì hay/quan trọng. Chọn C. miss out.',
    translation: 'Đừng bỏ lỡ những thông tin quan trọng như việc dựng lều.',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'ht-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_MUSIC_FESTIVALS,
    passageTranslation: PASSAGE_MUSIC_FESTIVALS_TRANS,
    questionText: 'Question 11. Get your copy today and (11) _____ for an epic adventure!',
    options: [
      { id: 'A', text: 'prevent', translation: 'ngăn chặn' },
      { id: 'B', text: 'pretend', translation: 'giả vờ' },
      { id: 'C', text: 'produce', translation: 'sản xuất' },
      { id: 'D', text: 'prepare', translation: 'chuẩn bị' }
    ],
    correctAnswer: 'D',
    explanation: '• Cấu trúc "prepare for something" = chuẩn bị cho điều gì. Chọn D. prepare.',
    translation: 'Mua bản sao ngay hôm nay và chuẩn bị cho một chuyến phiêu lưu để đời!',
    topicTag: 'Động từ & Giới từ'
  },
  {
    id: 'ht-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_MUSIC_FESTIVALS,
    passageTranslation: PASSAGE_MUSIC_FESTIVALS_TRANS,
    questionText: 'Question 12. Available (12) _____.',
    options: [
      { id: 'A', text: 'within the next week', translation: 'trong tuần tới' },
      { id: 'B', text: 'by the other means', translation: 'bởi phương tiện khác' },
      { id: 'C', text: 'at all major bookstores', translation: 'tại tất cả các nhà sách lớn' },
      { id: 'D', text: 'under the same conditions', translation: 'dưới cùng điều kiện' }
    ],
    correctAnswer: 'C',
    explanation: '• Cụm kết quảng cáo sách kinh điển: "Available at all major bookstores" (Hiện có bán tại tất cả nhà sách lớn). Chọn C.',
    translation: 'Hiện có bán tại tất cả các nhà sách lớn.',
    topicTag: 'Cụm từ quảng cáo'
  },
  {
    id: 'ht-q13',
    type: 'reordering',
    questionText: 'Question 13. Choose the best arrangement of sentences to form a coherent text:\nd. In today’s globalized world, cultural identity plays a vital role in helping young people express themselves.\ne. It provides a sense of belonging and pride, allowing them to connect with their heritage while navigating diverse influences.\nc. By embracing their cultural roots, youth can confidently share their unique perspectives and creativity.\nb. This blend of tradition and modernity enriches the global community, fostering understanding and respect among different cultures.\na. Ultimately, cultural identity empowers young individuals to celebrate who they are while engaging with the world around them.',
    options: [
      { id: 'A', text: 'c – e – b – d – a', translation: 'c-e-b-d-a' },
      { id: 'B', text: 'd – e – c – b – a', translation: 'd-e-c-b-a' },
      { id: 'C', text: 'b – c – d – e – a', translation: 'b-c-d-e-a' },
      { id: 'D', text: 'b – d – c – e – a', translation: 'b-d-c-e-a' }
    ],
    correctAnswer: 'B',
    explanation: '• d mở đoạn tầm quan trọng bản sắc văn hóa -> e giải thích cảm giác thuộc về di sản -> c thanh niên tự tin chia sẻ góc nhìn -> b sự hòa trộn truyền thống & hiện đại -> a kết luận trao quyền cho giới trẻ. Trật tự: d - e - c - b - a. Chọn B.',
    translation: 'Sắp xếp đoạn văn bản sắc văn hóa.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'ht-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the best arrangement of sentences to form a coherent text:\nb. The reintroduction of wolves to Yellowstone National Park has become a classic example of successful conservation.\na. Initially, many were skeptical about how this would affect the ecosystem.\nc. Over time, the wolves\' presence helped control the elk population.\nd. This led to the regeneration of vegetation and the return of various species.\ne. Today, the park serves as a model for ecosystem restoration worldwide.',
    options: [
      { id: 'A', text: 'b – a – c – e – d', translation: 'b-a-c-e-d' },
      { id: 'B', text: 'b – e – c – d – a', translation: 'b-e-c-d-a' },
      { id: 'C', text: 'b – a – c – d – e', translation: 'b-a-c-d-e' },
      { id: 'D', text: 'b – c – a – e – d', translation: 'b-c-a-e-d' }
    ],
    correctAnswer: 'C',
    explanation: '• b mở đoạn ví dụ bảo tồn loài sói -> a ban đầu người ta hoài nghi -> c diễn biến theo thời gian kiểm soát đàn nai -> d kết quả thảm thực vật hồi sinh -> e hiện tại công viên thành hình mẫu. Trật tự: b - a - c - d - e. Chọn C.',
    translation: 'Sắp xếp đoạn văn bảo tồn loài sói.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'ht-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the best arrangement of sentences to make a meaningful conversation:\nc. Hoa: Hey Linh, how’s your online course going these days?\na. Linh: Actually, it\'s better than I expected. The teachers are supportive and the lessons are interesting.\nb. Hoa: That’s great to hear! I was worried it might be hard to stay focused at home.',
    options: [
      { id: 'A', text: 'c – a – b', translation: 'c-a-b' },
      { id: 'B', text: 'a – b – c', translation: 'a-b-c' },
      { id: 'C', text: 'b – c – a', translation: 'b-c-a' },
      { id: 'D', text: 'b – a – c', translation: 'b-a-c' }
    ],
    correctAnswer: 'A',
    explanation: '• c (Hoa hỏi về khóa học online) -> a (Linh trả lời tốt hơn mong đợi) -> b (Hoa mừng & chia sẻ lo lắng trước đó). Trật tự: c - a - b. Chọn A.',
    translation: 'Sắp xếp hội thoại khóa học online.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'ht-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the best arrangement of sentences to form a complete email:\nb. Thanks so much for sharing the academic papers on green living.\na. I found it fascinating to explore some of the new research articles you recommended.\nd. Thanks also for the suggestion about the online conferences – they are much more insightful than the ones I usually attend.\ne. I find the topic of environmental protection incredibly intriguing, but I am currently overwhelmed with coursework, so I will explore it further next semester.\nc. By the way, we should collaborate on a research project sometime. What do you think?',
    options: [
      { id: 'A', text: 'b – a – d – e – c', translation: 'b-a-d-e-c' },
      { id: 'B', text: 'd – b – a – e – c', translation: 'd-b-a-e-c' },
      { id: 'C', text: 'b – c – e – d – a', translation: 'b-c-e-d-a' },
      { id: 'D', text: 'd – a – c – b – e', translation: 'd-a-c-b-e' }
    ],
    correctAnswer: 'A',
    explanation: '• b cảm ơn tài liệu sống xanh -> a nhận xét nghiên cứu thú vị -> d cảm ơn gợi ý hội nghị online -> e từ chối hẹn học kỳ sau do bận bài vở -> c đề xuất hợp trị nghiên cứu tương lai. Trật tự: b - a - d - e - c. Chọn A.',
    translation: 'Sắp xếp thư cá nhân.',
    topicTag: 'Sắp xếp thư cá nhân'
  },
  {
    id: 'ht-q17',
    type: 'reordering',
    questionText: 'Question 17. Choose the best arrangement of sentences to make a meaningful conversation:\nc. Steven: Have you heard Elon Musk’s story? He faced so many challenges to make an impact.\nd. Paul: Yes, I admire his determination. Who else do you find inspiring?\na. Steven: Malala Yousafzai. Her courage in fighting for girls’ education is incredible.\nb. Paul: Absolutely, she’s a true role model. Do you think her story has influenced more young people to stand up for their beliefs?\ne. Steven: Definitely. I think her story empowers people to make a difference no matter how tough the circumstances.',
    options: [
      { id: 'A', text: 'e – d – c – a – b', translation: 'e-d-c-a-b' },
      { id: 'B', text: 'e – b – a – d – c', translation: 'e-b-a-d-c' },
      { id: 'C', text: 'c – d – a – b – e', translation: 'c-d-a-b-e' },
      { id: 'D', text: 'c – b – a – d – e', translation: 'c-b-a-d-e' }
    ],
    correctAnswer: 'C',
    explanation: '• c (Steven hỏi chuyện Elon Musk) -> d (Paul ngưỡng mộ & hỏi thêm người truyền cảm hứng khác) -> a (Steven nhắc đến Malala Yousafzai) -> b (Paul khen role model & hỏi tác động) -> e (Steven chốt ý nghĩa). Trật tự: c - d - a - b - e. Chọn C.',
    translation: 'Sắp xếp hội thoại nhân vật truyền cảm hứng.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'ht-q18',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAMILY_BUSINESS,
    passageTranslation: PASSAGE_FAMILY_BUSINESS_TRANS,
    questionText: 'Question 18. Which of the following best paraphrases the first sentence in paragraph 3?',
    options: [
      { id: 'A', text: 'Succession planning is only somewhat important for family businesses.', translation: 'Chỉ hơi hơi quan trọng' },
      { id: 'B', text: 'Only the dynamics of family businesses are affected by succession planning.', translation: 'Chỉ động lực bị ảnh hưởng' },
      { id: 'C', text: 'Family businesses should not consider succession planning as a critical aspect.', translation: 'Không nên coi là quan trọng' },
      { id: 'D', text: 'A crucial aspect of family business dynamics is planning for leadership succession.', translation: 'Một khía cạnh quan trọng của quản trị doanh nghiệp gia đình là lập kế hoạch kế nhiệm lãnh đạo' }
    ],
    correctAnswer: 'D',
    explanation: '• D paraphrase chính xác nhất câu "Succession planning presents another critical aspect of family business dynamics" (critical = crucial). Chọn D.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'ht-q19',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAMILY_BUSINESS,
    passageTranslation: PASSAGE_FAMILY_BUSINESS_TRANS,
    questionText: 'Question 19. In which paragraph of the passage does the writer emphasize the importance of adapting to external changes for the survival of family businesses?',
    options: [
      { id: 'A', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'B', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'C', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'D', text: 'Paragraph 2', translation: 'Đoạn 2' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 4 nhấn mạnh: "Successfully adapting to change while honoring their heritage is a delicate balance that often determines the long-term sustainability...". Chọn A (Paragraph 4).',
    translation: 'Đoạn nào nhấn mạnh tầm quan trọng của việc thích ứng với thay đổi bên ngoài?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'ht-q20',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAMILY_BUSINESS,
    passageTranslation: PASSAGE_FAMILY_BUSINESS_TRANS,
    questionText: 'Question 20. The word "perpetual" in paragraph 4 could be best replaced by:',
    options: [
      { id: 'A', text: 'infrequent', translation: 'hiếm khi' },
      { id: 'B', text: 'temporary', translation: 'tạm thời' },
      { id: 'C', text: 'occasional', translation: 'thỉnh thoảng' },
      { id: 'D', text: 'ongoing', translation: 'đang diễn ra liên tục / thường trực' }
    ],
    correctAnswer: 'D',
    explanation: '• Từ "perpetual" = liên tục, vĩnh viễn, thường trực = ongoing. Chọn D. ongoing.',
    translation: 'Từ "perpetual" trong đoạn 4 có nghĩa gần nhất với:',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'ht-q21',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAMILY_BUSINESS,
    passageTranslation: PASSAGE_FAMILY_BUSINESS_TRANS,
    questionText: 'Question 21. The word "This" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'family disagreements', translation: 'bất đồng gia đình' },
      { id: 'B', text: 'a strong work ethic', translation: 'tinh thần làm việc' },
      { id: 'C', text: 'shared family values', translation: 'giá trị gia đình' },
      { id: 'D', text: 'the overlap of family and business', translation: 'sự giao thoa giữa gia đình và kinh doanh' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 2 ghi: "...the overlap between family and business spheres. This intertwining can be both...". "This" chỉ sự giao thoa này. Chọn D.',
    translation: 'Từ "This" ở đoạn 2 thay thế cho: sự giao thoa giữa gia đình và kinh doanh.',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'ht-q22',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAMILY_BUSINESS,
    passageTranslation: PASSAGE_FAMILY_BUSINESS_TRANS,
    questionText: 'Question 22. The word "pervasive" in paragraph 1 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'important', translation: 'quan trọng' },
      { id: 'B', text: 'widespread', translation: 'rộng khắp' },
      { id: 'C', text: 'influential', translation: 'có ảnh hưởng' },
      { id: 'D', text: 'limited', translation: 'bị giới hạn / hạn chế' }
    ],
    correctAnswer: 'D',
    explanation: '• Từ "pervasive" = lan tỏa rộng khắp. Trái nghĩa với nó là "limited" (bị giới hạn/hạn chế). Chọn D. limited.',
    translation: 'Từ "pervasive" trong đoạn 1 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'ht-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAMILY_BUSINESS,
    passageTranslation: PASSAGE_FAMILY_BUSINESS_TRANS,
    questionText: 'Question 23. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'External guidance is always required for successful succession planning.', translation: 'Luôn luôn cần tư vấn bên ngoài' },
      { id: 'B', text: 'Family businesses rarely face challenges related to internal disagreements.', translation: 'Hiếm khi gặp mâu thuẫn' },
      { id: 'C', text: 'Family businesses contribute significantly to the global economy.', translation: 'Doanh nghiệp gia đình đóng góp đáng kể cho nền kinh tế toàn cầu' },
      { id: 'D', text: 'Most family businesses prioritize innovation over tradition.', translation: 'Ưu tiên đổi mới hơn truyền thống' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 1 nêu rõ: "they represent an estimated 70% of global GDP" -> Đóng góp đáng kể cho kinh tế toàn cầu. Chọn C.',
    translation: 'Phát biểu nào sau đây ĐÚNG theo bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin TRUE'
  },
  {
    id: 'ht-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAMILY_BUSINESS,
    passageTranslation: PASSAGE_FAMILY_BUSINESS_TRANS,
    questionText: 'Question 24. Which of the following is NOT mentioned as a challenge faced by family businesses?',
    options: [
      { id: 'A', text: 'Potential for family disagreements to affect business', translation: 'Mâu thuẫn gia đình ảnh hưởng kinh doanh' },
      { id: 'B', text: 'Managing succession planning', translation: 'Quản lý kế hoạch kế nhiệm' },
      { id: 'C', text: 'Difficulty attracting investors', translation: 'Khó khăn thu hút nhà đầu tư' },
      { id: 'D', text: 'Balancing tradition and innovation', translation: 'Cân bằng truyền thống và đổi mới' }
    ],
    correctAnswer: 'C',
    explanation: '• Bài đọc KHÔNG hề nhắc đến việc "khó thu hút nhà đầu tư" (Difficulty attracting investors) như một thách thức. Do đó C là đáp án đúng. Chọn C.',
    translation: 'Chi tiết nào sau đây KHÔNG được đề cập trong đoạn văn?',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'ht-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAMILY_BUSINESS,
    passageTranslation: PASSAGE_FAMILY_BUSINESS_TRANS,
    questionText: 'Question 25. In which paragraph of the passage does the writer use a conditional structure to discuss the potential negative impacts of family involvement in business?',
    options: [
      { id: 'A', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'B', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'C', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'D', text: 'Paragraph 1', translation: 'Đoạn 1' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 2 lập luận điều kiện/nhân quả: Nếu có mâu thuẫn trong gia đình thì sẽ dễ lan sang công việc. Chọn A (Paragraph 2).',
    translation: 'Đoạn nào tác giả lập luận điều kiện về tác động tiêu cực của gia đình vào kinh doanh?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'ht-q26',
    type: 'cloze_test',
    readingPassage: PASSAGE_BA_BE,
    passageTranslation: PASSAGE_BA_BE_TRANS,
    questionText: 'Question 26. Fill in blank (26):',
    options: [
      { id: 'A', text: 'Located in a remote and inaccessible area,', translation: 'mâu thuẫn với du lịch' },
      { id: 'B', text: 'Dominated by a single, large mountain peak,', translation: 'sai thực tế Hồ Ba Bể' },
      { id: 'C', text: 'Established as a national park in 1992,', translation: 'Được thành lập như một vườn quốc gia vào năm 1992' },
      { id: 'D', text: 'Visited by thousands of tourists annually,', translation: 'chưa tạo nền' }
    ],
    correctAnswer: 'C',
    explanation: '• C cung cấp thông tin nền tảng phù hợp nhất trước vế "the area boasts exceptional biodiversity". Chọn C.',
    translation: 'Được thành lập như một vườn quốc gia vào năm 1992.',
    topicTag: 'Điền câu hoàn thành đoạn'
  },
  {
    id: 'ht-q27',
    type: 'cloze_test',
    readingPassage: PASSAGE_BA_BE,
    passageTranslation: PASSAGE_BA_BE_TRANS,
    questionText: 'Question 27. Fill in blank (27):',
    options: [
      { id: 'A', text: 'Despite its natural beauty, the park suffers from pollution', translation: 'sai sắc thái ca ngợi' },
      { id: 'B', text: 'Visitors to Ba Be are rewarded with stunning landscapes marked by limestone peaks, verdant valleys, and of course', translation: 'Du khách đến Ba Bể được chiêm ngưỡng những cảnh quan tuyệt đẹp với các dãy núi đá vôi, thung lũng xanh mướt và tất nhiên là' },
      { id: 'C', text: 'The park is easily accessible by road and offers various accommodations', translation: 'Vườn quốc gia dễ dàng tiếp cận bằng đường bộ và cung cấp nhiều lựa chọn lưu trú' },
      { id: 'D', text: 'Local communities play a vital role in preserving the park\'s ecosystem', translation: 'Cộng đồng địa phương đóng vai trò thiết yếu trong việc bảo tồn hệ sinh thái của vườn quốc gia' }
    ],
    correctAnswer: 'B',
    explanation: '• B tạo đà hoàn hảo cho cấu trúc liệt kê "...marked by A, B, and of course, [the lake]". Chọn B.',
    translation: 'Du khách được thưởng thức cảnh quan tuyệt đẹp với các dãy núi đá vôi, thung lũng xanh mướt và tất nhiên là...',
    topicTag: 'Điền câu hoàn thành đoạn'
  },
  {
    id: 'ht-q28',
    type: 'cloze_test',
    readingPassage: PASSAGE_BA_BE,
    passageTranslation: PASSAGE_BA_BE_TRANS,
    questionText: 'Question 28. The heart of the park, Ba Be Lake, is (28) _____: Pe Leng, Pe Lu, and Pe Lam.',
    options: [
      { id: 'A', text: 'surrounded by dense jungle, impenetrable to humans', translation: 'được bao quanh bởi rừng rậm dày đặc, con người không thể xuyên qua' },
      { id: 'B', text: 'actually comprised of three interconnected lakes', translation: 'thực chất được tạo thành từ 3 hồ thông nhau' },
      { id: 'C', text: 'home to a unique species of freshwater dolphin', translation: 'là nơi sinh sống của một loài cá heo nước ngọt độc đáo' },
      { id: 'D', text: 'artificially created to provide water for the local communities', translation: 'được tạo ra nhân tạo để cung cấp nước cho các cộng đồng địa phương' }
    ],
    correctAnswer: 'B',
    explanation: '• Sau dấu hai chấm liệt kê tên 3 hồ (Pe Leng, Pe Lu, Pe Lam) -> Vế trước cần "comprised of three interconnected lakes". Chọn B.',
    translation: 'Trái tim của công viên, hồ Ba Bể, (28) _____: Pe Leng, Pe Lu, và Pe Lam.',
    topicTag: 'Cụm từ chỉ cấu trúc'
  },
  {
    id: 'ht-q29',
    type: 'cloze_test',
    readingPassage: PASSAGE_BA_BE,
    passageTranslation: PASSAGE_BA_BE_TRANS,
    questionText: 'Question 29. Fill in blank (29):',
    options: [
      { id: 'A', text: 'The nearby town, with its bustling markets and vibrant nightlife,', translation: 'Thị trấn lân cận, với các chợ nhộn nhịp và cuộc sống về đêm sôi động' },
      { id: 'B', text: 'A guided tour through the park\'s extensive cave system,', translation: 'Chuyến tham quan có hướng dẫn qua hệ thống hang động rộng lớn của công viên' },
      { id: 'C', text: 'The challenging climb to the summit of the highest peak,', translation: 'Cuộc leo núi đầy thử thách lên đỉnh ngọn núi cao nhất' },
      { id: 'D', text: 'Kiem Lake, a smaller lake located within the park and accessible by foot,', translation: 'Hồ Kiếm, một hồ nhỏ hơn nằm trong công viên có thể đi bộ đến' }
    ],
    correctAnswer: 'D',
    explanation: '• D phù hợp nhất làm chủ ngữ cho vế sau "...provides yet another opportunity to connect with nature and observe the diverse birdlife". Chọn D.',
    translation: 'Điền cụm từ phù hợp vào chỗ trống (29) _____:',
    topicTag: 'Điền cụm từ hoàn thành câu'
  },
  {
    id: 'ht-q30',
    type: 'cloze_test',
    readingPassage: PASSAGE_BA_BE,
    passageTranslation: PASSAGE_BA_BE_TRANS,
    questionText: 'Question 30. Fill in blank (30):',
    options: [
      { id: 'A', text: 'However, the increasing number of tourists poses a threat to the park\'s delicate balance', translation: 'Tuy nhiên, số lượng khách du lịch ngày càng tăng đặt ra mối đe dọa cho sự cân bằng mỏng manh của công viên' },
      { id: 'B', text: 'Despite its remote location, Ba Be National Park is well worth the journey', translation: 'Mặc dù ở vị trí xa xôi, Vườn quốc gia Ba Bể rất đáng để ghé thăm' },
      { id: 'C', text: 'Whether seeking adventure or simply a moment of tranquility in nature\'s embrace, Ba Be National Park offers a unique and unforgettable experience', translation: 'Dù tìm kiếm cuộc phiêu lưu hay chỉ đơn giản là khoảnh khắc thanh bình giữa thiên nhiên, Vườn quốc gia Ba Bể mang đến trải nghiệm độc đáo và khó quên' },
      { id: 'D', text: 'Therefore, it is crucial to implement sustainable tourism practices', translation: 'Vì vậy, điều quan trọng là phải thực hiện các hoạt động du lịch bền vững' }
    ],
    correctAnswer: 'C',
    explanation: '• C tóm tắt hoàn hảo 2 khía cạnh đã đề cập trong bài (Phiêu lưu & Tĩnh lặng) làm câu kết bài trọn vẹn. Chọn C.',
    translation: 'Điền câu phù hợp vào chỗ trống (30) _____:',
    topicTag: 'Điền câu kết đoạn'
  },
  {
    id: 'ht-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 31. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Brain regions adapted after vocal tract changes.', translation: 'Não thích ứng sau thanh quản' },
      { id: 'B', text: 'Proto-language instantly evolved into complex forms.', translation: 'Tiến hóa ngay lập tức' },
      { id: 'C', text: 'Language evolution\'s exact path is definitively known.', translation: 'Biết chính xác con đường' },
      { id: 'D', text: 'Social interaction complexity spurred early language development.', translation: 'Sự phức tạp trong tương tác xã hội đã thúc đẩy sự phát triển của ngôn ngữ sơ khai' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 1 nêu rõ: "The increasing complexity of social interactions within early human groups likely gave rise to the need for more sophisticated communication...". Chọn D.',
    translation: 'Phát biểu nào sau đây ĐÚNG theo bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin TRUE'
  },
  {
    id: 'ht-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 32. Which of the following best summarises the passage?',
    options: [
      { id: 'A', text: 'Social pressures led to the development of specific brain regions, while modern linguistic analysis fully explains language origins.', translation: 'Giải thích trọn vẹn' },
      { id: 'B', text: 'Human language evolved from basic gestures and sounds to complex structures, driven by social needs, brain and vocal tract adaptations, and reflected in modern language analysis and ongoing research.', translation: 'Ngôn ngữ loài người tiến hóa từ cử chỉ âm thanh cơ bản đến cấu trúc phức tạp, được thúc đẩy bởi nhu cầu xã hội và sự thích ứng sinh học' },
      { id: 'C', text: 'Human language emerged from simple forms, but current research has limited usefulness.', translation: 'Nghiên cứu ít hữu ích' },
      { id: 'D', text: 'Rudimentary proto-language developed into sophisticated communication due to agricultural advancements alone.', translation: 'Chỉ do nông nghiệp' }
    ],
    correctAnswer: 'B',
    explanation: '• B tóm tắt đầy đủ và chuẩn xác nhất toàn bộ quá trình tiến hóa ngôn ngữ từ thô sơ đến phức tạp cùng các động lực xã hội và sinh học. Chọn B.',
    translation: 'Tóm tắt đúng nhất toàn bài: Ngôn ngữ loài người tiến hóa từ cử chỉ thô sơ đến phức tạp nhờ nhu cầu xã hội và thích ứng sinh học.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  },
  {
    id: 'ht-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 33. Which of the following best paraphrases the first sentence in paragraph 4?',
    options: [
      { id: 'A', text: 'Though reconstructing language evolution\'s exact route is difficult, analyzing current languages, their connections, and fossil records offers helpful clues.', translation: 'Dù việc tái dựng con đường chính xác của tiến hóa ngôn ngữ còn khó khăn, việc phân tích các ngôn ngữ hiện tại, mối quan hệ giữa chúng và hóa thạch mang lại những manh mối hữu ích' },
      { id: 'B', text: 'While the precise course of language evolution is hard to rebuild, language study gives useful information.', translation: 'Thiếu mối quan hệ ngôn ngữ' },
      { id: 'C', text: 'Despite the difficulty in precisely retracing language development, exploring modern languages yields useful data.', translation: 'Thiếu mối quan hệ' },
      { id: 'D', text: 'Although tracing language evolution\'s exact trajectory is challenging, investigating languages provides valuable knowledge.', translation: 'Knowledge không sát nghĩa bằng insights/clues' }
    ],
    correctAnswer: 'A',
    explanation: '• A paraphrase đầy đủ trọn vẹn tất cả các ý chính của câu đầu đoạn 4. Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'ht-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 34. Which of the following best summarises paragraph 3?',
    options: [
      { id: 'A', text: 'Vocal tract changes primarily drove language development.', translation: 'Chỉ do thanh quản' },
      { id: 'B', text: 'Brain areas and vocal tracts adapted, enabling complex communication and language diversity.', translation: 'Các vùng não và thanh quản thích ứng, cho phép giao tiếp phức tạp và tạo nên sự đa dạng ngôn ngữ' },
      { id: 'C', text: 'Specialized brain regions alone facilitated complex language.', translation: 'Chỉ do vùng não' },
      { id: 'D', text: 'Social pressures solely dictated the evolution of brain and vocal structures.', translation: 'Duy nhất do xã hội' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 3 nói về sự thích ứng song song của cả vùng não (xử lý cú pháp) và thanh quản (tạo đa dạng âm thanh). Chọn B.',
    translation: 'Tóm tắt đúng nhất đoạn 3: Vùng não và thanh quản thích ứng cho phép giao tiếp phức tạp và tạo sự đa dạng ngôn ngữ.',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn'
  },
  {
    id: 'ht-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 35. The phrase "gave rise to" in paragraph 1 could be best replaced by:',
    options: [
      { id: 'A', text: 'brought about', translation: 'gây ra / làm nảy sinh' },
      { id: 'B', text: 'initiated', translation: 'khởi xướng chủ động' },
      { id: 'C', text: 'spawned', translation: 'đẻ ra' },
      { id: 'D', text: 'resulted in', translation: 'dẫn đến kết quả cuối' }
    ],
    correctAnswer: 'A',
    explanation: '• Cụm "gave rise to" = làm nảy sinh, gây ra = brought about. Chọn A. brought about.',
    translation: 'Cụm từ "gave rise to" trong đoạn 1 có nghĩa là gì?',
    topicTag: 'Đọc hiểu - Cụm từ đồng nghĩa'
  },
  {
    id: 'ht-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 36. According to paragraph 2, which of the following contributed to the acceleration of language evolution?',
    options: [
      { id: 'A', text: 'settled agriculture', translation: 'nông nghiệp và cộng đồng định cư' },
      { id: 'B', text: 'symbolic artwork', translation: 'nghệ thuật biểu tượng' },
      { id: 'C', text: 'advanced tools', translation: 'công cụ' },
      { id: 'D', text: 'complex gestures', translation: 'cử chỉ' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 2 nêu rõ: "The development of agriculture and settled communities further accelerated the evolution of language...". Chọn A.',
    translation: 'Chi tiết thúc đẩy sự gia tốc tiến hóa ngôn ngữ ở đoạn 2: Nông nghiệp định cư.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'ht-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 37. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Studying genetics and neurology can shed more light on language evolution.', translation: 'Nghiên cứu di truyền học và thần kinh học có thể soi sáng thêm về sự tiến hóa ngôn ngữ' },
      { id: 'B', text: 'Modern languages lack connections to earlier language forms.', translation: 'Thiếu kết nối' },
      { id: 'C', text: 'Language evolution is solely dependent on brain development.', translation: 'Duy nhất phụ thuộc não' },
      { id: 'D', text: 'The fossil record provides complete details of early languages.', translation: 'Hóa thạch cung cấp đầy đủ chi tiết' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 4 suy luận từ câu cuối: "Further research into the genetic and neurological underpinnings... promises to further illuminate...". Chọn A.',
    translation: 'Suy luận đúng từ bài đọc: Nghiên cứu di truyền và thần kinh học có thể soi sáng thêm về tiến hóa ngôn ngữ.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'ht-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 38. The word "This" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'complex interaction', translation: 'tương tác phức tạp' },
      { id: 'B', text: 'abstract representation', translation: 'biểu đạt trừu tượng' },
      { id: 'C', text: 'rudimentary early language', translation: 'ngôn ngữ sơ khai thô sơ' },
      { id: 'D', text: 'symbolic communication', translation: 'giao tiếp biểu tượng' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 2 ghi: "These early forms of language were likely rudimentary... This proto-language gradually evolved...". "This" thay thế cho "rudimentary early language". Chọn C.',
    translation: 'Từ "This" ở đoạn 2 thay thế cho: rudimentary early language.',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'ht-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 39. Where in paragraph 1 does the sentence "While pinpointing the exact moment language emerged is impossible, researchers agree that its development is intricately tied to the evolution of our brains..." best fit?',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'C', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'C',
    explanation: '• Vị trí [II] làm cầu nối hợp logic nhất từ ý mở đầu về bí ẩn sự ra đời ngôn ngữ sang vai trò của bộ não (vùng Broca) và sự đồng tiến hóa giữa não bộ và cấu trúc xã hội. Chọn C ([II]).',
    translation: 'Câu trên phù hợp nhất ở vị trí: [II].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'ht-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_LANGUAGE_EVOLUTION,
    passageTranslation: PASSAGE_LANGUAGE_EVOLUTION_TRANS,
    questionText: 'Question 40. The word "language-specific" in paragraph 3 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'designated', translation: 'được chỉ định' },
      { id: 'B', text: 'general', translation: 'tổng quát / chung chung' },
      { id: 'C', text: 'specialized', translation: 'chuyên môn hóa' },
      { id: 'D', text: 'localized', translation: 'khu biệt' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "language-specific" = đặc thù/chuyên biệt cho ngôn ngữ. Trái nghĩa với nó là "general" (tổng quát/chung chung). Chọn B. general.',
    translation: 'Từ "language-specific" trong đoạn 3 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  }
];

export const HAN_THUYEN_2026_EXAM: ExamSet = {
  id: 'exam-han-thuyen-2026',
  title: 'Đề Thi Thử Tốt Nghiệp THPT Lần 1 2026 - THPT Hàn Thuyên (Bắc Ninh)',
  description: 'Đề thi thử chính thức môn Tiếng Anh tốt nghiệp THPT 2026 của Trường THPT Hàn Thuyên (Sở GD-ĐT Bắc Ninh) gồm trọn bộ 40 câu trắc nghiệm kèm đáp án và giải thích chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'THPT HÀN THUYÊN 2026',
  iconName: 'Camera',
  questions: HAN_THUYEN_2026_QUESTIONS
};
