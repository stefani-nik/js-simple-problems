function radioCrystals(input) {
    let target = Number(input[0]);

    for (var i = 1; i < input.length; i++) {
        let operations = { "Cut":0,"Lap":0,"Grind":0,"Etch":0,"X-ray":0};
        let current = Number(input[i]);
        console.log(`Processing chunk ${current} microns`);

        while(true){
            if(current / 4 >= target){
                current = current/4;
                operations["Cut"]++;
            }
            else if(current * 0.8 >= target){
                current = current * 0.8;
                operations["Lap"]++;
            }
            else if (current - 20 >= target){
                current = current - 20;
                operations["Grind"]++;
            }
            else if(current - 2 >= target - 1){
                current = current -2;
                operations["Etch"]++;
            }
            else if(current + 1 == target){
                current = current + 1;
                operations["X-ray"]++;
            }
            current = Math.floor(current);
            if(current == target){
                break;
            }
        }
        for(let keyValue in operations){
            if(operations[keyValue] !=0){
                
                if(keyValue == "X-ray") {
                    console.log(`${keyValue} x${operations[keyValue]}`);
                }
                else {
                    console.log(`${keyValue} x${operations[keyValue]}`);
                    console.log(`Transporting and washing`);
                }
            }
        }
        console.log(`Finished crystal ${target} microns`)

    }
}
radioCrystals([1000, 4000, 8100]);