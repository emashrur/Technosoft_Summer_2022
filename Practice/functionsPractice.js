/*
Create a function to return reverse a given array (without using reverse-function from array-class)
	example:
		input -> [hello, laugh, live, peaceful, hopeful]
		ans -> [hopeful, peaceful, live, laugh, hello]

		input -> [hello, laugh, live, king, queen]
		ans -> [queen, king, live, laugh, hello]


Create a function to return the largest string(s) from a given string array.
	example:
		input -> [hello, laugh, live, peaceful, hopeful]
		ans -> peaceful

		input -> [hello, laugh, live, king, queen]
		ans -> hello, laugh, queen


Create a function to return color name(s) appearing maximum number of times in given string array
	example:
		input -> [green, blue, red, green, orange, blue, red, yellow, red, red]
		ans -> red

		input -> [green, blue, red, green, orange, blue, red, yellow, red, red, blue, orange, blue]
		ans -> blue, red

		input -> []
		ans -> 


Create a function to return minimum value in the given numbers-array
	example:
		input -> [12, 34, 25, 7, 4, 67, 19]
		ans -> 4

		input -> [34, 54, 12, -8, 0, 45]
		ans -> -8

		input -> [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]
		ans -> 10
*/

/*
Create a function to return reverse a given array (without using reverse-function from array-class)
	example:
		input -> [hello, laugh, live, peaceful, hopeful]
		ans -> [hopeful, peaceful, live, laugh, hello]

		input -> [hello, laugh, live, king, queen]
		ans -> [queen, king, live, laugh, hello]

    
        input = [hello, laugh, live, peaceful, hopeful]

        ans = []

        ans[0] = input[lastIndex-0]
        ans[1] = input[lastIndex-1]
        ans[2] = input[lastIndex-2]
        ans[3] = input[lastIndex-3]
        ... 
        ... 
        ans[lastIndex] = input[lastIndex-lastIndex]


        ans[i] = input[lastIndex-i]     // i=0,1,2,3,...,lastIndex      i++     i<=lastIndex

        1. purpose = reverseArray

        2. need any input? - yes (1) - inputArray

        3. should we return back to user? - yes
            return the reversed array
        
*/
function reverseArray(inputArray) {
    let ansArray = [];

    for (let i=0 ; i <= inputArray.length-1 ; i++) {
        ansArray[i] = input[inputArray.length-1-i];
    }

    return ansArray;

}

let input = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];
console.log(reverseArray(input));

let ans = reverseArray(input);

/*
    Create a function to return the largest string(s) from a given string array.
	example:
		input -> [hello, laugh, live, peaceful, hopeful]
		ans -> peaceful

		input -> [hello, laugh, live, king, queen]
		ans -> hello, laugh, queen
    
        longestWordLength = 0;

        --> [hello, laughs, live, peaceful, hopeful]
        ans = []

        longestWordLength = length-index-0-value // 5

        in-loop (start from index-1)
            pick index-1-value
            if (longestWordLength < length-index-1-value)
                longestWordLength = length-index-1-value

            pick index-2-value
            if (longestWordLength < length-index-2-value)
                longestWordLength = length-index-2-value

            pick index-3-value
            if (longestWordLength < length-index-3-value)
                longestWordLength = length-index-3-value
            ... 
            ... 
            pick index-lastIndex-value
            if (longestWordLength < length-index-lastIndex-value)
                longestWordLength = length-index-lastIndex-value


        in-loop (2)
            pick index-0-value
            if (length-index-0-value === longestWordLength) {
                add index-0-value in ansArray
            }

            pick index-1-value
            if (length-index-1-value === longestWordLength) {
                add index-1-value in ansArray
            }
            ... 
            ...
            pick index-last-value
            if (length-index-last-value === longestWordLength) {
                add index-last-value in ansArray
            }

*/

let inputArray = ['hello', 'laughs', 'live', 'peace', 'hope'];


function getLongestWordsInArray(inputArray) {
    let longestWordLength = inputArray[0].length;
    let longestWords = [];

    for (let i=1 ; i <= inputArray.length-1 ; i++) {
        let tempLength = inputArray[i].length;
        if (longestWordLength < tempLength) {
            longestWordLength = tempLength;
        }
    }

    for (let word of inputArray) {
        if (word.length === longestWordLength) {
            longestWords.push(word);
        }
    }

    return longestWords;
}

// finding only one value
function largStr (input) {
    let result = ''
    for (let i = 0; i < input.length; i++) {
        let currentString = input[i]
        if (currentString.length > result.length) {
            result = input[i];
        }
    }
    return result
}

console.log(largStr(inputArray));
console.log(getLongestWordsInArray(inputArray));


/**
Question-1:
    Create a function to return the account object in given accountData-array and given account-id

    example-1:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 8765


        If input is accountData and accountId, return:
            {
                name: "Saving Account - 2",
                id: 8765
            }

    example-2:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 1234


        If input is accountData and accountId, return:
            {}
*/


/**
Question-2:
    Create a function to return the string(s) which contain 'A' (ignoring cases) from a given string array.
        example:
            input -> [hello, laugh, live, peaceful, hopeful]
            ans -> laugh, peaceful

            input -> [hello, laugh, live, king, queen]
            ans -> laugh

            input -> [live, king, queen]
            ans -> 
*/



/**
Question-3:
    Note: Palindrome is when String is same when written backwards.
    eg: level <-> level
    eg: eye <-> eye

    Create a function to find if given string is palindrome (ignore cases).
*/



















































