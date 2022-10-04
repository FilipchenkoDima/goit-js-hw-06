const numbOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numbOfCategories}`);

const categories = document.querySelector('#categories');
const categoriesItem = categories.children;

for (let i = 0; i < categoriesItem.length; i += 1) {
    console.log(`Category: ${categoriesItem[i].firstElementChild.textContent}`);
    console.log(`Elements: ${categoriesItem[i].lastElementChild.children.length}`)
}