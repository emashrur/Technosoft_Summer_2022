//  Due: Fri (Oct 21)

/*
    name : John Doe
    state : NJ
    age : 20
    gender : M
    paymentMethod : finance
    anyExperience : true
    pastJobs : Yes (3)
        companyName : ABC
        numOfYears : 2
        title : 'DEF'

        companyName : EFG
        numOfYears : 3
        title : 'HIJ'
        
        companyName : KLM
        numOfYears : 4
        title : 'NOP'
    knownSkills : 5 (Java, Manual testing, Js basics, Programming, CS basics)
*/

/*
    name : Eli hen
    state : NY
    age : 22
    gender : F
    paymentMethod : Paid
    anyExperience : false
    pastJobs : No
    knownSkills : 3 (Java, Manual testing, CS basics)
*/

/**
 * Q1. Print the object data as mentioned above.
 */


 let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}




let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

let useStudent = student1_1;

console.log(`\nObject Data :\n`)
 for (prop in useStudent) {
    if (prop !== 'pastJobs' && prop !== 'knownSkills') {
        console.log(`${prop} : ${useStudent[prop]}`);
    } else if (prop === 'pastJobs') {
        // logic for pastJobs
        let pastJobsStatus = ''
        if (useStudent.anyExperience) {
            pastJobsStatus = `Yes (${useStudent[prop].length})`
        } else {
            pastJobsStatus = 'No'
        }
        console.log(`${prop} : ${pastJobsStatus}`);
        for (exp of useStudent[prop]) {
            for (jobProp in exp) {
                console.log(`\t${jobProp} : ${exp[jobProp]}`);
            }
            console.log('\n');
        }
    } else {
        console.log(`${prop} : ${useStudent[prop].length} (${useStudent.knownSkills})`);
    }
}


/**
 * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * 
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * 
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 *  
 */
let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

/**
 * 1.) convert all values to lowercase
 * 2.) is 'baseball' present?
 * 3.) No -> print 'Baseball is not present in the given array'
 * 4.) Yes -> if it is present, is it present more than once
 *          No -> 'Baseball is present only once in the given array'
 *          Yes -> find secondOccurance of "Baseball"
 *                  -> print 'Baseball's second occurance is at index-${secondOccurance}'
 */

 let useArray = favSports_3;

 let thisArray = [];
 useArray.forEach(sport => {
     thisArray.push(sport.toLowerCase());
 })
 let baseballCount = 0;
 for (i = 0 ; i<= thisArray.length - 1 ; i++) {
     if (thisArray[i].localeCompare('baseball') === 0) {
         baseballCount ++
     }
 }
 if (baseballCount === 0) {
     console.log('\nBaseball is not present in the given array\n');
 } else if (baseballCount === 1) {
     console.log('\nBaseball is present only once in the given array\n');
 } else {
     let firstOccurance = thisArray.indexOf('baseball');
     thisArray.splice(firstOccurance, 1, 'blank');
     let secondOccurance = thisArray.indexOf('baseball');
     console.log(`\nBaseball's second occurance is at Index-${secondOccurance}\n`);
 }

/**
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */
let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

let student3_2 = {
    name : 'Eli Hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}
/**
 * student1.pastJobs = [{}, {}, {}]
 * totalExp = 0;
 * 
    [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ]

        obj = {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        }

        obj.numOfYears -> 2
        total = total + obj.numOfYears

        obj = {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        }

        obj.numOfYears -> 3
        total = total + obj.numOfYears

        obj = {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }

        obj.numOfYears -> 4
        total = total + obj.numOfYears

        for (obj of student1.pastJobs) {
            total = total + obj.numOfYears
        }

        if (anyExperience) {
            log(studentName has total X-years of experience)
        } else {
            log(studentName has no past experience)
        }


 * 
 */

let useStudent2 = student3_1;

/**
 * 1.) Does student have past experience?
 * 2.) No -> print : useStudent2.name 
 * 3.) Yes ->
 *        find num of years for each pastJobs -> forEach pastJobs.numOfYears
 */




if (useStudent2.pastJobs.length === 0) {
    console.log(`\n${useStudent2.name} has no past experience\n`)
} else {
    let pastJobsArray = useStudent2.pastJobs;
    console.log(pastJobsArray);
    let totalYearsExperience = 0;
    for (i = 0 ; i <= pastJobsArray.length - 1 ; i++) {
        totalYearsExperience += pastJobsArray[i].numOfYears;
    }
    console.log(`\n${useStudent2.name} has ${totalYearsExperience}-years of experience\n`);
}




