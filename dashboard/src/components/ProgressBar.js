export default function ProgressBar({ value }) {
  return (
    <div style={{ marginTop: 10 }}>
      <div
        style={{
          height: 10,
          background: "#333",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "linear-gradient(90deg,#00f0ff,#ff00ff)",
            borderRadius: 10,
          }}
        />
      </div>
    </div>
  );
}
