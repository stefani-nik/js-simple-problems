import Entity from './entity.js'
class Dog extends Entity{
    constructor(name){
        super(name);
    }
    saySomething(){
        return `${this.name} barks!`;
    }
}
module.exports = Dog;