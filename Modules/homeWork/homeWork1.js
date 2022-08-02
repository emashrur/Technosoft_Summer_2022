/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = 84;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equal to ${cTemp1}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let kTemp1 = (fTemp1 + 459.67) * 5/9;
console.log(`\n${fTemp1}°F is equal to ${kTemp1}K`);

// C -> F
// T(°F) = T(°C) × 9/5 + 32
let cTemp2 = 28;
let fTemp2 = cTemp2 * 9/5 + 32;
console.log(`\n${cTemp2}°C is equal to ${fTemp2}°F`);

// C -> K
// cTemp2 = 28, T(K) = T(°C) + 273.15
let kTemp2 = 28 + 273.15;
console.log(`\n${cTemp2}°C is equal to ${kTemp2}K`);

// K -> F
// T(K) = T(°C) + 273.15
let kTemp3 = 302;
let fTemp3 = 302 + 273.15;
console.log(`\n${kTemp3}K is equal to ${fTemp3}°C`);

// K -> C
// kTemp3 = 302, T(°C) = T(K) - 273.15
let cTemp3 = kTemp3 - 273.15;
console.log(`\n${kTemp3}K is equal to ${cTemp3}°C`);