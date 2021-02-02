$(document).ready(slider_portada);

var indice=0;
$('.paginacion ul li').eq(0).css({'background':'pink'});

function slider_portada(){

    $('.flecha-derecha').click(function(){
        indice++;
        if(indice > 3){
            indice = 0;
        }
        $('.slider').hide();
        $('.slider').eq(indice).fadeIn();

        $('.paginacion ul li').css({'background':'red'});
        $('.paginacion ul li').eq(indice).css({'background':'pink'});
    });
    $('.flecha-izquierda').click(function(){
        indice--;
        if(indice < 0){
            indice = 3;
        }
        $('.slider').hide();
        $('.slider').eq(indice).fadeIn();

        $('.paginacion ul li').css({'background':'red'});
        $('.paginacion ul li').eq(indice).css({'background':'pink'});
    });

    $('.paginacion ul li').click(function(){
        indice = $(this).index();
        $('.paginacion ul li').css({'background':'red'});
        $('.paginacion ul li').eq(indice).css({'background':'pink'});

        $('.slider').hide();
        $('.slider').eq(indice).fadeIn();
    });

    setInterval( function(){
        
        indice++;
        if(indice > 3){
            indice = 0;
        }
        $('.slider').hide();
        $('.slider').eq(indice).fadeIn();

        $('.paginacion ul li').css({'background':'red'});
        $('.paginacion ul li').eq(indice).css({'background':'pink'});
    },3000);
}