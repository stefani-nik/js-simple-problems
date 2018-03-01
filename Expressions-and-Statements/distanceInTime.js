function distanceInTime([v1,v2,t]){
    [v1,v2,t] = [v1,v2,t].map(Number);
    let time = t/3600;
    console.log(Math.abs((v1*time)-Number(v2*time))*1000);
}
distanceInTime(["0","60","3600"]);