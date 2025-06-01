//object literals

// Object.create() // creates a object another method => constructor ke through object create hota hai

const mysymbol = Symbol("mySymbol");

const obj = {
    name: "John",
    fullname:"Dev Solanki",
    // mysymbol : "value",  this is not valid syntax bcz it will be treated as a string key
    [mysymbol]: "symbolValue", // using symbol as a key
    age: 20,
    isActive: true
}

console.log(obj);
console.log(obj.age); // Accessing property using dot notation
//bcz we cant acces fullname using dot notation as it has space in it
console.log(obj["fullname"]); // Accessing property using bracket notation
console.log(obj[mysymbol])



// obj.name = "Dev" //update
// console.log(obj.name); // Accessing updated property using dot notation
// Object.freeze(obj) //wont let any changes to the object
// obj.name = "john"
// console.log(obj.name); // Accessing property after trying to update it, but it won't change because the object is frozen

//function and object

obj.slogan = function(){
    return "Hello, I am a function inside an object!";
}

console.log(obj.slogan); // Logging the function itself    //[Function: slogan]                     
obj.slogan() // Calling the function to get the slogan

obj.agedisplay = function() {
    console.log(`Hello I am ${this.name} and I am ${this.age} years old!`)
}

obj.agedisplay()

console.log(obj); 