// for of 

// ["","",""]
// [{},{},{}]

const arr = [10, 20, 30, 0];
for (const num of arr) {
    console.log(num);
};

const str = "arunsingh";
for (const val of str) {
    console.log(val)
};

const obj = {
    name: "arun",
    surname: "singh"
}
for (const val of obj) {
    console.log(`value of object is : ${val}`)
}