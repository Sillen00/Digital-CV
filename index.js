window.addEventListener("DOMContentLoaded", main);


/**Run function when DOM content loaded */
function main() {
  clickFirstPageScene();
  mobileMenuContentShowRemove();
  hideStartScene();
  // typeWritingText();
}

/**Click anywhere on page to display home page. */
function clickFirstPageScene() {
  document.onclick = displayHomePage;
}
/**Displays homepage */
function displayHomePage() {
  sessionStorage.hideStartScene = true;
  document.querySelector(".first-page-scene").style.display = "none";
  document.querySelector(".first-page-scene-text").style.display = "none";
}
/**If startscene already showned. Don't show again  */
function hideStartScene() {
  if (sessionStorage.hideStartScene) {
    displayHomePage();
  }
}

// const textDisplay = document.querySelector("#type-writer");
// const phrases = [
//   "Pluggar i goa Göteborg",
//   "Tidigare elmontör",
//   "Gillar att koda",
// ];
// let i = 0;
// let j = 0;
// let currentPhrase = [];
// let isDeleting = false;
// let isEnd = false;

// function loop() {
//   isEnd = false
//   textDisplay.innerHTML = currentPhrase.join("");

//   if (i < phrases.length) {
//     if (!isDeleting && j <= phrases[i].length) {
//       currentPhrase.push(phrases[i][j]);
//       j++;
//       textDisplay.innerHTML = currentPhrase.join("");
//     }

//     if (isDeleting && j <= phrases[i].length){
//       currentPhrase.pop(phrases[i][j]);
//       j--
//       textDisplay.innerHTML = currentPhrase.join("");
//     }

//     if (j == phrases[i].length) {
//       isEnd = true
//       isDeleting = true;

//     }

//     if (isDeleting && j === 0){
//       currentPhrase = []
//       isDeleting = false
//       i++
//       if (i == phrases.length){
//         i = 0
//       }
//     }
//   }
//   const spedUp = Math.random() * (80 - 50) + 50
//   const normalSpeed = Math.random() * (300 - 200) + 200
//   const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
//   setTimeout(loop, time);
// }
// loop();
/*
"Jag pluggar i goa Göteborg till Front End Utveckare, <br>tidigare elmontör."
*/
