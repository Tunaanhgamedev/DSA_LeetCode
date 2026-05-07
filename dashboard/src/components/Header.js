import { Bell, Search, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        backgroundColor: 'transparent',
        gap: '1rem'
      }}
    >
      <div style={{ minWidth: 0 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', margin: 0, letterSpacing: '-0.025em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Overview</h1>
        <p className="hidden sm:block" style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.25rem', margin: 0 }}>Welcome back!</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="header-actions" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search style={{ position: 'absolute', left: '0.75rem', color: '#6b7280' }} size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.75rem',
              padding: '0.5rem 1rem 0.5rem 2.2rem',
              fontSize: '0.875rem',
              color: 'white',
              width: '180px',
              outline: 'none',
              transition: 'all 0.2s'
            }}
          />
        </div>

        <div style={{ 
          padding: '0.5rem', 
          borderRadius: '0.75rem', 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          color: '#9ca3af', 
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Bell size={20} />
          <span style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', width: '8px', height: '8px', backgroundColor: '#6366f1', borderRadius: '50%', border: '2px solid #030712' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1rem', borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="hidden sm:block" style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white', margin: 0 }}>Alex Johnson</p>
          </div>
          <div style={{ 
            width: '36px', 
            height: '36px', 
            borderRadius: '50%', 
            background: 'linear-gradient(to top right, #6366f1, #a855f7)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '2px'
          }}>
             <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#030712', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <UserCircle style={{ color: '#6b7280' }} size={28} />
             </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
