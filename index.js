window.addEventListener("DOMContentLoaded", main);

function main() {
  clickFirstPageScene();
  hamburgerMenuToggle();
  hideStartScene();
//   createPortfolioCard(item);
}

function clickFirstPageScene() {
  document.onclick = toggleToHomePage;
}
function toggleToHomePage() {
  sessionStorage.hideStartScene = true;
  document.querySelector(".first-page-scene").style.display = "none";
  document.querySelector(".first-page-scene-text").style.display = "none";
}
function hideStartScene() {
  if (sessionStorage.hideStartScene) {
    toggleToHomePage();
  }
}



/*
    <div class="card">
    <h4 class="card-title">Grott Dykaren</h4>
    <img src="./images/Grott-dykaren-liten.png" alt="Image of my text based game: Grott dykaren">
    <div class="card-texts">
    <p class="card-description">This is a Interactive text based game where you dive with your friend to find some gold when suddenly your friend disapears.</p>
    <div class="projekt-links">
    <a href=""><i class="fa-brands fa-github"></i></a>
    <a href=""><i class="fa-solid fa-link"></i></a>
    </div>
    <p class="card-date">November 2022</p>                      
    </div>
    </div>
    */




