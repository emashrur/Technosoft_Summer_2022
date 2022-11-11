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


/**
 *  variables (Class/Field variables)
    studentData = {
        sId: 0,
        sCourseName: '',
        sTopicsCovered: '',
        sBalance: 0,
        sGrade: ''
    }
 */
class Students extends Members {

    studentData = {
        sId : 0,
        sCourseName : '',
        sTopicsCovered : '',
        sBalance : 0,
        sGrade : ''
    }

    static studentIdTracker = 100;

    /*
        functions
    */
    /**
     *      -> create function for activities:
     *          -> enrollment
     *          -> changeName
     *          -> changeCourse
     *          -> getProfile
     *          -> makePayment
     *          -> changeAddress
     *          -> dropFromCourse
     *          -> bestWishes
     */

    constructor(age, courseName, name, email, address) {
        super();
        if (age <= 0 || courseName.length === 0 || name.length === 0 || email.length === 0 || address.length === 0) {
            throw 'Incomplete Data';
        } else if (age < 16) {
            console.log('Student has to be of age 16 or above');
        } else {
            const cObject = this.verifyCourseName(courseName);
            if (!cObject) {
                console.log(`Please enter a valid course name. Course entered is "${courseName}"`)
                throw 'Invalid courseName';
            } else {
                this.memberData.mAge = age;
                this.studentData.sCourseName = cObject.cName
                this.memberData.mName = Helper.toTitleCase(name);
                this.memberData.mEmail = email.toLowerCase();
                this.memberData.mAddress = Helper.toTitleCase(address);
                this.studentData.sBalance += cObject.cFee;
                Students.studentIdTracker++;
                this.studentData.sId = `S${Students.studentIdTracker}`;
            }
        }
    }



    // Functions:

    verifyCourseName = (courseName) => {
        return courseData.find(cData => cData.cName.toUpperCase().localeCompare(courseName.toUpperCase()) === 0);
    }
    

    getProfile = (studentId) => {
        if (this.studentData.sId === studentId) {
            console.log(`\n\t:::: Profile :::: 
            Id: ${this.studentData.sId};
            Name: ${this.memberData.mName};
            Email: ${this.memberData.mEmail};
            Balance: ${this.studentData.sBalance};
            Address: ${this.memberData.mAddress};
            ----------------------\n`);
        } else {
            console.log(`You have entered invalid id. Invalid id: S${studentId}`)
        }
    }

    changeAddress(id, newAddress) {
        if (id === this.studentData.sId) {
            this.memberData.mAddress = Helper.toTitleCase(newAddress);
            console.log(`Address successfully changed. Your updated address is ${this.memberData.mAddress}`);
        } else {
            console.log('Invalid id provided');
        }
    }


    makePayment(id, paymentAmount) {
        if(id !== this.studentData.sId){
            console.log(`You have entered invalid id. Invalid id: ${sId}`);
          }else if (this.studentData.sBalance === 0) {
                console.log(`No payment is required at this time.`);
              } else {
                this.studentData.sBalance -= paymentAmount;
                console.log(`Thank you for making payment. Your updated balance is ${this.studentData.sBalance}`);
              }
    }



}
    







module.exports = Students;

