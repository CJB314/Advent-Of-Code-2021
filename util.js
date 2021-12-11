Array.prototype.sub = function(first,last){
    try{
        let z = []
        for(let i = first; i <= last; i++){
            z.push(this[i%(this.length)])
        }
        return z
    }
    catch{
        return false;
    }
}
String.prototype.strip = function(r){
    return this.replace(r,'')
}
String.prototype.toArray = function(){
    let z = []
    for(let i = 0; i < this.length; i++){
        z.push(this[i])
    }
    return z
}
Array.prototype.count = function(e){
    let z = 0;
    this.forEach(i=>{
        if(i == e){
            z++
        }
    })
    return z
}
String.prototype.count = function(e){
    let z = 0;
    for(let i = 0; i < this.length; i++){
        if(this[i] == e){
            z++
        }
    }
    return z
}
sumJson = function(json){
    let z = 0;
    for(let key in json){
        z += parseInt(json[key])
    }
    return z
}


const fs = require('fs')
sumArray = function(arr,index=0){
    let z = 0;
    for(let i = 0; i < arr.length; i++){
        if(index==0){
            z += parseInt(arr[i])
        }
        else{
            z += parseInt(arr[i].toString()[index-1])
        }
    }
    return z
}
multiplyArray = function(arr){
    let z = 1;
    arr.forEach(e=>{
        z*= parseInt(e)
    })
    return z
}
findIncreases = function(arr,items=1,index=0, tiesareincreases = false){
    let z = [];
    for(let i = 0; i < arr.length-items+1; i++){
        if(items==1){
            if(index==0){
                if(parseInt(arr[i+1])>parseInt(arr[i])){
                    z.push({value:arr[i+1],index:i+1})
                }
            }
            else{
                if(parseInt(arr[i+1].toString()[index])>parseInt(arr[i].toString()[index])){
                    z.push({value:arr[i+1],index:i+1})
                }
            }
        }
        else{
            if(index==0){
                let t = arr.sub(i,i+items)
                let y = [0,0];
                for(let f = 0; f < t.length-1; f++){
                    y[0] += parseInt(t[f])
                }
                for(let f = 1; f < t.length; f++){
                    y[1] += parseInt(t[f])
                }
                if(y[1] > y[0] || (y[0] == y[1]  && tiesareincreases)){
                    z.push({value:y[0],index:i})
                }
            }
            else{
                let t = arr.sub(i,i+items)
                let y = [0,0];
                for(let f = 0; f < t.length-1; f++){
                    y[0] += parseInt(t[f].toString()[index])
                }
                for(let f = 1; f < t.length; f++){
                    y[1] += parseInt(t[f].toString()[index])
                }
                if(y[1] > y[0] || (y[0] == y[1]  && tiesareincreases)){
                    increases.push({value:y[0],index:i})
                }
            }
        }
    }
    return z
}
findMostCommonDigit = function(arr,index=-2){
    let z = {}
    if(index == -1){index=[0,arr.length-1]}
    if(typeof index == 'number'){
        for(let i = 0; i < arr.length; i ++){
            if(index==-2){
                z[arr[i]]  = z[arr[i]] ? z[arr[i]] + 1 : 1
            }
            else{
                z[arr[i].toString()[index]]  = z[arr[i].toString()[index]] ? z[arr[i].toString()[index]] + 1 : 1
            }
        }
        let k = [0,0];
        for(let key in z){
            let value = z[key]
            if(value > k[0]) {
                k[0] = value
                k[1] = key
            }
            else if(value == k[0] && key == 1){
                k[0] = value
                k[1] = key
            }
            
        }
        return k[1]
    }
    else if(typeof index == 'object'){
        for(let o = index[0]; o <= index[1]; o++){
            z[o] = {}
            for(let i = 0; i < arr.length; i ++){
                z[o][arr[i].toString()[o]]  = z[o][arr[i].toString()[o]] ? z[o][arr[i].toString()[o]] + 1 : 1
            }
        }
        let j = []
        for(let o = index[0]; o <= index[1]; o++){
            let k = [0,0];
            for(let key in z[o]){
                let value = z[o][key]
                if(value > k[0]) {
                    k[0] = value
                    k[1] = key
                }
                else if(value == k[0] && key == 1){
                    k[0] = value
                    k[1] = key
                }
            }
            j.push(k[1])
        }
        return j
    }
    else{
        return false;
    }
}

findLeastCommonDigit = function(arr,index=-1){
    let z = {}
    if(index == -1){index=[0,arr.length-1]}
    if(typeof index == 'number'){
        for(let i = 0; i < arr.length; i ++){
            if(index==-1){
                z[arr[i]]  = z[arr[i]] ? z[arr[i]] + 1 : 1
            }
            else{
                z[arr[i].toString()[index]]  = z[arr[i].toString()[index]] ? z[arr[i].toString()[index]] + 1 : 1
            }
        }
        let k = [Math.min(),0];
        for(let key in z){
            let value = z[key]
            if(value < k[0]) {
                k[0] = value
                k[1] = key
            }
            else if(value == k[0] && key == 0){
                k[0] = value
                k[1] = key
            }
        }
        return k[1]
    }
    else if(typeof index == 'object'){
        for(let o = index[0]; o <= index[1]; o++){
            z[o] = {}
            for(let i = 0; i < arr.length; i ++){
                z[o][arr[i].toString()[o]]  = z[o][arr[i].toString()[o]] ? z[o][arr[i].toString()[o]] + 1 : 1
            }
        }
        let j = []
        for(let o = index[0]; o <= index[1]; o++){
            let k = [Math.min(),0];
            for(let key in z[o]){
                let value = z[o][key]
                if(value < k[0]) {
                    k[0] = value
                    k[1] = key
                }
                else if(value == k[0] && key == 0){
                    k[0] = value
                    k[1] = key
                }
            }
            j.push(k[1])
        }
        return j
    }
    else{
        return false;
    }
}
findWhatSums = function(arr,int,items=2){
    if(items == 2){
        for(let i = 0; i < arr.length; i++){
            let f = arr[i]
            for(let ii = 0; ii < arr.length; ii++){
                if(parseInt(f) + parseInt(arr[ii]) == parseInt(int)){
                    return [parseInt(f),parseInt(arr[ii])]
                }
            }
        }
    }
    else if(items == 3){
        for(let i = 0; i < arr.length; i++){
            let f = arr[i]
            for(let ii = 0; ii < arr.length; ii++){
                let t = arr[ii]
                for(let iii = 0; iii < arr.length; iii++){
                    if(parseInt(f) + parseInt(t) + parseInt(arr[iii]) == parseInt(int)){
                        return [parseInt(f),parseInt(t),parseInt(arr[iii])]
                    }
                }
            }
        }
    }
    else return false;
}
createArray = function(start,finish){
    let t = []
    for(let i = start; i <= finish; i++){
        t.push(i)
    }
    return t
}
decodeNumeral = function(numeral){
    let numerals = {
       i:1,
       ii:'v',
       v:5,
       vv:'x',
       x:10,
       xx:'l',
       l:50,
       ll:'c',
       c:100,
       cc:'d',
       d:500,
       dd:'m',
       m:1000,
       mm:'§',
    }
    let num = 0;
    for(let i = 0; i<numeral.length;i++){
        if(i < numeral.length-1){
            if(numeral[i+1].toLowerCase() == numerals[numeral[i].toLowerCase()+numeral[i].toLowerCase()]){
                num += numerals[numeral[i].toLowerCase()]*4
                i++
            }
            else{
                num += numerals[numeral[i].toLowerCase()]
            }
        }
        else{
            num += numerals[numeral[i].toLowerCase()]
        }
        
    }
    return num

}
encodeNumeral = function(num){
    let numerals = {
        1:'I',
        4:'IV',
        5:'V',
        9:'IX',
        10:'X',
        40:'LX',
        50:'L',
        90:'XC',
        100:'C',
        400:'CD',
        500:'D',
        900:'CM',
        1000:'M',
     }
     numeral = ""
     let numarray = [1000,500,100,50,10,5,1]
    for(let i = 0; i < numarray.length; i++){
        if(num<numarray[i]){
            continue;
        }
        else{
            numeral += numerals[numarray[i]].repeat(Math.floor(num/numarray[i]))
            num = num%numarray[i]
        }
    }
    return numeral
}


exports.encodeNumeral = encodeNumeral
exports.decodeNumeral = decodeNumeral
exports.createArray = createArray
exports.findWhatSums = findWhatSums
exports.findLeastCommonDigit = findLeastCommonDigit
exports.sumArray = sumArray 
exports.findMostCommonDigit = findMostCommonDigit 
exports.findIncreases = findIncreases
exports.multiplyArray = multiplyArray
exports.sumJson = sumJson
exports.getData = function(){
    let data = fs.readFileSync('./input.txt', 'utf8')
    p = data.split("\r\n")
    return p
}
