function* random (number) {
    let currentNum = number;
    let nextNum = (currentNum * currentNum) % (4871 * 7919);
    while (true){
          yield  nextNum % 100;
          currentNum = nextNum;
          nextNum = (currentNum * currentNum) % (4871 * 7919);
    }
}
let rnd = random(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}