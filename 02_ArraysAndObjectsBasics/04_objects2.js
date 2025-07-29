// OBJECTS PART 2

// topic - objects as singleton or constructor 
const tinderUser = new Object() // singleton object
console.log(tinderUser); // empty object 


const tinderUser1 = {} // this is a non singleton object 

// adding data to empty object 
tinderUser1.id = "id1";
tinderUser1.name = "arunsingh";
tinderUser1.email = "haku@google.com";
tinderUser1.city = "ghaziabaf";
tinderUser1.gender = "male";
tinderUser1.preferedGender = "female";
tinderUser1.isLoggedIn = false;

// console.log(tinderUser1); // empty object  

const regularUser = {
    email: "gmailid@.com",
    fullname: {
        someName: {
            usersName: "arunsi",
            familyName: "sings",
        }
    }

}
// console.log(regularUser);

console.log(regularUser["fullname"]);
console.log(regularUser["fullname"]["someName"]);
// console.log(regularUser["fullname"]["someName"]["familyName"]);
console.log(regularUser.fullname.someName.familyName);

/* fullname? this means if this exist then perform operation otherwise not 
useCase= when we take info or perform operation on a api then we use this to avoid using if else again and again */

const obj1 = { 1: true, 2: false } // object
const obj2 = { 3: "undef", 4: "done" } // object
const obj4 = { 5: "undef", 6: "done" } // object

// merging of to objects 
const mergedObj = { ...obj1, ...obj2 }; // we will use this in production code 99% (PRODUCTION)
console.log(mergedObj)

// or
// const obj3=Object.assign(obj1, obj2); // one way to do but below is more efficient 
const obj3 = Object.assign({}, obj1, obj2, obj4); // {} this is a target and obj1 and obj2 are source 
console.log(obj3);


// In this way values will come from database (multiple objects inside an array)
const user = [
    {
        id: 1,
        email: "yo@gmail.com"
    },
    {
        id: 1,
        email: "yo@gmail.com"
    },
    {
        id: 1,
        email: "yo@gmail.com"
    },
    {
        id: 1,
        email: "yo@gmail.com"
    }]

console.log(user[1].email);// this is we will access the key of an object which is inside an array including multiple ibjects so the user is array and [1] is the first component of array which is an object and .email is the way we use to acees the data from object 

console.log(tinderUser1);

// sometimes youwill need to get all keys of a object 
console.log(Object.keys(tinderUser1)); // this shows the all keys inside a array and datatype is also an array  
console.log(Object.values(tinderUser1)) // values of keys as an array 
console.log(Object.entries(tinderUser1)); // array inside array contains one key value pair as one array inside a parent array 

// to check if the object has the property in it or not 
console.log(tinderUser1.hasOwnProperty("id"));


