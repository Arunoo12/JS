// scope starts from let var and const 
// let a = 10
// const b = 20
// var c = 30

// { } this is curly braces when it comes with any function or if else statement then it is called as scope 
if (true ){
    // now what are the values should be there 
    let a = 10
    const b = 20
    var c = 30
    // block scope
}
// global scope
// console.log(a); // a is not defined because we have assigned it inside a if 
// console.log(b); // b is also not deffined because of same reason  
console.log(c); // now var is executing and that wrong that is why we dont use var 

// the scope if different in node terminal and browser inspect 
