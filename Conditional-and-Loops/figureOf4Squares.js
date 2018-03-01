function figureOfSquares([n]) {
    n = Number(n);

    if(n == 2 )
    {console.log("+++")}
    else {
        if (n % 2 == 0) {

            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");

            for (var i = 0; i < (n - 4) / 2; i++) {
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|")
            }

            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");

            for (var i = 0; i < (n - 4) / 2; i++) {
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|")
            }

            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        }
        else {
            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");

            for (var i = 0; i < (n - 3) / 2; i++) {
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|")
            }

            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");

            for (var i = 0; i < (n - 3) / 2; i++) {
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|")
            }

            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        }
    }
}
figureOfSquares([2]);