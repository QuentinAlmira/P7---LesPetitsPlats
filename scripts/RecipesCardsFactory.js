// Creat and display recipes cards

export function recipeCardFactory(recipes) {
  const cardSection = document.querySelector(".recipes_card_section");

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

    recipe.ingredients.forEach((ingredient) => {
      const pboxcontainer = document.createElement("div");
      pboxcontainer.classList.add("ing_container");
      recipeCardinfosMainIngredients.appendChild(pboxcontainer);

      const pbox = document.createElement("p");
      pboxcontainer.appendChild(pbox);
      pbox.style.fontWeight = "bold";
      pbox.textContent = ingredient.ingredient;

      let ing = " " + ":" + " " + ingredient.quantity + " " + ingredient.unit;

      if (ingredient.quantity === undefined) {
        ing = "";
      } else if (ingredient.unit === undefined) {
        ing = ":" + ingredient.quantity;
      }

      const pbox2 = document.createElement("p");
      pboxcontainer.appendChild(pbox2);
      pbox2.textContent = ing;
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
