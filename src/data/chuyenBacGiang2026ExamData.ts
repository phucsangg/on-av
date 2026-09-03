import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_YOUMEC = `Your Journey to World-Class Healthcare Starts with YouMec! Discover a superior healthcare experience at YouMec International Hospital, an (1) ____________ leader in medical tourism! Our JCI- accredited facilities offer (2) ____________ cutting-edge treatments in cardiology, oncology, and aesthetics, powered by stronger partnerships with global (3) ____________ like The John Hopkins Hospital or Cleveland Clinic. (4) ____________ our commitment to excellence, we provide seamless support with multilingual interpreters, tailored diets, and (5) ____________ high-end services. Moreover, our advanced technology and compassionate care will deliver the best outcomes at affordable costs. Choose YouMec for a better and healthier version of you, backed by world-class expertise and personalized attention. Let's (6) ____________ your strength and start your transformative medical journey from today!`;

const PASSAGE_YOUMEC_TRANS = `[ĐOẠN 1] Hành trình hướng tới dịch vụ chăm sóc sức khỏe đẳng cấp thế giới của bạn bắt đầu tại YouMec! Hãy khám phá một trải nghiệm chăm sóc sức khỏe vượt trội tại Bệnh viện Quốc tế YouMec, một đơn vị hàng đầu trong lĩnh vực du lịch y tế! Cơ sở đạt chuẩn JCI của chúng tôi cung cấp nhiều phương pháp điều trị tiên tiến về tim mạch, ung thư và thẩm mỹ, được hỗ trợ bởi mối quan hệ hợp tác chặt chẽ hơn với các ông lớn toàn cầu như Bệnh viện Johns Hopkins hoặc Cleveland Clinic. Nhờ cam kết hướng tới sự xuất sắc, chúng tôi cung cấp sự hỗ trợ toàn diện với thông dịch viên đa ngôn ngữ, chế độ ăn uống tùy chỉnh và các dịch vụ cao cấp khác. Hơn nữa, công nghệ tiên tiến và sự chăm sóc tận tâm của chúng tôi sẽ mang lại kết quả tốt nhất với chi phí hợp lý. Hãy chọn YouMec vì một phiên bản khỏe mạnh hơn của chính bạn, được bảo chứng bởi chuyên môn đẳng cấp thế giới và sự quan tâm cá nhân hóa. Hãy bắt đầu hành trình y tế thay đổi cuộc sống của bạn ngay hôm nay!`;

const PASSAGE_SOLO_TRAVEL = `TIPS FOR SOLO TRAVELLING

For those intending to embark on a solo journey, careful preparation is essential to ensure both safety and the (7) ____________ of authentic experiences. The first step is choosing a destination that is welcoming but not (8) ____________ by mass tourism. Solo travelers might consider smaller, walkable towns that allow for easy navigation and deeper cultural immersion. Before departure, it is also advisable to share the itinerary with family or friends, download offline maps to reduce travel stress, and pack lightly to remain self-reliant. Once abroad, being mindful (9) ____________ local customs, including dress codes, is crucial, as this not only ensures respect but also enriches the overall experience and fosters connections with locals. Upon arrival, travelers should seek (10) ____________ from hostel staff. To safeguard finances, only one bank card should be carried, cash should be kept in separate pockets, and real-time location sharing should be avoided. Finally, travelers should consider (11) ____________ local events or small group activities, which enables them to engage (12) ____________ with other people while still uncovering hidden gems off the beaten path.`;

const PASSAGE_SOLO_TRAVEL_TRANS = `[ĐOẠN 1] MẸO DU LỊCH MỘT MÌNH

Đối với những ai có ý định bắt đầu một hành trình một mình, việc chuẩn bị kỹ lưỡng là điều cần thiết để đảm bảo cả sự an toàn lẫn việc theo đuổi những trải nghiệm chân thật. Bước đầu tiên là chọn một điểm đến thân thiện nhưng không bị tràn ngập bởi du lịch đại trà. Khách du lịch một mình có thể cân nhắc các thị trấn nhỏ hơn, thích hợp đi bộ, cho phép di chuyển dễ dàng và trải nghiệm văn hóa sâu sắc hơn. Trước khi khởi hành, bạn cũng nên chia sẻ lịch trình với gia đình hoặc bạn bè, tải xuống bản đồ ngoại tuyến để giảm bớt căng thẳng khi di chuyển, và hành lý gọn nhẹ để giữ tính tự lực.

[ĐOẠN 2] Khi ở nước ngoài, việc tôn trọng các phong tục địa phương, bao gồm cả quy định về trang phục, là rất quan trọng, vì điều này không chỉ thể hiện sự tôn trọng mà còn làm phong phú thêm trải nghiệm tổng thể và thúc đẩy sự kết nối với người địa phương. Khi đến nơi, du khách nên xin lời khuyên từ nhân viên nhà nghỉ. Để bảo vệ tài chính, chỉ nên mang theo một thẻ ngân hàng, cất giữ tiền mặt ở các túi riêng biệt và tránh chia sẻ vị trí theo thời gian thực trên mạng. Cuối cùng, du khách nên cân nhắc tham gia các sự kiện địa phương hoặc hoạt động nhóm nhỏ, giúp họ giao lưu tốt hơn với những người khác trong khi vẫn khám phá được những viên ngọc ẩn giấu nằm ngoài những con đường du lịch thông thường.`;

const PASSAGE_NIGHT_SKY = `Preserving the Night Sky: The Fight Against Light Pollution

At a time when interest in astronomy is on the increase, amateur astronomers (18) ____________. The reason for this is that the night sky is gradually being lost due to light pollution, (19) ____________. In response to this growing threat, the International Dark Sky Association has decided to award Dark Sky Reserve status to places that have so far escaped the adverse effects of light pollution. (20) ____________. Up to now, only a handful of places have been granted Dark Sky Reserve Status, but there are plans for others to be added so that amateur astronomers can continue to enjoy the night sky just as much as their professional counterparts. (21) ____________. Additionally, educational programs are also being developed to raise awareness among communities about the importance of reducing light pollution. If consistently supported by the governments and citizens, (22) ____________.`;

const PASSAGE_NIGHT_SKY_TRANS = `[ĐOẠN 1] BẢO TỒN BẦU TRỜI ĐÊM: CUỘC CHIẾN CHỐNG Ô NHIỄM ÁNH SÁNG

Trong thời điểm mà sự quan tâm đến thiên văn học ngày càng tăng, các nhà thiên văn nghiệp dư đang ngày càng khó quan sát Dải Ngân hà từ sân sau của họ. Lý do là bầu trời đêm đang dần mất đi do ô nhiễm ánh sáng, đe dọa khiến thiên văn học trở thành đặc quyền chỉ dành cho các nhà khoa học. Để ứng phó với mối đe dọa ngày càng tăng này, Hiệp hội Bầu trời Đêm Quốc tế đã quyết định trao danh hiệu Khu Bảo tồn Bầu trời Đêm cho những nơi cho đến nay vẫn thoát khỏi tác động tiêu cực của ô nhiễm ánh sáng.

[ĐOẠN 2] Cho đến nay, mới chỉ có một số ít nơi được cấp danh hiệu Khu Bảo tồn Bầu trời Đêm, nhưng có kế hoạch bổ sung những nơi khác để các nhà thiên văn nghiệp dư có thể tiếp tục tận hưởng bầu trời đêm nhiều như các đồng nghiệp chuyên nghiệp. Ngoài ra, các chương trình giáo dục cũng đang được phát triển để nâng cao nhận thức trong cộng đồng về tầm quan trọng của việc giảm ô nhiễm ánh sáng. Nếu được ủng hộ nhất quán bởi chính quyền và người dân, chúng ta có thể bảo vệ vẻ đẹp huyền diệu của bầu trời đêm cho thế hệ tương lai.`;

const PASSAGE_JOB_HUGGING = `The contemporary employment landscape is witnessing a notable shift in employee behavior, moving away from the previously prevalent trend of 'job hopping'. For years, frequent job changes were often perceived negatively, sometimes even discrediting an employee's commitment. However, recent data suggests a significant decline in voluntary resignations. This new phenomenon, termed 'job hugging', describes a situation where employees opt to remain in their current positions, effectively 'holding tight' to their jobs.

Statistics from the American labor market indicate a substantial decrease in the number of workers quitting their jobs compared to previous years, highlighting this evolving trend. Data from 2024 shows that 39.6 million Americans resigned from their jobs, an 11% drop from 2023 and a significant 22% decrease compared to 2022. This sharp decline reflects a major shift in employee attitudes, with many individuals choosing to "hug" their current jobs rather than risk changing roles.

This hesitation to switch roles is primarily driven by shifting economic realities rather than increased corporate loyalty. Tougher economic conditions, including financial instability, widespread layoffs and a general fear of unemployment, have made job security a paramount concern for many. Consequently, the perceived risks associated with seeking new opportunities often outweigh the potential benefits, such as higher salaries or career advancement. Employees are, therefore, prioritizing stability within their existing companies over the uncertainty of the external job market.

A common characteristic of individuals engaged in 'job hugging' is a heightened aversion to risk-taking in their career decisions. They may continue in roles even when experiencing dissatisfaction, choosing to endure familiar challenges rather than venturing into the unknown. This often involves valuing job security above personal growth or exploring new career paths. For these employees, the fear of a worse outcome in a new environment often compels them to stay put, even when other opportunities might exist. This pattern suggests a strategic decision to minimize exposure to market volatility.`;

const PASSAGE_JOB_HUGGING_TRANS = `[ĐOẠN 1] Bối cảnh việc làm hiện nay đang chứng kiến một sự chuyển dịch đáng chú ý trong hành vi của người lao động, khi họ dần rời xa xu hướng “nhảy việc” vốn phổ biến trước đây. Trong nhiều năm, việc thường xuyên thay đổi công việc thường bị nhìn nhận tiêu cực, thậm chí làm giảm uy tín về mức độ cam kết của một nhân viên. Tuy nhiên, dữ liệu gần đây cho thấy số lượng người tự nguyện nghỉ việc đang giảm mạnh. Hiện tượng mới này, được gọi là “ôm việc” (job hugging), mô tả tình trạng người lao động lựa chọn ở lại vị trí hiện tại, tức là “giữ thật chặt” công việc của mình.

[ĐOẠN 2] Thống kê từ thị trường lao động Mỹ chỉ ra sự giảm sút đáng kể về số lượng công nhân nghỉ việc so với những năm trước, làm nổi bật xu hướng đang phát triển này. Dữ liệu từ năm 2024 cho thấy có 39,6 triệu người Mỹ nộp đơn xin nghỉ việc, giảm 11% so với năm 2023 và giảm tới 22% so với năm 2022. Sự sụt giảm mạnh mẽ này phản ánh một sự thay đổi lớn trong thái độ của nhân viên, với nhiều cá nhân lựa chọn "ôm" công việc hiện tại hơn là mạo hiểm thay đổi vai trò.

[ĐOẠN 3] Sự do dự trong việc chuyển đổi vai trò này chủ yếu xuất phát từ thực tế kinh tế thay đổi hơn là sự gia tăng lòng trung thành với công ty. Điều kiện kinh tế khó khăn hơn, bao gồm sự bất ổn tài chính, làn sóng sa thải diện rộng và nỗi sợ thất nghiệp chung, đã khiến an toàn việc làm trở thành mối quan tâm hàng đầu của nhiều người. Do đó, những rủi ro nhận thấy khi tìm kiếm cơ hội mới thường vượt quá lợi ích tiềm năng, chẳng hạn như mức lương cao hơn hoặc sự thăng tiến trong sự nghiệp. Vì vậy, người lao động đang ưu tiên sự ổn định trong công ty hiện tại hơn là sự bất định của thị trường lao động bên ngoài.

[ĐOẠN 4] Một đặc điểm chung của những cá nhân tham gia xu hướng “ôm việc” là mức độ né tránh rủi ro cao hơn trong các quyết định nghề nghiệp của họ. Họ có thể tiếp tục đảm nhận các vai trò ngay cả khi cảm thấy không hài lòng, lựa chọn chịu đựng những thách thức quen thuộc thay vì dấn thân vào những điều chưa biết. Điều này thường bao gồm việc coi trọng an toàn việc làm hơn sự phát triển cá nhân hoặc khám phá các con đường nghề nghiệp mới. Đối với những nhân viên này, nỗi sợ về một kết quả tồi tệ hơn trong môi trường mới thường buộc họ phải ở yên một chỗ, ngay cả khi các cơ hội khác có thể tồn tại. Mô hình này gợi ý một quyết định mang tính chiến lược nhằm giảm thiểu sự tiếp xúc với biến động thị trường.`;

const PASSAGE_AI_COGNITION = `The rapid proliferation of artificial intelligence (AI) tools, particularly generative AI, has sparked a profound debate concerning their impact on human cognition. While celebrated for their capacity to enhance productivity and automate complex tasks, a growing body of research suggests that an over-reliance on these technologies might inadvertently blunt our thinking skills. This apprehension echoes historical concerns, such as Socrates's distrust of the written word, which he feared would diminish memory and intellectual rigor. Though the great philosopher's specific fears about writing proved unfounded, the underlying anxiety about new cognitive technologies and their potential to reshape our mental faculties persists in the age of AI.

Empirical studies are now providing concrete evidence for these contemporary worries. Researchers have observed that even seasoned professionals tend to disengage their critical thinking skills when routinely using generative AI for tasks requiring analysis or synthesis. Furthermore, excessive dependence on AI during learning processes has been linked to reduced brain connectivity and a decrease in the memorability of information. This phenomenon is often attributed to a maladaptive form of "cognitive offloading," where instead of using AI to free up mental resources for higher-order thinking, individuals delegate fundamental cognitive processes entirely. Such delegation, when unchecked, hinders the development and maintenance of essential mental muscles, potentially transforming our minds into mere passive recipients rather than active processors of information.

[I] However, the narrative is not entirely one of decline. Many experts propose that AI, when leveraged judiciously, can serve as a powerful tool for human intelligence. The key lies in shifting from passive consumption to active, critical engagement. [II] Instead of asking AI for complete answers, users can employ it to generate diverse perspectives, identify potential biases, or even challenge their own assumptions. This approach transforms AI from a crutch into a sparring partner, fostering a dynamic interaction that can sharpen reasoning and deepen understanding. [III] Strategies include fact-checking AI outputs, iteratively refining prompts to encourage deeper processing, and dedicating mental effort to understanding why AI provides certain information. The challenge, therefore, is not to reject AI, but to cultivate a mindful approach to its integration into our daily lives and professional practices. [IV]

By understanding the mechanisms of cognitive offloading and consciously designing interactions that promote active learning and critical evaluation, we can harness AI's immense potential without succumbing to its pitfalls. This requires a concerted effort from individuals, educators, and developers to foster "AI literacy" - the ability to effectively and ethically engage with AI technologies. Ultimately, the future impact of AI on human cognition will be less about the technology's inherent nature and more about how we choose to interact with it.`;

const PASSAGE_AI_COGNITION_TRANS = `[ĐOẠN 1] Sự bùng nổ nhanh chóng của các công cụ trí tuệ nhân tạo (AI), đặc biệt là AI tạo sinh, đã làm dấy lên một cuộc tranh luận sâu sắc về tác động của chúng đối với nhận thức của con người. Dù được ca ngợi vì khả năng nâng cao năng suất và tự động hóa những nhiệm vụ phức tạp, ngày càng có nhiều nghiên cứu cho thấy sự phụ thuộc quá mức vào các công nghệ này có thể vô tình làm suy giảm kỹ năng tư duy của chúng ta. Sự e ngại này gợi lại những lo ngại trong lịch sử, chẳng hạn như sự hoài nghi của Socrates đối với chữ viết, điều mà ông e rằng sẽ làm giảm trí nhớ và sự chặt chẽ về trí tuệ. Mặc dù những mối lo ngại cụ thể của nhà triết học vĩ đại về việc viết lách đã được chứng minh là không có cơ sở, nhưng mối an hại cốt lõi về các công nghệ nhận thức mới và tiềm năng tái hình thành các năng lực tinh thần của chúng ta vẫn tồn tại trong thời đại AI.

[ĐOẠN 2] Các nghiên cứu thực nghiệm hiện đang cung cấp bằng chứng cụ thể cho những lo lắng đương đại này. Các nhà nghiên cứu đã quan sát thấy rằng ngay cả những chuyên gia dày dạn kinh nghiệm cũng có xu hướng ngưng sử dụng kỹ năng tư duy phản biện khi thường xuyên sử dụng AI tạo sinh cho các nhiệm vụ yêu cầu phân tích hoặc tổng hợp. Hơn nữa, sự phụ thuộc quá mức vào AI trong quá trình học tập có liên quan đến việc giảm kết nối não bộ và giảm khả năng ghi nhớ thông tin. Hiện tượng này thường được quy cho một hình thức "giải phóng nhận thức" (cognitive offloading) không thích ứng, nơi thay vì sử dụng AI để giải phóng tài nguyên tinh thần cho tư duy bậc cao, các cá nhân lại ủy quyền hoàn toàn các quá trình nhận thức cơ bản. Sự ủy quyền như vậy, khi không được kiểm soát, sẽ cản trở sự phát triển và duy trì các cơ bắp tinh thần thiết yếu, có khả năng biến tâm trí chúng ta thành những người tiếp nhận thụ động thuần túy thay vì những bộ xử lý thông tin tích cực.

[ĐOẠN 3] Tuy nhiên, câu chuyện không hoàn toàn chỉ là sự suy thoái. Nhiều chuyên gia đề xuất rằng AI, khi được tận dụng một cách khôn khéo, có thể đóng vai trò là một công cụ mạnh mẽ cho trí tuệ con người. Mấu chốt nằm ở việc chuyển từ tiêu thụ thụ động sang sự tham gia tích cực, có phản biện. Thay vì yêu cầu AI đưa ra câu trả lời hoàn chỉnh, người dùng có thể sử dụng nó để tạo ra các góc nhìn đa dạng, nhận diện các định kiến tiềm ẩn hoặc thậm chí thách thức các giả định của chính mình. Cách tiếp cận này biến AI từ một chiếc nạng thành một đối thủ luyện tập, thúc đẩy sự tương tác năng động có thể gọt dũa khả năng lý luận và đào sâu sự hiểu biết. Các chiến lược bao gồm kiểm tra thực tế các đầu ra của AI, tinh chỉnh các câu lệnh một cách lặp đi lặp lại để khuyến khích xử lý sâu hơn, và dành nỗ lực tinh thần để hiểu lý do tại sao AI cung cấp thông tin nhất định. Thách thức, do đó, không phải là từ bỏ AI, mà là nuôi dưỡng một cách tiếp cận tỉnh thức đối với sự tích hợp của nó vào đời sống hàng ngày và thực hành chuyên môn của chúng ta.

[ĐOẠN 4] Bằng cách hiểu các cơ chế giải phóng nhận thức và chủ động thiết kế các tương tác thúc đẩy học tập tích cực và đánh giá phản biện, chúng ta có thể khai thác tiềm năng to lớn của AI mà không gục ngã trước những bẫy ngầm của nó. Điều này đòi hỏi một nỗ lực phối hợp từ các cá nhân, các nhà giáo dục và các nhà phát triển để thúc đẩy "năng lực số AI" (AI literacy) - khả năng tương tác hiệu quả và có đạo đức với các công nghệ AI. Cuối cùng, tác động tương lai của AI đối với nhận thức con người sẽ ít phụ thuộc vào bản chất vốn có của công nghệ hơn là cách chúng ta lựa chọn tương tác với nó.`;

export const CHUYEN_BAC_GIANG_2026_QUESTIONS: Question[] = [
  {
    id: 'cbg-q1',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUMEC,
    passageTranslation: PASSAGE_YOUMEC_TRANS,
    questionText: 'Question 1. an (1) _____ leader in medical tourism!',
    options: [
      { id: 'A', text: 'unrivaled', translation: 'vô song / không có đối thủ' },
      { id: 'B', text: 'unbothered', translation: 'không bận tâm' },
      { id: 'C', text: 'underscored', translation: 'được nhấn mạnh' },
      { id: 'D', text: 'underlined', translation: 'được gạch chân' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "unrivaled" (vô song, không đối thủ) phù hợp hoàn hảo để miêu tả vị thế bệnh viện hàng đầu. Chọn A.',
    translation: 'Một đơn vị vô song trong lĩnh vực du lịch y tế!',
    topicTag: 'Từ vựng Nâng cao'
  },
  {
    id: 'cbg-q2',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUMEC,
    passageTranslation: PASSAGE_YOUMEC_TRANS,
    questionText: 'Question 2. Our JCI-accredited facilities offer (2) _____ cutting-edge treatments',
    options: [
      { id: 'A', text: 'much', translation: 'dùng với N không đếm được' },
      { id: 'B', text: 'few', translation: 'phủ định' },
      { id: 'C', text: 'many', translation: 'nhiều' },
      { id: 'D', text: 'a little', translation: 'một ít' }
    ],
    correctAnswer: 'C',
    explanation: '• "Treatments" là danh từ đếm được số nhiều -> dùng từ định lượng "many". Chọn C. many.',
    translation: 'Cơ sở của chúng tôi cung cấp nhiều phương pháp điều trị tiên tiến.',
    topicTag: 'Từ định lượng'
  },
  {
    id: 'cbg-q3',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUMEC,
    passageTranslation: PASSAGE_YOUMEC_TRANS,
    questionText: 'Question 3. powered by stronger partnerships with global (3) _____ like The John Hopkins Hospital',
    options: [
      { id: 'A', text: 'founders', translation: 'người sáng lập' },
      { id: 'B', text: 'initiators', translation: 'người khởi xướng' },
      { id: 'C', text: 'giants', translation: 'những gã khổng lồ / ông lớn toàn cầu' },
      { id: 'D', text: 'bosses', translation: 'ông chủ' }
    ],
    correctAnswer: 'C',
    explanation: '• Collocation "global giants" ám chỉ các tập đoàn/bệnh viện lớn hàng đầu thế giới. Chọn C. giants.',
    translation: 'Bởi mối quan hệ hợp tác chặt chẽ với các ông lớn toàn cầu như Bệnh viện Johns Hopkins.',
    topicTag: 'Collocation'
  },
  {
    id: 'cbg-q4',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUMEC,
    passageTranslation: PASSAGE_YOUMEC_TRANS,
    questionText: 'Question 4. (4) _____ our commitment to excellence, we provide seamless support',
    options: [
      { id: 'A', text: 'In comparison with', translation: 'so sánh với' },
      { id: 'B', text: 'In line with', translation: 'phù hợp với / tuân theo' },
      { id: 'C', text: 'In place of', translation: 'thay vì' },
      { id: 'D', text: 'In search of', translation: 'tìm kiếm' }
    ],
    correctAnswer: 'B',
    explanation: '• Cụm từ cố định: "In line with our commitment..." = Phù hợp với cam kết về sự xuất sắc của chúng tôi. Chọn B.',
    translation: 'Phù hợp với cam kết chất lượng của chúng tôi, chúng tôi mang đến sự hỗ trợ liền mạch.',
    topicTag: 'Cụm giới từ'
  },
  {
    id: 'tpht-q5',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUMEC,
    passageTranslation: PASSAGE_YOUMEC_TRANS,
    questionText: 'Question 5. tailored diets, and (5) _____ high-end services.',
    options: [
      { id: 'A', text: 'the other', translation: 'cái còn lại' },
      { id: 'B', text: 'the others', translation: 'đại từ độc lập' },
      { id: 'C', text: 'another', translation: 'danh từ số ít' },
      { id: 'D', text: 'other', translation: 'other + danh từ số nhiều' }
    ],
    correctAnswer: 'D',
    explanation: '• "other + danh từ số nhiều" -> "other high-end services" (các dịch vụ cao cấp khác). Chọn D. other.',
    translation: 'Chế độ dinh dưỡng thiết kế riêng và các dịch vụ cao cấp khác.',
    topicTag: 'Từ định lượng & Other'
  },
  {
    id: 'cbg-q6',
    type: 'cloze_test',
    readingPassage: PASSAGE_YOUMEC,
    passageTranslation: PASSAGE_YOUMEC_TRANS,
    questionText: 'Question 6. Let\'s (6) _____ your strength and start your transformative medical journey',
    options: [
      { id: 'A', text: 'build up', translation: 'tăng cường / xây dựng' },
      { id: 'B', text: 'turn up', translation: 'xuất hiện' },
      { id: 'C', text: 'buckle up', translation: 'thắt dây an toàn' },
      { id: 'D', text: 'glow up', translation: 'lột xác' }
    ],
    correctAnswer: 'A',
    explanation: '• Phrasal verb "build up your strength" (tăng cường/củng cố sức khỏe). Chọn A. build up.',
    translation: 'Hãy cùng tăng cường sức khỏe của bạn và bắt đầu hành trình điều trị!',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'cbg-q7',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOLO_TRAVEL,
    passageTranslation: PASSAGE_SOLO_TRAVEL_TRANS,
    questionText: 'Question 7. ensure both safety and the (7) _____ of authentic experiences.',
    options: [
      { id: 'A', text: 'chase', translation: 'sự rượt đuổi' },
      { id: 'B', text: 'hunt', translation: 'cuộc đi săn' },
      { id: 'C', text: 'pursuit', translation: 'sự theo đuổi' },
      { id: 'D', text: 'purchase', translation: 'sự mua bán' }
    ],
    correctAnswer: 'C',
    explanation: '• Cụm danh từ: "the pursuit of authentic experiences" (sự theo đuổi những trải nghiệm chân thực). Chọn C. pursuit.',
    translation: 'Đảm bảo cả sự an toàn và sự theo đuổi những trải nghiệm chân thực.',
    topicTag: 'Từ vựng'
  },
  {
    id: 'cbg-q8',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOLO_TRAVEL,
    passageTranslation: PASSAGE_SOLO_TRAVEL_TRANS,
    questionText: 'Question 8. choosing a destination that is welcoming but not (8) _____ by mass tourism.',
    options: [
      { id: 'A', text: 'mitigated', translation: 'giảm nhẹ' },
      { id: 'B', text: 'overwhelmed', translation: 'bị tràn ngập / quá tải' },
      { id: 'C', text: 'enhanced', translation: 'tăng cường' },
      { id: 'D', text: 'worsened', translation: 'làm tệ đi' }
    ],
    correctAnswer: 'B',
    explanation: '• Cụm "not overwhelmed by mass tourism" = không bị tràn ngập/quá tải bởi du lịch đại trà. Chọn B. overwhelmed.',
    translation: 'Lựa chọn một điểm đến thân thiện nhưng không (8) _____ bởi du lịch đại trà.',
    topicTag: 'Từ vựng & Giới từ'
  },
  {
    id: 'cbg-q9',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOLO_TRAVEL,
    passageTranslation: PASSAGE_SOLO_TRAVEL_TRANS,
    questionText: 'Question 9. being mindful (9) _____ local customs, including dress codes',
    options: [
      { id: 'A', text: 'of', translation: 'of' },
      { id: 'B', text: 'with', translation: 'với' },
      { id: 'C', text: 'for', translation: 'cho' },
      { id: 'D', text: 'in', translation: 'trong' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc tính từ + giới từ: "be mindful of something" (lưu tâm/chú ý đến cái gì). Chọn A. of.',
    translation: 'Lưu tâm đến các phong tục địa phương bao gồm quy tắc ăn mặc.',
    topicTag: 'Tính từ + Giới từ'
  },
  {
    id: 'cbg-q10',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOLO_TRAVEL,
    passageTranslation: PASSAGE_SOLO_TRAVEL_TRANS,
    questionText: 'Question 10. travelers should seek (10) _____ from hostel staff.',
    options: [
      { id: 'A', text: 'safety advice practical', translation: 'sai trật tự' },
      { id: 'B', text: 'advice safety practical', translation: 'sai trật tự' },
      { id: 'C', text: 'practical advice safety', translation: 'sai trật tự' },
      { id: 'D', text: 'practical safety advice', translation: 'lời khuyên an toàn mang tính thực tiễn' }
    ],
    correctAnswer: 'D',
    explanation: '• Trật tự cụm danh từ: Tính từ bổ nghĩa "practical" + Danh từ ghép "safety advice" -> "practical safety advice". Chọn D.',
    translation: 'Du khách nên tìm lời khuyên an toàn mang tính thực tiễn từ nhân viên hostel.',
    topicTag: 'Trật tự Cụm Danh từ'
  },
  {
    id: 'cbg-q11',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOLO_TRAVEL,
    passageTranslation: PASSAGE_SOLO_TRAVEL_TRANS,
    questionText: 'Question 11. travelers should consider (11) _____ local events or small group activities',
    options: [
      { id: 'A', text: 'join', translation: 'nguyên mẫu' },
      { id: 'B', text: 'joining', translation: 'dạng V-ing' },
      { id: 'C', text: 'to join', translation: 'dạng to V' },
      { id: 'D', text: 'to joining', translation: 'sai cấu trúc' }
    ],
    correctAnswer: 'B',
    explanation: '• Cấu trúc động từ: "consider + V-ing" (cân nhắc làm gì). Chọn B. joining.',
    translation: 'Du khách nên cân nhắc tham gia các sự kiện địa phương.',
    topicTag: 'Danh động từ V-ing'
  },
  {
    id: 'cbg-q12',
    type: 'cloze_test',
    readingPassage: PASSAGE_SOLO_TRAVEL,
    passageTranslation: PASSAGE_SOLO_TRAVEL_TRANS,
    questionText: 'Question 12. enables them to engage (12) _____ with other people',
    options: [
      { id: 'A', text: 'mean', translation: 'động từ' },
      { id: 'B', text: 'meaningfully', translation: 'một cách có ý nghĩa' },
      { id: 'C', text: 'meaning', translation: 'danh từ' },
      { id: 'D', text: 'meaningful', translation: 'tính từ' }
    ],
    correctAnswer: 'B',
    explanation: '• Đứng sau động từ "engage" cần trạng từ "meaningfully" bổ nghĩa cho hành động tương tác. Chọn B. meaningfully.',
    translation: 'Giúp họ tương tác một cách có ý nghĩa với những người khác.',
    topicTag: 'Trạng từ'
  },
  {
    id: 'cbg-q13',
    type: 'reordering',
    questionText: 'Question 13. Choose the best arrangement of the sentences to make a meaningful conversation:\na. Customer: Could I get a matcha latte with salted cream on top, please?\nc. Barista: No problem! Do you want it iced or hot?\nb. Customer: It\'s June, so I\'m definitely treating myself to a cold one.',
    options: [
      { id: 'A', text: 'c – b – a', translation: 'c-b-a' },
      { id: 'B', text: 'a – c – b', translation: 'a-c-b' },
      { id: 'C', text: 'a – b – c', translation: 'a-b-c' },
      { id: 'D', text: 'b – c – a', translation: 'b-c-a' }
    ],
    correctAnswer: 'B',
    explanation: '• a (khách gọi món matcha latte) -> c (nhân viên hỏi uống đá hay nóng) -> b (khách chọn uống lạnh vì là tháng Sáu). Trật tự: a - c - b. Chọn B.',
    translation: 'Sắp xếp hội thoại gọi đồ uống.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'cbg-q14',
    type: 'reordering',
    questionText: 'Question 14. Choose the best arrangement of the sentences to make a meaningful conversation:\na. Mia: Hey, have you started revising for the graduation exam yet?\nd. Sam: Yeah, I\'ve been hitting the books hard, especially for math. It\'s tougher than I thought!\ne. Mia: Tell me about it! I\'m freaking out over chemistry. Want to study together this weekend?\nb. Sam: That\'d be awesome. We could quiz each other and sort out the tricky topics.\nc. Mia: Perfect! Let\'s meet at my place on Saturday and power through those practice tests.',
    options: [
      { id: 'A', text: 'a – d – e – b – c', translation: 'a-d-e-b-c' },
      { id: 'B', text: 'a – d – c – b – e', translation: 'a-d-c-b-e' },
      { id: 'C', text: 'e – d – a – b – c', translation: 'e-d-a-b-c' },
      { id: 'D', text: 'e – b – a – d – c', translation: 'e-b-a-d-c' }
    ],
    correctAnswer: 'A',
    explanation: '• a (Mia hỏi bắt đầu ôn thi chưa) -> d (Sam bảo đang ôn toán) -> e (Mia đồng cảm lo môn Hóa và rủ học chung) -> b (Sam đồng ý rủ học nhóm) -> c (Mia chốt thời gian thứ Bảy). Trật tự: a - d - e - b - c. Chọn A.',
    translation: 'Sắp xếp hội thoại học nhóm ôn thi.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'cbg-q15',
    type: 'reordering',
    questionText: 'Question 15. Choose the best arrangement of the sentences to form a complete formal request letter:\nb. On behalf of the Music Club, I am writing to respectfully request your permission to organize a musical event on school premises to raise funds for Heart of Gold.\nd. We propose holding this event on 15th December in the school\'s auditorium, aiming to showcase our students\' musical talent for a worthy cause.\na. We believe this event will foster community spirit and allow students to contribute meaningfully to Heart of Gold.\nc. We commit to handling all logistics, including supervision and financial reporting, responsibly.\ne. For further information, I am available to meet at your convenience to discuss this further. Thank you for considering our request.',
    options: [
      { id: 'A', text: 'b – d – a – e – c', translation: 'b-d-a-e-c' },
      { id: 'B', text: 'b – d – a – c – e', translation: 'b-d-a-c-e' },
      { id: 'C', text: 'b – a – c – d – e', translation: 'b-a-c-d-e' },
      { id: 'D', text: 'b – e – a – d – c', translation: 'b-e-a-d-c' }
    ],
    correctAnswer: 'B',
    explanation: '• b mở đầu xin phép tổ chức sự kiện -> d đề xuất thời gian địa điểm -> a ý nghĩa sự kiện -> c cam kết trách nhiệm hậu cần -> e lời kết thư mời thảo luận thêm. Trật tự: b - d - a - c - e. Chọn B.',
    translation: 'Sắp xếp thư xin phép tổ chức sự kiện.',
    topicTag: 'Sắp xếp thư trang trọng'
  },
  {
    id: 'cbg-q16',
    type: 'reordering',
    questionText: 'Question 16. Choose the best arrangement of the sentences to form a coherent text:\ne. The rise of social media has profoundly transformed how natural landmarks are discovered and experienced.\nc. A prime example is Horseshoe Bend, a spectacular U-shaped curve in the Colorado River.\nb. Once considered a hidden gem, known only to a few locals and accessible via an unmarked trail in the early 1990s, its visitor numbers have dramatically surged.\nd. Social networking platforms, particularly Instagram, have acted as a powerful catalyst for this transformation.\na. However, this sudden exposure can be overwhelming, placing immense pressure on its delicate ecosystems and resources.',
    options: [
      { id: 'A', text: 'd – e – c – b – a', translation: 'd-e-c-b-a' },
      { id: 'B', text: 'e – b – d – a – c', translation: 'e-b-d-a-c' },
      { id: 'C', text: 'e – c – a – d – b', translation: 'e-c-a-d-b' },
      { id: 'D', text: 'e – c – b – d – a', translation: 'e-c-b-d-a' }
    ],
    correctAnswer: 'D',
    explanation: '• e mở đoạn mạng xã hội đổi thay danh thắng -> c ví dụ Horseshoe Bend -> b quá khứ đến hiện tại tăng vọt khách -> d Instagram là chất xúc tác -> a kết luận hệ quả áp lực hệ sinh thái. Trật tự: e - c - b - d - a. Chọn D.',
    translation: 'Sắp xếp đoạn văn danh thắng thiên nhiên.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'cbg-q17',
    type: 'reordering',
    questionText: 'Question 17. Choose the best arrangement of the sentences to form a coherent text:\nb. Career paths have evolved dramatically over the years, with more options available than ever before.\nc. The rise of digital technologies has also created new jobs, especially in fields like IT, marketing, and online business.\nd. This shift in the job market has led to a surge in specialized education and training, giving people a chance to pursue various career interests.\na. However, despite this increase in opportunities, many fields still lack sufficient training programs, especially in smaller towns.\ne. As a result, more young people are seeking out non-traditional careers that allow for remote work and flexible schedules.',
    options: [
      { id: 'A', text: 'b – c – d – a – e', translation: 'b-c-d-a-e' },
      { id: 'B', text: 'b – d – c – a – e', translation: 'b-d-c-a-e' },
      { id: 'C', text: 'b – d – e – c – a', translation: 'b-d-e-c-a' },
      { id: 'D', text: 'd – b – e – c – a', translation: 'd-b-e-c-a' }
    ],
    correctAnswer: 'A',
    explanation: '• b mở đoạn sự nghiệp thay đổi -> c công nghệ số tạo việc làm mới -> d dẫn đến bùng nổ đào tạo -> a tuy nhiên thiếu chương trình ở thị trấn nhỏ -> e kết luận chọn công việc phi truyền thống. Trật tự: b - c - d - a - e. Chọn A.',
    translation: 'Sắp xếp đoạn văn con đường sự nghiệp.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'cbg-q18',
    type: 'cloze_test',
    readingPassage: PASSAGE_NIGHT_SKY,
    passageTranslation: PASSAGE_NIGHT_SKY_TRANS,
    questionText: 'Question 18. At a time when interest in astronomy is on the increase, amateur astronomers (18) _____.',
    options: [
      { id: 'A', text: 'those who observe the Milky Way from their back gardens face a tough challenge', translation: 'thiếu động từ chính' },
      { id: 'B', text: 'from their back gardens, experiencing difficulty growing in observing', translation: 'sai cấu trúc' },
      { id: 'C', text: 'who struggle with watching the Milky Way clearly from their back gardens', translation: 'mệnh đề quan hệ lửng' },
      { id: 'D', text: 'are finding it increasingly difficult to observe the Milky Way from their back gardens', translation: 'đang cảm thấy ngày càng khó quan sát Dải Ngân hà từ sân sau của họ' }
    ],
    correctAnswer: 'D',
    explanation: '• Đứng sau chủ ngữ "amateur astronomers" cần vị ngữ động từ chính: "are finding it increasingly difficult to observe...". Chọn D.',
    translation: 'Các nhà thiên văn nghiệp dư đang cảm thấy ngày càng khó quan sát Dải Ngân hà từ sân sau của họ.',
    topicTag: 'Cấu trúc Vị ngữ'
  },
  {
    id: 'cbg-q19',
    type: 'cloze_test',
    readingPassage: PASSAGE_NIGHT_SKY,
    passageTranslation: PASSAGE_NIGHT_SKY_TRANS,
    questionText: 'Question 19. the night sky is gradually being lost due to light pollution, (19) _____.',
    options: [
      { id: 'A', text: 'threatening to make astronomy a privilege that only scientists can enjoy', translation: 'đe dọa biến thiên văn học thành đặc quyền chỉ dành cho các nhà khoa học' },
      { id: 'B', text: 'that poses a threat to limit astronomy as a benefit exclusive to scientists', translation: 'dùng that sau phẩy sai' },
      { id: 'C', text: 'to make astronomy a privilege reserved just for scientific professionals', translation: 'biến thiên văn học thành đặc quyền chỉ dành cho các chuyên gia khoa học' },
      { id: 'D', text: 'potentially restricts astronomy to an enjoyment available only to scientists', translation: 'sai dạng' }
    ],
    correctAnswer: 'A',
    explanation: '• Dùng cụm phân từ V-ing "threatening to make..." đứng sau dấu phẩy để diễn tả hệ quả của ô nhiễm ánh sáng. Chọn A.',
    translation: 'Đe dọa biến thiên văn học thành đặc quyền chỉ dành cho các nhà khoa học.',
    topicTag: 'Rút gọn Mệnh đề V-ing chỉ hệ quả'
  },
  {
    id: 'cbg-q20',
    type: 'cloze_test',
    readingPassage: PASSAGE_NIGHT_SKY,
    passageTranslation: PASSAGE_NIGHT_SKY_TRANS,
    questionText: 'Question 20. Fill in blank (20):',
    options: [
      { id: 'A', text: 'When such a place is given this award, in recognition of its exceptional night skies, it is protected by regulations to prevent light pollution', translation: 'Khi một nơi được trao danh hiệu này, nơi đó sẽ được bảo vệ bởi các quy định' },
      { id: 'B', text: 'Furthermore, this award can serve as a marketing tactic to draw in more investors', translation: 'sai mục đích bảo tồn' },
      { id: 'C', text: 'After receiving this award, such a location remains susceptible to light pollution', translation: 'mâu thuẫn ý' },
      { id: 'D', text: 'This recognition serves as proof, notwithstanding its being protected', translation: 'gượng gạo' }
    ],
    correctAnswer: 'A',
    explanation: '• A giải thích đúng ý nghĩa và quy định bảo vệ khi một nơi được trao danh hiệu Khu Dự trữ Bầu trời Tối. Chọn A.',
    translation: 'Khi một nơi được trao danh hiệu này, nó sẽ được bảo vệ bởi các quy định ngăn ô nhiễm ánh sáng.',
    topicTag: 'Điền câu hoàn thành đoạn'
  },
  {
    id: 'cbg-q21',
    type: 'cloze_test',
    readingPassage: PASSAGE_NIGHT_SKY,
    passageTranslation: PASSAGE_NIGHT_SKY_TRANS,
    questionText: 'Question 21. Fill in blank (21):',
    options: [
      { id: 'A', text: 'Some cities\' authorities in the world have already implemented very strict lighting rules', translation: 'chưa tạo cầu nối' },
      { id: 'B', text: 'This raises the question of whether it is important to put efforts into preserving the dark sky', translation: 'sai logic' },
      { id: 'C', text: 'In order to protect the dark sky from disappearing, it is more important to expand cities', translation: 'ngược logic' },
      { id: 'D', text: 'These efforts are crucial as increasing urbanization continues to worsen the problem, making dark sky preservation a global priority', translation: 'Những nỗ lực này là vô cùng quan trọng khi quá trình đô thị hóa làm vấn đề trầm trọng hơn' }
    ],
    correctAnswer: 'D',
    explanation: '• D đóng vai trò cầu nối giải thích lý do vì sao cần nỗ lực bảo tồn trước áp lực đô thị hóa. Chọn D.',
    translation: 'Những nỗ lực này là vô cùng quan trọng khi đô thị hóa làm vấn đề trầm trọng hơn.',
    topicTag: 'Điền câu hoàn thành đoạn'
  },
  {
    id: 'cbg-q22',
    type: 'cloze_test',
    readingPassage: PASSAGE_NIGHT_SKY,
    passageTranslation: PASSAGE_NIGHT_SKY_TRANS,
    questionText: 'Question 22. If consistently supported by the governments and citizens, (22) _____.',
    options: [
      { id: 'A', text: 'future generations will also be able to marvel at the stars, thanks to this initiative', translation: 'thiếu chủ ngữ chính' },
      { id: 'B', text: 'these initiatives will ensure that future generations can also marvel at the stars', translation: 'những sáng kiến này sẽ đảm bảo thế hệ tương lai cũng có thể ngắm sao' },
      { id: 'C', text: 'the ability to marvel at the stars for future generations is a key goal', translation: 'sai cấu trúc điều kiện' },
      { id: 'D', text: 'the stars can be marveled from anywhere for future generations', translation: 'bị động gượng gạo' }
    ],
    correctAnswer: 'B',
    explanation: '• Trong câu điều kiện "If consistently supported...", chủ ngữ vế sau phải tương ứng là "these initiatives". Chọn B.',
    translation: 'Những sáng kiến này sẽ đảm bảo thế hệ tương lai cũng có thể ngắm sao.',
    topicTag: 'Câu điều kiện rút gọn'
  },
  {
    id: 'cbg-q23',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_JOB_HUGGING,
    passageTranslation: PASSAGE_JOB_HUGGING_TRANS,
    questionText: 'Question 23. The word "discrediting" in paragraph 1 is CLOSEST in meaning to:',
    options: [
      { id: 'A', text: 'displacing', translation: 'thay thế' },
      { id: 'B', text: 'confirming', translation: 'xác nhận' },
      { id: 'C', text: 'degrading', translation: 'làm suy thoái' },
      { id: 'D', text: 'undermining', translation: 'làm suy yếu / làm mất uy tín' }
    ],
    correctAnswer: 'D',
    explanation: '• Từ "discrediting" = làm giảm niềm tin/uy tín = undermining (làm suy yếu). Chọn D. undermining.',
    translation: 'Từ "discrediting" trong đoạn 1 có nghĩa gần nhất với:',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'cbg-q24',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_JOB_HUGGING,
    passageTranslation: PASSAGE_JOB_HUGGING_TRANS,
    questionText: 'Question 24. Which of the following best paraphrases the underlined sentence in paragraph 1?',
    options: [
      { id: 'A', text: 'The American labor market shows that fewer people are leaving their jobs now than before, reflecting a new trend.', translation: 'Thị trường lao động Mỹ cho thấy hiện có ít người nghỉ việc hơn trước, phản ánh xu hướng mới' },
      { id: 'B', text: 'The evolving trend in the American labor market is a decrease in job hugging.', translation: 'Giảm job hugging' },
      { id: 'C', text: 'In the last couple of years, the number of workers quitting jobs has soared.', translation: 'Tăng vọt nghỉ việc' },
      { id: 'D', text: 'There are more workers deciding to commit to their jobs in the American labor market.', translation: 'Nhiều người cam kết hơn' }
    ],
    correctAnswer: 'A',
    explanation: '• A diễn đạt lại chính xác nhất câu "Statistics from the American labor market indicate a substantial decrease in the number of workers quitting...". Chọn A.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'cbg-q25',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_JOB_HUGGING,
    passageTranslation: PASSAGE_JOB_HUGGING_TRANS,
    questionText: 'Question 25. Which of the following is NOT mentioned in paragraph 3 as a factor contributing to job hugging?',
    options: [
      { id: 'A', text: 'widespread layoffs', translation: 'sa thải hàng loạt' },
      { id: 'B', text: 'fear of unemployment', translation: 'sợ thất nghiệp' },
      { id: 'C', text: 'career advancement', translation: 'cơ hội thăng tiến' },
      { id: 'D', text: 'financial instability', translation: 'bất ổn tài chính' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 3 liệt kê nguyên nhân: financial instability, widespread layoffs, fear of unemployment. "Career advancement" là lợi ích tiềm năng của nhảy việc bị bỏ qua chứ KHÔNG phải nguyên nhân khiến họ ở lại. Chọn C.',
    translation: 'Yếu tố KHÔNG được đề cập như một nguyên nhân dẫn đến ôm việc: Cơ hội thăng tiến.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'cbg-q26',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_JOB_HUGGING,
    passageTranslation: PASSAGE_JOB_HUGGING_TRANS,
    questionText: 'Question 26. Which of the following is TRUE according to paragraph 3?',
    options: [
      { id: 'A', text: 'Job security is less important than personal growth for job huggers.', translation: 'An toàn việc làm kém quan trọng hơn' },
      { id: 'B', text: 'Job huggers often leave their jobs if they are dissatisfied.', translation: 'Rời bỏ công việc khi không hài lòng' },
      { id: 'C', text: 'Job huggers are usually eager to take risks in their careers.', translation: 'Háo hức chấp nhận rủi ro' },
      { id: 'D', text: 'Job huggers may stay in roles despite feeling unhappy.', translation: 'Người ôm việc có thể tiếp tục ở lại vị trí dù cảm thấy không hạnh phúc' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 4 nêu: "They may continue in roles even when experiencing dissatisfaction" (Họ có thể tiếp tục ở lại vị trí dù không hài lòng). Chọn D.',
    translation: 'Phát biểu nào sau đây ĐÚNG theo bài đọc?',
    topicTag: 'Đọc hiểu - Thông tin TRUE'
  },
  {
    id: 'cbg-q27',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_JOB_HUGGING,
    passageTranslation: PASSAGE_JOB_HUGGING_TRANS,
    questionText: 'Question 27. The word "aversion" in paragraph 4 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'commitment', translation: 'sự cam kết' },
      { id: 'B', text: 'preference', translation: 'sự ưu tiên / yêu thích' },
      { id: 'C', text: 'trend', translation: 'xu hướng' },
      { id: 'D', text: 'negligence', translation: 'sự cẩu thả' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "aversion" = sự ác cảm, né tránh rủi ro. Trái nghĩa với nó là "preference" (sự yêu thích/ưu tiên). Chọn B. preference.',
    translation: 'Từ "aversion" trong đoạn 4 có nghĩa trái ngược với:',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'cbg-q28',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_JOB_HUGGING,
    passageTranslation: PASSAGE_JOB_HUGGING_TRANS,
    questionText: 'Question 28. The word "They" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'familiar challenges', translation: 'khó khăn quen thuộc' },
      { id: 'B', text: 'individuals', translation: 'những cá nhân / người lao động' },
      { id: 'C', text: 'career decisions', translation: 'quyết định nghề nghiệp' },
      { id: 'D', text: 'career paths', translation: 'con đường sự nghiệp' }
    ],
    correctAnswer: 'B',
    explanation: '• Trong câu "A common characteristic of individuals... They may continue...", "They" thay thế cho "individuals". Chọn B.',
    translation: 'Từ "They" ở đoạn 3 chỉ: individuals.',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'cbg-q29',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_JOB_HUGGING,
    passageTranslation: PASSAGE_JOB_HUGGING_TRANS,
    questionText: 'Question 29. Which paragraph provides data to show the increasing trend of "job hugging"?',
    options: [
      { id: 'A', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'B', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 2', translation: 'Đoạn 2' }
    ],
    correctAnswer: 'D',
    explanation: '• Đoạn 2 chứa thông tin số liệu cụ thể: "Data from 2024 shows that 39.6 million Americans resigned... An 11% drop". Chọn D (Paragraph 2).',
    translation: 'Đoạn nào cung cấp số liệu cho thấy xu hướng ôm việc?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'cbg-q30',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_JOB_HUGGING,
    passageTranslation: PASSAGE_JOB_HUGGING_TRANS,
    questionText: 'Question 30. Which paragraph mentions the definition of "job hugging"?',
    options: [
      { id: 'A', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'B', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 4', translation: 'Đoạn 4' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 1 định nghĩa khái niệm: "This new phenomenon, termed \'job hugging\', describes a situation where employees opt to remain...". Chọn A (Paragraph 1).',
    translation: 'Đoạn nào nêu định nghĩa của khái niệm ôm việc?',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'cbg-q31',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 31. The author mentions Socrates\'s historical concerns in paragraph 1 primarily to:',
    options: [
      { id: 'A', text: 'highlight the philosophical debate between ancient and modern thinkers', translation: 'nhấn mạnh cuộc tranh luận triết học' },
      { id: 'B', text: 'prove that historical anxieties about technology are always misplaced', translation: 'chứng minh nỗi lo luôn sai' },
      { id: 'C', text: 'suggest that writing, like AI, ultimately harms human memory', translation: 'gợi ý chữ viết gây hại trí nhớ' },
      { id: 'D', text: 'demonstrate a constant fear surrounding innovative cognitive technologies', translation: 'thể hiện nỗi sợ hãi dai dẳng xung quanh các công nghệ nhận thức mới' }
    ],
    correctAnswer: 'D',
    explanation: '• Tác giả nhắc đến lo ngại lịch sử của Socrates về chữ viết để minh chứng nỗi lo về công nghệ mới làm suy giảm trí não là một "nỗi sợ hãi thường trực xuyên suốt lịch sử". Chọn D.',
    translation: 'Tác giả nhắc đến lo ngại của Socrates ở đoạn 1 chủ yếu để: Cho thấy nỗi sợ dai dẳng xung quanh công nghệ nhận thức.',
    topicTag: 'Đọc hiểu - Mục đích tác giả'
  },
  {
    id: 'cbg-q32',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 32. Which of the following best summarizes the main idea of paragraph 2?',
    options: [
      { id: 'A', text: 'Experienced professionals are more susceptible to the negative cognitive effects of AI.', translation: 'Chuyên gia dễ bị ảnh hưởng hơn' },
      { id: 'B', text: 'Empirical evidence suggests over-reliance on AI can impair critical thinking and memory due to improper cognitive offloading.', translation: 'Bằng chứng thực nghiệm cho thấy phụ thuộc quá mức vào AI làm suy giảm tư duy phản biện và trí nhớ do giải phóng nhận thức sai cách' },
      { id: 'C', text: 'It has been argued among researchers whether AI tools are inherently detrimental.', translation: 'Tranh luận về tác hại của AI' },
      { id: 'D', text: 'Cognitive offloading is the use of external tools such as AI to reduce mental effort.', translation: 'Định nghĩa giải phóng nhận thức' }
    ],
    correctAnswer: 'B',
    explanation: '• B tóm tắt chính xác luận điểm chính của đoạn 2: Bằng chứng thực nghiệm cho thấy việc lạm dụng AI gây suy giảm tư duy và trí nhớ. Chọn B.',
    translation: 'Tóm tắt đúng nhất đoạn 2: Bằng chứng thực nghiệm cho thấy phụ thuộc AI quá mức làm suy giảm tư duy phản biện và trí nhớ.',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn'
  },
  {
    id: 'cbg-q33',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 33. Which of the following is NOT mentioned in the passage as a potential negative consequence of using generative AI excessively?',
    options: [
      { id: 'A', text: 'Reduced brain connectivity.', translation: 'Giảm kết nối não bộ' },
      { id: 'B', text: 'Lowered interpersonal competence.', translation: 'Giảm năng lực giao tiếp giữa người với người' },
      { id: 'C', text: 'Weakened mental muscles', translation: 'Suy yếu cơ bắp tinh thần' },
      { id: 'D', text: 'Decreased memorability of information.', translation: 'Giảm khả năng ghi nhớ thông tin' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 2 đề cập giảm kết nối não (A), yếu cơ bắp tinh thần (C), giảm trí nhớ (D). Chi tiết "Giảm năng lực giao tiếp giữa người với người" KHÔNG hề được nhắc đến. Chọn B.',
    translation: 'Chi tiết nào sau đây KHÔNG được đề cập trong đoạn văn?',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'cbg-q34',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 34. The phrase "apprehension" in paragraph 1 most likely means:',
    options: [
      { id: 'A', text: 'worry', translation: 'nỗi lo lắng / e sợ' },
      { id: 'B', text: 'uncertainty', translation: 'sự không chắc chắn' },
      { id: 'C', text: 'adversity', translation: 'nghịch cảnh' },
      { id: 'D', text: 'argument', translation: 'cuộc tranh luận' }
    ],
    correctAnswer: 'A',
    explanation: '• Từ "apprehension" = sự e sợ, lo ngại = worry/anxiety. Chọn A. worry.',
    translation: 'Từ "apprehension" trong đoạn 1 có nghĩa gần nhất với:',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'cbg-q35',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 35. The word "their" in paragraph 3 refers to:',
    options: [
      { id: 'A', text: 'biases\'', translation: 'thiên kiến' },
      { id: 'B', text: 'professionals\'', translation: 'chuyên gia' },
      { id: 'C', text: 'users\'', translation: 'người dùng (users can employ it to challenge their own assumptions)' },
      { id: 'D', text: 'perspectives\'', translation: 'góc nhìn' }
    ],
    correctAnswer: 'C',
    explanation: '• Trong câu "...users can employ it to generate diverse perspectives... Or even challenge their own assumptions", "their" thay thế cho "users". Chọn C.',
    translation: 'Từ "their" trong đoạn 3 quy chiếu đến từ / ý nào?',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'cbg-q36',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 36. Which of the following best paraphrases the underlined sentence in paragraph 2?',
    options: [
      { id: 'A', text: 'If left unregulated, delegating tasks to AI might prevent us from staying active.', translation: 'Nếu không kiểm soát' },
      { id: 'B', text: 'The uncontrolled usage of AI for mental tasks will inevitably impede cognitive growth.', translation: 'Cản trở phát triển' },
      { id: 'C', text: 'Giving mental tasks to AI, without proper oversight, can weaken cognitive development, leading to a state where minds passively accept information instead of actively engaging with it.', translation: 'Giao phó nhiệm vụ tinh thần cho AI mà không giám sát đúng mức có thể làm suy yếu nhận thức, biến tâm trí thành thụ động tiếp nhận' },
      { id: 'D', text: 'The unchecked delegation of mental responsibilities to AI has been reported to lead to a decline.', translation: 'Được báo cáo suy giảm' }
    ],
    correctAnswer: 'C',
    explanation: '• C diễn đạt lại chuẩn xác nhất câu "Such delegation, when unchecked, hinders the development... Potentially transforming our minds into mere passive recipients...". Chọn C.',
    translation: 'Câu nào sau đây diễn đạt lại đúng nhất câu được gạch chân trong đoạn văn?',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'cbg-q37',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 37. The phrase "succumbing to its pitfalls" in paragraph 4 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'falling into traps', translation: 'rơi vào bẫy' },
      { id: 'B', text: 'overcoming obstacles', translation: 'vượt qua các trở ngại' },
      { id: 'C', text: 'giving in to hazards', translation: 'chịu thua trước nguy cơ' },
      { id: 'D', text: 'yielding to challenges', translation: 'đầu hàng thử thách' }
    ],
    correctAnswer: 'B',
    explanation: '• Cụm "succumbing to its pitfalls" = gục ngã/đầu hàng trước cạm bẫy. Trái nghĩa với nó là "overcoming obstacles" (vượt qua các trở ngại). Chọn B.',
    translation: 'Cụm từ "succumbing to its pitfalls" trong đoạn 4 có nghĩa là gì?',
    topicTag: 'Đọc hiểu - Cụm từ trái nghĩa'
  },
  {
    id: 'cbg-q38',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 38. It can be inferred from the passage that developing \'AI literacy\' would primarily involve:',
    options: [
      { id: 'A', text: 'focusing solely on the technical aspects of AI development and programming', translation: 'Chỉ tập trung vào kỹ thuật lập trình' },
      { id: 'B', text: 'learning to critically evaluate, actively engage with, and ethically use AI technologies', translation: 'Học cách đánh giá phản biện, tương tác chủ động và sử dụng công nghệ AI một cách có đạo đức' },
      { id: 'C', text: 'passively accepting AI outputs to maximize efficiency and productivity', translation: 'Thụ động chấp nhận đầu ra' },
      { id: 'D', text: 'completely avoiding the use of generative AI tools', translation: 'Hoàn toàn tránh sử dụng AI' }
    ],
    correctAnswer: 'B',
    explanation: '• B suy luận chính xác từ đoạn 4: "foster \'AI literacy\' - the ability to effectively and ethically engage with AI technologies". Chọn B.',
    translation: 'Suy luận đúng về phát triển năng lực hiểu biết về AI: Học cách đánh giá phản biện, tương tác chủ động và dùng có đạo đức.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'cbg-q39',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 39. Where in the passage does the sentence "This means that users must consciously adopt strategies that encourage active thought rather than simply accepting AI-generated content." best fit?',
    options: [
      { id: 'A', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'B', text: '[IV]', translation: 'Vị trí [IV]' },
      { id: 'C', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'D', text: '[I]', translation: 'Vị trí [I]' }
    ],
    correctAnswer: 'C',
    explanation: '• Vị trí [II] làm cầu nối hoàn hảo giữa nguyên lý chuyển từ thụ động sang chủ động ở vế trước với ví dụ cụ thể về chiến lược dùng AI ở vế sau. Chọn C ([II]).',
    translation: 'Câu trên phù hợp nhất ở vị trí: [II].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'cbg-q40',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AI_COGNITION,
    passageTranslation: PASSAGE_AI_COGNITION_TRANS,
    questionText: 'Question 40. Which of the following best summarizes the main idea of the passage?',
    options: [
      { id: 'A', text: 'Cognitive offloading, a millennial-old strategy, is now being misused with AI.', translation: 'Lạm dụng giải phóng nhận thức' },
      { id: 'B', text: 'The debate surrounding AI\'s impact on human cognition is complex.', translation: 'Tranh luận phức tạp' },
      { id: 'C', text: 'While AI presents risks to cognitive function through over-reliance, mindful and active engagement can transform it into a powerful tool for intellectual augmentation.', translation: 'Mặc dù AI tiềm ẩn rủi ro đối với chức năng nhận thức khi bị phụ thuộc quá mức, sự chủ động và tỉnh thức trong cách sử dụng có thể biến AI thành công cụ hỗ trợ phát triển trí tuệ' },
      { id: 'D', text: 'Generative AI tools are fundamentally detrimental to human cognitive abilities.', translation: 'AI vốn dĩ gây hại' }
    ],
    correctAnswer: 'C',
    explanation: '• C tóm tắt cân bằng và chuẩn xác nhất cả 2 vế của toàn bài đọc: Rủi ro do phụ thuộc AI và giải pháp sử dụng tỉnh thức chủ động để biến AI thành công cụ hỗ trợ trí tuệ. Chọn C.',
    translation: 'Tóm tắt toàn bài: AI tiềm ẩn rủi ro khi lạm dụng, nhưng sự chủ động tỉnh thức có thể biến nó thành công cụ hỗ trợ phát triển trí tuệ.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  }
];

export const CHUYEN_BAC_GIANG_2026_EXAM: ExamSet = {
  id: 'exam-chuyen-bac-giang-2026',
  title: 'Đề Rèn Kĩ Năng Lần 1 2026 - THPT Chuyên Bắc Giang',
  description: 'Đề kiểm tra rèn kỹ năng làm bài lần 1 môn Tiếng Anh 12 năm học 2025 - 2026 của Trường THPT Chuyên Bắc Giang gồm 40 câu trắc nghiệm kèm lời giải chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'CHUYÊN BẮC GIANG 2026',
  iconName: 'Bookmark',
  questions: CHUYEN_BAC_GIANG_2026_QUESTIONS
};
