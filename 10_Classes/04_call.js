 // call is used to give refrence of current execution context

function Setname(username)
{
    this.username = username;
    console.log('called')
}

function createuser(username,age,id)
{
    Setname.call(this,username) //it just simple we are having this.username in another function
    //so when createuser()is called it calls this set() so in stack excecution it calls set but 
    //never sets the username so we use call and with it we give 'this' as current context

    this.age = age;
    this.id = id;
}

const user = new createuser('dev',20,1) //remember new keyword is mandatory

console.log(user)