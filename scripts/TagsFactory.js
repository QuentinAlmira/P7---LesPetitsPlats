import { gettagArray } from "/scripts/FilterByTagFactory.js";


// *********************************************************
// Creat Tags
// *********************************************************

// Creat a factory for Ing/App/Ust Tags

export function creatTags(names, type){

    const tag = document.createElement("div");
    tag.classList.add("tag_item");
  
    if(type=== "ingredient"){
      tag.classList.add("ing");
    }
    if(type=== "ustensil"){
      tag.classList.add("ust");
    }
    if(type === "appliance"){  
      tag.classList.add("app");
    } 
    
    const filterTagContainer = document.querySelector(".filter_tag_container");
  
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

    document.getElementById(names).classList.remove("selected");

    tag.remove();
  
    if(type=== "ingredient"){
      gettagArray("ingredient", names, -1);
    }
    if(type=== "appliance"){
      gettagArray("appliance", names, -1);
    }
    if(type === "ustensil"){  
      gettagArray("ustensil", names, -1);
    } 
  
    });
  
    
    if(type=== "ingredient"){
      gettagArray("ingredient", names, 1);
    }
    if(type=== "appliance"){
      gettagArray("appliance", names, 1);
    }
    if(type === "ustensil"){  
      gettagArray("ustensil", names, 1);
    } 
  
  }
  