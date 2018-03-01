function everyNthEl(input) {
    let step = Number(input[input.length-1]);
    let myArr = input.splice(0,input.length - 1);

    for (var i = 0; i < myArr.length; i+=step) {
        console.log(myArr[i]);
    }
}
everyNthEl([5,
20,
31,
4,
20,
2]);