//******* * Fonctions Importées******* *
import { creatItemListFrame } from "/scripts/index.js";
import { creatItemListe } from "/scripts/index.js";

// *****************Display datas recipes
let dataArray;

async function init() {
  const { recipes } = await getRecipes();
  dataArray = recipes;
}
init();

//******* * Ingredients * ******

export function CreatFilterbox1(){

    const filterBox1 = document.querySelector(".filter_box.first");
    
    const filterBoxName = document.createElement("div"); 
    filterBoxName.classList.add("filter_box_name");
    filterBox1.appendChild(filterBoxName); 
    
    const filterBoxTexte1 = document.createElement("p");
    filterBoxTexte1.classList.add("filter_box_1_text");
    filterBoxTexte1.textContent = "Ingredients";
    filterBoxName.appendChild(filterBoxTexte1);
    
    const filterBoxChevron1 = document.createElement("i");
    filterBoxChevron1.classList.add("chevron1");
    filterBoxChevron1.classList.add("fas");
    filterBoxChevron1.classList.add("fa-chevron-down");
    filterBoxChevron1.classList.add("dropdown-item__icon");
    filterBoxName.appendChild(filterBoxChevron1);
    
    // Open and display ingredient list :
    
    filterBoxChevron1.addEventListener("click", function () {
      filterBox1.classList.remove("closed");
      filterBox1.classList.add("opened");
      filterBoxName.remove();
      creatItemListFrame("ingredients");
      creatItemListe("ingredient");
    });
    
    }

//******* * Appareils * ******

export function CreatFilterbox2 (){

        const filterBox2 = document.querySelector(".filter_box.second");

        const filterBoxName = document.createElement("div"); 
        filterBoxName.classList.add("filter_box_name");
        filterBox2.appendChild(filterBoxName); 
        
        const filterBoxTexte2 = document.createElement("p");
        filterBoxTexte2.classList.add("filter_box_2_text");
        filterBoxTexte2.textContent = "Appareils";
        filterBoxName.appendChild(filterBoxTexte2);
        
        const filterBoxChevron2 = document.createElement("i");
        filterBoxChevron2.classList.add("fas");
        filterBoxChevron2.classList.add("fa-chevron-down");
        filterBoxChevron2.classList.add("dropdown-item__icon");
        filterBoxName.appendChild(filterBoxChevron2);
        
        filterBoxChevron2.addEventListener("click", function () {
          filterBox2.classList.remove("closed");
          filterBox2.classList.add("opened");
          filterBoxName.remove();
          creatItemListFrame("appliance");
          creatItemListe("appliance");
        });
        };

//******* * Ustensils * ******
export function CreatFilterbox3(){

            const filterBox3 = document.querySelector(".filter_box.third");

            const filterBoxName = document.createElement("div"); 
            filterBoxName.classList.add("filter_box_name");
            filterBox3.appendChild(filterBoxName); 
            
            const filterBoxTexte3 = document.createElement("p");
            filterBoxTexte3.classList.add("filter_box_2_text");
            filterBoxTexte3.textContent = "Ustensiles";
            filterBoxName.appendChild(filterBoxTexte3);
            
            const filterBoxChevron3 = document.createElement("i");
            filterBoxChevron3.classList.add("fas");
            filterBoxChevron3.classList.add("fa-chevron-down");
            filterBoxChevron3.classList.add("dropdown-item__icon");
            filterBoxName.appendChild(filterBoxChevron3);
            
            
            filterBoxChevron3.addEventListener("click", function () {
              filterBox3.classList.remove("closed");
              filterBox3.classList.add("opened");
              filterBoxName.remove();
              creatItemListFrame("ustensil");
              creatItemListe("ustensil");
            
            });
            }