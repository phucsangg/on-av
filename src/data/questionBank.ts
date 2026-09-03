import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_ANNOUNCEMENT = `Wildlife Photographer of the Year – People’s Choice 2026
The Wildlife Photographer of the Year exhibition, <mark>(1) ____________</mark> will run from March to July 2026 at the Natural History Museum in London, is expected to attract thousands of visitors from around the world. This internationally acclaimed event brings together works from <mark>(2) ____________</mark> wildlife photographers across the globe, highlighting both artistic excellence and environmental awareness.

Visitors will gain exposure to a diverse <mark>(3) ____________</mark> of award-winning photographs, from dramatic landscapes to close-up portraits of endangered species. The exhibition also includes interactive displays <mark>(4) ____________</mark> by experienced curators and conservation experts. This event is a valuable opportunity for families, students, and photography lovers to learn about biodiversity and make a contribution to the <mark>(5) ____________</mark> of nature. Don’t forget to <mark>(6) ____________</mark> information on the website for early booking due to high public interest.
(Adapted from https://www.theguardian.com)`;

const PASSAGE_ANNOUNCEMENT_TRANS = `Triển triển Nhiếp ảnh Gia Động vật Hoang dã của Năm – Bình chọn của Công chúng 2026
Triển lãm Nhiếp ảnh Gia Động vật Hoang dã của Năm, mà (1) sẽ diễn ra từ tháng 3 đến tháng 7 năm 2026 tại Bảo tàng Lịch sử Tự nhiên ở London, được dự đoán sẽ thu hút hàng nghìn du khách từ khắp nơi trên thế giới. Sự kiện danh tiếng quốc tế này quy tụ các tác phẩm của những nhiếp ảnh gia động vật hoang dã lừng danh (2) trên toàn cầu, làm nổi bật cả sự xuất sắc về nghệ thuật lẫn ý thức bảo vệ môi trường.

Khách tham quan sẽ được tiếp cận với một tuyển chọn (3) đa dạng các bức ảnh đoạt giải, từ những phong cảnh ấn tượng đến các bức chân dung cận cảnh của những loài đang bị đe dọa. Triển lãm cũng bao gồm các khu trưng bày tương tác được tổ chức (4) bởi các giám tuyển giàu kinh nghiệm và các chuyên gia bảo tồn. Sự kiện này là một cơ hội quý giá cho các gia đình, học sinh và những người yêu nhiếp ảnh tìm hiểu về đa dạng sinh học và đóng góp vào việc bảo tồn (5) thiên nhiên. Đừng quên tra cứu (6) thông tin trên trang web để đặt chỗ sớm do sự quan tâm lớn từ công chúng.`;

const PASSAGE_LEAFLET = `How to Protect Our Environment?
Protecting the environment is the responsibility of not only governments but also <mark>(7) ____________</mark> individual in the community. In today’s rapidly changing world, environmental problems are becoming more serious and visible. Small daily actions can make a big <mark>(8) ____________</mark> in protecting our planet for future generations. For example, you can reduce waste by using reusable bags and bottles instead of single-use plastic items.

Another important step is to support local businesses that promote <mark>(9) ____________</mark> and sustainable farming methods in your area. In addition, switching off electrical devices when they are not <mark>(10) ____________</mark> use helps cut down on energy consumption at home and in the workplace.

You should also encourage other people around you to take part in community clean-up <mark>(11) ____________</mark> and environmental workshops, <mark>(12) ____________</mark> these activities help raise awareness and build a greener, more sustainable future for everyone.
(Adapted from EcoTips – Tips for environmental protection - fws.gov)`;

const PASSAGE_LEAFLET_TRANS = `Làm Thế Nào Để Bảo Vệ Môi Trường Của Chúng Ta?
Bảo vệ môi trường là trách nhiệm không chỉ của chính phủ mà còn của mỗi (7) cá nhân trong cộng đồng. Trong thế giới đang thay đổi nhanh chóng ngày nay, các vấn đề môi trường ngày càng trở nên nghiêm trọng và rõ rệt hơn. Những hành động nhỏ hằng ngày có thể tạo ra sự khác biệt (8) lớn trong việc bảo vệ hành tinh của chúng ta cho các thế hệ tương lai. Ví dụ, bạn có thể giảm rác thải bằng cách sử dụng túi và chai tái sử dụng thay vì các sản phẩm nhựa dùng một lần.

Một bước quan trọng khác là ủng hộ các doanh nghiệp địa phương thúc đẩy các sản phẩm thân thiện với môi trường (9) và các phương pháp canh tác bền vững trong khu vực của bạn. Ngoài ra, việc tắt các thiết bị điện khi chúng không đang được sử dụng (10) giúp giảm mức tiêu thụ năng lượng tại nhà và nơi làm việc.

Bạn cũng nên khuyến khích những người xung quanh tham gia vào các chiến dịch (11) dọn dẹp cộng đồng và các hội thảo về môi trường, bởi vì (12) những hoạt động này giúp nâng cao nhận thức và xây dựng một tương lai xanh hơn, bền vững hơn cho tất cả mọi người.`;

const PASSAGE_CULTURAL_DIVERSITY = `Cultural Diversity in the Workplace
Cultural diversity in the workplace is becoming more important as businesses expand globally. People from different cultural backgrounds bring unique perspectives, ideas, and experiences, <mark>(18) ____________</mark>. A diverse team offers a range of skills, which allows companies to solve problems more creatively. <mark>(19) ____________</mark>, they can learn from each other's experiences, bringing about more open-minded and adaptable individuals. This can create a more dynamic and productive work environment, improving overall team performance.

However, cultural diversity also brings challenges. <mark>(20) ____________</mark>. Employees may struggle to work together effectively if they do not understand each other's cultural backgrounds. To address these challenges, companies need to foster a supportive environment that encourages respect and inclusion. Training programs that teach cultural awareness can help employees better understand their colleagues' perspectives and working methods. In addition, promoting open communication and organizing team-building activities <mark>(21) ____________</mark>.

In conclusion, cultural diversity in the office provides many benefits, but it requires effort from both employers and employees to make it work effectively. By embracing cultural differences and fostering an inclusive workplace, companies can create an environment where all employees feel valued and respected. <mark>(22) ____________</mark>. A diverse and inclusive office culture helps build a positive work environment and enhances overall performance, leading to long-term growth and success.
(Adapted from THINK)`;

const PASSAGE_CULTURAL_DIVERSITY_TRANS = `Sự Đa Dạng Văn Hóa Nơi Công Sở
Sự đa dạng văn hóa trong môi trường làm việc ngày càng trở nên quan trọng khi các doanh nghiệp mở rộng ra toàn cầu. Những người đến từ các nền văn hóa khác nhau mang đến những góc nhìn, ý tưởng và trải nghiệm độc đáo, (18) dẫn đến các giải pháp sáng tạo và việc ra quyết định tốt hơn. Một đội ngũ đa dạng cung cấp nhiều kỹ năng khác nhau, cho phép các công ty giải quyết vấn đề một cách sáng tạo hơn. (19) Khi các nhân viên đến từ nhiều nền văn hóa khác nhau hợp tác, họ có thể học hỏi từ trải nghiệm của nhau, từ đó trở nên cởi mở và linh hoạt hơn. Điều này có thể tạo ra một môi trường làm việc năng động và hiệu quả hơn, cải thiện hiệu suất chung của nhóm.

Tuy nhiên, sự đa dạng văn hóa cũng mang lại những thách thức. (20) Sự khác biệt về phong cách giao tiếp, đạo đức làm việc và giá trị có thể dẫn đến xung đột hoặc hiểu lầm. Nhân viên có thể gặp khó khăn khi làm việc cùng nhau một cách hiệu quả nếu họ không hiểu rõ nền tảng văn hóa của nhau. Để giải quyết những thách thức này, các công ty cần xây dựng một môi trường hỗ trợ, khuyến khích sự tôn trọng và hòa nhập. Các chương trình đào tạo về nhận thức văn hóa có thể giúp nhân viên hiểu rõ hơn về quan điểm và phương pháp làm việc của đồng nghiệp. Ngoài ra, việc thúc đẩy giao tiếp cởi mở và tổ chức các hoạt động xây dựng đội nhóm (21) có thể củng cố các mối quan hệ và giảm khả năng xảy ra xung đột.

Tóm lại, sự đa dạng văn hóa tại nơi làm việc mang lại nhiều lợi ích, nhưng đòi hỏi nỗ lực từ cả người sử dụng lao động và nhân viên để hoạt động hiệu quả. Bằng cách chấp nhận sự khác biệt văn hóa và xây dựng một môi trường làm việc hòa nhập, các công ty có thể tạo ra một môi trường nơi tất cả nhân viên đều cảm thấy được coi trọng và tôn trọng. (22) Điều này không chỉ cải thiện tinh thần làm việc nhóm mà còn góp phần vào thành công của công ty. Một văn hóa công sở đa dạng và hòa nhập giúp xây dựng môi trường làm việc tích cực và nâng cao hiệu suất tổng thể, dẫn đến sự phát triển và thành công lâu dài.`;

const PASSAGE_OCEAN_TIDES = `Every drop of water in the ocean, even in the deepest parts, responds to the forces that create the tides. No other force that affects the sea is so strong. <mark>Compared with the tides, the waves created by the wind are surface movements felt no more than a hundred fathoms below the surface.</mark> The currents also seldom involve more than the upper several hundred fathoms despite <mark>their</mark> impressive sweep.

The tides are a response of the waters of the ocean to the pull of the Moon and the more distant Sun. In theory, there is a gravitational attraction between the water and even the outermost star of the universe. In reality, however, the pull of remote stars is so slight as to be <mark>obliterated</mark> by the control of the Moon and, to a lesser extent, the Sun.

Just as the Moon rises later each day by fifty minutes, on the average, so, in most places, the time of high tide is <mark>correspondingly</mark> later each day. And as the Moon waxes and wanes in its monthly cycle, so the height of the tide varies.

The tidal movements are strongest when the Moon is a sliver in the sky, and when it is full. These are the highest flood tides and the lowest ebb tides of the lunar month and are called the spring tides. At these times the Sun, Moon, and Earth are nearly in line and the pull of the two heavenly bodies is added together to bring the water high on the beaches, to send its surf upward against the sea cliffs, and to draw a high tide into the harbors. Twice each month, at the quarters of the moon, when the Sun, Moon and Earth lie at the apexes of a triangular configuration and the pull of the Sun and Moon are opposed, the moderate tidal movements called neap tides occur. Then the difference between high and low water is less than at any other time during the month.
(Adapted from TOEFL reading)`;

const PASSAGE_OCEAN_TIDES_TRANS = `Mỗi giọt nước trong đại dương, ngay cả ở những vùng sâu thẳm nhất, đều chịu tác động của các lực tạo nên thủy triều. Không có lực nào khác ảnh hưởng đến biển lại mạnh mẽ đến vậy. So với thủy triều, những con sóng do gió tạo ra chỉ là các chuyển động bề mặt, chỉ cảm nhận được ở độ sâu không quá một trăm sải nước dưới mặt biển. Các dòng hải lưu cũng hiếm khi tác động xuống quá vài trăm sải nước phía trên, mặc dù phạm vi lan tỏa của chúng rất rộng lớn.

Thủy triều là phản ứng của nước biển trước lực hút của Mặt Trăng và, ở mức độ kém hơn, của Mặt Trời ở khoảng cách xa hơn. Về mặt lý thuyết, tồn tại lực hấp dẫn giữa nước biển và cả những ngôi sao xa xôi nhất trong vũ trụ. Tuy nhiên, trên thực tế, lực hút của các ngôi sao xa xôi này quá yếu đến mức bị triệt tiêu bởi sự chi phối của Mặt Trăng và, ở mức độ thấp hơn, của Mặt Trời.

Cũng như việc Mặt Trăng mỗi ngày mọc muộn hơn trung bình khoảng năm mươi phút, thì ở hầu hết các nơi, thời điểm thủy triều dâng cao cũng lùi lại tương ứng mỗi ngày. Và cũng như Mặt Trăng tròn dần rồi khuyết dần theo chu kỳ hàng tháng, độ cao của thủy triều cũng biến đổi theo.

Chuyển động thủy triều mạnh nhất khi Mặt Trăng chỉ là một mảnh lưỡi liềm trên bầu trời và khi nó tròn đầy. Đây là những đợt triều dâng cao nhất và triều rút thấp nhất trong tháng âm lịch, được gọi là triều cường. Vào những thời điểm này, Mặt Trời, Mặt Trăng và Trái Đất gần như nằm trên một đường thẳng, nên lực hút của hai thiên thể được cộng hưởng, khiến nước dâng cao lên bờ biển, đẩy sóng biển vỗ mạnh vào các vách đá ven biển và đưa mực nước triều cao tràn vào các cảng. Hai lần mỗi tháng, vào các kỳ bán nguyệt, khi Mặt Trời, Mặt Trăng và Trái Đất nằm ở các đỉnh của một cấu hình hình tam giác và lực hút của Mặt Trời và Mặt Trăng đối nghịch nhau, sẽ xuất hiện các chuyển động thủy triều ôn hòa gọi là triều kém. Khi đó, chênh lệch giữa mực nước triều lên và triều xuống là nhỏ nhất trong tháng.`;

const PASSAGE_FAST_FASHION = `Fast fashion's appeal rests on speed and novelty, but the costs are dispersed across oceans and atmospheres. <mark style="background: #ea580c; color: #fff; box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);">[I]</mark> Polyester-heavy garments leach microfibers during washing; dye effluents overwhelm rivers near manufacturing hubs; and overproduction ensures that surplus inventory becomes landfill fodder or is incinerated. Brands tout capsule "conscious" lines, yet throughput targets remain <mark>unaltered</mark>, meaning marginal efficiency gains are swamped by absolute volume, perpetuating systemic environmental degradation and deepening long-term ecological inequities worldwide. Such dynamics reveal a production model structurally predicated on acceleration and disposability, wherein ecological costs are externalized, regulatory asymmetries persist across borders, and vulnerable populations remain disproportionately exposed to the cumulative burdens of extraction, pollution, and climate volatility.

Supply chains, optimized for immediacy, rely on subcontracting lattices that outstrip public oversight. <mark style="background: #ea580c; color: #fff; box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);">[II]</mark> When price points race downward, environmental externalities and labor protections are the first to be shaved off. Claims of circularity, absent durable design and infrastructure for large-scale recirculation, are marketing gloss rather than material transformation. Meanwhile, the logistics of reverse supply – collection, sorting, fiber-to-fiber recycling – struggle to keep pace with the <mark>torrent</mark> of low-grade blends that resist reprocessing, thereby perpetuating systemic waste, obscuring accountability, and delaying substantive structural reform across the industry. This persistent lag between extraction and recovery underscores how efficiency rhetoric masks structural imbalances, allowing production to expand unchecked while remediation systems remain chronically underfunded, technologically constrained, and institutionally fragmented across jurisdictions.

Consumer behavior complicates any remedy. <mark style="background: #ea580c; color: #fff; box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);">[III]</mark> Social-media cycles fetishize perpetual newness, converting wardrobes into content pipelines; discount platforms train shoppers to treat clothes as near-disposable. Policy can counteract <mark>these</mark> incentives – extended producer responsibility, eco-modulated fees, and right-to-repair rules – but enforcement gaps and jurisdictional patchworks dilute impact. Retailers experiment with rental and resale, only to discover that additional channels often cannibalize quality while leaving aggregate volume largely intact, suggesting that without recalibrating demand itself, incremental reforms risk being absorbed by the very growth dynamics they seek to restrain and ultimately failing to curb the sector’s escalating material footprint.

What endures, then, beyond seasonal campaigns, is a structural arithmetic. <mark style="background: #ea580c; color: #fff; box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);">[IV]</mark> <mark>Without binding caps on production and credible emissions accounting, sustainability talk risks net-greenwashing: relative improvements advertised as planetary salvation.</mark> The sector’s outsized water draw, chemical intensity, and fossil-fuel dependency cannot be reconciled with breakneck turnover unless growth becomes materially decoupled from throughput – a prospect that, so far, appears aspirational rather than achieved, and one that demands coordinated regulatory resolve, transparent metrics, and a fundamental reorientation of value away from volume-driven expansion toward genuine long-term ecological stability.
(Adapted from Earth.org, "Fast Fashion and Its Environmental Impact in 2025")`;

const PASSAGE_FAST_FASHION_TRANS = `Sức hấp dẫn của “thời trang nhanh” dựa trên tốc độ và sự mới lạ, nhưng cái giá phải trả lại bị phân tán khắp các đại dương và bầu khí quyển. [I] Các loại quần áo chứa nhiều polyester thải ra vi sợi trong quá trình giặt; nước thải nhuộm làm quá tải các con sông gần các trung tâm sản xuất; và việc sản xuất dư thừa khiến hàng tồn kho trở thành rác chôn lấp hoặc bị đốt bỏ. Các thương hiệu quảng bá những dòng sản phẩm “có ý thức” theo dạng bộ sưu tập giới hạn, nhưng mục tiêu sản lượng vẫn không thay đổi, đồng nghĩa với việc những cải thiện hiệu quả nhỏ lẻ bị lấn át bởi quy mô sản xuất tuyệt đối, từ đó kéo dài sự suy thoái môi trường mang tính hệ thống và làm trầm trọng thêm bất bình đẳng sinh thái dài hạn trên toàn cầu...

Các chuỗi cung ứng, được tối ưu hóa cho tính tức thời, dựa vào những mạng lưới gia công phụ vượt ngoài khả năng giám sát của công chúng. [II] Khi mức giá bị đẩy xuống thấp, các chi phí môi trường và bảo vệ lao động là những yếu tố đầu tiên bị cắt giảm. Những tuyên bố về tính tuần hoàn, nếu thiếu thiết kế bền vững và hạ tầng cho việc tái lưu thông quy mô lớn, chỉ là lớp vỏ tiếp thị chứ không phải sự chuyển đổi thực chất...

Hành vi của người tiêu dùng khiến mọi giải pháp trở nên phức tạp hơn. [III] Chu kỳ mạng xã hội tôn sùng sự mới mẻ liên tục, biến tủ quần áo thành nguồn tạo nội dung; các nền tảng giảm giá khiến người mua xem quần áo gần như là đồ dùng một lần...

Điều còn lại, vượt lên trên các chiến dịch theo mùa, là một phép tính mang tính cấu trúc. [IV] Nếu không có các giới hạn ràng buộc đối với sản lượng và hệ thống hạch toán phát thải đáng tin cậy, những lời nói về phát triển bền vững có nguy cơ trở thành “tẩy xanh ròng”: những cải thiện tương đối được quảng bá như cứu tinh cho hành tinh...`;

export const TUYEN_QUANG_2026_QUESTIONS: Question[] = [
  // SECTION 1: ANNOUNCEMENT (Q1 - Q6)
  {
    id: 'tq-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 1. Fill in blank (1):',
    options: [
      { id: 'A', text: 'who', translation: 'người mà (thay cho người)' },
      { id: 'B', text: 'which', translation: 'cái mà (thay cho vật)' },
      { id: 'C', text: 'whose', translation: 'của ai (chỉ sở hữu)' },
      { id: 'D', text: 'that', translation: 'người/vật mà' }
    ],
    correctAnswer: 'B',
    explanation: '• A. who – SAI: Đại từ quan hệ thay thế cho danh từ chỉ người, trong khi "exhibition" là vật.\n• B. which – ĐÚNG: Đại từ quan hệ thay thế cho danh từ chỉ vật ("exhibition") và đứng sau dấu phẩy trong mệnh đề quan hệ không xác định.\n• C. whose – SAI: Dùng chỉ sở hữu.\n• D. that – SAI: "that" không đứng sau dấu phẩy.',
    translation: 'Triển lãm Nhiếp ảnh Gia Động vật Hoang dã của Năm, (1) ____________ sẽ diễn ra từ tháng 3 đến tháng 7 năm 2026...',
    topicTag: 'Mệnh đề quan hệ'
  },
  {
    id: 'tq-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 2. Fill in blank (2):',
    options: [
      { id: 'A', text: 'renowned', translation: 'lừng danh / nổi tiếng' },
      { id: 'B', text: 'notorious', translation: 'tai tiếng (nổi tiếng vì xấu)' },
      { id: 'C', text: 'dominant', translation: 'chiếm ưu thế' },
      { id: 'D', text: 'technical', translation: 'thuộc về kỹ thuật' }
    ],
    correctAnswer: 'A',
    explanation: '• A. renowned – ĐÚNG: Tính từ mang nghĩa "nổi tiếng, lừng danh" (theo nghĩa tích cực), phù hợp ngữ cảnh các nhiếp ảnh gia lừng danh.\n• B. notorious – SAI: Tai tiếng (nổi tiếng vì điều xấu).\n• C. dominant – SAI: Chiếm ưu thế.\n• D. technical – SAI: Thuộc về kỹ thuật.',
    translation: 'Quy tụ các tác phẩm của những nhiếp ảnh gia động vật hoang dã (2) ____________ trên toàn cầu.',
    topicTag: 'Từ vựng - Tính từ'
  },
  {
    id: 'tq-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 3. Fill in blank (3):',
    options: [
      { id: 'A', text: 'technique', translation: 'kỹ thuật' },
      { id: 'B', text: 'structure', translation: 'cấu trúc' },
      { id: 'C', text: 'process', translation: 'quá trình / quy trình' },
      { id: 'D', text: 'selection', translation: 'sự tuyển chọn / bộ sưu tập chọn lọc' }
    ],
    correctAnswer: 'D',
    explanation: '• A. technique – SAI: Kỹ thuật.\n• B. structure – SAI: Cấu trúc.\n• C. process – SAI: Quá trình.\n• D. selection – ĐÚNG: Cụm "A selection of" (một sự tuyển chọn/danh mục các...) dùng cho các bức ảnh trưng bày.',
    translation: 'Khách tham quan sẽ được tiếp cận với một (3) ____________ đa dạng các bức ảnh đoạt giải.',
    topicTag: 'Collocation'
  },
  {
    id: 'tq-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 4. Fill in blank (4):',
    options: [
      { id: 'A', text: 'organizing', translation: 'đang tổ chức (chủ động)' },
      { id: 'B', text: 'organized', translation: 'được tổ chức (bị động)' },
      { id: 'C', text: 'organize', translation: 'tổ chức (nguyên thể)' },
      { id: 'D', text: 'to organise', translation: 'để tổ chức' }
    ],
    correctAnswer: 'B',
    explanation: '• A. organizing – SAI: Dạng chủ động.\n• B. organized – ĐÚNG: Rút gọn mệnh đề quan hệ ở dạng bị động (which are organized -> organized).\n• C, D – SAI dạng động từ.',
    translation: 'Các màn trưng bày tương tác được (4) ____________ bởi các giám tuyển giàu kinh nghiệm.',
    topicTag: 'Rút gọn mệnh đề bị động'
  },
  {
    id: 'tq-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 5. Fill in blank (5):',
    options: [
      { id: 'A', text: 'conservation', translation: 'sự bảo tồn (danh từ)' },
      { id: 'B', text: 'conserve', translation: 'bảo tồn (động từ)' },
      { id: 'C', text: 'conservative', translation: 'bảo thủ / bảo tồn (tính từ)' },
      { id: 'D', text: 'conservationist', translation: 'nhà bảo tồn (danh từ người)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. conservation – ĐÚNG: Danh từ "sự bảo tồn", đứng sau "the" và bổ nghĩa cho "of nature".\n• B. conserve – Động từ.\n• C. conservative – Tính từ.\n• D. conservationist – Danh từ chỉ người.',
    translation: 'Đóng góp vào việc (5) ____________ thiên nhiên.',
    topicTag: 'Từ loại (Word Formation)'
  },
  {
    id: 'tq-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_ANNOUNCEMENT,
    passageTranslation: PASSAGE_ANNOUNCEMENT_TRANS,
    questionText: 'Question 6. Fill in blank (6):',
    options: [
      { id: 'A', text: 'look up', translation: 'tra cứu thông tin' },
      { id: 'B', text: 'give up', translation: 'từ bỏ' },
      { id: 'C', text: 'take off', translation: 'cất cánh / cởi đồ' },
      { id: 'D', text: 'get in', translation: 'đi vào / bước vào' }
    ],
    correctAnswer: 'A',
    explanation: '• A. look up – ĐÚNG: Tra cứu thông tin.\n• B. give up – Từ bỏ.\n• C. take off – Cất cánh/cởi đồ.\n• D. get in – Đi vào.',
    translation: 'Đừng quên (6) ____________ thông tin trên trang web để đặt chỗ sớm.',
    topicTag: 'Phrasal Verbs'
  },

  // SECTION 2: LEAFLET (Q7 - Q12)
  {
    id: 'tq-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_LEAFLET,
    passageTranslation: PASSAGE_LEAFLET_TRANS,
    questionText: 'Question 7. Fill in blank (7):',
    options: [
      { id: 'A', text: 'many', translation: 'nhiều (đi với danh từ số nhiều)' },
      { id: 'B', text: 'every', translation: 'mỗi / mọi (đi với danh từ số ít)' },
      { id: 'C', text: 'all', translation: 'tất cả (đi với số nhiều/không đếm được)' },
      { id: 'D', text: 'another', translation: 'một cái khác' }
    ],
    correctAnswer: 'B',
    explanation: '• A. many - Đi với danh từ số nhiều.\n• B. every - ĐÚNG: Đi với danh từ số ít ("individual"), mang nghĩa "mỗi/mọi cá nhân".\n• C. all - Đi với số nhiều/không đếm được.\n• D. another - Một cái khác.',
    translation: 'Bảo vệ môi trường là trách nhiệm không chỉ của chính phủ mà còn của (7) ____________ cá nhân.',
    topicTag: 'Lượng từ (Quantifiers)'
  },
  {
    id: 'tq-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_LEAFLET,
    passageTranslation: PASSAGE_LEAFLET_TRANS,
    questionText: 'Question 8. Fill in blank (8):',
    options: [
      { id: 'A', text: 'difference', translation: 'sự khác biệt' },
      { id: 'B', text: 'effort', translation: 'nỗ lực' },
      { id: 'C', text: 'arrangement', translation: 'sự sắp xếp' },
      { id: 'D', text: 'choice', translation: 'sự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• A. difference - ĐÚNG: Cụm từ "make a big difference" (tạo ra sự khác biệt lớn).\n• B. effort - Nỗ lực (thường đi với make an effort).\n• C. arrangement - Sự sắp xếp.\n• D. choice - Sự lựa chọn.',
    translation: 'Những hành động nhỏ hằng ngày có thể tạo ra (8) ____________ lớn.',
    topicTag: 'Collocation'
  },
  {
    id: 'tq-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_LEAFLET,
    passageTranslation: PASSAGE_LEAFLET_TRANS,
    questionText: 'Question 9. Fill in blank (9):',
    options: [
      { id: 'A', text: 'environmentally friendly products', translation: 'các sản phẩm thân thiện với môi trường' },
      { id: 'B', text: 'friendly environmentally products', translation: 'sản phẩm thân thiện môi trường (sai trật tự)' },
      { id: 'C', text: 'products environmentally friendly', translation: 'sản phẩm thân thiện môi trường (sai trật tự)' },
      { id: 'D', text: 'environmentally products friendly', translation: 'sản phẩm thân thiện môi trường (sai trật tự)' }
    ],
    correctAnswer: 'A',
    explanation: '• A. environmentally friendly products - ĐÚNG: Trật tự cụm danh từ "Trạng từ + Tính từ + Danh từ" (Trạng từ bổ nghĩa tính từ, tính từ bổ nghĩa danh từ).',
    translation: 'Ủng hộ các doanh nghiệp địa phương thúc đẩy (9) ____________.',
    topicTag: 'Trật tự từ trong cụm danh từ'
  },
  {
    id: 'tq-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_LEAFLET,
    passageTranslation: PASSAGE_LEAFLET_TRANS,
    questionText: 'Question 10. Fill in blank (10):',
    options: [
      { id: 'A', text: 'at', translation: 'tại' },
      { id: 'B', text: 'in', translation: 'trong / ở' },
      { id: 'C', text: 'on', translation: 'trên' },
      { id: 'D', text: 'of', translation: 'của' }
    ],
    correctAnswer: 'B',
    explanation: '• B. in - ĐÚNG: Cụm từ cố định "in use" (đang được sử dụng).',
    translation: 'Tắt các thiết bị điện khi chúng không đang (10) ____________ sử dụng.',
    topicTag: 'Giới từ (Prepositions)'
  },
  {
    id: 'tq-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_LEAFLET,
    passageTranslation: PASSAGE_LEAFLET_TRANS,
    questionText: 'Question 11. Fill in blank (11):',
    options: [
      { id: 'A', text: 'campaigns', translation: 'các chiến dịch' },
      { id: 'B', text: 'operations', translation: 'các hoạt động / ca mổ' },
      { id: 'C', text: 'missions', translation: 'các nhiệm vụ' },
      { id: 'D', text: 'drives', translation: 'các đợt vận động' }
    ],
    correctAnswer: 'A',
    explanation: '• A. campaigns - ĐÚNG: "Clean-up campaigns" (các chiến dịch dọn dẹp môi trường).',
    translation: 'Tham gia vào các (11) ____________ dọn dẹp cộng đồng.',
    topicTag: 'Từ vựng môi trường'
  },
  {
    id: 'tq-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_LEAFLET,
    passageTranslation: PASSAGE_LEAFLET_TRANS,
    questionText: 'Question 12. Fill in blank (12):',
    options: [
      { id: 'A', text: 'although', translation: 'mặc dù' },
      { id: 'B', text: 'because', translation: 'bởi vì' },
      { id: 'C', text: 'however', translation: 'tuy nhiên' },
      { id: 'D', text: 'therefore', translation: 'do đó' }
    ],
    correctAnswer: 'B',
    explanation: '• A. although - Mặc dù (đối lập).\n• B. because - ĐÚNG: Bởi vì (chỉ nguyên nhân giải thích lý do nên tham gia).\n• C. however - Tuy nhiên.\n• D. therefore - Do đó.',
    translation: 'Tham gia các hội thảo môi trường, bởi vì (because) những hoạt động này giúp nâng cao nhận thức.',
    topicTag: 'Liên từ (Conjunctions)'
  },

  // SECTION 3: SENTENCE REORDERING (Q13 - Q17) - NO PASSAGES AT ALL!
  {
    id: 'tq-q13',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of utterances to make a cohesive exchange:

a. Patient: Thank you, doctor. I’ll follow your instructions.
b. Doctor: You have a mild flu. Take these tablets twice a day and drink plenty of water.
c. Patient: Good morning doctor, I’ve been having a headache and fever since yesterday.`,
    options: [
      { id: 'A', text: 'c – b – a' },
      { id: 'B', text: 'c – a – b' },
      { id: 'C', text: 'b – c – a' },
      { id: 'D', text: 'a – b – c' }
    ],
    correctAnswer: 'A',
    explanation: 'Thứ tự hội thoại chuẩn:\n1. (c) Bệnh nhân chào và nêu triệu chứng bệnh.\n2. (b) Bác sĩ chẩn đoán và dặn dò uống thuốc.\n3. (a) Bệnh nhân cảm ơn và lắng nghe theo hướng dẫn.',
    translation: 'Dịch nghĩa các câu hội thoại:\na. Bệnh nhân: Cảm ơn bác sĩ. Tôi sẽ làm theo hướng dẫn.\nb. Bác sĩ: Bạn bị cảm nhẹ. Uống thuốc này 2 lần một ngày và uống nhiều nước.\nc. Bệnh nhân: Chào bác sĩ, tôi bị đau đầu và sốt từ hôm qua.',
    topicTag: 'Sắp xếp hội thoại (Communication)'
  },
  {
    id: 'tq-q14',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of sentences:

a. Alice: I’m planning a trip to Da Nang to see the Golden Bridge. How about you?
b. Alice: That sounds relaxing! I heard the weather there is perfect this time of year.
c. Bob: I’m going to Da Lat. I want to enjoy the cool air and visit the flower gardens.
d. Bob: Hi Alice. Have you decided on your destination for the summer holiday yet?
e. Bob: Yes, it is. It’s the best place to escape the summer heat.`,
    options: [
      { id: 'A', text: 'd – c – a – b – e' },
      { id: 'B', text: 'd – a – c – b – e' },
      { id: 'C', text: 'a – c – b – e – d' },
      { id: 'D', text: 'a – d – c – b – e' }
    ],
    correctAnswer: 'B',
    explanation: 'Thứ tự đoạn hội thoại:\n- (d) Bob hỏi về điểm đến nghỉ hè.\n- (a) Alice trả lời (Đà Nẵng) và hỏi lại Bob.\n- (c) Bob trả lời đi Đà Lạt.\n- (b) Alice nhận xét thời tiết Đà Lạt tuyệt vời.\n- (e) Bob đồng tình.',
    translation: 'Dịch nghĩa các câu hội thoại:\na. Alice: Mình định đi Đà Nẵng xem Cầu Vàng. Còn bạn thì sao?\nb. Alice: Nghe thư giãn đấy! Mình nghe nói thời tiết ở đó mùa này rất tuyệt.\nc. Bob: Mình định đi Đà Lạt. Mình muốn tận hưởng không khí mát mẻ và thăm vườn hoa.\nd. Bob: Chào Alice. Bạn đã quyết định điểm đến nghỉ hè chưa?\ne. Bob: Đúng vậy. Đó là nơi tuyệt nhất để tránh cái nóng mùa hè.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'tq-q15',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of letter sentences:

Dear Sir/Madam,
a. Additionally, through active community participation, we aim to foster environmental responsibility for future generations.
b. To achieve these objectives, the project will include organising educational workshops and implementing a waste management plan.
c. I am writing to propose launching a green initiative in our community to address growing environmental concerns.
d. We look forward to your favourable consideration and support for this initiative.
e. The primary aim of this initiative is to raise environmental awareness and reduce carbon emissions.
Yours faithfully, Nguyen Van An - Project Manager`,
    options: [
      { id: 'A', text: 'c – e – a – b – d' },
      { id: 'B', text: 'c – b – e – a – d' },
      { id: 'C', text: 'e – c – b – a – d' },
      { id: 'D', text: 'e – a – c – b – d' }
    ],
    correctAnswer: 'A',
    explanation: 'Cấu trúc lá thư đề xuất:\n- (c) Mở đầu nêu mục đích viết thư.\n- (e) Nêu mục tiêu chính của dự án.\n- (a) Bổ sung mục tiêu mở rộng ("Additionally").\n- (b) Nêu cách thức tổ chức thực hiện.\n- (d) Câu kết mong đợi sự cân nhắc ủng hộ.',
    translation: 'Dịch nội dung các câu trong lá thư đề xuất:\nKính gửi Ông/Bà,\na. Ngoài ra, thông qua việc tham gia tích cực của cộng đồng, chúng tôi hướng tới thúc đẩy trách nhiệm môi trường cho thế hệ tương lai.\nb. Để đạt được các mục tiêu này, dự án sẽ bao gồm tổ chức các hội thảo giáo dục và triển khai kế hoạch quản lý rác thải.\nc. Tôi viết thư này để đề xuất khởi xướng một sáng kiến xanh trong cộng đồng để giải quyết các mối quan ngại môi trường.\nd. Chúng tôi mong nhận được sự cân nhắc ủng hộ từ ông/bà cho sáng kiến này.\ne. Mục tiêu chính của sáng kiến này là nâng cao nhận thức môi trường và giảm phát thải carbon.\nTrân trọng, Nguyễn Văn An - Quản lý dự án',
    topicTag: 'Sắp xếp đoạn văn / Lá thư'
  },
  {
    id: 'tq-q16',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of paragraph sentences:

a. Additionally, smart appliances simplify household tasks, allowing more time for family and leisure.
b. Smart homes integrate technology to improve comfort, efficiency, and security in residential living.
c. Overall, smart homes represent a transformative advancement in how we experience and interact with our living spaces.
d. Smart thermostats and lighting systems contribute to energy savings, while smart locks and cameras enhance security.
e. Utilising devices connected to the Internet of Things (IoT), homeowners can control various aspects of their homes remotely.`,
    options: [
      { id: 'A', text: 'c – b – a – e – d' },
      { id: 'B', text: 'b – e – d – a – c' },
      { id: 'C', text: 'b – d – e – c – a' },
      { id: 'D', text: 'c – b – a – d – e' }
    ],
    correctAnswer: 'B',
    explanation: 'Thứ tự đoạn văn về Smart Homes:\n- (b) Câu chủ đề giới thiệu nhà thông minh.\n- (e) Giải thích cách thức vận hành qua IoT.\n- (d) Nêu ví dụ cụ thể về thiết bị (bộ điều nhiệt, khóa thông minh).\n- (a) Nêu thêm lợi ích khác ("Additionally").\n- (c) Câu kết luận tổng hợp ("Overall").',
    translation: 'Dịch nội dung các câu về Nhà thông minh:\na. Ngoài ra, các thiết bị thông minh giúp đơn giản hóa công việc nhà, dành nhiều thời gian hơn cho gia đình.\nb. Nhà thông minh tích hợp công nghệ để cải thiện sự thoải mái, hiệu quả và an ninh.\nc. Nhìn chung, nhà thông minh đại diện cho một bước tiến đột phá trong cách chúng ta trải nghiệm không gian sống.\nd. Bộ điều nhiệt và hệ thống chiếu sáng thông minh góp phần tiết kiệm năng lượng, trong khi khóa thông minh tăng cường an ninh.\ne. Sử dụng các thiết bị kết nối IoT, chủ nhà có thể điều khiển các khía cạnh từ xa.',
    topicTag: 'Sắp xếp đoạn văn (Paragraph Ordering)'
  },
  {
    id: 'tq-q17',
    type: 'grammar',
    questionText: `Mark the letter A, B, C, or D to indicate the best arrangement of paragraph sentences:

a. These limitations have led many educators to question whether examinations alone can accurately reflect a learner's true abilities.
b. Examinations remain one of the most widely used methods of assessment worldwide, verifying whether students are ready to progress to the next stage of education.
c. In response to these concerns, some institutions have introduced alternative forms of evaluation, such as coursework and project-based assessment, to provide a more balanced measure of achievement.
d. Despite their practicality and perceived fairness, exams may encourage superficial learning, as some candidates focus mainly on tested content rather than deep understanding.
e. For this reason, while exams continue to play an important role, they should be carefully designed and supplemented with other assessment methods to ensure greater validity.`,
    options: [
      { id: 'A', text: 'b – d – a – c – e' },
      { id: 'B', text: 'b – a – d – c – e' },
      { id: 'C', text: 'd – b – a – c – e' },
      { id: 'D', text: 'd – b – c – a – e' }
    ],
    correctAnswer: 'A',
    explanation: 'Thứ tự đoạn văn luận về Kỳ thi:\n- (b) Giới thiệu vai trò kỳ thi.\n- (d) Đưa ra mặt hạn chế ("Despite...").\n- (a) Nêu hệ quả ("These limitations...").\n- (c) Nêu giải pháp ("In response...").\n- (e) Đưa ra kết luận ("For this reason...").',
    translation: 'Dịch nội dung các câu về Kỳ thi:\na. Những hạn chế này khiến nhiều nhà giáo dục đặt câu hỏi liệu các kỳ thi có phản ánh chính xác năng lực thật sự.\nb. Kỳ thi vẫn là một trong những phương pháp đánh giá phổ biến nhất toàn cầu.\nc. Để giải quyết các mối quan ngại này, một số tổ chức đã đưa ra các hình thức đánh giá thay thế như bài tập lớn.\nd. Mặc dù có tính thực tiễn, các kỳ thi có thể khuyến khích việc học hời hợt.\ne. Vì lý do này, kỳ thi nên được thiết kế cẩn thận và bổ sung thêm các phương pháp đánh giá khác.',
    topicTag: 'Sắp xếp đoạn văn nghị luận'
  },

  // SECTION 4: CLOZE TEXT (Q18 - Q22)
  {
    id: 'tq-q18',
    type: 'cloze_test',
    readingPassage: PASSAGE_CULTURAL_DIVERSITY,
    passageTranslation: PASSAGE_CULTURAL_DIVERSITY_TRANS,
    questionText: 'Question 18. Fill in blank (18):',
    options: [
      { id: 'A', text: 'leading to innovative solutions and better decision-making', translation: 'dẫn đến các giải pháp sáng tạo và việc ra quyết định tốt hơn (V-ing)' },
      { id: 'B', text: 'that can result in better decision-making and innovative solutions', translation: 'cái mà có thể dẫn đến việc ra quyết định tốt hơn...' },
      { id: 'C', text: 'to which causes better solutions and innovative decision-making', translation: 'cái mà gây ra các giải pháp tốt hơn...' },
      { id: 'D', text: 'led to better decision-making and innovative solutions', translation: 'đã dẫn đến các giải pháp tốt hơn...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Mệnh đề phân từ V-ing (leading to...) rút gọn mệnh đề quan hệ chủ động bổ nghĩa cho cả ý trước.\n• B, C, D: Sai ngữ pháp mệnh đề quan hệ.',
    translation: 'Mang đến những góc nhìn độc đáo, (18) ____________.',
    topicTag: 'Rút gọn mệnh đề quan hệ V-ing'
  },
  {
    id: 'tq-q19',
    type: 'cloze_test',
    readingPassage: PASSAGE_CULTURAL_DIVERSITY,
    passageTranslation: PASSAGE_CULTURAL_DIVERSITY_TRANS,
    questionText: 'Question 19. Fill in blank (19):',
    options: [
      { id: 'A', text: 'In order to collaborate employees from various cultural backgrounds', translation: 'Để hợp tác các nhân viên từ nhiều nền văn hóa...' },
      { id: 'B', text: 'Although employees from various cultural backgrounds collaborate', translation: 'Mặc dù các nhân viên từ nhiều nền văn hóa hợp tác...' },
      { id: 'C', text: 'When employees from various cultural backgrounds collaborate', translation: 'Khi các nhân viên từ nhiều nền văn hóa hợp tác...' },
      { id: 'D', text: 'So long as employers from various cultural backgrounds collaborate', translation: 'Miễn là các nhà tuyển dụng từ nhiều nền văn hóa hợp tác...' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Liên từ "When" chỉ thời gian/điều kiện hợp lý: Khi các nhân viên từ nhiều nền văn hóa hợp tác với nhau, họ có thể học hỏi lẫn nhau.',
    translation: '(19) ____________, họ có thể học hỏi từ trải nghiệm của nhau.',
    topicTag: 'Mệnh đề trạng ngữ chỉ thời gian'
  },
  {
    id: 'tq-q20',
    type: 'cloze_test',
    readingPassage: PASSAGE_CULTURAL_DIVERSITY,
    passageTranslation: PASSAGE_CULTURAL_DIVERSITY_TRANS,
    questionText: 'Question 20. Fill in blank (20):',
    options: [
      { id: 'A', text: 'Differences in communication styles, work ethics, and values can result in conflicts or misunderstandings', translation: 'Sự khác biệt về phong cách giao tiếp, đạo đức làm việc và giá trị có thể dẫn đến xung đột...' },
      { id: 'B', text: 'Differences in communication styles, and values which can cause misunderstandings or conflicts', translation: 'Sự khác biệt về phong cách giao tiếp và giá trị cái mà có thể gây hiểu lầm...' },
      { id: 'C', text: 'Communication styles, work ethics, and value misunderstandings or conflicts can generate differences', translation: 'Phong cách giao tiếp và xung đột giá trị có thể tạo ra sự khác biệt...' },
      { id: 'D', text: 'Work ethic values, communication styles, and misunderstandings can give rise to different conflicts', translation: 'Giá trị đạo đức làm việc và sự hiểu lầm có thể nảy sinh xung đột...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Cấu trúc câu hoàn chỉnh có Chủ ngữ (Differences in...) và Động từ chính (can result in conflicts or misunderstandings).',
    translation: '(20) ____________.',
    topicTag: 'Cấu trúc câu hoàn chỉnh'
  },
  {
    id: 'tq-q21',
    type: 'cloze_test',
    readingPassage: PASSAGE_CULTURAL_DIVERSITY,
    passageTranslation: PASSAGE_CULTURAL_DIVERSITY_TRANS,
    questionText: 'Question 21. Fill in blank (21):',
    options: [
      { id: 'A', text: 'strengthened relationships to reduce the chances of conflict', translation: 'mối quan hệ được củng cố để giảm khả năng xung đột' },
      { id: 'B', text: 'the strengthened relationships help reduce the chances of conflict', translation: 'các mối quan hệ được củng cố giúp giảm khả năng xung đột' },
      { id: 'C', text: 'strengthening relationships to reduce the chances of conflict', translation: 'việc củng cố mối quan hệ để giảm khả năng xung đột' },
      { id: 'D', text: 'can strengthen relationships and reduce the chances of conflict', translation: 'có thể củng cố các mối quan hệ và giảm khả năng xảy ra xung đột' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Cung cấp động từ chính (can strengthen...) phù hợp với chủ ngữ V-ing "promoting open communication and organizing team-building activities".',
    translation: 'Thúc đẩy giao tiếp mở và tổ chức các hoạt động gắn kết nhóm (21) ____________.',
    topicTag: 'Động từ chính của câu'
  },
  {
    id: 'tq-q22',
    type: 'cloze_test',
    readingPassage: PASSAGE_CULTURAL_DIVERSITY,
    passageTranslation: PASSAGE_CULTURAL_DIVERSITY_TRANS,
    questionText: 'Question 22. Fill in blank (22):',
    options: [
      { id: 'A', text: 'Improving teamwork contributes to the company\'s success and productivity', translation: 'Cải thiện làm việc nhóm góp phần vào thành công của công ty' },
      { id: 'B', text: 'This not only improves teamwork but also contributes to the company\'s success', translation: 'Điều này không chỉ cải thiện tinh thần làm việc nhóm mà còn góp phần vào thành công...' },
      { id: 'C', text: 'These improve teamwork so that they contribute to the company\'s success', translation: 'Những điều này cải thiện làm việc nhóm để chúng góp phần...' },
      { id: 'D', text: 'What improves teamwork can contribute to the company\'s success and productivity', translation: 'Điều cải thiện làm việc nhóm có thể góp phần vào...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Đại từ "This" chỉ toàn bộ ý môi trường làm việc ở câu trước, kết hợp cấu trúc liên kết "not only ... but also ...".',
    translation: '(22) ____________.',
    topicTag: 'Liên kết câu (Not only... but also)'
  },

  // SECTION 5: READING COMPREHENSION 1 - OCEAN TIDES (Q23 - Q30)
  {
    id: 'tq-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_OCEAN_TIDES,
    passageTranslation: PASSAGE_OCEAN_TIDES_TRANS,
    questionText: 'Question 23. Which of the following best paraphrases the underlined sentence in paragraph 1 ("Compared with the tides, the waves created by the wind are surface movements felt no more than a hundred fathoms below the surface")?',
    options: [
      { id: 'A', text: 'Unlike tides, wind waves extend to depths exceeding 100 fathoms below the sea surface.', translation: 'Không giống thủy triều, sóng do gió mở rộng tới độ sâu vượt quá 100 sải nước...' },
      { id: 'B', text: 'Unlike tides, wind waves are surface movements felt at depths of no more than 100 fathoms.', translation: 'Không giống như thủy triều, sóng do gió là những chuyển động bề mặt chỉ cảm nhận được ở độ sâu không quá 100 sải nước.' },
      { id: 'C', text: 'Unlike tides, wind waves remain surface movements extending to depths of 100 fathoms.', translation: 'Sóng do gió kéo dài tới độ sâu chính xác 100 sải nước...' },
      { id: 'D', text: 'Compared with tides, wind waves are felt at depths of 100 fathoms below the sea surface.', translation: 'So với thủy triều, sóng do gió cảm nhận được ở độ sâu 100 sải nước...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Paraphrase chính xác câu gốc ("no more than 100 fathoms" = không quá 100 sải nước).',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân ở đoạn 1?',
    topicTag: 'Đọc hiểu - Viết lại câu (Paraphrasing)'
  },
  {
    id: 'tq-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_OCEAN_TIDES,
    passageTranslation: PASSAGE_OCEAN_TIDES_TRANS,
    questionText: 'Question 24. What does the word "their" in paragraph 1 refer to?',
    options: [
      { id: 'A', text: 'tides', translation: 'các đợt thủy triều' },
      { id: 'B', text: 'waves', translation: 'những con sóng' },
      { id: 'C', text: 'fathoms', translation: 'các sải nước (đơn vị đo)' },
      { id: 'D', text: 'currents', translation: 'các dòng hải lưu' }
    ],
    correctAnswer: 'D',
    explanation: '• D. currents - ĐÚNG: Trong câu "The currents also seldom involve... despite their impressive sweep", "their" quy chiếu về danh từ "currents" (các dòng hải lưu).',
    translation: 'Từ "their" ở đoạn 1 quy chiếu đến từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Đại từ quy chiếu'
  },
  {
    id: 'tq-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_OCEAN_TIDES,
    passageTranslation: PASSAGE_OCEAN_TIDES_TRANS,
    questionText: 'Question 25. Which of the following is NOT mentioned in paragraph 2 as a factor influencing ocean tides?',
    options: [
      { id: 'A', text: 'The pull of the Moon', translation: 'Lực hút của Mặt Trăng' },
      { id: 'B', text: 'The pull of the Sun', translation: 'Lực hút của Mặt Trời' },
      { id: 'C', text: 'The attraction of distant stars', translation: 'Lực hấp dẫn của các ngôi sao xa xôi' },
      { id: 'D', text: 'The movement of ocean currents', translation: 'Sự chuyển động của các dòng hải lưu' }
    ],
    correctAnswer: 'D',
    explanation: '• D. ĐÚNG: Sự chuyển động của các dòng hải lưu KHÔNG phải là yếu tố tạo ra hay ảnh hưởng đến thủy triều.',
    translation: 'Yếu tố nào dưới đây KHÔNG được đề cập ở đoạn 2 như một nhân tố ảnh hưởng đến thủy triều?',
    topicTag: 'Đọc hiểu - Thông tin KHÔNG có trong bài'
  },
  {
    id: 'tq-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_OCEAN_TIDES,
    passageTranslation: PASSAGE_OCEAN_TIDES_TRANS,
    questionText: 'Question 26. The word "obliterated" in paragraph 2 mostly means:',
    options: [
      { id: 'A', text: 'strengthened', translation: 'được tăng cường / làm mạnh lên' },
      { id: 'B', text: 'cancelled', translation: 'bị triệt tiêu / xóa bỏ' },
      { id: 'C', text: 'delayed', translation: 'bị hoãn lại' },
      { id: 'D', text: 'revealed', translation: 'bị tiết lộ / bộc lộ' }
    ],
    correctAnswer: 'B',
    explanation: '• B. cancelled (bị triệt tiêu / xóa bỏ) - ĐÚNG: Lực hút các ngôi sao quá yếu nên bị "obliterated" (triệt tiêu) bởi lực hút Mặt Trăng/Mặt Trời.',
    translation: 'Từ "obliterated" trong đoạn 2 có nghĩa gần nhất với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ vựng ngữ cảnh'
  },
  {
    id: 'tq-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_OCEAN_TIDES,
    passageTranslation: PASSAGE_OCEAN_TIDES_TRANS,
    questionText: 'Question 27. The word "correspondingly" in paragraph 3 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'independently', translation: 'một cách độc lập' },
      { id: 'B', text: 'accordingly', translation: 'một cách tương ứng' },
      { id: 'C', text: 'similarly', translation: 'tương tự như vậy' },
      { id: 'D', text: 'proportionally', translation: 'theo tỷ lệ tương ứng' }
    ],
    correctAnswer: 'A',
    explanation: '• A. independently - ĐÚNG: "Correspondingly" nghĩa là tương ứng / phụ thuộc vào nhân tố khác, TRÁI NGHĨA với "independently" (một cách độc lập).',
    translation: 'Từ "correspondingly" trong đoạn 3 TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'tq-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_OCEAN_TIDES,
    passageTranslation: PASSAGE_OCEAN_TIDES_TRANS,
    questionText: 'Question 28. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Tidal forces are weaker than those created by wind.', translation: 'Lực thủy triều yếu hơn các lực do gió tạo ra.' },
      { id: 'B', text: 'Ocean currents usually affect the deepest parts of the sea.', translation: 'Các dòng hải lưu thường tác động đến những nơi sâu nhất.' },
      { id: 'C', text: 'Spring tides occur when the Sun, Moon, and Earth are nearly aligned.', translation: 'Triều cường xảy ra khi Mặt Trời, Mặt Trăng và Trái Đất gần như thẳng hàng.' },
      { id: 'D', text: 'Neap tides produce the greatest difference between high and low water.', translation: 'Triều kém tạo ra chênh lệch mực nước lớn nhất.' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: Thông tin ở đoạn 4: "At these times the Sun, Moon, and Earth are nearly in line... called the spring tides" (nằm gần như thẳng hàng).',
    translation: 'Phát biểu nào dưới đây là ĐÚNG theo nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin Đúng/Sai'
  },
  {
    id: 'tq-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_OCEAN_TIDES,
    passageTranslation: PASSAGE_OCEAN_TIDES_TRANS,
    questionText: 'Question 29. In which paragraph does the writer mention the daily change in the timing of high tides?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'C',
    explanation: '• C. Paragraph 3 - ĐÚNG: "the time of high tide is correspondingly later each day" nằm ở đoạn 3.',
    translation: 'Trong đoạn nào tác giả đề cập đến sự thay đổi hằng ngày của thời điểm triều dâng cao?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },
  {
    id: 'tq-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_OCEAN_TIDES,
    passageTranslation: PASSAGE_OCEAN_TIDES_TRANS,
    questionText: 'Question 30. In which paragraph does the writer mention the difference between spring tides and neap tides?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'D',
    explanation: '• D. Paragraph 4 - ĐÚNG: Đoạn 4 phân tích sự khác nhau giữa spring tides (triều cường) và neap tides (triều kém).',
    translation: 'Trong đoạn nào tác giả đề cập đến sự khác biệt giữa triều cường và triều kém?',
    topicTag: 'Đọc hiểu - Tìm đoạn chứa thông tin'
  },

  // SECTION 6: READING COMPREHENSION 2 - FAST FASHION (Q31 - Q40)
  {
    id: 'tq-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 31. The word "unaltered" in paragraph 1 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'unchanged', translation: 'không thay đổi' },
      { id: 'B', text: 'modified', translation: 'đã được sửa đổi / điều chỉnh' },
      { id: 'C', text: 'preserved', translation: 'được bảo tồn' },
      { id: 'D', text: 'maintained', translation: 'được duy trì' }
    ],
    correctAnswer: 'B',
    explanation: '• B. modified - ĐÚNG: "Unaltered" là không thay đổi, TRÁI NGHĨA với "modified" (đã được điều chỉnh/thay đổi).',
    translation: 'Từ "unaltered" trong đoạn 1 TRÁI NGHĨA với từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'tq-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 32. The word "torrent" in paragraph 2 is closest in meaning to:',
    options: [
      { id: 'A', text: 'a relatively small amount', translation: 'một số lượng tương đối nhỏ' },
      { id: 'B', text: 'a rapid and overwhelming flow', translation: 'một dòng chảy nhanh và dồn dập / cuồn cuộn' },
      { id: 'C', text: 'a generally stable condition', translation: 'một điều kiện nhìn chung ổn định' },
      { id: 'D', text: 'a short and brief interruption', translation: 'một sự gián đoạn ngắn' }
    ],
    correctAnswer: 'B',
    explanation: '• B. a rapid and overwhelming flow - ĐÚNG: "torrent" trong ngữ cảnh chỉ dòng chảy cuồn cuộn, ồ ạt của các loại vật liệu chất lượng thấp.',
    translation: 'Từ "torrent" trong đoạn 2 có nghĩa gần nhất với cụm từ nào dưới đây?',
    topicTag: 'Đọc hiểu - Từ vựng nâng cao'
  },
  {
    id: 'tq-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 33. The word "these" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'enforcement gaps and jurisdictional patchworks', translation: 'khoảng trống thực thi và sự vá víu tài phán' },
      { id: 'B', text: 'rental and resale experiments in global markets', translation: 'thử nghiệm cho thuê và bán lại' },
      { id: 'C', text: 'social media trends and discount-driven consumer habits', translation: 'xu hướng mạng xã hội và thói quen tiêu dùng ham giá rẻ' },
      { id: 'D', text: 'sustainability campaigns and environmental initiatives', translation: 'chiến dịch bền vững và sáng kiến môi trường' }
    ],
    correctAnswer: 'C',
    explanation: '• C. ĐÚNG: "these incentives" quy chiếu về xu hướng mạng xã hội và thói quen mua sắm giá rẻ được nêu ở các câu trước đó.',
    translation: 'Từ "these" trong đoạn 3 quy chiếu đến khái niệm nào?',
    topicTag: 'Đọc hiểu - Quy chiếu từ'
  },
  {
    id: 'tq-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 34. Which of the following is NOT mentioned in the passage?',
    options: [
      { id: 'A', text: 'Microfiber pollution from washing polyester', translation: 'Ô nhiễm vi sợi từ việc giặt chất liệu polyester' },
      { id: 'B', text: 'River contamination from dye effluents', translation: 'Ô nhiễm sông ngòi do nước thải nhuộm' },
      { id: 'C', text: 'Noise pollution from textile factories', translation: 'Ô nhiễm tiếng ồn từ các nhà máy dệt' },
      { id: 'D', text: 'Incineration of surplus inventory', translation: 'Việc đốt bỏ hàng tồn kho dư thừa' }
    ],
    correctAnswer: 'C',
    explanation: '• C. Noise pollution... - ĐÚNG: Ô nhiễm tiếng ồn từ nhà máy dệt KHÔNG hề được nhắc tới trong bài đọc.',
    translation: 'Yếu tố nào dưới đây KHÔNG được đề cập trong bài đọc?',
    topicTag: 'Đọc hiểu - Chi tiết KHÔNG xuất hiện'
  },
  {
    id: 'tq-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 35. Where in the passage would the sentence "This inflation of claims risks widening the gap between corporate messaging and biophysical limits, inviting regulatory and consumer backlash." best fit?',
    options: [
      { id: 'A', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'B', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'D',
    explanation: '• D. [IV] - ĐÚNG: Vị trí [IV] ở đoạn 4 đang phân tích về "sustainability talk risks net-greenwashing", câu chèn bổ sung rủi ro của việc thổi phồng thông điệp.',
    translation: 'Trong bài đọc, câu "This inflation of claims risks widening the gap..." nằm ở vị trí nào là phù hợp nhất?',
    topicTag: 'Đọc hiểu - Chèn câu vào đoạn văn'
  },
  {
    id: 'tq-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 36. Which of the following best summarises paragraph 2?',
    options: [
      { id: 'A', text: 'Fast fashion supply chains are transparent and straightforward to regulate globally.', translation: 'Chuỗi cung ứng thời trang nhanh minh bạch và dễ quản lý...' },
      { id: 'B', text: 'Complex supply chains and weak recycling infrastructure undermine sustainability claims.', translation: 'Chuỗi cung ứng phức tạp và hạ tầng tái chế yếu kém làm suy yếu các tuyên bố về tính bền vững.' },
      { id: 'C', text: 'Recycling systems effectively manage all forms of textile waste in the globe.', translation: 'Hệ thống tái chế xử lý hiệu quả mọi rác thải dệt may...' },
      { id: 'D', text: 'Marketing strategies have completely transformed the fashion industry globally.', translation: 'Chiến lược tiếp thị đã thay đổi hoàn toàn ngành thời trang...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Tóm tắt chính xác hai ý của đoạn 2: Chuỗi cung ứng phức tạp vượt ngoài tầm giám sát và hạ tầng tái chế yếu kém làm suy yếu các tuyên bố bền vững.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất nội dung của đoạn 2?',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn văn'
  },
  {
    id: 'tq-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 37. Which of the following statements is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Lower prices often lead to weaker environmental and labor standards.', translation: 'Giá thấp hơn thường dẫn đến việc cắt giảm tiêu chuẩn môi trường và lao động.' },
      { id: 'B', text: 'Rental and resale always reduce overall clothing production worldwide.', translation: 'Việc cho thuê và bán lại luôn làm giảm sản xuất quần áo...' },
      { id: 'C', text: 'Sustainability campaigns have ended overproduction on a large scale.', translation: 'Chiến dịch bền vững đã chấm dứt việc sản xuất dư thừa...' },
      { id: 'D', text: 'Recycling infrastructure keeps pace with textile waste in many fashion companies.', translation: 'Hạ tầng tái chế bắt kịp rác thải dệt may...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Dẫn chứng ở đoạn 2: "When price points race downward, environmental externalities and labor protections are the first to be shaved off".',
    translation: 'Phát biểu nào dưới đây là ĐÚNG theo nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Khẳng định Đúng/Sai'
  },
  {
    id: 'tq-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 38. Which of the following best paraphrases the underlined sentence in paragraph 4 ("Without binding caps on production and credible emissions accounting, sustainability talk risks net-greenwashing: relative improvements advertised as planetary salvation")?',
    options: [
      { id: 'A', text: 'Sustainability discussions are unnecessary within the fashion industry today in the current context.', translation: 'Các thảo luận về bền vững là không cần thiết...' },
      { id: 'B', text: 'Strict production limits and transparent emissions reporting prevent misleading environmental claims.', translation: 'Các giới hạn sản xuất nghiêm ngặt và báo cáo phát thải minh bạch giúp ngăn chặn các tuyên bố môi trường gây hiểu lầm.' },
      { id: 'C', text: 'Production caps alone are enough to guarantee long-term sustainability without requiring additional measures.', translation: 'Chỉ riêng giới hạn sản xuất là đủ đảm bảo bền vững...' },
      { id: 'D', text: 'Emissions accounting has minimal impact on meaningful environmental protection in the long run.', translation: 'Báo cáo phát thải có tác động rất nhỏ đến bảo vệ môi trường...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Paraphrase diễn đạt tích cực của câu gốc: Giới hạn sản xuất nghiêm ngặt và báo cáo phát thải minh bạch sẽ ngăn chặn các tuyên bố môi trường gây hiểu lầm (greenwashing).',
    translation: 'Câu nào dưới đây diễn đạt lại đúng nhất câu được gạch chân ở đoạn 4?',
    topicTag: 'Đọc hiểu - Viết lại câu nâng cao'
  },
  {
    id: 'tq-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 39. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Minor efficiency improvements are insufficient to address the environmental damage of fast fashion.', translation: 'Những cải thiện hiệu quả nhỏ lẻ là không đủ để giải quyết tác hại môi trường của thời trang nhanh.' },
      { id: 'B', text: 'Consumers are fully informed about supply chain conditions and aware of environmental problems.', translation: 'Người tiêu dùng được thông tin đầy đủ về điều kiện chuỗi cung ứng...' },
      { id: 'C', text: 'Government policies are strictly enforced worldwide and effectively protect public interests.', translation: 'Chính sách chính phủ được thực thi nghiêm ngặt trên toàn thế giới...' },
      { id: 'D', text: 'Growth in fashion production has already been separated from environmental impact.', translation: 'Tăng trưởng sản xuất thời trang đã tách rời khỏi tác động môi trường...' }
    ],
    correctAnswer: 'A',
    explanation: '• A. ĐÚNG: Suy luận từ đoạn 1: "marginal efficiency gains are swamped by absolute volume" (những cải thiện hiệu quả nhỏ bị quy mô sản xuất khổng lồ nhấn chìm).',
    translation: 'Điều nào dưới đây có thể được suy luận từ nội dung bài đọc?',
    topicTag: 'Đọc hiểu - Suy luận (Inference)'
  },
  {
    id: 'tq-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_FAST_FASHION,
    passageTranslation: PASSAGE_FAST_FASHION_TRANS,
    questionText: 'Question 40. Which of the following best summarises the entire passage?',
    options: [
      { id: 'A', text: 'Fast fashion can become sustainable through improved marketing strategies alone without major structural reforms.', translation: 'Thời trang nhanh có thể trở nên bền vững chỉ nhờ chiến lược tiếp thị...' },
      { id: 'B', text: 'Structural overproduction, weak regulation, and consumer habits make sustainability largely superficial.', translation: 'Sản xuất dư thừa mang tính cấu trúc, quản lý yếu kém và thói quen người tiêu dùng khiến tính bền vững phần lớn chỉ mang tính hình thức.' },
      { id: 'C', text: 'Recycling innovations will eliminate textile waste in the foreseeable future across the global fashion industry.', translation: 'Đổi mới tái chế sẽ loại bỏ hoàn toàn rác thải dệt may...' },
      { id: 'D', text: 'Consumer behavior alone ultimately determines overall environmental outcomes in both rich and poor countries.', translation: 'Chỉ riêng hành vi người tiêu dùng quyết định kết quả môi trường...' }
    ],
    correctAnswer: 'B',
    explanation: '• B. ĐÚNG: Tóm tắt toàn diện ý toàn bài: Sản xuất dư thừa mang tính cấu trúc, quản lý yếu kém và thói quen người tiêu dùng khiến tính bền vững trong thời trang nhanh chỉ mang tính hình thức.',
    translation: 'Câu nào dưới đây tóm tắt đúng nhất toàn bộ bài đọc?',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài (Main Purpose)'
  }
];

import { HA_TINH_2026_EXAM } from './haTinhExamData';
import { ME_LINH_2026_EXAM } from './meLinhExamData';
import { LE_LOI_2026_EXAM } from './leLoiExamData';
import { THAI_PHIEN_2026_EXAM } from './thaiPhienExamData';
import { CHUYEN_VINH_PHUC_2026_EXAM } from './chuyenVinhPhucExamData';
import { CUM_HAI_PHONG_2026_EXAM } from './cumHaiPhongExamData';
import { DA_NANG_2026_EXAM } from './daNangExamData';
import { HANOI_2026_EXAM } from './hanoiExamData';
import { NGHE_AN_2026_EXAM } from './ngheAn2026ExamData';
import { BAC_NINH_2026_EXAM } from './bacNinh2026ExamData';
import { HA_TINH_2026_L1_EXAM } from './haTinh2026L1ExamData';
import { HANOI_CUM_2026_EXAM } from './hanoiCum2026ExamData';
import { ELON_MUSK_2026_EXAM } from './elonMusk2026ExamData';

export const SAMPLE_EXAM_SETS: ExamSet[] = [
  NGHE_AN_2026_EXAM,
  BAC_NINH_2026_EXAM,
  HA_TINH_2026_L1_EXAM,
  HANOI_CUM_2026_EXAM,
  ELON_MUSK_2026_EXAM,
  HANOI_2026_EXAM,
  THAI_PHIEN_2026_EXAM,
  CHUYEN_VINH_PHUC_2026_EXAM,
  CUM_HAI_PHONG_2026_EXAM,
  DA_NANG_2026_EXAM,
  ME_LINH_2026_EXAM,
  LE_LOI_2026_EXAM,
  HA_TINH_2026_EXAM,
  {
    id: 'exam-tuyen-quang-2026',
    title: 'Đề Thi Thử THPT 2026 - Sở GD&ĐT Tuyên Quang (Lần 1)',
    description: 'Đề khảo sát chất lượng chính thức năm học 2025 - 2026 gồm trọn bộ 40 câu trắc nghiệm chuẩn cấu trúc mới Bộ GD&ĐT kèm lời giải chi tiết và bản dịch.',
    category: 'thpt_qg',
    durationMinutes: 50,
    totalQuestions: 40,
    badge: 'SỞ TUYÊN QUANG 2026',
    iconName: 'GraduationCap',
    questions: TUYEN_QUANG_2026_QUESTIONS
  },
  {
    id: 'exam-quick-10',
    title: 'Trắc Nghiệm Nhanh 10 Câu (Tập Trung Ngữ Pháp)',
    description: 'Luyện tập nhanh trong 10 phút giúp củng cố kiến thức các thì, mệnh đề quan hệ và câu điều kiện.',
    category: 'quick_quiz',
    durationMinutes: 10,
    totalQuestions: 10,
    badge: 'Nhanh 10 Phút',
    iconName: 'Zap',
    questions: TUYEN_QUANG_2026_QUESTIONS.slice(0, 10)
  },
  {
    id: 'exam-toeic-reading-1',
    title: 'Luyện Bài Đọc Hiểu & Từ Vựng Chuẩn TOEIC/THPT',
    description: 'Tập trung các câu hỏi Từ vựng, Collocations và Đọc hiểu nâng cao (Fast Fashion & Ocean Tides).',
    category: 'toeic',
    durationMinutes: 25,
    totalQuestions: 15,
    badge: 'Đọc Hiểu 8+',
    iconName: 'Briefcase',
    questions: TUYEN_QUANG_2026_QUESTIONS.slice(22, 37)
  }
];
