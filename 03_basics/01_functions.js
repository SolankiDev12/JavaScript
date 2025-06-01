
function saymyname() {
    console.log("D")
    console.log("E")
    console.log("v")
    console.log("Hiesenberg")
}

//saymyname => this is reference
// saymyname => this is execution

saymyname()


function loginMsg(username = "Default value if not defined anything by user") {
        if(!username)
        {
            return "Please enter a valid name sarrr"
        }

        return `${username}'s login successfull`
}

let ans = loginMsg("Dev")
console.log(ans)

let ans1 = loginMsg()
console.log(ans1)


