function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector('#controls input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('div#boxes'),
}

refs.controls.addEventListener('input', evt => {
    console.log(Number(evt.currentTarget.value))

})

refs.create.addEventListener('click', createBoxes)


function createBoxes(amount) {
  for(let i = 0; i < Number(amount.target.value); i += 1){
    let div = document.createElement('div');
    console.log(div)
    refs.boxes.append(div);
  }
  
}
