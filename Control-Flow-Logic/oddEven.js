function  oddEven(n) {
    let num = Math.abs(n);
    if(num % 2 == 0)
        console.log("even");
    else if (num % 2 == 1)
        console.log("odd");
    else
        console.log("invalid");
}
oddEven(1.2);