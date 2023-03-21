// Creat and display recipes cards

export function recipeCardFactory(recipes) {
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {});
  });
}

// Native

export function recipeCardFactory(recipes) {
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {}
  }
}
