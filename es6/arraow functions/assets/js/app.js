var cl = console.log;

cl(add(3, 5));

// function dclr
function add(x, y) {
    return x + y
}
// First class function >> When we store functionas a value 

// cl(add2(5, 5));
// functions expression

var add2 = function (x, y) {
    return x + y;
}
// arrow/fatty arrow function

let add3 = (x, y) => {
    return x + y;
}

cl(add3(10, 10));

// let doubleNum = (n) => {
//     return n * 2
// }
let doubleNum = n => n * 2;
cl(doubleNum(123));


let person = {
    fname : "Jhon",
    lname : "Doe",
    age : 33,
    fullName : function(){ // this >> closest parent object
        return `${this.fname} ${this.lname}`
    }
}
// let person = {
//     fname: "Jhon",
//     lname: "Doe",
//     age: 33,
//     fullName: () => { // this >> closest parent object
//         cl(this)
//         return `${this.fname} ${this.lname}`
//     }
// }
// we can not use arraow functions in object as a method
// because 'this' keyword in object is always pointer to "Window Object";

cl(person.fullName())