/* const coding = ["js","php","vue-js","node-js"];
const languages = coding.forEach( (item) => {
    console.log(item);
    return item;
});
console.log(languages); */

const numbs = [1,2,3,4,5,6,7,8,9,10];
//const filterNum = numbs.filter( (num) => num > 4)
/* const filterNum = numbs.filter( (num) => {
   return num > 4
}) */

/* const  filterNum = [];
numbs.forEach( (num) => {
    if(num > 4){
        filterNum.push(num);
    }
});

console.log(filterNum); */
const books = [
    { title: 'book 1', genre:'History', publish:'1980', edition:'2022' },
    { title: 'book 2', genre:'Science', publish:'1990', edition:'2022' },
    { title: 'book 3', genre:'Math', publish:'2000', edition:'2022' },
    { title: 'book 4', genre:'English', publish:'2010', edition:'2022' },
    { title: 'book 5', genre:'History', publish:'2020', edition:'2022' },
    { title: 'book 6', genre:'Science', publish:'1980', edition:'2022' },
    { title: 'book 7', genre:'Math', publish:'1990', edition:'2022' },
    { title: 'book 8', genre:'English', publish:'2000', edition:'2022' },
    { title: 'book 9', genre:'History', publish:'2010', edition:'2022' },
    { title: 'book 10', genre:'Science', publish:'2020', edition:'2022' },
    { title: 'book 11', genre:'Math', publish:'1980', edition:'2022' },
    { title: 'book 12', genre:'English', publish:'1990', edition:'2022' },
    { title: 'book 13', genre:'History', publish:'2000', edition:'2022' },
    { title: 'book 14', genre:'Science', publish:'2010', edition:'2022' },
    { title: 'book 15', genre:'Math', publish:'2020', edition:'2022' },
    { title: 'book 16', genre:'English', publish:'1980', edition:'2022' },
    { title: 'book 18', genre:'Science', publish:'2000', edition:'2022' },
    { title: 'book 19', genre:'Math', publish:'2010', edition:'2022' },
    { title: 'book 20', genre:'English', publish:'2020', edition:'2022' },
]

let userBooks = books.filter( (bk) => (bk.genre==='History' && bk.publish > 2010) );

userBooks = books.filter( (bk) => { 
    return bk.publish >=2020  && bk.genre==='History'
} ) 
console.log(userBooks);