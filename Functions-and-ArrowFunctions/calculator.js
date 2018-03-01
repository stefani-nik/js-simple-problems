function calculate([a, b, operator]) {
    [a,b] = [a, b].map(Number);
    
    let calc = function (a, b, operator) {
        return operator(a,b);
    }
    let add = function(a, b) { return a + b };
    let subtract = function(a, b) { return a - b };
    let multiply = function(a, b) { return a * b };
    let divide = function(a, b) { return a / b };

    switch (operator) {
        case '+': return calc(a, b, add);
        case '-': return calc(a, b, subtract);
        case '*': return calc(a, b, multiply);
        case '/': return calc(a, b, divide);
    }
}