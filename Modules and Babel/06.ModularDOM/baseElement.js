class BaseElement{
    constructor(){
        if(new.target == "BaseElement")
            throw  new Error;
        this.element = null;
    }
    appendTo(selector){
        this.createElement();
        $(selector).append(this.element);
    }
    createElement(){
        this.element = this.getElementString();
    }
    getElementString(){

    }
}
module.exports = BaseElement;