// Arrow Function

let greet= () => {
    console.log("Hello Welcome to my Website")
}
greet()


// Usually Used in this Case

setTimeout(() =>{
    console.log("We are in Set Time Out")
},3000)


let obj1= {
    "family": ["Paarth","Kabir","Neeru","Sandeep","Rekha"],
    speak(){
        this.family.forEach((fam) => {
            console.log("Hello",fam);
        });
    }
}

obj1.speak() 
// In a Function this param will not see beyond its scope but this is not the case with Arrow Functions
// Arrow Functions can see beyond the scope of their specific function. inside the object in the case of obj1
// This is Arrow Function is called- Lexical this.



