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

