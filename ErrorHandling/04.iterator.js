function makeIterable(object) {
    let properties = [...Object.keys(object)];
    properties = properties.sort();
    let index = properties.length - 1;
    return {
        next: function () {
            if (index >= 0)
                return { value: properties[index--], done: false };
            else
                return { done: true };
        }
    }
}
let obj = {age: 27, name: "pesho", book: "Lord of the Rings"};
let iterator = makeIterable(obj);
while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value);
}
let obj2 = {name: "gosho", "13": true, book: "Lord of the Drinks", 2: 2, age: 15, passportNumber: 12345678};
let iterator2 = makeIterable(obj2);
while(true){
    let res = iterator2.next();
    if(res.done) break;
    console.log(res.value);
}