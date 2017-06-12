$(function() {
    $('body').removeClass('fade-out');
});

$('body').scrollspy({
  target: '#navbar'})

$(".navbar-nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
      // allow room for navbar
       var shiftWindow = function() { scrollBy(0, 0) }; // where navbar height is 50px
	   	 if (location.hash) shiftWindow();
	   	 window.addEventListener("hashchange", shiftWindow);
     });

});

//Logo scroll effect
$(window).scroll(function() {
  $(".logo").css({
    "top": -($(window).scrollTop())/8 + "px"
  });
});

$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});

//var screenWidth = $(window).height()-300;
//$("#hero").height(screenWidth);

//Mobile menu
$('.collapse').on('show.bs.collapse', function(e) {
  $('#navbar').addClass("navbar-fullscreen");
    });
$('.collapse').on('hide.bs.collapse', function(e) {
      $('#navbar').removeClass("navbar-fullscreen");
        });
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
          $('.navbar a').on('click', function(){
                $('#navmenu').collapse('hide');
            });
        }
