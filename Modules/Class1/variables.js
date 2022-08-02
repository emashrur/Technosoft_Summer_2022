/**
 * Types of Data :
 * multicharacter data
 * numbers
 *  Whole (age, numberOfHouses, siblings, month, date, year)
 *  decimal (accountBalance, weight, distance, height)
 *  boolean (true/false, yes/no)
 * 
 * Datatypes in programming
 * 1. String - multicharacter data
 * 2. char (single chracter data)
 * 3. byte, short, long, int (int datatype that covers all the data that involves whole numbers)
 * 4. float, double (decimal; double is the industry standard these days)
 * 5. boolean (true/false, yes/no)
 * JAVASCRIPT CONSIDERS DIGITS AS NUMBER DATATYPE
 * JAVASCRIPT CONSIDERS CHARACTER AS STRING DATATYPE
 */

/**
 * Variable: a container
 * 
 * In Java, if you need to store an int-value, you need an int-variable.
 * In JS, if you want to store an int-value, you need a variable
 * 
 */

let myAge = 20;
// print my age in the console using the 'myAge' variable.
console.log(myAge); // the value stored in 'myAge' will be printed.
// print the type of my age variable
console.log(typeof myAge);
/** 
 * 'typeof' command helps check the type of data for any variable.
 * you cannot have one variable mean two different things
 * if one was to type 'let myAge = 100' after already having myAge set to a different value, there would be an error.
 * var - allows one to redeclare a variable to a different value
 * let - let does not allow you to redeclare variable until original value is deleted.
 */
var myName = 'Mashrur'; // this command allows you to also create a variable
console.log(myName);

var myName = 'ABCD'; // this command reassigns the variable 'myName' to 'ABCD.'
console.log(myName);

// the second var command removed the initial variable and replaced with the new variable for myName

/**
 * Good practices to provide names
 * 1. variables:
 *      -> name should relate to the stored value
 *      -> cannot use js-keywords (var, console, log, typeof, etc)
 *      -> cannot use spaces 
 *      -> name should always start with lowercase except for some specific situations
 *      -> never start with digit or special character
 *      -> if name is more than one word, use camelCaseFormat
 *          -> first letter lowercase, following words will begin with uppercase.
 *              -> my age -> myAge
 *              -> my dog age -> myDogAge
 * 
 * 2. Package/Files
 *      -> name should relate to the stored files.
 *      -> cannot use js-keywords (var, console, log, typeof, etc)
 *      -> cannot use spaces 
 *      -> name should start with uppercase
 *      -> never start with digit or special character
 *      -> if name is more than one word, use camelCaseFormat
 *          eg: class 1 files -> Class1Files
 *              class 1 files -> Class1_Files
 */

// print age like  -> My name is Deepak Sharma and I am 20 years old.
let userName = 'Deepak Sharma';     // to store string-value in a variable, enclose the value in single quotes.
let userAge = 20;

console.log('My name is '+userName+' and I am '+userAge+' years old.');
//or
console.log(`My name is ${userName} and I am ${userAge} years old`); // this is the more mature coding style.





