
function saymyname() {
    console.log("D")
    console.log("E")
    console.log("v")
    console.log("Hiesenberg")
}

//saymyname => this is reference
// saymyname => this is execution

saymyname()


function loginMsg(username = "Default value if not defined anything by user") {   // here in ('..') is known as parameter
        if(!username)
        {
            return "Please enter a valid name sarrr"
        }

        return `${username}'s login successfull`
}

let ans = loginMsg("Dev") //here in ('..') is known as arguement
console.log(ans)

let ans1 = loginMsg()
console.log(ans1)

 
function calculateprice(val1,val2, ...num1)  //when used here it is rest operator but if in [..ar,..ar] it is spread operator
{
        return num1  //val1 , val2 = 100,200 so o/p is 500,1000
} 

console.log(calculateprice(100,200,500,1000)) //if i didnt used ...num1 it would have taken 100 as num1 but now all values


const arr = [100,200,300,4100,500,87000]

function maxelement(myarr)
{
    let max = myarr[0];

    for(let i=0; i< myarr.length; i++)
    {
        if(myarr[i] > max)
        max = myarr[i];
    }

    return max;
}

console.log(maxelement(arr))


//object and fucntion

const user = 
{
    username: "Dev",
    prices: 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
 //or else directly pass the object in the arguement 
handleObject({
    username: "sam",
    price: 399
})