let cl = console.log;
// import {*} from "module1"
 // IIFE >> Immediately Invoked Function Expression 
// >> Calling a function as soon as it get created
(function () {

    function getFname(n) {
        cl(`Hello ${n}`)
    }


    getFname("Ravikiran");
})()


// getFname("Ravikiran");