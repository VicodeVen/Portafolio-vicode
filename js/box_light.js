export default function boxLight () {
    const portafolio = document.querySelector(".portafolio");
    const gitIcon = document.querySelector(".git-icon");
    const workOption = document.querySelector(".work-option")
    const btnProjects = document.querySelector(".btn-projects");

    portafolio.addEventListener("mouseover", () => {
        workOption.classList.add("actives")
        btnProjects.classList.add("box_opacity")
        gitIcon.classList.add("box_opacity")
    });

    portafolio.addEventListener("mouseout", () => {
        workOption.classList.remove("actives")
        btnProjects.classList.remove("box_opacity")
        gitIcon.classList.remove("box_opacity")
    });

    gitIcon.addEventListener("mouseover", () => {
        gitIcon.classList.replace("fa-github","fa-external-link-alt")
        gitIcon.classList.replace("fab","fas");
    });

    gitIcon.addEventListener("mouseout", () => {
        gitIcon.classList.remove("fa-external-link-alt");
        gitIcon.classList.add("fa-github");
        gitIcon.classList.remove("fas");
        gitIcon.classList.add("fab");
    }); 
}