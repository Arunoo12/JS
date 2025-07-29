// these are the values which are different from the strict true and false values these are some assumptions which are taken as true or false called truthy and falsy 

const userEmail = "arun@gmail";
if (userEmail) {
    console.log(`we got email : ${userEmail}`)
} else { console.log("no email found ") }

// ✅ JavaScript has only 7 falsy values:
// Value	Description
// false	Boolean false
// 0	Number zero
// -0	Negative zero
// 0n	BigInt zero
// ""	Empty string
// null	Null value
// undefined	Undefined value
// NaN	Not-a-Number

//  Truthy Values
// Everything not falsy is truthy. A few examples:

// Type	Example	Description
// String	"hello"	Non-empty string
// Number	1, -5, 3.14	Any number except 0 or NaN
// Boolean	true	Boolean true
// Object	{}, []	All objects and arrays
// Function	function() {}	All functions
// BigInt	1n, -1n	Non-zero BigInts
// Symbol	Symbol()	All symbols

const arrayEmail = ["arun", "gmail"];
if (arrayEmail.length === 0) {
    console.log("array is empty ")
}
else { console.log("array is not empty ") }

const emptyObject = {

}
// if (emptyObject.value === 0) {
//     console.log("empty object it is ")
// }
// else { console.log("object is not empty ") }

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty")
}
// we have used object.keys(objectname) because it returns as a array and then we know how to compare a array with its length to 0 to check if its empty or not 

// Nullish coalescing operator (??)

// this operator is used when we get a value as null or undefined from database then it will takse the next value automatically to recover code base from any disturbance
let val1
// val1 = 10 ?? 20 // 10
// val1 = null ?? 15 // 15
// val1 = undefined ?? 15 // 15
// val1 = 15 ?? undefined // empty
val1 = null ?? 90 ?? 80 // 90

console.log(val1);

// TERNARY OPERATOR

// condition ? true : flase 
const age = 90;
age >= 90 ? console.log("you are old now") : console.log("you are young");