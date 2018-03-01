function rotateArray (input){
    let rotations = Number(input[input.length-1]);
    let myArr = input.splice(0,input.length - 1);

    for (var i = 0; i < rotations % myArr.length ; i++) {
        myArr.unshift(myArr[myArr.length-1]);
        myArr.splice(myArr.length -1,1);
    }
    console.log(myArr.join(" "));
}

rotateArray(["Banana","Orange","Coconut","Apple",15]);
rotateArray([1,2,3,4, 2]);