// //goal is 
// let name  = "Dev   " //the name.length will include space in length we want only chars 3 dev

// console.log(name.length)

let arr = ['bob', 'alice' , 'michael']

let office = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dev = function()
{
    console.log('har object me dev hai inbuilt and Array,function,string sab object hai toh inme bhi hai')
}

arr.dev()
office.dev()


//q : agar prototype wali power sirf array ko de toh uske upar wale level me object ko milega kya?

Array.prototype.dev2 = function()
{
    console.log(`Sirf array ke pass hu aur kisi ke pass nai`)
}

arr.dev2() //yes bcz it is an array
// office.dev2() nope
// Object.dev2() //nope


// Inheritance //

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //2 object ko link kar sakte hai inorder to use each other
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


//////

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Dev    ".trueLength()
"Zoro   ".trueLength()