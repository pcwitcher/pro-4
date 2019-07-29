const burger = document.querySelector(".burger");
const nav = document.querySelector(".ul-list");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const menu = document.querySelector(".ul-list");


burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show"); //tak
    iconX.classList.toggle("show"); //nie
})

nav.addEventListener("click", function () {
    menu.classList.toggle(".pokaz"); //nie
})