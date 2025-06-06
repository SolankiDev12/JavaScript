const arr = [1, 2, 3, 4, 5];

const ans  = arr.reduce( function (accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
} , 0 ) // 0 is the initial value for the accumulator 

console.log(ans); // 15


const ans2 = arr.reduce( (accumulator,currentValue) => accumulator+currentValue , 0)
console.log(ans2) // 15

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
        if(item.price >5000) 
        {
            return  acc + item.price
        }
        return acc;
}, 0)

console.log(priceToPay);