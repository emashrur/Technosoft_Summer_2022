/**
 * Restaurant - CALL THE FUNCTION PAGE 
 * 
 *  CLASS: RESTAURANT (PARENT)
 *      register
 *          //user will provide name of restaurant, address, maxCapacity, employees
 *          //On successful registration, every restaurant will be given a unique id
 *          //user should not re-register
       permanentlyClose
 *          user should be able to permanently close restaurant  --> "private?/ terminate"
 *          if permanently deleted:
 *              user should not be able to perform any action(open/close/clean/showDetails etc) for restaurant unless re-register it
    CLASS: ACTIONS IN THE RESTAURANT 
 *      open
 *          user should open restaurant
 *          user should not be able to open restaurant if already open --> (send a message: "restuaraunt is already open")
 *      close
 *          user should close restaurant --> include(the amount of guests served and total guest now is zero)
 *          user should not be able to close restaurant if already close --> (send a message:  "restuaraunt is already closed")
 *      clean
 *          user should able to use clean-method to clean restaurant --> (send a message: "the cleaning of restuaraunt is succesfully done ")
 *      
 *  CLASS: EMPLOYMENT+GUESTS 
        showTotalEmployees --> the number of the employees
 *      addEmployee
 *      removeEmployee
 *      addGuest -->  maxGuest-total and availableGuest-remaining seats out of the total/ how many guests are coming it will indicate how many available after guests are added (ex: if i have 50 capacity, then on addGuest=4, total available capacity is now 46 )
 *      removeGuest --> 
    CLASS: RESTUARANT INFORMATION / 
 *      showRestaurantDetails
 *          name:
 *          restaurant-id:
 *          address:
 *          total guests sitting as of now --> total number of people currently in the restuarant
 *          total guests served as of now --> total served so far since ALL day (greater than maxCapacity since its not all once)
 *      showAllRestaurantDetails --> (Object?)
 *          Total number of restaurants:
 *          show below details of every restaurant
 *              name:
 *              restaurant-id:
 *              address:
 *              total guests served as of now: --> day by day 
 
 * 
 * House
 * 
 * CLASS HOUSE
 *      register
 *          user will provide name of location, maxMembers --> where is the location, how mnay members can fit in the house
 *          On successful registration, every house will be given a unique id
 *          user should not re-register
  CLASS ACTION
 *      unlock
 *          user should unlock house
 *          user should not be able to unlock house if already unlocked
 *      lock
 *          user should lock house
 *          user should not be able to lock house if already locked
 *      clean
 *          user should able to use clean-method to clean house
 *      demolished
 *          user should be able to demolish a house --> permanently remove 
 *          if demolished:
 *              user should not be able to perform any action(unlock/lock/ addMember/showTotalMembers/clean/showDetails etc) for restaurant unless re-register it
  CLASS ADDD/REMOVE
 *      showTotalMembers --> one statment of how many members
 *      addMember --> increase the max memebers
 *      removeMember
 *      showHouseDetails
 *          house-id:
 *          address:
 *          total members:
 CLASS INFORMATION
 *      showAllHouseDetails
 *          Total number of houses: 
 *          show below details of every house
 *              house-id:
 *              address:
 *              total members;
 Due Date: Aug 10 2022  
 
 */

 /** Example: 
  * 
  * r1.open()
  * r1.addGuests(1)
  * r1.removeGuest(2)
  * r1.addGuests(2)
  * 
  * r1.showResturantDetails()-->4(served),3(sitting)
  * r1.close()
  * r1.showRestaurantDetails()-->0,0 because its closed-starts something new
  */

 /**
  * 
  * static totalGuest= []
  * delete function,
  * if the value is present, then perform the functions and if the value is not present, then it wont perform the functions 
  * 
  */