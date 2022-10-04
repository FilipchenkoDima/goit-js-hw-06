const form = document.querySelector('.login-form');

form.addEventListener('submit', formInp);


function formInp(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені');
    };
    let dataInfo = {
        email: email.value,
        password: password.value,
    };
    console.log(dataInfo);
    form.reset();
};

