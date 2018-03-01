function parseData(input) {
    let output = [], match = null;
    input.forEach(function(element) {
        let pattern = "^([A-Z][a-zA-Z]*) \- ([1-9][0-9]*) \- ([a-zA-Z0-9 -]+)$";
        let regex = new RegExp(pattern, "g");
        let match = regex.exec(element);
        if(match) {
            output.push("Name: " + match[1]);
            output.push("Position: " + match[3]);
            output.push("Salary: " + match[2]);
        }
    });
    console.log(output.join("\n"));
}