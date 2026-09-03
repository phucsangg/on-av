import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_MULTIPLE_INTEL = `"Discover Your Intelligence”

✦ About the Exhibition
This exhibition is inspired by the groundbreaking work of Howard E. Gardner, a developmental psychologist at Harvard University (1) ____________ introduced the Theory of Multiple Intelligences. Gardner proposed that human intelligence consists of a (2) ____________ of distinct strengths rather than a single ability.

Join us for a special exhibition that brings the theory to life! It encourages many students, teachers, and numerous (3) ____________ learners to explore the eight dimensions of human intelligence through interactive stations.

✦ What You Will Experience
Participants will engage in short tests and hands-on activities to (4) ____________ their dominant intelligences. These tasks cover all eight areas, including language, logic, music, visual skills, (5) ____________ coordination, social interaction, self-reflection, and nature-based recognition.

For more information, please contact the organizing team (6) ____________ miexhibition@gmail.com for support and registration assistance.`;

const PASSAGE_MULTIPLE_INTEL_TRANS = `“Khám phá trí thông minh của bạn”

✦ Giới thiệu triển lãm
[ĐOẠN 1] Triển lãm này được lấy cảm hứng từ công trình đột phá của Howard E. Gardner, một nhà tâm lý học phát triển tại Đại học Harvard, người đã giới thiệu Thuyết Đa trí thông minh. Gardner cho rằng trí thông minh của con người bao gồm một sự đa dạng các thế mạnh riêng biệt, chứ không chỉ là một năng lực đơn lẻ.

[ĐOẠN 2] Hãy tham gia cùng chúng tôi trong một triển lãm đặc biệt mang lý thuyết này vào đời sống! Triển lãm khuyến khích nhiều học sinh, giáo viên và vô số người học tò mò khám phá tám chiều kích của trí thông minh con người thông qua các trạm tương tác.

✦ Những gì bạn sẽ trải nghiệm
[ĐOẠN 3] Người tham gia sẽ tham gia các bài kiểm tra ngắn và các hoạt động thực hành để xác định các loại hình trí thông minh vượt trội của mình. Các nhiệm vụ này bao quát tất cả tám lĩnh vực, bao gồm ngôn ngữ, lô-gíc, âm nhạc, thị giác, phối hợp vận động, tương tác xã hội, nội tâm và tự nhiên.

✦ Liên hệ
[ĐOẠN 4] Để biết thêm thông tin, vui lòng liên hệ với ban tổ chức qua email miexhibition@gmail.com để được hỗ trợ và giúp đỡ đăng ký.`;

const PASSAGE_LOGO_CONTEST = `“The Logo Design Contest for Ninh Binh Province”

The contest seeks to highlight the province’s rich historical identity and (7) ____________ while encouraging greater public involvement in promoting its image.

✦ Participation Criteria: All Vietnamese citizens, both within the country and abroad, are (8) ____________ to participate, except members of the Organizing Committee and the Jury.

✦ Contest Themes: Designs may reflect historical-cultural traditions, natural scenery, or (9) ____________ defining features of Ninh Binh. Participants are encouraged to (10) ____________ inspiration from the province’s heritage and landscape to ensure a clear sense of authenticity in their submissions.

✦ Timeline: Deadline 31 Dec 2025; results announced early Feb 2026. (11) ____________, please note that all entries must remain authentic and easily recognizable to the public.

✦ Purpose of the Contest: The contest aims to foster creativity, strengthen community engagement, and build pride in Ninh Binh’s cultural legacy, (12) ____________ to future communication and identity-building efforts.`;

const PASSAGE_LOGO_CONTEST_TRANS = `“Cuộc thi thiết kế logo tỉnh Ninh Bình”

[ĐOẠN 1] Cuộc thi nhằm tôn vinh bản sắc lịch sử phong phú và bản sắc văn hóa độc đáo của tỉnh, đồng thời khuyến khích sự tham gia rộng rãi của công chúng trong việc quảng bá hình ảnh địa phương.

✦ Tiêu chí tham gia
[ĐOẠN 2] Tất cả công dân Việt Nam, cả trong và ngoài nước, đều có đủ điều kiện tham gia, ngoại trừ các thành viên trong Ban Tổ chức và Ban Giám khảo.

✦ Chủ đề cuộc thi
[ĐOẠN 3] Các thiết kế có thể phản ánh truyền thống lịch sử - văn hóa, danh lam thắng cảnh tự nhiên, hoặc các đặc điểm định hình khác của Ninh Bình. Tác giả tham gia được khuyến khích lấy cảm hứng từ di sản và cảnh quan của tỉnh để đảm bảo tính chân thực rõ nét trong các tác phẩm dự thi.

✦ Thời gian
[ĐOẠN 4] Hạn chót nộp bài: 31/12/2025; kết quả công bố vào đầu tháng 2/2026. Ngoài ra, xin lưu ý rằng tất cả các tác phẩm dự thi phải giữ được tính nguyên bản và dễ dàng nhận diện đối với công chúng.

✦ Mục đích cuộc thi
[ĐOẠN 5] Cuộc thi nhằm mục đích thúc đẩy sự sáng tạo, tăng cường sự gắn kết cộng đồng và xây dựng niềm tự hào về di sản văn hóa của Ninh Bình, đóng góp cho các nỗ lực truyền thông và xây dựng nhận diện thương hiệu trong tương lai.`;

const PASSAGE_CYCLING_LONDON = `CYCLING IN LONDON

Cycling is an eco-friendly activity that helps protect the environment, and many countries in Europe, including the UK, are encouraging it as they face problems like air pollution and heavy traffic. (18) ____________. Over the past year, however, the number of people cycling in London has risen by an impressive 45 percent. This sharp increase mainly comes from the expansion of dedicated bike lanes, rising environmental awareness, and the city’s ongoing efforts to reduce congestion and improve air quality. (19) ____________.

What has driven this change? Much of the progress is thanks to the National Cycle Network project, (20) ____________. The city has also invested heavily in improving cycling facilities, allocating significant resources to upgrading routes, enhancing safety features, and supporting a more cyclist-friendly urban environment. The introduction of secure bicycle parking on streets, at railway and underground stations, and in schools and workplaces (21) ____________. Today, it is estimated that nearly 75 percent of the population live within two miles of a cycling route. (22) ____________, people are making more cycling journeys than ever before, which is helping transform London into a healthier and more sustainable city.`;

const PASSAGE_CYCLING_LONDON_TRANS = `🚴 ĐẠP XE Ở LONDON

[ĐOẠN 1] Đạp xe là một hoạt động thân thiện với môi trường, góp phần bảo vệ môi trường sống, và nhiều quốc gia châu Âu, trong đó có Vương quốc Anh, đang khuyến khích hình thức này khi phải đối mặt với các vấn đề như ô nhiễm không khí và tình trạng giao thông quá tải. Vào những năm 2010, người Anh không mấy mặn mà với việc đạp xe, khi chỉ có 5 trong số 20 triệu chiếc xe đạp được sử dụng thường xuyên. Tuy nhiên, trong năm vừa qua, số người đạp xe ở London đã tăng mạnh tới 45%. Sự gia tăng đột biến này chủ yếu đến từ việc mở rộng các làn đường dành riêng cho xe đạp, nhận thức về môi trường ngày càng cao, cùng với những nỗ lực không ngừng của thành phố nhằm giảm ùn tắc giao thông và cải thiện chất lượng không khí. Nhờ đó, thủ đô đã trở thành một thành phố sạch hơn so với nhiều đô thị khác ở châu Âu.

[ĐOẠN 2] Điều gì đã thúc đẩy sự thay đổi này? Phần lớn những tiến bộ đạt được là nhờ Dự án Mạng lưới Đạp xe Quốc gia, vốn gần đây đã khuyến khích người dân đạp xe cho cả mục đích đi làm lẫn giải trí. Thành phố cũng đã đầu tư mạnh mẽ vào việc cải thiện các cơ sở hạ tầng phục vụ người đi xe đạp, phân bổ nguồn lực đáng kể để nâng cấp các tuyến đường, tăng cường các biện pháp an toàn và xây dựng một môi trường đô thị thân thiện hơn với người đi xe đạp. Việc đưa vào sử dụng các khu vực đỗ xe đạp an toàn trên đường phố, tại các ga tàu hỏa, ga tàu điện ngầm, cũng như trong trường học và nơi làm việc đã đóng vai trò then chốt trong việc gia tăng số lượng người đạp xe thường xuyên. Hiện nay, ước tính có tới gần 75% dân số sống trong phạm vi hai dặm tính từ một tuyến đường dành cho xe đạp. Nhờ khả năng tiếp cận ngày càng thuận tiện hơn với cơ sở hạ tầng được nâng cấp, người dân đang thực hiện nhiều chuyến đi bằng xe đạp hơn bao giờ hết, qua đó góp phần biến London trở thành một thành phố khỏe mạnh và bền vững hơn.`;

const PASSAGE_CULTURAL_CONTEXT = `Cultural conflicts happen because people misunderstand contextual information. Different cultures attach different levels of importance to context when they communicate, so the same message may be understood differently. Because of this, knowing how people rely on context is vital for reducing confusion and improving communication across cultures.

There are generally two types of cultures: high-context cultures and low-context cultures. High-context cultures, such as those in East Asian and Middle Eastern countries, focus heavily on the situation of a message. Much meaning is implied rather than said directly, so speakers need to know the relationship and setting before understanding the words. These cultures value suggested ideas more than the exactness of words.

In contrast, low-context cultures, such as Germany or America, are characterized by clear communication, precise wording, detailed messages, and consistent speaking styles. They place great importance on the actual message, and its meaning is usually easier to understand and more direct. Communication is more detailed and exact because people rely less on outside factors to shape meaning. Every word matters, and accuracy is necessary to avoid misunderstanding, especially in formal or professional situations.

These contextual differences are easy to see in the business world. A Japanese contract is often shorter because much information is assumed within the high-context culture. An American contract, however, is longer and more detailed to ensure nothing is left confusing. Understanding these differences helps people communicate more effectively across cultures and build stronger relationships, encouraging deeper cooperation and mutual respect in diverse international settings.`;

const PASSAGE_CULTURAL_CONTEXT_TRANS = `[ĐOẠN 1] Xung đột văn hoá xảy ra do con người hiểu sai thông tin ngữ cảnh. Các nền văn hoá khác nhau gán mức độ quan trọng khác nhau cho ngữ cảnh khi giao tiếp, vì vậy cùng một thông điệp có thể được tiếp nhận và diễn giải theo những cách khác nhau. Do đó, việc hiểu rõ cách con người dựa vào ngữ cảnh là yếu tố then chốt để giảm thiểu sự nhầm lẫn và nâng cao hiệu quả giao tiếp liên văn hoá.

[ĐOẠN 2] Nhìn chung, có hai loại hình văn hoá: văn hoá ngữ cảnh cao và văn hoá ngữ cảnh thấp. Các nền văn hoá ngữ cảnh cao, chẳng hạn như ở nhiều quốc gia Đông Á và Trung Đông, đặc biệt coi trọng hoàn cảnh và tình huống của thông điệp. Phần lớn ý nghĩa được hàm ý thay vì nói thẳng ra, vì thế người nghe cần nắm rõ mối quan hệ giữa các bên cũng như bối cảnh giao tiếp thì mới hiểu đúng lời nói. Những nền văn hoá này đề cao ý nghĩa gợi mở hơn là sự chính xác tuyệt đối của từ ngữ.

[ĐOẠN 3] Ngược lại, các nền văn hoá ngữ cảnh thấp, như Đức hoặc Hoa Kỳ, được đặc trưng bởi lối giao tiếp rõ ràng, cách dùng từ chính xác, thông điệp chi tiết và phong cách diễn đạt nhất quán. Họ đặt trọng tâm vào nội dung trực tiếp của thông điệp, nên ý nghĩa thường dễ hiểu và mang tính thẳng thắn hơn. Việc giao tiếp trở nên cụ thể và chặt chẽ vì con người ít phụ thuộc vào các yếu tố bên ngoài để hình thành ý nghĩa. Mỗi từ đều có giá trị, và độ chính xác là điều cần thiết để tránh hiểu lầm, đặc biệt trong các tình huống trang trọng hoặc chuyên nghiệp.

[ĐOẠN 4] Những khác biệt về ngữ cảnh này thể hiện rất rõ trong lĩnh vực kinh doanh. Một hợp đồng của Nhật Bản thường ngắn gọn hơn vì nhiều thông tin đã được mặc nhiên hiểu trong nền văn hoá ngữ cảnh cao. Ngược lại, hợp đồng của Mỹ thường dài và chi tiết nhằm bảo đảm không còn điều gì mơ hồ. Việc thấu hiểu những khác biệt này giúp con người giao tiếp hiệu quả hơn giữa các nền văn hoá, xây dựng các mối quan hệ bền vững hơn, đồng thời thúc đẩy sự hợp tác sâu rộng và tinh thần tôn trọng lẫn nhau trong môi trường quốc tế đa dạng.`;

const PASSAGE_CAREER_CUSHIONING = `[I] In today’s quickly changing job market, where long-term employment is now a luxury, the idea of career cushioning has become increasingly important. [II] The rapid changes that followed restructuring, AI-driven change and mergers revealed how fast even stable jobs can disappear. [III] Career cushioning means preparing alternative options – such as improving skills, building networks, or exploring part-time opportunities – before problems arise. [IV]

An essential component of career cushioning is broadening one’s work experience across diverse professional settings. Many individuals apply for apprenticeships, join short training courses, or take on casual work to expand their abilities. These experiences provide useful skills and insight into different fields. Although they may be temporary, they can still offer security by opening new opportunities. This ongoing development widens opportunities and helps them maintain momentum even when market conditions shift unexpectedly.

The growth of remote work and digital communication has also changed how people prepare for possible job loss. Workers now recognize the importance of transferable skills – such as digital literacy, strong communication, and analytical thinking – which can be used in many professions. Employers are increasingly interested in adaptable employees who show initiative and responsibility. As companies, together with their departments, divisions, and workers, reshape their structures to respond to global changes, workers with a wider range of skills usually have better protection against sudden layoffs or reorganization, whereas those who rely mainly on technical specialization may find it harder to adapt to new roles.

In the end, career cushioning represents a fresh way of thinking about job security. Rather than depending on only one full-time position, individuals create several paths toward stability. This approach can be a new mindset, a practical strategy, a rewarding method, and it helps people reduce stress while discovering new interests and career options. Although uncertainty will always exist, preparing early allows individuals to respond more confidently when change arrives.`;

const PASSAGE_CAREER_CUSHIONING_TRANS = `[ĐOẠN 1] Trong thị trường lao động đang biến động nhanh chóng ngày nay, khi việc làm lâu dài đã trở thành một “xa xỉ phẩm”, khái niệm đệm an toàn nghề nghiệp ngày càng giữ vai trò quan trọng. Những thay đổi chóng mặt sau quá trình tái cơ cấu, sự chuyển đổi do trí tuệ nhân tạo thúc đẩy và các thương vụ sáp nhập đã cho thấy rằng ngay cả những công việc tưởng chừng ổn định cũng có thể biến mất trong thời gian rất ngắn. Đệm an toàn nghề nghiệp được hiểu là việc chuẩn bị sẵn các phương án thay thế — chẳng hạn như nâng cao kỹ năng, xây dựng mạng lưới quan hệ hoặc tìm kiếm cơ hội làm việc bán thời gian — trước khi các vấn đề thực sự phát sinh. Thay vì phản ứng vì sợ hãi, nhiều người xem đây là một cách thiết thực để tự bảo vệ mình.

[ĐOẠN 2] Một thành tố then chốt của đệm an toàn nghề nghiệp là mở rộng kinh nghiệm làm việc trong nhiều môi trường chuyên môn khác nhau. Nhiều người đăng ký các chương trình học nghề, tham gia những khóa đào tạo ngắn hạn hoặc nhận công việc thời vụ nhằm phát triển năng lực bản thân. Những trải nghiệm này mang lại các kỹ năng hữu ích và cái nhìn sâu sắc về nhiều lĩnh vực khác nhau. Dù mang tính tạm thời, chúng vẫn có thể đem lại cảm giác an toàn bằng cách mở ra những cơ hội mới. Quá trình phát triển liên tục này giúp mở rộng triển vọng nghề nghiệp và giúp mỗi người duy trì đà tiến lên, ngay cả khi thị trường lao động bất ngờ biến động.

[ĐOẠN 3] Sự gia tăng của làm việc từ xa và giao tiếp số cũng đã làm thay đổi cách con người chuẩn bị cho nguy cơ mất việc. Người lao động ngày nay nhận thức rõ tầm quan trọng của các kỹ năng có thể chuyển đổi — như năng lực số, khả năng giao tiếp hiệu quả và tư duy phân tích — những kỹ năng có thể áp dụng trong nhiều ngành nghề khác nhau. Các nhà tuyển dụng ngày càng quan tâm đến những nhân sự linh hoạt, biết chủ động và có tinh thần trách nhiệm. Khi các doanh nghiệp, cùng với các phòng ban, đơn vị và người lao động, tái cấu trúc để thích ứng với những biến động toàn cầu, những người sở hữu bộ kỹ năng đa dạng thường được bảo vệ tốt hơn trước nguy cơ sa thải đột ngột hoặc tái tổ chức, trong khi những ai chỉ dựa chủ yếu vào chuyên môn kỹ thuật hẹp có thể gặp khó khăn hơn khi phải thích nghi với các vai trò mới.

[ĐOẠN 4] Cuối cùng, đệm an toàn nghề nghiệp thể hiện một cách tiếp cận mới đối với vấn đề an toàn việc làm. Thay vì phụ thuộc hoàn toàn vào một vị trí toàn thời gian duy nhất, mỗi cá nhân chủ động tạo ra nhiều con đường khác nhau hướng tới sự ổn định. Cách tiếp cận này vừa là một tư duy mới, vừa là một chiến lược thực tế và cũng là một phương thức mang lại nhiều giá trị, giúp con người giảm bớt căng thẳng, đồng thời khám phá thêm những mối quan tâm và lựa chọn nghề nghiệp mới. Dù sự bất định luôn tồn tại, việc chuẩn bị từ sớm sẽ giúp mỗi người tự tin hơn khi đối mặt với những thay đổi không thể tránh khỏi.`;

export const NINH_BINH_2026_QUESTIONS: Question[] = [
  {
    id: 'nb-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_MULTIPLE_INTEL,
    passageTranslation: PASSAGE_MULTIPLE_INTEL_TRANS,
    questionText: 'Question 1. Harvard University (1) _____ introduced the Theory of Multiple Intelligences.',
    options: [
      { id: 'A', text: 'which', translation: 'đại từ quan hệ chỉ vật' },
      { id: 'B', text: 'who', translation: 'đại từ quan hệ chỉ người (Howard E. Gardner)' },
      { id: 'C', text: 'whom', translation: 'tân ngữ chỉ người' },
      { id: 'D', text: 'whose', translation: 'sở hữu' }
    ],
    correctAnswer: 'B',
    explanation: '• "who" làm chủ ngữ thay thế cho nhà tâm lý học "Howard E. Gardner". Chọn B. who.',
    translation: 'Howard E. Gardner, người đã giới thiệu Thuyết Đa trí thông minh.',
    topicTag: 'Mệnh đề quan hệ'
  },
  {
    id: 'nb-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_MULTIPLE_INTEL,
    passageTranslation: PASSAGE_MULTIPLE_INTEL_TRANS,
    questionText: 'Question 2. proposed that human intelligence consists of a (2) _____ of distinct strengths',
    options: [
      { id: 'A', text: 'variety', translation: 'sự đa dạng / nhiều loại khác nhau (a variety of)' },
      { id: 'B', text: 'collection', translation: 'bộ sưu tập' },
      { id: 'C', text: 'mixture', translation: 'hỗn hợp' },
      { id: 'D', text: 'selection', translation: 'sự lựa chọn' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc "a variety of + N số nhiều" (một sự đa dạng/nhiều loại thế mạnh khác nhau). Chọn A. variety.',
    translation: 'Trí thông minh bao gồm sự đa dạng các thế mạnh riêng biệt.',
    topicTag: 'Từ vựng & Cụm từ'
  },
  {
    id: 'nb-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_MULTIPLE_INTEL,
    passageTranslation: PASSAGE_MULTIPLE_INTEL_TRANS,
    questionText: 'Question 3. encourages many students, teachers, and numerous (3) _____ learners',
    options: [
      { id: 'A', text: 'lasting', translation: 'kéo dài' },
      { id: 'B', text: 'endless', translation: 'vô tận' },
      { id: 'C', text: 'lifelong', translation: 'suốt đời (lifelong learners)' },
      { id: 'D', text: 'eternal', translation: 'vĩnh cửu' }
    ],
    correctAnswer: 'C',
    explanation: '• Collocation chuẩn: "lifelong learners" (những người học tập suốt đời). Chọn C. lifelong.',
    translation: 'Khuyến khích đông đảo những người học tập suốt đời.',
    topicTag: 'Collocation'
  },
  {
    id: 'nb-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_MULTIPLE_INTEL,
    passageTranslation: PASSAGE_MULTIPLE_INTEL_TRANS,
    questionText: 'Question 4. engage in short tests and hands-on activities to (4) _____ their dominant intelligences.',
    options: [
      { id: 'A', text: 'carry out', translation: 'tiến hành' },
      { id: 'B', text: 'bring out', translation: 'làm nổi bật' },
      { id: 'C', text: 'point out', translation: 'chỉ ra' },
      { id: 'D', text: 'find out', translation: 'tìm ra / khám phá ra' }
    ],
    correctAnswer: 'D',
    explanation: '• Phrasal verb "find out" = tìm ra/khám phá ra dạng trí thông minh nổi trội của bản thân. Chọn D. find out.',
    translation: 'Tham gia các hoạt động để tìm ra những dạng trí thông minh nổi trội của mình.',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'nb-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_MULTIPLE_INTEL,
    passageTranslation: PASSAGE_MULTIPLE_INTEL_TRANS,
    questionText: 'Question 5. including language, logic, music, visual skills, (5) _____ coordination',
    options: [
      { id: 'A', text: 'physical', translation: 'thể chất / vận động (physical coordination)' },
      { id: 'B', text: 'physically', translation: 'trạng từ' },
      { id: 'C', text: 'physics', translation: 'môn vật lý' },
      { id: 'D', text: 'physician', translation: 'bác sĩ' }
    ],
    correctAnswer: 'A',
    explanation: '• Đứng trước danh từ "coordination" cần tính từ bổ nghĩa: "physical coordination" (sự phối hợp thể chất). Chọn A.',
    translation: 'Bao gồm ngôn ngữ, logic, âm nhạc, kỹ năng thị giác, sự phối hợp thể chất.',
    topicTag: 'Từ loại (Word Form)'
  },
  {
    id: 'nb-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_MULTIPLE_INTEL,
    passageTranslation: PASSAGE_MULTIPLE_INTEL_TRANS,
    questionText: 'Question 6. please contact the organizing team (6) _____ miexhibition@gmail.com',
    options: [
      { id: 'A', text: 'at', translation: 'tại (contact at email address)' },
      { id: 'B', text: 'on', translation: 'trên' },
      { id: 'C', text: 'by', translation: 'bởi' },
      { id: 'D', text: 'in', translation: 'trong' }
    ],
    correctAnswer: 'A',
    explanation: '• Dùng giới từ "at" trước địa chỉ email liên hệ cụ thể. Chọn A. at.',
    translation: 'Vui lòng liên hệ với ban tổ chức tại địa chỉ email miexhibition@gmail.com.',
    topicTag: 'Giới từ'
  },
  {
    id: 'nb-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_LOGO_CONTEST,
    passageTranslation: PASSAGE_LOGO_CONTEST_TRANS,
    questionText: 'Question 7. highlight the province’s rich historical identity and (7) _____',
    options: [
      { id: 'A', text: 'cultural character unique', translation: 'sai trật tự' },
      { id: 'B', text: 'unique character cultural', translation: 'sai trật tự' },
      { id: 'C', text: 'cultural unique character', translation: 'sai trật tự' },
      { id: 'D', text: 'unique cultural character', translation: 'bản sắc văn hóa độc đáo (trật tự chuẩn Opinion + Origin + Noun)' }
    ],
    correctAnswer: 'D',
    explanation: '• Trật tự tính từ–danh từ chuẩn: Opinion (unique) + Type/Origin (cultural) + Noun (character). Chọn D.',
    translation: 'Tôn vinh bản sắc lịch sử phong phú và bản sắc văn hóa độc đáo của tỉnh.',
    topicTag: 'Trật tự Cụm Danh từ'
  },
  {
    id: 'nb-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_LOGO_CONTEST,
    passageTranslation: PASSAGE_LOGO_CONTEST_TRANS,
    questionText: 'Question 8. All Vietnamese citizens, both within the country and abroad, are (8) _____ to participate',
    options: [
      { id: 'A', text: 'eligible', translation: 'đủ điều kiện / đủ tư cách (eligible to V)' },
      { id: 'B', text: 'edible', translation: 'có thể ăn được' },
      { id: 'C', text: 'legible', translation: 'dễ đọc' },
      { id: 'D', text: 'audible', translation: 'có thể nghe thấy' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc "be eligible to V" (đủ điều kiện/tư cách tham gia). Chọn A. eligible.',
    translation: 'Tất cả công dân Việt Nam đều đủ điều kiện tham gia.',
    topicTag: 'Tính từ & Cấu trúc Eligible'
  },
  {
    id: 'nb-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_LOGO_CONTEST,
    passageTranslation: PASSAGE_LOGO_CONTEST_TRANS,
    questionText: 'Question 9. natural scenery, or (9) _____ defining features of Ninh Binh.',
    options: [
      { id: 'A', text: 'another', translation: 'danh từ số ít' },
      { id: 'B', text: 'other', translation: 'những đặc điểm khác (other + N số nhiều defining features)' },
      { id: 'C', text: 'the other', translation: 'cái còn lại trong 2' },
      { id: 'D', text: 'others', translation: 'đại từ' }
    ],
    correctAnswer: 'B',
    explanation: '• "other + danh từ số nhiều" -> "other defining features" (những đặc điểm tiêu biểu khác). Chọn B. other.',
    translation: 'Cảnh quan thiên nhiên hoặc những đặc điểm tiêu biểu khác của Ninh Bình.',
    topicTag: 'Từ định lượng & Other'
  },
  {
    id: 'nb-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_LOGO_CONTEST,
    passageTranslation: PASSAGE_LOGO_CONTEST_TRANS,
    questionText: 'Question 10. Participants are encouraged to (10) _____ inspiration from the province’s heritage',
    options: [
      { id: 'A', text: 'make', translation: 'tạo' },
      { id: 'B', text: 'bring', translation: 'mang lại' },
      { id: 'C', text: 'draw', translation: 'lấy / rút ra (draw inspiration from)' },
      { id: 'D', text: 'have', translation: 'có' }
    ],
    correctAnswer: 'C',
    explanation: '• Collocation chuẩn: "draw inspiration from something" (lấy cảm hứng từ cái gì). Chọn C. draw.',
    translation: 'Người tham gia được khuyến khích lấy cảm hứng từ di sản của tỉnh.',
    topicTag: 'Collocation'
  },
  {
    id: 'nb-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_LOGO_CONTEST,
    passageTranslation: PASSAGE_LOGO_CONTEST_TRANS,
    questionText: 'Question 11. (11) _____, please note that all entries must remain authentic',
    options: [
      { id: 'A', text: 'In addition', translation: 'Ngoài ra (bổ sung thông tin lưu ý)' },
      { id: 'B', text: 'Meanwhile', translation: 'trong khi đó' },
      { id: 'C', text: 'Otherwise', translation: 'nếu không thì' },
      { id: 'D', text: 'Nevertheless', translation: 'tuy nhiên' }
    ],
    correctAnswer: 'A',
    explanation: '• Dùng liên từ bổ sung thông tin "In addition" (Ngoài ra) để thêm một lưu ý quan trọng. Chọn A. In addition.',
    translation: 'Ngoài ra, xin lưu ý rằng tất cả các bài dự thi phải giữ được tính nguyên bản.',
    topicTag: 'Từ nối (Conjunctions)'
  },
  {
    id: 'nb-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_LOGO_CONTEST,
    passageTranslation: PASSAGE_LOGO_CONTEST_TRANS,
    questionText: 'Question 12. build pride in Ninh Binh’s cultural legacy, (12) _____ to future communication',
    options: [
      { id: 'A', text: 'to contributing', translation: 'đóng góp' },
      { id: 'B', text: 'to be contributed', translation: 'bị động sai' },
      { id: 'C', text: 'contributed', translation: 'quá khứ' },
      { id: 'D', text: 'contributing', translation: 'góp phần vào' }
    ],
    correctAnswer: 'D',
    explanation: '• Rút gọn mệnh đề quan hệ dạng chủ động chỉ kết quả: "...which contributes to..." -> "contributing to...". Chọn D.',
    translation: 'Góp phần vào các nỗ lực truyền thông và xây dựng bản sắc trong tương lai.',
    topicTag: 'Rút gọn Mệnh đề Quan hệ'
  },
  {
    id: 'nb-q13',
    type: 'reordering',
    questionText: 'Question 13. Choose the best arrangement of the sentences to make a meaningful conversation:\nb. Emma: I love hearing my grandparents’ life stories. They faced so many challenges growing up.\na. Liam: That’s amazing! Did you learn any specific lessons from them?\nc. Emma: Definitely. They taught me to be strong and face my own challenges with confidence.',
    options: [
      { id: 'A', text: 'b – c – a', translation: 'b-c-a' },
      { id: 'B', text: 'b – a – c', translation: 'b-a-c' },
      { id: 'C', text: 'a – c – b', translation: 'a-c-b' },
      { id: 'D', text: 'c – b – a', translation: 'c-b-a' }
    ],
    correctAnswer: 'B',
    explanation: '• b (Emma chia sẻ thích nghe chuyện ông bà) -> a (Liam khen & hỏi bài học) -> c (Emma trả lời học được sự tự tin). Trật tự: b - a - c. Chọn B.',
    translation: 'Sắp xếp hội thoại chuyện ông bà.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'nb-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the best arrangement of the sentences to make a meaningful conversation:\nd. Mia: Hi Alex! Our cultural exchange trip is coming up soon. Are you getting excited?\ne. Alex: Absolutely! I can’t wait to try local food, visit historical sites, and join daily activities.\na. Mia: Me too! I really want to learn how to make traditional pottery and talk to local artisans.\nc. Alex: Sounds great! We could also join a workshop or attend a cultural festival.\nb. Mia: Definitely! Exploring the culture, meeting locals, and trying those activities will be fun.',
    options: [
      { id: 'A', text: 'c – d – a – b – e', translation: 'c-d-a-b-e' },
      { id: 'B', text: 'c – a – b – e – d', translation: 'c-a-b-e-d' },
      { id: 'C', text: 'd – e – b – a – c', translation: 'd-e-b-a-c' },
      { id: 'D', text: 'd – e – a – c – b', translation: 'd-e-a-c-b' }
    ],
    correctAnswer: 'D',
    explanation: '• d mở đầu chào & hỏi háo hức chuyến đi giao lưu -> e Alex trả lời thích món ăn địa phương -> a Mia đồng tình muốn làm gốm -> c Alex rủ tham gia workshop -> b Mia chốt sự hứng thú. Trật tự: d - e - a - c - b. Chọn D.',
    translation: 'Sắp xếp hội thoại giao lưu văn hóa.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'nb-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the best arrangement of sentences to form a complete letter from a mother to her daughter:\nb. I am writing from my workplace far from home to let you know how proud I am of you and how much I believe in you.\nc. As you begin your final year of high school, I hope you stay focused, work hard, and use this important time wisely.\na. Because this is such a meaningful year, I hope you won’t let yourself get too distracted, especially by early relationships, so you can give more attention to your goals.\ne. Even though I’m away, I trust that you will stay responsible, maintain healthy habits, and spend your time on what truly helps you grow.\nd. Remember that your efforts now will bring many opportunities later, and I will always love and support you no matter where I am.',
    options: [
      { id: 'A', text: 'a – d – c – e – b', translation: 'a-d-c-e-b' },
      { id: 'B', text: 'b – c – a – e – d', translation: 'b-c-a-e-d' },
      { id: 'C', text: 'b – c – e – d – a', translation: 'b-c-e-d-a' },
      { id: 'D', text: 'd – a – e – c – b', translation: 'd-a-e-c-b' }
    ],
    correctAnswer: 'B',
    explanation: '• b mở thư lý do viết & sự tự hào -> c bối cảnh năm cuối cấp -> a lời khuyên tránh xao nhãng tình cảm -> e dặn sống có trách nhiệm -> d lời kết khẳng định tình yêu vô điều kiện. Trật tự: b - c - a - e - d. Chọn B.',
    translation: 'Sắp xếp thư mẹ gửi con gái.',
    topicTag: 'Sắp xếp thư gia đình'
  },
  {
    id: 'nb-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the best arrangement of the sentences to form a coherent text:\nc. I’ve realized recently that I lack many soft skills, especially communication and teamwork, which makes me feel unsure of my abilities in group projects.\nb. At times, I avoid speaking up because I’m afraid of saying something wrong or not expressing my ideas clearly.\na. To improve, I plan to join school clubs where I can practice working with others and get more comfortable sharing my opinions.\ne. I also want to learn from classmates who are confident speakers and observe how they interact with people from different backgrounds.\nd. Little by little, I hope these efforts will help me become more confident and develop the skills needed to connect well in a global environment.',
    options: [
      { id: 'A', text: 'c – b – a – e – d', translation: 'c-b-a-e-d' },
      { id: 'B', text: 'c – a – e – b – d', translation: 'c-a-e-b-d' },
      { id: 'C', text: 'b – c – a – e – d', translation: 'b-c-a-e-d' },
      { id: 'D', text: 'c – b – e – a – d', translation: 'c-b-e-a-d' }
    ],
    correctAnswer: 'A',
    explanation: '• c mở đoạn nhận ra thiếu kỹ năng mềm -> b giải thích nguyên nhân sợ nói sai -> a giải pháp tham gia câu lạc bộ -> e bổ sung học hỏi bạn bè -> d kết luận hy vọng tự tin hơn. Trật tự: c - b - a - e - d. Chọn A.',
    translation: 'Sắp xếp đoạn văn tự cải thiện kỹ năng.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'nb-q17',
    type: 'reordering',
    questionText: 'Question 17. Choose the best arrangement of the sentences to form a coherent text:\na. In recent years, many places in Vietnam - especially the central region - have suffered severe floods that damaged houses, farmland, and essential infrastructure.\ne. As weather patterns become more unpredictable, such flooding has occurred more frequently and affected people’s daily lives more seriously.\nd. Because of these rising risks, more organizations and local authorities are paying greater attention to disaster preparedness and sustainable development.\nb. Many communities are now improving early-warning systems, strengthening flood-resistant infrastructure, and restoring natural areas to reduce future danger.\nc. These efforts help protect both the environment and local livelihoods, allowing communities to recover faster and become more resilient over time.',
    options: [
      { id: 'A', text: 'a – d – b – e – c', translation: 'a-d-b-e-c' },
      { id: 'B', text: 'a – e – b – d – c', translation: 'a-e-b-d-c' },
      { id: 'C', text: 'a – e – d – b – c', translation: 'a-e-d-b-c' },
      { id: 'D', text: 'a – b – d – e – c', translation: 'a-b-d-e-c' }
    ],
    correctAnswer: 'C',
    explanation: '• a mở đoạn lũ lụt miền Trung -> e giải thích thời tiết thất thường lũ gia tăng -> d chính quyền quan tâm chuẩn bị ứng phó -> b các biện pháp cụ thể -> c đánh giá lợi ích phục hồi môi trường. Trật tự: a - e - d - b - c. Chọn C.',
    translation: 'Sắp xếp đoạn văn ứng phó lũ lụt.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'nb-q18',
    type: 'cloze_test',
    readingPassage: PASSAGE_CYCLING_LONDON,
    passageTranslation: PASSAGE_CYCLING_LONDON_TRANS,
    questionText: 'Question 18. facing problems like air pollution and heavy traffic. (18) _____. Over the past year...',
    options: [
      { id: 'A', text: 'Despite having only 20 million bikes, the British were long seen as keen cyclists', translation: 'tương phản không hợp logic' },
      { id: 'B', text: 'Most of Britain’s 20 million bikes saw regular use', translation: 'mâu thuẫn với câu sau' },
      { id: 'C', text: 'In the 2010s, the British weren’t keen on cycling, with only 5 out of 20 million bicycles in use', translation: 'Vào những năm 2010, người Anh không mấy mặn mà với việc đạp xe, khi chỉ có 5 trong số 20 triệu chiếc xe đạp được sử dụng' },
      { id: 'D', text: 'Hardly any enthusiasm for cycling was evident in Britain recently', translation: 'mâu thuẫn nội tại' }
    ],
    correctAnswer: 'C',
    explanation: '• C cung cấp bối cảnh quá khứ (sử dụng ít), tạo đà tương phản với vế đằng sau "Over the past year, however, ... Has risen by 45 percent". Chọn C.',
    translation: 'Vào những năm 2010, người Anh không mấy mặn mà với việc đạp xe.',
    topicTag: 'Điền câu hoàn thành đoạn'
  },
  {
    id: 'nb-q19',
    type: 'cloze_test',
    readingPassage: PASSAGE_CYCLING_LONDON,
    passageTranslation: PASSAGE_CYCLING_LONDON_TRANS,
    questionText: 'Question 19. ongoing efforts to reduce congestion and improve air quality. (19) _____.',
    options: [
      { id: 'A', text: 'However, London has been cleaner and quieter', translation: 'dùng however sai' },
      { id: 'B', text: 'As a result, the capital has become a cleaner city compared with others in Europe', translation: 'Nhờ đó, thủ đô đã trở thành một thành phố sạch hơn so với nhiều đô thị khác ở Châu Âu' },
      { id: 'C', text: 'In comparison, London has been classified as among the most polluted', translation: 'sai thông tin' },
      { id: 'D', text: 'In terms of pollution levels, other cities rank lower', translation: 'sai nghĩa' }
    ],
    correctAnswer: 'B',
    explanation: '• "As a result" diễn tả hệ quả logic tích cực từ những nỗ lực giảm ùn tắc và cải thiện chất lượng không khí. Chọn B.',
    translation: 'Nhờ đó, thủ đô đã trở thành một thành phố sạch hơn.',
    topicTag: 'Từ nối & Hệ quả'
  },
  {
    id: 'nb-q20',
    type: 'cloze_test',
    readingPassage: PASSAGE_CYCLING_LONDON,
    passageTranslation: PASSAGE_CYCLING_LONDON_TRANS,
    questionText: 'Question 20. National Cycle Network project, (20) _____.',
    options: [
      { id: 'A', text: 'which has recently encouraged people to cycle for commuting and leisure', translation: 'vốn gần đây đã khuyến khích người dân đạp xe cho cả mục đích đi làm lẫn giải trí' },
      { id: 'B', text: 'where many critics argue has not improved cycling habits', translation: 'nơi nhiều nhà phê bình cho rằng chưa cải thiện thói quen đạp xe' },
      { id: 'C', text: 'whose primary focus is on maintaining existing roads', translation: 'sai thông tin mở rộng' },
      { id: 'D', text: 'that has been recently criticized for uneven access', translation: 'sai tông giọng ca ngợi' }
    ],
    correctAnswer: 'A',
    explanation: '• Mệnh đề quan hệ không xác định ", which has recently encouraged..." bổ nghĩa cho dự án National Cycle Network project. Chọn A.',
    translation: 'Vốn gần đây đã khuyến khích người dân đạp xe cho cả mục đích đi làm lẫn giải trí.',
    topicTag: 'Mệnh đề quan hệ'
  },
  {
    id: 'nb-q21',
    type: 'cloze_test',
    readingPassage: PASSAGE_CYCLING_LONDON,
    passageTranslation: PASSAGE_CYCLING_LONDON_TRANS,
    questionText: 'Question 21. bicycle parking on streets, at railway and underground stations... (21) _____.',
    options: [
      { id: 'A', text: 'has raised concerns among cyclists about limited space', translation: 'sai nghĩa lo ngại' },
      { id: 'B', text: 'has put people off cycling by making parking complicated', translation: 'sai nghĩa' },
      { id: 'C', text: 'has introduced new guidelines for storing bicycles safely', translation: 'không nêu tác động' },
      { id: 'D', text: 'has played a key role in increasing the number of regular cyclists', translation: 'đã đóng vai trò then chốt trong việc gia tăng số lượng người đạp xe thường xuyên' }
    ],
    correctAnswer: 'D',
    explanation: '• D tổng kết tác động tích cực của việc bổ sung bãi đỗ xe an toàn giúp tăng số người đạp xe. Chọn D.',
    translation: 'Đã đóng vai trò then chốt trong việc gia tăng số lượng người đạp xe thường xuyên.',
    topicTag: 'Điền câu vị ngữ'
  },
  {
    id: 'nb-q22',
    type: 'cloze_test',
    readingPassage: PASSAGE_CYCLING_LONDON,
    passageTranslation: PASSAGE_CYCLING_LONDON_TRANS,
    questionText: 'Question 22. 75 percent live within two miles of a cycling route. (22) _____, people are making more cycling journeys',
    options: [
      { id: 'A', text: 'While some areas continue to suffer from poor maintenance', translation: 'sai liên từ nhượng bộ' },
      { id: 'B', text: 'Because access has become more convenient with upgraded infrastructure', translation: 'Nhờ khả năng tiếp cận ngày càng thuận tiện hơn với cơ sở hạ tầng được nâng cấp' },
      { id: 'C', text: 'In order to manage rising concerns about overcrowded routes', translation: 'sai mục đích' },
      { id: 'D', text: 'Unless cycling infrastructure improves significantly', translation: 'sai điều kiện' }
    ],
    correctAnswer: 'B',
    explanation: '• Cụm nguyên nhân "Because access has become more convenient..." giải thích hợp lý cho kết quả "people are making more cycling journeys". Chọn B.',
    translation: 'Nhờ khả năng tiếp cận ngày càng thuận tiện hơn với cơ sở hạ tầng được nâng cấp.',
    topicTag: 'Mệnh đề nguyên nhân'
  },
  {
    id: 'nb-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CULTURAL_CONTEXT,
    passageTranslation: PASSAGE_CULTURAL_CONTEXT_TRANS,
    questionText: 'Question 23. The word "vital" in paragraph 1 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'resistant', translation: 'kháng lại' },
      { id: 'B', text: 'unnecessary', translation: 'không cần thiết' },
      { id: 'C', text: 'important', translation: 'quan trọng' },
      { id: 'D', text: 'incredible', translation: 'tuyệt vời' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "vital" = thiết yếu, quan trọng. Trái nghĩa với nó là "unnecessary" (không cần thiết). Chọn B.',
    translation: 'Từ "vital" trong đoạn 1 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'nb-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CULTURAL_CONTEXT,
    passageTranslation: PASSAGE_CULTURAL_CONTEXT_TRANS,
    questionText: 'Question 24. Which of the following do high-context cultures NOT focus on?',
    options: [
      { id: 'A', text: 'situation', translation: 'tình huống hoàn cảnh' },
      { id: 'B', text: 'relationship', translation: 'mối quan hệ' },
      { id: 'C', text: 'setting', translation: 'bối cảnh giao tiếp' },
      { id: 'D', text: 'exactness', translation: 'sự chính xác tuyệt đối của từ ngữ' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 2 nêu rõ: "These cultures value suggested ideas more than the exactness of words" -> Họ KHÔNG chú trọng sự chính xác tuyệt đối của từ ngữ. Chọn D.',
    translation: 'Các nền văn hóa ngữ cảnh cao KHÔNG chú trọng yếu tố nào?',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'nb-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CULTURAL_CONTEXT,
    passageTranslation: PASSAGE_CULTURAL_CONTEXT_TRANS,
    questionText: 'Question 25. The word "They" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'low-context cultures', translation: 'các nền văn hóa ngữ cảnh thấp (low-context cultures)' },
      { id: 'B', text: 'consistent speaking styles', translation: 'phong cách nói' },
      { id: 'C', text: 'outside factors', translation: 'yếu tố bên ngoài' },
      { id: 'D', text: 'detailed messages', translation: 'thông điệp chi tiết' }
    ],
    correctAnswer: 'A',
    explanation: '• Trong câu "In contrast, low-context cultures... Are characterized by clear communication... They place great importance...", "They" thay thế cho "low-context cultures". Chọn A.',
    translation: 'Từ "They" ở đoạn 3 chỉ: các nền văn hóa ngữ cảnh thấp.',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'nb-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CULTURAL_CONTEXT,
    passageTranslation: PASSAGE_CULTURAL_CONTEXT_TRANS,
    questionText: 'Question 26. The word "confusing" in paragraph 4 could be best replaced by:',
    options: [
      { id: 'A', text: 'surprising', translation: 'gây ngạc nhiên' },
      { id: 'B', text: 'misleading', translation: 'gây hiểu lầm / gây bối rối' },
      { id: 'C', text: 'amazing', translation: 'tuyệt vời' },
      { id: 'D', text: 'fulfilling', translation: 'thỏa mãn' }
    ],
    correctAnswer: 'B',
    explanation: '• Trong ngữ cảnh điều khoản hợp đồng "ensure nothing is left confusing", "confusing" (gây khó hiểu/mơ hồ) tương đương "misleading". Chọn B.',
    translation: 'Từ "confusing" trong đoạn 4 có nghĩa gần nhất với:',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'nb-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CULTURAL_CONTEXT,
    passageTranslation: PASSAGE_CULTURAL_CONTEXT_TRANS,
    questionText: 'Question 27. Which of the following best paraphrases the underlined sentence in paragraph 4?',
    options: [
      { id: 'A', text: 'These situational differences are quite visible in business contexts.', translation: 'Những khác biệt về hoàn cảnh/ngữ cảnh này thể hiện khá rõ trong bối cảnh kinh doanh' },
      { id: 'B', text: 'These contextual differences make business communication easy to see.', translation: 'Khiến giao tiếp dễ thấy' },
      { id: 'C', text: 'These situational differences have little effect on business communication.', translation: 'Hầu như không ảnh hưởng' },
      { id: 'D', text: 'All business practices are likely to be the same in contextual differences.', translation: 'Mọi hoạt động giống nhau' }
    ],
    correctAnswer: 'A',
    explanation: '• A paraphrase chuẩn xác: "These contextual differences" = "These situational differences", "easy to see" = "quite visible", "in the business world" = "in business contexts". Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'nb-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CULTURAL_CONTEXT,
    passageTranslation: PASSAGE_CULTURAL_CONTEXT_TRANS,
    questionText: 'Question 28. Which of the following is NOT TRUE according to the passage?',
    options: [
      { id: 'A', text: 'High-context cultures often rely on implied meanings rather than direct words.', translation: 'Hàm ý hơn lời nói trực tiếp' },
      { id: 'B', text: 'Low-context cultures focus on both greater clarity and the actual message.', translation: 'Rõ ràng và nội dung thực' },
      { id: 'C', text: 'American business contracts are briefer and less informative than Japanese ones.', translation: 'Hợp đồng Mỹ ngắn gọn và ít thông tin hơn hợp đồng Nhật' },
      { id: 'D', text: 'Effective communication across cultures encourages cooperation and respect.', translation: 'Giao tiếp hiệu quả thúc đẩy hợp tác' }
    ],
    correctAnswer: 'C',
    explanation: '• Bài đọc ghi rõ: "A Japanese contract is often shorter... An American contract, however, is longer and more detailed". Do đó phương án C nói hợp đồng Mỹ ngắn hơn hợp đồng Nhật là SAI. Chọn C.',
    translation: 'Phát biểu KHÔNG ĐÚNG theo bài đọc: Hợp đồng Mỹ ngắn gọn hơn hợp đồng Nhật.',
    topicTag: 'Đọc hiểu - Thông tin NOT TRUE'
  },
  {
    id: 'nb-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CULTURAL_CONTEXT,
    passageTranslation: PASSAGE_CULTURAL_CONTEXT_TRANS,
    questionText: 'Question 29. In which paragraph does the writer mention the significance of context?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1 (knowing how people rely on context is vital...)' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 1 nêu tầm quan trọng: "knowing how people rely on context is vital for reducing confusion and improving communication...". Chọn A (Paragraph 1).',
    translation: 'Đoạn nào đề cập đến tầm quan trọng của ngữ cảnh?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'nb-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CULTURAL_CONTEXT,
    passageTranslation: PASSAGE_CULTURAL_CONTEXT_TRANS,
    questionText: 'Question 30. In which paragraph does the writer classify cultures into two main categories?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2 (There are generally two types of cultures: high-context... And low-context...)' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 2 ghi rõ: "There are generally two types of cultures: high-context cultures and low-context cultures". Chọn B (Paragraph 2).',
    translation: 'Đoạn nào phân loại văn hóa thành hai nhóm chính?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'nb-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 31. Where in paragraph 1 does the sentence "Instead of reacting out of fear, many people see this as a practical way to stay safe." best fit?',
    options: [
      { id: 'A', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'B', text: '[I]', translation: 'Vị trí [I]' },
      { id: 'C', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'D', text: '[IV]', translation: 'Vị trí [IV]' }
    ],
    correctAnswer: 'D',
    explanation: '• Vị trí [IV] đứng ngay sau định nghĩa về đệm an toàn nghề nghiệp (career cushioning), nhận xét đánh giá đây là một cách thiết thực để tự bảo vệ mình. Chọn D ([IV]).',
    translation: 'Câu trên phù hợp nhất ở vị trí: [IV].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'nb-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 32. The word "casual" in paragraph 2 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'informal', translation: 'không trang trọng' },
      { id: 'B', text: 'permanent', translation: 'lâu dài / cố định / biên chế' },
      { id: 'C', text: 'contractual', translation: 'theo hợp đồng' },
      { id: 'D', text: 'seasonal', translation: 'theo mùa vụ' }
    ],
    correctAnswer: 'B',
    explanation: '• "casual work" = việc làm tạm thời/thời vụ. Trái nghĩa với nó là "permanent" (lâu dài, biên chế cố định). Chọn B. permanent.',
    translation: 'Từ "casual" trong đoạn 2 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'nb-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 33. Which of the following best paraphrases the underlined sentence in paragraph 2?',
    options: [
      { id: 'A', text: 'A key area of career cushioning is gaining greater exposure to different types of work.', translation: 'Một lĩnh vực then chốt của đệm an toàn nghề nghiệp là mở rộng sự tiếp xúc với nhiều loại hình công việc khác nhau' },
      { id: 'B', text: 'An essential part of career cushioning is relying mainly on one’s existing work experience.', translation: 'Dựa vào kinh nghiệm cũ' },
      { id: 'C', text: 'A major aspect of career cushioning is broadening skills while keeping experience the same.', translation: 'Giữ nguyên kinh nghiệm' },
      { id: 'D', text: 'An essential element of career cushioning is developing experience focusing on familiar areas.', translation: 'Tập trung lĩnh vực quen thuộc' }
    ],
    correctAnswer: 'A',
    explanation: '• A paraphrase chuẩn xác: "An essential component" = "A key area", "broadening work experience" = "gaining greater exposure", "across diverse professional settings" = "to different types of work". Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'nb-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 34. The phrase "maintain momentum" in paragraph 2 could best be replaced by:',
    options: [
      { id: 'A', text: 'give up', translation: 'từ bỏ' },
      { id: 'B', text: 'carry on', translation: 'tiếp tục duy trì / tiến lên' },
      { id: 'C', text: 'slow down', translation: 'chậm lại' },
      { id: 'D', text: 'break off', translation: 'ngắt quãng' }
    ],
    correctAnswer: 'B',
    explanation: '• "maintain momentum" = duy trì đà phát triển/tiến tới tương đương "carry on". Chọn B. carry on.',
    translation: 'Cụm từ "maintain momentum" trong đoạn 2 có nghĩa là gì?',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'nb-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 35. Which of the following best summarizes paragraph 3?',
    options: [
      { id: 'A', text: 'Workers with transferable abilities are better prepared for the job market changes.', translation: 'Người lao động có các kỹ năng có thể chuyển đổi sẽ chuẩn bị tốt hơn trước những thay đổi của thị trường việc làm' },
      { id: 'B', text: 'Remote work and digital communication create stable positions for most employees.', translation: 'Remote work tạo vị trí ổn định' },
      { id: 'C', text: 'Employers mainly value employees who follow instructions rather than show initiative.', translation: 'Coi trọng người nghe lời' },
      { id: 'D', text: 'Companies now appear to offer greater job security as they reshape their structures.', translation: 'Công ty mang lại an toàn' }
    ],
    correctAnswer: 'A',
    explanation: '• A tóm tắt trọn vẹn ý chính đoạn 3 về tầm quan trọng của transferable skills giúp người lao động chống chọi tốt hơn với biến động tái cơ cấu hay sa thải. Chọn A.',
    translation: 'Tóm tắt đúng nhất đoạn 3: Người có kỹ năng chuyển đổi sẽ chuẩn bị tốt hơn trước biến động thị trường.',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn'
  },
  {
    id: 'nb-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 36. Which of the following is NOT a transferable skill, according to paragraph 3?',
    options: [
      { id: 'A', text: 'digital literacy', translation: 'năng lực số' },
      { id: 'B', text: 'effective interaction', translation: 'giao tiếp hiệu quả (strong communication)' },
      { id: 'C', text: 'critical thinking', translation: 'tư duy phân tích (analytical thinking)' },
      { id: 'D', text: 'technical specialization', translation: 'chuyên môn kỹ thuật hẹp (không phải transferable skill)' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 3 nêu rõ những người dựa chủ yếu vào "technical specialization" sẽ khó thích nghi với vai trò mới, nên đây KHÔNG phải là transferable skill. Chọn D.',
    translation: 'Chi tiết KHÔNG phải là kỹ năng chuyển đổi ở đoạn 3: Chuyên môn kỹ thuật hẹp.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'nb-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 37. The word "it" in paragraph 4 refers to:',
    options: [
      { id: 'A', text: 'a fresh way', translation: 'một cách mới' },
      { id: 'B', text: 'a new mindset', translation: 'tư duy mới' },
      { id: 'C', text: 'this approach', translation: 'cách tiếp cận này' },
      { id: 'D', text: 'a rewarding method', translation: 'phương thức mang lại giá trị' }
    ],
    correctAnswer: 'C',
    explanation: '• Trong câu "This approach can be a new mindset... And it helps people reduce stress...", "it" thay thế cho "This approach". Chọn C.',
    translation: 'Từ "it" ở đoạn 4 thay thế cho: this approach (cách tiếp cận này).',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'nb-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 38. Which of the following is TRUE according to the passage?',
    options: [
      { id: 'A', text: 'Career cushioning suggests simply waiting until problems occur before taking any action.', translation: 'Chờ đến khi vấn đề xảy ra mới làm' },
      { id: 'B', text: 'Expanding work experience helps workers gain valuable skills and insights into different areas.', translation: 'Mở rộng kinh nghiệm làm việc giúp người lao động thu được kỹ năng và hiểu biết giá trị về nhiều lĩnh vực' },
      { id: 'C', text: 'Employers now focus only on technical knowledge instead of adaptability.', translation: 'Chỉ chú trọng kiến thức kỹ thuật' },
      { id: 'D', text: 'Short-term or casual roles actually rarely offer any benefit for future career development.', translation: 'Việc ngắn hạn hiếm khi mang lại lợi ích' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 2 nêu rõ: "These experiences provide useful skills and insight into different fields". Chọn B.',
    translation: 'Phát biểu nào sau đây ĐÚNG theo bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin TRUE'
  },
  {
    id: 'nb-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 39. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'Failing to build an alternative career plan may leave workers more vulnerable when the job market changes.', translation: 'Không xây dựng kế hoạch nghề nghiệp thay thế có thể khiến người lao động dễ bị tổn thương hơn khi thị trường biến động' },
      { id: 'B', text: 'Employers increasingly favor workers who remain specialized in one area.', translation: 'Ưu ái người chuyên sâu một ngành' },
      { id: 'C', text: 'Some employees believe career cushioning can reduce the risk of unemployment.', translation: 'Giảm nguy cơ thất nghiệp trực tiếp' },
      { id: 'D', text: 'Remote work has made traditional job security less important.', translation: 'Làm việc từ xa khiến an toàn kém quan trọng' }
    ],
    correctAnswer: 'A',
    explanation: '• A suy luận chính xác từ thông điệp cốt lõi: Chuẩn bị đệm an toàn nghề nghiệp giúp tự tin ứng phó với biến động -> Không chuẩn bị kế hoạch thay thế sẽ khiến người lao động dễ bị tổn thương. Chọn A.',
    translation: 'Suy luận đúng từ bài đọc: Không tạo kế hoạch nghề nghiệp thay thế khiến người lao động dễ bị tổn thương trước biến động.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'nb-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_CAREER_CUSHIONING,
    passageTranslation: PASSAGE_CAREER_CUSHIONING_TRANS,
    questionText: 'Question 40. Which of the following best summarizes the passage?',
    options: [
      { id: 'A', text: 'Career cushioning encourages individuals to cultivate a range of skills, gain experience in various roles, and establish multiple pathways to ensure stability in a constantly evolving job market.', translation: 'Đệm an toàn nghề nghiệp khuyến khích mỗi cá nhân trau dồi nhiều kỹ năng, tích lũy kinh nghiệm qua nhiều vai trò và xây dựng nhiều con đường nhằm bảo đảm sự ổn định' },
      { id: 'B', text: 'Career cushioning highlights the value of developing diverse skills, mainly discussing these aspects while briefly mentioning alternative paths.', translation: 'Chỉ thảo luận kỹ năng' },
      { id: 'C', text: 'Career cushioning emphasizes gaining work experience, mainly focusing on short-term jobs.', translation: 'Chủ yếu việc ngắn hạn' },
      { id: 'D', text: 'Career cushioning is described as a strategy placing more emphasis on reducing stress.', translation: 'Nhấn mạnh giảm căng thẳng' }
    ],
    correctAnswer: 'A',
    explanation: '• A tóm tắt toàn diện nhất toàn bộ bài đọc từ kỹ năng, kinh nghiệm đến việc đa dạng hóa con đường để duy trì sự ổn định nghề nghiệp. Chọn A.',
    translation: 'Tóm tắt toàn bài: Đệm an toàn nghề nghiệp khuyến khích trau dồi kỹ năng, kinh nghiệm và đa dạng hóa con đường để ổn định.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  }
];

export const NINH_BINH_2026_EXAM: ExamSet = {
  id: 'exam-ninh-binh-2026',
  title: 'Đề Khảo Sát Lần 1 2026 - Sở GD-ĐT Ninh Bình (Mã đề 1101)',
  description: 'Đề khảo sát, đánh giá chất lượng giáo dục lớp 12 môn Tiếng Anh lần 1 năm học 2025 - 2026 của Sở GD-ĐT Ninh Bình (Mã 1101) gồm 40 câu trắc nghiệm kèm đáp án và giải thích chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'SỞ NINH BÌNH MÃ 1101',
  iconName: 'Award',
  questions: NINH_BINH_2026_QUESTIONS
};
