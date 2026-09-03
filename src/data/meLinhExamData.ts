import type { ExamSet, Question } from '../types/quiz';

// PASSAGE DECLARATIONS FOR MÊ LINH EXAM
const PASSAGE_ENVIRONMENT_PROTECTION = `How to Protect Our Environment?
Protecting the environment is the responsibility of not only governments but also <mark>(1) ____________</mark> individual in the community. In today’s rapidly changing world, environmental problems are becoming more serious and visible. Small daily actions can make a big <mark>(2) ____________</mark> in protecting our planet for future generations. For example, you can reduce waste by using reusable bags and bottles instead of single-use plastic items.
Another important step is to support local businesses that promote <mark>(3) ____________</mark> and sustainable farming methods in your area. In addition, switching off electrical devices when they are not <mark>(4) ____________</mark> use helps cut down on energy consumption at home and in the workplace.
You should also encourage other people around you to take part in community clean-up <mark>(5) ____________</mark> and environmental workshops, <mark>(6) ____________</mark> these activities help raise awareness and build a greener, more sustainable future for everyone.`;

const PASSAGE_ENVIRONMENT_PROTECTION_TRANS = `Làm thế nào để bảo vệ môi trường của chúng ta?
Bảo vệ môi trường là trách nhiệm không chỉ của các chính phủ mà còn của mỗi cá nhân trong cộng đồng. Trong thế giới đang thay đổi nhanh chóng ngày nay, các vấn đề môi trường ngày càng trở nên nghiêm trọng và rõ ràng hơn. Những hành động nhỏ hàng ngày có thể tạo ra sự khác biệt lớn trong việc bảo vệ hành tinh của chúng ta cho các thế hệ tương lai.

Một bước quan trọng khác là hỗ trợ các doanh nghiệp địa phương quảng bá các sản phẩm thân thiện với môi trường và các phương pháp canh tác bền vững trong khu vực của bạn. Ngoài ra, việc tắt các thiết bị điện khi không sử dụng giúp cắt giảm lượng tiêu thụ năng lượng tại nhà và nơi làm việc.

Bạn cũng nên khuyến khích những người xung quanh tham gia các chiến dịch dọn dẹp cộng đồng và các buổi hội thảo về môi trường, bởi vì những hoạt động này giúp nâng cao nhận thức và xây dựng một tương lai xanh hơn, bền vững hơn cho tất cả mọi người.`;

const PASSAGE_YOUTH_VOLUNTEER = `JOIN OUR YOUTH VOLUNTEER CLUB!
Are you passionate about making a real <mark>(7) ____________</mark> in your community? The Youth Volunteer Club is looking for enthusiastic members to join our team!
Our mission is to help people in need, protect the local environment, and build a stronger, more supportive community. As a member, you will have the opportunity to take part in <mark>(8) ____________</mark> activities, such as <mark>(9) ____________</mark> charity drives, tutoring underprivileged children, and planting trees in <mark>(10) ____________</mark> parks.
<mark>(11) ____________</mark> you can spare a few hours a week or want to get involved in major projects, your contribution matters!
Requirements:
- Age: 15 - 25 years old
- Enthusiasm, teamwork skills, and a strong sense of responsibility.
Join us today to gain <mark>(12) ____________</mark> experience, meet new friends, and make a difference!`;

const PASSAGE_YOUTH_VOLUNTEER_TRANS = `THAM GIA CÂU LẠC BỘ TÌNH NGUYỆN TRẺ!
Bạn có đam mê tạo ra tác động tích cực thực sự cho cộng đồng? Câu lạc bộ Tình nguyện Trẻ đang tìm kiếm các thành viên nhiệt huyết để gia nhập đội ngũ của chúng tôi!
Sứ mệnh của chúng tôi là giúp đỡ những người khó khăn, bảo vệ môi trường địa phương và xây dựng một cộng đồng vững mạnh, tương trợ lẫn nhau hơn. Với tư cách là thành viên, bạn sẽ có cơ hội tham gia vào nhiều hoạt động khác nhau như tổ chức quyên góp từ thiện, dạy học cho trẻ em nghèo và trồng cây ở công viên địa phương.
Dù bạn chỉ có thể dành vài giờ một tuần hay muốn tham gia sâu vào các dự án lớn, sự đóng góp của bạn đều rất quý giá!
Yêu cầu:
- Độ tuổi: 15 - 25 tuổi
- Nhiệt huyết, kỹ năng làm việc nhóm và tinh thần trách nhiệm cao.
Hãy gia nhập cùng chúng tôi ngay hôm nay để tích lũy kinh nghiệm quý giá, kết bạn mới và tạo ra sự khác biệt!`;

const PASSAGE_FUTURE_TECH = `In the modern era, technology is evolving at an unprecedented pace, reshaping the way humans live, work, and communicate. Smart devices, artificial intelligence, and automated systems are becoming increasingly integrated into daily routines, making complex tasks faster and more efficient. <mark>(18) ____________</mark>, many traditional jobs are being transformed or replaced by machines.
First and foremost, digital connectivity allows people to work remotely from almost anywhere in the world. <mark>(19) ____________</mark>, reducing commuting time and stress. However, it also blurs the boundaries between professional hours and personal time, potentially leading to burnout.
Furthermore, the widespread adoption of artificial intelligence in healthcare has led to significant breakthroughs. <mark>(20) ____________</mark>, assisting doctors in detecting diseases at an early stage. <mark>(21) ____________</mark>, the higher the quality of treatment patients receive.
Nevertheless, technological reliance poses serious challenges regarding data privacy and cybersecurity. <mark>(22) ____________</mark>, users will remain vulnerable to cyber threats and identity theft.`;

const PASSAGE_FUTURE_TECH_TRANS = `Trong kỷ nguyên hiện đại, công nghệ đang phát triển với tốc độ chưa từng có, định hình lại cách con người sống, làm việc và giao tiếp. Các thiết bị thông minh, trí tuệ nhân tạo và các hệ thống tự động hóa ngày càng được tích hợp sâu vào sinh hoạt hàng ngày. Khi tự động hóa mở rộng trên nhiều ngành công nghiệp, nhiều công việc truyền thống đang biến đổi hoặc bị thay thế bởi máy móc.

Trước hết, kết nối kỹ thuật số cho phép mọi người làm việc từ xa từ hầu hết mọi nơi trên thế giới. Sự linh hoạt này giúp người lao động cân bằng công việc và cuộc sống cá nhân tốt hơn, giảm thời gian đi lại và căng thẳng. Tuy nhiên, nó cũng làm mờ ranh giới giữa giờ làm việc và thời gian riêng tư, có nguy cơ dẫn đến kiệt sức.

Hơn nữa, việc áp dụng rộng rãi trí tuệ nhân tạo trong y tế đã mang lại những bước tiến quan trọng. Các thuật toán AI hiện có thể phân tích hình ảnh y khoa với độ chính xác cao, hỗ trợ bác sĩ phát hiện bệnh ở giai đoạn sớm. Công nghệ y tế này càng trở nên tiên tiến, chất lượng điều trị mà bệnh nhân nhận được càng cao.

Tuy nhiên, việc phụ thuộc vào công nghệ đặt ra những thách thức nghiêm trọng về bảo mật dữ liệu và an ninh mạng. Trừ khi các giao thức bảo mật nghiêm ngặt được thiết lập để bảo vệ thông tin cá nhân, người dùng vẫn sẽ dễ bị tổn thương trước các mối đe dọa trên mạng và nạn trộm cắp danh tính.`;

const PASSAGE_NEWSPAPER_EVOLUTION = `For centuries, newspapers served as the primary source of news and information for communities worldwide. <mark>They</mark> played a vital role in keeping citizens informed, holding leaders accountable, and documenting historical events as they unfolded. However, the rise of the internet and digital technology has fundamentally altered the media landscape, placing traditional print newspapers in a precarious financial position.

In the past, traditional print newspapers relied heavily on subscriptions and print advertising revenues to sustain their operations. Display advertisements from local businesses and classified ads generated steady income that supported investigative journalism and international reporting. Today, however, digital advertising platforms and social media companies dominate the market, absorbing the vast majority of advertising dollars. Consequently, print circulation has plummeted, forcing many long-standing newspapers to cut staff, reduce publication frequency, or shut down entirely.

<mark>To survive in the digital age, news organizations have had to adapt by transitioning to digital subscription models and paywalls.</mark> While some major global outlets have successfully built sustainable digital readership bases, many smaller local publications struggle to generate sufficient revenue online. This decline in local news coverage leaves communities with fewer resources to stay informed about local government decisions and community developments.

Despite these <mark>formidable</mark> challenges, journalism remains essential for a healthy democratic society. Online news outlets now utilize interactive graphics, multimedia content, and real-time updates to engage modern readers in ways that print media never could. Going forward, the future of news will depend on finding innovative business models that protect independent, <mark>trusted</mark> reporting while embracing the possibilities of the digital age.`;

const PASSAGE_NEWSPAPER_EVOLUTION_TRANS = `Trong nhiều thế kỷ, báo in đóng vai trò là nguồn tin tức và thông tin chính cho các cộng đồng trên toàn thế giới. Chúng giữ vai trò thiết yếu trong việc cung cấp thông tin cho công dân, giám sát trách nhiệm của các nhà lãnh đạo và ghi lại các sự kiện lịch sử khi chúng diễn ra. Tuy nhiên, sự phát triển của internet và công nghệ kỹ thuật số đã làm thay đổi căn bản cục diện truyền thông, đẩy các tờ báo in truyền thống vào thế bấp bấp tài chính.

Trước đây, báo in truyền thống phụ thuộc rất nhiều vào doanh thu đăng ký mua báo và quảng cáo trên bản in để duy trì hoạt động. Quảng cáo từ các doanh nghiệp địa phương và rao vặt tạo ra nguồn thu nhập ổn định hỗ trợ báo chí điều tra và đưa tin quốc tế. Tuy nhiên ngày nay, các nền tảng quảng cáo kỹ thuật số và công ty mạng xã hội chiếm lĩnh thị trường, thu hút phần lớn ngân sách quảng cáo. Hậu quả là lượng phát hành báo in giảm mạnh, buộc nhiều tờ báo lâu đời phải cắt giảm nhân sự, giảm tần suất xuất bản hoặc đóng cửa hoàn toàn.

Để tồn tại trong kỷ nguyên số, các tổ chức tin tức đã phải thích nghi bằng cách chuyển sang mô hình đăng ký kỹ thuật số và tường thu phí (paywall). Mặc dù một số cơ quan báo chí toàn cầu lớn đã xây dựng thành công lượng độc giả số bền vững, nhiều ấn phẩm địa phương nhỏ hơn vẫn chật vật kiếm đủ doanh thu trực tuyến. Sự suy giảm đưa tin địa phương này khiến các cộng đồng có ít nguồn lực hơn để theo dõi quyết định của chính quyền địa phương và các phát triển trong cộng đồng.

Mặc dù đối mặt với những thách thức to lớn này, báo chí vẫn là yếu tố thiết yếu cho một xã hội dân chủ khỏe mạnh. Các cơ quan tin tức trực tuyến hiện sử dụng đồ họa tương tác, nội dung đa phương tiện và cập nhật thời gian thực để thu hút độc giả hiện đại theo cách mà báo in chưa bao giờ làm được. Trong tương lai, số phận của báo chí sẽ phụ thuộc vào việc tìm ra các mô hình kinh doanh đổi mới giúp bảo vệ hoạt động đưa tin độc lập đồng thời đón nhận các khả năng của kỷ nguyên số.`;

const PASSAGE_COOKIES_PRIVACY = `Every day, billions of internet users browse websites, click links, and make purchases without realizing that <mark>[I]</mark> <mark>a quiet trade takes place</mark> in the background. Online tracking technologies, most notably "cookies," record user behaviors, preferences, and location data. While first-party cookies are designed to enhance user experience by remembering login details and shopping cart items, third-party tracking cookies gather vast amounts of personal data to build detailed behavioral profiles for targeted advertising. <mark>[II]</mark>

The monetization of personal data has turned the internet into a surveillance economy. Data brokers compile information from multiple online sources, creating comprehensive dossiers on individuals without their explicit knowledge or consent. This data is then sold to advertisers who use it to deliver hyper-personalized ads designed to influence consumer decisions. Critics argue that this constant monitoring erodes individual privacy, alters online behavior, and exposes users to potential data breaches and identity theft. <mark>[III]</mark>

In response to growing public concern, governments around the world have enacted privacy regulations, such as the European Union’s General Data Protection Regulation (GDPR). These laws mandate that websites obtain clear consent from users before placing tracking cookies on their devices. However, many websites comply using deceptive interface designs—known as "dark patterns"—that make <mark>it</mark> frustrating for users to decline tracking while making acceptance effortless. Consequently, "cookie consent" banners often fail to provide genuine privacy protection, serving instead as a legal shield for continued data collection. <mark>[IV]</mark>

<mark>Protecting privacy in the digital age requires a combination of robust legal enforcement, privacy-respecting technology, and heightened user awareness.</mark> Privacy-focused browsers, virtual private networks (VPNs), and ad-blocking extensions empower individuals to regain control over their digital footprints. Ultimately, building a safer online ecosystem will require shifting away from <mark>intrusive</mark> tracking toward business models that respect fundamental human rights while supporting digital innovation.`;

const PASSAGE_COOKIES_PRIVACY_TRANS = `Mỗi ngày, hàng tỷ người dùng internet truy cập các trang web, nhấp vào liên kết và mua sắm mà không nhận ra rằng một cuộc trao đổi thầm lặng đang diễn ra phía sau. Các công nghệ theo dõi trực tuyến, nổi bật nhất là "cookies", ghi lại hành vi, sở thích và dữ liệu vị trí của người dùng. Trong khi cookies bên thứ nhất được thiết kế để nâng cao trải nghiệm người dùng bằng cách ghi nhớ thông tin đăng nhập và giỏ hàng, cookies theo dõi của bên thứ ba lại thu thập lượng lớn dữ liệu cá nhân để xây dựng hồ sơ hành vi chi tiết phục vụ quảng cáo mục tiêu.

Vòng quay tiền tệ hóa dữ liệu cá nhân đã biến internet thành một nền kinh tế giám sát. Các bên môi giới dữ liệu tổng hợp thông tin từ nhiều nguồn trực tuyến, tạo ra các hồ sơ toàn diện về cá nhân mà không có sự đồng ý hoặc biết rõ của họ. Dữ liệu này sau đó được bán cho các nhà quảng cáo để phân phối quảng cáo siêu cá nhân hóa nhằm chi phối quyết định của người tiêu dùng. Các nhà phê bình cho rằng việc giám sát liên tục này làm xói mòn quyền riêng tư cá nhân, thay đổi hành vi trực tuyến và đẩy người dùng trước rủi ro rò rỉ dữ liệu và trộm cắp danh tính.

Để ứng phó với sự lo ngại ngày càng tăng của công chúng, các chính phủ trên thế giới đã ban hành các quy định về quyền riêng tư, chẳng hạn như Quy định chung về bảo vệ dữ liệu (GDPR) của Liên minh Châu Âu. Những đạo luật này bắt buộc các trang web phải có sự đồng ý rõ ràng của người dùng trước khi đặt cookies theo dõi trên thiết bị của họ. Tuy nhiên, nhiều trang web tuân thủ bằng cách sử dụng thiết kế giao diện lừa đảo—gọi là "dark patterns"—khiến người dùng gặp khó khăn khi từ chối theo dõi trong khi việc chấp nhận lại rất dễ dàng. Do đó, các biểu ngữ "chấp nhận cookie" thường không mang lại sự bảo vệ quyền riêng tư thực sự, mà chỉ đóng vai trò như một lá chắn pháp lý cho việc tiếp tục thu thập dữ liệu.

Việc bảo vệ quyền riêng tư trong kỷ nguyên số đòi hỏi sự kết hợp giữa thực thi pháp lý nghiêm minh, công nghệ tôn trọng quyền riêng tư và nhận thức được nâng cao của người dùng. Các trình duyệt chú trọng quyền riêng tư, mạng riêng ảo (VPN) và các tiện ích chặn quảng cáo giúp cá nhân lấy lại quyền kiểm soát dấu chân kỹ thuật số của mình. Cuối cùng, việc xây dựng một hệ sinh thái trực tuyến an toàn hơn sẽ đòi hỏi phải dịch chuyển khỏi việc theo dõi xâm phạm để hướng tới các mô hình kinh doanh tôn trọng các quyền cơ bản của con người đồng thời hỗ trợ đổi mới kỹ thuật số.`;

export const ME_LINH_2026_QUESTIONS: Question[] = [
  // SECTION 1: CLOZE LEAFLET - ENVIRONMENT (Q1 - Q6)
  {
    id: 'ml-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_ENVIRONMENT_PROTECTION,
    passageTranslation: PASSAGE_ENVIRONMENT_PROTECTION_TRANS,
    questionText: 'Question 1. Fill in blank (1):',
    options: [
      { id: 'A', text: 'another', translation: 'một cái/người khác (dùng với N số ít)' },
      { id: 'B', text: 'many', translation: 'nhiều (dùng với N số nhiều)' },
      { id: 'C', text: 'every', translation: 'mỗi/mọi (dùng với N số ít nhấn mạnh cá nhân)' },
      { id: 'D', text: 'all', translation: 'tất cả (dùng với N số nhiều/không đếm được)' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: "every individual" nghĩa là mỗi cá nhân (every + danh từ số ít).\n• A. SAI: "another" mang nghĩa một cái khác, không hợp ngữ cảnh.\n• B, D. SAI: "many" và "all" đi với danh từ số nhiều.',
    translation: 'Bảo vệ môi trường là trách nhiệm của không chỉ chính phủ mà còn của (1) ____________ cá nhân trong cộng đồng.',
    topicTag: 'Lượng từ (Quantifiers)'
  },
  {
    id: 'ml-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_ENVIRONMENT_PROTECTION,
    passageTranslation: PASSAGE_ENVIRONMENT_PROTECTION_TRANS,
    questionText: 'Question 2. Fill in blank (2):',
    options: [
      { id: 'A', text: 'effort', translation: 'nỗ lực' },
      { id: 'B', text: 'arrangement', translation: 'sự sắp xếp' },
      { id: 'C', text: 'choice', translation: 'sự lựa chọn' },
      { id: 'D', text: 'difference', translation: 'sự khác biệt / tác động tích cực' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cụm từ cố định "make a difference" nghĩa là tạo ra sự thay đổi/tác động tích cực.',
    translation: 'Những hành động nhỏ hàng ngày có thể tạo ra (2) ____________ lớn trong việc bảo vệ hành tinh.',
    topicTag: 'Collocation (Cụm từ cố định)'
  },
  {
    id: 'ml-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_ENVIRONMENT_PROTECTION,
    passageTranslation: PASSAGE_ENVIRONMENT_PROTECTION_TRANS,
    questionText: 'Question 3. Fill in blank (3):',
    options: [
      { id: 'A', text: 'products environmentally friendly', translation: 'sản phẩm thân thiện môi trường' },
      { id: 'B', text: 'friendly environmentally products', translation: 'thân thiện môi trường sản phẩm' },
      { id: 'C', text: 'environmentally products friendly', translation: 'môi trường sản phẩm thân thiện' },
      { id: 'D', text: 'environmentally friendly products', translation: 'các sản phẩm thân thiện với môi trường' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cụm danh từ ghép đúng trật tự: Adv (environmentally) + Adj (friendly) + N (products).',
    translation: 'Hỗ trợ các doanh nghiệp địa phương quảng bá (3) ____________ và các phương pháp canh tác bền vững.',
    topicTag: 'Trật tự từ trong cụm danh từ'
  },
  {
    id: 'ml-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_ENVIRONMENT_PROTECTION,
    passageTranslation: PASSAGE_ENVIRONMENT_PROTECTION_TRANS,
    questionText: 'Question 4. Fill in blank (4):',
    options: [
      { id: 'A', text: 'on', translation: 'trên' },
      { id: 'B', text: 'in', translation: 'trong (in use: đang được sử dụng)' },
      { id: 'C', text: 'of', translation: 'của' },
      { id: 'D', text: 'at', translation: 'tại' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Thành ngữ "in use" nghĩa là đang được sử dụng; "not in use" = không được sử dụng.',
    translation: 'Tắt các thiết bị điện khi chúng không (4) ____________ sử dụng giúp tiết kiệm năng lượng.',
    topicTag: 'Giới từ & Thành ngữ (Prepositions)'
  },
  {
    id: 'ml-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_ENVIRONMENT_PROTECTION,
    passageTranslation: PASSAGE_ENVIRONMENT_PROTECTION_TRANS,
    questionText: 'Question 5. Fill in blank (5):',
    options: [
      { id: 'A', text: 'missions', translation: 'nhiệm vụ' },
      { id: 'B', text: 'campaigns', translation: 'các chiến dịch' },
      { id: 'C', text: 'operations', translation: 'các hoạt động vận hành' },
      { id: 'D', text: 'drives', translation: 'các cuộc vận động' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "clean-up campaigns" nghĩa là các chiến dịch dọn dẹp môi trường.',
    translation: 'Tham gia vào các (5) ____________ dọn dẹp cộng đồng và hội thảo môi trường.',
    topicTag: 'Từ vựng chủ đề Môi trường'
  },
  {
    id: 'ml-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_ENVIRONMENT_PROTECTION,
    passageTranslation: PASSAGE_ENVIRONMENT_PROTECTION_TRANS,
    questionText: 'Question 6. Fill in blank (6):',
    options: [
      { id: 'A', text: 'therefore', translation: 'do đó / vì vậy' },
      { id: 'B', text: 'however', translation: 'tuy nhiên' },
      { id: 'C', text: 'because', translation: 'bởi vì (chỉ nguyên nhân)' },
      { id: 'D', text: 'although', translation: 'mặc dù (chỉ nhượng bộ)' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Liên từ "because" giải thích lý do nên tham gia các hoạt động này.',
    translation: 'Khuyến khích mọi người tham gia, (6) ____________ những hoạt động này giúp nâng cao nhận thức.',
    topicTag: 'Liên từ chỉ nguyên nhân'
  },

  // SECTION 2: CLOZE LEAFLET - VOLUNTEER CLUB (Q7 - Q12)
  {
    id: 'ml-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUTH_VOLUNTEER,
    passageTranslation: PASSAGE_YOUTH_VOLUNTEER_TRANS,
    questionText: 'Question 7. Fill in blank (7):',
    options: [
      { id: 'A', text: 'roots', translation: 'rễ cây / nguồn gốc' },
      { id: 'B', text: 'steps', translation: 'các bước' },
      { id: 'C', text: 'hold', translation: 'sự nắm giữ' },
      { id: 'D', text: 'impact', translation: 'tác động / ảnh hưởng' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cụm từ "make an impact in the community" nghĩa là tạo ra tác động/ảnh hưởng trong cộng đồng.',
    translation: 'Bạn có đam mê tạo ra (7) ____________ thực sự trong cộng đồng?',
    topicTag: 'Collocation'
  },
  {
    id: 'ml-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUTH_VOLUNTEER,
    passageTranslation: PASSAGE_YOUTH_VOLUNTEER_TRANS,
    questionText: 'Question 8. Fill in blank (8):',
    options: [
      { id: 'A', text: 'number', translation: 'số lượng (dùng cho N đếm được)' },
      { id: 'B', text: 'amount', translation: 'lượng (dùng cho N không đếm được)' },
      { id: 'C', text: 'majority', translation: 'đa số' },
      { id: 'D', text: 'handful', translation: 'một nắm / một ít' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "a number of + N số nhiều" chỉ một số lượng nhiều các hoạt động.',
    translation: 'Tham gia vào (8) ____________ hoạt động đa dạng như quyên góp từ thiện.',
    topicTag: 'Lượng từ & Từ chỉ số lượng'
  },
  {
    id: 'ml-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUTH_VOLUNTEER,
    passageTranslation: PASSAGE_YOUTH_VOLUNTEER_TRANS,
    questionText: 'Question 9. Fill in blank (9):',
    options: [
      { id: 'A', text: 'organizing', translation: 'tổ chức (V-ing)' },
      { id: 'B', text: 'to organize', translation: 'để tổ chức (To-V)' },
      { id: 'C', text: 'organized', translation: 'được tổ chức (V-ed)' },
      { id: 'D', text: 'organize', translation: 'tổ chức (V-bare)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Sau giới từ "such as" ta dùng danh động từ V-ing (organizing).',
    translation: 'Tham gia các hoạt động như (9) ____________ các đợt quyên góp từ thiện.',
    topicTag: 'Danh động từ sau giới từ (V-ing)'
  },
  {
    id: 'ml-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUTH_VOLUNTEER,
    passageTranslation: PASSAGE_YOUTH_VOLUNTEER_TRANS,
    questionText: 'Question 10. Fill in blank (10):',
    options: [
      { id: 'A', text: 'other', translation: 'khác (đi với N số nhiều)' },
      { id: 'B', text: 'the others', translation: 'những cái/người còn lại (đại từ)' },
      { id: 'C', text: 'the other', translation: 'cái/người còn lại xác định' },
      { id: 'D', text: 'others', translation: 'những người/cái khác (đại từ)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "other + N số nhiều" (other parks: các công viên khác).',
    translation: 'Trồng cây ở các công viên (10) ____________ trong khu vực.',
    topicTag: 'Phân biệt Other / Another'
  },
  {
    id: 'ml-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUTH_VOLUNTEER,
    passageTranslation: PASSAGE_YOUTH_VOLUNTEER_TRANS,
    questionText: 'Question 11. Fill in blank (11):',
    options: [
      { id: 'A', text: 'Whether', translation: 'Liệu rằng / Dù cho (chỉ sự lựa chọn)' },
      { id: 'B', text: 'Unless', translation: 'Trừ khi' },
      { id: 'C', text: 'Although', translation: 'Mặc dù' },
      { id: 'D', text: 'Because', translation: 'Bởi vì' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc "Whether... or..." nghĩa là dù bạn có dành ít thời gian hay muốn tham gia dự án lớn.',
    translation: '(11) ____________ bạn có thể dành vài giờ một tuần hay muốn tham gia các dự án lớn.',
    topicTag: 'Liên từ chỉ sự lựa chọn (Whether... or)'
  },
  {
    id: 'ml-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUTH_VOLUNTEER,
    passageTranslation: PASSAGE_YOUTH_VOLUNTEER_TRANS,
    questionText: 'Question 12. Fill in blank (12):',
    options: [
      { id: 'A', text: 'valuable', translation: 'quý giá / có giá trị' },
      { id: 'B', text: 'value', translation: 'giá trị' },
      { id: 'C', text: 'valuably', translation: 'một cách có giá trị (Trạng từ)' },
      { id: 'D', text: 'evaluate', translation: 'đánh giá' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đứng trước danh từ "experience" ta cần một tính từ "valuable" (kinh nghiệm quý giá).',
    translation: 'Gia nhập ngay hôm nay để tích lũy kinh nghiệm (12) ____________ và làm quen bạn mới.',
    topicTag: 'Từ loại (Word Formation)'
  },

  // SECTION 3: REORDERING (Q13 - Q17) - NO PASSAGE
  {
    id: 'ml-q13',
    type: 'reordering',
    questionText: 'Question 13. Choose the correct order of sentences to make a meaningful paragraph:\na. Urbanization is accelerating globally as more people move from rural areas to cities in search of better economic opportunities.\nb. Consequently, massive urban infrastructure projects must be expanded to accommodate the rising population density.\nc. However, rapid growth often leads to severe traffic congestion, housing shortages, and environmental degradation.',
    options: [
      { id: 'A', text: 'a - b - c', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'a - c - b', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'b - a - c', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c - a - b', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG (a - c - b): Mở đầu nêu xu hướng đô thị hóa (a), tiếp theo đưa ra thách thức/hậu quả tiêu cực (c), và kết luận bằng hệ quả cơ sở hạ tầng (b).',
    translation: 'Sắp xếp các câu thành đoạn văn hoàn chỉnh về chủ đề Đô thị hóa.',
    topicTag: 'Sắp xếp đoạn văn (Paragraph Structure)'
  },
  {
    id: 'ml-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the correct order of sentences to make a meaningful paragraph:\na. Firstly, participating in extracurricular activities helps students develop crucial soft skills such as leadership and communication.\nb. In conclusion, balancing academics with extracurricular involvement is essential for a well-rounded education.\nc. Furthermore, these activities provide opportunities to build strong friendships and network with peers.\nd. School life is not only about academic achievement but also about personal growth through various experiences.',
    options: [
      { id: 'A', text: 'd - a - c - b', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'a - c - d - b', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'd - c - a - b', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'a - d - c - b', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (d - a - c - b): Câu d mở chủ đề đời sống học đường -> a ý 1 (Firstly) -> c ý 2 (Furthermore) -> b kết luận (In conclusion).',
    translation: 'Sắp xếp các câu thành đoạn văn hoàn chỉnh về lợi ích của hoạt động ngoại khóa.',
    topicTag: 'Sắp xếp đoạn văn (Paragraph Structure)'
  },
  {
    id: 'ml-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the correct order of sentences to make a meaningful paragraph:\na. Dear Sir/Madam, I am writing to express my interest in the volunteer position advertised on your community website.\nb. I have two years of experience organizing local charity events and tutoring primary school students.\nc. Thank you for considering my application, and I look forward to hearing from you soon.\nd. I believe my communication skills and dedication would make me a valuable addition to your team.',
    options: [
      { id: 'A', text: 'a - b - d - c', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'a - d - b - c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'b - a - d - c', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'a - c - b - d', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - d - c): Trật tự thư ứng tuyển chuẩn: Mở đầu nêu vị trí (a) -> Nêu kinh nghiệm (b) -> Khẳng định sự phù hợp (d) -> Cảm ơn và kết thư (c).',
    translation: 'Sắp xếp câu trong thư xin làm tình nguyện viên.',
    topicTag: 'Sắp xếp thư ứng tuyển (Letter Structure)'
  },
  {
    id: 'ml-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the correct order of sentences to form a coherent letter segment:\na. Additionally, renewable energy sources like solar and wind power are becoming more affordable and accessible.\nb. Climate change is one of the most pressing global challenges that requires immediate collective action.\nc. By transitioning away from fossil fuels, nations can significantly reduce greenhouse gas emissions and protect ecosystems.',
    options: [
      { id: 'A', text: 'b - a - c', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'a - b - c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'b - c - a', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c - b - a', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (b - a - c): Câu b đặt vấn đề biến đổi khí hậu -> Câu a bổ sung giải pháp năng lượng tái tạo (Additionally) -> Câu c nêu kết quả bảo vệ môi trường.',
    translation: 'Sắp xếp các câu về chủ đề Năng lượng tái tạo và Biến đổi khí hậu.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'ml-q17',
    type: 'reordering',
    questionText: 'Question 17. Choose the correct order of sentences to form a coherent paragraph:\na. Artificial intelligence has made remarkable strides in recent years, transforming fields from education to finance.\nb. However, ethical concerns regarding algorithmic bias and job displacement must be addressed proactively.\nc. Consequently, governments and tech companies must collaborate to establish clear regulatory frameworks.',
    options: [
      { id: 'A', text: 'a - b - c', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'b - a - c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'a - c - b', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c - a - b', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - c): Mở đầu bằng sự phát triển của AI (a) -> Nêu thách thức đạo đức (b) -> Đưa ra kết luận/giải pháp quản lý (c).',
    translation: 'Sắp xếp câu về chủ đề Trí tuệ nhân tạo và Quản lý đạo đức.',
    topicTag: 'Sắp xếp đoạn văn'
  },

  // SECTION 4: CLOZE TEST - FUTURE TECH (Q18 - Q22)
  {
    id: 'ml-q18',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUTURE_TECH,
    passageTranslation: PASSAGE_FUTURE_TECH_TRANS,
    questionText: 'Question 18. Fill in blank (18):',
    options: [
      { id: 'A', text: 'As automation expands across various industries', translation: 'Khi tự động hóa mở rộng trên nhiều ngành công nghiệp' },
      { id: 'B', text: 'Although automation expands across various industries', translation: 'Mặc dù tự động hóa mở rộng trên nhiều ngành' },
      { id: 'C', text: 'Because automation will expand across various industries', translation: 'Bởi vì tự động hóa sẽ mở rộng...' },
      { id: 'D', text: 'Until automation expands across various industries', translation: 'Cho đến khi tự động hóa mở rộng...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "As automation expands..." chỉ mối quan hệ thời gian/nguyên nhân phù hợp với vế sau về sự biến đổi công việc.',
    translation: '(18) ____________, nhiều công việc truyền thống đang biến đổi hoặc bị thay thế bởi máy móc.',
    topicTag: 'Mệnh đề trạng ngữ chỉ thời gian (As...)'
  },
  {
    id: 'ml-q19',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUTURE_TECH,
    passageTranslation: PASSAGE_FUTURE_TECH_TRANS,
    questionText: 'Question 19. Fill in blank (19):',
    options: [
      { id: 'A', text: 'This flexibility enables employees to balance work and personal life better', translation: 'Sự linh hoạt này giúp nhân viên cân bằng công việc và cuộc sống tốt hơn' },
      { id: 'B', text: 'Having enabled employees to balance work and personal life better', translation: 'Đã giúp nhân viên cân bằng...' },
      { id: 'C', text: 'That employees are enabled to balance work and personal life better', translation: 'Việc nhân viên được giúp cân bằng...' },
      { id: 'D', text: 'Which enables employees to balance work and personal life better', translation: 'Điều này giúp nhân viên cân bằng...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cung cấp mệnh đề chính hoàn chỉnh với chủ ngữ "This flexibility" quy chiếu về việc làm việc từ xa.',
    translation: 'Trước hết, làm việc từ xa mang lại nhiều lợi ích. (19) ____________, giúp giảm thời gian đi lại.',
    topicTag: 'Cấu trúc câu & Từ quy chiếu'
  },
  {
    id: 'ml-q20',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUTURE_TECH,
    passageTranslation: PASSAGE_FUTURE_TECH_TRANS,
    questionText: 'Question 20. Fill in blank (20):',
    options: [
      { id: 'A', text: 'AI algorithms can now analyze medical images with high accuracy', translation: 'Các thuật toán AI hiện có thể phân tích hình ảnh y khoa với độ chính xác cao' },
      { id: 'B', text: 'Analyzing medical images with high accuracy by AI algorithms', translation: 'Việc phân tích hình ảnh y khoa...' },
      { id: 'C', text: 'Medical images can now analyze with high accuracy by AI algorithms', translation: 'Hình ảnh y khoa hiện có thể tự phân tích...' },
      { id: 'D', text: 'Having analyzed medical images with high accuracy', translation: 'Sau khi phân tích hình ảnh y khoa...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Mệnh đề độc lập hoàn chỉnh đứng sau dấu câu, chỉ năng lực phân tích hình ảnh y khoa của AI.',
    translation: 'Hơn nữa, trí tuệ nhân tạo trong y tế có bước tiến lớn. (20) ____________, hỗ trợ bác sĩ chẩn đoán sớm.',
    topicTag: 'Cấu trúc mệnh đề độc lập'
  },
  {
    id: 'ml-q21',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUTURE_TECH,
    passageTranslation: PASSAGE_FUTURE_TECH_TRANS,
    questionText: 'Question 21. Fill in blank (21):',
    options: [
      { id: 'A', text: 'The more advanced these medical technologies become', translation: 'Công nghệ y tế này càng trở nên tiên tiến' },
      { id: 'B', text: 'Because these medical technologies become more advanced', translation: 'Bởi vì công nghệ y tế trở nên tiên tiến hơn' },
      { id: 'C', text: 'The most advanced these medical technologies become', translation: 'Công nghệ y tế tiên tiến nhất' },
      { id: 'D', text: 'As these medical technologies become the more advanced', translation: 'Khi công nghệ y tế trở nên...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc so sánh kép "The + comparative..., the + comparative..." (Càng... thì càng...).',
    translation: '(21) ____________, chất lượng điều trị bệnh nhân nhận được càng cao.',
    topicTag: 'So sánh kép (Double Comparative)'
  },
  {
    id: 'ml-q22',
    type: 'cloze_test',
    readingPassage: PASSAGE_FUTURE_TECH,
    passageTranslation: PASSAGE_FUTURE_TECH_TRANS,
    questionText: 'Question 22. Fill in blank (22):',
    options: [
      { id: 'A', text: 'Unless strict security protocols are established to protect personal information', translation: 'Trừ khi các giao thức bảo mật nghiêm ngặt được thiết lập để bảo vệ thông tin' },
      { id: 'B', text: 'If strict security protocols were established to protect personal information', translation: 'Nếu giao thức bảo mật được thiết lập (quá khứ)' },
      { id: 'C', text: 'In spite of strict security protocols established to protect personal information', translation: 'Mặc dù giao thức bảo mật được thiết lập' },
      { id: 'D', text: 'Providing that strict security protocols will be established', translation: 'Với điều kiện giao thức bảo mật sẽ được thiết lập' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Unless" (trừ khi) diễn tả điều kiện bắt buộc để ngăn chặn nguy cơ an ninh mạng.',
    translation: '(22) ____________, người dùng vẫn sẽ dễ bị tổn thương trước các mối đe dọa trên mạng.',
    topicTag: 'Mệnh đề điều kiện (Unless)'
  },

  // SECTION 5: READING COMPREHENSION 1 - NEWSPAPER EVOLUTION (Q23 - Q30)
  {
    id: 'ml-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NEWSPAPER_EVOLUTION,
    passageTranslation: PASSAGE_NEWSPAPER_EVOLUTION_TRANS,
    questionText: 'Question 23. Which of the following is NOT mentioned as a traditional role of newspapers?',
    options: [
      { id: 'A', text: 'keeping citizens informed', translation: 'cung cấp thông tin cho công dân' },
      { id: 'B', text: 'holding leaders accountable', translation: 'giám sát trách nhiệm của các nhà lãnh đạo' },
      { id: 'C', text: 'documenting historical events', translation: 'ghi lại các sự kiện lịch sử' },
      { id: 'D', text: 'funding public infrastructure projects', translation: 'tài trợ các dự án cơ sở hạ tầng công cộng' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Báo chí chưa bao giờ có vai trò tài trợ cơ sở hạ tầng công cộng.',
    translation: 'Yếu tố nào dưới đây KHÔNG được đề cập là vai trò truyền thống của báo chí?',
    topicTag: 'Đọc hiểu - Thông tin KHÔNG đề cập'
  },
  {
    id: 'ml-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NEWSPAPER_EVOLUTION,
    passageTranslation: PASSAGE_NEWSPAPER_EVOLUTION_TRANS,
    questionText: 'Question 24. The word "formidable" in paragraph 4 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'minor', translation: 'nhỏ bé / không đáng kể' },
      { id: 'B', text: 'overwhelming', translation: 'to lớn / áp đảo' },
      { id: 'C', text: 'severe', translation: 'nghiêm trọng' },
      { id: 'D', text: 'difficult', translation: 'khó khăn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. minor - ĐÚNG: "Formidable" (to lớn/đáng sợ) TRÁI NGHĨA với "minor" (nhỏ bé/không đáng kể).',
    translation: 'Từ "formidable" trong đoạn 4 TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'ml-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NEWSPAPER_EVOLUTION,
    passageTranslation: PASSAGE_NEWSPAPER_EVOLUTION_TRANS,
    questionText: 'Question 25. The word "They" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'citizens', translation: 'công dân' },
      { id: 'B', text: 'historical events', translation: 'các sự kiện lịch sử' },
      { id: 'C', text: 'traditional print newspapers', translation: 'các tờ báo in truyền thống' },
      { id: 'D', text: 'digital technology', translation: 'công nghệ kỹ thuật số' }
    ],
    correctAnswer: 'C',
    explanation: '• C. traditional print newspapers - ĐÚNG: "They" quy chiếu về danh từ số nhiều "traditional print newspapers".',
    translation: 'Từ "They" trong đoạn 2 quy chiếu đến từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'ml-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NEWSPAPER_EVOLUTION,
    passageTranslation: PASSAGE_NEWSPAPER_EVOLUTION_TRANS,
    questionText: 'Question 26. The word "trusted" in paragraph 4 could be best replaced by:',
    options: [
      { id: 'A', text: 'reliable', translation: 'đáng tin cậy' },
      { id: 'B', text: 'doubtful', translation: 'nhiều nghi vấn' },
      { id: 'C', text: 'popular', translation: 'phổ biến' },
      { id: 'D', text: 'expensive', translation: 'đắt đỏ' }
    ],
    correctAnswer: 'A',
    explanation: '• A. reliable - ĐÚNG: "Trusted news" đồng nghĩa với "reliable news" (tin tức đáng tin cậy).',
    translation: 'Từ "trusted" trong đoạn 4 có thể được thay thế tốt nhất bởi từ nào?',
    topicTag: 'Đọc hiểu - Từ đồng nghĩa'
  },
  {
    id: 'ml-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NEWSPAPER_EVOLUTION,
    passageTranslation: PASSAGE_NEWSPAPER_EVOLUTION_TRANS,
    questionText: 'Question 27. Which of the following best paraphrases the underlined sentence in paragraph 3 ("To survive in the digital age, news organizations have had to adapt by transitioning to digital subscription models and paywalls")?',
    options: [
      { id: 'A', text: 'News organizations must abandon digital platforms if they wish to stay profitable in the future.', translation: 'Các tờ báo phải từ bỏ nền tảng số nếu muốn có lời...' },
      { id: 'B', text: 'In order to remain viable, news publishers have been forced to adopt digital subscriptions and online paywalls.', translation: 'Để tiếp tục tồn tại, các nhà xuất bản tin tức đã buộc phải áp dụng mô hình đăng ký số và tường thu phí trực tuyến.' },
      { id: 'C', text: 'Digital paywalls have eliminated all financial difficulties for traditional print newspaper publishers.', translation: 'Tường thu phí đã loại bỏ mọi khó khăn tài chính...' },
      { id: 'D', text: 'Transitioning to online models has caused most news organizations to go out of business.', translation: 'Chuyển sang mô hình trực tuyến khiến hầu hết đóng cửa...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Paraphrase chính xác câu gốc: "survive" = "remain viable", "transitioning to..." = "adopt digital subscriptions...".',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn 3?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'ml-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NEWSPAPER_EVOLUTION,
    passageTranslation: PASSAGE_NEWSPAPER_EVOLUTION_TRANS,
    questionText: 'Question 28. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Print advertising revenues have increased significantly over the past decade.', translation: 'Doanh thu quảng cáo báo in tăng mạnh trong thập kỷ qua.' },
      { id: 'B', text: 'Smaller local publications find it easy to generate digital revenue.', translation: 'Các ấn phẩm địa phương nhỏ thấy dễ kiếm doanh thu số.' },
      { id: 'C', text: 'Online news platforms can utilize interactive multimedia features to engage readers.', translation: 'Các nền tảng tin tức trực tuyến có thể sử dụng tính năng đa phương tiện tương tác để thu hút độc giả.' },
      { id: 'D', text: 'Social media companies have lost advertising market share to print newspapers.', translation: 'Các công ty mạng xã hội mất thị phần quảng cáo vào tay báo in.' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Dẫn chứng đoạn 4: "Online news outlets now utilize interactive graphics, multimedia content...".',
    translation: 'Phát biểu nào dưới đây là ĐÚNG theo nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin Đúng/Sai'
  },
  {
    id: 'ml-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NEWSPAPER_EVOLUTION,
    passageTranslation: PASSAGE_NEWSPAPER_EVOLUTION_TRANS,
    questionText: 'Question 29. In which paragraph does the writer mention a causal relationship in which one factor has reduced financial income for print newspapers?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'B',
    explanation: '• B. Paragraph 2 - ĐÚNG: Đoạn 2 giải thích việc quảng cáo kỹ thuật số hút thị phần -> dẫn đến giảm doanh thu báo in ("absorbed vast majority of ad dollars, circulation plummeted").',
    translation: 'Trong đoạn nào tác giả đề cập mối quan hệ nguyên nhân - kết quả khiến báo in bị giảm thu nhập tài chính?',
    topicTag: 'Đọc hiểu - Tìm đoạn theo ý đồ tác giả'
  },
  {
    id: 'ml-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_NEWSPAPER_EVOLUTION,
    passageTranslation: PASSAGE_NEWSPAPER_EVOLUTION_TRANS,
    questionText: 'Question 30. In which paragraph does the writer discuss the challenges newspapers face in maintaining local coverage?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'C',
    explanation: '• C. Paragraph 3 - ĐÚNG: Đoạn 3 nói về khó khăn của báo chí địa phương ("This decline in local news coverage leaves communities with fewer resources...").',
    translation: 'Trong đoạn nào tác giả thảo luận về những thách thức báo chí gặp phải khi duy trì đưa tin địa phương?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },

  // SECTION 6: READING COMPREHENSION 2 - ONLINE PRIVACY (Q31 - Q40)
  {
    id: 'ml-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 31. Where in the passage does the following sentence best fit: "The impact goes beyond commercial advertising to influence political opinions and public sentiment."',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'C',
    explanation: '• C. [III] - ĐÚNG: Vị trí [III] ở cuối đoạn 2 đứng sau câu phân tích về tác động của quảng cáo cá nhân hóa đối với hành vi người dùng.',
    translation: 'Trong bài đọc, câu "The impact goes beyond commercial advertising..." nằm ở vị trí nào là phù hợp nhất?',
    topicTag: 'Đọc hiểu - Chèn câu vào vị trí thích hợp'
  },
  {
    id: 'ml-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 32. The phrase "a quiet trade takes place" in paragraph 1 is CLOSEST in meaning to:',
    options: [
      { id: 'A', text: 'data is exchanged covertly without active user awareness', translation: 'dữ liệu được trao đổi thầm lặng mà người dùng không nhận ra' },
      { id: 'B', text: 'financial transactions occur silently in commercial banks', translation: 'giao dịch tài chính diễn ra thầm lặng trong ngân hàng' },
      { id: 'C', text: 'online stores offer discounts without public promotion', translation: 'cửa hàng giảm giá không quảng cáo' },
      { id: 'D', text: 'users voluntarily sell their personal information to companies', translation: 'người dùng tự nguyện bán thông tin' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "a quiet trade" hàm ý việc trao đổi dữ liệu ngầm không được người dùng chú ý tới.',
    translation: 'Cụm từ "a quiet trade takes place" trong đoạn 1 có nghĩa gần nhất với câu nào?',
    topicTag: 'Đọc hiểu - Thành ngữ ngữ cảnh'
  },
  {
    id: 'ml-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 33. The word "it" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'public concern', translation: 'sự lo ngại của công chúng' },
      { id: 'B', text: 'personal data', translation: 'dữ liệu cá nhân' },
      { id: 'C', text: 'deceptive interface design', translation: 'thiết kế giao diện lừa đảo' },
      { id: 'D', text: 'declining tracking', translation: 'việc từ chối theo dõi' }
    ],
    correctAnswer: 'D',
    explanation: '• D. declining tracking - ĐÚNG: "make it frustrating... to decline tracking" -> "it" là đại từ giả thay thế cho hành động "to decline tracking".',
    translation: 'Từ "it" trong đoạn 3 quy chiếu đến khái niệm nào?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'ml-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 34. According to paragraph 1, which of the following is NOT true about first-party cookies?',
    options: [
      { id: 'A', text: 'They remember user login credentials.', translation: 'Chúng ghi nhớ thông tin đăng nhập của người dùng.' },
      { id: 'B', text: 'They save items placed in online shopping carts.', translation: 'Chúng lưu lại món hàng trong giỏ mua sắm trực tuyến.' },
      { id: 'C', text: 'They build extensive behavioral profiles for third-party advertisers.', translation: 'Chúng xây dựng hồ sơ hành vi diện rộng cho bên quảng cáo thứ ba.' },
      { id: 'D', text: 'They are intended to enhance the overall user experience.', translation: 'Chúng được thiết kế nhằm nâng cao trải nghiệm người dùng.' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG (là câu SAI về first-party cookies): Việc xây dựng hồ sơ hành vi phục vụ quảng cáo là của third-party cookies, không phải first-party cookies.',
    translation: 'Theo đoạn 1, điều nào dưới đây KHÔNG đúng về cookies của bên thứ nhất (first-party cookies)?',
    topicTag: 'Đọc hiểu - Thông tin Không Đúng'
  },
  {
    id: 'ml-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 35. Which of the following best summarises the main content of paragraph 2?',
    options: [
      { id: 'A', text: 'Data monetization has created a surveillance economy that threatens individual privacy.', translation: 'Việc thương mại hóa dữ liệu cá nhân tạo ra một nền kinh tế giám sát đe dọa quyền riêng tư.' },
      { id: 'B', text: 'Data brokers help online shoppers find better deals through targeted ads.', translation: 'Bên môi giới dữ liệu giúp người mua tìm khuyến mãi tốt hơn...' },
      { id: 'C', text: 'Identity theft is the sole risk associated with browsing the internet today.', translation: 'Trộm cắp danh tính là rủi ro duy nhất...' },
      { id: 'D', text: 'Advertisers respect user boundaries when compiling personal dossiers.', translation: 'Nhà quảng cáo tôn trọng ranh giới người dùng...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Đoạn 2 tập trung phân tích nền kinh tế giám sát (surveillance economy) và tác hại tới quyền riêng tư.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất nội dung chính của đoạn 2?',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn văn'
  },
  {
    id: 'ml-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 36. The word "intrusive" in paragraph 4 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'invasive', translation: 'xâm phạm' },
      { id: 'B', text: 'unobtrusive', translation: 'kín đáo / không xâm phạm' },
      { id: 'C', text: 'aggressive', translation: 'hung hăng / vồ vập' },
      { id: 'D', text: 'persistent', translation: 'bền bỉ' }
    ],
    correctAnswer: 'B',
    explanation: '• B. unobtrusive - ĐÚNG: "Intrusive" (xâm phạm quyền riêng tư) TRÁI NGHĨA với "unobtrusive" (kín đáo/tôn trọng).',
    translation: 'Từ "intrusive" trong đoạn 4 TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'ml-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 37. According to the passage, why do "cookie consent" banners often fail to provide genuine privacy protection?',
    options: [
      { id: 'A', text: 'Because users prefer sharing their data with advertisers.', translation: 'Vì người dùng thích chia sẻ dữ liệu với nhà quảng cáo.' },
      { id: 'B', text: 'Because regulations forbid websites from asking for consent.', translation: 'Vì luật cấm trang web xin phép.' },
      { id: 'C', text: 'Because websites use dark patterns that make declining tracking difficult.', translation: 'Vì các trang web sử dụng giao diện lừa đảo (dark patterns) khiến việc từ chối trở nên khó khăn.' },
      { id: 'D', text: 'Because privacy browsers prevent consent banners from loading.', translation: 'Vì trình duyệt bảo mật chặn các biểu ngữ này.' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Dẫn chứng đoạn 3: "websites comply using deceptive interface designs—known as dark patterns—that make it frustrating for users to decline...".',
    translation: 'Theo bài đọc, tại sao các biểu ngữ xin phép cookie thường không bảo vệ quyền riêng tư thực sự?',
    topicTag: 'Đọc hiểu - Nguyên nhân'
  },
  {
    id: 'ml-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 38. Which of the following best paraphrases the underlined sentence in paragraph 4 ("Protecting privacy in the digital age requires a combination of robust legal enforcement, privacy-respecting technology, and heightened user awareness")?',
    options: [
      { id: 'A', text: 'Safeguarding digital privacy demands strong legal action, privacy-focused tech tools, and increased public awareness.', translation: 'Bảo vệ quyền riêng tư số đòi hỏi hành động pháp lý mạnh mẽ, công cụ công nghệ bảo mật và nhận thức công chúng tăng cao.' },
      { id: 'B', text: 'Legal enforcement alone is sufficient to eliminate all online privacy threats.', translation: 'Chỉ riêng thực thi pháp luật là đủ xóa bỏ mọi mối đe dọa...' },
      { id: 'C', text: 'Users should rely entirely on government laws to secure their online personal data.', translation: 'Người dùng nên hoàn toàn phụ thuộc vào luật nhà nước...' },
      { id: 'D', text: 'Privacy-focused browsers are the only effective measure against corporate tracking.', translation: 'Trình duyệt bảo mật là biện pháp duy nhất...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Paraphrase chính xác 3 yếu tố kết hợp: "robust legal enforcement" = "strong legal action", "privacy-respecting tech" = "privacy-focused tech tools", "heightened awareness" = "increased public awareness".',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn 4?',
    topicTag: 'Đọc hiểu - Viết lại câu nâng cao'
  },
  {
    id: 'ml-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 39. Which of the following can be most likely inferred from the passage?',
    options: [
      { id: 'A', text: 'Most internet users are completely unconcerned about how their personal data is collected.', translation: 'Hầu hết người dùng không quan tâm dữ liệu được thu thập ra sao.' },
      { id: 'B', text: 'Technological tools like VPNs allow users to take proactive steps to safeguard their digital footprints.', translation: 'Các công cụ công nghệ như VPN cho phép người dùng chủ động bảo vệ dấu chân kỹ thuật số của mình.' },
      { id: 'C', text: 'Third-party cookies will be completely phased out worldwide within the next few months.', translation: 'Cookies bên thứ ba sẽ bị loại bỏ hoàn toàn trong vài tháng tới.' },
      { id: 'D', text: 'The GDPR has completely eliminated online tracking across all websites.', translation: 'GDPR đã loại bỏ hoàn toàn việc theo dõi trực tuyến.' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Dẫn chứng đoạn 4: "Privacy-focused browsers, VPNs, and ad-blocking extensions empower individuals to regain control...".',
    translation: 'Điều nào dưới đây có thể được suy luận ra từ nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'ml-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_COOKIES_PRIVACY,
    passageTranslation: PASSAGE_COOKIES_PRIVACY_TRANS,
    questionText: 'Question 40. Which of the following best summarises the passage?',
    options: [
      { id: 'A', text: 'Online tracking mechanisms support digital marketing, and users should accept data surveillance.', translation: 'Cơ chế theo dõi trực tuyến hỗ trợ tiếp thị số và người dùng nên chấp nhận...' },
      { id: 'B', text: 'While online tracking fuels a massive data economy, comprehensive solutions are required to protect user privacy.', translation: 'Mặc dù theo dõi trực tuyến thúc đẩy nền kinh tế dữ liệu khổng lồ, các giải pháp toàn diện là cần thiết để bảo vệ quyền riêng tư người dùng.' },
      { id: 'C', text: 'Third-party cookies were created exclusively to protect internet users from malware and cyber attacks.', translation: 'Cookies bên thứ ba được tạo ra duy nhất để bảo vệ người dùng...' },
      { id: 'D', text: 'Government privacy regulations have successfully stopped all unauthorized data collection online.', translation: 'Quy định pháp lý của chính phủ đã chặn đứng thành công mọi việc thu thập...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Tóm tắt chính xác toàn bộ hai khía cạnh của bài: Nền kinh tế dữ liệu giám sát và các giải pháp tổng thể (luật pháp, công nghệ, nhận thức) để bảo vệ quyền riêng tư.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất toàn bộ bài đọc?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Idea)'
  }
];

export const ME_LINH_2026_EXAM: ExamSet = {
  id: 'exam-me-linh-2026',
  title: 'Đề Thi Thử THPT 2026 - Trường THPT Mê Linh - Hưng Yên (Lần 2)',
  description: 'Đề thi khảo sát chất lượng chính thức THPT Mê Linh - Hưng Yên gồm trọn bộ 40 câu trắc nghiệm chuẩn cấu trúc 2026 kèm đáp án chi tiết & bản dịch.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'SỞ HƯNG YÊN 2026',
  iconName: 'Sparkles',
  questions: ME_LINH_2026_QUESTIONS
};
