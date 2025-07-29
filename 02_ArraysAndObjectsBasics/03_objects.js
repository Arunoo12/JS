// singleton - means a constructs made is made a single object of a type but if its is made from other method it is created as a copy instance of its type and multiple instance is made 

// when a object is made with literals then a singleton will not be made

// const myArr = ["a", "r"]
// console.log(myArr[0]); // an array can be accessed by only its index value 

// object literals
const jsUser = {
    name: "arun",
    class: "btech",
    "fullName": "arunsingh", // this value can not be acess with first method so we use second 
    isLoggedIn: false,
    email: "aruns5061@google.com",
    lastLoggedIn: ["monday", "tuesday", "wednesday"]
}

// console.log(`name of client is -- ${jsUser.name}`); // one way to access
// console.log(`email of client is -- ${jsUser["email"]}`);// second way to access
// console.log(`last logged in data is -- ${jsUser["lastLoggedIn"]}`);
// console.log(`this is full name -- ${jsUser["fullName"]}`);

// to use a symbol as a key in objects we have only one option first declare a symbol and then use [] these brackets to access them 

//declareation of symbols 
let mysymb = Symbol("symbol1")
const obj2 = {
    [mysymb]: "this is the symbol "
}

// console.log(obj2[mysymb]); // "this is symbol"
// console.log(typeof obj2[mysymb]); // string
// console.log(typeof mysymb); // symbol

// to chnage value of an key in object 
jsUser.email = "arun@google";
// console.log(jsUser['email']);

// to freeze the data of an object so that noone can change values
// Object.freeze(jsUser);
// jsUser.name = "naveen";
// console.log(jsUser["name"]); // output is arun and name is not changed because its freeze 

// console.log(mysymb);

// functions in js is used as variables (type1 citizen)
jsUser.greeting = function () {
    console.log("hello mr arun")
}
jsUser.greetingtwo = function () {
    // console.log(`hello mr - ${jsUser["name"]} `)
    // we can also use THIS 
    console.log(`hello mr - ${this.name}`); // THIS is used to refer the current object and it gives all the values of the object 


}
console.log(jsUser.greeting()) // hello mr arun
console.log(jsUser.greeting) // function(anonymous)
console.log(jsUser.greetingtwo())

