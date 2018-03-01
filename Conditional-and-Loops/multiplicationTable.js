function multiplicationTable([n]) {
    n = Number(n);
    let html = `<table border="1">\n<tr><th>x</th>`;
    for (var i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += "</tr>\n";
    for (var i = 1; i <= n ; i++) {
        html += `<tr><th>${i}</th>`;
        for (var j = 1; j <= n; j++) {
            let result = i*j;
            html += `<td>${result}</td>`;
        }
        html += `</tr>\n`;
    }
    html += "</table>";
 console.log(html);
}
multiplicationTable([5]);