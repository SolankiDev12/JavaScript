//Object Literal 

const user = {
    name: 'dev',
    id: 1,
    age: 25,
    email: 'dedwde@example.com',

    getUserdetails: function() {
        return `Name: ${this.name}, ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`;
        // console.log(this) //current context
    }

}

// console.log(this) // this is global object in nodejs //[]

console.log(user.getUserdetails());
console.log(user.age)
console.log(user['age']) 


/////////////////Constructor Function

function User(name , id ,age)
{
    this.name = name
    this.id = id
    this.age = age

    this.greets = function(){
        console.log(`hello ${this.name}`)
    }
    return this; //even if we don't return this it will return the object itself

}

// const user1 = User('dev', 1, 25);
// const user2 = User('john', 2, 30);
const user1 = new User('dev', 1, 25);
const user2 = new User('john', 2, 30);
console.log(user1.constructor);
console.log(user2 instanceof User); // is it a part of like user2 are u part od User 



//Now if we have a user two then it will overwrite the user1 properties so that's why we use new keyword 'ProtoType'

//new keyword mechanism
//new object []
//constructor function called due to new
//this keyword points to the new object
// return in function
