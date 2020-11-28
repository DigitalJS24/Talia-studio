$(document).ready(function() {
    let headerTop = $('#header').offset().top;
    let changeWidthMobile = 40;
    let changeWidthTablet = 60;
    let changeWidthDesktop = 80;

    $(window).scroll(function() {
        /* IF SCROLL ACTIVE */
        if ($(window).scrollTop() > headerTop) {
            $('#header').css({ position: 'sticky', top: '0px', width: '100%' });
            /* ON DESKTOP VERSION */
            if ($(window).width() > 900) {
                $('.desktop-menu-container').addClass("hidden-elem");
                $('.mobile-menu').css({
                    'pointer-events': 'all',
                    opacity: 1,
                    transition: 'opacity 0.3s ease-in-out',
                    width: '40px',
                    height: '40px',

                });
            }
            /* ON TABLET VERSION */
            else if ($(window).width() > 640) {

                $('.mobile-menu').css({
                    opacity: 1,
                    'pointer-events': 'all',
                    width: '40px',
                    height: '40px'
                });
                $('.desktop-menu-container').removeClass("hidden-elem");
            };
            /* NAVIGATION LOGO */
            if ($(window).width() > 900) {
                $('.navigation-logo').css({ width: changeWidthDesktop, transition: 'width 0.3s ease-in-out' });
            } else if ($(window).width() > 640 && $(window).width() < 900) {
                $('.navigation-logo').css({ 'width': changeWidthTablet, transition: 'width 0.3s ease-in-out' });
            } else {
                $('.navigation-logo').css({ width: changeWidthMobile, transition: 'width 0.3s ease-in-out' });
            }
            /* BACKGROUND DISABLE */
            $('.bg-disable').css({ background: 0 });
        } else {
            $('#header').css({ position: '' });
            $('.navigation-logo').css({ width: '' });
            $('.bg-disable').css({ background: '' });
            if ($(window).width() > 900) {

                $('.desktop-menu-container').removeClass("hidden-elem");
                $('.mobile-menu').css({ opacity: 0, transition: 'opacity 0.3s ease-in-out', 'pointer-events': 'none', width: '0' });
            }
        }
    });
});