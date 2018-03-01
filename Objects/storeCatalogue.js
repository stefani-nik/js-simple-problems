function storeCatalogue(arrInput) {
    let myArr = [];
    for (let product of arrInput) {
        let productData = product.split(" : ");
        let productName = productData[0];
        let productPrice = Number(productData[1]);
        myArr.push({ProductName: productName, Price: productPrice});
    }
    myArr.sort(function (a, b) {
        return (a.ProductName > b.ProductName) ? 1
            : ((b.ProductName > a.ProductName) ? -1 : 0);
    });
    let startLetter = myArr[0].ProductName[0];
    console.log(startLetter);

    for (let product of myArr) {
        if (product.ProductName[0] == startLetter) {
            console.log(`  ${product.ProductName}:${product.Price}`);
        }
        else {
            startLetter = product.ProductName[0];
            console.log(startLetter);
            console.log(`  ${product.ProductName}:${product.Price}`);
        }
    }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);