function secretData(input) {
    let fullRegex = /(\*[A-Z][a-zA-Z]*)(?=\s|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g;
      input.forEach(line => console.log(line.replace(fullRegex,x => "|".repeat(x.length))));
}
secretData(["(_SecretBase)    (_SecretBase       )",
"(!SecretBase)    (!SecretBase       )",
"(*SecretBase)    (*SecretBase       )",
"(+1234567892)     (+1234567892      )"]);