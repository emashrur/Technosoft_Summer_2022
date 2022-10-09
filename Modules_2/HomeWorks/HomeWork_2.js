/**
 * Due date : Oct-9 (Sun) eod
 */

 const sentence1 = 'Hello Dear, how are you doing?';
 let result1 = 0;
 /**
  * if the length of sentence1 is greater than or equals to 10
  *      assign 15 in the result1
  * otherwise
  *      assign 10 in the result1
  */
sentence1.length >= 10 ? result1 += 15 : result1 +=10;

 console.log(`\n\nresult1 -> ${result1}`);
 
 const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 /**
  * replace all instances of a or A with 'Alpha', print the result in console.
  */
let sentence2Alpha = sentence2.replace(/a/gi, 'Alpha');

console.log(`\n\nsentence2 after replaceing a,A with 'Alpha' -> ${sentence2Alpha}`);

 const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 /**
  * print the result in console:
  * 1. the length of sentence-3
  * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
  * 3. does sentence-3 contains with 'Body' (ignore cases)
  * 4. index of 'BoDy' in sentence3  (ignore cases)
  * 5. the last-character in sentence-3
  * 6. word 'BoDy' is present only once. (true or false)
  */

 console.log(`\n\nLength of sentence3 -> ${sentence3.length}`);
 console.log(`Does sentence-3 start with 'HeaLTh'? -> ${sentence3.toLowerCase().startsWith('HeaLTh'.toLowerCase())}`);
 console.log(`Does sentence-3 include 'Body' -> ${sentence3.toLowerCase().includes('Body'.toLowerCase())}`);
 console.log(`Index of 'BoDy' in sentence3 -> ${sentence3.toLowerCase().indexOf('BoDy'.toLowerCase())}`);
 console.log(`The last-character in sentence-3 -> ${sentence3.charAt(sentence3.length - 1)}`);
 console.log(`Word 'BoDy' is present only once -> ${sentence1.toLowerCase().indexOf('BoDy'.toLowerCase()) === sentence1.toLowerCase().lastIndexOf('BoDy'.toLowerCase())}`);