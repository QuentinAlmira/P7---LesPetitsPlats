//******* * Fonctions Importées * *******
import { recipeCardFactory } from "/scripts/RecipesCardsFactory.js";

//******* * Display datas recipes * *******

let dataArray;
let listTags =[];
let filteredArrAppTag = [];

async function init() {
  const { recipes } = await getRecipes();
  dataArray = recipes;
}
init();



//******* * Filter by selected Tag * *******
export function gettagArray(type, tag, sens){


//Update Tag list
 tag = tag.toLocaleLowerCase(); 

 updateTag(tag, type, sens);

      if(sens == -1){
        filteredArrAppTag =[];
      }

      if(listTags.length > 0){
        listTags.forEach(element => {

          if(filteredArrAppTag.length == 0){
            filteredArrAppTag = filterTable(dataArray, element.tag, element.type);
          }
          else{
            filteredArrAppTag = filterTable(filteredArrAppTag, element.tag, element.type);
          }
        });
      }
      else {
        filteredArrAppTag = dataArray;
      }

      if(listTags.length == 0){
        const filterTag = document.querySelector(".filter_tag_box");
        filterTag.style.display = "none";
      }


     document.querySelector(".recipes_card_section").innerHTML = "";
     recipeCardFactory(filteredArrAppTag)  
}

function filterTable( tableau , searchString , type ){
  
let result = [];

  tableau.forEach((recipe) => {

    let el = recipe;

    let resultSearch = searchPerTag(el , searchString, type);
    if(resultSearch)
       result.push(el);

  });



  return result;
}


// find element dans le target type
//type can be ingredient, ustensil ou appliance
function searchPerTag(element , tag ,type){
  
  if(type=== "ingredient"){
 
    let filteredIngredients =  element.ingredients.filter(
      (ing) =>
        ing.ingredient.toLowerCase().includes(tag.toLowerCase())
    );
    return filteredIngredients.length>=1 ? element : null;
  }
  if(type=== "ustensil"){

    let filteredUstensils = element.ustensils.filter(
      (ust) =>
        ust.toLowerCase().includes(tag.toLowerCase())
    ) ;
    return filteredUstensils.length>=1 ? element : null;
  }
  if(type === "appliance"){
    if(element.appliance.toLowerCase().includes(tag.toLowerCase()))
      return element;
    
  } 
 

 else return null;
}

// *********

// This function udpate tag list

// if sens = 1 : add tag
// if sens = -1 remove tag

function updateTag(tag,type, sens){
  // add tag to the tags list 
  if(sens === 1){
    listTags.push({tag,type});
  }
   // remove tag to the tags list  
  else{
    const index = listTags.findIndex(element => (element.tag === tag && element.type === type));
    listTags.splice(index,1);
  }
}