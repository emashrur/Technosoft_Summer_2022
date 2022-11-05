// Due date -> Oct 23 eod

/**
 * Q1. Create a function to generate abbreviation for a sentence
 * 
 * Return the final result
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */

let sampleSentence = 'Yo whAt it Do KamIla pOoo misS u lUv u';

let abbrSentence = (sampleStr) => {
    let abbrSentence = '';
    let arrayVessel = sampleStr.split(' ');
    for (i = 0 ; i <= arrayVessel.length-1 ; i++) {
        abbrSentence += arrayVessel[i].charAt(0).toUpperCase();
    }
    return abbrSentence;
}


console.log(`\nAbbreviation of the sentence "${sampleSentence}" -> "${abbrSentence(sampleSentence)}"\n`);



/**
 * Q2. Create a function to reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */



let reverseString = (sampleStr) => {
    let reversedString = '';
    let arrayVessel = sampleStr.split(' ');
    for (i = arrayVessel.length - 1 ; i >= 0 ; i--) {
        reversedString += arrayVessel[i] + ' ';
    }
    let returnString = reversedString.trim()
    return returnString;
}

console.log(`\nReversed version of the sentence "${sampleSentence}" -> "${reverseString(sampleSentence)}"\n`);


/**
 * 1. what is the purpose of the function?
 *      reverse string word by word (reverseWordString , reverseStringByWord)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? 1 (string)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> Yes
 *      If Yes,
 *          what is the datatype of returned value -> string (reversedString)
 */

 //  DEEPAKS ANSWER :
 function reverseStringByWord (userInput) {
    let resultString = '';

    const arr2 = userInput.split(' ');
    for (let i=arr2.length-1 ; i >= 0 ; i--) { 
        resultString = resultString + arr2[i] + ' ';
    }
    return resultString.trim();
}


/**
 * Q3. Create a function to convert the string value in to Titlecase
 * 
 * 
 * 
 * Return the final result
 * 
 * 
 * K...amila
 * 
 * 1.) first letter capital
 * 2.) place rest of the word
 * 
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 * 
 */

 let toTitleCase = (inputString) => {
    let returnString = ''; 
    let arrayVessel = inputString.toLowerCase().split(' ');
    for (i = 0 ; i <= arrayVessel.length - 1 ; i++) {
         returnString += arrayVessel[i].charAt(0).toUpperCase();
         returnString += arrayVessel[i].substring(1) + ' ';
    }
    returnString = returnString.trim();
    return returnString;
 }

 console.log(`\nTitlecased version of the sentence "${sampleSentence}" -> "${toTitleCase(sampleSentence)}"\n`);

