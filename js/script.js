$(document).ready(function(){   

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });    

    $('.hamburger').click(function (event) {
        $('.menu ').toggleClass('menu_active');
        $('.hamburger ').toggleClass('hamburger_active');
    });

});  