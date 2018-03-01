function firstAndLastEl(input) {
    let index = Number(input[0]);
   console.log(input.slice(1,index+1).join(" "));
    console.log(input.slice(input.length-index, input.length).join(" "));
}
firstAndLastEl(['3',
    '6', '7', '8', '9']);