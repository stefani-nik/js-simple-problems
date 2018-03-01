function quadricEquation([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number)
    let disc = b*b - 4 * a * c;

    if(disc > 0){
        let x1 = ((-b) + Math.sqrt(disc))/(2*a);
        let x2 = ((-b) - Math.sqrt(disc))/(2*a);
        console.log(Math.min(x1,x2));
        console.log(Math.max(x1,x2));
    }
     else if(disc == 0){
        console.log((-b)/(2*a));
    }
    else {
        console.log("No");
    }
}
quadricEquation([6,11,-35]);