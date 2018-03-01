class Turtle{
    constructor(name, age, gender){
        if(new.target == Turtle){
            throw new Error();
        }
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get gender(){
        return this._gender;
    }
    grow(value){
        this._age+=value;
    }
    toString(){
        return `Turtle: ${this._name}\nAged – ${this._age}; Gender – ${this._gender}`;
    }
}
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
module.exports = {
    Turtle,
    WaterTurtle,
    GalapagosTurtle,
    EvkodianTurtle,
    NinjaTurtle
};


