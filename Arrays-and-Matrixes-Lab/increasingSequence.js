function increasingSequence(input) {
    let currentBiggest = Number(input[0]);
    let sequence = [currentBiggest];

    for (var i = 1; i < input.length; i++) {
       if(Number(input[i]) >= currentBiggest){
           currentBiggest = Number(input[i]);
           sequence.push(currentBiggest);
       }
    }
    sequence.forEach(x => console.log(x));
}
increasingSequence(["1","3","8","4","10","4","12","3","2","24"]);
increasingSequence([20,3,2,15,6,1]);