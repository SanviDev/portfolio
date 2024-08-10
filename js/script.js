const body = document.querySelector('body');
const toogleTheme = document.getElementById('toogle-theme');
const icon = document.querySelector('.fa-regular');

toogleTheme.addEventListener('click', () => {
    body.classList.toggle('light');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    
})