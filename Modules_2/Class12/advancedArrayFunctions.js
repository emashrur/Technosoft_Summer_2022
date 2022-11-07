/**
 * Advanced Array Functions
 * 1.) map()
 * 2.) filter()
 * 3.) every()
 * 4.) 
 */

 let fruits = ['apple', 'banana', 'cherry'];
 let string = 'Create a function that converts all values in an array into UpperCase';
 let numbers = [98, 56, 73, 82, 231];

 /**
  * When we need to perform a function on every single value in an array :
  * function : map()
  * syntax : sampleArray.map(var => var.function())
  *     -> executes 'function()' on every 'var' in 'sampleArray'
  *     -> does not change the original array
  *     -> returns NEW array of the same length as 'sampleArray' after performing 'function()' on each 'var'
  * 
  */

 /**
  * Create a function that converts all values in an array into UpperCase
  *     and return the updated array
  */

 const forOfUpperCase = (inputData) => {
    let upperCaseArray = [];
    let upperCaseString = '';
    if (typeof inputData === 'string') {
        for (let iIndex of inputData) {
            upperCaseString += inputData.charAt(iIndex).toUpperCase();
        }
        return upperCaseString;
    } else {
        for (let iIndex of inputData) {
            upperCaseArray.push(iIndex.toUpperCase());
        }
        return upperCaseArray;
    }
 } 


 console.log(forOfUpperCase(fruits));
 console.log('\n');


 let convertStringIntoUpperCase = (str) => str.toUpperCase();
 let res2_2 = fruits.map(convertStringIntoUpperCase);

 /**
  * first line above creates arrow function to convert string to UpperCase
  * second line applies arrow function created on each value in array
  * the line below combines both lines above
  */
 

 let res2 = fruits.map(word => word.toUpperCase());
 console.log(res2);
 console.log(res2_2);
 console.log('\n\n');

 /**
  * When we need to filter values from array into new array based on condition :
  * function : filter() 
  * syntax : sampleArray.filter(var => varCondition)
  *     -> finds each 'var' in 'sampleArray' that passes 'varCondition'
  *     -> does not change original array
  *     -> returns NEW array only with values of sampleArray that passes 'indexCondition'
  */

 const getFruitsNames = (fruitsArray) => {
    let resultArray = [];
    for (fName of fruitsArray) {
        if (fName.length >= 6) {
            resultArray.push(fName);
        }
    }
    return resultArray;
 }

 console.log(`\nUsing function expression :\ngetFruitsNames(fruits) -> ${getFruitsNames(fruits)}\n`); 

 let fruitLengthGr6 = (str) => str.length >= 6;
 let res3_2 = fruits.filter(fruitLengthGr6);
 console.log(`Using arrowFunction with filterFunction :\nfruitLengthGr6 = (str) => str.length >= 6 -> ${res3_2}`);

 let res3 = fruits.filter(fruit => fruit.length >= 6);
 console.log(`\nUsing filterFunction to filter fruit :\nfruits.filter(fruit => fruit.length >= 6) -> ${res3}\n`);

 // remove all values below 50 from numbers-array

 const removeNumsLess50 = (numbersArray) => {
    let resultArray = [];
    for (num of numbersArray) {
        if (num >= 50) {
            resultArray.push(num);
        } 
    }
    return resultArray;
 }
 let res4_1 = removeNumsLess50(numbers);
 console.log(`Using function expression :\nremoveNumsLess50(numbers) -> ${res4_1}\n`);

 let numGrEq50 = (num) => num >= 50
 let res4_2 = numbers.filter(numGrEq50);
 console.log(`Using arrowFunction with filterFunction :\nnumGrEq50 = (num) => num >= 50 -> ${res4_2}\n`);

let res4 = numbers.filter(num => num >= 50);
console.log(`Using filterFunction to filter numbers :\nnumbers.filter(num => num >= 50) -> ${res4}`);

/**
 * When checking to see if every value in an array passes given condition :
 * function : every()
 * syntax : sampleArray.every(var => varCondition)
 *      -> checks if every 'var' in 'sampleArray' passes 'varCondition'
 *      -> does not change sampleArray
 *      -> returns true if all 'var' passes 'varCondition' , otherwise returns false
 */

const isAllGr50 = (numbersArray) => {
    for (number of numbersArray) {
        return num >= 50;
    }
}

console.log(`\nisAllGr50(numbers) -> ${isAllGr50(numbers)}`);

const isAllGrEq50 = numbers.every(num => num >= 50);
console.log(`\nisAllGrEq50 -> ${isAllGrEq50}\n`);












