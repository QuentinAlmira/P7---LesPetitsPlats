import { gettagArray } from "/scripts/FilterByTagFactory.js";

// *********************************************************
// Creat Tags
// *********************************************************

// Creat a factory for Ing/App/Ust Tags

export function creatTags(names, type) {
  const tag = document.createElement("div");
  tag.classList.add("tag_item");

  if (type === "ingredients") {
    tag.classList.add("ing");
  }
  if (type === "ustensiles") {
    tag.classList.add("ust");
  }
  if (type === "appareils") {
    tag.classList.add("app");
  }

  const filterTagContainer = document.querySelector(".filter_tag_container");

  filterTagContainer.appendChild(tag);
  const tagName = document.createElement("div");
  tagName.classList.add("tag_name");
  tagName.textContent = names;
  tag.appendChild(tagName);

  const tagCross = document.createElement("div");
  tagCross.classList.add("tag_cross");
  tagCross.textContent = "x";
  tag.appendChild(tagCross);

  // Close & remove tag
  tagCross.addEventListener("click", function () {
    tag.remove();
    document.getElementById(names).classList.remove("selected");

    if (type === "ingredients") {
      gettagArray("ingredients", names, -1);
    }
    if (type === "appareils") {
      gettagArray("appareils", names, -1);
    }
    if (type === "ustensiles") {
      gettagArray("ustensiles", names, -1);
    }
  });

  if (type === "ingredients") {
    gettagArray("ingredients", names, 1);
  }
  if (type === "appareils") {
    gettagArray("appareils", names, 1);
  }
  if (type === "ustensiles") {
    gettagArray("ustensiles", names, 1);
  }
}
