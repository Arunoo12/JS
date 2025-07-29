// Dates

let myDate = new Date();
console.log(myDate) // 2025-07-17T13:02:28.140Z
let toStringMyDate = myDate.toString();
// console.log(toStringMyDate) // Thu Jul 17 2025 18:32:28 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); // 2025-07-17T13:02:28.140Z
// console.log(myDate.toUTCString()); // Thu, 17 Jul 2025 13:02:28 GMT
// console.log(myDate.toDateString()); // Thu Jul 17 2025
// console.log(myDate.toLocaleDateString()); // 17/7/2025
// console.log(myDate.toTimeString()); // 18:32:28 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); // 17/7/2025, 6:32:28 pm
// console.log(typeof myDate); // object

//specific date
// let createNewDate = new Date(2024, 0, 2); // month starts from 0 in js
// let createNewDate = new Date("2023-02-02"); // yyyy-mm-dd
let createNewDate = new Date("02-03-2025"); // mm-dd-yyyy 

// console.log(createNewDate.toDateString()); 

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createNewDate.getTime()); // now time in ms
// console.log(Math.floor(Date.now()/1000)); // to get time in seconds and to remove decimal values we have used math.floor to use floor values

let newDate = new Date();
console.log(newDate);
console.log(`the ouput od getdate is -> ${newDate.getDate()}`);
console.log(`the output of getMonth is -> ${newDate.getMonth()}`); // month is showing 6 because it is 0 based in js 
console.log(`the output of getFullYear is -> ${newDate.getFullYear()}`);
console.log(`the output of getHour is-> ${newDate.getHours()}`);
console.log(`the output of getTimeZoneOffSet is -> ${newDate.getTimezoneOffset()}`);
console.log(`the output of getMinutes is -> ${newDate.getMinutes()}`);







