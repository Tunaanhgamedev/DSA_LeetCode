import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function ChartSection({ stats }) {
  const data = [
    { level: "Easy", count: stats.Easy },
    { level: "Medium", count: stats.Medium },
    { level: "Hard", count: stats.Hard }
  ];

  return (
    <div style={{
  height: 300,
  background: "#111827",
  padding: 20,
  borderRadius: 12,
  overflow: "hidden"
}}>
      <h3>Progress</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="level" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
     
  );
}