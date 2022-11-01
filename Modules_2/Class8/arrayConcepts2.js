/**
 * Array -> can store one or more values at the same time 
 * 
 * [] represents Array
 * 
 * 
 */

let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Saturn'];

let mortgages = [1.1, 2.1, 4.2, 5.6, 2.45, 7.1];

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

/**
 * Basic Array Functions
 * length (property)
 * 
 */

let numOfPLanets = planets.length;
console.log(`\nNumber of planets in planets-array -> ${numOfPLanets}`);

let numOfStudents = students.length;
console.log(`\nNumber of students in students-array -> ${numOfStudents}`);

/**
 * to access value at any index 
 * 
 * -> we can use []
 * 
 * 
 * 
 */

let planetName_2 = planets[2];
console.log(`\nPlanet at index 2 is going to be ${planetName_2}\n`);

let favStudent = students[2];
console.log(favStudent);

planets[1] = 'Man Made plaNEt'; 

console.log(`\nplanets -> ${planets}\n`);

console.log(students);
// assign new value at index-3 in students array

