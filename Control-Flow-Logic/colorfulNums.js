function colorfulNums(n) {
    console.log("<ul>\n");

    for (var i = 1; i <= Number(n); i++) {
        let color = i % 2 == 0 ? "blue" : "green";
         console.log(`<li><span style='color:${color}'>${i}</span></li>\n `);
    }
    console.log("</ul>\n");
}
colorfulNums(30);