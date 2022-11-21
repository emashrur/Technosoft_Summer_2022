const Students = require("./Students");
const Helper = require("./Helper");
const Faculties = require("./Faculties");


const s1 = new Students(20, 'qA', 'deePAk', 's1@test.com', 'United States of America');
s1.getProfile('S101');


const s2 = new Students(22, 'pm', 'sTudent tWO', 's2@test.com', 'CANada');
s2.getProfile('S102');


const s3 = new Students(18, 'Qa', 'StudeNT tHReE', 's3@test.com', 'TeXas');
s3.getProfile('S103');

s1.changeAddress('S101', 'EUROPE');
s1.getProfile('S101');

s1.makePayment('S101', 200);
s1.getProfile('S101');

s2.makePayment('S102', 400);
s2.changeAddress('S102', 'hong kOnG');
s2.getProfile('S102');

s2.changeName('S102', 'maShRur eLaHi');
s2.getProfile('S102');
s2.changeName('S102', 'mashrur elahi')

s2.changeCourse('S102', 'qa');
s2.getProfile('S102');

const f1 = new Faculties(27, 'pm', 'alEx rOdriGuez', 'f1@test.com', 'cAnAda', 'JavaScript');
f1.getProfile('f101');

f1.changeAddress('f101', 'BeLgIum');
f1.getProfile('f101');

f1.changeCourse('f101', 'qa');



