/* Angular Libs*/
import { Component, Input, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';



declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'sync-carousel',
  templateUrl: './sync-carousel.component.html',
  styleUrls: ['./sync-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SyncCarouselComponent implements OnInit{

  @Input() gallery: any;
  @Input() projectName: any;


 sample = 'slider-for';
 sample2= 'sync-slider-new';
	gradientOverlay = './assets/carousel_gradient_overlay.png';

	items: any = [];


	/** Initialize Settings for Slick Slider.*/
    ngOnInit() {

        setTimeout(function(){


          $('.slider-for').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            draggable: true,
            swipe: true,
            asNavFor: '.sync-slider-new'
          });
          $('.sync-slider-new').not('.slick-initialized').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            draggable: true,
            swipe: true
          });


        }, 0);
    }

}
