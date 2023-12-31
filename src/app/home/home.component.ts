import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TagsService } from '../services/tags-service.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  yearsExperience: number = 0;
  currentYear: number = new Date().getFullYear();

  constructor(private tagsService: TagsService) {
    this.configureMetaTags();
  }
  ngAfterViewInit(): void {
    $(window).on('load', function () {
      console.log('window loaded');
      $('.loader').fadeOut(200);
      $('.line').addClass('active');
    });
    $(document).ready(() => {

      /* Full page scroll*/
      console.log('DODUMENT READY');
      if ($('#pagepiling').length > 0) {
        $('#pagepiling').pagepiling({
          scrollingSpeed: 280,
          navigation: false,
          menu: '.navbar-nav',
          anchors: ['home', 'music', 'contact'],
          afterRender: function (anchorLink: any, index: any) {
            NavbarColor();

          },
          afterLoad: function (anchorLink: any, index: any) {
            $('.pp-section .intro').removeClass('animate');
            $('.active .intro').addClass('animate');
            NavbarColor();
          }
        });



        function NavbarColor() {
          if ($('.pp-section.active').hasClass('navbar-is-white')) {
            $('.navbar-desctop').addClass('navbar-white');
            $('.progress-nav').addClass('progress-nav-white');
            $('.navbar-bottom').addClass('navbar-bottom-white');
          }
          else {
            $('.navbar-desctop').removeClass('navbar-white');
            $('.progress-nav').removeClass('progress-nav-white');
            $('.navbar-bottom').removeClass('navbar-bottom-white');
          }
        }
      }
    });

  }

  ngOnInit(): void {

    /* Navbar toggler */
    $('.toggler').on('click', function () {
      $('body').addClass('menu-is-open');
    });

    $('.close, .click-capture').on('click', function () {
      $('body').removeClass('menu-is-open');
    });


    /* Navbar mobile */
    $('.navbar-nav-mobile li a').on('click', () => {
      $('body').removeClass('menu-is-open');
      $('.navbar-nav-mobile li a').removeClass('active');
      $(this).addClass('active');
    });

    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });



    /* Change bacgkround on project section*/
    $('.project-box').on('mouseover', () => {
      var index = $('.project-box').index(this);
      $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });


    /* Carousel experience*/
    // $('.carousel-experience').owlCarousel({
    //   loop: true,
    //   margin: 45,
    //   dots: true,
    //   nav: true,
    //   smartSpeed: 1000,
    //   items: 1
    // });

    /* Carousel testimonials */
    // $('.carousel-testimonials').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   dots: false,
    //   items: 1
    // });

    //   /* Send form */
    // if ($('.js-ajax-form').length) {
    // 	$('.js-ajax-form').each(function(){
    // 		$(this).validate({
    // 			errorClass: 'error',
    // 		    submitHandler: function(form){
    // 	        	$.ajax({
    // 		            type: "POST",
    // 		            url:"mail.php",
    // 		            data: $(form).serialize(),
    // 		            success: function() {
    // 	                	$('#success-message').show();
    // 	                },

    // 	                error: function(){
    // 	                	$('#error-message').show();
    // 		            }
    // 		        });
    // 		    }
    // 		});
    // 	});
    // }

  }


  configureMetaTags() {
    // 
    this.tagsService.addTags([
      { name: 'description', content: 'Página oficial de Lupo Vidal' },
      { name: 'keywords', content: 'Lupo Vidal, Lupo, Vidal, LupoVidal, Lupo Vidal, LupoVidal.com,Lupo Vidal Oficial' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Lupo Vidal' },
      { property: 'og:title', content: 'Lupo Vidal' },
      { property: 'og:site_name', content: 'Lupo Vidal' },
      { property: 'og:image', content: 'https://yt3.googleusercontent.com/ytc/APkrFKb10aGcHbkB40GZdSfPlJ1mJuNy88FB_Rc0ivlC=s900-c-k-c0x00ffffff-no-rj' },
      { property: 'og:description', content: 'Website Oficial de Lupo Vidal' },
    ]);
  }





}
