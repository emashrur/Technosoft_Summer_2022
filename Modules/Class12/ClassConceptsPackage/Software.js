const Students = require('./Students');
const Teachers = require('./Teachers');


try {
    const s1 = new Students('john', 24, 'USA', 'mobile');
    s1.showMyDetails();
    const s2 = new Students('Gigi', 20, 'USA', 'mobile');

    s2.showMyDetails();

    Students.messageFromClass2022('Thank You');

    const s3 = new Students('kiaN', 21, 'uSa', 'mobile');

    s3.showMyDetails();

    s3.showMyDetails();

    const t1 = new Teachers('deWan', 48, 'uSa', 'qa'); 

    t1.showMyDetails();

    t1.changeTeachingCourse('mobile');

    t1.showMyDetails();

    Students.showAllStudents();



} catch(e) {
    console.log('Please enter valid data');
} finally {
    console.log('Thank you for considering our institution');
}


































// class Students {
    //     student = {
    //         sName : '',
    //         sAge : 0,
    //         sCountry : '',
    //         sId : 0,
    //         sGrade : '',
    //         courseDetails : {
    //             sCourseName : '',
    //             sCoursePrice : 0,
    //             sCourseLength : 0,
    //         },
    //         sBalance : 0
    //     }

    