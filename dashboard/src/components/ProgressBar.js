import { motion } from "framer-motion";

export default function ProgressBar({ label, value, color = "bg-indigo-500" }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-400 font-medium">{label}</span>
        <span className="text-white font-bold">{Math.round(value)}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full ${color} shadow-[0_0_10px_rgba(99,102,241,0.3)]`}
        />
      </div>
    </div>
  );
}
