let result = (function (arg1, arg2) {
        return {
            add: (arg1, arg2) => console.log([arg1[0] + arg1[1], arg2[0] + arg2[1]]),
            multiply: (arg1, arg2)=> console.log([arg1[0] * arg2, arg1[1] * arg2]),
            length: (arg1)=> console.log(Math.sqrt(arg1[0] * arg1[0] + arg1[1] * arg1[1])),
            dot: (arg1, arg2)=> console.log(arg1[0] * arg1[1] + arg2[0] * arg2[1]),
            cross: (arg1, arg2)=> console.log(arg1[0] * arg2[1] - arg2[0] * arg1[1])
        }
    })();
