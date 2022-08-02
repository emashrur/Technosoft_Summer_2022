// Assignment Operators (=) 
let myName = 'Happy';
console.log(myName);

// Arithmetic Operators (+, -, *, /, %, ++, --)
let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;
console.log(`${num1} + ${num2} = ${num3}`);

console.log(`${num1} + ${num2} = ${num1 + num2}`);

console.log(`${num1} - ${num2} = ${num1 - num2}`);

console.log(`${num1} * ${num2} = ${num1 * num2}`);

console.log(`${num1} / ${num2} = ${num1 / num2}`);

/**
 * Modulus -> find the remainder for a division
 * 
 * Division: 
 *      10/2 = 5 (remainder = 0)
 *      9/2 = 4 (remainder = 1)
 *      8/3 = 1 (remainder = 3)
 *      7/10 =  0 (remainder = 7)
 *      10/7 =  1 (remainder = 3)
 *      10/3 =  3 (remainder = 1)
 *      8/8 = 1 (remainder = 0)
 */
num1 = 10;
num2 = 2;
num3 = num1 % num2;
console.log(`${num1} % ${num2} = ${num3}`);

num1 = 7;
num2 = 10;
num3 = num1 % num2;
console.log(`${num1} % ${num2} = ${num3}`);

/**
 * Increment Operator (++)
 *      -> Increases the value of the variable by 1
 * num1 = 10;
 * num1++; // num1 = 11
 */

num1 = 10;
console.log(`num1 = ${num1}`); // num1 = 10
num1 ++;
console.log(`num1 = ${num1}`); // num1 = 11

/**
 * Post increment executes almost after all operators
 * Pre increment executes almost before all operators
 */

 let num4 = num1++; // Post-increment
 console.log(`num1 = ${num1}`); // num1 = 11
 console.log(`num4 = ${num4}`); // num4 = 10

 let num5 = ++num1; // Pre-increment
 console.log(`num1 = ${num1}`); // num1 = 11
 console.log(`num5 = ${num5}`); // num5 = 11

 // CLASSWORK:
 
 let lVar1=10;
 let lVar2=20;
 let lVar3=30;
 let lVar4=40;
 
 let res1 = lVar1 + lVar2++; // addition -> assignment -> post-increment
 console.log(`\n\nlVar1 = ${lVar1}`);
 console.log(`lVar2 = ${lVar2}`);
 console.log(`res1 = ${res1}`);
 
 
