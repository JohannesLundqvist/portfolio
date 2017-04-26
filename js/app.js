$('body').scrollspy({
  target: '#navbar'})
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});

//Logo scroll effect
$(window).scroll(function() {
  $(".logo").css({
    "top": -($(window).scrollTop())/8 + "px"
  });
});

//Modal stuff - comment out if acts to weird
$(document).ready(function(){
   $(window.location.hash).modal('show');
   $('div[data-toggle="modal"]').click(function(){
     console.log("opened");
      window.location.hash = $(this).attr('href');
      window.onhashchange = function() {
        if (!location.hash){
          $('.modal').modal('hide');
        }
      }
   });
   function revertToOriginalURL() {
       var original = window.location.href.substr(0, window.location.href.indexOf('#'))
       history.replaceState({}, document.title, original);
   }

   $('.modal').on('hidden.bs.modal', function () {
       revertToOriginalURL();
   });
   $('button[data-dismiss="modal"]').click(function(){
        var original = window.location.href.substr(0, window.location.href.indexOf('#'))
        history.replaceState({}, document.title, original);
        $('.modal').modal({show:false});
    });
       if(window.location.href.indexOf('#automanager') != -1) {
         $('.modal').load('/automanager.html',function(result){
            $('#automanagerModal').modal({show:true});
               });
       }
       if(window.location.href.indexOf('#campaignGen') != -1) {
         $('.modal').load('/campaignGen.html',function(result){
            $('#campaignGenModal').modal({show:true});
               });
       }
       if(window.location.href.indexOf('#honeycomb') != -1) {
         $('.modal').load('/honeycomb.html',function(result){
            $('#honeycombModal').modal({show:true});
            $('#honeycombModal').on( 'show.bs.modal', function( event ) {
              $('.main-carousel').flickity();
            });
               });
       }
       if(window.location.href.indexOf('#turnApp') != -1) {
         $('.modal').load('/turnApp.html',function(result){
            $('#turnAppModal').modal({show:true});
               });
       }
       if(window.location.href.indexOf('#bellaStel') != -1) {
         $('.modal').load('/bellaStel.html',function(result){
            $('#bellaStelModal').modal({show:true});
               });
       }
       if(window.location.href.indexOf('#ixdRedesignGen') != -1) {
         $('.modal').load('/ixdRedesignGen.html',function(result){
            $('#ixdRedesignGenModal').modal({show:true});
               });
       }
       if(window.location.href.indexOf('#hamlin') != -1) {
         $('.modal').load('/hamlin.html',function(result){
            $('#hamlinModal').modal({show:true});
               });
       }

});

// show carousel after modal shown
$('#honeycombModal').on( 'show.bs.modal', function( event ) {
  $('.main-carousel').flickity();
});

//var screenWidth = $(window).height()-300;
//$("#hero").height(screenWidth);

//Opens modals
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
$('#automanager').click(function(){
    $('.modal').load('/automanager.html',function(result){
       $('#automanagerModal').modal({show:true});
        	});
});
$('#campaignGen').click(function(){
    $('.modal').load('/campaignGen.html',function(result){
       $('#campaignGenModal').modal({show:true});
        	});
});
$('#honeycomb').click(function(){
    $('.modal').load('/honeycomb.html',function(result){
       $('#honeycombModal').modal({show:true});
       console.log('click');
        	});
});
$('#turnApp').click(function(){
    $('.modal').load('/turnApp.html',function(result){
       $('#turnAppModal').modal({show:true});
        	});
});
$('#bellaStel').click(function(){
    $('.modal').load('/bellaStel.html',function(result){
       $('#bellaStelModal').modal({show:true});
        	});
});
$('#ixdRedesign').click(function(){
    $('.modal').load('/ixdRedesign.html',function(result){
       $('#ixdRedesignModal').modal({show:true});
        	});
});
$('#hamlin').click(function(){
    $('.modal').load('/hamlin.html',function(result){
       $('#hamlinModal').modal({show:true});
        	});
});
