let jsonObj= {
    "name": "Paarth",
    "city":"New Delhi",
    "class":"9th",
    "food": "FOOD"

}

console.log(jsonObj);

// Stringifying an Object Over JSON 

let myobj= JSON.stringify(jsonObj);
console.log(myobj);

myobj=myobj.replace("FOOD","Burger")
console.log(myobj);

//Converting to Object from JSON String
nJ= JSON.parse(myobj); 
console.log(nJ)