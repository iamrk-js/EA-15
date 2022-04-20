let cl = console.log;
// Abstractions >> Hide the details and show the essentials
// Objects created by same counstructor function will have same prototype
// these objects will have same prototype as of constructor function
function Circle(rad) {
  this.radius = rad;
  let defaultLocation = { x: 0, y: 0 };
  // this.getDefaultLocation = function () {
  //   return defaultLocation;
  // };
  this.draw = function () {
    computeIptimumLocation();
    return 2 * Math.PI * rad;
  };
  Object.defineProperty(this, 'defaultLocation', {
    get : function(){
      return defaultLocation;
    },
    set : function(val){
      if(val.x && val.y){
        defaultLocation = val;
      }else{
        throw new Error("Invalid Location")
      }
    }
  })
}
let circle = new Circle(10);
cl(circle);
// circle.
cl(circle.defaultLocation);

// circle.defaultLocation = false;
circle.defaultLocation = {x:50, y:50}
