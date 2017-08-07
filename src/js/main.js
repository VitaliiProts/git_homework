var el = document.querySelector('.menu-toggle'),
    menuContainer = document.querySelector('.menu-container');
el.addEventListener('click', function (e) {
    e.preventDefault();
    menuContainer.classList.toggle('is-opened');
});