import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

// Placeholder components for other pages
const Problems = () => (
  <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', backgroundColor: 'rgba(17, 24, 39, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Solved Problems</h2>
    <p style={{ color: '#9ca3af' }}>Feature coming soon: List of all your solved LeetCode problems.</p>
  </div>
);

const Achievements = () => (
  <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', backgroundColor: 'rgba(17, 24, 39, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Achievements</h2>
    <p style={{ color: '#9ca3af' }}>Your coding milestones and trophies will appear here.</p>
  </div>
);

const Profile = () => (
  <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', backgroundColor: 'rgba(17, 24, 39, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Profile: Tunamoi</h2>
    <p style={{ color: '#9ca3af' }}>Manage your personal information and coding preferences.</p>
  </div>
);

const Settings = () => (
  <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', backgroundColor: 'rgba(17, 24, 39, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Settings</h2>
    <p style={{ color: '#9ca3af' }}>Customize your dashboard theme, notifications, and integration settings.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
