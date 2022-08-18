// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', () => {
    // step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3:get password inside the password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // for Error handel massage
    const emailErrorElement = document.getElementById('email-error');
    emailErrorElement.innerText = '';
    const passwordErrorElement = document.getElementById('password-error');
    passwordErrorElement.innerText = '';

    // DANGER: Do not verify email password on the client side.
    // step-4: verify email and password and check whether valid user or not.
    if (email === 'sunnybdd2013@gmail.com' && password === '#sunny#') {
        window.location.href = 'Inside-bank.html';
    } else if (email !== 'sunnybdd2013@gmail.com') {
        // const emailErrorElement = document.getElementById('email-error');
        emailErrorElement.innerText = 'Invalid Email'
    } else if (password !== '#sunny#') {
        // const passwordErrorElement = document.getElementById('password-error');
        passwordErrorElement.innerText = 'Invalid Password'
    }



})