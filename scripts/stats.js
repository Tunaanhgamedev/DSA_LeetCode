const fs = require("fs");

const levels = ["Easy", "Medium", "Hard"];
let stats = {};

levels.forEach(level => {
  stats[level] = fs.readdirSync(`js/${level}`).length / 2;
});

console.log("📊 Your Stats:");
console.log(stats);