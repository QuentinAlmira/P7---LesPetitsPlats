// Fonctions importées :
import { recipeCardFactory } from "/scripts/RecipesCardsFactory.js";
import { CreatFilterbox1 } from "/scripts/FilterBoxFactory.js";
import { CreatFilterbox2 } from "/scripts/FilterBoxFactory.js";
import { CreatFilterbox3 } from "/scripts/FilterBoxFactory.js";


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

// *********************************************************
// Filter section creation
// *********************************************************

// Filter tags creation
// *********************************************************

const filterTag = document.createElement("div");
filterTag.classList.add("filter_tag_box");
indexMain.appendChild(filterTag);

function creatTags(){
  const tag = document.createElement("div");
  tag.classList.add("tag_item");
  tag.appendChild(filterTag);

  const tagName = document.createElement("div");
  tagName.classList.add("tag_name");
  tag.appendChild(tagName)

  const tagCross = document.createElement("div");
  tagCross.classList.add("tag_cross");
  tag.appendChild(tagCross);
}

creatTags();



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
CreatFilterbox2 ();
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
  const searchString = e.target.value.toLocaleLowerCase();

  // filter with search
  const filteredArr = dataArray.filter((el) =>
    el.name.toLocaleLowerCase().includes(searchString)
  );

  // Creat new card filtered
  recipeCardFactory(filteredArr);
}

// *************************************************************


// fill with ingredient
export function creatIngredientsListFrame(){

const ingredientSearchBox = document.createElement("div");
ingredientSearchBox.classList.add("filter_search_box");
ingredientSearchBox.classList.add("ingredients");
filterBox1.appendChild(ingredientSearchBox);

const ingredientsSearchInput = document.createElement("input");
ingredientsSearchInput.classList.add("filter_search_input");
ingredientsSearchInput.classList.add("ingredients");
ingredientsSearchInput.setAttribute("placeholder", "Rechercher un ingredient")
ingredientSearchBox.appendChild(ingredientsSearchInput);

const ingredientsSearchChevron = document.createElement("i");
ingredientsSearchChevron.classList.add("chevron_open");
ingredientsSearchChevron.classList.add("fas");
ingredientsSearchChevron.classList.add("fa-chevron-down");
ingredientsSearchChevron.classList.add("dropdown-item__icon");
ingredientSearchBox.appendChild(ingredientsSearchChevron);

    // Close ingredient filter

    ingredientsSearchChevron.addEventListener("click", function () {
      CreatFilterbox1();
    
      filterBox1.classList.remove("opened");
      filterBox1.classList.add("closed");

      ingredientSearchBox.remove();
      const listeIngredient = document.querySelector(".filter_liste.ingredients");
      listeIngredient.remove();

    });

    ingredientsSearchInput.addEventListener("input", filterDataIng);
}

var ingredients = [];
function getIngredients(recipes) {
    recipes.forEach((recipe) => {
      
      recipe.ingredients.forEach((ingredient) => {
         ingredients.push(ingredient);       
      });
    });
  }

  function searchIngredientsPerTag(searshWord) {
   
    let newIngredients = ingredients.filter((ingredient) => {
         ingredient ===    searshWord  
      });
   return newIngredients;
  }

export function creatIngredientListe(recipes) {

const listeIngredient = document.createElement("div");
listeIngredient.classList.add("filter_liste");
listeIngredient.classList.add("ingredients");
filterBox1.appendChild(listeIngredient);




  recipes.forEach((recipe) => {
    
    recipe.ingredients.forEach((ingredient) => {
       ingredients.push(ingredient);
        const filterIng = document.createElement("p");
        filterIng.classList.add("liste_element");
        filterIng.classList.add("ingredient");
        filterIng.textContent = ingredient.ingredient;
        filterIng.addEventListener('click', () => { console.log(filterIng.textContent);});
        listeIngredient.appendChild(filterIng);
      
    });
  });

}

// Display filtered ingredient list based on ingredient box input

  // listen to  searchbar input
  function filterDataIng(e) {
    document.querySelector(".filter_liste").remove();

    const searchString = e.target.value.toLocaleLowerCase();
  
    // filter with search
    const filteredArr = dataArray.filter ((el) =>
      el.name.toLocaleLowerCase().includes(searchString)
    );
    creatIngredientListe(filteredArr);
  }

  // const eachIng = document.querySelector(".liste_element.ingredient");


// fill with Appareils
export function creatAppareilsFrame(){


  const appareilSearchBox = document.createElement("div");
  appareilSearchBox.classList.add("filter_search_box");
  appareilSearchBox.classList.add("appareils");
 filterBox2.appendChild(appareilSearchBox);

  const appareilSearchInput = document.createElement("input");
  appareilSearchInput.classList.add("filter_search_input");
  appareilSearchInput.classList.add("appareils");
  appareilSearchInput.setAttribute("placeholder", "Rechercher un appareil");
  appareilSearchBox.appendChild(appareilSearchInput);

  const appareilSearchChevron = document.createElement("i");
  appareilSearchChevron.classList.add("chevron_open");
  appareilSearchChevron.classList.add("fas");
  appareilSearchChevron.classList.add("fa-chevron-down");
  appareilSearchChevron.classList.add("dropdown-item__icon");
  appareilSearchBox.appendChild(appareilSearchChevron);

  // Close appareil list

  appareilSearchChevron.addEventListener("click", function () {
    CreatFilterbox2();
  
    filterBox2.classList.remove("opened");
    filterBox2.classList.add("closed");

    appareilSearchBox.remove();
    const listeAppareils = document.querySelector(".filter_liste.appareils");
    listeAppareils.remove();

  });

}

export function creatAppareilstListe(recipes) {

  const listeAppareils = document.createElement("div");
  listeAppareils.classList.add("filter_liste");
  listeAppareils.classList.add("appareils");
  filterBox2.appendChild(listeAppareils);

  recipes.forEach((recipe) => {
    const filterApp = document.createElement("p");
    filterApp.classList.add("liste_element");
    filterApp.classList.add("appareils");
    filterApp.textContent = recipe.appliance;
    listeAppareils.appendChild(filterApp);
  });



}

// fill with *Ustensiles

export function creatUstensilesFrame (){

  const ustensilesSearchBox = document.createElement("div");
  ustensilesSearchBox.classList.add("filter_search_box");
  ustensilesSearchBox.classList.add("ustensiles");
  filterBox3.appendChild(ustensilesSearchBox);

  const ustensilesSearchInput = document.createElement("input");
  ustensilesSearchInput.classList.add("filter_search_input");
  ustensilesSearchInput.classList.add("ustensiles");
  ustensilesSearchInput.setAttribute("placeholder", "Rechercher un ustensile");
  ustensilesSearchBox.appendChild(ustensilesSearchInput);

  const ustensilesSearchChevron = document.createElement("i");
  ustensilesSearchChevron.classList.add("chevron_open");
  ustensilesSearchChevron.classList.add("fas");
  ustensilesSearchChevron.classList.add("fa-chevron-down");
  ustensilesSearchChevron.classList.add("dropdown-item__icon");
  ustensilesSearchBox.appendChild(ustensilesSearchChevron);

    // Close ustensiles filter

    ustensilesSearchChevron.addEventListener("click", function () {
      CreatFilterbox3();
    
      filterBox3.classList.remove("opened");
      filterBox3.classList.add("closed");

      ustensilesSearchBox.remove();
      const listeUstensiles = document.querySelector(".filter_liste.ustensiles");
      listeUstensiles.remove();

    });

}

export function creatUstensilesListe(recipes) {

  const listeUstensiles = document.createElement("div");
  listeUstensiles.classList.add("filter_liste");
  listeUstensiles.classList.add("ustensiles");
  filterBox3.appendChild(listeUstensiles);
  
  recipes.forEach((recipe) => {

    recipe.ustensils.forEach((el) => {

      const filterUstensiles = document.createElement("p");
      filterUstensiles.classList.add("liste_element");
      filterUstensiles.classList.add("ustensiles");
  
      listeUstensiles.appendChild(filterUstensiles);
          filterUstensiles.textContent = el;
    });
  });
}



// *****************Display datas recipes

let dataArray;

async function init() {
  const { recipes } = await getRecipes();
  dataArray = recipes;
  recipeCardFactory(dataArray);
}
init();

// async function filteringArray(dataArray) {
//   dataArray.forEach((recipes) => {
//     let ingredientArray = [recipes.ingredients];
//   });
//   return  [...ingredientArray];
// }




