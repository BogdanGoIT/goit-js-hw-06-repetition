const input = document.querySelector("#validation-input");

input.addEventListener('blur', (evt) => {
    if(Number(input.dataset.length) === evt.currentTarget.value.length){
        input.classList.remove('invalid')
        input.classList.add('valid');
    }else{
        input.classList.add('invalid');
    }
  
})