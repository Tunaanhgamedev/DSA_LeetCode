import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div style={{ 
      display: 'flex',
      minHeight: '100vh', 
      backgroundColor: '#030712', 
      color: 'white',
      fontFamily: "'Inter', sans-serif",
      position: 'relative'
    }}>
      {/* Sidebar - Position Absolute to force it to stay on top but Grid/Flex parent to hold space */}
      <div 
        style={{
          width: '280px',
          minWidth: '280px',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          backgroundColor: '#030712',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 999, // Very high z-index
          transition: 'transform 0.3s ease',
          transform: window.innerWidth < 1024 && !isMobileMenuOpen ? 'translateX(-100%)' : 'translateX(0)'
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content Area - Use a SIMPLE wrapper with a massive margin */}
      <div style={{ 
        marginLeft: '280px', // FORCED MARGIN
        width: 'calc(100% - 280px)',
        padding: '2rem',
        boxSizing: 'border-box',
        minHeight: '100vh'
      }}>
        <Header />
        <div style={{ marginTop: '2rem' }}>
          {children}
        </div>
      </div>

      {/* Styles to fix mobile view specifically */}
      <style>{`
        @media (max-width: 1024px) {
          div[style*="marginLeft: 280px"] {
            margin-left: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>

      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '50%',
          backgroundColor: '#6366f1',
          color: 'white',
          border: 'none',
          zIndex: 1000,
          display: window.innerWidth < 1024 ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
