
var cl = console.log;

var str = "I love javaScript";

cl(str.length);

// indexOf 
// String.indexOf(searchString: string, position(index)?: number): number
var str = "I love Angular becoz it is developed by Google. Angular is very fast growing framework. I love Angular very much";
cl(str.length)
var indexOne = str.indexOf('Angular');
cl(indexOne);

// var indexTwo = str.indexOf("Angular", indexOne + 1);
var indexTwo = str.indexOf("Angular", str.indexOf('Angular') + 1);
cl(indexTwo);
var indexThree = str.indexOf('Angular', indexTwo + 1);
cl(indexThree);

var lastIndex = str.lastIndexOf('Angular');
cl(lastIndex);

var indexOfReact = str.indexOf('React');
var indexOfVue = str.indexOf('Vue');
cl(indexOfReact);
cl(indexOfVue);
//  String.charAt(pos/index: number): string
var atseven = str.charAt(7);
cl(atseven);

// concat

var greet1 = "Hello";
var greet2 = "JS world !!!";
var greet3 = " How are you ?";
// var greeting = greet1 + " " + greet2;
var greeting = greet1.concat(' ', greet2, greet3 );

cl(greeting);

// lowercase and uppercase

var str = "I loVe JaVaScRipT";
cl(str.length)
cl(str.toLowerCase());
cl(str.toUpperCase());

if(str.toLowerCase() == "i love javascript"){
    cl("Success !!")
};


var str = "      I loVe JaVaScRipT     ";
cl(str.length);

if(str.toLowerCase().trim() == "i love javascript"){
    cl("Success !!");
};



// Converting string into substring 
// Extracting sub-string from main string

// slice, substring, substr


// slice >>
//  String.slice(start?: number, end?: number): string
// It accepts -ve parameter as well
// ? means >> optional / not mandetory
// start pos is included in result, where as end index/pos is not included
var str = "Apple, Banana, Kiwi";

var frt2 = str.slice(7,13) ;
cl(frt2);

var frt2 = str.slice(7);
cl(frt2);
cl(str);

var frt3 = str.slice(-12,-6);
cl(frt3);


// substring >>
//  String.substring(start: number, end?: number): string
// It does not accepts -ve parameters
// ? means >> optional / not mandetory
// start pos is included in result, where as end index/pos is not included

var str = "Lorem ipsum dolor sit amet ultricies sit Apple, Banana, Kiwi enim vitae velit eros curabitur fermentum vel in hendrerit augue massa molestie sodales duis nam bibendum quisque ac ante curae etiam porttitor porta pellentesque egestas nulla sapien sollicitudin nostra penatibus libero sed odio et nascetur mi lacinia quam ex convallis felis scelerisque inceptos venenatis dis purus auctor pharetra vivamus netus facilisis gravida torquent aliquet sagittis mattis tincidunt iaculis potenti ligula metus lorem congue class fringilla fames proin adipiscing sem nec rutrum ut conubia dignissim ullamcorper faucibus consequat vehicula maximus maecenas fusce ultrices cubilia nisl litora feugiat ridiculus condimentum posuere senectus luctus";

var frt4 = str.substring(7, 13);
cl(frt4);

var frt4 = str.substring(7);
cl(frt4);

// substr
// String.substr(from: number, length?: number): string
var frt4 = str.substr(7,6);
cl(frt4);



var str = "Lorem ipsum dolor sit amet ultricies sit Apple, Banana, Kiwi enim vitae velit eros curabitur fermentum vel in hendrerit augue massa molestie sodales duis nam bibendum quisque ac ante curae etiam porttitor porta pellentesque egestas nulla sapien sollicitudin nostra penatibus libero sed odio et nascetur mi lacinia quam ex convallis felis scelerisque inceptos venenatis dis purus auctor pharetra vivamus netus facilisis gravida torquent aliquet sagittis mattis tincidunt iaculis potenti ligula metus lorem congue class fringilla fames proin adipiscing sem nec rutrum ut conubia dignissim ullamcorper faucibus consequat vehicula maximus maecenas fusce ultrices cubilia nisl litora feugiat ridiculus condimentum posuere senectus luctus";

var apple = str.slice(str.indexOf('Apple'), str.indexOf('Apple') + 5);

cl(apple);



// to convert string into array

// split

var str = "I love javaScript, more than my wife";

var arr = str.split('');
cl(arr);

var arr = str.split(' ');
cl(arr);

var arr = str.split(',');
cl(arr)







