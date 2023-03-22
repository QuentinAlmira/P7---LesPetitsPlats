// Creat and display recipes cards

export function recipeCardFactory(recipes) {
  const cardSection = document.querySelector(".recipes_card_section");

  if (recipes.length === 0) {
    const errorMsg = document.createElement("h3");
    errorMsg.classList.add("Error_message");
    errorMsg.textContent =
      "Désolé, aucune recette ne correspond à votre recherche !";
    cardSection.appendChild(errorMsg);
  } else {
    for (let i = 0; i < recipes.length; i++) {
      const recipeCard = document.createElement("article");
      recipeCard.classList.add("recipe_card");
      recipeCard.setAttribute("id", "recipe_card");
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
      recipesCardTitle.textContent = recipes[i].name;
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
      recipeCardTimingFigure.textContent = recipes[i].time;
      recipeCardTiming.appendChild(recipeCardTimingFigure);

      const recipeCardinfosMain = document.createElement("div");
      recipeCardinfosMain.classList.add("recipe_card_infos_main");
      recipesCardInfos.appendChild(recipeCardinfosMain);

      const recipeCardinfosMainIngredients = document.createElement("div");
      recipeCardinfosMainIngredients.classList.add(
        "recipe_card_infos_main_ingredients"
      );
      recipeCardinfosMain.appendChild(recipeCardinfosMainIngredients);

      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        const pboxcontainer = document.createElement("div");
        pboxcontainer.classList.add("ing_container");
        recipeCardinfosMainIngredients.appendChild(pboxcontainer);

        const pbox = document.createElement("p");
        pboxcontainer.appendChild(pbox);
        pbox.style.fontWeight = "bold";
        pbox.textContent = recipes[i].ingredients[j].ingredient;

        let ing =
          " " +
          " : " +
          " " +
          recipes[i].ingredients[j].quantity +
          " " +
          recipes[i].ingredients[j].unit;

        if (recipes[i].ingredients[j].quantity === undefined) {
          ing = "";
        } else if (recipes[i].ingredients[j].unit === undefined) {
          ing = " : " + recipes[i].ingredients[j].quantity;
        }

        const pbox2 = document.createElement("p");
        pboxcontainer.appendChild(pbox2);
        pbox2.textContent = ing;
      }

      const recipeCardinfosMainManual = document.createElement("div");
      recipeCardinfosMainManual.classList.add("recipe_card_infos_main_manual");
      recipeCardinfosMain.appendChild(recipeCardinfosMainManual);

      const recipeCardinfosMainManualTexte = document.createElement("p");
      recipeCardinfosMainManualTexte.classList.add(
        "recipe_card_infos_main_manual_texte"
      );
      recipeCardinfosMainManual.appendChild(recipeCardinfosMainManualTexte);
      recipeCardinfosMainManualTexte.textContent = recipes[i].description;
    }
  }
}
