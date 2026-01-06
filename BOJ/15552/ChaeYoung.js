let input = require("fs").readFileSync(0, "utf8").trim().split("\n"); 
const T = Number(input[0]) 
const nums = input.slice(1) 
let res=[] 
for(let i=0;i<T;i++){
  const [a,b]=nums[i].split(" ") 
  res.push(Number(a)+Number(b)) 
} 
console.log(res.join("\n"))
