/* this file will contain all the String methods for search and check */

let file1 = "Hello World";

/* .includes()
 it is used to find if the wrod is present in String or not */
console.log(
  `this is example of .include() method in String and the answer is -  ${file1.includes(
    "He"
  )}`
); // true

/* .indexof()
  this allow us to find the position of sub string */
console.log(
  ` this is example of .indexof() and the answer is - ${file1.indexOf("W")}`
); // 6

/* .lastIndexof()
  this allow us to find the last position of sub string */
console.log(
  ` this is example of .lastIndexof() and the answer is - ${file1.lastIndexOf(
    "W"
  )}`
); // 6

/* .startsWith()
  this tells if the string is satrting with the given sub string or not  */
console.log(
  ` this is example of .startsWith() and the answer is - ${file1.startsWith(
    "W"
  )}`
); // false

/* .endsWith()
  Check if the string ends with or not  */
console.log(
  ` this is example of .endsWith() and the answer is - ${file1.endsWith("d")}`
); // true

/* .search()
it looks for a match in a string and tells you where it begins (the position or index).
  */
console.log(
  ` this is example of .search() and the answer is - ${file1.search(/d/)}`
); // 10 is the index value

/* .match()
find the actual word(s) that match a certain pattern, not just their position
  */
console.log(
  ` this is example of .match() and the answer is - ${file1.match("Hello")}`
); // Hello


