/* ADD ANIMATION ON LINKS DESKTOP */
if (window.matchMedia('(min-width: 900px)').matches) {
    $('.link-animation-element').addClass('link-animation');
} else {
    $('.link-animation-element').removeClass('link-animation');
}
/* ADD ANIMATION ON BUTTONS DESKTOP */
if (window.matchMedia('(min-width: 900px)').matches) {
    $('.footer-social-img').addClass('footer-social-animation');
} else {
    $('.footer-social-img').removeClass('footer-social-animation');
}



/* ADD MASK FOR INPUT PHONE */

$(function() {
    //задание заполнителя с помощью параметра placeholder
    $("#test-lesson-form-input-phone").mask("+380 (99) 999-99-99");
});

/* ADD SCROLL FOR LINKS */

$(function() {
    headerTop = $('#header').offset().top;
    if (window.matchMedia('(min-width: 900px)').matches) {
        $('a.mobile-menu-modal-item').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top + 20 }, 100, 'linear');
        });
        $('a.desktop-menu-item').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 }, 100, 'linear');
        });
    } else {
        $('a.mobile-menu-modal-item').on('click', function(e) {
            e.preventDefault();
            if ($(window).scrollTop() > headerTop) {
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top + 20 }, 100, 'linear');
            } else {
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 40 }, 100, 'linear');
            }

        });

    }
});