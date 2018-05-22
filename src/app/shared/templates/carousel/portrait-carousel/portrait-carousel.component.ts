/* Angular Libs*/
import { Component, Input, OnInit, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { RedirectionUtil } from 'app/shared/redirectionUtil';
import { NavigationService } from 'app/core/services/navigation.service';

declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'portrait-carousel',
  templateUrl: './portrait-carousel.component.html',
  styleUrls: ['./portrait-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortraitCarouselComponent implements OnInit{

	gradientOverlay = './assets/carousel_gradient_overlay.png';

	@Input() headerLabel: any = '';

	items: any = [
		{
			id: 1,
			title: 'Kroma Tower',
			description: 'Kroma Tower moves you closer to superlative metro living in the Makati Central Business District.',
			location: 'Dela Rosa Street, Makati City',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/1000-BUILDING.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
			image: 'http://www.atayala.com/uploads/images/16718/the-gentry-residences-makati-condo-thumbnail-min_thumb.jpg?cb=1496041540'
		},
		{
			id: 2,
			title: 'Montala',
			description: 'Montala is a picturesque mountainside community in Pampanga. It\'s an exciting haven with an array of modern-day conveniences, fit for the eco-active lifestyle.',
			location: 'Alviera, Brgys., Hacienda Dolores and Banaba, Porac, Pampanga',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/gallery5-min-17.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/BbcTMbIKW0BAPbHF0-min.jpg',
			image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
		},
		{
			id: 3,
			title: 'Title 3 Longer and Longer and Longer',
			description: 'Description 3',
			location: 'Location 3',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/MG_3791-min.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/194-patio-suites-logo-jpeg-min.jpg',
			image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
		},
		{
			id: 4,
			title: 'Title 4',
			description: 'Description 4',
			location: 'Location 4',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/verdana-homes-1.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2018/01/071217-OREAN-Tower-1_Full-color-Logo_FA.png',
			image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
		},
		{
			id: 5,
			title: 'Title 5',
			description: 'Description 5',
			location: 'Location 5',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/AR-Lobby-1-min.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
			image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
		},
		

	];

   constructor(private redirectionUtil: RedirectionUtil, private navigationService: NavigationService){

  }

	/** Initialize Settings for Slick Slider.*/
    ngOnInit() {


      setTimeout(function(){

        $(".portrait-slider-new").not('.slick-initialized').slick({
          // dots: true,
          infinite: true,
          variableWidth: true,
          draggable: true,
          swipe: true,
          lazyLoad: 'ondemand',
          initialSlide: 0,
          speed:500,
          waitForAnimate:true,
          slidesToScroll: 1,
          slidesToShow: 1,
          cssEase: 'linear',
          responsive: [
          {
              breakpoint: 320,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 568,
                settings: {
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
          {
              breakpoint: 768,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
          {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            // {
            //   breakpoint: 2200,
            //   settings: {
            //     slidesToShow: 5,
            //     slidesToScroll: 4
            //   }
            // },
            // {
            //   breakpoint: 2600,
            //   settings: {
            //     slidesToShow: 6,
            //     slidesToScroll: 4
            //   }
            // }
          ]
        });
     
    }, 0);
}

    redirectToInner(item: any){
      this.redirectionUtil.redirectToInner(this.getLocationName(item.locationID), item.projectName, item.id);
    }


    getLocationName(locationID: number){

      let index: any = this.navigationService.locations.map(function (loc) { return loc.id; }).indexOf(locationID);

      return this.navigationService.locations[index].name;

    }
}
