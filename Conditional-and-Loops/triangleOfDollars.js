function triangleOfDollars ( [num]){
    num = Number(num);
    let str = "$";
    for (var i = 1; i <= num; i++) {
      console.log(str);
        str += "$";
    }
}
triangleOfDollars([3])