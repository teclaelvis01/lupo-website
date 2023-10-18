import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-coming',
  templateUrl: './coming.component.html',
  styleUrls: ['./coming.component.css']
})
export class ComingComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {

    if ($.isFunction($.fn.fluidbox)) {
      $('a').fluidbox();
    }

    if (this.isExists('#rounded-countdown')) {
      const now = $.now();
      const endDate = new Date('2023-12-25 00:00:00');
      const endTime = endDate.getTime();
      const difference = endTime - now;


      $('.countdown').ClassyCountdown({
        theme: "flat-colors-very-wide",
        end: now + difference / 1000, // in seconds
        now: now,
        labelsOptions: {
          lang: {
            days: 'Días',
            hours: 'Horas',
            minutes: 'Minutos',
            seconds: 'Segundos'
          }
        },
        // end: $.now() + dateEnd.getTime()
        // end: dateEnd.getTime()
      });
    }

    if (this.isExists('#normal-countdown')) {
      var date = $('#normal-countdown').data('date');
      $('#normal-countdown').countdown(date, (event: any) => {
        var $this = $(this).html(event.strftime(''
          + '<div class="time-sec"><h3 class="main-time">%D</h3> <span>Days</span></div>'
          + '<div class="time-sec"><h3 class="main-time">%H</h3> <span>Hours</span></div>'
          + '<div class="time-sec"><h3 class="main-time">%M</h3> <span>Mins</span></div>'
          + '<div class="time-sec"><h3 class="main-time">%S</h3> <span>Sec</span></div>'));
      });
    }

    this.countdownTime();


    $('[data-nav-menu]').on('click', (event: any) => {

      var $this = $(this),
        visibleHeadArea = $this.data('nav-menu');

      $(visibleHeadArea).toggleClass('visible');

    });


    var winWidth = $(window).width();
    this.dropdownMenu(winWidth);

    $(window).on('resize', () => {
      this.dropdownMenu(winWidth);

    });



  }

  ngOnInit(): void {
    // change the title of the page
    document.title = "Coming Soon";
  }



  countdownTime() {

    if (this.isExists('#clock')) {
      $('#clock').countdown('2018/01/01', (event: any) => {
        var $this = $(this).html(event.strftime(''
          + '<div class="time-sec"><span class="title">%D</span> days </div>'
          + '<div class="time-sec"><span class="title">%H</span> hours </div>'
          + '<div class="time-sec"><span class="title">%M</span> minutes </div>'
          + '<div class="time-sec"><span class="title">%S</span> seconds </div>'));
      });
    }
  }

  dropdownMenu(winWidth: number) {

    if (winWidth > 767) {

      $('.main-menu li.drop-down').on('mouseover', () => {
        var $this = $(this),
          menuAnchor = $this.children('a');

        menuAnchor.addClass('mouseover');

      }).on('mouseleave', () => {
        var $this = $(this),
          menuAnchor = $this.children('a');

        menuAnchor.removeClass('mouseover');
      });

    } else {

      $('.main-menu li.drop-down > a').on('click', () => {

        if ($(this).attr('href') == '#') return false;
        if ($(this).hasClass('mouseover')) { $(this).removeClass('mouseover'); }
        else { $(this).addClass('mouseover'); }
        return false;
      });
    }

  }

  isExists(elem: any) {
    if ($(elem).length > 0) {
      return true;
    }
    return false;
  }

  // initMap() {

  // 	// Create a new StyledMapType object, passing it an array of styles,
  // 	// and the name to be displayed on the map type control.
  // 	var styledMapType = new google.maps.StyledMapType(
  // 	[
  // 		{
  // 			"featureType": "administrative",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"saturation": "-100"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "administrative.province",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"visibility": "off"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "landscape",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"saturation": -100
  // 				},
  // 				{
  // 					"lightness": 65
  // 				},
  // 				{
  // 					"visibility": "on"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "poi",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"saturation": -100
  // 				},
  // 				{
  // 					"lightness": "50"
  // 				},
  // 				{
  // 					"visibility": "simplified"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "road",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"saturation": "-100"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "road.highway",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"visibility": "simplified"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "road.arterial",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"lightness": "30"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "road.local",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"lightness": "40"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "transit",
  // 			"elementType": "all",
  // 			"stylers": [
  // 				{
  // 					"saturation": -100
  // 				},
  // 				{
  // 					"visibility": "simplified"
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "water",
  // 			"elementType": "geometry",
  // 			"stylers": [
  // 				{
  // 					"hue": "#ffff00"
  // 				},
  // 				{
  // 					"lightness": -25
  // 				},
  // 				{
  // 					"saturation": -97
  // 				}
  // 			]
  // 		},
  // 		{
  // 			"featureType": "water",
  // 			"elementType": "labels",
  // 			"stylers": [
  // 				{
  // 					"lightness": -25
  // 				},
  // 				{
  // 					"saturation": -100
  // 				}
  // 			]
  // 		}
  // 	],
  // 		{name: 'Styled Map'});

  // 	// Create a map object, and include the MapTypeId to add
  // 	// to the map type control.

  // 	var uluru = {lat: 56.946285, lng: 24.105078};
  //     var map = new google.maps.Map(document.getElementById('map'), {
  // 		zoom: 4,
  // 		center: uluru
  //     });

  // 	var image = 'images/google-marker.png';
  // 	var marker = new google.maps.Marker({
  // 		position: uluru,
  // 		map: map,
  // 		icon: image
  // 	});
  // 	//Associate the styled map with the MapTypeId and set it to display.
  // 	map.mapTypes.set('styled_map', styledMapType);
  // 	map.setMapTypeId('styled_map');
  // }



}
