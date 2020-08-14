

                    

/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#202020" });
 });
 
 /* F.A.Q. */

$(document).ready(function(){
	dynamicFaq();
});

function dynamicFaq(){
	$('dd').hide();
	$('dt').bind('click', function(){
		$(this).toggleClass('open').next().slideToggle();;
	});
}

/*placeholder*/
 $(document).ready(function(){
                $('.count-list, .progress-bars-list').viewportChecker({
                    callbackFunction: function(elem, action){   
  $('.count, .percent span').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
                    }
                });
            });


 $('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    })
	 $('#myTab2 a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    })



    //Generation map google

    var mapGoogle = {
        $wrap: $('#map-canvas'),
        init: function () {
            var $lati = this.$wrap.attr('data-lat'), //ÑˆÐ¸Ñ€Ð¾Ñ‚Ð°
                    $longi = this.$wrap.attr('data-long'), //Ð´Ð¾Ð»Ð³Ð¾Ñ‚Ð°
                    map = {};
            map = new google.maps.Map(this.$wrap[0], this.mapOptions($lati, $longi));
            this.addMarker($lati, $longi, map);
        },
        addMarker: function ($lati, $longi, map)
        {
            
        },
        mapOptions: function ($lati, $longi) {
            var mapCoordinates = new google.maps.LatLng($lati, $longi);
            var mapOptions = {
                zoom: 15,
                disableDefaultUI: false,
                center: mapCoordinates,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 60
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ef8c25"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b6c54c"
            },
            {
                "lightness": 40
            },
            {
                "saturation": -40
            }
        ]
    },
    {}
]
            };
            return mapOptions;
        }
    }
    if ($('#content-box').hasClass('contacts')) {
        mapGoogle.init();
    }
// End generation map google

$(document).ready(function(){
   $(' a[href*=#].to-top').bind("click", function(e){
      var anchor = $(this);
   $(anchor).parent().parent().find('li').removeClass('current');
   $(anchor).parent('li').addClass('current');
   
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1400);
      e.preventDefault();
   });
   return false;
});


(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })

            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);


/*Fancybox*/


            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 360,
        minHeight: 321,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
    

/*Fancybox end*/  

    
        
        //   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});

 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
        arrows: false,
        fixed: false,
        autoCenter: false,
     
    });


$(function () {
      $(".rslides").responsiveSlides({
        manualControls: '#slider-pager',  
        speed: 800,
        timeout: 8000,
        nav:true,
        
});
});

$( document ).ready(function() {
    var $container = $('.isotope');
    // filter buttons
    $('#filters button').click(function(){
    var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.item', filter: selector });
      return false;
    });
    
});





        $(function() {
            

         $(".nav.navbar-nav  li.dropdown a").click(function() {
             $(".nav.navbar-nav   li.dropdown a.dropdown-toogle").removeClass("active");         
             $(this).toggleClass("active");
         })
         
    });
        $(function(none) {
          $(".nav.navbar-nav  li.dropdown a.active + ul.dropdown-menu li.dropdown a").click(function(none) {
             $(".nav.navbar-nav   li.dropdown a.active + ul.dropdown-menu li.dropdown a.dropdown-toogle").removeClass("active");         
             $(this).toggleClass("active");
         })
    });

$(".navbar-toggle").click(function() {
  $('.mobileMenu').toggleClass("pushed");
});

var blockHeight = $('.inner-page.portfolio-1column .container-fluid').height();
                $('.portfolio-1column-info').css('height',blockHeight);

                
              

            
                $('.all-products-header .cart').click(function(){
$(this).toggleClass('open');
});

                (function($) {
        $(function() {
            $('input, select').styler({
                selectSearch: true
            });
        });
        })(jQuery);



         $(function () {

        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true
        });

    });



/*
function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = $(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
}
);
columns.height(tallestcolumn);
}
$(document).ready(function() {
setEqualHeight($(".portfolio-1column-box .image-box, .portfolio-1column-box .portfolio-1column-info"));
});
*/



/*
$.fn.alignCenterScreen = function() {
    this.css("position", "absolute");
    this.css("top", ($(window).height() - this.outerHeight()) / 2 + $(window).scrollTop() + "px");
    this.css("left", ($(window).width() - this.outerWidth()) / 2 + $(window).scrollLeft() + "px");
    return this
};
$(".error-text-box").alignCenterScreen();
*/
/*

$(document).ready(function() {  
  $(".jcarousel-control-prev").mousemove(function(e){  
        var $target=$(e.target);
      if($target==$(this)){
         $(".jcarousel-control-prev:hover span").css('left',(pos.pageX-70)+'px').css('top',(pos.pageY-90)+'px'); 
      }
      });
});


$(document).ready(function(){

    var offset_cursor = 0;
    
    var border = 0;
    
    $('.jcarousel-control-prev').mousemove(function(e){
      
           
      var    parrent_width = $('.jcarousel-control-prev').width();
    var parrent_height = $('.jcarousel-control-prev').height();

    var offset_top = $('.jcarousel-control-prev').offset().top;
    var offset_left = $('.jcarousel-control-prev').offset().left;
    var offset_right = $('.jcarousel-control-prev').offset().right;

    var follow_width = $('.jcarousel-control-prev:hover span').width();
    var follow_height = $('.jcarousel-control-prev:hover span').height();
      
      
      
      var  x = e.pageX - offset_left;
      var  y = e.pageY - offset_top + offset_cursor;
      
      
      
      if((e.pageX + follow_width) > (offset_left + parrent_width))
      {
          
          x = (parrent_width - follow_width) - border;
          
      }
      
      
      
      if((e.pageX < (offset_left + border)))
      {
          x = border;
          
      }
      
      if((e.pageY + follow_height + offset_cursor) > (offset_top+ parrent_height) )
      {
          
          y = parrent_height - follow_height-border;
          
      }
      
      
      
   $('.jcarousel-control-prev:hover span').clearQueue();
      $('.jcarousel-control-prev:hover span').animate({left:x,top:y},0);
      
  
  });    
            
    
    $('.jcarousel-control-prev').mouseout(function(e){
        
          $('.jcarousel-control-prev:hover span').animate({top:'0px',left:'0px'},300);
          

        });    
});

*/

/*$(document).ready(function(){ 
   $(window).mousemove(function (pos) { 
    $(".jcarousel-control-prev:hover  span").css('left',(pos.pageX-40)+'px').css('top',(pos.pageY-90)+'px'); 

   }); 
   $(window).mousemove(function (pos) { 
    $(".jcarousel-control-next:hover  span").css('left',(pos.pageX-0.001)+'%').css('top',(pos.pageY-0.001)+'%'); 
    
   }); 
});

 */





