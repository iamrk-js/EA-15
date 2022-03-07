let cl = console.log;

// PARENT
let heading = document.getElementById('heading');

cl(heading)

// let main = heading.parentElement;
let main = heading.parentNode;

cl(main);

main.classList.add('bg-primary');
main.classList.add('text-white');
main.classList.add('p-4');

let angular = document.querySelector('.angular');
let angularParent = angular.parentElement;
cl(angularParent);


// child


const list2 = document.querySelector('.list2');

cl(list2)

let listChilds = list2.childNodes;
cl(listChilds);

let listChilds2 = Array.from(list2.children);

cl(listChilds2);

listChilds2.forEach((ele) => {
    cl(ele.innerHTML)
})

let fc = list2.firstChild;
cl(fc);

let fce = list2.firstElementChild;
cl(fce);

let lc = list2.lastChild;
cl(lc);

let lce = list2.lastElementChild;;
cl(lce)

// SIBLINGS
let js = document.querySelector('.js');

cl(js)

let nextJsSib = js.nextSibling;
cl(nextJsSib);

let nextJsEleSib = js.nextElementSibling;
cl(nextJsEleSib)


let preJsSib = js.previousSibling;
cl(preJsSib)

let preJsEleSib = js.previousElementSibling;
cl(preJsEleSib)