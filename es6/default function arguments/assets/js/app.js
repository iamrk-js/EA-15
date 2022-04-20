var cl = console.log;
function add(x, y = 10) {
  return x + y;
}
cl(add(3, 25));
// function calculateBill(total, tax, tip) {
//   if (tax === undefined) {
//     tax = 0.14;
//   }
//   if (tip === undefined) {
//     tip = 0.1;
//   }
//   return total + total * tax + total * tip;
// }

function calculateBill(total, tax = .14, tip = .1){
    return total + (total * tax) + (total * tip)
}

cl(calculateBill(1500, undefined, .14));
