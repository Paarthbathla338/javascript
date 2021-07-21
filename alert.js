//Alert is a Function in which a message string can be sent to be popup on the Websites page

// alert("This is a message");
// Alert Opens a Modal Window-Does not Return a Value

//User Input

let name=prompt("Please Enter your Name","Guest")
console.log(name);

//confirm function 

let delt=confirm("Do you Want to Delete This Post?");

if (delt){
    alert("The Post has been Deleted Succesfully");

}
else{
    alert("The Post was not Deleted")
}
// CodeWithHarry Challenge

let drive= prompt("Please Enter your Age");

if (drive>18){
    alert("You Can Drive. Please Get a Driving License");
}
else{
    alert("You are not allowed to Drive")
}

