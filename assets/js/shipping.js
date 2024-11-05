document.getElementById('nextButton').addEventListener('click', function () {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('invalid-field');
    });

    let isValid = true;
    inputs.forEach(input => {
        if (input.required && !input.value) {
            input.classList.add('invalid-field');
            isValid = false;
        }
    });

    const email = document.getElementById('email').value;
    const emailVerification = document.getElementById('emailVerification').value;
    if (email !== emailVerification) {
        document.getElementById('emailWarning').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailWarning').style.display = 'none';
    }

    const password = document.getElementById('psw').value;
    const passwordVerification = document.getElementById('psw2').value;
    if (password !== passwordVerification) {
        document.getElementById('passWarning').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passWarning').style.display = 'none';
    }

    if (isValid) {
        window.location.href = 'next_page.html';
    } else {
        alert('Please fill in all required fields correctly.');
    }
});
