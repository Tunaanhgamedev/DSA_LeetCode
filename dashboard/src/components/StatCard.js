import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function StatCard({ title, value, icon: Icon, trend, color }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        backgroundColor: 'rgba(17, 24, 39, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1.5rem',
        borderRadius: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          padding: '0.6rem', 
          borderRadius: '0.75rem', 
          backgroundColor: `${color}15` || 'rgba(255, 255, 255, 0.05)', 
          border: `1px solid ${color}30` || '1px solid rgba(255, 255, 255, 0.1)', 
          color: color || '#818cf8',
          display: 'flex'
        }}>
          {Icon && <Icon size={24} />}
        </div>
        {trend && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.25rem', 
            color: '#34d399', 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            backgroundColor: 'rgba(52, 211, 153, 0.1)', 
            padding: '0.25rem 0.5rem', 
            borderRadius: '9999px', 
            border: '1px solid rgba(52, 211, 153, 0.2)' 
          }}>
            <TrendingUp size={12} />
            {trend}
          </div>
        )}
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</p>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', margin: 0, letterSpacing: '-0.025em' }}>{value}</h2>
      </div>

      <div style={{ marginTop: '1rem', height: '4px', width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '9999px', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ height: '100%', background: `linear-gradient(to right, ${color || '#6366f1'}, #a855f7)`, borderRadius: '9999px' }}
        />
      </div>
    </motion.div>
  );
}