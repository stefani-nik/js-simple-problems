function JSONtable(arr) {
    let html= "<table>\n";
    for(let line of arr){
        let data = JSON.parse(line);

        html += `  <tr>\n`;
        html += `    <td>${htmlEscape(data.name)}</td>\n`;
        html += `    <td>${htmlEscape(data.position)}</td>\n`;
        html += `    <td>${Number(data.salary)}</td>\n`;
        html += `  <tr>\n`;
    }
        console.log(html+"</table>");
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
JSONtable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);