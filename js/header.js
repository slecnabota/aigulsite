const iconMenu = document.querySelector(".header__menu");
const menuBody = document.querySelector(".header__mob-wrp");
const link1 = document.getElementById("id1");
const link2 = document.getElementById("id2");
const link3 = document.getElementById("id3");
iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle("lock");
  iconMenu.classList.toggle("active3");
  menuBody.classList.toggle("active3");
  document.querySelector(".header__contacts").classList.toggle("fixed");
});
link1.addEventListener("click", function () {
  document.body.classList.toggle("lock");
  iconMenu.classList.toggle("active3");
  menuBody.classList.toggle("active3");
  languages.classList.toggle("fixed");
  logo.classList.toggle("width");
});
link2.addEventListener("click", function () {
  document.body.classList.toggle("lock");
  iconMenu.classList.toggle("active3");
  menuBody.classList.toggle("active3");
  languages.classList.toggle("fixed");
  logo.classList.toggle("width");
});
link3.addEventListener("click", function () {
  document.body.classList.toggle("lock");
  iconMenu.classList.toggle("active3");
  menuBody.classList.toggle("active3");
  languages.classList.toggle("fixed");
  logo.classList.toggle("width");
});
