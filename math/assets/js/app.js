var cl = console.log;

let pi = Math.PI;
cl(pi);

let eulers = Math.E;

cl(eulers);
cl(Math.SQRT2);
cl(Math.SQRT1_2);

cl(Math.LN2)
cl(Math.LN10)

// Math Methods

let x = 9.4;

cl(Math.round(x)); // 9

 x = 9.5;

cl(Math.round(x)); // 10

// Math.floor 
x = 9.999
cl(Math.floor(x));

x = 9.01;
cl(Math.ceil(x));

let eigthCube = Math.pow(88, 3);
cl(eigthCube)

cl(Math.pow(2,9));

cl(Math.pow(25,2));

cl(Math.sqrt(625));


// min  and max

cl(Math.min(25,45,96,85,02,-456,7897,-7410));
cl(Math.max(25,45,96,85,02,-456,7897,-7410));



// random
// Returns a pseudorandom number between 0 and 1.

cl(Math.random())

// print 0 to 9 randomly

let get0to9 = Math.floor(Math.random() * 10);
// 0.00 to 0.999 >> 10 >> 0.0 to 9.99
// 0.01 * 10 >> 0.1 >> 0
// 0.123 * 10 >> 1.23 >> 1
// 0.233 * 10 >> 2.33 >> 2

// .99 * 10 >> 9.9 >>

// cl(get0to9)

//0 to 10

let get0to10 = Math.floor(Math.random() * 11);

// cl(get0to10);


// 7 to 16

// 7 
// 7 + 0 >> 7
// 7 + 1 >> 8
// 7 + 2 >> 9
// 7 + 3 >> 10
// 7 + 4 >> 11
// 7 + 5 >> 12
// 7 + 6 >> 13
// 7 + 7 >> 14
// 7 + 8 >> 15
// 7 + 9 >> 16
// 16 - 7 >>  9 + 1
let get7to16 = 7 + Math.floor(Math.random() * 10);

cl(get7to16);

function getRandomNumbers(min, max){
    return min + Math.floor(Math.random() * (max - min + 1));
}


cl(getRandomNumbers(17,26))

