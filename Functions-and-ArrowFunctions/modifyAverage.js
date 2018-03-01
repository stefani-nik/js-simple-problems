function modifyAverage([num]) {
 num = num.toString();

    while(true){
        let sum = 0;
        for (var i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        if(sum / num.length > 5){
            break;
        }
        else {
            num += "" + 9;
        }
    }
    console.log(num);
}
modifyAverage([101]);