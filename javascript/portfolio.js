window.addEventListener("DOMContentLoaded", main);

/**Calls hamburger menu and create card items when DOM is loaded.*/
function main() {
  mobileMenuContentShowRemove();
  createPortfolioCard(StarBomb);
  createPortfolioCard(NameGenerator);
  createPortfolioCard(TodoCalendar);
  createPortfolioCard(BtcConverter);
  createPortfolioCard(Grottdykaren);
  createPortfolioCard(AppleCopy);
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

const StarBomb = {
  title: "Star Bomb",
  img: "./images/StarBomb.png",
  alt: "'Start game' page with 2 rockets and space backgrounds",
  description: "An original game from scratch using everything we've learned during the Front End course with an extra focus on OOP, TypeScript and the P5 library.",
  gitLink: "https://github.com/Sillen00/Star-Bomb-Game",
  dirrLink: "https://star-bomb.netlify.app/",
  date: "January 2023",
}

const NameGenerator = {
  title: "Name Generator",
  img: "./images/NameGenerator.png",
  alt: "Name generator website with future background and button to generate random name.",
  description: "Side project i made using 'svenska-dagar-api' to get all names in Swedish 'namnsdagar' and generate random name.",
  gitLink: "https://github.com/Sillen00/Random-Name-Generator",
  dirrLink: "https://random-name-nameday.netlify.app/",
  date: "January 2023",
}

const TodoCalendar = {
  title: "Todo Calendar",
  img: "./images/TodoCalendar.png",
  alt: "Calendar with sidebar where you can add to-dos",
  description: "Group school project, To-Do calendar where you can add and remove to-dos. First time using Github with other people.",
  gitLink: "https://github.com/Sillen00/To-Do-Calendar",
  dirrLink: "",
  date: "January 2023",
}

const BtcConverter = {
  title: "Input Converter",
  img: "./images/InputConverter.png",
  alt: "Input converter webpage with orange background and to inputs to convert values",
  description: "Converts your sats into btc and vice versa.",
  gitLink: "https://github.com/Sillen00/Input-Converter-Sats-Btc",
  dirrLink: "https://sillen00.github.io/Input-Converter-Sats-Btc/",
  date: "February 2023",
}

const Grottdykaren = {
  title: "Grottdykaren",
  img: "./images/Grott-dykaren.png",
  alt: "Image of my text based game: Grott dykaren",
  description:
    "This is a Interactive text based game where you dive with your friend to find some gold when suddenly your friend disapears. Created using: HTML, CSS, JS.",
  gitLink:
    "https://github.com/Sillen00/TextbaseradInteraktivUpplevelse-Uppgift",
  dirrLink:
    "https://sillen00.github.io/TextbaseradInteraktivUpplevelse-Uppgift/",
  date: "November 2022",
};

const AppleCopy = {
  title: "Apple Copy",
  img: "./images/Apple-copy.png",
  alt: "Image of my Apple website copy",
  description: "Apple copy by me and Thomas Ingvarsson. My first school submission. Created using: HTML, CSS.",
  gitLink: "https://github.com/Sillen00/Apple-Hemsida",
  dirrLink: "https://sillen00.github.io/Apple-Hemsida/",
  date: "October 2022",
}