/**
 * Created by Dan on 5/25/17.
 */


$(document).ready(function(){
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

    //scrollspy

    $('body').scrollspy({ target: '#navbar-example' });


    //hide/show paragraph

    $('.p2').hide();

    $('.more').on('click', function(){
        $('.p2').slideToggle(1000);
        $('.more').hide();
    });

    $('.less').on('click', function(){
        $('.p2').slideToggle(1000);
        $('.more').show();
    });






 //animation stuff

/*
$("#professional").on('active', function () {
    $(this).toggleClass('animation-play-state');

});
*/


//attempts to make the animation work...

$('#professional').scroll(function() {
    $('.grid').toggleClass('animation-play-state');
});




});