let input = require("fs").readFileSync(0, "utf8");

const line = input.trim().split("\n")
const [N,X] = line[0].split(" ").map(Number)
const numbers = line[1].split(" ").map(Number)

let res = []
for(let number of numbers){
    if(number<X)res.push(number)
}
console.log(res.join(" "))
