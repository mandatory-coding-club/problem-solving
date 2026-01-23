let input = require("fs").readFileSync(0, "utf8");
const line = input.trim(" ").split("\n");
const T = line[0];
const res = [];
for (let i = 1; i <= T; i++) {
  res.push(line[i].slice(0, 1) + line[i].slice(-1));
}
console.log(res.join("\n"));
