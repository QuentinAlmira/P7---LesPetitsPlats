async function getRecipes() {
  let recipes = [];

  await fetch("recipes.json")
    .then((response) => response.json())
    .then((data) => {
      recipes = data.recipes;
    })
    .catch((error) => {
      alert(
        "Une erreur est survenue, veuillez contacter l'administrateur du site !! "
      );
      console.log(error);
    });

  return { recipes: [...recipes] };
}
