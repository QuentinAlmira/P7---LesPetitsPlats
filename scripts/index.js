// Création du header

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

// *****Main creation*****
const indexMain = document.createElement("main");
indexMain.classList.add("main");
indexMain.setAttribute("id", "main");
content.appendChild(indexMain);

// *****input search section creation*****

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

// ****filter section****
const filterSection = document.createElement("section");
filterSection.classList.add("filter_options");
indexMain.appendChild(filterSection);

const filterContainer = document.createElement("div");
filterContainer.classList.add("filter_container");
filterSection.appendChild(filterContainer);

// filter box

// box 1
const filterBox1 = document.createElement("div");
filterBox1.classList.add("filter_box");
filterBox1.classList.add("first");
filterBox1.classList.add("closed");
filterContainer.appendChild(filterBox1);

const filterBoxTexte1 = document.createElement("p");
filterBoxTexte1.classList.add("filter_box_1_text");
filterBoxTexte1.textContent = "Ingredients";
filterBox1.appendChild(filterBoxTexte1);

const filterBoxChevron1 = document.createElement("i");
filterBoxChevron1.classList.add("fas");
filterBoxChevron1.classList.add("fa-chevron-down");
filterBoxChevron1.classList.add("dropdown-item__icon");
filterBox1.appendChild(filterBoxChevron1);

// box 2
const filterBox2 = document.createElement("div");
filterBox2.classList.add("filter_box");
filterBox2.classList.add("second");
filterBox2.classList.add("closed");
filterContainer.appendChild(filterBox2);

const filterBoxTexte2 = document.createElement("p");
filterBoxTexte2.classList.add("filter_box_2_text");
filterBoxTexte2.textContent = "Appareils";
filterBox2.appendChild(filterBoxTexte2);

const filterBoxChevron2 = document.createElement("i");
filterBoxChevron2.classList.add("fas");
filterBoxChevron2.classList.add("fa-chevron-down");
filterBoxChevron2.classList.add("dropdown-item__icon");
filterBox2.appendChild(filterBoxChevron2);

// box 3

const filterBox3 = document.createElement("div");
filterBox3.classList.add("filter_box");
filterBox3.classList.add("third");
filterBox3.classList.add("closed");
filterContainer.appendChild(filterBox3);

const filterBoxTexte3 = document.createElement("p");
filterBoxTexte3.classList.add("filter_box_2_text");
filterBoxTexte3.textContent = "Ustensiles";
filterBox3.appendChild(filterBoxTexte3);

const filterBoxChevron3 = document.createElement("i");
filterBoxChevron3.classList.add("fas");
filterBoxChevron3.classList.add("fa-chevron-down");
filterBoxChevron3.classList.add("dropdown-item__icon");
filterBox3.appendChild(filterBoxChevron3);

filterBoxChevron1.addEventListener("click", function () {
  filterBox1.classList.remove("closed");
  filterBox1.classList.add("opened");
  filterBoxTexte1.remove();
  filterBoxChevron1.remove();
  creatIngredientListe(recipes);
});

// Recipes card section

const cardSection = document.createElement("section");
cardSection.classList.add("recipes_card_section");
cardSection.setAttribute("id", "recipes_card_section");
indexMain.appendChild(cardSection);

// *****************Display datas recipes

let dataArray;

async function init() {
  const { recipes } = await getRecipes();
  dataArray = recipes;
  recipeCardFactory(dataArray);
  creatIngredientListe(dataArray);
  creatAppareilstListe(dataArray);
  creatUstensilesListe(dataArray);
}
init();

//******************** */ Recipes card factory

function recipeCardFactory(recipes) {
  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("article");
    recipeCard.classList.add("recipe_card");
    cardSection.appendChild(recipeCard);

    const recipeCardPicture = document.createElement("div");
    recipeCardPicture.classList.add("recipe_card_picture");
    recipeCard.appendChild(recipeCardPicture);

    const recipesCardInfos = document.createElement("div");
    recipesCardInfos.classList.add("recipe_card_infos");
    recipeCard.appendChild(recipesCardInfos);

    const recipeCardCardInfosTop = document.createElement("div");
    recipeCardCardInfosTop.classList.add("recipe_card_infos_top");
    recipesCardInfos.appendChild(recipeCardCardInfosTop);

    const recipesCardTitle = document.createElement("p");
    recipesCardTitle.classList.add("recipe_card_infos_title");
    recipesCardTitle.textContent = recipe.name;
    recipeCardCardInfosTop.appendChild(recipesCardTitle);

    const recipeCardTiming = document.createElement("div");
    recipeCardTiming.classList.add("recipe_card_timing");
    recipeCardCardInfosTop.appendChild(recipeCardTiming);

    const recipeCardTimingClock = document.createElement("i");
    recipeCardTimingClock.classList.add("fa-regular");
    recipeCardTimingClock.classList.add("fa-clock");
    recipeCardTiming.appendChild(recipeCardTimingClock);

    const recipeCardTimingFigure = document.createElement("p");
    recipeCardTimingFigure.classList.add("recipe_card_timing_figure");
    recipeCardTimingFigure.textContent = recipe.time;
    recipeCardTiming.appendChild(recipeCardTimingFigure);

    const recipeCardinfosMain = document.createElement("div");
    recipeCardinfosMain.classList.add("recipe_card_infos_main");
    recipesCardInfos.appendChild(recipeCardinfosMain);

    const recipeCardinfosMainIngredients = document.createElement("div");
    recipeCardinfosMainIngredients.classList.add(
      "recipe_card_infos_main_ingredients"
    );
    recipeCardinfosMain.appendChild(recipeCardinfosMainIngredients);

    let component = [recipe.ingredients];

    component.forEach((recip) => {
      recip.forEach((ingredient) => {
        let ing = " " + ":" + " " + ingredient.quantity + " " + ingredient.unit;

        if (ingredient.quantity === undefined) {
          ing = "";
        } else if (ingredient.unit === undefined) {
          ing = ":" + ingredient.quantity;
        }

        const pboxcontainer = document.createElement("div");
        pboxcontainer.classList.add("ing_container");
        recipeCardinfosMainIngredients.appendChild(pboxcontainer);

        const pbox = document.createElement("p");
        pboxcontainer.appendChild(pbox);
        pbox.style.fontWeight = "bold";
        pbox.textContent = ingredient.ingredient;

        const pbox2 = document.createElement("p");
        pboxcontainer.appendChild(pbox2);
        pbox2.textContent = ing;
      });
    });

    const recipeCardinfosMainManual = document.createElement("div");
    recipeCardinfosMainManual.classList.add("recipe_card_infos_main_manual");
    recipeCardinfosMain.appendChild(recipeCardinfosMainManual);

    const recipeCardinfosMainManualTexte = document.createElement("p");
    recipeCardinfosMainManualTexte.classList.add(
      "recipe_card_infos_main_manual_texte"
    );
    recipeCardinfosMainManual.appendChild(recipeCardinfosMainManualTexte);
    recipeCardinfosMainManualTexte.textContent = recipe.description;
  });
}

function filterboxOpened() {
  const filterBoxSearchInput = document.createElement("input");
  filterBoxSearchInput.classList.add();
}

// Main research with "filter" method

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

// fill with ingredient

function creatIngredientListe(recipes) {
  const listeIngredient = document.createElement("div");
  listeIngredient.classList.add("liste_ingredient");
  filterBox1.appendChild(listeIngredient);

  recipes.forEach((recipe) => {
    let component = [recipe.ingredients];

    component.forEach((recip) => {
      recip.forEach((ingredient) => {
        const filterIng = document.createElement("p");
        filterIng.classList.add("filterBox_ing");
        filterIng.textContent = ingredient.ingredient;
        listeIngredient.appendChild(filterIng);
      });
    });
  });
}

function creatAppareilstListe(recipes) {
  const listeAppareils = document.createElement("div");
  listeAppareils.classList.add("liste_appareils");
  filterBox2.appendChild(listeAppareils);

  recipes.forEach((recipe) => {
    const filterApp = document.createElement("p");
    filterApp.classList.add("filterBox_ing");
    filterApp.textContent = recipe.appliance;
    listeAppareils.appendChild(filterApp);
  });
}

function creatUstensilesListe(recipes) {
  const listeUstensiles = document.createElement("div");
  listeUstensiles.classList.add("liste_ustensiles");
  filterBox3.appendChild(listeUstensiles);
  
  recipes.forEach((recipe) => {
    const filterUstensiles = document.createElement("p");
    filterUstensiles.classList.add("filterBox_Ustensiles");
    filterUstensiles.textContent = recipe.ustensils;
    listeUstensiles.appendChild(filterUstensiles);
  });
}

// TEST Github

function test (){
  console.log("hello");
}