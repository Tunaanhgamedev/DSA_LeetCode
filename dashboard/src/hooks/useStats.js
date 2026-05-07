import { useEffect, useState } from "react";

export default function useStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Fetch directly from GitHub Raw URL to ensure real-time data sync with Git
    const GITHUB_STATS_URL = "https://raw.githubusercontent.com/Tunaanhgamedev/DSA_LeetCode/main/stats.json";
    
    // Fallback to local stats.json if GitHub fetch fails
    const LOCAL_STATS_URL = "/stats.json";

    fetch(GITHUB_STATS_URL)
      .then(res => {
        if (!res.ok) throw new Error("GitHub fetch failed");
        return res.json();
      })
      .then(setStats)
      .catch(() => {
        // Fallback to local file
        fetch(LOCAL_STATS_URL)
          .then(res => res.json())
          .then(setStats)
          .catch(err => console.error("Could not load stats:", err));
      });
  }, []);

  return stats;
}