let scores = [10, 15, 20, 25]

for(var i of scores){
    if(i % 2 === 0 ){
        console.log(i + "は偶数です");
    }
}

let car = {
    gass: 20.5,
    num: 1234
}

for(var c in car){
    if(c === "gass"){
        console.log("ガソリンは" + car[c] + "です");
    }else if(c === "num"){
        console.log("ナンバーは" + car[c] + "です");
    }
}