/**
 * Array -> can store one or more values at the same time 
 * 
 * [] -> represents array 
 * 
 */
let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Saturn'];

let morgages = [1.1, 2.1, 4.2, 5.6, 2.45, 7.1];

let students = [
    {
        studentName : 'Deepak',
        studentLocation : 'NJ'
    },
    {
        studentName : 'Harry',
        studentLocation : 'NY'
    },
    {
        studentName : 'King',
        studentLocation : 'NJ'
    },
    {
        studentName : 'Queen',
        studentLocation : 'TX'
    }
]

let numOfPlanets = planets.length;
console.log(`Number of planets in planets-array -> ${numOfPlanets}\n`);

let totalStudents = students.length;
console.log(`Number of students in students-array -> ${totalStudents}\n`);

let planetAt2 = planets[2];
console.log(`Planet at index 2 of planets-array -> ${planetAt2}\n`);

let favStudent = students[2];
console.log(favStudent);

console.log(`\nplanets ->${planets}`);

planets[1] = 'Man Made plaNEt';

console.log(`\nplanets ->${planets}`);

