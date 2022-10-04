const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', checkLength)

function checkLength(event) {
    if (Number(inputLength) === event.currentTarget.value.length) {
        input.classList.remove('invalid');
        return input.classList.add('valid');
    } 
    return input.classList.add('invalid');
}
