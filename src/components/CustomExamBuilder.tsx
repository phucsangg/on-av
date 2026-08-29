import React, { useState } from 'react';
import type { ExamSet, Question } from '../types/quiz';
import { 
  PlusCircle, 
  Trash2, 
  Save, 
  FileJson, 
  CheckCircle
} from 'lucide-react';

interface CustomExamBuilderProps {
  onSaveNewExam: (exam: ExamSet) => void;
}

export const CustomExamBuilder: React.FC<CustomExamBuilderProps> = ({ onSaveNewExam }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(15);
  const [badge, setBadge] = useState('Đề Tự Tạo');
  const [category] = useState<'thpt_qg' | 'toeic' | 'quick_quiz' | 'vocab_focus'>('quick_quiz');
  
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: `q-custom-1`,
      type: 'grammar',
      questionText: '',
      options: [
        { id: 'A', text: '' },
        { id: 'B', text: '' },
        { id: 'C', text: '' },
        { id: 'D', text: '' }
      ],
      correctAnswer: 'A',
      explanation: '',
      translation: '',
      topicTag: 'Ngữ pháp cơ bản'
    }
  ]);

  const [jsonText, setJsonText] = useState('');
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddQuestion = () => {
    setQuestions(prev => [
      ...prev,
      {
        id: `q-custom-${prev.length + 1}`,
        type: 'grammar',
        questionText: '',
        options: [
          { id: 'A', text: '' },
          { id: 'B', text: '' },
          { id: 'C', text: '' },
          { id: 'D', text: '' }
        ],
        correctAnswer: 'A',
        explanation: '',
        translation: '',
        topicTag: 'Tự biên soạn'
      }
    ]);
  };

  const handleRemoveQuestion = (index: number) => {
    if (questions.length === 1) return;
    setQuestions(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleQuestionChange = (index: number, field: keyof Question, value: any) => {
    setQuestions(prev => prev.map((q, idx) => idx === index ? { ...q, [field]: value } : q));
  };

  const handleOptionChange = (qIndex: number, optId: 'A' | 'B' | 'C' | 'D', text: string) => {
    setQuestions(prev => prev.map((q, idx) => {
      if (idx !== qIndex) return q;
      return {
        ...q,
        options: q.options.map(opt => opt.id === optId ? { ...opt, text } : opt)
      };
    }));
  };

  const handleSaveExam = () => {
    if (!title.trim()) {
      alert('Vui lòng nhập tên đề thi!');
      return;
    }
    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].questionText.trim()) {
        alert(`Vui lòng nhập nội dung câu hỏi số ${i + 1}!`);
        return;
      }
    }

    const newExam: ExamSet = {
      id: `custom-exam-${Date.now()}`,
      title: title.trim(),
      description: description.trim() || 'Đề thi tự tạo bởi người dùng.',
      category,
      durationMinutes: Number(duration),
      totalQuestions: questions.length,
      badge: badge.trim() || 'Tự Tạo',
      iconName: 'Sparkles',
      questions
    };

    onSaveNewExam(newExam);
    setSuccessMessage('Lưu đề thi thành công! Đề thi mới đã xuất hiện ngoài Trang chủ.');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (Array.isArray(parsed)) {
        setQuestions(parsed);
        setIsJsonModalOpen(false);
        alert(`Đã import thành công ${parsed.length} câu hỏi!`);
      } else if (parsed.questions && Array.isArray(parsed.questions)) {
        setTitle(parsed.title || title);
        setDescription(parsed.description || description);
        setQuestions(parsed.questions);
        setIsJsonModalOpen(false);
        alert(`Đã import thành công bộ đề thi với ${parsed.questions.length} câu hỏi!`);
      } else {
        alert('Cấu trúc JSON không hợp lệ. Phải là mảng câu hỏi hoặc object đề thi.');
      }
    } catch (e) {
      alert('Lỗi cú pháp JSON. Vui lòng kiểm tra lại dữ liệu!');
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
      
      {/* Header Banner */}
      <div className="glass-card animate-fade-in" style={{
        padding: '32px',
        marginBottom: '28px',
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PlusCircle size={28} color="#06b6d4" /> Công Cụ Tự Tạo Đề Thi Trắc Nghiệm
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Tự soạn câu hỏi trắc nghiệm tiếng Anh hoặc import đề thi từ file JSON để làm bài trực tiếp.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setIsJsonModalOpen(true)} className="btn btn-secondary">
            <FileJson size={16} /> Import / Export JSON
          </button>
          <button onClick={handleSaveExam} className="btn btn-primary">
            <Save size={16} /> Lưu Đề Thi
          </button>
        </div>
      </div>

      {successMessage && (
        <div style={{
          padding: '14px 20px',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--success-bg)',
          color: 'var(--success)',
          border: '1px solid var(--success-border)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: 700
        }}>
          <CheckCircle size={20} />
          {successMessage}
        </div>
      )}

      {/* General Exam Info Form */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '28px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px' }}>Thông Tin Chung Đề Thi</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Tên đề thi *</label>
            <input
              type="text"
              placeholder="VD: Đề thi thử HK1 Lớp 12"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              style={{
                height: '44px',
                borderRadius: 'var(--radius-md)'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Thời gian làm bài (Phút)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="form-input"
              style={{
                height: '44px',
                borderRadius: 'var(--radius-md)'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Nhãn hiển thị (Badge)</label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="form-input"
              style={{
                height: '44px',
                borderRadius: 'var(--radius-md)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Questions Form List */}
      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
        Danh Sách Câu Hỏi ({questions.length} câu)
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
        {questions.map((q, qIndex) => (
          <div key={q.id} className="glass-card animate-fade-in" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="badge badge-primary" style={{ fontSize: '0.85rem' }}>
                Câu số {qIndex + 1}
              </span>

              <button
                onClick={() => handleRemoveQuestion(qIndex)}
                className="btn btn-secondary"
                style={{ padding: '4px 10px', fontSize: '0.8rem', color: 'var(--danger)' }}
              >
                <Trash2 size={14} /> Xóa câu này
              </button>
            </div>

            {/* Question Text */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                Nội dung câu hỏi *
              </label>
              <textarea
                rows={2}
                placeholder="VD: She ______ to school by bus every day."
                value={q.questionText}
                onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--card-border)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {/* Options A, B, C, D */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
              {q.options.map((opt) => (
                <div key={opt.id} style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontWeight: 800,
                    color: 'var(--accent-primary)'
                  }}>
                    {opt.id}.
                  </span>
                  <input
                    type="text"
                    placeholder={`Đáp án ${opt.id}`}
                    value={opt.text}
                    onChange={(e) => handleOptionChange(qIndex, opt.id, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 10px 10px 32px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--card-border)',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-main)'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Correct Answer & Topic */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  Đáp án đúng
                </label>
                <select
                  value={q.correctAnswer}
                  onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value as any)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--card-border)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-main)',
                    fontWeight: 700
                  }}
                >
                  <option value="A">Đáp án A</option>
                  <option value="B">Đáp án B</option>
                  <option value="C">Đáp án C</option>
                  <option value="D">Đáp án D</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  Chủ đề / Chuyên đề
                </label>
                <input
                  type="text"
                  placeholder="VD: Thì Hiện tại đơn"
                  value={q.topicTag}
                  onChange={(e) => handleQuestionChange(qIndex, 'topicTag', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--card-border)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-main)'
                  }}
                />
              </div>
            </div>

            {/* Explanation */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                Lời giải chi tiết & Giải thích
              </label>
              <textarea
                rows={2}
                placeholder="Giải thích vì sao chọn đáp án này..."
                value={q.explanation}
                onChange={(e) => handleQuestionChange(qIndex, 'explanation', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--card-border)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={handleAddQuestion} className="btn btn-secondary" style={{ padding: '12px 20px' }}>
          <PlusCircle size={18} /> Thêm Câu Hỏi Mới
        </button>

        <button onClick={handleSaveExam} className="btn btn-primary" style={{ padding: '12px 28px' }}>
          <Save size={18} /> Lưu & Xuất Đề Thi
        </button>
      </div>

      {/* JSON Import/Export Modal */}
      {isJsonModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '24px'
        }}>
          <div className="glass-card animate-fade-in" style={{ padding: '32px', maxWidth: '600px', width: '100%' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px' }}>Import / Export Dữ Liệu JSON</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Dán đoạn JSON câu hỏi vào đây hoặc copy câu hỏi hiện tại để chia sẻ với người khác.
            </p>

            <textarea
              rows={10}
              value={jsonText || JSON.stringify(questions, null, 2)}
              onChange={(e) => setJsonText(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--card-border)',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-main)',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                marginBottom: '20px'
              }}
            />

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsJsonModalOpen(false)} className="btn btn-secondary">Đóng</button>
              <button onClick={handleImportJson} className="btn btn-primary">Import Ngay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
