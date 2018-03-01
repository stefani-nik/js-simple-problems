function chatchTheNumbers(input) {
    let numbers = [];
   for(let str of input){
       let num = str.match(/[0-9]+/g);
   if(num != null)
       num.forEach(n => numbers.push(n));
   }
    console.log(numbers.join(" "));
}
chatchTheNumbers(["Input1111","What the actual22 heck 33", "what"]);