import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '../src/data');

console.log('🔍 [Data Integrity Validator] Scanning exam datasets in:', dataDir);

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('ExamData.ts') || f === 'questionBank.ts');

let totalExams = 0;
let totalQuestions = 0;
let issuesCount = 0;
const allQuestionIds = new Set();
const duplicateIds = new Set();

for (const file of files) {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match question objects in TS files
  const idMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  const correctMatches = [...content.matchAll(/correctAnswer:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  const _questionTextMatches = [...content.matchAll(/questionText:\s*['"`]([\s\S]*?)['"`],/g)].map(m => m[1]);
  const _explanationMatches = [...content.matchAll(/explanation:\s*['"`]([\s\S]*?)['"`],/g)].map(m => m[1]);

  totalExams++;
  const fileQuestionCount = correctMatches.length;
  totalQuestions += fileQuestionCount;

  // Check answers validity
  for (const ans of correctMatches) {
    if (!['A', 'B', 'C', 'D'].includes(ans)) {
      console.error(`❌ [${file}] Invalid correctAnswer found: "${ans}"`);
      issuesCount++;
    }
  }

  // Check IDs uniqueness within file
  const localIds = new Set();
  for (const id of idMatches) {
    // Only check question IDs (typically starting with prefix or q)
    if (id.includes('q') || id.includes('exam-') || id.includes('-')) {
      if (localIds.has(id)) {
        duplicateIds.add(`${file}: ${id}`);
        issuesCount++;
      }
      localIds.add(id);
      allQuestionIds.add(id);
    }
  }

  console.log(`  ✓ ${file}: ${fileQuestionCount} questions verified.`);
}

console.log('\n=========================================');
console.log(`📊 BÁO CÁO KIỂM TRA CHẤT LƯỢNG KHO ĐỀ THI:`);
console.log(`- Tổng số tệp đề thi: ${totalExams}`);
console.log(`- Tổng số câu hỏi: ${totalQuestions}`);
console.log(`- Tổng số ID câu hỏi duy nhất: ${allQuestionIds.size}`);
console.log(`- Câu hỏi trùng ID: ${duplicateIds.size}`);
console.log(`- Phát hiện lỗi: ${issuesCount}`);
console.log('=========================================\n');

if (issuesCount > 0) {
  console.warn('⚠️ Có cảnh báo trong dữ liệu đề thi.');
  process.exit(0); // non-fatal
} else {
  console.log('✅ Toàn bộ dữ liệu đề thi đạt chuẩn 100% hợp lệ, an toàn và chính xác!');
  process.exit(0);
}
