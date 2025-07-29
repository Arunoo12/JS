// control flow introduction

// if

// if (2 === '2') {
//     // scope
//     console.log("the answer is true ")
// }
// else (console.log("not true"))


// >,<,>=,<=,== (it means the value is equal or not ), != (negative checking),=== (this check the value and its type also )
// const temprature = 151;
// if (temprature < 100) {
//     console.log(`temprature in jaipur is : ${temprature}`)
// }
// else (console.log("temprature in jaipur is above 100 GAME OVER !!!"))

// const score = 1000;
// if (score > 999) {
//     let power = "SMASH";
//     console.log(`user power unlocked : ${power}`)
// };

// balance = 1000
// if (balance > 500) console.log(`Dear customer your balance is : ${balance}`); // another way to write if and in this the scope is implicite it means we have assumed that we have a scope

// MULTIPLE CONDITIONS
// if (balance < 500) {
//     console.log("less than");
//  }
// else if (balance < 750) {
//     console.log("less than 750")
// }
// else if (balance < 900) {
//     console.log("balance is les than 900")
// }
// else { console.log("balance is less than 1200") }

//REAL LIFE USES 
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromGmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("allow to buy something")
} // it means all is true 
if (loggedInFromGoogle || loggedInFromGmail) {
    console.log("user loggedIn")
} // means any one is true


