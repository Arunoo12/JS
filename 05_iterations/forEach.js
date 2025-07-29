// higher order array in js 
const cars = ["mazda", "honda", "suzuki", "mercedes", "bmw"];

// cars.forEach(function (elementInArray) { console.log(`element in array is :- ${elementInArray}`) })
// cars.forEach((elementsInArray) => { console.log(`elements in array are : ${elementsInArray}`) }) // arrow function

// callback function is a function which is written inside a forEach and it does not have any name 

// function printMe(elementInArray) {
//     console.log(elementInArray);
// }
// cars.forEach(printMe);// we are giving function refrence to foreach not executing them its different 

// cars.forEach((elementInArray, indexOfArray, dataOfArray) => {
//     // console.log(`this is elements of array ${elementInArray}`);
//     // console.log(`this is index value of array ${indexOfArray}`);
//     // console.log(`this is data of array ${dataOfArray}`);
//     console.log(elementInArray, indexOfArray, dataOfArray);
//     console.log(typeof dataOfArray) // object 

// })

// forEach :- we have access of index value , indivisual element and full array access 

const newArray = [
    {
        languageName: "js",
        languageFileName: "higherOrderArray"
    },
    {
        languageName: "python",
        languageFileName: "pythonFile"
    },
    {
        languageName: "cpp",
        languageFileName: "c++Basics"
    },
    {
        languageName: "java",
        languageFileName: "publicStaticVoidMain"
    }]

newArray.forEach((item) => {
    console.log(item["languageName"])
})