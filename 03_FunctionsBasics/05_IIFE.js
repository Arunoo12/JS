// immediately invoked function in javascript (IIFE)

// normal function
function something() {
    console.log("DB CONNECTED ")
}

// IIFE
(function something() {
    console.log("DB CONNECTED ")
})();

(() => {
    // console.log("second db connected");
    return `DB connected STATUS live`
})();

// console.log(dbStatus)
const dbStatus = ((userName1) => {
    // console.log("second db connected");
    return `DB connected, STATUS : ${userName1} is live`
})('Arun Singh');

console.log(dbStatus)
