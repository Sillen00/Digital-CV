window.addEventListener("DOMContentLoaded", main);

function main(){
    clickFirstPageScene();
    hamburgerMenuToggle();
}

function clickFirstPageScene(){
    document.onclick = toggleToHomePage;
};
function toggleToHomePage(){
    document.querySelector(".first-page-scene").style.display = "none";
    document.querySelector(".first-page-scene-text").style.display = "none";
}



function hamburgerMenuToggle(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
};