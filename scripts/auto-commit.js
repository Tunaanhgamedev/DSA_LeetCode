const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const baseDir = path.join(__dirname, "..");

const languages = ["js", "c++", "c#"];
const levels = ["easy", "medium", "hard"];

let latestFile = null;
let latestTime = 0;

// duyệt tất cả file
languages.forEach(lang => {
  levels.forEach(level => {
    const dir = path.join(baseDir, lang, level);

    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);

      files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isFile() && stat.mtimeMs > latestTime) {
          latestTime = stat.mtimeMs;
          latestFile = fullPath;
        }
      });
    }
  });
});

if (!latestFile) {
  console.log("❌ No file found");
  process.exit(1);
}

// parse path
const relativePath = path.relative(baseDir, latestFile).replace(/\\/g, "/");
const parts = relativePath.split("/");

const lang = parts[0];
const level = parts[1];
const name = parts[2].replace(/\..+$/, "");

// commit message
const msg = `feat(${lang}/${level}): solve ${name}`;

// git commit
execSync("git add .");
execSync(`git commit -m "${msg}"`);

console.log("🚀 Auto commit:", msg);