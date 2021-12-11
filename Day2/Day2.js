let [x,p] = [y=z=0,require("./util.js").getData()]
p.forEach(i=>{
    if(i.startsWith("f")) x += (z += parseInt(i.strip(/.* /))*y)*0 + parseInt(i.strip(/.* /))
    else if(i.startsWith("d")) y += parseInt(i.strip(/.* /))
    else y -= parseInt(i.strip(/.* /))
})
console.log(x*y) //part 1
console.log(x*z)//part 2
