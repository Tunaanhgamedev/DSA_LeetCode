const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "..");

const languages = ["c++", "c#", "js"];
const levels = ["Easy", "Medium", "Hard"];

let stats = {
  easy: 0,
  medium: 0,
  hard: 0,
  total: 0,
};

languages.forEach((lang) => {
  levels.forEach((level) => {
    const dir = path.join(baseDir, lang, level);

    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      const count = files.filter(f => f.endsWith(".js") || f.endsWith(".cpp") || f.endsWith(".cs")).length;

      stats[level] += count;
      stats.total += count;
    }
  });
});

const content = `
## 📊 Progress (Auto Updated)

| Level  | Solved |
|--------|--------|
| Easy   | ${stats.easy} |
| Medium | ${stats.medium} |
| Hard   | ${stats.hard} |
| Total  | ${stats.total} |

_Last updated: ${new Date().toLocaleString()}_
`;

const readmePath = path.join(baseDir, "README.md");
let readme = fs.readFileSync(readmePath, "utf-8");

// replace section
readme = readme.replace(
  /## 📊 Progress[\s\S]*?_Last updated:.*_/,
  content.trim()
);

fs.writeFileSync(readmePath, readme);

console.log("✅ Progress updated!");