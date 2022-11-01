/**
 * Due date: Oct 16 eod
 */


/**
 * Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */
 const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 let sportsStringUpperCase = sports.join().toUpperCase();
 sportsUpperCase = sportsStringUpperCase.split(',');
 if (sportsUpperCase.indexOf('BASKETBALL') === 2) {
    console.log('\n\n"BASKETBALL" is present at index-2\n\n');
 } else if (sportsUpperCase.indexOf('BASKETBALL') !== -1) {
    console.log('\n\n"BASKETBALL" is metioned in the sports array\n\n');
 } else {
    sports.splice(2,1,'BASKETBALL');
    console.log(`\n\nSports index-2 value -> ${sports[2]}\n\n`);
 }
 

/**
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

 let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 planets.indexOf('Earth') === 0 ? console.log(planets) : planets.unshift('Earth') && console.log(planets);

/**
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */

 console.log('\n\n');

 let studentScore = 90;
 const maxScore = 100;
 
 if (studentScore <= 100 && studentScore >= 91) {
     console.log('A');
 } else if (studentScore <= 90 && studentScore >= 81) {
     console.log('B');
 } else if (studentScore <= 80 && studentScore >= 71) {
     console.log('C');
 } else if (studentScore <= 70 && studentScore >= 61) {
     console.log('D');
 } else if (studentScore <= 60 && studentScore >= 51) {
     console.log('E');
 } else if (studentScore <51 && studentScore >= 0) {
     console.log('F');
 } else {
     console.log('Invalid student score');
 }

console.log('\n');

/**
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */

let myNumber = 15;
if (myNumber % 5 === 0 && myNumber % 3 === 0) {
    console.log('divisible by 5 and 3');
} else if (myNumber % 5 === 0) {
    console.log('divisible by 5');
} else if (myNumber % 3 === 0) {
    console.log('divisible by 3');
} else {
    console.log(`myNumber -> ${myNumber}`);
}

console.log('\n')