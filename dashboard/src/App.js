import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#030712', 
        color: 'white',
        position: 'relative' // Đảm bảo làm gốc cho các thành phần con
      }}>
        {/* SIDEBAR - ÉP CỐ ĐỊNH BÊN TRÁI */}
        <div style={{ 
          width: '280px', 
          height: '100vh',
          position: 'fixed', // Dùng fixed để nó không di chuyển
          left: 0,
          top: 0,
          borderRight: '1px solid rgba(255,255,255,0.05)',
          backgroundColor: '#030712',
          zIndex: 1000
        }}>
          <Sidebar />
        </div>

        {/* MAIN CONTENT - ÉP CÁCH LỀ 300PX BẰNG MARGIN */}
        <div style={{ 
          marginLeft: '300px', // ÉP CÁCH LỀ TRÁI 300PX (280px sidebar + 20px gap)
          padding: '2rem',
          minHeight: '100vh',
          boxSizing: 'border-box'
        }}>
          <Header />
          <main style={{ marginTop: '2rem' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/problems" element={<div className="glass" style={{ padding: '2rem' }}><h2>Problems Page</h2></div>} />
              <Route path="/achievements" element={<div className="glass" style={{ padding: '2rem' }}><h2>Achievements</h2></div>} />
              <Route path="/profile" element={<div className="glass" style={{ padding: '2rem' }}><h2>Profile: Tunamoi</h2></div>} />
              <Route path="/settings" element={<div className="glass" style={{ padding: '2rem' }}><h2>Settings</h2></div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
