import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-coming',
  templateUrl: './coming.component.html',
  styleUrls: ['./coming.component.css']
})
export class ComingComponent implements OnInit {

  ngAfterViewInit(): void {
    if ($.isFunction($.fn.fluidbox)) {
      $('a').fluidbox();
    }

    //ROUNDED TIMES COUNTDOWN

    if (this.isExists('#rounded-countdown')) {
      var remainingSec = $('.countdown').data('remaining-sec');
      $('.countdown').ClassyCountdown({
        theme: "flat-colors-very-wide",
        end: $.now() + remainingSec
      });
      console.log('rounded-countdown OKOKOKOKOKOKOKOOKOKO');
    }

    //NORMAL TIMES COUNTDOWN
    
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




    // COUNTDOWN TIME 

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

    // Circular Progress Bar

    var isAnimated = false;

  }

  ngOnInit(): void {

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
  dropdownMenu(winWidth: any) {

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


}
