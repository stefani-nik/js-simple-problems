function squareOfStars(n){
    function printStars(count) {
        console.log("*"+" *".repeat(count-1))
    }

    for (var i = 0; i < n; i++) {
      printStars(n);
    }
}
squareOfStars(5)