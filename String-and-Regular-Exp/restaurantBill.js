function restaurantBill(input) {
    let items = input.filter(x => !Number(x));
    let sum = input.filter(x => Number(x)).map(Number).reduce((a,b) => a+b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}