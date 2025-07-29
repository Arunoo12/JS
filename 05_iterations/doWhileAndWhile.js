// many versions of loop 
// in programming there are many ways to execute one operation 

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
};

let myArray = ["arun", "naveen"];
let arr = 0;
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`)
    arr = arr + 1
}

let score = 11;
do {
    console.log("this is do", score)
    score++
} while (score <= 10);