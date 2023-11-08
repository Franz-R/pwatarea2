document.addEventListener('DOMContentLoaded', function () {
    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach(function (submenu) {
        submenu.addEventListener('click', function () {
            this.querySelector('.submenu-content').classList.toggle('show');
        });
    });
});
