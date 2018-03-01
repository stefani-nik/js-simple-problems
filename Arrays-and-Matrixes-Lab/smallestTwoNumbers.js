function smallestTwoNumbers(input) {
    console.log(input.sort((a,b) => (a-b)).splice(0,2).join(" "));
}
smallestTwoNumbers(['30', '15', '50', '5']);