function addAndRemoveEl(input) {
    let myArr = [];
    let currentEl = 0;
    for (let command of input){
        if(command == "add"){
            currentEl ++;
            myArr.push(currentEl);
        }
        else {
            currentEl ++;
            myArr.splice(myArr.length -1,1);
        }
    }

    if(myArr.length == 0){
        console.log("Empty");
    }
    else {
        myArr.forEach(x => console.log(x));
    }
}
addAndRemoveEl(["add",
"add",
    "remove",
"add",
"add"]
);