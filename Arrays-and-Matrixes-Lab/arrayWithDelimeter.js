function arrayWithDelimeter(input){
    let delimeter = input[input.length-1];
    let myArr = input.splice(0,input.length - 1);
    console.log(myArr.join(`${delimeter}`));
}
arrayWithDelimeter(["One",
'Two',
'Three',
'Four',
'Five',
'-']);