// iterations in javascript
// for loop
for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("we hit the number 5")
    }
    // console.log(element);

}

for (let i = 0; i <= 10; i++) {
    // console.log(` table of ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop ${j} and outer loop is ${i}`)
        // console.log(i + "*" + j + "=" + i * j)
    }

}

let myArray = ["ironman", "thor", "loki"];
// console.log(`length of array: ${myArray.length}`)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//         break; // loop got out after 5 detected
//     }
//     console.log(`value of i os : ${index}`)

// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue; // continue states that leave it for 1 time it will iterate for 1 more time and then stop 
    }
    console.log(`value of i os : ${index}`)

}