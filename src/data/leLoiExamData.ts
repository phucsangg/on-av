import type { ExamSet, Question } from '../types/quiz';

// PASSAGE DECLARATIONS FOR LÊ LỢI EXAM
const PASSAGE_ACADEMIC_PRESSURE = `<mark>(9) Due to academic overload</mark>, many high school students face increasing stress and burnout. <mark>(10) Parental pressure is another factor that cannot be ignored</mark> when analyzing the root causes of adolescent mental health challenges. <mark>(11) Notwithstanding the provision of counseling services by certain institutions</mark>, many students still hesitate to seek professional help due to fear of stigma. <mark>(12) Parental pressure often forces students</mark> to choose career paths that do not align with their actual passions and abilities. <mark>(13) because they are influenced by external expectations blindly</mark>, they risk pursuing unfulfilling academic journeys.`;

const PASSAGE_ACADEMIC_PRESSURE_TRANS = `ÁP LỰC HỌC ĐƯỜNG & SỨC KHỎE TÂM LÝ LỨA TUỔI HỌC SINH\nDo quá tải học tập, nhiều học sinh trung học phải đối mặt với căng thẳng và mệt mỏi gia tăng. Áp lực từ cha mẹ là một yếu tố khác không thể bỏ qua khi phân tích các nguyên nhân gốc rễ gây ra thách thức sức khỏe tâm thần lứa tuổi vị thành niên. Mặc dù các dịch vụ tư vấn được cung cấp bởi một số cơ sở, nhiều học sinh vẫn do dự khi tìm kiếm sự giúp đỡ chuyên nghiệp do sợ bị kỳ thị. Áp lực từ cha mẹ thường buộc học sinh phải chọn những con đường sự nghiệp không phù hợp với đam mê và khả năng thực sự của họ.`;

const PASSAGE_INTEGRATED_ECOTOURISM = `The concept of integrated ecotourism, where local communities, conservationists, and travel agencies collaborate to protect biodiversity while hosting visitors, has gained significant traction. Modern technology keeps this <mark>delicate</mark> balance on track. Advanced tools such as satellite monitoring, mobile applications, and AI-driven management systems are used to optimize sustainable travel practices. Additionally, real-time data on wildlife movements and trail conditions enables managers to accelerate the decision-making process that maximizes visitor experience while minimizing environmental impact.
GIS and remote sensing allow park rangers and tour operators to precisely map out sensitive ecological zones and create customized trekking routes. This ensures that human foot traffic is directed away from vulnerable habitats based on seasonal breeding patterns and soil erosion data. By avoiding "over-tourism" in fragile areas, communities can maintain their natural capital for the long term. Smart sensors and acoustic monitoring provide advance warnings of illegal activities like poaching or logging, allowing authorities to <mark>intercede</mark> without disturbing the entire forest. This, therefore, helps curb habitat destruction and save costs for every stakeholder involved in the project.
Technology also plays a vital role in optimizing resource consumption for sustainable lodging. Specialized IoT (Internet of Things) devices report energy and water usage hour by hour, while smart grids manage renewable energy from solar or wind sources. Automated waste management systems track the footprint of each eco-lodge and suggest reductions in single-use materials. <mark>This</mark> cuts operational costs and protects local watersheds while keeping the ecosystem healthy. <mark>In remote, pristine environments, such efficiency keeps ecotourism projects economically viable without compromising the landscape.</mark>
The digital trail continues throughout the entire traveler’s journey. Cloud platforms let eco-guides, transport providers, and local artisans input visitor numbers, carbon offset credits, and feedback the moment they are generated, while blockchain records ensure the transparency of "green" certifications so travelers can trust them. Analytic tools combine years of data to forecast seasonal trends, spot conservation opportunities, and mark weak points in the tourist workflow. This allows ecotourism planners to anticipate market demand, exploit resource allocation, and plan for potential climate challenges.`;

const PASSAGE_INTEGRATED_ECOTOURISM_TRANS = `Khái niệm về du lịch sinh thái tích hợp, nơi các cộng đồng địa phương, các nhà bảo tồn và các công ty lữ hành hợp tác với nhau để bảo vệ đa dạng sinh học trong khi đón tiếp du khách, đã thu hút sự chú ý đáng kể. Công nghệ hiện đại giữ cho sự cân bằng tinh tế này đi đúng hướng. Các công cụ tiên tiến như giám sát qua vệ tinh, ứng dụng di động và hệ thống quản lý bằng AI được sử dụng để tối ưu hóa các hoạt động du lịch bền vững. Ngoài ra, dữ liệu thời gian thực về sự di chuyển của động vật hoang dã và điều kiện đường mòn cho phép các nhà quản lý đẩy nhanh quá trình ra quyết định giúp tối đa hóa trải nghiệm du khách đồng thời giảm thiểu tác động đến môi trường.

GIS và viễn thám cho phép kiểm lâm và các đơn vị lữ hành lập bản đồ chính xác các vùng sinh thái nhạy cảm và tạo ra các tuyến đường đi bộ đường dài được tùy chỉnh. Điều này đảm bảo rằng lượng khách đi bộ được điều hướng tránh xa các sinh cảnh dễ bị tổn thương dựa trên mô hình sinh sản theo mùa và dữ liệu xói mòn đất. Bằng cách tránh "quá tải du lịch" ở các khu vực nhạy cảm, các cộng đồng có thể duy trì vốn tự nhiên của họ về lâu dài. Các cảm biến thông minh và giám sát âm thanh đưa ra cảnh báo sớm về các hoạt động bất hợp pháp như săn bắt hoặc khai thác gỗ trái phép, cho phép chính quyền can thiệp mà không làm ảnh hưởng đến toàn bộ khu rừng. Điều này do đó giúp ngăn chặn sự phá hủy môi trường sống và tiết kiệm chi phí cho mọi bên liên quan trong dự án.

Công nghệ cũng đóng vai trò quan trọng trong việc tối ưu hóa mức tiêu thụ tài nguyên cho các cơ sở lưu trú bền vững. Các thiết bị IoT chuyên dụng báo cáo mức sử dụng điện và nước theo từng giờ, trong khi lưới điện thông minh quản lý năng lượng tái tạo từ các nguồn mặt trời hoặc gió. Hệ thống quản lý chất thải tự động theo dõi dấu chân của từng khu nghỉ dưỡng sinh thái và đề xuất giảm bớt các vật liệu sử dụng một lần. Điều này giúp cắt giảm chi phí vận hành và bảo vệ các lưu vực nước địa phương trong khi giữ cho hệ sinh thái khỏe mạnh. Ở các môi trường nguyên sơ, từ xa, hiệu quả như vậy giữ cho các dự án du lịch sinh thái đạt hiệu quả kinh tế mà không làm tổn hại đến cảnh quan.

Dấu chân kỹ thuật số tiếp tục duy trì trong suốt hành trình của du khách. Các nền tảng đám mây cho phép các hướng dẫn viên sinh thái, nhà cung cấp vận tải và nghệ nhân địa phương nhập số lượng du khách, tín chỉ bù đắp carbon và phản hồi ngay khi chúng phát sinh, trong khi các bản ghi blockchain đảm bảo tính minh bạch của các chứng nhận "xanh" để du khách có thể tin tưởng. Các công cụ phân tích kết hợp dữ liệu nhiều năm để dự báo xu hướng theo mùa, phát hiện cơ hội bảo tồn và đánh dấu các điểm yếu trong quy trình du lịch. Điều này cho phép các nhà hoạch định du lịch sinh thái dự đoán nhu cầu thị trường, khai thác việc phân bổ tài nguyên và lập kế hoạch cho các thách thức khí hậu tiềm ẩn.`;

const PASSAGE_HERITAGE_ANNOUNCEMENT = `PRESERVING OUR CULTURAL HERITAGE!
Cultural heritage is the soul of our nation, connecting us <mark>(14) ____________</mark> our roots <mark>(15) ____________</mark> history. The Ministry of Culture is excited to launch the National Heritage Conservation Project!
Our aim is to restore ancient monuments, protect traditional craft villages, and promote cultural values to younger generations.
As part of this initiative, we encourage everyone <mark>(16) ____________</mark> in local preservation activities:
- Discover historic landmarks and learn about their cultural <mark>(18) ____________</mark>.
- Support local artisans by buying authentic handcrafted products.
- Spread pride in our traditions through social media and <mark>(17) ____________</mark> community workshops.
By joining hands, we can ensure a smooth <mark>(19) ____________</mark> of heritage preservation into modern economic development!`;

const PASSAGE_HERITAGE_ANNOUNCEMENT_TRANS = `BẢO TỒN DI SẢN VĂN HÓA CỦA CHÚNG TA!
Di sản văn hóa là tâm hồn của dân tộc, kết nối chúng ta với cội nguồn và lịch sử. Bộ Văn hóa rất vui mừng khởi động Dự án Bảo tồn Di sản Quốc gia!
Mục tiêu của chúng tôi là tu bổ các di tích cổ, bảo vệ các làng nghề truyền thống và quảng bá các giá trị văn hóa đến các thế hệ trẻ.
Là một phần của sáng kiến này, chúng tôi khuyến khích mọi người tích cực tham gia vào các hoạt động bảo tồn tại địa phương:
- Khám phá các danh thắng lịch sử và tìm hiểu về các giá trị văn hóa của chúng.
- Hỗ trợ các nghệ nhân địa phương bằng cách mua các sản phẩm thủ công truyền thống chính gốc.
- Lan tỏa niềm tự hào về truyền thống của chúng ta thông qua mạng xã hội và các buổi hội thảo cộng đồng.
Bằng cách chung tay, chúng ta có thể đảm bảo sự hội nhập và kết hợp nhịp nhàng giữa bảo tồn di sản vào sự phát triển kinh tế hiện đại!`;

const PASSAGE_JOB_FAIR_ANNOUNCEMENT = `ANNUAL CAREER & JOB FAIR 2026!
Are you looking for promising employment opportunities? The 2026 National Job Fair is back and bigger than ever!
Event Highlights:
- Meet representatives from over 100 top national and international corporations <mark>(25) ____________</mark> are actively seeking talented candidates.
- Explore a wide <mark>(26) ____________</mark> of career fields, from information technology to eco-tourism and renewable energy.
- Attend career orientation workshops <mark>(27) ____________</mark> by industry experts to sharpen your interview skills.
- Take <mark>(28) ____________</mark> of free resume reviews and on-site job interviews!
Registration details:
- Date: Saturday, October 15, 2026
- Location: Grand Exhibition Center
- Admission: Free for all students and job seekers!
Don't miss this chance to take <mark>(29) ____________</mark> of your career path! Register online today <mark>(30) ____________</mark> the job fair portal!`;

const PASSAGE_JOB_FAIR_ANNOUNCEMENT_TRANS = `HỘI CHỢ VIỆC LÀM & HƯỚNG NGHIỆP THƯỜNG NIÊN 2026!
Bạn đang tìm kiếm những cơ hội nghề nghiệp đầy triển vọng? Hội chợ Việc làm Quốc gia 2026 đã trở lại với quy mô lớn hơn bao giờ hết!
Điểm nổi bật của sự kiện:
- Gặp gỡ đại diện từ hơn 100 tập đoàn hàng đầu trong nước và quốc tế, những người đang tích cực tìm kiếm các ứng viên tài năng.
- Khám phá đa dạng các lĩnh vực nghề nghiệp, từ công nghệ thông tin đến du lịch sinh thái và năng lượng tái tạo.
- Tham dự các buổi hội thảo hướng nghiệp được trình bày bởi các chuyên gia ngành để hoàn thiện kỹ năng phỏng vấn của bạn.
- Tận dụng ưu thế từ việc sửa CV miễn phí và phỏng vấn tuyển dụng trực tiếp tại chỗ!
Thông tin đăng ký:
- Thời gian: Thứ Bảy, ngày 15 tháng 10 năm 2026
- Địa điểm: Trung tâm Triển lãm Quốc gia
- Vào cửa: Miễn phí cho toàn bộ sinh viên và người tìm việc!
Đừng bỏ lỡ cơ hội làm chủ con đường sự nghiệp của bạn! Đăng ký trực tuyến ngay hôm nay!`;

const PASSAGE_RENEWABLE_ENERGY_TRUTH = `The narrative surrounding "clean" energy has evolved rapidly as climate concerns peak, yet the transition away from fossil fuels involves complex trade-offs. Renewable Energy Certificates (RECs) and carbon offsets were designed to allow organizations to balance <mark>their</mark> environmental footprints. However, critics argue that such mechanisms often obscure actual emissions, enabling companies to project a green image without making structural changes to their supply chains.

A central issue facing the renewable sector is its material intensity. Constructing solar panels, wind turbines, and utility-scale batteries requires substantial quantities of rare earth elements, copper, and lithium. Mining these minerals frequently results in severe localized ecological destruction and water contamination in developing nations. Consequently, while operating a wind farm produces minimal emissions, the upstream supply chain carries a <mark>mounting</mark> environmental debt that is rarely reflected in consumer energy pricing.

Moreover, the intermittent nature of solar and wind energy presents grid stability challenges. Without massive energy storage capacity, power grids must maintain fossil-fuel-fired "peaker" plants—often running on natural gas—to prevent blackouts during periods of low generation. <mark>This reliance underscores the reality that renewables currently supplement, rather than fully replace, conventional power infrastructure.</mark>

As policymakers push for ambitious decarbonization targets, achieving true sustainability will require more than substituting generation sources. It demands rigorous life-cycle accounting, improved recycling technology for electronic waste, and a fundamental reduction in global energy consumption. Without addressing these underlying systemic issues, the green energy transition risks shifting environmental burdens rather than eliminating them.`;

const PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS = `Câu chuyện xung quanh năng lượng "sạch" đã phát triển nhanh chóng khi những lo ngại về khí hậu lên đến đỉnh điểm, tuy nhiên việc chuyển đổi khỏi nhiên liệu hóa thạch lại liên quan đến những sự đánh đổi phức tạp. Chứng chỉ Năng lượng Tái tạo (RECs) và bù đắp carbon được thiết kế để cho phép các tổ chức cân bằng dấu chân môi trường của họ. Tuy nhiên, các nhà phê bình cho rằng các cơ chế như vậy thường làm mờ phát thải thực tế, cho phép các công ty xây dựng hình ảnh xanh mà không thực hiện các thay đổi cấu trúc trong chuỗi cung ứng của họ.

Một vấn đề trung tâm mà ngành năng lượng tái tạo phải đối mặt là cường độ sử dụng vật liệu. Việc chế tạo pin mặt trời, tua-bin gió và pin lưu trữ quy mô lớn đòi hỏi lượng lớn các nguyên tố đất hiếm, đồng và lithium. Khai thác các khoáng sản này thường dẫn đến sự tàn phá sinh thái cục bộ nghiêm trọng và ô nhiễm nguồn nước ở các quốc gia đang phát triển. Do đó, mặc dù việc vận hành một trang trại gió tạo ra lượng phát thải tối thiểu, chuỗi cung ứng thượng nguồn lại gánh chịu một khoản nợ môi trường ngày càng tăng hiếm khi được phản ánh trong giá năng lượng tiêu dùng.

Hơn nữa, tính chất chập chờn theo thời tiết của năng lượng mặt trời và gió đặt ra những thách thức về sự ổn định của lưới điện. Nếu không có dung lượng lưu trữ năng lượng khổng lồ, các lưới điện phải duy trì các nhà máy điện chạy bằng nhiên liệu hóa thạch—thường chạy bằng khí tự nhiên—để ngăn ngừa mất điện trong những thời điểm sản lượng phát điện thấp. Sự phụ thuộc này nhấn mạnh một thực tế rằng năng lượng tái tạo hiện tại chỉ bổ sung, chứ chưa thể thay thế hoàn toàn hạ tầng điện truyền thống.

Khi các nhà hoạch định chính sách thúc đẩy các mục tiêu giảm carbon đầy tham vọng, việc đạt được tính bền vững thực sự sẽ đòi hỏi nhiều hơn là việc thay thế các nguồn phát điện. Nó đòi hỏi hạch toán vòng đời nghiêm ngặt, cải tiến công nghệ tái chế rác thải điện tử và giảm căn bản mức tiêu thụ năng lượng toàn cầu. Nếu không giải quyết các vấn đề cấu trúc cốt lõi này, cuộc chuyển đổi năng lượng xanh có nguy cơ chỉ dịch chuyển gánh nặng môi trường chứ không loại bỏ được chúng.`;

export const LE_LOI_2026_QUESTIONS: Question[] = [
  // SECTION 1: READING COMPREHENSION 1 - INTEGRATED ECOTOURISM (Q1 - Q8)
  {
    id: 'll-q1',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTEGRATED_ECOTOURISM,
    passageTranslation: PASSAGE_INTEGRATED_ECOTOURISM_TRANS,
    questionText: 'Question 1. Which of the following is NOT mentioned in paragraph 1 as a factor contributing to sustainable ecotourism management?',
    options: [
      { id: 'A', text: 'satellite monitoring', translation: 'giám sát qua vệ tinh' },
      { id: 'B', text: 'mobile applications', translation: 'các ứng dụng di động' },
      { id: 'C', text: 'AI-driven management systems', translation: 'hệ thống quản lý bằng trí tuệ nhân tạo' },
      { id: 'D', text: 'heavy financial subsidies', translation: 'trợ cấp tài chính nặng nề' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Bài đọc không nhắc đến trợ cấp tài chính nặng nề (heavy financial subsidies) là yếu tố quản lý du lịch sinh thái.',
    translation: 'Yếu tố nào dưới đây KHÔNG được đề cập ở đoạn 1 như một nhân tố đóng góp cho quản lý du lịch sinh thái bền vững?',
    topicTag: 'Đọc hiểu - Thông tin KHÔNG có trong bài'
  },
  {
    id: 'll-q2',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTEGRATED_ECOTOURISM,
    passageTranslation: PASSAGE_INTEGRATED_ECOTOURISM_TRANS,
    questionText: 'Question 2. The word "delicate" in paragraph 1 can be best replaced by:',
    options: [
      { id: 'A', text: 'fragile', translation: 'mong manh / nhạy cảm / dễ tổn thương' },
      { id: 'B', text: 'robust', translation: 'mạnh mẽ / vững chắc' },
      { id: 'C', text: 'complicated', translation: 'phức tạp' },
      { id: 'D', text: 'temporary', translation: 'tạm thời' }
    ],
    correctAnswer: 'A',
    explanation: '• A. fragile - ĐÚNG: "delicate balance" đồng nghĩa với "fragile balance" (sự cân bằng mong manh/dễ tổn thương).',
    translation: 'Từ "delicate" trong đoạn 1 có thể được thay thế tốt nhất bởi từ nào?',
    topicTag: 'Đọc hiểu - Từ đồng nghĩa'
  },
  {
    id: 'll-q3',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTEGRATED_ECOTOURISM,
    passageTranslation: PASSAGE_INTEGRATED_ECOTOURISM_TRANS,
    questionText: 'Question 3. The word "intercede" in paragraph 2 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'intervene', translation: 'can thiệp' },
      { id: 'B', text: 'ignore', translation: 'phớt lờ / bỏ qua' },
      { id: 'C', text: 'mediate', translation: 'hòa giải' },
      { id: 'D', text: 'prevent', translation: 'ngăn chặn' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ignore - ĐÚNG: "intercede" là can thiệp xử lý, TRÁI NGHĨA với "ignore" (bỏ qua/phớt lờ).',
    translation: 'Từ "intercede" trong đoạn 2 TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'll-q4',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTEGRATED_ECOTOURISM,
    passageTranslation: PASSAGE_INTEGRATED_ECOTOURISM_TRANS,
    questionText: 'Question 4. The word "This" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'IoT device reporting', translation: 'việc báo cáo của thiết bị IoT' },
      { id: 'B', text: 'Tracking eco-lodge footprints and reducing single-use materials', translation: 'việc theo dõi dấu chân sinh thái và giảm vật liệu dùng 1 lần' },
      { id: 'C', text: 'Managing solar energy', translation: 'quản lý năng lượng mặt trời' },
      { id: 'D', text: 'Managing operational costs', translation: 'quản lý chi phí vận hành' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "This" quy chiếu về hành động theo dõi chất thải và giảm sử dụng vật liệu dùng một lần được nêu ở câu trước.',
    translation: 'Từ "This" trong đoạn 3 quy chiếu đến hành động / sự việc nào?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'll-q5',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTEGRATED_ECOTOURISM,
    passageTranslation: PASSAGE_INTEGRATED_ECOTOURISM_TRANS,
    questionText: 'Question 5. Which of the following best paraphrases the underlined sentence in paragraph 3 ("In remote, pristine environments, such efficiency keeps ecotourism projects economically viable without compromising the landscape")?',
    options: [
      { id: 'A', text: 'Maintaining energy and waste efficiency allows ecotourism in pristine areas to remain profitable while safeguarding nature.', translation: 'Duy trì hiệu quả năng lượng và chất thải giúp du lịch sinh thái ở vùng nguyên sơ có lãi mà vẫn bảo vệ thiên nhiên.' },
      { id: 'B', text: 'Pristine environments prevent ecotourism projects from earning profits due to high operational costs.', translation: 'Môi trường nguyên sơ ngăn cản dự án du lịch sinh thái có lãi...' },
      { id: 'C', text: 'Efficiency measures are unnecessary for ecotourism projects operating in remote areas.', translation: 'Các biện pháp hiệu quả là không cần thiết...' },
      { id: 'D', text: 'Ecotourism projects in remote areas usually destroy natural landscapes to cut costs.', translation: 'Dự án du lịch ở vùng xa thường phá hủy cảnh quan...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Paraphrase chính xác câu gốc: "economically viable" = "remain profitable", "without compromising the landscape" = "safeguarding nature".',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn 3?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'll-q6',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTEGRATED_ECOTOURISM,
    passageTranslation: PASSAGE_INTEGRATED_ECOTOURISM_TRANS,
    questionText: 'Question 6. Which of the following is TRUE according to paragraph 4?',
    options: [
      { id: 'A', text: 'Blockchain records are used to verify the transparency of green certifications.', translation: 'Các bản ghi Blockchain được dùng để xác minh tính minh bạch của chứng nhận xanh.' },
      { id: 'B', text: 'Eco-guides are prohibited from using cloud platforms during tours.', translation: 'Hướng dẫn viên sinh thái bị cấm dùng nền tảng đám mây...' },
      { id: 'C', text: 'Analytic tools are ineffective at forecasting seasonal tourist demand.', translation: 'Công cụ phân tích không hiệu quả khi dự báo nhu cầu...' },
      { id: 'D', text: 'Digital tracking decreases traveler trust in ecotourism projects.', translation: 'Theo dõi kỹ thuật số làm giảm niềm tin của du khách...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Dẫn chứng đoạn 4: "...blockchain records ensure the transparency of green certifications so travelers can trust them".',
    translation: 'Phát biểu nào dưới đây là ĐÚNG theo thông tin trong đoạn 4?',
    topicTag: 'Đọc hiểu - Thông tin Đúng/Sai'
  },
  {
    id: 'll-q7',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTEGRATED_ECOTOURISM,
    passageTranslation: PASSAGE_INTEGRATED_ECOTOURISM_TRANS,
    questionText: 'Question 7. Which paragraph discusses the strategic redirection of tourist flows to protect sensitive habitats?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'B',
    explanation: '• B. Paragraph 2 - ĐÚNG: Đoạn 2 nói về việc dùng GIS để "direct human foot traffic away from vulnerable habitats".',
    translation: 'Đoạn nào thảo luận về việc điều hướng luồng du khách để bảo vệ các sinh cảnh nhạy cảm?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },
  {
    id: 'll-q8',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_INTEGRATED_ECOTOURISM,
    passageTranslation: PASSAGE_INTEGRATED_ECOTOURISM_TRANS,
    questionText: 'Question 8. Which paragraph mentions the integration of decentralized ledger technology (blockchain) to verify green credentials?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'D',
    explanation: '• D. Paragraph 4 - ĐÚNG: Đoạn 4 đề cập đến "blockchain records ensure the transparency of green certifications".',
    translation: 'Đoạn nào đề cập đến việc ứng dụng công nghệ sổ cái phân tán (blockchain) để xác minh chứng nhận xanh?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },

  // SECTION 2: CLOZE PASSAGE - ACADEMIC & YOUTH ISSUES (Q9 - Q13)
  {
    id: 'll-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_ACADEMIC_PRESSURE,
    passageTranslation: PASSAGE_ACADEMIC_PRESSURE_TRANS,
    questionText: 'Question 9. Choose the correct option to fill in blank (9):',
    options: [
      { id: 'A', text: 'Due to academic overload', translation: 'Do quá tải học tập' },
      { id: 'B', text: 'Although students study hard', translation: 'Mặc dù học sinh học tập chăm chỉ' },
      { id: 'C', text: 'In spite of academic overload', translation: 'Mặc dù quá tải học tập' },
      { id: 'D', text: 'Because students are academic', translation: 'Bởi vì học sinh có tính học thuật' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Due to + N/N-phrase" giải thích nguyên nhân gây ra áp lực học đường.',
    translation: '(9) ____________, nhiều học sinh trung học phải đối mặt với căng thẳng và mệt mỏi gia tăng.',
    topicTag: 'Cụm từ chỉ nguyên nhân (Due to)'
  },
  {
    id: 'll-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_ACADEMIC_PRESSURE,
    passageTranslation: PASSAGE_ACADEMIC_PRESSURE_TRANS,
    questionText: 'Question 10. Choose the correct option to fill in blank (10):',
    options: [
      { id: 'A', text: 'Parental pressure is another factor that cannot be ignored', translation: 'Áp lực từ cha mẹ là một yếu tố khác không thể bỏ qua' },
      { id: 'B', text: 'Having ignored parental pressure as a major factor', translation: 'Sau khi bỏ qua áp lực từ cha mẹ...' },
      { id: 'C', text: 'That parental pressure is another factor', translation: 'Việc áp lực cha mẹ là yếu tố...' },
      { id: 'D', text: 'Which parental pressure cannot ignore', translation: 'Điều mà áp lực cha mẹ không thể bỏ qua...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cung cấp mệnh đề độc lập hoàn chỉnh dẫn dắt ý áp lực gia đình.',
    translation: '(10) ____________ khi phân tích nguyên nhân gây trầm cảm lứa tuổi học đường.',
    topicTag: 'Cấu trúc mệnh đề độc lập'
  },
  {
    id: 'll-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_ACADEMIC_PRESSURE,
    passageTranslation: PASSAGE_ACADEMIC_PRESSURE_TRANS,
    questionText: 'Question 11. Choose the correct option to fill in blank (11):',
    options: [
      { id: 'A', text: 'To alleviate this problem', translation: 'Để làm dịu vấn đề này' },
      { id: 'B', text: 'Alleviated this problem', translation: 'Đã làm dịu vấn đề này' },
      { id: 'C', text: 'Having alleviated this problem', translation: 'Sau khi làm dịu vấn đề này' },
      { id: 'D', text: 'For alleviating this problem', translation: 'Cho việc làm dịu vấn đề này' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "To + V" đứng đầu câu chỉ mục đích (Để giải quyết/làm giảm bớt vấn đề này).',
    translation: '(11) ____________, nhà trường và gia đình cần phối hợp tạo môi trường học tập cân bằng.',
    topicTag: 'Mệnh đề chỉ mục đích (To-V)'
  },
  {
    id: 'll-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_ACADEMIC_PRESSURE,
    passageTranslation: PASSAGE_ACADEMIC_PRESSURE_TRANS,
    questionText: 'Question 12. Choose the correct option to fill in blank (12):',
    options: [
      { id: 'A', text: 'The more supportive the educational environment is', translation: 'Môi trường giáo dục càng mang tính hỗ trợ' },
      { id: 'B', text: 'Because the educational environment is supportive', translation: 'Bởi vì môi trường giáo dục mang tính hỗ trợ' },
      { id: 'C', text: 'As the supportive educational environment becomes', translation: 'Khi môi trường giáo dục trở nên...' },
      { id: 'D', text: 'The most supportive educational environment', translation: 'Môi trường giáo dục hỗ trợ nhất' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc so sánh kép "The + comparative..., the + comparative..." (Càng... thì càng...).',
    translation: '(12) ____________, học sinh càng có khả năng phát triển toàn diện cả về thể chất lẫn tinh thần.',
    topicTag: 'So sánh kép (Double Comparative)'
  },
  {
    id: 'll-q13',
    type: 'cloze_test',
    readingPassage: PASSAGE_ACADEMIC_PRESSURE,
    passageTranslation: PASSAGE_ACADEMIC_PRESSURE_TRANS,
    questionText: 'Question 13. Choose the correct option to fill in blank (13):',
    options: [
      { id: 'A', text: 'unless comprehensive mental health programs are implemented', translation: 'trừ khi các chương trình sức khỏe tâm thần toàn diện được triển khai' },
      { id: 'B', text: 'if comprehensive mental health programs were implemented', translation: 'nếu các chương trình sức khỏe tâm thần được triển khai' },
      { id: 'C', text: 'in spite of comprehensive mental health programs implemented', translation: 'mặc dù các chương trình sức khỏe tâm thần...' },
      { id: 'D', text: 'provided that comprehensive mental health programs will implement', translation: 'với điều kiện các chương trình sẽ tự triển khai...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "Unless" chỉ điều kiện thực tế (trừ khi có chương trình hỗ trợ, học sinh sẽ tiếp tục chịu áp lực).',
    translation: 'Học sinh vẫn sẽ gặp khó khăn (13) ____________ tại các trường học.',
    topicTag: 'Mệnh đề điều kiện (Unless)'
  },

  // SECTION 3: CLOZE ANNOUNCEMENT - HERITAGE (Q14 - Q19)
  {
    id: 'll-q14',
    type: 'cloze_test',
    readingPassage: PASSAGE_HERITAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_HERITAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 14. Fill in blank (14):',
    options: [
      { id: 'A', text: 'of', translation: 'của' },
      { id: 'B', text: 'in', translation: 'trong' },
      { id: 'C', text: 'at', translation: 'tại' },
      { id: 'D', text: 'to', translation: 'đối với / đến' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cụm từ "connect somebody to something" nghĩa là kết nối ai đó với cái gì.',
    translation: 'Di sản văn hóa kết nối chúng ta (14) ____________ cội nguồn và lịch sử dân tộc.',
    topicTag: 'Giới từ đi với Động từ (Connect to)'
  },
  {
    id: 'll-q15',
    type: 'cloze_test',
    readingPassage: PASSAGE_HERITAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_HERITAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 15. Fill in blank (15):',
    options: [
      { id: 'A', text: 'so', translation: 'vì vậy' },
      { id: 'B', text: 'or', translation: 'hoặc' },
      { id: 'C', text: 'and', translation: 'và' },
      { id: 'D', text: 'nor', translation: 'cũng không' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Liên từ "and" nối các động từ chỉ mục đích "restore monuments, protect craft villages, AND promote cultural values".',
    translation: 'Mục tiêu là tu bổ di tích, bảo vệ làng nghề (15) ____________ quảng bá giá trị văn hóa.',
    topicTag: 'Liên từ kết hợp (And)'
  },
  {
    id: 'll-q16',
    type: 'cloze_test',
    readingPassage: PASSAGE_HERITAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_HERITAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 16. Fill in blank (16):',
    options: [
      { id: 'A', text: 'to participate', translation: 'tham gia' },
      { id: 'B', text: 'participating', translation: 'đang tham gia' },
      { id: 'C', text: 'participate', translation: 'tham gia' },
      { id: 'D', text: 'participated', translation: 'đã tham gia' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc "encourage somebody to do something" (khuyến khích ai làm gì).',
    translation: 'Khuyến khích mọi người tích cực (16) ____________ vào các hoạt động bảo tồn.',
    topicTag: 'Cấu trúc Động từ (Encourage to-V)'
  },
  {
    id: 'll-q17',
    type: 'cloze_test',
    readingPassage: PASSAGE_HERITAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_HERITAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 17. Fill in blank (17):',
    options: [
      { id: 'A', text: 'others', translation: 'những cái/người khác' },
      { id: 'B', text: 'another', translation: 'một cái khác' },
      { id: 'C', text: 'the other', translation: 'cái còn lại' },
      { id: 'D', text: 'other', translation: 'khác' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: "other + N số nhiều" (other community workshops: các buổi hội thảo cộng đồng khác).',
    translation: 'Lan tỏa niềm tự hào thông qua mạng xã hội và các buổi hội thảo (17) ____________.',
    topicTag: 'Phân biệt Other / Another'
  },
  {
    id: 'll-q18',
    type: 'cloze_test',
    readingPassage: PASSAGE_HERITAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_HERITAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 18. Fill in blank (18):',
    options: [
      { id: 'A', text: 'wonders', translation: 'kỳ quan' },
      { id: 'B', text: 'legends', translation: 'huyền thoại' },
      { id: 'C', text: 'values', translation: 'các giá trị' },
      { id: 'D', text: 'miracles', translation: 'phép màu' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Cụm từ "cultural values" nghĩa là các giá trị văn hóa.',
    translation: 'Khám phá các danh thắng và tìm hiểu về các (18) ____________ văn hóa của chúng.',
    topicTag: 'Từ vựng chủ đề Văn hóa'
  },
  {
    id: 'll-q19',
    type: 'cloze_test',
    readingPassage: PASSAGE_HERITAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_HERITAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 19. Fill in blank (19):',
    options: [
      { id: 'A', text: 'integration', translation: 'sự hội nhập / sự kết hợp hài hòa' },
      { id: 'B', text: 'entry', translation: 'sự đi vào' },
      { id: 'C', text: 'assimilation', translation: 'sự đồng hóa' },
      { id: 'D', text: 'induction', translation: 'sự lễ nạp / sự nạp' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "integration of heritage preservation into economic development" (sự kết hợp/hội nhập bảo tồn di sản vào phát triển kinh tế).',
    translation: 'Đảm bảo sự (19) ____________ nhịp nhàng của việc bảo tồn di sản vào phát triển kinh tế.',
    topicTag: 'Từ vựng nâng cao (Integration)'
  },

  // SECTION 4: REORDERING (Q20 - Q24) - NO PASSAGE
  {
    id: 'll-q20',
    type: 'reordering',
    questionText: 'Question 20. Choose the correct order of sentences to make a meaningful paragraph:\na. Last weekend, our youth group organized a beach clean-up campaign at the local coastal area.\nb. Despite the harsh sunlight, everyone worked tirelessly to collect plastic waste and glass bottles.\nc. By the end of the day, we had gathered over 500 kilograms of trash, restoring the natural beauty of the shore.\nd. This experience taught us the importance of environmental responsibility and teamwork.',
    options: [
      { id: 'A', text: 'a - b - c - d', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'b - a - c - d', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'a - c - b - d', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'd - a - b - c', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - c - d): Mở đầu sự kiện chiến dịch dọn biển (a) -> Mô tả nỗ lực trong khi dọn (b) -> Nêu kết quả lượng rác thu gom (c) -> Rút ra bài học ý nghĩa (d).',
    translation: 'Sắp xếp các câu thành đoạn văn hoàn chỉnh kể về chiến dịch dọn dẹp bãi biển:\na. Cuối tuần trước, nhóm thanh niên của chúng tôi đã tổ chức chiến dịch dọn dẹp bãi biển tại khu vực bờ biển địa phương.\nb. Bất chấp cái nắng gắt, mọi người đã làm việc không mệt mỏi để thu gom rác thải nhựa và chai thủy tinh.\nc. Vào cuối ngày, chúng tôi đã thu gom được hơn 500 kilôgam rác, khôi phục lại vẻ đẹp tự nhiên của bờ biển.\nd. Trải nghiệm này đã dạy chúng tôi về tầm quan trọng của trách nhiệm với môi trường và tinh thần làm việc nhóm.',
    topicTag: 'Sắp xếp đoạn văn (Story/Event Structure)'
  },
  {
    id: 'll-q21',
    type: 'reordering',
    questionText: 'Question 21. Choose the correct order of sentences to make a meaningful paragraph:\na. Renewable energy adoption has accelerated significantly over the past decade due to technological advancements.\nb. Consequently, carbon emissions from power generation have dropped noticeably in participating regions.\nc. Furthermore, government incentives and subsidies have made solar panels and wind turbines more affordable.\nd. Transitioning to clean energy is essential for achieving long-term climate sustainability.',
    options: [
      { id: 'A', text: 'a - c - b - d', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'a - b - c - d', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'd - a - c - b', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c - a - b - d', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - c - b - d): Nêu xu hướng năng lượng tái tạo (a) -> Bổ sung chính sách chính phủ (c - Furthermore) -> Nêu kết quả giảm phát thải (b - Consequently) -> Kết luận tổng quan (d).',
    translation: 'Sắp xếp các câu thành đoạn văn hoàn chỉnh về năng lượng tái tạo:\na. Việc áp dụng năng lượng tái tạo đã tăng tốc đáng kể trong thập kỷ qua nhờ những tiến bộ công nghệ.\nb. Do đó, lượng khí thải carbon từ phát điện đã giảm đáng kể ở các khu vực tham gia.\nc. Hơn nữa, các chính sách ưu đãi và trợ cấp của chính phủ đã làm cho pin mặt trời và tua-bin gió trở nên vừa túi tiền hơn.\nd. Chuyển đổi sang năng lượng sạch là điều thiết yếu để đạt được sự bền vững khí hậu lâu dài.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'll-q22',
    type: 'reordering',
    questionText: 'Question 22. Choose the correct order of sentences to make a meaningful email:\na. Dear Mr. Smith, I am writing to inquire about the upcoming internship program at your marketing agency.\nb. I am currently a senior student majoring in Communications with strong skills in content creation.\nc. Could you please send me detailed information regarding the application deadlines and requirements?\nd. Thank you for your time and assistance, and I look forward to your response.',
    options: [
      { id: 'A', text: 'a - b - c - d', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'b - a - c - d', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'a - c - b - d', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'd - a - b - c', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - c - d): Mở đầu hỏi về chương trình thực tập (a) -> Giới thiệu bản thân (b) -> Đưa ra yêu cầu cung cấp thông tin (c) -> Lời cảm ơn và kết thư (d).',
    translation: 'Sắp xếp câu trong email hỏi thông tin thực tập:\na. Kính gửi ông Smith, tôi viết thư này để hỏi về chương trình thực tập sắp tới tại công ty truyền thông của ông.\nb. Tôi hiện là sinh viên năm cuối chuyên ngành Truyền thông với kỹ năng tốt về sáng tạo nội dung.\nc. Ông có thể gửi cho tôi thông tin chi tiết về thời hạn và yêu cầu nộp hồ sơ được không?\nd. Cảm ơn ông đã dành thời gian và hỗ trợ, tôi rất mong nhận được phản hồi từ ông.',
    topicTag: 'Sắp xếp Email'
  },
  {
    id: 'll-q23',
    type: 'reordering',
    questionText: 'Question 23. Choose the correct order of sentences to form a coherent paragraph:\na. Digital literacy has become a fundamental requirement in the modern workforce across virtually all industries.\nb. Without basic computer and internet skills, job seekers face severe disadvantages in securing employment.\nc. Therefore, educational institutions must integrate comprehensive digital training into their curricula.',
    options: [
      { id: 'A', text: 'a - b - c', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'b - a - c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'a - c - b', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c - a - b', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - c): Khẳng định tầm quan trọng của năng lực số (a) -> Nêu bất lợi nếu thiếu kỹ năng (b) -> Đưa ra kết luận giải pháp giáo dục (c - Therefore).',
    translation: 'Sắp xếp các câu thành đoạn văn về tầm quan trọng của năng lực kỹ thuật số:\na. Năng lực kỹ thuật số đã trở thành yêu cầu cơ bản trong lực lượng lao động hiện đại ở hầu hết tất cả các ngành công nghiệp.\nb. Nếu không có kỹ năng máy tính và internet cơ bản, người tìm việc sẽ gặp bất lợi nghiêm trọng trong việc tìm kiếm việc làm.\nc. Do đó, các cơ sở giáo dục phải tích hợp đào tạo kỹ thuật số toàn diện vào chương trình giảng dạy của họ.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'll-q24',
    type: 'reordering',
    questionText: 'Question 24. Choose the correct order of sentences to form a coherent paragraph:\na. E-commerce has revolutionized retail by allowing consumers to purchase goods from the comfort of their homes.\nb. However, this convenience has led to an increase in packaging waste and delivery vehicle emissions.\nc. Implementing eco-friendly packaging and electric delivery fleets is essential to mitigate these environmental impacts.',
    options: [
      { id: 'A', text: 'a - b - c', translation: 'Thứ tự lựa chọn' },
      { id: 'B', text: 'b - a - c', translation: 'Thứ tự lựa chọn' },
      { id: 'C', text: 'a - c - b', translation: 'Thứ tự lựa chọn' },
      { id: 'D', text: 'c - b - a', translation: 'Thứ tự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (a - b - c): Nêu lợi ích của thương mại điện tử (a) -> Nêu tác hại rác thải đóng gói (b - However) -> Đưa ra giải pháp bao bì xanh (c).',
    translation: 'Sắp xếp các câu thành đoạn văn về thương mại điện tử và bảo vệ môi trường:\na. Thương mại điện tử đã cách mạng hóa ngành bán lẻ bằng cách cho phép người tiêu dùng mua hàng hóa ngay tại nhà.\nb. Tuy nhiên, sự tiện lợi này đã dẫn đến sự gia tăng rác thải đóng gói và phát thải của phương tiện giao hàng.\nc. Việc triển khai bao bì thân thiện với môi trường và đội xe giao hàng bằng điện là điều thiết yếu để giảm thiểu các tác động môi trường này.',
    topicTag: 'Sắp xếp đoạn văn'
  },

  // SECTION 5: CLOZE ANNOUNCEMENT - JOB FAIR (Q25 - Q30)
  {
    id: 'll-q25',
    type: 'cloze_test',
    readingPassage: PASSAGE_JOB_FAIR_ANNOUNCEMENT,
    passageTranslation: PASSAGE_JOB_FAIR_ANNOUNCEMENT_TRANS,
    questionText: 'Question 25. Fill in blank (25):',
    options: [
      { id: 'A', text: 'whom', translation: 'người mà' },
      { id: 'B', text: 'who', translation: 'người mà' },
      { id: 'C', text: 'which', translation: 'cái mà' },
      { id: 'D', text: 'whose', translation: 'của ai' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đại từ quan hệ "who" làm chủ ngữ thay thế cho đại diện các tập đoàn ("representatives... who are actively seeking...").',
    translation: 'Gặp gỡ đại diện từ hơn 100 tập đoàn (25) ____________ đang tích cực tìm kiếm ứng viên.',
    topicTag: 'Mệnh đề quan hệ (Relative Pronouns)'
  },
  {
    id: 'll-q26',
    type: 'cloze_test',
    readingPassage: PASSAGE_JOB_FAIR_ANNOUNCEMENT,
    passageTranslation: PASSAGE_JOB_FAIR_ANNOUNCEMENT_TRANS,
    questionText: 'Question 26. Fill in blank (26):',
    options: [
      { id: 'A', text: 'range', translation: 'phạm vi / sự đa dạng' },
      { id: 'B', text: 'deal', translation: 'lượng' },
      { id: 'C', text: 'number', translation: 'số lượng' },
      { id: 'D', text: 'plenty', translation: 'nhiều' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cụm từ cố định "a wide range of + N" (đa dạng các lĩnh vực nghề nghiệp).',
    translation: 'Khám phá (26) ____________ các lĩnh vực nghề nghiệp từ IT đến du lịch sinh thái.',
    topicTag: 'Collocation (A wide range of)'
  },
  {
    id: 'll-q27',
    type: 'cloze_test',
    readingPassage: PASSAGE_JOB_FAIR_ANNOUNCEMENT,
    passageTranslation: PASSAGE_JOB_FAIR_ANNOUNCEMENT_TRANS,
    questionText: 'Question 27. Fill in blank (27):',
    options: [
      { id: 'A', text: 'delivering', translation: 'đang trình bày' },
      { id: 'B', text: 'delivered', translation: 'được trình bày / được thực hiện' },
      { id: 'C', text: 'deliver', translation: 'trình bày' },
      { id: 'D', text: 'to deliver', translation: 'để trình bày' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Rút gọn mệnh đề quan hệ dạng bị động "...workshops which are delivered by industry experts" -> "delivered".',
    translation: 'Tham dự các buổi hội thảo hướng nghiệp (27) ____________ bởi các chuyên gia ngành.',
    topicTag: 'Rút gọn mệnh đề quan hệ bị động (V-ed)'
  },
  {
    id: 'll-q28',
    type: 'cloze_test',
    readingPassage: PASSAGE_JOB_FAIR_ANNOUNCEMENT,
    passageTranslation: PASSAGE_JOB_FAIR_ANNOUNCEMENT_TRANS,
    questionText: 'Question 28. Fill in blank (28):',
    options: [
      { id: 'A', text: 'advantage', translation: 'ưu thế / lợi thế' },
      { id: 'B', text: 'care', translation: 'sự chăm sóc' },
      { id: 'C', text: 'notice', translation: 'sự chú ý' },
      { id: 'D', text: 'part', translation: 'phần' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cụm từ thành ngữ "take advantage of something" nghĩa là tận dụng lợi thế của cái gì.',
    translation: 'Tận dụng (28) ____________ từ dịch vụ sửa CV miễn phí và phỏng vấn trực tiếp.',
    topicTag: 'Thành ngữ với Động từ (Take advantage of)'
  },
  {
    id: 'll-q29',
    type: 'cloze_test',
    readingPassage: PASSAGE_JOB_FAIR_ANNOUNCEMENT,
    passageTranslation: PASSAGE_JOB_FAIR_ANNOUNCEMENT_TRANS,
    questionText: 'Question 29. Fill in blank (29):',
    options: [
      { id: 'A', text: 'make', translation: 'làm / tạo ra' },
      { id: 'B', text: 'take', translation: 'nắm lấy / đảm nhận' },
      { id: 'C', text: 'gain', translation: 'đạt được' },
      { id: 'D', text: 'do', translation: 'làm' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Cụm từ "take charge of something" nghĩa là chủ động quản lý / làm chủ cái gì.',
    translation: 'Đừng bỏ lỡ cơ hội (29) ____________ làm chủ con đường sự nghiệp của bạn!',
    topicTag: 'Collocation (Take charge of)'
  },
  {
    id: 'll-q30',
    type: 'cloze_test',
    readingPassage: PASSAGE_JOB_FAIR_ANNOUNCEMENT,
    passageTranslation: PASSAGE_JOB_FAIR_ANNOUNCEMENT_TRANS,
    questionText: 'Question 30. Fill in blank (30):',
    options: [
      { id: 'A', text: 'taking', translation: 'nắm bắt' },
      { id: 'B', text: 'take', translation: 'nắm bắt' },
      { id: 'C', text: 'takes', translation: 'nắm bắt' },
      { id: 'D', text: 'to take', translation: 'để nắm bắt' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cấu trúc "opportunity to do something" (cơ hội để làm gì).',
    translation: 'Đừng bỏ lỡ cơ hội (30) ____________ làm chủ con đường sự nghiệp của bạn!',
    topicTag: 'Danh từ + To-V (Opportunity to V)'
  },

  // SECTION 6: READING COMPREHENSION 2 - RENEWABLE ENERGY TRUTH (Q31 - Q40)
  {
    id: 'll-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 31. According to paragraph 1, what is the primary function of Renewable Energy Certificates (RECs)?',
    options: [
      { id: 'A', text: 'To mandate immediate closure of fossil fuel power plants worldwide.', translation: 'Bắt buộc đóng cửa ngay lập tức các nhà máy nhiệt điện.' },
      { id: 'B', text: 'To allow organizations to balance their environmental footprints.', translation: 'Cho phép các tổ chức cân bằng dấu chân môi trường của họ.' },
      { id: 'C', text: 'To eliminate all mining activities in developing nations.', translation: 'Loại bỏ mọi hoạt động khai khoáng...' },
      { id: 'D', text: 'To guarantee free solar power distribution for residential consumers.', translation: 'Đảm bảo phân phối điện mặt trời miễn phí...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Dẫn chứng đoạn 1: "Renewable Energy Certificates (RECs)... were designed to allow organizations to balance their environmental footprints".',
    translation: 'Theo đoạn 1, chức năng chính của Chứng chỉ Năng lượng Tái tạo (RECs) là gì?',
    topicTag: 'Đọc hiểu - Chi tiết trong bài'
  },
  {
    id: 'll-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 32. Which of the following best summarises paragraph 1?',
    options: [
      { id: 'A', text: 'Green energy mechanisms often obscure actual emissions, helping companies project an eco-friendly image without structural changes.', translation: 'Các cơ chế năng lượng xanh thường làm mờ phát thải thực tế, giúp công ty xây dựng hình ảnh xanh mà không thay đổi cấu trúc.' },
      { id: 'B', text: 'RECs have completely solved carbon emissions for major corporations.', translation: 'RECs đã giải quyết hoàn toàn vấn đề phát thải...' },
      { id: 'C', text: 'Fossil fuel reliance has ended thanks to carbon offset programs.', translation: 'Sự phụ thuộc vào nhiên liệu hóa thạch đã kết thúc...' },
      { id: 'D', text: 'Supply chains are now 100% clean and transparent across global markets.', translation: 'Chuỗi cung ứng hiện nay đã 100% sạch...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Tóm tắt chính xác ý chính đoạn 1: RECs và carbon offsets giúp tạo vẻ ngoài thân thiện môi trường nhưng không thay đổi thực chất.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất nội dung của đoạn 1?',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn văn'
  },
  {
    id: 'll-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 33. Which of the following is NOT stated as an example of the material intensity mentioned in paragraph 2?',
    options: [
      { id: 'A', text: 'Rare earth elements', translation: 'Các nguyên tố đất hiếm' },
      { id: 'B', text: 'Copper', translation: 'Đồng' },
      { id: 'C', text: 'Lithium', translation: 'Lithium' },
      { id: 'D', text: 'Synthetic plastics', translation: 'Nhựa tổng hợp' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Nhựa tổng hợp (synthetic plastics) KHÔNG được đề cập ở đoạn 2 khi liệt kê các vật liệu khai khoáng (đất hiếm, đồng, lithium).',
    translation: 'Yếu tố nào dưới đây KHÔNG được nêu như một ví dụ về cường độ vật liệu ở đoạn 2?',
    topicTag: 'Đọc hiểu - Chi tiết KHÔNG có'
  },
  {
    id: 'll-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 34. The word "mounting" in paragraph 2 mostly means:',
    options: [
      { id: 'A', text: 'increasing', translation: 'ngày càng tăng / chồng chất' },
      { id: 'B', text: 'decreasing', translation: 'giảm đi' },
      { id: 'C', text: 'stabilizing', translation: 'ổn định' },
      { id: 'D', text: 'disappearing', translation: 'biến mất' }
    ],
    correctAnswer: 'A',
    explanation: '• A. increasing - ĐÚNG: "mounting environmental debt" đồng nghĩa với "increasing environmental debt" (khoản nợ môi trường ngày càng tăng).',
    translation: 'Từ "mounting" trong đoạn 2 có nghĩa gần nhất với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ vựng ngữ cảnh'
  },
  {
    id: 'll-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 35. The word "their" in paragraph 1 refers to:',
    options: [
      { id: 'A', text: 'organizations', translation: 'các tổ chức / công ty' },
      { id: 'B', text: 'climate concerns', translation: 'mối lo ngại khí hậu' },
      { id: 'C', text: 'fossil fuels', translation: 'nhiên liệu hóa thạch' },
      { id: 'D', text: 'trade-offs', translation: 'sự đánh đổi' }
    ],
    correctAnswer: 'A',
    explanation: '• A. organizations - ĐÚNG: "allow organizations to balance their environmental footprints" -> "their" quy chiếu về "organizations".',
    translation: 'Từ "their" trong đoạn 1 quy chiếu đến từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'll-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 36. Which of the following best paraphrases the underlined sentence in paragraph 3 ("This reliance underscores the reality that renewables currently supplement, rather than fully replace, conventional power infrastructure")?',
    options: [
      { id: 'A', text: 'Renewable energy has completely replaced conventional power grids worldwide.', translation: 'Năng lượng tái tạo đã thay thế hoàn toàn lưới điện truyền thống.' },
      { id: 'B', text: 'The ongoing need for fossil fuel plants highlights that green energy currently acts as an addition to, not a complete replacement for, traditional grids.', translation: 'Nhu cầu liên tục duy trì các nhà máy hóa thạch làm nổi bật thực tế rằng năng lượng xanh hiện chỉ đóng vai trò bổ sung, chứ chưa thay thế hoàn toàn lưới điện truyền thống.' },
      { id: 'C', text: 'Conventional power infrastructure is no longer necessary for energy stability.', translation: 'Hạ tầng điện truyền thống không còn cần thiết...' },
      { id: 'D', text: 'Solar and wind energy are more reliable than natural gas peaker plants.', translation: 'Năng lượng mặt trời và gió đáng tin cậy hơn...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Paraphrase chính xác câu gốc: "currently supplement, rather than fully replace" = "acts as an addition to, not a complete replacement for".',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn 3?',
    topicTag: 'Đọc hiểu - Viết lại câu nâng cao'
  },
  {
    id: 'll-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 37. According to the passage, natural gas peaker plants are mentioned as:',
    options: [
      { id: 'A', text: 'the main cause of electronic waste generation', translation: 'nguyên nhân chính tạo ra rác thải điện tử' },
      { id: 'B', text: 'backup power sources maintained to prevent blackouts during low generation periods', translation: 'nguồn điện dự phòng được duy trì để ngăn mất điện trong thời điểm sản lượng phát điện thấp' },
      { id: 'C', text: '100% zero-emission energy generation facilities', translation: 'cơ sở phát điện 100% không phát thải' },
      { id: 'D', text: 'obsolete technologies that have been banned by climate regulations', translation: 'công nghệ lỗi thời đã bị cấm' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Dẫn chứng đoạn 3: "...power grids must maintain fossil-fuel-fired peaker plants—often running on natural gas—to prevent blackouts...".',
    translation: 'Theo bài đọc, các nhà máy điện chạy bằng khí tự nhiên được đề cập là gì?',
    topicTag: 'Đọc hiểu - Chi tiết trong bài'
  },
  {
    id: 'll-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 38. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Simply expanding solar and wind infrastructure without improving life-cycle recycling may merely shift environmental problems upstream.', translation: 'Chỉ đơn thuần mở rộng hạ tầng mặt trời và gió mà không cải thiện tái chế vòng đời có nguy cơ chỉ dịch chuyển vấn đề môi trường về phía thượng nguồn.' },
      { id: 'B', text: 'Solar panels produce more operational greenhouse gases than coal power plants.', translation: 'Pin mặt trời tạo ra nhiều khí nhà kính hơn than...' },
      { id: 'C', text: 'Global energy consumption will automatically decrease next year.', translation: 'Mức tiêu thụ năng lượng sẽ tự động giảm...' },
      { id: 'D', text: 'Rare earth mining causes zero environmental harm in developing countries.', translation: 'Khai thác đất hiếm không gây hại môi trường...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Suy luận hợp lý từ bài: Nếu không hạch toán vòng đời và tái chế, năng lượng xanh sẽ chỉ làm chuyển dịch gánh nặng môi trường ("risks shifting environmental burdens rather than eliminating them").',
    translation: 'Điều nào dưới đây có thể được suy luận ra từ nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'll-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 39. Where in the passage does the following sentence best fit: "This illusion of sustainability can undermine genuine efforts to decarbonize global economies."',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'A',
    explanation: '• A. Paragraph 1 - ĐÚNG: "This illusion of sustainability" quy chiếu trực tiếp về hình ảnh xanh giả tạo ("project a green image without structural changes") ở cuối đoạn 1.',
    translation: 'Trong bài đọc, câu "This illusion of sustainability can undermine genuine efforts..." nằm ở vị trí nào là phù hợp nhất?',
    topicTag: 'Đọc hiểu - Chèn câu vào vị trí thích hợp'
  },
  {
    id: 'll-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_RENEWABLE_ENERGY_TRUTH,
    passageTranslation: PASSAGE_RENEWABLE_ENERGY_TRUTH_TRANS,
    questionText: 'Question 40. Which of the following best summarises the passage?',
    options: [
      { id: 'A', text: 'While green energy technologies offer climate benefits, achieving true sustainability requires addressing supply chain impacts and grid stability challenges.', translation: 'Mặc dù công nghệ năng lượng xanh mang lại lợi ích khí hậu, đạt được tính bền vững thực sự đòi hỏi phải giải quyết các tác động chuỗi cung ứng và thách thức ổn định lưới điện.' },
      { id: 'B', text: 'Renewable energy is completely free of environmental costs and should replace all grids immediately.', translation: 'Năng lượng tái tạo hoàn toàn không mất chi phí môi trường...' },
      { id: 'C', text: 'Fossil fuels are superior to renewable energy sources in every aspect.', translation: 'Nhiên liệu hóa thạch vượt trội hơn về mọi mặt...' },
      { id: 'D', text: 'Mining lithium and copper has no effect on developing nations.', translation: 'Khai thác lithium không ảnh hưởng tới các nước đang phát triển...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Tóm tắt toàn diện ý toàn bài: Năng lượng xanh mang lại lợi ích nhưng cần giải quyết các mặt trái về chuỗi cung ứng vật liệu và sự ổn định của lưới điện.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất toàn bộ bài đọc?',
    topicTag: 'Đọc hiểu - Ý chính toàn bài (Main Purpose)'
  }
];

export const LE_LOI_2026_EXAM: ExamSet = {
  id: 'exam-le-loi-2026',
  title: 'Đề Thi Thử THPT 2026 - Trường THPT Lê Lợi - Thanh Hóa (Lần 1)',
  description: 'Đề thi khảo sát chất lượng TN THPT 2026 Trường THPT Lê Lợi - Thanh Hóa gồm trọn bộ 40 câu trắc nghiệm chuẩn cấu trúc mới 2026 kèm đáp án & bản dịch.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'SỞ THANH HÓA 2026',
  iconName: 'Award',
  questions: LE_LOI_2026_QUESTIONS
};
