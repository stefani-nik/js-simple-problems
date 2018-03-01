function userNames(array) {
    let mySet = new Set();
    for(let name of array){
        mySet.add(name);
    }
    [...mySet].sort(function (a, b) {
        if (a.length < b.length)
        return -1;
        else if (a.length > b.length)
            return 1;
        else
            if (a < b)
            {
                return -1;
            }
            else if (a > b)
            {
                return 1;
            }
            return 0;

    }).forEach(x => console.log(x));

}
userNames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);
userNames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);