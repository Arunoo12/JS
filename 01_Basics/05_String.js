/*String*/
const Name = "arun";
const repoCount = 50;
// console.log(Name + repoCount + "  this is example of String"); // old method
// new way
// console.log(
//   `this is my new ${repoCount} repo count and  ${Name} this is my name for my git `
// );

// new way to declare String by using objects
const gameName = new String("Hello World;"); // string is object here with key value pairs with its index number
// console.log(
//   `this is new way to declare a string using objects in js ${gameName}`
// );

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // original value is not changed because it is a primitive datatype and it only modifies the copy of code base

console.log(gameName.charAt("2"));
console.log(gameName.indexOf("l"));

let newString = "arun-is-a-good-boy";
console.log(newString.split("-")); // this will convert string into array and seprate on the base of -
console.log(newString.small());
