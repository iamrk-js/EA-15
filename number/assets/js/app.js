var cl = console.log;

let x = 10;

// x = "" + x;

x = x.toString();

cl(x, typeof x)

// toExponential

let y = 5.4456;

y = y.toExponential(1);
cl(y, typeof y);

// toFixed
y = 5.4456;

y = y.toFixed(2);

cl(y);

// toPrecision
y = 5.4456;
y = y.toPrecision(2);
cl(y)

// string(variables/dclr) to numbers

x = "10";
cl(x, typeof x)

x = +x;

cl(x, typeof x)

// Number, parseInt, parseFloat
x = Number("10");
cl(x, typeof x);

x = Number(" 10");
cl(x, typeof x);

x = Number(" 10 Oranges");
cl(x, typeof x);

x = Number("10.89");
cl(x, typeof x);

x = Number("10 89");
cl(x, typeof x);

x = Number("10,89");
cl(x, typeof x);

x = Number(true);
cl(x, typeof x);

x = Number(false);
cl(x, typeof x);


// parseInt

x = parseInt("10");
cl(x, typeof x);

x = parseInt(" 10");
cl(x, typeof x);

x = parseInt(" 10 ");
cl(x, typeof x);

x = parseInt("100 Oranges");
cl(x, typeof x);

x = parseInt("Oranges 10");
cl(x, typeof x);

x = parseInt("100 10");
cl(x, typeof x);

x = parseInt("100 10 156 789");
cl(x, typeof x);

x = parseInt(true);
cl(x, typeof x);

x = parseInt(false);
cl(x, typeof x);
x = parseInt("10.500");
cl(x, typeof x);
// 10 + 20 + "Hello" + 50  + 100 >> 30Hello50100

// ParseFloat

x = parseFloat("10");
cl(x, typeof x);

x = parseFloat(" 10 ");
cl(x, typeof x);

x = parseFloat("10 Oranges");
cl(x, typeof x);

x = parseFloat("10 10");
cl(x, typeof x);

x = parseFloat("Oranges 10");
cl(x, typeof x);

x = parseFloat("10.500");
cl(x, typeof x);

x = parseFloat("100 10 156 789");
cl(x, typeof x);

x = parseFloat(true);
cl(x, typeof x);

x = parseFloat(false);
cl(x, typeof x);


// parseInt with baseIndix

x = parseInt("10", 10);
cl(x, typeof x);

x = parseInt("110", 2);
cl(x, typeof x);

// 10 >>  1 * 2 ^ 2 +1 * 2 ^ 1 + 0 * 2^0
// 4 + 2 + 0

x = parseInt("110", 8);
cl(x, typeof x);
// 110 >>     1 * 8 ^ 2 + 1 * 8 ^ 1 + 0 * 8 ^ 0
// >> 64 + 8 >> 72

x = parseInt("111", 8);
cl(x, typeof x);
// 111 >>           1 * 8 ^ 2 + 1 * 8 ^ 1 +  1 * 8 ^ 0
// >> 64 + 8 + 1 >> 73
