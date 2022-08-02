// To find if a string ends with a certain pattern use function:
// .endsWith()
// results in true or false

let cityName = 'New YOrk ciTy';
let cityNameEndsWith_ty = cityName.endsWith('ty');
console.log(`\ncityName -> ${cityName}`);
console.log(`does ${cityName} end with 'ty'? -> ${cityNameEndsWith_ty}`);

// to find a given pattern present in a string use use function:
// .includes()
// results in true or false

let cityNameIncludes_Ork = cityName.includes('Ork');
console.log(`\nDoes ${cityName} include "Ork"? -> ${cityNameIncludes_Ork}'`);

// to replace a given pattern from string from another pattern or value 
// use function: .replace()
// input two strings: (replaceThis, replaceWith)
// return type: string
// replace function does not replace value of variables.
// replace function replaces the data and returns a new string.

let stringSample = "The Magician's Son, The Assasain's Son, The Barber's Son";
console.log(`\nOriginal : ${stringSample}`);
let stringSample_Replace = stringSample.replace('Son', 'Assistant');
console.log(`After replace function : ${stringSample_Replace}`);
console.log(`\n${stringSample} -> ${stringSample_Replace}\n`);

// by default replace function only applies on first appearance
// to replace all -> .replace(/son/g, 'Apprentice');

let stringSample_Replace_All = stringSample.replace(/Son/g, 'Apprentice');
console.log(`\nAfter replace all function : ${stringSample_Replace_All}`);
console.log(`\n${stringSample} -> ${stringSample_Replace_All}\n`);

// to replace all without case sensitivity -> .replace(/s/gi, '5');

let stringSample_Replace_All_sS = stringSample.replace(/s/gi, '5');
console.log(`\nAfter replace all function : ${stringSample_Replace_All_sS}`);
console.log(`\n${stringSample} -> ${stringSample_Replace_All_sS}\n`);

// To join two or more strings 
// function : concat()

let str1 = 'Hello', str2 = ' ', str3 = 'World', str4 = '!';
let str = str1 + str2 + str3 + str4; // Hello World!
console.log(str); 
let strr = str1.concat(str2, str3, str4);
console.log(strr);

/**
 * to remove excess spaces before and after string use trim function:
 * .trim()
 * the trim function does not replace the original variable.
 */
 let sent = '     Hello   sWorld  hav    a   good day.        ';

 let sent_AfterTrim = sent.trim();
 // sent = sent.trim();
 
 console.log('\n*'.concat(sent, '*'));     
 // *     Hello   sWorld  hav    a   good day.        *
 
 console.log('*'.concat(sent_AfterTrim, '*'));   
 // *Hello   sWorld  hav    a   good day.*

 /**
 * To increase length of the String by adding given character
 * function: 
 *      padStart() -> adds padding in the beginning
 *      padEnd() -> adds padding in the end
 */
/**
 * padStart() -> adds padding in the beginning to increase the length of String
 * 
 * input: 2 
 *      number : length of string after padding
 *      String : character we would like to use for padding
 * return type:
 *      String : String after padding     
 * 
 * 
 * Hello
 * padStart(7, *)
 * **Hello
 * 
 * Hello
 * padStart(4, *)
 * Hello
 */
let padString = 'Hello';
let padString_AfterPadding = padString.padStart(7, '*');

console.log(`\npadString -> ${padString}`);
console.log(`padString_AfterPadding -> ${padString_AfterPadding}`);

let padString_AfterPadding2 = padString.padStart(4,'*');
console.log(`padString_AfterPadding2 -> ${padString_AfterPadding2}`);

/**
 * padEnd() -> adds padding in the ending to increase the length of String
 * 
 * input: 2 
 *      number : length of string after padding
 *      String : character we would like to use for padding
 * return type:
 *      String : String after padding     
 * 
 * 
 * Hello
 * padEnd(7, *)
 * Hello**
 * 
 * Hello
 * padEnd(4, *)
 * Hello
 */
let padString_AfterPadding_End = padString.padEnd(8, '^&');

console.log(`\npadString -> ${padString}`);
console.log(`padString_AfterPadding_End -> ${padString_AfterPadding_End}`);

let padString_AfterPadding_End2 = padString.padStart(4,'*');
console.log(`padString_AfterPadding_End2 -> ${padString_AfterPadding_End2}`);

/**
 * Hello World
 * 
 * length = 11
 * first index = 0
 * last index = 10
 * 
 * 
 * Happy
 * 
 * length = 5
 * first index = 0
 * last index = 4
 * 
 * last Index = length - 1
 * 
 * datatype of index -> number
 * 
 */

/**
 * To find the character at any given index
 * function: charAt()
 * 
 * input: 1
 *      number : index
 * return type: 
 *      string
 * 
 * 
 */

let mySentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';

// which character is at index-23
let charAt23 = mySentence.charAt(23);
console.log(`\nmySentence -> ${mySentence}`);
console.log(`Character present at index-23 -> ${charAt23}`);

// index is beyond the scope
let charAt200 = mySentence.charAt(200);
console.log(`Character present at index-200 -> ${charAt200}`);

// invalid index value
let charAt_4 = mySentence.charAt(-4);
console.log(`Character present at index -4 -> ${charAt_4}`);

/**
 * To find at which index the given pattern (FIRST OCCURRENCE) is exactly present in the String
 * function: indexOf()
 * 
 * input: 1
 *      String : pattern for which we want to find index
 * return:
 *      number : index where the pattern is present
 * 
 * 
 * if the given pattern is exactly present in the String
 *      method returns the index of FIRST OCCURRENCE of the starting of the pattern
 * otherwise
 *      method returns -1
 * 
 * 
 * Hello World Hello Dear Hello Boss Hello Family
 * indexOf(e)   -> 1
 * 
 * indexOf(E)   -> -1
 * 
 * indexOf(l)   -> 2
 * 
 * indexOf(ell) -> 1
 * 
 * indexOf(rld he) -> -1
 * 
 * indexOf(rld He) -> 
 * 
 */
let helloMsgs = 'Hello World Hello Dear Hello Boss Hello Family';

let indexof_e = helloMsgs.indexOf('e');
let indexof_E = helloMsgs.indexOf('E');
let indexof_l = helloMsgs.indexOf('l');
let indexof_ell = helloMsgs.indexOf('ell');
let indexof_rld_he = helloMsgs.indexOf('rld he');
let indexof_rld_He = helloMsgs.indexOf('rld He');

console.log(`\nhelloMegs -> ${helloMsgs}`);
console.log(`indexof_e -> ${indexof_e}`);
console.log(`indexof_E -> ${indexof_E}`);
console.log(`indexof_l -> ${indexof_l}`);
console.log(`indexof_ell -> ${indexof_ell}`);
console.log(`indexof_rld_he -> ${indexof_rld_he}`);
console.log(`indexof_rld_He -> ${indexof_rld_He}`);


/**
 * To find at which index the given pattern (LAST OCCURRENCE) is exactly present in the String
 * function: lastIndexOf()
 * 
 * input: 1
 *      String : pattern for which we want to find index
 * return:
 *      number : index where the pattern is present
 * 
 * 
 * if the given pattern is exactly present in the String
 *      method returns the index of LAST OCCURRENCE of the starting of the pattern
 * otherwise
 *      method returns -1
 * 
 * 
 * Hello World Hello Dear Hello Boss Hello Family
 * lastIndexOf(e)   -> e (in last Hello)
 * 
 * lastIndexOf(E)   -> -1
 * 
 * lastIndexOf(l)   -> l (in family)
 * 
 * lastIndexOf(ell) -> ell (in last Hello)
 * 
 * lastIndexOf(rld he) -> -1
 * 
 * lastIndexOf(rld He) -> 8
 * 
 */

let lastIndexof_e = helloMsgs.lastIndexOf('e');
let lastIndexof_E = helloMsgs.lastIndexOf('E');
let lastIndexof_l = helloMsgs.lastIndexOf('l');
let lastIndexof_ell = helloMsgs.lastIndexOf('ell');
let lastIndexof_rld_he = helloMsgs.lastIndexOf('rld he');
let lastIndexof_rld_He = helloMsgs.lastIndexOf('rld He');

console.log(`\nhelloMegs -> ${helloMsgs}`);
console.log(`lastIndexof_e -> ${lastIndexof_e}`);
console.log(`lastIndexof_E -> ${lastIndexof_E}`);
console.log(`lastIndexof_l -> ${lastIndexof_l}`);
console.log(`lastIndexof_ell -> ${lastIndexof_ell}`);
console.log(`lastIndexof_rld_he -> ${lastIndexof_rld_he}`);
console.log(`lastIndexof_rld_He -> ${lastIndexof_rld_He}`);

// index - starting character of string in JS server.