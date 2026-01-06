let input = require("fs").readFileSync(0, "utf8");
function score(res){
    if(res==="A+")return 4.3
    if(res==="A0")return 4.0
    if(res==="A-")return 3.7
    if(res==="B+")return 3.3
    if(res==="B0")return 3.0
    if(res==="B-")return 2.7
    if(res==="C+")return 2.3
    if(res==="C0")return 2.0
    if(res==="C-")return 1.7    
    if(res==="D+")return 1.3
    if(res==="D0")return 1.0
    if(res==="D-")return 0.7
    if(res==="F")return 0.0
    
}
console.log(score(input.trim(" ")).toFixed(1));
