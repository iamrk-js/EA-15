let cl = console.log;

function Circle(rad) {
  this.radius = rad;
  this.draw = function () {
    return 2 * Math.PI * rad;
  };
}

// everything in javascript is object except primitive datatypes

// cl(typeof Circle);
// cl(Circle.radius);
// cl(Circle.name);
// cl(Circle.length);
// cl(Circle.constructor);

let circle = new Circle(10);
cl(circle);


// for in loop
// In for-in loop . notation on object does not work
// we have to use bracket notation for object in for-in loop
for(let k in circle){
    cl(k, circle[k])
}

let keys = Object.keys(circle);

cl(keys);

if('radius' in circle){
    cl('Circle has Radius.')
}

if('diameter' in circle){
    cl('Circle has Diameter.')
}else{
    cl(`Circle don't have Diameter.`)
}
