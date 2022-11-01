/**
 * discussed string functions :
 * 
 * localeCompare() : 
 * compares two strings -> returns 0 if strings are identical, returns -1 if strings are different.
 * 
 * substring(index[x], index[y]) :
 * used to extract smaller portions from larger strings. -> returns substring starting from index[x] ending before (excluding)
 * index[y].
 *      -> slice(startIndex, endIndex)
 *      -> substr(startIndex, length)
 *      -> split()
 * 
 * 
 * 
 */
let stmt1 = 'Hello World';
let stmt2 = 'Hello World!';
// to compare if stmt1 and stmt2 is equal: Boolean:
stmt1 === stmt2;

// to compare if stmt1 and stmt2 is equal: -1, 0, 1:
stmt1.localeCompare(stmt2);

let isEqual1 = stmt1.localeCompare(stmt2);
console.log(`\n\nIs stmt1 equal to stmt2? -> ${isEqual1}\n\n`);

/**
 * if both strings are equal returns -> 0
 * if stmt1 is greater than stmt2 -> 1
 * if stmt1 is less than stmt2 -> -1
 */

let sentence = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL';

let subString0_4 = sentence.substring(0,4);
console.log(`sentence -> ${sentence}`)
console.log(`Substring from index-0 to index-4(excluding 4) -> ${subString0_4}\n\n`);

// if start and end indexes are both invalid the console prints an empty string.
// if only end index is invalid, console will log string starting from the startIndex.
// if starting index is invalid (negative) console will print from index-0 to endIndex.
// if starting index is invalid (positive) console will print from endIndex to lastIndex.

/**
 * How to find first character of a string using subString function:
 */
let firstCharacter = sentence.substring(0,1);
console.log(`First character using subString function (0,1) -> ${firstCharacter}\n\n`);
/**
 * Print last letter of a string using subString() function:
 * 1.) lastIndex of string = string.length - 1; 
 */
let lastCharacter = sentence.substring(sentence.length-1);
console.log(`Last letter of string using subString(sentence.length-1) -> ${lastCharacter}\n\n`);

let slice0_4 = sentence.slice(0,4);
/**
 * Slice gives you same result as subString
 */
console.log(`slice result -> ${slice0_4}\n\n`);

/**
 * 0,4 -> 0-4
 * 11 -> 
 * 20,10
 * -1,10
 * -3,-1
 */

//substr()
let substr0_4 = sentence.substr(0,4);
console.log(`Substr 0,4 result -> ${substr0_4}`);
let firstCharacterSubstr = sentence.substr(0,1);
console.log(`firstCharacter result using substr -> ${firstCharacterSubstr}\n\n`);

/**
 * str = 'king';
 * str.lenth x
 * split function to convert to array:
 * str.split('');
 * 
 */