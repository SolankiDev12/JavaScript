//Primitive  - call by value => 7 => number,string,undefined,null,symbol,boolean,BIGINT
//non Primitive - call by reference => Array , Functions , Objects

// js is dynamically typed lan bcz we dont have to define datatype when declaring var like 
// const d : number = 69 , we can directly const d = 69


const id = Symbol("123") //symbol is unique and immutable
const Accid = Symbol("123") //symbol is unique and immutable

console.log(id === Accid) // false, even though they have the same description

const bigNUmber = 1234567890123456789012345678901234567890n; // BigInt for large integers
console.log(typeof bigNUmber); // "bigint"

const heroes = ["Ironman", "Hulk", "Thor", "Captain America"];

let obj = {
    name: "Dev",
    age: 25,
    isActive: true,
    address: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "gaming", "coding"]
}

const fncvar = function(){
    console.log("This is a function expression");
}
console.log(typeof fncvar); // "function"


// #################################################### //

let myname = "Dev"
let myname2 = myname // copy by value
myname2 = "Devansh"
console.log(myname, myname2); // Dev devansh

let myobj = {
    name: "Dev",
    age: 25
}
let myobj2 = myobj // copy by reference
myobj2.name = "Devansh"
console.log(myobj, myobj2); // { name: 'Devansh', age: 25 } { name: 'Devansh', age: 25 }
// myobj2 is a reference to the same object as myobj, so changes to myobj2 affect myobj
// To create a copy of an object, we can use Object.assign or the spread operator


let myobj3 = {...myobj} // shallow copy
myobj3.name = "Dev"
console.log(myobj, myobj3); // { name: 'Devansh', age: 25 } { name: 'Dev', age: 25 }

