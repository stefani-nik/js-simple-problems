class Employee{
    constructor(name, age){
        if(new.target === Employee){
            throw new Error();
        }
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    getSalary(){
        return this.salary;
    }
    work(){
        let currentTask = this.tasks.shift();
        console.log(this.name + currentTask);
        this.tasks.push(currentTask);
    }
    collectSalary(){
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
}
module.exports = Employee;