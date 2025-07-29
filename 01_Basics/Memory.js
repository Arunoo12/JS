/* types of memeory 
1- STACK (Premitive data type )
2- HEAP (Non-Premitive data types )
* stack gives the copy of code and changes will be made on the copy code
* heap gives the refrence of original code so changes will be made on original code
*/

let someName = "arunsinghisgood"; // this is premitive datatype so the data will store on stack and modify on copy
let anotherNAme = someName; // this is a non premitive data type because this has a variable in this so it will store in heap and change the real data
anotherNAme = "chaiaurcode"; // this change will be made on heap original data

console.log(anotherNAme); // this has cahiaurcode name
console.log(someName); // bthis has arunsinghgood name

let user = {
  email: "aruns5061@gmail.com",
  upiId: "arun5061",
}; // this all will go in heap beacuse its an object and non premitive data

let userOne = user; // this will get the real modified data of user if it is modified

user.email = "naveen@gamil.com"; // this data is modified on both variables
console.log(userOne.email);
console.log(user.email);

user.upiId = "arun@axisbank";
// userOne.upiId = "naveen#axisbank";
console.log(user.upiId);
console.log(userOne.upiId);
