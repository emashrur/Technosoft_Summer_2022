class Class1 {
    myName1 = 'Class1';

    showMyName1 = () => {
        console.log(`My name is ${this.myName1}`);
    }
    myMethod = () => {console.log('MyMethod from Class1')};
}

module.exports = Class1;