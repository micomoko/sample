/* Angular Libs*/
import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { RedirectionUtil } from 'app/shared/redirectionUtil';
import { CarouselService } from 'app/core/services/carousel.service';
import { NavigationService } from 'app/core/services/navigation.service';

declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainCarouselComponent implements OnInit{


  @Input() locationID: number;

	items: any = [];

	constructor(private redirectionUtil: RedirectionUtil, 
    private carouselService: CarouselService, private navigationService: NavigationService, private cdRef: ChangeDetectorRef){
		
	}

	/** Initialize Settings for Slick Slider.*/
    ngOnInit() {

      this.items = this.carouselService.getHeroCarousel(this.locationID);;

      setTimeout(function(){
        $('.main-slider-new').not('.slick-initialized').slick({
              dots: true,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 8000,
              fade: true,
              cssEase: 'ease-in-out',
              speed: 700
            });
      }, 0);
    }

    ngAfterViewChecked(){
      this.cdRef.detectChanges();
    }


    redirectToInner(item: any){
    	this.redirectionUtil.redirectToInner(item.locationName, item.projectName, item.projectID);
    }
}
