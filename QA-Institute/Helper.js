

class Helper {
    static toTitleCase(inputString) {
        let returnString = ''; 
        let arrayVessel = inputString.toLowerCase().split(' ');
        for (let i = 0 ; i <= arrayVessel.length - 1 ; i++) {
             returnString += arrayVessel[i].charAt(0).toUpperCase();
             returnString += arrayVessel[i].substring(1) + ' ';
        }
        returnString = returnString.trim();
        return returnString;
     }

}

module.exports = Helper;

let inputString = 'EUROPE';
let returnString = '';
console.log(inputString);
let arrayVessel = inputString.toLowerCase().split(' ');
console.log(arrayVessel);
for (let i = 0 ; i <= arrayVessel.length - 1 ; i++) {
    returnString += arrayVessel[i].charAt(0).toUpperCase();
    returnString += arrayVessel[i].substring(1) + ' ';
}
console.log(returnString);
