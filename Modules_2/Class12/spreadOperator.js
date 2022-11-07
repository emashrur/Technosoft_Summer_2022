/**
 * spread operator:
 * (...)
 * 
 * to clone or merge arrays or objects
 * 
 */

let planets = ['Earth', 'Mercury', 'Saturn', 'Jupiter', 'Pluto', 'Mars'];
let fruits = ['apple', 'banana', 'ny', 'cherry'];
let states = ['ny','banana', 'tx', 'ca', 'nc'];

// create new array with values from states-array and fruits-array

let combinedArray1 = [...states, ...fruits];

console.log('\n')

console.log(combinedArray1); 

console.log('\n')

let fruitsClone = [...fruits];
console.log(`fruits-Array -> ${fruits}\nfruitsClone-Array -> ${fruitsClone}`);

console.log('\nSpreadOperator with Objects\n')

let myWifey1 = {
    wName : 'Kamila',
    wGender : 'F',
    5 : 'digitProp',
    wAge : 24,
    wHeight : "4'11",
    wState : 'Missouri',
    'wRacial wEthnicity' : 'South-Asian'
}

let myWifey2 = {
    ...myWifey1
}

console.log(`\nmyWifey1`);
console.log(myWifey1);
console.log(`\nmyWifey2`);
console.log(myWifey2);

let student1 = {
    sEmail : 'klavellee@gmail.com',
    sMajor : 'Accounting',
    sJobs : ['Pharmacy Technician', 'Baker/Barista', 'Accounting Internship'],
    sGPA : 4.0,
    sGradeAvg : 100,
    sDiploma : 'Bachelors'
}

let mergedKami = {
    ...student1,
    ...myWifey1,
    sisters : ['Rayna', 'Mendy', 'Christie'],
    boyFs : ['Chicago BoyF', 'NewJersey BoyF', 'NewYork BoyF', 'Texas BoyF']
}

console.log('\n\nmergedKamiObject');
console.log(mergedKami);




   



