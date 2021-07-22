console.log("This is about SetTimeOut")
// setTimeout -- Allows us to run the Func Once after the Interval
// clearTimeout- Allows us to run the Func Repeadetly after the Interval of Time

function greet(name,byetext){
    console.log("Hello and How are You",name,byetext)

}
// setTimeout(greet,5000,"Paarth","Bye Bye");
//No Need to call Function in Set Time out 


// Working with Functions
let username=prompt("Enter Username");
let al=alert("Username Created")
let password=prompt("Enter Password")
let al1=alert("Password Created")


if (username.length>1){
    console.log(al)
}

if (password.length>1){
    console.log(al1)
}
