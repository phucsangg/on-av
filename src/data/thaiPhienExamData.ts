import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_SUGAR_HEALTH = `Parents have long known too much sugar can harm their child's health, but a growing body of research reveals just how much damage it can do. A recent study in the journal Science found the dangers continue well into adulthood, <mark>(1) ____________</mark> increased added sugars early in life. The results of this study and others <mark>(2) ____________</mark>.
While too much sugar harms adults too, it appears to be especially problematic at an age when food preferences are forming. "<mark>(3) ____________</mark>, it's likely that you're going to prefer them throughout your life more than someone who is not," says Tadeja Gracner, a scientist at the University of Southern California, who coauthored the research.
Sugar naturally occurs in some foods like fruit, but it's also often added during processing or preparation. <mark>(4) ____________</mark>. This is well above the 10 percent of calories in added sugars recommended by dietary officials for children over age two, and far from the ideal of less than five percent of total calories the World Health Organization suggests. <mark>(5) ____________</mark>. Children under two should eat no added sugar.`;

const PASSAGE_SUGAR_HEALTH_TRANS = `ĐƯỜNG VÀ SỨC KHỎE TRẺ EM
Các bậc phụ huynh từ lâu đã biết rằng quá nhiều đường có thể gây hại cho sức khỏe của trẻ, nhưng ngày càng nhiều nghiên cứu cho thấy mức độ tổn hại lớn đến đâu. Một nghiên cứu gần đây trên tạp chí Science đã phát hiện ra rằng những nguy cơ này tiếp tục kéo dài đến tận tuổi trưởng thành, với huyết áp cao và tiểu đường tuýp 2 phổ biến hơn ở những người trưởng thành đã tiếp xúc với lượng đường bổ sung tăng cao từ thời thơ ấu. Kết quả của nghiên cứu này và các nghiên cứu khác cho thấy rõ ngưỡng đường an toàn thấp hơn nhiều so với mức nhiều trẻ đang tiêu thụ.

Dù quá nhiều đường cũng gây hại cho người lớn, nó đặc biệt nghiêm trọng ở độ tuổi mà sở thích ăn uống đang hình thành. "Đã bị tiếp xúc với đồ ngọt từ giai đoạn phát triển ban đầu của bạn, rất có khả năng bạn sẽ thích chúng suốt đời nhiều hơn người không bị như vậy," Tadeja Gracner, một nhà khoa học tại Đại học Nam California, đồng tác giả nghiên cứu, cho biết.

Đường có sẵn trong tự nhiên ở một số thực phẩm như trái cây, nhưng cũng thường được thêm vào trong quá trình chế biến hoặc nấu nướng. Trẻ em ở Mỹ ăn trung bình 17 thìa đường bổ sung mỗi ngày, tương đương gần 300 calo. Mức này cao hơn nhiều so với 10% calo từ đường bổ sung mà các quan chức dinh dưỡng khuyến nghị cho trẻ trên hai tuổi, và xa rời lý tưởng dưới 5% tổng calo mà Tổ chức Y tế Thế giới đề xuất. 10% tương đương khoảng 100 đến 200 calo, tùy thuộc vào độ tuổi của trẻ. Trẻ dưới hai tuổi không nên ăn bất kỳ loại đường bổ sung nào.`;

const PASSAGE_BNPL_FINANCING = `A 2025 study examined how Americans use short-term financing services, allowing delayed purchase payments. These programs, splitting costs into four equal payments without extra fees, have grown significantly since 2019. Research shows that around twenty percent of Americans with credit histories used leading providers during 2022. Many customers were frequent participants, obtaining several agreements monthly. Investigators found that holding various simultaneous contracts was common, with sixty-five percent managing <mark>overlapping</mark> deals from different companies.
The study revealed concerning patterns about customer characteristics. People with poor credit ratings receive large portions of this financing. Young adults between eighteen and twenty-four depend heavily on these programs, which represent a bigger portion of <mark>their</mark> total debts compared to older groups. Customers generally have higher amounts of other debts—including credit cards, personal loans, and store accounts—than non-users. This evidence indicates these programs work mainly as extra borrowing rather than replacing traditional options, therefore increasing financial pressure for struggling families.
Interestingly, non-payment rates stay low at about two percent yearly, much lower than credit card failures among similar customers. Automatic payment systems may explain this result, though they could hide serious financial difficulties among heavy users. A major issue involves poor reporting to monitoring organizations. Because most companies avoid sharing contract details with regular agencies, these obligations remain <mark>invisible</mark> in the credit system. Therefore, banks, government officials, and borrowers cannot properly judge total debt levels.
Government oversight remains unclear. <mark>Although authorities previously tried classifying providers under existing protection laws, recent statements showed reduced enforcement plans</mark>. This creates confusion about future monitoring methods and safety measures. The research describes these programs as popular but poorly regulated tools increasingly used by financially weak populations, highlighting the need for better policies as this trend continues to change American borrowing habits.`;

const PASSAGE_BNPL_FINANCING_TRANS = `Một nghiên cứu năm 2025 đã xem xét cách người Mỹ sử dụng các dịch vụ tài chính ngắn hạn, cho phép trì hoãn thanh toán khi mua hàng. Các chương trình này, vốn chia chi phí thành bốn đợt thanh toán bằng nhau không tính phí phụ, đã tăng trưởng đáng kể kể từ năm 2019. Nghiên cứu cho thấy khoảng hai mươi phần trăm người Mỹ có lịch sử tín dụng đã sử dụng các nhà cung cấp hàng đầu trong năm 2022. Nhiều khách hàng tham gia thường xuyên, ký nhiều hợp đồng mỗi tháng. Các nhà điều tra phát hiện rằng việc giữ nhiều hợp đồng đồng thời là phổ biến, với sáu mươi lăm phần trăm khách hàng đang quản lý các hợp đồng chồng chéo từ các công ty khác nhau.

Nghiên cứu cũng chỉ ra những đặc điểm đáng lo ngại của khách hàng. Những người có điểm tín dụng kém chiếm phần lớn trong nhóm sử dụng dịch vụ này. Thanh niên từ mười tám đến hai mươi tư tuổi phụ thuộc nhiều vào các chương trình này, và chúng chiếm tỷ trọng lớn hơn trong tổng số nợ của họ so với các nhóm tuổi lớn hơn. Khách hàng nói chung có khoản nợ khác cao hơn — bao gồm thẻ tín dụng, vay cá nhân và tài khoản mua chịu — so với người không sử dụng. Bằng chứng này cho thấy các chương trình này chủ yếu hoạt động như một hình thức vay thêm chứ không thay thế các phương thức truyền thống, do đó làm gia tăng áp lực tài chính cho các gia đình đang khó khăn.

Điều thú vị là tỷ lệ không trả nợ vẫn thấp, ở mức khoảng hai phần trăm hàng năm, thấp hơn nhiều so với tỷ lệ vỡ nợ thẻ tín dụng ở cùng nhóm khách hàng. Các hệ thống thanh toán tự động có thể giải thích kết quả này, dù chúng có thể che giấu khó khăn tài chính nghiêm trọng ở những người dùng nhiều. Một vấn đề lớn liên quan đến việc báo cáo kém cho các tổ chức giám sát. Vì hầu hết các công ty tránh chia sẻ chi tiết hợp đồng với các cơ quan thông thường, nên các nghĩa vụ này vẫn vô hình trong hệ thống tín dụng. Do đó, ngân hàng, cơ quan chính phủ và người vay không thể đánh giá đúng tổng mức nợ.

Sự giám sát của chính phủ vẫn chưa rõ ràng. Mặc dù các cơ quan chức năng trước đây đã cố gắng phân loại các nhà cung cấp theo luật bảo vệ hiện hành, các tuyên bố gần đây cho thấy kế hoạch thực thi đã giảm bớt. Điều này tạo ra sự bối rối về phương pháp giám sát và biện pháp an toàn trong tương lai. Nghiên cứu mô tả các chương trình này là công cụ phổ biến nhưng được điều tiết kém, ngày càng được sử dụng bởi những người có khả năng tài chính yếu, nhấn mạnh nhu cầu có chính sách tốt hơn khi xu hướng này tiếp tục thay đổi thói quen vay tiền của người Mỹ.`;

const PASSAGE_WILDLIFE_BRIDGES = `[I] In what conservationists are calling a watershed moment, the ambitious Greater Mekong Wildlife Bridge Project has encountered an unexpected stumbling block. [II] Despite an unprecedented $50 million investment, the migrating elephant populations have plummeted by 35% since its inception. [III] These statistics have sent shockwaves through the conservation community, challenging long-held assumptions about wildlife corridor effectiveness. [IV]
The concept of wildlife corridors has long held conservationists in thrall. By creating protected pathways between fragmented habitats, these artificial lifelines were meant to ensure species survival. Yet beneath this seemingly foolproof approach lurks a more complex reality. As human settlements encroach on these corridors, animals find themselves <mark>playing Russian roulette</mark> with each crossing, facing lethal dangers from poachers who have caught wind of these predictable migration routes.
Recent findings from the Southeast Asian Conservation Institute paint a particularly sobering picture. When faced with human disturbance, elephants altered their migration patterns, venturing into unprotected areas. These behavioral adaptations proved catastrophic – poaching incidents soared by 180% in these zones. The findings have left conservationists wringing <mark>their</mark> hands over the unintended consequences of their well-intentioned interventions.
The economic implications of corridor conservation add another layer of complexity to an already thorny issue. Local communities, caught between a rock and a hard place, often view these projects with skepticism. Traditional farming practices fall by the wayside as authorities implement strict land-use regulations. While compensation schemes exist on paper, they rarely translate into adequate financial support for affected communities.
Conservation biologists have begun advocating for a paradigm shift in approach. <mark>Rather than imposing artificial corridors, they propose integrating wildlife passage into existing human infrastructure.</mark> This strategy has already borne fruit in countries like Malaysia, where elevated highways incorporate natural underpasses. These structures allow for wildlife movement while maintaining human activity above, creating a win-win situation for all stakeholders.
Yet the jury is still out on the long-term viability of such solutions. Critics argue that these modified corridors merely paper over the cracks of a deeper issue – humanity's relentless expansion into natural habitats. As urban sprawl continues <mark>unabated</mark>, even these innovative approaches may prove to be nothing more than a band-aid on a gaping wound.`;

const PASSAGE_WILDLIFE_BRIDGES_TRANS = `HÀNH LANG ĐỘNG VẬT HOANG DÃ
Trong điều mà các nhà bảo tồn gọi là một bước ngoặt, Dự án Cầu Động vật Hoang dã Lớn Mê Kông đầy tham vọng đã gặp phải một trở ngại không lường trước. Bất chấp khoản đầu tư chưa từng có 50 triệu đô la, các đàn voi di cư đã sụt giảm 35% kể từ khi dự án được khởi động. Những con số này đã gây chấn động cộng đồng bảo tồn, thách thức những giả định đã tồn tại lâu dài về hiệu quả của hành lang động vật hoang dã.

Khái niệm hành lang động vật hoang dã đã cuốn hút các nhà bảo tồn từ lâu. Bằng cách tạo ra những lối đi được bảo vệ giữa các môi trường sống bị chia cắt, những "đường dây cứu sinh" nhân tạo này nhằm đảm bảo sự sinh tồn của loài. Tuy nhiên, ẩn dưới phương pháp tưởng chừng hoàn hảo này là một thực tế phức tạp hơn. Khi các khu định cư của con người lấn chiếm các hành lang này, động vật phải "chơi trò roulette Nga" mỗi lần đi qua, đối mặt với nguy hiểm chết người từ những kẻ săn trộm đã đánh hơi được các tuyến di cư có thể đoán trước này.

Những phát hiện gần đây từ Viện Bảo tồn Đông Nam Á vẽ nên một bức tranh đặc biệt đáng lo ngại. Khi đối mặt với sự xáo trộn từ con người, voi đã thay đổi mô hình di cư, mạo hiểm vào các khu vực không được bảo vệ. Những thích nghi hành vi này tỏ ra thảm khốc - các vụ săn trộm tăng vọt 180% ở những khu vực đó. Kết quả khiến các nhà bảo tồn phải vò đầu bứt tai về những hệ quả ngoài ý muốn của những can thiệp đầy thiện chí của họ.

Hệ lụy kinh tế của việc bảo tồn hành lang còn thêm một lớp phức tạp vào vấn đề vốn đã gai góc. Các cộng đồng địa phương, bị mắc kẹt giữa hai làn đạn, thường nhìn các dự án này với sự hoài nghi. Các tập quán canh tác truyền thống bị bỏ lại phía sau khi chính quyền áp dụng các quy định nghiêm ngặt về sử dụng đất. Mặc dù trên giấy tờ có các chương trình bồi thường, chúng hiếm khi được chuyển thành sự hỗ trợ tài chính đủ đáp ứng cho các cộng đồng bị ảnh hưởng.

Các nhà sinh vật học bảo tồn đã bắt đầu ủng hộ một sự thay đổi mô hình trong cách tiếp cận. Thay vì áp đặt các hành lang nhân tạo, họ đề xuất tích hợp lối đi của động vật hoang dã vào cơ sở hạ tầng hiện có của con người. Chiến lược này đã mang lại kết quả ở các quốc gia như Malaysia, nơi các đường cao tốc trên cao kết hợp các đường ngầm tự nhiên. Những công trình này cho phép động vật di chuyển trong khi vẫn duy trì hoạt động của con người ở phía trên, tạo ra một tình huống cùng có lợi cho tất cả các bên liên quan.

Tuy nhiên, vẫn chưa thể kết luận về tính khả thi lâu dài của những giải pháp như vậy. Các nhà phê bình lập luận rằng những hành lang được điều chỉnh này chỉ vá víu cho một vấn đề sâu xa hơn - sự bành trướng không ngừng của loài người vào môi trường sống tự nhiên. Khi đô thị hóa tiếp tục không suy giảm, ngay cả những cách tiếp cận sáng tạo này cũng có thể chỉ là miếng băng dán trên một vết thương hoác miệng.`;

const PASSAGE_AIR_CLEANING = `Take Advantage of Air Cleaning Technology
Homeowners today live in a technology-driven era, with several innovations <mark>(29) ____________</mark> to air cleaning and control. Equip your household with:
• Air filters: HVAC systems often contain air filters, which catch floating dirt and debris. These should be cleaned and changed monthly or when necessary to achieve good indoor air quality while <mark>(30) ____________</mark> your equipment's lifespan.
• Air purifiers: Air purifiers are helpful tools for <mark>(31) ____________</mark> cleaning your home atmosphere. These are especially helpful for people with allergies or asthma. Different devices have limited capacity, so you may want to get <mark>(32) ____________</mark> devices depending on your home's size.
• Air dehumidifiers: A damp home is a <mark>(33) ____________</mark> for mold and mildew. Dehumidifiers focus on <mark>(34) ____________</mark> moisture from the air, so you'll want to place yours in moisture-prone areas like the bathroom and kitchen for best results.`;

const PASSAGE_AIR_CLEANING_TRANS = `TẬN DỤNG CÔNG NGHỆ LÀM SẠCH KHÔNG KHÍ
Các chủ nhà ngày nay sống trong kỷ nguyên công nghệ, với nhiều phát minh được dành riêng cho việc làm sạch và kiểm soát không khí. Hãy trang bị cho gia đình bạn:
• Bộ lọc không khí: Hệ thống HVAC thường có bộ lọc không khí giúp bắt giữ bụi bẩn và mảnh vụn lơ lửng. Chúng nên được vệ sinh và thay thế hàng tháng hoặc khi cần thiết để đạt chất lượng không khí trong nhà tốt đồng thời kéo dài tuổi thọ thiết bị.
• Máy lọc không khí: Máy lọc không khí là công cụ hữu ích để làm sạch bầu không khí trong nhà một cách tự nhiên. Chúng đặc biệt hữu ích cho người bị dị ứng hoặc hen suyễn. Các thiết bị khác nhau có công suất giới hạn, vì vậy bạn có thể cần mua nhiều thiết bị tùy theo kích thước nhà.
• Máy hút ẩm: Một ngôi nhà ẩm ướt là nơi tiềm tàng sinh sôi nấm mốc và mốc meo. Máy hút ẩm tập trung vào việc rút hơi ẩm khỏi không khí, do đó bạn nên đặt máy ở những nơi dễ ẩm như phòng tắm và bếp để có kết quả tốt nhất.`;

const PASSAGE_OUTSCHOOL = `Outschool is an online learning platform that empowers kids 3-18 to learn on their own terms with the widest <mark>(35) ____________</mark> of teachers, topics, and classes to suit any interest. Since 2015, our expert teachers <mark>(36) ____________</mark> over 1.5 million learners and earned more than $488 million teaching on Outschool.
Outschool does not require formal teaching qualifications to teach on the platform. We believe that many adults can offer quality learning experiences based on their expertise and interests. We do, <mark>(37) ____________</mark>, have several requirements which teachers need to <mark>(38) ____________</mark> to become and to remain a teacher on Outschool.
Outschool's mission is to inspire kids to love learning. We achieve this by linking learning <mark>(39) ____________</mark> kids' interests, connecting them with other classmates who share their passions, and giving them the <mark>(40) ____________</mark> to pick their own paths. Our small group classes meet over live video chat with teachers who celebrate their unique strengths and empower all learners to develop confidence and a strong sense of self.`;

const PASSAGE_OUTSCHOOL_TRANS = `OUTSCHOOL - NỀN TẢNG HỌC TRỰC TUYẾN
Outschool là một nền tảng học trực tuyến trao quyền cho trẻ em từ 3-18 tuổi học theo cách riêng của mình với sự đa dạng phong phú nhất về giáo viên, chủ đề và lớp học phù hợp với mọi sở thích. Kể từ năm 2015, các giáo viên chuyên gia của chúng tôi đã dạy hơn 1,5 triệu học viên và kiếm được hơn 488 triệu đô la khi giảng dạy trên Outschool.

Outschool không yêu cầu bằng cấp giảng dạy chính thức để giảng dạy trên nền tảng này. Chúng tôi tin rằng nhiều người lớn có thể mang đến những trải nghiệm học tập chất lượng dựa trên chuyên môn và sở thích của họ. Tuy nhiên, chúng tôi vẫn có một số yêu cầu mà giáo viên cần đáp ứng để trở thành và tiếp tục là giáo viên trên Outschool.

Sứ mệnh của Outschool là truyền cảm hứng cho trẻ yêu việc học. Chúng tôi đạt được điều này bằng cách kết nối việc học với sở thích của trẻ, kết nối các em với những bạn cùng đam mê và trao cho các em quyền tự chủ để tự chọn con đường riêng. Các lớp nhóm nhỏ của chúng tôi diễn ra qua chat video trực tiếp với những giáo viên trân trọng điểm mạnh độc đáo của các em và trao quyền cho mọi học viên phát triển sự tự tin và ý thức bản thân vững chắc.`;

export const THAI_PHIEN_2026_QUESTIONS: Question[] = [
  // SECTION 1: SUGAR & CHILDREN HEALTH (Q1 - Q5)
  {
    id: 'tp-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_SUGAR_HEALTH,
    passageTranslation: PASSAGE_SUGAR_HEALTH_TRANS,
    questionText: 'Question 1. Fill in blank (1):',
    options: [
      { id: 'A', text: 'whose long-term health outcomes remain largely affected for most adults due to having', translation: 'có kết quả sức khỏe dài hạn bị ảnh hưởng lớn...' },
      { id: 'B', text: 'which adults experience with more chronic diseases as a result of their habit of consuming', translation: 'mà người lớn trải qua nhiều bệnh mãn tính hơn...' },
      { id: 'C', text: 'leading to adults\' increased metabolic health conditions later because of their exposure to', translation: 'dẫn đến tình trạng sức khỏe chuyển hóa tăng cao...' },
      { id: 'D', text: 'with high blood pressure and type 2 diabetes more common in adults who were exposed to', translation: 'với huyết áp cao và tiểu đường tuýp 2 phổ biến hơn ở những người trưởng thành đã tiếp xúc với' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cấu trúc "with + N + Adj/V-ed" đóng vai trò bổ ngữ liệt kê cụ thể các nguy cơ bệnh tật (high blood pressure, type 2 diabetes).\n• A, B, C: Sai cấu trúc ngữ pháp và lặp ý.',
    translation: 'Nghiên cứu trên tạp chí Science phát hiện các nguy cơ kéo dài đến tận tuổi trưởng thành, (1) ____________ lượng đường bổ sung tăng cao từ sớm.',
    topicTag: 'Cấu trúc Bổ ngữ chỉ nguyên nhân (With + N + Adj)'
  },
  {
    id: 'tp-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_SUGAR_HEALTH,
    passageTranslation: PASSAGE_SUGAR_HEALTH_TRANS,
    questionText: 'Question 2. Fill in blank (2):',
    options: [
      { id: 'A', text: 'imply that sugar consumption has minimal long-term health consequences for children', translation: 'ngụ ý lượng đường ăn vào có hậu quả tối thiểu' },
      { id: 'B', text: 'make clear the sweet spot for sugar is well below what many kids currently consume', translation: 'làm rõ ngưỡng đường an toàn thấp hơn nhiều so với mức trẻ đang ăn' },
      { id: 'C', text: 'suggest that current sugar consumption levels are already appropriate for most children', translation: 'gợi ý lượng đường hiện tại là phù hợp' },
      { id: 'D', text: 'indicate that children should increase sugar intake to support healthy development', translation: 'chỉ ra rằng trẻ nên tăng lượng đường' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: "sweet spot" (ngưỡng an toàn/lý tưởng) thấp hơn nhiều mức tiêu thụ hiện tại của trẻ em.\n• A, C, D: Sai mâu thuẫn về mặt y tế dinh dưỡng.',
    translation: 'Kết quả nghiên cứu này và các nghiên cứu khác (2) ____________.',
    topicTag: 'Đọc hiểu & Từ vựng chủ đề Sức khỏe'
  },
  {
    id: 'tp-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_SUGAR_HEALTH,
    passageTranslation: PASSAGE_SUGAR_HEALTH_TRANS,
    questionText: 'Question 3. Fill in blank (3):',
    options: [
      { id: 'A', text: 'Having been exposed to sweetened foods early in your childhood development', translation: 'Đã bị tiếp xúc với đồ ngọt từ giai đoạn phát triển ban đầu của bạn' },
      { id: 'B', text: 'Once consuming a variety of foods, including sugary ones, at an early age', translation: 'Một khi tiêu thụ nhiều loại thực phẩm ở độ tuổi sớm' },
      { id: 'C', text: 'If you are exposed to sweet foods early in life and developed a liking for them', translation: 'Nếu bạn tiếp xúc đồ ngọt sớm và phát triển sở thích (sai thì)' },
      { id: 'D', text: 'In early life you indulged in eating sugary foods as part of your normal diet', translation: 'Khi còn nhỏ bạn nuông chiều ăn đồ ngọt (lỗi run-on)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Sử dụng phân từ hoàn thành bị động "Having been exposed to" chỉ hành động xảy ra trước làm nguyên nhân dẫn đến thói quen sở thích.',
    translation: '"(3) ____________, rất có khả năng bạn sẽ thích chúng suốt đời hơn người không bị như vậy."',
    topicTag: 'Phân từ hoàn thành (Having been + V3)'
  },
  {
    id: 'tp-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_SUGAR_HEALTH,
    passageTranslation: PASSAGE_SUGAR_HEALTH_TRANS,
    questionText: 'Question 4. Fill in blank (4):',
    options: [
      { id: 'A', text: 'The daily intake of added sugar among children in the U.S. remains relatively low compared to recommended levels', translation: 'Lượng đường hàng ngày của trẻ ở Mỹ khá thấp...' },
      { id: 'B', text: 'An average of 17 teaspoons of added sugar a day is recommended for children in the U.S., which equals almost 300 calories', translation: '17 thìa đường là con số được khuyến nghị...' },
      { id: 'C', text: 'Nearly 300 calories a day are consumed by children in the U.S., although only a small proportion comes from added sugar', translation: 'Gần 300 calo chỉ có tỷ lệ nhỏ từ đường...' },
      { id: 'D', text: 'Children in the U.S. eat an average of 17 teaspoons of added sugar a day, which equals almost 300 calories', translation: 'Trẻ em ở Mỹ ăn trung bình 17 thìa đường bổ sung mỗi ngày, tương đương gần 300 calo' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cung cấp số liệu thực tế (17 teaspoons = 300 calories) để dẫn dắt đến câu so sánh "This is well above 10%...".',
    translation: 'Đường thường được thêm vào trong chế biến. (4) ____________.',
    topicTag: 'Cấu trúc câu & Đọc hiểu thông tin'
  },
  {
    id: 'tp-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_SUGAR_HEALTH,
    passageTranslation: PASSAGE_SUGAR_HEALTH_TRANS,
    questionText: 'Question 5. Fill in blank (5):',
    options: [
      { id: 'A', text: 'The child\'s age determines that 10 percent of their daily calories should increase to about 100 to 200 calories', translation: 'Tuổi của trẻ xác định 10% nên tăng...' },
      { id: 'B', text: 'Approximately 100 to 200 calories are recommended for children each day, with sugar forming the majority of this intake', translation: '100-200 calo được khuyến nghị với đường chiếm đa số' },
      { id: 'C', text: 'Ten percent translates to roughly 100 to 200 calories, depending on the age of the child', translation: '10% tương đương khoảng 100 đến 200 calo, tùy thuộc vào độ tuổi của trẻ' },
      { id: 'D', text: 'A range of 100 to 200 calories represents the total daily intake required for children, regardless of their age', translation: 'Khoảng 100-200 calo là tổng lượng calo bất kể độ tuổi' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: "Ten percent translates to..." giải thích cụ thể cho con số 10% ở câu trước và dẫn đến việc phân chia độ tuổi ở câu sau.',
    translation: 'Mức khuyến nghị là 10% calo từ đường. (5) ____________.',
    topicTag: 'Đọc hiểu & Từ vựng chuyển tiếp'
  },

  // SECTION 2: BNPL FINANCING (Q6 - Q13)
  {
    id: 'tp-q6',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BNPL_FINANCING,
    passageTranslation: PASSAGE_BNPL_FINANCING_TRANS,
    questionText: 'Question 6. All of the following are mentioned EXCEPT:',
    options: [
      { id: 'A', text: 'The typical non-payment rates compared to credit card failures', translation: 'Tỷ lệ không trả nợ thông thường so với vỡ nợ thẻ tín dụng' },
      { id: 'B', text: 'The specific income requirements for qualifying for these payment programs', translation: 'Yêu cầu thu nhập cụ thể để đủ điều kiện tham gia' },
      { id: 'C', text: 'The percentage of customers managing overlapping deals from different companies', translation: 'Tỷ lệ khách hàng quản lý các hợp đồng chồng chéo' },
      { id: 'D', text: 'The age group that depends most heavily on these financing services', translation: 'Nhóm tuổi phụ thuộc nhiều nhất vào các dịch vụ này' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG (là câu KHÔNG được đề cập): Bài đọc không hề nhắc đến yêu cầu thu nhập cụ thể (specific income requirements).',
    translation: 'Tất cả các điều sau đây đều được nhắc đến trong bài đọc NGOẠI TRỪ điều nào?',
    topicTag: 'Đọc hiểu - Thông tin KHÔNG có'
  },
  {
    id: 'tp-q7',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BNPL_FINANCING,
    passageTranslation: PASSAGE_BNPL_FINANCING_TRANS,
    questionText: 'Question 7. The word "overlapping" in paragraph 1 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'frequent', translation: 'thường xuyên' },
      { id: 'B', text: 'continuous', translation: 'liên tục' },
      { id: 'C', text: 'separate', translation: 'tách biệt / riêng rẽ' },
      { id: 'D', text: 'parallel', translation: 'song song' }
    ],
    correctAnswer: 'C',
    explanation: '• C. separate - ĐÚNG: "Overlapping" (chồng chéo) TRÁI NGHĨA với "separate" (tách biệt/riêng rẽ).',
    translation: 'Từ "overlapping" trong đoạn 1 TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'tp-q8',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BNPL_FINANCING,
    passageTranslation: PASSAGE_BNPL_FINANCING_TRANS,
    questionText: 'Question 8. The word "their" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'older groups', translation: 'các nhóm tuổi lớn hơn' },
      { id: 'B', text: 'struggling families', translation: 'các gia đình đang khó khăn' },
      { id: 'C', text: 'young adults between eighteen and twenty-four', translation: 'thanh niên từ mười tám đến hai mươi tư tuổi' },
      { id: 'D', text: 'these programs', translation: 'các chương trình này' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: "Young adults between eighteen and twenty-four... represent a bigger portion of their total debts".',
    translation: 'Từ "their" trong đoạn 2 quy chiếu đến nhóm đối tượng nào?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'tp-q9',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BNPL_FINANCING,
    passageTranslation: PASSAGE_BNPL_FINANCING_TRANS,
    questionText: 'Question 9. The word "invisible" in paragraph 3 could be best replaced by:',
    options: [
      { id: 'A', text: 'uncertain', translation: 'không chắc chắn' },
      { id: 'B', text: 'flexible', translation: 'linh hoạt' },
      { id: 'C', text: 'temporary', translation: 'tạm thời' },
      { id: 'D', text: 'undetected', translation: 'không bị phát hiện / không thấy được' }
    ],
    correctAnswer: 'D',
    explanation: '• D. undetected - ĐÚNG: "Invisible in the credit system" đồng nghĩa với "undetected" (không bị phát hiện/ghi nhận).',
    translation: 'Từ "invisible" trong đoạn 3 có thể được thay thế tốt nhất bởi từ nào?',
    topicTag: 'Đọc hiểu - Từ đồng nghĩa'
  },
  {
    id: 'tp-q10',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BNPL_FINANCING,
    passageTranslation: PASSAGE_BNPL_FINANCING_TRANS,
    questionText: 'Question 10. Which of the following best paraphrases the underlined sentence in paragraph 4 ("Although authorities previously tried classifying providers under existing protection laws, recent statements showed reduced enforcement plans")?',
    options: [
      { id: 'A', text: 'Government agencies avoided regulating these companies but now propose stronger controls.', translation: 'Các cơ quan chính phủ đã tránh điều tiết các công ty...' },
      { id: 'B', text: 'Regulators attempted categorizing these services before, yet recently indicated weaker oversight.', translation: 'Các cơ quan quản lý trước đây đã cố phân loại các dịch vụ này, nhưng gần đây cho thấy sự giám sát yếu hơn.' },
      { id: 'C', text: 'Authorities successfully classified payment providers while currently increasing monitoring efforts.', translation: 'Các nhà chức trách đã phân loại thành công...' },
      { id: 'D', text: 'Officials once tried regulating providers, but now plan stricter enforcement measures.', translation: 'Các quan chức từng cố gắng điều tiết nhưng nay lên kế hoạch nghiêm ngặt hơn.' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Paraphrase diễn đạt chính xác: "previously tried classifying" = "attempted categorizing before", "reduced enforcement plans" = "indicated weaker oversight".',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn 4?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'tp-q11',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BNPL_FINANCING,
    passageTranslation: PASSAGE_BNPL_FINANCING_TRANS,
    questionText: 'Question 11. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Default rates exceed credit card failure rates among comparable customer groups.', translation: 'Tỷ lệ vỡ nợ vượt quá tỷ lệ vỡ nợ thẻ tín dụng.' },
      { id: 'B', text: 'Companies regularly report contract information to standard credit monitoring agencies nationwide.', translation: 'Các công ty thường xuyên báo cáo hợp đồng...' },
      { id: 'C', text: 'Most users manage many overlapping contracts from various service providers simultaneously.', translation: 'Phần lớn người dùng quản lý nhiều hợp đồng chồng chéo từ nhiều nhà cung cấp cùng lúc.' },
      { id: 'D', text: 'These payment programs primarily serve as an alternative to conventional methods for most users.', translation: 'Các chương trình này chủ yếu đóng vai trò thay thế...' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Khớp với dữ kiện 65% ở đoạn 1 ("managing overlapping deals from different companies").',
    translation: 'Phát biểu nào dưới đây là ĐÚNG theo nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin Đúng/Sai'
  },
  {
    id: 'tp-q12',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BNPL_FINANCING,
    passageTranslation: PASSAGE_BNPL_FINANCING_TRANS,
    questionText: 'Question 12. In which paragraph does the writer mention why low default rates might be misleading?',
    options: [
      { id: 'A', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'B', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'C', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'D', text: 'Paragraph 2', translation: 'Đoạn 2' }
    ],
    correctAnswer: 'B',
    explanation: '• B. Paragraph 3 - ĐÚNG: Đoạn 3 giải thích hệ thống thanh toán tự động có thể che giấu (hide) khó khăn tài chính, làm cho tỷ lệ nợ xấu thấp bị hiểu lầm.',
    translation: 'Trong đoạn nào tác giả đề cập đến lý do tại sao tỷ lệ vỡ nợ thấp có thể gây hiểu lầm?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },
  {
    id: 'tp-q13',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_BNPL_FINANCING,
    passageTranslation: PASSAGE_BNPL_FINANCING_TRANS,
    questionText: 'Question 13. In which paragraph does the writer mention why young adults are particularly vulnerable to these services?',
    options: [
      { id: 'A', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'B',
    explanation: '• B. Paragraph 2 - ĐÚNG: Đoạn 2 nêu rõ thanh niên 18-24 phụ thuộc nặng nề vào các chương trình này và nợ chiếm tỷ trọng lớn.',
    translation: 'Trong đoạn nào tác giả đề cập đến lý do thanh niên đặc biệt dễ bị ảnh hưởng bởi các dịch vụ này?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },

  // SECTION 3: WILDLIFE BRIDGES (Q14 - Q23)
  {
    id: 'tp-q14',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 14. Where in paragraph 1 does the following sentence best fit: "Global conservation experts are, therefore, reconsidering the large-scale wildlife protection investments."',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[IV]', translation: 'Vị trí [IV]' },
      { id: 'C', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'D', text: '[III]', translation: 'Vị trí [III]' }
    ],
    correctAnswer: 'B',
    explanation: '• B. [IV] - ĐÚNG: Vị trí [IV] ở cuối đoạn 1 là kết luận hợp lý sau khi nêu trở ngại [I], số lượng voi giảm 35% [II] và gây chấn động cộng đồng bảo tồn [III].',
    translation: 'Trong bài đọc, câu "Global conservation experts are, therefore, reconsidering..." nằm ở vị trí nào là phù hợp nhất?',
    topicTag: 'Đọc hiểu - Chèn câu vào vị trí thích hợp'
  },
  {
    id: 'tp-q15',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 15. The phrase "playing Russian roulette" in paragraph 2 could be best replaced by:',
    options: [
      { id: 'A', text: 'taking serious risks', translation: 'đối mặt với rủi ro nghiêm trọng / mạo hiểm lớn' },
      { id: 'B', text: 'responding to emergencies', translation: 'ứng phó với trường hợp khẩn cấp' },
      { id: 'C', text: 'posing great threats', translation: 'gây ra mối đe dọa lớn' },
      { id: 'D', text: 'representing constant hazards', translation: 'đại diện cho mối nguy thường trực' }
    ],
    correctAnswer: 'A',
    explanation: '• A. taking serious risks - ĐÚNG: "Playing Russian roulette" là thành ngữ chỉ việc chấp nhận rủi ro cực lớn tính mạng.',
    translation: 'Cụm từ "playing Russian roulette" trong đoạn 2 có thể được thay thế tốt nhất bởi cụm từ nào?',
    topicTag: 'Đọc hiểu - Thành ngữ (Idioms)'
  },
  {
    id: 'tp-q16',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 16. The word "their" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'the findings', translation: 'các phát hiện' },
      { id: 'B', text: 'consequences', translation: 'các hệ quả' },
      { id: 'C', text: 'interventions', translation: 'các sự can thiệp' },
      { id: 'D', text: 'conservationists', translation: 'các nhà bảo tồn' }
    ],
    correctAnswer: 'D',
    explanation: '• D. conservationists - ĐÚNG: "conservationists wringing their hands over... their well-intentioned interventions" (các nhà bảo tồn vò đầu bứt tai về can thiệp của họ).',
    translation: 'Từ "their" trong đoạn 3 quy chiếu đến từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'tp-q17',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 17. According to the passage, which of the following is NOT mentioned as a consequence of wildlife corridors?',
    options: [
      { id: 'A', text: 'Modification of animal behavior', translation: 'Sự thay đổi hành vi của động vật' },
      { id: 'B', text: 'Disruption of ecosystem balance', translation: 'Sự phá vỡ cân bằng hệ sinh thái' },
      { id: 'C', text: 'Impact on local economies', translation: 'Tác động lên kinh tế địa phương' },
      { id: 'D', text: 'Increased poaching incidents', translation: 'Sự gia tăng các vụ săn trộm' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG (là câu KHÔNG được đề cập): Bài đọc không đề cập trực tiếp đến việc phá vỡ cân bằng hệ sinh thái (disruption of ecosystem balance).',
    translation: 'Theo bài đọc, điều nào dưới đây KHÔNG được đề cập là một hệ quả của các hành lang động vật hoang dã?',
    topicTag: 'Đọc hiểu - Chi tiết KHÔNG có'
  },
  {
    id: 'tp-q18',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 18. Which of the following best summarizes paragraph 4?',
    options: [
      { id: 'A', text: 'Financial support mechanisms prove inadequate for community sustainability.', translation: 'Cơ chế hỗ trợ tài chính không đủ cho sự bền vững...' },
      { id: 'B', text: 'Communities experience financial hardships due to conservation management strategies.', translation: 'Cộng đồng trải qua khó khăn tài chính...' },
      { id: 'C', text: 'Conservation projects burden local communities with economic challenges.', translation: 'Các dự án bảo tồn đặt gánh nặng và thách thức kinh tế lên cộng đồng địa phương.' },
      { id: 'D', text: 'Economic compensation programs fail while traditional practices face a steady decline.', translation: 'Chương trình bồi thường thất bại...' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Tóm tắt bao quát nhất ý chính đoạn 4 về gánh nặng kinh tế của các dự án bảo tồn đối với dân địa phương.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất nội dung của đoạn 4?',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn văn'
  },
  {
    id: 'tp-q19',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 19. Which of the following best paraphrases the underlined sentence in paragraph 5 ("Rather than imposing artificial corridors, they propose integrating wildlife passage into existing human infrastructure")?',
    options: [
      { id: 'A', text: 'Scientists intend to substitute incorporating animal crossing into present infrastructure for building separate routes.', translation: 'Các nhà khoa học có ý định thay việc xây dựng tuyến riêng...' },
      { id: 'B', text: 'By incorporating wildlife crossing into current infrastructure, we eliminate the need for separate artificial corridors.', translation: 'Bằng cách tích hợp đường qua của động vật, chúng ta loại bỏ nhu cầu...' },
      { id: 'C', text: 'The integration of wildlife passages with existing human infrastructure must replace the creation of artificial corridors.', translation: 'Việc tích hợp đường đi động vật phải thay thế việc tạo hành lang...' },
      { id: 'D', text: 'Conservationists advocate for adapting current human structures to include wildlife crossing over creating separate corridors.', translation: 'Các nhà bảo tồn ủng hộ việc điều chỉnh hạ tầng hiện có của con người để bao gồm các lối qua của động vật thay vì tạo ra các hành lang riêng biệt.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Diễn đạt lại chính xác nhất ý của câu gốc ("advocate for adapting current human structures over creating separate corridors").',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn 5?',
    topicTag: 'Đọc hiểu - Viết lại câu'
  },
  {
    id: 'tp-q20',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 20. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Malaysia infrastructure projects have sparked controversy about wildlife integration.', translation: 'Các dự án hạ tầng ở Malaysia gây tranh cãi...' },
      { id: 'B', text: 'Local authorities are implementing rigid controls on agricultural and industrial development.', translation: 'Chính quyền áp dụng kiểm soát cứng nhắc đối với công nghiệp...' },
      { id: 'C', text: 'Traditional farming practices deteriorate under increasingly strict conservation measures.', translation: 'Tập quán canh tác suy thoái dần...' },
      { id: 'D', text: 'Elevated highways with natural underpasses create beneficial outcomes for stakeholders.', translation: 'Các đường cao tốc trên cao với đường ngầm tự nhiên tạo ra kết quả có lợi cho các bên liên quan.' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Khớp với thông tin đoạn 5 về mô hình ở Malaysia ("elevated highways incorporate natural underpasses... win-win situation for all stakeholders").',
    translation: 'Phát biểu nào dưới đây là ĐÚNG theo nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin Đúng/Sai'
  },
  {
    id: 'tp-q21',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 21. The word "unabated" in the last paragraph is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'persistent', translation: 'kiên trì / không ngừng' },
      { id: 'B', text: 'reduced', translation: 'đã giảm bớt / suy giảm' },
      { id: 'C', text: 'constant', translation: 'liên tục' },
      { id: 'D', text: 'confined', translation: 'bị giới hạn' }
    ],
    correctAnswer: 'B',
    explanation: '• B. reduced - ĐÚNG: "Unabated" (không suy giảm) TRÁI NGHĨA với "reduced" (đã giảm bớt).',
    translation: 'Từ "unabated" trong đoạn cuối TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'tp-q22',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 22. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Protected pathways between fragmented habitats become more vulnerable to poaching activities over time.', translation: 'Các lối đi được bảo vệ giữa các môi trường sống bị chia cắt ngày càng dễ bị săn trộm theo thời gian.' },
      { id: 'B', text: 'Areas surrounding artificially created wildlife corridors experience increased rates of human-wildlife territorial conflict.', translation: 'Khu vực xung quanh hành lang nhân tạo có tỷ lệ xung đột cao hơn.' },
      { id: 'C', text: 'Conservation projects integrating natural passages with human structures are the most effective in wildlife movement.', translation: 'Các dự án tích hợp lối đi tự nhiên là hiệu quả nhất.' },
      { id: 'D', text: 'Traditional conservation approaches lead to higher implementation costs when compared to integrated infrastructure.', translation: 'Bảo tồn truyền thống có chi phí cao hơn.' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Suy luận từ thông tin thợ săn trộm đã nắm bắt được tuyến di cư có thể đoán trước của hành lang nhân tạo.',
    translation: 'Điều nào dưới đây có thể được suy luận ra từ nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'tp-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_WILDLIFE_BRIDGES,
    passageTranslation: PASSAGE_WILDLIFE_BRIDGES_TRANS,
    questionText: 'Question 23. Which of the following best summarizes the passage?',
    options: [
      { id: 'A', text: 'Wildlife corridors projects demonstrate unintended consequences for local communities, requiring fundamental shift toward integrated conservation methods.', translation: 'Dự án hành lang thể hiện hệ quả ngoài ý muốn...' },
      { id: 'B', text: 'Modern conservation approaches must navigate the delicate balance between wildlife protection and human development while addressing the limitations of traditional corridor-based solutions.', translation: 'Các phương pháp bảo tồn hiện đại phải cân bằng tinh tế giữa bảo vệ động vật hoang dã và phát triển con người đồng thời giải quyết những hạn chế của hành lang truyền thống.' },
      { id: 'C', text: 'Traditional wildlife corridors face mounting challenging from poaching activities, leading conservation experts to explore technologically integrated solutions for species protection.', translation: 'Hành lang truyền thống đối mặt thử thách săn trộm...' },
      { id: 'D', text: 'The Greater Mekong Project reveals hidden limitations of conventional conservation approaches, pushing biologists to abandon traditional methods and adopt new agricultural approach.', translation: 'Dự án Mê Kông Lớn cho thấy hạn chế...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Tóm tắt trọn vẹn và đầy đủ nhất tư tưởng bài viết về sự cân bằng giữa bảo tồn và phát triển.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất toàn bộ bài đọc?',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài (Main Idea)'
  },

  // SECTION 4: REORDERING (Q24 - Q28) - NO PASSAGE
  {
    id: 'tp-q24',
    type: 'reordering',
    questionText: 'Question 24. Choose the correct order of sentences to make a meaningful paragraph:\na. On a personal level, the search for belonging takes people not only to internet chat rooms, clubs, and coffee shops but also to work, which seems to offer a ready-made community.\nb. In a world of increased individualism and globalisation, many of us are seeking a sense of belonging somewhere or to someone.\nc. Psychologically speaking, work satisfies our basic instinct to relate to other individuals, and to society.\nd. Gossip sessions, lazy conversations and shared moments remind employees that they belong to something bigger than themselves — thus the workplace fulfils a fundamental human need.\ne. Work is a gateway to a social network, to friends, and to a community.',
    options: [
      { id: 'A', text: 'e - b - a - c - d', translation: 'Trật tự: e -> b -> a -> c -> d' },
      { id: 'B', text: 'e - d - a - c - b', translation: 'Trật tự: e -> d -> a -> c -> b' },
      { id: 'C', text: 'e - a - b - d - c', translation: 'Trật tự: e -> a -> b -> d -> c' },
      { id: 'D', text: 'e - c - a - b - d', translation: 'Trật tự: e -> c -> a -> b -> d' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (e - b - a - c - d): Mở đầu bằng vai trò tổng quan của công việc (e) -> Đặt bối cảnh xã hội (b) -> Cụ thể hóa nhu cầu thuộc về nơi làm việc (a) -> Giải thích tâm lý (c) -> Kết luận bằng ví dụ đời sống công sở (d).',
    translation: 'Sắp xếp các câu thành đoạn văn hoàn chỉnh về ý nghĩa xã hội của công việc:\na. Ở mức độ cá nhân, việc tìm kiếm cảm giác thuộc về đưa con người không chỉ đến phòng chat, CLB, quán cà phê mà còn đến nơi làm việc, nơi cung cấp một cộng đồng có sẵn.\nb. Trong một thế giới ngày càng theo chủ nghĩa cá nhân và toàn cầu hóa, nhiều người đang tìm kiếm cảm giác thuộc về một nơi nào đó hoặc một ai đó.\nc. Về mặt tâm lý, công việc thỏa mãn bản năng cơ bản của chúng ta là kết nối với các cá nhân khác và xã hội.\nd. Các buổi tán gẫu, trò chuyện thong thả và khoảnh khắc chia sẻ nhắc nhở nhân viên rằng họ thuộc về một điều gì đó lớn hơn bản thân họ — do đó nơi làm việc đáp ứng nhu cầu cơ bản của con người.\ne. Công việc là cánh cổng dẫn đến mạng lưới xã hội, bạn bè và cộng đồng.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'tp-q25',
    type: 'reordering',
    questionText: 'Question 25. Choose the correct order of dialogue sentences:\na. Colin: Well, in that case we have to do something! How about organising a weekend away for everyone? Maybe we could go camping.\nb. Amanda: Mmm, good question. He says he doesn\'t like birthdays and doesn\'t want to do anything special, but it is his 21st …\nc. Colin: Amanda, I\'ve been meaning to ask you, are we going to do anything for Ken\'s birthday?\nd. Amanda: We could … but I was thinking of something a little less complicated, only because Ken won\'t want us to make a big deal of his birthday.\ne. Colin: Got it, yes. Then what about throwing a surprise party at my house?',
    options: [
      { id: 'A', text: 'c - b - e - d - a', translation: 'Trật tự: c -> b -> e -> d -> a' },
      { id: 'B', text: 'a - b - e - d - c', translation: 'Trật tự: a -> b -> e -> d -> c' },
      { id: 'C', text: 'c - b - a - d - e', translation: 'Trật tự: c -> b -> a -> d -> e' },
      { id: 'D', text: 'a - d - c - b - e', translation: 'Trật tự: a -> d -> c -> b -> e' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG (c - b - a - d - e): Colin hỏi về sinh nhật Ken (c) -> Amanda trả lời Ken không thích rầm rộ (b) -> Colin đề xuất đi cắm trại (a) -> Amanda muốn đơn giản hơn (d) -> Colin chốt tiệc bất ngờ tại nhà (e).',
    translation: 'Sắp xếp các câu hội thoại thảo luận tổ chức sinh nhật:\na. Colin: Vậy thì chúng ta phải làm gì đó thôi! Hay là tổ chức chuyến đi cuối tuần cho mọi người? Có thể đi cắm trại.\nb. Amanda: Ùm, câu hỏi hay đấy. Cậu ấy nói không thích sinh nhật và không muốn làm gì đặc biệt, nhưng đó là sinh nhật lần thứ 21…\nc. Colin: Amanda, tớ định hỏi cậu, chúng ta có định làm gì cho sinh nhật Ken không?\nd. Amanda: Chúng ta có thể… nhưng tớ nghĩ đến điều gì đó ít phức tạp hơn, chỉ vì Ken sẽ không muốn chúng ta làm quá lên nhân sinh nhật cậu ấy.\ne. Colin: Hiểu rồi. Vậy thì tổ chức một buổi tiệc bất ngờ tại nhà tớ thì sao?',
    topicTag: 'Sắp xếp hội thoại (Dialogue Structure)'
  },
  {
    id: 'tp-q26',
    type: 'reordering',
    questionText: 'Question 26. Choose the correct order of letter sentences:\na. Starting work now could be a great option, as it would give you the chance to gain real-world experience, develop useful skills, earn money, and become more independent.\nb. Ultimately, trust your instincts - there\'s no one-size-fits-all answer, and the important thing is finding what makes you happy and fulfilled.\nc. Given your friendly and outgoing personality, I think customer service roles, such as working in a café, as a sales assistant, or even in event planning, could be a great start.\nd. I was so glad to get your letter, and I totally understand the dilemma you\'re facing about whether to go to college or start working.\ne. Honestly, I have a feeling that college may not be the best fit for you, as you\'ve always been more of a hands-on, practical learner.',
    options: [
      { id: 'A', text: 'd - e - a - c - b', translation: 'Trật tự: d -> e -> a -> c -> b' },
      { id: 'B', text: 'd - a - c - e - b', translation: 'Trật tự: d -> a -> c -> e -> b' },
      { id: 'C', text: 'e - c - a - d - b', translation: 'Trật tự: e -> c -> a -> d -> b' },
      { id: 'D', text: 'c - d - e - a - b', translation: 'Trật tự: c -> d -> e -> a -> b' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG (d - e - a - c - b): Mở thư thấu hiểu nỗi lo (d) -> Đưa nhận xét cá nhân (e) -> Đề xuất phương án đi làm (a) -> Cụ thể hóa công việc phù hợp tính cách (c) -> Lời khuyên kết thư (b).',
    translation: 'Sắp xếp câu trong bức thư tư vấn định hướng sự nghiệp:\na. Bắt đầu đi làm ngay có thể là lựa chọn tuyệt vời, vì nó cho bạn cơ hội tích lũy kinh nghiệm thực tế, phát triển kỹ năng có ích, kiếm tiền và trở nên độc lập hơn.\nb. Cuối cùng, hãy tin vào bản năng của bạn - không có câu trả lời chung cho tất cả mọi người, điều quan trọng là tìm thấy điều làm bạn hạnh phúc và mãn nguyện.\nc. Với tính cách thân thiện và cởi mở của bạn, tớ nghĩ các vị trí dịch vụ khách hàng như làm việc tại quán cà phê, nhân viên bán hàng hoặc lập kế hoạch sự kiện sẽ là khởi đầu tuyệt vời.\nd. Tớ rất vui khi nhận được thư của bạn, và tớ hoàn toàn hiểu sự phân vân của bạn về việc nên học đại học hay bắt đầu đi làm.\ne. Thành thật mà nói, tớ có cảm giác đại học có thể không phải là nơi phù hợp nhất với bạn, vì bạn luôn là người học theo phong cách thực hành và thực tế.',
    topicTag: 'Sắp xếp thư tư vấn'
  },
  {
    id: 'tp-q27',
    type: 'reordering',
    questionText: 'Question 27. Choose the correct order of dialogue sentences:\na. Noel: Goodness, no. I\'m just here for some meetings today. I can\'t stand London!\nb. Becky: Hi, Noel, what a surprise, how lovely to see you. Do you live here in London?\nc. Noel: Rebecca? I thought it was you! Gosh, I haven\'t seen you since university. You look great.',
    options: [
      { id: 'A', text: 'c - a - b', translation: 'Trật tự: c -> a -> b' },
      { id: 'B', text: 'c - b - a', translation: 'Trật tự: c -> b -> a' },
      { id: 'C', text: 'a - c - b', translation: 'Trật tự: a -> c -> b' },
      { id: 'D', text: 'a - b - c', translation: 'Trật tự: a - b -> c' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG (c - b - a): Noel nhận ra bạn cũ thời đại học (c) -> Becky chào lại và hỏi xem Noel có sống ở London không (b) -> Noel giải thích chỉ tới họp (a).',
    translation: 'Sắp xếp hội thoại gặp lại bạn cũ:\na. Noel: Trời ơi, không đâu. Tớ chỉ ở đây để dự vài cuộc họp hôm nay thôi. Tớ không chịu nổi London!\nb. Becky: Chào Noel, bất ngờ quá, thật vui được gặp lại cậu. Cậu có sống ở London không?\nc. Noel: Rebecca? Tớ nghĩ đúng là cậu rồi! Trời ơi, tớ chưa gặp lại cậu từ thời đại học. Cậu trông tuyệt lắm.',
    topicTag: 'Sắp xếp hội thoại ngắn'
  },
  {
    id: 'tp-q28',
    type: 'reordering',
    questionText: 'Question 28. Choose the correct order of sentences to make a meaningful paragraph:\na. Mass wasting, simply put, is the movement of surface rock and debris down a slope as a result of gravity.\nb. Many people think hurricanes and tornadoes are the most destructive forces on Earth.\nc. Overseas, catastrophes triggered by mass wasting have killed tens to hundreds of thousands of people in seconds.\nd. It is responsible for approximately $2 billion worth of damage and dozens of deaths annually in the United States.\ne. However, an equally destructive force is at work every day: mass wasting.',
    options: [
      { id: 'A', text: 'b - a - e - d - c', translation: 'Trật tự: b -> a -> e -> d -> c' },
      { id: 'B', text: 'b - d - a - e - c', translation: 'Trật tự: b -> d -> a -> e -> c' },
      { id: 'C', text: 'b - e - a - d - c', translation: 'Trật tự: b -> e -> a -> d -> c' },
      { id: 'D', text: 'd - b - e - a - c', translation: 'Trật tự: d -> b -> e -> a -> c' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG (b - e - a - d - c): Nêu quan niệm phổ biến về bão lốc (b) -> Bác bỏ và giới thiệu "mass wasting" (e) -> Định nghĩa khái niệm (a) -> Đưa số liệu thiệt hại ở Mỹ (d) -> Mở rộng thiệt hại toàn cầu (c).',
    translation: 'Sắp xếp các câu thành đoạn văn về thảm họa dịch chuyển khối đất đá (mass wasting):\na. Dịch chuyển khối (mass wasting), nói một cách đơn giản, là sự chuyển động của đá bề mặt và mảnh vụn xuống sườn dốc do tác động của trọng lực.\nb. Nhiều người nghĩ rằng bão nhiệt đới và lốc xoáy là những lực tàn phá khủng khiếp nhất trên Trái Đất.\nc. Ở nước ngoài, các thảm họa do dịch chuyển khối gây ra đã làm hàng chục đến hàng trăm nghìn người thiệt mạng trong vài giây.\nd. Nó gây ra thiệt hại trị giá khoảng 2 tỷ đô la và hàng chục ca tử vong mỗi năm ở Hoa Kỳ.\ne. Tuy nhiên, một lực tàn phá tương tự cũng đang hoạt động hàng ngày: dịch chuyển khối.',
    topicTag: 'Sắp xếp đoạn văn khoa học'
  },

  // SECTION 5: CLOZE LEAFLET - AIR CLEANING (Q29 - Q34)
  {
    id: 'tp-q29',
    type: 'cloze_test',
    readingPassage: PASSAGE_AIR_CLEANING,
    passageTranslation: PASSAGE_AIR_CLEANING_TRANS,
    questionText: 'Question 29. Fill in blank (29):',
    options: [
      { id: 'A', text: 'dedicate', translation: 'dành riêng (V-bare)' },
      { id: 'B', text: 'dedicated', translation: 'được dành riêng (V-ed rút gọn bị động)' },
      { id: 'C', text: 'to dedicate', translation: 'để dành riêng (To-V)' },
      { id: 'D', text: 'dedicating', translation: 'dành riêng (V-ing)' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Rút gọn mệnh đề quan hệ dạng bị động: "innovations (which are) dedicated to air cleaning...".',
    translation: 'Chủ nhà sống trong kỷ nguyên công nghệ với nhiều phát minh (29) ____________ cho việc làm sạch không khí.',
    topicTag: 'Rút gọn mệnh đề quan hệ bị động'
  },
  {
    id: 'tp-q30',
    type: 'cloze_test',
    readingPassage: PASSAGE_AIR_CLEANING,
    passageTranslation: PASSAGE_AIR_CLEANING_TRANS,
    questionText: 'Question 30. Fill in blank (30):',
    options: [
      { id: 'A', text: 'expanding', translation: 'mở rộng diện tích' },
      { id: 'B', text: 'exceeding', translation: 'vượt quá số lượng' },
      { id: 'C', text: 'extending', translation: 'kéo dài (extending lifespan: kéo dài tuổi thọ)' },
      { id: 'D', text: 'exserting', translation: 'nhô ra (không hợp ngữ cảnh)' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Collocation "extending the lifespan" nghĩa là kéo dài tuổi thọ thiết bị.',
    translation: 'Đạt chất lượng không khí tốt đồng thời (30) ____________ tuổi thọ của thiết bị.',
    topicTag: 'Collocation (Extend lifespan)'
  },
  {
    id: 'tp-q31',
    type: 'cloze_test',
    readingPassage: PASSAGE_AIR_CLEANING,
    passageTranslation: PASSAGE_AIR_CLEANING_TRANS,
    questionText: 'Question 31. Fill in blank (31):',
    options: [
      { id: 'A', text: 'naturalist', translation: 'nhà tự nhiên học (Danh từ)' },
      { id: 'B', text: 'nature', translation: 'thiên nhiên (Danh từ)' },
      { id: 'C', text: 'natural', translation: 'tính từ' },
      { id: 'D', text: 'naturally', translation: 'một cách tự nhiên (Trạng từ bổ nghĩa cho V-ing cleaning)' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Trạng từ "naturally" bổ nghĩa cho danh động từ "cleaning".',
    translation: 'Máy lọc không khí là công cụ hữu ích để làm sạch bầu không khí một cách (31) ____________.',
    topicTag: 'Từ loại (Trạng từ bổ nghĩa V-ing)'
  },
  {
    id: 'tp-q32',
    type: 'cloze_test',
    readingPassage: PASSAGE_AIR_CLEANING,
    passageTranslation: PASSAGE_AIR_CLEANING_TRANS,
    questionText: 'Question 32. Fill in blank (32):',
    options: [
      { id: 'A', text: 'multiple', translation: 'nhiều (multiple devices: nhiều thiết bị)' },
      { id: 'B', text: 'considerable', translation: 'đáng kể (dùng cho lượng không đếm được)' },
      { id: 'C', text: 'plentiful', translation: 'dồi dào (dùng cho tài nguyên)' },
      { id: 'D', text: 'abundant', translation: 'phong phú / dư dả' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "multiple + N số nhiều" chỉ số lượng nhiều thiết bị đếm được.',
    translation: 'Bạn có thể cần mua (32) ____________ thiết bị tùy theo kích thước nhà.',
    topicTag: 'Lượng từ & Từ chỉ số lượng'
  },
  {
    id: 'tp-q33',
    type: 'cloze_test',
    readingPassage: PASSAGE_AIR_CLEANING,
    passageTranslation: PASSAGE_AIR_CLEANING_TRANS,
    questionText: 'Question 33. Fill in blank (33):',
    options: [
      { id: 'A', text: 'breeding potential ground', translation: 'sai trật tự từ' },
      { id: 'B', text: 'ground breeding potential', translation: 'sai trật tự từ' },
      { id: 'C', text: 'potential ground breeding', translation: 'sai trật tự từ' },
      { id: 'D', text: 'potential breeding ground', translation: 'nơi sinh sôi tiềm tàng' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Trật tự cụm danh từ chuẩn: [Tính từ] + [Danh từ ghép] -> "potential breeding ground".',
    translation: 'Ngôi nhà ẩm ướt là một (33) ____________ cho nấm mốc.',
    topicTag: 'Trật tự từ trong cụm danh từ'
  },
  {
    id: 'tp-q34',
    type: 'cloze_test',
    readingPassage: PASSAGE_AIR_CLEANING,
    passageTranslation: PASSAGE_AIR_CLEANING_TRANS,
    questionText: 'Question 34. Fill in blank (34):',
    options: [
      { id: 'A', text: 'giving off', translation: 'tỏa ra (mùi/nhiệt)' },
      { id: 'B', text: 'breaking down', translation: 'hỏng hóc / phân hủy' },
      { id: 'C', text: 'locking in', translation: 'khóa lại bên trong' },
      { id: 'D', text: 'drawing out', translation: 'rút ra / hút ra (hơi ẩm)' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: "drawing out moisture" nghĩa là rút/hút hơi ẩm ra khỏi không khí.',
    translation: 'Máy hút ẩm tập trung vào việc (34) ____________ hơi ẩm khỏi không khí.',
    topicTag: 'Phrasal Verbs (Động từ ghép)'
  },

  // SECTION 6: CLOZE ADVERTISEMENT - OUTSCHOOL (Q35 - Q40)
  {
    id: 'tp-q35',
    type: 'cloze_test',
    readingPassage: PASSAGE_OUTSCHOOL,
    passageTranslation: PASSAGE_OUTSCHOOL_TRANS,
    questionText: 'Question 35. Fill in blank (35):',
    options: [
      { id: 'A', text: 'quantity', translation: 'số lượng đo lường' },
      { id: 'B', text: 'level', translation: 'cấp độ' },
      { id: 'C', text: 'amount', translation: 'lượng (dùng cho N không đếm được)' },
      { id: 'D', text: 'variety', translation: 'sự đa dạng (a wide variety of)' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cụm từ cố định "a wide variety of" nhấn mạnh sự đa dạng về khóa học và giáo viên.',
    translation: 'Học theo cách riêng của mình với sự (35) ____________ phong phú nhất về giáo viên và chủ đề.',
    topicTag: 'Collocation (A wide variety of)'
  },
  {
    id: 'tp-q36',
    type: 'cloze_test',
    readingPassage: PASSAGE_OUTSCHOOL,
    passageTranslation: PASSAGE_OUTSCHOOL_TRANS,
    questionText: 'Question 36. Fill in blank (36):',
    options: [
      { id: 'A', text: 'are teaching', translation: 'đang dạy (Hiện tại tiếp diễn)' },
      { id: 'B', text: 'have taught', translation: 'đã dạy (Hiện tại hoàn thành đi với Since 2015)' },
      { id: 'C', text: 'taught', translation: 'đã dạy (Quá khứ đơn)' },
      { id: 'D', text: 'teach', translation: 'dạy (Hiện tại đơn)' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Với mốc thời gian "Since 2015", ta dùng thì Hiện tại hoàn thành (have taught).',
    translation: 'Kể từ năm 2015, các giáo viên chuyên gia của chúng tôi (36) ____________ hơn 1,5 triệu học viên.',
    topicTag: 'Thì Hiện tại hoàn thành (Since)'
  },
  {
    id: 'tp-q37',
    type: 'cloze_test',
    readingPassage: PASSAGE_OUTSCHOOL,
    passageTranslation: PASSAGE_OUTSCHOOL_TRANS,
    questionText: 'Question 37. Fill in blank (37):',
    options: [
      { id: 'A', text: 'moreover', translation: 'hơn nữa' },
      { id: 'B', text: 'therefore', translation: 'do đó' },
      { id: 'C', text: 'likewise', translation: 'tương tự như vậy' },
      { id: 'D', text: 'however', translation: 'tuy nhiên (chỉ sự đối lập)' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: "however" thể hiện sự đối lập: không yêu cầu bằng cấp NHƯNG vẫn có các điều kiện cần đáp ứng.',
    translation: 'Chúng tôi không yêu cầu bằng cấp chính thức. Tuy nhiên, chúng tôi (37) ____________ có các yêu cầu cần đáp ứng.',
    topicTag: 'Trạng từ liên kết (However)'
  },
  {
    id: 'tp-q38',
    type: 'cloze_test',
    readingPassage: PASSAGE_OUTSCHOOL,
    passageTranslation: PASSAGE_OUTSCHOOL_TRANS,
    questionText: 'Question 38. Fill in blank (38):',
    options: [
      { id: 'A', text: 'fulfill', translation: 'đáp ứng / hoàn thành (fulfill requirements)' },
      { id: 'B', text: 'carry', translation: 'mang / vác' },
      { id: 'C', text: 'follow', translation: 'làm theo' },
      { id: 'D', text: 'apply', translation: 'nộp đơn / áp dụng' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Collocation "fulfill requirements" nghĩa là đáp ứng các yêu cầu đề ra.',
    translation: 'Có một số yêu cầu mà giáo viên cần (38) ____________ để trở thành giáo viên.',
    topicTag: 'Collocation (Fulfill requirements)'
  },
  {
    id: 'tp-q39',
    type: 'cloze_test',
    readingPassage: PASSAGE_OUTSCHOOL,
    passageTranslation: PASSAGE_OUTSCHOOL_TRANS,
    questionText: 'Question 39. Fill in blank (39):',
    options: [
      { id: 'A', text: 'on', translation: 'trên' },
      { id: 'B', text: 'of', translation: 'của' },
      { id: 'C', text: 'in', translation: 'trong' },
      { id: 'D', text: 'to', translation: 'với (link A to B: kết nối A với B)' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cấu trúc "link A to B" nghĩa là kết nối đối tượng A với đối tượng B.',
    translation: 'Đạt được điều này bằng cách kết nối việc học (39) ____________ sở thích của trẻ.',
    topicTag: 'Giới từ đi với Động từ (Link to)'
  },
  {
    id: 'tp-q40',
    type: 'cloze_test',
    readingPassage: PASSAGE_OUTSCHOOL,
    passageTranslation: PASSAGE_OUTSCHOOL_TRANS,
    questionText: 'Question 40. Fill in blank (40):',
    options: [
      { id: 'A', text: 'autonomy', translation: 'quyền tự chủ (autonomy to pick paths)' },
      { id: 'B', text: 'democracy', translation: 'nền dân chủ' },
      { id: 'C', text: 'ability', translation: 'khả năng' },
      { id: 'D', text: 'identity', translation: 'danh tính / bản sắc' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: "autonomy" nghĩa là quyền tự chủ, giúp trẻ tự do lựa chọn con đường riêng.',
    translation: 'Trao cho các em (40) ____________ để tự chọn con đường riêng.',
    topicTag: 'Từ vựng chủ đề Giáo dục'
  }
];

export const THAI_PHIEN_2026_EXAM: ExamSet = {
  id: 'exam-thai-phien-2026',
  title: 'Đề Thi Thử THPT 2026 - Trường THPT Thái Phiên - Hải Phòng (Lần 3)',
  description: 'Đề thi chính thức THPT Thái Phiên - Hải Phòng gồm trọn bộ 40 câu trắc nghiệm chuẩn cấu trúc 2026 kèm lời giải chi tiết & bản dịch.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'THÁI PHIÊN HẢI PHÒNG 2026',
  iconName: 'Award',
  questions: THAI_PHIEN_2026_QUESTIONS
};
