let myString = 'Hello World';
for (const letter in myString) {
    console.log(myString.charAt(letter));
}

console.log('\n');


let student1 = {
    name : 'Deepak Sharma',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

for (const attr in student1) {
    console.log(attr);
    console.log(student1[attr]);
}


console.log('\n\n');

let favSports = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

// find first occurance of 'baseball'
for (i = 0 ; i <= favSports.length - 1 ; i++) {
    if (favSports[i].toLowerCase().localeCompare('baseball') === 0) {
        console.log(`\nFirst index where "baseball" is present -> Index-${i}\n`)
        break;
    }
}




