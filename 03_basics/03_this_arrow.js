const obj1 = {
    name : 'Dev',
    saymyname : function(){
        console.log("Regular Function:", this.name);
    }
}

obj1.saymyname(); // Output: Dev ✅


obj1.name = 'Kun'
obj1.saymyname(); // Output: Kun ✅

const obj2 = {
    name : 'Dev',
    saymyname : () =>{
        console.log("Regular Function:", this.name)
    }
}

obj2.saymyname(); // Output: Regular Function: undefined ❌
obj2.name = 'Kun'
obj2.saymyname(); // Output: Regular Function: undefined ❌


// const addTwo = (num1, num2) => 
// {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) //if u use () there is no need to use return

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))

// Example 1: Regular function inside an object (method)
const user1 = {
  name: "Alice",
  sayHi: function () {
    // 'this' refers to user1 object
    console.log("Regular Function:", this.name);
  }
};
user1.sayHi(); // Output: Alice ✅


// Example 2: Arrow function inside an object
const user2 = {
  name: "Bob",
  sayHi: () => {
    // 'this' does NOT refer to user2, but to global scope
    console.log("Arrow Function:", this.name);
  }
};
user2.sayHi(); // Output: undefined ❌



const user = {
    name:'Dev',
    hobbies: ['coding', 'gaming'],
    showHobbies: function ()  //while 
    {       //here this = user object
        this.hobbies.forEach( function (hobby)
        {
            console.log(this.name + " likes " + hobby);
        });  //here this = function only
    }
}

user.showHobbies(); // Output: undefined likes coding, undefined likes gaming ✅


const user4 = {
  name: "Dana",
  greet: function () {
    setTimeout(() => {
      // 'this' is preserved from the outer function
      console.log("Hello, I'm " + this.name);
    }, 1000);
  }
};
user4.greet(); // Output after 1s: Hello, I'm Dana ✅


// Example 5: Using arrow function for short logic (cleaner code)
const add = (a, b) => a + b;
console.log("Add:", add(2, 3)); // Output: 5 ✅


// Example 6: Arrow functions in array methods
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled); // Output: [2, 4, 6] ✅


// ❌ When NOT to use arrow functions: object methods needing "this"
const user5 = {
  name: "Eva",
  sayHi: () => {
    // 'this' is not user5 — bad usage
    console.log("Hi " + this.name);
  }
};
user5.sayHi(); // Output: Hi undefined ❌


// ✅ Correct usage with regular function
const user6 = {
  name: "Fay",
  sayHi: function () {
    console.log("Hi " + this.name);
  }
};
user6.sayHi(); // Output: Hi Fay ✅


// Summary:
// ✅ Use arrow functions when:
// - You want to keep 'this' from the parent scope
// - Writing small, short, clean functions (map, filter, etc.)

// ❌ Don't use arrow functions when:
// - Writing object methods that rely on 'this'
// - Needing access to 'arguments', 'super', or dynamic 'this'

