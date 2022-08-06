/**
 * object -> represented by {}
 * 
 * values are stored in key-value pairs 
 *  where key is also known as 'property' or 'attribute'
 * syntax :
 * let objName = {}
 * or
 * let objName = new Object();
 * 
 * keys have to be unique in an object, and datatype is a string
 * keys can be digit, string (with/without) spaces
 * when you print an entire object:
 *      keys which are digits will be printed first and in sorted order 
 *      string keys will be printed as they are metioned in the object
 */

let myObj = {
    myName : 'Happy Peace',
    11: true,
    state : 'New York',
    5 : 'five',
    age : 20
}

console.log(myObj);

console.log('\nUsing for-in for objects:\n');

for (let prop in myObj) {
    console.log(prop);
    console.log(typeof prop);

    console.log(myObj[prop]);
    console.log(typeof myObj[prop]);
}

console.log('\nUsing for-in for objects with prop value:\n');

for (let prop in myObj) {
    console.log(`${prop} -> ${myObj[prop]}`);
}

console.log('\nUsing for-in on myObj to only print myName-attribute\n');

for (let prop in myObj) {
    if (prop.localeCompare('myName') === 0) {
        console.log(prop);
        console.log(myObj[prop]);
    }
}

console.log('\nUsing for-in to find first attribute in an object\n');

let i = 0;
for (let prop in myObj) {
    console.log(prop);
    i++;
    if (i === 1) {
        break;
    }
}

/**
 * to add key-values in the object
 */
myObj.gender = 'M';

console.log('\nprinting myObj\n')

console.log(myObj);

myObj[2] = 'two';

// when spaces and numbers are present it is important to use brackets and not the dot operator.

myObj['ssn number'] = 1111;

myObj.isGraduate = true;

myObj['is Citizen'] = false; // when adding attribute/property using brackets, include string quotes.

let sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby']

myObj.sports = sports;

console.log('\nprinting myObj\n')

console.log(myObj);

/**
 * if key is a digit or space-string, to access the corresponding value, 
 * must use [].
 * 
 * 
 * to delete an attribute from an object use 
 * delete operator
 * 
 * operator will delete the attribute (if exists),
 *  and returns 'true'
 *  -> will also return 'true' even if attribute/property does not exist in the object.
 */

// delete is Citizen attribute and its value:

delete myObj['is Citizen'];

console.log('\nPrinting myObj\n');
console.log(myObj);

// delete "BASKETBALL" from sports array in object:

sports.splice(2,1);

console.log('\nPrinting myObj\n');
console.log(myObj);

//if attribute doesnt exist in the object, and you try to get its value:
// object returns 'undefined'.

/**
 * to verify if an attribute is present in an object or not :
 * operator -> in
 * 
 * if the mentioned attribute is exactly present, operator returns 'true'.
 */

console.log(`\nIs "abcd" present as on the attributes in myObj? -> ${"abcd" in myObj}\n`);
const isMyNamePresent = 'myName' in myObj;
console.log(`\nIs "myName present as on the attributes in myObj -> ${isMyNamePresent}`);    


