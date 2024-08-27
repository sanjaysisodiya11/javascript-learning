let userEmail = function() {};
if(userEmail)
{
    console.log(`Got user email is: ${userEmail}`);
}else {
    console.log(`false value`);
}

// falsy
/* 
    "" , NaN , null, undefined , 0 , -0
 */

// truthly
/* 
"sanjay@tcs.com",  -1 & -2 and so on , {} , [] , function() {}
 */

// nullish Coalescing operator ?? : null , undefined
let user = null;
let guestUser = "Guest";
console.log( user ?? guestUser);

let userAge;
let defaultAge = 18;
console.log( userAge ?? defaultAge);

let value = 0;
let defaultValue = 10;
const result = value || defaultValue; // because 0 is falsy value
console.log("result of value:", result);

console.log(value ?? defaultValue); // output 0 becuase 0 is not null or undefined
