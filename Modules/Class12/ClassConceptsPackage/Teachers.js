const Members = require("./MembersClass");
const MyStringFunctions = require('./MyStringFunctions');
const { allStudentObjects } = require("./Students");
const Students = require('./Students');

const courseDetails = [
    {
        courseName : 'Automation',
        price : 1000,
        length : 6
    },
    {
        courseName : 'QA',
        price : 2000,
        length : 8
    },
    {
        courseName : 'Mobile',
        price : 3000,
        length : 12
    }
]

class Teachers extends Members {

    static idValue = 0;

    teacher = {
        tID : 0,
        tCourseName : '',
        tSalary : 0
    }

    constructor (teacherName, teacherAge, teacherCountry, teacherCourseName) {
        super();
        const msf = new MyStringFunctions();
        const courseData = this.isCourseNameValid(teacherCourseName);
        if(teacherAge >= 21 && teacherCountry.toLowerCase().localeCompare('usa') === 0 && this.isCourseNameValid(teacherCourseName)) { 
            this.member.mName = msf.toTitleCase(teacherName);
            this.member.mAge = teacherAge;
            this.member.mLocation = teacherCountry.toUpperCase();
            this.teacher.tCourseName = teacherCourseName;
            this.teacher.tID = ++Teachers.idValue;
            console.log(`\nThank you for applying.\nYour id value is ${this.teacher.tID}\n`);
        } else {
            console.log('\nCOULD NOT APPLY\n');
        }
    }

    /**
     * teacher age >=21
     * teacherCourse = automation || qa || mobile
     * 
     */

    showMyDetails() {
        console.log(`Teacher Details :\nTeacherID : ${this.teacher.tID}`);
        super.showMyDetails();
        console.log(`Course Name : ${this.teacher.tCourseName}\n`);
    }

    changeTeachingCourse(newTeacherCourse) {
        const msf = new MyStringFunctions();
        if (this.isCourseNameValid(newTeacherCourse) && newTeacherCourse.toLowerCase().localeCompare(this.teacher.tCourseName.toLowerCase()) !== 0) {
            this.teacher.tCourseName = msf.toTitleCase(newTeacherCourse);
            console.log('\nYou have sucessfully change your teaching course\n')
        } else if (!this.isCourseNameValid(newTeacherCourse)) {
            console.log('\nInvalid course name\n');
        } else if (newTeacherCourse.toLowerCase().localeCompare(this.teacher.tCourseName.toLowerCase()) === 0) {
            console.log('\nYou are already teaching this course\n');
        }
    }

    submitDocuments() {

    }

    orderBooks() {

    }

    addGrade(studentID,grade) {
        const sObject = Students.getStudentObject(studentID);
        if (sObject) {
            if (sObject.sGrade) {
                sObject.sGrade = grade.toUpperCase();
            } else {
                console.log('Student has a grade already');
            }
        } else {
            console.log('Invalid student ID');
        }
        /**
         * input : student ID , grade
         * if student ID is valid and studendGrade is empty, only then can the teacher add the grade
         * update student.sGrade = grade
         * always store grade in uppercase()
         * if studentGrade !== '', then print 'Remove grade from the student'
         * if student ID is invalid then print 'Invalid student ID'
         */
    }

    removeGrade() {
        /**
         * removeGrade
         * input : studentID
         * if student ID is valid and student grade !== ''
         *      update student.sGrade = '' -> print 'Grade successfully removed from student ID student ID -> '' '
         * if student ID is invalid then print -> invalid studentID
         */
    }

    isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }








}

module.exports = Teachers;