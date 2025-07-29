const favNumbers = [1, 2, 3, 4, 5, 5, 6, 7, 8];

// let someThing = favNumbers.map((num) => {
//     return num + 10
// })
// console.log(someThing)

// let someThingUpdated = [];
// favNumbers.forEach((num) => {
//     someThingUpdated.push(num + 10)
// })
// console.log(someThingUpdated)

let someVariable = favNumbers.map((num) => { return num + 10 }).map((num) => { return num + 1 }).filter((num) => { return num >= 15 }) // chaining 
console.log(someVariable)
