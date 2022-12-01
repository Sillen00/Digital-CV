
/**Toggle between hamburger och mobile nav menu */
function mobileMenuContentShowRemove() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");

  hamburger.addEventListener("click", toggleMenu);

  const links = document.querySelectorAll(".menu li");
  for (const link of links) {
    link.addEventListener("click", toggleMenu);
  }


  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
}