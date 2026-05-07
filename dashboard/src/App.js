import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Menu } from "lucide-react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {/* SIDEBAR */}
        <aside className={`sidebar-wrapper ${isSidebarOpen ? 'open' : ''}`}>
          <Sidebar closeMenu={() => setIsSidebarOpen(false)} />
        </aside>

        {/* MOBILE OVERLAY */}
        {isSidebarOpen && (
          <div className="mobile-overlay" onClick={() => setIsSidebarOpen(false)} />
        )}

        {/* MAIN CONTENT */}
        <div className="main-wrapper">
          <div className="content-padding">
            {/* Header with Mobile Toggle */}
            <div className="header-container">
               <button 
                onClick={() => setIsSidebarOpen(true)}
                className="mobile-toggle-btn"
               >
                 <Menu size={24} />
               </button>
               <div className="header-inner">
                 <Header />
               </div>
            </div>

            <main className="page-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/problems" element={<div className="glass" style={{ padding: '2rem' }}><h2>Problems</h2></div>} />
                <Route path="/achievements" element={<div className="glass" style={{ padding: '2rem' }}><h2>Achievements</h2></div>} />
                <Route path="/profile" element={<div className="glass" style={{ padding: '2rem' }}><h2>Profile: Tunamoi</h2></div>} />
                <Route path="/settings" element={<div className="glass" style={{ padding: '2rem' }}><h2>Settings</h2></div>} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
