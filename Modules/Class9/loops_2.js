const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

/**
 *  verify basketball is present in the sports array. (ignore cases)
 * 
 * if we dont ignore cases : 
 *      sports.includes('Basketball')
 * 
 * pick index 0 value
 *      verify index-0-value equals 'Basketball', ignoring cases
 *      convert index-0-value to lowercase
 *      if (index-0-value in lowercase === 'basketball')
 *          print 'Basketball is present in the array'
 *          stop for-loop (keyword -> break;)
 * 
 *  * pick index 1 value
 *      verify index-1-value equals 'Basketball', ignoring cases
 *      convert index-1-value to lowercase
 *      if (index-1-value in lowercase === 'basketball')
 *          print 'Basketball is present in the array'
 *          stop for-loop (keyword -> break;)
 */

let basketballLowerCase = 'Basketball'.toLowerCase();
for (i = 0 ; i <= sports.length-1 ; i++) {
    sportsInLowerCase = sports[i].toLowerCase()
    if (sportsInLowerCase.localeCompare(basketballLowerCase) === 0) {
        console.log('Basketball is present in the array');
        break;
    }
}
/**
 * i = 0
 * sports[i] = 'Football'
 * sportInLowerCase = 'Football'
 * if ('football' localeCompare ('basketball') === 0) {
 *     console.log('Basketball is present in the array');
 *     break;
 * }
 */

/**
 * for-of
 *  works only with arrays and strings
 * 
 * for (let sName of arrayName) {
 *      
 * }
 */

 const favSports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

 for (let sName of favSports) {
    console.log(sName);
 };

 console.log('\nprint arrayValues from even-index\n')

 for (let sName of favSports) {
    if (favSports.indexOf(sName) % 2 === 0) {
        console.log(sName);
    }
 };

 /**
  * for-in 
  *     works with an object
  *     
  * syntax: 
  * for (const varName in objectName) {
  *     
  * }
  * 
  *     for 1st iteration of for-in loop , varname will be the first attribute/property in the object
  *     for 2nd iteration of for-in loop , varname will be the second attribute/property in the object
  *     for 3rd iteration of for-in loop , varname will be the third attribute/property in the object
  *     for last iteration of for-in loop , varname will be the last attribute/property in the object
  *     
  */

 console.log('\nUsing for-in with object\n');
 let myObj = {
    myName : 'Mashrur Elahi',
    myAge : 24,
    myState : 'New York',
    pastJobs : {
        current : 'Kenkeleba House',
        past1 : 'Hotel Alexander',
        past2 : 'P.A.L.A.N.T.E. Harlem'
    },
    siblingNames : ['Raeesah', 'Zarun', 'Zameer', 'Zafina']
 };

 for (const prop in myObj) {
    console.log(`${prop} -- ${myObj[prop]}`);
 }

 /**
  * forEach
  * --> works with arrays and functions
  * 
  * 
  * arrayName.forEach (function (varName)) {
  *     code in forEach loop
  * }
  * 
  * picks index-0-value stores in a variable...
  */

 favSports.forEach (function (sport) {
    console.log(sport);
 })


