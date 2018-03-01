function parseTownToJSON (towns){
    let townData = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, lat, long] = town.split(/\s*\|\s*/);
        let townObj = { Town: townName, Latitude:Number(lat), Longitude: Number(long) };
        townData.push(townObj);
    }
    console.log(JSON.stringify(townData));
}
parseTownToJSON(["| Town | Latitude | Longitude |",  "| Sofia | 42.696552 | 23.32601 |", "| Beijing | 39.913818 | 116.363625 |"]);