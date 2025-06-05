const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject) 
{
    console.log(`for in loop: ${key} :- ${myObject[key]}`); //{key} and {object[key]} are used to access the key and value of the object
}

// const arr = [100, 200, 300, 400, 500];

// for (const key in arr) 
// {
//     console.log(`${key}`); //op will be index of the array
// }

// for(const num of arr) 
// {
//     console.log(`for of loop: ${num}`); //{key} and {object[key]} are used to access the key and value of the object
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }   //output will be none here bcz it is not iterable