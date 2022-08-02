/**
 * get soya milk if its not expired within 7 days
 *      buy 2 soya milk 
 *      and buy 1 bread
 * otherwise check for almond milk 
 *      buy 1 almond milk
 * otherwise check for regular milk that isnt expiring in 3 days
 *      buy 1 regular milk 
 * otherwise
 *      call home
 */

/**
 * isSoyaMilkPresent && isSoyaMilkExpiration > 7 -> (if true)
 *      buy 2 soya milk packets 
 *      buy 1 bread 
 * -> the first conditions boolean value determines whether or not to check for following conditions
 * isSoyaMilkPresent && isSoyaMilkExpiration > 7 -> (if false)
 *      isAlmondMilkPresent -> (if true)
 *          buy 1 almond milk 
 *      isAlmondMilkPresent -> (if false)
 *          isRegularMilkPresent && isRegularMilkExpiration > 3 (if true)
 *              buy 1 regular milk
 *          isRegularMilkPresent && isRegularMilkExpiration > 3 (if false)
 *              call home
 *                  -> not condition (scenario if all else = false)
 */

/**
 * check for soya milk and if it is not expiring within 7 days
 *      buy 2 soya milk
 *      and buy 1 bread
 * check time to see if it is passed 12
 *      say good afternoon
 * 
 * ifSoyaMilkPresent && isSoyaMilkExpiration > 7 (if true)
 *      buy 2 soyamilk
 *      and buy 1 bread
 * presentTime >= 12
 *      say good afternoon
 * -> second condition is not contingent on result of first condition boolean value
 */
/**
 * Conditional Code Blocks (conditional loop)
 *  1.) if-else block
 *  2.) switch block
 *  
 * when we have different actions to do (code to execute) depending upon conditions(s)
 * 
 */

/**
 * Syntax for if-block:
 * 
 * if (condition(s)) {
 *      if-block
 *      code
 *      }
 */

 if (2 === 2){
    console.log('\nHello World');
    }
    
    let countryName = 'UniTEd StaTEs Of AMeriCa';
    // if countryName is United States of America, print the countryName in uppercase.
    isCountryNameUSA = countryName.toLowerCase().includes('united states of america');
    if (isCountryNameUSA === true){
        console.log(`\n${countryName.toUpperCase()}\n`)
    } else {
        console.log('\nYou are not USA citizen');
    }
    
    /**
     * Deepaks method:
     * let countryName = 'United states of america';
     * let countryNameLowerCase = countryName.toLowerCase();
     * let toExpectedCountryName = 'United states of america'.toLowerCase();
     * if (countryNameLowerCase.localCompare(toExpectedCountryName) === 0) {
     * console.log(countryName.toUpperCase);
     * }
     */
    
    // if country name is not united states of america, print 'You are not USA citizen'
    /**
     * for situations like this we use the else block:
     * if (condition(s)) {
     *      if block
     *      code will execute if condition(s) result is true
     * } else {
     *      else block 
     *      code will execute if condition(s) result is false
     * }
     */
    
    /**
     * mon, thur and there is not meeting
     *      work from home
     * other weekdays or if there is meeting mon,thur
     *      work from office
     * weekends
     *      enjoy
     *
     */
    
    
     var dayName = 'thu';
     var isMeeting = false; // or false
    
     if ((dayName === 'mon' || dayName === 'thu') && !isMeeting) {
        console.log('I can work from home today');
     } else if ((dayName === 'tue' || dayName === 'wed' || dayName === 'fri') || ((dayName === 'mon' || dayName === 'thu') && isMeeting)) {
        console.log('I have to go to the office today');
     } else if (dayName === 'sun' || dayName === 'sat') {
        console.log('I can enjoy myself');
     } else {
        console.log('Incorrect/Invalid dayName');
     }
    
    
    
     let sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
    
    // if 'Swimming' is not mentioned as one of the sports, add to the array
    // if it is present, print the index of 'Swimming'
    
    // console.log(sports.toString().toLowerCase().split(',').includes('swimming'));
    
    if (sports.toString().toLowerCase().split(',').includes('swimming') === false) {
        sports.push('Swimming');
        console.log(sports);
    } else {
        console.log(sports.indexOf('Swimming'));
    }
    
    /**
     * switch-blocks
     * 1.) all conditions are related to only 
     * 2.) all conditions are comparing equals
     * 3.) for every block we must have only one condition
     * 
     * Syntax : 
     * switch (num) {
     *    different cases 
     *    -> case 2: 
     *       case-block 
     *       code here will execute if num === 2
     *       break;   // defines as last line for the case block 
     *    -> case 5: 
     *       case-block 
     *       code here will execute if num === 5
     *       break;   // defines as last line for the case block 
     *    -> default
     *       code here will execute if num does not match any of the above cases.
     * }
     */
    
    let num = 10;
    switch (num) {
       case 2 : 
          console.log('num is 2');
          break;
       case 5 :
          console.log('num is 5');
          break;
       case 10 :
          console.log('num is 10');
          break;
       case 15 :
          console.log('num is 15');
          break;
       case 20 :
          console.log('num is 20');
          break;
       default :
          console.log(`num is ${num}`);
          break;
    }
    
    /**
     * do your own code on your maching then send as direct message to DEEPAK
     * if name is happy, print "good name"
     * if name is joy, print the name and it's length, and print "your name is too short"
     * if name is john, print name in uppercase
     * if name is not from above list, print "you have a different name from what we expected"
     */
    
    let name = 'john'
    let nameToLowerCase = name.toLowerCase()
    if (nameToLowerCase.localeCompare('happy') === 0) {
       console.log('\ngood name');
    }
    else if (nameToLowerCase.localeCompare('jean') === 0) {
       console.log('\ngangsta');
       console.log(nameToLowerCase.length);
       console.log('your **** is too large');
    }
    else if (nameToLowerCase.localeCompare('john') === 0) {
       console.log(nameToLowerCase.toUpperCase());
    }
    else {
       console.log('you have a different name from what we expected');
    }
    
    switch (nameToLowerCase) {
       case 'happy' :
          console.log('\ngood name');
          break;
       case 'jean' :
          console.log('\ngangsta');
          console.log(nameToLowerCase.length);
          console.log('your **** is too large');
          break;
       case 'john' :
          console.log(nameToLowerCase.toUpperCase());
          break;
       default :
          console.log('you have a different name from what we expected');
    }
    
    /*
        day
        if day is Mon, monday -> print ("Today is the Technosoft class")
        if day is tue -> print ("Today is self learning day")
        if day is Wed -> print ("Today is the Technosoft class")    
        if day is Thu -> print ("Today is self learning day")
        if day is Fri -> print ("Today is the Technosoft class")
        if day is Sat -> print ("Today is lab session day")
        if day is sun -> print ("No study today")
        Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
        
        User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY
     */
    console.log('\n\n\n')
    console.log('\nUsing if-else block\n');
    
    let dayName1 = 'tueSdAy'
    let dayNameToLowerCase = dayName1.substring(0,3).toLowerCase()
    
    if (dayNameToLowerCase.localeCompare('mon') === 0 || dayNameToLowerCase.localeCompare('wed') === 0 || dayNameToLowerCase.localeCompare('fri') === 0) {
       console.log('Today is the Technosoft class');
    } else if (dayNameToLowerCase.localeCompare('tue') === 0 || dayNameToLowerCase.localeCompare('thu') === 0) {
       console.log('Today is self learning day');
    } else if (dayNameToLowerCase.localeCompare('sat') === 0) {
       console.log('Today is lab session day');
    } else if (dayNameToLowerCase.localeCompare('sun') === 0) {
       console.log('No study today');
    } else {
       console.log('Entered day-value is not valid');
    }
    
    console.log('\nUsing switch-block\n');
    
    switch (dayNameToLowerCase) {
       case 'mon' :
          console.log('Today is the Technosoft class');
          break;
       case 'wed' :
          console.log('Today is the Technosoft class');
          break;
       case 'fri' :
          console.log('Today is the Technosoft class');
          break;
       case 'tue' :
          console.log('Today is self learning day');
          break;
       case 'thu' :
          console.log('Today is self learning day');
          break;
       case 'sat' :
          console.log('Today is lab session day');
          break;
       case 'sun' :
          console.log('No study today');
          break;
       default :
          console.log('Entered day-value is not valid')
          break;
    }
    
    console.log('\n\n');
    