function biggestElement(input){
    let arr = [];
    for(let str of input){
        arr.push(str.split(" "));
    }

    let biggestNum = Number.NEGATIVE_INFINITY;
    arr.forEach(r => r.forEach(c => biggestNum = Math.max(biggestNum,c)));
    console.log(biggestNum);
}
biggestElement(['20 50 10',
    '8 33 145']);