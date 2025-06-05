const games = ["cod","nfs","rdr"]

games.forEach( function (game)
{
    console.log(`Game is: ${game}`);
})

games.forEach( (game) => {
    console.log(game)
})

function dosomestuff (item)
{
    console.log(`Doing some stuff with ${item}`);
}

games.forEach(dosomestuff); //for each value of games our fn  is executed
// games.forEach(dosomestuff()); //this will not work as it will execute the function immediately and pass the return value to forEach
//use reference of the function not the return value e.g. dosomestuff not dosomestuff()


games.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
//for each object in myCoding array, we are printing the languageName property