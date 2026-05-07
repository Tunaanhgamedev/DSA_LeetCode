import { useState } from "react";
import { Search, Bell, User, X } from "lucide-react";

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      gap: '0.5rem',
      position: 'relative',
      width: '100%'
    }}>
      {/* SEARCH CONTAINER */}
      {!showMobileSearch ? (
        <>
          <div style={{ flex: 1, maxWidth: '600px' }} className="search-desktop">
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
                placeholder="Search..."
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  color: 'white',
                  outline: 'none',
                  fontSize: '0.85rem'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <button 
              onClick={() => setShowMobileSearch(true)}
              className="mobile-search-btn"
              style={{
                display: 'none',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                color: '#9ca3af'
              }}
            >
              <Search size={18} />
            </button>

            <button style={{
              background: 'transparent',
              border: 'none',
              padding: '0.5rem',
              color: '#9ca3af',
              cursor: 'pointer'
            }}>
              <Bell size={20} />
            </button>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              padding: '0.25rem',
            }}>
              <span style={{ fontWeight: '600', fontSize: '0.8rem' }} className="header-name">Tunamoi</span>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <User size={18} color="white" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search style={{ position: 'absolute', left: '1rem', color: '#9ca3af' }} size={18} />
          <input
            autoFocus
            type="text"
            placeholder="Search problems..."
            style={{
              width: '100%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '0.75rem',
              padding: '0.6rem 2.5rem 0.6rem 2.5rem',
              color: 'white',
              outline: 'none'
            }}
          />
          <button 
            onClick={() => setShowMobileSearch(false)}
            style={{ position: 'absolute', right: '0.5rem', background: 'transparent', border: 'none', color: '#9ca3af' }}
          >
            <X size={18} />
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .search-desktop {
            display: none !important;
          }
          .mobile-search-btn {
            display: block !important;
          }
          .header-name {
            display: inline-block !important; /* Đảm bảo tên Tunamoi luôn hiện */
            max-width: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      `}</style>
    </header>
  );
}
