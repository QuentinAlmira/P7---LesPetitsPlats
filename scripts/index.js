// Fonctions importées :
import { recipeCardFactory } from "/scripts/RecipesCards.js";
import { CreatFilterbox1 } from "/scripts/FilterBoxFactory.js";
import { CreatFilterbox2 } from "/scripts/FilterBoxFactory.js";
import { CreatFilterbox3 } from "/scripts/FilterBoxFactory.js";
import { creatTags } from "/scripts/TagsFactory.js";

// *****************Display datas API dependent

let dataArray;

async function init() {
  const { recipes } = await getRecipes();
  dataArray = recipes;
  recipeCardFactory(dataArray);
  getIngredients(dataArray);
  getAppareils(dataArray);
  getUstensiles(dataArray);
}
init();

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

const searchSection = document.createElement("section");
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
// Fill ingredient filter box
CreatFilterbox1();
// <---------------------------

// Filterbox Appareils ------->
const filterBox2 = document.createElement("div");
filterBox2.classList.add("filter_box");
filterBox2.classList.add("second");
filterBox2.classList.add("closed");
filterContainer.appendChild(filterBox2);
// Fill Appareils filter box
CreatFilterbox2();
// <--------------------------

// Filter Ustensiles------->
const filterBox3 = document.createElement("div");
filterBox3.classList.add("filter_box");
filterBox3.classList.add("third");
filterBox3.classList.add("closed");
filterContainer.appendChild(filterBox3);
CreatFilterbox3();
// <--------------------------

// *********************************************************
// Recipe card section
// *********************************************************

const cardSection = document.createElement("section");
cardSection.classList.add("recipes_card_section");
cardSection.setAttribute("id", "recipes_card_section");
indexMain.appendChild(cardSection);

// Main research with "filter" method****************

// listen to searchbar input
searchSectionInput.addEventListener("input", filterData);

function filterData(e) {
  document.querySelector(".recipes_card_section").innerHTML = "";
  // filter with search

  let filter = e.target.value.toUpperCase();
  let recipeFiltered = [];
  // filter by input
  recipeFiltered = filterNative(dataArray, filter);

  // Creat new card filtered
  recipeCardFactory(recipeFiltered);
}

// *********************************************************
//  Creat Arrays for Ingredients/Appareils/Ustensiles
// *********************************************************

// Ingredients array
var ingredientsArray = [];
function getIngredients(dataArray) {
  dataArray.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredientsArray.push(ingredient.ingredient);
    });
  });
}

// Appareils array
var appareilsArray = [];
function getAppareils(dataArray) {
  dataArray.forEach((recipe) => {
    appareilsArray.push(recipe.appliance);
  });
}

// Ustensils array
var ustensilesArray = [];
function getUstensiles(dataArray) {
  dataArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensile) => {
      ustensilesArray.push(ustensile);
    });
  });
}

// *********************************************************
//  Creat elements for filter Box
// *********************************************************

// Creat a frame Factory for Ing/App/Ust filters

export function creatItemListFrame(type) {
  const ItemSearchBox = document.createElement("div");
  ItemSearchBox.classList.add("filter_search_box");

  const ItemSearchInput = document.createElement("input");
  ItemSearchInput.classList.add("filter_search_input");
  ItemSearchBox.appendChild(ItemSearchInput);

  const ItemSearchChevron = document.createElement("i");
  ItemSearchChevron.classList.add("chevron_open");
  ItemSearchChevron.classList.add("fas");
  ItemSearchChevron.classList.add("fa-chevron-down");
  ItemSearchChevron.classList.add("dropdown-item__icon");
  ItemSearchBox.appendChild(ItemSearchChevron);

  const listeItem = document.createElement("div");
  listeItem.classList.add("filter_liste");

  const listeItemContainer = document.createElement("div");
  listeItemContainer.classList.add("liste_container");
  listeItem.appendChild(listeItemContainer);

  if (type === "ingredients") {
    filterBox1.appendChild(listeItem);
    ItemSearchBox.classList.add("ingredients");
    ItemSearchInput.classList.add("ingredients");
    ItemSearchInput.setAttribute("placeholder", "Rechercher un ingredient");
    listeItem.classList.add("ingredients");
    listeItemContainer.classList.add("ingredients");
    filterBox1.appendChild(ItemSearchBox);
    filterBox1.appendChild(listeItem);

    // Close ingredient filter

    ItemSearchChevron.addEventListener("click", function () {
      CreatFilterbox1();

      filterBox1.classList.remove("opened");
      filterBox1.classList.add("closed");

      ItemSearchBox.remove();
      const listeItem = document.querySelector(".filter_liste.ingredients");
      listeItem.remove();
    });

    ItemSearchInput.addEventListener("input", filterDataIng);
  }
  if (type === "appliance") {
    ItemSearchBox.classList.add("appareils");
    ItemSearchInput.classList.add("appareils");
    ItemSearchInput.setAttribute("placeholder", "Rechercher un appareil");
    listeItem.classList.add("appareils");
    listeItemContainer.classList.add("appareils");
    filterBox2.appendChild(ItemSearchBox);
    filterBox2.appendChild(listeItem);

    ItemSearchChevron.addEventListener("click", function () {
      CreatFilterbox2();

      filterBox2.classList.remove("opened");
      filterBox2.classList.add("closed");

      ItemSearchBox.remove();
      const listeItem = document.querySelector(".filter_liste.appareils");
      listeItem.remove();
    });

    ItemSearchInput.addEventListener("input", filterDataApp);
  }
  if (type === "ustensil") {
    ItemSearchBox.classList.add("ustensiles");
    ItemSearchInput.classList.add("ustensiles");
    ItemSearchInput.setAttribute("placeholder", "Rechercher un ustensile");
    listeItem.classList.add("ustensiles");
    listeItemContainer.classList.add("ustensiles");
    filterBox3.appendChild(ItemSearchBox);
    filterBox3.appendChild(listeItem);

    ItemSearchChevron.addEventListener("click", function () {
      CreatFilterbox3();

      filterBox3.classList.remove("opened");
      filterBox3.classList.add("closed");

      ItemSearchBox.remove();
      const listeItem = document.querySelector(".filter_liste.ustensiles");
      listeItem.remove();
    });
    ItemSearchInput.addEventListener("input", filterDataUst);
  }
}

// Creat a List Factory for Ing/App/Ust items

export function creatItemListe(type) {
  if (type === "ingredient") {
    const listeIngredient = document.querySelector(
      ".liste_container.ingredients"
    );
    let unique = Array.from(new Set(ingredientsArray));

    for (let i = 0; i < unique.length; i++) {
      const filterIng = document.createElement("p");
      filterIng.setAttribute("id", unique[i]);
      filterIng.classList.add("liste_element");
      filterIng.classList.add("ingredient");
      filterIng.textContent = unique[i];
      let ingredientName = filterIng.textContent;

      filterIng.addEventListener("click", () => {
        if (!filterIng.classList.contains("selected")) {
          creatTags(ingredientName, "ingredient");
          const filterTag = document.querySelector(".filter_tag_box");
          filterTag.style.display = "flex";
          filterIng.classList.add("selected");
        }
      });
      listeIngredient.appendChild(filterIng);
    }
  }
  if (type === "appliance") {
    const listeAppareils = document.querySelector(".liste_container.appareils");

    let unique = Array.from(new Set(appareilsArray));

    for (let i = 0; i < unique.length; i++) {
      const filterApp = document.createElement("p");
      filterApp.setAttribute("id", unique[i]);
      filterApp.classList.add("liste_element");
      filterApp.classList.add("appareils");
      filterApp.textContent = unique[i];
      let appareilsName = filterApp.textContent;

      filterApp.addEventListener("click", () => {
        if (!filterApp.classList.contains("selected")) {
          creatTags(appareilsName, "appliance");
          const filterTag = document.querySelector(".filter_tag_box");
          filterTag.style.display = "flex";
          filterApp.classList.add("selected");
        }
      });
      listeAppareils.appendChild(filterApp);
    }
  }
  if (type === "ustensil") {
    const listeUstensiles = document.querySelector(
      ".liste_container.ustensiles"
    );

    let unique = Array.from(new Set(ustensilesArray));

    for (let i = 0; i < unique.length; i++) {
      const filterUstensiles = document.createElement("p");
      filterUstensiles.setAttribute("id", unique[i]);
      filterUstensiles.classList.add("liste_element");
      filterUstensiles.classList.add("ustensiles");
      filterUstensiles.textContent = unique[i];
      let ustensileName = filterUstensiles.textContent;

      filterUstensiles.addEventListener("click", () => {
        if (!filterUstensiles.classList.contains("selected")) {
          creatTags(ustensileName, "ustensil");
          const filterTag = document.querySelector(".filter_tag_box");
          filterTag.style.display = "flex";
          filterUstensiles.classList.add("selected");
        }
      });
      listeUstensiles.appendChild(filterUstensiles);
    }
  }
}

// **** * Filter list of items * ****

// Filter ingredient list with searchbar
function filterDataIng(e) {
  const listingIng = document.querySelector(".liste_container.ingredients");
  listingIng.innerHTML = "";

  let filter, i;
  filter = e.target.value.toUpperCase();
  let IngFiltered = [];
  // filter by input
  for (i = 0; i < ingredientsArray.length; i++) {
    if (ingredientsArray[i].toUpperCase().indexOf(filter) > -1) {
      const filteredArray = ingredientsArray[i];
      IngFiltered.push(filteredArray);
    }
  }
  // Remove similar ingredient name
  let unique = Array.from(new Set(IngFiltered));

  for (let i = 0; i < unique.length; i++) {
    const filterIng = document.createElement("p");
    filterIng.setAttribute("id", unique[i]);
    filterIng.classList.add("liste_element");
    filterIng.classList.add("ingredient");
    filterIng.textContent = unique[i];
    let test = filterIng.textContent;

    filterIng.addEventListener("click", () => {
      if (!filterIng.classList.contains("selected")) {
        creatTags(test, "ingredient");
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
        filterIng.classList.add("selected");
      }
    });

    listingIng.appendChild(filterIng);
  }
}

// Filter appareils list with searchbar
function filterDataApp(e) {
  const listingApp = document.querySelector(".liste_container.appareils");
  listingApp.innerHTML = "";

  const searchString = e.target.value.toLocaleLowerCase();

  let filter, i;
  filter = e.target.value.toUpperCase();
  let AppFiltered = [];
  // filter by input
  for (i = 0; i < appareilsArray.length; i++) {
    if (appareilsArray[i].toUpperCase().indexOf(filter) > -1) {
      const filteredArray = appareilsArray[i];
      AppFiltered.push(filteredArray);
    }
  }

  // Remove similar ingredient name
  let unique = Array.from(new Set(AppFiltered));

  for (let i = 0; i < unique.length; i++) {
    const filterApp = document.createElement("p");
    filterApp.setAttribute("id", unique[i]);
    filterApp.classList.add("liste_element");
    filterApp.classList.add("appareils");
    filterApp.textContent = unique[i];
    let appareilsName = filterApp.textContent;

    filterApp.addEventListener("click", () => {
      if (!filterApp.classList.contains("selected")) {
        creatTags(appareilsName, "appliance");
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
        filterApp.classList.add("selected");
      }
    });
    listingApp.appendChild(filterApp);
  }
}

// Filter ustensils list with searchbar
function filterDataUst(e) {
  const listingUst = document.querySelector(".liste_container.ustensiles");
  listingUst.innerHTML = "";

  const searchString = e.target.value.toLocaleLowerCase();

  let filter, i;
  filter = e.target.value.toUpperCase();
  let UstFiltered = [];
  // filter by input
  for (i = 0; i < ustensilesArray.length; i++) {
    if (ustensilesArray[i].toUpperCase().indexOf(filter) > -1) {
      const filteredArray = ustensilesArray[i];
      UstFiltered.push(filteredArray);
    }
  }

  // Remove similar ustensiles name
  let unique = Array.from(new Set(UstFiltered));

  for (let i = 0; i < unique.length; i++) {
    const filterUstensiles = document.createElement("p");
    filterUstensiles.setAttribute("id", unique[i]);
    filterUstensiles.classList.add("liste_element");
    filterUstensiles.classList.add("ustensil");
    filterUstensiles.textContent = unique[i];
    let ustensileName = filterUstensiles.textContent;

    filterUstensiles.addEventListener("click", () => {
      if (!filterUstensiles.classList.contains("selected")) {
        creatTags(ustensileName, "ustensil");
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
        filterUstensiles.classList.add("selected");
      }
    });
    listingUst.appendChild(filterUstensiles);
  }
}

function filterNative(tableau, objet) {
  let tableauFilter = [];

  for (let index = 0; index < tableau.length; index++) {
    const element = tableau[index];
    console.log(
      element.name.toUpperCase() +
        "/" +
        objet +
        "/" +
        element.name.toUpperCase().indexOf(objet)
    );
    if (element.name.toUpperCase().indexOf(objet) > -1) {
      tableauFilter.push(element);
    }
  }
  return tableauFilter;
}
