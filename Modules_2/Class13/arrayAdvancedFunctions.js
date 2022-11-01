/**
 * Advanced Array Functions:
 * 
 * map()
 * filter()
 * every()
 * findIndex()
 * 
 * 
 */

/**
 * To find the value at 
 * function : findIndex()
 * 
 */

console.log('\nfindIndex function\n');

let fruits = ['apple', 'banana', 'cherry'];

// find the first value in array which has length greater than 5

let firstFruitNameGrTh5 = fruits.findIndex(name => name.length > 5);

console.log(`First index at which fruit-name length is greater than 5 -> ${firstFruitNameGrTh5}`);