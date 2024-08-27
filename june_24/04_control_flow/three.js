const arr = [1,2,3,4,50];
for (const row of arr) {
    //console.log(row);
}

const myObject = {
    php:"preprocessor home page",
    js:"java-script",
    swift:"swift by apply"
}

for (const key in myObject) {
    //console.log(`${key} value is ${myObject[key]}`)
}

const coding = ["php","node","python","js"];
/* coding.forEach(function (item) {
    console.log(item);
});

coding.forEach( (a) => {
    console.log(a);
}) */

/* function print(item){
    console.log(item);
}  
coding.forEach(print) */  

coding.forEach( (item, index , arr) => {
    console.log(item, index , arr);
})