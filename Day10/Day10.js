let [part1, part2, u, p] = [0, [], [ {")":3,"]":57,"}":1197,">":25137} ,{"(":")","[":']','{':'}','<':'>'}],require('../util.js').getData()]
for(let i = 0; i < p.length; i++){
    for(let [j,m,k] = [0,[],1]; j < p[i].length; j++){
        if(Object.keys(u[1]).indexOf(p[i][j]) != -1) m.push(u[1][p[i][j]])
        else{
            if(m[m.length-1] != p[i][j]) [part1,k, j] =  [part1 + u[0][p.splice(i,1)[0][j]], i--*0,p[i].length]
            else m.splice(m.length-1,1)
        }
        if(j == p[i].length - 1 && k) part2.push(m.reverse().join(''))
    }
}
console.log(part1)
console.log(part2.map(e=>{
    for(let [i,z] = [0,0]; i < e.length; i++) if( (z = z * 5 + Object.keys(u[0]).indexOf(e[i])+1)*0 + i == e.length -1) return z
}).sort((a,b) => b-a)[Math.floor(part2.length/2)])
