function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea></textarea>');
    let incrBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $("<ul>");

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr("disabled", true);
    incrBtn.addClass('btn');
    incrBtn.attr("id", "incrementBtn");
    addBtn.addClass('btn');
    addBtn.attr("id", "addBtn");
    list.addClass('results');

    incrBtn.on('click', function (event) {
        var value = parseInt(textArea.val());
       textArea.val(++value);
    });
    
    addBtn.on("click", function () {
        var value = parseInt(textArea.val());
        var li = $("<li>");
        li.text(value);
        list.append(li);
    });

    textArea.appendTo(fragment);
    incrBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
    
}