import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { relojDigital, alarma } from "./dom/reloj.js";
import { atajos, moverPelota } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel__btn", ".panel", ".panel__menu a");
  relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Sep 08,2022 12:22:00", "BOOM!!");
  scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  atajos(e);
  moverPelota(e, ".ball", ".stage");
});
