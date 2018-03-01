function cappyJuice(input) {
   let  juices = new Map();
    let sortedMap = new Map();
    let result = [];
    for (let line of input) {
        let lineData = line.split(' => ');
        let currentFruit = lineData[0];
        let currentQuantity = Number(lineData[1]);
        if (juices.has(currentFruit)) {
            juices.set(currentFruit, juices.get(currentFruit) + currentQuantity);
        }
        else {
            juices.set(currentFruit, currentQuantity);
        }
        let checkQuantity = juices.get(currentFruit);
        if (checkQuantity >= 1000) {
           sortedMap.set(currentFruit, checkQuantity);
        }
    }
    for (let [fruit, quantity] of sortedMap) {
            quantity = Math.floor(quantity / 1000);
            console.log(`${fruit} => ${quantity}`);
    }
}
cappyJuice([
    'Orange => 2000',
    'Orange => 3000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
cappyJuice([
   'Kiwi => 234',
   'Pear => 2345',
   'Watermelon => 3456',
   'Kiwi => 4567',
   'Pear => 5678',
   'Watermelon => 6789'
]);