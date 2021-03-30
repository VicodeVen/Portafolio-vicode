export default function slider () {
    const left = document.querySelector(".fa-angle-left"),
    right = document.querySelector(".fa-angle-right"),
    $items = document.querySelectorAll(".item");
    let $btnEnlace = document.querySelector(".btn-projects"),
    enlaces = ["https://es.reactjs.org/","https://jonmircha.com/","https://vicodeven.github.io/easybank-challeng/"],
    item = 0;

right.addEventListener('click', () => changeItem(2));
left.addEventListener('click', () => changeItem(1));

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
    
    for(let i =0; i < $items.length; i++) $items[i].style.display = "none";

    $items[item].style.display = "flex";
    $btnEnlace.href=`${enlaces[item]}`;
};
}; 
