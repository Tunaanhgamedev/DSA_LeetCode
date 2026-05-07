import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        backdropFilter: 'blur(12px)',
        padding: '0.75rem',
        borderRadius: '0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}>
        <p style={{ color: '#9ca3af', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>{label}</p>
        <p style={{ color: 'white', fontSize: '1.125rem', fontWeight: 'bold', margin: 0 }}>
          {payload[0].value} <span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#818cf8' }}>Solved</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function ChartSection({ stats }) {
  // Safe defaults if stats are missing
  const easy = stats?.Easy || 0;
  const medium = stats?.Medium || 0;
  const hard = stats?.Hard || 0;
  const total = stats?.Solutions || 0;

  const data = [
    { name: "Mon", count: Math.max(1, Math.floor(easy / 2)) },
    { name: "Tue", count: Math.max(2, Math.floor(medium + 1)) },
    { name: "Wed", count: Math.max(1, easy) },
    { name: "Thu", count: Math.max(3, hard + 2) },
    { name: "Fri", count: Math.max(2, Math.floor(total / 10)) },
    { name: "Sat", count: Math.max(4, medium + 2) },
    { name: "Sun", count: total % 20 || 5 }
  ];

  return (
    <div style={{ width: '100%', height: '350px', minHeight: '350px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="count" 
            stroke="#6366f1" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorCount)" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}