$(document).ready(function() {
    @@include('slider.js');
    @@include('popup.js');
    @@include('back-top.js');
    @@include('burgmenu.js');
    $('input[name=phone]').mask('+7 (999) 999 99 99');
});

$(window).on('load', () => {
    $('.preloader').delay(500).fadeToggle(500);
});