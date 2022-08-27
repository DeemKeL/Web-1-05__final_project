$(document).ready(function(){
    $('.header-nav__menu-list').hide()

    $('#menu-btn').click(function(){
        $('.header-nav__menu-list').slideToggle();
    })
})