import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#030712', 
      color: 'white',
      fontFamily: "'Inter', sans-serif",
      display: 'flex' // Use flex as base
    }}>
      {/* Sidebar - Fixed width, NOT fixed position to occupy space */}
      <div 
        className="sidebar-wrapper"
        style={{
          width: '280px',
          flexShrink: 0,
          height: '100vh',
          position: 'sticky',
          top: 0,
          backgroundColor: '#030712',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          zIndex: 40,
          display: window.innerWidth < 1024 ? (isMobileMenuOpen ? 'block' : 'none') : 'block'
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content Area - Just take the rest of the flex space */}
      <main style={{ 
        flex: 1,
        minWidth: 0, // Critical for flex children
        padding: '2rem',
        boxSizing: 'border-box'
      }}>
        <Header />
        <div style={{ width: '100%' }}>
          {children}
        </div>
      </main>

      {/* Mobile Toggle & Overlay (Omitted for brevity, keeping existing logic) */}
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
          zIndex: 50,
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
