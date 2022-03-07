var cl = console.log;

var greet1 = "Hello";
var greet2 = "JS";

var greet = greet1 + " " + greet2 + ". How are you?";

cl(greet);

var newGreet = `${greet1} ${greet2}. How are you?`;
cl(newGreet);

var person = {
    fanme: "Jhon",
    lname: "Doe",
    age: 33,
    nativePlace: "Puna",
    fullName : function(){
        return `${this.fanme} ${this.lname}`
    }
}

// Hello There, I'm Jhon Doe, 33 Years Old. And I'm from Puna.

var result = `Hello There, I'm ${person.fanme} ${person.lname}, ${person.age} Years Old. And I'm From ${person.nativePlace}`;
cl(result);

cl(person.fullName());


