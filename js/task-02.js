const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector("ul#ingredients");

ingredients.forEach(el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  
  ul.append(li)
});

















