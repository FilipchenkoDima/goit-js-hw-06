const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients')

ingredients.map(ingredient => {
  const ingredientListElement = document.createElement('li')
  ingredientListElement.textContent = `${ingredient}`;
  ingredientListElement.classList.add('item');
  return ingredientsList.append(ingredientListElement);
})