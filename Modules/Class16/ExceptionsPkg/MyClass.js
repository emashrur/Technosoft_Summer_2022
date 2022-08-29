class MyClass {
    showSeasonName(monthName) {
        switch (monthName.toLowerCase()) {
            case 'jan':
            case 'feb':
            case 'dec':
                console.log('Winter Season');
                break;
            case 'mar':
            case 'apr':
            case 'may':
                console.log('Spring Season');
                break;
            case 'jun':
            case 'jul':
            case 'aug':
                console.log('Summer Season');
                break;
            case 'sep':
            case 'oct':
            case 'nov':
                console.log('Fall Season');
                break;
            default:
                throw 'Invalid month entered'
                break;
        }
    }
}

module.exports = MyClass;