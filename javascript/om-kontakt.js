window.addEventListener("DOMContentLoaded", main);

/**Start when "om-kontakt" DOM content is loaded. */
function main() {
  mobileMenuContentShowRemove();
  ageInRealTime();
}

/**Calculate birthdate and today date to get my age in real time. */
function ageInRealTime() {
  const birthDate = getMyBirthDate();
  const todayDate = getTodayDate();
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDate.day > todayDate.Day) {
    todayDate.Day = todayDate.Day + monthDays[todayDate.Month - 1];
    todayDate.Month = todayDate.Month - 1;
  }

  if (birthDate.month > todayDate.Month) {
    todayDate.Month = todayDate.Month + 12;
    todayDate.Year = todayDate.Year - 1;
  }

  const day = todayDate.Day - birthDate.day;
  const month = todayDate.Month - birthDate.month;
  const year = todayDate.Year - birthDate.year;
  renderAge(
    year,
    month,
    day,
    todayDate.Hours,
    todayDate.Minutes,
    todayDate.Seconds
  );
}

/**Get my birthdate and return */
function getMyBirthDate() {
  const birthDate = new Date("2000-07-25"); // T13:37:00.000
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const year = birthDate.getFullYear();

  return { day, month, year };
}

/**Get todays date and return */
function getTodayDate() {
  const todayDate = new Date();
  const Seconds = todayDate.getSeconds();
  const Minutes = todayDate.getMinutes();
  const Hours = todayDate.getHours();
  let Day = todayDate.getDate();
  let Month = todayDate.getMonth() + 1;
  let Year = todayDate.getFullYear();

  return { Seconds, Minutes, Hours, Day, Month, Year };
}

/**Render out current age in real time on p-tag */
function renderAge(year, month, day, todayHours, todayMinutes, todaySeconds) {
  const pTag = document.getElementById("age-p-tag");
  pTag.innerHTML =
    year +
    "År, " +
    month +
    "Månader, " +
    day +
    "Dagar, " +
    todayHours +
    "Timmar, " +
    todayMinutes +
    "Min, " +
    todaySeconds +
    "Sek";
}
