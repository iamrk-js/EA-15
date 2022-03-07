var cl = console.log;
// DRY >> 



var skills = ["HTML5", "CSS3", "javaScript", "jQuery", "SASS", "Bootstrap3", "Bootstrap4",
    "Typescript", "Angular", "Node.js"];

// for (let i = 0; i < skills.length; i++) {
//     cl(`I love ${skills[i]}`)
// }
// forEach Loop
// Higher Order Function(forEach) >> A function which is having another function as parameter/arrgument
// callback Function (function(skill)) >> A function which is passed as parameter/arrgument to any other function

skills.forEach(function (skill) {
    // cl(`I love ${skill}`);
    if(skill.toLowerCase() === "angular"){
        cl(`I love ${skill}`);
    }
})

var studentInfo = [
    {
        fname: "Tony",
        lname: "Stark",
        email: "tony@stark.com",
        contact: 9999999999
    },
    {
        fname: "Peter",
        lname: "Parkar",
        email: "peter@stark.com",
        contact: 7896541230
    },
    {
        fname: "Bruss",
        lname: "Wayne",
        email: "bruss@wayen.com",
        contact: 7896541230
    }
]
// cl(studentInfo[0].fname);
var stdInfo = document.getElementById('stdInfo');
var result1 = '';
for (var i = 0; i < studentInfo.length; i++) {
    // cl(studentInfo[i].fname)
    result1 += "<tr><td>" + studentInfo[i].fname + "</td><td>" + studentInfo[i].lname + "</td><td>" + studentInfo[i].email + "</td><td>" + studentInfo[i].contact + "</td></tr>"
}

stdInfo.innerHTML = result1;




// 2015 >> es6 >> ecma script 6
// Europien Computer manifacture association

var empDetails = [
    {
        fname: "Rahul",
        lname: "Dravid",
        email: "rahul@gmail.com",
        profile: 'Angular Developer',
        eoexp: "4.3 Years",
        sallary: "13 L"
    },
    {
        fname: "Sachin",
        lname: "Tendulakar",
        email: "sachin@gmail.com",
        profile: 'Team Lead',
        eoexp: "10 Years",
        sallary: "130 L"
    },
    {
        fname: "Yuvaraj",
        lname: "Sing",
        email: "yuvi@gmail.com",
        profile: 'MEAN Stack',
        eoexp: "6.3 Years",
        sallary: "22 L"
    },
    {
        fname: "Saroubh",
        lname: "Ganguli",
        email: "dada@gmail.com",
        profile: 'Back End Devloper',
        eoexp: "8 Years",
        sallary: "24 L"
    },
]

// cl(empDetails[0].email);
var empInfo = document.getElementById('empInfo')
var result3 = '';
for (var j = 0; j < empDetails.length; j++) {
    // cl(empDetails[j])
    result3 += "<tr><td>" + empDetails[j].fname + "</td><td>" + empDetails[j].lname + "</td><td>" + empDetails[j].email + "</td><td>" + empDetails[j].profile + "</td><td>" + empDetails[j].eoexp + "</td><td>" + empDetails[j].sallary + "</td></tr>"
}

empInfo.innerHTML = result3;

empDetails.forEach(function(emp){
    cl(emp)
})


