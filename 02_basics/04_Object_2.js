const instauser  = new Object();

// can assing key value pairs to the object
instauser.name = "Dev";
instauser.age = 20;
instauser.isActive = true;
instauser["fullname"] = "Dev Solanki"; // using bracket notation to add a property with space in the key

const regularuser = {
    fullname : {
        username : {
            first: "Dev",
            last: "Solanki"
        }
    }
}
// Accessing nested properties using dot notation
console.log(regularuser.fullname.username.first); // or
console.log(regularuser["fullname"]["username"]["first"]);


const obj1 = {
    a : 10
}

const obj2 = {
    b : 20
}

const obj3 = {
    c : 30
}

// Merging objects using Object.assign
const merge2obj = Object.assign(obj1,obj2)
//here assign(target,source) where obj1 is the target object and obj2 is the source object
console.log(merge2obj); // { a: 10, b: 20 }

const merge3obj = Object.assign({},obj1,obj2,obj3)
console.log(merge3obj); // { a: 10, b: 20, c: 30 }

const merge = {
    ...obj1,
    ...obj2,
    ...obj3
}


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

users.map((i) => {
    console.log(i.id);
}
)


users[1].id = 10; // updating the id of the second user
users.forEach((i) => {
    console.log(i.id);
});


// console.log(instauser);

console.log(Object.keys(instauser)); // Returns an array of keys in the object
console.log(Object.values(instauser)); // Returns an array of values in the object
console.log(Object.entries(instauser)); // Returns an array of key-value pairs in the object

console.log(instauser.hasOwnProperty('name')); // Checks if the property 'name' exists in the object