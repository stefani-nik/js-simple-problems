let data = require('./data.js');

function sort(propety) {
    return data.sort((a,b) =>  {
        return a[propety].localeCompare(b[propety]);
   });
}

function filter(propery, value) {
    let arr = [];
    for(let obj of data){
        if(obj[propery] == value){
            arr.push(obj);
        }
    }
    return arr;
}
result.sort = sort;
result.filter = filter;