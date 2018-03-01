function mapSort(myMap, sortingFunction){
    let map = new Map();
    map = myMap;
    let mapSorted = new Map();

    if(sortingFunction != 'undefined') {
        mapSorted = [...map].sort(sortingFunction);
    }
    else{
        mapSorted = [...map.entries()].sort((a,b) => function (a,b) {
            return a[0]-b[0];
        });
    }
    return new Map(mapSorted.map((i) => [i[0], i[1]]));
}
module.exports = mapSort;
