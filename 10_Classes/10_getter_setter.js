class dev{
    constructor(email,pwd)
    {
        this.email = email,
        this.pwd = pwd
    }

    get email()
    {
        return this._email.toUpperCase();
    }

    set email(value)
    {
        this._email = value;
    }

    get pwd()
    {
        return this._pwd.toUpperCase();
    }

    set pwd(value)
    {
        this._pwd = value;
    }


}


const user = new dev('example.com','abc')

console.log(user.email)
console.log(user.pwd)

//old method
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);

// For object 

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);