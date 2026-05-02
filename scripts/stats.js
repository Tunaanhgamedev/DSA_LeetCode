const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const languages = ["C#", "C++", "Js"];
const levels = ["Easy", "Medium", "Hard"];
const extensions = [".js", ".cpp", ".cs"];

let globalStats = {
  Easy: new Set(),
  Medium: new Set(),
  Hard: new Set(),
  TotalSolutions: 0
};

languages.forEach(lang => {
  levels.forEach(level => {
    const dir = path.join(rootDir, lang, level);

    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);

      files.forEach(file => {
        if (extensions.some(ext => file.endsWith(ext))) {
          // Problem name is usually the filename without extension
          const problemName = file.replace(/\.(js|cpp|cs)$/, "");
          globalStats[level].add(problemName);
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

// Path to stats.json in root
const rootStatsPath = path.join(rootDir, "stats.json");
// Path to stats.json in dashboard/public (for the React app)
const publicStatsPath = path.join(rootDir, "dashboard", "public", "stats.json");

fs.writeFileSync(rootStatsPath, JSON.stringify(result, null, 2));
console.log(`✅ Updated root stats: ${rootStatsPath}`);

if (fs.existsSync(path.dirname(publicStatsPath))) {
  fs.writeFileSync(publicStatsPath, JSON.stringify(result, null, 2));
  console.log(`✅ Updated dashboard stats: ${publicStatsPath}`);
}

console.log("📊 Current Summary:");
console.table(result);