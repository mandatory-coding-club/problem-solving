let input = require("fs").readFileSync(0, "utf8");
function isUpper(ch){
return ch === ch.toUpperCase()
}
let res =""
for(let ch of input.trim()){
if(isUpper(ch)) res+=ch.toLowerCase(0)
else res+=ch.toUpperCase(0)
}
console.log(res)
