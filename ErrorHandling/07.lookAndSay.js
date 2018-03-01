function * lookAndSay(start) {
    let currentNum = start + "";
    while(true){
        let counter = 1;
        let nextElement = "";
        for (let i = 0; i < currentNum.length; i++) {
           if(currentNum[i] == currentNum[i+1]){
               counter++;
           }
            else{
               nextElement += counter;
               nextElement += currentNum[i];
               counter = 1;
           }
        }
        currentNum = nextElement;
        yield nextElement;
    }
}
//let lookSequence = lookAndSay(1);
//console.log(lookSequence.next().value);
//console.log(lookSequence.next().value);
//console.log(lookSequence.next().value);
//console.log(lookSequence.next().value);
//console.log(lookSequence.next().value);
let lookSequence = lookAndSay(113);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);