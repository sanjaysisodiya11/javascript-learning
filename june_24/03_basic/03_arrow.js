function chai()
{
    const name = "sanjay";
    console.log(name);
}
chai();

//arrow function declare
const addTwo = (n1,n2) => {
    return n1+n2;
}
console.log(addTwo(5,6))

//other arrow function declare : implicite return 1way
//const addThree = (n1,n2) => n1+n2;
//console.log(addThree(5,60))

//other arrow function declare : implicite return 2way
/* const addThree = (n1,n2) => ({username:'sanjay'});
console.log(addThree(5,60)) */

(function() {
    console.log('demo function');
})();