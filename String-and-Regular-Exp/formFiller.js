function main(input) {
    let username = input.shift();
    let email = input.shift();
    let phone = input.shift();

    input.forEach(function (elem) {
        let usernameRegex = new RegExp("\<\\![a-zA-Z]+\\!\>", "g");
        let emailRegex = new RegExp("\<\\@[a-zA-Z]+\\@\>", "g");
        let phoneRegex = new RegExp("\<\\+[a-zA-Z]+\\+\>", "g");
        elem = elem.replace(usernameRegex, username);
        elem = elem.replace(emailRegex, email);
        elem = elem.replace(phoneRegex, phone);
        console.log(elem);
    });
}