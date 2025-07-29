// nested scope 
function one() {
    const userName = "hitesh"
    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website); // error 
    two();
}
// one(); // hitesh
/* SUMMARY:- the psrent function cannot call the variable indside and child function but a child function can call the variable of a parent function inside it */

if (true) {
    const name = "arun";
    if (name === "arun") {
        const age = 20;
        // console.log(`the name of client is ${name}`)
        // console.log(`age of client is ${age}`)
    }
    // console.log(age) // error
}

// console.log(name) // error because its in local scope of if 

// =============INTRESTING=============
// this is called function
function addOne(num) {
    return num + 1
}
console.log(addOne(5)) // 6


//this is called expression sometimes
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5)) // 7 // this will not execute when the line is written above the variable 