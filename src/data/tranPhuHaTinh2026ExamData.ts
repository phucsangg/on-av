import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_GLOBAL_ICONS = `Global Icons 2025 – People Who Inspire the World

The Global Icons 2025 Ceremony, taking place in Singapore this November, aims to honor individuals (1) ____________ contributions have changed millions of lives. This year’s theme, “Leading with Heart”, focuses on people who use their fame for social good.

Among the winners is Vietnamese singer Le Mai, well-known for her charity concerts (2) ____________ to raise funds for underprivileged children. Her performances combine talent and compassion, showing that art can truly make a difference.

Organizers hope the event will (3) ____________ young people to follow their passions and help others. Every story shared on stage is carefully (4) ____________ to remind audiences that success means more than wealth or power.

The ceremony will also include workshops on leadership and creativity, offering a (5) ____________ activities to engage future changemakers. These inspiring individuals prove that even small acts of kindness can (6) ____________ a big impact on the world.`;

const PASSAGE_GLOBAL_ICONS_TRANS = `Lễ trao giải Global Icons 2025, diễn ra tại Singapore vào tháng Mười Một năm nay, nhằm tôn vinh những cá nhân có những đóng góp đã làm thay đổi cuộc sống của hàng triệu người. Chủ đề năm nay, “Lãnh đạo bằng Trái tim”, tập trung vào những người sử dụng sự nổi tiếng của mình để làm điều tốt cho xã hội.

Trong số những người chiến thắng có ca sĩ Việt Nam Lê Mai, nổi tiếng với những buổi hòa nhạc từ thiện được tổ chức nhằm gây quỹ cho trẻ em có hoàn cảnh khó khăn. Những phần trình diễn của cô kết hợp cả tài năng lẫn lòng trắc ẩn, cho thấy nghệ thuật thật sự có thể tạo nên sự khác biệt.

Ban tổ chức hy vọng sự kiện sẽ truyền động lực cho những người trẻ theo đuổi đam mê và giúp đỡ người khác. Mỗi câu chuyện được chia sẻ trên sân khấu đều được tuyển chọn kỹ lưỡng nhằm nhắc nhở khán giả rằng thành công không chỉ được đo bằng sự giàu có hay quyền lực.

Buổi lễ cũng sẽ bao gồm các hội thảo về lãnh đạo và sáng tạo, mang đến nhiều hoạt động nhằm thu hút những nhà kiến tạo tương lai. Những cá nhân truyền cảm hứng này chứng minh rằng ngay cả những hành động tử tế nhỏ bé cũng có thể tạo ra ảnh hưởng lớn đối với thế giới.`;

const PASSAGE_SMART_CITIES = `The development of smart cities relies heavily on green transportation systems that use advanced technology to improve mobility and reduce pollution. Electric buses, solar-powered stations, and shared bicycles are now common in many major cities. Artificial intelligence (AI) manages traffic flow by analysing real-time data from sensors, cameras, and GPS signals. This allows the system to adjust traffic lights automatically and prevent congestion before it happens, making transportation both faster and cleaner.

Electric vehicles (EVs) are another crucial part of this transformation. Modem EVs are connected to digital platforms that monitor battery health, route efficiency, and driver habits. The collected data helps manufacturers design better models and enables drivers to plan the most energy-saving routes. Governments also use this information to identify areas that need more charging stations, encouraging people to switch from fossil-fuel vehicles.

One major concern, however, is data privacy. As smart transport systems collect huge amounts of user information, protecting that from misuse is vital. Some cities use blockchain technology to secure digital records, ensuring that every data entry is transparent and cannot be changed. This builds public trust and helps authorities detect fraud or system errors quickly.

Beyond the local level, international cooperation also plays a key role. Shared databases and research projects between countries allow engineers to learn from successful models, predict traffic challenges, and design new eco-friendly transport solutions for the future.`;

const PASSAGE_SMART_CITIES_TRANS = `Sự phát triển của các đô thị thông minh phụ thuộc rất nhiều vào các hệ thống giao thông xanh sử dụng công nghệ tiên tiến để cải thiện khả năng di chuyển và giảm ô nhiễm. Những chiếc xe buýt điện, các trạm năng lượng mặt trời và xe đạp dùng chung giờ đây đã trở nên phổ biến ở nhiều thành phố lớn. Trí tuệ nhân tạo (AI) quản lý lưu lượng giao thông bằng cách phân tích dữ liệu thời gian thực từ cảm biến, camera và tín hiệu GPS. Điều này cho phép hệ thống tự động điều chỉnh đèn tín hiệu và ngăn chặn tắc nghẽn trước khi nó xảy ra, giúp giao thông vừa nhanh hơn vừa sạch hơn.

Xe điện (EV) là một phần quan trọng khác của sự chuyển đổi này. Các mẫu EV hiện đại được kết nối với những nền tảng số theo dõi tình trạng pin, hiệu quả tuyến đường và thói quen lái xe. Dữ liệu thu thập được giúp các nhà sản xuất thiết kế những mẫu xe tốt hơn và giúp người lái lên kế hoạch các tuyến đường tiết kiệm năng lượng nhất. Chính phủ cũng sử dụng thông tin này để xác định những khu vực cần thêm trạm sạc, từ đó khuyến khích người dân chuyển từ xe chạy nhiên liệu hóa thạch sang xe điện.

Tuy vậy, một mối lo ngại lớn chính là quyền riêng tư dữ liệu. Khi các hệ thống giao thông thông minh thu thập lượng lớn thông tin của người dùng, việc bảo vệ dữ liệu đó khỏi bị lạm dụng là điều thiết yếu. Một số thành phố sử dụng công nghệ blockchain để bảo mật hồ sơ số, đảm bảo rằng mọi dữ liệu đều được minh bạch và không thể chỉnh sửa. Điều này giúp tăng niềm tin của công chúng và giúp chính quyền phát hiện gian lận hoặc lỗi hệ thống nhanh chóng.

Vượt ra khỏi phạm vi địa phương, hợp tác quốc tế cũng đóng vai trò then chốt. Các cơ sở dữ liệu dùng chung và những dự án nghiên cứu giữa các quốc gia cho phép các kỹ sư học hỏi từ những mô hình thành công, dự đoán thách thức giao thông và thiết kế các giải pháp vận tải thân thiện với môi trường cho tương lai.`;

const PASSAGE_DIGITAL_NOMADS = `The rise of remote work has given birth to a new lifestyle: the digital nomad. These are professionals who perform their jobs online while constantly moving between cities or countries. For many, the lifestyle symbolises freedom and self-reliance. However, behind the Instagram-perfect images of laptops by the beach lies a complicated reality. True flexibility requires stable Internet access, financial discipline, and mental resilience qualities often romanticised but seldom discussed.

Companies, too, have discovered both benefits and drawbacks of employing remote teams scattered across time zones. On the one hand, firms gain access to a global talent pool, save on office rent, and enhance employee satisfaction. On the other hand, coordination becomes difficult, and maintaining team culture without face-to face contact is challenging. [I] Some employers therefore adopt "digital surveillance," using software to monitor workers' keystrokes or screen activity— an approach that raises ethical concerns about privacy and trust.

This new culture has also transformed tourism. Cities from Lisbon to Bali now advertise co-working spaces, high-speed Wi-Fi, and short-term visas designed for nomads. The influx of remote workers boosts local economies but also pushes up housing prices, sometimes displacing residents. [II] Economists warn that such "nomad ghettos" may deepen inequality between foreigners and locals, especially in developing nations where salaries differ greatly.

While the future of work will likely remain hybrid, experts caution against assuming that mobility equals happiness. Constant travel can blur the line between leisure and labour, leading to burnout. True freedom, they argue, lies not in endless movement but in the ability to choose stability when desired. [III] If remote work is to be genuinely sustainable, it must balance flexibility with fairness for both employees and the communities they inhabit. [IV]`;

const PASSAGE_DIGITAL_NOMADS_TRANS = `Sự gia tăng của làm việc từ xa đã tạo ra một lối sống mới: “những người du mục kỹ thuật số”. Đây là những chuyên gia thực hiện công việc của mình trực tuyến trong khi liên tục di chuyển giữa các thành phố hoặc quốc gia. Với nhiều người, lối sống này tượng trưng cho sự tự do và tự chủ. Tuy nhiên, đằng sau những hình ảnh hoàn hảo trên Instagram về chiếc laptop bên cạnh bãi biển lại là một thực tế phức tạp. Sự linh hoạt thực sự đòi hỏi kết nối Internet ổn định, kỷ luật tài chính và sức chịu đựng tinh thần—những phẩm chất thường bị lãng mạn hóa nhưng ít khi được thảo luận một cách nghiêm túc.

Các công ty cũng phát hiện cả lợi ích và hạn chế khi thuê các nhóm nhân viên làm việc từ xa trải rộng trên nhiều múi giờ. Một mặt, họ có thể tiếp cận nguồn nhân lực toàn cầu, tiết kiệm chi phí văn phòng và tăng mức độ hài lòng của nhân viên. Mặt khác, việc phối hợp trở nên khó khăn và duy trì văn hóa làm việc khi thiếu sự tương tác trực tiếp cũng là thách thức. Vì lý do đó, một số nhà tuyển dụng sử dụng “giám sát số”, dùng phần mềm theo dõi thao tác bàn phím hay hoạt động trên màn hình của nhân viên—một cách tiếp cận gây ra những lo ngại về đạo đức liên quan đến quyền riêng tư và sự tin tưởng.

Nền văn hóa mới này cũng làm thay đổi ngành du lịch. Các thành phố từ Lisbon đến Bali giờ quảng bá không gian làm việc chung, Wi-Fi tốc độ cao và thị thực ngắn hạn dành cho du mục kỹ thuật số. Làn sóng người làm việc từ xa giúp thúc đẩy kinh tế địa phương nhưng cũng khiến giá nhà tăng, đôi khi đẩy người dân bản địa ra khỏi khu vực sinh sống. Các nhà kinh tế cảnh báo rằng những “khu du mục” như vậy có thể làm gia tăng bất bình đẳng giữa người nước ngoài và người địa phương, đặc biệt là ở các quốc gia đang phát triển nơi mức lương chênh lệch đáng kể.

Trong khi tương lai của công việc có thể sẽ tiếp tục ở dạng kết hợp, các chuyên gia cảnh báo rằng không nên cho rằng sự di chuyển đồng nghĩa với hạnh phúc. Việc liên tục di chuyển có thể làm mờ ranh giới giữa giải trí và lao động, dẫn đến kiệt sức. Họ lập luận rằng tự do thực sự không nằm ở việc di chuyển không ngừng mà nằm ở khả năng lựa chọn sự ổn định khi cần. Nếu muốn làm việc từ xa trở nên bền vững, cần phải cân bằng giữa sự linh hoạt và sự công bằng cho cả nhân viên lẫn cộng đồng nơi họ sinh sống.`;

const PASSAGE_ONLINE_EDU = `In the past decade, the number of students choosing to study online has grown rapidly. Some are attracted by the flexibility of digital education, while others see it as a cheaper and more convenient option. Yet, like all forms of learning, online education carries certain risks—technical issues, lack of motivation, or (30) ____________.

Many learners appreciate the independence it provides, (31) ____________. Some, in fact, struggle to stay focused and disciplined without direct supervision. Clearly, the ability to manage time and maintain self-motivation will be a key factor. (32) ____________. Students who prefer structured environments may feel lost or unsupported in virtual classrooms. (33) ____________. Some people remain reluctant to enrol in online courses because they doubt the credibility of digital certificates or fear being misled by unverified programs. This hesitation may stem from (34) ____________, that online learning cannot fully replace traditional classroom experience.`;

const PASSAGE_ONLINE_EDU_TRANS = `Trong thập kỷ vừa qua, số lượng sinh viên lựa chọn học trực tuyến đã tăng nhanh chóng. Một số người bị thu hút bởi sự linh hoạt của giáo dục số, trong khi những người khác xem đây là một lựa chọn rẻ hơn và tiện lợi hơn. Tuy nhiên, giống như mọi hình thức học tập khác, giáo dục trực tuyến cũng mang theo một số rủi ro—các vấn đề kỹ thuật, thiếu động lực, hoặc sự không chắc chắn về kết quả học tập.

Nhiều người học đánh giá cao sự độc lập mà học trực tuyến mang lại, nhưng sự tự do này không tự nó đảm bảo rằng việc học sẽ dễ dàng hơn. Thực tế, một số sinh viên gặp khó khăn trong việc giữ tập trung và duy trì kỷ luật khi không có sự giám sát trực tiếp. Rõ ràng, khả năng quản lý thời gian và duy trì động lực tự thân sẽ là yếu tố then chốt. Trái lại, con người thường cảm thấy kém thoải mái hơn rất nhiều khi học một mình so với trong lớp học thực tế.

Những sinh viên ưa thích môi trường học có cấu trúc có thể cảm thấy lạc lõng hoặc thiếu được hỗ trợ trong lớp học ảo. Niềm tin cũng là một yếu tố trong cách sinh viên lựa chọn khóa học. Một số người vẫn do dự trong việc đăng ký học trực tuyến vì họ nghi ngờ độ tin cậy của chứng chỉ số hoặc lo ngại bị lừa bởi các chương trình không được kiểm chứng. Sự do dự này có thể bắt nguồn từ niềm tin rằng học trực tuyến thiếu sự tương tác giữa con người với con người và rằng việc học số không thể hoàn toàn thay thế trải nghiệm lớp học truyền thống.`;

const PASSAGE_STAYING_HEALTHY = `Staying Healthy in a Busy World

Many people claim they are too busy to stay fit, but it’s often a matter (35) ____________ choosing the right habits. Even small steps—like walking to work or stretching during breaks—can make a difference. You can monitor your progress using a smartwatch (36) ____________ simply a notebook. Take every chance to do such simple activities as carrying (37) ____________ or cycling short distances instead of driving. Invite friends and (38) ____________ colleagues to join lunchtime walks, and try (39) ____________ everyone’s motivation by sharing your results online—it may inspire others to do the same!

Finally, reward yourself with something enjoyable if your plan brings (40) ____________ results to keep your motivation high.`;

const PASSAGE_STAYING_HEALTHY_TRANS = `Giữ gìn sức khỏe trong một thế giới bận rộn

Nhiều người cho rằng họ quá bận rộn để giữ gìn sức khỏe, nhưng điều đó thường chỉ là vấn đề lựa chọn những thói quen đúng đắn. Ngay cả những bước nhỏ—như đi bộ đến nơi làm việc hoặc vươn vai trong giờ nghỉ—cũng có thể tạo ra sự khác biệt. Bạn có thể theo dõi tiến trình của mình bằng một chiếc đồng hồ thông minh hoặc đơn giản chỉ bằng một cuốn sổ tay.

Hãy tận dụng mọi cơ hội để thực hiện những hoạt động đơn giản như mang theo những đồ dùng văn phòng nhẹ hoặc đạp xe những quãng đường ngắn thay vì lái xe. Hãy rủ bạn bè và các đồng nghiệp khác cùng tham gia những buổi đi bộ vào giờ ăn trưa, và cố gắng nâng cao động lực của mọi người bằng cách chia sẻ kết quả của bạn lên mạng—điều đó có thể truyền cảm hứng để người khác cũng làm như vậy!

Cuối cùng, hãy tự thưởng cho mình điều gì đó thú vị nếu kế hoạch của bạn mang lại những kết quả tích cực, để giữ cho động lực luôn duy trì ở mức cao.`;

export const TRAN_PHU_HA_TINH_2026_QUESTIONS: Question[] = [
  {
    id: 'tpht-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_GLOBAL_ICONS,
    passageTranslation: PASSAGE_GLOBAL_ICONS_TRANS,
    questionText: 'Question 1. honor individuals (1) _____ contributions have changed millions of lives.',
    options: [
      { id: 'A', text: 'who', translation: 'chủ ngữ chỉ người' },
      { id: 'B', text: 'whose', translation: 'đại từ quan hệ chỉ sở hữu' },
      { id: 'C', text: 'that', translation: 'chỉ người/vật' },
      { id: 'D', text: 'whom', translation: 'tân ngữ chỉ người' }
    ],
    correctAnswer: 'B',
    explanation: '• "whose" là đại từ quan hệ chỉ sở hữu đứng trước danh từ "contributions" để thể hiện "những cá nhân có đóng góp của họ". Chọn B.',
    translation: 'Tôn vinh những cá nhân mà đóng góp của họ đã làm thay đổi cuộc sống của hàng triệu người.',
    topicTag: 'Mệnh đề quan hệ sở hữu'
  },
  {
    id: 'tpht-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_GLOBAL_ICONS,
    passageTranslation: PASSAGE_GLOBAL_ICONS_TRANS,
    questionText: 'Question 2. her charity concerts (2) _____ to raise funds for underprivileged children.',
    options: [
      { id: 'A', text: 'are organizing', translation: 'chủ động số nhiều' },
      { id: 'B', text: 'to organize', translation: 'nguyên mẫu' },
      { id: 'C', text: 'being organized', translation: 'phân từ hiện tại bị động' },
      { id: 'D', text: 'organizing', translation: 'chủ động V-ing' }
    ],
    correctAnswer: 'C',
    explanation: '• "charity concerts being organized to raise funds" sử dụng phân từ hiện tại bị động diễn tả các buổi hòa nhạc đang được tổ chức. Chọn C.',
    translation: 'Các buổi hòa nhạc từ thiện được tổ chức để gây quỹ cho trẻ em kém may mắn.',
    topicTag: 'Rút gọn Mệnh đề Bị động'
  },
  {
    id: 'tpht-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_GLOBAL_ICONS,
    passageTranslation: PASSAGE_GLOBAL_ICONS_TRANS,
    questionText: 'Question 3. Organizers hope the event will (3) _____ young people to follow their passions',
    options: [
      { id: 'A', text: 'motivate', translation: 'truyền động lực' },
      { id: 'B', text: 'motivation', translation: 'danh từ' },
      { id: 'C', text: 'motivated', translation: 'tính từ / quá khứ' },
      { id: 'D', text: 'motivating', translation: 'dạng V-ing' }
    ],
    correctAnswer: 'A',
    explanation: '• Sau động từ khuyết thiếu "will" cần một động từ nguyên mẫu: "will motivate young people". Chọn A. motivate.',
    translation: 'Ban tổ chức hy vọng sự kiện sẽ truyền động lực cho những người trẻ theo đuổi đam mê.',
    topicTag: 'Từ loại (Word Form)'
  },
  {
    id: 'tpht-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_GLOBAL_ICONS,
    passageTranslation: PASSAGE_GLOBAL_ICONS_TRANS,
    questionText: 'Question 4. Every story shared on stage is carefully (4) _____ to remind audiences',
    options: [
      { id: 'A', text: 'selected', translation: 'được lựa chọn' },
      { id: 'B', text: 'selecting', translation: 'dạng V-ing' },
      { id: 'C', text: 'to select', translation: 'dạng to V' },
      { id: 'D', text: 'selection', translation: 'danh từ' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc bị động "is carefully selected" sử dụng quá khứ phân từ sau "is". Chọn A. selected.',
    translation: 'Mỗi câu chuyện được chia sẻ trên sân khấu đều (4) _____ cẩn thận.',
    topicTag: 'Thể bị động'
  },
  {
    id: 'tpht-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_GLOBAL_ICONS,
    passageTranslation: PASSAGE_GLOBAL_ICONS_TRANS,
    questionText: 'Question 5. offering a (5) _____ activities to engage future changemakers.',
    options: [
      { id: 'A', text: 'total of', translation: 'tổng số' },
      { id: 'B', text: 'deal with', translation: 'giải quyết' },
      { id: 'C', text: 'number of', translation: 'một số lượng' },
      { id: 'D', text: 'range of', translation: 'một loạt / nhiều loại hoạt động (collocation)' }
    ],
    correctAnswer: 'D',
    explanation: '• Cụm từ cố định: "a range of activities" (một loạt/nhiều loại hoạt động phong phú). Chọn D. range of.',
    translation: 'Cung cấp một loạt hoạt động đa dạng để thu hút những nhà kiến tạo tương lai.',
    topicTag: 'Collocation'
  },
  {
    id: 'tpht-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_GLOBAL_ICONS,
    passageTranslation: PASSAGE_GLOBAL_ICONS_TRANS,
    questionText: 'Question 6. small acts of kindness can (6) _____ a big impact on the world.',
    options: [
      { id: 'A', text: 'have', translation: 'có' },
      { id: 'B', text: 'take', translation: 'lấy' },
      { id: 'C', text: 'make', translation: 'tạo ra (make an impact)' },
      { id: 'D', text: 'bring', translation: 'mang lại' }
    ],
    correctAnswer: 'C',
    explanation: '• Collocation chuẩn: "make a big impact on the world" (tạo ra ảnh hưởng lớn đối với thế giới). Chọn C. make.',
    translation: 'Những hành động tử tế nhỏ bé cũng có thể tạo ra ảnh hưởng lớn đối với thế giới.',
    topicTag: 'Collocation'
  },
  {
    id: 'tpht-q7',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 7. Which of the following is NOT mentioned in paragraph 1 as a source of real-time data?',
    options: [
      { id: 'A', text: 'sensors', translation: 'cảm biến' },
      { id: 'B', text: 'cameras', translation: 'camera' },
      { id: 'C', text: 'weather reports', translation: 'báo cáo thời tiết' },
      { id: 'D', text: 'GPS signals', translation: 'tín hiệu GPS' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 1 nêu danh sách: "sensors, cameras, and GPS signals". Chi tiết "weather reports" KHÔNG được nhắc đến. Chọn C.',
    translation: 'Chi tiết nào sau đây KHÔNG được đề cập trong đoạn văn?',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'tpht-q8',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 8. The word "prevent" in paragraph 1 can be best replaced by:',
    options: [
      { id: 'A', text: 'cause', translation: 'gây ra' },
      { id: 'B', text: 'avoid', translation: 'ngăn chặn / tránh' },
      { id: 'C', text: 'predict', translation: 'dự đoán' },
      { id: 'D', text: 'limit', translation: 'hạn chế' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "prevent" (ngăn chặn) trong ngữ cảnh "prevent congestion" tương đương với "avoid" (tránh/ngăn tắc nghẽn). Chọn B.',
    translation: 'Từ "prevent" trong đoạn 1 có nghĩa gần nhất với:',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'tpht-q9',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 9. The word "vital" in paragraph 3 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'essential', translation: 'thiết yếu' },
      { id: 'B', text: 'necessary', translation: 'cần thiết' },
      { id: 'C', text: 'unimportant', translation: 'không quan trọng' },
      { id: 'D', text: 'major', translation: 'chính/lớn' }
    ],
    correctAnswer: 'C',
    explanation: '• Từ "vital" = cực kỳ quan trọng, thiết yếu. Trái nghĩa với nó là "unimportant" (không quan trọng). Chọn C.',
    translation: 'Từ "vital" trong đoạn 3 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'tpht-q10',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 10. The word "that" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'technology', translation: 'công nghệ' },
      { id: 'B', text: 'data privacy', translation: 'quyền riêng tư dữ liệu' },
      { id: 'C', text: 'information', translation: 'thông tin (huge amounts of user information)' },
      { id: 'D', text: 'blockchain', translation: 'chuỗi khối' }
    ],
    correctAnswer: 'C',
    explanation: '• Trong câu "...collect huge amounts of user information, protecting that from misuse...", "that" thay thế cho "information". Chọn C.',
    translation: 'Từ "that" trong đoạn 3 quy chiếu đến từ / ý nào?',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'tpht-q11',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 11. Which of the following best paraphrases the underlined sentence in paragraph 2?',
    options: [
      { id: 'A', text: 'Both manufacturers and drivers benefit from data that improves design and reduces energy use.', translation: 'Cả nhà sản xuất và tài xế đều hưởng lợi từ dữ liệu cải thiện thiết kế và tiết kiệm năng lượng' },
      { id: 'B', text: 'Only manufacturers can use the collected data to produce new energy-saving vehicles.', translation: 'Chỉ nhà sản xuất sử dụng' },
      { id: 'C', text: 'The data is mainly gathered to reduce the number of drivers using energy-wasting routes.', translation: 'Thu thập để giảm số tài xế' },
      { id: 'D', text: 'Drivers help manufacturers by collecting data for designing cheaper electric vehicles.', translation: 'Tài xế giúp sản xuất xe rẻ hơn' }
    ],
    correctAnswer: 'A',
    explanation: '• A diễn đạt lại trọn vẹn và chuẩn xác nhất: "The collected data helps manufacturers design better models and enables drivers to plan..." -> Cả hai bên đều hưởng lợi. Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'tpht-q12',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 12. Which of the following is TRUE according to paragraph 4?',
    options: [
      { id: 'A', text: 'Engineers design eco-friendly transport solutions based only on local data.', translation: 'Chỉ dựa vào dữ liệu địa phương' },
      { id: 'B', text: 'Shared projects among countries promote better transport planning.', translation: 'Các dự án dùng chung giữa các quốc gia thúc đẩy quy hoạch giao thông tốt hơn' },
      { id: 'C', text: 'Cooperation across borders has slowed down smart transport innovation.', translation: 'Hợp tác làm chậm đổi mới' },
      { id: 'D', text: 'Traffic prediction relies mainly on government funding.', translation: 'Dựa chính vào ngân sách nhà nước' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 4 nêu: "Shared databases and research projects between countries allow engineers to learn from successful models, predict traffic challenges...". Chọn B.',
    translation: 'Phát biểu ĐÚNG theo đoạn 4: Hợp tác dự án giữa các quốc gia thúc đẩy quy hoạch giao thông tốt hơn.',
    topicTag: 'Đọc hiểu - Thông tin TRUE'
  },
  {
    id: 'tpht-q13',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 13. Which paragraph mentions the protection of users\' personal information?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 3 đề cập: "One major concern... Is data privacy... Protecting that from misuse is vital". Chọn C (Paragraph 3).',
    translation: 'Đoạn nào đề cập việc bảo vệ thông tin cá nhân?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'tpht-q14',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_SMART_CITIES,
    passageTranslation: PASSAGE_SMART_CITIES_TRANS,
    questionText: 'Question 14. Which paragraph mentions a system that automatically reacts to traffic changes?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 1 đề cập AI phân tích dữ liệu real-time để "adjust traffic lights automatically and prevent congestion before it happens". Chọn A (Paragraph 1).',
    translation: 'Đoạn nào đề cập hệ thống tự động phản ứng với thay đổi giao thông?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'tpht-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the best arrangement of the sentences to make a meaningful conversation:\ne. I\'m trying to live a healthier lifestyle these days.\na. I used to eat fast food every day, but I\'ve recently switched to cooking at home.\nb. That\'s great! Have you noticed any difference since you changed your diet?\nc. Yes, I feel more energetic and have even lost some weight.\nd. Congratulations! Home-cooked meals are always healthier.',
    options: [
      { id: 'A', text: 'e – a – b – c – d', translation: 'e-a-b-c-d' },
      { id: 'B', text: 'a – b – e – d – c', translation: 'a-b-e-d-c' },
      { id: 'C', text: 'e – b – a – c – d', translation: 'e-b-a-c-d' },
      { id: 'D', text: 'b – e – a – d – c', translation: 'b-e-a-d-c' }
    ],
    correctAnswer: 'A',
    explanation: '• e mở đầu lối sống lành mạnh -> a ví dụ nấu ăn tại nhà -> b người nghe hỏi sự khác biệt -> c người nói trả lời nhiều năng lượng hơn -> d lời chúc mừng kết thúc. Trật tự: e - a - b - c - d. Chọn A.',
    translation: 'Sắp xếp hội thoại lối sống lành mạnh.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'tpht-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the best arrangement of the sentences to make a meaningful conversation:\ne. Have you heard about the city\'s latest environmental project?\na. The city has launched a new public bike system to reduce air pollution.\nb. That\'s a smart move! It can also help people stay fit.\nc. Exactly. More people cycling means fewer cars on the road.\nd. True. I hope they build more bike lanes soon.',
    options: [
      { id: 'A', text: 'e – a – b – c – d', translation: 'e-a-b-c-d' },
      { id: 'B', text: 'e – b – a – d – c', translation: 'e-b-a-d-c' },
      { id: 'C', text: 'a – c – b – d – e', translation: 'a-c-b-d-e' },
      { id: 'D', text: 'e – a – c – b – d', translation: 'e-a-c-b-d' }
    ],
    correctAnswer: 'A',
    explanation: '• e hỏi dự án môi trường -> a giới thiệu hệ thống xe đạp -> b người nghe khen giúp sức khỏe -> c người nói đồng tình ít xe hơi -> d người nghe thêm kỳ vọng làn đường. Trật tự: e - a - b - c - d. Chọn A.',
    translation: 'Sắp xếp hội thoại xe đạp công cộng.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'tpht-q17',
    type: 'reordering',
    questionText: 'Question 17. Choose the best arrangement of the sentences to make a meaningful conversation:\na. Volunteering abroad has been one of the most rewarding experiences of my life.\nc. That sounds amazing! What inspired you to do that?\nb. I joined a program that helps build schools in rural areas.\nd. I\'ve always wanted to make a positive impact and learn about new cultures.\ne. It must have taught you a lot about teamwork and patience.',
    options: [
      { id: 'A', text: 'a – c – b – e – d', translation: 'a-c-b-e-d' },
      { id: 'B', text: 'a – c – b – d – e', translation: 'a-c-b-d-e' },
      { id: 'C', text: 'c – a – b – e – d', translation: 'c-a-b-e-d' },
      { id: 'D', text: 'b – e – a – c – d', translation: 'b-e-a-c-d' }
    ],
    correctAnswer: 'B',
    explanation: '• a mở đầu trải nghiệm tình nguyện -> c người nghe hỏi động lực -> b người nói mô tả chương trình -> d giải thích động lực ảnh hưởng tích cực -> e nhận xét bài học. Trật tự: a - c - b - d - e. Chọn B.',
    translation: 'Sắp xếp hội thoại tình nguyện nước ngoài.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'tpht-q18',
    type: 'reordering',
    questionText: 'Question 18. Choose the best arrangement of the sentences to make a meaningful conversation:\nb. I\'m planning to switch to renewable energy for my house.\nc. That\'s a great idea! Solar panels can really cut down electricity bills.\na. Yes, I think it\'s worth investing in a cleaner and greener future.',
    options: [
      { id: 'A', text: 'a – b – c', translation: 'a-b-c' },
      { id: 'B', text: 'b – c – a', translation: 'b-c-a' },
      { id: 'C', text: 'a – c – b', translation: 'a-c-b' },
      { id: 'D', text: 'b – a – c', translation: 'b-a-c' }
    ],
    correctAnswer: 'B',
    explanation: '• b (người nói đưa ra ý định chuyển năng lượng tái tạo) -> c (người nghe khen cắt giảm tiền điện) -> a (người nói đồng tình mở rộng đầu tư tương lai xanh). Trật tự: b - c - a. Chọn B.',
    translation: 'Sắp xếp hội thoại năng lượng tái tạo.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'tpht-q19',
    type: 'reordering',
    questionText: 'Question 19. Choose the best arrangement of the sentences to form a coherent text:\na. Spending time in nature helps me relax after a stressful week.\nb. I usually go hiking in the nearby national park on weekends.\nc. That sounds wonderful! I wish I had more free time to do that.\nd. You should try it sometime. It really clears your mind.\ne. I completely agree. Being outdoors is good for both body and soul.',
    options: [
      { id: 'A', text: 'b – a – c – d – e', translation: 'b-a-c-d-e' },
      { id: 'B', text: 'a – b – c – e – d', translation: 'a-b-c-e-d' },
      { id: 'C', text: 'a – b – c – d – e', translation: 'a-b-c-d-e' },
      { id: 'D', text: 'b – a – d – e – c', translation: 'b-a-d-e-c' }
    ],
    correctAnswer: 'C',
    explanation: '• a mở đoạn thư giãn trong thiên nhiên -> b hoạt động đi bộ đường dài -> c người nghe khen ước có thời gian -> d khuyên nên thử -> e người nghe đồng tình tốt cho thể chất tinh thần. Trật tự: a - b - c - d - e. Chọn C.',
    translation: 'Sắp xếp đoạn văn thiên nhiên.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'tpht-q20',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 20. According to paragraph 1, the digital nomad lifestyle _____.',
    options: [
      { id: 'A', text: 'allows professionals to disconnect completely from work pressure', translation: 'cho phép ngắt hoàn toàn áp lực' },
      { id: 'B', text: 'requires strong personal management and adaptability', translation: 'đòi hỏi khả năng quản lý cá nhân và thích nghi cao' },
      { id: 'C', text: 'ensures constant access to luxurious travel experiences', translation: 'đảm bảo du lịch xa hoa' },
      { id: 'D', text: 'discourages people from pursuing financial independence', translation: 'ngăn cản tự do tài chính' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 1 nêu: "True flexibility requires stable Internet access, financial discipline, and mental resilience" -> Đòi hỏi kỷ luật và khả năng quản lý cá nhân, thích nghi. Chọn B.',
    translation: 'Theo đoạn 1, lối sống du mục kỹ thuật số: Đòi hỏi khả năng quản lý cá nhân và thích nghi cao.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'tpht-q21',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 21. Which of the following best summarises paragraph 1?',
    options: [
      { id: 'A', text: 'The digital nomad lifestyle promises freedom but also involves hidden difficulties.', translation: 'Lối sống du mục kỹ thuật số hứa hẹn tự do nhưng cũng chứa đựng nhiều khó khăn ẩn' },
      { id: 'B', text: 'The digital nomad lifestyle provides an ideal balance between work and leisure.', translation: 'Cân bằng hoàn hảo' },
      { id: 'C', text: 'Digital nomads enjoy financial stability thanks to modern remote jobs.', translation: 'Ổn định tài chính' },
      { id: 'D', text: 'Online work has entirely replaced traditional office culture.', translation: 'Thay thế hoàn toàn văn phòng' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 1 đối lập hình ảnh hoàn hảo tự do với thực tế phức tạp (Internet, kỷ luật, sức chịu đựng tinh thần). Chọn A.',
    translation: 'Tóm tắt đúng nhất đoạn 1: Lối sống hứa hẹn tự do nhưng chứa đựng nhiều khó khăn ẩn.',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn'
  },
  {
    id: 'tpht-q22',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 22. Which of the following is NOT mentioned as a benefit of remote work for companies?',
    options: [
      { id: 'A', text: 'increased employee happiness', translation: 'tăng sự hài lòng nhân viên' },
      { id: 'B', text: 'reduced operational costs', translation: 'giảm chi phí thuê văn phòng' },
      { id: 'C', text: 'wider recruitment opportunities', translation: 'tuyển dụng nhân tài toàn cầu' },
      { id: 'D', text: 'simplified coordination between departments', translation: 'đơn giản hóa sự phối hợp giữa các bộ phận' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 2 nêu rõ: "coordination becomes difficult" (việc phối hợp trở nên khó khăn), KHÔNG phải được đơn giản hóa. Do đó D là đáp án đúng. Chọn D.',
    translation: 'Lợi ích KHÔNG được đề cập đối với công ty: Đơn giản hóa sự phối hợp giữa các bộ phận.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'tpht-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 23. The word "ethical" in paragraph 2 is closest in meaning to:',
    options: [
      { id: 'A', text: 'practical', translation: 'thực tiễn' },
      { id: 'B', text: 'moral', translation: 'thuộc về đạo đức' },
      { id: 'C', text: 'financial', translation: 'tài chính' },
      { id: 'D', text: 'logical', translation: 'hợp logic' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "ethical" (thuộc về đạo đức) = moral. Chọn B. moral.',
    translation: 'Từ "ethical" trong đoạn 2 có nghĩa gần nhất với:',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'tpht-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 24. The word "they" in paragraph 4 refers to:',
    options: [
      { id: 'A', text: 'experts', translation: 'các chuyên gia (experts caution... True freedom, they argue)' },
      { id: 'B', text: 'workers', translation: 'người lao động' },
      { id: 'C', text: 'economists', translation: 'nhà kinh tế' },
      { id: 'D', text: 'communities', translation: 'cộng đồng' }
    ],
    correctAnswer: 'A',
    explanation: '• Trong câu "experts caution against... True freedom, they argue...", "they" quay lại chủ ngữ "experts". Chọn A.',
    translation: 'Từ "they" ở đoạn 4 thay thế cho: experts (các chuyên gia).',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'tpht-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 25. Which of the following best paraphrases the underlined sentence in paragraph 4?',
    options: [
      { id: 'A', text: 'The freedom that comes from being able to remain in one place when needed is more genuine than constant travel.', translation: 'Tự do đến từ khả năng chọn ở yên một chỗ khi cần thì chân thực hơn việc di chuyển liên tục' },
      { id: 'B', text: 'The more one travels, the more freedom and stability one can achieve in life.', translation: 'Càng đi nhiều càng tự do' },
      { id: 'C', text: 'Stability and mobility are equally important forms of freedom, according to most travellers.', translation: 'Cân bằng bằng nhau' },
      { id: 'D', text: 'Choosing to move constantly from one place to another guarantees true happiness.', translation: 'Di chuyển liên tục đảm bảo hạnh phúc' }
    ],
    correctAnswer: 'A',
    explanation: '• A diễn đạt lại sát nghĩa câu "True freedom... lies not in endless movement but in the ability to choose stability when desired". Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'tpht-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 26. According to paragraph 3, cities benefit from digital nomads because they _____.',
    options: [
      { id: 'A', text: 'attract investment from multinational corporations', translation: 'thu hút đầu tư từ các tập đoàn lớn' },
      { id: 'B', text: 'gain additional income through tourism and services', translation: 'có thêm nguồn thu thông qua du lịch và dịch vụ' },
      { id: 'C', text: 'keep property prices affordable for local residents', translation: 'giữ giá nhà rẻ' },
      { id: 'D', text: 'promote equal income levels between citizens and foreigners', translation: 'thúc đẩy bình đẳng thu nhập' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 3 ghi: "The influx of remote workers boosts local economies" thông qua chi tiêu du lịch và dịch vụ. Chọn B.',
    translation: 'Theo đoạn 3, các thành phố được lợi từ digital nomads vì: Có thêm thu nhập qua du lịch và dịch vụ.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'tpht-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 27. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Digital nomads usually prioritise leisure over productivity.', translation: 'Ưu tiên vui chơi hơn năng suất' },
      { id: 'B', text: 'Employers\' surveillance software has successfully eliminated ethical concerns.', translation: 'Phần mềm giám sát xóa bỏ lo ngại đạo đức' },
      { id: 'C', text: 'The popularity of remote work has created both new opportunities and new inequalities.', translation: 'Sự phổ biến của làm việc từ xa tạo ra cả cơ hội mới và bất bình đẳng mới' },
      { id: 'D', text: 'Most developing countries restrict nomads from staying long-term.', translation: 'Hạn chế thời gian lưu trú' }
    ],
    correctAnswer: 'C',
    explanation: '• C suy luận chính xác từ bài đọc: Làm việc từ xa mang lại cơ hội (tự do, tiếp cận nhân tài, kinh tế địa phương) nhưng cũng gây ra bất bình đẳng ("nomad ghettos", giá nhà tăng). Chọn C.',
    translation: 'Suy luận đúng từ bài đọc: Sự phổ biến của làm việc từ xa tạo ra cả cơ hội mới lẫn bất bình đẳng mới.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'tpht-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 28. Where in the passage does the sentence "Still, many companies continue to view remote work as a temporary experiment rather than a permanent shift." best fit?',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'A',
    explanation: '• Câu chèn nêu quan điểm của công ty coi remote work là thử nghiệm tạm thời -> chèn ở vị trí [I] giải thích cho việc tại sao công ty lại áp dụng phần mềm giám sát số. Chọn A ([I]).',
    translation: 'Câu trên phù hợp nhất ở vị trí: [I].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'tpht-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_DIGITAL_NOMADS,
    passageTranslation: PASSAGE_DIGITAL_NOMADS_TRANS,
    questionText: 'Question 29. Which of the following best summarises the passage?',
    options: [
      { id: 'A', text: 'Digital nomads represent a growing trend that eliminates inequality and promotes cultural harmony.', translation: 'Xóa bỏ bất bình đẳng' },
      { id: 'B', text: 'The flexibility of remote work offers only short-term happiness and should be discouraged.', translation: 'Nên phản đối' },
      { id: 'C', text: 'The rise of remote work threatens global tourism and weakens community bonds permanently.', translation: 'Đe dọa du lịch' },
      { id: 'D', text: 'Remote work has evolved into a complex global culture that demands balance between freedom, fairness, and stability.', translation: 'Làm việc từ xa đã tiến hóa thành nền văn hóa toàn cầu phức tạp đòi hỏi sự cân bằng giữa tự do, công bằng và ổn định' }
    ],
    correctAnswer: 'D',
    explanation: '• D tóm tắt bao quát toàn vẹn nhất thông điệp bài đọc về làm việc từ xa và sự cần thiết phải cân bằng giữa tự do, công bằng và ổn định. Chọn D.',
    translation: 'Tóm tắt toàn bài: Làm việc từ xa là nền văn hóa toàn cầu đòi hỏi sự cân bằng giữa tự do, công bằng và ổn định.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  },
  {
    id: 'tpht-q30',
    type: 'cloze_test',
    readingPassage: PASSAGE_ONLINE_EDU,
    passageTranslation: PASSAGE_ONLINE_EDU_TRANS,
    questionText: 'Question 30. online education carries certain risks—technical issues, lack of motivation, or (30) _____.',
    options: [
      { id: 'A', text: 'to be uncertain about learning outcomes', translation: 'dạng to V' },
      { id: 'B', text: 'uncertain the learning outcomes being', translation: 'sai trật tự' },
      { id: 'C', text: 'being uncertain about the learning outcomes', translation: 'cụm V-ing tạo danh từ song song' },
      { id: 'D', text: 'to uncertainty about learning outcomes', translation: 'thừa to' }
    ],
    correctAnswer: 'C',
    explanation: '• Cấu trúc song song ngữ pháp (parallel structure) sau "or" nối với "technical issues" và "lack of motivation" -> cần cụm V-ing "being uncertain...". Chọn C.',
    translation: 'Học trực tuyến mang theo một số rủi ro: sự không chắc chắn về kết quả học tập.',
    topicTag: 'Cấu trúc Song song (Parallelism)'
  },
  {
    id: 'tpht-q31',
    type: 'cloze_test',
    readingPassage: PASSAGE_ONLINE_EDU,
    passageTranslation: PASSAGE_ONLINE_EDU_TRANS,
    questionText: 'Question 31. Many learners appreciate the independence it provides, (31) _____.',
    options: [
      { id: 'A', text: 'so the presence of freedom does not in itself ensure easier learning', translation: 'vì thế bản thân sự tự do không tự nó đảm bảo việc học dễ dàng hơn' },
      { id: 'B', text: 'and the presence of freedom itself ensures effective learning', translation: 'mâu thuẫn ý' },
      { id: 'C', text: 'for the freedom in itself to ensure more effective learning', translation: 'vì bản thân sự tự do giúp đảm bảo việc học hiệu quả hơn' },
      { id: 'D', text: 'though the presence of freedom does ensure effective learning', translation: 'sai logic' }
    ],
    correctAnswer: 'A',
    explanation: '• Liên từ "so" kết nối hợp logic với vế sau giải thích vì sao tự do không đồng nghĩa với học dễ dàng hơn. Chọn A.',
    translation: 'Vì thế bản thân sự tự do không tự nó đảm bảo việc học trở nên dễ dàng hơn.',
    topicTag: 'Từ nối & Logic mệnh đề'
  },
  {
    id: 'tpht-q32',
    type: 'cloze_test',
    readingPassage: PASSAGE_ONLINE_EDU,
    passageTranslation: PASSAGE_ONLINE_EDU_TRANS,
    questionText: 'Question 32. Clearly, the ability to manage time and maintain self-motivation will be a key factor. (32) _____.',
    options: [
      { id: 'A', text: 'As a result, people are far less likely to study alone than to study in classrooms', translation: 'Kết quả là mọi người ít khi tự học hơn so với học ở lớp' },
      { id: 'B', text: 'People, by contrast, will be far less comfortable studying alone than in physical classrooms', translation: 'Trái lại, con người sẽ cảm thấy kém thoải mái hơn rất nhiều khi học một mình' },
      { id: 'C', text: 'Similarly, people will prefer classroom study to online learning in all cases', translation: 'quá tuyệt đối' },
      { id: 'D', text: 'However, people who enjoy independence will still choose traditional study environments', translation: 'mâu thuẫn' }
    ],
    correctAnswer: 'B',
    explanation: '• Cụm "by contrast" tạo sự đối lập giữa việc tự học cần tự giác cao và thực tế con người kém thoải mái hơn khi học một mình. Chọn B.',
    translation: 'Trái lại, con người sẽ cảm thấy kém thoải mái hơn rất nhiều khi học một mình.',
    topicTag: 'Điền câu liên kết đoạn'
  },
  {
    id: 'tpht-q33',
    type: 'cloze_test',
    readingPassage: PASSAGE_ONLINE_EDU,
    passageTranslation: PASSAGE_ONLINE_EDU_TRANS,
    questionText: 'Question 33. Students who prefer structured environments may feel lost. (33) _____.',
    options: [
      { id: 'A', text: 'Students also choose their courses with the matter of trust', translation: 'sai giới từ' },
      { id: 'B', text: 'Trust is also chosen by students when they take their courses', translation: 'bị động sai nghĩa' },
      { id: 'C', text: 'The way students choose their courses is trusted also', translation: 'sai nghĩa' },
      { id: 'D', text: 'Trust is also a factor in how students choose their courses', translation: 'Niềm tin cũng là một yếu tố trong cách sinh viên lựa chọn khóa học' }
    ],
    correctAnswer: 'D',
    explanation: '• Cấu trúc chuẩn "Trust is also a factor in how..." dẫn dắt ý tiếp theo về sự nghi ngờ chứng chỉ số. Chọn D.',
    translation: 'Niềm tin cũng là một yếu tố trong cách sinh viên lựa chọn khóa học.',
    topicTag: 'Điền câu hoàn thành đoạn'
  },
  {
    id: 'tpht-q34',
    type: 'cloze_test',
    readingPassage: PASSAGE_ONLINE_EDU,
    passageTranslation: PASSAGE_ONLINE_EDU_TRANS,
    questionText: 'Question 34. This hesitation may stem from (34) _____, that online learning cannot fully replace traditional classroom experience.',
    options: [
      { id: 'A', text: 'the belief that digital learning lacks human interaction', translation: 'niềm tin rằng học trực tuyến thiếu sự tương tác giữa con người' },
      { id: 'B', text: 'the suspect about lacking human interaction in digital learning', translation: 'dùng suspect sai' },
      { id: 'C', text: 'believing digital learning is lack human interaction', translation: 'is lack sai' },
      { id: 'D', text: 'the thought of lacking interaction digitally', translation: 'mơ hồ' }
    ],
    correctAnswer: 'A',
    explanation: '• Cụm danh từ "the belief that + Mệnh đề" bổ nghĩa hoàn hảo cho từ "stem from". Chọn A.',
    translation: 'Bắt nguồn từ niềm tin rằng học trực tuyến thiếu sự tương tác giữa con người với con người.',
    topicTag: 'Cụm danh từ bổ nghĩa'
  },
  {
    id: 'tpht-q35',
    type: 'cloze_test',
    readingPassage: PASSAGE_STAYING_HEALTHY,
    passageTranslation: PASSAGE_STAYING_HEALTHY_TRANS,
    questionText: 'Question 35. it’s often a matter (35) _____ choosing the right habits.',
    options: [
      { id: 'A', text: 'to', translation: 'sai giới từ' },
      { id: 'B', text: 'of', translation: 'a matter of doing something (cấu trúc chuẩn)' },
      { id: 'C', text: 'in', translation: 'sai giới từ' },
      { id: 'D', text: 'for', translation: 'sai giới từ' }
    ],
    correctAnswer: 'B',
    explanation: '• Cấu trúc cố định: "a matter of V-ing" (là vấn đề của việc gì đó). Chọn B. of.',
    translation: 'Đó thường chỉ là vấn đề của việc lựa chọn những thói quen đúng đắn.',
    topicTag: 'Giới từ & Cụm cố định'
  },
  {
    id: 'tpht-q36',
    type: 'cloze_test',
    readingPassage: PASSAGE_STAYING_HEALTHY,
    passageTranslation: PASSAGE_STAYING_HEALTHY_TRANS,
    questionText: 'Question 36. using a smartwatch (36) _____ simply a notebook.',
    options: [
      { id: 'A', text: 'or', translation: 'hoặc (đưa ra 2 lựa chọn tương đương)' },
      { id: 'B', text: 'nor', translation: 'dùng với neither' },
      { id: 'C', text: 'but', translation: 'nhưng' },
      { id: 'D', text: 'so', translation: 'vì vậy' }
    ],
    correctAnswer: 'A',
    explanation: '• Dùng liên từ "or" nối 2 lựa chọn thay thế tương đương (đồng hồ thông minh hoặc sổ tay). Chọn A. or.',
    translation: 'Sử dụng đồng hồ thông minh hoặc đơn giản chỉ bằng một cuốn sổ tay.',
    topicTag: 'Từ nối (Conjunctions)'
  },
  {
    id: 'tpht-q37',
    type: 'cloze_test',
    readingPassage: PASSAGE_STAYING_HEALTHY,
    passageTranslation: PASSAGE_STAYING_HEALTHY_TRANS,
    questionText: 'Question 37. carry (37) _____ or cycling short distances instead of driving.',
    options: [
      { id: 'A', text: 'office light supplies', translation: 'trật tự danh từ bị đảo' },
      { id: 'B', text: 'supplies office light', translation: 'sai trật tự' },
      { id: 'C', text: 'light supplies office', translation: 'sai trật tự' },
      { id: 'D', text: 'light office supplies', translation: 'đồ dùng văn phòng nhẹ (trật tự chuẩn Adj + N)' }
    ],
    correctAnswer: 'D',
    explanation: '• Trật tự cụm danh từ: Tính từ "light" đứng trước cụm danh từ "office supplies" -> "light office supplies" (đồ dùng văn phòng nhẹ). Chọn D.',
    translation: 'Mang vác những đồ dùng văn phòng nhẹ hoặc đạp xe quãng đường ngắn.',
    topicTag: 'Trật tự Cụm Danh từ'
  },
  {
    id: 'tpht-q38',
    type: 'cloze_test',
    readingPassage: PASSAGE_STAYING_HEALTHY,
    passageTranslation: PASSAGE_STAYING_HEALTHY_TRANS,
    questionText: 'Question 38. Invite friends and (38) _____ colleagues to join lunchtime walks',
    options: [
      { id: 'A', text: 'other', translation: 'other + danh từ số nhiều colleagues' },
      { id: 'B', text: 'others', translation: 'đại từ độc lập' },
      { id: 'C', text: 'the others', translation: 'đại từ chỉ nhóm xác định' },
      { id: 'D', text: 'another', translation: 'another + danh từ số ít' }
    ],
    correctAnswer: 'A',
    explanation: '• Trước danh từ số nhiều "colleagues" ta dùng tính từ "other" (other colleagues = những đồng nghiệp khác). Chọn A. other.',
    translation: 'Mời bạn bè và những đồng nghiệp khác cùng tham gia.',
    topicTag: 'Từ định lượng & Phân biệt Other/Another'
  },
  {
    id: 'tpht-q39',
    type: 'cloze_test',
    readingPassage: PASSAGE_STAYING_HEALTHY,
    passageTranslation: PASSAGE_STAYING_HEALTHY_TRANS,
    questionText: 'Question 39. and try (39) _____ everyone’s motivation by sharing your results online',
    options: [
      { id: 'A', text: 'comparing', translation: 'so sánh' },
      { id: 'B', text: 'replacing', translation: 'thay thế' },
      { id: 'C', text: 'boosting', translation: 'thúc đẩy / nâng cao (boost motivation)' },
      { id: 'D', text: 'turning', translation: 'xoay chuyển' }
    ],
    correctAnswer: 'C',
    explanation: '• Collocation chuẩn: "boost motivation" (thúc đẩy / nâng cao động lực). Chọn C. boosting.',
    translation: 'Cố gắng nâng cao động lực của mọi người bằng cách chia sẻ kết quả.',
    topicTag: 'Collocation'
  },
  {
    id: 'tpht-q40',
    type: 'cloze_test',
    readingPassage: PASSAGE_STAYING_HEALTHY,
    passageTranslation: PASSAGE_STAYING_HEALTHY_TRANS,
    questionText: 'Question 40. if your plan brings (40) _____ results to keep your motivation high.',
    options: [
      { id: 'A', text: 'satisfying', translation: 'hài lòng (chủ quan)' },
      { id: 'B', text: 'effective', translation: 'hiệu quả' },
      { id: 'C', text: 'positive', translation: 'tích cực (positive results - collocation chuẩn)' },
      { id: 'D', text: 'successful', translation: 'thành công' }
    ],
    correctAnswer: 'C',
    explanation: '• Collocation tự nhiên nhất: "positive results" (kết quả tích cực / khả quan). Chọn C. positive.',
    translation: 'Nếu kế hoạch của bạn mang lại những kết quả tích cực.',
    topicTag: 'Collocation & Từ vựng'
  }
];

export const TRAN_PHU_HA_TINH_2026_EXAM: ExamSet = {
  id: 'exam-tran-phu-ha-tinh-2026',
  title: 'Đề Khảo Sát Chất Lượng 2026 - THPT Trần Phú (Hà Tĩnh)',
  description: 'Đề khảo sát chất lượng chính thức môn Tiếng Anh 12 năm học 2025 - 2026 của Trường THPT Trần Phú (Sở GD-ĐT Hà Tĩnh) gồm 40 câu trắc nghiệm kèm đáp án và giải thích chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'THPT TRẦN PHÚ HÀ TĨNH',
  iconName: 'Award',
  questions: TRAN_PHU_HA_TINH_2026_QUESTIONS
};
