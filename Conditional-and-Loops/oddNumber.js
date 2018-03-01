function  oddNum([num]) {
    num = Number(num);
    for (var i = 1; i <= num ; i++) {
      if(i % 2 == 1)
          console.log(i);
    }
}