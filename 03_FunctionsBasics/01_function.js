// functions is used to package the codw you have written 
// function keyword then variable name then parenthesis and then curly brases 


// console.log("h")
// console.log("h")
// console.log("h")
// console.log("h")

function someName() {
    console.log("h")
    console.log("h")
    console.log("h")
    console.log("h")
}

// someName() // execution

function addTwoNo(number1, number2) {
    console.log(number1 + number2);
    // return console.l
} // these number1 and 2 is called PARAMETERS
// addTwoNo(10, 30);//40
// addTwoNo(3, "4"); // 34
// addTwoNo(3, "a"); // 3a
// const result = addTwoNo(3, null); // 3 // the values you call in a function on call time are called ARGUMENTS 

// console.log(result) // undefined

function stringConcat(s1, s2) {
    // let result1 = s1 + s2
    // return result1 // this return will store the value of the execution in result1 variable

    return s1.concat(s2);
}
const result1 = stringConcat("arun ", "Singh");
// console.log(`the result fo stringconcat function is: ${result1}`) // arun singh
// console.log(`the datatype of result is: ${typeof result1}`) // string

// function loginUserMessage(user) {
//     return `Welcome to uor world mr ${user}`
// }
// // const user = loginUserMessage("arun");
// // const user = "arun";
// // console.log(loginUserMessage(user))
// console.log(loginUserMessage("naveen")) // this is right way 


function loginUserMessage(userName) {
    if (!userName) {
        console.log('please enter a username ');
        return
    }
    // if(user===undefined){
    //     console.log('please enter a username ');
    //     return 
    // }
    return `${userName} just logged in `
}

// console.log(loginUserMessage("arun singh")); // arun singh just logged in
// console.log(typeof loginUserMessage("arun singh")); // string

/* 1- here (!userName ) this is a way to check unidentified , false,0,NaN,null, or empty string
2- here (userName===undefined) only check if the userName is undefined or not that it
 SUGGESTED -> (!userName) */

//SHOPING CART SITUATION (when you dont know how many arguments are gonna come now )

// function cartPriceCalculation(num1) {
//     return num1
// }

function cartPriceCalculation(...num1) {
    return num1
} // thses 3 dots before number is called rest and this is used to seprate the values and store them inside a array so we use rest to store multiple values in a function and store them in array 


// console.log(cartPriceCalculation(200)) // this is working
// console.log(cartPriceCalculation(200, 500, 600)) // this will not work 


function demoOfRest(val1, val2, ...num2) {
    return `val1=${val1}, val2=${val2}, num2=${num2}`
} // here the first and second value goes to val1 and 2 andd others will go in array of rest 

// console.log(demoOfRest(100, 200, 500, 1000));
// console.log(typeof num2);
// console.log(demoOfRest(...num2));


const user = {
    userName: "Arun",
    prices: 20000
} // object

function handelObject(anyObject) {
    console.log(`userName: ${anyObject.userName} and price is : ${anyObject.prices}`)
}

// handelObject(user);
//we can also do
/* handelObject({
    userName: "anonymus",
    prices: 400,
    nameOfProduct: "hand bag"
 }); */

// ARRAYS IN FUNCTIONS 
const myNewArray = [10, 20, 30, 0, 40, 90];
function forArray(anyArray) {
    // console.log(`so the second value of the array is : ${anyArray[1]}`)
    return `so the second value of the array is : ${anyArray[1]}`
}
console.log(forArray(myNewArray)); // 20
// another way
console.log(forArray([2000, 28])); // 28














