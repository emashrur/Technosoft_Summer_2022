const Members = require("./Members");
const Helper = require("./Helper");


const courseData = [
    {
        cName : 'QA',
        cFee : 100
    },
    {
        cName : 'Front End',
        cFee : 200
    },{
        cName : 'Back End',
        cFee : 300
    },{
        cName : 'PM',
        cFee : 400
    }
]


class Faculties extends Members {
    facultyData = {
        fId : 0,
        fSalary : 0,
        fDegree : '',
        fCourseName: ''
    }

    static facultyIdTracker = 100;

    verifyCourseName = (courseName) => {
        return courseData.find(cData => cData.cName.toUpperCase().localeCompare(courseName.toUpperCase()) === 0);
    }

    constructor(age, courseName, name, email, address, degree) {
        super();
        if (age <= 0 || courseName.length === 0 || name.length === 0 || email.length === 0 || address.length === 0) {
            throw 'Incomplete Data';
        } else if (age < 21) {
            throw 'Faculty has to be of age 21 or above';
        } else {
            const cObject = this.verifyCourseName(courseName);
            if (!cObject) {
                console.log(`Please enter a valid course name. Course entered is "${courseName}"`);
                throw 'Invalid courseName';
            } else {
                this.memberData.mAge = age;
                this.facultyData.fCourseName = cObject.cName;
                this.memberData.mName = Helper.toTitleCase(name);
                this.memberData.mEmail = email.toLowerCase();
                this.memberData.mAddress = Helper.toTitleCase(address);
                this.facultyData.fSalary += cObject.cFee;
                this.facultyData.fDegree = Helper.toTitleCase(degree);
                Faculties.facultyIdTracker ++;
                this.facultyData.fId = `f${Faculties.facultyIdTracker}`;
            }
        }
    }
    getProfile = (facultyId) => {
        if (this.facultyData.fId === facultyId) {
            console.log(`\n\t:::: Profile :::: 
            Id: ${this.facultyData.fId}
            Name: ${this.memberData.mName}
            Email: ${this.memberData.mEmail}
            Salary: ${this.facultyData.fSalary}
            Address: ${this.memberData.mAddress}
            Degree: ${this.facultyData.fDegree}
            ----------------------\n`);
        } else {
            console.log(`You have entered invalid id. Invalid id: ${facultyId}`);
        }
    }
    changeAddress(id, newAddress) {
        if (id === this.facultyData.fId) {
            this.memberData.mAddress = Helper.toTitleCase(newAddress);
            console.log(`Address successfully changed. Your updated address is ${this.memberData.mAddress}`);
        } else {
            console.log('Invalid id provided');
        }
    }

    changeName(id, newName) {
        if(id !== this.facultyData.fId) {
            console.log(`You have entered invalid id. Invalid id entered: ${id}`);
        } else {
            if(this.memberData.mName.toLowerCase().localeCompare(newName.toLowerCase()) === 0) {
                console.log(`You are already registered with this name. Name registered: ${this.memberData.mName}`);
            } else {
                this.memberData.mName = Helper.toTitleCase(newName);
                console.log(`Name has been updated to ${this.memberData.mName} successfully.`);
            }
        }
    }
    changeCourse(fId, newCourseName) {
        if ( fId === this.facultyData.fId) {
            const cCourse = this.verifyCourseName(newCourseName);
            if(this.facultyData.fCourseName.toUpperCase().localeCompare(cCourse.cName.toUpperCase()) === 0) {
                console.log(`You are already registered in the ${newCourseName} course`);
            }
            else {
                this.facultyData.fSalary = cCourse.cFee;
                this.facultyData.fCourseName = cCourse.cName; 
                console.log(`Your course has been updated to ${newCourseName.toUpperCase()}`);
            }
        }
        else {
            console.log(`You have entered invalid id. Invalid id: ${sId}`);
        }
    }

}



module.exports = Faculties;