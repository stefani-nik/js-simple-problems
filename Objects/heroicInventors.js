function  heroicInventros(input) {
    let myArr = [];
    for(let line of input){
        let [heroName, heroLevel, heroItems] = line.split(/\s*\/\s*/);
        console.log(heroItems);
        let obj = heroItems !== undefined ?
        {"name" : heroName,
                    "level" : Number(heroLevel),
                    "items" : heroItems.split(", ")} :
        {"name" : heroName,
         "level" : Number(heroLevel),
            "items": []};
        myArr.push(obj);
    }
    console.log(JSON.stringify(myArr));
}
heroicInventros([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
heroicInventros(["Jake / 1000"]);