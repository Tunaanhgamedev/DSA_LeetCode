const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "..");

const languages = ["c++", "c#", "js"];
const levels = ["Easy", "Medium", "Hard"];

// ===== DATA =====
const problemSet = {
  Easy: new Set(),
  Medium: new Set(),
  Hard: new Set()
};

let totalSolutions = 0;

// ===== SCAN =====
languages.forEach((lang) => {
  levels.forEach((level) => {
    const dir = path.join(baseDir, lang, level);

    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    files.forEach(file => {
      if (file.match(/\.(js|cpp|cs)$/)) {
        const name = file.replace(/\..+$/, "");
        problemSet[level].add(name);
        totalSolutions++;
      }
    });
  });
});

// ===== STATS =====
const stats = {
  Easy: problemSet.Easy.size,
  Medium: problemSet.Medium.size,
  Hard: problemSet.Hard.size
};

stats.Total = stats.Easy + stats.Medium + stats.Hard;
stats.Solutions = totalSolutions;

// ===== LOG (STREAK) =====
const logPath = path.join(baseDir, "log.json");
let log = {};

if (fs.existsSync(logPath)) {
  log = JSON.parse(fs.readFileSync(logPath));
}

const today = new Date().toISOString().slice(0, 10);
log[today] = (log[today] || 0) + 1;

fs.writeFileSync(logPath, JSON.stringify(log, null, 2));

// ===== UPDATE README =====
const readmePath = path.join(baseDir, "README.md");

if (fs.existsSync(readmePath)) {
  let readme = fs.readFileSync(readmePath, "utf-8");

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

  if (readme.includes("## 📊 Progress")) {
    readme = readme.replace(
      /## 📊 Progress[\s\S]*?_Last updated:.*_/,
      content.trim()
    );
  } else {
    readme += "\n" + content;
  }

  // badge
  readme = readme.replace(/Total-\d+/g, `Total-${stats.Total}`);
  readme = readme.replace(/Easy-\d+/g, `Easy-${stats.Easy}`);
  readme = readme.replace(/Medium-\d+/g, `Medium-${stats.Medium}`);
  readme = readme.replace(/Hard-\d+/g, `Hard-${stats.Hard}`);

  fs.writeFileSync(readmePath, readme);
}

// ===== SAVE STATS =====
fs.writeFileSync(
  path.join(baseDir, "stats.json"),
  JSON.stringify(stats, null, 2)
);

// ===== SYNC DASHBOARD =====
const dashboardDir = path.join(baseDir, "dashboard", "public");

if (!fs.existsSync(dashboardDir)) {
  fs.mkdirSync(dashboardDir, { recursive: true });
}

fs.writeFileSync(
  path.join(dashboardDir, "stats.json"),
  JSON.stringify(stats, null, 2)
);

fs.writeFileSync(
  path.join(dashboardDir, "log.json"),
  JSON.stringify(log, null, 2)
);

// ===== LOG OUTPUT =====
console.log("✅ Progress updated!");
console.log("📊 Problems:", stats.Total);
console.log("🧠 Solutions:", stats.Solutions);
console.log("🔥 Streak log updated!");
console.log("📦 Synced to dashboard!");