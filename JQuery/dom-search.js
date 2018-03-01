function domSearch(selector, isCaseSensitive) {
    isCaseSensitive = true;
    let container = $(selector);

    //Adding the add-controls div to the container
    let addControls = $("<div>").addClass('add-controls');
    let enterText = $('<label>Enter text: </label>');
    let inputField = $('<input>');
    let addBtn = $('<a>Add</a>').addClass('button').css('display', 'inline-block');
    enterText
        .append(inputField)
        .append(addBtn);
    addControls.append(enterText);
    container.append(addControls);

    //Adding the search-controls div to the container
    let searchControls = $("<div>").addClass('search-controls');
    let searchText = $('<label>Search: </label>');
    let searchInputField = $('<input>');
    searchText.append(searchInputField);
    searchControls.append(searchText);
    container.append(searchControls);


    //Adding the result-controls div to the container
    let resultControls = $("<div>").addClass('result-controls');
    let unorderedList = $('<ul></ul>').addClass('items-list');
    resultControls.append(unorderedList);
    container.append(resultControls);

    //Adding functionality to the ADD button
    addBtn.on('click', function (e) {
       let currentElement = inputField.val();
        let listElement = $(`<li>`).addClass('list-item');
        let elementText = $(`<strong>${currentElement}</strong>`);
        let removeBtn = $('<a>X</a>').addClass('button').click(deleteElement);
        listElement.append(removeBtn)
                    .append(elementText);
        unorderedList.append(listElement);
        $('.add-controls :input').val('');
    });

    //Adding functionality to the SEARCH field
    searchInputField.on('change', function (e) {
        let listArr = $('.items-list li');
        let searchString = searchInputField.val();

        for(let element of listArr){
            let currentString = element.innerText;
            if(!isCaseSensitive){
                currentString = currentString.toLowerCase();
                searchString = searchString.toLowerCase();
            }
            if(!currentString.includes(searchString)){
                $(element).css('display', 'none');
            }
            else {
                $(element).css('display','');
            }
        }
    });

    //Adding functionality to the X button
    function deleteElement() {
        $(this).parent().remove();
    }

}