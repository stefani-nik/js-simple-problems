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
let classes =  solve();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
console.log(desktop);
let comp = new Computer("stefi");
