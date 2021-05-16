$(document).ready(function () {
    // slider of catigories
    $(".catigories__slider").slick({
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1250,
        slidesToShow: 4,
        adaptiveHeight: false,
        initialSlide: 4,
        dots: false,
        prevArrow:
        '<button type="button" class="slick-prev"><img src="icons/arrow-slider.svg"></button>',
        nextArrow:
        '<button type="button" class="slick-next"><img src="icons/arrow-slider.svg"></button>',
        responsive: [
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 4,
            arrows: false,
            },
        },
        {
            breakpoint: 565,
            settings: {
            slidesToShow: 4,
            arrows: false,
            },
        },
        ],
    });

	// slider of intro
	$(".intro__slider").slick({
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		adaptiveHeight: false,
		arrows: false,
		dots: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="icons/arrow-slider.svg"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="icons/arrow-slider.svg"></button>',
	});

	// slider of bestsellers
	$(".bestsellers__slider").slick({
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 2500,
		slidesToShow: 3,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="icons/arrow-slider.svg"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="icons/arrow-slider.svg"></button>',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				},
			},
		],
	});
});
