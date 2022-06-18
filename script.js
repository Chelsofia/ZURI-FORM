const form = document.getElementById('form');
const fname = document.getElementById('fname');
const name2 = document.getElementById('name2');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const field = element.parentElement;
    const errorDisplay = field.querySelector('.error');

    errorDisplay.innerText = message;
    field.classList.add('error');
    field.classList.remove('success')
}
const setSuccess = (element) => {
    const field = element.parentElement;
    const errorDisplay = field.querySelector(".error");

    errorDisplay.innerText = '';
    field.classList.add('success');
    field.classList.remove('error');
};

const isValidEmail = email => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const name2Value = name2.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fnameValue === '') {
        setError(
          fname,'First Name cannot be empty');
    } else {
        setSuccess(fname);
    }

    if (name2Value === '') {
        setError(name2, 'Last Name cannot be empty');
    } else {
        setSuccess(name2);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    }

};

