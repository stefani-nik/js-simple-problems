function capitalizaFirstLetter(input){
    let str = input[0].split(" ");
    let newStr = [];
    for(let word of str){
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        newStr.push(word);
    }
    console.log(newStr.join(" "));
}
capitalizaFirstLetter(["this iSSS teSt"]);
