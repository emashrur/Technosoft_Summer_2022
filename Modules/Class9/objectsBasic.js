/**
 * 'Mashrur'
 * 'USA'
 * '24'
 * 'M'
 * 'paid full'
 */

let myName = '';
let country = '';
let age = 0;
let gender = '';
let paymentPlan = '';

let student1 = {
    myName : 'Mashrur',
    country : {
        current : 'USA',
        born : 'Bangladesh'
    },
    sports : ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'],
    age : 24,
    gender : 'M',
    paymentPlan : 'Paid in full'
} ;

console.log('\nPrint myNewObject ->\n');
console.log(student1);
/**
 * let objectName = {
 *      attribute1 = attribute1Value,
 *      attribute2 = attribute2Value,
 *      attribute3 = attribute3Value
 * }
 */

console.log('\nPrint attributes of student1Object ->\n');
console.log(student1.myName);
console.log(student1.country.born);
console.log(student1.sports[2]);
