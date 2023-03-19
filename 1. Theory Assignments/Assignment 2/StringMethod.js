let str = "hello";

// length: returns the length of the string
console.log(str.length); // Output: 5

// charAt(): returns the character at a specified index in the string.
console.log(str.charAt(0)); // Output: "h"

// substring(): returns a portion of the string based on a specified start and end index.
console.log(str.substring(1, 4)); // Output: "ell"

// slice(): returns a portion of the string based on a specified start and end index. Can also be used with negative indexes to count from the end of the string.
console.log(str.slice(1, 4)); // Output: "ell"
console.log(str.slice(-3)); // Output: "llo"

// indexOf(): returns the index of the first occurrence of a specified substring in the string. Returns -1 if the substring is not found.
console.log(str.indexOf("l")); // Output: 2

//lastIndexOf(): returns the index of the last occurrence of a specified substring in the string. Returns -1 if the substring is not found.
console.log(str.lastIndexOf("l")); // Output: 3

//toUpperCase(): returns the string in all uppercase letters.
console.log(str.toUpperCase()); // Output: "HELLO"

// toLowerCase(): returns the string in all lowercase letters.
console.log(str.toLowerCase()); // Output: "hello"

// replace(): replaces a specified substring with another substring.
console.log(str.replace("l", "x")); // Output: "hexlo"

//concat(): concatenates two or more strings.
let str1 = "hello";
let str2 = "world";
console.log(str1.concat(" ", str2)); // Output: "hello world"

// charCodeAt(): Returns the Unicode value of the character at a specified index in a string.
const unicode = str.charCodeAt(1); // 101
console.log(unicode)

// endsWith(): Returns true if a string ends with a specified string, otherwise false.
const endsWith = str.endsWith("world"); // false
console.log(endsWith)

// includes(): Checks whether a string contains the specified string, and returns true or false.
const includes = str.includes("hello"); // true
console.log(includes)


// padEnd(): Pads the end of a string with a specified string, until it reaches a specified length.
const padded1 = str.padEnd(10, "."); // 'hello.....'
console.log(padded1)

// padStart(): Pads the start of a string with a specified string, until it reaches a specified length.
const padded2 = str.padStart(10, "."); // '.....hello'
console.log(padded2)

// startsWith(): Returns true if a string starts with a specified string, otherwise false.
console.log(str.startsWith("hello")); // Output: true
console.log(str.startsWith("world")); // Output: false