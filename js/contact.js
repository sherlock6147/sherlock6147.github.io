var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('main-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("invisible");
});