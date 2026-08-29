export interface LocalDictEntry {
  word: string;
  phonetic: string;
  pos: string; // part of speech: n, v, adj, adv
  vi: string; // vietnamese definition
  enDef?: string; // english definition
  examples?: string[];
}

export const LOCAL_DICTIONARY: Record<string, LocalDictEntry> = {
  // GENERAL & EXAM CORE VOCABULARY
  "environment": {
    word: "environment",
    phonetic: "/ɪnˈvaɪ.rən.mənt/",
    pos: "n",
    vi: "Môi trường, hoàn cảnh xung quanh",
    enDef: "The surroundings or conditions in which a person, animal, or plant lives.",
    examples: ["We must take action to protect the natural environment."]
  },
  "environmental": {
    word: "environmental",
    phonetic: "/ɪnˌvaɪ.rənˈmen.təl/",
    pos: "adj",
    vi: "Thuộc về môi trường",
    enDef: "Relating to the natural world and the impact of human activity on its condition.",
    examples: ["Environmental pollution is a global issue."]
  },
  "environmentally": {
    word: "environmentally",
    phonetic: "/ɪnˌvaɪ.rənˈmen.təl.i/",
    pos: "adv",
    vi: "Về mặt môi trường, một cách thân thiện môi trường",
    enDef: "In a way that relates to the environment.",
    examples: ["They promote environmentally friendly products."]
  },
  "protect": {
    word: "protect",
    phonetic: "/prəˈtekt/",
    pos: "v",
    vi: "Bảo vệ, che chở",
    enDef: "Keep safe from harm or injury.",
    examples: ["Warm clothing protects you against the cold."]
  },
  "protection": {
    word: "protection",
    phonetic: "/prəˈtek.ʃən/",
    pos: "n",
    vi: "Sự bảo vệ, sự che chở",
    enDef: "The action of protecting someone or something.",
    examples: ["The laws offer protection to wildlife."]
  },
  "sustainable": {
    word: "sustainable",
    phonetic: "/səˈsteɪ.nə.bəl/",
    pos: "adj",
    vi: "Bền vững, có thể duy trì lâu dài",
    enDef: "Able to be maintained at a certain rate or level without depleting natural resources.",
    examples: ["Sustainable agriculture is essential for the future."]
  },
  "sustainability": {
    word: "sustainability",
    phonetic: "/səˌsteɪ.nəˈbɪl.ə.ti/",
    pos: "n",
    vi: "Tính bền vững, sự phát triển bền vững",
    enDef: "The ability to maintain or support a process continuously over time.",
    examples: ["Companies are focusing on environmental sustainability."]
  },
  "diversity": {
    word: "diversity",
    phonetic: "/daɪˈvɜː.sə.ti/",
    pos: "n",
    vi: "Sự đa dạng, sự phong phú",
    enDef: "The state of being diverse; variety.",
    examples: ["Cultural diversity enriches our workplace."]
  },
  "diverse": {
    word: "diverse",
    phonetic: "/daɪˈvɜːs/",
    pos: "adj",
    vi: "Đa dạng, gồm nhiều loại khác nhau",
    enDef: "Showing a great deal of variety; very different.",
    examples: ["Our team has diverse skills and ideas."]
  },
  "biodiversity": {
    word: "biodiversity",
    phonetic: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
    pos: "n",
    vi: "Đa dạng sinh học",
    enDef: "The variety of plant and animal life in a particular habitat or in the world.",
    examples: ["Rainforests are famous for their high biodiversity."]
  },
  "exhibition": {
    word: "exhibition",
    phonetic: "/ˌek.sɪˈbɪʃ.ən/",
    pos: "n",
    vi: "Cuộc triển lãm, sự trưng bày",
    enDef: "A public display of works of art or items of interest.",
    examples: ["The art exhibition attracts thousands of visitors."]
  },
  "photographer": {
    word: "photographer",
    phonetic: "/fəˈtɒɡ.rə.fər/",
    pos: "n",
    vi: "Nhiếp ảnh gia, thợ chụp ảnh",
    enDef: "A person who takes photographs, especially as a job.",
    examples: ["She works as a professional wildlife photographer."]
  },
  "renowned": {
    word: "renowned",
    phonetic: "/rɪˈnaʊnd/",
    pos: "adj",
    vi: "Nổi tiếng, lừng danh (tích cực)",
    enDef: "Famous and respected for something.",
    examples: ["He is a renowned scientist worldwide."]
  },
  "notorious": {
    word: "notorious",
    phonetic: "/nəʊˈtɔː.ri.əs/",
    pos: "adj",
    vi: "Tai tiếng (nổi tiếng vì điều xấu)",
    enDef: "Famous or well known, typically for some bad quality or deed.",
    examples: ["The area is notorious for heavy traffic."]
  },
  "conservation": {
    word: "conservation",
    phonetic: "/ˌkɒn.səˈveɪ.ʃən/",
    pos: "n",
    vi: "Sự bảo tồn, sự giữ gìn thiên nhiên",
    enDef: "Prevention of wasteful use of a resource or preservation of natural environment.",
    examples: ["Wildlife conservation is vital for ecological balance."]
  },
  "conserve": {
    word: "conserve",
    phonetic: "/kənˈsɜːv/",
    pos: "v",
    vi: "Bảo tồn, tiết kiệm (năng lượng, tài nguyên)",
    enDef: "Protect something from harm or destruction.",
    examples: ["We must conserve water during summer."]
  },
  "campaign": {
    word: "campaign",
    phonetic: "/kæmˈpeɪn/",
    pos: "n",
    vi: "Chiến dịch, đợt vận động",
    enDef: "An organized course of action to achieve a goal.",
    examples: ["The school launched a clean-up campaign."]
  },
  "tide": {
    word: "tide",
    phonetic: "/taɪd/",
    pos: "n",
    vi: "Thủy triều, con nước",
    enDef: "The alternate rising and falling of the sea due to gravitational attraction of Moon and Sun.",
    examples: ["The high tide reaches the cliffs every evening."]
  },
  "tidal": {
    word: "tidal",
    phonetic: "/ˈtaɪ.dəl/",
    pos: "adj",
    vi: "Thuộc về thủy triều",
    enDef: "Relating to or affected by tides.",
    examples: ["Tidal energy can be harnessed for electricity."]
  },
  "gravitational": {
    word: "gravitational",
    phonetic: "/ˌɡræv.ɪˈteɪ.ʃən.əl/",
    pos: "adj",
    vi: "Thuộc về trọng lực, lực hấp dẫn",
    enDef: "Relating to movement caused by gravity.",
    examples: ["The gravitational pull of the Moon causes sea tides."]
  },
  "obliterate": {
    word: "obliterate",
    phonetic: "/əˈblɪt.ər.eɪt/",
    pos: "v",
    vi: "Xóa bỏ, triệt tiêu hoàn toàn",
    enDef: "Destroy utterly; wipe out.",
    examples: ["The pull of remote stars is obliterated by the Moon's gravity."]
  },
  "fashion": {
    word: "fashion",
    phonetic: "/ˈfæʃ.ən/",
    pos: "n",
    vi: "Thời trang, phong cách",
    enDef: "A popular trend, especially in styles of dress and ornament.",
    examples: ["Fast fashion produces cheap clothes rapidly."]
  },
  "garment": {
    word: "garment",
    phonetic: "/ˈɡɑː.mənt/",
    pos: "n",
    vi: "Quần áo, trang phục",
    enDef: "An item of clothing.",
    examples: ["Polyester-heavy garments release microfibers during washing."]
  },
  "microfiber": {
    word: "microfiber",
    phonetic: "/ˈmaɪ.krəʊˌfaɪ.bər/",
    pos: "n",
    vi: "Sợi siêu nhỏ, vi sợi nhân tạo",
    enDef: "A very fine synthetic yarn.",
    examples: ["Washing synthetic clothes releases microfibers into rivers."]
  },
  "overproduction": {
    word: "overproduction",
    phonetic: "/ˌəʊ.və.prəˈdʌk.ʃən/",
    pos: "n",
    vi: "Sự sản xuất dư thừa, quá mức",
    enDef: "Production of more of a product than is needed or wanted.",
    examples: ["Overproduction leads to massive textile waste."]
  },
  "unaltered": {
    word: "unaltered",
    phonetic: "/ʌnˈɔːl.təd/",
    pos: "adj",
    vi: "Không thay đổi, nguyên vẹn",
    enDef: "Not changed or modified.",
    examples: ["Production targets remain unaltered despite eco-campaigns."]
  },
  "torrent": {
    word: "torrent",
    phonetic: "/ˈtɒr.ənt/",
    pos: "n",
    vi: "Dòng chảy xiết, trào lưu dồn dập",
    enDef: "A strong and fast-moving stream of water or a overwhelming flow.",
    examples: ["Recycling systems struggle with the torrent of low-grade clothes."]
  },
  "greenwashing": {
    word: "greenwashing",
    phonetic: "/ˈɡriːn.wɒʃ.ɪŋ/",
    pos: "n",
    vi: "Tẩy xanh (quảng cáo giả tạo về tính thân thiện môi trường)",
    enDef: "Disinformation disseminated by an organization so as to present an environmentally responsible public image.",
    examples: ["Vague sustainability claims are often criticized as greenwashing."]
  },
  "collaborate": {
    word: "collaborate",
    phonetic: "/kəˈlæb.ə.reɪt/",
    pos: "v",
    vi: "Hợp tác, phối hợp làm việc",
    enDef: "Work jointly on an activity or project.",
    examples: ["Employees from different cultures collaborate effectively."]
  },
  "collaboration": {
    word: "collaboration",
    phonetic: "/kəˌlæb.əˈreɪ.ʃən/",
    pos: "n",
    vi: "Sự hợp tác, quá trình làm việc chung",
    enDef: "The action of working with someone to produce or create something.",
    examples: ["Successful projects require team collaboration."]
  },
  "individual": {
    word: "individual",
    phonetic: "/ˌɪn.dɪˈvɪdʒ.u.əl/",
    pos: "n, adj",
    vi: "Cá nhân, riêng biệt",
    enDef: "Single; separate; a single human being.",
    examples: ["Every individual can make a difference."]
  },
  "responsibility": {
    word: "responsibility",
    phonetic: "/rɪˌspɒn.səˈbɪl.ə.ti/",
    pos: "n",
    vi: "Trách nhiệm, bổn phận",
    enDef: "The state or fact of having a duty to deal with something.",
    examples: ["Environmental protection is everyone's responsibility."]
  },
  "effective": {
    word: "effective",
    phonetic: "/ɪˈfek.tɪv/",
    pos: "adj",
    vi: "Hiệu quả, có tác dụng tốt",
    enDef: "Successful in producing a desired or intended result.",
    examples: ["Simple measures can be very effective."]
  },
  "effectively": {
    word: "effectively",
    phonetic: "/ɪˈfek.tɪv.li/",
    pos: "adv",
    vi: "Một cách hiệu quả",
    enDef: "In a way that produces a desired result.",
    examples: ["The team worked effectively together."]
  },
  "opportunity": {
    word: "opportunity",
    phonetic: "/ˌɒp.əˈtʃuː.nə.ti/",
    pos: "n",
    vi: "Cơ hội, thời cơ",
    enDef: "A time or set of circumstances that makes it possible to do something.",
    examples: ["This event is a valuable opportunity for students."]
  },
  "increase": {
    word: "increase",
    phonetic: "/ɪnˈkriːs/",
    pos: "v, n",
    vi: "Gia tăng, sự tăng lên",
    enDef: "Become or make greater in size, amount, or degree.",
    examples: ["Recycling helps decrease waste and increase sustainability."]
  },
  "reduce": {
    word: "reduce",
    phonetic: "/rɪˈdʒuːs/",
    pos: "v",
    vi: "Giảm bớt, thu nhỏ",
    enDef: "Make smaller or less in amount, degree, or size.",
    examples: ["We should reduce single-use plastic consumption."]
  },
  "reduction": {
    word: "reduction",
    phonetic: "/rɪˈdʌk.ʃən/",
    pos: "n",
    vi: "Sự sụt giảm, sự cắt giảm",
    enDef: "The action of making something smaller or less.",
    examples: ["A significant reduction in emissions is necessary."]
  },
  "achieve": {
    word: "achieve",
    phonetic: "/əˈtʃiːv/",
    pos: "v",
    vi: "Đạt được, hoàn thành mục tiêu",
    enDef: "Successfully bring about or reach by effort, skill, or courage.",
    examples: ["She worked hard to achieve her goals."]
  },
  "achievement": {
    word: "achievement",
    phonetic: "/əˈtʃiːv.mənt/",
    pos: "n",
    vi: "Thành tựu, kết quả đạt được",
    enDef: "A thing done successfully with effort, skill, or courage.",
    examples: ["Winning the prize was a great achievement."]
  }
};

// Stemming helper to remove common English endings (-ing, -ed, -s, -es, -ly, -tion)
export const findLocalDictEntry = (rawWord: string): LocalDictEntry | null => {
  const clean = rawWord.trim().toLowerCase().replace(/[^a-zA-Z]/g, '');
  if (!clean) return null;

  // Direct match
  if (LOCAL_DICTIONARY[clean]) return LOCAL_DICTIONARY[clean];

  // Stem variations
  const variations = [
    clean.replace(/s$/, ''),
    clean.replace(/es$/, ''),
    clean.replace(/ed$/, ''),
    clean.replace(/ing$/, ''),
    clean.replace(/ing$/, 'e'),
    clean.replace(/ly$/, ''),
    clean.replace(/ies$/, 'y'),
    clean.replace(/tion$/, 'te'),
    clean.replace(/ment$/, '')
  ];

  for (const v of variations) {
    if (v && LOCAL_DICTIONARY[v]) {
      return LOCAL_DICTIONARY[v];
    }
  }

  return null;
};
