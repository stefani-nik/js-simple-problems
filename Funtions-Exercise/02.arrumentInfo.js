function arrgumentInfo(){
    let typeCount = new Map();
   for (let arg of arguments){
       let currentType = typeof(arg);
       if(currentType != "object") {
           console.log(`${currentType}: ${arg}`);
       }
       else {
           console.log(`${currentType}:`);
       }

       if(typeCount.has(currentType)){
           typeCount.set(currentType, typeCount.get(currentType) + 1); 
       }
       else {
           typeCount.set( currentType, 1);
       }

   }
    let sortedMap = [...typeCount].sort((function (a,b) {
        return b[1] - a[1];
    }));


    for (let [type, conut] of sortedMap){
        console.log(`${type} = ${conut}`);
    }
}
arrgumentInfo({ name: 'bob'}, 3.333, 9.999);