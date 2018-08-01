// JavaScript Document
jQuery(document).ready(function($) {
    "use strict";
	
     //PrettyPhoto Script
    $('a[data-rel]').each(function () {
        $(this).attr('rel', $(this).data('rel'));
    });
    $(".pretty-gallery a[rel^='prettyPhoto']").prettyPhoto();
   

	//STICKY HEADER
	if($('#cp_header').length){
		// grab the initial top offset of the navigation 
		var stickyNavTop = $('#cp_header').offset().top;
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			// if we've scrolled more than the navigation, change its position to fixed to stick to top,
			// otherwise change it back to relative
			if (scrollTop > stickyNavTop) { 
				$('#cp_header').addClass('cp_sticky');
			} else {
				$('#cp_header').removeClass('cp_sticky'); 
			}
		};
		stickyNav();
		// and run it again every time you scroll
		$(window).scroll(function() {
			stickyNav();
		});
	}

    if($('.cp_banner').length){
        // grab the initial top offset of the Banner 
        var banner_stickyHoldTop = $('.cp_banner').offset().top;
        var banner_stickyHold = function(){
            var scrollTop = $(window).scrollTop();
            if (scrollTop > banner_stickyHoldTop) { 
                $('.cp_banner').addClass('cp_banner-sticky');
            } else {
                $('.cp_banner').removeClass('cp_banner-sticky'); 
            }
        };
        banner_stickyHold();
        // and run it again every time you scroll
        $(window).scroll(function() {
            banner_stickyHold();
        });
    }

	 //OWL SLIDER For Banner Slider
    if ($('#cp_banner-slider').length) {
        $("#cp_banner-slider").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed:1000,
            pagination:false,
            transitionStyle : "fade",
            autoPlay: true,
            items: 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsMobile : [480,1],
        });
    }
	
     //OWL SLIDER For Banner Slider
    if ($('#cp_banner-slider2').length) {
        $("#cp_banner-slider2").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed:1000,
            pagination:true,
            transitionStyle : "fade",
            autoPlay: true,
            items: 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsMobile : [480,1],
        });
    }

     //OWL SLIDER For About Section Slider
    if ($('#cp_about-slider').length) {
        $("#cp_about-slider").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed:500,
            pagination:false,
            transitionStyle : "fade",
            autoPlay: true,
            navigationText:'',
            items: 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsMobile : [480,1],

        });
    }

    //OWL SLIDER For About Slider2
    if ($('#cp_about-slider2').length) {
        $("#cp_about-slider2").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed:500,
            pagination:true,// Show Pagination buttons
            transitionStyle : "fade",
            autoPlay: false,
            navigationText:'',
            items: 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsMobile : [480,1],

        });
    }

    //OWL SLIDER For Blog Slider
    if ($('#cp_blog-slider').length) {
        $("#cp_blog-slider").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed:700,
            pagination:false,// Show Pagination buttons
            transitionStyle : "fade",
            autoPlay: false,
            navigationText:'',
            items: 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsMobile : [480,1],

        });
    }


     //OWL SLIDER For Sidebar Slider
    if ($('#cp_sidebar-slider').length) {
        $("#cp_sidebar-slider").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed:800,
            pagination:false,// Show Pagination buttons
            transitionStyle : "fade",
            autoPlay: true,
            navigationText:'',
            items: 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsMobile : [480,1],

        });
    }

    //Bx Slider For Testimonial Slider
    if ($('#testimonial-slider').length) {
       $('#testimonial-slider').bxSlider({       
          auto: true,
          mode: 'fade',
          nextText: '',
          prevText: ' ',
          speed: 1000,
       });
    }


    //Bx Slider Product Detail Page
    if ($('#product-slider').length) {
        $('#product-slider').bxSlider({
          auto: true,
          pagerCustom: '#bx-pager',
          navigation:false,
        });
    }


    //FILTERABLE START
    if ($('.portfolioContainer').length) {
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    
    $('.cp_portfolioFilter a').on("click", function(){
        $('.cp_portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
    }//FILTERABLE END
    

    //Audio Player
    if ($('audio').length) {
     $('audio').audioPlayer();
    }

    //Map Js
    if ($('#map_contact_1').length) {
        var map;
        var myLatLng = new google.maps.LatLng(48.85661, 2.35222);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                stylers: [{
                    hue: '#cacaca'
                }, {
                    saturation: -100,
                }, {
                    lightness: 10
                }]
            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_1'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'Images/map-marker.png',
        });
        marker.getPosition();
        //End marker
    }   


     //Twitter Js
    if ($('#tweecool').length) {
      $('#tweecool').tweecool({
         username : 'crunchpress', 
         limit : 3,  
      });
    }

	
	//Event Detail Countdown 
	if($('#event-countdown').length){
		var austDay = new Date();
		austDay = new Date(2015, 12-1, 5,12,15)
		$('#event-countdown').countdown({
		labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
		until: austDay
		});
		$('#year').text(austDay.getFullYear());
	}
	
	//Coming Soon Page 1 Countdown
	if($('#event-countdown1').length){
		var austDay = new Date();
		austDay = new Date(2015, 12-1, 5,12,15)
		$('#event-countdown1').countdown({
		labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
		until: austDay
		});
		$('#year').text(austDay.getFullYear());
	}
	
	
	//Coming Soon Page 2 Countdown 
	if($('#event-countdown2').length){
		var austDay = new Date();
		austDay = new Date(2015, 12-1, 5,12,15)
		$('#event-countdown2').countdown({
		labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
		until: austDay
		});
		$('#year').text(austDay.getFullYear());
	}

	//Masonary Gallery For Gallery Page
    if ($('#cp_masonrywrap').length) {
         jQuery(function($) {
        function attWookGrid() {
            var options = {
                itemWidth: 261, // Optional min width of a grid item
                autoResize: true, // This will auto-update the layout when the browser window is resized.
                container: $('#cp_masonrywrap'), // Optional, used for some extra CSS styling
                offset: 30, // Optional, the distance between grid items
                flexibleWidth: 261 // Optional, the maximum width of a grid item
            };
            var handler = $('#cp_masonrywrap li');
            handler.wookmark(options);
        }

        $(window).load(function() {
            attWookGrid();
        });
        });
    }


    // Scroll body to 0px on click
    $("#cp_back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1000) {
                $('#cp_back-top').fadeIn();
            } else {
                $('#cp_back-top').fadeOut();
            }
        });

        $('#cp_back-top a').on("click", function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

		
    
});