let p = require('../util.js').getData().filter(e=>e)
let numbers = p.splice(0,1)[0].split(',').map(e=>parseInt(e))
let b = []
p.filter((_,i)=> !(i % 5)).forEach((_,a)=>{
    b.push([])
    p.slice(a*5,a*5+5).forEach((e,i)=> {e.trim().split(/ +/).forEach(f=>{b[a].push([parseInt(f),1])})})
})
checkBingo = (z) => {
    let v = z.map(e=>e[1])
    for(let i = 0; i < v.length; i+= 5)if(!v.slice(i,i+5).reduce((x,y)=>x+y)) return true
    for(let i = 0; i < 5; i++) if(!v.filter((_,j) => i == j%5).reduce((x,y)=>x+y)) return true
    return false
}


for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < b.length; j++){
        let b0 = b[j].map(e=>e[0])
        if(b0.includes(numbers[i])) b[j][b0.indexOf(numbers[i])][1] = 0
        if(checkBingo(b[j])){
            console.log(b[j].map(e=>e[0]).filter((_,i)=>b[j][i][1]).reduce((x,y)=>parseInt(x)+parseInt(y)) * numbers[i])
            i = j = Math.min()
        }
    }
}
for(let j = 0; j < numbers.length; j++){
    for(let i = 0; i < b.length; i++){
        let b0 = b[i].map(e=>e[0])
        if(b0.includes(numbers[j])) b[i][b0.indexOf(numbers[j])][1] = 0
        if(checkBingo(b[i])){
            if(b.length == 1) {
                i = j = Math.min() + console.log(b[i].map(e=>e[0]).filter((_,j)=>b[i][j][1]).reduce((x,y)=>parseInt(x)+parseInt(y)) * numbers[j])*0
                break
            }
            b.splice(i,1+i--*0)
            continue
        }
    }
}
