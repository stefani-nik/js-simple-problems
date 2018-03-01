function aggregateTable(lines) {
    let towns = [];
    let sum = 0;

    for (let line of lines){
        let current = line.split("|");
        towns.push(current[1].trim());
        let price = current[2].trim();
        sum += Number(price);
    }
    console.log(towns.join(", "));
    console.log(sum);
}
aggregateTable(["| Sofia      | 300",
"| Plovdiv    | 500",
"| Varna      | 200",
"| Yambol     | 275"]);