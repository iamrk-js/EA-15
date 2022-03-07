var cl = console.log;
// 1 Scope
// var can not create local/block scope
// let ans const can create local/block scope
var x = 10;
cl(x)
function printX() {
    cl(x)
}
printX()
function addXY() {
    var y = 20;
    cl(x + y)
}
addXY();
// cl(y);

for (var i = 1; i <= 5; i++) {
    cl(`value of i in loop ${i}`)
}

cl(`Value of i outside loop ${i}`);


for (let j = 1; j <= 5; j++) {
    cl(`value of j in loop ${j}`)
}

// cl(`Value of j outside loop ${j}`);

// 2 redcr and reassign

// var >> redclr and reassign  in same scope
// let >> can not redclr but can reassign in same scope
// const >>  can not redclr and can not reassign  in same scope
// const >> We have to assign a value as soon as we dclr it;
var i = 100;

cl(i * 10);

let q = 20;

cl(q * 10);

q = 300;
cl(q / 10);

const p = 20;

cl(p);

// p = "20";
cl(p);
// const z;

// 3 Hosting >> all the dclr are get shifted at top of scope.
// var >> Hoisting is possible and it get bydefault value of 'undefined'
// let and const >> Hoisting is possible but can not  get bydefault value of 'undefined' 
// and we can not use it before initialization

cl(a);
var a = 20;

// cl(b);
let b = 20;
cl(b);
// cl(c);
const c = 30;


let fname = "Ravikiran";
cl(fname);
function printName() {
    let fname = "iamrk";
    cl(fname)
}
cl(fname)
printName()