/* this file will contain info about array and this is a part of array second */
const sedanCar = ["slavia", "hondaCity", "octavia"];
const suvCar = ["forctuner", "everest", "scorpio"];
// console.log(sedanCar)
// console.log(suvCar)

// sedanCar.push(suvCar);
// console.log(sedanCar); // array is not merg it became a nested array

// let allCar = sedanCar.concat(suvCar);
// console.log(allCar); // now both array is merged

const allCar = [...suvCar, ...sedanCar];
// console.log(allCar); // perfect way to merg with seprator ...

const anotherCar = [1, 2, 3, [4, 5, 6], 8, [2, 3, [5, 8], 99]]
const sortedCar = anotherCar.flat(Infinity); // flat basically create a new array and put all substring in it with out nedted blunder
console.log(sortedCar);
// console.log(`thi si me ${anotherCar.flat(Infinity)}`); // also works 


console.log(`to check if the value is array or not-- ${Array.isArray("arunsingh")}`);
// console.log(`to check if the value is array or not-- ${Array.isArray(sortedCar)}`); // true
console.log(`to convert the given value to array -- ${Array.from("arunsingh")}`);


// to convert multiple variables into array
let car1 = 100;
let car2 = 200;
let car3 = 300;
let car4 = 400;

let carArr = Array.of(car1, car2, car3, car4);
console.log(carArr)

console.log(Array.from({ name: "arun" })) // it will give an empty array because it canot make a array of key value pairs without instructing 