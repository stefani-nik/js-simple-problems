function pointInRectangle ([x,y,xMin,xMax, yMin, yMax]){
    [x,y,xMin,xMax, yMin, yMax] = [x,y,xMin,xMax, yMin, yMax].map(Number);
    if(x >= xMin && x <= xMax && y >= yMin && y <= yMax)
        console.log("Inside")
    else if (x < xMin || x > xMax ||  y < yMin || y > yMax)
        console.log("Outside")
    else
        console.log("Border")
}
pointInRectangle([2 ,-3,2, 12 ,-3,3]);