const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');

input.addEventListener('input', (evt) => {
        span.textContent = input.value ? evt.currentTarget.value : "Anonymous";
})