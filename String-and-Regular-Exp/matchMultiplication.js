function matchMultiplication(input){
    let text = input[0];
    let pattern =/\b(\-?[1-9]*\.[0-9]+)|\-?([1-9]+)\s*\*\s*(\-?[0-9]*\.[0-9]+)|(\-?[1-9]+)\b/g;
    let match = pattern.exec(text);
    while(match) {
        let nums = match[0].split('*').map(Number);
        let price = nums[0] * nums[1];
        text = text.replace(match[0], price);
        match = pattern.exec(text);
    }
    console.log(text);
}
matchMultiplication(["My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit)."]);
