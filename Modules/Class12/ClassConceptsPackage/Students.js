const Members = require('./MembersClass');
const MyStringFunctions = require('./MyStringFunctions');

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


class Students extends Members {
    static #idValue = 0;
    static #allStudentObjects = [];
    #student = {
        sID : 0,
        sGrade : '',
        courseDetails : {
            sCourseName : '',
            sCoursePrice : 0,
            sCourseLength : 0
        },
        sBalance : 0
    }
    constructor (studentName, studentAge, studentCountry, studentCourse) {
        super();
        const msf = new MyStringFunctions();
        // if (studentAge < 16) {
        //     console.log('Student must be 16 or above to enroll');
        // } else if ()
        // this.#isCourseNameValid(studentCourse);
        if (studentAge >= 16 && this.#isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0) 
        {
            const courseData = this.#isCourseNameValid(studentCourse);
            this.member.mName = msf.toTitleCase(studentName);
            this.member.mAge = studentAge;
            this.member.mLocation = studentCountry.toUpperCase();
            this.#student.courseDetails.sCourseName = courseData.courseName;
            this.#student.courseDetails.sCoursePrice = courseData.price;
            this.#student.courseDetails.sCourseLength = courseData.length;
            this.#student.sBalance = courseData.price;
            this.#student.sID = ++Students.#idValue;
            Students.#allStudentObjects.push(this.#student);
            console.log(`\nThank you for enrolling.\nYour id value is ${this.#student.sID}\n`);
        } else {
            throw 'Invalid data provided';
        }
    }

showMyDetails() {
    console.log(`\nStudent Details :\nId : ${this.#student.sID}`)
    super.showMyDetails();
    console.log(`Course Name : ${this.#student.courseDetails.sCourseName}\nBalance : ${this.#student.sBalance}\n`);
}

#isCourseNameValid(checkForCourse) {
    return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
}

static messageFromClass2022(msg) {
    console.log(`Message to institute from the Class of 2022\n${msg}`);
}

changeCourse(newCourseName) {
    if (this.#isCourseNameValid(newCourseName) && newCourseName.toLowerCase().localeCompare(this.#student.courseDetails.sCourseName.toLowerCase()) !== 0) {
        const courseData = this.#isCourseNameValid(newCourseName);
        this.#student.courseDetails.sCourseName = courseData.courseName;
        this.#student.courseDetails.sCourseLength = courseData.length;
        this.#student.courseDetails.sCoursePrice = courseData.price;
        this.#student.sBalance = courseData.price;
    } else if (!this.#isCourseNameValid(newCourseName)) {
        console.log('Incalid course name');
    } else if (newCourseName.toLowerCase().localeCompare(this.#student.courseDetails.sCourseName.toLowerCase()) === 0) {
        console.log('You are already enrolled in the course');
    }
/**
 * if new course is valid and student is not already taking the course
 *      then change the studentCourse name
 *      update the course-length as per the new course length
 *      update the course-price as per the new course price
 *      update the student-balance as per the new course price
 * 
 * if newCourse is invalid print 
 *      -> Invalid course name
 * 
 * if student is already enrolled in the course then print 
 *      -> You are already enrolled in the course
 */
}

makePayment(amount) {
    if (amount > 0 && amount <= this.#student.sBalance) {
        this.#student.sBalance -= amount;
        console.log(`Thank you for making your payment of ${amount}, your new balance is $${this.#student.sBalance}`);
    } else {
        console.log('Invalid amount');
    }
/**
 * if amount is > 0 and <= balance
 *      print -> Thank you for making your payment of $amount
 *      and update the student balance 
 *      -> studentBalance = studentBalance - $amount
 *      -> studentBalance -= $amount
 */
}

showAllStudents() {
    console.log(Students.#allStudentObjects);
}

}

module.exports = Students;