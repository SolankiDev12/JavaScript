const myarr = [1, 2, 3, 4, 5];
console.log(myarr); // [1, 2, 3, 4, 5]

const arr = new Array(1,2,3,4,5);
console.log(arr); // [1, 2, 3, 4, 5]


//shallow copy  vs deep copy 
const myarr2 = myarr; // shallow copy
myarr2[0] = 10; // modifying myarr2 will also modify myarr
console.log(myarr); // [10, 2, 3, 4, 5]
console.log(myarr2); // [10, 2, 3, 4, 5]

// To create a deep copy, we can use the spread operator or Array.from
const myarr3 = [...myarr]; // deep copy
myarr3[0] = 20; // modifying myarr3 will not affect myarr
console.log(myarr); // [10, 2, 3, 4, 5]
console.log(myarr3); // [20, 2, 3, 4, 5]


//Array methods
//push - adds an element to the end of the array
myarr.push(6);
console.log(myarr); // [10, 2, 3, 4, 5, 6]
//pop - removes the last element from the array
myarr.pop();
console.log(myarr); // [10, 2, 3, 4, 5]
//shift - removes the first element from the array
myarr.shift();
console.log(myarr); // [2, 3, 4, 5]
//unshift - adds an element to the beginning of the array
myarr.unshift(69);
console.log(myarr); // [1, 2, 3, 4, 5]

console.log(myarr.includes(69)); // true - checks if the array includes the element
console.log(myarr.indexOf(69)); // 0 - returns the index of the element
console.log(myarr.lastIndexOf(69)); // 0 - returns the last index of the element
console.log(myarr.join(", ")); // "1, 2, 3, 4, 5" - joins the array elements into a string
console.log(myarr.slice(1, 3)); // [2, 3] - returns a shallow copy of a portion of the array
console.log(myarr.splice(1, 2)); // [2, 3] - removes elements from the array and returns them
console.log(myarr); // [1, 4, 5] - the original array is modified
console.log(myarr.reverse()); // [5, 4, 1] - reverses the array
console.log(myarr.sort()); // [1, 4, 5] - sorts the array in ascending order
//concat - merges two or more arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]


const array = [1, 2, 3, 4, 5];
//difference between slice and splice
//slice - returns a shallow copy of a portion of the array without modifying the original array
const slicedArr = array.slice(1, 3);
console.log(slicedArr); // [4, 5] - returns a new array with elements from index 1 to 3 (not inclusive)
//splice - removes elements from the array and returns them, modifying the original array
const splicedArr = array.splice(1, 3);
console.log(splicedArr); // [4, 5] - removes elements from index 1 and returns them
console.log(array); // [1, 2] - the original array is modified3