import { addClass, removeClass } from './hooks/classHandler.js'

export default function boxLight () {
    const portafolio = document.querySelector(".portafolio");
    const gitIcon = document.querySelector(".git-icon");
    const workOption = document.querySelector(".work-option")
    const btnProjects = document.querySelector(".btn-projects");

    portafolio.addEventListener('mouseover', () => {
        addClass(workOption, 'actives');
        addClass(btnProjects, 'box_opacity');
        addClass(gitIcon, 'box_opacity');
    });

    portafolio.addEventListener('mouseout', () => {
        removeClass(workOption, 'actives');
        removeClass(btnProjects, 'box_opacity');
        removeClass(gitIcon, 'box_opacity');
    });

    gitIcon.addEventListener('mouseover', () => {
        gitIcon.classList.replace('fa-github', 'fa-external-link-alt')
        gitIcon.classList.replace('fab', 'fas');
    });

    gitIcon.addEventListener('mouseout', () => {
        addClass(gitIcon, 'fa-github', 'fab');
        removeClass(gitIcon, 'fa-external-link-alt', 'fas')
    }); 
}