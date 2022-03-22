var cl = console.log;

// Higher Order Functions || Array Helping Methods
// HOF >> a function having another function as a parameter
// HOF >> a function which returns another function
// First Class Function >> When we store functionas a value

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

// map 
// map returns a new array
// no of elements of new array (A array return by map) are always equal to 
// === no of elements of original array(A array on which we apply map method)
// newArray.length === originalArray.length
let ages = [23, 36, 56, 45, 48, 56, 75];
cl(ages)
let doubleAges = [];

ages.forEach(function (age) {
    doubleAges.push(age * 2)
})

cl(doubleAges)
// let newAges = ages.map(age => {
//     return age * 2
// })

let newAges = ages.map(age => age * 2)
cl(newAges)

let compNames = [];
// ["compnay one", "Company Two", ...]
companies.forEach(comp => {
    compNames.push(comp.name)
})
cl(compNames);


// let newCompNames = companies.map((comp) => {
//     return comp.name
// });
let newCompNames = companies.map(comp => comp.name);
cl(newCompNames);

let companyCategory = []
// {
//     name : ""
//     category : ""
// }

companies.forEach(comp => {
    // let obj = {
    //     name : comp.name,
    //     category : comp.category
    // }
    companyCategory.push({
        name: comp.name,
        category: comp.category
    })
})
cl(companyCategory);


// let newCategory = companies.map(comp => {
//   return  {
//         name : comp.name,
//         category : comp.category
//     }
// })

let newCategory = companies.map(comp => ({
    name: comp.name,
    category: comp.category
}))

cl(newCategory);

let compLife = [];

// {
//     name : "",
//     duration : 20
// }

companies.forEach(comp => {
    // let obj = {
    //     name : comp.name,
    //     duration : comp.end - comp.start
    // }
    // cl(obj)
    compLife.push({
        name: comp.name,
        duration: comp.end - comp.start
    })
})
cl(compLife);

// let newCompLife = companies.map(comp => {
//  return   {
//         name : comp.name,
//         duration : comp.end - comp.start
//     }
// })

let newCompLife = companies.map(comp => ({
    name: comp.name,
    duration: comp.end - comp.start
}))

cl(newCompLife);

// filter 
// it returns new array
// length of the new array(the array return by filter method) is may be or may not be
// equal to the length of original array  (The array on which we apply filter method)

ages = [23, 36, 15, 26, 17, 23, 5, 10, 56, 45, 48, 56, 75];


let canDrive = [];
// age >= 18

ages.forEach((age) => {
    if (age >= 18) {
        canDrive.push(age)
    }
})

cl(canDrive)


// let newCanDrive = ages.filter(function(age){
//     if(age >= 18){
//         return true;
//     }else{
//         return false;
//     }
// });

// let newCanDrive = ages.filter(function(age){
//     return age >= 18
// });
ages = [23, 36, 15, 26, 17, 23, 5, 10, 56, 45, 48, 56, 75];
let newCanDrive = ages.filter(age => age >= 18);
cl(newCanDrive);

let doublecanDrive = ages.filter(age => age >= 18).map(age => age * 2);

cl(doublecanDrive);

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


// companies run for at least 10 years

let compFor10Years = [];

companies.forEach(comp => {
    if (comp.end - comp.start >= 10) {
        compFor10Years.push(comp)
    }
})
cl(compFor10Years);


// let newcompFor10Years = companies.filter(comp => {
//    return comp.end - comp.start >= 10
// })
let newcompFor10Years = companies.filter(comp => comp.end - comp.start >= 10)
cl(newcompFor10Years)

// comp strat in 80's  1980 to 1989 

let compIn80s = [];

companies.forEach(comp => {
    if (comp.start >= 1980 && comp.start <= 1989) {
        compIn80s.push(comp);
    }
})

cl(compIn80s);

// let newcompIn80s = companies.filter((comp) => {
//     return comp.start >= 1980 && comp.start <= 1989
// })
let newcompIn80s = companies.filter(comp => comp.start >= 1980 && comp.start <= 1989)
cl(newcompIn80s);

// retailComp

let retailComp = [];

companies.forEach((comp) => {
    if (comp.category.toLowerCase().trim() === "retail") {
        retailComp.push(comp)
    }
})
cl(retailComp);

// let newretailComp = companies.filter(comp => {
//     return comp.category.toLowerCase().trim() === 'retail'
// })

let newretailComp = companies.filter(comp => comp.category.toLowerCase().trim() === 'retail')
cl(newretailComp)

// {
//     name : '',
//     duration : 5
// }

let retailInfo = companies.filter(comp => comp.category.toLowerCase() === 'retail')
    .map(comp => ({
        compName: comp.name,
        duration: comp.end - comp.start
    }))

cl(retailInfo);

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

// comp start in 90's and run for at least 5 years
// from 1990 to 1999



let comp90and5 = [];

companies.forEach(comp => {
    if ((comp.end - comp.start >= 5) && comp.start >= 1990 && comp.start <= 1999) {
        comp90and5.push(comp)
    }
})

cl(comp90and5)

let newcomp90and5 = companies.filter(comp => (comp.end - comp.start >= 5) && comp.start >= 1990 && comp.start <= 1999)
cl(newcomp90and5);


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
// comp == "retail" and comp run at least for 5 years

// {
//     compName : '',
//     duration : ''
// }

let retailCompInfo = companies.filter(comp => comp.category.toLowerCase() === 'retail' && (comp.end - comp.start) >= 5)
    .map(comp => {
        return {
            compName: comp.name.toLowerCase(),
            duration: comp.end - comp.start
        }
    })

cl(retailCompInfo);

// sort method
// a == 23 and b == 36 
// a == 36 b == 15
// 23, 15
// a == 36 b == 26
// 23,15,26,36
// a == 36 b == 17
ages = [23, 36, 15, 26, 17, 4, 3, 1, 190, 23, 5, 10, 56, 45, 48, 56, 75];
// let sortedAges = ages.sort();
// let sortedAges = ages.sort((a, b) => {
//     if (a > b) {
//         return 1
//     } else {
//         return -1
//     }
// });

let sortedAges = ages.sort((a, b) => (a > b) ? 1 : -1);
cl(sortedAges);

let dsortedAges = ages.sort((a, b) => (a < b) ? 1 : -1);
cl(dsortedAges);




let x = 18;

// if(x >= 18){
//     cl('She/He can Drive')
// }else{
//     cl('She/He can not Drive')
// }

(x >= 18) ? cl('She/He can Drive') : cl('She/He can not Drive.');

companies = [
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


let sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start) ? 1 : -1);

cl(sortedCompanies);


let dsortedCompanies = companies.sort((c1, c2) => (c1.start < c2.start) ? 1 : -1);
cl(dsortedCompanies);


let dsortedCatCompanies = companies.sort((c1, c2) => (c1.category > c2.category) ? 1 : -1);
cl(dsortedCatCompanies);


// Reduce

ages = [23, 36, 15, 26, 17, 4, 3, 1, 190, 23, 5, 10, 56, 45, 48, 56, 75];
let ageTotal = 0;
ages.forEach(age => {
    ageTotal += age;
})
cl(ageTotal)
// debugger
// let newAgesTotal = ages.reduce((total, age) => {
//     return total + age;
// }, 0)

let newAgesTotal = ages.reduce((total, age) => total + age, 0)
cl(newAgesTotal);



companies = [
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


// find out durations of all comp in the form of array
// [21,5,7,10,13]
// total of all duration

let compAgesTotal = companies.map(comp => comp.end - comp.start).reduce((total, age) => total += age, 0);

cl(compAgesTotal);

let compAgesMulty = companies.map(comp => comp.end - comp.start).reduce((total, age) => total *= age, 1);
cl(compAgesMulty);