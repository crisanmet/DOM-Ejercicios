import hamburgerMenu from "./dom/menu_hamburguesa.js";

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
  hamburgerMenu(".panel__btn", ".panel",".panel__menu a");
})