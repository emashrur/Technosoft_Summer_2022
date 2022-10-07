/**
 * create variable to store names
 */

let myName = 'Happy Peace';
console.log(`myName = ${myName}`); // myName = Happy Peace

myName = 'Laugh Often';
console.log(`myName = ${myName}`); // myName = Laugh Often

// store planets names
let planet1 = 'Earth';
let planet2 = 'Venus';
let planet3 = 'Mercury';
let planet4 = 'Jupiter';
/**
 * Array -> can store one or more values at the same time
 */
 let planets = ['Earth', 'Venus', 'Mercury', 'Jupiter', 'Saturn']; // 5 values stored in 1 variable (array)
 console.log(`typeof planets -> ${typeof planets}`); // typeof planets -> object

 /**
  * Object : hold key value pairs
  * 'Deepak Sharma', 'NJ', 20, 'M', 'Finance'
  * let student1 = {
  *     name : 'Deepak Sharma',
  *     state : 'NJ',
  *     age : 20,
  *     gender : 'M',
  *     paymentMethod : 'Finance'
  * }
  */

  let student1 = {
     name : 'Deepak Sharma',
     state : 'NJ',
     age : 20,
     gender : 'M',
     paymentMethod : 'Finance',
     anyExperience : true,
     knownSkills : ['Java', 'Manual Testing', 'JS Basics', 'Programming', 'CS Basics']
 }