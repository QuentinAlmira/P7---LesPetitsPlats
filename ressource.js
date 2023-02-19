recipes.forEach((recipe) => {});

// for (var i = 0; i < component.length; i++) {
//   console.log(component[i]);
// }

// recipe.ingredients.forEach((ingredient) => {
//   console.log(ingredient);
// });

let sequence = [1, 1, 2, 3, 5, 8, 13];

for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}


      // const pboxcontainer = document.createElement("div");
      // pboxcontainer.classList.add("ing_container");
      // recipeCardinfosMainIngredients.appendChild(pboxcontainer);

      // const pbox = document.createElement("p");
      // pboxcontainer.appendChild(pbox);
      // pbox.style.fontWeight = "bold";
      // // pbox.textContent = component[j].ingredient;

      // const pbox2 = document.createElement("p");
      // pboxcontainer.appendChild(pbox2);
      // // pbox2.textContent = ing;


      /*
function searchPerTag(element , tag){
  
  
  let filteredUstensils = element.ustensils.filter(
    (ust) =>
      ust.toLowerCase().includes(tag.toLowerCase())
  ) ;
 
  let filteredIngredients =  element.ingredients.filter(
    (ing) =>
      ing.ingredient.toLowerCase().includes(tag.toLowerCase())
  );

  // si le tag est disponible sur filteredIng ou filteredUnstensil ou sur appliance 
  // l'element doit etre pusher au tableau resultat 

  if(element.appliance.toLowerCase().includes(tag.toLowerCase()) || filteredIngredients.length>=1  || filteredUstensils.length>=1 ){
    // inserer l'element dans le tableau resultant 
    return element;
  }
 else return null;
}
*/