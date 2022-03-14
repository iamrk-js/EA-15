var cl = console.log;
// creating array by literal method
var arr = [25, 45, 69, 6, 78, 950, 56];
cl(arr);


//creating array constructor method
// it alwys start with new keyword
// and 1st charch of method name is always captal
var ages = new Array(25, 45, 69, 6, 78, 950, 56);

cl(ages);
var ages1 = new Array(25);
cl(ages1);
var ages1 = new Array('25');
cl(ages1);

// length 
arr = [25, 45, 69, 6, 78, 950, 56];
cl(arr.length);

// array to string

var arr = ["Html5", "CSS3", "javaScript", "es6", "Typescript", "Angular"];

var str = arr.toString();
cl(str);

// join

str = arr.join(" ");
cl(str);

str = arr.join("*");
cl(str);
str = arr.join(" YES ");
cl(str);
// reverse
//  Array.reverse(): []
var revArr = arr.reverse();
cl(revArr);
// 5lmtH


var arr = ["Html5", "CSS3", "javaScript", "es6", "Typescript", "Angular"];
// pop >> to remove last(last index) element of array
arr.pop();
cl(arr);
// push >> to add the element at the end(last Index) of array
arr.push("Angular 13");
cl(arr);

// shift >>to remove 1st(0th index) element of the array

arr.shift();

cl(arr);

// unshift >> to add the element at the start(0th index) of array

arr.unshift('HTML5');

cl(arr);

// merging/concat

var skill = ["Node.js", "express", 'mongoDB'];

// let MEANstack = arr.concat(skill);
let MEANstack = arr.concat(skill, 'github', 'jira');

cl(MEANstack);


var arr = ["Html5", "CSS3", "javaScript", "Photoshop", "es6", "Typescript", "Angular"];

delete arr[3];

cl(arr)

var arr = ["Html5", "CSS3", "javaScript", "Photoshop", "es6", "Typescript", "Angular"];

// splice(start:number, deleteCount?:number)

// arr.splice(3,1)
// arr.splice(3) >> If we don't pass secont parameter all elemets from
// 1st parameter will be removed

// arr.splice(3,1,"SASS","Bootstrap");

arr.splice(3,0,"SASS","Bootstrap");

cl(arr)
//slice 

var arr = ["Html5", "CSS3", "javaScript", "Photoshop", "es6", "Typescript", "Angular"];
// slice >> It returns a new array
// It accepts 2 arrguments and both are not mandetory
let newSkill = arr.slice(4,6);

cl(newSkill);
newSkill = arr.slice(4);

cl(newSkill);
// by default value of 1st arrgument is 0
newSkill = arr.slice();

cl(newSkill);

arr.pop();
cl(arr);
cl(newSkill);

// var arr2 = arr;

// cl(arr2)
// arr.pop();

// cl(arr)
// cl(arr2)


















