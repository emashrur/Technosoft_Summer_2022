const Students = require('./Students')
class Members {
    
    member = {
        mName : '',
        mAge : 0,
        mLocation : ''
    }

    newStudent() {
        this.member.mName = studentName;
        this.member.mAge = studentAge;
        this.member.mLocation = studentCountry;
    }

    newTeacher() {
        this.member.mName = studentName;
        this.member.mAge = studentAge;
        this.member.mLocation = teacherCountry;
    }

    showMyDetails() {
        console.log(`Name : ${this.member.mName}\nAge : ${this.member.mAge}\nLocation : ${this.member.mLocation}`);
    }

    submitDocuments() {

    }

    orderBooks() {

    }
}

module.exports = Members;