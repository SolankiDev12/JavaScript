console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
//  it treats null as 0 in this case because == , >= works differently

console.log("because null is not a number, it is a special value that represents the absence of any value. In JavaScript, null is considered to be less than any number, but it is not equal to any number, including 0. However, when using the >= operator, null is coerced to 0, so the comparison evaluates to true.");

console.log(undefined < 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

// "==="

console.log("===") 
console.log("2" === 2) //it checks both value and type
console.log(null === 0) //false
console.log(null !== 0) //true
console.log(null === 0) //false