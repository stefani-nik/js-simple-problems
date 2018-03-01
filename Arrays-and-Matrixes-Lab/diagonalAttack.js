function diagonalAttack(input) {
    let matrix = input.map( row => row.split(" ").map(Number));
    let mainSum = 0;
    let reverseSum = 0;

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
           if(col == row){
               mainSum += matrix[row][col];
           }
            if(col == matrix[row].length - 1 - row ){
                reverseSum += matrix[row][col];
            }
        }
    }
    if(mainSum == reverseSum){
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                if(col != row && col != matrix[row].length - row ){
                    matrix[row][col] =  mainSum;
                }
            }
        }
    }
    for (let row of matrix){
        console.log(row.join(" "));
    }
}
diagonalAttack(["5 3 12 3 1","11 4 23 2 5","101 12 3 21 10","1 4 5 2 2","5 22 33 11 1"]);