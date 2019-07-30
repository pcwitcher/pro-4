const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const menu = document.querySelector(".menu");


burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show"); //tak
    iconX.classList.toggle("show");
    menu.classList.toggle("show"); //nie
    //burger.classList.toggle('show')
});

/*burger.addEventListener("click", function () {
    this.classList.toggle("show");
    menu.classList.toggle("pokaz");
})*/

/*const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const exit = document.getElementById('exit');

menu.addEventListener('click', function (e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click', function (e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
});*/