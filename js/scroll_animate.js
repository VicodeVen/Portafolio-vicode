export default function scroll() {
    const w = window;
    const contentDos = document.querySelector(".content2");
    const barrasDeProgreso = document.querySelector(".barras-de-progresos");
    
    w.addEventListener('scroll', () => {
        if(w.pageYOffset > 787){
            barrasDeProgreso.classList.add("fadeInLeft");
            barrasDeProgreso.classList.add("transport")
        }else {
            barrasDeProgreso.classList.remove("fadeInLeft")
            barrasDeProgreso.classList.remove("transport")
        }
        if(w.pageYOffset > 303) {
            contentDos.classList.add("fadeIn");
            contentDos.classList.add("dsplact");
        }else {
            contentDos.classList.remove("fadeIn");
            contentDos.classList.remove("dsplact");
        }
        // console.log(w.pageYOffset);
    });
};