

/**
 * functions syntaxes
 * 
 * 1.) function funcName (input parameters) {
 *      code to perform function
 *      return statement
 *    }
 * 
 * 2.) Arrow Functions
 *    const functionName = (inputParameters) => {
 *      code to perform function
 *      return statement
 *     } 
 * 
 * the syntax above allows functions to be finished in one line exp: 
 * 
 * let addNums = (num1, num2) =>  num1 + num2;
 * 
 *      -> as seen above arrow function method allows you to skip curly braces and return keyword
 *      -> use const instead of let, because functions arent made to be changed
 * 
 * 3.) let func = function (inputParameters) {
 *          code to perform function
 *          return statement
 *     }
 * 
 */

/**
 * alarmClock
 *      purpose -> to ring at certain time
 *      input from user? setTime, snoozeRounds
 *      return ${soundAtSetTime} for (${snoozeRounds} times)
 * 
 * billPay
 *      purpose -> to pay bill
 *      input from user? -> cardNumber, amountDue, billingAddress
 *      output -> confirmation number 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const array1 = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];
const array2 = ['green', 'blue', 'orange', 'red', 'green', 'orange', 'blue', 'red', 'orange', 'yellow', 'red', 'red'];
const array3 = ['Cricket', 'Basketball', 'Football', 'Badminton', 'Tennis'];
const array4 = ["Volvo", "BMW", "Ford", "Mazda"];
const array5 = [
    {
        name: "Saving Account - 1",
        id: 9876
    },
    {
        name: "Saving Account - 2",
        id: 8765
    },
    {
        name: "Saving Account - 3",
        id: 7654
    },
    {
        name: "Saving Account - 4",
        id: 6543
    },
    {
        name: "Saving Account - 5",
        id: 5432
    }
]

const numMultiples = (inputNum) => {
    returnArray = [];
    for (i = 0 ; i <= 20 ; i++) {
        returnArray.push(inputNum * i);
    }
    return returnArray;
}


function addNumsDefault (num1, num2) {
    return num1 + num2;
}


const addNums = (num1, num2) => num1 + num2;


const leastCommonMultiple = (num1, num2) => {
    let resultMultiple = 0;
    for (i = 1 ; i <= num2 ; i ++) {
        let num1Factor = num1 * i;
        if (num1Factor % num2 === 0 && num1Factor > 0) {
            resultMultiple += num1Factor;
            break;
        } 
    }
    let returnArray = [num1, num2, resultMultiple]
    let returnString = `The least common multiple of ${returnArray[0]} and ${returnArray[1]} is ${returnArray[2]}`;
    return returnString;
}

// greatestCommonFactor(40, 50) -> 10
// greatestCommonFactor(72, 90) -> 18

const greatestCommonFactor = (num1, num2) => {
    let resultFactor = 0;
    if (num1 === num2) {
        resultFactor = num1;
        let returnArray = [num1];
        let returnString = `Both numbers provided are equal, ${num1}'s greatest factor is itself -> ${num1}`;
        return returnString;
    } else if (num1 < num2) {
        for (i = num1 ; i >= 0 ; i--) {
            if (num1 % i === 0 && num2 % i === 0) {
                resultFactor = i;
                break;
            } else {
                resultFactor = 1;
            }
        }
    } else if (num2 < num1) {
        for (i = num2 ; i >= 0 ; i--) {
            if (num2 % i === 0 && num1 % i === 0) {
                resultFactor = i;
                break;
            } else {
                resultFactor = 1;
            }
        }
    }
    let returnArray = [num1, num2, resultFactor];
    let returnString = `The greatest common factor of ${returnArray[0]} and ${returnArray[1]} is ${returnArray[2]}`;
    return returnString;
}

const extractLargestString = (inputArray) => {
    let longestWordLength = inputArray[0].length;
    let largestStrings = [];
    for (i = 0 ; i <= inputArray.length - 1 ; i++) {
        let tempLength = inputArray[i].length;
        if (longestWordLength < tempLength) {
            longestWordLength = tempLength;
        }
    }
    for (i = 0 ; i <= inputArray.length - 1 ; i++) {
        if (inputArray[i].length === longestWordLength && !largestStrings.find(string => string === inputArray[i])) {
            largestStrings.push(inputArray[i]);
        }
    }
    return largestStrings;
}




console.log('\n');

console.log(numMultiples(10)); // [0,   9,  18,  27,  36,  45,  54, 63,  72,  81,  90,  99, 108, 117, 126, 135, 144, 153, 162, 171, 180]

console.log('\n');

console.log(addNums('Ka', 'mila')); // 30

console.log('\n');

console.log(leastCommonMultiple(9, 14)); // The least common multiple of 9 and 14 is 0

console.log('\n');

console.log(greatestCommonFactor(143, 110));

console.log('\n');

console.log(extractLargestString(array5));

console.log('\n');


