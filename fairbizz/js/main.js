(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});


// slider active
$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fas fa-arrow-left"></i>Prev','<i class="fas fa-arrow-right"></i>Next'],
    nav:true,
	dots:true,
	autoplay:true,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})


// service active
$('.service-active').owlCarousel({
    loop:true,
	navText:['<i class="fas fa-arrow-left"></i>Prev','Next<i class="fas fa-arrow-right"></i>'],
	slideBy:3,
	dots:true,
    nav:true,
	autoplay:false,
	autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// case-active
$('.case-active').owlCarousel({
    loop:true,
	navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    slideBy:1,
	dots:false,
    nav:true,
	autoplay:true,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        991:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

// testimonial-active
$('.testimonial-active').owlCarousel({
    loop:true,
	navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	slideBy:1,
	dots:false,
    nav:true,
	autoplay:false,
	autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// brand-active
$('.brand-active').owlCarousel({
    loop:true,
	navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	slideBy:1,
	dots:false,
    nav:false,
	autoplay:true,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },
        768:{
            items:5
        },
        992:{
            items:6
        },
        1000:{
            items:6
        }
    }
})


/* magnificPopup video play */
$('.play-video').magnificPopup({
	type: 'iframe',
	gallery: {
	  enabled: true
	}
});



// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-long-arrow-alt-up ">', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


// Nice select active
$('select').niceSelect();


})(jQuery);