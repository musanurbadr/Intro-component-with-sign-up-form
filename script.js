const from = document.getElementById('form');
const first = document.getElementById('Firstname');
const user = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');

// const form = document.getElementById('userForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const usernameValue = first.value.trim();
    const userlValue = user.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (usernameValue === '') {
    setError(first, 'First Name cannot be empty');
    }else {
        seccesFunc(first);
    }
    if (userlValue === '') {
    setError(user, 'Last Name cannot be empty');
    } else {
        seccesFunc(user);
    }
    if (emailValue === '') {
        setError(email, 'Looks like this is not an email');
    } else if (!emailValue.match(pattern)) {
        setError(email);
    } else {
        seccesFunc(email);
    }
    if (passValue === '') {
        setError(pass, 'Password cannot be empty');
    } else if (passValue.length < 8) {
        setError(pass);
    } else {
        seccesFunc(pass);
    }
});

function setError(element, message){
    const inputControl = element.parentElement;
    const errorLabel = inputControl.querySelector('span');
    // const errorIcon = inputControl.querySelector('.error-icon');
    errorLabel.innerText = message;
    element.className += 'error';
    errorLabel.className += 'error-text';
    if (element !== email){
        element.value = '';
    }else{
        element.style.color = 'hsl(0 , 100% , 74%)';
    }
};

function seccesFunc(element){
    element.className = 'success';
    
}