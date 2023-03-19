// concat(): Joins two or more arrays and returns a new array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]

// every(): Checks if every element in an array passes a test specified by a function.
const arr = [1, 2, 3, 4, 5];
const isGreaterThanZero = (element) => element > 0;
console.log(arr.every(isGreaterThanZero)); // Output: true

// find(): Returns the value of the first element in an array that satisfies a provided function.
const isGreaterThanThree = (element) => element > 3;
console.log(arr.find(isGreaterThanThree)); // Output: 4

// forEach(): Executes a provided function once for each array element.
arr.forEach((element) => console.log(element)); // Output: 1, 2, 3, 4, 5

// includes(): Determines whether an array includes a certain value among its entries.
console.log(arr.includes(3)); // Output: true
console.log(arr.includes(6)); // Output: false

// indexOf(): Returns the first index at which a given element can be found in the array.
console.log(arr.indexOf(3)); // Output: 2

// join(): Joins all elements of an array into a string.
console.log(arr.join("-")); // Output: "1-2-3-4-5"

// pop(): Removes the last element from an array and returns that element.
console.log(arr.pop()); // Output: 5
console.log(arr); // Output: [1, 2, 3, 4]

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
console.log(arr.push(6)); // Output: 6 (the new length of the array)
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

/* Map
The map() method is used for creating a new array from an existing one, applying function to each one of the elements of the first array.
map(): creates a new array with the results of calling a provided function on every element in the array.
In the following example, each number in an array is doubled.
*/
function double(x) {
    return x * 2;
}
const newArr2 = arr.map(double);
console.log(newArr2); // Output: [2, 4, 6, 8, 10]


/*
Filter
The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
filter(): creates a new array with all elements that pass the test implemented by the provided function.
*/
function isEven(element) {
    return element % 2 === 0;
}
const filteredArr1 = arr.filter(isEven);
console.log(filteredArr1); // Output: [2, 4]


/*
Reduce
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
Syntax
arr.reduce(callback[, initialValue])
*/
const number = [1, 2, 3, 4];
function reducer(result, item) {
    return result + item;
}
const sum2 = number.reduce(reducer, 0);
console.log(sum2); // 10

