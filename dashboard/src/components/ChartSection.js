import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-3 rounded-xl border border-white/10 shadow-xl">
        <p className="text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">{label}</p>
        <p className="text-white text-lg font-bold">
          {payload[0].value} <span className="text-xs font-normal text-indigo-400">Solved</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function ChartSection({ stats }) {
  const data = [
    { name: "Mon", count: 4, problems: stats.Easy },
    { name: "Tue", count: 7, problems: stats.Medium },
    { name: "Wed", count: 5, problems: stats.Easy },
    { name: "Thu", count: 12, problems: stats.Hard },
    { name: "Fri", count: 9, problems: stats.Medium },
    { name: "Sat", count: 15, problems: stats.Hard },
    { name: "Sun", count: stats.Solutions % 20, problems: stats.Total }
  ];

  return (
    <div className="w-full h-[350px]">
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