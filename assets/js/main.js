$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{//quando estiver proxima de 0, mostra 1 item por vez
                items:1
            },
            600:{
                items:3//quando minha tela tem 600 ou menos px, mostra 3 items por vez
            },
            1000:{//quando minha tela tem 1000, mostra 5 items
                items:5
            }
        }
    });
});