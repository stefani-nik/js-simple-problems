import Turtle from './turtle.js'
class WaterTurtle extends Turtle{
    constructor(name, age, gender, waterPool){
        super(name, age, gender);
        this._waterPool = waterPool;
    }
    get currentWaterPool(){
        return this._waterPool;
    }
    travel(value){
        this._waterPool = value;
        super.grow(5);
    }
    toString(){
        return super.toString() + `\nCurrently inhabiting ${this._waterPool}`;
    }
}
module.exports = WaterTurtle;