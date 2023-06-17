const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');
const valueEl = input.valueEl;

input.addEventListener('change', e => {
    text.style.fontSize = `${e.target.value }px`
})