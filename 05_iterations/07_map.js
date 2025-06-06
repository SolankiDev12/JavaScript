const arr = [1, 2, 3, 4, 5];

const newarr = arr.map((item) => item+10);
console.log(newarr); // [11, 12, 13, 14, 15]
// console.log(typeof newarr) // object
// console.log(typeof arr) //object
// const dev = 12
// console.log(typeof dev) // number


const chain = arr.map((item) => item + 10)
                 .map((item) => item + 1)
                 .filter((item) => item > 12)
console.log(chain); // [16, 17, 18, 19, 20]

// The difference between filter and map in JavaScript:

// filter: Creates a new array with only the elements that pass a test (provided by a function). It removes elements that do not meet the condition.
// map: Creates a new array by transforming each element of the original array using a function. It keeps the same number of elements, but each element can be changed.
// Example:

// filter: [1,2,3,4].filter(x => x > 2) → [3,4]
// map: [1,2,3,4].map(x => x * 2) → [2,4,6,8]