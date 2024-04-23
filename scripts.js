// Declare variables using let and const, representing four numbers and a maximum number constraint
let n1 = 10; // First number
let n2 = 15; // Second number
let n3 = 20; // Third number
let n4 = 5;  // Fourth number

const maxNumber = 25; // Maximum number allowed

// Check if all numbers are divisible by 5
// Cache the result in a variable
const allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);

// Check if the first number is larger than the last
// Cache the result in a variable
const firstLargerThanLast = n1 > n4;

// Perform arithmetic chain: Subtract, Multiply, Find remainder
const difference = n2 - n1; // Calculate the difference between the second and first numbers
const multipliedResult = difference * n3; // Multiply the difference by the third number
const remainder = multipliedResult % n4; // Find the remainder of dividing the result by the fourth number

// Output results with string interpolation
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}`);
console.log(`Is the first number larger than the last: ${firstLargerThanLast}`);
console.log(`Result of arithmetic chain: ${remainder}`);
