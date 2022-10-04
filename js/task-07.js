const sizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControl.addEventListener('input', controller)

function controller() {
    textEl.style.fontSize = `${sizeControl.value}px`
};