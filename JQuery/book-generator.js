(function createBook() {
    let id = 1;
    
    return function (selector, titleName, authorName, isbnElement) {
        let fragment = document.createDocumentFragment();
        let container = $(selector);
        let bookContainer = $('<div>');
        let title = $('<p>').append(titleName).addClass('title');
        let author = $('<p>').append(authorName).addClass('author');
        let isbn = $('<p>').append(isbnElement).addClass('isbn');
        let selectBtn = $('<button>Select</button>');
        let deselectBtn = $('<button>Deselect</button>');

        bookContainer.attr('id', 'book' + id);
        id++;
        bookContainer
            .append(title)
            .append(author)
            .append(isbn)
            .append(selectBtn)
            .append(deselectBtn);
        bookContainer.appendTo(fragment);
        container.append(fragment);
        
        selectBtn.on('click', function () {
            bookContainer.css('border', '2px solid blue')
        });
            
        deselectBtn.on('click', function () {
            bookContainer.css('border', 'none')
        });
    }
}());