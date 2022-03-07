let cl = console.log;


//1 selecting elements using ID
// It is a single element selection methods

let heading = document.getElementById('heading');

cl(heading, typeof heading);

// heading.style.backgroundColor = "orange";
// heading.style.color = '#fff';
// heading.style.padding = ".75rem";

heading.classList.add('bg-primary');
heading.classList.add('text-white');
heading.classList.add('p-4');
heading.classList.remove('demo');
// heading.className = "bg-success text-white p-2";


// className >> It removes all old classes on the HTML element and adds new one 
// classList >> It does not removes all old classes on the HTML element but adds/remove new one 


let getClassList = heading.classList;
// classList returns DOMTokenList
// DOMTokenList >> is noting but the array like Object
cl('ClassList :', getClassList, typeof getClassList);

let getClassNames = heading.className;

cl("className :", getClassNames, typeof getClassNames)

// className >> It returns String

// 2 by using class
// getElementsByClassName >> It returns HTMLCollection
// HTMLCollection >> Array like object
// It selects multiple html elements
let list = document.getElementsByClassName('list-group-item');

// classList.add('active')
// innerHTML

cl(list)

let listArray = Array.from(list)
cl(listArray, typeof listArray)


listArray.forEach(obj => {
    // obj.style.backgroundColor = 'blueviolet';
    // obj.style.color = '#fff'
})

// 3 tagname

// getElementsByTagName >> It returns HTMLCollection
// HTMLCollection >> Array Like Object
// It selects multiple HTML Elements
let newList = document.getElementsByTagName('li');

cl(newList)

let newListArray = Array.from(newList);

cl(newListArray);

newListArray.forEach((ele) => {
    // ele.style.backgroundColor = "#fff";
    // ele.style.color = "#000";
    // ele.classList.add('bg-success');
    // ele.classList.add('text-white')
})

//4 qurySelector
// It always select 1st occurence of selector
// It selects only one html element
// It returns Doc Object
let getLi = document.querySelector('li');

cl(getLi.innerHTML)

getLi = document.querySelector('.list2 li');
cl(getLi.innerHTML)

let get3rdLi = document.querySelector('.list2 li:nth-child(3)');
cl(get3rdLi.innerHTML)
get3rdLi.classList.remove('text-white');
get3rdLi.style.color = 'orange';
get3rdLi.style.fontWeight = 'bold';
get3rdLi.style.textTransform = 'uppercase';


let imp = document.querySelector('.list2 .imp');
cl(imp)


// 5 querySelectorAll 
// It returns NodeList
// Nodelist >> is array like Object
// It selects multiple html Elements
let getAllImp = document.querySelectorAll('.list2 .imp');

cl(getAllImp)

// getAllImp.pop()
let getAllImpArray = Array.from(getAllImp);
cl(getAllImpArray)
getAllImpArray.forEach(ele => {
    cl(ele.innerHTML)
})


let get1stLi = document.querySelectorAll("li:first-child");

cl(get1stLi);

let getLastLi = document.querySelectorAll("li:last-child");

cl(getLastLi);

let arr = Array.from(getLastLi);

arr.forEach(ele => {
    cl(ele.innerHTML)
})


let getOdds = Array.from(document.querySelectorAll("li:nth-child(2n + 1)"));

cl(getOdds)

getOdds.forEach(ele => cl(ele.innerHTML))


let getEvens = Array.from(document.querySelectorAll("li:nth-child(2n)"));

getEvens.forEach(ele => cl(ele.innerHTML));

let angularImg = "https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

let secondLi = Array.from(document.querySelectorAll('.list2 li'));

secondLi.forEach(ele => ele.classList.toggle('active'));

// getAttribute, setAttribute and removeAttribute

let js = document.getElementById('js');
let getJsAttr = js.getAttribute('src');
cl(getJsAttr);
js.setAttribute('src', angularImg);
js.removeAttribute('class');
js.removeAttribute('alt');

// create elements and textnodes

let myHeading = document.createElement('h1');


// myHeading.innerText = "MEAN Stack";
let meanText = document.createTextNode("MEAN Stack");
// myHeading.innerHTML = meanText;
myHeading.classList.add('bg-success');
myHeading.classList.add('text-white');
myHeading.classList.add('p-4');
myHeading.appendChild(meanText);
cl(meanText, typeof meanText)
cl(myHeading, typeof myHeading);


let main = document.getElementById('main');

// main.innerHTML = myHeading;

main.appendChild(myHeading);


let extraSkills = ['node.js', 'Expressjs', 'MongoDb'];

let advSkills = document.getElementById('advSkills');

// let result = '';

// extraSkills.forEach(ele => {
//     result += `
//             <li class="list-group-item">${ele}</li>
//         `
// })

// advSkills.innerHTML = result;

extraSkills.forEach(ele => {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = ele;
    advSkills.appendChild(li)
})