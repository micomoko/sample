/* Angular Libs*/
import { Component, Input, OnInit, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'preview-carousel',
  templateUrl: './preview-carousel.component.html',
  styleUrls: ['./preview-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewCarouselComponent implements OnInit{

	@Input() headerLabel: string;
  @Input() projectName: string;
  @Input() items: any = [];
  @Input() name: string;

  imageToShowModal: string = '';

	/** Initialize Settings for Slick Slider.*/
    ngOnInit() {

      setTimeout(function(){

        $(".preview-slider-new").not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          autoplay: false,
          // autoplaySpeed: 2500,
          draggable: true,
          swipe: true,
          lazyLoad: 'ondemand',
          initialSlide: 0,
          speed:500,
          waitForAnimate:true,
          cssEase: 'linear',
          mobileFirst:true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }]
        });
     
    }, 0);
}

  showImageModal(src: string){
    this.imageToShowModal = src;
    this.toggleModal();
  }

  toggleModal(){
    $("#imageModal" + this.name).modal("toggle")
  }

}
