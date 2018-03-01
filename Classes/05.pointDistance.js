class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(p1,p2){
        let firstPoint = Math.abs(p1.x - p2.x);
        let secondPoin = Math.abs(p1.y - p2.y);
        let distance = Math.sqrt(firstPoint*firstPoint + secondPoin*secondPoin);
        return distance
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
