// TitleCaseFunction

const toTitleCase = (sentence) => {
    let converted = '';
    const sentenceWords = sentence.toLowerCase().split(' ');
    for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
        converted += sentenceWords[i].substring(0,1).toUpperCase() + sentenceWords[i].substring(1) + " ";
    }
    return converted.trim();
}


// Q1


const removeNumFromArray = (inputArray , num) => {
    for (i = 0 ; i <= inputArray.length-1 ; i++) {
        if (inputArray[i] === num) {
            inputArray.splice(i,1)
        }
    }
    return inputArray;
}

 console.log('\n')
 console.log(removeNumFromArray([21, 32, 12, 43, 45, 65, 12], 12));
 console.log('\n')

 
 // Q2
 
 let allStudentData_3 = [
    {
        id: 1,
        name: 'haRrY',
    },
    {
        id: 2,
        name: 'KiNG koNG',
    },
    {
        id: 3,
        name: 'laNa geRe',
    },
    {
        id: 4,
        name: 'cHaSe LAN',
    },
    {
        id: 5,
        name: 'mAYa paSha',
    }
]



console.log(allStudentData_3)



const titleCaseAllStudentNames = (allStudentData) => {
    for (i=0 ; i<= allStudentData.length-1 ; i++) {
        allStudentData[i].name = toTitleCase(allStudentData[i].name);
    }
}

 titleCaseAllStudentNames(allStudentData_3);

 console.log(allStudentData_3);

 console.log('\n');

 //Q3

 const updateFirstName = (sId, newFirstName, studentRecords) => {
    let thisStudent = studentRecords.find(student => student.id === sId);
    if (!thisStudent) {
        console.log('Invalid student id provided.');
    } else {
        let sName = thisStudent.name.split(' ');
        if (newFirstName.toLowerCase().localeCompare(sName[0].toLowerCase()) === 0) {
            console.log(`Provided new firstName is same as of in the records, full name in the records: "${thisStudent.name}"`);
        } else {
            thisStudent.name = toTitleCase(newFirstName) + ' ' + sName[1];
            console.log(`Your name is updated successfully, new full name in the records: "${thisStudent.name}"`);
        }
    }
 }

 updateFirstName(2, 'Kamila', allStudentData_3);

 console.log('\n');



 

 