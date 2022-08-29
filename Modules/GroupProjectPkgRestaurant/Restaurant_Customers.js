const Restaurants = require("./Restaurant_Parent");





class Customers extends Restaurants {

    addCustomer (idRestaurant, totalGuests) {
        const rObject = Restaurants.allRestaurantObjects(idRestaurant);
        if (rObject) {
            if (totalGuests < this.restaurantObj.maxCapacity) {
                Restaurants.totalGuests = Restaurants.totalGuests + totalGuests;
                console.log (`Total number of guest ${Restaurants.totalGuests}`);
            } else {
                console.log ('Max Capacity Reached');
            }
        } else {
            console.log ('Invalid data entered');
        }
    }


    removeCustomer (idRestaurant, totalGuests) {
        const rObject = Restaurants.allRestaurantObjects(idRestaurant);
        if (rObject) {
            if (totalGuests <= this.restaurantObj.maxCapacity) {
                Restaurants.totalGuests = Restaurants.totalGuests - totalGuests; 
                console.log (`Total number of guests removed ${totalGuests}`);
            } else {
                console.log ('Max Capacity Reached');
            }
        } else {
            console.log ('Invalid data entered');
        }
    }
}

module.exports = Customers;