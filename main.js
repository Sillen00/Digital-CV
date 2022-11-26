window.addEventListener("DOMContentLoaded", main);

function main(){
    clickFirstPageScene();
    hamburgerMenuToggle();
}

function clickFirstPageScene(){
    window.onclick = toggleToHomePage;
};
function toggleToHomePage(){
    document.querySelector(".wrapper").style.display = "block";
}



function hamburgerMenuToggle(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
};