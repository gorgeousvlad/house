
$(document).ready(function(){
  
  //mobile menu
  var menu = $("#main-menu");
  $(document.body).on(('ontouchstart' in window)? "touchstart":"click",function(e){
    if ($(e.target).hasClass("menu-button")){
      menu.toggleClass("shown");
      e.stopPropagation();
    }   
    else if ($(e.target).is("#main-menu li,#main-menu li a")){
      e.stopPropagation();
    }
   else
      menu.removeClass("shown")   
  });
  
  //slick init
  $('.slick-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  autoplaySpeed: 2000,
  pauseOnHover:false,
  respondTo:"min",
  dots: false,
  arrows:false,
  responsive: [
   {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

$('#gallery-wraper').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  speed:1000,
  pauseOnHover:false,
  respondTo:"window",
  dots: true,
  arrows:true,
  adaptiveHeight: true,
  responsive: [
   {
      breakpoint: 1550,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: '0px'//,
        // // variableWidth: true
      }
    }
  ]
    });

//function recounts carousel images size on window resizing
var setImageSize = (function(){
  var $wrapper = $("#slickWrapper");
  var RATIO = 1.5;
  return function(){
    var imgWidth =$wrapper.outerWidth()
    var imgs = $wrapper.find(".slick-img img")
    var visibleImgs = $wrapper.find(".slick-active img")
    var width = Math.round(imgWidth/visibleImgs.length);
    imgs.width(width);
    imgs.height(width/RATIO);
  }
})();
$(window).on("resize",setImageSize);
$(window).on("resize",function(){menu.removeClass("shown")});
$('.slick-carousel').on("breakpoint",function(event, slick, breakpoint){
      setImageSize()    
  });
setImageSize();

});
