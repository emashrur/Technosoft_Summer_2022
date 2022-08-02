/**
 * Ternary Operator
 *  use in a situation where one of two value will be assigned to variable depending upon the result of condition(s)
 * 
 * 4.5, 5.5
 * 
 * if credit score > 700, rate will be 4.5 or else it will be 5.5
 * 
 * if credit score > 700 and first time buyer, rate will be 4.5 or else it will be 5.5
 * 
 * if credit score > 700 and first time buyer, rate will be 4.5 or else it will be 5.5
 * 
 * Syntax:
 * varName = condition(s) ? value-whichWillAssignIfConditionResultIsTrue : value-whichWillAssignIfConditionResultIsFalse
 * 
 * if credit score > 700, rate will be 4.5 or else it will be 5.5
 */

 let userCreditScore = 770;
 let mortgageRate = userCreditScore > 700 ? 4.5 : 5.5;
 
 console.log(`Credit Score -> ${userCreditScore}`);
 console.log(`Mortgage Rate -> ${mortgageRate}`);
 
 
 // if credit score > 700 and first time buyer, rate will be 4.5 or else it will be 5.5
 
 let userCreditScore2 = 700;
 let isFirstTimeBuyer = true;
 
 let mortgageRate2 = userCreditScore2 && isFirstTimeBuyer === true ? 4.5 : 5.5;
 console.log(`Credit Score -> ${userCreditScore2}`);
 console.log(`Mortgage Rate -> ${mortgageRate2}`);
 