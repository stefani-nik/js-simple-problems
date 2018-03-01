function lastKSequence(input) {
    let numberOfEl = input[0];
    let k = input[1];
    let sequence = [1];
    for (var i = 1; i < numberOfEl; i++) {
       let start = Math.max(0, i - k);
        let end = i - 1;
        let sum = 0;
        for (var j = start; j <= end; j++) {
          sum += sequence[j];
        }
        sequence[i] = sum;
    }
    console.log(sequence.join(" "));
}
lastKSequence([6,3]);