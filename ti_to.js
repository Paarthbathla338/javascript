console.log("This is about SetTimeOut")
// setTimeout -- Allows us to run the Func Once after the Interval
// clearTimeout- Allows us to run the Func Repeadetly after the Interval of Time

function greet(name,byetext){
    console.log("Hello and How are You",name,byetext)

}
//No Need to call Function in Set Time out 

//Clear Timeout
timeOut=setTimeout(greet,5000,"Paarth","Bye Bye");
console.log(timeOut)

clearTimeout(timeOut);

//Setinterval
intervalID=setInterval(greet,1,"Paarth","Bye Bye");
clearInterval(intervalID);

function displaytime(){
    time= new Date()
    console.log(time)
    document.getElementById("time").innerHTML=time;
}

setInterval(displaytime,1000);



// Working with Functions
// let u1=prompt("Enter Username");

// if(u1.length>1){
//     alert("Username Created!");
// }
// else{
//     alert("Please Enter a Username!");
// }

// let pass=prompt("Enter Password");

// if(pass.length>1){
//     alert("Account Created");
// }

// let u2=prompt("Enter Username for Authentications");
// let pass2=prompt("Enter Password for Authentications");


// if(u1.toLowerCase() !=u2.toLowerCase() ,pass2.toLowerCase() != pass.toLowerCase()){
//     alert("Login Failed. Please Refresh Page and Retry");
// }
// else{
//     alert("Logined")
// }




