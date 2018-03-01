function postitiveNegative(input) {
    let newArr = [];

    for (var i = 0; i < input.length; i++) {
        if(input[i] >= 0){
            newArr.push(input[i]);
        }
        else {
            newArr.unshift(input[i]);
        }
    }

    for (let num of newArr){
        console.log(num);
    }

}
postitiveNegative(['7', '-2', '8', '9']);