/**
 * Comparison Operator (===, >=, <=, <, !==)
 * 
 * Note: all Comparison results will be a boolean value (true or false)
 */

let num1 = 10;
let num2 = 20;

let num1GrEqNum2 = num1 >= num2;
console.log(`${num1} >= ${num2} = ${num1GrEqNum2}`);

let num3 = 30;
let num4 = 40;

let num3NtEqNum4 = num3 !== num4;
console.log(`${num3} !== ${num4} = ${num3NtEqNum4}`);

num3 = '40';
num3NtEqNum4 = num3 != num4;
console.log(`${num3} != ${num4} = ${num3NtEqNum4}`);


/**
 * === -> to compare if two values are equal (in value or dataype)
 * 
 * == -> only compares the value (does not care about the datatype)
 * 
 * !== -> to compare if two values are not equal (in value or dataype)
 * != -> only compares if the values are not equal (does not care about the datatype)
 */

