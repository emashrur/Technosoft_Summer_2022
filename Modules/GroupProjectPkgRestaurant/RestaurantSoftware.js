const { allRestaurantObjects } = require('./RestaurantParent');
const Restaurants = require('./RestaurantParent');

const r1 = new Restaurants("Mcdonalds","usA", 500, 10);
const r2 = new Restaurants("FarmVille","uSA", 400, 15); 
// const r3 = new Restaurants('Mcdonalds', 'usA', 500, 10);
r1.showRestaurantDetails()

// let total = allRestaurantObjects[1]
// console.log(total); 


let stotal = allRestaurantObjects.length
console.log(stotal);

r2.showAllRestaurantDetails()

console.log(allRestaurantObjects);




// Restaurants.showAllRestaurantDetails();
