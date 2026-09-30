import React from 'react';
import { Shield, ArrowLeft, Database, EyeOff, Lock, UserX, ExternalLink } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
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
            <Shield size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
              Chính Sách Bảo Mật (Privacy Policy)
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Cập nhật lần cuối: Tháng 09/2026 • Phiên bản 1.1
            </p>
          </div>
        </div>

        <div style={{ lineHeight: 1.7, color: 'var(--text-main)', fontSize: '0.95rem' }}>
          <section style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Database size={18} color="var(--brand-primary, #6366f1)" /> 1. Nguyên Tắc Local-First & Lưu Trữ Cục Bộ
            </h2>
            <p style={{ marginBottom: '10px' }}>
              <strong>EnglishQuiz Master (ON-AV)</strong> được thiết kế theo triết lý <em>Local-First Privacy</em>. 
              Toàn bộ lịch sử làm bài thi, điểm số, cờ đánh dấu câu hỏi, ghi chú, highlight và Sổ tay câu sai được lưu trữ 
              <strong> trực tiếp trên bộ nhớ trình duyệt thiết bị của bạn</strong> (thông qua Web Storage/LocalStorage).
            </p>
            <p>
              Chúng tôi <strong>không lưu trữ</strong> tiến độ làm bài của bạn trên bất kỳ cơ sở dữ liệu máy chủ trung tâm nào khi bạn sử dụng ở chế độ khách.
            </p>
          </section>

          <section style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <EyeOff size={18} color="var(--brand-primary, #6366f1)" /> 2. Không Thu Thập Thông Tin Cá Nhân (Zero PII)
            </h2>
            <p>
              Nền tảng hoàn toàn không yêu cầu cung cấp Họ tên, Số điện thoại, Email, Vị trí địa lý hay Mật khẩu để làm bài thi.
              Bạn có thể sử dụng đầy đủ 100% tính năng ôn luyện mà không cần đăng ký tài khoản.
            </p>
          </section>

          <section style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ExternalLink size={18} color="var(--brand-primary, #6366f1)" /> 3. Dịch Vụ Tra Cứu Từ Điển Bên Thứ Ba
            </h2>
            <p>
              Khi bạn bôi đen một từ hoặc đoạn văn để sử dụng tính năng tra cứu từ điển / dịch ngữ nghĩa, đoạn văn bản đó được gửi 
              trực tiếp từ trình duyệt của bạn tới API dịch thuật (Google Translate client endpoint) để lấy nghĩa tiếng Việt. 
              Hệ thống không thu thập hay lưu lại các từ khóa tìm kiếm của bạn.
            </p>
          </section>

          <section style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <UserX size={18} color="var(--brand-primary, #6366f1)" /> 4. Quyền Kiểm Soát & Xóa Dữ Liệu Của Người Dùng
            </h2>
            <p>
              Bạn nắm toàn quyền sở hữu dữ liệu ôn luyện của mình. Tại màn hình <strong>Cài đặt (Settings)</strong>, bạn có thể:
            </p>
            <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
              <li><strong>Sao lưu (Backup):</strong> Xuất toàn bộ tiến độ, lịch sử và sổ tay câu sai ra file JSON lưu về máy tính.</li>
              <li><strong>Khôi phục (Restore):</strong> Nhập file sao lưu để chuyển dữ liệu sang thiết bị khác mà không cần qua cloud.</li>
              <li><strong>Xóa toàn bộ (Reset Data):</strong> Xóa sạch 100% dữ liệu lịch sử trên trình duyệt vĩnh viễn chỉ với một cú nhấp chuột.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={18} color="var(--brand-primary, #6366f1)" /> 5. Cam Kết An Toàn Thông Tin
            </h2>
            <p>
              Website không nhúng bất kỳ mã theo dõi quảng cáo thương mại (AdTrackers, Facebook Pixel) nào. Mọi mã nguồn đều được kiểm tra an toàn, bảo vệ chống lại các lỗ hổng XSS và rò rỉ dữ liệu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
