
class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get clientId(){
        return this._clientId;
    }

    set clientId(value){
        let regex = /^[0-9]{6}$/g;
        if(!regex.test(value)){
            throw new TypeError ("Client ID must be a 6-digit number");
        }
        this._clientId = value;
    }
    get email(){
        return this._email;
    }

    set email(value){
        let regex = /^[a-zA-Z]+@[A-Za-z.]+$/g;
        if(!regex.test(value)){
            throw  new TypeError ("Invalid e-mail")
        }
        this._email = value;
    }
    get firstName(){
        return this._firstName;
    }

    set firstName (value){
        let regexForLength = /^(.+){3,20}$/g;
        let regexForLetters = /^[A-Za-z]+$/g;
        if(!regexForLength.test(value)){
            throw  new TypeError ("First name must be between 3 and 20 characters long")
        }
        if(!regexForLetters.test(value)){
            throw  new TypeError ("First name must contain only Latin characters")
        }
        this._firstName = value;
    }
    get lastName(){
        return this._lastName;
    }

    set lastName (value){
        let regexForLength = /^(.+){3,20}$/g;
        let regexForLetters = /^[A-Za-z]+$/g;
        if(!regexForLength.test(value)){
            throw  new TypeError ("Last name must be between 3 and 20 characters long")
        }
        if(!regexForLetters.test(value)){
            throw  new TypeError("Last name must contain only Latin characters")
        }
        this._lastName = value;
    }
}

