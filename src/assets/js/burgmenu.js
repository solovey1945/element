let headerBurg = $('.header__burgmenu');
let headerMenu = $('.header__navbar');
$(function() {
    headerBurg.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass("burgmenu--active");
        headerMenu.toggleClass('header__navbar--active');
    });
    $('.header__menu-item').click(function() {
        headerBurg.removeClass('burgmenu--active');
        $('.header__navbar').removeClass('header__navbar--active');
    });
});