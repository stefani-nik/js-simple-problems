function printStringLetters(input) {
    if(Array.isArray(input)){
        input = input[0];
    }
    for (var i = 0; i < input.length; i++) {
       console.log(`str[${i}] -> ${input[i]}`);
    }
}
printStringLetters(["hello"]);