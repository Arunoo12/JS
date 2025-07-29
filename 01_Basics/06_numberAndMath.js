const score = 100;
// console.log(score); // old way

// new way
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2)); // this will show the value after decimal  // 100.00

const aNumber = 23.499;
// console.log(aNumber.toPrecision(3)); // priority will be to the value before decimal 

const anotherNumber = 1000000000;
// console.log(anotherNumber.toLocaleString('en-IN')) // this will add comas to the number to identify the amount by counting zeros but default comas will be added as per us system so add en=IN to add as per indian system


// ++++++++++++++MATHS+++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-5)); // abs means absoulte value it converts negative value into positive value 
// console.log(Math.round(4.7)); // roundoff of given value 
// console.log(Math.ceil(4.7)) // roundoff but chooses top value (ceiling value)
// console.log(Math.floor(4.7)) // roundoff but chooses floor value (lowest )
// let arr = [2, 4, 5, 6, 7, 8]
// console.log(Math.max(...arr)); // ... spreading(unpacking) for array
// console.log(Math.min(...arr)); // ... spreading(unpacking) for array

console.log(Math.random()) // gives random values between 0 and 1 always 
console.log((Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)