function diagonalSum(input) {
    let matrix = input.map( row => row.split(" ").map(Number));
    let mainSum = 0;
    let secondarySum = 0;

    for (var i = 0; i < matrix.length; i++) {
       mainSum += matrix[i][i];
        secondarySum += matrix[i][matrix.length - 1 - i];
    }
    console.log(`${mainSum} ${secondarySum}`);
}
diagonalSum(['20 40',
    '10 60']);