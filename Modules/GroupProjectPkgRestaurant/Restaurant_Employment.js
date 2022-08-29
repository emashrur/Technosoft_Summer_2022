const Restaurants = require("./Restaurant_Parent");
const helpingFunctions = require("./helpingPipeFunction");


class Employment {
    static allEmploymentObjects= []; 
    static #idValue = 0;
    employmentObj = {
    eName: '',
    eAge: 0,
    eState:'',
    idEmployment: 0,
    }

constructor(employmentName, employmentAge, employmentState){
    if (employmentState.toLowerCase().localeCompare('new york') === 0 ) { 
        this.employmentObj.eName = helpingFunctions.toTitleCase(employmentName);
        this.employmentObj.eState = employmentCountry.toUpperCase();
        this.employmentObj.rAge = employmentAge
        this.employmentObj.idEmployment = ++Employment.#idValue;
        Employment.allEmploymentObjects.push(this.employmentObj); 
        console.log(`\nThank You For Registering!\n Your id value is ${this.employmentObj.idEmployment}\n`)
    } else {
        console.log("Sorry, You not Register Or Re-Register")
    
    }

    
}



}

module.exports = Employment;