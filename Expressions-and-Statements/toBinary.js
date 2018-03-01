function toBinary([number]){
    let result = 0;
    for (var i = 0; i < number.length; i++) {
        result = result + number[number.length - 1 -i]* Math.pow(2,i);
    }
    console.log(result);
}
toBinary(['00001001']);