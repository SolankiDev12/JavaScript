// task is to change value of PI from 3.14 to 4 

console.log(Math.PI);
Math.PI = 5 ; //nope
console.log(Math.PI)


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor)

// o/p : 
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const chai = {
    name : 'Adrak Chai',
    price : 50,
    isAvailable : true,

    order : function(){
        console.log("Getting ready")
    }

}

const obj = Object.getOwnPropertyDescriptor(chai,"name")

console.log(obj)

// {
//   value: 'Adrak Chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(chai,"name", 
{
    // writable: false,
    enumerable: true,  
    // enumerable: false  
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// {
//   value: 'Adrak Chai',
//   writable: false,
//   enumerable: true,
//   configurable: true
// }

for( let[key,val] of Object.entries(chai))
{
    if(typeof val !== 'function')
    {
        console.log(`${key} : ${val}`);
    }
}