function solve(obj){
    if(obj.hasOwnProperty("method")){
        let methodRegex = /^(GET|POST|DELETE|CONNECT)$/g;
        if(!methodRegex.test(obj.method)){
            throw new TypeError("Invalid request header: Invalid Method");
        }
    }
    else {
        throw new TypeError("Invalid request header: Invalid Method");
    }
    if(obj.hasOwnProperty("uri")){
        let methodRegex = /^([A-Za-z0-9.]+|\*)$/g;
        if(!methodRegex.test(obj.uri)){
            throw new TypeError("Invalid request header: Invalid URI");
        }
    }
    else {
        throw new TypeError("Invalid request header: Invalid URI");
    }

    if(obj.hasOwnProperty("version")){
        let methodRegex = /^(HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0)$/g;
        if(!methodRegex.test(obj.version)){
            throw new TypeError("Invalid request header: Invalid Version");
        }
    }
    else {
        throw new TypeError("Invalid request header: Invalid Version");
    }


    if(obj.hasOwnProperty("message")){
        let methodRegex = /[<>\\&'"]/g;
        if(methodRegex.test(obj.message)){
            throw new TypeError("Invalid request header: Invalid Message");
        }
    }
    else {
        throw new TypeError("Invalid request header: Invalid Message");
    }
    return obj;
}