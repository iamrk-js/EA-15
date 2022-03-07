let cl = console.log;

const filter = document.getElementById('filter');
const allDivs = Array.from(document.querySelectorAll('.all'))
// cl(allDivs)

const onFilterHandler = (eve) => {
    let getSelectedColor = "."+eve.target.value;
    cl(getSelectedColor);
    // allDivs.style.display = 'none'
    allDivs.forEach(ele => {
        ele.style.display = 'none'
    })
    let getClass = Array.from(document.querySelectorAll(getSelectedColor));
    cl(getClass)
    getClass.forEach(ele => {
        ele.style.display = 'inline-block'
    })
}



filter.addEventListener('change', onFilterHandler)
