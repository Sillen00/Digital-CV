window.addEventListener("DOMContentLoaded", main);

function main() {
  clickFirstPageScene();
  hamburgerMenuToggle();
  hideStartScene();
  ageInRealTime();
}

function clickFirstPageScene() {
  document.onclick = displayHomePage;
}
function displayHomePage() {
  sessionStorage.hideStartScene = true;
  document.querySelector(".first-page-scene").style.display = "none";
  document.querySelector(".first-page-scene-text").style.display = "none";
}
function hideStartScene() {
  if (sessionStorage.hideStartScene) {
    displayHomePage();
  }
}

