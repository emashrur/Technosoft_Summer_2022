let cityName = 'New YOrK ciTy';
console.log(`\ncityName -> ${cityName}`); // treat as String datatype 

let cityName2 = new String('New YOrK ciTy'); // treat as Object datatype


console.log(typeof cityName);

console.log(typeof cityName2);

/**
 * cityName == cityName2    // true
 * 
 * cityName === cityName2   //false
 */

/**
 * length 
 *      is a variable or property of String class used to get the number of properties of a string, or get the length of a string.
 */

// let cityName = 'New YOrK ciTy'
let cityNameLength = cityName.length;
console.log(`\ncityName -> ${cityName}\n`);
console.log(`Length = ${cityNameLength}`);
/** 
 * To convert string into Uppercase
 * function: toUpperCase()
 * 
 * toUpperCase() does not change the original value in the variable.
 */

let cityName_U = cityName.toUpperCase();
console.log(`\ncityName -> ${cityName}`);
console.log(`cityName_U -> = ${cityName_U}`);
/**
 * To covert string into Lowercase
 * function : toLowerCase()
 * 
 * toLowerCase() does NOT change the original value in the variable.
 */
let cityName_L = cityName.toLowerCase();
console.log(`\ncityName -> ${cityName}`);
console.log(`cityName_L -> ${cityName_L}`);

// let cityName = 'New YOrK ciTy';
// does cityName start with an 'n'

/**
 * To find if the string starts with the given 
 * function : startsWith()
 * if string starts with the given pattern 
 *      method returns true
 * otherwise
 *      method returns false
 */

// // let cityName = 'New YOrK ciTy';
let cityNameStartsWith_n = cityName.startsWith('n');
console.log(`\ncityName -> ${cityName}`);
console.log(`Does ${cityName} start with 'n' : ${cityNameStartsWith_n}`);

let cityNameStartsWith_New_Y = cityName.startsWith('New Y');
console.log(`\ncityName -> ${cityName}`);
console.log(`Does ${cityName} start with 'New Y : ${cityNameStartsWith_New_Y}`);

let startsWithPattern = 'neW y';
startsWithPattern = startsWithPattern.toUpperCase();
let cityName_UpperCase = cityName.toUpperCase();

let cityNameStartsWith_neW_y = cityName_UpperCase.startsWith(startsWithPattern);
console.log(`\ncityName -> ${cityName}`);
console.log(`Does ${cityName} start with neW y : ${cityNameStartsWith_neW_y}`);

