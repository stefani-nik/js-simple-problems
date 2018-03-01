function extractUserName(lines) {
        let result = [];
     for(let line of lines){
         let [name, domain] = line.split("@");
         let username = name + ".";
         let part = domain.split('.');
         part.forEach(x => username += x[0]);
         result.push(username);
     }
    console.log(result.join(', '));
}