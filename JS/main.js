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


    //focus for contact

    $('input, .form-control').focus(function() {
        $('input, .form-control').css('outline-color', '#21d44f');

    });



 //animation - professional

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        $('#scroll').each(function() {
            if ($('#scroll').isInViewport()) {
                $('#skills').fadeIn(2500);
            } else {
                $('#skills').hide();

            }
        });
    });


    //animation title
    $('.main .container').hide();
    $('.main .container').slideDown( 2500 ).delay( 800 ).fadeIn( 400 );

    $('.footer2-center').hide().delay(2500).show('blind', {direction: 'horizontal'}, 1500,);

  //animation - welcome

    $('.welcome').css('right','-100%');

    $('.welcome').delay(3000).animate({right: "+=100%"}, {duration:3000});

    $('#welcome').hide().delay(6000).show('blind', 1500, 'swing');






   /*
    $('#welcome').hide();

    $('#welcome').delay(6000).fadeIn(1500);

    $('#strive').hide();

    $('#strive').delay(6500).fadeIn(3500);

    $('#look').hide();

    $('#look').delay(7000).fadeIn(5500);

    $('.welcome .btn').hide().delay(7500).fadeIn(5500);
*/









    //best so far - just doesn't show on load to Professional - needs scroll to load

/*

    $('#skills').hide();


    $(window).scroll(function() {
        var hT = $('#scroll').offset().top,
            hH = $('#scroll').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop(),
            proj = 1800;
        console.log((hT-wH) , wS);
        if (wS > (hT+hH-wH)){
            $('#skills').fadeIn(3500);
            $('#skills').css('display', 'inline-block');
        }

        /*

         if (wS < (hT+hH-wH)){
            $('#skills').fadeOut(3500);
        }

        if (wS > proj){
            $('#skills').fadeOut(3500);
        }


    });

    $('#professional').click(function(){
       $('#skills').fadeIn(3500);

    });

*/

/*
hT    1296
hH    280
wh    775
wS    807
*/


/*


    if ( $('li#pro').hasClass('active') ) {
        $('#skills').fadeIn(3500);
    }
 */


/*
    if ( $('li#other').hasClass('active') ) {
    }
*/

/*

    var divpos = $('#professional').offset().top;

    $(window).on( 'scroll', function(){
        if ($(window).scrollTop() >= divpos) {
            $('#skills').fadeIn(3500);
        } else {
            $('#skills').hide;
        }
    });

*/



/*
$("#professional").on('active', function () {
    $(this).toggleClass('animation-play-state');

});
*/


//attempts to make the animation work...


//this one works best so far, might not work on mobile
/*
    $('.professional').mouseenter(function() {
        $('.inner').css('-webkit-animation-duration', '5s');
    });
*/


/*
$('.professional .center').scroll(function() {
    $('.grid').toggleClass('animation-play-state');
});
*/



});