let a = 10
var b = 20


if(true)
{
    let a = 1000
    b = 1000
    const c = 30
}

console.log(a)
console.log(b)
// console.log(c) not accessible outside the block



if(true)
{
    const d = 40
    if(d == 40)
    {
        let e = 50
        console.log(e+d) //child and access parent scope
    }
    // console.log(e) // not accessible outside the inner block
}

// console.log(d) // not accessible outside the outer block


// function declaredFunction

declaredFunction() //can be called before declaration due to hoisting
function declaredFunction()
{
    console.log("I am a declared function")
}

// function expression
// holder() // cannot be called before declaration due to hoisting
const holder = function()
{
    console.log("I am a function expression")
}
holder() // can be called after declaration