const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
// Robust language folder detection
const languages = ["C#", "C++", "Js", "c#", "c++", "js"];
const levels = ["Easy", "Medium", "Hard", "easy", "medium", "hard"];
const extensions = [".js", ".cpp", ".cs"];

let globalStats = {
  Easy: new Set(),
  Medium: new Set(),
  Hard: new Set(),
  TotalSolutions: 0
};

// Map lowercase levels to standard keys
const levelMap = {
  "easy": "Easy",
  "medium": "Medium",
  "hard": "Hard",
  "Easy": "Easy",
  "Medium": "Medium",
  "Hard": "Hard"
};

languages.forEach(lang => {
  const langDir = path.join(rootDir, lang);
  if (!fs.existsSync(langDir)) return;

  levels.forEach(level => {
    const dir = path.join(langDir, level);

    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);

      files.forEach(file => {
        if (extensions.some(ext => file.endsWith(ext))) {
          const problemName = file.replace(/\.(js|cpp|cs)$/, "");
          const standardLevel = levelMap[level] || "Easy";
          globalStats[standardLevel].add(problemName);
          globalStats.TotalSolutions++;
        }
      });
    }
  });
});

const result = {
  Easy: globalStats.Easy.size,
  Medium: globalStats.Medium.size,
  Hard: globalStats.Hard.size,
  Solutions: globalStats.TotalSolutions,
  LastUpdate: new Date().toISOString()
};

result.Total = result.Easy + result.Medium + result.Hard;

const rootStatsPath = path.join(rootDir, "stats.json");
const publicStatsPath = path.join(rootDir, "dashboard", "public", "stats.json");

try {
  fs.writeFileSync(rootStatsPath, JSON.stringify(result, null, 2));
  console.log(`✅ Updated root stats: ${rootStatsPath}`);

  if (fs.existsSync(path.dirname(publicStatsPath))) {
    fs.writeFileSync(publicStatsPath, JSON.stringify(result, null, 2));
    console.log(`✅ Updated dashboard stats: ${publicStatsPath}`);
  }
} catch (err) {
  console.error("❌ Error writing stats:", err.message);
}

console.log("📊 Current Summary:");
console.table(result);