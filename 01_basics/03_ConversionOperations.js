let Score = 56
let score = "596"

let nullval = null //null is a special value
let undefinedval //by default undefined
console.log(typeof nullval) //number
console.log(typeof undefinedval) //string

console.log(typeof Score) //number
console.log(typeof (score)) //string

let NewScore = Number(score) //convert to number
console.log(typeof NewScore) //number
console.log(NewScore) //number //it may give NAN sometimes if conversion is not possible


let newnullval = Number(nullval) //convert to number
console.log(typeof newnullval) //number

let newundefinedval = Number(undefinedval) //convert to number
console.log(typeof newundefinedval) //number


// "33" => 33 number
// "33abc" => NaN
// "true/false" => 1/0

let isLoggedIn = 1
let isLoggedInNumber = Boolean(isLoggedIn) //convert to bolean
console.log(isLoggedInNumber) //1

//1 => true
//0 => false
// ""=> false
// "abc" => true



// ******************************** Operations on Numbers ********************************

console.log("******************************** Operations on Numbers ********************************") 

// console.log(3 + 4) //7
// console.log(3 - 4) //-1
// console.log(3 * 4) //12
// console.log(3 / 4) //0.75
// console.log(3 % 4) //3
// console.log(3 ** 4) //81
// console.log(3 + "4") //34 string concatenation
// console.log(3 - "4") //-1 number subtraction
// console.log(3 * "4") //12 number multiplication
// console.log(3 / "4") //0.75 number division
// console.log(3 % "4") //3 number modulus
// console.log(3 ** "4") //81 number exponentiation


console.log("1"+2+2) // 122
console.log(1+2+"2") // 32  

console.log("first jo dekha woh treat karega like first type") //string ")
