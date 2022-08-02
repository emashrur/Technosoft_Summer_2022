let planets = ['EArth', 'MerCUry', 'VeNUS', 'JuPIteR', 'Pluto', 'SatuRn', 'MARS']
console.log(planets);

// to find number of array values : .length function

let totalPlanetsInArray = planets.length;
console.log(`\nTotal planets in array -> $${totalPlanetsInArray}`);

// use [] to assign or access any index in an array.

const valueAtIndex2 = planets[2];

console.log(`\nValue at index 2 -> ${valueAtIndex2}`);

planets[1] = 'MaN MadE planeT'; // to assign new value to value in array

// to convert an array to a comma seperated string value use function : .toString()

const planetsString = planets.toString();
console.log(`\nplanetsString -> ${planetsString}`);

// to convert array into a string with a user-defined separator use function : .join()
// separator should be inserted inside brackets. if no separator is determined, default separator is applied (,)

const planetsJoin1 = planets.join('*');
console.log(`\nplanetsJoin1 -> ${planetsJoin1}`);

const planetsJoin2 = planets.join();
console.log(`\nplanetsJoin2 -> ${planetsJoin2}`);

// to remove value from an array use function : .pop()
//      this function removes the last value from an array and gives you the value of that word in return.

console.log(`\nplanets -> ${planets}`);
const poppedValue = planets.pop();
console.log(`\npopped value -> ${poppedValue}`);
console.log(`\nplanets -> ${planets}`);

// to remove first value from an array use function : .shift()

console.log(`\nplanets -> ${planets}`);
const shiftedValue = planets.shift();
console.log(`\nshifted value -> ${shiftedValue}`);
console.log(`\nplanets -> ${planets}`);

// to add value in the array, use function : .push() -> adds the value as the last index, instead of adding in the beginning.
//      this function returns the new array length

const lengthAfterPushFunction = planets.push('SatuRN');
console.log(`\nlength after pushed value -> ${lengthAfterPushFunction}`);

// to add value at the beginning of an array use function : .unshift()
//      this function also returns the new length of your array.

console.log(`\nplanets -> ${planets}`);
const var1 = planets.unshift('Earth');
console.log(`\nlength after unshift function -> ${var1}`);
console.log(`\nplanets -> ${planets}`);

/**
 * to add and remove values 
 * function : splice()
 *      input needed :
 *          arg-1 : index at which you want to add new values
 *          arg-2 : how many values you want to remove
 *          arg-n : new values
 */

console.log(`\nplanets -> ${planets}`)
const arrayFromSplice1 = planets.splice(2,0, 'A', 'B', 'C', 'D');
console.log(`\nplanets -> ${planets}`)
console.log(`\narrayFromSplice1 -> ${arrayFromSplice1}`)

/**
 * function : .delete()
 * also removes value from an array, and leaves an 'undefined' value
 * pop(), shift(), delete(), splice()
 */

/**
 * to concat multiple arrays use function : concat()
 *      function returns new array after joining all given arrays
 */
let fruits = ['mango', 'apple', 'banana', 'cherry'];
let states = ['ny', 'nj', 'ca', 'pa', 'tx'];
console.log(fruits.concat(states));
const combinedArray = fruits.concat(states);
console.log 

/**
 * to check if a given value is present in an array, use function : .includes()
 * input: value
 * output: boolean
 */

const includesPluto = planets.includes('Pluto');
console.log(`\nplanets -> ${planets}`);
console.log(`\nincludesPluto -> ${includesPluto}`);

const includesMan = planets.includes('Man');
console.log(`\nincludes 'Man' -> ${includesMan}`);

/**
 * to find the first occurance of a value in an array use function : .indexof()
 * if given value is present function returns the index of its first occurance
 * if given value is not present function returns -1
 */
planets = planets.concat('A', 'D', 'MaN MadE planeT', 'VeNUS', 'MaN MadE planeT', 'VeNUS', 'EARth', 'D', 'D');
const indexOfEarth = planets.indexOf('Earth');
console.log(`\nindexOfEarth -> ${indexOfEarth}`);
/**
 * to find the last occurance of a value in an array use function : .lastindexof()
 * if given value is present function returns the index of its last occurance
 * if given value is not present function returns -1
 */

/**
 * to check if a given value is an array or not use function : .isArray()
 * BOOLEAN
 *      if value is an array function returns : true
 *      if value is not an array function returns : false
 */

let isPlanetsArray = Array.isArray(planets);
console.log(`\nis planets an array -> ${isPlanetsArray}`);
let isIndexOfEarthArray = Array.isArray(indexOfEarth);
console.log(`\nis indexOfEarth an array? -> ${isIndexOfEarthArray}`);

/**
 * to fill an array with a specific value function is : .fill()
 * input : 
 *      arg-1 : the value you want to fill
 *      arg-2 : starting index (index from which you want to fill value)
 *      arg-3 : ending index (index upto which we should fill or add value -end index is not included)
 * this function works like a 'replace' function
 * 
 * if arg-2 and 3 are not mentioned, values of all indexes of the array will be replaced with the new value.
 * if only arg-3 is not mentioned, all values from starting index onward will be replaced with the new value.
 * 
 * Note -> function changes original array
 */
console.log(`\nfruits -> ${fruits}`);
fruits.fill('happy', 2,4); // 2, 3
console.log(`\nfruits -> ${fruits}`);

fruits.fill('Queen king');
console.log(`\nfruits -> ${fruits}`);

fruits.fill('Apple', 1)
console.log(`\nfruits -> ${fruits}`);

/**
 * never use this function in your interview:
 * if you want to reverse an array use function : .reverse()
 *      this function flips the array 
 */
fruits.reverse();
console.log(`\nfruits -> ${fruits}\n`);
