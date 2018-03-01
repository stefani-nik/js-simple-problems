function chessBoard(n) {
    console.log("<div class=\"chessboard\">");

    for (var i = 0; i < Number(n); i++) {
        console.log("\t<div>");

        for (var j = 0; j < Number(n); j++) {
            let color = i%2==0&&j%2==0 || i%2==1&&j%2==1  ? "black" : "white";
            console.log(`\t<span class="${color}"></span>`);
        }
        console.log("\t</div>")
    }
    console.log("</div>");
}
chessBoard(4);