function autoEngeneeringCompany(arr) {
        let carData = new Map();

    for(let line of arr){
       let currentCar =  line.split(" | ");
        let currBrand = currentCar[0];
        let currModel = currentCar[1];
        let currProduced = Number(currentCar[2]);

        if(!carData.has(currBrand)) {
            carData.set(currBrand ,  new Map());
            carData.get(currBrand).set(currModel, currProduced);
        }
        else {
            let modelAndCount = carData.get(currBrand);
            if(modelAndCount.has(currModel)){
                modelAndCount.set(currModel, modelAndCount.get(currModel) + currProduced);
            }
            else {
                modelAndCount.set(currModel, currProduced);
            }
        }
    }
   for(let [brand , modelCount] of carData){
       console.log(brand);
       for(let [model, count] of modelCount){
           console.log(`###${model} -> ${count}`)
       }
   }
}
autoEngeneeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);