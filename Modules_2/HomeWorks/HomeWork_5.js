// Due date : Oct-19 EOD

/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */
 let numbers = [23, 12, 43, 10, 5, -10];
 let numAvg = 0;
 for (i = 0 ; i <= numbers.length - 1 ; i++) {
    numAvg += numbers[i];
 }
 numAvg /= numbers.length;

 console.log(`\nAverage of numbers-array -> ${numAvg}\n`);


 /**
  * Q2. Reverse a given string (word by word)
  * 
  * 'have a great day' -> day great a have
  * 'good morning' -> morning good
  * 'Learn' -> Learn
  * 
  * 
  */
 let str2 = 'have a great day'   // day great a have
 let reverseStr2 = '';
 let str2Words = str2.split(' ');
 for (i = str2Words.length - 1 ; i >= 0 ; i--) {
    reverseStr2 += str2Words[i] + ' ';
 }
 reverseStr2 = reverseStr2.trim();

 console.log(`reverseStr2 -> ${reverseStr2}\n`);   // day great a have
 
 
 /**
  * Q3. Create abbreviation for a sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe every day' -> YNWAED
  * 'good Morning' -> 'GM'
  * 'hello dear, how are you doing?' -> HDHAYD
  */
 let str3 = 'good Morning';
 let abbr = '';
 str3Words = str3.split(' ');
 for (i = 0 ; i <= str3Words.length - 1 ; i++) {
    abbr += str3Words[i].charAt(0).toUpperCase();
 }
 console.log(`abbr -> ${abbr}\n`);