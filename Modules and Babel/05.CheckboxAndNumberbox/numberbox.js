class Numberbox{
    constructor(label, selector, minValue, maxValue){
        this._label = label;
        this._elements= $(selector);
        this.minValue = minValue;
        this.maxValue = maxValue;
        this._value = minValue;

        let that = this;
        $(selector).change(function () {
            that.value = $(this).val();
        });
    }
    get label(){
        return this._label;
    }
    get elements(){
        this._elements = $(this.selector);
        return this._elements;
    }
    get value(){
        return this._value;
    }
    set value(value){
        if( Number(value) > this.maxValue || Number(value) < this.minValue)
            throw  new Error();
        this._value = value;
        $(this._elements).val(value);
    }
}
module.exports = Numberbox;