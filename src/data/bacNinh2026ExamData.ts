import type { ExamSet, Question } from '../types/quiz';

const PASSAGE_AURA = `In Gen Alpha vernacular, aura has no color associated with it and is decidedly not a spiritual thing. In fact, the word is really just used as a way to quantify somebody’s “cool factor.” If someone has so much aura, they are effortlessly cool and exude a coveted social status without even trying. Conversely, if a quiet kid who usually flies under the radar spills his juice on a popular student in the cafeteria, his ‘aura points’ will take a big hit. It is essentially a measure of how much respect or “coolness” you possess in a social situation at any given moment.

Pushing the strategy of being effortless too far brings us to the concept of aura farming. If you are hunting down aura points, flexing too hard, and inadvertently making a mockery of yourself by flaunting too much cool, you are in the business of aura farming. The terminology comes from the world of video games where “farming” refers to doing the same task over and over again to rack up points or rewards, such as slaying low-level monsters for better armor. Aura farming applies that concept to the social sphere, representing the subtle and exhausting art of projecting a curated vibe across your entire identity.

[I] In fact, aura farming can win you actual aura points if you do it successfully on social media and garner a following as a result. [II] The concept originated with a kid who took his dance moves to the front of a boat in Indonesia and became the country’s tourism ambassador. [III] Other examples of admirable aura farming include Michael Jackson, who many dub the original aura farmer, and Timothée Chalamet. [IV] Ultimately, the concept is saturated with irony, involving a person trying to be cool while maintaining an air of randomness to their curated content.

Gen Alpha loves this trend because they like to lean into absurdity, ambiguity, and randomness. It is difficult to say whether aura farming is a compliment or a dig because the impression is that it can go both ways. This trend requires a very delicate touch; do it right and you will go viral and become a really big deal, but do it wrong and you are just the butt of a joke. It is like a social stock market where anyone who goes public must be ready to take some risks and face the irony of their highly calculated yet seemingly random content.`;

const PASSAGE_AURA_TRANS = `Trong cách nói của Gen Alpha, từ aura không gắn với bất kỳ màu sắc nào và chắc chắn cũng không mang ý nghĩa tâm linh. Thực chất, từ này chỉ được dùng như một cách để đo lường “độ ngầu” của một người...`;

const PASSAGE_GENETICS = `Genetics has a much larger role in how long a person lives than previously thought, challenging decades of scientific consensus. About 55% of the human lifespan is heritable, meaning that more than half of the variation in longevity across a population is attributable to genetics. This is a much greater proportion than previous estimates of 10–25%, suggesting that genetics is a primary factor in the ageing process.

Previous estimates were too low because they did not effectively separate deaths caused by extrinsic factors, such as accidents, from intrinsic ones inside the body. To tease out these factors, researchers re-examined data from twin studies in Denmark and Sweden. By comparing identical twins, who share all their DNA, with fraternal twins, the team could accurately model the portion of lifespan determined specifically by genes.

Excluding deaths caused by extrinsic factors made the similarity in lifespans between genetically related individuals much clearer. This connection became more apparent over time owing to improved public-health measures. In data from the late 1800s, when people often died young from infections, the genetic signal was almost invisible. However, the calculated heritability rose naturally over the twentieth century as medical advancements reduced external risks.

Not all intrinsic causes of death are equally heritable; while cardiovascular disease showed high genetic influence, cancer showed much lower heritability, likely driven by environmental triggers. These results do not indicate a genetically encoded “destiny,” because healthy living is still heavily influenced by lifestyle choices. You cannot change the genes you are born with, but you can change your lifestyle to ensure you live a longer, healthier life.`;

const PASSAGE_GENETICS_TRANS = `Di truyền học có vai trò đối với tuổi thọ của con người lớn hơn nhiều so với những gì trước đây người ta từng nghĩ, qua đó thách thức sự đồng thuận khoa học đã tồn tại suốt nhiều thập kỷ...`;

export const BAC_NINH_2026_QUESTIONS: Question[] = [
  {
    id: 'bn-q1',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 1. The word "coveted" in paragraph 1 can be replaced by:',
    options: [
      { id: 'A', text: 'rather lowly', translation: 'khá thấp kém' },
      { id: 'B', text: 'quite awful', translation: 'khá tệ hại' },
      { id: 'C', text: 'strongly desired', translation: 'rất được khao khát / mong muốn' },
      { id: 'D', text: 'slightly favoured', translation: 'hơi được ưa chuộng' }
    ],
    correctAnswer: 'C',
    explanation: '• Từ "coveted" có nghĩa là được thèm muốn, khao khát = strongly desired. Chọn C.',
    translation: 'Từ "coveted" có thể được thay thế bằng: strongly desired.',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'bn-q2',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 2. According to paragraph 1, how does Gen Alpha define "aura"?',
    options: [
      { id: 'A', text: 'A quantifiable assessment of spiritual depth.', translation: 'Thước đo độ sâu tâm linh' },
      { id: 'B', text: 'The level of respect achieved effortlessly.', translation: 'Mức độ tôn trọng / độ ngầu đạt được một cách tự nhiên' },
      { id: 'C', text: 'An association between colors and qualities.', translation: 'Sự liên hệ giữa màu sắc và phẩm chất' },
      { id: 'D', text: 'The perceived coolness gained by trying.', translation: 'Độ ngầu đạt được nhờ cố gắng' }
    ],
    correctAnswer: 'B',
    explanation: '• Đoạn 1 nêu rõ: "aura... is essentially a measure of how much respect or coolness you possess... effortlessly cool". Chọn B.',
    translation: 'Theo đoạn 1, Gen Alpha định nghĩa "aura" là: Mức độ tôn trọng/độ ngầu đạt được tự nhiên.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'bn-q3',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 3. The phrase "that concept" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'the art of projecting a curated vibe', translation: 'nghệ thuật thể hiện khí chất' },
      { id: 'B', text: 'slaying low-level monsters for armor', translation: 'diệt quái vật lấy giáp' },
      { id: 'C', text: 'the terminology of video game farming', translation: 'thuật ngữ farming trong video game' },
      { id: 'D', text: 'the tasks gamers do to win video games', translation: 'nhiệm vụ người chơi game làm' }
    ],
    correctAnswer: 'C',
    explanation: '• "Aura farming applies that concept to the social sphere..." -> "that concept" thay thế cho khái niệm "farming" lặp đi lặp lại trong video game. Chọn C.',
    translation: 'Cụm "that concept" ở đoạn 2 chỉ: thuật ngữ farming trong video game.',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'bn-q4',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 4. Which of the following best summarizes paragraph 2?',
    options: [
      { id: 'A', text: 'The art of aura farming is a sophisticated strategy to gain status.', translation: 'Aura farming là chiến lược tinh vi' },
      { id: 'B', text: 'Social status points can be acquired effortlessly.', translation: 'Điểm địa vị đạt được tự nhiên' },
      { id: 'C', text: 'Aura farming, an expression derived from gaming language, is the conscious effort to project an artificial image of coolness.', translation: 'Aura farming bắt nguồn từ game, là nỗ lực tạo vẻ ngầu giả tạo' },
      { id: 'D', text: 'Aura farming is the process of gaining social recognition.', translation: 'Aura farming là quá trình được xã hội công nhận' }
    ],
    correctAnswer: 'C',
    explanation: '• C tóm tắt chính xác nhất nguồn gốc thuật ngữ từ game và bản chất là nỗ lực cố gắng tạo hình ảnh "cool" có tính toán. Chọn C.',
    translation: 'Câu tóm tắt đúng nhất đoạn 2: Aura farming bắt nguồn từ game, là nỗ lực tạo vẻ ngoài cool giả tạo.',
    topicTag: 'Đọc hiểu - Tóm tắt đoạn'
  },
  {
    id: 'bn-q5',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 5. Where in the passage does the sentence "There is an inherent contradiction here, as aura farming is not always a negative thing." best fit?',
    options: [
      { id: 'A', text: '[III]', translation: 'Vị trí [III]' },
      { id: 'B', text: '[IV]', translation: 'Vị trí [IV]' },
      { id: 'C', text: '[II]', translation: 'Vị trí [II]' },
      { id: 'D', text: '[I]', translation: 'Vị trí [I]' }
    ],
    correctAnswer: 'D',
    explanation: '• Câu chèn nói aura farming không phải lúc nào cũng tiêu cực -> vị trí [I] ngay trước câu đưa ví dụ tích cực về thành công trên mạng xã hội. Chọn D.',
    translation: 'Câu trên phù hợp nhất ở vị trí: [I].',
    topicTag: 'Đọc hiểu - Chèn câu'
  },
  {
    id: 'bn-q6',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 6. Which of the following best paraphrases the underlined sentence in paragraph 3?',
    options: [
      { id: 'A', text: 'Aura farming requires people to curate content in an ironic way.', translation: 'Aura farming đòi hỏi sắp đặt mỉa mai' },
      { id: 'B', text: 'Irony comes from balancing an image of coolness with randomness.', translation: 'Sự mỉa mai đến từ việc cân bằng' },
      { id: 'C', text: 'People add irony to their image of coolness by carefully crafting content.', translation: 'Mọi người cố ý thêm sự mỉa mai' },
      { id: 'D', text: 'The irony of aura farming lies in the fact that intentions are presented as accidents.', translation: 'Sự mỉa mai của aura farming nằm ở chỗ ý định có chủ ý lại được diễn tả như tình cờ' }
    ],
    correctAnswer: 'D',
    explanation: '• D diễn đạt lại hoàn hảo: Sự mỉa mai nằm ở chỗ những nội dung được sắp đặt có chủ ý (curated content) lại được cố tình diễn ra như sự ngẫu nhiên (randomness/accidents). Chọn D.',
    translation: 'Câu diễn đạt lại chuẩn nhất: Sự mỉa mai nằm ở chỗ ý định có chủ ý lại được thể hiện như tình cờ.',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'bn-q7',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 7. Why is aura farming popular among Gen Alpha?',
    options: [
      { id: 'A', text: 'It allows them to impress others easily.', translation: 'Gây ấn tượng dễ dàng' },
      { id: 'B', text: 'It is a great way to get compliments.', translation: 'Cách tuyệt vời để nhận lời khen' },
      { id: 'C', text: 'It offers a great sense of illogicality.', translation: 'Nó mang lại cảm giác phi lý / phi logic' },
      { id: 'D', text: 'It demonstrates their sense of humour.', translation: 'Thể hiện khiếu hài hước' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn cuối nêu: "Gen Alpha loves this trend because they like to lean into absurdity, ambiguity, and randomness" -> Cảm giác phi lý (illogicality/absurdity). Chọn C.',
    translation: 'Lý do aura farming phổ biến ở Gen Alpha: Nó mang lại cảm giác phi lý (illogicality).',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'bn-q8',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 8. Aura farming is compared with the social stock market to emphasize:',
    options: [
      { id: 'A', text: 'the significant financial reward gained from social media fame', translation: 'phần thưởng tài chính' },
      { id: 'B', text: 'the contradiction Gen Alpha often faces', translation: 'mâu thuẫn Gen Alpha đối mặt' },
      { id: 'C', text: 'the unpredictable nature of exposing curated identity to the public', translation: 'tính khó đoán và rủi ro khi công khai bản sắc cá nhân' },
      { id: 'D', text: 'the potential loss of respect due to careless content', translation: 'khả năng mất tôn trọng do tạo nội dung cẩu thả' }
    ],
    correctAnswer: 'C',
    explanation: '• So sánh với thị trường chứng khoán để nhấn mạnh tính rủi ro và khó đoán (làm đúng thì nổi tiếng, làm sai thì thành trò cười). Chọn C.',
    translation: 'So sánh với chứng khoán xã hội để nhấn mạnh: Tính khó đoán khi phơi bày bản sắc cá nhân.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'bn-q9',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 9. Which of the following can be inferred from the passage?',
    options: [
      { id: 'A', text: 'True aura can be acquired through accidents rather than intentional actions.', translation: 'Aura thật đạt được nhờ tình cờ' },
      { id: 'B', text: 'The goal of aura farming is respect, but the process involves self-mockery.', translation: 'Mục tiêu là tôn trọng nhưng quá trình tự giễu' },
      { id: 'C', text: 'Michael Jackson publicly admitted that he was trying to farm aura points.', translation: 'Michael Jackson thừa nhận cày aura' },
      { id: 'D', text: 'The perception of whether someone is cool or trying too hard is subjective.', translation: 'Nhận thức một người ngầu hay cố quá mang tính chủ quan' }
    ],
    correctAnswer: 'D',
    explanation: '• Bài đọc nêu aura farming có thể đi theo cả hai hướng (lời khen hay châm biếm), do đó nhận định mang tính chủ quan tùy góc nhìn người xem (subjective). Chọn D.',
    translation: 'Suy luận đúng từ bài đọc: Việc đánh giá một người ngầu hay cố quá mang tính chủ quan.',
    topicTag: 'Đọc hiểu - Suy luận'
  },
  {
    id: 'bn-q10',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_AURA,
    passageTranslation: PASSAGE_AURA_TRANS,
    questionText: 'Question 10. Which of the following best summarizes the passage?',
    options: [
      { id: 'A', text: 'Aura is a term for coolness originating in video games.', translation: 'Aura là từ chỉ độ ngầu từ game' },
      { id: 'B', text: 'Aura farming provides a reliable and low-risk method for social media users.', translation: 'Phương pháp đáng tin cậy ít rủi ro' },
      { id: 'C', text: 'Gen Alpha uses the term aura to describe social status, and while trying to manufacture it carries risks, it can also lead to significant social rewards.', translation: 'Gen Alpha dùng aura chỉ địa vị xã hội, cố tạo ra nó có rủi ro nhưng cũng mang lại phần thưởng lớn' },
      { id: 'D', text: 'Gen Alpha aura is a flexible measure requiring people to engage in aura farming.', translation: 'Đòi hỏi mọi người tham gia aura farming' }
    ],
    correctAnswer: 'C',
    explanation: '• C tóm tắt bao quát đầy đủ nhất định nghĩa aura của Gen Alpha và tính 2 mặt (rủi ro / phần thưởng) của aura farming. Chọn C.',
    translation: 'Tóm tắt đúng nhất toàn bài: Gen Alpha dùng aura chỉ địa vị xã hội, cố tạo ra nó có rủi ro nhưng có thể đem lại phần thưởng lớn.',
    topicTag: 'Đọc hiểu - Tóm tắt toàn bài'
  },
  {
    id: 'bn-q11',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_GENETICS,
    passageTranslation: PASSAGE_GENETICS_TRANS,
    questionText: 'Question 11. According to paragraph 1, genetic factors:',
    options: [
      { id: 'A', text: 'account for more than half of the variation in how long people live', translation: 'chiếm hơn một nửa sự khác biệt về tuổi thọ con người' },
      { id: 'B', text: 'used to be widely overestimated among the scientific community', translation: 'trước đây bị đánh giá quá cao' },
      { id: 'C', text: 'play an important role in reducing the speed of the ageing process', translation: 'làm giảm tốc độ lão hóa' },
      { id: 'D', text: 'have various effects on longevity across different population groups', translation: 'có tác động khác nhau ở các nhóm dân số' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 1 nêu rõ: "About 55% of the human lifespan is heritable, meaning that more than half of the variation in longevity...". 55% là hơn một nửa. Chọn A.',
    translation: 'Theo đoạn 1, các yếu tố di truyền: chiếm hơn một nửa sự khác biệt về tuổi thọ.',
    topicTag: 'Đọc hiểu - Chi tiết'
  },
  {
    id: 'bn-q12',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_GENETICS,
    passageTranslation: PASSAGE_GENETICS_TRANS,
    questionText: 'Question 12. The word "consensus" in paragraph 1 is closest in meaning to:',
    options: [
      { id: 'A', text: 'arrangement', translation: 'sự sắp xếp' },
      { id: 'B', text: 'organization', translation: 'tổ chức' },
      { id: 'C', text: 'agreement', translation: 'sự đồng thuận / nhất trí' },
      { id: 'D', text: 'issue', translation: 'vấn đề' }
    ],
    correctAnswer: 'C',
    explanation: '• Từ "consensus" có nghĩa là sự đồng thuận, nhất trí của giới khoa học = agreement. Chọn C.',
    translation: 'Từ "consensus" gần nghĩa nhất với: agreement (sự đồng thuận).',
    topicTag: 'Đọc hiểu - Từ vựng'
  },
  {
    id: 'bn-q13',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_GENETICS,
    passageTranslation: PASSAGE_GENETICS_TRANS,
    questionText: 'Question 13. The phrase "these factors" in paragraph 2 refers to:',
    options: [
      { id: 'A', text: 'lifespan data from Denmark and Sweden', translation: 'dữ liệu tuổi thọ từ Đan Mạch' },
      { id: 'B', text: 'the intrinsic and extrinsic causes of deaths', translation: 'nguyên nhân tử vong nội sinh và ngoại sinh' },
      { id: 'C', text: 'the previous estimates and current findings', translation: 'các ước tính trước đây' },
      { id: 'D', text: 'identical twins and fraternal twins genes', translation: 'gen cặp sinh đôi' }
    ],
    correctAnswer: 'B',
    explanation: '• "To tease out these factors..." -> "these factors" thay thế cho "extrinsic factors... intrinsic ones" ở câu ngay trước đó. Chọn B.',
    translation: 'Cụm "these factors" ám chỉ: nguyên nhân tử vong nội sinh và ngoại sinh.',
    topicTag: 'Đọc hiểu - Từ thay thế'
  },
  {
    id: 'bn-q14',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_GENETICS,
    passageTranslation: PASSAGE_GENETICS_TRANS,
    questionText: 'Question 14. The word "apparent" in paragraph 3 is OPPOSITE in meaning to:',
    options: [
      { id: 'A', text: 'evident', translation: 'rõ ràng (đồng nghĩa)' },
      { id: 'B', text: 'unclear', translation: 'không rõ ràng (trái nghĩa)' },
      { id: 'C', text: 'noticeable', translation: 'dễ nhận thấy (đồng nghĩa)' },
      { id: 'D', text: 'unsuitable', translation: 'không phù hợp' }
    ],
    correctAnswer: 'B',
    explanation: '• Từ "apparent" có nghĩa là rõ ràng, dễ nhận thấy. Trái nghĩa với nó là "unclear" (không rõ ràng). Chọn B.',
    translation: 'Từ "apparent" trái nghĩa với: unclear.',
    topicTag: 'Đọc hiểu - Từ trái nghĩa'
  },
  {
    id: 'bn-q15',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_GENETICS,
    passageTranslation: PASSAGE_GENETICS_TRANS,
    questionText: 'Question 15. Which of the following best paraphrases the underlined sentence in paragraph 3?',
    options: [
      { id: 'A', text: 'It is highly possible that increasing rate was caused by breakthroughs.', translation: 'Có khả năng tỷ lệ tăng do đột phá' },
      { id: 'B', text: 'Scientists began to calculate true heritability more efficiently.', translation: 'Khoa học tính toán hiệu quả hơn' },
      { id: 'C', text: 'The increased effectiveness of modern medicine led to the genetic impact on lifespan becoming more obvious over time.', translation: 'Hiệu quả y học hiện đại khiến tác động di truyền đối với tuổi thọ trở nên rõ ràng hơn' },
      { id: 'D', text: 'Improvements meant people were less likely to die from extrinsic causes.', translation: 'Cải thiện y tế khiến ít người chết ngoại sinh' }
    ],
    correctAnswer: 'C',
    explanation: '• C diễn đạt lại chuẩn xác: Y học phát triển làm giảm rủi ro bên ngoài, giúp tác động của gen đối với tuổi thọ hiện rõ hơn. Chọn C.',
    translation: 'Câu diễn đạt lại chuẩn nhất: Y học hiện đại phát triển làm tác động di truyền hiển hiện rõ hơn.',
    topicTag: 'Đọc hiểu - Paraphrasing'
  },
  {
    id: 'bn-q16',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_GENETICS,
    passageTranslation: PASSAGE_GENETICS_TRANS,
    questionText: 'Question 16. Which of the following is NOT mentioned in the passage?',
    options: [
      { id: 'A', text: 'Eliminating extrinsic deaths clarified genetic connection.', translation: 'Loại trừ tử vong ngoại sinh làm rõ gen' },
      { id: 'B', text: 'People still hold great power to improve longevity in spite of fixed genes.', translation: 'Con người vẫn cải thiện tuổi thọ dù gen cố định' },
      { id: 'C', text: 'Heart disease and cancer show different levels of response to lifestyle changes.', translation: 'Bệnh tim và ung thư có phản ứng khác nhau với lối sống' },
      { id: 'D', text: 'Diseases with low heritability are attributed to environment.', translation: 'Bệnh di truyền thấp do môi trường' }
    ],
    correctAnswer: 'C',
    explanation: '• Bài đọc chỉ nói bệnh tim và ung thư có mức độ di truyền (heritability) khác nhau, KHÔNG nói về "mức độ phản ứng với thay đổi lối sống". Chọn C.',
    translation: 'Thông tin KHÔNG được đề cập: Bệnh tim và ung thư phản ứng khác nhau với lối sống.',
    topicTag: 'Đọc hiểu - Chi tiết NOT mentioned'
  },
  {
    id: 'bn-q17',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_GENETICS,
    passageTranslation: PASSAGE_GENETICS_TRANS,
    questionText: 'Question 17. Which paragraph mentions a cause of early mortality?',
    options: [
      { id: 'A', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'B', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'C', text: 'Paragraph 3', translation: 'Đoạn 3' },
      { id: 'D', text: 'Paragraph 2', translation: 'Đoạn 2' }
    ],
    correctAnswer: 'C',
    explanation: '• Đoạn 3 đề cập đến việc người ở thế kỷ 19 thường qua đời sớm do nhiễm trùng (infections). Chọn C (Paragraph 3).',
    translation: 'Đoạn nào đề cập nguyên nhân tử vong sớm? -> Đoạn 3.',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'bn-q18',
    type: 'reading_comprehension',
    readingPassage: PASSAGE_GENETICS,
    passageTranslation: PASSAGE_GENETICS_TRANS,
    questionText: 'Question 18. Which paragraph mentions the relationship between research subjects?',
    options: [
      { id: 'A', text: 'Paragraph 2', translation: 'Đoạn 2' },
      { id: 'B', text: 'Paragraph 1', translation: 'Đoạn 1' },
      { id: 'C', text: 'Paragraph 4', translation: 'Đoạn 4' },
      { id: 'D', text: 'Paragraph 3', translation: 'Đoạn 3' }
    ],
    correctAnswer: 'A',
    explanation: '• Đoạn 2 đề cập đến mối quan hệ giữa các đối tượng nghiên cứu: so sánh sinh đôi cùng trứng (identical twins) và sinh đôi khác trứng (fraternal twins). Chọn A (Paragraph 2).',
    translation: 'Đoạn nào đề cập mối quan hệ giữa các đối tượng nghiên cứu? -> Đoạn 2.',
    topicTag: 'Đọc hiểu - Vị trí thông tin'
  },
  {
    id: 'bn-q19',
    type: 'reordering',
    questionText: 'Question 19. Choose the best arrangement of the sentences to form a complete email:\ne. We are writing to remind you that your annual membership with the Association of Architects is due for renewal.\nd. Your current professional subscription is set to expire on December 31st.\nc. Please log in to the member portal to complete the payment at your earliest convenience.\nb. Renewing before the deadline ensures you retain uninterrupted access to our exclusive digital library.\na. If you encounter any technical difficulties, please contact our support team immediately.',
    options: [
      { id: 'A', text: 'd – c – a – b – e', translation: 'd-c-a-b-e' },
      { id: 'B', text: 'd – e – c – b – a', translation: 'd-e-c-b-a' },
      { id: 'C', text: 'e – d – c – b – a', translation: 'e-d-c-b-a' },
      { id: 'D', text: 'e – c – b – a – d', translation: 'e-c-b-a-d' }
    ],
    correctAnswer: 'C',
    explanation: '• Mẫu email nhắc gia hạn chuẩn: e (nêu mục đích nhắc gia hạn) -> d (thời điểm hết hạn) -> c (hướng dẫn đăng nhập thanh toán) -> b (lợi ích gia hạn sớm) -> a (hỗ trợ kỹ thuật). Trật tự: e - d - c - b - a. Chọn C.',
    translation: 'Sắp xếp email: Mục đích -> Thời hạn -> Hướng dẫn -> Lợi ích -> Hỗ trợ.',
    topicTag: 'Sắp xếp email'
  },
  {
    id: 'bn-q20',
    type: 'reordering',
    questionText: 'Question 20. Choose the best arrangement of the sentences to form a coherent text:\nd. My interest in both logic and math naturally led me to a rewarding career in software engineering.\nc. Indeed, for the past two years, I have thrived in this role at a tech startup.\nb. Working in a quiet home office fuels my focus and allows for a more efficient coding environment.\na. While coding and debugging are essential, regular team meetings are a small trade-off.\ne. In conclusion, I am very satisfied with my current job and the growth it offers.',
    options: [
      { id: 'A', text: 'c – a – d – b – e', translation: 'c-a-d-b-e' },
      { id: 'B', text: 'd – c – b – a – e', translation: 'd-c-b-a-e' },
      { id: 'C', text: 'b – c – d – a – e', translation: 'b-c-d-a-e' },
      { id: 'D', text: 'a – b – c – d – e', translation: 'a-b-c-d-e' }
    ],
    correctAnswer: 'B',
    explanation: '• d mở đoạn nguồn gốc sự nghiệp -> c bổ sung làm việc tại startup -> b môi trường làm việc tại nhà -> a chi tiết công việc và cuộc họp -> e kết luận hài lòng (In conclusion). Trật tự: d - c - b - a - e. Chọn B.',
    translation: 'Sắp xếp đoạn văn: Nguồn gốc -> Kinh nghiệm -> Môi trường -> Chi tiết -> Kết luận.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'bn-q21',
    type: 'reordering',
    questionText: 'Question 21. Choose the best arrangement of the sentences to make a meaningful conversation:\nd. Sarah: Hey, have you finalised your plans for the upcoming summer holiday?\na. Tom: Not yet. I am torn between booking a beach trip or mountain hiking. What about you?\ne. Sarah: I am going to Japan. I want to visit ancient temples in Kyoto.\nb. Tom: Japan is amazing! The history is deep and local cuisine is fascinating.\nc. Sarah: I agree completely. Exploring new cultures is the best part of travel.',
    options: [
      { id: 'A', text: 'd – a – e – b – c', translation: 'd-a-e-b-c' },
      { id: 'B', text: 'd – a – c – b – e', translation: 'd-a-c-b-e' },
      { id: 'C', text: 'e – b – c – a – d', translation: 'e-b-c-a-d' },
      { id: 'D', text: 'e – a – d – b – c', translation: 'e-a-d-b-c' }
    ],
    correctAnswer: 'A',
    explanation: '• Trình tự hội thoại kỳ nghỉ hè: d (Sarah hỏi) -> a (Tom trả lời & hỏi lại) -> e (Sarah trả lời đi Nhật) -> b (Tom khen Nhật) -> c (Sarah đồng ý kết luận). Trật tự: d - a - e - b - c. Chọn A.',
    translation: 'Sắp xếp hội thoại: Hỏi kế hoạch -> Phản hồi -> Kể điểm đến -> Khen ngợi -> Đồng tình.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'bn-q22',
    type: 'reordering',
    questionText: 'Question 22. Choose the best arrangement of sentences:\nb. Tom: I’m going to the gym now. Would you like to join me for a session?\nc. Mary: Thanks, but I’m going to finish this laundry and then head there by myself later.\na. Tom: Then, message me when you’ve finished your workout.',
    options: [
      { id: 'A', text: 'a – b – c', translation: 'a-b-c' },
      { id: 'B', text: 'b – a – c', translation: 'b-a-c' },
      { id: 'C', text: 'b – c – a', translation: 'b-c-a' },
      { id: 'D', text: 'a – c – b', translation: 'a-c-b' }
    ],
    correctAnswer: 'C',
    explanation: '• b (Tom rủ đi gym) -> c (Mary từ chối bảo giặt đồ xong đến sau) -> a (Tom dặn nhắn tin khi tập xong). Trật tự: b - c - a. Chọn C.',
    translation: 'Sắp xếp hội thoại đi gym: Rủ rê -> Từ chối khéo -> Phản hồi hẹn lại.',
    topicTag: 'Sắp xếp hội thoại'
  },
  {
    id: 'bn-q23',
    type: 'reordering',
    questionText: 'Question 23. Choose the best arrangement of sentences:\ne. In recent years, the logistics firm has shifted from an office-based model to a remote-first work environment.\nd. This sudden transformation revealed significant gaps in digital infrastructure.\nc. Consequently, management invested heavily in cloud-based collaboration tools.\nb. Furthermore, strict cybersecurity protocols were introduced.\na. Today, the corporation operates more efficiently with a flexible workforce.',
    options: [
      { id: 'A', text: 'e – d – c – b – a', translation: 'e-d-c-b-a' },
      { id: 'B', text: 'a – d – c – b – e', translation: 'a-d-c-b-e' },
      { id: 'C', text: 'e – c – b – d – a', translation: 'e-c-b-d-a' },
      { id: 'D', text: 'a – e – c – d – b', translation: 'a-e-c-d-b' }
    ],
    correctAnswer: 'A',
    explanation: '• e mở đoạn chuyển đổi làm việc từ xa -> d bộc lộ khoảng trống hạ tầng -> c đầu tư công cụ đám mây -> b bổ sung an ninh mạng -> a kết luận hoạt động hiệu quả hôm nay. Trật tự: e - d - c - b - a. Chọn A.',
    translation: 'Sắp xếp đoạn văn công ty: Chuyển đổi -> Vấn đề -> Giải pháp -> Khía cạnh mới -> Kết quả.',
    topicTag: 'Sắp xếp đoạn văn'
  },
  {
    id: 'bn-q24',
    type: 'cloze_test',
    questionText: 'Question 24. To (24) ... in today’s competitive job market, follow these strategies...',
    options: [
      { id: 'A', text: 'make out', translation: 'nhìn rõ / hiểu được' },
      { id: 'B', text: 'stand out', translation: 'nổi bật / vượt trội' },
      { id: 'C', text: 'catch on', translation: 'trở nên phổ biến' },
      { id: 'D', text: 'carry on', translation: 'tiếp tục' }
    ],
    correctAnswer: 'B',
    explanation: '• Phrasal verb: "stand out" = nổi bật (trong thị trường tuyển dụng). Do đó chọn B. stand out.',
    translation: 'Để nổi bật trong thị trường việc làm cạnh tranh ngày nay...',
    topicTag: 'Phrasal Verbs'
  },
  {
    id: 'bn-q25',
    type: 'cloze_test',
    questionText: 'Question 25. Research (25) ...: Explore the company website, read press releases...',
    options: [
      { id: 'A', text: 'correctly', translation: 'một cách đúng đắn' },
      { id: 'B', text: 'exactly', translation: 'một cách chính xác' },
      { id: 'C', text: 'thoroughly', translation: 'một cách kỹ lưỡng / toàn diện' },
      { id: 'D', text: 'intensely', translation: 'một cách mãnh liệt' }
    ],
    correctAnswer: 'C',
    explanation: '• "Research thoroughly" (Nghiên cứu kỹ lưỡng) là cụm kết hợp từ chuẩn xác nhất. Chọn C. thoroughly.',
    translation: 'Hãy nghiên cứu kỹ lưỡng: Khám phá trang web công ty...',
    topicTag: 'Trạng từ & Collocation'
  },
  {
    id: 'bn-q26',
    type: 'cloze_test',
    questionText: 'Question 26. explain (26) ... they align with the job description.',
    options: [
      { id: 'A', text: 'when', translation: 'khi nào' },
      { id: 'B', text: 'how', translation: 'cách thức như thế nào' },
      { id: 'C', text: 'where', translation: 'ở đâu' },
      { id: 'D', text: 'what', translation: 'cái gì' }
    ],
    correctAnswer: 'B',
    explanation: '• "explain how + Clause" (giải thích cách thức các kỹ năng phù hợp với công việc). Chọn B. how.',
    translation: 'Giải thích cách thức chúng phù hợp với mô tả công việc.',
    topicTag: 'Từ nối & Mệnh đề'
  },
  {
    id: 'bn-q27',
    type: 'cloze_test',
    questionText: 'Question 27. Avoid copying and pasting keywords; (27) ..., rewrite the job requirements in your own words.',
    options: [
      { id: 'A', text: 'otherwise', translation: 'nếu không thì' },
      { id: 'B', text: 'however', translation: 'tuy nhiên' },
      { id: 'C', text: 'instead', translation: 'thay vào đó' },
      { id: 'D', text: 'moreover', translation: 'hơn nữa' }
    ],
    correctAnswer: 'C',
    explanation: '• "avoid X; instead, do Y" (Tránh làm X; thay vào đó, hãy làm Y). Chọn C. instead.',
    translation: 'Tránh sao chép từ khóa; thay vào đó, hãy tự viết lại bằng lời của bạn.',
    topicTag: 'Từ nối'
  },
  {
    id: 'bn-q28',
    type: 'cloze_test',
    questionText: 'Question 28. hiring managers can often (28) ... non-human voices.',
    options: [
      { id: 'A', text: 'catch', translation: 'bắt' },
      { id: 'B', text: 'pick', translation: 'chọn' },
      { id: 'C', text: 'spot', translation: 'nhận ra / phát hiện điểm bất thường' },
      { id: 'D', text: 'mark', translation: 'đánh dấu' }
    ],
    correctAnswer: 'C',
    explanation: '• Động từ "spot" = phát hiện / nhận ra một điểm bất thường (nhận ra giọng văn AI). Chọn C. spot.',
    translation: 'Nhà tuyển dụng có thể dễ dàng nhận ra giọng văn không phải của con người.',
    topicTag: 'Từ vựng'
  },
  {
    id: 'bn-q29',
    type: 'cloze_test',
    questionText: 'Question 29. Have a trusted friend (29) ... your draft to ensure it showcases your unique voice.',
    options: [
      { id: 'A', text: 'to read', translation: 'to V' },
      { id: 'B', text: 'reading', translation: 'V-ing' },
      { id: 'C', text: 'being read', translation: 'bị động' },
      { id: 'D', text: 'read', translation: 'động từ nguyên mẫu bare infinitive' }
    ],
    correctAnswer: 'D',
    explanation: '• Cấu trúc nhờ bảo ai làm gì: "have + someone + V-bare" (have a trusted friend read your draft). Chọn D. read.',
    translation: 'Nhờ một người bạn đáng tin cậy đọc bản nháp của bạn.',
    topicTag: 'Cấu trúc Sai khiến (Causative)'
  },
  {
    id: 'bn-q30',
    type: 'cloze_test',
    questionText: 'Question 30. Dyson Gen5detect. Now (30) ... for £749, this cordless powerhouse...',
    options: [
      { id: 'A', text: 'acceptable', translation: 'chấp nhận được' },
      { id: 'B', text: 'achievable', translation: 'đạt được' },
      { id: 'C', text: 'suitable', translation: 'phù hợp' },
      { id: 'D', text: 'available', translation: 'có sẵn / đang bán' }
    ],
    correctAnswer: 'D',
    explanation: '• "available for £749" (được bán / có sẵn với giá 749 bảng). Chọn D. available.',
    translation: 'Hiện đang được bán với giá 749 bảng...',
    topicTag: 'Từ vựng Quảng cáo'
  },
  {
    id: 'bn-q31',
    type: 'cloze_test',
    questionText: 'Question 31. Unrivaled suction: (31) ... a massive 31kPa of power, it pulls hidden dust...',
    options: [
      { id: 'A', text: 'Delivered', translation: 'dạng bị động' },
      { id: 'B', text: 'To deliver', translation: 'chỉ mục đích' },
      { id: 'C', text: 'Deliver', translation: 'động từ nguyên mẫu' },
      { id: 'D', text: 'Delivering', translation: 'rút gọn mệnh đề chủ động (V-ing)' }
    ],
    correctAnswer: 'D',
    explanation: '• Rút gọn mệnh đề đồng chủ ngữ dạng chủ động ở đầu câu: "Delivering a massive power, it pulls..." (Máy hút bụi mang lại lực hút khổng lồ...). Chọn D.',
    translation: 'Mang lại lực hút khổng lồ 31kPa, thiết bị hút sạch bụi ẩn.',
    topicTag: 'Rút gọn mệnh đề đồng chủ ngữ'
  },
  {
    id: 'bn-q32',
    type: 'cloze_test',
    questionText: 'Question 32. Switch to reveal (32) ... dust on hard floors.',
    options: [
      { id: 'A', text: 'visibly', translation: 'trạng từ' },
      { id: 'B', text: 'invisibility', translation: 'danh từ' },
      { id: 'C', text: 'vision', translation: 'tầm nhìn' },
      { id: 'D', text: 'invisible', translation: 'tính từ (vô hình)' }
    ],
    correctAnswer: 'D',
    explanation: '• Trước danh từ "dust" cần một tính từ bổ nghĩa: "invisible dust" (bụi vô hình). Chọn D.',
    translation: 'Làm lộ ra lớp bụi vô hình trên sàn cứng.',
    topicTag: 'Từ loại (Word Form)'
  },
  {
    id: 'bn-q33',
    type: 'cloze_test',
    questionText: 'Question 33. You can switch tasks (33) ... seconds!',
    options: [
      { id: 'A', text: 'at', translation: 'tại thời điểm' },
      { id: 'B', text: 'for', translation: 'trong khoảng' },
      { id: 'C', text: 'in', translation: 'trong vòng (in seconds)' },
      { id: 'D', text: 'out', translation: 'ngoài' }
    ],
    correctAnswer: 'C',
    explanation: '• Cụm chuẩn: "in seconds" = chỉ trong vòng vài giây. Chọn C.',
    translation: 'Bạn có thể chuyển đổi công việc chỉ trong vài giây!',
    topicTag: 'Giới từ'
  },
  {
    id: 'bn-q34',
    type: 'cloze_test',
    questionText: 'Question 34. tackle the whole house in one (34) ...',
    options: [
      { id: 'A', text: 'turn', translation: 'lượt' },
      { id: 'B', text: 'go', translation: 'lần làm (in one go)' },
      { id: 'C', text: 'move', translation: 'bước chuyển' },
      { id: 'D', text: 'run', translation: 'lượt chạy' }
    ],
    correctAnswer: 'B',
    explanation: '• Thành ngữ (Idiom): "in one go" = trong một lần làm liền mạch. Chọn B. go.',
    translation: 'Dọn dẹp toàn bộ ngôi nhà chỉ trong một lần.',
    topicTag: 'Idioms'
  },
  {
    id: 'bn-q35',
    type: 'cloze_test',
    questionText: 'Question 35. Transform (35) ... corner of your home today...',
    options: [
      { id: 'A', text: 'every', translation: 'mọi (đi với danh từ số ít corner)' },
      { id: 'B', text: 'much', translation: 'nhiều (không đếm được)' },
      { id: 'C', text: 'another', translation: 'một cái khác' },
      { id: 'D', text: 'little', translation: 'ít' }
    ],
    correctAnswer: 'A',
    explanation: '• "every + danh từ số ít" (every corner = mọi góc trong nhà). Chọn A.',
    translation: 'Biến mọi góc trong ngôi nhà của bạn trở nên sạch sẽ.',
    topicTag: 'Từ định lượng'
  },
  {
    id: 'bn-q36',
    type: 'cloze_test',
    questionText: 'Question 36. James Watson and Francis Crick set out to solve DNA. (36) ..., they deduced the structure of the double helix.',
    options: [
      { id: 'A', text: 'By following their curiosity and investigating different possibilities', translation: 'Bằng cách theo đuổi sự tò mò và khám phá các khả năng' },
      { id: 'B', text: 'Being investigated into their curiosity', translation: 'bị điều tra sự tò mò' },
      { id: 'C', text: 'If they follow the investigation', translation: 'nếu họ theo đuổi' },
      { id: 'D', text: 'If their curiosity is followed', translation: 'nếu sự tò mò được theo đuổi' }
    ],
    correctAnswer: 'A',
    explanation: '• Cấu trúc phân từ hoàn chỉnh chỉ phương thức hành động dẫn đến "deduced": "By following... and investigating...". Chọn A.',
    translation: 'Bằng cách theo đuổi sự tò mò và khám phá những khả năng khác nhau, họ đã suy ra cấu trúc xoắn kép.',
    topicTag: 'Cấu trúc chỉ phương thức'
  },
  {
    id: 'bn-q37',
    type: 'cloze_test',
    questionText: 'Question 37. scientific breakthroughs can emerge from something that looks remarkably like play, (37) ...',
    options: [
      { id: 'A', text: 'it is something that often conjures up trivial images', translation: 'câu độc lập sai liên từ' },
      { id: 'B', text: 'an image or a word which is often conjured up', translation: 'đảo ngược nguyên nhân' },
      { id: 'C', text: 'which is a word that often conjures up images of something trivial', translation: 'điều vốn là một từ thường gợi lên hình ảnh về những thứ tầm thường' },
      { id: 'D', text: 'an image which is often conjured up', translation: 'sai chủ thể' }
    ],
    correctAnswer: 'C',
    explanation: '• Mệnh đề quan hệ "which is a word..." bổ nghĩa cho "play", giải thích tại sao nó trông giống như trò đùa. Chọn C.',
    translation: 'Điều vốn là một từ thường gợi lên hình ảnh về những thứ tầm thường.',
    topicTag: 'Mệnh đề quan hệ'
  },
  {
    id: 'bn-q38',
    type: 'cloze_test',
    questionText: 'Question 38. Fill in blank (38):',
    options: [
      { id: 'A', text: 'We are uncertain about the world', translation: 'Chúng tôi không chắc chắn' },
      { id: 'B', text: 'Children born with uncertainty', translation: 'Thiếu động từ chính' },
      { id: 'C', text: 'Children are thrown into a world of uncertainty when they are born', translation: 'Trẻ em khi sinh ra bị ném vào một thế giới đầy bất định' },
      { id: 'D', text: 'When children are born and thrown into the world', translation: 'Thiếu mệnh đề chính' }
    ],
    correctAnswer: 'C',
    explanation: '• Cung cấp một câu hoàn chỉnh về trạng thái trẻ em khi mới sinh ra: "Children are thrown into a world of uncertainty when they are born". Chọn C.',
    translation: 'Trẻ em khi sinh ra bị ném vào một thế giới đầy bất định.',
    topicTag: 'Cấu trúc câu hoàn chỉnh'
  },
  {
    id: 'bn-q39',
    type: 'cloze_test',
    questionText: 'Question 39. children have freedom of choice, (39) ...',
    options: [
      { id: 'A', text: 'or a learning goal will gently steer them', translation: 'hoặc mục tiêu học tập tự điều hướng' },
      { id: 'B', text: 'but are gently steered towards a learning goal by an adult', translation: 'nhưng được người lớn nhẹ nhàng định hướng tới một mục tiêu học tập' },
      { id: 'C', text: 'and are gently steered towards adulthood', translation: 'hướng tới sự trưởng thành' },
      { id: 'D', text: 'while an adult will gently steer it', translation: 'trong khi người lớn điều hướng it' }
    ],
    correctAnswer: 'B',
    explanation: '• Cấu trúc bị động chuẩn trong "guided play": Trẻ có tự do lựa chọn nhưng được người lớn định hướng (but are gently steered by an adult). Chọn B.',
    translation: 'Nhưng được người lớn nhẹ nhàng định hướng tới một mục tiêu học tập.',
    topicTag: 'Cấu trúc Bị động'
  },
  {
    id: 'na-q40_bn',
    type: 'cloze_test',
    questionText: 'Question 40. Playing with friends. (40) ... It eventually won Watson and Crick a Nobel Prize.',
    options: [
      { id: 'A', text: 'Important as it might turn out to be', translation: 'Dù quan trọng nhưng trông đơn giản (ngược ý)' },
      { id: 'B', text: 'What looked like simple play with wire and cardboard turned out to be anything but unimportant', translation: 'Điều trông giống trò chơi đơn giản với dây thép và bìa cứng hóa ra lại vô cùng quan trọng' },
      { id: 'C', text: 'Wire and cardboard looked simple but were important', translation: 'Dây thép bìa cứng quan trọng' },
      { id: 'D', text: 'The importance of what looked like playing', translation: 'Tầm quan trọng' }
    ],
    correctAnswer: 'B',
    explanation: '• "anything but unimportant" = "very important". Nhấn mạnh việc chơi mô hình tưởng như đơn giản nhưng lại cực kỳ quan trọng mang về Nobel. Chọn B.',
    translation: 'Điều trông giống trò chơi đơn giản với dây thép và bìa cứng hóa ra lại vô cùng quan trọng.',
    topicTag: 'Điền câu hoàn thành đoạn'
  }
];

export const BAC_NINH_2026_EXAM: ExamSet = {
  id: 'exam-bac-ninh-2026',
  title: 'Đề Thi Thử Tốt Nghiệp THPT 2026 - Cụm THPT Bắc Ninh (Lần 1)',
  description: 'Đề khảo sát chất lượng chính thức lần 1 năm học 2025 - 2026 của Cụm các trường THPT Bắc Ninh gồm 40 câu trắc nghiệm kèm đáp án và lời giải chi tiết.',
  category: 'thpt_qg',
  durationMinutes: 50,
  totalQuestions: 40,
  badge: 'CỤM BẮC NINH 2026',
  iconName: 'Sparkles',
  questions: BAC_NINH_2026_QUESTIONS
};
