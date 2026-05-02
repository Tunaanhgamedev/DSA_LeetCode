const { execSync } = require("child_process");

const file = process.argv[2];

if (!file) {
  console.log("❌ Usage: node smart-commit.js <file-path>");
  process.exit(1);
}

const parts = file.split("/");
const lang = parts[0];
const level = parts[1];
const name = parts[2].replace(/\..+$/, "");

const msg = `feat(${lang}/${level}): solve ${name}`;

execSync(`git add .`);
execSync(`git commit -m "${msg}"`);

console.log("🚀 Commit:", msg);
