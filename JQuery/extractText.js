function extractText() {
    let listItems =  $('ul#items li').toArray().map(li => li.textContent).join(", ");
    $('#result').text(listItems);
}