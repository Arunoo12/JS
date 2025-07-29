// reduce 
const array = [1, 2, 3];

let someVariable = array.reduce((acc, currVal) => {
    console.log(`value of acc: ${acc} 
and value of currVal: ${currVal}`)
    return acc + currVal

}, 0)
console.log(someVariable)

////// SYNTAX OF REDUCE OF MEMORY
// array.reduce(function (accumelator, current value) {
//     return accumelator + current value
// }, initial value)