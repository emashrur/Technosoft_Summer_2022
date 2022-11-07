let array1 = ['Mashrur', 'Kamila', 'Raeesah', 'Mohammed', 'Dewan'];


console.log(array1[2].substring(0,3) + array1[1].substr(1));



let sampleSentence = 'Yo whAt it Do KamIla pOoo misS u lUv u'; // 'Ma', 'shrur', 'Kamila';

let resultSplit = sampleSentence.split('x');
let resultSplit2 = sampleSentence.split(' ');

 console.log(resultSplit2);


/**
 * string -> 'h',  
 * join() -> takes strings combines into bigger string
 * split('x') -> splits a string at 'x'
 * 
 * 
 */

 let greatestCommonFactor = (num1, num2) => {
    let resultFactor = 0;
    if (num1 === num2) {
        resultFactor += num1;
    } else if (num1 < num2) {
        for (i = num1 ; i >= 0 ; i--) {
            if (num2 % i === 0) {
                resultFactor += i;
            } else {
                resultFactor += 1;
            }
            break;
        }
    } else if (num2 > num1) {
        for (i = num2 ; i >= 0 ; i--) {
            if (num1 % i === 0) {
                resultFactor += i;
            } else {
                resultFactor += 1;
            }
            break;
        }
    }
    let returnArray = [num1, num2, resultFactor];
    let returnString = `The greatest common factor of ${returnArray[0]} and ${returnArray[1]} is ${returnArray[2]}`;
    return returnString;
}

console.log(greatestCommonFactor(40,50));







