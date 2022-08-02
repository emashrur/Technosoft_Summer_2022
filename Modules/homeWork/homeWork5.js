// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

 let mySentence = 'i am not creative';
 let mySentenceLowerCase = mySentence.toLowerCase();
 let strWords = mySentenceLowerCase.split(' ');
 let mySentenceTitleCase = '';
 for (let i = 0 ; i <= strWords.length-1 ; i++) {
     mySentenceTitleCase += strWords[i].charAt(0).toUpperCase();
     mySentenceTitleCase += strWords[i].substring(1,strWords[i].length).concat(' ');
 }
 mySentenceTitleCase.trim();
 console.log(`\nmySentence -> ${mySentence}\n`);
 console.log(`\nmySentence titlecase -> ${mySentenceTitleCase}\n`)
 
 
 /**
  * Q2:
  * Reverse a String (word by word)
  * 
  * 'have a great day'   ->  'day great a have'
  * 'good morning'   -> 'morning good'
  * 'hello dear how are you doing' -> doing you are how dear hello'
  * 'Learn' -> 'Learn'
  * 
  */
 
 // mySentence = i am not creative;
 mySentenceArray = mySentence.split(' ');
 mySentenceArray.reverse();
 reverseString = '';
 
 for (i = 0 ; i <= mySentenceArray.length-1 ; i++) {
     reverseString += mySentenceArray[i].concat(' ');
 }
 reverseString.trim()
 console.log(`\nReversed string -> ${reverseString}\n`);
 
 /**
  * Q3:
  * Find the total of numbers in the array
  * 
  * [1, 2, 3, 4, 5] -> 15
  * [1, 1, 1, 2, 3, 1, 2] -> 11
  * [1, -1] -> 0
  */
 
 array1 = [1, 2, 3, 4, 5];
 sum1 = 0
 for (i = 0 ; i <= array1.length-1 ; i++) {
     sum1 += array1[i];
 }
 console.log(`\nTotal of numbers in the array -> ${sum1}\n`);
 
 /**
  * Q4:
  * Find the average of the given array:
  * 
  * avg = totalOfValues/numberOfValues
  * 
  * [1, 2, 3, 4, 5] -> 15/5 -> 3
  * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
  * [1, -1] -> 0/2 -> 0
  */
 
 let array2 = [1, 1, 1, 2, 3, 1, 2];
 let avg1 = 0
 
 for (i = 0 ; i <= array2.length-1 ; i++) {
     avg1 += array2[i];
 }
 avg1 /= array2.length
 
 console.log(`\nAverage of numbers in the array -> ${avg1}\n`);