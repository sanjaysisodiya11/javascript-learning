// # primitive data type
// String , Number , boolean , null , undefined , symbol , bigInt

// # non primitive data type
//Array, object, function

//############# non primitive ##############
const empArray = ["sanjay","jitendra","ajay"];
const myObj = {name:"sanjay sisodiya",age:36,number:"9977095377"}
const myFunction = function DisplayName(){
    console.log("sss");
}
console.log(typeof myFunction);

// ######### Memory type stack############
let myName = "sanjay sisodiya";
let otherName = myName;

//console.log(otherName);
otherName = "varsha sisodiya";
console.log(otherName);
console.log(myName);
// ######### Memory type heap############

let id = Symbol('123');
let idOther = Symbol('123');

let userOne = {
    name: "Suraj",
    email: "suraj@bitcot.com"
}

let userTwo = userOne;

userTwo.email = "sanjay@bitcot.com"
console.log(userOne);
console.log(userTwo);
