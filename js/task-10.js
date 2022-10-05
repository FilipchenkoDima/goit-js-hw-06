function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesStorage = document.querySelector('#boxes');

createBtn.addEventListener('click', getNumber);
destroyBtn.addEventListener('click', destroyBoxes)

function getNumber() {
  let markupEl = ``;
  for (let i = 1; i <= controlsEl.children[0].value; i += 1) {
    markupEl += `<div style='background-color: ${getRandomHexColor()};width: ${30 + 10 * [i]}px;height: ${30 + 10 * [i]}px'></div>` 
  }
  boxesStorage.insertAdjacentHTML('afterbegin', markupEl);
};

function destroyBoxes() {
  boxesStorage.innerHTML = '';
};
