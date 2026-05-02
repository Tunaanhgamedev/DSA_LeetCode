const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const [,, name, lang, level] = process.argv;

if (!name || !lang || !level) {
  console.log("❌ Usage: node create-problem.js <name> <lang> <level>");
  process.exit(1);
}

const baseDir = path.join(__dirname, "..");
const dir = path.join(baseDir, lang, level);

// format tên file
const fileName = name.toLowerCase().replace(/\s+/g, "-");

// extension
const extMap = {
  js: "js",
  "c++": "cpp",
  "c#": "cs"
};

const ext = extMap[lang];

if (!ext) {
  console.log("❌ Language not supported");
  process.exit(1);
}

// tạo folder nếu chưa có
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// file code
const codePath = path.join(dir, `${fileName}.${ext}`);
fs.writeFileSync(codePath, `// ${name}\n`);

// file markdown
const mdPath = path.join(dir, `${fileName}.md`);

const template = `# 🧩 ${name}

## 🔗 Link
https://leetcode.com/problems/${fileName}/

## 🟢 Level
${level}

## 🏷️ Tags
#array #hashmap

---

## 💡 Ý tưởng
- ...

---

## ⚡ Complexity
- Time: 
- Space: 

---

## ❌ Sai lầm
- ...

---

## 🧠 Pattern
...

---

## 🔁 Review
- ☐ Làm lại sau 1 ngày
- ☐ Làm lại sau 1 tuần
`;

fs.writeFileSync(mdPath, template);

console.log("✅ Created:", codePath);
console.log("✅ Created:", mdPath);

// mở VS Code
exec(`code "${codePath}"`);
exec(`code "${mdPath}"`);

// auto commit
exec(`git add .`);
exec(`git commit -m "feat: create ${fileName}"`);