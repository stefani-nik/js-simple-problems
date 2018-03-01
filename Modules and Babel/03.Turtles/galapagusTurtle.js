import Turtle from './turtle.js'
class GalapagosTurtle extends Turtle {
    constructor(name, age, gender) {
        super(name, age, gender);
        this._thingsEaten = [];
    }
    get thingsEaten(){
        return this._thingsEaten;
    }
    eat(value){
        this._thingsEaten.push(value);
    }
    grow(value){
        super.grow(value);
        this._thingsEaten = [];
    }
    toString(){
        return super.toString() + `\nThings, eaten this year: ${this._thingsEaten.join(', ')}`;
    }
}
module.exports = GalapagosTurtle;