import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { relojDigital, alarma } from "./dom/reloj.js";
import { atajos, moverPelota } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_tester.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilter from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidation from "./dom/validaciones_form.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel__btn", ".panel", ".panel__menu a");
  relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Sep 08,2022 12:22:00", "BOOM!!");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://youtu.be/-_nQhGR0K8M" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/MM62wjLrgmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/we1YEPXXy4Xpt3GC6" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.413946342771!2d-58.391855180224596!3d-34.60786619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sTeatro%20Col%C3%B3n!5e0!3m2!1ses-419!2sar!4v1631200369155!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
});

d.addEventListener("keydown", (e) => {
  atajos(e);
  moverPelota(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
