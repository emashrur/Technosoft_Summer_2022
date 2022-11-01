// Due date: Oct-13 (Thu) eod

/**
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * 
 */
 let countryName = 'Japan';
 // countryName.length;  <-- not allowed
//  let countryNameArray = countryName.split('');
//  console.log(countryNameArray);
 let lastIndex = countryName.lastIndexOf('');
 console.log(`\n\nLength of countryName, ${countryName} -> ${lastIndex}\n\n`);
 
 /**
  * Q2: find the number of words in the given sentence2
  */
 const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let sentence2Array = sentence2.split(' ');
 let numWordsSen2 = sentence2Array.length;
 console.log(`Number of words in sentence2 -> ${numWordsSen2}\n\n`);
 
 /**
  * Q3: Create abbreviation for a 4-word sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe' -> YNWA
  */
 const sentence3 = 'you Never waLK ALONe';
 let abbr = '';
 // code
 let sentence3Uppercase = sentence3.toUpperCase()
 let sentence3Array = sentence3Uppercase.split(' ');
 abbr += sentence3Array[0].charAt(0);
 abbr += sentence3Array[1].charAt(0);
 abbr += sentence3Array[2].charAt(0);
 abbr += sentence3Array[3].charAt(0);
 console.log(`abbr -> ${abbr}\n\n`);     // abbr -> YNWA
 
 /**
  * Q4: Convert the string value in to Titlecase
  * 
  * 'you live Only once' -> You Live Only Once
  * 'you Never waLK ALONe' -> You Never Walk Alone
  * 'have a GrEAT daY' -> 'Have A Great Day'
  */
 const sentence4 = 'have a GrEAT daY';
 let sentence4_Titlecase = '';
 // code
 let sentence4LowerCase = sentence4.toLowerCase();
 let sentence4Words = sentence4LowerCase.split(' ');
 sentence4_Titlecase += sentence4Words[0].charAt(0).toUpperCase() + sentence4Words[0].slice(1) + ' ';
 sentence4_Titlecase += sentence4Words[1].charAt(0).toUpperCase() + sentence4Words[1].slice(1) + ' ';
 sentence4_Titlecase += sentence4Words[2].charAt(0).toUpperCase() + sentence4Words[2].slice(1) + ' ';
 sentence4_Titlecase += sentence4Words[3].charAt(0).toUpperCase() + sentence4Words[3].slice(1) + ' ';
 sentence4_Titlecase = sentence4_Titlecase.trim();
 console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}\n\n`)  // sentence4_Titlecase -> Have A Great Day
 

 for (i=0 ; i<= allStudentData.length-1 ; i++) {
    if (allStudentData[i].includes(' ')) {
    let firstNameTitleCased = '';
    let lastNameTitleCased = '';
    let sName = allStudentData[i].name.split(' ');
    firstNameTitleCased += sName[0].charAt(0).toUpperCase();
    firstNameTitleCased += sName[0].substring(1).toLowerCase();
    lastNameTitleCased += sName[1].charAt(0).toUpperCase();
    lastNameTitleCased += sName[1].substring(1).toLowerCase()
    allStudentData[i].name = firstNameTitleCased + ' ' + lastNameTitleCased;
} else {
    
}
}