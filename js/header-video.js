const iconMenu = document.querySelector(".header__menu");
const menuBody = document.querySelector(".header__mob-wrp");

iconMenu.addEventListener("click", function () {
  document.body.classList.toggle("lock");
  iconMenu.classList.toggle("active3");
  menuBody.classList.toggle("active3");
  document.querySelector(".header__contacts").classList.toggle("fixed");
});

