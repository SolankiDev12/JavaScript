 const promiseone = new Promise(function(resolve , reject) {
    //Async operation
    setTimeout( () => {
        console.log("Async operation completed");
        resolve() //now conected with then and is consumed
    },1000)
 }) 

 promiseone.then( function (){
    console.log('Promise is connectd with resolve (then connected with resolve) and is consumed');
 })

 //op is only Async opr completed but prromise is not consumed

 //now instead doing in two parts will do in one part

new Promise( function ( resolve , reject) {
    //Async operation
    setTimeout( () => {
        console.log("Async 2 operation completed");
        resolve() //now conected with then and is consumed
    },1000)
}).then( function (){
    console.log('Async 2 Promise is connectd with resolve (then connected with resolve) and is consumed');
})


const promise3 = new Promise(function(resolve , reject) {
    setTimeout( function() {
            resolve({user : 'dev' , id: 1});
    }, 1000);
})
//resolve thi data .then ma pass
promise3.then(function(data) {
    console.log('Promise 3 is connected with resolve and is consumed');
    console.log(data);
})

//

const promise4 = new Promise(function(resolve , reject) {
    setTimeout( function(){
        const error  = false;
        if(!error)
        {
            resolve({user :'dev',id: 1});
        }else
        {
            reject('Error: Something went wrong');
        }
    },1000)
})

promise4.then(function(data){
    return data.id; 
}).then(function(id) {
    console.log(id)
}
).catch(function(error) {
    console.log(error); //this will run if error is true
}).finally(function() {
    console.log('Promise 4 is completed'); //this will run in both cases
})


///////////////////////////////////////////////
const promise5 = new Promise(function(resolve , reject) {
    setTimeout( function(){
        const error  = false;
        if(!error)
        {
            resolve({user :'dev',id: 2});
        }else
        {
            reject('Error: Js went wrong');
        }
    },1000)
})

async function promise_5()
{
    try 
    {
        const response = await promise5;
        console.log(response.user);
    }catch(err)
    {
        console.log(err);
    }
}

promise_5();

// async is used to declare a function as asynchronous. It always returns a Promise.
// await is used inside an async function to pause execution until a Promise is resolved

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
