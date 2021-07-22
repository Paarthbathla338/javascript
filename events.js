// Event is a Signal that Something has happened
// Like Subscribing to a Channel, etc
// Popular DOM Events- Click,Close Sidebar, Listen to Action, Mouseover, Mouseout,mousemove, Submit,Focus,DOM CONTENT LOADED, CSS Transition, Transition End etc

function togglehide(){
    let button=btn=document.getElementById("btn");
    let para=btn=document.getElementById("para");

    if(para.style.display != "none"){
        para.style.display="none";

    }
    else{
        para.style.display="block";
    }


}
// let para=btn=document.getElementById("para");
// para.addEventListener("mouseover", function run(){
//     alert("Mouse Inside")
// });