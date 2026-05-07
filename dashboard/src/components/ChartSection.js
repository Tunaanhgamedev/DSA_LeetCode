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
  // Use real historical data from stats.History (linked to log.json)
  const history = stats?.History || {};
  
  // Convert history object to sorted array for the chart
  const data = Object.keys(history)
    .sort() // Sort by date
    .map(date => ({
      date: date,
      name: date.split('-').slice(1).join('/'), // Format YYYY-MM-DD to MM/DD
      count: Number(history[date]) || 0
    }))
    .slice(-7); // Take last 7 days

  // If no data, provide a fallback to prevent empty chart
  const chartData = data.length > 0 ? data : [
    { name: "Mon", count: 2 },
    { name: "Tue", count: 4 },
    { name: "Wed", count: 3 },
    { name: "Thu", count: 7 },
    { name: "Fri", count: 5 },
    { name: "Sat", count: 6 },
    { name: "Sun", count: 4 }
  ];

  return (
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart 
          data={chartData} 
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
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
            domain={[0, 'dataMax + 2']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="count" 
            stroke="#6366f1" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorCount)" 
            isAnimationActive={true}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}