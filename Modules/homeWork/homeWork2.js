// Due Date : Tuesday Jul-05

const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */

let sentence1_Length = sentence1.length;
console.log(`\nsentence1 Length -> ${sentence1_Length}`);// sentence length = 30
result1 = sentence1_Length >= 10 ? 15 : 25;
console.log(`result1 -> ${result1}\n`);


const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

let sentence2_Replacement = sentence2.replace(/a/gi, 'Alpha');
console.log(`\n${sentence2_Replacement}\n`);


const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */

let sentence3_Length = sentence3.length
console.log(`\n1.) Sentence-3 length -> ${sentence3_Length}`);

let sentence3_lowerCase = sentence3.toLowerCase();
let sentence3_startsWithHealth = sentence3_lowerCase.startsWith('health');
console.log(`\n2.) Does ${sentence3} start with 'health'? -> ${sentence3_startsWithHealth}`);

let includeBody = 'Body';
let includeBodyLowerCase = includeBody.toLowerCase();
let sentence3_includeBody = sentence3_lowerCase.includes(includeBodyLowerCase);
console.log(`\n3.) Does ${sentence3} include 'Body'? -> ${sentence3_includeBody}`); 

let indexOfBody = sentence3_lowerCase.indexOf(includeBodyLowerCase);
console.log(`\n4.) Index of 'Body' in sentence3? -> ${indexOfBody}`);

let lastIndex = sentence3_Length - 1;
let lastCharacter = sentence3.charAt(lastIndex);
console.log(`\n5.) Last character of ${sentence3} -> ${lastCharacter}\n`);

let lastIndexOfBody = sentence3_lowerCase.lastIndexOf(includeBodyLowerCase);
let res2 = indexOfBody === lastIndexOfBody && indexOfBody >= 0;
console.log(`Is the word 'Body' only present once in ${sentence3}? -> ${res2}`);