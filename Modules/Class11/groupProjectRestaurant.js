function showRestaurantDetails(restaurantName, idRestaurant, restaurantAddress, currentGuests, totalGuests) {
    
}

//Hi Rezia, for the showRestaurantDetails function, 
//im a little confused because its asking to input the same data that its going to output?
// am i looking at it wrong? what would be the point of the function if we have to input the data we 
//are looking for, maybe the input should just be restaurantID? and 

let siblingNames = ['Deepak', 'Heena', 'Gigi', 'Yuri'];

// write code to convert all values of the array into uppercase.

// siblingNamesUpperCase = [];
// siblingNames.forEach (function (sName) {
//     siblingNamesUpperCase += (sName.toUpperCase().concat(' '));
// });
// siblingNamesUpperCase = siblingNamesUpperCase.trim();

// USE MAP FUNCTION INSTEAD
// console.log(`siblingNamesLowerCase after using forEach -> ${siblingNamesUpperCase}`);

siblingNames = siblingNames.map(sName => sName.toUpperCase());

console.log(siblingNames);

let stringContainsA = userName => userName.includes('A');

let siblingNamesWithA = siblingNames.filter(stringContainsA);

console.log(siblingNamesWithA);


const numbers = [56, 3, -1, 4, 6, 7];

// remove values greater than 5 in the array

let numbrsGr5 = numbers.filter(num => num <= 5);

console.log(numbrsGr5);


// to check if values of an array passes a certain condition use function -> every();

console.log('\nevery() function:\n');
let isAllGr0 = numbers.every(num => num > 0);

console.log(isAllGr0);

// to find which value at which index passes a condition in an array use function -> findIndex();
//      -> returns the first index of an array that passes said condition.

const numbers1 = [5, 6, 3, -1, 4, 6, 7];

// find the first value in the array that passes the condition num > 5

let firstIndexPassesCondition = numbers1.findIndex(num => num > 5);

console.log('\nfind index function');

console.log(firstIndexPassesCondition);
console.log(numbers1);

// find() -> function finds first value which passes certain conditions

console.log('\nfind() function\n');
 let citizens = [
     {ssn:1111, age:12, state:'PA'}, 
     {ssn:2222, age:22, state:'NY'}, 
     {ssn:3333, age:21, state:'NJ'}, 
     {ssn:4444, age:12, state:'CA'}
 ];

 const myCitizen = citizens.find(citizen => citizen.ssn === 3333 || citizen.state === 'NY');

 console.log(myCitizen);


/**
 * reduce function :
 * to execute a function to execute on every array-element to produce a single value 
 *      -> reduce()
 */

 const numbersAgain = [5, 6, 3, -1, 4, 6, 7];

 totalOfNumbersAgain = numbersAgain.reduce((total, num) => total + num);
 console.log(totalOfNumbersAgain);


