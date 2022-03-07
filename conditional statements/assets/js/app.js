var cl = console.log;

var x = 0;

// if(x >= 10){
//     cl("Value of x is equal to or greater than 10")
// }

// if(x >= 10){
//     cl("Value of x is equal to or greater than 10")
// }else{
//     cl('Value of X is less than 10')
// }
var x = 17;

if (x % 2 == 0) {
    cl(x + " can be divided by 2")
} else if (x % 3 == 0) {
    cl(x + " can be divided by 3")
} else if (x % 4 == 0) {
    cl(x + " can be divided by 4")
} else if (x % 5 == 0) {
    cl(x + " can be divided by 5")
} else {
    cl(x + " can not be divided by 2, 3, 4 and 5")
}


var year = 2033;
if((year % 4 == 0 && year % 100 != 0 ) || year % 400 == 0){
    cl('Leap Year')
}else{
    cl('Not Leap Year')
}

function isLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0 ) || year % 400 == 0){
        cl('Leap Year')
    }else{
        cl('Not Leap Year')
    }
}

isLeapYear(2024);
isLeapYear(2032);
isLeapYear(2036);
isLeapYear(2037);

// 11 to 30
for(var i = 11; i < 31; i++){
    if(i % 2 !== 0){
        cl(i)
    }
}

