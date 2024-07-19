const score = 100;
//console.log(score);

const balance = new Number(100);

/* ##### USE NUMBER Method##### */
const converNumToStr = balance.toString();
//console.log(balance.toFixed(2));
//console.log(converNumToStr);

const otherNumber = 123.8935336;
//console.log(otherNumber.toPrecision(6));

const displayNumber = 1000000000;
//console.log(displayNumber.toLocaleString('en-IN'));

/* ################### MATH Library ####################### */

/* console.log(Math.abs(-5));
console.log(Math.round(5.6));
console.log(Math.ceil(11.2));
console.log(Math.ceil(11.99));
console.log(Math.floor(13.99));
console.log(Math.floor(13.01)); */

//console.log( Math.floor(Math.random()*10)+1 );

const min = 10;
const max = 50;
console.log( Math.floor(Math.random()*(max-min + 1) ) + min ) ;