(function formCreation() {
    
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
    class Form{
        constructor(){
            this._elements = $("<div class = 'form'></div>");
            this._textboxes = [];
            for(let textbox of arguments){
                if(!(textbox.constructor.name == Textbox)){
                    throw new Error();
                }
            }
            for(let arg of arguments){
                this._textboxes.push(arg);
                this._elements.append(arg.elements);
            }


        }

        submit(){
            let check= true;
            for(let textBox of this._elements){
                if(!textBox.isValid()){
                    textBox.elements.css('border', '2px solid red');
                    check = false;
                }
                else{
                    textBox.elements.css('border', '2px solid green');
                }
            }
            return check;
        }

        attach(selector){
            $(selector).append(this._elements);
        }
    }

    return{  Textbox: Textbox,
            Form: Form}

}());
formCreation();