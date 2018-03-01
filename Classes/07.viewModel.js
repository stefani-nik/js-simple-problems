class Textbox {
    constructor(selector, regex) {
        this.value = "";
        this._selector = selector;
        this._elements = $(selector);
        this._invalidSymbols = regex;

        let _that = this;
        $(selector).on('input', function () {
            _that.value = $(this).val();
        });
    }

    get value() {
        return $(this._selector).val();
    }

    set value(inputValue) {
        $(this._selector).val(inputValue);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test($(this._selector).val());
    }
}
let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(event){
    let input = event.target;
    textbox.value = input.innerHTML;
    console.log(textbox.value);
});