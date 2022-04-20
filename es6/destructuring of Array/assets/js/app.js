var cl = console.log;

let details = ["Ravikiran Niturkar", 1111, "javascriptiscoolstuff.com"];

// let fullName = details[0];
// let id = details[1];
// let website = details[2];

let [fullName, id, website] = details;

cl(`Fullname is ${fullName}`);

let info = "1983, Cricket, KapilDev";

// let year = 1983;
// let sportName = 'Cricket';
// let cap = 'KapilDev';

let infoArray = info.split(",");

// let year = infoArray[0];
// let sportName = infoArray[1];
// let cap = infoArray[2];

let [year, sportName, cap] = info.split(",");
cl(year, sportName, cap);

let x = 33;
let y = 44;
cl(`value of X: ${x} and value of Y: ${y}`);
// let temp = x;
// x = y;
// y = temp;

// y = y - x // 11
// x = x + y // 33 + 11 >> 44
// y = x - y // 44 - 11 >> 33

// cl(x)
// cl(y)
[y, x] = [x, y];

cl(`value of X: ${x} and value of Y: ${y}`);

function convertCurrancy(inr) {
  return {
    USD: inr * 1.7,
    AUD: inr * 1.6,
    PUND: inr * 1.4,
  };
}

cl(convertCurrancy(100));

// let valueInUSD = ''
// let valueInAUD = ''
// let valueInPUND = ''

let {
  USD: valueInUSD,
  AUD: valueInAUD,
  PUND: valueInPUND,
} = convertCurrancy(100);

cl(valueInUSD, valueInAUD, valueInPUND);
