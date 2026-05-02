const fs = require("fs");
const path = require("path");

const baseDir = __dirname;

const levels = ["Easy", "Medium", "Hard"];
const extensions = [".js", ".cpp", ".cs"];

let stats = {
  Easy: new Set(),
  Medium: new Set(),
  Hard: new Set()
};

levels.forEach(level => {
  const dir = path.join(baseDir, "js", level);

  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      if (extensions.some(ext => file.endsWith(ext))) {
        const name = file.replace(/\..+$/, "");
        stats[level].add(name);
      }
    });
  }
});

const result = {
  Easy: stats.Easy.size,
  Medium: stats.Medium.size,
  Hard: stats.Hard.size
};

result.Total = result.Easy + result.Medium + result.Hard;

console.log("📊 Your Stats:");
console.log(result);