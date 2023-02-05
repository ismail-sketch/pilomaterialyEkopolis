const burger = document.querySelector('.burger');
const burgerSpan = document.querySelectorAll('.burger span');
const menuList = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burgerSpan.forEach(item => {
        item.classList.toggle('active');
    })
    menuList.classList.toggle('active');
    body.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')) {
        burgerSpan.forEach(item => {
            item.classList.remove('active');
        })
        menuList.classList.remove('active');
        body.classList.remove('active');
    }
})