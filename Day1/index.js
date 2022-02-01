let p = require('../util.js').getData().map(e=>parseInt(e))
console.log(p.map((e,i)=>e > p[i-1] ? 1:0).reduce((a,b)=>a+b)) //Part 1
console.log(p.map((e,i)=>e + p[i-1] + p[i-2]> p[i-1] + p[i-2] + p[i-3] ? 1 : 0).reduce((a,b)=>a+b)) //Part 2
