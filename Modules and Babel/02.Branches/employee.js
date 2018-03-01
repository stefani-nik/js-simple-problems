class Employee{
    constructor(name, age, position){
        this.name = name;
        this.position = position;
        this.age = age;
    }
    toString(){
        return `${this.name}, ${this.age} (${this.position})`;
    }
}
module.exports = Employee;