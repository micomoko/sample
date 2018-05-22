/* Angular Libs*/
import { Component, OnInit, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { RedirectionUtil } from 'app/shared/redirectionUtil';
import { NavigationService } from 'app/core/services/navigation.service';

declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'inner-carousel',
  templateUrl: './inner-carousel.component.html',
  styleUrls: ['./inner-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InnerCarouselComponent implements OnInit{

	 constructor(private redirectionUtil: RedirectionUtil, private navigationService: NavigationService){

  }

	gradientOverlay = './assets/carousel_gradient_overlay.png';

	item: any = {
		images : [{
					imageMobile: 'http://www.atayala.com/uploads/images/16718/the-gentry-residences-makati-condo-thumbnail-min_thumb.jpg?cb=1496041540',
				},
				{
					imageMobile: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706',
				},
				{
					imageMobile: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711',
				},
				{
					imageMobile: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706',
				}]
	};

	items: any = [
		{
			id: 1,
			projectName: 'Kroma Tower',
			description: 'Kroma Tower moves you closer to superlative metro living in the Makati Central Business District.',
			location: 'Dela Rosa Street, Makati City',
			image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/1000-BUILDING.jpg',
			category: 'Condominium',
			logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
			imageMobile: 'http://www.atayala.com/uploads/images/16718/the-gentry-residences-makati-condo-thumbnail-min_thumb.jpg?cb=1496041540',
			imageLarge : 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/header2-min-21-min.jpg',
		},
		{
			id: 2,
			projectName: 'Montala',
			description: 'Montala is a picturesque mountainside community in Pampanga. It\'s an exciting haven with an array of modern-day conveniences, fit for the eco-active lifestyle.',
			location: 'Alviera, Brgys., Hacienda Dolores and Banaba, Porac, Pampanga',
			image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/gallery5-min-17.jpg',
			category: 'Condominium',
			logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/BbcTMbIKW0BAPbHF0-min.jpg',
			imageMobile: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706',
			imageLarge : 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/header3-min-15-min.jpg',
		},
		{
			id: 3,
			projectName: 'projectName 3 Longer and Longer and Longer',
			description: 'Description 3',
			location: 'Location 3',
			image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/MG_3791-min.jpg',
			category: 'Condominium',
			logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/194-patio-suites-logo-jpeg-min.jpg',
			imageMobile: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711',
			imageLarge : 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/header2-min-21-min.jpg',
		},
		{
			id: 4,
			projectName: 'projectName 4',
			description: 'Description 4',
			location: 'Location 4',
			image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/verdana-homes-1.jpg',
			category: 'Condominium',
			logo: 'https://www.alveoland.com.ph/wp-content/uploads/2018/01/071217-OREAN-Tower-1_Full-color-Logo_FA.png',
			imageMobile: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706',
			imageLarge : 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/header1-min-32.jpg-min.jpg',
		},
		{
			id: 5,
			projectName: 'projectName 5',
			description: 'Description 5',
			location: 'Location 5',
			image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/AR-Lobby-1-min.jpg',
			category: 'Condominium',
			logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
			imageMobile: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711',
			imageLarge : 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/header3-min-15-min.jpg',
		},
		

	];

	/** Initialize Settings for Slick Slider.*/
    ngOnInit() {
        setTimeout(function(){
          $('.inner-slider-new').not('.slick-initialized').slick({
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



    redirectToInner(item: any){
    	this.redirectionUtil.redirectToInner(this.getLocationName(item.locationID), item.projectName, item.id);
    }


    getLocationName(locationID: number){

    	let index: any = this.navigationService.locations.map(function (loc) { return loc.id; }).indexOf(locationID);

    	return this.navigationService.locations[index].name;

    }

}
