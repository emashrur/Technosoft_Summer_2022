



const reverseArray =  (sampleArray) => {
    let returnArray = [];
    for (i = sampleArray.length-1 ; i >= 0 ; i--) {
        returnArray.push(sampleArray[i]); 
    }
    return returnArray; 
}

let inputArray = ['hello', 'laughs', 'live', 'peace', 'hope'];

console.log('\n')

console.log(reverseArray(inputArray));

console.log('\n')


const largestString = (sampleArray) => {
    let strLength = 0
    for (i = 0 ; i <= sampleArray.length - 1 ; i++) {
        if (sampleArray[i].length > strLength) {
            strLength = sampleArray[i].length
        }
    }
}