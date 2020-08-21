let slider = $('.product__slider');
slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});