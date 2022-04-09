let cl = console.log;
// Abstractions >> Hide the details and show the essentials
function Circle(rad) {
  this.radius = rad;
  let defaultLocation = { x: 0, y: 0 };
  let computeIptimumLocation = function () {
    //........
    return defaultLocation;
  };
  this.draw = function () {
    computeIptimumLocation();
    return 2 * Math.PI * rad;
  };
}

let circle = new Circle(10);
cl(circle);

// circle.
