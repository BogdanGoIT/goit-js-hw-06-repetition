const form = document.querySelector('form.login-form');

form.addEventListener('submit', onSubmitForm)

function onSubmitForm (evt) {
    evt.preventDefault();

    const dataForm = {
        email: evt.currentTarget.elements.email.value,
        password: evt.currentTarget.elements.password.value
    }

    if(dataForm.email && dataForm.password){
        console.log(dataForm);
        evt.currentTarget.reset();
    }
    else{ 
        alert('всі поля повинні бути заповнені')
    }
     
}

