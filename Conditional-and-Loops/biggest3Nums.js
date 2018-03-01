function biggest3nums ([num1,num2, num3]){
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    let middle = num1 > num2 ? num1 : num2;
    let biggest = middle > num3 ? middle : num3;
    console.log(biggest);
}
biggest3nums([130,5,99]);