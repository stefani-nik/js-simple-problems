function primeCheck(num) {
    let isPrime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime && num>1);
}
primeCheck(8);