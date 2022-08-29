// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

function titleCaseSentence(sampleString) {
    let titleCaseAbbr = ''
    let strWords = sampleString.toLowerCase().split(' ')
    for (let i = 0 ; i <= strWords.length-1 ; i++) {
        titleCaseAbbr += strWords[i].charAt(0).toUpperCase();
        titleCaseAbbr += strWords[i].substring(1,strWords[i].length).concat(' ');
    }
    return titleCaseAbbr.trim();
}

let mySentence = 'wow that chicken is really tall';

console.log('\nQuestion 1:\n');
console.log(`mySentence -> ${mySentence}`);
console.log(`mySentence after titleCaseSentence function -> ${titleCaseSentence(mySentence)}\n`);

/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

function reverseString(sampleString) {
    let reversedString = '';
    let arrayString = sampleString.split(' ');
    arrayString.reverse();
    for (i = 0 ; i <= arrayString.length - 1 ; i++) {
        reversedString += arrayString[i] + ' ';
    }
    return reversedString.trim();
}

console.log('\nQuestion 2:\n');
console.log(`mySentence -> ${mySentence}`);
console.log(`mySentence after reverseString function -> ${reverseString(mySentence)}`);

/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

function arrayTotal(sampleArray) {
    let sum1 = 0;
    sampleArray.forEach(function (value) {
        sum1 += value;
    })
    return sum1;
};

let numArray = [4, 32, 78, 38, 14, 153.21567894];

console.log('\nQuestion 3:\n');
console.log(`Array numbers -> ${numArray}`);
console.log(`Total of numbers in array using arrayTotal function -> ${arrayTotal(numArray)}`);


/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 function arrayAverage(sampleArray) {
    let total = 0;
    sampleArray.forEach(function (num) {
        total += num;
    })
    return total/sampleArray.length;
};

console.log('\nQuestion 4:\n');
console.log(`Array numbers -> ${numArray}`);
console.log(`Average of numbers in array using arrayAverage function -> ${arrayAverage(numArray)}`);
