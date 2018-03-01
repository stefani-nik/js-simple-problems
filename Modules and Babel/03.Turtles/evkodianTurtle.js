import Turtle from './turtle.js'
class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this._evkodium = evkodiumValue;
    };
    get evkodium(){
        return {
            value : this._evkodium,
            density: this.getDensity()
        };
    }
    getDensity(){
       return this._gender == "male"? this._age * 3 : this._age * 2;
    }
    toString(){
        return super.toString() + `\nEvkodium: ${this._evkodium * this.getDensity()}`;
    }
}
module.exports = EvkodianTurtle;