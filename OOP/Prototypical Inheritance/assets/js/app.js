let cl = console.log;

function Shapes() {}

Shapes.prototype.duplicate = function () {
  cl("Duplicate");
};

function Circle(rad) {
  this.radius = rad;
}
// Circle.prototype = Object.create(Object.prototype) 
Circle.prototype = Object.create(Shapes.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function () {
  cl("Draw");
};

let c = new Circle(1);

let s = new Shapes();
c.duplicate()


Array.prototype.toRAvi = function(){
  cl("Hello")
}