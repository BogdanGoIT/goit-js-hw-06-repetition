const input = document.querySelector('input#font-size-control');
const span = document.querySelector('span#text');

input.addEventListener('input', (evt) => {
        span.style.fontSize = `${evt.currentTarget.value}px`;
})