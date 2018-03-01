function solve(num) {

    let result = (num1) => {

        return solve(num + num1)
    };

    result.toString = () => {
        return num;
    };
    return result;
}

console.log(solve(3)(6)(9).toString());