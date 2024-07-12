const name = "sanjay sisodiya";
const mobileNo = 9977095377;
console.log(`My name is ${name.toUpperCase()} and my mobile number is ${mobileNo}`);

/* ########### STRING DECLARE IN OTHER WAY ######## */
const gameName = new String('MIRIO-GAME-OLD');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('I'));
console.log(gameName.substring(0,4));
console.log(gameName.slice(0,2));

const url = "http://www.google.com?sanjay%20singh";
console.log(url.replace('%20','-'));
console.log(url.includes('ssssssssss'));
console.log(gameName.split('-'));
