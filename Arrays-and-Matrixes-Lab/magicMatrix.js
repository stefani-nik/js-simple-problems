function magicMatrix(input) {
    let matrix = input.map( row => row.split(" ").map(Number));
    let isMagic = true;
    for (var i = 0; i < matrix.length - 1; i++) {
        let currentRowSum = 0, currentColSum =0, nextRowSum = 0, nextColSum = 0;
        for (var j = 0; j < matrix.length; j++) {

            currentRowSum += matrix[i][j];
            nextRowSum += matrix[i + 1][j];
            currentColSum += matrix[j][i];
            nextColSum += matrix[j][i + 1];
        }
            if(currentRowSum != nextRowSum || currentColSum != nextColSum  ){
                isMagic = false;
                break;
            }
    }
    console.log(isMagic);
}
magicMatrix(["4 5 6","6 5 4", "5 5 5"]);
magicMatrix(["11 32 45","21 0 1","21 1 1"]);