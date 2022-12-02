window.addEventListener("DOMContentLoaded", main);

/**
 * Calls hamburger menu
 */
function main() {
  mobileMenuContentShowRemove();
  createPortfolioCard(item1);
  createPortfolioCard(item2);
}


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

const cardTemplate = {
  title: "",
  img: "",
  alt: "",
  description: "",
  gitLink: "",
  dirrLink: "",
  date: "",
}

const item1 = {
  title: "Grottdykaren",
  img: "./images/Grott-dykaren-liten.png",
  alt: "Image of my text based game: Grott dykaren",
  description:
    "This is a Interactive text based game where you dive with your friend to find some gold when suddenly your friend disapears. Created using: HTML, CSS, JS",
  gitLink:
    "https://github.com/Sillen00/TextbaseradInteraktivUpplevelse-Uppgift",
  dirrLink:
    "https://sillen00.github.io/TextbaseradInteraktivUpplevelse-Uppgift/",
  date: "November 2022",
};

const item2 = {
  title: "Apple Copy",
  img: "./images/Apple-copy-liten.png",
  alt: "Image of my Apple website copy",
  description: "Apple copy by me and Thomas Ingvarsson. My first school submission. Created using: HTML, CSS",
  gitLink: "https://github.com/Sillen00/Apple-Hemsida",
  dirrLink: "https://sillen00.github.io/Apple-Hemsida/",
  date: "October 2022",
}