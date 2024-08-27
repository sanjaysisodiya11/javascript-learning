const myNumbers = [1,2,3,4,5];
const numbs = myNumbers
.map((num) => {
    return num+10;
})
.map( (num) => {
    return num+1;
} )
.filter( (num) => num > 14)
//console.log(numbs);

// reduce method
const totalPrice = [10,20,30,40];

/* const myTotal = totalPrice.reduce( function(acc, curVal) {
    console.log(`accu ${acc} and  current ${curVal}`)
    return acc+curVal;
},5); */

//const myTotal = totalPrice.reduce( (acc, curVal) => acc+curVal,5  )

const myTotal = totalPrice.reduce( (acc, curVal) => {
    console.log(`accu ${acc} and  current ${curVal}`) 
    return acc+curVal
}, 0 )
console.log(myTotal);