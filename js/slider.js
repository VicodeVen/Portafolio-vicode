export default function slider () {

let item = 0;
const left = document.querySelector(".fa-angle-left");
const right = document.querySelector(".fa-angle-right");
let $btnEnlace = document.querySelector(".btn-projects");
let enlaces = ["https://es.reactjs.org/","https://jonmircha.com/","https://vicodeven.github.io/easybank-challeng/"];
const $items = document.querySelectorAll(".item");

right.addEventListener('click', () => {changeItem(2)});
left.addEventListener('click', () => {changeItem(1)});

function changeItem (n) {

    if (n == 1) {
        if(item == 0) {
            item = 2;
        }else {
            item--;
        }
    }if(n == 2){
        if(item == 2) {
            item = 0;
        }else {
            item++;
        }
    }
    
    for(let i =0; i < $items.length; i++) {
        $items[i].style.display = "none";
    }

    $items[item].style.display = "flex";
    $btnEnlace.href=`${enlaces[item]}`;
    
}
}; 
