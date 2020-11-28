var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: {
        delay: 3000,
    },

    grabCursor: true,
    loop: true,

    // If we need pagination
    pagination: {
        /*         el: '.swiper-pagination', */

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})