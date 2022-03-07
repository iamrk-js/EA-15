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















