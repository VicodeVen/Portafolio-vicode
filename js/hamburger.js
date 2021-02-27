export default function menuHamburguesa() {
    const d = document;
    const hamburger = d.querySelector(".hamburger--3dxy");
    const boxDark = d.getElementById("box-dark");
    
    d.addEventListener("click", (e) => {
    if(e.target.matches(".hamburger--3dxy") || e.target.matches(".hamburger-inner") || e.target.matches(".hamburger-box")) {
        hamburger.classList.toggle("is-active");
        boxDark.classList.toggle("active");
        };

    if(e.target.matches("a")){
        boxDark.classList.remove("active");
        hamburger.classList.remove("is-active");
        };
    });    
};

