function solve(){
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target == Computer){
                throw new Error();
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery(){
            return this._battery;
        }
        set battery(obj){
            if(obj instanceof Battery){
                this._battery = obj;
            }
            else {
                throw new TypeError();
            }
        }
    }
    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace,keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.monitor =  monitor;
            this.keyboard = keyboard;
        }

        get keyboard(){
            return this._keyboard;
        }
        set keyboard(obj){
            if(obj instanceof Keyboard){
                this._keyboard = obj;
            }
            else {
                throw new TypeError();
            }
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(obj){
            if(obj instanceof Monitor){
                this._monitor = obj;
            }
            else {
                throw new TypeError();
            }
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
function createMixins() {

    function computerQualityMixin(classToExtend){
        classToExtend.prototype.getQuality = function () {
            console.log(this);
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4)
        };
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace  > Math.floor(this.ram * this.processorSpeed)
        }

    }
    
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
           return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this._monitor.manufacturer;
        };
        classToExtend.prototype.isClassy = function () {
            return this._battery.expectedLife >= 3 &&
                    (this.color == "Silver" || this.color == "Black")&&
                    this.weight < 3;
        }
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}
let classes =  solve();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let mixins = createMixins();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

computerQualityMixin(Desktop);
styleMixin(Desktop);
computerQualityMixin(Laptop);
styleMixin(Laptop);

let keyboard = new Keyboard('Logitech',70);
let keyboard2 = new Keyboard('A-4',70);
let monitor = new Monitor('Logitech',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,2.99,"Silver",battery);
let desktop = new Desktop("Logitech",3.3,8,1,keyboard,monitor);
console.log(desktop.getQuality());
console.log(laptop.getQuality());
