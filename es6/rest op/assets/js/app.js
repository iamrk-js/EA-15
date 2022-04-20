var cl = console.log;

const jump = document.getElementById("jump");

// let getText = jump.textContent;

// cl(getText);

// let getTextArr = [...getText];
// cl(getTextArr);

// let newArr = getTextArr.map(letter => {
//     return `<span>${letter}</span>`
// })

// cl(newArr);

// jump.innerHTML = newArr.join('');

function spanWrap(text) {
  return [...text].map((letter) => `<span>${letter}</span>`).join('');
}
jump.innerHTML = spanWrap(jump.textContent);
