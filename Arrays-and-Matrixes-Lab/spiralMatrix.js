function spiralMatrix([input]) {
    let dimensions = input.split(' ');
    let sizeRows = Number(dimensions[0]);
    let sizeCols = Number(dimensions[1]);
    let matrix = matrixOfZeroes([],sizeRows, sizeCols );
    let maxRotations = sizeRows * sizeCols;
    let direction = "right";
    let col = 0;
    let row = 0;

    for (let i = 1; i <= maxRotations; i++)
    {
        if (direction == "right" && (col > sizeRows - 1 || matrix[row][col] != 0))
        {
            direction = "down";
            col--;
            row++;
        }
        if (direction == "down" && (row > sizeCols - 1 || matrix[row][col] != 0))
        {
            direction = "left";
            row--;
            col--;
        }
        if (direction == "left" && (col < 0 || matrix[row][col] != 0))
        {
            direction = "up";
            col++;
            row--;
        }

        if (direction == "up" && row < 0 || matrix[row][col] != 0)
        {
            direction = "right";
            row++;
            col++;
        }

        matrix[row][col] = i;

        if (direction == "right")
        {
            col++;
        }
        if (direction == "down")
        {
            row++;
        }
        if (direction == "left")
        {
            col--;
        }
        if (direction == "up")
        {
            row--;
        }
    }

   for (let row of matrix){
      console.log(row.join(" "));
   }

    function matrixOfZeroes(matrix, n,m) {
        for (var i = 0; i < n ; i++) {
            let currentArr = [];
            for (var j = 0; j < m; j++) {
                currentArr.push(0);
            }
            matrix.push(currentArr);
        }
        return matrix;
    }
}
spiralMatrix(["6 7"]);