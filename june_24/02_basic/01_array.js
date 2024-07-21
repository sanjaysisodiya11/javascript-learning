//######ARRAY#######
const myArray = [2,4,6,8,10,12,14];
const otherArray = ["sanjay","14","ajay"];
const arr = new Array("manago","apple");
const pairArray = [
    { 'name': 'sanjay', 'age':38 }
];

console.log(otherArray[0]);

//Array Methods
/* myArray.push(6)
myArray.push(9)
myArray.pop();
myArray.pop();
console.log(myArray); */
/* pairArray[0]['address'] = 37
console.log(pairArray); */

//myArray.unshift(0);
//console.log(myArray.includes(14));
//console.log(myArray.indexOf(10));

/* console.log(myArray);
const newMyArray = myArray.join();
console.log(newMyArray); */
console.log(myArray);
const sliceArray = myArray.slice(1,3);
console.log("slice data:",sliceArray);
console.log("Original array:",myArray);

const spliceArray = myArray.splice(1,3);
console.log("splice data:",spliceArray);
console.log("Original array:",myArray);


