import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { relojDigital, alarma } from "./dom/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel__btn", ".panel", ".panel__menu a");
  relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
});
