const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', textOutput);

function textOutput(event) {
    if (event.currentTarget.value === '') {
        return output.textContent = 'Anonymous'
    }
    return output.textContent = event.currentTarget.value;

    // return event.currentTarget.value === '' ? output.textContent = 'Anonymous' : output.textContent = event.currentTarget.value;
};
