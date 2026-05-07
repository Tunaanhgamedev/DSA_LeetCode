import { 
  LayoutDashboard, 
  Code2, 
  Trophy, 
  User, 
  Settings
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Code2, label: "Problems", path: "/problems" },
  { icon: Trophy, label: "Achievements", path: "/achievements" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar({ closeMenu }) {
  const location = useLocation();

  return (
    <div className="sidebar-inner" style={{ 
      height: '100%',
      backgroundColor: '#030712', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '1.5rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', padding: '0 0.5rem' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '12px', 
          backgroundColor: '#6366f1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
        }}>
          <Code2 color="white" size={24} />
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.025em' }}>DSA Pro</span>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={closeMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1rem',
                borderRadius: '0.75rem',
                color: isActive ? 'white' : '#9ca3af',
                backgroundColor: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s',
                fontWeight: isActive ? 600 : 500
              }}
            >
              <item.icon size={20} color={isActive ? '#818cf8' : '#9ca3af'} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* USER PROFILE IN SIDEBAR (FOR MOBILE) */}
      <div style={{ 
        marginTop: 'auto', 
        paddingTop: '1.5rem', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <User size={20} color="white" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Tunamoi</span>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Pro Member</span>
        </div>
      </div>
    </div>
  );
}
