import { useState } from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProgressBar from "../components/ProgressBar";
import ChartSection from "../components/ChartSection";
import Header from "../components/Header";
import useStats from "../hooks/useStats";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle2, Zap, Trophy, Menu, X } from "lucide-react";

export default function Dashboard() {
  const stats = useStats();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!stats) return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#030712', color: 'white' }}>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{ width: '48px', height: '48px', border: '4px solid #6366f1', borderTopColor: 'transparent', borderRadius: '50%' }}
      />
    </div>
  );

  const progress = (stats.Total / 150) * 100;

  return (
    <div className="app-container" style={{ position: 'relative', overflowX: 'hidden' }}>
      <div className="bg-glow" />

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 100,
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '50%',
          backgroundColor: '#6366f1',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
          border: 'none',
          cursor: 'pointer'
        }}
        className="lg:hidden"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 40
            }}
          />
        )}
      </AnimatePresence>

      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <Sidebar />
      </div>

      <div className="content-wrapper">
        <main style={{ padding: '2rem', width: '100%', boxSizing: 'border-box' }}>
          <Header />

          {/* Stats Grid */}
          <div className="stat-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <StatCard 
              title="Total Problems" 
              value={stats.Total} 
              icon={BookOpen}
              trend="+12%"
            />
            <StatCard 
              title="Solved" 
              value={stats.Solutions} 
              icon={CheckCircle2}
              trend="+5%"
            />
            <StatCard 
              title="Current Streak" 
              value="14 Days" 
              icon={Zap}
              trend="+2"
            />
            <StatCard 
              title="Global Rank" 
              value="#1,248" 
              icon={Trophy}
              trend="+156"
            />
          </div>

          {/* Main Content Area */}
          <div className="main-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {/* Progress Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass lg:col-span-2"
              style={{ 
                minWidth: 0,
                padding: '2rem',
                borderRadius: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', margin: 0 }}>Performance Analytics</h3>
                <select style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.4rem 0.8rem', color: '#9ca3af', fontSize: '0.75rem', outline: 'none' }}>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              
              <ChartSection stats={stats} />
            </motion.div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass"
                style={{ 
                  padding: '2rem',
                  borderRadius: '1.5rem',
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem', marginTop: 0 }}>Course Progress</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <ProgressBar label="Algorithms" value={85} color="#6366f1" />
                  <ProgressBar label="Data Structures" value={progress} color="#a855f7" />
                  <ProgressBar label="Dynamic Programming" value={42} color="#06b6d4" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass"
                style={{ 
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                  border: '1px solid rgba(99, 102, 241, 0.2)'
                }}
              >
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', marginTop: 0 }}>Daily Challenge</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>Complete "Merge K Sorted Lists" to maintain your streak!</p>
                <button style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  backgroundColor: '#6366f1', 
                  color: 'white', 
                  borderRadius: '12px', 
                  fontWeight: '600', 
                  border: 'none', 
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }}>
                  Start Challenge
                </button>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
