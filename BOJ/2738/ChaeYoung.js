let input = require("fs").readFileSync(0, "utf8");
line = input.trim().split("\n")
const [N,M]=line[0].split(" ").map(Number)
const A = {}
const B = {}
const res= []

for (let i=0;i<N;i++){
if(!A[i]) A[i]=[]
if(!B[i]) B[i]=[]

line[1+i].split(" ").map(num=>{
   A[i].push(Number(num))
})

line[1+i+N].split(" ").map(num=>{
   B[i].push(Number(num))
})

res[i]=[]
for(let j=0; j<M;j++){
   res[i].push(A[i][j]+B[i][j])
}
}
console.log(res.map(i=>i.join(" ")).join("\n"))

