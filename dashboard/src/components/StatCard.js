export default function StatCard({ title, value }) {
  return (
    <div
      style={{
        background: "#111827",
        padding: 20,
        borderRadius: 12,
        border: "1px solid #1f2937"
      }}
    >
      <p style={{ color: "#9ca3af" }}>{title}</p>
      <h2 style={{ fontSize: 24 }}>{value}</h2>
    </div>
  );
}