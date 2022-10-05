const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients')
const ingredientsArr = [];
ingredients.map(ingredient => {
  const ingredientListElement = document.createElement('li')
  ingredientListElement.textContent = `${ingredient}`;
  ingredientListElement.classList.add('item');
  ingredientsArr.push(ingredientListElement);
});

ingredientsList.append(...ingredientsArr);