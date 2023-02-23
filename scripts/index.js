// Fonctions importées :
import { recipeCardFactory } from "/scripts/RecipesCardsFactory.js";
import { CreatFilterbox1 } from "/scripts/FilterBoxFactory.js";
import { CreatFilterbox2 } from "/scripts/FilterBoxFactory.js";
import { CreatFilterbox3 } from "/scripts/FilterBoxFactory.js";
import { creatTags } from "/scripts/TagsFactory.js";


// *****************Display datas recipes

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

// Creat Array for Ingredients/Appareils/Ustensiles

// Creat ingredients array
var ingredientsArray = [];
function getIngredients(dataArray) {
  dataArray.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        ingredientsArray.push(ingredient.ingredient);       
      });
    });
  }


 // Creat ustensils array
  var appareilsArray = [];
  function getAppareils(dataArray) {
    dataArray.forEach((recipe) => {
      appareilsArray.push(recipe.appliance);    
      });
    }



// Creat ustensils array
  var ustensilesArray = [];
  function getUstensiles(dataArray) {
    dataArray.forEach((recipe) => {
        recipe.ustensils.forEach((ustensile) => {
          ustensilesArray.push(ustensile);       
        });
      });
    }



export function creatItemListFrame(type){

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

  if(type=== "ingredients"){
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
  if(type=== "appliance"){
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
  if(type === "ustensil"){  
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


// fill with ingredient

export function creatIngredientListe() {

const listeIngredient = document.querySelector(".liste_container.ingredients");

let unique = Array.from(new Set(ingredientsArray));

unique.forEach((recipe) => {
      const filterIng = document.createElement("p");
      filterIng.setAttribute("id",recipe );
      filterIng.classList.add("liste_element");
      filterIng.classList.add("ingredient");
      filterIng.textContent = recipe;
      let test = filterIng.textContent

         filterIng.addEventListener('click', () => {
         
          if(!filterIng.classList.contains("selected")){
          creatTags(test, "ingredient");
          }

          const filterTag = document.querySelector(".filter_tag_box");
          filterTag.style.display = "flex";
          filterIng.classList.add("selected");  
        })
      listeIngredient.appendChild(filterIng);  
    
    });
}

// Filter ingredient list with searchbar

function filterDataIng(e) {

const listingIng = document.querySelector(".filter_liste.ingredients");
listingIng.innerHTML = "";

  const searchString = e.target.value.toLocaleLowerCase();

  // filter with search
  const filteredArrIng = ingredientsArray.filter ((el) =>
    el.toLocaleLowerCase().includes(searchString)
  );

  // Remove similar ingredient name
  let unique = Array.from(new Set(filteredArrIng));

  unique.forEach((el) => {
    const filterIng = document.createElement("p");
    filterIng.classList.add("liste_element");
    filterIng.classList.add("ingredient");
    filterIng.textContent = el;
    let test = filterIng.textContent
    filterIng.addEventListener('click', () => { 

      
      if(!filterIng.classList.contains("selected")){
        creatTags(test, "ingredient");
        }
        filterIng.classList.add("selected");  
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
    })
   

    listingIng.appendChild(filterIng); 
  });
}

// fill with Appareils

export function creatAppareilstListe() {

  const listeAppareils = document.querySelector(".filter_liste.appareils");

  let unique = Array.from(new Set(appareilsArray));

  unique.forEach((appareilsName) => {
    const filterApp = document.createElement("p");
    filterApp.setAttribute("id",appareilsName);
    filterApp.classList.add("liste_element");
    filterApp.classList.add("appareils");
    filterApp.textContent = appareilsName;

    filterApp.addEventListener('click', () => {
      if(!filterApp.classList.contains("selected")){
        creatTags(appareilsName, "appliance");
        }
       
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
        filterApp.classList.add("selected"); 

    })  

    listeAppareils.appendChild(filterApp);
  });

}

// Filter ingredient list with searchbar

function filterDataApp(e) {

  const listingApp = document.querySelector(".filter_liste.appareils");
  listingApp.innerHTML = "";
  
    const searchString = e.target.value.toLocaleLowerCase();
  
    // filter with search
    const filteredArrApp = appareilsArray.filter ((el) =>
      el.toLocaleLowerCase().includes(searchString)
    );
  
    // Remove similar ingredient name
    let unique = Array.from(new Set(filteredArrApp));
  
    unique.forEach((el) => {
      const filterApp = document.createElement("p");
      filterApp.classList.add("liste_element");
      filterApp.classList.add("appareils");
      filterApp.textContent = el;
      let appareilsName = el.textContent
      filterApp.addEventListener('click', () => { 

        if(!filterApp.classList.contains("selected")){
          creatTags(appareilsName, "appliance");
          }
          const filterTag = document.querySelector(".filter_tag_box");
          filterTag.style.display = "flex";

      })
      listingApp.appendChild(filterApp); 
    });
  }
// fill with *Ustensiles************

export function creatUstensilesListe() {
  
  const listeUstensiles = document.querySelector(".filter_liste.ustensiles");

let unique = Array.from(new Set(ustensilesArray));

  
unique.forEach((ustensileName) => {
  const filterUstensiles = document.createElement("p");
  filterUstensiles.classList.add("liste_element");
  filterUstensiles.classList.add("ustensiles");
  filterUstensiles.textContent = ustensileName;

  filterUstensiles.addEventListener('click', () => {

    if(!filterUstensiles.classList.contains("selected")){
      creatTags(ustensileName, "ustensil");
      }
      const filterTag = document.querySelector(".filter_tag_box");
      filterTag.style.display = "flex";     

  })


  listeUstensiles.appendChild(filterUstensiles);

  });
}

function filterDataUst(e) {

  const listingUst = document.querySelector(".filter_liste.ustensiles");
  listingUst.innerHTML = "";
  
    const searchString = e.target.value.toLocaleLowerCase();
  
    // filter with search
    const filteredArrUst = ustensilesArray.filter ((el) =>
      el.toLocaleLowerCase().includes(searchString)
    );
  
    // Remove similar ustensiles name
    let unique = Array.from(new Set(filteredArrUst));
  
    unique.forEach((ustensileName) => {
      const filterUst = document.createElement("p");
      filterUst.classList.add("liste_element");
      filterUst.classList.add("ustensiles");
      filterUst.textContent = ustensileName;
      filterUst.addEventListener('click', () => { 

        if(!filterUst.classList.contains("selected")){
          creatTags(ustensileName, "ustensil");
          }
          const filterTag = document.querySelector(".filter_tag_box");
          filterTag.style.display = "flex";   
      })
      listingUst.appendChild(filterUst); 
    });
  }
















