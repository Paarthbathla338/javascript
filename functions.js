console.log("This Tutorial is About Functions")

let n1="Paarth Bathla";
let n2="Kabir Bathla";
let greettext="How are You?"

function greet(name,greettext="Greetings from Paarth Bathla"){ //This is the Deafult Value of Greettext
    console.log("Hello", name);
    console.log(greettext);

}
greet(n1,greettext); // Also Known as Calling Function
greet(n2);
greet(n2); // Also Known as Calling Function

// Function should be easy to read

// CodeWithHarry Challenge

function sum(a,b){
    if (a>b) {
        console.log("Your First Number is Greater than the second");
    }
    else if (a<b) {
        console.log("Your Second Number is Greater than the First Number");
    }
    else{
        console.log("Enter a Valid Number or Check if you have entered 2 Values");
    }

}
console.log(sum(10,4))

// Functions Increase Code Reusability
