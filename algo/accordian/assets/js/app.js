let cl = console.log;

const accoHeading = Array.from(document.querySelectorAll('.accoHeading'));

cl(accoHeading)

const onHeadingClickHandler = (eve) => {
    let classState = eve.target.className;
    cl(classState)
    accoHeading.forEach(head => {
        head.classList.remove('active');
    })
    if(classState.includes('active')){
        eve.target.classList.remove('active');
    }else{
        eve.target.classList.add('active');
    }
}

accoHeading.forEach(heading => {
    heading.addEventListener('click', onHeadingClickHandler)
})