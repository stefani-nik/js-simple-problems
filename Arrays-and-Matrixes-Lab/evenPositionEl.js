function evenPositionEl(input) {
    let str  = "";
    for (var i = 0; i < input.length; i++) {
       if(i == 0){
           str += input[i];
       }
        else if(i % 2 == 0 && i != 0){
           str += " " + input[i];
       }
    }
    console.log(str);
}
evenPositionEl(['20', '30', '40']);