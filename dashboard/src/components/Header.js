import { useState } from "react";
import { Search, Bell, User, X } from "lucide-react";

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      gap: '1rem',
      position: 'relative'
    }}>
      {/* SEARCH CONTAINER */}
      <div style={{ 
        flex: 1, 
        maxWidth: '600px',
        display: showMobileSearch ? 'block' : undefined 
      }} className={`search-container ${showMobileSearch ? 'mobile-active' : ''}`}>
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
          {/* Nút X để đóng search trên mobile */}
          <button 
            onClick={() => setShowMobileSearch(false)}
            className="mobile-close-search"
            style={{
              position: 'absolute',
              right: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              color: '#9ca3af',
              display: 'none'
            }}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Nút kính lúp hiện ra trên mobile */}
        {!showMobileSearch && (
          <button 
            onClick={() => setShowMobileSearch(true)}
            className="mobile-search-trigger"
            style={{
              display: 'none',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.6rem',
              borderRadius: '0.75rem',
              color: '#9ca3af'
            }}
          >
            <Search size={20} />
          </button>
        )}

        <button style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '0.6rem',
          borderRadius: '0.75rem',
          color: '#9ca3af',
          cursor: 'pointer'
        }}>
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
        }} className="header-user-profile">
          <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Tunamoi</span>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={20} color="white" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .header-user-profile {
            display: none !important; /* Ẩn ở header vì đã có ở Sidebar */
          }
          .search-container {
            display: none;
          }
          .search-container.mobile-active {
            display: block !important;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 100;
            background: #030712;
          }
          .mobile-search-trigger {
            display: block !important;
          }
          .mobile-close-search {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
