const categorys = document.querySelectorAll('ul#categories li.item');


console.log('Number of categories:', categorys.length);


categorys.forEach((category) => {
    console.log('Category:', category.children[0].textContent);
    console.log('Elements:', category.children[1].children.length);
});

