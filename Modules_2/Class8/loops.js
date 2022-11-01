// Print all value but last-index one (using for-of)
let sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];
console.log('\n\nPrint all value but last-index one (using for-of)\n\n');
let index = 0;
for (let sName of sports) {
    if (index != sports.length-1) {
        console.log(sName);
    }
    index++;
}

// Print all value but NOT 'Ping pong'
let string1 = 'ping pong'
for (let sName of sports) {
    if (sName.toLowerCase().localeCompare(string1) !== 0) {
        console.log(sName);
    }
}

let favSports = ['Baseball', 'Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

// find the index of First occurrence of 'BaseBall' (ignoring cases)
// let string2 = 'baseball';
// console.log('\n\n');
// favSports.forEach(function (sportsName) {
//     if (sportsName.toLowerCase().localeCompare(string2) === 0) {
//         console.log(favSports.indexOf(sportsName))
//         break;
//     }
// })
// forEach functions do not allow 'break' function

