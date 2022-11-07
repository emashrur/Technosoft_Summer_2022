let thisCountry1 = new Object();

thisCountry1 = {
    name : 'Bangladesh',
    population : 0,
    capital : 'Dhaka',
    continent : 'Asia',
    neighbors : ['India', 'Pakistan'],
    celebrities : ['Sharukh Khan', 'Preeti Zinta', 'Mashrur Elahi', 'Madhuri Dixit', 'Salman Khan', 'Amir Khan']
}

console.log(thisCountry1);

console.log('\nfor-in on thisCountry1\n');

for (let prop in thisCountry1) {
    console.log(prop);
    console.log(typeof prop);

    console.log(`thisCountry1.prop -> ${thisCountry1.prop}`); // false
    console.log(`thisCountry[prop] -> ${thisCountry1[prop]}`);
    console.log(`typeof thisCountry[prop] -> ${typeof thisCountry1[prop]}\n`);

}

thisCountry1.planet = 'Earth';

console.log(thisCountry1);

thisCountry1['country code'] = 203229754;

console.log(thisCountry1);

thisCountry1[2022] = 'year';

console.log(thisCountry1);

thisCountry1.population += thisCountry1.celebrities.length;

console.log(thisCountry1);

delete thisCountry1[2022];

console.log(thisCountry1);

console.log(thisCountry1[2022]);

/**
 * To verify if a data is exactly present as one of the attributes:
 * in operator -> if given data is exactly present as one of the attributes {operator returns true}
 * otherwise {operatir returns false}
 */

const mashrur_AsAttr = 'continent' in thisCountry1;
console.log(mashrur_AsAttr);







