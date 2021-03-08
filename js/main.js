import menuHamburguesa from "./hamburger.js";
import Formulario from "./formulario.js";
import slider from "./slider.js";
import box_light from "./box_light.js";
import scroll  from "./scroll_animate.js";
import canvasAnimate from "./canvas.js";
import animations from "./animations.js";

// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//     .then(reg => console.log(`Registro exitoso ${reg}`, reg))
//     .catch(err => console.warn(`Error al tratar de registrar el serviceWorker`, err))
// }

document.addEventListener("DOMContentLoaded", () => {
    scroll();
    menuHamburguesa();
    box_light();
    slider();
    Formulario();
    canvasAnimate();
    animations();
});



