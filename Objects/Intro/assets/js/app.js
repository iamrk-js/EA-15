this 

var fname = "Jhon";
var lname = "Doe";
var age = 33;

// Objects >> Where we store (relational)info/data in the form of key and value pairs

var person = {
    // key : value 
    fname : "July",
    lname : "Doe",
    age : 23
}

console.log(fname);

console.log(person.fname);
console.log(person.age);
console.log(person.lname);


var getFname = person.fname;
console.log(getFname);
console.log(person);


person.age = 27
console.log(person);

var test = person.fname + person.age;
console.log(test);

person.nativePlace = "Puna";
console.log(person);

delete person.age;

console.log(person);


