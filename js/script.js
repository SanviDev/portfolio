const myFirstYear = new Date(2023,1).getFullYear();
const dateNow = new Date().getFullYear();
const year = document.getElementById("years");

year.innerText = dateNow-myFirstYear;
