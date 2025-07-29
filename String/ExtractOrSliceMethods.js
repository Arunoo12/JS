/* this file will contain all info about extract and slice methods in String */

const file2 = "Hello world";
/* .slice(start, end)
Extracts part of string */
console.log(
    ` file2 of .slice() method in string and the answer is - ${file2.slice(
        0,
        3
    )}`
); // Hel ( it returns the start index value but does not return the end one)

/* .substring(start, end)
Like slice, but no negatives*/
console.log(
    ` file2 of .substring(start, end) method in string and the answer is - ${file2.substring(0, 9)}`
); // Hello wor

/* .substr(start, length(how many char you want to cut))
helps you cut a part of a string */
console.log(
    ` file2 of .substr(start, length) method in string and the answer is - ${file2.substr(0, 4)}`
); // Hell

/* .charAt(index)
Gets a character */
console.log(
    ` file2 of .charAt(Index) method in string and the answer is - ${file2.charAt(4)}`
); // o

/* .charCodeAt(index)
Gets Unicode of char	*/
console.log(
    ` file2 of .charCodeAt(Index) method in string and the answer is - ${file2.charCodeAt(4)}`
); // 111

/* .at(index)	
helps you get a single character from a string, using its position (called index).*/
console.log(
    ` file2 of .at(Index) method in string and the answer is - ${file2.at(10)}`
); // d