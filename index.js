$(document).ready(function () {
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1000,
        // prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><iconify-icon icon='akar-icons:arrow-left'></iconify-icon></button>",
        // nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><iconify-icon icon='akar-icons:arrow-right'></iconify-icon></button>",
        dots: true,
        draggable: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    // vertical: true
                }
            }
        ]
    });

});

$(document).ready(function () {
    $('.characteristics').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1000,
        // prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><iconify-icon icon='akar-icons:arrow-left'></iconify-icon></button>",
        // nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><iconify-icon icon='akar-icons:arrow-right'></iconify-icon></button>",
        dots: true,
        draggable: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    // vertical: true
                }
            }
        ]
    });

});

$(document).ready(function () {
    $('.characteristics-2').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        // autoplaySpeed: 1000,
        prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><iconify-icon icon='akar-icons:arrow-left'></iconify-icon></button>",
        nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><iconify-icon icon='akar-icons:arrow-right'></iconify-icon></button>",
        dots: true,
        draggable: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // vertical: true
                }
            }
        ]
    });

});



$(document).ready(function () {
    $('.characteristics-3').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    // vertical: true
                }
            }
        ]
    });

});

$(document).ready(function () {
    $('.characteristics-4').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    // vertical: true
                }
            }
        ]
    });

});


const menuButton = document.querySelector('.menu-button');
const menuAppear = document.querySelector('.menu-appear');


menuButton.addEventListener('click', showHideMenuButton);
var isShowHideMenu = false;
function showHideMenuButton() {
    // Hide menu default
    if (!isShowHideMenu) {
        menuAppear.classList.add('show-menu');
        isShowHideMenu = !isShowHideMenu;


        // document.querySelector('header').style.backgroundColor = '#00000';
        // document.querySelector('header').style.opacity = 0.5;

        // document.querySelector('main').style.backgroundColor = '#00000';
        // document.querySelector('main').style.opacity = 0.5;

        // document.querySelector('footer').style.backgroundColor = '#00000';
        // document.querySelector('footer').style.opacity = 0.5;

    }
    else if (isShowHideMenu) {
        menuAppear.classList.remove('show-menu');
        isShowHideMenu = !isShowHideMenu;
        // document.querySelector('header').style.backgroundColor = '#00000';
        // document.querySelector('header').style.opacity = 1;

        // document.querySelector('main').style.backgroundColor = '#00000';
        // document.querySelector('main').style.opacity = 1;

        // document.querySelector('footer').style.backgroundColor = '#00000';
        // document.querySelector('footer').style.opacity = 1;
    }
}
