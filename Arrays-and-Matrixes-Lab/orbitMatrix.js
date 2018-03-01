function orbitMatrix(input) {
    let matrixDimensions = input[0].split(' ').map(Number);
    let shotCellCoords = input[1].split(' ').map(Number);
    let row = shotCellCoords[0];
    let col = shotCellCoords[1];
    let newMatrix = [];

        for (var i = 0; i < matrixDimensions[0]; i++) {
            let currentArr = [];
            for (var j = 0; j < matrixDimensions[1]; j++) {

                currentArr.push(Math.max(Math.abs(row - i), Math.abs(col - j))+1);

            }
            newMatrix.push(currentArr);
        }

    for (let row of newMatrix){
        console.log(row.join(" "));
    }
}
orbitMatrix(["4 4","0 0"]);