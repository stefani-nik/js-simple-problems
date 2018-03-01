function rounding([number, precision]){
    number = Number(number);
    precision = Number(precision) > 15 ? 15 : Number(precision);
    let rounding = 1
    for (var i = 0; i < precision; i++) {
        rounding *= 10;
    }
    let result = Math.round(number*rounding)/rounding;
    console.log(result);
}
rounding([10.5, 3])