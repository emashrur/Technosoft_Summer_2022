const moment = require('moment');

const now = moment();

/**
 * format() -> prints timestamp in a readable format
 */
console.log(`now.format() -> ${now.format()}`);

console.log(`\nnow.date() -> ${now.date()}`);

console.log(`\nnow.month() -> ${now.month()}`);

console.log(`\nnow.year() -> ${now.year()}`);

console.log(`\nnow.hour() -> ${now.hour()}`);

console.log(`\nnow.minute() -> ${now.minute()}`);

console.log(`\nnow.second() -> ${now.second()}`);

console.log(`\nnow.millisecond() -> ${now.millisecond()}\n`);

/**
 * To format date (or timestamp) in a user defined format:
 * 
 * Dates : D -- DD -- DDD
 * Month : M -- MM -- MMM -- MMMM
 * Year : YY -- YYYY
 * Hour : h -- hh -- H -- HH
 * Minute : m -- mm 
 * Second : s -- ss 
 * Fraction of a second : SS -- SSSS -> (0.00seconds | 0.000seconds)
 * TimeZone : Z -- ZZ
 * am/pm : a -- A (a -> am/pm | A -> AM/PM)
 */

console.log(`now.format('MMM DD # YYYY hh - m - s - a') -> ${now.format('MMM DD # YYYY hh - m - s - a')})\n`);

console.log(`now.format('dddd MMM DD, YYYY hh:mm:ssa') -> ${now.format('dddd MMM DD, YYYY hh:mm:ssa')})\n`);

/**
 * To add/subtract fields in a date : 
 * add(x,y)
 * subtract(x,y)
 * 
 * x -> inputNumber
 * y -> inputUnit
 * 
 * example : now.add(23, 'days') -> add 23 days to date
 * 
 * 
 */

/**
 * To set the date in moment object to a particular time stamp
 */

const now3 = moment().month('Nov').year(1997).date(23);

console.log(`birthday -> ${now3}\n`)

console.log(`now3.format()\n`)


/**
 * To find difference between two dates:
 * function : diff()
 * 
 */

const diffInDays = now.diff(now3, 'seconds');

console.log(`now.diff(now3, 'seconds') -> ${diffInDays}\n`);