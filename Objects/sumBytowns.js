function  sumByTowns(arr) {
    let sum = {};

    for (var i = 0; i < arr.length; i+=2) {
        let [town, income] = [arr[i], Number(arr[i+1])];

        if(sum[town] == undefined){
            sum[town] = income;
        }
        else {
            sum[town] += income;
        }
    }
    return JSON.stringify(sum);
}