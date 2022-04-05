let cl = console.log;
let imp = "Very Imp Info";
// closure is nothing but the function with it's lexical Scope
// lexical scope means the scope of parent
// when we return a function witin another function lexical scope is created

//  when we return a inner function witin another outer function lexical scope is created
// and after calling outer function the outer function will return inner function
// and that inner function bring out the all inforamtion of it lexical scope
// outside outer function
function outerFun(){
    let srcKey = 10;
    return function innerFun(){
        return srcKey
    }
}
// cl(srcKey)
// let login = outerFun();
// cl(login)
// let getLoginKey = login();
// cl(getLoginKey)

let getLoginKey = outerFun()(); // function curring
cl(getLoginKey);


function main(x){
    // let x;
    return function child1(y){
        // let y;
        return function child2(z){
            // let z 
            return x + y + z
        }
    }
}


// let result1 = main(10); // x = 10
// cl(result1);

// let result2 = result1(20) // y = 20
// cl(result2);

// let result3 = result2(30); // z = 30
// cl(result3)


let result = main(10)(20)(30);
cl(result)