/**
 * spread operator:
 * (...)
 * 
 * to clone or merge arrays or objects
 * 
 */

let planets = ['Earth', 'Mercury', 'Saturn', 'Jupiter', 'Pluto', 'Mars'];
let fruits = ['apple', 'banana', 'cherry'];
let states = ['ny', 'tx', 'ca', 'nc'];

// create new array with values from states-array and fruits-array

let combinedArray1 = [...states, ...fruits];
console.log(combinedArray1); 


