import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Zap, Trophy } from "lucide-react";
import StatCard from "../components/StatCard";
import ChartSection from "../components/ChartSection";
import useStats from "../hooks/useStats";

export default function Dashboard() {
  const stats = useStats();

  if (!stats) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <p style={{ color: '#9ca3af' }}>Loading your progress...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
      <div style={{ minWidth: 'fit-content', paddingBottom: '1rem' }}>
        {/* Top Stats Grid */}
        <div className="stats-grid" style={{ marginBottom: '2rem' }}>
          <StatCard 
            title="TOTAL PROBLEMS" 
            value={stats.Total || 0} 
            trend="+12%" 
            icon={BookOpen}
            color="#6366f1"
          />
          <StatCard 
            title="SOLVED" 
            value={stats.Solutions || 0} 
            trend="+5%" 
            icon={CheckCircle}
            color="#a855f7"
          />
          <StatCard 
            title="CURRENT STREAK" 
            value="14 Days" 
            trend="+2" 
            icon={Zap}
            color="#f43f5e"
          />
          <StatCard 
            title="GLOBAL RANK" 
            value="#1,248" 
            trend="+156" 
            icon={Trophy}
            color="#fbbf24"
          />
        </div>

        {/* Main Content Grid */}
        <div className="main-grid">
          {/* Analytics Section */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass"
            style={{ 
              padding: '2rem',
              borderRadius: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Performance Analytics</h2>
              <select style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                color: '#9ca3af', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '0.5rem', 
                padding: '0.25rem 0.5rem',
                fontSize: '0.875rem'
              }}>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <ChartSection stats={stats} />
          </motion.div>

          {/* Right Sidebar Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass"
              style={{ 
                padding: '2rem',
                borderRadius: '1.5rem',
              }}
            >
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', margin: 0 }}>Course Progress</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ProgressItem label="Algorithms" value={85} color="#6366f1" />
                <ProgressItem label="Data Structures" value={3} color="#a855f7" />
                <ProgressItem label="Dynamic Programming" value={42} color="#f43f5e" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass"
              style={{ 
                padding: '2rem',
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', margin: 0 }}>Daily Challenge</h2>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Complete "Merge K Sorted Lists" to maintain your streak!</p>
              <button style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '0.75rem', 
                backgroundColor: '#6366f1', 
                color: 'white', 
                border: 'none', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>Start Challenge</button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressItem({ label, value, color }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
        <span style={{ color: '#9ca3af' }}>{label}</span>
        <span style={{ fontWeight: 'bold' }}>{value}%</span>
      </div>
      <div style={{ height: '8px', width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ height: '100%', backgroundColor: color, borderRadius: '4px' }} 
        />
      </div>
    </div>
  );
}
