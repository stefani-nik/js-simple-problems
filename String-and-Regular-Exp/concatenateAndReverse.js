function concatenateAndReverse(input) {
    let str = input.join('');
    console.log(Array.from(str).reverse().join(''));
}
concatenateAndReverse(["I am very coool"]);