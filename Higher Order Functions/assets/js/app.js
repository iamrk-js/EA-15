var cl = console.log;

let ages = [23, 36, 56, 45, 48, 56, 75];



let doubleAges = [];

ages.forEach(age => {
    doubleAges.push(age * 2)
})
cl(doubleAges)
// map 
// It returns a new Array
// It apply same functionality on each element of array
// let newDoubleAge = ages.map((age) => {
//     return age * 2;
// })
let newDoubleAge = ages.map(age => age * 2)
cl(newDoubleAge);

let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let companyNames = [];

// companies.forEach(function(comp){
//     cl(comp.name);
//     companyNames.push(comp.name)
// });
companies.forEach(comp =>  companyNames.push(comp.name));

cl(companyNames);


// let newCompanyNames = companies.map(function(comp){
//     return comp.name
// })

let newCompanyNames = companies.map(comp =>  comp.name);


cl(newCompanyNames);

// {
//     companyName : '',
//     duration : ''
// }

let compDuration = [];

// companies.forEach(function(comp){
//    let obj = {
//        companyName :comp.name ,
//        duration : comp.end - comp.start,
//    }
//    compDuration.push(obj)
// })

companies.forEach(comp => compDuration.push( {companyName :comp.name , duration : comp.end - comp.start}))
 
cl(compDuration);


// let newcompDuration = companies.map(function(comp){
//     return {
//         companyName : comp.name,
//         duration : comp.end - comp.start
//     }
// });

let newcompDuration = companies.map(comp => ({companyName : comp.name,duration : comp.end - comp.start}) );

cl(newcompDuration);

// filter


ages = [23,5,15, 36, 56, 45, 8, 56, 75];;


let canDrive = [];

// ages.forEach(function(age) {
//     if(age >= 18){
//         canDrive.push(age)
//     }
// })

ages.forEach((age) => {
    if(age >= 18){
        canDrive.push(age)
    }
})

cl(canDrive);

// filter method returns new array

// let newCanDrive = ages.filter(age => {
//     return age >= 18;
// })
let newCanDrive = ages.filter(age => age >= 18)
cl(newCanDrive);


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


let onlyRetailCompnies = [];

companies.forEach(comp => {
    if(comp.category === "Retail"){
        onlyRetailCompnies.push(comp)
    }
})

cl(onlyRetailCompnies);

let newRetailsCompnies = companies.filter(comp => comp.category === 'Retail')
cl(newRetailsCompnies)