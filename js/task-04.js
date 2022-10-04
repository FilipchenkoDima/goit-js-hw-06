const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

increment.addEventListener('click', add);
decrement.addEventListener('click', minus);

let counterValue = 0;

function add() {
    counterValue += 1;
    value.textContent = counterValue;
};

function minus() {
    counterValue -= 1;
    value.textContent = counterValue;
};