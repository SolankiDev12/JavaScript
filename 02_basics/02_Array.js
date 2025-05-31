const marvelHeroes = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Batman", "Superman", "WonderWomen","Flash", "Aquaman", "Green Lantern"];

let all = marvelHeroes.concat(dcHeroes); // Merges the two arrays into a new array
console.log(all); 

const allnew = [...marvelHeroes, ...dcHeroes]; // Merges the two arrays into a new array using spread operator
console.log(allnew); // ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Batman", "Superman", "WonderWomen", "Flash", "Aquaman", "Green Lantern"]

//flattening an array
const nestedArray = [1, 2, [3, 4], [5, 6]];
const flattenedArray = nestedArray.flat(Infinity); // Flattens the nested array into a single-level array
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

console.log(Array.from("DEV"))
console.log(Array.from({length: 5}, (_, i) => i + 1)); // Creates an array of length 5 with values [1, 2, 3, 4, 5]

console.log(Array.of(55, 66, 77)); // Creates a new array with the specified elements