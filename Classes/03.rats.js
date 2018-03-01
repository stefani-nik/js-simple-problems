
class Rat{
    constructor(name) {
        this.name = name;
        this.list = [];
    }


    unite(otherRat){
        if(otherRat.constructor.name == "Rat") {
            this.list.push(otherRat.name);
        }
    }

    getRats(){
        return this.list;
    }

    toString(){
        let str = '';
        str += this.name + "/n";
        this.list.forEach(x => str += "##"+x + "/n");
    }
}
class Fake{
    constructor( name){
        this.name = name;
    }
}

let rat = new Rat("Stefani");

let fakeRat = new Fake("FakeRat");
rat.unite(fakeRat);
console.log(rat)