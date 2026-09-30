import React from 'react';
import { FileText, ArrowLeft, BookOpen, AlertCircle, Award, Scale } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '32px 20px 80px' }}>
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'none',
          border: 'none',
          color: 'var(--brand-primary, #6366f1)',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '24px',
          fontSize: '0.95rem'
        }}
      >
        <ArrowLeft size={18} /> Quay lại trang trước
      </button>

      <div style={{
        background: 'var(--bg-card, #ffffff)',
        borderRadius: '16px',
        border: '1px solid var(--border-light, #e2e8f0)',
        padding: '36px',
        boxShadow: 'var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.05))'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(99, 102, 241, 0.1)',
            color: 'var(--brand-primary, #6366f1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileText size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
              Điều Khoản Dịch Vụ (Terms of Service)
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Cập nhật lần cuối: Tháng 09/2026 • Phiên bản 1.1
            </p>
          </div>
        </div>

        <div style={{ lineHeight: 1.7, color: 'var(--text-main)', fontSize: '0.95rem' }}>
          <section style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} color="var(--brand-primary, #6366f1)" /> 1. Mục Đích Giáo Dục Phi Lợi Nhuận
            </h2>
            <p>
              <strong>EnglishQuiz Master (ON-AV)</strong> là dự án phần mềm hỗ trợ học tập độc lập được xây dựng nhằm phục vụ 
              mục đích tự ôn luyện, nâng cao kỹ năng Tiếng Anh và làm quen với định dạng câu hỏi trắc nghiệm cho học sinh, sinh viên.
              Toàn bộ nền tảng được cung cấp hoàn toàn miễn phí vì cộng đồng.
            </p>
          </section>

          <section style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={18} color="#eab308" /> 2. Tuyên Bố Miễn Trừ Trách Nhiệm & Phi Liên Kết (Disclaimer)
            </h2>
            <p style={{ marginBottom: '10px' }}>
              Các bộ đề thi gắn nhãn <em>"HUIT"</em>, <em>"TOEIC"</em>, <em>"THPT Quốc Gia"</em> trên nền tảng là 
              <strong> các bộ đề ôn tập mô phỏng</strong> được tổng hợp, biên soạn dựa trên cấu trúc câu hỏi tham khảo công khai.
            </p>
            <p>
              Website <strong>không phải là cổng thi chính thức</strong> và <strong>không có bất kỳ liên kết, bảo trợ hay ủy quyền trực tiếp nào</strong> từ Trường Đại học Công Thương TP.HCM (HUIT), Educational Testing Service (ETS) hay Bộ Giáo dục và Đào tạo. 
              Kết quả làm bài trên trang web chỉ mang tính chất tham khảo đánh giá năng lực cá nhân và không thể thay thế cho chứng chỉ hoặc điểm thi chính thức.
            </p>
          </section>

          <section style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Scale size={18} color="var(--brand-primary, #6366f1)" /> 3. Quyền Sở Hữu Trí Tuệ & Fair Use
            </h2>
            <p>
              Mã nguồn ứng dụng thuộc quyền sở hữu của nhóm phát triển mã nguồn mở ON-AV. 
              Các ngữ liệu đọc hiểu, ví dụ và câu hỏi trắc nghiệm được sử dụng theo nguyên tắc <em>Sử dụng hợp lý (Fair Use)</em> cho mục đích nghiên cứu, học tập và giáo dục.
              Nếu quý tác giả hoặc tổ chức có bất kỳ yêu cầu điều chỉnh bản quyền nào, xin vui lòng liên hệ trực tiếp qua repository GitHub của dự án.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} color="var(--brand-primary, #6366f1)" /> 4. Trách Nhiệm Sử Dụng
            </h2>
            <p>
              Người dùng cam kết không sử dụng các công cụ tự động hóa nhằm mục đích phá hoại hệ thống, spam tài nguyên hoặc sao chép dữ liệu câu hỏi với mục đích thương mại trái phép.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
