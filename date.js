// console.log("This is about Date and Time Tut")
// let dt = new Date();
// console.log(dt);

// let newdate= new Date("2021-10-16")
// console.log(newdate)
// // Can Include Year, Month, Date, hours, minutes, seconds, miliseconds

// //Date Functions
// console.log(newdate.getFullYear()) // Get Full getFullYear
// console.log(newdate.getDate()) // Get Date
// console.log(newdate.getMonth()) // Get Month
// console.log(newdate.getHours()) // Get Hours
// console.log(newdate.getDay()) //Get Day

setInterval(updateTime,1000);
function updateTime(){
    document.getElementById("time").innerHTML= new Date()
}
//set methods







