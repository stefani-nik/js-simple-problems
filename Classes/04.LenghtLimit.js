class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength
    }
    increase(length){
        this.innerLength += Number(length);
    }
    decrease(length){
        this.innerLength -= Number(length);
        if(this.innerLength < 3){
            this.innerLength = 0;
        }
    }

    toString(){
        let currentString = this.innerString;

        if(currentString.length <= this.innerLength){
        return currentString
        }
        currentString = currentString.slice(0,this.innerLength) + "...";
        return currentString;

    }
}
let str = new Stringer("Stefisefsef", 5);
console.log(str.toString());