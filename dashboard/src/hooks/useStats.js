import { useEffect, useState } from "react";

export default function useStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/stats.json")
      .then(res => res.json())
      .then(setStats);
  }, []);

  return stats;
}