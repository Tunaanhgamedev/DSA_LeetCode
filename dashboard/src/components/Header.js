import { Search, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      gap: '1rem'
    }}>
      <div style={{ flex: 1, maxWidth: '600px' }} className="search-container">
        <div style={{ position: 'relative' }}>
          <Search 
            style={{ 
              position: 'absolute', 
              left: '1rem', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#9ca3af' 
            }} 
            size={18} 
          />
          <input
            type="text"
            placeholder="Search problems..."
            style={{
              width: '100%',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '1rem',
              padding: '0.75rem 1rem 0.75rem 3rem',
              color: 'white',
              outline: 'none',
              fontSize: '0.9rem'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '0.6rem',
          borderRadius: '0.75rem',
          color: '#9ca3af',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} className="icon-btn">
          <Bell size={20} />
        </button>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          padding: '0.25rem 0.5rem',
          borderRadius: '1rem',
          backgroundColor: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)'
        }} className="user-profile">
          <span style={{ fontWeight: '600', fontSize: '0.9rem' }} className="username-text">Tunamoi</span>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255,255,255,0.1)'
          }}>
            <User size={20} color="white" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .search-container {
            display: none !important; /* Ẩn thanh tìm kiếm trên điện thoại để nhường chỗ */
          }
          .username-text {
            display: none; /* Ẩn chữ Tunamoi, chỉ để lại icon profile cho gọn */
          }
          .user-profile {
            background: transparent !important;
            border: none !important;
          }
        }
      `}</style>
    </header>
  );
}
