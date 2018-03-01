function validityChecker([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    let firstDistance = Math.sqrt(x1*x1+y1*y1);
    let secondDistance = Math.sqrt(x2*x2+y2*y2);
    let thirdDistance =  Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));

    if(firstDistance == Math.floor(firstDistance)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(secondDistance == Math.floor(secondDistance)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(thirdDistance == Math.floor(thirdDistance)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(['2','1','1','1']);