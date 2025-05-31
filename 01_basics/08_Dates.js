//Dates

let myDate = new Date()
console.log(myDate) //2025-05-31T10:18:37.343Z
console.log(myDate.toString()) //Sat May 31 2025 12:18:37 GMT+0200 (Central European Summer Time)
console.log(myDate.toISOString()) //2025-05-31T10:18:37.343Z
console.log(myDate.toLocaleString()) //5/31/2025, 12:18:37 PM
console.log(myDate.toLocaleDateString()) //5/31/2025
console.log(myDate.toLocaleTimeString()) //12:18:37 PM
console.log(myDate.toJSON)
console.log(typeof myDate) //object


let myCreateDate = new Date(2025,0,1,5,30,0) //year, month, day, hours, minutes, seconds
console.log(myCreateDate.toString()) //Wed Jan 01 2025 06:30:00 GMT+0100 (Central European Standard Time)

let myCreateDate2 = new Date("2025-03-12")
console.log(myCreateDate2.toString()) //Wed Mar 12 2025 00:00:00 GMT+0100 (Central European Standard Time)


let currtime  = Date.now();

console.log(currtime) //1704061117340 (timestamp in milliseconds since 1970-01-01T00:00:00Z)

console.log(myCreateDate.getTime()) //1735683000000 (timestamp in milliseconds since 1970-01-01T00:00:00Z)

// we can compare time for both in this way 

console.log(Math.floor(myCreateDate.getTime() / 1000)) //1735683000 (timestamp in seconds since 1970-01-01T00:00:00Z)


myCreateDate.toLocaleDateString({
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
}) // modify to  your settings in this way


// console.log(myCreateDate.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     timeZoneName: 'short'
// })); // January 1, 2025, 05:30:00 AM GMT+1