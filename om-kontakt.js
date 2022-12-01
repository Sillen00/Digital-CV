window.addEventListener("DOMContentLoaded", main);

/**
 * Calls hamburger menu and
 */
function main() {
    mobileMenuContentShowRemove();
    ageInRealTime();
}

function ageInRealTime() {
  const birthDate = new Date("2000-07-25");
  const birthDateDay = birthDate.getDate();
  const birthDateMonth = birthDate.getMonth() + 1;
  const birthDateYear = birthDate.getFullYear();
  
  const todayDate = new Date();
  const todaySeconds = todayDate.getSeconds();
  const todayMinutes = todayDate.getMinutes();
  const todayHours = todayDate.getHours();
  let todayDay = todayDate.getDate();
  let todayMonth = todayDate.getMonth() + 1;
  let todayYear = todayDate.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  if (birthDateDay > todayDay){
    todayDay = todayDay + month[todayMonth - 1]
    todayMonth = todayMonth - 1;
  }

  if (birthDateMonth > todayMonth){
    todayMonth = todayMonth + 12;
    todayYear = todayYear - 1;
  }
  
  const d = todayDay - birthDateDay;
  const m = todayMonth - birthDateMonth;
  const y = todayYear - birthDateYear;

  const pTag = document.getElementById("age-p-tag");
  pTag.innerHTML = y + "År, " + m + "Månader, " + d + "Dagar, " + todayHours + "Timmar, " + todayMinutes +"Min, " + todaySeconds + "Sek";
}


