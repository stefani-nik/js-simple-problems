function wordsUppercase([str]) {
    return str.toUpperCase().split(/\W+/).filter(w => w != '').join(', ');
}
function wordsUppercase2([str]) {
    var strUpper = str.toUpperCase();
    var words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
    function extractWords() { return strUpper.split(/\W+/); }
}