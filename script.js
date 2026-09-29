

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active'); // анимация кнопки
    nav.classList.toggle('nav--open');         // открытие/закрытие меню
});
