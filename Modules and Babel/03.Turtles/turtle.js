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
        return `Turtle: ${this._name}\nAged - ${this._age}; Gender - ${this._gender}`;
    }
}
module.exports = Turtle;