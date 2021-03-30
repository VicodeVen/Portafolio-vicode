import { removeClass, toggleClass } from './hooks/classHandler.js'
const d = document;
export default function menuHamburguesa() {
    const hamburger = d.querySelector(".hamburger--3dxy");
    const boxDark = d.getElementById("box-dark");
    
    d.addEventListener("click", (e) => {
    if(e.target.matches(".hamburger--3dxy") || e.target.matches(".hamburger-inner") || e.target.matches(".hamburger-box")) {
        toggleClass(hamburger, 'is-active');
        toggleClass(boxDark, 'active');
        };

    if(e.target.matches("a")){
        removeClass(boxDark, 'active')
        removeClass(hamburger, 'is-active')
    };
    });    
};

