function processOddNumbers (input){
    let arr = [];

    for (var i = 0; i < input.length; i++) {
       if(i % 2 == 1){
           arr.unshift(input[i]*2);
       }
    }
    console.log(arr.join(" "));
}
processOddNumbers(['10', '15', '20', '25']);