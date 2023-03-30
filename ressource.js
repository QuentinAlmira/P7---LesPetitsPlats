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

if (type === "ingredients") {
  const listeIngredient = document.querySelector(
    ".liste_container.ingredients"
  );

  let unique = Array.from(new Set(ingredientsArray));

  unique.forEach((recipe) => {
    const filterIng = document.createElement("p");
    filterIng.setAttribute("id", recipe);
    filterIng.classList.add("liste_element");
    filterIng.classList.add("ingredient");
    filterIng.textContent = recipe;
    let test = filterIng.textContent;

    filterIng.addEventListener("click", () => {
      if (!filterIng.classList.contains("selected")) {
        filterIng.classList.add("selected");
        creatTags(test, "ingredient");
      }
      const filterTag = document.querySelector(".filter_tag_box");
      filterTag.style.display = "flex";
    });
    listeIngredient.appendChild(filterIng);
  });
}

export function creatItemList(type) {
  if (type === "ingredients") {
    const listeIngredient = document.querySelector(
      ".liste_container.ingredients"
    );

    const unique = Array.from(new Set(ingredientsArray));

    unique.forEach((recipe) => {
      const filterIng = document.createElement("p");
      filterIng.setAttribute("id", recipe);

      filterIng.classList.add("liste_element");
      filterIng.classList.add("ingredient");
      filterIng.textContent = recipe;
      let test = filterIng.textContent;

      filterIng.addEventListener("click", () => {
        if (!filterIng.classList.contains("selected")) {
          filterIng.classList.add("selected");
          creatTags(test, "ingredient");
        }
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
      });
      listeIngredient.appendChild(filterIng);
    });
  }

  if (type === "appliance") {
    const listeAppareils = document.querySelector(".liste_container.appareils");

    let unique = Array.from(new Set(appareilsArray));

    unique.forEach((appareilsName) => {
      const filterApp = document.createElement("p");
      filterApp.setAttribute("id", appareilsName);
      filterApp.classList.add("liste_element");
      filterApp.classList.add("appareils");
      filterApp.textContent = appareilsName;

      filterApp.addEventListener("click", () => {
        if (!filterApp.classList.contains("selected")) {
          filterApp.classList.add("selected");
          creatTags(appareilsName, "appliance");
        }

        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
      });

      listeAppareils.appendChild(filterApp);
    });
  }

  if (type === "ustensil") {
    const listeUstensiles = document.querySelector(
      ".liste_container.ustensiles"
    );

    let unique = Array.from(new Set(ustensilesArray));

    unique.forEach((ustensileName) => {
      const filterUstensiles = document.createElement("p");
      filterUstensiles.setAttribute("id", ustensileName);
      filterUstensiles.classList.add("liste_element");
      filterUstensiles.classList.add("ustensiles");
      filterUstensiles.textContent = ustensileName;

      filterUstensiles.addEventListener("click", () => {
        if (!filterUstensiles.classList.contains("selected")) {
          filterUstensiles.classList.add("selected");
          creatTags(ustensileName, "ustensil");
        }
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
      });

      listeUstensiles.appendChild(filterUstensiles);
    });
  }
}

/*
    let result = filteredArr.filter((element) =>
      element.ustensils.some((ustensil) =>
        ustensil.toLocaleLowerCase().includes(searchStringUst)
      )
    );*/

const ItemSearchBox = document.createElement("div");
ItemSearchBox.classList.add("filter_search_box");
ItemSearchBox.classList.add(type);
ItemSearchBox.style.display = "none";

const ItemSearchInput = document.createElement("input");
ItemSearchInput.classList.add("filter_search_input");
ItemSearchInput.classList.add(type);
ItemSearchInput.setAttribute("placeholder", "Rechercher un" + type);
ItemSearchBox.appendChild(ItemSearchInput);

const ItemSearchChevron = document.createElement("i");
ItemSearchChevron.classList.add("chevron_open");
ItemSearchChevron.classList.add("fas");
ItemSearchChevron.classList.add("fa-chevron-down");
ItemSearchChevron.classList.add("dropdown-item__icon");
ItemSearchChevron.classList.add(type);
ItemSearchBox.appendChild(ItemSearchChevron);

const listeItem = document.createElement("div");
listeItem.classList.add("filter_liste");
listeItem.classList.add(type);
listeItem.style.display = "none";

const listeItemContainer = document.createElement("div");
listeItemContainer.classList.add("liste_container");
listeItemContainer.classList.add(type);
listeItem.appendChild(listeItemContainer);

const ItemSearchBoxIng = document.querySelector(
  ".filter_search_input.ingredients"
);

ItemSearchBoxIng.addEventListener("input", function (e) {
  const searchStringIng = e.target.value.toLocaleLowerCase();
  inputListFilter(filteredArrAppTag, searchStringIng, "ingredients");
});

const ItemSearchBoxIng = document.querySelector(
  ".filter_search_input.ingredients"
);

if (searchSectionInput.classList.contains("tag")) {
  ItemSearchBoxIng.addEventListener("input", function (e) {
    const searchStringIng = e.target.value.toLocaleLowerCase();
    inputListFilter(filteredArrAppTag, searchStringIng, "ingredients");
  });
}
