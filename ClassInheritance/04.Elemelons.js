let result = (function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Element: ${this.constructor.name.slice(0,this.constructor.name.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: ${this.constructor.name.slice(0,this.constructor.name.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: ${this.constructor.name.slice(0,this.constructor.name.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: ${this.constructor.name.slice(0,this.constructor.name.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort, elementIndex){
            super(weight, melonSort, elementIndex);
            this.element = 'Water';
            this.elements = ['Fire', 'Earth', 'Air','Water'];
        }
        morph(){
               this.element = this.elements.shift();
               this.elements.push(this.element);
              return this.element;

        }
        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    return {
        Melon,
        Watermelon,
        Airmelon,
        Earthmelon,
        Firemelon,
        Melolemonmelon
    }

}());
//let test = new result.Melon(100, "Test");
//Throws error

let watermelon = new result.Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

let morphisics = new result.Melolemonmelon(12.5, "Kingsize");
morphisics.morph();
//morphisics.morph();
//morphisics.morph();

console.log(morphisics.toString());

