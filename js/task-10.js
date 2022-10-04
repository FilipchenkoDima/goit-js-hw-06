function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesStorage = document.querySelector('#boxes');

controlsEl.addEventListener('change', getNumb);
destroyBtn.addEventListener('click', destroyBoxes)

function getNumb(event) {
  event.target.value;

  for (let i = 1; i <= event.target.value; i += 1) {
    boxesStorage.insertAdjacentHTML('afterbegin', `<div style='background-color: ${getRandomHexColor()};width: ${30 + 10 * [i]}px;height: ${30 + 10 * [i]}px'></div>`);
  }
};

function destroyBoxes() {
  boxesStorage.innerHTML = '';
};
