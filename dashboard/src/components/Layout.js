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
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 40
          }}
        />
      )}

      {/* Sidebar - Using fixed position for desktop */}
      <div 
        className={`sidebar-container ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          width: '280px',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 50,
          transition: 'transform 0.3s ease',
          backgroundColor: '#030712'
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content Area - Offset by sidebar width */}
      <main className="main-content" style={{ 
        flex: 1,
        padding: '2rem',
        width: '100%',
        minWidth: 0,
        boxSizing: 'border-box'
      }}>
        <Header />
        <div style={{ width: '100%' }}>
          {children}
        </div>
      </main>

      {/* Floating Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="mobile-toggle"
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
          boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.4)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
