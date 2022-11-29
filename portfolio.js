window.addEventListener("DOMContentLoaded", main);

function main() {
  hamburgerMenuToggle();
  createPortfolioCard(item1);
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

function createPortfolioCard({
  title,
  img,
  alt,
  description,
  gitLink,
  dirrLink,
  date,
}) {
  const portfolio = document.querySelector(".portfolio-holder");
  let code = `
    <div class="card">
        <h4 class="card-title">${title}</h4>
        <img src="${img}" alt="${alt}">
        <div class="card-texts">
            <p class="card-description">${description}</p>
            <div class="projekt-links">
                <a target="_blank" href="${gitLink}"><i class="fa-brands fa-github"></i></a>
                <a target="_blank" href="${dirrLink}"><i class="fa-solid fa-link"></i></a>
            </div>
            <p class="card-date">${date}</p>                      
        </div>
    </div>
`;
  portfolio.innerHTML += code;
}

const item1 = {
  title: "Grottdykaren",
  img: "./images/Grott-dykaren-liten.png",
  alt: "Image of my text based game: Grott dykaren",
  description:
    "This is a Interactive text based game where you dive with your friend to find some gold when suddenly your friend disapears.",
  gitLink:
    "https://github.com/Sillen00/TextbaseradInteraktivUpplevelse-Uppgift",
  dirrLink:
    "https://sillen00.github.io/TextbaseradInteraktivUpplevelse-Uppgift/",
  date: "November 2022",
};
