const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "..");

const languages = ["c++", "c#", "js"];
const levels = ["Easy", "Medium", "Hard"];

let stats = {
  Easy: 0,
  Medium: 0,
  Hard: 0,
  Total: 0,
};

// đếm bài
languages.forEach((lang) => {
  levels.forEach((level) => {
    const dir = path.join(baseDir, lang, level);

    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      const count = files.filter(f =>
        f.endsWith(".js") || f.endsWith(".cpp") || f.endsWith(".cs")
      ).length;

      stats[level] += count;
      stats.Total += count;
    }
  });
});

// đọc README
const readmePath = path.join(baseDir, "README.md");
let readme = fs.readFileSync(readmePath, "utf-8");

// update bảng progress
const content = `
## 📊 Progress (Auto Updated)

| Level  | Solved |
|--------|--------|
| Easy   | ${stats.Easy} |
| Medium | ${stats.Medium} |
| Hard   | ${stats.Hard} |
| Total  | ${stats.Total} |

_Last updated: ${new Date().toLocaleString()}_
`;

readme = readme.replace(
  /## 📊 Progress[\s\S]*?_Last updated:.*_/,
  content.trim()
);

// update badge
readme = readme.replace(/Total-\d+/g, `Total-${stats.Total}`);
readme = readme.replace(/Easy-\d+/g, `Easy-${stats.Easy}`);
readme = readme.replace(/Medium-\d+/g, `Medium-${stats.Medium}`);
readme = readme.replace(/Hard-\d+/g, `Hard-${stats.Hard}`);

// ghi lại README
fs.writeFileSync(readmePath, readme);

console.log("✅ Progress updated!");