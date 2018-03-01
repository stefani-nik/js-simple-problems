function equalNeightbours(input) {
    let matrix = input.map( row => row.split(" "));
    let cntVertical = 0;
    let cntHorixontal = 0;


    for (var i = 0; i < matrix.length-1; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j]==matrix[i+1][j]){
                cntVertical++;
            }
        }
    }

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length -1; j++) {
            if(matrix[i][j]==matrix[i][j + 1]){
                cntHorixontal++;
            }
        }
    }
    console.log(cntHorixontal + cntVertical);
}
equalNeightbours(['2 3 4 7 0',
    '4 0 5 3 4',
    '2 3 5 4 2',
    '9 8 7 5 4']);