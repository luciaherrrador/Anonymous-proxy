'use strict';

const buttonhamburguer = document.querySelector('.nav-trigger');
const buttonClose = document.querySelector('.nav-close');
const navMenu = document.querySelector('.nav');

function slideMenu() {
    navMenu.classList.toggle('nav-hidden');
}

buttonhamburguer.addEventListener('click', slideMenu);
buttonClose.addEventListener('click', slideMenu);
