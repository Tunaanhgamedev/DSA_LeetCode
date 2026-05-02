const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "..");

const languages = ["c++", "c#", "js"];
const levels = ["Easy", "Medium", "Hard"];

// lưu bài unique
const problemSet = {
  Easy: new Set(),
  Medium: new Set(),
  Hard: new Set()
};

// tổng số solution (tất cả file)
let totalSolutions = 0;

// 🔍 Duyệt toàn bộ project
languages.forEach((lang) => {
  levels.forEach((level) => {
    const dir = path.join(baseDir, lang, level);

    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);

      files.forEach(file => {
        if (
          file.endsWith(".js") ||
          file.endsWith(".cpp") ||
          file.endsWith(".cs")
        ) {
          const name = file.replace(/\..+$/, "");

          // unique problem
          problemSet[level].add(name);

          // tổng solutions
          totalSolutions++;
        }
      });
    }
  });
});

// 📊 Stats
const stats = {
  Easy: problemSet.Easy.size,
  Medium: problemSet.Medium.size,
  Hard: problemSet.Hard.size
};

stats.Total = stats.Easy + stats.Medium + stats.Hard;
stats.Solutions = totalSolutions;

// 📖 Đọc README
const readmePath = path.join(baseDir, "README.md");
let readme = fs.readFileSync(readmePath, "utf-8");

// 📊 Nội dung mới
const content = `
## 📊 Progress (Auto Updated)

| Type      | Count |
|-----------|------|
| Problems  | ${stats.Total} |
| Solutions | ${stats.Solutions} |

---

| Level  | Solved |
|--------|--------|
| Easy   | ${stats.Easy} |
| Medium | ${stats.Medium} |
| Hard   | ${stats.Hard} |

_Last updated: ${new Date().toLocaleString()}_
`;

// 🔄 Replace section progress
readme = readme.replace(
  /## 📊 Progress[\s\S]*?_Last updated:.*_/,
  content.trim()
);

// 🔥 Update badge
readme = readme.replace(/Total-\d+/g, `Total-${stats.Total}`);
readme = readme.replace(/Easy-\d+/g, `Easy-${stats.Easy}`);
readme = readme.replace(/Medium-\d+/g, `Medium-${stats.Medium}`);
readme = readme.replace(/Hard-\d+/g, `Hard-${stats.Hard}`);

// 💾 Ghi lại README
fs.writeFileSync(readmePath, readme);

console.log("✅ Progress updated!");
console.log("📊 Problems:", stats.Total);
console.log("🧠 Solutions:", stats.Solutions);