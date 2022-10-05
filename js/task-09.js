function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', switchColor);

function switchColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
};
