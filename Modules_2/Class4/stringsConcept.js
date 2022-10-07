let myCity = 'neW yORk CIty, neW YoRk';

console.log(`\nmyCity -> ${myCity}`);

console.log(`\ntypeOf myCity -> ${typeof myCity}`);

/**
 * to find the length of a string: length
*/

let myCityLength = myCity.length;

console.log(`\nmyCityLength -> ${myCityLength}`);

// Assign errorMgs : 'Error: Insufficient password length' if password length is less than 8
// otherwise message : 'Good password length'

let userPwd = 'laptop12';

let message = userPwd.length < 8 ? 'Error: Insufficient password length' : 'Good password length';
console.log(`\n\nmessage -> ${message}\n\n`);

/**
 * to convert string into UPPERCASE -> function : toUpperCase()
 */

let myCityUpperCase = myCity.toUpperCase();
console.log(`\nmyCity -> ${myCity}`);
console.log(`myCityUpperCase -> ${myCityUpperCase}\n`);

/**
 * if you want to replace old string with uppercase string value:
 */

// myCity = myCity.toUpperCase();
console.log(`\nmyCity -> ${myCity}\n`);

/**
 * to convert string into lowercase -> function : toLowerCase()
 */

 let myCityLowerCase = myCity.toLowerCase();
 console.log(`\nmyCity -> ${myCity}`);
 console.log(`myCityLowerCase -> ${myCityLowerCase}\n`);








