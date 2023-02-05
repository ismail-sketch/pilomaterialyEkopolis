const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const headerContainer = document.querySelector('.header-container');
const headerContacts = document.querySelector('.header__contacts');
const burgerSpan = document.querySelectorAll('.burger span');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');



burger.addEventListener('click', () => {
    burgerSpan.forEach(item => {
        item.classList.toggle('active');
    })
    menu.classList.toggle('active');
    body.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')) {
        burgerSpan.forEach(item => {
            item.classList.remove('active');
        })
        menu.classList.remove('active');
        body.classList.remove('active');
    }
})

// sub-menu=======================
const subMenu = document.querySelector('.sub-menu');
const clickSubmenu = document.querySelector('.click-submenu');
const triangle = document.querySelector('.triangle');
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);



if (isMobile) {
    clickSubmenu.addEventListener('click', () => {
        subMenu.classList.toggle('active');
        triangle.classList.toggle('active');
    })
}




// Перемещение элементов в меню
function moveMenuEl() {
    if(window.innerWidth < 750) {
        menuList.insertAdjacentElement('beforeend', headerContacts);
    } else {
        headerContainer.insertAdjacentElement('beforeend', headerContacts);
    }
}
moveMenuEl();
window.addEventListener('resize', moveMenuEl);