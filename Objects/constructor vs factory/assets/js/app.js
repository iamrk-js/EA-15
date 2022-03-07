var cl = console.log;

var x = 10;
var y = 20;
cl("x", x);
cl("y", y)
y = x;
cl("y", y);
y = 30;
cl("y", y);
cl("x", x);

var person = {
    fname: "Jhon",
    lname: "Doe"
}
var person2 = {
    fname: "July",
    lname: "Doe"
}
cl(person);

var p2 = person;
cl(p2);
p2.fname = "July";
cl(p2);
cl(person);

// var std1 = {
//     fname : "Jhon",
//     lname : "Doe",
//     email:"jhon@gmail.com",
//     contact:8745632109
// }

// factory method/function

// function createStudentObj(fn, ln, email, contact) {
//     var std = {
//         fanme: fn,
//         lanme: ln,
//         email: email,
//         contact: contact,
//     }
//     return std;
// }
function createStudentObj(fn, ln, email, contact) {
    return {
        fanme: fn,
        lanme: ln,
        email: email,
        contact: contact,
        fullName : function(){
            return fn + " " + ln
        }
    }
}
var std1 = createStudentObj("Jhon", "Doe", "jhon@gmail.com", 9874563210);
cl(std1);
var std2 = createStudentObj("July", "Doe", "july@gmail.com", 3214789652);
cl(std2)
std1.contact = 3214569870;
cl(std1)
cl(std2.fullName());

// constructor method


function CreateStdConstr(fn, ln, email, contact){
    // this = {}
    this.fname = fn;
    this.lanme = ln;
    this.email = email;
    this.contact = contact;
    // return this
}


var std4 = new CreateStdConstr("Tony", "Stark","tony@stark.com", 9874563210)
cl(std4);




var p = {};
cl(p);
p.demo = "Testing"
cl(p)
