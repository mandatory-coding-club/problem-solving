let input = require("fs").readFileSync(0, "utf8");

const line = input.trim().split("\n")
const numbers = line[1].split(" ").map(Number)
const v = Number(line[2])
let count = 0
for(let number of numbers){
    if(number===v) count++

}
console.log(count)
