function lastDay([day, month, year]) {
    let current = new Date(year, month, day);
    let lastDay = new Date(current.getFullYear(),current.getMonth()-1,0);
    console.log(lastDay.getDate());
}
lastDay(['17','3','2002']);