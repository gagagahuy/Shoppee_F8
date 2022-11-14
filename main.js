const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const overlay = $(".modal__overlay");
const modal = $(".modal");
const register = $(".register");
const input = $(".header__search-input");
const inputHistory = $(".header__search-history");
const menuIcon = $(".header__menu");
const headerMenuList = $(".header__menu-list");
const headerMenuOverlay = $(".header__menu-overplay");

input.onclick = function () {
    inputHistory.classList.add("active");
};

register.onclick = function (event) {
    modal.classList.add("active");
    event.preventDefault();
};

overlay.onclick = function () {
    modal.classList.remove("active");
};

menuIcon.onclick = function () {
    headerMenuList.classList.toggle("active");
};
