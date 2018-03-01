import Turtle from './turtle.js'
class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this.maskColor = maskColor;
        this.weapon = weapon;
        this.level = 0;
    }
    grow(value){
       super.grow(value);
        this.level += value;
    }
    toString(){
        if(this.level < 25){
            return super.toString() + `\n${this._name.slice(0,3)} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`
        }
        else if(this.level < 100){
            return super.toString() + `\n${this._name.slice(0,3)} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`
        }
        else {
            return super.toString() + `\n${this._name.slice(0,3)} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`
        }
    }
}

module.exports = NinjaTurtle;
