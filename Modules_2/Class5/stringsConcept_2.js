let myCity = 'neW yORk CIty, neW YoRk';

console.log(`\nmyCity -> ${myCity}`);

console.log(`\ntypeOf myCity -> ${typeof myCity}`);

/**
 * To find if the string starts with exact given pattern:
 * use function -> startsWith()
 * 
 * input 1: 
 *      string
 * return type : boolean
 * 
 * let abc = 'hello dear how are you';
 * let def = 'hello d'
 * does abc start with def? -> true 
 */

let myCityStartsWith_He = myCity.startsWith('He');
console.log(`does my city start with 'He' -> ${myCityStartsWith_He}`);

let myCityStartsWith_hello_de = myCity.startsWith('hello de');
console.log(`does my city start with 'hello de' -> ${myCityStartsWith_hello_de}`);

let myCityStartsWith_new_yORK = myCity.startsWith('new yORK');
console.log(`does my city start with 'new yORK' -> ${myCityStartsWith_new_yORK}`);

let myCityStartsWith_neW = myCity.startsWith('neW');
console.log(`does my city start with 'neW' -> ${myCityStartsWith_neW}`);

/**
 * To find if the string ends with exact given pattern:
 * use function -> endsWith()
 * 
 * input 1: 
 *      string
 * return type : boolean
 * 
 * let abc = 'hello dear how are you ?';
 * let def = 'hello d'
 * 
 * ends with 'you'? -> false
 * ends with 'are you' -> false
 * does abc ends with def -> false 
 * ends with 'u ?' -> true
 */

let myCityEndsWith_YoRk = myCity.endsWith('YoRk');
console.log(`does myCity ends with 'YoRk'? -> ${myCityEndsWith_YoRk}`);

let myCityEndsWith_new_YorK = myCity.endsWith('new YorK');
console.log(`does myCity ends with 'new YorK? -> ${myCityEndsWith_new_YorK}`);

/**
 * to find if a given pattern is present exactly in a string :
 * use function -> includes 
 * input: 1
 *      string 
 * return type:
 * 
 * if the given pattern is exactly present in the string 
 *      function returns true
 * otherwise
 *      function returns false
 * 
 * new york city
 * does the above string include 'ne' -> true 
 */

let myCityIncludes_rk_ci = myCity.includes('rk ci');
console.log(`does 'rk ci' present in the string? -> ${myCityIncludes_rk_ci}`);

let fullName = '';
let fullNameLowerCase = fullName.toLowerCase();
let varNum = fullNameLowerCase.length > 14 && fullNameLowerCase.includes('els') ? 23 : 32;