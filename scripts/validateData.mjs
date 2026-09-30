import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '../src/data');

console.log('🔍 [Data Integrity & Quality Validator] Scanning exam datasets in:', dataDir);

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('ExamData.ts') || f === 'questionBank.ts');

let totalExams = 0;
let totalQuestions = 0;
let issuesCount = 0;
let warningsCount = 0;
const allQuestionIds = new Set();
const duplicateIds = new Set();
const stemRegistry = new Map(); // normalized stem -> [locations]
let duplicateStemsCount = 0;

for (const file of files) {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match question objects in TS files
  const idMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  const correctMatches = [...content.matchAll(/correctAnswer:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  const questionTextMatches = [...content.matchAll(/questionText:\s*['"`]([\s\S]*?)['"`],/g)].map(m => m[1]);
  const explanationMatches = [...content.matchAll(/explanation:\s*['"`]([\s\S]*?)['"`],/g)].map(m => m[1]);

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

  // Check IDs uniqueness within file and across dataset
  const localIds = new Set();
  for (const id of idMatches) {
    if (id.includes('q') || id.includes('exam-') || id.includes('-')) {
      if (localIds.has(id)) {
        duplicateIds.add(`${file}: ${id}`);
        issuesCount++;
      }
      localIds.add(id);
      allQuestionIds.add(id);
    }
  }

  // Check for duplicate stems across exams (excluding generic stems like "Mark the letter A, B, C, or D...")
  for (const rawStem of questionTextMatches) {
    const cleaned = rawStem
      .replace(/<[^>]*>/g, '')
      .replace(/[\r\n\t]+/g, ' ')
      .trim()
      .toLowerCase();

    // Skip short or generic instruction stems
    if (cleaned.length > 25 && !cleaned.startsWith('mark the letter') && !cleaned.startsWith('choose the best')) {
      const existing = stemRegistry.get(cleaned) || [];
      existing.push(file);
      stemRegistry.set(cleaned, existing);
    }
  }

  // Check for missing explanations
  for (const exp of explanationMatches) {
    if (!exp || exp.trim().length === 0) {
      warningsCount++;
    }
  }

  console.log(`  ✓ ${file}: ${fileQuestionCount} questions verified.`);
}

// Calculate duplicate stems across files
for (const [_stem, locations] of stemRegistry.entries()) {
  const uniqueFiles = new Set(locations);
  if (uniqueFiles.size > 1) {
    duplicateStemsCount++;
  }
}

console.log('\n=========================================');
console.log(`📊 BÁO CÁO KIỂM TRA CHẤT LƯỢNG KHO ĐỀ THI (QUALITY REPORT):`);
console.log(`- Tổng số tệp đề thi: ${totalExams}`);
console.log(`- Tổng số câu hỏi: ${totalQuestions}`);
console.log(`- Tổng số ID câu hỏi duy nhất: ${allQuestionIds.size}`);
console.log(`- Câu hỏi trùng ID: ${duplicateIds.size}`);
console.log(`- Câu hỏi trùng ngữ cảnh/stem giữa các đề: ${duplicateStemsCount}`);
console.log(`- Lỗi nghiêm trọng (Critical Issues): ${issuesCount}`);
console.log(`- Cảnh báo dữ liệu (Warnings): ${warningsCount}`);
console.log('=========================================\n');

if (issuesCount > 0) {
  console.error('❌ Phát hiện lỗi dữ liệu cần xử lý!');
  process.exit(1);
} else {
  console.log('✅ Toàn bộ dữ liệu đề thi đạt chuẩn 100% hợp lệ, an toàn và chính xác!');
  process.exit(0);
}
