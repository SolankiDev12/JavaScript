// Properties

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  //static keyword helps in access control so no other obj jo is class ka ho that cannot access this method
        return `123`
    }
}

const dev = new User("dev")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); //cann0t access
