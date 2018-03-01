class Branch{
    constructor(id, branchName, companyName){
        this._id = id;
        this._branchName = branchName;
        this._companyName = companyName;
        this._employees = [];

    }
    get employees(){
        return this._employees;
    }
    hire(obj){
        this._employees.push(obj);
    }
    toString(){
        let str = `@ ${this._companyName}, ${this._branchName}, ${this._id}\nEmployed:\n`;
        if(this._employees.length == 0){
            str+="None";
        }
        else {
            this._employees.forEach(e => str += `** ${e}\n`);
        }
        return str.trim();
    }
}
module.exports = Branch;