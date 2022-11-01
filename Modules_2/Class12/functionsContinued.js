// input -> ['hello', 'laugh', 'live', 'king', 'queen'] reverse this array

function reverseArray(inputArray) {
    let returnArray = [];
    inputArray.forEach (function (sport) {
        returnArray.unshift(sport);
    })
    return returnArray
}
sampleArray = ['hello', 'laugh', 'live', 'king', 'queen'];

let reversedSampleArray = reverseArray(sampleArray);
console.log(reversedSampleArray);
