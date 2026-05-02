import { LayoutDashboard, Code, User, Settings, LogOut, Award } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Code, label: "Problems" },
  { icon: Award, label: "Achievements" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <motion.div 
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      style={{ 
        width: '256px', 
        minWidth: '256px',
        height: '100vh', 
        backgroundColor: 'rgba(17, 24, 39, 0.95)', 
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxSizing: 'border-box'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '12px',
          background: 'linear-gradient(to bottom right, #6366f1, #a855f7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)'
        }}>
          <Code style={{ color: 'white' }} size={24} />
        </div>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', margin: 0 }}>DSA Pro</h1>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {menuItems.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ x: 4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              color: item.active ? '#818cf8' : '#9ca3af',
              backgroundColor: item.active ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              border: item.active ? '1px solid rgba(99, 102, 241, 0.2)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <item.icon size={20} />
            <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>{item.label}</span>
          </motion.div>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9ca3af', cursor: 'pointer', padding: '0.75rem' }}>
          <LogOut size={20} />
          <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>Logout</span>
        </div>
      </div>
    </motion.div>
  );
}
