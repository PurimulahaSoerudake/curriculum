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

console.log(`ガソリンは${car.gass}です`);
console.log(`ナンバーは${car.num}です`);
