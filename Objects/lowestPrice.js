function lowestPrice (prices){
    let townsWithProducts = new Map();
    for (let line of prices) {
        let [town, product , price] = line.split(/\s*\|\s*/);
        price = Number(price);
        if (!townsWithProducts.has(product)){
            townsWithProducts.set(product, [{Town: town, Price: price}]);
        }
        else {
         townsWithProducts.get(product).push({Town: town, Price: price});
        }
    }
    for(let [productName, townAndPrice] of townsWithProducts){
        for (let obj of townAndPrice){
            for (let obj2 of townAndPrice){
                if(obj.Town == obj2.Town){
                        obj.Price = obj2.Price;
                }
            }
        }
        townAndPrice.sort(function(a,b) {
            return (a.Price > b.Price) ? 1
            : ((b.Price > a.Price) ? -1 : 0);
        });
            console.log(`${productName} -> ${townAndPrice[0].Price} (${townAndPrice[0].Town})`);
    }
}
//lowestPrice([
//    'Sample Town | Sample Product | 1000',
//    'Sample Town | Orange | 2',
//    'Sample Town | Peach | 1',
//    'Sofia | Orange | 3',
//    'Sofia | Peach | 2',
//    'New York | Sample Product | 1000.1',
//    'New York | Burger | 10'
//]);
lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);