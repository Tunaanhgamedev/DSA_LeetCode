export default function Sidebar() {
  return (
    <div
      style={{
        width: 240,
        height: "100vh",
        background: "#020617",
        color: "#fff",
        padding: 20,
        position: "fixed",
        left: 0,
        top: 0,
        borderRight: "1px solid #1e293b",
      }}
    >
      <h2 style={{ marginBottom: 30 }}>🎮 DSA</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <span>🏠 Dashboard</span>
        <span>📊 Analytics</span>
        <span>🔥 Streak</span>
      </div>
    </div>
  );
}
