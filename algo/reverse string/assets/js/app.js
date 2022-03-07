var cl = console.log;

var str = "HTML5";

// we can reverse array but not string

// string to array &&& array to string

// var revStr = str.split('');
// cl(revStr);

// revStr = revStr.reverse();
// cl(revStr);

// revStr = revStr.join('');
// cl(revStr);

// var revStr = str.split('').reverse().join('');
// cl(revStr);

// function reverseString(str){
//     return str.split('').reverse().join('')
// }

// cl(reverseString("Racing Car"))
// cl(reverseString("HTML5"))

var str = "HTML5";
var revStr = '';
for (var i = str.length - 1; i >= 0; i--) {
    // cl(str.charAt(i));
    revStr += str.charAt(i)
}

cl(revStr)

function reverseStringUsingFor(str) {
    var revStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        // cl(str.charAt(i));
        revStr += str.charAt(i)
    }
    return revStr;
}

cl(reverseStringUsingFor("Hello"))