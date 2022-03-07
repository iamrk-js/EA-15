var cl = console.log;

// 1 to 15 
// 3 >> fizz
// 5 >> buzz
// 3 and 5 >> fizzBuzz
// number

for(var i = 1; i < 16; i++){
    if(i % 3 == 0 && i % 5 == 0){
        cl("FizzBuzz")
    }else if(i % 5 == 0){
        cl("Buzz")
    }else if(i % 3 == 0){
        cl("Fizz")
    }else{
        cl(i)
    }
}