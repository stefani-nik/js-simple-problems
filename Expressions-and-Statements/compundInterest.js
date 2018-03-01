function compoundInterest([principalSum, nominaInterest, frequency, t]){
    [principalSum, nominaInterest, frequency, t] = [principalSum, nominaInterest, frequency, t].map(Number);
    let percentage = nominaInterest;
    let period = 12/frequency;
    let smth = Math.pow(1 + percentage/period/100  ,period*t);
    let result = Math.round(principalSum * smth*100)/100;
    console.log(result);
}
compoundInterest([1500, 4.3, 3, 6]);