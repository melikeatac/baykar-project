$(document).ready(function () {
    $('.cs-main-menu .navbar-nav .nav-link').on('click', function () {
        $('.cs-main-menu .navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    })
    $('.cs-banner-button .cs-link-1').on('click', function () {
        $('.cs-banner-button .cs-link-1').removeClass('active');
        $(this).addClass('active');
    })
    $('.cs-sec5-list .cs-item a').on('click', function () {
        $('.cs-sec5-list .cs-item a').removeClass('active');
        $(this).addClass('active');
    })
})



