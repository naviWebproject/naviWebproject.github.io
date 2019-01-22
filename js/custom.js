
/* show and hide navigation*/



$(document).ready(function(){



	'use strict';

	$(window).scroll(function(){

			'use strict';

			if ($(window).scrollTop() < 20) {



				$('.navbar').css({

					'margin-top':'-100px',
					'opacity':'0'
				});

               
			}
			else{

				$('.navbar').css({

					'margin-top':'0px',
					'opacity':'1'
				});


                 $('.navbar-default').css({

                    'background-color':'rgba(59,59,59,0.7)',
                    'border-color':'#444'
                });

                 $('.navbar-brand img').css({

                    'height':'35px',
                    'padding-top':'0px'
                 });

                 $('.navbar-nav li a').css({
                      
                      'padding-top':'15px'

                 })


                 


			}



	});



});

$('document').ready(function(){

    'use strict';


  $('.navbar-nav li a').click(function(){

    $('.navbar-nav li a').parent().removeClass('active');
    $(this).parent().addClass('active');
         


  });

})



$(document).ready(function(){

    'use strict';
    setInterval(function(){
        
        'use strict';
        var windowHeight = $(window).height();
        var containerHeight = $('.header-container').height();
        var padtop = windowHeight-containerHeight;

        $('.header-container').css({

            'padding-top':Math.round(padtop / 2) + 'px',
            'padding-bottom':Math.round(padtop / 2) + 'px'
        });

    },10);
});


$(document).ready(function(){
      $('.bxslider').bxSlider({
        
       slideWidth:292.5,
        auto:true,
        minSlides:1,
        maxSlides:3,
        sliderMargin:50

      });
    });


$(document).ready(function(){

    $('.counter-number').counterUp({
         
         delay:10,
         time:2000

    });



});

$(document).ready(function(){
    'use strict';

    new WOW().init();
})