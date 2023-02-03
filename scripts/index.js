// Fonctions importées :
import { recipeCardFactory } from "/scripts/RecipesCardsFactory.js";
import { CreatFilterbox1 } from "/scripts/FilterBoxFactory.js";
import { CreatFilterbox2 } from "/scripts/FilterBoxFactory.js";
import { CreatFilterbox3 } from "/scripts/FilterBoxFactory.js";


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

const listeIngredient = document.createElement("div");
listeIngredient.classList.add("filter_liste");
listeIngredient.classList.add("ingredients");
filterBox1.appendChild(listeIngredient);

const listeIngredientContainer = document.createElement("div");
listeIngredientContainer.classList.add("liste_container");
listeIngredientContainer.classList.add("ingredients");
listeIngredient.appendChild(listeIngredientContainer);



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

export function creatIngredientListe() {

const listeIngredient = document.querySelector(".liste_container.ingredients");

let unique = Array.from(new Set(ingredientsArray));



unique.forEach((recipe) => {
      const filterIng = document.createElement("p");
      filterIng.classList.add("liste_element");
      filterIng.classList.add("ingredient");
      filterIng.textContent = recipe;

      let test = filterIng.textContent
         filterIng.addEventListener('click', () => {
          creatTagsIng(test);
          const filterTag = document.querySelector(".filter_tag_box");
          filterTag.style.display = "flex";
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
      creatTagsIng(test);
      const filterTag = document.querySelector(".filter_tag_box");
      filterTag.style.display = "flex";
    })
    listingIng.appendChild(filterIng); 
  });
}


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

  const listeAppareils = document.createElement("div");
  listeAppareils.classList.add("filter_liste");
  listeAppareils.classList.add("appareils");
  filterBox2.appendChild(listeAppareils);

  // Close appareil list

  appareilSearchChevron.addEventListener("click", function () {
    CreatFilterbox2();
  
    filterBox2.classList.remove("opened");
    filterBox2.classList.add("closed");

    appareilSearchBox.remove();
    const listeAppareils = document.querySelector(".filter_liste.appareils");
    listeAppareils.remove();

  });

  appareilSearchInput.addEventListener("input", filterDataApp);

}

export function creatAppareilstListe() {

  const listeAppareils = document.querySelector(".filter_liste.appareils");

  let unique = Array.from(new Set(appareilsArray));

  unique.forEach((appareilsName) => {
    const filterApp = document.createElement("p");
    filterApp.classList.add("liste_element");
    filterApp.classList.add("appareils");
    filterApp.textContent = appareilsName;
    filterApp.addEventListener('click', () => {
      creatTagsApp(appareilsName);     
      const filterTag = document.querySelector(".filter_tag_box");
      filterTag.style.display = "flex";     
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
        creatTagsApp(appareilsName);
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
      })
      listingApp.appendChild(filterApp); 
    });
  }


// fill with *Ustensiles************

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

  const listeUstensiles = document.createElement("div");
  listeUstensiles.classList.add("filter_liste");
  listeUstensiles.classList.add("ustensiles");
  filterBox3.appendChild(listeUstensiles);

    // Close ustensiles filter

    ustensilesSearchChevron.addEventListener("click", function () {
      CreatFilterbox3();
    
      filterBox3.classList.remove("opened");
      filterBox3.classList.add("closed");

      ustensilesSearchBox.remove();
      const listeUstensiles = document.querySelector(".filter_liste.ustensiles");
      listeUstensiles.remove();

    });

    ustensilesSearchInput.addEventListener("input", filterDataUst);

}

export function creatUstensilesListe() {
  
  const listeUstensiles = document.querySelector(".filter_liste.ustensiles");

let unique = Array.from(new Set(ustensilesArray));

  
unique.forEach((ustensileName) => {
  const filterUstensiles = document.createElement("p");
  filterUstensiles.classList.add("liste_element");
  filterUstensiles.classList.add("ustensiles");
  filterUstensiles.textContent = ustensileName;

  filterUstensiles.addEventListener('click', () => {
    creatTagsUst(ustensileName);   
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
        creatTagsUst(ustensileName);
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "flex";
      })
      listingUst.appendChild(filterUst); 
    });
  }

// Creat Tag

function creatTagsIng(names){

  const tag = document.createElement("div");
  tag.classList.add("tag_item");
  tag.classList.add("ing");
  filterTagContainer.appendChild(tag);

  const tagName = document.createElement("div");
  tagName.classList.add("tag_name");
  tagName.textContent = names;
  tag.appendChild(tagName)

  const tagCross = document.createElement("div");
  tagCross.classList.add("tag_cross");
  tagCross.textContent = "x";
  tag.appendChild(tagCross);

// Close & remove tag
 tagCross.addEventListener("click", function () {
  tag.remove();

  if(tag !== undefined){
    document.querySelector(".recipes_card_section").innerHTML = "";
    recipeCardFactory(dataArray);
    gettagArray();
  }
  });

  gettagArray()

}


function creatTagsApp(names){

  const tag = document.createElement("div");
  tag.classList.add("tag_item");
  tag.classList.add("app");
  filterTagContainer.appendChild(tag);

  const tagName = document.createElement("div");
  tagName.classList.add("tag_name");
  tagName.textContent = names;
  tag.appendChild(tagName)

  const tagCross = document.createElement("div");
  tagCross.classList.add("tag_cross");
  tagCross.textContent = "x";
  tag.appendChild(tagCross);

  gettagArray()

// Listen closing tag 
 tagCross.addEventListener("click", function () {
  tag.remove();

  if(tag !== undefined){
    document.querySelector(".recipes_card_section").innerHTML = "";
    recipeCardFactory(dataArray);
    gettagArray();
  }
  });


}

function creatTagsUst(names){

  const tag = document.createElement("div");
  tag.classList.add("tag_item");
  tag.classList.add("ust");
  filterTagContainer.appendChild(tag);

  const tagName = document.createElement("div");
  tagName.classList.add("tag_name");
  tagName.textContent = names;
  tag.appendChild(tagName)

  const tagCross = document.createElement("div");
  tagCross.classList.add("tag_cross");
  tagCross.textContent = "x";
  tag.appendChild(tagCross);

  gettagArray();


 tagCross.addEventListener("click", function () {
  tag.remove();

    if(tag !== undefined){
    document.querySelector(".recipes_card_section").innerHTML = "";
    recipeCardFactory(dataArray);
    gettagArray();
  }

  });

}



function gettagArray(){
  let boxes = Array.from(document.getElementsByClassName('tag_name'));

  if(boxes.length <1){
    filterTag.style.display = "none";  
     } 

  // console.log(boxes);

  boxes.forEach((el) => {
    const searchString = el.innerHTML.toLocaleLowerCase();
    const filteredArrAppTag = [];
   
    dataArray.forEach((el) =>{

      let resultSearch = searchPerTag(el , searchString);
      if(resultSearch)
         filteredArrAppTag.push(el);
    }
    
  );

  


document.querySelector(".recipes_card_section").innerHTML = "";
recipeCardFactory(filteredArrAppTag)

  });

}

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
  // l'element doit etre pusher au ableau resultat 
  if(element.appliance.toLowerCase().includes(tag.toLowerCase()) || filteredIngredients.length>=1  || filteredUstensils.length>=1 ){
    // inserer l'element dans le tableau resultant 
    return element;
  }
 else return null;
}
















