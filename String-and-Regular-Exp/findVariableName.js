function findVariableName(input) {
    let variables = [];
    for(let str of input){
        let variable = str.match(/\b_[a-zA-Z0-9]+\b/g);
        if(variable != null)
            variable.forEach(v => variables.push(v.slice(1)));
    }
    console.log(variables.join(", "));
}
findVariableName(["Calculate the _area of the _perfectRectangle object."]);