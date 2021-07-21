console.log("This is About Loops")

let i=0;

for(i=0;i<=3;i++) {
    console.log(i);
}
//Loops are Usually Used to Iterate a Array
let name=["Paarth","Kabir","Sandeep","Neeru","Rekha"]

for (let index = 0; index < name.length; index++) {
    console.log("Hello ",name[index]);
    
}

// Iterating a Array through a Different Method
name.forEach(function f(element){
    console.log("Hello ", element);
});

// Another Easier Method

for(n of name){
    console.log("Hello ", n, "To Modern Javascript");

}

//Iterating an Object 
console.log("///////////////////////////////////////////////")

let emp = {
    name:"Kabir",
    city:"New Delhi",
    address:"India"
}

for(key in emp) {
    console.log(`The ${key} of the Employee is ${emp[key]}`);
}

//While Loop

i=0;

while(i<4){
    console.log(`${i} is less than 4`);
    i++;
}

// Do while Loop
// do{
//     console.log(i);
//     i++;
// }while(i<4);