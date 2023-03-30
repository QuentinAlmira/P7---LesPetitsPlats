// Fonctions importées :
import { recipeCardFactory } from "/scripts/RecipesCards.js";
import { creatTags } from "/scripts/TagsFactory.js";

// *****************Display datas recipes
const { recipes } = await getRecipes();
let dataArray = recipes;

// ****************
// // Creat Array for Ingredients/Appareils/Ustensiles****************
// ****************

function getIngredients(recipes) {
  // Creat ingredients array
  let ingredients = [];

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients.push(ingredient.ingredient);
    });
  });

  ingredients.sort();

  return Array.from(new Set(ingredients));
}

function getAppareils(recipes) {
  // Creat Appareils array
  let appareils = [];

  recipes.forEach((recipe) => {
    appareils.push(recipe.appliance);
  });

  appareils.sort();

  return Array.from(new Set(appareils));
}

function getUstensiles(recipes) {
  // Creat ustensils array
  let ustensiles = [];

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensiles.push(ustensil);
    });
  });

  ustensiles.sort();

  return Array.from(new Set(ustensiles));
}

export function displayItems(tableau) {
  recipeCardFactory(tableau);

  const ingredients = getIngredients(tableau);
  const containerIng = document.querySelector(".liste_container.ingredients");
  creatListItem(containerIng, ingredients, "ingredients", tableau);

  const appareils = getAppareils(tableau);
  const containerApp = document.querySelector(".liste_container.appareils");
  creatListItem(containerApp, appareils, "appareils", tableau);

  const ustensiles = getUstensiles(tableau);
  const containerUst = document.querySelector(".liste_container.ustensiles");
  creatListItem(containerUst, ustensiles, "ustensiles", tableau);

  ListeningtoList(tableau);
}

// *********************************************************
// Creation du header
// *********************************************************

const content = document.querySelector("#content");

const indexHeader = document.createElement("header");
content.appendChild(indexHeader);

const headerLink = document.createElement("a");
headerLink.setAttribute("href", "/index.html");
headerLink.classList.add("header__link");
headerLink.setAttribute("aria-label", "Recharger la page");
indexHeader.appendChild(headerLink);

const headerLinkLogo = document.createElement("img");
headerLinkLogo.setAttribute("src", "./assets/logo.svg");
headerLinkLogo.setAttribute("alt", "Page d'acceuil Les petits plats");
headerLinkLogo.classList.add("header__logo");
headerLink.appendChild(headerLinkLogo);

// *********************************************************
// Main creation
// *********************************************************
const indexMain = document.createElement("main");
indexMain.classList.add("main");
indexMain.setAttribute("id", "main");
content.appendChild(indexMain);

// *********************************************************
// Main search section creation
// *********************************************************

const searchSection = document.createElement("div");
searchSection.classList.add("search_section");
indexMain.appendChild(searchSection);

const searchBox = document.createElement("div");
searchBox.classList.add("search_section__searchbox");
searchSection.appendChild(searchBox);

// add search input
const searchSectionInput = document.createElement("input");
searchSectionInput.classList.add("searchbox_input");
searchSectionInput.setAttribute("placeholder", "Rechercher une recette");
searchBox.appendChild(searchSectionInput);

// Add search icon
const searchIcon = document.createElement("i");
searchIcon.classList.add("fas");
searchIcon.classList.add("fa-search");
searchIcon.classList.add("search-principal__icon");
searchBox.appendChild(searchIcon);

// Filter tags creation
// *********************************************************

const filterTag = document.createElement("div");
filterTag.classList.add("filter_tag_box");
indexMain.appendChild(filterTag);

const filterTagContainer = document.createElement("div");
filterTagContainer.classList.add("filter_tag_container");
filterTag.appendChild(filterTagContainer);
filterTag.style.display = "none";

// *********************************************************
// Filter section creation
// *********************************************************

// Filter button creation
// *********************************************************
const filterButtons = document.createElement("div");
filterButtons.classList.add("filter_options");
indexMain.appendChild(filterButtons);

const filterContainer = document.createElement("div");
filterContainer.classList.add("filter_container");
filterButtons.appendChild(filterContainer);

// Filter box Ingredient ------->
const filterBox1 = document.createElement("div");
filterBox1.classList.add("filter_box");
filterBox1.classList.add("first");
filterBox1.classList.add("closed");
filterContainer.appendChild(filterBox1);
creatFilterBoxFrame("ingredients");

// Filterbox Appareils ------->
const filterBox2 = document.createElement("div");
filterBox2.classList.add("filter_box");
filterBox2.classList.add("second");
filterBox2.classList.add("closed");
filterContainer.appendChild(filterBox2);
creatFilterBoxFrame("appareils");

// Filter Ustensiles------->
const filterBox3 = document.createElement("div");
filterBox3.classList.add("filter_box");
filterBox3.classList.add("third");
filterBox3.classList.add("closed");
filterContainer.appendChild(filterBox3);
creatFilterBoxFrame("ustensiles");

// -------------------------

function creatFilterBoxFrame(type) {
  const filterBoxName = document.createElement("div");
  filterBoxName.classList.add("filter_box_name");
  filterBoxName.classList.add(type);

  const filterBoxTexte = document.createElement("p");
  filterBoxTexte.classList.add("filter_box_text");
  filterBoxName.appendChild(filterBoxTexte);

  const filterBoxChevron = document.createElement("i");
  filterBoxChevron.classList.add("chevron");
  filterBoxChevron.classList.add("fas");
  filterBoxChevron.classList.add("fa-chevron-down");
  filterBoxChevron.classList.add("dropdown-item__icon");
  filterBoxChevron.classList.add("closed");
  filterBoxChevron.classList.add(type);
  filterBoxChevron.setAttribute("id", `chevronUp ${type}`);

  filterBoxName.appendChild(filterBoxChevron);

  const ItemSearchBox = document.createElement("div");
  ItemSearchBox.classList.add("filter_search_box");
  ItemSearchBox.classList.add(type);
  ItemSearchBox.style.display = "none";

  const ItemSearchInput = document.createElement("input");
  ItemSearchInput.classList.add("filter_search_input");
  ItemSearchInput.classList.add(type);
  ItemSearchInput.setAttribute("placeholder", "Rechercher des " + type);
  ItemSearchBox.appendChild(ItemSearchInput);

  const ItemSearchChevron = document.createElement("i");
  ItemSearchChevron.classList.add("chevron_open");
  ItemSearchChevron.classList.add("fas");
  ItemSearchChevron.classList.add("fa-chevron-down");
  ItemSearchChevron.classList.add("dropdown-item__icon");
  ItemSearchChevron.classList.add(type);
  ItemSearchChevron.setAttribute("id", `chevronDown ${type}`);
  ItemSearchBox.appendChild(ItemSearchChevron);

  const listeItem = document.createElement("div");
  listeItem.classList.add("filter_liste");
  listeItem.classList.add(type);
  listeItem.style.display = "none";

  const listeItemContainer = document.createElement("div");
  listeItemContainer.classList.add("liste_container");
  listeItemContainer.classList.add(type);
  listeItem.appendChild(listeItemContainer);

  if (type === "ingredients") {
    filterBox1.appendChild(filterBoxName);
    filterBoxTexte.textContent = "Ingredients";
    filterBox1.appendChild(ItemSearchBox);
    filterBox1.appendChild(listeItem);
  }

  if (type === "appareils") {
    filterBox2.appendChild(filterBoxName);
    filterBoxTexte.textContent = "Appareils";
    filterBox2.appendChild(ItemSearchBox);
    filterBox2.appendChild(listeItem);
  }

  if (type === "ustensiles") {
    filterBox3.appendChild(filterBoxName);
    filterBoxTexte.textContent = "Ustensiles";
    filterBox3.appendChild(ItemSearchBox);
    filterBox3.appendChild(listeItem);
  }
}

// *******Display Item list********

// -----Ingredients----

// Open and display ingredient list :
const filterBoxChevronIng = document.getElementById("chevronUp ingredients");
const filterBoxNameIng = document.querySelector(".filter_box_name.ingredients");
const ItemSearchBoxIng = document.querySelector(
  ".filter_search_box.ingredients"
);
const listeItemIng = document.querySelector(".filter_liste.ingredients");

// Open ingredients List
filterBoxChevronIng.addEventListener("click", function () {
  filterBox1.classList.remove("closed");
  filterBox1.classList.add("opened");
  filterBoxNameIng.style.display = "none";
  ItemSearchBoxIng.style.display = "flex";
  listeItemIng.style.display = "flex";
});

// Close ingredients liste
const ItemSearchChevronIng = document.getElementById("chevronDown ingredients");
ItemSearchChevronIng.addEventListener("click", function () {
  filterBox1.classList.add("closed");
  filterBox1.classList.remove("opened");
  filterBoxNameIng.style.display = "flex";
  ItemSearchBoxIng.style.display = "none";
  listeItemIng.style.display = "none";
});

// -----Appareils----

// // Open and display appareils list :
const filterBoxChevronApp = document.getElementById("chevronUp appareils");
const filterBoxNameApp = document.querySelector(".filter_box_name.appareils");
const ItemSearchBoxApp = document.querySelector(".filter_search_box.appareils");
const listeItemApp = document.querySelector(".filter_liste.appareils");

// Open appareils List
filterBoxChevronApp.addEventListener("click", function () {
  filterBox2.classList.remove("closed");
  filterBox2.classList.add("opened");
  filterBoxNameApp.style.display = "none";
  ItemSearchBoxApp.style.display = "flex";
  listeItemApp.style.display = "flex";
});

// Close appareils liste
const ItemSearchChevronApp = document.getElementById("chevronDown appareils");
ItemSearchChevronApp.addEventListener("click", function () {
  filterBox2.classList.remove("opened");
  filterBox2.classList.add("closed");
  filterBoxNameApp.style.display = "flex";
  ItemSearchBoxApp.style.display = "none";
  listeItemApp.style.display = "none";
});

// -----Ustensiles----

// Open and display ustensiles list :

const filterBoxChevronUst = document.getElementById("chevronUp ustensiles");
const filterBoxNameUst = document.querySelector(".filter_box_name.ustensiles");
const ItemSearchBoxUst = document.querySelector(
  ".filter_search_box.ustensiles"
);
const listeItemUst = document.querySelector(".filter_liste.ustensiles");

// Open Ustensiles List
filterBoxChevronUst.addEventListener("click", function () {
  filterBox3.classList.remove("closed");
  filterBox3.classList.add("opened");
  filterBoxNameUst.style.display = "none";
  ItemSearchBoxUst.style.display = "flex";
  listeItemUst.style.display = "flex";
});

// Close Ustensiles list
const ItemSearchChevronUst = document.getElementById("chevronDown ustensiles");
ItemSearchChevronUst.addEventListener("click", function () {
  filterBox3.classList.remove("opened");
  filterBox3.classList.add("closed");
  filterBoxNameUst.style.display = "flex";
  ItemSearchBoxUst.style.display = "none";
  listeItemUst.style.display = "none";
});

// <--------------------------

// // listen to ingredients filter input

export function ListeningtoList(tableau) {
  const ItemSearchBoxIng = document.querySelector(
    ".filter_search_input.ingredients"
  );
  ItemSearchBoxIng.addEventListener("input", function (e) {
    const searchStringIng = e.target.value.toLocaleLowerCase();
    inputListFilter(tableau, searchStringIng, "ingredients");
  });

  ItemSearchBoxApp.addEventListener("input", function (e) {
    const searchStringIng = e.target.value.toLocaleLowerCase();
    inputListFilter(tableau, searchStringIng, "appareils");
  });

  ItemSearchBoxUst.addEventListener("input", function (e) {
    const searchStringIng = e.target.value.toLocaleLowerCase();
    inputListFilter(tableau, searchStringIng, "ustensiles");
  });
}

// *********************************************************
// Recipe card section
// *********************************************************

const cardSection = document.createElement("div");
cardSection.classList.add("recipes_card_section");
cardSection.setAttribute("id", "recipes_card_section");
indexMain.appendChild(cardSection);
displayItems(recipes);

// ****************
// Main research with "filter" method****************
// ****************

// listen to searchbar input

export function ListeningtoMainResearch(tableau) {
  searchSectionInput.addEventListener("input", function (e) {
    filterData(tableau);
  });
}

ListeningtoMainResearch(dataArray);

function filterData(tableau) {
  const containerIng = document.querySelector(".liste_container.ingredients");
  const containerApp = document.querySelector(".liste_container.appareils");
  const containerUst = document.querySelector(".liste_container.ustensiles");
  containerIng.innerHTML = "";
  containerApp.innerHTML = "";
  containerUst.innerHTML = "";

  document.querySelector(".recipes_card_section").innerHTML = "";

  const searchString = searchSectionInput.value;

  if (searchString.length >= 3) {
    let filteredArr = [];

    // filter with search
    let filter = searchSectionInput.value;

    filteredArr = filterNative(tableau, filter);

    // -------------------------------------
    // Ingredients searchbar input
    // -------------------------------------

    ListeningtoList(filteredArr);

    displayItems(filteredArr);
  } else {
    displayItems(tableau);
  }
}

function filterNative(tableau, searchString) {
  let tableauFilter = [];

  for (let index = 0; index < tableau.length; index++) {
    const element = tableau[index];

    if (
      element.name.toLocaleLowerCase().includes(searchString) ||
      element.description.toLocaleLowerCase().includes(searchString) ||
      checkIng(element, searchString)
    ) {
      tableauFilter.push(element);
    }
  }
  return tableauFilter;
}

function checkIng(recipe, searchString) {
  for (let index = 0; index < recipe.ingredients.length; index++) {
    const element = recipe.ingredients[index];

    if (element.ingredient.toLocaleLowerCase().includes(searchString))
      return true;
  }
  return false;
}

// ****************
// // Creat and fill list of ing/app/ust****************
// ****************

// Creat list item frame
export function creatListItem(container, tableau, type, maintableau) {
  container.innerHTML = "";

  const NewTableau = Array.from(new Set(tableau));

  if (NewTableau.length == 0) {
    const errorMsg = document.createElement("h4");
    if (type == "ustensiles") {
      errorMsg.textContent = `Aucun ustensile ne correspond à votre recherche !`;
    }
    if (type == "ingredients") {
      errorMsg.textContent = `Aucun ingredient ne correspond à votre recherche !`;
    }
    if (type == "appareils") {
      errorMsg.textContent = `Aucun appareil ne correspond à votre recherche !`;
    }
    container.appendChild(errorMsg);
  } else {
    NewTableau.forEach((element) => {
      const item = document.createElement("p");
      item.setAttribute("id", element);
      item.textContent = element;
      item.classList.add("liste_element");
      if (type == "ustensiles") {
        item.classList.add("ustensiles");
      }
      if (type == "ingredients") {
        item.classList.add("ingredient");
      }
      if (type == "appareils") {
        item.classList.add("appareils");
      }

      item.addEventListener("click", () => {
        if (!item.classList.contains("selected")) {
          item.classList.add("selected");
          if (type == "ustensiles") {
            creatTags(element, "ustensiles", maintableau);
          }
          if (type == "ingredients") {
            creatTags(element, "ingredients", maintableau);
          }
          if (type == "appareils") {
            creatTags(element, "appareils", maintableau);
          }
        }

        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
      });

      container.appendChild(item);
    });
  }
}

// Fill item frame list
export function inputListFilter(tableau, string, type) {
  if (type === "ingredients") {
    const containerIng = document.querySelector(".liste_container.ingredients");
    containerIng.innerHTML = "";

    let ingredientsArray = [];

    tableau.forEach((el) => {
      el.ingredients.forEach((el) => {
        ingredientsArray.push(el.ingredient);
      });
    });

    const ing = ingredientsArray.filter((element) =>
      element.toLocaleLowerCase().includes(string)
    );

    creatListItem(containerIng, ing, type, tableau);
  }

  if (type === "appareils") {
    const containerApp = document.querySelector(".liste_container.appareils");
    containerApp.innerHTML = "";

    let appareilsArray = [];

    const app = tableau.filter((element) =>
      element.appliance.toLocaleLowerCase().includes(string)
    );

    app.forEach((appareil) => {
      appareilsArray.push(appareil.appliance);
    });

    creatListItem(containerApp, appareilsArray, "appareils", tableau);
  }

  if (type === "ustensiles") {
    const containerUst = document.querySelector(".liste_container.ustensiles");
    containerUst.innerHTML = "";

    let ustensilArray = [];

    tableau.forEach((el) => {
      el.ustensils.forEach((el) => {
        ustensilArray.push(el);
      });
    });

    const ust = ustensilArray.filter((element) =>
      element.toLocaleLowerCase().includes(string)
    );

    creatListItem(containerUst, ust, "ustensiles", tableau);
  }
}
