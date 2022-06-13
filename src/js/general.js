//Инициализация бургер меню
$(document).ready(function () {
    $('.header__toggle').click(function (event) {
        $('.header__toggle').toggleClass('active');
        $('.header__block').slideToggle(300);
    });
});