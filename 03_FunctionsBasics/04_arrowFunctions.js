// es6 arraow functions and this keyword

const userDirectory = {
    newUser: "arun",
    userId: 20,
    welcomeMessage: function () {
        console.log(`just logedin mr ${this.newUser}`)
        // console.log(`inside function ${this}`);

    }
}
// Object.freeze(userDirectory)
// console.log(userDirectory) // executed
// userDirectory.welcomeMessage() // executed
// welcomeMessage.greeting() // error
// userDirectory.newUser = "rayon", userDirectory.userId = 30;
// userDirectory.welcomeMessage() // name changed to rayon from arun

// console.log(typeof userDirectory) // object

// console.log(`simple this ${this}`) // now current enviroment is empty because we are in node enviroment 
// THIS = this shows the current enviroment which we are in 

// console.log(`this is eg of userDirectory as this ${userDirectory.this}`) // undefined


// function chai() {
//     let username = "arun";
//     console.log(this.username)
// }
// chai() // undefined because this.vatiable will always work in objects 

// const anyFn = function () {
//     let username = "arun";
//     console.log(`this is function ${this.username}`) // undefined beacuse of same reason this.variable will execute in ibjects only 
// }

// anyFn()

// ========== ARROW FUNCTION==========
const anyFn = () => {
    let username = "arun";
    console.log(`this is function ${this.username}`) // undefined beacuse of same reason this.variable will execute in ibjects only 
}
// anyFn() // same for arrow fn also 

// EXPLICIT RETURN ARROW FUNCTION ( the arrow fucntion in which we use return )

const addTwo = (num1, num2) => {
    return num1 + num2
} // basic arrow function


// IMPLICIT RETURN ARROW FUNCTION

// const addTwo = (num1, num2) => num1 + num2;
const addTwo1 = (num1, num2) => (num1 + num2) // another way to use or declare arrow function USED IN REACT SOO MUCH 

// console.log(addTwo(10, 20)) // 30

// to return an object 
const rtObj = (user = "arunsingh") => ({ username: user }) // to return object we need to write parenthesses before curly braces
// console.log(rtObj())


// const newArray = [10, 20, 50, 70, 80];
// newArray.forEach(() => (null))

