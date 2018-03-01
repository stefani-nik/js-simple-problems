(function solve(inputArr){
    let recipes = new Map();
    recipes.set("apples", {carbohydrate: 1, flavour: 2} );
    recipes.set("coke", {carbohydrate : 10, flavour: 20} );
    recipes.set("burger", {carbohydrate : 5, fat: 7,flavour: 3} );
    recipes.set("omelete", {carbohydrate : 5, fat: 1,flavour: 1} );
    recipes.set("cheverme", {carbohydrate:10, carb : 10, fat: 10,flavour: 10} );

    let quantities = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    for (let line of  inputArr){
        let currentdata = line.split(' ');
        console.log(currentdata);
        let currentCommand = currentdata[0];
        let currentElement = currentdata[1];
        let currentQuantity = currentdata[2];

        if(currentCommand == "restock"){
            quantities[currentElement] += Number(currentQuantity);
             return "Success";
        }
        else if(currentCommand == "prepare"){
           let currentRecipe =  recipes.get(currentElement);
            for (let property in currentRecipe){
                let quantityNeeded = currentRecipe[property]*currentQuantity;
                let quantityInStock = quantities[property];
               if(quantityNeeded > quantityInStock ){
                  return `Error: not enough ${property} in stock`;
               }
            }
            return "Success";
        }
        else if(currentCommand == "report") {
           return `protein=${quantities.protein} carbohydrate=${quantities.carbohydrate} fat=${quantities.fat} flavour=${quantities.flavour}`;
        }
    }
}());

//solve([
//    "restock flavour 50",
//    "prepare coke 4"]);
//solve([
//    'restock carbohydrate 10',
//    'restock flavour 10',
//    'prepare apple 1',
//    'restock fat 10',
//    'prepare burger 1',
//    'report'
//]);



function solve2([arr, exp]){
    let expStr = exp;
    return expStr;
}
var expectationPairs = [
    ['restock flavour 50', 'Success'],
    ['prepare coke 4', 'Error: not enough carbohydrate in stock']
];
for (let i = 0; i < expectationPairs.length; i++) {
    let expectation = expectationPairs[i];
    console.log(solve(expectation[0]));
}
function solve() {

}


