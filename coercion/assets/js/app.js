console.log("Hello");


var fname = "Jhon";
var age = 33;
var candrive = true;
console.log(typeof age) // number
console.log(typeof fname) // string
console.log(typeof candrive) // string
var result = fname + ' is ' + age + ' years old';

console.log(result);


var test = age + " " + fname;
console.log(test);
console.log(typeof test);

// javascript engine >> The conversion of one datatype into another datatype >> coersion

var test2 = fname + candrive;

console.log(test2, typeof test2);
// true >> 1
// false >> 0
var test3 = age + candrive;
console.log(test3, typeof test3);

var test5 = age + candrive + fname; // 33truejhon
// 34jhon

console.log(test5);

var test6 = age + candrive + fname + age + candrive; // 34jhon33true
console.log(test6, typeof test6);

var x;
var y = null;
console.log(fname + x, typeof (fname + x))
console.log(fname + y, typeof (fname + y))
console.log(age + x, typeof (age + x)) //(33undefined) NaN >> Not a Number >> Datatype is number


// string  + Number
// string  + Boolean
// string  + null

var test6 = fname + age + candrive + fname + age + candrive; // 34jhon33true
console.log(test6, typeof test6);