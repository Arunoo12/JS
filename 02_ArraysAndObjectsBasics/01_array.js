//Array
// ways to declare Array
const myArr = [1, 2, 3, 4, 5]
// console.log(myArr[6]) 

const myHeros = ["blackPanther", "captionAmerica", "ironMan"];
// console.log(myHeros);
// console.log(myHeros[2]);

// const myArr2 = new Array(1, 2, 3, 4, 5);

//Array Methods

myArr.push(10)
// console.log(`array.push(value) will add the value at the end of an array - ${myArr}`)

myArr.pop()
// console.log(`array.pop() will remove the value at the end of an array - ${myArr}`)

myArr.unshift(12)
// console.log(`array.unshift() will add the value at the start of an array - ${myArr}`)

myArr.shift()
// console.log(`array.shift() will remove the value at the start of an array - ${myArr}`)

// Some questionare methods in Array which returns true or false 
myArr.includes(6)
// console.log(`array.includes(6) will identify us the value exist in array or not  - ${myArr.includes(6)}`)

// console.log(`array.indexOf(6) will identify the index value  - ${myArr.indexOf(6)}`)

// const newArray = myArr.join() /// it combines all theh values to a String or we can say that it converts the ARRAY TO STRING
// console.log(newArray); 
// console.log(typeof newArray); // STRING

//ARRAY TO STRING 
// const newString = String(myArr)
// console.log(newString);
// console.log(typeof newString);

//STRING TO ARRAY CONVERSION
// let str = "arun";
// let arrayofString = [...str];
// console.log(arrayofString)
// console.log(typeof arrayofString);



// slice, splice

console.log("A", myArr);

let myn1 = myArr.slice(1, 3) // not destructive
console.log(`slice method output ${myn1}`);

console.log("B", myArr);

let myn2 = myArr.splice(1, 3); // very destructive
console.log(`splice method output ${myn2}`);

console.log("C", myArr);

//important -- DIFFERENCE BETWEEN SPLICE AND SLICE IS THAT SLICE IS NOT DESTRUCTIVE AND DOES NOT MODIFY ORGINAL DATA BUT SPLICE IS DESTRUCTIVE AND MODIFYS ORGINAL DATA

