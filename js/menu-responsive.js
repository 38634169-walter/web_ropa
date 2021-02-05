$(document).ready(mostrar_menu);

let num = 0;
let todo = 0;

function mostrar_menu(){
    /* ICONOS MENU RESPONSIVE */ 
    
    $('.menu-icon-responsive').click(function(){
        
        $('.menu-icon-responsive').toggleClass('remove');
        $('.x-icono-responsive').toggleClass('show');
        $('.nav').animate({
            left:'0'
        });
    
    });

    $('.x-icono-responsive').click(function(){
        $('.menu-icon-responsive').toggleClass('remove');
        $('.x-icono-responsive').toggleClass('show');
        $('.nav').animate({
            left:'-100%'
        });
    
    });

    /* FLECHAS MENU Y SUBMENU */ 
    $('.dropbtn1').click(function(){
        $('.sub-menu1').toggleClass('show');
        $('.arrow-down-sub-menu1').toggleClass('remove');
        $('.arrow-side-sub-menu1').toggleClass('show');

        $('.sub-menu1-1').removeClass('show');
        $('.sub-menu1-2').removeClass('show');
        $('.sub-menu1-3').removeClass('show');
        $('.sub-menu1-4').removeClass('show');
        $('.sub-menu1-5').removeClass('show');
        $('.sub-menu1-6').removeClass('show');

        $('.down1').removeClass('remove');
        $('.side1').removeClass('show');
        $('.down2').removeClass('remove');
        $('.side2').removeClass('show');
        $('.down3').removeClass('remove');
        $('.side3').removeClass('show');
        $('.down4').removeClass('remove');
        $('.side4').removeClass('show');
        $('.down5').removeClass('remove');
        $('.side5').removeClass('show');
        $('.down6').removeClass('remove');
        $('.side6').removeClass('show');


    });



    $('.dropbtn1-1').click(function(){
        $('.sub-menu1-1').toggleClass('show');
        $('.down1').toggleClass('remove');
        $('.side1').toggleClass('show');
    });
    $('.dropbtn1-2').click(function(){
        $('.sub-menu1-2').toggleClass('show');
        $('.down2').toggleClass('remove');
        $('.side2').toggleClass('show');
    });
    $('.dropbtn1-3').click(function(){
        $('.sub-menu1-3').toggleClass('show');
        $('.down3').toggleClass('remove');
        $('.side3').toggleClass('show');
    });
    $('.dropbtn1-4').click(function(){
        $('.sub-menu1-4').toggleClass('show');
        $('.down4').toggleClass('remove');
        $('.side4').toggleClass('show');
    });
    $('.dropbtn1-5').click(function(){
        $('.sub-menu1-5').toggleClass('show');
        $('.down5').toggleClass('remove');
        $('.side5').toggleClass('show');
    });
    $('.dropbtn1-6').click(function(){
        $('.sub-menu1-6').toggleClass('show');
        $('.down6').toggleClass('remove');
        $('.side6').toggleClass('show');
    });

}


