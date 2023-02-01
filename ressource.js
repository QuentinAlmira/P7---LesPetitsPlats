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


// function creatIngredientListeElement(recipes){

//   const ingredientsfilterOpened = document.getElementsByClassName(".filter_container_inbox");

//   const listeIngredient = document.createElement("div");
//   listeIngredient.classList.add("filter_liste");
//   listeIngredient.classList.add("ingredients");
//   ingredientsfilterOpened.appendChild(listeIngredient);

//   recipes.forEach((recipe) => {
//     let component = [recipe.ingredients];

//     console.log(component);

//     component.forEach((recip) => {
//       const listeIngredient = document.querySelector(".filter_liste ingredients");

//       recip.forEach((ingredient) => {
//         const filterIng = document.createElement("p");
//         filterIng.classList.add("liste_element");
//         filterIng.classList.add("ingredient");
//         filterIng.textContent = ingredient.ingredient;

    

//         listeIngredient.appendChild(filterIng);
//       });
//     });
//   });
// }


// export function creatIngredientListe(ingredients) {

// const listeIngredient = document.createElement("div");
// listeIngredient.classList.add("filter_liste");
// listeIngredient.classList.add("ingredients");
// filterBox1.appendChild(listeIngredient);

//   ingredients.forEach((recipe) => {
    
//     recipe.ingredients.forEach((ingredient) => {
//        ingredients.push(ingredient);
//         const filterIng = document.createElement("p");
//         filterIng.classList.add("liste_element");
//         filterIng.classList.add("ingredient");
//         filterIng.textContent = ingredient.ingredient;
//         filterIng.addEventListener('click', () => { console.log(filterIng.textContent);});
//         listeIngredient.appendChild(filterIng);
      
//     });
//   });

// }


// function searchIngredientsPerTag(searchWord) {


   
//   let newIngredients = ingredients.filter((ingredient) => {
//        ingredient === searchWord  
//     });
//  return newIngredients;
// }

// searchIngredientsPerTag();


// Display filtered ingredient list based on ingredient box input

  // listen to  searchbar input
