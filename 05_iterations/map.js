// Maps
// map is an object which contains key value pairs (no dublicate values and unique values )
const map = new Map();
map.set("up", "uttar pradesh ")
map.set("DL", "delhi ")
map.set("HR", "haryana ")
map.set("KL", " kerala ")
map.set("UK", "uttrakhand ")
// console.log(map)

for (const key of map) {
    // console.log(key)
} // this will give every keyvalue pairs as an indivsual array one pair as one aray and print all arrays 

for (const [key, value] of map) {
    // console.log(`keys of the array is: ${key} and the value is :${value}`);
} // [ ] this is a syntax to destructure an array and this will print the indivisual value of key or value whichever i want 


const newObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in newObj) {
    // console.log(key); // print only keyys
    // console.log(Object.entries(newObj)); // print all data in array
    // console.log(`this is:- ${key} shortcut of:-${newObj[key]}`)
    // break;

}

const prog = ["js", "cpp", "java", "rp"];
for (const key in prog) {
    console.log(prog[key])
}

// NOTE- forin loop gives key values by default and we use [ ] this syntecx to get the values of suitable key 
// forof loop gives dirct values by default so we can access directly by [key,values] this destructures the array and gives us indivisual values or keys if we access without square brackts this will give us array in return 