function htmlEscaping(lines) {
    let html = `<ul>\n`;

    for(let line of lines){
        let escaped = htmlEscatipng(line);
        html+= `  <li>${escaped}</li>\n`;
    }
    html += `</ul>`;
    console.log(html);
    function htmlEscatipng(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}