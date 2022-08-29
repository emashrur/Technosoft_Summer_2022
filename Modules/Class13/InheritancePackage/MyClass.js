const { messageFromClass2022 } = require('../../Class12/ClassConceptsPackage/Students');
const Class1 = require('./Class1');
const Class2 = require('./Class2');
const Class3 = require('./Class3');

const c1 = new Class1(); // c1 has access to myName1 variable, and showMyName1() function.

const c2 = new Class2(); // c2 has access to myName2 variable, and showMyName2() function

c2.showMyName2();

c2.myMethod();

const c3 = new Class3(); 