function sortArray(numbersArr, order){
    numbersArr = numbersArr.map(Number);

    if(order == "asc"){
        numbersArr = numbersArr.sort(function (a,b) {
        return a-b
    });
    }
    else {
       numbersArr=  numbersArr.sort(function (a,b) {
            return b-a;
        })
    }

    return numbersArr;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
