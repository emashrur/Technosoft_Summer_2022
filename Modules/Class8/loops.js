/**
 * Loops: 
 * 
 * for loop
 * while loop
 * do-while loop
 */

/**
 * for Loop: 
 * 
 * * for-of
 * for-in
 * forEach
 * 
 * loops help run codes multiple times in increments so you do not have to keep typing the same code repeatedly.
 * 
 * e.g. Print "Hello World!" 20 times:
 */

 console.log('\n\nPrint "Hello World" 20 times:\n\n');

 console.log('Hello World'); // this can be considered the beginning of your loop where the 'counter' is 1
 console.log('Hello World'); // 'counter' is 2
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World'); // 'counter' is 5
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World');
 console.log('Hello World'); // 'counter' is 20
 
 console.log('\n\nfor-Loop\n\n');
 
 // this code can be executed using the for-loop :
 /**
  * for (intialization ; condition ; increment or decrement);
  *      -> code block
  *      -> code will keep executing while condition is true.
  */
 
 for (let i = 1 ; i <= 20 ; i++) { // i is a common variable used for counters. 
     console.log('Hello World!');
 }
 
 /**
  * 1.) create counter-variable with initial value 
  * 2.) check if condition is true
  * 3.) if true enter in the for-loop and execute code.
  * 4.) once all for-loop codes are executed increment the counter value. -> at the end fo this step counter = 2
  * 5.) check if condition is true
  * 6.) if true enter in the for-loop and execute code
  * 7.) once all for-loop codes are executed increment the counter value. -> at the end fo this step counter = 3
  * 8.) .....
  */
 
  const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 
  /**
   * print the array values in separate lines
   * eg.:
   * Football
   * Soccer
   * BASKETBALL
   * Baseball
   * Rugby
   */
 
  console.log('\n\nPrint array as list on separate lines\n\n');
 
 
  console.log(sports[0]);
  console.log(sports[1]);
  console.log(sports[2]);
  console.log(sports[3]);
  console.log(sports[4]);
 
 console.log('\n\nUsing for-loop:\n\n');
 
  // (counter = 0 ; counter <= lastIndexOfArray ; counter++)  
  
 for (let i = 0 ; i <= sports.length-1 ; i++) {
     console.log(sports[i]);
 }
 
 // print all even values of "sports" array
 
 console.log('\n\nPrint all even values of array\n\n');
 
 for (let i = 0 ; i <= sports.length-1 ; i+=2) {
     console.log(sports[i]);
 }
 
 console.log('\n\nAnother way this can be executed using for-loop :\n\n');
 
 for (let i = 0 ; i <= sports.length-1 ; i++) {
     if (i % 2 === 0) {
         console.log(sports[i]);
     }
 }
 
 // which one is more efficient/effective? first method is recommended
 
 /**
   * Create abbreviation for any sentence
   * 
   * 'have a great day'   ->  'HAGD'
   * 'YOu lIVe ONlY' ->  'YLO'
   * 'yOu neVER WaLK alOne in liFe'   ->  'YNWAIL'
   * 'good Morning'   -> 'GM'
   * 
   */
 
 console.log('\n\nAbbreviation Problem\n\n');
 
 let mySentence = 'I am not creative';
 let mySentenceArray = mySentence.split(' ');
 let abbr = '';
 for (let i = 0 ; i <= mySentenceArray.length-1 ; i++) {
     abbr += mySentenceArray[i].charAt(0).toUpperCase();
 }
 
 console.log(`Abbreviation of Sentence -> ${abbr}\n`);
 
 /**
  * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
  * 
  * print the array above in the reverse order:
  * eg.
  * Rugby
  * Baseball
  * BASKETBALL
  * Soccer
  * Football
  */
 
 
  console.log('\n\nPrint sports array in reverse Solution 1:\n\n');
 
  for (let i = sports.length-1 ; i >= 0 ; i--) {
      console.log(sports[i]);
  }
  
 console.log('\n\nPrint sports array in reverse Solution 2:\n\n');
 
 let sportsReverse = sports.reverse();
 
 for (let i = 0 ; i <= sportsReverse.length-1 ; i++) {
     console.log(sportsReverse[i]);
 }
 
 sports.reverse();
 
 console.log('\n\nPrint sports array in reverse Solution 2:\n\n');
 
 for (let i = sports.length-1 ; i >= 0 ; i--) {
     console.log(sports[i]);
 }
 
 /**
  * 1.) initialization
  * 2.) while (condition) {
  *      while loop
  *      code block
  *      code will keep executing while condition is true
  *      increment/decrement
  * }        
  */
  
 console.log('\n\nPrint sports array line by line using while-loop:\n\n');
 let w = 0;
 while(w <= sports.length-1) {
     console.log(sports[w]);
     w++
 }
 
 /**
  * Do-while Loop:
  * 
  * initialization
  * do {
  *      do-while loop
  *      code will keep executing while condition is true
  *      increment/decrement
  * } while (condition);
  */
 
 console.log('\n\nPrint sports array line using do-while loop:\n\n');
 let d = 0;
 do {
     console.log(sports[d]);
     d++
 } while (d <= sports.length-1);
 
 
 
 