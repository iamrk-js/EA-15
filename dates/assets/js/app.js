var cl = console.log;
// 1 
let d = new Date();
cl(d, typeof d);

// If we are using arrow function within the object
//then "this" keyword is always point to window object
// let person = {
//     fname: "Jhon",
//     lname: "Doe",
//     fullName: function () {
//         cl(this)
//         return person.fname + " " + person.lname
//     }
// }

// person.fullName()

// 2 

let d1 = new Date(1983, 2, 23, 17, 30, 30);
cl(d1);

let d2 = new Date(1983, 2);
cl(d2);

// 3 // no of milliseconds form 1 jan 1970

let d3 = new Date(2000);
cl(d3);
// 5th aug
let d4 = new Date(86400000);
cl(d4);

let d5 = new Date(-86400000);
cl(d5);

d5 = new Date(0);
cl(d5);

// 4 

let d6 = new Date("Octomber 15, 1940, 11:11:11");
cl(d6)

cl(d6.getTime());
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// get methods

d = new Date();
cl(d);

let getYear = d.getFullYear();
cl(getYear);

let getMonth = d.getMonth();
cl(getMonth);
cl(months[getMonth])

let getdate = d.getDate();
cl(getdate);

let gethr = d.getHours();
cl(gethr);
let getmin = d.getMinutes();
cl(getmin);
let getsec= d.getSeconds();
cl(getsec);
let getmillisec = d.getMilliseconds();
cl(getmillisec);

let getday = d.getDay();
cl(getday);
cl(weekdays[getday])

let gettime = d.getTime(); // no of milliseconds from 1 jan 1970 to time in given date-object(d)
cl(gettime);

cl(Date.now()); // no of milliseconds from 1 jan 1970 to current time

// setTime


let newDate = new Date();
cl(newDate);

newDate.setDate(14);
cl(newDate);

newDate.setFullYear(2050);
cl(newDate);

newDate.setMonth(10);
cl(newDate);

newDate.setHours(11);
cl(newDate);

newDate.setMinutes(11);
cl(newDate);

newDate.setSeconds(11);
cl(newDate);

// date set methods

var d = new Date();
cl(d)
// setDate 

