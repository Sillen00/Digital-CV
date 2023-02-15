window.addEventListener("DOMContentLoaded", main);

/**Calls hamburger menu and create card items when DOM is loaded.*/
function main() {
  mobileMenuContentShowRemove();
  createPortfolioCard(item1);
  createPortfolioCard(item2);
  createPortfolioCard(item3);
  createPortfolioCard(item4);
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
  title: "Star Bomb",
  img: "./images/StarBomb.png",
  alt: "'Start game' page with 2 rockets and space backgrounds",
  description: "An original game from scratch using everything we've learned during the Front End course with an extra focus on OOP, TypeScript and the P5 library.",
  gitLink: "https://github.com/Sillen00/Star-Bomb-Game",
  dirrLink: "https://star-bomb.netlify.app/",
  date: "January 2023",
}

const item2 = {
  title: "Todo Calendar",
  img: "./images/TodoCalendar.png",
  alt: "Calendar with sidebar where you can add to-dos",
  description: "Group school project, To-Do calendar where you can add and remove to-dos. First time using Github with other people.",
  gitLink: "https://github.com/Sillen00/To-Do-Calendar",
  dirrLink: "",
  date: "January 2023",
}

const item3 = {
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

const item4 = {
  title: "Apple Copy",
  img: "./images/Apple-copy-liten.png",
  alt: "Image of my Apple website copy",
  description: "Apple copy by me and Thomas Ingvarsson. My first school submission. Created using: HTML, CSS",
  gitLink: "https://github.com/Sillen00/Apple-Hemsida",
  dirrLink: "https://sillen00.github.io/Apple-Hemsida/",
  date: "October 2022",
}