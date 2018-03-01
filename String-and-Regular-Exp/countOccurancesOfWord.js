function countOccurancesOfWord([str, target]) {
    target = target.toLowerCase();
    str = str.toLowerCase();
    let re = new RegExp(`\\b` + target + `\\b`,"g");
    console.log((str.match(re)|| []).length);
}
countOccurancesOfWord(["The watter dejdwifwef weedwe.the the qwjqid  THE","the"]);