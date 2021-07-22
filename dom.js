//Navigated DOM Using ID
let id= document.getElementById("main")
console.log(id)
id.innerHTML = "<li>My name Is Paarth</li>"
console.log(id.innerHTML)

//Navigating DOM using Class
let container= document.getElementsByClassName("container");
console.log(container)

//Navigating DOM using CSS Selectors
let select=document.querySelector("#main>li");
console.log("Selector Return",select)

