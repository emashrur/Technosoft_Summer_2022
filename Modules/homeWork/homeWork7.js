/**
 * 
 * Due date: Aug-01 2022
 * 
 * 
 * StudentTeacherSoftware
 * 
 * Implement below functions for Student
 *      changeCourse
 *      makePayment
 *      
 * Implement below functions for Teacher
 *      hiring
 *      showMyDetails
 *      changeTeachingCourse
 *      addGrade
 *      removeGrade
 * 
 * Task for extra points:
 *      make member-object in Members class as Private
 *      and, make relevant changes in the code.
 * 
 * hint: create a function in Members-class and use it in Students/Teachers class
 */

class StudentTeacherFunctions {
    // STUDENT FUNCTIONS : 
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
 }

makePayment(amount) {
    if (amount > 0 && amount <= this.#student.sBalance) {
        this.#student.sBalance -= amount;
        console.log(`Thank you for making your payment of ${amount}, your new balance is $${this.#student.sBalance}`);
    } else {
        console.log('Invalid amount');
    }
 }

// TEACHER FUNCTIONS : 

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


}



