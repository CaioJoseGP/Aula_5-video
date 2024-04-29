/* Navbar Contracted */

const mobileMenu = document.getElementById('mobile-menu');
const navContainer = document.querySelector('.nav_container');

mobileMenu.addEventListener('click', function() {
    navContainer.classList.toggle('contracted');
});

/* ??? Button */

const partyBTN = document.getElementById('party-btn');
const main_container = document.querySelector('.main_container');
const nav_container = document.querySelector('.nav_container');

partyBTN.addEventListener('click', function(){
    main_container.classList.toggle('color-change');
    nav_container.classList.toggle('color-change');
});