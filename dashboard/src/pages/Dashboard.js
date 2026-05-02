import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProgressBar from "../components/ProgressBar";
import ChartSection from "../components/ChartSection";
import Header from "../components/Header";
import useStats from "../hooks/useStats";

export default function Dashboard() {
  const stats = useStats();

  if (!stats) return <div>Loading...</div>;

  const progress = (stats.Total / 150) * 100;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: 240, padding: 20, width: "100%" }}>
        <Header />

        <div style={{ display: "flex", gap: 20 }}>
          <StatCard title="Problems" value={stats.Total} />
          <StatCard title="Solutions" value={stats.Solutions} />
        </div>

        <ProgressBar value={progress} />

        <ChartSection stats={stats} />
      </div>
    </div>
  );
}
