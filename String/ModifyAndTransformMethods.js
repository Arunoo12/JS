/* this file will contain all information about modify and transform methods of a String */

const file3 = "arun is a good boy ";

/* .toUpperCase()	
All caps	
    */
console.log(
    ` this is example of .toUpperCase() and the answer is - ${file3.toUpperCase()}`
); // ARUN IS A GOOD BOY 

/* .toLowerCase()	
All Lower	
    */
console.log(
    ` this is example of .toLowerCase() and the answer is - ${file3.toLowerCase()}`
); // arun is a good boy 

/* .trim()	
removes the extra empty spaces from the beginning and end of a string.	
    */
console.log(
    ` this is example of .trim() and the answer is - ${file3.trim()}`
); // arun is a good boy 

/* .trimStart()	
removes the extra empty spaces from the beginning of a string.	
    */
console.log(
    ` this is example of .trimStart() and the answer is - ${file3.trimStart()}`
); // arun is a good boy 

/* .trimEnd()	
removes the extra empty spaces from end of a string.	
    */
console.log(
    ` this is example of .trimEnd() and the answer is - ${file3.trimEnd()}`
); // arun is a good boy 

/* .replace(old,new)	
 finds a word or part of a string and replaces it with something else	
    */
console.log(
    ` this is example of .replace(old , new) and the answer is - ${file3.replace("arun", "naveen")}`
); // naveen is a good boy 

/* .replaceAll(old,new)	
 finds all word or part of a string and replaces it with something else	
    */
console.log(
    ` this is example of .replaceAll(old , new) and the answer is - ${file3.replaceAll("a", "j")}`
); // jrun is j good boy 

/* .repeat(n)	
 epeats the string n times — like copying and pasting it multiple times.	
    */
console.log(
    ` this is example of .repeat(n) and the answer is - ${file3.repeat(5)}`
); //  

/* .padStart(length(of current string), pad(value you want to pad at start ))	
 Add padding at start	
    */
console.log(
    ` this is example of .padStart(length, pad) and the answer is - ${file3.padStart(25, "0")}`
); //  same as padEnd
