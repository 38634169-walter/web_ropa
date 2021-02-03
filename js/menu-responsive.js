$(document).ready(mostrar_menu);

let num = 0;
let todo = 0;

function mostrar_menu(){
    
    $('.menu-icon-responsive').click(function(){
        if(num == 0){
            $('.nav').animate({
                left:'0'
            });
            num = 1;
        }
        else{
            $('.nav').animate({
                left:'-100%'
            });
            num = 0;
        }
    });

    /*
    $('.vestimentas-sub').click(function(){
        $(this).children('.vestimentas-sub-li').slideToggle();
        todo = 1;
    });
    
    $('#vestimentas-li').click(function(){
        if ( todo == 0){
            $('.sub-menu').css({"display":"block"});
            todo = 1;
        }
        if(todo == 2){
            $('.sub-menu').css({"display":"none"});
            todo = 0;
        }
    });
    */ 
    $('.dropbtn').click(function(){
        $('.sub-menu2').removeClass('add-display');
        $('.sub-menu').toggleClass('add-display');
    });
    $('.dropbtn2').click(function(){
        $('.sub-menu2').toggleClass('add-display');
    });



}


