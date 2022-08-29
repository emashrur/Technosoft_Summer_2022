const { allRestaurantObjects } = require('./Restaurant_Parent');
const Restaurants = require('./Restaurant_Parent');
// const Customers = require('./Restaurant_Customers'); 
// const Employment = require('./Restaurant_Employment'); 
// const Actions = require('./Restaurant_Action'); 

// CREATING RESTAURANT OBJECTS (PASSED -WITHOUT THE RE-REGISTER CONDITION)
const r1 = new Restaurants("Mcdonalds","usA", 500, 10);
const r2 = new Restaurants("FarmVille","uSA", 400, 15); 
const r3 = new Restaurants("Burger King","usA",350, 5);
const r4 = new Restaurants("FarmHouse","UK", 450, 15); 
const r5 = new Restaurants("Mcdonalds","usA",30, 5);

//SHOWING ALL RESTAURANT DETAILS (PASSED)
// r1.showRestaurantDetails();
// r2.showRestaurantDetails();
// r3.showRestaurantDetails();
// r4.showRestaurantDetails();
// r5.showRestaurantDetails();

// TO TEST IF THE OBJECTS WERE STORED IN THE ARRAY
// let total = allRestaurantObjects;
// console.log(total); 

// let arrayLength = allRestaurantObjects.length
// console.log(arrayLength); 


/**  TESTING TO CLOSE PERMANENTLY (FAILED)
 r1.topermanentlyClose("Mcdonalds", 4); 
 r1.showRestaurantDetails(); */

 /** TO TEST THE ADD/REMOVE CUSTOMERS  */
// const c_r1 = new Customers;
// console.log(c_r1.addCustomer(1,2)); 











/**  TO CHECK IF THE VALIDILITY FUNCTION IS WORKING OUTSIDE THE RESTAURANT CLASS
// function isRestaurantValid(checkforValidity){
// if (allRestaurantObjects.find(res=>res.rName.toLowerCase().localeCompare(checkforValidity.toLowerCase() === 0))){
//     return ("You cannot re-register")}
// }
// console.log(isRestaurantValid("Mcdonalds")); <-- this works
*/


/**USING EVERY ()
// let result= this.allRestaurantObjects?.every(isRestaurantValid)
// function isRestaurantValid(checkforValidity){
//     if(this.allRestaurantObjects.rName.toLowerCase().localeCompare(checkforValidity.toLowerCase() === 0)){
//     return ("You cannot re-register")}
// }
// console.log(isRestaurantValid("Mcdonalds")); 
 */