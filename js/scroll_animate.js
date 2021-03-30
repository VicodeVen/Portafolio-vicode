export default function scroll() {
    const w = window,
    contentDos = document.querySelector(".content2"),
    barrasDeProgreso = document.querySelector(".barras-de-progresos");
    
    w.addEventListener('scroll', () => {
        if(w.pageYOffset > 787) barrasDeProgreso.classList.add("fadeInLeft","transport");
        else barrasDeProgreso.classList.remove("fadeInLeft","transport");
        if(w.pageYOffset > 303) contentDos.classList.add("fadeIn","dsplact");
        else contentDos.classList.remove("fadeIn","dsplact");
    });
};