/* ####DATE##### */
let dateObj = new Date();
/* console.log(dateObj);

console.log(dateObj.toDateString()); //Fri Jul 19 2024
console.log("To ISO: ",dateObj.toISOString()); //2024-07-19T16:53:36.038Z
console.log("to json",dateObj.toJSON()); //console.log(dateObj.toString());
console.log(dateObj.toString());//Fri Jul 19 2024 16:48:21 GMT+0000 (Coordinated Universal Time)
console.log("tolocale",dateObj.toLocaleString()); // 7/19/2024, 4:50:00 PM
console.log("To Locale Date",dateObj.toLocaleDateString()); //  7/19/2024

console.log("To Time:",dateObj.toTimeString()); // 16:54:42 GMT+0000 (Coordinated Universal Time)
console.log("To locale Time",dateObj.toLocaleTimeString()); // 4:52:13 PM

console.log("To UTC: ",dateObj.toUTCString()); // Fri, 19 Jul 2024 16:55:44 GMT
console.log("Month",dateObj.getMonth()); // 6 but current 7
console.log("get Hours:",dateObj.getHours()); // 16
console.log("get date",dateObj.getDate()); // 19
console.log("get  day",dateObj.getDay()); // 5  //means friday
console.log("get year",dateObj.getFullYear()); //2024
console.log(typeof dateObj); // object */

let myCreatedDate = new Date(2024,6,19);
console.log(myCreatedDate.toDateString()); // Fri Jan 26 2024

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let updatedDate = myCreatedDate.toLocaleString('default',{
    weekday: "long",
    month: "long"
});
console.log(updatedDate);

