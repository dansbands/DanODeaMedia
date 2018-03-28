/**
 * Created by Dan on 5/25/17.
 */


$(document).ready(function(){

   /*
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


*/
    //scrollspy

    $('body').scrollspy({ target: '#navbar-example' });


    //hide/show paragraph

    $('.p2-1').hide();

    $('.more-1').on('click', function(){
        $('.p2-1').slideToggle(1000);
        $('.more-1').hide();
    });

    $('.less-1').on('click', function(){
        $('.p2-1').slideToggle(1000);
        $('.more-1').show();
    });


    $('.p2-2').hide();

    $('.more-2').on('click', function(){
        $('.p2-2').slideToggle(1000);
        $('.more-2').hide();
    });

    $('.less-2').on('click', function(){
        $('.p2-2').slideToggle(1000);
        $('.more-2').show();
    });


    $('.p2-3').hide();

    $('.more-3').on('click', function(){
        $('.p2-3').slideToggle(1000);
        $('.more-3').hide();
    });

    $('.less-3').on('click', function(){
        $('.p2-3').slideToggle(1000);
        $('.more-3').show();
    });


    $('.p2-4').hide();

    $('.more-4').on('click', function(){
        $('.p2-4').slideToggle(1000);
        $('.more-4').hide();
    });

    $('.less-4').on('click', function(){
        $('.p2-4').slideToggle(1000);
        $('.more-4').show();
    });



    //hide/show descriptions
    //needs better animation - center or rearrange img

/*

    $('.col-md-4').hide();

    $('.col-md-6').on('click', function(){
        $(this).next().slideToggle(1000);
    });

*/




 //animation stuff

/*
$("#professional").on('active', function () {
    $(this).toggleClass('animation-play-state');

});
*/


//attempts to make the animation work...

$('.professional .center').hide();

/*    .click(function() {
    $('.inner').css('-webkit-animation-duration', '3s');
});
*/



});
