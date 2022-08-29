const Class1 = require('./Class1');

class Class2 extends Class1 {
    myName2 = 'Class2';

    showMyName2 = () => {
        console.log(`My name is ${this.myName2}`);
    }
    myMethod = () => {
        this.showMyName2()
        this.showMyName1()
    }
}


module.exports = Class2;