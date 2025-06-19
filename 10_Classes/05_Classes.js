// old way to use class

function user(username,id,pwd)
{
    this.username = username;
    this.id  = id;
    this.pwd = pwd;
}

user.prototype.encryptPassword = function(){
    return `${this.pwd}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const varr = new user("dev","1","123");

console.log(varr);
console.log(varr.encryptPassword());
console.log(varr.changeUsername());


//new way using class

class myUser{
    constructor(username,id,pwd) //this is called when new keyword
    {
        this.username = username;
        this.id  = id;
        this.pwd = pwd;
    } 

    encryptPassword(){
    return `${this.pwd}abc`
    }

    
}

const newuser = new myUser("zoro","2","dev")
console.log(newuser);
console.log(newuser.encryptPassword());
console.log(newuser);