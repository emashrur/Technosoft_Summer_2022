const helpingFunctions = require("./helpingPipeFunctions");



class Restaurants {
    static allRestaurantObjects =[];
    static #idValue = 0;
    static totalGuests = 0; 
    restaurantObj = {
    rName:  '',
    rCountry: '',
    maxCapacity: 0,
    rEmployees: 0,
    idRestaurant: 0
    }
    
    
    constructor(restaurantName, restaurantCountry, restaurantCapacity, restaurantEmployees){
    if (restaurantCountry.toLowerCase().localeCompare('usa') === 0) {   //&& this.isRestaurantValid(restaurantName)
        this.restaurantObj.rName = helpingFunctions.toTitleCase(restaurantName);
        this.restaurantObj.rCountry = restaurantCountry.toUpperCase();
        this.restaurantObj.maxCapacity = restaurantCapacity;
        this.restaurantObj.rEmployees = restaurantEmployees
        this.restaurantObj.idRestaurant = ++Restaurants.#idValue;
        Restaurants.allRestaurantObjects.push(this.restaurantObj); 
        console.log(`\nThank You For Registering!\n Your id value is ${this.restaurantObj.idRestaurant}\n`)
    } else {
        console.log("Sorry, You Cannot Create A New Restaurant Or Re-Register") // 
    
    }
    
}

    isRestaurantValid(checkforValidity){
    return allRestaurantObjects.find(res=>res.restaurantName.toLowerCase().localeCompare(checkforValidity.toLowerCase() === 0) );
}


    topermanentlyClose(idRes,nameRes){
       if(this.restaurantObj.find(res => res.rName.toLowerCase().localeCompare(nameRes.toLowerCase() === 0)) &&
       this.restaurantObj.find(res => res.idRestaurant.toLowerCase().localeCompare(idRes.toLowerCase() === 0))) {
       this.restaurantObj.idRestaurant = 0 
       console.log("You Have Successfully Deleted Your Restaurant!");
       } else {
            console.log("This is Invalid Information!");
       }


}


showRestaurantDetails = () => {
    console.log(`Restaurant details:\nRestaurant Name: ${this.restaurantObj.rName}\nRestaurant Id: ${this.restaurantObj.idRestaurant}\nRestaurant Address: ${this.restaurantObj.rCountry}\n`);
}

showAllRestaurantDetails = () => {
    console.log(`All Restaurant Details:\nTotal Number of Restaurants: ${Restaurants.allRestaurantObjects.length}`);
    for (let i = 0 ; i <= Restaurants.allRestaurantObjects.length - 1 ; i++) {
        console.log(Restaurants.allRestaurantObjects[i]);
    }
}

}

module.exports = Restaurants;