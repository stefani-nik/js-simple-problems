function printTriangle(n){
    function printStars(count) {
        console.log("*".repeat(count))
    }

    for (var i = 1; i <= n; i++) {
       printStars(i);
    }
    for (var j = n-1; j >= 1; j--) {
       printStars(j);
    }
}
printTriangle(5);