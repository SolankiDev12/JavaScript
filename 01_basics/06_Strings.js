const  name  = 'dev'
const  sneakers = "10+"

console.log("I am " + name + " and i have " + sneakers + " pairs of sneakers.");

// String interpolation using template literals
console.log(`I am ${name} and I have ${sneakers} pairs of sneakers.`); // Template literals


const gamename = new String("Call of Duty");
console.log(gamename); // String object
console.log(typeof gamename); // "object"

// console.log(gamename.length); // Length of the string
// console.log(gamename.toUpperCase()); // Convert to uppercase
// console.log(gamename.toLowerCase()); // Convert to lowercase
// console.log(gamename.charAt(0)); // First character
// console.log(gamename.indexOf("Duty")); // Index of substring "Duty"
// console.log(gamename.slice(0, 4)); // Slice the string from index 0 to 4
// console.log(gamename.replace("Call", "Battle")); // Replace "Call" with "Battle"
// console.log(gamename.split(" ")); // Split the string into an array by spaces
// console.log(gamename.trim()); // Trim whitespace from both ends
// console.log(gamename.startsWith("Call")); // Check if the string starts with "Call"
// console.log(gamename.endsWith("Duty")); // Check if the string ends with "Duty"
// console.log(gamename.includes("of")); // Check if the string includes "of"
// console.log(gamename.repeat(2)); // Repeat the string twice
// console.log(gamename.valueOf()); // Get the primitive value of the String object
// console.log(gamename[0]); // Access the first character using bracket notation
// console.log(gamename.lastIndexOf("Duty")); // Last index of substring "Duty"
// console.log(gamename.search("of")); // Search for substring "of" and return its index
// console.log(gamename.match(/o/g)); // Match all occurrences of "o" in the string
// console.log(gamename.localeCompare("Call of Duty")); // Compare with another string


const newString = gamename.substring(0, 4); // Extract substring from index 0 to 4
console.log(newString); // "Call"

const string2 = gamename.slice(-5,6) 
console.log(string2); // "Call" (negative index is treated as 0)

const url = "https://www.example.com/path/to/resource%20query=123#fragment";

console.log(url.replace(/%20/g, "-")); // Replace %20 
console.log(url.includes("example")); // Check if the URL includes "example"

console.log(gamename.split(" ", 2)) // Split the string into an array by spaces, limit to 1 element