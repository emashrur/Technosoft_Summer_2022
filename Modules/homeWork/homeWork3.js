/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
 let countryName = 'Bangladesh';
let splitCountry = countryName.split('');
let splitCountryLenth = splitCountry.length;
console.log(`\n${splitCountryLenth}`);

 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let allWords = sentence.split(' ');
console.log(`\n${allWords.length}`);
 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * "i am not creative."
  */
let fourWordSentence = "i am not creative.";
let word1 = fourWordSentence.substring(0,2).toUpperCase();
let word2Caps = fourWordSentence.substring(2,3).toUpperCase();
let word2 = fourWordSentence.substring(3,5);
let word3Caps = fourWordSentence.substring(5,6).toUpperCase();
let word3 = fourWordSentence.substring(6,9);
let word4Caps = fourWordSentence.substring(9,10).toUpperCase();
let word4 = fourWordSentence.slice(10);

let refinedSentence = word1 + word2Caps + word2 + word3Caps + word3 + word4Caps + word4;
console.log(`\n${refinedSentence}\n`)
 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * I Am Not Creative.
  */
let abr1 = refinedSentence.substr(0,1);
let abr2 = refinedSentence.substr(2,1);
let abr3 = refinedSentence.substr(5,1);
let abr4 = refinedSentence.substr(9,1);
console.log(abr1.concat(abr2).concat(abr3).concat(abr4));