const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.closeMenu');
const navElems = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', show);
closeMenu.addEventListener('click', close);
navElems.forEach(elem => elem.addEventListener('click', close));
function show(){
    navbar.style.display = "flex";
    navbar.style.top = "0";
}

function close(){
    navbar.style.top = "-110%";
}