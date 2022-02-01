let z = function(n=true,z=false){
    let p = require("../util.js").getData()
    for(let [j,v,k] = [0,[[],[]],"",[0,0,0]]; j < p[0].length; [j,v] = [j+1,[[],[]]]){
        for(let i = 0; i < p.length; i++) v[parseInt(p[i][j])]++
        if(!((p = z? (p.filter(e=>{ return (((v[1] >= v[0] ? (n?1:0) : (n?0:(v[1] == p.length/2 ? 0: 1)))+ (e[j] == '1')) != 1 || p.length == 1)})) : p)*0) && !((k += (v[1] >= v[0] ? (n?1:0) : (n?0:(v[1] == p.length/2 ? 0: 1))))*0) && j==(p[0].length-1)) return {k,p}
    }
}
console.log(parseInt(z().k,2)*parseInt(z(0).k,2)) //part1
console.log(parseInt(z(1,1).p[0],2)*parseInt(z(0,1).p[0],2)) //part2
