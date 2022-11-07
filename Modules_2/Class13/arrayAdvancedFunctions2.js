/**
 * Advanced Array Functions:
 * findIndex()
 * 
 * 
 */

/**
 * To find the value at :
 * function : findIndex()
 * syntax : sampleArray.findIndex(var => varCondition)
 *      -> finds the first value in 'var' that passes 'varCondition'
 *      -> does not change value of sampleArray
 *      -> returns first index at which 'var' passes 'varCondition' passes, if no index passes condiition, returns -1
 */

console.log('\nfindIndex Function:');

let fruits = ['apple', 'banana', 'cherry'];

// find the first value in array which has length greater than 5

let firstFruitNameGrTh5 = fruits.findIndex(name => name.length > 5);

console.log(`First index at which fruit-name length is greater than 5 -> ${firstFruitNameGrTh5}\n`);



let accountData = [
    {
        label: "Saving Account - 1",
        name : 'Grant',
        id: 9876
    },
    {
        label: "Saving Account - 2",
        name : 'Grant',
        id: 8765
    },
    {
        label: "Saving Account - 3",
        name : 'Andrew',
        id: 7654
    },
    {
        label: "Saving Account - 4",
        name : 'Chloe',
        id: 6543
    },
    {
        label: "Saving Account - 5",
        name : 'Arnold',
        id: 5432
    }
]

console.log('Using findIndex() function to print account name with id = 6543 :')

let indexOfId6543 = accountData.findIndex(account => account.id === 6543);
console.log(`index of account with id 6543 -> ${indexOfId6543}`);
console.log(`Name of account under id 6543 -> ${accountData[indexOfId6543].name}\n`);

/**
 * To find the first value which satisfy given conditions :
 * function : find()
 * syntax : sampleArray.find(var => varCondition)
 * 
 */

console.log('Using find() function to print account name with iD = 6543');
let id6543 = accountData.find(account => account.id ===6543);
console.log(`Name of account under id 6543 -> ${id6543.name}\n`);

/**
 * To execute a function on every array element to produce a single value
 * function : reduce()
 * syntax : sampleArray.reduce((varAt[0], varAt[1]) => varAt[0] [operator/action] varAt[1])
 * 
 */

 console.log('Using reduce() function to find the sum of an array of numbers');
 let numbers = [5, 11, 3, 8, 10, 84, 29];
 let sumOfNumbers = numbers.reduce((sum, num) => sum + num);
 /**
  * sum = 5
  * num = 11
  *     sum = 16
  * 
  * sum = 16
  * num = 3
  *     sum = 19
  * 
  * sum = 19
  * num = 8
  *     sum = 27
  */
 console.log(sumOfNumbers);

 const avgOfNums = (numbers) => {
    let arrayTotal = numbers.reduce((total, num) => total + num);
    return arrayTotal/numbers.length;
 }
console.log(avgOfNums(numbers));

let str1 = 'There are two main types of random number generators: pseudo-random and true random';
let arrayOfWords = str1.split(' ');

let str1Clone = arrayOfWords.reduce((total, word) => total.concat(' ').concat(word));

console.log(str1Clone);
 
 


 










