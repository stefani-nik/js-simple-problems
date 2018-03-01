function solve(arr) {

    class Candy {
        constructor(topping, filling, spice) {
            this.topping = topping;
            this.filling = filling;
            this.spice = spice;
        }

        get topping() {
            return this._topping;
        }
        
        set topping(value) {
            let toppings = ['milk chocolate', 'white chocolate', 'dark chocolate'];
            if (!toppings.includes(value) || value == '') {
                throw  new TypeError();
            }
            this._topping = value;
        }

        get filling() {
            return this._filling;
        }

        set filling(value) {
            let fillings = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge', ''];
            if (!fillings.includes(...value) || value.length > 3) {
                throw  new TypeError();
            }
                if (value == '')
                    this._filling = null;
                else
                    this._filling = value.join(',');
        }

        get spice() {
            return this._spice;
        }

        set spice(value) {
            if (typeof value != "string" || value == 'poison' || value == 'asbestos') {
                throw  new TypeError();
            }
            if (value == '')
                this._spice = null;
            else
                this._spice = value;
        }
    }

    let resultArr = [];
    for(let line of arr){
        let tokens = line.split(':');
        if(tokens.length != 3) continue;
        let topping = tokens[0];
        let fillings = tokens[1].split(',');
        let spice = tokens[2];

        try{
            resultArr.push(new Candy(topping, fillings, spice))
        }
        catch (e) {}
    }
    return resultArr;
}
let candy = solve([
    'milk chocolate:hazelnut,caramel,hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',
    'white chocolate:fudge:',
    'frosting:yogurt:frosting',
    'dark chocolate:blueberry:rock crystals',
    'white'
]);
console.log(candy);