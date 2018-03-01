function scoreToHTML([scoreData]){
    let html = "<table>\n  <tr>";
    let array = JSON.parse(scoreData);

    for(let key of Object.keys(array[0])) {
        html += `<th>${key}</th>`;
    }
        html += "</tr>\n";

        for (let data of array) {
            html += `  <tr>`;
            for(let obj in data) {
                html += `<td>${htmlEscape(data[obj])}</td>`
            }
            html += `</tr>\n`;
        }
    console.log(html + "</table>");
    function htmlEscape(text) {
        text = text.toString();
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
scoreToHTML(['[{"X":5,"Y":7},{"X":2,"Y":4}]']);