window.addEventListener("DOMContentLoaded", main);

/**
 * Calls hamburger menu and 
 */
function main() {
    hamburgerMenuToggle();
    ageInRealTime();
}


function ageInRealTime(){
    const birthDate = new Date("2000-07-25");
    const birthDateDay = birthDate.getDate();
    const birthDateMonth = birthDate.getMonth();
    const birthDateYear = birthDate.getFullYear();
    
    
    const todayDate = new Date();
    const todayDateSeconds = todayDate.getSeconds();
    const todayDateMinutes = todayDate.getMinutes();
    const todayDateHours = todayDate.getHours();
    const todayDateDay = todayDate.getDate();
    const todayDateMonth = todayDate.getMonth();
    const todayDateYear = todayDate.getFullYear();


    let calculatedAge = [todayDateYear - birthDateYear] + "År, " + [todayDateMonth - birthDateMonth] + "Månader, " + [todayDateDay - birthDateDay] + "Dagar, " + [todayDateHours] + "Timmar, " + [todayDateMinutes] + "Min och " + [todayDateSeconds] + "Sek";
    

    const pTag = document.getElementById("age-p-tag")
    pTag.innerHTML = calculatedAge;    

}