function DNAhelix(n) {
    n = Number(n);
    let sequence = "ATCGTTAGGG";
    let cntFirst = 0;
    let cntSecond = 1;

    for (var i = 0; i < n; i++) {
        cntFirst = cntFirst == sequence.length  ? 0 : cntFirst ;
        cntFirst = cntFirst == sequence.length + 1 ? 1 : cntFirst ;
        let firstChar = sequence[cntFirst] ;
        cntFirst +=2;

        cntSecond = cntSecond == sequence.length ? 0 : cntSecond ;
        cntSecond = cntSecond == sequence.length + 1 ? 1 : cntSecond ;
        let secondChar = sequence[cntSecond];
        cntSecond +=2;

        if(i % 4 == 0){
            console.log(`**${firstChar}${secondChar}**`);
        }
        else if(i % 4 == 1){
            console.log(`*${firstChar}--${secondChar}*`);
        }
        else if (i % 4 == 2){
            console.log(`${firstChar}----${secondChar}`);
        }
        else {
            console.log(`*${firstChar}--${secondChar}*`);
        }

    }
}
DNAhelix(10);