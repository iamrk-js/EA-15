let cl = console.log;

// selections 
const btn = document.getElementById('btn');
const demo = document.querySelector('.demo');
const body = document.querySelector('body');
const fname = document.getElementById('fname');
const jsStack = document.getElementById('jsStack');
const bgColor = document.getElementById('bgColor');
let angularImgUrl = 'https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5ndWxhcmpzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
let jsImageUrl = 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
// callback Functions

// btn.addEventListener('click', () => {
//     demo.classList.add('d-none')
// })
let flag = true;
// const onDblClickHandler = function () {
//     if(flag === true){
//         demo.style.display = 'none';
//         flag = false;
//         this.value = 'Show';
//     }else{
//         demo.style.display = 'block';
//         flag = true;
//         this.value = "Hide"
//     }
// }

const onDblClickHandler = (event) => {
    cl(event)
    if (flag === true) {
        demo.style.display = 'none';
        flag = false;
        event.target.value = 'Show'
    } else {
        demo.style.display = 'block';
        flag = true;
        event.target.value = "Hide"
    }
}
// const onFocusHandler = function(){
//     cl("Hello")
//     this.style.backgroundColor = "pink"
// }
// const onFocusHandler = (e) => {
//     cl(e, "on Focus")
//     e.target.style.backgroundColor = "pink";
//     e.target.setAttribute('placeholder', 'Focus Is On')
// }

// const onBlurHandler = (eve) => {
//     cl(eve, "On Blur")
//     eve.target.style.backgroundColor = "#fff";
//     eve.target.setAttribute('placeholder', 'Blur is On')
// }
const oninputHandler = (e) => {
    if (e.type === 'focus') {
        cl(e, "on Focus")
        e.target.style.backgroundColor = "pink";
        e.target.setAttribute('placeholder', 'Focus Is On');
    } else if (e.type === 'blur') {
        cl(e, "On Blur")
        e.target.style.backgroundColor = "#fff";
        e.target.setAttribute('placeholder', 'Blur is On');
    }
}
const onmouseOverHandler = (eve) => {
    cl(eve.target);
    eve.target.style.backgroundColor = 'blueviolet'
}
const onmouseOutHandler = (eve) => {
    eve.target.style.backgroundColor = 'gold'
}

const onJsStackOverHandler = (eve) => {
    eve.target.setAttribute('src', angularImgUrl)
}
const onJsStackOutHandler = (eve) => {
    eve.target.setAttribute('src', jsImageUrl)
}
const onKeyDownHandler = (eve) => {
    // cl(eve.target.value)
}

const onKeyUp = (eve) => {
    cl(eve.target.value)
}

const onBgChange = (eve) => {
    // cl(eve.target.value);
    body.style.backgroundColor = eve.target.value;
}

// addEventListener 
// btn.addEventListener('click', onDblClickHandler);
btn.addEventListener('dblclick', onDblClickHandler);
// fname.addEventListener('focus', onFocusHandler);
// fname.addEventListener('blur', onBlurHandler);
fname.addEventListener('focus', oninputHandler);
fname.addEventListener('blur', oninputHandler);
demo.addEventListener('mouseover', onmouseOverHandler);
demo.addEventListener('mouseout', onmouseOutHandler);
jsStack.addEventListener('mouseover', onJsStackOverHandler);
jsStack.addEventListener('mouseout', onJsStackOutHandler);


// keydown and keyup
fname.addEventListener('keydown', onKeyDownHandler);

fname.addEventListener('keyup', onKeyUp)
bgColor.addEventListener('change',onBgChange )
